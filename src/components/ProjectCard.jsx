export default function ProjectCard({ title, desc, link }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={link} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  )
}