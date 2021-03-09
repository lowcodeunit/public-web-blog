---
title: IoT Ensemble for Brewing
author: Jeremy Tomlinson
author_title: Director of Engineering @ Fathym
author_url: https://www.iot-ensemble.com
author_image_url: https://media-exp1.licdn.com/dms/image/C5603AQFkIK-kLZji_Q/profile-displayphoto-shrink_200_200/0/1517744970954?e=1617840000&v=beta&t=Cb3O5xbscYZtzsxK7ABot8biLash6plA39TV4BY0BwE
tags: [iot, reliable, brewing, raspberry pi, sensors, dashboards, alerts]
hide_table_of_contents: true
---

Brewing is a complicated process. It takes a high level of precision to deliver a consistent brew. And that's if everything goes according to plan. It gets more complicated when you lose power in the middle of the night. Or a piece of equipment fails.

Fathym was contacted by a craft brewery in Denver, Colorado that needed help monitoring their boiler and glycol systems. They wanted an automated way to receive email/text alerts when problems arose with the equipment. Fathym accepted the challenge. *And we love beer.

![Brewing Solution](/img/screenshots/brewery-iot4.png)

## The Hard Way

A few of Fathym's senior engineers started with the IoT infrastructure in Microsoft Azure. In brewing terms, setting up IoT in Azure is like brewing a pilsner. "It's an advanced course in principle and technique." And it's expensive. Up next, we setup a few emulated devices in code that could stream fake data through Azure to verify the infrastructure was ready for production use. When emulated data was flowing, another team started working on the dashboards/alerts. Once the end-to-end system was in place, we started on the physical sensors and device.

For this project, we used a Raspberry Pi connected to an Infrared Temperature Sensor to monitor the brewery's boiler tank and a Waterproof Temperature Probe to monitor the glycol tank. The Raspberry Pi was connected to Azure and the data was streamed to the dashboards/alerts. 

Any good brewer knows that complete temperature control is essential during the brewing process lest you ruin a perfectly good batch. Using the dashboard, we configured email/text alerts for when the boiler temp dropped below 150 degrees and a second alert if the glycol temp was greater than 41. The alerts had the potential to make a real difference. Within a couple of weeks all of the hard work paid off when the brewery lost power.

> "You saved us a whole day of brewing! If we didn’t have the alert and we didn’t come in to check Sunday or Monday, we would have walked in to cold water today. And it takes so long to heat up that we wouldn’t have been able to brew at all today, which messes up the whole week!"
> Director of Operations at Crazy Mountain Brewery, Denver, Colorado

## The Easy Way

Fathym built IoT Ensemble to empower small and independent brewers, home brewers, and others to setup the same monitoring as described above for their equipment - but this time without needing a few senior engineers to be Azure experts. IoT Ensemble acts as your Virtual App Developer and manages the Azure complexity for you. Let's be clear, with IoT Ensemble you still need to setup your device, dashboards, and alerts - but IoT Ensemble handles all of the heavy lifting in Azure. And trust me, the heavy lifting in Azure is no joke. The good news is that setting up your device, dashboards, and alerts is a manageable lift. If you have a staff member that loves technology they can set this up. Otherwise, find your nearest teenager to help.

This blog [Connecting Raspberry Pi/DHT11, Node Red, and Power BI with IoT Ensemble](https://www.iot-ensemble.com/blog/raspberry-pi-iot-ensemble-power-bi) takes you step by step through configuring a Raspberry Pi/Temperature sensor from scratch, connecting it to IoT Ensemble, and then streaming the data to a Power BI report. (It's easier than it sounds.)

[Sign up](https://www.iot-ensemble.com/dashboard) for IoT Ensemble and save your brewery thousands of dollars in time and lost product. Enroll your first device for free. No credit card required.

![Brewing Results](/img/screenshots/iot-ensemble-connected-devices.png)
