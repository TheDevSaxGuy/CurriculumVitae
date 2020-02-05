import React from 'react';
import Social from'./Social';
import styled from 'styled-components'


const AboutName = styled.div`
    text-align: center;
    font-family: 'Roboto',sans-serif;

`;
const AboutH2 = styled.div`
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    letter-spacing: 1.2;
    margin: .5em 0 0 0;
    color: #1b262c;
`;
const AboutStyle = styled.div`
    text-align: center;
    !--background: #bbe1fa;

`;
const AboutAvatar = styled.div`
    padding; 2em 0 0 0;
`;
const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #0f4c75;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6)
`;
const AboutProfesssion = styled.p`
    font-family: 'Roboto',sans-serif;
    margin: .2em 0 1em 0;
    letter-spacing; 1.6px;
    font-weight: 300;
    color: #3282b8;
`;

const AboutBio = styled.p`
    font-family: 'Roboto',sans-serif;
    color: #0f4c75;
    font-size: 1em;
    font-wight: 300;
`;

const AboutLocation = styled.p`
    font-family: 'Roboto',sans-serif;
    color: #1b262c;
    font-size: 1em;
    font-wight: 400;
`; 
const About =({avatar, name, profession, bio, address, social})=>(
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar}  alt={name}/>
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2> {name}</AboutH2>
            </AboutName>
            <div className="About-profession">
                <AboutProfesssion> {profession}</AboutProfesssion>
            </div>
            <div className="About-desc">
                <AboutBio>{bio}</AboutBio>
            </div>
            <div className="About-location">
                <AboutLocation>{address}</AboutLocation>
            </div>
            <div className ="About-social">
               <Social social={social}/>
            </div>
        </div>
    </AboutStyle>
);
export default About;