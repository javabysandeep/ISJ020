import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './Counter';
import StudentForm from './StudentForm';

//it builds a virtual DOM and then it compares the virtual DOM with the real DOM and then it updates the real DOM with the changes in the virtual DOM

const root = ReactDOM.createRoot(document.getElementById('root')); // html ---> body
//<div id="root"></div>

//Strict Mode lets you find common bugs in your components early during development.
root.render(
  <React.StrictMode>
    <App />
    <Counter />
    <StudentForm />

  </React.StrictMode>
);


