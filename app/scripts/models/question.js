import Backbone from 'backbone';

export default Backbone.Model.extend({
    defaults : {
      text    : '',
      answer  : '',
      points  : '',
      category: '',
      id      : '',
    }
});
