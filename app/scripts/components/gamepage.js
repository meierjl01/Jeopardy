import React from 'react';
import categories from '../collections/categories';
import store from '../store';
import Board from './board';

export default React.createClass({
  getInitialState(){
    return {
      categories: store.categories.toJSON()
    };
  },

  componentWillMount() {
    store.categories.renderCategories();
    store.categories.on('change update', () => {
      this.setState({
        categories: store.categories.toJSON()
      });
    });
  },

  render() {
    // window.console.log(this.state);
    return (
      <div id="gameboard">
        <Board categories={this.state.categories} />
        {this.props.children}
      </div>
    );
  }

});
