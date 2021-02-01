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

## Azure Automated Machine Learning

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

### Configuring Automated ML Dataset

Once setup, launch the [Azure Macine Learning portal](https://ml.azure.com) and you'll land on the dashboard.  From there, select the **Automated ML** option from the left, and then click <img src="/img/screenshots/azure-ml-add-automated-ml-run.png" class="text-image" />.

![Azure ML Automated option](/img/screenshots/azure-ml-automated-option.png)

This will open the Automated ML Run wizard, where you can click **Create Dataset > From web files** to open the dataset wizard.

![Azure ML Automated ML Run Create Dataset](/img/screenshots/azure-ml-automated-ml-run-wizard-create-dataset.png)

When the dataset create wizard opens, you'll need to input some values.  For **Web URL**, you'll use something like the following cold query call (make sure to replace **{subscription-key}** with one of the key values from your IoT Ensemble dashboard):

```console
https://fathym-prd.azure-api.net/iot-ensemble/coldquery?resultType=JSONLines&flatten=true&lcu-subscription-key={subscription-key}
```

:::note

This guide is using data returned from our emulated data, and [getting started blog](../../../../blog/2021-01-24-introducing-iot-ensemble).  If you would like to use the [emulated data](../../../getting-started/emulated-data), add an additional query string parameter of `includeEmulated=true`:

```console
https://fathym-prd.azure-api.net/iot-ensemble/coldquery?resultType=JSONLines&flatten=true&includeEmulated=true&lcu-subscription-key={subscription-key}
```

:::

Now input your own values in the **Name** and **Description** text fields, and check the **Skip data validation** checkbox.  With these values entered, select **Next**.

![Azure ML Automated ML Run Dataset Wizard](/img/screenshots/azure-ml-automated-ml-run-dataset-wizard-skip.png)

Now we need to set our dataset up with the correct settings to match our cold query endpoint.  Set the **File format** to `JSONLines` and adjust the **Column headers** to `No headers`.  Leave the other two values as is and select next:

![Azure ML Automated ML Run Dataset Wizard](/img/screenshots/azure-ml-automated-ml-run-dataset-wizard-settings.png)

There is nothing to do on the **Schema** step, so you can click next through that to confirm your details.  If the details look correct, then click **Create** and wait for the dataset to be ready.  Once the dataset is created, you'll be back in the Create Automated ML Run Wizard with the Cold Query dataset in view.  Select the newly created data set and click **Next** to finish configuring the dataset.

![Azure ML Automated ML Run Dataset List](/img/screenshots/azure-ml-automated-ml-run-wizard-cold-query-dataset.png)

### Configuring Automated ML Run

The next step is to configure a Azure Automated Machine Learning run so that it can train and build a model of your choosing.  Start by setting the **New experiment name** to `TemperatureExperiment`, then select the appropriate **Target column**, for this example the `SensorReadings_Temperature` column.  Now either create or select an existing compute cluster to run the experiment on and select **Next**.

![Azure ML Automated ML Run Configure](/img/screenshots/azure-ml-automated-ml-run-wizard-configure-run.png)

:::note

The Cold Query parameter `flatten=true` is what unfolds complex properties in your IoT Ensemble device payloads, and makes them available in a `{PropertyName}_{PropertyName}` pattern.  So a payload property available at `SensorReadings.Temperature` becomes available at `SensorReadings_Temperature`.

:::

### Configuring Automated ML Task

Now, based on the data coming from devices, we can choose the Automated ML task that makes sense for our situation.  We are working with a temperature reading and will use the **Time series forecasting** task.  If your using [IoT Ensemble's Best Practice Schema](../../../developers/device-setup/iot-best-practice-schema-explained) then set the **Time column** to `Timestamp`, otherwise choose the appropriate value from your device payload schema or fall back to the system value `EventEnqueuedUtcTime`.  Now click on **Finish** to start the Automated ML run.

![Azure ML Automated ML Run Task Settings](/img/screenshots/azure-ml-automated-ml-run-wizard-task-settings.png)

:::note

You may get this error when trying to walkthrough this guide.  You can use the [connect a device](../../../getting-started/connecting-first-device) getting started guide to walk through many different way to get data flowing or use the emulated data URL shown above.

![Azure ML Automated ML Run Finish Not Enough Rows Error](/img/screenshots/azure-ml-automated-ml-run-wizard-finish-not-enough-rows.png)

:::

Once the Automated ML is running, you'll have to wait for it to complete to move on to next steps.  In the end though, this is how simple it is to leverage IoT Ensemble with Azure Machine Learning Automated ML experiments.  There is a lot more you can do with Azure Automated ML, read the full docs [here](https://docs.microsoft.com/en-us/azure/machine-learning/concept-automated-ml).

![Azure ML Automated ML Run Running](/img/screenshots/azure-ml-automated-ml-running.png)
