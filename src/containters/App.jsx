import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/about';
import Education from '../components/Education';
import Experiencie from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';

const App = () =>{
    return (
        <Main>
            <Sidebar>
                <About/>
            </Sidebar>
            <Info>
                <Education/>
                    <Experiencie/>
                    <Certificates />
                    <Skills/>
            </Info>
        </Main>
    );
}

export default App;