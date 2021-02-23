---
title: Developers - Storage Access - SQL Server
hide_title: true
sidebar_label: SQL Server
keywords:
    - iot
    - azure
    - database
    - sql server
    - iot dashboard
hide_table_of_contents: true
---

# Storage Access with Logic Apps and SQL Server

These instructions show how to use Logic Apps to call the IoT Ensemble warm query every 12 hours and insert the data into a SQL Server database. Before we get started, here's an overview of the entire Logic App with the steps collapsed.

![Completed Steps](/img/screenshots/logic-apps-sql-server-overview.png)

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

## Step 4: For Each

For the next step of the Logic App, search for 'For Each'. Select the 'Control' option.

![Search For Each](/img/screenshots/alerts/search-for-foreach.png)

Within the Controls, select the 'For each' action.

![Search For Each](/img/screenshots/alerts/search-for-foreach-control.png)

For the output, select the dynamic `Payloads` object from the previous Parse JSON step.

![Search For Each](/img/screenshots/logic-apps-for-each-payloads.png)

## Step 5: Insert into SQL Server

Click the 'Add an Action' button to add an action to the For Each. Search for 'sql server' and select the 'SQL Server' option.

![Search for SQL Server](/img/screenshots/logic-apps-choose-operation-sql-server.png)

Within the SQL Server option, select 'Import row'.

![Select SQL Server Import Row](/img/screenshots/logic-apps-sql-server-import-row.png)

After you authorize with the SQL Server, the form will allow you to select your server, database, and table. After those are selected, you can add Parameters for each of your data properties. The screenshot below is based on the IoT Ensemble emulated data.

![List SQL Server Parameters](/img/screenshots/logic-apps-for-each-sql.png)

Save and run the logic app to see it in action.

## Overview of Steps

Here's an overview of the entire Logic App with the steps collapsed. The Logic App calls the IoT Ensemble warm query every 12 hours and inserts the data into a SQL Server database.

![Overview of Steps](/img/screenshots/logic-apps-sql-server-overview.png)
