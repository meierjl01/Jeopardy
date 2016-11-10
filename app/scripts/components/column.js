import React from 'react';
import QuestionBoxList from './questionboxlist';

export default React.createClass({
  render() {
    // console.log(this.props.category.title);
    return (
      <div>
        <h2>{this.props.category.title}</h2>
        <QuestionBoxList clues={this.props.category.clues}/>
      </div>
    );
  }
});
