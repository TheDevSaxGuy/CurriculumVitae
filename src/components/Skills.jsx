import React from 'react';

const Skills = (props)=>(
    <div className="Skills">
        <div className="Skills-container">
            {props.data.map((skill, index)=>(
            <div className="Skills-item" key={"Skill "+index}>
                <h5>{skill.name}</h5>
                <div className="Skills-line">
                <span>{skill.percentage}</span>
                </div>
            </div>
            ))}
            

        </div>
    </div>
)
export default Skills;