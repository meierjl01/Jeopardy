import Backbone from 'backbone';

export default Backbone.Model.extend({
    initialize(a) {
    this.set(this.parse(a));
  },
    defaults: {
      name      : '',
      id        : '',
      clues     : [],
    },
    parse: function(response) {
//want to save id and quesiton and value for the new array of questions
    let filtered = {
      title: response.title
    }
      let questions = [];
        console.log(response);
    return {
      clues: ['hi', 'smart']
    }
  }
})
