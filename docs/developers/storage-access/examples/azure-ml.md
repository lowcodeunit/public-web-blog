---
title: Developers - Storage Access - Azure ML
hide_title: true
sidebar_label: Azure ML
keywords:
    - iot
    - azure
    - connect a device
    - iot hub
    - azure machine learning
    - iot machine learning
    - iot dashboard
hide_table_of_contents: true
---

# Storage Access with Azure Machine Learning

Azure Machine Learning empowers developers and data scientists with a wide range of productive experiences for building, training, and deploying machine learning models faster.  IoT Ensemble makes it simple to connect your devices and immediately use its data within Azure Machine Learning.

## IoT Ensemble Storage Access

IoT Ensemble provides out of the box APIs that allow you to interact with your data and devices.  Leveraging the cold query endpoint will allow us to easily connect with Azure ML.  Check out the [getting started guide](../../../getting-started/connecting-downstream-services) for more details.

## Azure Machine Learning

Apply automated ML when you want [Azure Machine Learning](https://docs.microsoft.com/en-us/azure/machine-learning/concept-automated-ml) to train and tune a model for you using the target metric you specify. Automated ML democratizes the machine learning model development process, and empowers its users, no matter their data science expertise, to identify an end-to-end machine learning pipeline for any problem.
Data scientists, analysts, and developers across industries can use automated ML to:

- Implement ML solutions without extensive programming knowledge
- Save time and resources
- Leverage data science best practices
- Provide agile problem-solving

Make sure that you've created your free [Azure account](https://azure.microsoft.com/en-us/free/services/machine-learning/), and walk through the setup process for a new subscription or use one that you've [already setup](https://ml.azure.com).  With your acccount and subscription in hand, you will also need to make sure you have an [Azure ML workspace](https://portal.azure.com/#create/Microsoft.MachineLearningServices).

Once setup, you can access the [Macine Learning portal](https://ml.azure.com), and dig deeper into the [Azure Machine Learning docs](https://docs.microsoft.com/en-us/azure/machine-learning/overview-what-is-azure-ml) on your own.  We'll take you through some ways to start leveraging IoT Ensemble with Azure ML now.  

:::note

If using our Enterprise plan, Azure Machine Learning will already be setup and configured for you in your azure cloud.

:::

### Configuring Azure Automated Machine Learning

Once setup, launch the [Azure Macine Learning portal](https://ml.azure.com) and you'll land on the dashboard.  From there, select the **Automated ML** option from the left, and then click <img src="/img/screenshots/azure-ml-add-automated-ml-run.png" class="text-image" />.

![Azure ML Automated option](/img/screenshots/azure-ml-automated-option.png)

This will open the Automated ML Run wizard, where you can click **Create Dataset > From web files** to open the dataset wizard.

![Azure ML Automated ML Run Create Dataset](/img/screenshots/azure-ml-automated-ml-run-wizard-create-dataset.png)

Once installed, launch it and go to **Get Data -> Web**. As you may have guessed, this data source will allow you to import data from the web.

![Power BI Get Data Web](/img/screenshots/power-bi-get-data-web.png)

Once this has been selected, a popup will appear allowing input of the API URL. You will need to select the **Advanced** radio button to input the **Access Key** as an additional header parameter.

![Power BI From Web Advanced](/img/screenshots/power-bi-from-web-advanced.png)

The API request URL can be obtained from the dashboard using either the cold or warm query APIs.  Here is a sample cold query URL you can start with, and the dashboard will assist in discovering the parameters for this query.

```console
https://fathym-prd.azure-api.net/iot-ensemble/ColdQuery?flatten=false&resultType=JSONLines
```

:::note

If you would like to use the [emulated data](https://www.iot-ensemble.com/docs/getting-started/emulated-data), add an additional query string parameter of `includeEmulated=true`:

```console
https://fathym-prd.azure-api.net/iot-ensemble/ColdQuery?flatten=false&resultType=JSONLines&includeEmulated=true
```

:::

Now input the request URL from above (or obtained from the dashboard) into the Power BI **URL Parts** text field.  Then enter `lcu-subscription-key` as a header parameter key, along with the **Access Key** copied from IoT Ensemble Dashboard in the value text field.

![Power BI From web Advanced Enter Values](/img/screenshots/power-bi-from-web-advanced-enter-values.png)

With these values entered, select **OK** and the Power Query Editor will load your JSON payloads.  These will need to be converted to a table before you can visualize your data.

### Preparing Data for Use

Now that the data is connected into our report, we need to convert it to a table.  Do this by selecting **To Table** and then **OK** from the following popup.

![Power BI Get Data Web to Table](/img/screenshots/power-bi-get-data-web-to-table.png)

![Power BI Get Data Web to Table Prompt](/img/screenshots/power-bi-get-data-web-to-table-prompt.png)

The data is still showing as a single complex option.  Select the **expand arrows** icon and Power BI will begin to break down the complex object into columns.

![Power BI Get Data Web Table Expand](/img/screenshots/power-bi-get-data-web-table-expand.png)

After converting to a table and expanding the record, you may notice that some columns still say **Record**. You will need to repeat this expanding process on those columns to expose the nested json data for use in Power BI.

Congratulations! The device data has now been loaded into Power BI. The final step before you can use the data in visualizations is to transform the data from a Text type to Number, Dates, and other types.

### Transforming Data with Power BI

Transforming Data with power BI will allow you to customize data based on requirements. Power BI allows the user to remove duplicate values, create new columns, define table headers, convert data types, use calculated columns etc.  Power BI has an incredible number of features that are dedicated to helping clean and prepare data for analysis.  You may want to use Power Query Editor to clean up and shape this data before you start building reports.

Additional information on how to shape your data can be found all over the internet, here are a couple places to get started.  You may want a learning path for [cleaning, transforming and loading data](https://docs.microsoft.com/en-us/learn/modules/clean-data-power-bi/), and to expand on that, look into [shaping and combing data](https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-shape-and-combine-data#shape-data).
  
When your query is where you want it, select **Close & Apply** from Power Query Editor's File menu.

![Power BI Get Data Web Close and Apply](/img/screenshots/power-bi-get-data-web-close-apply.png)

This action applies the changes and closes the editor.  The transformed dataset appears in the Power BI Desktop, ready to be used for creating reports.

### Visualize Data with Power BI

Now that you have transformed and loaded your data, it is time to prepare reports and visualizations for data interpretation and analysis.  In the Fields pane on the right, you see the fields in the data model you just transformed and created.

![Power BI Data Fields](/img/screenshots/power-bi-data-fields.png)

Power BI can help you create compelling reports where you can change visualizations, customize colors or axes, apply filters, drag fields, and more!  All these changes are fun to do, easy to undo, and quick to take effect.  The **Visualizations** pane provides the tools necessary for adding and configuring multiple visualizations.  Power BI has a growing list of visualizations you can download and use in your own reports that transforms complicated data into something easy to understand.  This ease provides insights to make informed decisions quickly.

![Power BI Get Data Web Close and Apply](/img/screenshots/power-bi-visualizations.png)

Additional information on how to visualize and bring your data to life can be located across the internet.  You can get started on [building your report](https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-excel-stunning-report#build-your-report) and work through a quick [10 minute example](https://docs.microsoft.com/en-us/learn/modules/build-your-first-power-bi-report/4-exercise-create-visuals-in-power-bi) to get you going.
