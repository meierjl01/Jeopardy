import React from 'react';
import store from '../store';
import { Link } from 'react-router';

export default React.createClass({
  getInitialState(){
    //trying to go get the collection that matches the category id to put through the get question function so I can get the single qustion to display to the user
    let question = store.categories.get(this.props.params.categoryId).getQuestion(this.props.params.clueId);
    // console.log(this.props.params.categoryId);
    // console.log(this.props.params.clueId);
    return{
      // cool: 'hi',
      question,
      // question: store.categories.get(this.props.params.categoryId).getQuestion(this.props.params.clueId)
      }
  },
  render(){
      // console.log(this.state.question.question);
    let q = this.state.question.question;
    let a = this.state.question.answer;
    // .toLowerCase().replace(/\<[\/]?i\>/g, '');
      console.log(a);
    return(
      <div id="question-box">
        <h3>Question: {q} </h3>
          <form>
            <input id="answer-input" type="text" placeholder="Answer"/>
            <Link id="answer-button" to="#" onClick={this.handleSubmit}>Answer</Link>
            <Link id="pass" to="#">Pass</Link>
          </form>
      </div>
    );
  },
handleSubmit(e) {
  e.preventDefault();
  // console.log('hi');
  let userAnswer = document.getElementById('answer-input').value;
  // console.log(userAnswer);
  if (userAnswer === this.state.question.answer) {
    // console.log('correct');
    console.log(store.session);
    store.session.addScore(this.state.question.value);
    alert(`correct!`);
     window.location = '#';
  } else {
    alert(`Incorrect. The answer was ${this.state.quesiton.answer}`);
    // console.log('incorrect')
    window.location = '#';
  }
},
});
