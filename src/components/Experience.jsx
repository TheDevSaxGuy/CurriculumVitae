import React from 'react';

const Experience = (props)=>(
    <div className="Experience">
        <div className="Experience-container">
        {
            props.data.map((exp,index)=>(
            <div className="Experience-item" key={"Exp "+index}>
                <h3>{exp.Company}</h3>
            <p>Puesto: <b>{exp.jobTitle}</b></p>
            <p>Duración: <b>{exp.startDate} - {exp.endDate}</b></p>                
            </div>
            ))
        }


            {/*}
            <div className="Experience-item">
                <h3>Gaven</h3>
                <p>Puesto: <b>Tecnico en Sistemas</b></p>
                <p>Duración: <b>2 años</b></p>                
            </div>
            <div className="Experience-item">
                <h3>Tyson Mexico Trading Company</h3>
                <p>Puesto: <b>Residente</b></p>
                <p>Duración: <b>2 meses</b></p>
            </div>
            <div className="Experience-item">
                <h3>Tyson Mexico Trading Company</h3>
                <p>Puesto: <b>Developer Applications</b></p>
                <p>Duración: <b>A la fecha</b></p>
            </div>
*/}
        </div>
    </div>
);
export default Experience;