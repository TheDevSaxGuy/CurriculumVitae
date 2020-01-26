import React from 'react';

const Certificates = (props)=>(
    <div className="Certificates">
        <div className="Certificates-container">
            
            {
            props.data.map((cert, index)=>(
            <div className="Certificates-item" key={"cert "+index}>
                <p>Date: <i>{cert.date}</i></p>
                <h3>{cert.name}</h3>
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