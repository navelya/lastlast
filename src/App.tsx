import { useState } from "react"
import { motion } from "framer-motion"

export default function App() {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <motion.section id="section-1763148756983-h4v62v9" className="relative py-24 text-center px-4 flex items-center min-h-screen" style={{ color: "#000000" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">i am tired2</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 opacity-90">The modern platform built for teams that move fast</h2>
          <p className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto">Streamline your operations with our powerful, intuitive tools designed for the modern workplace.</p>
          <button className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105" style={{ backgroundColor: "#8B5CF6", color: "#fff" }}>Start Free Trial</button>
        </div>
      </motion.section>
      <section id="section-1763148756983-rj8epg4" className="py-16 px-4" style={{ backgroundColor: "#F9FAFB", color: "#1F2937" }}>
        <div className="max-w-6xl mx-auto">
          <p>Section type: features</p>
        </div>
      </section>
      <section id="section-1763148756983-0iih7fm" className="py-16 px-4" style={{ backgroundColor: "#FFFFFF", color: "#1F2937" }}>
        <div className="max-w-6xl mx-auto">
          <p>Section type: testimonials</p>
        </div>
      </section>
      <motion.section id="section-1763148756983-6oey0aw" className="relative py-16 text-center px-4" style={{ color: "#FFFFFF" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">Join thousands of teams already using our platform</p>
          <button className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105" style={{ backgroundColor: "#8B5CF6", color: "#fff" }}>Start Your Free Trial</button>
        </div>
      </motion.section>
      <section id="section-1763148756983-so1qydy" className="py-24 px-4" style={{ backgroundColor: "#F9FAFB", color: "#1F2937" }}>
        <div className="max-w-6xl mx-auto">
          <p>Section type: form</p>
        </div>
      </section>
    </div>
  )
}
