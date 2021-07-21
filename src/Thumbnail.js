import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.scss';
 
function Thumbnail(props) {

    return (
      <div className="project">
        <Link to={props.link}>
          <div className="project-image">
            <img src={props.image} alt="Projektbild"/>
          </div>
          <div className="project-title">{props.title}</div>
          <div className="project-desc">{props.desc}</div>
          <div className="project-category">{props.category}</div>

        </Link>
      </div> 
    )

  }

 
export default Thumbnail;