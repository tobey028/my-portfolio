import React from 'react';
import { Canvas } from '@react-three/fiber';
import Button from '../components/Button';
import Particles from '../components/particles'; // Import your existing Particles component

// Simple SVG icons to avoid dependency issues
const Instagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Linkedin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Dribbble = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
  </svg>
);

// Particles component for Three.js - REMOVED (using external component instead)
// Note: Update your particles.jsx file to have wider distribution:
// Change the position ranges from (Math.random() - 0.5) * 10 to (Math.random() - 0.5) * 25
// This will spread particles across the full screen width

const Hero = () => {
  console.log("Hero component is loading..."); // Debug log
  
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Navigation - Force absolute positioning */}
      <div className="absolute top-0 left-0 w-full z-50" style={{ position: 'absolute !important' }}>
        <nav className="navbar not-scrolled" style={{ position: 'relative' }}>
          <div className="inner max-w-7xl mx-auto">
            <div className="logo text-cyan-400">LOGO</div>
            
            <nav className="desktop">
              <ul>
                <li className="group">
                  <span className="text-cyan-400">Home</span>
                  <div className="underline bg-cyan-400"></div>
                </li>
                <li className="group">
                  <span className="text-blue-50 hover:text-cyan-400">Services</span>
                  <div className="underline bg-cyan-400"></div>
                </li>
                <li className="group">
                  <span className="text-blue-50 hover:text-cyan-400">About me</span>
                  <div className="underline bg-cyan-400"></div>
                </li>
                <li className="group">
                  <span className="text-blue-50 hover:text-cyan-400">Contact me</span>
                  <div className="underline bg-cyan-400"></div>
                </li>
              </ul>
            </nav>
            
            <a 
              href="#contact" 
              className="contact-btn group"
            >
              <div className="inner bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700">
                <span className="text-white">Let's Talk</span>
              </div>
            </a>
          </div>
        </nav>
      </div>

      {/* Particle Background - Full window coverage */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <Particles count={300} />
        </Canvas>
      </div>

      {/* Main Content - Properly centered */}
      <div className="hero-layout">
        <div className="padding-x-lg w-full max-w-7xl mx-auto relative z-10">
          <div className="grid-2-cols items-center gap-10 xl:gap-20">
            
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 order-2 xl:order-1">
              <div className="space-y-4">
                <div className="hero-badge bg-black-200 text-blue-50">
                  Hi I am
                </div>
                <h1 className="text-white-50 text-3xl md:text-4xl xl:text-5xl font-light">
                  Mahmood Fazile
                </h1>
                <div className="hero-text">
                  <h2 className="text-4xl md:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent leading-tight">
                    UI/UX designer
                  </h2>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="card-border size-12 md:size-14 rounded-full flex-center text-blue-50 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <Instagram />
                </a>
                <a 
                  href="#" 
                  className="card-border size-12 md:size-14 rounded-full flex-center text-blue-50 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <Linkedin />
                </a>
                <a 
                  href="#" 
                  className="card-border size-12 md:size-14 rounded-full flex-center text-blue-50 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <Dribbble />
                </a>
                <a 
                  href="#" 
                  className="card-border size-12 md:size-14 rounded-full flex-center text-blue-50 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-50 rounded hover:bg-cyan-400 transition-colors duration-300"></div>
                </a>
              </div>

              {/* CTA Button - Using your Button component */}
              <div className="flex">
                <Button 
                  text="Download CV" 
                  className=""
                  id="download-cv"
                />
              </div>

              {/* Animated Stats */}
              <div className="grid-3-cols-md-tight pt-6 md:pt-8 border-t border-black-50">
                <div className="text-center md:text-left transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">5+</div>
                  <div className="text-blue-50 text-sm md:text-base group-hover:text-white-50 transition-colors duration-300">Experiences</div>
                </div>
                <div className="text-center md:text-left transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">20+</div>
                  <div className="text-blue-50 text-sm md:text-base group-hover:text-white-50 transition-colors duration-300">Project done</div>
                </div>
                <div className="text-center md:text-left transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">80+</div>
                  <div className="text-blue-50 text-sm md:text-base group-hover:text-white-50 transition-colors duration-300">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image Area */}
            <div className="relative order-1 xl:order-2">
              <div className="aspect-square max-w-sm md:max-w-md xl:max-w-lg mx-auto relative">
                {/* Main profile container */}
                <div className="w-full h-full card-border rounded-2xl flex-center relative overflow-hidden">
                  {/* Profile image placeholder */}
                  <div className="text-blue-50 text-center p-8">
                    <div className="w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 bg-black-200 rounded-full mx-auto mb-4 border border-black-50"></div>
                    <p className="text-sm md:text-base">Your Profile Image</p>
                  </div>
                  
                  {/* Animated background overlay */}
                  <div className="tech-card-animated-bg"></div>
                </div>
                
                {/* Decorative floating elements */}
                <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-cyan-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-8 h-8 md:w-12 md:h-12 border-2 border-cyan-400 rounded-full animate-bounce"></div>
                
                {/* Gradient glow effect */}
                <div className="glow">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black-100 to-black-200 opacity-95 -z-10"></div>
    </section>
  );
};

export default Hero;