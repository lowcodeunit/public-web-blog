---
title: How to use Guerilla IoT for end-to-end encrypted messaging 
author: Rich Kurtzman
author_title: Brand Communications @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [IoT, DIY, encryption, end-to-end encryption, IoT Ensemble]
hide_table_of_contents: true
---

July 26, 2022 by Rich Kurtzman, _Brand Communications @ Fathym_

![](https://www.fathym.com/img/encryptionkey.png)

Guerilla IoT. Yes, it sounds as cool as it is.  

But what is it?  

It’s fast-moving, small-scale tech which moves against the orthodox. It’s unconventional, low-budget but still badass.  

Think James Bond-like tech used to defeat his enemies, the supervillains. Tech like an encrypted messaging device, for instance. 

## Encrypted messaging 

Encrypted messaging is already a thing, yes. But we’re talking end-to-end encryption.  

Before we get to the juicy stuff, we should examine why encrypted messaging is so big right now.  

Well, the answer is simple and should come as no surprise.  

Big tech companies are using our data, mostly to sell us unneeded things on the internet. Ever notice you get an ad on Instagram right after purchasing that product? Unfortunately for the algorithm makers, they haven’t figured that part out quite yet. “Dude, I just bought a new mattress, why are they trying to sell me a new one,” we may wonder. 

Or, they’re using that data to figure out what makes us tick. What do we love and what do we hate? Then, they (Facebook/Meta, Google, Amazon and more) shove the things we have strong reactions to in our face. Because they’ve also collected data figuring out what keeps us on their website for longer.  

Encrypted messaging apps are even more important if you’re fighting against a corrupt government or reporting on one, like a journalist may be.   

As [Business Insider wrote](https://www.businessinsider.com/signal-app#:~:text=Over%20the%20last%20few%20years,to%20a%20group%20chatting%20phenomenon.) in Oct. 2021., “Favored by tech giants, cybersecurity experts, journalists, government officials, and many more, Signal has gone from a darling secret of the security community to a group chatting phenomenon.” 

## Can you trust the app is encrypted, though? 

Some apps boast about their end-to-end encryption, but is that the case?  

“The idea being: You can always hack an OS and install a keylogger. So, even if you are communicating on a P2P end to end encrypted app like Signal, you can never be sure the device you're using is secure itself. So, the app being secure doesn't matter,” Fathym CEO Matt Smith explained. 

This is not to say Signal isn’t doing a good job, it is! However, operating systems themselves can and will be hacked and a keylogger can simply show the hacker what passwords are. And even more, a keylogger virus can show what those secret messages are as they’re being typed on the keyboard, before they’re even sent!  

So, let’s go one step further and create an end-to-end hardware-level encrypted messaging device.  

## How it works 

We start with the [SparkFun Cryptographic Co-Processor](https://www.sparkfun.com/products/18077) (for a mere $9.95) for the hardware encrypted message and an [Iridium 9603](https://apollosatellite.com/products/iridium-9603n-sbd-transceiver?variant=12229095784490&gclid=EAIaIQobChMI1OL--Jr7-AIVSBXUAR1zBA12EAQYAyABEgLzkPD_BwE) (more expensive) for satellite communications. 

![Sparkfun Cryptographic Co-processor](https://www.fathym.com/img/sparkfuncrypto.png)

![Iridium 9603](https://www.fathym.com/img/iridium9603.png)

“The Cryptographic co-processors encryption keys are burned at the same time and are paired,” Smith explained. “The secure device only runs known code (doesn't have an operating system to hack). So, it's secure end-to-end worldwide. “ 

So, anyone could use our secure architecture of encrypted messages from and to anywhere in the world. And this is how the infrastructure would look:  

Secure Device ([Arduino](https://store-usa.arduino.cc/products/arduino-uno-rev3/?selectedStore=us) or Artemis w/ [screen](https://www.newark.com/kentec-display/k350qvg-v2-f/lcd-module-3-5-320x240-touch-screen/dp/48T7980) + keyboard) <-> Cryptographic co-processor <-> Iridium <-> **Fathym** <-> Cryptographic co-processor <-> Secure Device 

## Conclusion

As you can see, the important link in between the secure devices is Fathym and our [IoT Ensemble platform.](https://www.fathym.com/blog/july/2022-07-15-discover-iot-ensemble) IoT Ensemble allows you to easily and quickly connect device APIs and it acts as your virtual app developer, managing the Microsoft Azure complexity. IoT Ensemble handles all of the heavy lifting in Azure, securely hosting your data in the cloud. 

Take encryption to the next level with Fathym and this end-to-end encrypted messaging device.  

Sign up for a [free account today at Fathym](https://www.fathym.com/dashboard) and jump into [IoT Ensemble](https://www.fathym.com/iot/dashboard) to start connecting devices and go from James bond to 007.  