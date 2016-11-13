import React from 'react';
import {Link} from 'react-router';
import SingleQuestion from './singleQuestion';

import Clue from '../models/clue';

export default React.createClass({

  render() {
    let pointList;
    pointList = this.props.clues.map((clue, i, arr) => {
      // if(clue.answered == false) {
        return (
          <SingleQuestion key={clue.id} question={new Clue(clue)} />
        // (
        //   <li key={clue.id} onClick={this.handleClick} id="unanswered"><Link  to={`/questions/${clue.category_id}/${clue.id}`}>${clue.value}</Link></li>
        // )
      // } else {
      //   <li id ="answered">Answered Question</li>
      // }
      )
    });
      return (
          <ul>{pointList}</ul>
      )
  }
});
