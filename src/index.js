import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

//var creats a variable that can be updated/
//const creats a read-only variable

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div>
      <h1>Yuhao Lu</h1>
      <h2>
        <a href="mailto:">yuhaol@usc.edu</a>
      </h2>
    </div>
    <div id="color">
      <h2>Favorite Color: Orange</h2>
    </div>
    <h2>Favorite Website:</h2>
    <a href="url">https://roame.travel/</a>
    <hr />
    <h2>Class Enrolled</h2>
    <ul>
      <li>ITP301</li>
      <li>DSCI351</li>
      <li>ECON318</li>
      <li>EASC150</li>
    </ul>

    <Thumbnail />
    <hr />
  </React.StrictMode>
);

function Thumbnail() {
  return (
    <div className="Thumbnail">
      <img
        id="sc"
        src="https://www.wikihow.com/images/2/2a/Play-Basketball-Step-29-Version-4.jpg"
        alt="dd"
      />
      <h4>Favorite Activity</h4>
      <p>Basketball</p>
    </div>
  );
}
