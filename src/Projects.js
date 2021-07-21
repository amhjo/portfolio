import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.scss';
import remap from './assets/remap.png';
import konstrukt from './assets/konstrukt.png';
import amhjo from './assets/amhjo.png';
import leo from './assets/leo.png';
import Hello from './Hello.js';
import blob from './assets/blob.svg';
 
function Projects(props) {

  return (
        // Render a Thumbnail component
        <div className="frontpageWrapper">
        
        <Hello /> {/* Laddar in introkomponenten med mitt namn */}

        <h1 id="frontpage-h1">Projects</h1>
        
        <div className="thumbnail-container">

            <Thumbnail
                link="/Remap"
                title="Re:map"
                image={remap}
                desc="Moodboard for event and graphic expression."
                category="Graphic design"
            />

            <Thumbnail
                link="/Konstruktivism"
                image={konstrukt}
                title="Konstruktivism"
                category="Graphic design"
                desc="Moodboard for event and graphic expression."
            />

            <Thumbnail
                link="/Chrome"
                image={amhjo}
                title="Chrome letter"
                category="Web design"
                desc="Moodboard for event and graphic expression."
            />

        </div>
      </div>
  )

}
 
export default Projects;