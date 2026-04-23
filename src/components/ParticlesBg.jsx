import Particles from "react-tsparticles"

export default function ParticlesBg() {
  return (
    <Particles
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { speed: 1 },
          links: { enable: true },
          opacity: { value: 0.4 }
        },
        background: { color: "transparent" }
      }}
    />
  )
}