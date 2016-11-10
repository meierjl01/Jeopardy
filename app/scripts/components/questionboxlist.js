import React from 'react';
import {Link} from 'react-router';

    //keep track of if it's been clicked on or not

export default React.createClass({
  render() {
    // console.log(this.props.clues);
    return(
        <ul>
          <li><Link to={`/questions/${this.props.clues.id}`}>$200</Link></li>
          <li><Link to={`/questions/${this.props.clues.id}`}>$400</Link></li>
          <li><Link to={`/questions/${this.props.clues.id}`}>$600</Link></li>
          <li><Link to={`/questions/${this.props.clues.id}`}>$800</Link></li>
          <li><Link to={`/questions/${this.props.clues.id}`}>$1000</Link></li>
        </ul>
    )
  }
});
