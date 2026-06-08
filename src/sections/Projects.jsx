import FadeIn from "../components/FadeIn";

const projects = [
  {
    title: "E-Commerce ShopVerse",
    image: "/projects/Home1.png",
    github:
      "https://github.com/RITHIKAPALANISAMY/Ecommerce-Shopverse",
    tech: [
      "React.js",
      "Spring Boot",
      "MongoDB",
      "MySQL",
      "Razorpay",
    ],
    description:
      "A full-stack e-commerce platform with Admin, Seller and Buyer dashboards, secure authentication and payment integration.",
    features: [
      "Role-Based Authentication",
      "Product Management",
      "Order Tracking",
      "Payment Gateway",
      "Admin Dashboard",
    ],
  },
  {
  title: "Personal Portfolio Website",
  image: "/projects/portfolio.png",
  github:
    "https://github.com/RITHIKAPALANISAMY/portfolio-website",
  tech: [
    "React.js",
    "Tailwind CSS",
    "Framer Motion",
    "Vite",
  ],
  description:
    "A modern personal portfolio website built to showcase projects, internships, certifications and technical skills through a clean and responsive user experience.",
  features: [
    "Responsive Design",
    "Smooth Animations",
    "Modern UI/UX",
    "Resume Integration",
    "SEO Optimization",
  ],
},

  {
    title: "GFG AI Quiz Generator",
    image: "/projects/quiz-generator.png",
    github:
      "https://github.com/RITHIKAPALANISAMY/GFG-AI-Quiz-Generator",
    tech: [
      "Gemini API",
      "JavaScript",
      "Chrome Extension",
    ],
    description:
      "AI-powered quiz generation platform that creates quizzes from educational content and evaluates learner performance.",
    features: [
      "AI Quiz Generation",
      "Automatic Evaluation",
      "Chrome Extension",
      "Gemini API Integration",
      "Instant Feedback",
    ],
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          Projects that demonstrate my skills in Full Stack Development,
          AI Integration, Backend Engineering and modern web application
          architecture.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                hover:-translate-y-2
                hover:border-sky-400
                hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]
                transition-all
                duration-300
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        bg-slate-800
                        text-sky-400
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        hover:bg-sky-500
                        hover:text-black
                        transition
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-gray-400 leading-7">
                  {project.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-sky-400 font-semibold mb-3">
                    Highlights
                  </h4>

                  <ul className="space-y-2 text-gray-300 text-sm">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2"
                      >
                        <span className="text-sky-400">✔</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      bg-sky-500
                      px-5
                      py-2
                      rounded-xl
                      hover:bg-sky-600
                      transition
                    "
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}