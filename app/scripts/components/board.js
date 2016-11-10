import React from 'react';
import Column from './column';

export default React.createClass({
  render() {
    let allColumns;
    allColumns = this.props.categories.map((category, i, arr) => {
      return <Column key={category.title} category={category} />
    })
    return (
        <ul id="columns">{allColumns}</ul>
    );
  }
});
