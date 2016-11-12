import React from 'react';
import {Link} from 'react-router';

    //keep track of if it's been clicked on or not
    //put value of quesiton in, instead of $$ amount


    //in the model, put that it's been answered before
    //don't need state; is clue in answered list -- if no, show to click it on;

export default React.createClass({
// ask if each questoin has been answered. call the function from teh model
  render() {
    let pointList;
    pointList = this.props.clues.map((clue, i, arr) => {
      if(clue.answered == false) {
        return (
          <li key={clue.id} onClick={this.handleClick} id="unanswered"><Link  to={`/questions/${clue.category_id}/${clue.id}`}>${clue.value}</Link></li>
        )
      } else {
        <li id ="answered">Answered Qustion</li>
      }
    })
      return (
          <ul>{pointList}</ul>
      )
  },
  handleClick(e) {
    e.preventDefault();
    // console.log('hi');
    
  }
});
