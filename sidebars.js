module.exports = {
  docs: {
    Introduction: ['introduction/overview', 'introduction/support'],
    'Getting Started': [
      'getting-started/setup',
      'getting-started/emulated-data',
      'getting-started/connecting-first-device',
      'getting-started/viewing-device-data',
      'getting-started/connecting-downstream-services',
      'getting-started/buy-and-scale',
    ],
    Tutorials: [
      "tutorials/arduino-esp32-and-enviro-sensor"
    ],
    Developers: [
      'developers/licenses',
      // 'developers/azure-iot-hub-explained',
      {
        'Device Setup': [
          'developers/device-setup/overview',
          'developers/device-setup/iot-best-practice-schema-explained',
          {
            Connect: [
              //'developers/device-setup/connect/overview',
              'developers/device-setup/connect/http',
              //'developers/device-setup/connect/azure-iot-devices-sdk',
              //'developers/device-setup/connect/device-simulator',
              //'developers/device-setup/connect/rasp-pi-spark-fun',
              //'developers/device-setup/connect/node-red',
            ],
          },
        ],
        'Storage Access': [
          //  'developers/storage-access/overview',
          {
            Examples: [
              'developers/storage-access/examples/power-bi', 
              'developers/storage-access/examples/azure-ml',
              'developers/storage-access/examples/grafana',
              'developers/storage-access/examples/tableau',
            ],
          },
        ],
      },
    ],
  },
  api: {
    Introduction: ['api/introduction/overview'],
  },
  drafts: {
    Blogs: ['drafts/template-blog-entry'],
  },
};
