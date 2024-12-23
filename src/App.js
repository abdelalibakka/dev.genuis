import React from 'react';
import Header from './component/header';
import Main from './component/main';  // Import the Main component with a unique name
import Services from './component/services';
import Project from './component/project';



function App() {
    return (
        <>
            <Header /> 
            <Main />
            <Services />
            <Project />
           
        </>
    );
}

export default App;

