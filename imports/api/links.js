import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('links', function() {
    if (this.userId) {
      return Links.find({ userId: this.userId });
    }
  });
}

Meteor.methods({});
