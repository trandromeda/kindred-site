import React from 'react';
import Andy from '../images/team/Andy.jpg';
import Jerry from '../images/team/Jerry.jpg';
import Rosanna from '../images/team/Rosanna.jpg';

const Team = () => {
  return (
    <div className="team-container">
      <h1 className="title">Who We Are</h1>

      <div className="team-member">
        <img src={Andy} alt="Andy" />
        <h2>Andy Tran</h2>
        <p className="title">Founder</p>
        <p>I enjoy wearing many hats at once, and sometimes many pairs of pants, too. Policy researcher turned web developer turned entrepreneur.</p>
      </div>

      <div className="team-member">           
        <img src={Rosanna} alt="Rosanna" />
        <h2>Rosanna Lee</h2>
        <p className="title">Outreach</p>
        <p>Avid food writer and photographer, I spent (too) many years training in nutrition and dietetics. Few things are able to escape my noms!</p>
      </div>

      <div className="team-member">   
        <img src={Jerry} alt="Jerry" />
        <h2>Jerry Chang</h2>
        <p className="title">Community Liaison</p>
        <p>I came to Canada to meet new people and learn about different cultures, and now I can't wait to start on this adventure too.</p>
      </div>                    

      <h2 className="section-group title">Advisors</h2>
      <p className="verbose">Getting our paperwork sorted first!</p>

    </div>
  )
}

export default Team;
