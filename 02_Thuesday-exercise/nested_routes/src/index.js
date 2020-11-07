import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const info = [
  {id: "rendering", title:"Rendering with React",info:"Add somesadasds text here"},
  {id: "components", title:"components",info:"Add some textsdsd here"},
  {id: "props-v-state", title:"Props v. State",info:"Add some text here"},
  {id: "Lifting state", title:"Lifting state",info:"Jeg vil vise jer hvordan man løfter state up"}
]


ReactDOM.render(
  <React.StrictMode>
    <App info={info} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
