---
title: Getting Started - Emulated Data
hide_title: true
sidebar_label: Emulated Data
---

# Working with Emulated Data

We know not everyone has a device laying around the house to connect to an IoT Hub, so we've provided emulated device data that will show the system in action before connecting a first device.

## Enable Emulated Data

To start the emulated data flowing to the dashboard, simply enable the slide toggle.

![Emulated Data Enabled](/img/screenshots/dashboard-emulated-enabled.png)

Once enabled, if no devices have been added yet, the telemtry sync will automatically enable and the emulated device telemetry will begin to show in the table on the dashboard.  

![Emulated Device Telemetry](/img/screenshots/dashboard-emulated-telemetry.png)

:::note

While emulated data is enabled, it will be mixed with any real device data streaming into the system.  Not just in the dashboard, but also in API calls.  This can be filtered out using various aspects of our system.

:::

## Disable Emulated Data

In order to remove the emulated data from the dashboard and APIs, simply disable it.

![Emulated Data Enabled](/img/screenshots/dashboard-emulated-disabled.png)
