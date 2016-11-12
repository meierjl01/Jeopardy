import React from 'react';
import store from '../store';

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
        <h2>Question: {q}</h2>
          <form>
            <input id="answer" type="text" placeholder="Answer"/>
            <button onSubmit={this.handleSubmit}>Answer</button>
            <input type="submit" onClick={this.handlePass} value="Pass" />
          </form>
      </div>
    );
  },
handleSubmit(e) {
  e.preventDefault();
  console.log('hi');
  // let userAnswer = document.getElementById('answer').value;
  // if (userAnswer === a) {
  //   console.log('correct answer');
  //   //
  // } else console.log('incorrect answer');
},
handlePass(e) {
  e.preventDefault();
},
});
