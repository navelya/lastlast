import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-6"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div
              className="rounded-full p-4"
              style={{ backgroundColor: "#6366F120" }}
            >
              <svg
                className="w-16 h-16"
                style={{ color: "#6366F1" }}
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-lg opacity-80">
            We've received your information and will be in touch with you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* HERO SECTION */}
      <motion.section
        id="hero"
        className="py-24 md:py-32 relative overflow-hidden"
        style={{
          color: "#000000",
          background: "linear-gradient(to br, #6366F1, #8B5CF6)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              i am tired2
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-4 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              The modern platform built for teams that move fast
            </motion.p>

            <motion.p
              className="text-lg md:text-xl mb-8 opacity-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Streamline your operations with our powerful, intuitive tools
              designed for the modern workplace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button
                className="text-lg px-8 h-14 rounded-lg font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: "#8B5CF6", color: "white" }}
              >
                Start Free Trial
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FEATURES SECTION */}
      <motion.section
        id="features"
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ color: "#1F2937", backgroundColor: "#F9FAFB" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* ... YOUR FULL FEATURES CONTENT HERE (same as you pasted) ... */}
      </motion.section>

      {/* TESTIMONIALS SECTION */}
      <motion.section
        id="testimonials"
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ color: "#1F2937", backgroundColor: "#FFFFFF" }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* ... YOUR FULL TESTIMONIALS CONTENT (same as you pasted) ... */}
      </motion.section>
    </div>
  );
}
