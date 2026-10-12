import { projects } from "../data/projects"
import { MoveUpRight } from "lucide-react"

export default function Projects() {
    return (
        <div className="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-container">
                {projects.map((p, i) => (
                    <div key={i} className="project-card">
                        <div className="project-card-header">
                            <div className="project-card-header-info">

                                <span className="project-card-number">0{i + 1}</span>
                                <p className="project-card-title">{p.name}</p>
                            </div>
                            <MoveUpRight size={12} />
                        </div>
                        <p className="project-card-description">{p.description}</p>
                        <div className="project-card-stacks">
                            {p.tech_stack.map((t, i) => (
                                <p className="project-card-stack" key={i}>
                                   {t}
                                </p>
                            ))}
                        </div>
                        <div className="project-card-links">
                            <a href={p.urls[0]} className="project-card-link">Live Demo <MoveUpRight size={15} /></a>
                            <a href={p.urls[1]} className="project-card-link">GitHub <MoveUpRight size={15} /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}