const contentful = require('contentful')

const config = {
  space: "xkipk5rzn6kp",
  accessToken: "fce2285ab273f22af7e8e70e4e365e5b0b76e25b2a30b7899558f07e2ca65da9"
}

module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}
