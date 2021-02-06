---
title: Developers - Storage Access - Tableau
hide_title: true
sidebar_label: Tableau
keywords:
    - iot
    - azure
    - connect a device
    - iot hub
    - tableau
    - iot dashboard
hide_table_of_contents: true
---

# Storage Access with Tableau

Tableau Desktop has many options for importing data. You can import data from a file or from a server. Unfortunately, there is no option for loading data from a REST API, so let's use the JSON file option and create a historical report.

At the bottom of the IoT Ensemble Dashboard is your Storage Access. 

![Storage Access Try It](/img/screenshots/storage-access-tryit.png)

In the Try It section, click the GET button for the /ColdQuery and execute it. You should see the following: 

![Storage Access Cold Query](/img/screenshots/api-cold-storage.jpg)

In the Response Body, click the 'Download File' link to download the json file.

## Loading JSON into Tableau

From the Tableau Home, click on 'JSON file' and browse to the json file you saved in the previous step. 

![Tableau Data Sources](/img/screenshots/tableau-json-file.png)

After loading your json file, select the schema levels you'd like available for analysis and click OK. I normally select all of the schema levels and then determine which data properties I want to use when building the worksheets.

![Tableau Data Sources](/img/screenshots/tableau-schema-levels.png)

Tableau will load the json data into a table to use as the data source for your worksheets.

![Tableau Data Sources](/img/screenshots/tableau-datasource.png)

Success! Now that your data is loaded into Tableau, you can build worksheets and dashboards like this:

![Tableau Dashboard](/img/screenshots/tableau-dashboard.png)
 
