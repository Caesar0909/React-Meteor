ASIAPar1Schema = new SimpleSchema({
  Cervical: {
    type: Object
  },
  "Cervical.2.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.2.Motor.Left": {
    type: String,
    label: "L",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.2.Touch.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.2.Touch.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.2.Pin.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.2.Pin.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.3.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.3.Motor.Left": {
    type: String,
    label: "L",
    min: -1,
    max: 5,
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.3.Touch.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.3.Touch.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.3.Pin.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.3.Pin.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.4.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.4.Motor.Left": {
    type: String,
    label: "L",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.4.Touch.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.4.Touch.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.4.Pin.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.4.Pin.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.5.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.5.Motor.Left": {
    type: String,
    label: "L",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.5.Touch.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.5.Touch.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.5.Pin.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.5.Pin.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.6.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.6.Motor.Left": {
    type: String,
    label: "L",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.6.Touch.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.6.Touch.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.6.Pin.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.6.Pin.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.7.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.7.Motor.Left": {
    type: String,
    label: "L",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.7.Touch.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.7.Touch.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.7.Pin.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.7.Pin.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.8.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.8.Motor.Left": {
    type: String,
    label: "L",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Cervical.8.Touch.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.8.Touch.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.8.Pin.Right": {
    type: String,
    label: "R",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  "Cervical.8.Pin.Left": {
    type: String,
    label: "L",
    allowedValues: ["NT", "0", "1", "2"],
    optional: true,
    autoform: {
      afFieldInput: {
        value: 2,
        options: "allowed",
        firstOption: false
      }
    }
  },
  Thoracic: {
    type: Object,
    label: "Thoracic"
  },
  "Thoracic.1.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.1.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.1.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.1.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.1.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.1.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.2.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.2.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.2.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.2.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.2.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.2.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.3.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.3.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.3.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.3.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.3.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.3.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.4.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.4.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.4.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.4.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.4.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.4.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.5.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.5.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.5.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.5.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.5.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.5.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.6.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.6.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.6.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.6.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.6.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.6.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.7.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.7.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.7.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.7.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.7.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.7.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.8.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.8.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.8.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.8.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.8.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.8.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.9.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.9.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.9.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.9.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.9.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.9.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.10.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.10.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.10.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.10.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.10.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.10.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.11.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.11.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.11.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.11.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.11.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.11.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.12.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.12.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.12.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.12.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.12.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Thoracic.12.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  Lumbar: {
    type: Object
  },
  "Lumbar.1.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.1.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.1.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.1.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.1.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.1.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.2.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.2.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.2.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.2.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.2.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.2.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.3.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.3.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.3.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.3.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.3.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.3.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.4.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.4.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.4.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.4.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.4.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.4.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.5.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.5.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.5.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.5.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "TLumbar.5.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Lumbar.5.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  Sacral: {
    type: Object
  },
  "Sacral.1.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.1.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.1.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.1.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.1.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.1.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.2.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.2.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.2.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.2.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.2.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.2.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.3.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.3.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.3.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.3.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.3.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.3.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.4.Motor.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.4.Motor.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.4.Touch.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.4.Touch.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.4.Pin.Right": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },
  "Sacral.4.Pin.Left": {
    type: String,
    label: "R",
    optional: true,
    allowedValues: ["NT", "0", "1", "2", "3", "4", "5"],
    autoform: {
      afFieldInput: {
        value: "NT",
        class: "disabled field"
      }
    }
  },

  MaxMotorRight: {
    type: Number,
    label: "Motor (R) Maximum",
    optional: true
  },
  MaxMotorLeft: {
    type: Number,
    label: "Motor (L) Maximum",
    optional: true
  },
  MaxMotor: {
    type: Number,
    label: "Motor Total",
    optional: true
  },
  MaxTouchRight: {
    type: Number,
    label: "Touch (R) Maximum",
    optional: true
  },
  MaxTouchLeft: {
    type: Number,
    label: "Touch (L) Maximum",
    optional: true
  },
  MaxTouch: {
    type: Number,
    label: "Touch Total",
    optional: true
  },
  MaxPinRight: {
    type: Number,
    label: "Pin (R) Maximum",
    optional: true
  },
  MaxPinLeft: {
    type: Number,
    label: "Pin (L) Maximum ",
    optional: true
  },
  MaxPin: {
    type: Number,
    label: "Pin Total",
    optional: true
  },
  UER: {
    type: Number,
    label: "Upper extremity (R)",
    optional: true
  },
  UEL: {
    type: Number,
    label: "Upper extremity (L)",
    optional: true
  },
  UEMS: {
    type: Number,
    label: "Upper extremity Total",
    optional: true
  },
  LER: {
    type: Number,
    label: "Lower extremity (R)",
    optional: true
  },
  LEL: {
    type: Number,
    label: "Lower extremity (L)",
    optional: true
  },
  LEMS: {
    type: Number,
    label: "Lower extremity Total",
    optional: true
  },
  LTR: {
    type: Number,
    label: "Touch (R) Sub-total",
    optional: true
  },
  LTL: {
    type: Number,
    label: "Touch (L) Maximum",
    optional: true
  },
  LT: {
    type: Number,
    label: "Touch Total",
    optional: true
  },
  PPR: {
    type: Number,
    label: "Pin (R) Sub-total",
    optional: true
  },
  PPL: {
    type: Number,
    label: "Pin (L) Sub-total ",
    optional: true
  },
  PPT: {
    type: Number,
    label: "Pin Total",
    optional: true
  },
  SensoryRightNeuro: {
    type: String,
    label: "Sensory Right",
    optional: true
  },
  SensoryLeftNeuro: {
    type: String,
    label: "Sensory Left",
    optional: true
  },
  MotorLeftNeuro: {
    type: String,
    label: "Motor Left",
    optional: true
  },
  MotorRightNeuro: {
    type: String,
    label: "Motor Right",
    optional: true
  },
  SensoryRightZone: {
    type: String,
    label: "Sensory Right",
    optional: true
  },
  SensoryLeftZone: {
    type: String,
    label: "Sensory Left",
    optional: true
  },
  MotorLeftZone: {
    type: String,
    label: "Motor Left",
    optional: true
  },
  MotorRightZone: {
    type: String,
    label: "Motor Right",
    optional: true
  },
  NeurologicalLevelNeuro: {
    type: String,
    label: "Neurological level",
    optional: true
  },
  CompleteInjury: {
    type: Boolean,
    label: "Injury",
    optional: true,
    autoform: {
      trueLabel: "Complete",
      falseLabel: "Incomplete"
    }
  },
  DeepAnalPressure: {
    type: Boolean,
    label: "Deep pressure",
    optional: false,
    autoform: {
      type: "select",
      value: true,
      type: "boolean-radios",
      trueLabel: "Yes",
      falseLabel: "No"
    },
    autoValue: function() {
      var deep = this.field("DeepAnalPressure");
      if (deep.isSet) {
        if (this.isInsert) {
          return true;
        } else if (this.isUpsert) {
          return { deep: deep.value };
        } else {
          this.unset(); // Prevent user from supplying their own value
        }
      }
    }
  },
  VoluntaryAnalContraction: {
    type: Boolean,
    label: "Voluntary contraction",
    optional: false,
    autoform: {
      type: "select",
      value: true,
      type: "boolean-radios",
      trueLabel: "Yes",
      falseLabel: "No"
    },
    autoValue: function() {
      var voluntary = this.field("VoluntaryAnalContraction");
      if (voluntary.isSet) {
        if (this.isInsert) {
          return true;
        } else if (this.isUpsert) {
          return { deep: voluntary.value };
        } else {
          this.unset(); // Prevent user from supplying their own value
        }
      }
    }
  },
  ZoneOfPartialSensoryRight: {
    type: String,
    label: "ZPP Sensory Right",
    optional: true
  },
  ZoneOfPartialSensoryLeft: {
    type: String,
    label: "ZPP Sensory Left",
    optional: true
  },
  ZoneOfPartialMotorRight: {
    type: String,
    label: "ZPP Motor Right",
    optional: true
  },
  ZoneOfPartialMotorLeft: {
    type: String,
    label: "ZPP Motor Left",
    optional: true
  },
  ASIAGrade: {
    type: String,
    label: " Grade",
    optional: true
  },
  InjuryLevel: {
    type: String,
    label: " score",
    optional: true
  }
});
