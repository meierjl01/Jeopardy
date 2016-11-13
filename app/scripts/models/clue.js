import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute : 'id',
  markComplete() {
    // console.log(this.clue.answered === true);
    this.get('answered') === true;
  }
});
