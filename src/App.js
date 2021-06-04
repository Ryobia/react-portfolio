import React, { useState } from 'react';
import About from '../src/components/About';
import Portfolio from '../src/components/Portfolio';
import Resume from '../src/components/Resume';



function App() {
  const [pageSelected, setPageSelected] = useState('');

  
  const renderPage = () => {
    switch (pageSelected) {
      case 'about':
        return <About/>;
      case 'portfolio':
        return <Portfolio/>;
      case 'resume':
        return <Resume/>;
    };
  }


  return (
    <div>
      Hello World
    {renderPage}

    </div>

  );
}

export default App;
