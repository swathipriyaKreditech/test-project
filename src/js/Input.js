import React from 'react';
import ReactDOM from 'react-dom';

const myDiv = (
    <div>
        <h1>
            Hello world
        </h1>
    </div>
);
const paragraphs = (
    <div id="i-am-the-outermost-element">
        <p>I am a paragraph.</p>
        <p>I, too, am a paragraph.</p>
    </div>
);
ReactDOM.render((myDiv), document.getElementById('app'));
ReactDOM.render((paragraphs), document.getElementById('test'));