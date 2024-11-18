import { users } from "../dummy-data/data.js";

const userResolver = {
  Query: {
    users: () => {
      return users;
    },
    user: async (_, { userId }) => {
      try {
        const user = users.find((user) => user._id === userId);
        if (!user) {
          throw new Error(`User with the ID ${userId} not found!`);
        }
        return user;
      } catch (error) {
        console.error(error);
        throw new Error("An unexpected error occurred while fetching the user");
      }
    },
  },

  Mutation: {},
};
export default userResolver;
