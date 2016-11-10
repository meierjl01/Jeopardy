import Backbone from 'backbone';
import category from '../models/category';
import $ from 'jquery';

export default Backbone.Collection.extend({
    model: category,
    parse(a) {
      // console.log(a);
      return a;
    },
    renderCategories() {

        $.ajax({
            type: 'GET',
            url: 'http://jservice.io/api/category?id=897',
            success: (response) => {
                this.add(response);
            }
        });

        $.ajax({
            type: 'GET',
            url: 'http://jservice.io/api/category?id=114',
            success: (response) => {
                this.add(response);
            }
        });

        $.ajax({
            type: 'GET',
            url: 'http://jservice.io/api/category?id=26',
            success: (response) => {
                this.add(response);
            }
        });

        $.ajax({
            type: 'GET',
            url: 'http://jservice.io/api/category?id=309',
            success: (response) => {
                this.add(response);
            }
        });

        $.ajax({
            type: 'GET',
            url: 'http://jservice.io/api/category?id=574',
            success: (response) => {
                this.add(response);
            }
        });

        $.ajax({
            type: 'GET',
            url: 'http://jservice.io/api/category?id=51',
            success: (response) => {
                this.add(response);
            }
        });
    }
});
