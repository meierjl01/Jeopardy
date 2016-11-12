import Backbone from 'backbone';
import $ 'jquery';

export default Backbone.Model.extend ({
  idAttribute: 'id',
    defaults: {
      points: 0,
      correct: 0,
    },
    addPoints(value) {
      this.set('points', this.get('points')+value);
    },
    totalCorrect() {
      this.set('correct', this.get('correct') + 1);
    }
});
