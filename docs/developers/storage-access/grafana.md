---
title: Developers - Storage Access - Grafana
hide_title: true
sidebar_label: Grafana
keywords:
    - iot
    - azure
    - connect a device
    - iot hub
    - grafana
    - iot dashboard
hide_table_of_contents: true
---

# Storage Access with Grafana

Grafana has many options for importing data. We recommend using the [JSON API data source for Grafana](https://github.com/marcusolsson/grafana-json-datasource) plugin to load your IoT Ensemble data. It's a data source plugin for loading JSON data from REST APIs into Grafana.

The IoT Ensemble Dashboard displays your API Keys. 

![IoT Ensemble API Keys](/img/screenshots/dashboard-storage-access.png)

For the Cold Query, use this URL:

```console
Request URL: https://fathym-prd.azure-api.net/iot-ensemble/ColdQuery?dataType=Telemetry&flatten=true&includeEmulated=false&resultType=JSON&zip=false
```

For the Warm Query, use this URL:

```console
Request URL: https://fathym-prd.azure-api.net/iot-ensemble/WarmQuery?includeEmulated=false
```

:::note
In IoT Ensemble, use the 'Try It' section to see the parameters available for the Cold and Warm APIs, as well as test to see the responses. 
:::

## Configuring Grafana Data Source

From the Grafana Home, click on Configuration > Data Sources 

![Grafana Data Sources](/img/screenshots/grafana-1.jpg)

Click the 'Add data source' button and search for 'json'.  Select the 'JSON API' plugin.

![Grafana Data Sources](/img/screenshots/grafana-2.jpg)

This example uses the Cold Query. Use the following values in the form: 

- URL: `https://fathym-prd.azure-api.net/iot-ensemble/ColdQuery`
- Auth: `With Credentials`
- Custom HTTP Headers: `lcu-subscription-key: ***********`
- Query string: `dataType=Telemetry&flatten=true&includeEmulated=false&resultType=JSON&zip=false` 

![Grafana JSON API](/img/screenshots/grafana-3.jpg)

Click the 'Save & Test' button to verify the connection is successful. It should say 'Success' like the screenshot above. 

:::note
Use your primaryKey or secondaryKey from the IoT Ensemble API Keys for the lcu-subscription-key value. For example:

`lcu-subscription-key: f24047c3d5b14f****`
:::

## Create a Grafana Dashboard 

Create a new dashboard and add a panel. For the data source, select the one you added above. 

![Grafana Panel](/img/screenshots/grafana-4.jpg)

Switch to the Table visualization to easily view the raw data from storage. Use the screenshot below as a reference for how to access the device properties. 

![Grafana Query](/img/screenshots/grafana-5.jpg)

Success! Now that your data is loaded into Grafana, you can build dashboards like this:

![Grafana Dashboard](/img/screenshots/grafana-6.jpg)
 
