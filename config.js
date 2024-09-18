{
  "workflowApiVersion": "1.1",
  "name": "Courrier",
  "description": "Canal courrier",
  "metaData": {
    "icon": "images/icon.svg",
    "category": "Message"
  },
  "type": "REST",
  "lang": {
    "en-US": {
      "name": "Localized Custom Activity Name",
      "description": "Localized Custom Activity Description",
      "label1": "Localized Step 1",
      "label2": "Localized Step 2",
      "label3": "Localized Step 3"
    }
  },
  "arguments": {
    "execute": {
      "inArguments": [
        {
          "staticValue": 0,
          "databoundEmailAddress": "{{Event.EventKey.EmailAddress}}"
        }
      ],
      "outArguments": [
        {
          "returnValue": "default"
        }
      ],
      "timeout": 10000,
      "retryCount": 1,
      "retryDelay": 1000,
      "concurrentRequests": 6,
      "url": "https://example.com/execute",
      "securityOptions": {
        "securityType": "securityContext",
        "securityContextKey": "EXTERNAL_KEY"
      }
    }
  },
  "configurationArguments": {
    "save": {
      "url": "https://example.com/save",
      "securityOptions": {
        "securityType": "securityContext",
        "securityContextKey": "EXTERNAL_KEY"
      }
    },
    "publish": {
      "url": "https://example.com/publish",
      "securityOptions": {
        "securityType": "securityContext",
        "securityContextKey": "EXTERNAL_KEY"
      }
    },
    "validate": {
      "url": "https://example.com/validate",
      "securityOptions": {
        "securityType": "securityContext",
        "securityContextKey": "EXTERNAL_KEY"
      }
    },
    "stop": {
      "url": "https://example.com/stop",
      "securityOptions": {
        "securityType": "securityContext",
        "securityContextKey": "EXTERNAL_KEY"
      }
    }
  },
  "wizardSteps": [
    {
      "label": "label1",
      "key": "step1"
    },
    {
      "label": "label2",
      "key": "step2"
    },
    {
      "label": "label3",
      "key": "step3",
      "active": false
    }
  ],
  "userInterfaces": {
    "configModal": {
      "fullscreen": true,
      "url": "configModal.html"
    },
    "runningModal": {
      "url": "runningModal.html"
    },
    "runningHover": {
      "url": "runningHover.html"
    }
  },
  "schema": {
    "arguments": {
      "execute": {
        "inArguments": [
          {
            "staticValue": {
              "dataType": "Number",
              "isNullable": false,
              "direction": "in"
            },
            "databoundEmailAddress": {
              "dataType": "Email",
              "isNullable": false,
              "direction": "in"
            }
          }
        ],
        "outArguments": [
          {
            "returnValue": {
              "dataType": "Text",
              "isNullable": false,
              "direction": "out"
            }
          }
        ]
      }
    }
  },
  "copySettings": {
    "allowCopy": true,
    "ignoreArguments": ["eventDefinitionKey"]
  }
}
