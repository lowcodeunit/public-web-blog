---
title: Developers - Device Setup - Connect - Node Red
hide_title: true
sidebar_label: Overview 
hide_table_of_contents: true
---

# Installing Node Red on the Raspberry Pi

After completing the setup steps in Part 1, you will be taken to the main Raspberry Pi desktop.  In the top left, click on the Raspberry logo, which will show a drop down of options.  Click on the **Programming** tab, then click **Terminal**.

In order to program our Pi and get connected, we will need to install a couple of tools first, mainly Node.js and Node-Red by completing the following terminal commands:

1. To update the system package list run  
`sudo apt-get update`  
2. Install the latest versions of system packages with  
`sudo apt-get dist-upgrade`  
3. Get the Node.js package we need to install by running  
`curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash`  
4. To install the Node.js package  
`sudo apt-get install -y nodejs`  
5. Finally download and install Node Red with command  
`bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)`

Once all commands have been run in the terminal, the Raspberry Pi is setup and ready to go with Node Red.
