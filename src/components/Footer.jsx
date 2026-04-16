import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: personalInfo.github },
    { name: 'LinkedIn', icon: FaLinkedin, url: personalInfo.linkedin },
    { name: 'WhatsApp', icon: FaWhatsapp, url: `https://wa.me/${personalInfo.whatsapp.replace('+', '')}` },
    { name: 'Email', icon: FaEnvelope, url: `mailto:${personalInfo.email}` },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0f] to-[#050508] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold gradient-text mb-4"
            >
              Asad.dev
            </motion.h2>
            <p className="text-gray-400 leading-relaxed">
              Full Stack & Frontend Developer from Somalia, passionate about building 
              scalable web and mobile applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold text-white mb-4"
            >
              Quick Links
            </motion.h3>
            <div className="grid grid-cols-2 gap-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link, index) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ x: 5, color: '#60a5fa' }}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`)
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-left text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-white mb-4"
            >
              Connect With Me
            </motion.h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>

            {/* Contact Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                {personalInfo.email}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm text-center md:text-left"
          >
            © {currentYear} {personalInfo.name}. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm flex items-center gap-2"
          >
          </motion.p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8 
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center hover:shadow-xl hover:shadow-blue-500/40 transition-all z-50"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <FaArrowUp size={18} />
      </motion.button>
    </footer>
  )
}

export default Footer
