import React from 'react';
import H2Styled from '../styled/H2Styled';

const Certificates = (props)=>(
    <div className="Certificates">
        <H2Styled name="Certificates"/>
        <div className="Certificates-container">      
            {
            props.data.map((cert, index)=>(
            <div className="Certificates-item" key={"cert "+index}>
                <h3>{cert.name}</h3>
                <p>Date: <i>{cert.date}</i></p>
                <p>{cert.institution}</p>
            <p>{cert.description}</p>
            </div>
            ))
            }
            
            {/*}
            <div className="Certificates-item">
                <h3>Aptis</h3>
                <p>Nivel C</p>
            </div>
            <div className="Certificates-item">
                <h3>Curso programacion básica platzi</h3>
                <a>ver certificado</a>
            </div>
            <div className="Certificates-item">
                <h3>Cursos de SoloLearn</h3>
                <a>Cursos</a>
</div>*/}
        </div>
    </div>
);
export default Certificates;