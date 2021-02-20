---
title: Developers - Alerts - Logic Apps
hide_title: true
sidebar_label: Azure Logic Apps 
keywords:
    - iot
    - azure
    - alerts
    - notifications
    - email
    - text
hide_table_of_contents: true
---

# Sending Email & Text Alerts using Azure Logic Apps

These instructions show how to use Logic Apps to call the IoT Ensemble warm query every 12 hours and check if the Temperature of any of the results is greater than 90. If so, it sends an email alert. Before we get started, here's an overview of the entire Logic App with the steps collapsed.

![Completed Steps](/img/screenshots/alerts/completed-steps.png)

## Step 1: HTTP

For the first step of the Logic App, search for 'HTTP'.

![Search for HTTP](/img/screenshots/alerts/search-for-http.png)

Configure the HTTP trigger with the following settings from your IoT Ensemble account. This example is using the Warm Query.
- Method: `GET`
- URI: `https://fathym-prd.azure-api.net/iot-ensemble/WarmQuery?includeEmulated=true`
- Header: `lcu-subscription-key: f24047c3d5b14f****`
- How often do you want to check for items?: `12 Hour`

![HTTP Settings](/img/screenshots/alerts/http-settings.png)

:::note
Use your primaryKey or secondaryKey from the IoT Ensemble API Keys for the lcu-subscription-key value. For example:

`lcu-subscription-key: f24047c3d5b14f****`
:::

:::info
In the HTTP trigger above, use the 'How often do you want to check for items' fields to control how often the HTTP trigger calls the IoT Ensemble Warm Query for new data.
:::

## Step 2: Compose

For the next step of the Logic App, search for 'Compose'.

![Search for Compose](/img/screenshots/alerts/search-for-compose.png)

For the Compose step we need to list an example JSON payload the Logic App will receive from the HTTP trigger. For the IoT Ensemble Warm Query, you can use the following:

```
{
  "Payloads": [
    {
      "DeviceData": {
        "Floor": 1,
        "Latitude": 40.269,
        "Longitude": -104.5808,
        "Room": 4
      },
      "DeviceID": "Emulated-3",
      "DeviceType": "Generic",
      "EnterpriseLookup": "EMULATED",
      "EventEnqueuedUtcTime": "2021-02-11T23:55:29.995Z",
      "EventProcessedUtcTime": "2021-02-11T23:55:30.227905Z",
      "PartitionId": 29,
      "SensorMetadata": {
        "Temperature": {
          "Battery": 0.3
        },
        "_": {
          "SignalStrength": 3
        }
      },
      "SensorReadings": {
        "Humidity": 9,
        "Occupancy": 2,
        "Occupied": 1,
        "Temperature": 117
      },
      "Timestamp": "2021-02-11T23:55:29.9963929+00:00",
      "Version": "0.0.2",
      "_attachments": "attachments/",
      "_etag": "\"09009632-0000-0700-0000-6025c3f50000\"",
      "_rid": "8qpRAK49o3m60BAAAAAAAA==",
      "_self": "dbs/8qpRAA==/colls/8qpRAK49o3k=/docs/8qpRAK49o3m60BAAAAAAAA==/",
      "_ts": 1613087733,
      "id": "1475d2e2-de67-6c8f-53c1-47699a3c40f2"
    },
    {
      "DeviceData": {
        "Floor": 2,
        "Latitude": 40.8559,
        "Longitude": -104.905,
        "Room": 5
      },
      "DeviceID": "Emulated-4",
      "DeviceType": "Generic",
      "EnterpriseLookup": "EMULATED",
      "EventEnqueuedUtcTime": "2021-02-11T23:55:29.995Z",
      "EventProcessedUtcTime": "2021-02-11T23:55:30.227905Z",
      "PartitionId": 29,
      "SensorMetadata": {
        "Temperature": {
          "Battery": 0.4
        },
        "_": {
          "SignalStrength": 2
        }
      },
      "SensorReadings": {
        "Humidity": 88,
        "Occupancy": 12,
        "Occupied": 1,
        "Temperature": 11
      },
      "Timestamp": "2021-02-11T23:55:29.9964182+00:00",
      "Version": "0.0.2",
      "_attachments": "attachments/",
      "_etag": "\"09009432-0000-0700-0000-6025c3f50000\"",
      "_rid": "8qpRAK49o3m50BAAAAAAAA==",
      "_self": "dbs/8qpRAA==/colls/8qpRAK49o3k=/docs/8qpRAK49o3m50BAAAAAAAA==/",
      "_ts": 1613087733,
      "id": "f583575c-3c40-9297-7c69-3add2a8b1c18"
    }
  ],
  "Status": {
    "Code": 0,
    "Message": "Success"
  },
  "TotalPayloads": 43065
}
```

