import { motion } from 'framer-motion'
import { FaCalendarAlt, FaProjectDiagram, FaLayerGroup, FaUsers, FaCode } from 'react-icons/fa'
import { personalInfo, stats } from '../data/portfolioData'

const iconMap = {
  FaCalendarAlt: FaCalendarAlt,
  FaProjectDiagram: FaProjectDiagram,
  FaLayerGroup: FaLayerGroup,
  FaUsers: FaUsers,
  FaCode: FaCode,
}

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Background Gradient */}
      <div className="gradient-orb w-96 h-96 bg-purple-500 top-0 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Get to know me 👋
              </h3>
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                {personalInfo.bio}
              </p>
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg mt-4">
                I'm constantly learning new technologies and improving my skills. 
                My goal is to create applications that not only work flawlessly 
                but also provide an exceptional user experience.
              </p>
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg mt-4">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>

            {/* Current Focus */}
            <div className="glass-card rounded-2xl p-8 card-hover">
              <h3 className="text-xl font-bold mb-4 text-white">
                Currently Focus On 🎯
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Advanced React Patterns', 'TypeScript', 'React Native', 'Node.js', 'Cloud Services'].map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-300 hover:border-blue-500/50 transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon] || FaCode
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card rounded-2xl p-6 lg:p-8 card-hover text-center group cursor-default"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                    <Icon className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="col-span-2 glass-card rounded-2xl p-6 lg:p-8 card-hover"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">Location</h4>
                  <p className="text-white font-semibold">{personalInfo.location}</p>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">Experience</h4>
                  <p className="text-white font-semibold">2+ Years</p>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">Email</h4>
                  <p className="text-white font-semibold text-sm">{personalInfo.email}</p>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">Availability</h4>
                  <p className="text-green-400 font-semibold">Open to Work</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
