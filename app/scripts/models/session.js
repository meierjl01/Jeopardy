import Backbone from 'backbone';
import $ from 'jquery';

export default Backbone.Model.extend ({
  idAttribute: 'id',
    defaults: {
      points: 0,
      question: null,
    },
    addPoints(value) {
      this.set('points', this.get('points')+value);
    },
    // answer(userAnswer) {
    //   let answer === this.get('quesiton').get('answer');
    //   if (userAnswer === answer) {
    //     alert (`Correct!`);
    //     this.addScore();
    //   } else {
    //     //put in correct answer
    //     alert (`Incorrect`);
    //   }
    // },
});
