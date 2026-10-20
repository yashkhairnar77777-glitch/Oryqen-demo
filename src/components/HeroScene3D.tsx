import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroScene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [webGLError, setWebGLError] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;

    // Check WebGL availability
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch {
      setWebGLError(true);
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Group to hold the composite 3D artifact
    const crystalGroup = new THREE.Group();
    scene.add(crystalGroup);

    // 1. Core Icosahedron with rich violet material
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x130e26,
      emissive: 0x4c1d95,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    crystalGroup.add(coreMesh);

    // 2. Outer Wireframe Cage (accentuated electric violet edges)
    const wireGeo = new THREE.IcosahedronGeometry(1.61, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xa78bfa,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    crystalGroup.add(wireMesh);

    // 3. Orbital Rings (concentric tilted rings)
    const ring1Geo = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.6
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    crystalGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.6, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xc4b5fd,
      transparent: true,
      opacity: 0.35
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    crystalGroup.add(ring2);

    // 4. Floating constellation particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xa78bfa,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Lighting rig
    const keyLight = new THREE.DirectionalLight(0xa78bfa, 2.5);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x7c3aed, 2.0);
    rimLight.position.set(-5, -3, -4);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0x181824, 1.2);
    scene.add(ambientLight);

    // Interaction State
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };
    let isDragging = false;
    let prevPointer = { x: 0, y: 0 };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevPointer = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) {
        // Subtle hover response
        const rect = container.getBoundingClientRect();
        const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetRotation.y += normX * 0.01;
        targetRotation.x += normY * 0.01;
        return;
      }

      const deltaX = e.clientX - prevPointer.x;
      const deltaY = e.clientY - prevPointer.y;
      prevPointer = { x: e.clientX, y: e.clientY };

      targetRotation.y += deltaX * 0.012;
      targetRotation.x += deltaY * 0.012;
    };

    const handlePointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    const domElement = renderer.domElement;
    domElement.style.touchAction = 'none';
    domElement.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Render loop
    let lastTime = performance.now();
    const animate = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Auto-rotation when idle
      if (!isDragging) {
        targetRotation.y += 0.35 * dt;
        targetRotation.x += 0.15 * dt * Math.sin(time * 0.001);
      }

      // Exponential damping for smooth physics
      currentRotation.x = THREE.MathUtils.damp(currentRotation.x, targetRotation.x, 8, dt);
      currentRotation.y = THREE.MathUtils.damp(currentRotation.y, targetRotation.y, 8, dt);

      crystalGroup.rotation.x = currentRotation.x;
      crystalGroup.rotation.y = currentRotation.y;

      ring1.rotation.z += 0.4 * dt;
      ring2.rotation.z -= 0.3 * dt;
      particles.rotation.y += 0.08 * dt;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      domElement.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);

      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, []);

  if (webGLError) {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <div className="relative w-64 h-64 rounded-2xl bg-gradient-to-tr from-violet-950/40 via-purple-900/20 to-neutral-900 border border-violet-500/30 flex items-center justify-center shadow-2xl">
          <div className="w-32 h-32 rounded-full bg-violet-600/20 blur-2xl" />
          <div className="relative text-center p-4">
            <span className="text-xs uppercase tracking-widest text-violet-400 font-semibold block mb-1">ORYQEN CORE</span>
            <p className="text-xs text-neutral-400">Cinematic Spatial Identity</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] bg-violet-600/15 rounded-full blur-[90px]" />
      </div>

      {/* WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        aria-label="Interactive 3D Geometric Crystal Sculpture"
      />

      {/* Subtle interaction micro-hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-300">
        <span className={`text-[11px] font-medium tracking-wider uppercase px-3 py-1 rounded-full border border-violet-500/20 bg-neutral-950/80 backdrop-blur-sm ${isInteracting ? 'text-violet-300 border-violet-400/40' : 'text-neutral-400'}`}>
          {isInteracting ? 'Inspecting 3D Core' : 'Drag or swipe to rotate'}
        </span>
      </div>
    </div>
  );
};
