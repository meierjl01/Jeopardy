import React from 'react';
import { Link } from 'react-router';

    //keep track of if it's been clicked on or not
    //put value of quesiton in, instead of $$ amount

    //in the model, put that it's been answered before
    //don't need state; is question in answered list -- if no, show to click it on;

export default React.createClass({
  // ask if each questoin has been answered. call the function from the model
  render() {
    // console.log(this.props.question);
    let oneQuestion;
    // if(clue.answered === false) {
    if(this.props.question.get('answered') === false) {
      return (
          <li key={this.props.question.get('id')} onClick={this.handleClick} id="unanswered"><Link  to={`/questions/${this.props.question.get('category_id')}/${this.props.question.get('id')}`}>${this.props.question.get('value')}</Link></li>
        )
      } else {
        <li id="answered">Answered Quesiton</li>
      };
    return <li>{oneQuestion}</li>;
  },
  handleClick(e) {
    e.preventDefault();
    this.props.question.markComplete();
  }
});
