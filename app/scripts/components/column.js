import React from 'react';
import QuestionBoxList from './questionboxlist';

export default React.createClass({
  render() {
    return (
      <div>
          <div id="columns">
            <h2>{this.props.category.title}</h2>
            <QuestionBoxList clues={this.props.category.clues}/>
          </div>
      </div>
    );
  }
});
