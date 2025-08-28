'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-black"></div>
      <div className="absolute inset-0 opacity-[0.02] bg-grid-white/[0.2]"></div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-start justify-center px-4 sm:px-6 md:px-8 relative z-10 pt-[15vh] sm:pt-[20vh]">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
            {/* Left Column - Text Content */}
            <div className="text-center space-y-8 sm:space-y-10">
              <div className="space-y-6 sm:space-y-8">
                <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-space-grotesk font-bold leading-[0.9] tracking-tight text-white">
                  Embodied AI Club
                </h1>
                
                <p className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter font-light text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Solving robotics' data problem through collaborative VLA model development
                </p>
              </div>
              
              <div className="hero-partnership space-y-2 sm:space-y-2 text-center">
                <p className="text-xs sm:text-sm font-inter text-gray-500 uppercase tracking-wider">
                  In collaboration with
                </p>
                <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-space-grotesk font-medium text-white">
                    Cortex AI
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img 
                      src="/yc.webp" 
                      alt="Y Combinator" 
                      className="h-4 sm:h-5 lg:h-6" 
                    />
                    <span className="text-base sm:text-lg font-inter text-gray-400 leading-none">
                      backed company
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
                <button className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 font-inter font-medium text-base sm:text-lg rounded-none hover:bg-gray-100 transition-colors">
                  Join the Club
                </button>
                <button className="border border-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 font-inter font-medium text-base sm:text-lg rounded-none hover:border-gray-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Right Column - Video */}
            <div className="hero-video flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-md">
                <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-900" style={{ aspectRatio: '9/16' }}>
                  {/* YouTube Embed - High Quality Autonomous Box Folding */}
                  <iframe
                    src="https://www.youtube.com/embed/MY-_ehZJ884?autoplay=1&mute=1&loop=1&playlist=MY-_ehZJ884&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&hl=en&color=white&autohide=0"
                    title="Autonomous Box Folding Demonstration"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen={false}
                    className="w-full h-full rounded-2xl"
                    style={{
                      border: 'none',
                      outline: 'none',
                      backgroundColor: '#000'
                    }}
                  />
                  
                  {/* Fallback to MP4 if YouTube fails - Comment out when YouTube is ready */}
                  {/* 
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-contain rounded-2xl"
                    style={{ 
                      backgroundColor: '#000',
                      imageRendering: 'crisp-edges'
                    }}
                  >
                    <source src="/videos/Autonomous Box Folding SO-101 1x Speed.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-cue absolute bottom-12 left-1/2 transform -translate-x-1/2 relative">
          <div className="w-6 h-10 border-2 border-[#00c2ff] rounded-full flex justify-center bg-gradient-to-b from-transparent to-[#00c2ff]/20">
            <div className="w-1 h-3 bg-[#00c2ff] rounded-full mt-2 shadow-lg shadow-[#00c2ff]/50"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 px-6 relative border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-medium text-white mb-8">
            Our Mission
          </h2>
          <div className="text-lg md:text-xl font-inter text-gray-300 leading-relaxed space-y-6">
            <p>
              The Embodied AI Club, in collaboration with Cortex AI, a Y Combinator-backed company, gives students hands-on experience at the intersection of AI and robotics.
            </p>
            <p>
              We focus on remote robot control (teleoperation), data cleaning and training Vision-Language-Action (VLA) models, and 3D simulations—all aimed at building better datasets and making advanced technology more inclusive and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-title text-5xl md:text-6xl font-space-grotesk font-light mb-6">
              What We Do
            </h2>
            <div className="flex justify-center">
              <div className="premium-divider"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors">
              <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center mb-6">
                <div className="text-2xl">🎮</div>
              </div>
              <h3 className="text-xl font-space-grotesk font-medium text-white mb-4">
                Remote Robot Control
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed">
                Learn teleoperation techniques to control robotic arms remotely, generating valuable training data for VLA models
              </p>
            </div>
            
            <div className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors">
              <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center mb-6">
                <div className="text-2xl">🤖</div>
              </div>
              <h3 className="text-xl font-space-grotesk font-medium text-white mb-4">
                VLA Model Training
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed">
                Train Vision-Language-Action models using quality datasets to enable autonomous robotic behavior and decision-making
              </p>
            </div>
            
            <div className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors">
              <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center mb-6">
                <div className="text-2xl">🔧</div>
              </div>
              <h3 className="text-xl font-space-grotesk font-medium text-white mb-4">
                Data Cleaning & Research
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed">
                Research and implement effective methods to clean datasets and improve training efficiency for better robotic performance
              </p>
            </div>
            
            <div className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors">
              <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center mb-6">
                <div className="text-2xl">🌐</div>
              </div>
              <h3 className="text-xl font-space-grotesk font-medium text-white mb-4">
                3D Simulations
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed">
                Develop and work with 3D simulation environments to test robotic behaviors before real-world deployment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 px-6 relative border-t border-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-medium text-white mb-8">
              Solving Robot Accessibility
            </h2>
            
            <p className="font-inter text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              The biggest challenge in making robots accessible is their lack of smooth, reliable operation in real-world environments. This stems from insufficient high-quality datasets needed to train robots effectively. Our collaboration with Cortex AI addresses this core problem through innovative VLA model training that makes robots more capable with less data.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-space-grotesk font-medium text-white mb-2">Quality Over Quantity</h3>
                <p className="text-gray-400 font-inter">Reduce dataset size requirements while improving robot performance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-space-grotesk font-medium text-white mb-2">Industry Experience</h3>
                <p className="text-gray-400 font-inter">Observe humanoid training and operations at a robotics company</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-space-grotesk font-medium text-white mb-2">Future-Ready Skills</h3>
                <p className="text-gray-400 font-inter">Prepare for careers in the rapidly growing robotics industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 relative border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-medium text-white mb-6">
            Get Involved
          </h2>
          <p className="font-inter text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
            Ready to advance robotic accessibility through VLA research? Join our community working on the future of embodied AI.
          </p>
          
          <div className="text-xl font-inter font-bold text-white">
            26hongyiw@sais.edu.sg
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 relative border-t border-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <h4 className="text-lg font-space-grotesk font-medium text-white mb-2">
              Embodied AI Club
            </h4>
            <p className="text-gray-400 font-inter text-sm max-w-xl mx-auto">
              Making advanced robotics accessible through innovative VLA research and hands-on learning
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
          <p className="font-inter text-gray-500 text-sm">
            © 2025 Embodied AI Club. Shaping the future of robotics through collaboration.
          </p>
        </div>
      </footer>
    </div>
  );
}