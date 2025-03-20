import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Mail, Building2, Calendar, FileText, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Harsh Jha
            </h1>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            <div className={`${isMenuOpen ? 'absolute top-full left-0 right-0 bg-gray-900 p-4 md:relative md:bg-transparent md:p-0' : 'hidden'} md:block`}>
              <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
                {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Programming Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Harsh Jha
              </span>
            </h1>
            <h2 className="text-4xl font-bold mb-6 animate-slide-up">
              Full Stack Web2 & Web3 Developer
            </h2>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              Passionate about building modern web applications and blockchain solutions. 
              Experienced in both traditional and decentralized technologies.
            </p>
            {/* <div className="flex justify-center gap-6 animate-bounce-in">
              <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                <FileText className="w-5 h-5" />
                View Resume
              </a>
              <a href="/path-to-your-cv.pdf" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
                <FileText className="w-5 h-5" />
                View CV
              </a>
            </div> */}
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/80">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
      About Me
    </h2>
    
    <div className="grid md:grid-cols-2 gap-16">
      {/* Left Column: Introduction */}
      <div>
        <p className="text-lg text-gray-300 mb-6">
          I am a passionate Full Stack Developer specializing in both Web2 and Web3 technologies. 
          With expertise in modern web development practices, I strive to write faster, reliable, and sustainable code.
          My journey has led me to work on a variety of cutting-edge projects, using a combination of traditional and decentralized tech stacks.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          My focus is on delivering scalable, efficient, and well-documented solutions. I prioritize code quality and maintainability to ensure that long-term development is smooth and bug-free.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          In addition to my technical skills, I’m also passionate about designing intuitive user interfaces that not only look great but are easy to navigate.
        </p>
      </div>
      
      {/* Right Column: Skills & Abilities */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <svg className="w-8 h-8 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l-5 5 5 5M6 12h12" />
          </svg>
          <div>
            <h3 className="text-xl font-semibold text-white">Design Skills</h3>
            <p className="text-gray-300">UI/UX design, Figma, Adobe XD, Responsive Design, Prototyping</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <svg className="w-8 h-8 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10l5-5 5 5M7 15l5 5 5-5" />
          </svg>
          <div>
            <h3 className="text-xl font-semibold text-white">Coding Abilities</h3>
            <p className="text-gray-300">Faster, reliable, and sustainable code. Clean architecture, SOLID principles, Test-driven development (TDD), Agile methodology.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <svg className="w-8 h-8 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9l3 3-3 3M13 9l3 3-3 3" />
          </svg>
          <div>
            <h3 className="text-xl font-semibold text-white">Performance & Scalability</h3>
            <p className="text-gray-300">Optimizing performance for both frontend and backend. Building scalable applications with Node.js, React, and decentralized technologies like Ethereum and Solidity.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Skills Section (Visualized) */}
  
  </div>
</section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="grid gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <Building2 className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold">Kitaabwala.com</h3>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>Duration of Work</span>
              </div>
              <p className="text-gray-300">
                Contributed to the development and maintenance of the e-commerce platform.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <Building2 className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold">SwiftIt Seva Multi Utility Pvt.Ltd</h3>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>Duration of Work</span>
              </div>
              <p className="text-gray-300">
                Contributed to startup operations and development initiatives.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <Building2 className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold">GAO Tek</h3>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>Internship Period</span>
              </div>
              <p className="text-gray-300">
                Gained valuable industry experience through internship program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
    {/* section */}
    <div className="bg-black">
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Live & Non-live Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
     
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
             
                <img src={"/images/AluminiFunding.png"}/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3>Non-Live Project</h3>
                        <h3 className="text-2xl font-bold text-white">Alumini Fund Transfer</h3>
                        <p className="text-white">Discover the Power of Blockchain</p>
                    </div>
                </div>
            </div>

              <a href={"http://kitabwalah.vercel.app"}>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img src={"/images/bookwala.png"}/>
            
               
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4>Live Project</h4>
                        <h4 className="text-xl font-bold text-white">Book Selling Website</h4>
                    </div>
                </div>
            </div>
            </a>
            <a href="https://fund-transfer-delta.vercel.app/">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/images/fund-transfer.png"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h1>Live Project</h1>
                        <h4 className="text-xl font-bold text-white">Crypto-Transfer</h4>
                    </div>
                </div>
            </div>
            </a>

          <a href="http://ai-interview-nu.vercel.app">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/images/AI-interview.jpg"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h1>Live Project</h1>
                        <h4 className="text-xl font-bold text-white">Travel Adventures</h4>
                    </div>
                </div>
            </div>
            </a>
            <a href="https://github.com/codewithharshjha/SearchService">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/images/SearchService.png"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h1>Non Live Project</h1>
                        <h4 className="text-xl font-bold text-white">Search_Service</h4>
                    </div>
                </div>
            </div>
            </a>

    <a href="https://github.com/codewithharshjha/WebsiteCreator">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/images/websitebuilder.png"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h1>Non-Live Project</h1>
                        <h4 className="text-xl font-bold text-white">Website-Creator</h4>
                    </div>
                </div>
            </div></a>
         <a href="https://github.com/codewithharshjha/NFTMarketplace">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/images/nftmarketplace.png" alt="Sport" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h1>Non-Live Project</h1>
                        <h4 className="text-xl font-bold text-white">Nft-MarketPlace</h4>
                    </div>
                </div>
            </div>
            </a> 
            <a href="https://github.com/codewithharshjha/social-media/tree/master">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/images/Thread.jpg"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h1>Non-Live Project</h1>
                        <h4 className="text-xl font-bold text-white">Thread-SocialMedia</h4>
                    </div>
                </div>
            </div>
            </a>
            <a href="https://github.com/codewithharshjha/e-commerce/tree/master">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/images/e-commerce.jpeg"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h1>Non-Live Project</h1>
                        <h4 className="text-xl font-bold text-white">E-commerce</h4>
                    </div>
                </div>
            </div>
            </a>
        </div>
    </div>
</div>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Technologies & Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'React', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png' },
              { name: 'Next.js', image: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png' },
              { name: 'MongoDB', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png' },
              { name: 'PostgreSQL', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png' },
              { name: 'Docker', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png' },
              { name: 'TypeScript', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png' },
              { name: 'JavaScript', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png' },
              { name: 'Node.js', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png' },
              { name: 'Ethereum', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ethereum/ethereum.png' },
              { name: 'Solidity', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/solidity/solidity.png' },
              { name: 'GitHub', image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
              { name: 'Hardhat', image: 'https://hardhat.org/_next/static/media/hardhat-logo.5c5f687b.svg' },
            ].map((tech, index) => (
              <div key={tech.name} 
                   className="flex flex-col items-center p-4 bg-gray-800 rounded-lg transform hover:-translate-y-2 transition-all"
                   style={{ animationDelay: `${index * 100}ms` }}>
                <img src={tech.image} alt={tech.name} className="w-16 h-16 object-contain mb-4" />
                <span className="text-center font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-xl mx-auto bg-gray-800 rounded-lg p-8">
            <p className="text-center text-gray-300 mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/codewithharshjha" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                <Github className="w-6 h-6" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/harsh-jha-058793275" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
              <a href="hjha3987@gmail.com"
                 className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                <Mail className="w-6 h-6" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2024 Harsh Jha. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;