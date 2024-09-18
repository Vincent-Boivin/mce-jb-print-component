{
  "workflowApiVersion": "1.1",
  "name": "Courrier",
  "description": "Canal courrier",
  "metaData": {
    "icon": "images/icon-courrier.png",
    "category": "Message"
  },
  "type": "REST",
  "lang": {
    "en-US": {
      "name": "REST Activity (Workflow API v1.1)",
      "description": "An example REST activity using workflow API v1.1 format."
    }
  },
  "arguments": {
    "execute": {
      "inArguments": [
        {
          "emailAddress": "{{InteractionDefaults.Email}}"
        },
        {
          "phoneNumber": "{{Contact.Default.PhoneNumber}}"
        }
      ],
      "outArguments": [
        {
          "foundSignupDate": ""
        }
      ],
      "url": "https://some-endpoint.com/execute"
    }
  },
  "configurationArguments": {
    "save": {
      "url": "URI/for/your/activity/save"
    },
    "publish": {
      "url": "URI/for/your/activity/publish"
    },
    "validate": {
      "url": "URI/for/your/activity/validate"
    },
    "stop": {
      "url": "URI/for/your/activity/stop"
    }
  },
  "wizardSteps": [
    { "label": "Step 1", "key": "step1" },
    { "label": "Step 2", "key": "step2" },
    { "label": "Step 3", "key": "step3" },
    { "label": "Step 4", "key": "step4", "active": false }
  ],
  "userInterfaces": {
    "configModal": {
      "height": 200,
      "width": 300,
      "fullscreen": true
    }
  },
  "schema": {
    "arguments": {
      "execute": {
        "inArguments": [
          {
            "phoneNumber": {
              "dataType": "Phone",
              "isNullable": false,
              "direction": "in"
            }
          },
          {
            "emailAddress": {
              "dataType": "Email",
              "isNullable": false,
              "direction": "in"
            }
          }
        ],
        "outArguments": [
          {
            "foundSignupDate": {
              "dataType": "Date",
              "direction": "out",
              "access": "visible"
            }
          }
        ]
      }
    }
  }
}
