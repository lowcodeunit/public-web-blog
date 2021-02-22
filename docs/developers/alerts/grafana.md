---
title: Developers - Alerts - Grafana
hide_title: true
sidebar_label: Grafana 
keywords:
    - iot
    - grafana
    - alerts
    - notifications
    - email
    - text
hide_table_of_contents: true
---

# Sending Email & Text Alerts using Grafana

These instructions show how to send email and text alerts using Grafana and IoT Ensemble data stored in SQL Server.

## Step 1: SQL Server

The first step is to call the IoT Ensemble warm or cold query and load your data into Microsoft Sql Server. This doc does not cover those steps, but we've done it before using Azure Logic Apps, as well as a few lines of C# code. If you need help loading your IoT Ensemble data into SQL Server please email support@fathym.com and we'll point you in the right direction.

This screenshot shows some sample IoT Ensemble data in SQL Server.

![SQL Server Table](/img/screenshots/alerts/sql-server-data.png)

### Configure SQL Server Firewall Rules

You need to create firewall rules for the Grafana ip addresses so they have permission to connect to the SQL Server database. The screenshot below shows firewall rules configured for specific ip addresses, as well as a couple of ip ranges.

![Firewall Rules](/img/screenshots/alerts/firewall-rules.png)

## Step 2: Configure the Grafana Data Source

From the Grafana Home, click on Configuration > Data Sources 

![Grafana Data Sources](/img/screenshots/grafana-1.jpg)

Click the 'Add data source' button and search for 'sql'.  Select the 'Microsoft SQL Server' plugin.

![SQL Server Data Source](/img/screenshots/alerts/sql-server-datasource.png)

Fill in the form with your SQL Server information. Click the 'Save & Test' button to verify the connection is successful. It should say 'Database Connection OK' like the screenshot below.

![SQL Server Settings](/img/screenshots/alerts/sql-server-datasource-settings.png)

## Step 3: Create a Grafana Dashboard 

Create a new dashboard and add a Graph panel. For the data source, select the one you added above. 

![Grafana Dashboard](/img/screenshots/alerts/grafana-dashboard.png)

:::info
In the screenshot above, notice that we're using the following query:

`SELECT
DateTime as time,
Temperature
FROM [grafana-data]`

Modify the query to fit the properties of your IoT Ensemble data.
:::

## Step 4: Configure the Grafana Alert

In this example, the alert is checking if the `average Temperature is above 70`. Visit the [Grafana Docs](https://grafana.com/docs/grafana/latest/alerting/create-alerts/) to read more about how to setup and configure alerts in Grafana.

![Alert Settings](/img/screenshots/alerts/grafana-alert-settings.png)

:::note
Only Graph panels support alerts in Grafana. You cannot setup alerts on Stats, Gauges, Bar Guages, Tables, etc.
:::

## Step 5: Email Alert

I received the following email alert from Grafana when the `average Temperature was above 70`.

![Alert Settings](/img/screenshots/alerts/grafana-email.png)

## Step 6: Email to Text (SMS)

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