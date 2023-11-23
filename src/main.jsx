import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Frame } from './Frame.style.jsx';
import { RecoilRoot } from 'recoil';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Frame>
        <App />
      </Frame>
    </RecoilRoot>
  </React.StrictMode>
);
