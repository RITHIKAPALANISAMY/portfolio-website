import { motion } from "framer-motion";

export default function Hero() {
  const stats = [
    { value: "8.2", label: "CGPA" },
    { value: "2", label: "Internships" },
    { value: "3", label: "Projects" },
    { value: "11+", label: "Certifications" },
  ];

  const skills = [
    "React.js",
    "Spring Boot",
    "Java",
    "MongoDB",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-green-500/10
              border
              border-green-500/30
              text-green-400
              text-sm
              mb-6
            "
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for Opportunities
          </div>

          <p className="text-sky-400 uppercase tracking-widest mb-4">
            Full Stack Developer & AI Enthusiast
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">
              Rithika P
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-6 leading-relaxed">
            Building scalable web applications using
            React, Spring Boot, Java and AI-powered solutions.
          </h2>

          {/* Core Technologies */}

          <div className="flex flex-wrap gap-3 mt-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  text-sky-400
                  text-sm
                  hover:border-sky-400
                  transition-all
                "
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="text-gray-400 mt-8 leading-8 max-w-2xl">
            Passionate about building modern web applications,
            integrating AI technologies and solving real-world
            problems through clean, scalable and user-focused
            software solutions.
          </p>

          {/* Action Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="/RITHIKA P_F249.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                bg-sky-500
                px-6
                py-3
                rounded-xl
                hover:bg-sky-600
                transition
              "
            >
              View Resume
            </a>

            <a
              href="https://github.com/RITHIKAPALANISAMY"
              target="_blank"
              rel="noreferrer"
              className="
                border
                border-sky-500
                px-6
                py-3
                rounded-xl
                hover:bg-sky-500
                transition
              "
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rithika-p-57099a299"
              target="_blank"
              rel="noreferrer"
              className="
                border
                border-sky-500
                px-6
                py-3
                rounded-xl
                hover:bg-sky-500
                transition
              "
            >
              LinkedIn
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  bg-white/5
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  text-center
                  hover:border-sky-400
                  transition-all
                "
              >
                <h3 className="text-3xl font-bold text-sky-400">
                  {stat.value}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative flex items-center justify-center">

            <div
              className="
                absolute
                w-[450px]
                h-[450px]
                rounded-full
                bg-sky-500/20
                blur-3xl
                animate-pulse
              "
            />

            <img
              src="/Profile.jpeg"
              alt="Rithika P"
              className="
                relative
                w-[380px]
                h-[380px]
                object-cover
                rounded-full
                border-4
                border-sky-400
                shadow-2xl
              "
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}