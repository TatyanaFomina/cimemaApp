import React from 'react';

import {Header, Footer} from '../';
import {MainContainer} from './Main';
import '../../assets/style/App.css';
import '../../assets/style/index.css';
import '../../assets/style/fonts.css';
import '../../assets/style/grid.css';
import '../../assets/style/width.css';
import '../../assets/style/form.css';
import '../../assets/style/button.css';

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
     <Footer />
    </div>
  );
}

export default App;
