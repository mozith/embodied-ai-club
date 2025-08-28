export default function Home() {
  return (
    <div className="min-h-screen premium-gradient-bg relative overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="floating-orb floating-orb-1"></div>
      <div className="floating-orb floating-orb-2"></div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="hero-title text-6xl md:text-8xl font-space-grotesk font-light mb-8 leading-tight tracking-tight">
              Embodied AI Club
            </h1>
            
            <div className="flex justify-center mb-6">
              <div className="premium-divider"></div>
            </div>
          </div>
          
          <p className="hero-subtitle text-xl md:text-3xl font-inter font-light mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Advancing the frontier of robotic cognition through hands-on projects in collaboration with Cortex AI
          </p>
          
          <div className="hero-partners glass-card rounded-2xl p-6 mb-12 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <span className="text-lg font-inter font-light text-gray-300">In collaboration with</span>
              <div className="accent-glow">
                <div className="text-3xl font-space-grotesk font-semibold bg-gradient-to-r from-[#00c2ff] to-[#9333ea] bg-clip-text text-transparent">
                  Cortex AI
                </div>
              </div>
              <span className="text-sm glass-card px-4 py-2 rounded-full text-gray-200 font-medium">
                Y Combinator Company
              </span>
            </div>
          </div>
          
          <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary px-10 py-4 text-black font-inter font-semibold rounded-xl text-lg">
              Join the Club
            </button>
            <button className="btn-secondary px-10 py-4 text-white font-inter font-semibold rounded-xl text-lg">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="scroll-cue absolute bottom-12 left-1/2 transform -translate-x-1/2 relative">
          <div className="w-6 h-10 border-2 border-[#00c2ff] rounded-full flex justify-center bg-gradient-to-b from-transparent to-[#00c2ff]/20">
            <div className="w-1 h-3 bg-[#00c2ff] rounded-full mt-2 shadow-lg shadow-[#00c2ff]/50"></div>
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
            <div className="stagger-1 glass-card glass-card-hover rounded-2xl p-8 group">
              <div className="accent-glow mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00c2ff] to-[#0ea5e9] rounded-2xl flex items-center justify-center">
                  <div className="text-2xl">🤖</div>
                </div>
              </div>
              <h3 className="text-2xl font-space-grotesk font-semibold mb-4 bg-gradient-to-r from-[#00c2ff] to-white bg-clip-text text-transparent">
                Robotic Manipulation
              </h3>
              <p className="font-inter font-light text-gray-300 leading-relaxed text-lg">
                Control systems & tactile feedback for precise robotic interactions with the physical world
              </p>
            </div>
            
            <div className="stagger-2 glass-card glass-card-hover rounded-2xl p-8 group">
              <div className="accent-glow mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9333ea] to-[#c084fc] rounded-2xl flex items-center justify-center">
                  <div className="text-2xl">🧠</div>
                </div>
              </div>
              <h3 className="text-2xl font-space-grotesk font-semibold mb-4 bg-gradient-to-r from-[#9333ea] to-white bg-clip-text text-transparent">
                Machine Learning Analytics
              </h3>
              <p className="font-inter font-light text-gray-300 leading-relaxed text-lg">
                Perception & decision-making algorithms that enable intelligent robotic behavior
              </p>
            </div>
            
            <div className="stagger-3 glass-card glass-card-hover rounded-2xl p-8 group">
              <div className="accent-glow mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] rounded-2xl flex items-center justify-center">
                  <div className="text-2xl">📊</div>
                </div>
              </div>
              <h3 className="text-2xl font-space-grotesk font-semibold mb-4 bg-gradient-to-r from-[#0ea5e9] to-white bg-clip-text text-transparent">
                Data Engineering
              </h3>
              <p className="font-inter font-light text-gray-300 leading-relaxed text-lg">
                High-fidelity datasets for training robust machine learning models
              </p>
            </div>
            
            <div className="stagger-4 glass-card glass-card-hover rounded-2xl p-8 group">
              <div className="accent-glow mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-2xl flex items-center justify-center">
                  <div className="text-2xl">🌐</div>
                </div>
              </div>
              <h3 className="text-2xl font-space-grotesk font-semibold mb-4 bg-gradient-to-r from-[#f59e0b] to-white bg-clip-text text-transparent">
                Virtual Environments
              </h3>
              <p className="font-inter font-light text-gray-300 leading-relaxed text-lg">
                Photorealistic simulation & digital twins for safe robotic development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 px-6 relative">
        <div className="glass-card rounded-3xl p-12 max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="section-title text-4xl md:text-5xl font-space-grotesk font-light mb-8">
              Powered by Industry Partnership
            </h2>
            
            <div className="flex justify-center mb-8">
              <div className="premium-divider"></div>
            </div>
            
            <p className="font-inter font-light text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our collaboration with Cortex AI, a Y Combinator-backed robotics company, provides students with 
              real-world experience in cutting-edge robotic technologies and direct access to industry mentorship.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00c2ff] to-[#0ea5e9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-space-grotesk font-semibold text-white mb-2">Real Projects</h3>
                <p className="text-gray-300 font-inter">Work on industry-relevant challenges</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#9333ea] to-[#c084fc] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-xl font-space-grotesk font-semibold text-white mb-2">Mentorship</h3>
                <p className="text-gray-300 font-inter">Direct guidance from industry experts</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-space-grotesk font-semibold text-white mb-2">Career Growth</h3>
                <p className="text-gray-300 font-inter">Pathways to robotics careers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-4xl md:text-5xl font-space-grotesk font-light mb-8">
            Get Involved
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="premium-divider"></div>
          </div>
          
          <p className="font-inter font-light text-xl text-gray-200 mb-16 leading-relaxed max-w-3xl mx-auto">
            Ready to shape the future of robotics? Join our community of innovators and researchers.
          </p>
          
          <div className="glass-card rounded-2xl p-8 mb-12">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn-primary px-12 py-4 text-black font-inter font-semibold rounded-xl text-lg min-w-[200px]">
                Apply Now
              </button>
              <button className="btn-secondary px-12 py-4 text-white font-inter font-semibold rounded-xl text-lg min-w-[200px]">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="glass-card rounded-xl p-6">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-space-grotesk font-medium text-white mb-1">Email</h3>
              <p className="text-gray-300 font-inter text-sm">contact@embodiedai.club</p>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="text-2xl mb-2">💬</div>
              <h3 className="font-space-grotesk font-medium text-white mb-1">Discord</h3>
              <p className="text-gray-300 font-inter text-sm">Join our community</p>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-space-grotesk font-medium text-white mb-1">Location</h3>
              <p className="text-gray-300 font-inter text-sm">Campus & Remote</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 relative">
        <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="premium-divider"></div>
            </div>
            <p className="font-inter font-light text-gray-300 text-lg mb-4">
              Built with ❤️ by the Embodied AI Club team
            </p>
            <p className="font-inter font-light text-gray-500 text-sm">
              © 2025 Embodied AI Club. Advancing robotic cognition through collaboration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}