import React from 'react';
import Andy from '../images/team/Andy.jpg';
import Jerry from '../images/team/Jerry.jpg';
import Rosanna from '../images/team/Rosanna.jpg';

const Team = () => {
  return (
    <div className="team-container">
      <h1 className="title">Who We Are</h1>

      <div className="team-member">
        <a href="https://angel.co/andy-tran-15" target="_blank" rel="noopener noreferrer"><img src={Andy} alt="Andy" /></a>
        <h2>Andy Tran</h2>
        <p className="title">Founder</p>
        <p>A web developer with a health policy background and years of experience organizing events. Kindred is the culmination of Andy's colourful skillset and passions.</p>
      </div>

      <div className="team-member">           
        <a href="https://www.linkedin.com/in/rosanna-lee-1b379b23/" target="_blank" rel="noopener noreferrer"><img src={Rosanna} alt="Rosanna" /></a>
        <h2>Rosanna Lee</h2>
        <p className="title">Outreach</p>
        <p>Avid food writer and photographer, Rosanna is a licensed dietitian and possibly the nicest person you'll ever meet. Few things are able to escape her noms!</p>
      </div>

      <div className="team-member">   
        <a href="https://www.linkedin.com/in/jerry-chang-68774113a/" target="_blank" rel="noopener noreferrer"><img src={Jerry} alt="Jerry" /></a>
        <h2>Jerry Chang</h2>
        <p className="title">Community Liaison</p>
        <p>Bringing his experiences and interests in the travel industry, Jerry plays a key role bridging together Toronto's diverse, multicultural communities.</p>
      </div>                    
    </div>
  )
}

export default Team;
