---
title: Getting Started - Connecting Your First Device
hide_title: true
sidebar_label: Connect Your Device
---

# Connecting Your First Device

If you worked through our emulated data, then you've seen the dashboard in action.  Now its time to connect your own device and see its data flowing through the system.

## Enroll a Device

Getting started with a new device is simple, all you need to do is enter a device name and enroll it.

![Enroll New Device](/img/screenshots/dashboard-enroll-device.png)

We'll start you off with a symmetric key protected device, and you can move to other security in the future.  Once created you'll be able to grab the connection string for use in the next steps.

![Device List](/img/screenshots/dashboard-device-list-first-device.png)

## Send Device Data

At times, the IoT process can feel like a challenge.  We've done a lot to springboard your cloud-native IoT adoption, but now we need to get your actual hardware sending data.  At scale, there is more to do, but we'll get you going with the basics first.

### Best Practice IoT Ensemble Schema

When starting with our shared plans, to get the most out of the system, there is a [best practice schema](../developers/iot-best-practice-schema-explained) that we recommend you send your IoT messages in.  This allows you to collect device data, sensor readings, and sensor metadata to deliver a rich, pre-configured IoT experience.   In short, the structure is as follows:

```json
{
    "DeviceID": "{your-device-id}",
    "DeviceType": "{your-device-type}",
    "Version": "{your-message-version}",
    "Timestamp": "{telemetry-timestamp}",
    "DeviceData": {
        "PropertyName": {valid-json-value},
        ...
    },
    "SensorReadings": {
        "PropertyName": {number},
        ...
    },
    "SensorMetadata": {
        "_": {
            "PropertyName": {number 0-1.0},
            ...
        },
        "{SensorReadingPropertyName}": {
            "PropertyName": {number 0-1.0},
            ...
        }
    },
}
```

Here is a breif explanation of our best practice schema, and how you can use it:

- **DeviceID, DeviceType, Version**<br />
These values are under your control and should be strings.  The Device ID is required and we recommend you use the Device Name from the device you created (though not required).  The DeviceType and Version are optional, though recommended to properly work with your historic data.
- **Timestamp**<br />
To properly sequence the messages you send from device to cloud, a timestamp is required.  It should be in the ______ format as shown in the example below.
- **DeviceData**<br />
When working with sensor/gateway setups, there is often a set of information more static to your device.  This could be latitudue and longitude information, building information, or anything else that isn't a sensor reading.  
- **SensorReadings**<br />
The information collected here should be numeric in order to work with the downstream processing.  If your sensor is not returning numeric values, you should convert them on the client side.
- **SensorMetadata**<br />
On top of the readings our sensors are taking, there can often be additional information we need to track (power, connectivity) to use for health monitoring and maintenance.  These values should be numeric and represent any valid number between 0 and 1 where 1 represents fully functioning and 0 represents not working.  As an example, a battery that is fully charged would be set to 1, where as a depleted battery would be set to 0.
  - **_**<br />
  This special property on the SensorMetadata allows you to send information relating to your gateway, or other non-sensor health information.

We do have a [detailed explanation of the best practice schema](../developers/iot-best-practice-schema-explained) if you need more information on how to use it from your device.  Here is a full example of what the telemetry payload would look like (as used by our emulated device):

```json
{
    "DeviceID":"Emulated-4",
    "DeviceType":"Generic",
    "Timestamp":"2020-12-10T00:26:30.0217778+00:00",
    "Version":"0.0.2",
    "DeviceData": {
        "Latitude": 40.7578,
        "Longitude": -104.9733,
        "Floor": 2,
        "Room": "Conference Room 5"
    },
    "SensorReadings": {
        "Temperature": 105,
        "Humidity": 83,
        "Occupancy": 8,
        "Occupied": 1
    },
    "SensorMetadata": {
        "_": {
            "SignalStrength": 1
        },
        "Temperature": {
            "Battery": 0.4
        }
    },
}
```

:::note

If you don't use the best practice schema, your data will still be accessible throughout the system, however, some more advanced features like predeictive maintenance and observations won't be accessible.

:::

### Basics of Connecting

With an understanding of the device schema options, connecting  is fairly straight forward.  The following connection quick starts will walk you through some initial ways to get data flowing, then you can dig into more complex connection scenarios.  

All you'll need for the following sections is your device connection string.   Copy it from the dashboard after you've created your first device.

![Copy Connection String](/img/screenshots/dashboard-device-list-copy-connection-string.png)

:::note

When connecting your devices, you are connecting to a cloud-native Azure IoT Hub.  We don't place any technology between you and the IoT Hub, making it possible for you to develop solutions with the full capabilities of Azure Iot Hub.  [Read more](https://docs.microsoft.com/en-us/azure/iot-hub/quickstart-send-telemetry-cli) on how you can connect your devices using your connection string.

:::

## Connection Quick Starts

Starting off simple, then working up to some real device connection examples, we'll walk you through some common connection workflows.  Check out our detailed guide on [device setup](../developers/device-setup/explained) for more ways to connect and get your data flowing.

### Send Via Dashboard

To get started, using our send device message form from the dashboard is the easiest way to start seeing what data for your devices would look like throughout the system.  To open up the form, go to the <img src="/img/screenshots/icon-devices-telemetry.png" class="text-image" /> Devices Telemetry section and at the bottom click the <img src="/img/screenshots/dashboard-send-device-message.png" class="text-image" /> button.

![Send Device Message](/img/screenshots/dashboard-send-device-message-dialog.png)

Once opened, select the device you would like to send from and adjust any of the values.  Press <img src="/img/screenshots/dashboard-send-device-message-dialog-send-message.png" class="text-image" /> when your ready, and on the next telemetry sync your device data will be visible.  The telemetry table is only one way to see your data, read on for more details on [viewing your data](viewing-your-device-data).

### Send Via HTTP

Here we'll layout how you can use your connection string to generate an HTTP request to send data to the Azure IoT Hub.

[Connect with HTTP](../developers/device-setup/connect/http)

### Device Simulator

Quick connect with simulator and download, reference to full article for the rest

[Connect with Device Simulator](../developers/device-setup/connect/device-simulator)

### Raspberry Pi with SparkFun

Brief explanation of what this entails, with a deep link into a full article

[Connect with Raspberry PI and SparkFun](../developers/device-setup/connect/rasp-pi-spark-fun)

### Node Red

Brief explanation of what node red is and what this entails, with a deep link into a full article

[Connect with Node Red](../developers/device-setup/connect/node-red)
