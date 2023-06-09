const { bases, vegetables, meats, sauces } = require('../data/menu');

const {
  GraphQLObjectType,

  GraphQLID,

  GraphQLString,

  GraphQLList,

  GraphQLSchema,
} = require('graphql');

const BaseType = new GraphQLObjectType({
  name: 'Base',

  fields: () => ({
    id: { type: GraphQLID },

    menuItem: { type: GraphQLString },

    name: { type: GraphQLString },
  }),
});

const VegetableType = new GraphQLObjectType({
  name: 'Vegetable',

  fields: () => ({
    id: { type: GraphQLID },

    menuItem: { type: GraphQLString },

    name: { type: GraphQLString },
  }),
});

const MeatType = new GraphQLObjectType({
  name: 'Meat',

  fields: () => ({
    id: { type: GraphQLID },

    menuItem: { type: GraphQLString },

    name: { type: GraphQLString },
  }),
});

const SauceType = new GraphQLObjectType({
  name: 'Sauce',

  fields: () => ({
    id: { type: GraphQLID },

    menuItem: { type: GraphQLString },

    name: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: {
    bases: {
      type: new GraphQLList(BaseType),

      resolve(parent, args) {
        return bases;
      },
    },

    base: {
      type: BaseType,

      args: { id: { type: GraphQLID } },

      resolve(parent, args) {
        return bases.find((base) => base.id === args.id);
      },
    },

    vegetables: {
      type: new GraphQLList(VegetableType),

      resolve(parent, args) {
        return vegetables;
      },
    },

    vegetable: {
      type: VegetableType,

      args: { id: { type: GraphQLID } },

      resolve(parent, args) {
        return vegetables.find((vegetable) => vegetable.id === args.id);
      },
    },

    meats: {
      type: new GraphQLList(MeatType),

      resolve(parent, args) {
        return meats;
      },
    },

    meat: {
      type: MeatType,

      args: { id: { type: GraphQLID } },

      resolve(parent, args) {
        return meats.find((meat) => meat.id === args.id);
      },
    },

    sauces: {
      type: new GraphQLList(SauceType),

      resolve(parent, args) {
        return sauces;
      },
    },

    sauce: {
      type: SauceType,

      args: { id: { type: GraphQLID } },

      resolve(parent, args) {
        return sauces.find((sauce) => sauce.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
