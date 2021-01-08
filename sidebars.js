module.exports = {
  someSidebar: {
    Introduction: [
      'introduction/overview',
      'introduction/support'
    ],
    'Getting Started': [
      'getting-started/setup',
      'getting-started/emulated-data',
      'getting-started/connecting-your-first-device',
      'getting-started/viewing-your-device-data',
      'getting-started/connecting-your-downstream-services',
      'getting-started/scaling-your-devices',
    ],
    Developers: [
      {
        'Device Setup': [
          'developers/device-setup/explained',
          {
            Connect: [
              'developers/device-setup/connect/overview',
              'developers/device-setup/connect/rasp-pi-spark-fun',
              'developers/device-setup/connect/node-red',
            ],
          },
        ],
      },
      'developers/iot-best-practice-schema-explained',
      'developers/azure-iot-hub-explained',
    ],
  },
};
