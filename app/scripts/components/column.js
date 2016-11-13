import React from 'react';
import QuestionBoxList from './questionboxlist';

export default React.createClass({
  render() {
    return (
          <div id="single-category">
            <h2 id="category">{this.props.category.title}</h2>
            <QuestionBoxList clues={this.props.category.clues}/>
          </div>
    );
  }
});
