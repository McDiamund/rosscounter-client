import './about.css'

export default function About() {
    return (
        <div className="about-module">
            <div className="about-info">
                <h1 className="about-title jb-mono">Ross++ Project</h1>
                <p className="about-description dinpro">
                    This project is meant to report the daily sightings of our friend Ross. 
                    <br/>There seems to be a dimensional rift where Ross' of different universes keep appearing. 
                    This is our way of logging each one we see. 
                    Totally not a website to poke fun of our friend. We are obsessed.
                </p>
            </div>

            <div className="github-info">
                <div className="github-logo"></div>
                <a href="https://github.com/McDiamund/rosscounter-client" target="_blank" className="github-link dinpro">Github</a>
            </div>
        </div>
    )
}
