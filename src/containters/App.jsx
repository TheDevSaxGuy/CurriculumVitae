import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/about';
import Education from '../components/Education';
import Experiencie from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import useGetData from '../Hooks/useGetData';

const App = () =>{
    const data = useGetData();
    console.log(data);
    return data.length===0?<h1>Cargando...</h1>: (
        <Main>
            <Sidebar>
                <About
                avatar= {data.avatar} 
                name = {data.name}
                profession= {data.profession}
                bio={data.bio}
                address={data.address}
                social={data.social}
                 />
            </Sidebar>
            <Info>
                <Education
                    data={data.education}
                />
                <Experiencie
                    data={data.experience}
                />
                <Certificates
                    data={data.certificate}
                />
                <Skills/>
            </Info>
        </Main>
    );
}

export default App;