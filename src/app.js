import React from 'react';
import ReactDOM from 'react-dom'; 
import IndecisionApp from './components/IndecisionApp.js';
import 'normalize.css/normalize.css';
import './styles/style.scss';


ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 


// class OldSyntax {
//     constructor() {
//         this.name= 'bruno';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `hi, my name is ${this.name}`;
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting()); 

// class NewSyntax {
//     name = 'wendy';
//    getGreeting = () => {
//         return `hi, my name is ${this.name}`;
//     }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting  = newSyntax.getGreeting;
// console.log(newGetGreeting());