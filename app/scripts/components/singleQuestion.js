import React from 'react';
import { Link } from 'react-router';

    //keep track of if it's been clicked on or not
    //put value of quesiton in, instead of $$ amount

    //in the model, put that it's been answered before
    //don't need state; is question in answered list -- if no, show to click it on;

export default React.createClass({
  // ask if each questoin has been answered. call the function from the model
  render() {
    console.log(this.props.question);
      return(
          // <li>test</li>
          <li key={this.props.question.id} onClick={this.handleClick} id="unanswered"><Link  to={`/questions/${this.props.question.category_id}/${this.props.question.id}`}>${this.props.question.value}</Link></li>
      )
  },
  handleClick(e) {
    e.preventDefault();
    this.props.question.markComplete();
  }
});
