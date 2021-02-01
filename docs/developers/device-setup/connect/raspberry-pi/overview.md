---
title: Developers - Device Setup - Connect - Raspberry Pi
hide_title: true
sidebar_label: Overview 
hide_table_of_contents: true
---

# Raspberry Pi

In this guide, we'll walk through some ways that your Raspberry Pi(s) can be used in your IoT solutions.  If you're wondering, "What is a Raspberry Pi?", "How can or should I use a Raspberry Pi with IoT?", or "How do I get started with my Raspberry Pi?" then hopefully we can kick you in the right direction.

<!-- ## Role in IoT

Mostly to date been R&D, at scale sturdier equipment was often needed, we'll see with introduction of the Pi0 (is that right?  whatever the new pi micro is)

### Research and Development

### Production Use Cases -->

## Setting Up a Raspberry Pi

In this guide, we use the Model 3B Raspberry Pi (but you can use a Model 4 as well).  You may have to make a few quick purchases and gather some supplies:

- [Raspberry Pi](https://www.amazon.com/CanaKit-Raspberry-Premium-Clear-Supply/dp/B07BC7BMHY/ref=sr_1_8?dchild=1&keywords=raspberry+pi&qid=1611254779&sr=8-8) with a Power Source
- [MicroSD card](https://www.amazon.com/SanDisk-Ultra-microSDHC-Memory-Adapter/dp/B08GY9NYRM/ref=sr_1_3?crid=2XJMC54SCHQQD&dchild=1&keywords=micro+sd+card+32gb&qid=1610743336&sprefix=micro+sd+card%2Caps%2C229&sr=8-3), at least 16GB
- A USB Keyboard and mouse
- A computer monitor
- Your normal computer with an SD card reader (or you can buy an SD to USB dongle)

### Setting Up with Raspberry Pi Imager

This process includes putting the Raspberry Pi Operating System (formerly known as Raspbian) onto your micro SD card and interacting with the Pi to complete initial setup (Connect to Wifi, allow permissions to access your Pi from another computer, etc).

The official Raspberry Pi website has an excellent tool called the [Raspberry Pi Imager](https://www.raspberrypi.org/software/), which walks you through the process of creating an SD card that will power and control your Raspberry PI.

:::note

For more information on the RPi imager, [read here](https://www.raspberrypi.org/blog/raspberry-pi-imager-imaging-utility/).

:::

Now that you have your SD card ready to go, we can fire up the Pi! You will need to plug your keyboard and mouse into 2 of the 4 USB inputs on the Pi, and plug in a monitor with an HDMI cable.

Once all peripherals are connected, plug in the power source and connect it to the Pi. This should open the Raspberry Pi OS first time setup wizard on the monitor.  Navigate through the provided steps, which will include connecting the Pi to WiFi.

:::note

More information on that wizard process can be found [here](https://www.raspberrypi.org/blog/raspbian-update-june-2018/).

:::

### Node Red

Getting Node Red up and running on your Raspberry Pi is a simple way to get started in IoT, and leverages some easily obtained nodejs skills.  You can get documenation on setting up [Node Red here](../node-red/overview).

### Azure IoT Edge

Information about connecting Azure IoT Edge and IoT Ensemble is on the way.  For information on how to get started today, please visit our [discord server](http://discord/..).

<!-- To Get Started today, you can refer to the standarde Azure documentation, and use the [connection string](../../../../getting-started/connecting-first-device) of a device from your dashboard. -->
