---
title: Crazy Mountain Brewery
author: Jeremy Tomlinson
author_title: Director of Engineering @ Fathym
author_url: https://www.iot-ensemble.com
author_image_url: https://media-exp1.licdn.com/dms/image/C5603AQFkIK-kLZji_Q/profile-displayphoto-shrink_200_200/0/1517744970954?e=1617840000&v=beta&t=Cb3O5xbscYZtzsxK7ABot8biLash6plA39TV4BY0BwE
tags: [crazy mountain brewery, iot, reliable, brewing, raspberry pi, sensors, dashboards, alerts]
hide_table_of_contents: true
---

Coloradans love beer. We hand out beers at the end of races instead of water. After a long day of biking or skiing we drink beer. Beer is a part of the live music scene, sporting events, festivals, and other social gatherings. With that many beer lovers, it makes sense that Colorado has the fourth most breweries per capita in the U.S. and that Colorado is home to more than 400 established breweries.

One of the breweries in our back yard is Crazy Mountain Brewery. They started operations in the Vail Valley with a taproom in Edwards, CO and later opened another location in Denver, which became their production headquarters. Through a mutual contact we learned that the Director of Operations at Crazy Mountain was looking for off-site methods to monitor some of their brewing equipment.

Crazy Mountain knows that complete temperature control is essential during the brewing process. They wanted to be notified via text when the boiler temp dropped below 150 degrees or when the glycol temp was greater than 41.

![Crazy Mountain Brewery](/img/screenshots/cmb-tanks.jpg)

For this project, Crazy Mountain used a Raspberry Pi connected to a Temperature Sensor to monitor the brewery's boiler tank and a Waterproof Temperature Probe to monitor the glycol tank. The Raspberry Pi was connected to [IoT Ensemble](https://www.iot-ensemble.com) and the data was streamed to a dashboard where the alerts were setup. The alerts had the potential to make a real difference. Within a couple of weeks all of the hard work paid off when the brewery lost power.

> "You saved us a whole day of brewing! If we didn’t have the alert and we didn’t come in to check Sunday or Monday, we would have walked in to cold water today. And it takes so long to heat up that we wouldn’t have been able to brew at all today, which messes up the whole week!"
> Director of Operations at Crazy Mountain Brewery, Denver, Colorado

The mission was a success. You can do the same for your brewery. [This blog](https://www.iot-ensemble.com/blog/raspberry-pi-dht11-node-red-iot-ensemble-power-bi) takes you step by step through configuring a Raspberry Pi/Temperature sensor from scratch, connecting it to IoT Ensemble, and then streaming the data to a dashboard. If you have any questions along the way, drop us a line at support@fathym.com and we'll be happy to help.

[Sign up](https://www.iot-ensemble.com/dashboard) for IoT Ensemble and save your brewery thousands of dollars in time and lost product. Enroll your first device for free. No credit card required.

![Fathym and CMB](/img/screenshots/crazy-mountain-brewery.jpg)
