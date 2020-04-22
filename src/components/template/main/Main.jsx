import React from 'react';
import './Main.css';

import Header from '../header/Header';

export default props =>
<React.Fragments>
  <Header {...props} />
  <main>
    conteudo
  </main>
</React.Fragments>