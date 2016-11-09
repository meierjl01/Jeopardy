import Backbone from 'backbone';
import Question from '../models/question';

export default Backbone.Collection.extend ({
  model: Question,
  url: '',
  // parse(data) {
  //
  // }
});
