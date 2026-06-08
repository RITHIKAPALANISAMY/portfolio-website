import FadeIn from "../components/FadeIn";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Let's Connect
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          I'm actively seeking opportunities in Full Stack Development,
          Software Engineering and AI-powered applications. Let's build
          something meaningful together.
        </p>

        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10">

          {/* Availability Banner */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-4
              mb-10
            "
          >
            <span
              className="
                px-4
                py-2
                rounded-full
                bg-green-500/10
                text-green-400
                text-sm
              "
            >
              Available for Full Stack Roles
            </span>

            <span
              className="
                px-4
                py-2
                rounded-full
                bg-sky-500/10
                text-sky-400
                text-sm
              "
            >
              Open to Internship Opportunities
            </span>
          </div>

          {/* Contact Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <a
  href="mailto:rithikapalanisamy22@gmail.com"
  className="
    flex
    flex-col
    items-center
    gap-3
    bg-slate-900
    p-6
    rounded-2xl
    hover:-translate-y-2
    hover:border-sky-400
    transition-all
    duration-300
  "
>
  <FaEnvelope className="text-3xl text-sky-400" />

  <h3 className="font-semibold">
    Email
  </h3>

  <p className="text-gray-400 text-sm text-center break-all">
    rithikapalanisamy22@gmail.com
  </p>
</a>

            <a
              href="https://www.linkedin.com/in/rithika-p-57099a299"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                flex-col
                items-center
                gap-3
                bg-slate-900
                p-6
                rounded-2xl
                hover:-translate-y-2
                hover:border-sky-400
                transition-all
                duration-300
              "
            >
              <FaLinkedin className="text-3xl text-sky-400" />

              <h3 className="font-semibold">
                LinkedIn
              </h3>

              <p className="text-gray-400 text-sm">
                Professional Profile
              </p>
            </a>

            <a
              href="https://github.com/RITHIKAPALANISAMY"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                flex-col
                items-center
                gap-3
                bg-slate-900
                p-6
                rounded-2xl
                hover:-translate-y-2
                hover:border-sky-400
                transition-all
                duration-300
              "
            >
              <FaGithub className="text-3xl text-sky-400" />

              <h3 className="font-semibold">
                GitHub
              </h3>

              <p className="text-gray-400 text-sm">
                Explore My Work
              </p>
            </a>

            <div
              className="
                flex
                flex-col
                items-center
                gap-3
                bg-slate-900
                p-6
                rounded-2xl
              "
            >
              <FaMapMarkerAlt className="text-3xl text-sky-400" />

              <h3 className="font-semibold">
                Location
              </h3>

              <p className="text-gray-400 text-sm text-center">
                Coimbatore, Tamil Nadu
              </p>
            </div>

          </div>

          {/* CTA */}

          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Collaborate?
            </h3>

            <p className="text-gray-400 mb-6">
              Feel free to reach out for internships,
              full-time opportunities, collaborations
              or technical discussions.
            </p>

            <a
              href="/RITHIKA P_F249.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                bg-sky-500
                px-8
                py-3
                rounded-xl
                hover:bg-sky-600
                transition
                font-medium
              "
            >
              View Resume
            </a>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}