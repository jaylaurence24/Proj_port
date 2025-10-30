import { useState, useEffect } from 'react';
import { Gamepad2, Code, Palette, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgzNyw5OSwxOTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
            JLA
          </div>
          <div className="flex gap-6">
            {['Home', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`hover:text-blue-400 transition-colors duration-300 relative group ${
                  activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className={`min-h-screen flex items-center justify-center relative transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="overflow-hidden">
              <h1
                className="text-6xl md:text-7xl font-bold mb-4 animate-slide-in"
                style={{ animation: 'slideIn 0.8s ease-out forwards' }}
              >
                <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  Jay Laurence
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  Aquito
                </span>
              </h1>
            </div>
            <p className="text-xl text-blue-200 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Game Developer & Digital Artist
            </p>
            <p className="text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Crafting immersive gaming experiences with GoDot engine and bringing visions to life through digital artistry.
            </p>
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <button
                onClick={() => setActiveSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className="px-8 py-3 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="relative group animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50"></div>
            <div className="relative overflow-hidden rounded-2xl border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300">
              <img
                src="/user.png"
                alt="Jay Laurence Aquito"
                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Featured Project
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300">
                <img
                  src="/work-2.png"
                  alt="Everafter Project"
                  className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold">
                Game Development
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Everafter
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                An immersive gaming experience crafted with passion and precision. Everafter showcases the perfect blend of storytelling and gameplay mechanics, built from the ground up using industry-leading tools.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Gamepad2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">GoDot Engine</p>
                    <p className="text-sm text-gray-400">Powerful game development framework</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Palette className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Krita</p>
                    <p className="text-sm text-gray-400">Professional digital art creation</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Custom Systems</p>
                    <p className="text-sm text-gray-400">Unique gameplay mechanics</p>
                  </div>
                </div>
              </div>

              <a
                href="https://ever-after.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 mt-6"
              >
                View Project
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 relative"
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Interested in collaborating or learning more about my work? Reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:jay@example.com"
              className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:border-blue-500 hover:bg-slate-800/80 transition-all duration-300 group hover:scale-105"
            >
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
              <p className="font-semibold text-white">Email</p>
              <p className="text-sm text-gray-400 mt-2">Get in touch via email</p>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:border-blue-500 hover:bg-slate-800/80 transition-all duration-300 group hover:scale-105"
            >
              <Github className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
              <p className="font-semibold text-white">GitHub</p>
              <p className="text-sm text-gray-400 mt-2">Check out my repositories</p>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:border-blue-500 hover:bg-slate-800/80 transition-all duration-300 group hover:scale-105"
            >
              <Linkedin className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
              <p className="font-semibold text-white">LinkedIn</p>
              <p className="text-sm text-gray-400 mt-2">Connect professionally</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-blue-500/20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Jay Laurence Aquito. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
