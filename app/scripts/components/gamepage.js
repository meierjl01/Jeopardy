import React from 'react';
import categories from '../collections/categories';
import store from '../store';
import Board from './board';

export default React.createClass({
  getInitialState(){
    return {
      categories: store.categories.toJSON(),
      session: store.session
    };
  },

  componentWillMount() {
    store.categories.renderCategories();
    store.categories.on('change update', () => {
      this.setState({
        categories: store.categories.toJSON()
      });
    });
    store.session.on('update change', () => {
      this.setState({
        session: store.session
      });
    });
  },

  render() {
    // window.console.log(store.session.attributes.points);
    return (
      <div id="gameboard">
        <div id="score">Score: ${store.session.attributes.points}</div>
        <div id="answer">Answer: </div>
        <Board categories={this.state.categories} />
        {this.props.children}
      </div>
    );
  }

});
