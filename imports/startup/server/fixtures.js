import seeder from "@cleverbeagle/seeder";
import { Meteor } from "meteor/meteor";
import Location from "../../api/Locations/collection";

seeder(Location, {
  environments: ["development", "staging"],
  wipe: true,
  data: [
    {
      _id: "kFmraApdaMAfhE36M",
      type: "Organization",
      name: "University Alberta Hospital",
      code: "UAH"
    },
    {
      _id: "5rs76uEsJK58gEbgZ",
      type: "Organization",
      name: "Royal Alexander Hospital",
      code: "RAH",
      partOf: "kFmraApdaMAfhE36M"
    },
    {
      _id: "xGreP3grKtkG5AYAi],",
      type: "Organization",
      name: "Misecordia Community Hospital",
      code: "MCH"
    }
  ]
});

seeder(Meteor.users, {
  environments: ["development", "staging"],
  noLimit: true,
  data: [
    {
      email: "admin@admin.com",
      password: "password",
      profile: {
        name: {
          first: "Andy",
          last: "Warhol"
        }
      },
      roles: ["admin"]
    }
  ],
  modelCount: 5,
  model(index, faker) {
    const userCount = index + 1;
    return {
      email: `user+${userCount}@test.com`,
      password: "password",
      profile: {
        name: {
          first: faker.name.firstName(),
          last: faker.name.lastName()
        }
      },
      roles: ["user"]
    };
  }
});
