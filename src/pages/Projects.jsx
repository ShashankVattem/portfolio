import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Anime Chatbot',
      desc: 'Transformer based conversational AI chatbot.',
      link: 'https://github.com/yourusername/anime-chatbot'
    },
    {
      title: 'Productivity Tracker',
      desc: 'Task logging and analytics system built with Python.',
      link: 'https://github.com/yourusername/productivity-tracker'
    },
    {
      title: 'Recommendation System',
      desc: 'Similarity based recommendation engine.',
      link: 'https://github.com/yourusername/recommendation-system'
    }
  ]

  return (
    <section className="grid">
      {projects.map((item, index) => (
        <ProjectCard key={index} {...item} />
      ))}
    </section>
  )
}