import { useState } from "react"
import { motion } from "framer-motion"

  const [formData, setFormData] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6" style={{ fontFamily: "Inter, sans-serif" }}>
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="rounded-full p-4" style={{ backgroundColor: "#6366F120" }}>
              <svg className="w-16 h-16" style={{ color: "#6366F1" }} fill="currentColor" viewBox="0 0 256 256">
                <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-lg opacity-80">We've received your information and will be in touch with you soon.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <motion.section id="hero" className="py-24 md:py-32 relative overflow-hidden" style={{ color: "#000000", background: "linear-gradient(to br, #6366F1, #8B5CF6)" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              i am tired2
            </motion.h1>
            <motion.p className="text-xl md:text-2xl mb-4 opacity-90" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              The modern platform built for teams that move fast
            </motion.p>
            <motion.p className="text-lg md:text-xl mb-8 opacity-80" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              Streamline your operations with our powerful, intuitive tools designed for the modern workplace.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <button className="text-lg px-8 h-14 rounded-lg font-semibold transition-all hover:scale-105" style={{ backgroundColor: "#8B5CF6", color: "white" }}>
                Start Free Trial
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section id="features" className="py-16 md:py-24 relative overflow-hidden" style={{ color: "#1F2937", backgroundColor: "#F9FAFB" }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need to Succeed</h2>
              <p className="text-lg md:text-xl opacity-80">Powerful features designed to help you work smarter, not harder</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }} className="bg-card border-2 border-border rounded-lg p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full p-4" style={{ backgroundColor: "#6366F120" }}>
                    <svg className="w-8 h-8" style={{ color: "#6366F1" }} fill="currentColor" viewBox="0 0 256 256">
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">Built for speed with cutting-edge technology that keeps you moving</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card border-2 border-border rounded-lg p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full p-4" style={{ backgroundColor: "#6366F120" }}>
                    <svg className="w-8 h-8" style={{ color: "#6366F1" }} fill="currentColor" viewBox="0 0 256 256">
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-muted-foreground">Enterprise-grade security to keep your data safe and protected</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-card border-2 border-border rounded-lg p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full p-4" style={{ backgroundColor: "#6366F120" }}>
                    <svg className="w-8 h-8" style={{ color: "#6366F1" }} fill="currentColor" viewBox="0 0 256 256">
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
                <p className="text-muted-foreground">Connect with all your favorite tools and services seamlessly</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="testimonials" className="py-16 md:py-24 relative overflow-hidden" style={{ color: "#1F2937", backgroundColor: "#FFFFFF" }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Loved by Thousands</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0 }} className="bg-card border-2 border-border rounded-lg p-6">
                <div className="flex gap-1 mb-4">
                  <svg className="w-5 h-5" style={{ color: "#8B5CF6" }} fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg><svg className="w-5 h-5" style={{ color: "#8B5CF6" }} fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg><svg className="w-5 h-5" style={{ color: "#8B5CF6" }} fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg><svg className="w-5 h-5" style={{ color: "#8B5CF6" }} fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg><svg className="w-5 h-5" style={{ color: "#8B5CF6" }} fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg>
                </div>
                <p className="text-lg mb-4 italic">"This platform completely transformed how we work. Our productivity increased by 40% in the first month!"</p>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">CEO, TechStart</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="bg-card border-2 border-border rounded-lg p-6">
                <div className="flex gap-1 mb-4">
                  <svg className="w-5 h-5" style={{ color: "#8B5CF6" }} fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg><svg className="w-5 h-5" style={{ color: "#8B5CF6" }} fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg><svg className="w-5 h-5" style={{ color: "#8B5CF6" }} fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg><svg className="w-5 h-5" style={{ color: "#8B5CF6" }} fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg><svg className="w-5 h-5" style={{ color: "#8B5CF6" }} fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg>
                </div>
                <p className="text-lg mb-4 italic">"The best investment we made this year. Intuitive, powerful, and our team adopted it instantly."</p>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Product Manager, InnovateCo</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="cta" className="py-16 md:py-24 relative overflow-hidden" style={{ color: "#FFFFFF", background: "linear-gradient(to r, #1F2937, #374151)" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Join thousands of teams already using our platform</p>
            <button className="text-lg px-8 h-14 rounded-lg font-semibold transition-all hover:scale-105" style={{ backgroundColor: "#FFFFFF", color: "white" }}>
              Start Your Free Trial
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section id="form" className="py-24 md:py-32 relative overflow-hidden" style={{ color: "#1F2937", backgroundColor: "#F9FAFB" }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Start Your Journey</h2>
              <p className="text-lg opacity-80">Fill out the form below and we'll get you started right away</p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg shadow-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-base font-medium block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                      id="name"
                      type="text"
                      value={formData["name"] || ""}
                      onChange={e => setFormData(prev => ({ ...prev, "name": e.target.value }))}
                      placeholder="John Doe"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md text-base h-12"
                    />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-base font-medium block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                      id="email"
                      type="email"
                      value={formData["email"] || ""}
                      onChange={e => setFormData(prev => ({ ...prev, "email": e.target.value }))}
                      placeholder="john@example.com"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md text-base h-12"
                    />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-base font-medium block">
                    Phone Number
                  </label>
                  <input
                      id="phone"
                      type="phone"
                      value={formData["phone"] || ""}
                      onChange={e => setFormData(prev => ({ ...prev, "phone": e.target.value }))}
                      placeholder="+1 (555) 000-0000"
                      
                      className="w-full px-3 py-2 border border-input rounded-md text-base h-12"
                    />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-base font-medium block">
                    Message
                  </label>
                  <textarea
                      id="message"
                      value={formData["message"] || ""}
                      onChange={e => setFormData(prev => ({ ...prev, "message": e.target.value }))}
                      placeholder="Tell us more about your needs..."
                      
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md text-base"
                    />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full h-14 text-lg font-semibold rounded-lg transition-all hover:scale-105"
                  style={{ backgroundColor: "#8B5CF6", color: "white" }}
                >
                  {submitted ? "Submitted!" : "Start Free Trial"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="py-8 text-center text-sm opacity-60 bg-background">
        <p>Powered by Landing Page Builder</p>
      </footer>
    </div>
  )
}
