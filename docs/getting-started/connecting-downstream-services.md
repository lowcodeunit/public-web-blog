---
title: Getting Started - Connecting Downstream Services
hide_title: true
sidebar_label: Connect Downstream
---

# Connecting Downstream Services

The main goal of an IoT Solution is often the need to collect device data and then bring it into a team's preferred tools for visualization, AI/ML, application development, and more.  The following is a high level look at the APIs available for storage access and how to use them to get data downstream to other services.

## Storage Access

While our enterprise licenses allow connections directly with data sources, there is still often a need to massage the data into the correct format for other integrations.  As an example, Azure Machine Learning's automated ML feature needs data in json lines format.  

When working with IoT storage data, how it is stored and what interval it is stored at is extremely important to the overall cost of the system.  We break our storage into three categories that support a cost-efficient way to handle data storage.  Cold storage contians historic data, warm storage contains a more queryable data, and hot storage provides a way to stream individual messages to other services in real time.  The following high level walk through shows some of our more used APIs, for full API reference see here.

:::note

This storage access documentation focuses around our pre-built APIs, available to all shared and enterprise licenses.  When using our enterprise licenses, direct access to the many data options is available.  For more information read our complete guide on [storage access](../developers/storage-access/overview).

:::

### Cold Storage

For many use cases, cold storage historic data can be formatted in an efficient way to support many service integrations.  The APIs we provide to access this data are geared at helping users grab a time period of data and format it in a number of ways (JSON, CSV, JSON Lines,etc).  

### Warm Storage

A more efficient queryable storage location, warm storage offers a way to work with data in a more dynamic, no-sql way.  The storage type comes with a larger cost, and for that reason, controlling the amount of data in this storage is important.  Depending on license, the amount of data available in warm storage will vary.  With enterprise licenses, the retention period can be tuned to meet application needs and cost concerns.

<!-- ### Hot Storage

#### Webhooks -->

## Example Connections

### Power BI

### Jupiter Notebooks

### Azure Machine Learning

### Grafana

<!-- ### AWS ____ -->
