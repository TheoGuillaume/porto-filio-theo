import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Linkedin, MapPin, Calendar, ExternalLink, Code, Database, Server, Smartphone, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['Node.js', 'PHP', 'JavaScript', 'TypeScript', 'Java'],
    frameworks: ['Next.js', 'Symfony', 'NestJS', 'Express', 'Laravel', 'Angular'],
    databases: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB'],
    tools: ['Git', 'Docker', 'Prisma', 'IntelliJ', 'Vercel', 'Maven'],
    other: ['API REST', 'GraphQL', 'Agile/SCRUM']
  };

  const experiences = [
    {
      title: "Développeur Fullstack – Freelance",
      company: "ADRWARE CONSULTING",
      period: "03/2024 – 08/2025",
      location: "Antananarivo",
      description: "Intervention sur un logiciel BTP (Scoplan) avec architecture modulaire. Implémentation de nouvelles fonctionnalités métiers sur React Js et Symfony.",
      highlights: ["Architecture modulaire", "React Js & Symfony", "Assurance qualité", "Supervision technique"]
    },
    {
      title: "Développeur Fullstack",
      company: "Economic Development Board of Madagascar (EDBM)",
      period: "06/2024 – 06/2025",
      location: "Antananarivo",
      description: "Développement de deux applications web critiques pour l'État malgache avec Next Js et Node js.",
      highlights: ["Applications critiques d'État", "Documentation technique", "Tests unitaires", "Équipe agile"]
    },
    {
      title: "Développeur Fullstack",
      company: "HAY4TECH",
      period: "01/2022 – 12/2023",
      location: "Antananarivo",
      description: "Conception d'applications web de gestion de restauration et mobile de vente en ligne.",
      highlights: ["Node.js & React", "Application mobile", "Gestion restauration", "Transformation numérique"]
    },
    {
      title: "Développeur",
      company: "OPTIMADA",
      period: "01/2021 – 11/2021",
      location: "Antananarivo",
      description: "Développement et maintenance d'applications web de gestion RH.",
      highlights: ["Gestion de présence", "Planning et congés", "Applications RH", "SAGE Business Partner"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Guillaume Theo
            </h1>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="hover:text-blue-400 transition-colors capitalize"
                >
                  {section === 'hero' ? 'Accueil' : section === 'about' ? 'À propos' : section === 'experience' ? 'Expérience' : section === 'skills' ? 'Compétences' : 'Contact'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="text-center z-10 px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Guillaume Theo
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">
              Développeur Fullstack
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Symfony • React js • Node.js • 4+ ans d'expérience
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('experience')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold"
            >
              Voir mon expérience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-white/20 rounded-full hover:bg-white/10 transition-all transform hover:scale-105 font-semibold"
            >
              Me contacter
            </button>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Développeur fullstack JavaScript avec plus de 4 ans d'expérience dans la conception 
                d'applications web modernes. Spécialisé en Node.js, PHP Symfony, Angular et TypeScript.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Je conçois des interfaces performantes et des APIs robustes dans des environnements agiles. 
                Rigoureux, autonome et orienté produit, je maîtrise les bases de données relationnelles 
                et NoSQL, les tests, et la qualité du code.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <MapPin className="w-5 h-5" />
                  <span>Antananarivo, Madagascar</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Calendar className="w-5 h-5" />
                  <span>4+ ans d'expérience</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Formation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-400">Master MBDS</h4>
                  <p className="text-gray-300">Mobilité, BDD, Intégration de systèmes</p>
                  <p className="text-sm text-gray-400">IT University • 2022-2024</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400">Licence</h4>
                  <p className="text-gray-300">Développement d'applications</p>
                  <p className="text-sm text-gray-400">IT University • 2018-2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Expérience Professionnelle
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform transition-all duration-500 hover:scale-102 hover:bg-white/10 ${
                  isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-purple-400 mb-2">{exp.company}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300 border border-blue-500/30"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 text-right">
                    <div className="text-gray-400">{exp.period}</div>
                    <div className="flex items-center justify-end gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold">Langages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300 border border-blue-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold">Bases de données</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-green-500/20 rounded-full text-sm text-green-300 border border-green-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold">Outils</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-orange-500/20 rounded-full text-sm text-orange-300 border border-orange-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl font-bold">Autres compétences</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-pink-500/20 rounded-full text-sm text-pink-300 border border-pink-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Prêt à discuter de votre prochain projet ? N'hésitez pas à me contacter !
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="tel:034683516"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 group"
            >
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <p className="text-gray-400">034 68 351 68</p>
            </a>
            
            <a
              href="mailto:guillaumetheo92@gmail.com"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 group"
            >
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400">guillaumetheo92@gmail.com</p>
            </a>
            
            <a
              href="https://linkedin.com/in/guillaume-theo-246a41245"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 group"
            >
              <Linkedin className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 flex items-center justify-center gap-1">
                Profil LinkedIn <ExternalLink className="w-4 h-4" />
              </p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 mb-4">
              Disponible pour des missions freelance et des opportunités à temps plein
            </p>
            <p className="text-gray-400">
              <MapPin className="w-4 h-4 inline mr-2" />
              Andoharanofotsy Mandromena, Antananarivo
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Guillaume Theo. Développeur Fullstack passionné.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;