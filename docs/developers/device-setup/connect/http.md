---
title: Developers - Device Setup - Connect - HTTP
hide_title: true
sidebar_label: HTTP
---

# Connecting with HTTP

Next, we'll layout how you can use your connection string to generate a simple HTTP request to send data to the Azure IoT Hub.

#### Generate SAS Token

The easiest way to get a SAS Token going for some of these examples will be via your IoT Ensemble dashboard.  Next to the device, you will find a link to generate a SAS token.  This is never saved in the system, and  can only be accessed the first time you see it.

#### Send Request

We've laid out a curl command for the example, though this will work from any tool like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) as well.

```cli
curl -X POST \
  https://fathym-prd.azure-devices.net/twins/{device-id}/methods?api-version=2018-06-30 \
  -H 'Authorization: SharedAccessSignature {connection-string}' \
  -H 'Content-Type: application/json' \
  -d '{
    "DeviceID":"{device-id}",
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
}'
```

Once sent, you'll begin to see the new telemetry show up in your dashboard (it will also be accessible through the API).
