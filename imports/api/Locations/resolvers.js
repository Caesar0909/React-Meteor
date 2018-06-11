import Locations from "./collection";

export default {
  Query: {
    locations() {
      return Locations.find({}).fetch();
    }
  }
};
