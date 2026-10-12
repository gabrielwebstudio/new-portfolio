import { MoveUpRight } from "lucide-react"

export default function About() {
    return (
        <div className="about">
            <img src="favicon.svg" className="about-image" />
            <h2 className="about-title">
                Hi my name is Gabriel.
            </h2>
            <p className="about-description">
                Junior Fullstack Developer med fokus på att bygga moderna webbapplikationer.
            </p>
            <div className="about-skills">
                <span className="about-skill">React · </span>
                <span className="about-skill">Next.js ·</span>
                <span className="about-skill">TypeScript</span>
            </div>
            <div className="about-contact">
                <a href="/" className="about-contact-link">GitHub <MoveUpRight size={15} /></a>
                <a href="/" className="about-contact-link">LinkedIn <MoveUpRight size={15} /></a>
            </div>
        </div>
    )
}