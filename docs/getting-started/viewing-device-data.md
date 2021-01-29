---
title: Getting Started - Viewing Device Data
hide_title: true
sidebar_label: View Device Data
keywords:
    - iot
    - azure
    - connect a device
    - iot hub
hide_table_of_contents: true
---

# Viewing Device Data

Viewing device messages is the first step in understanding and debugging IoT data flows.  In this portion of the guide, we'll go through what the dashboard offers out-of-the-box.

## Dashboard Views

The IoT Ensemble dashboard provides two quick ways to start looking at data.  Using these, easily view raw device message payloads and visualize data in an open source dashboard.

### Devices Telemetry

The devices telemetry table was in action when working through the [emulated data](../getting-started/emulated-data) or [connecting a device](../getting-started/connecting-first-device) guides, here is a deeper look at how it works.  

#### Telemetry Sync

Each of the dashboard views is powered by the telemetry sync.  The sync is responsible for preloading a set of telemetry based on the settings in this section.  It will only run for 30 minutes at a time and must be restarted after that (the last loaded data will stay in sync once disabled).  At the top of the Devices Telemetry section are the settings for the majority of the telemetry sync.  

![Devices Telemetry Header](/img/screenshots/dashboard-devices-telemetry-header.png)

The toggle in this header enables and disables the telemetry sync, and the device telemetry can be downloaded using the <img src="/img/screenshots/icon-download.png" class="text-image" /> button.  Every time telemetry is enabled, a fresh 30 minute sync window is started.  In addition, the top left status indicator will show if the sync is active and when it was last run.

#### Telemetry Table

When first connecting devices, this is a great place to start seeing data.  A new row will show up for each message sent for any devices, when the sync is enabled, and will include emulated telemetry if turned on.

![Devices Telemetry Table](/img/screenshots/dashboard-devices-telemetry-table.png)

The system is dynamic in terms of how the payload can come in, so the telemetry row provides only the Device ID and the time at which the message was processed.  To see what real data is flowing through, the copy or expand payload features can be used.  Using the <img src="/img/screenshots/icon-expand.png" class="text-image" /> button will expand the row to show the raw payload of the message.  To quickly copy the payload of one of the messages, use the <img src="/img/screenshots/icon-copy.png" class="text-image" /> button.

<img src="/img/screenshots/dashboard-devices-telemetry-table-payload.png" />

Using the paging controls at the bottom will determine how many telemetry records are in each response and support paging through the results.

:::note

If seeing emulated data in the table and only wanting to see custom devices, make sure to disable the emulated data.

:::

#### Telemetry Actions

As outlined previously in our [connecting a device](../getting-started/connecting-first-device#send-via-dashboard) guide, use the send device message form to easily send sample data for a device into the system.

### Freeboard Dashboard

As an inline example of how data can be visualized, we use an open source tool called [freeboard](http://freeboard.io/).  Use this tool to create and locally save custom visualizations and later load them into view.  

<!-- In addition, we'll talk through connecting with a hosted freeboard account in the next article. -->

![Devices Freeboard](/img/screenshots/dashboard-devices-freeboard.png)

To edit the freeboard, click the <img src="/img/screenshots/dashboard-devices-freeboard-settings.png" class="text-image" /> icon at the top of the freeboard.  This will change the freeboard into edit mode.  Now add new panes, edit existing ones and when complete click <img src="/img/screenshots/dashboard-devices-freeboard-save.png" class="text-image" />.  Choose a path on the local computer to save the freeboard, and next time visiting the dashboard, simply use the <img src="/img/screenshots/dashboard-devices-freeboard-load.png" class="text-image" /> option to load the custom freeboard configuration.

For more information on freeboard, how it works, and how to code it, please visit their [documentation](https://github.com/Freeboard/freeboard).

<!-- ### Observations 

### Sensor Metadata -->
