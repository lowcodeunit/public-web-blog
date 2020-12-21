module.exports = {
  someSidebar: {
    Introduction: ['introduction/overview'],
    'Getting Started': [
      'getting-started/setup',
      'getting-started/emulated-data',
      'getting-started/connecting-your-first-device',
      'getting-started/viewing-your-device-data',
      'getting-started/connecting-your-downstream-services',
      'getting-started/scaling-your-devices',
    ],
    Developers: [
      'developers/iot-best-practice-schema-explained',
      // 'developers/azure-iot-hub-explained',
      {
        'Device Setup': [
          'developers/device-setup/explained',
          {
            Connect: [
              'developers/device-setup/connect/overview',
              'developers/device-setup/connect/http',
              'developers/device-setup/connect/azure-iot-devices-sdk',
              'developers/device-setup/connect/device-simulator',
              'developers/device-setup/connect/rasp-pi-spark-fun',
              'developers/device-setup/connect/node-red',
            ],
          },
        ],
        'Storage Access': [
          'developers/storage-access/overview',
        ],
      },
    ],
  },
};
