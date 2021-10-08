const { Car } = require('../models');

const resolvers = {
  Query: {
    cars: async () => {
      return Car.find();
    },
    cars: async (parent, { make }) => {
      return Car.findOne({ make });
    }
  }
};

module.exports = resolvers;