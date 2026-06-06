"use client";

import { useState, useEffect } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "Hospital Management System",
      tech: "HTML, CSS, PHP, MySQL",
      description:
        "Developed a hospital management system for managing patient records, appointments, doctor schedules, and hospital operations.",
    },
    {
      title: "Password Strength Analysis",
      tech: "Python",
      description:
        "Built a password security analyzer that evaluates password strength and provides recommendations to improve security awareness.",
    },
    {
      title: "Text-to-Image Synthesis for Improved Image Captioning",
      tech: "Python, Streamlit, COCO Dataset, Deep Learning",
      description:
        "Developed an AI-powered image captioning system integrated with text-to-image synthesis using machine learning techniques.",
    },
  ];

  const skills = [
    { name: "Front-End Development", level: 90 },
    { name: "HTML/CSS", level: 90 },
    { name: "Java", level: 80 },
    { name: "Python", level: 80 },
    { name: "DevOps", level: 75 },
    { name: "UI/UX Design", level: 70 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />

        <div
          className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * -0.01
            }px)`,
          }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isLoaded
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="backdrop-blur-md bg-white/10 border-b border-white/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Surya P
              </div>

              <div className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeSection === item.id
                        ? "text-blue-400"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* HOME */}
      {activeSection === "home" && (
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <div className="w-36 h-36 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto p-1 mb-8">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl font-bold">
                SP
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Surya P
            </h1>

            <p className="text-2xl text-white/80 mt-6">
              Front-End Developer | DevOps Enthusiast
            </p>

            <p className="text-lg text-white/60 mt-6 max-w-3xl mx-auto">
              Motivated BCA graduate with hands-on experience in Web
              Development, DevOps, and AI-powered applications. Passionate
              about building innovative digital solutions.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              >
                View Projects
              </button>

              <button
                onClick={() => setActiveSection("contact")}
                className="px-8 py-4 border border-white/30 rounded-full"
              >
                Contact Me
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ABOUT */}
      {activeSection === "about" && (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-5xl">
            <h2 className="text-5xl font-bold text-center mb-10 text-blue-400">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg leading-8 text-white/80">
                  I am a motivated Bachelor of Computer Applications graduate
                  with practical experience in web development, DevOps, and
                  artificial intelligence projects.
                </p>

                <p className="text-lg leading-8 text-white/80 mt-6">
                  Skilled in Java, Python, HTML, CSS, PHP, UI/UX Design, and
                  DevOps practices. I enjoy solving real-world problems through
                  technology and continuously learning modern development tools.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-72 h-72 rounded-2xl bg-white/10 flex items-center justify-center text-7xl">
                  🚀
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {activeSection === "projects" && (
        <section className="min-h-screen px-6 py-24">
          <h2 className="text-5xl font-bold text-center mb-16 text-blue-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/10 hover:scale-105 transition"
              >
                <div className="text-5xl mb-5">💻</div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                <p className="text-blue-300 text-sm mb-3">{project.tech}</p>

                <p className="text-white/70">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SKILLS */}
      {activeSection === "skills" && (
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold text-center mb-12 text-blue-400">
              Skills
            </h2>

            {skills.map((skill, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="bg-white/10 h-3 rounded-full">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {activeSection === "education" && (
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-bold text-center mb-12 text-blue-400">
              Education
            </h2>

            <div className="space-y-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold">
                  Bachelor of Computer Applications
                </h3>
                <p>Bangalore University</p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold">
                  Pre-University Education
                </h3>
                <p>Sri Ranga PU College, Bangalore</p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold">SSLC</h3>
                <p>New Oxford Public School, Bangalore</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      {activeSection === "contact" && (
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h2 className="text-5xl font-bold mb-10 text-blue-400">
              Contact Me
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-3xl mb-3">📧</div>
                <p>Surya46668@gmail.com</p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-3xl mb-3">📱</div>
                <p>+91 9066083466</p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-3xl mb-3">📍</div>
                <p>Bangalore, Karnataka</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/surya1401"
                target="_blank"
                className="px-6 py-3 bg-white/10 rounded-full"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/surya-p14"
                target="_blank"
                className="px-6 py-3 bg-white/10 rounded-full"
              >
                LinkedIn
              </a>

              <a
                href="https://myportfolio-ashen-seven.vercel.app"
                target="_blank"
                className="px-6 py-3 bg-white/10 rounded-full"
              >
                Portfolio
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
