const userResolvers = {
  Query: {
    users: (root, args, { dataSources }, info) => {
      console.log({ info })
      dataSources.usersAPI.getUsers()
    },
    user: (root, { id }, { dataSources }) =>
      dataSources.usersAPI.getUserById(id),
  },
}

module.exports = userResolvers