Copy/paste the JSON payload above into the Compose input:

![Compose Settings](/img/screenshots/alerts/compose-settings.png)

## Step 3: Parse JSON

For the next step of the Logic App, search for 'Parse JSON'.

![Search for Parse JSON](/img/screenshots/alerts/search-for-parsejson.png)

For the Parse JSON content, use the dynamic `Outputs` object from the previous Compose step. For the Schema, click the 'Use sample payload to generate schema' link and it will automatically generate the schema based on the `Outputs` object. Refer to the screenshot below:

![Parse JSON Settings](/img/screenshots/alerts/parsejson-settings.png)

## Step 4: Initialize Variable

For the next step of the Logic App, search for 'Initialize Variable'. We want to initialize a variable that we can set to True when a condition is met.

![Search for Initialize Variable](/img/screenshots/alerts/search-for-initializevariable.png)

In this example, I'm checking if the 'Temperature is greater than 90'. For the variable name I'm going to use 'TempOver'. The Type is a `Boolean` and the default value is `false`.

![Initialize Variable Settings](/img/screenshots/alerts/initializevariable-settings.png)

## Step 5: For Each

For the next step of the Logic App, search for 'For Each'. Select the 'Control' option.

![Search For Each](/img/screenshots/alerts/search-for-foreach.png)

Within the Controls, select the 'For each' action.

![Search For Each](/img/screenshots/alerts/search-for-foreach-control.png)

For the output, select the dynamic `Payloads` object from the previous Parse JSON step.

![Search For Each](/img/screenshots/alerts/foreach-settings.png)

Click the 'Add an Action' button to add an action to the For Each. Search for 'Condition'.

![Search For Each Condition](/img/screenshots/alerts/foreach-condition-search.png)

For this condition, I'm checking if the `Temperature is greater than 90` AND if the `DeviceID is equal to Emulated-1`.
If the condition is True, I added a 'Set Variable' action and selected the `TempOver` variable I setup earlier. For the value, I'm setting it to True, to indicate the condition was met. For this example I'm not doing anything when the condition is False.

![For Each Condition Settings](/img/screenshots/alerts/foreach-condition-settings.png)

## Step 6: Check Temp Condition

For the next step of the Logic App, we want to add another 'Condition'.

![Search For Each Condition](/img/screenshots/alerts/foreach-condition-search.png)

For this condition, we want to check if the `TempOver` variable is equal to True.

![Condition Temp Settings](/img/screenshots/alerts/condition-temp-settings.png)

## Step 7: Send Email

When the 'TempOver variable is equal to True' condition is met, we can add an action to send an email alert. Click the 'Add an action' button and search for 'Send Email'. Select the 'Office 365 Outlook' option.

![Search for Send Email](/img/screenshots/alerts/search-for-sendemail.png)

Fill in the email Body, Subject, and To fields based on your needs.

![Send Email Settings](/img/screenshots/alerts/sendemail-settings.png)


## Step 8: Email to Text (SMS)

Texting via email is easy. Type in the recipient's mobile number in front of the "@" sign based on the SMS Gateway. For example, if your recipient’s mobile number is 1-123-456-7891 and their carrier is AT&T, you would type in the following address in the "send to" box: `11234567891@txtatt.net`. Almost every single carrier has its own address for this specific purpose, here is a list of all the major carriers’ email to SMS gateways:

- T-Mobile – number@tmomail.net
- Virgin Mobile – number@vmobl.com
- AT&T – number@txt.att.net
- Sprint – number@messaging.sprintpcs.com
- Verizon – number@vtext.com
- Tracfone – number@mmst5.tracfone.com
- Ting – number@message.ting.com
- Boost Mobile – number@myboostmobile.com
- U.S. Cellular – number@email.uscc.net
- Metro PCS – number@mymetropcs.com

## Overview of Steps

Here's an overview of the entire Logic App with the steps collapsed. The Logic App calls the IoT Ensemble warm query every 12 hours and checks if the Temperature of any of the results is greater than 90. If so, it sends an email alert.

![Completed Steps](/img/screenshots/alerts/completed-steps.png)
