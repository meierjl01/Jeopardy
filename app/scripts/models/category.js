import Backbone from 'backbone';

export default Backbone.Model.extend({
    initialize(a) {
    this.set(this.parse(a));
    },
    defaults: {
      name      : '',
      id        : '',
      clues     : [
        {
          question: '',
          answer: '',
          id: '',
          answered: false,
        }
      ],
    },
    parse(response) {
//want to save id and quesiton and value for the new array of questions
    let filtered = {
      title: response.title,
      id: response.id,
      clues: []
    };
    response.clues.forEach((clue, i, arr) => {
      let x = 0;
      let points = [200, 400, 600, 800, 1000];
      do {
        if (clue.value === points[x]) {
          clue.answered = false;
          filtered.clues[x] = clue;
        }
        x++;
      } while (x <= points.length);
    });
    return filtered;
  },

markComplete() {
  this.clue.answered === true;
},
//function to use the clueid to get the quesiton and display it on the page for the user;
//filter to get the one clue that matches the clueid

//coerce them both into strings!!

getQuestion(clueId) {
  // console.log(clueId)
   let question = this.get('clues').filter((clue, i, arr) => {
    //  console.log(clue.id, clueId);
     if(String(clue.id) === String(clueId)) {
       return clue;
     }
   });
  //  console.log(question);
   //return first thing in the array so it's an object
   return question[0];
},
});
