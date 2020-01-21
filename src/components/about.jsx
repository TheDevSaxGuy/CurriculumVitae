import React from 'react';

const About =({avatar, name, profession, bio, address, social})=>(
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img src={avatar} alt={name}/>
                </figure>
            </div>
            <div className="About-name">
                <h2> {name}</h2>
            </div>
            <div className="About-profession">
                <p> {profession}</p>
            </div>
            <div className="About-desc">
                <p>{bio}</p>
            </div>
            <div className="About-location">
                <p>{address}</p>
            </div>
            <div className ="About-social">
                <p></p>
            </div>
        </div>
    </div>
);
export default About;