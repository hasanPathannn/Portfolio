import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
      <div className="max-w-4xl w-full text-center space-y-10">
        <h2 className="text-4xl font-bold text-green-400">Get in Touch</h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Email */}
          <a
            href="mailto:pathannnhasan@gmail.com"
            className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-lg shadow-md 
            hover:scale-105 hover:shadow-green-400/50 transition-all duration-300"
          >
            <FaEnvelope className="text-green-400 w-6 h-6" />
            <span className="text-lg">pathannnhasan@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hasan-khan-b38aa1265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-lg shadow-md 
            hover:scale-105 hover:shadow-blue-400/50 transition-all duration-300"
          >
            <FaLinkedin className="text-blue-400 w-6 h-6" />
            <span className="text-lg">Mohd Hasan Khan</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+917869272347"
            className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-lg shadow-md 
            hover:scale-105 hover:shadow-yellow-400/50 transition-all duration-300"
          >
            <FaPhone className="text-yellow-400 w-6 h-6" />
            <span className="text-lg">+917869272347</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
