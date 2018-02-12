'use strict';

module.exports = function() {

  this.Given(/^I have an empty grocery list$/, function(callback) {
    callback();
  });

  this.When(/^I add an item to the list$/, function(callback) {
    callback();
  });

  this.Then(/^The grocery list contains a single item$/, function(callback) {
    callback();
  });

  this.Then(/^I can access that item from the grocery list$/, function(callback) {
    callback();
  });

};