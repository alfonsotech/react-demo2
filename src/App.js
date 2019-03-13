import React, { Component } from 'react';
import './App.css';

function App(props) {

    const peopleData = [
        { name: 'Rich', id:1},
        { name: 'Joe', id:2 },
        { name: 'Chris', id:3},
        { name: 'Tauhida', id:4},
        { name: 'Elias', id:5},
        { name: 'Rita', id:6}
    ];

    // If you have an array as an input, you can map over it to
    // create child components
    const people = peopleData.map(person =>

        <Person key={person.id} name={person.name} />
    );

    return (
        <div className="personList">
            <h3>Person List</h3>
            {people}
        </div>
    );
};

function Person(props) {
    return (
        <div className="person">
            {props.name}
        </div>
    );
};

export default App;
