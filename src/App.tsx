import { useState } from 'react'
import { motion } from 'framer-motion'

export default function App() {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">

      <motion.section 
        id="section-1763148756983-h4v62v9"
        className="relative py-24 text-center px-4 flex items-center min-h-screen"
        style={ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', color: '#000000' }
        { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true } }
      >
        
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">i am tired2</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 opacity-90">The modern platform built for teams that move fast</h2>
          <p className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto">Streamline your operations with our powerful, intuitive tools designed for the modern workplace.</p>
          <button className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105" style={{ backgroundColor: '#8B5CF6', color: '#fff' }}>Start Free Trial</button>
        </div>
      </motion.section>

      <motion.section 
        id="section-1763148756983-rj8epg4"
        className="py-16 text-center px-4"
        style={ backgroundColor: '#F9FAFB', color: '#1F2937' }
        { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need to Succeed</h2>
          <p className="text-lg md:text-xl opacity-80 mb-12">Powerful features designed to help you work smarter, not harder</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <motion.div
              key="0"
              className="p-6 bg-white rounded-lg shadow-md h-full hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-full p-4" style={{ backgroundColor: '#6366F120' }}>
                  <div className="w-8 h-8" style={{ color: '#6366F1' }}>★</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="opacity-70">Built for speed with cutting-edge technology that keeps you moving</p>
            </motion.div>
            
            <motion.div
              key="1"
              className="p-6 bg-white rounded-lg shadow-md h-full hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-full p-4" style={{ backgroundColor: '#6366F120' }}>
                  <div className="w-8 h-8" style={{ color: '#6366F1' }}>★</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="opacity-70">Enterprise-grade security to keep your data safe and protected</p>
            </motion.div>
            
            <motion.div
              key="2"
              className="p-6 bg-white rounded-lg shadow-md h-full hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-full p-4" style={{ backgroundColor: '#6366F120' }}>
                  <div className="w-8 h-8" style={{ color: '#6366F1' }}>★</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="opacity-70">Connect with all your favorite tools and services seamlessly</p>
            </motion.div>
            
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="section-1763148756983-0iih7fm"
        className="py-16 text-center px-4"
        style={ backgroundColor: '#FFFFFF', color: '#1F2937' }
        { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true } }
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Loved by Thousands</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <motion.div
              key="0"
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className="flex gap-1 mb-4">
                <span style={{ color: '#8B5CF6' }}>★</span><span style={{ color: '#8B5CF6' }}>★</span><span style={{ color: '#8B5CF6' }}>★</span><span style={{ color: '#8B5CF6' }}>★</span><span style={{ color: '#8B5CF6' }}>★</span>
              </div>
              <p className="text-lg mb-4 italic">"This platform completely transformed how we work. Our productivity increased by 40% in the first month!"</p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm opacity-70">CEO, TechStart</p>
              </div>
            </motion.div>
            
            <motion.div
              key="1"
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="flex gap-1 mb-4">
                <span style={{ color: '#8B5CF6' }}>★</span><span style={{ color: '#8B5CF6' }}>★</span><span style={{ color: '#8B5CF6' }}>★</span><span style={{ color: '#8B5CF6' }}>★</span><span style={{ color: '#8B5CF6' }}>★</span>
              </div>
              <p className="text-lg mb-4 italic">"The best investment we made this year. Intuitive, powerful, and our team adopted it instantly."</p>
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm opacity-70">Product Manager, InnovateCo</p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="section-1763148756983-6oey0aw"
        className="relative py-16 text-center px-4"
        style={ background: 'linear-gradient(90deg, #1F2937, #374151)', color: '#FFFFFF' }
        { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true } }
      >
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">Join thousands of teams already using our platform</p>
          <button className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105" style={{ backgroundColor: '#8B5CF6', color: '#fff' }}>Start Your Free Trial</button>
        </div>
      </motion.section>

      <motion.section 
        id="section-1763148756983-so1qydy"
        className="py-24 px-4"
        style={ backgroundColor: '#F9FAFB', color: '#1F2937' }
        { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
      >
        <div className="max-w-2xl mx-auto">
          
          {submitted ? (
            <div className="text-center p-12 rounded-xl border-2" style={{ borderColor: '#10b981', backgroundColor: '#f0fdf4' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#10b981' }}>Thank You!</h3>
              <p style={{ color: '#059669' }}>Your message has been received.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div key="name">
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2" placeholder="John Doe" onChange={(e) => setFormData({...formData, 'name': e.target.value})} />
              </div>
              
              <div key="email">
                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                <input type="email" required className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2" placeholder="john@example.com" onChange={(e) => setFormData({...formData, 'email': e.target.value})} />
              </div>
              
              <div key="phone">
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input type="phone"  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2" placeholder="+1 (555) 000-0000" onChange={(e) => setFormData({...formData, 'phone': e.target.value})} />
              </div>
              
              <div key="message">
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2" rows={4} placeholder="Tell us more about your needs..." onChange={(e) => setFormData({...formData, 'message': e.target.value})} />
              </div>
              
              <button type="submit" className="w-full px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105" style={{ backgroundColor: '#6366F1', color: '#fff' }}>Start Free Trial</button>
            </form>
          )}
        </div>
      </motion.section>

    </div>
  )
}

