//import mongoose from "mongoose";
import { Friends } from "./dbConnectors"; // Friends is a mongoose document.

/*
This is where we define the behavior for the Queries. 
This is like the Facade. This is where we do direct things on database. 
*/
// Friends has the same methods as MongoDB usually does.
// RESOLVERS
export const resolvers = {
  // GETS
  Query: {
    getOneFriend: (root, { id }) => {
      return Friends.findById(id);
    },
    allFriends: () => {
      return Friends.find({});
    },
  },
  // ALL MUTATIONS - PUT, POST, DELETE
  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        age: input.age,
        language: input.language,
        email: input.email,
        contacts: input.contacts,
      });
      // This is what is assigned directly from the database.
      newFriend.id = newFriend._id;
      // In Video he returns new Promise, but .save() saves the document and returns a promise.
      // So this is cleaner.
      return newFriend.save();
    },
    updateFriend: (root, { input }) => {
      return Friends.findOneAndUpdate({ _id: input.id }, input, { new: true });
    },
    deleteFriend: async (root, { id }) => {
      /**
       * EXAMPLE
       * mutation {
                    deleteFriend(id:"EXAMPLE_ID")
                  }
         Notice there is no {} afterwards. 
       */
      try {
        await Friends.findOneAndRemove({ _id: id }); // _id because that is what the ID is called in MongoDB
        return `Friend with id: ${id} deleted`;
      } catch (err) {
        return `Failed to delete friend with id: ${id}`;
      }
    },
  },
};