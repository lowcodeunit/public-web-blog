---
title: Getting Started - Viewing Your Device Data
hide_title: true
sidebar_label: View Device Data
---

# Viewing Your Device Data

Viewing device messages is often the first step in understanding and debugging IoT data flows.  In this portion of the guide, we'll go through what the dashboard makes available out-of-the-box.

## Dashboard Views

The IoT Ensemble dashboard provides two quick ways to start loooking at your data.  Using these, you will be able to see raw device message payloads and visualize your data in an open source dashboard.

### Devices Telemetry

You've seen the devices telemetry table in action if you worked through the [emulated data](../getting-started/emulated-data) or [connecting your own device](../getting-started/connecting-your-first-device) guides, here we'll dig in a bit deeper on how it works.  

#### Telemetry Sync

Each of the dashboard views is powered by the telemetry sync.  The sync is responsible for preloading a set of telemetry based on the settings in this section.  It will only run for 30 minutes at a time, and must be restarted after that (the last loaded data will stay in sync once disabled).  At the top of the Devices Telemetry section are the settings for the majority of the telemetry sync.  

![Devices Telemetry Header](/img/screenshots/dashboard-devices-telemetry-header.png)

Here you'll find the toggle that enables and disables the telemetry sync.  Every time it is enabled, a fresh 30 minute sync window is started.  You can control the rate at which the sync refreshes by selecting one of the values in the drop down.  In addition, you'll find a status indicator and last synced date in the top left.

#### Telemetry Table

When first connecting your devices, this is a great place to start seeing your data.  A new row will show up for each message sent for any of your devices (and will include emulated telemetry data as well, when enabled).

![Devices Telemetry Table](/img/screenshots/dashboard-devices-telemetry-table.png)

The system is dynamic in terms of how the payload can come in, so the telemetry row provides only your Device ID and the time at which the message was processed.  To see what real data is flowing through you'll have to either copy or expand the payload.  

To quickly copy the payload of one of your messages, use the <img src="/img/screenshots/icon-telemetry-copy-payload.png" class="text-image" /> button.  Using the <img src="/img/screenshots/icon-telemetry-expand-payload.png" class="text-image" /> button will expand the row to show the raw payload of the message.

<img src="/img/screenshots/dashboard-devices-telemetry-table-payload.png" />

Finally, you can use the paging controls at the bottom to determine how many telemetry records are in each response, and to work through the pages.

:::note

If you are seeing emulated data in the table and only want to see your devices, make sure to disable the emulated data.

:::

#### Telemetry Actions

As previously talked about in our [connecting your own device](../getting-started/connecting-your-first-device#send-via-dashboard) guide, you can use the Send Device Message form to easily send sample data for a device into the system.

### Freeboard Dashboard

As an inline example of how your data can be visualized, we use an open source tool called [freeboard](http://freeboard.io/).  You can use this tool to create and locally save your own visualizations and later load them into view.  In addition, we'll talk you through connecting with a hosted freeboard account in the next article.

![Devices Freeboard](/img/screenshots/dashboard-devices-freeboard.png)

To edit the freeboard, click the <img src="/img/screenshots/dashboard-devices-freeboard-settings.png" class="text-image" /> icon at the top of the freeboard.  This will change the freeboard into edit mode.  You can add new panes, edit existing ones and when complete click <img src="/img/screenshots/dashboard-devices-freeboard-save.png" class="text-image" />.  Choose a path on your local computer to save the freeboard, and the next time you come back, simply use the <img src="/img/screenshots/dashboard-devices-freeboard-load.png" class="text-image" /> option to pull in your custom freeboard.

For more information on freeboard, how it works, and how to code it, please visit their [documentation](https://github.com/Freeboard/freeboard).

<!-- ### Observations 

### Sensor Metadata -->
