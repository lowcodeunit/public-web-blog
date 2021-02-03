---
slug: template-blog-slug
title: Title - Hook
author: Michael Gearhardt
author_title: CTO @ Fathym
author_url: https://www.iot-ensemble.com
author_image_url: https://github.com/mcgear.png
tags: []
hide_table_of_contents: true
---

![IoT Ensemble Diagram](/img/iot-ensemble-diagram.png)

... intro ...

## Connecting Sparkfun ESP32 Board and CCS811/BME200 Environmental Sensor with IoT Ensemble

In this tutorial, we will be taking a generic ESP32 board, connecting a simple environment sensor, and send messages with IoT Ensemble. For simplicity sake, I have chosen to use Sparkfun's "Qwiic" connect ecosystem, which is a plug-and-play method of connecting boards and sensors. 

### Things you will need
- [SparkFun Thing Plus - ESP32 WROOM Board](https://www.sparkfun.com/products/15663) (You may also use a different generic ESP32 board, but it won't use the Qwiic system)
- A [Qwiic Cable](https://www.sparkfun.com/products/14426) (Any length is fine for this tutorial)
- Your computer/laptop
- A Micro-USB cable to connect the ESP32 to your computer
- [SparkFun Environmental Combo Breakout - CCS811/BME280](https://www.sparkfun.com/products/14348) (Again, you may choose to use a more generic version of this sensor, but it won't use the Qwiic system)
- [Arduino IDE](https://www.arduino.cc/en/software) installed on your computer
- A [Fathym IoT Ensemble](https://www.iot-ensemble.com/dashboard) account (we’re using the free, shared version)

## Part 1 - Hook Up Your Hardware 
First, we need to attach the sensor to your board. Take the qwiic cable, and plug it into the ESP32 "Qwiic" port. Take the other end of the cable, and plug it into either of the two "Qwiic" ports on the Environmental Sensor. <br>
<br>
Next, take your Micro-USB cable, plug the "mini" end into the bottom port of the ESP32, and plug the other end into one of your computer's USB port. Your hardware is ready to go!

## Part 2 - Installing Arduino IDE and Necessary Software
Next, we will need to install all of the required software/libraries on your computer

### Installing Arduino IDE
Download your version of Arudino IDE [here](https://www.arduino.cc/en/software). Follow all of the steps in the wizard to complete installation (You can keep all of the default options the same)


### Add Sensor Libraries
Once that is complete, we need to install some libraries. Click the following links to download each zip folder <br>
<br>
[Download the BME280 Library (ZIP)](https://github.com/sparkfun/SparkFun_BME280_Arduino_Library/archive/master.zip)
<br><br>
[Download the CCS811 Library (ZIP)](https://github.com/sparkfun/SparkFun_CCS811_Arduino_Library/archive/master.zip)
<br><br>

Once you have downloaded those, go to your Arduino IDE screen. In the top toolbar, select **Sketch** -> **Include Library** -> **Add .ZIP Library**, as shown below:

![Add .Zip Library](/static/img/screenshots/add-zip-library.png)
<br><br>

This will open a file browser. Navigate to your downloaded package, select the zip folder, and click "Open". Repeat this step for the second package.

### Add Azure Iot Hub Libraries
In the top toolbar navigate to **Tools** -> **Manage Libraries**. On the next screen, type "azure" into the search bar. A list of available libraries will appear. Install the following libraries:

- **AzureIoTHub**
- **AzureIotProtocol_MQTT**
- **AzureIoTUtility**


### Add ESP32 Board Definition

In order for us to work with the ESP32, we need to add a board "definition". 

1. Copy the following link:
    > https://dl.espressif.com/dl/package_esp32_index.json

2. Back in your Arduino IDE, in the top toolbar, click **File** -> **Preferences**. You will be taken to the follow screen:

![Add Board Definition](/static/img/screenshots/add-board-definition.png)

Take the link from the previous step, and paste it into the "Additional Boards Manager URLs" field (highlighted above in red). Click "OK"

3. Next, in the top toolbar, click **Tools** -> **Board: "Name of Board"** -> **Boards Manager...**, as shown below:

![Open Boards Manager](/static/img/screenshots/boards-manager.png)

In the next screen, type "esp32" into the search bar. A board definition with the same name will appear, click "Install", then click "Close" (as shown below)

![ESP32 Board Definition](/static/img/screenshots/esp32-board-definition.png)

4. Next, navigate to **Tools** -> **Board: "Name of Board"** -> **ESP32 Arduino** and select **Adafruit ESP32 Feather**, as shown below:

![Select Board Definition](/static/img/screenshots/select-board-definition.png)

