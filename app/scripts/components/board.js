import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({
  render() {
    return(
      <div>
        <h1>Jeopardy</h1>
        <button id="restart">Restart Game</button>
        <div id="point-div"></div>
      </div>
    )
  }
});
