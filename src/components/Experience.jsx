import { motion } from 'framer-motion'
import { FaCode, FaSchool, FaMobileAlt, FaLaptopCode } from 'react-icons/fa'
import { experience } from '../data/portfolioData'

const iconMap = {
  FaCode: FaCode,
  FaSchool: FaSchool,
  FaMobileAlt: FaMobileAlt,
  FaLaptopCode: FaLaptopCode,
}

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      {/* Background Gradients */}
      <div className="gradient-orb w-96 h-96 bg-blue-500 top-0 right-0 opacity-20" />
      <div className="gradient-orb w-64 h-64 bg-cyan-500 bottom-0 left-1/4 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and learning path
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-0">
            {experience.map((item, index) => {
              const Icon = iconMap[item.icon] || FaCode
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                    isLeft ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 items-center justify-center z-10 shadow-lg shadow-blue-500/30">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-white text-xl" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:px-8 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="glass-card rounded-2xl p-6 lg:p-8 card-hover inline-block w-full lg:max-w-md"
                    >
                      {/* Year Badge */}
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-4 ${
                        isLeft ? '' : 'lg:float-right'
                      }`}>
                        <span className="text-blue-400 font-semibold text-sm">
                          {item.year}
                        </span>
                      </div>

                      {/* Icon for Mobile */}
                      <div className="lg:hidden w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                        <Icon className="text-white text-2xl" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-purple-400 font-medium mb-4">
                        {item.organization}
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tech Tags */}
                      <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'lg:justify-end' : ''}`}>
                        {['React', 'Node.js', 'Mobile', 'Full Stack'].slice(0, 2 + (index % 2)).map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Space for Other Side */}
                  <div className="hidden lg:block" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
          >
            Download Full Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
