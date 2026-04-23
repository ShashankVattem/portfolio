import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

export default function Home() {
  const skills = ['Python', 'Java', 'C', 'React', 'ML', 'Git']

  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="tag">Welcome to my portfolio</p>
        <h1>Shashank Kumar Vattem</h1>

        <h2>
          <Typewriter
            words={['AI Student', 'Frontend Developer', 'ML Enthusiast']}
            loop={0}
            cursor
          />
        </h2>

        <p>
          Building premium web experiences and smart AI solutions.
        </p>

        <div className="chips">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="card glass"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="/profile.jpg"
          alt="profile"
        />
        <p>📞 8309870005</p>
        <p>📧 vattem.shashank@gmail.com</p>
        <p>📧 se23uari114@mahindrauniversity.edu.in</p>
        <p><a href="https://github.com/ShashankVattem" target="_blank">GitHub</a></p>
<p>
  <a
    href="https://www.linkedin.com/in/shashank-kumar-vattem-bbaa472a5/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>
</p>
      </motion.div>
    </section>
  )
}