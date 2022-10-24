import React from 'react'
import About from "./About"
import Skill from "./Skill"
import Projects from "./Projects"
import Contact from "./Contact"

function Homepage() {
    return (
        <>
            <div>
                <About />
            </div>

            <div>
                <Skill />
            </div>
            <div>
             <Projects />

            </div>
            <div>
                <Contact />
            </div>
        </>
    )
}

export default Homepage