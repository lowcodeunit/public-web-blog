---
title: Getting Started - Connecting Downstream Services
hide_title: true
sidebar_label: Connect Downstream
---

# Connecting Downstream Services

The main goal of an IoT Solution is the need to collect device data and bring it into a set of preferred tools for visualization, AI/ML, application development, and more.  The following is a high level look at the APIs available for storage access and how to use them to get data downstream to other services.

## Storage Access

While our enterprise licenses allow connections directly with data sources, there is still often a need to massage the data into the correct format for other integrations (Azure Machine Learning's automated ML feature needs data in json lines or CSV format).  

When working with IoT storage data, how it is stored and what interval it is stored at is extremely important to the overall cost of the system.  We break our storage into three categories that support a cost-efficient way to handle data storage and access.  Cold storage contians historic data, warm storage contains near-term queryable data, and hot storage provides a way to stream individual messages to other services in real time.  The following high level walk through shows APIs for accessing these storage types.  For a complete API reference, first make sure to sign up and load the [dashboard](https://www.iot-ensemble.com/dashboard), then visit the [API portal](https://fathym-prd.portal.azure-api.net/docs/services/).

:::note

This storage access documentation focuses around our pre-built APIs, available to all shared and enterprise licenses.  When using our enterprise licenses, direct access to the many data options is available.  For more information read our complete guide on [storage access](../developers/storage-access/overview).

:::

### Access Keys

There are a few different places to locate API keys, the simplest is from the Storage Access section at the bottom of the dashboard.

![Storage Access](/img/screenshots/dashboard-storage-access.png)

To quickly copy storage access keys, use the <img src="/img/screenshots/icon-copy.png" class="text-image" /> button, or use the <img src="/img/screenshots/icon-view.png" class="text-image" /> and <img src="/img/screenshots/icon-hide.png" class="text-image" /> buttons to toggle the visibility of the keys on screen.  If needing to regenerate either of the keys, use the <img src="/img/screenshots/icon-refresh.png" class="text-image" /> button.

### Cold Storage

For many use cases, cold storage historic data can be formatted in an efficient way to support service integrations.  The APIs provdied to access this data are geared at helping grab a time period of data and format it in a number of ways (JSON, CSV, JSON Lines, etc).  Use the dashboard to link out to complete API documentation in the [API portal](https://fathym-prd.portal.azure-api.net/docs/services/), here is a quick look at querying the cold storage API.

```cli
curl -X POST \
  https://fathym-prd.azure-api.net/iot-ensemble/coldquery \
  -H 'lcu-subscription-key: {subscription-key}' \
  -H 'Content-Type: application/json' \
  -d '{
    "Arguments": {
        "Page": 1,
        "PageSize": 10,
        "ResultType": "JSON",
        "DataType": "Telemetry",
        "Flatten": true,
        "Zip": false
    }
}'
```

There are values to replace and adjust the arguments as desired.  Here is a description on where to find the values for replacement.

- **{subscription-key}**<br />
The {subscription-key} can be located in the API Keys section as described above.

### Warm Storage

A queryable storage location, warm storage offers a way to work with data in a dynamic, no-sql way.  This storage type comes with a larger cost, and for that reason, controlling the amount of data in this storage is important.  Depending on license, the amount of data available in warm storage will vary.  With enterprise licenses, the retention period can be tuned to meet application needs and cost concerns.  Use the dashboard to link out to complete API documentation in the [API portal](https://fathym-prd.portal.azure-api.net/docs/services/), here is a quick look at querying the cold storage API.

```cli
curl -X POST \
  https://fathym-prd.azure-api.net/iot-ensemble/warmquery \
  -H 'lcu-subscription-key: {subscription-key}' \
  -H 'Content-Type: application/json' \
  -d '{
    "Arguments": {
        "Page": 1,
        "PageSize": 10
    }
}'
```

There are values to replace and adjust the arguments as desired.  Here is a description on where to find the values for replacement.

- **{subscription-key}**<br />
The {subscription-key} can be located in the API Keys section as described above.

<!-- 
### Hot Storage

#### Webhooks -->

## Example Connections

The purpose of the storage access APIs is to provide a secure way to access data for visualizations, AI/ML, application development and more.  Using the provided APIs, many different types of integrations are possible.  For a complete look at some examples, read the [complete storage access guide](../developers/storage-access/overview) or dive right into [the examples](../developers/storage-access/examples/overview).
