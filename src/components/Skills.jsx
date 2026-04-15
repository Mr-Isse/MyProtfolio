import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaJs, 
  FaJsSquare, 
  FaCss3Alt, 
  FaNodeJs, 
  FaDatabase, 
  FaServer, 
  FaFire, 
  FaGitAlt,
  FaPhp,
  FaPython,
  FaCode,
  FaJava,
  FaHtml5,
  FaExchangeAlt,
  FaBootstrap
} from 'react-icons/fa'
import { skills } from '../data/portfolioData'

const iconMap = {
  FaReact: FaReact,
  FaJs: FaJs,
  FaJsSquare: FaJsSquare,
  FaCss3Alt: FaCss3Alt,
  FaNodeJs: FaNodeJs,
  FaDatabase: FaDatabase,
  FaServer: FaServer,
  FaFire: FaFire,
  FaGitAlt: FaGitAlt,
  FaPhp: FaPhp,
  FaPython: FaPython,
  FaCode: FaCode,
  FaJava: FaJava,
  FaHtml5: FaHtml5,
  FaExchangeAlt: FaExchangeAlt,
  FaBootstrap: FaBootstrap,
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Background Gradients */}
      <div className="gradient-orb w-96 h-96 bg-blue-500 bottom-0 left-0 opacity-20" />
      <div className="gradient-orb w-64 h-64 bg-cyan-500 top-1/4 right-1/4 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || FaCode
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 card-hover group cursor-default"
              >
                {/* Icon */}
                <div className="mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)` 
                    }}
                  >
                    <Icon className="text-4xl" style={{ color: skill.color }} />
                  </motion.div>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-sm font-semibold" style={{ color: skill.color }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` 
                      }}
                    />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ 
                    boxShadow: `0 0 30px ${skill.color}20` 
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-8 inline-block">
            <p className="text-gray-300 text-lg mb-4">
              Always learning and exploring new technologies 🚀
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['HTML5', 'CSS3', 'Redux', 'REST APIs', 'GraphQL', 'Docker', 'AWS'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 glass-card rounded-lg text-sm text-gray-300 hover:text-white hover:border-blue-500/50 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
