---
title: The power of the “iceberg concept” in software development
author: Michael Gearhardt
author_title: CTO @ Fathym
author_url: https://www.lowcodeunit.com
author_image_url: 
tags: [low code, risk taking, business, Fathym, Fathym Platform, Microsoft Azure, Azure, landing pages, composable]
hide_table_of_contents: true
---

February 21, 2023 by Michael Gearhardt, _CTO @ Fathym_

![](https://www.fathym.com/img/iceberg-vector.png)

As software developers, we are often tempted to build everything from the ground up. We want complete control over every aspect of our technology, and we believe that building everything in-house will give us that control. However, this approach often leads to an upside-down iceberg where we focus too much on the details below the surface and not enough on what our users actually need. In this blog post, we'll explore the iceberg concept in software development and how it can help us create better products.

## The iceberg concept

The iceberg concept is a metaphor that describes the idea that there is more to something than what can be seen on the surface. Just like an iceberg, where only a small portion is visible above the waterline, software development also has hidden complexities that users don't see. The goal of the iceberg concept in software development is to provide a simple and easy-to-use starting point, while still offering the option for more complex and customized features below the surface.

## An opinionated starting point

Fathym’s opinionated starting point is the streamlined and easy-to-use interface that users see on the surface. It's the simplest way for users to experience our technology – a user's deployed applications working in concert to deliver user experiences and solutions. This starting point is essential because it provides Fathym’s users with a quick and easy way to get started with our technology. It's the entry point that sets the tone for the rest of the Fathym user experience.

What makes up this surface, starting point then? When a user [signs up](https://www.fathym.com/dashboard/) for Fathym they have access to a shared cloud environment. At its simplest, Fathym is a platform for deploying and hosting applications.

![](https://www.fathym.com/img/deploy-a-project.png)

Out-of-the-box, users have a full CI/CD workflow that leverages GitHub Actions and a flexible hosting environment that allows users to host web projects as a series of modular applications (with individual build pipelines for each source control and application deployed).

Users can add custom domains with SSL, set up redirects, connect frontends to APIs and backend instances through reverse proxies, add user authentication and inject application modifiers. It's a very complete starting point for delivering products and experiences to your end users.

It’s true that there are other well-known PaaS vendors that streamline the application delivery process. However, Fathym has one crucial difference – it’s not a cloud.

Yes, it’s true that Fathym offers a shared cloud environment for signups, but the real power of Fathym is that we can deploy everything we have described so far into your own private Azure cloud (through a few commands with our CLI). Fathym gives you a truly cloud-native starting point for delivering solutions and products with Azure, without any custom configuration or compromising your cloud control.

With your Azure cloud set up, you can use the Fathym CLI to launch full stack automated recipes – what we call [LowCodeUnits (LCUs)](https://www.fathym.com/blog/articles/2023/february/2023-02-06-composable-low-code-application-development) – that drastically reduce the steps involved in getting fully-fledged, custom applications up and running for different use cases.

## Below the surface

Below the surface of Fathym’s opinionated starting point, there's more complexity and customization. This is where we offer options for code, CI/CD, PaaS, IaaS, cloud native, integration and legacy connections, and so on. By offering these options below the surface, we provide users with the flexibility to customize their experience to their needs. This approach not only meets users' needs but also keeps our technology relevant and up to date.

For example, you can choose a different source control, such as GitLab, Bitbucket, Azure, or even ZIP files – if that’s what you’re into. You can choose a different build pipeline, such as Azure, Netlify or Cloudflare. Select a different CDN to Azure Global CDN or use Terraform instead of ARM templates. Integrate Auth0 instead of Azure Active Directory for identity management. Or plug your tech stack into legacy CRM or DAM systems.

One thing that sets Fathym apart is that unlike our competitors who lock away your code and create a world where you don't have control of your cloud, and in many cases do not meet enterprise infrastructure standards, Fathym operates differently. We work as a virtual developer, contributing to your core IP and assets – generating real value for your organization, much as you would expect from hiring a team of senior engineers, but at a fraction of the cost.

## The problem with an upside-down iceberg

A powerful anti-pattern image can be created for how NOT to start a software company or overhaul a tech stack in 2023. Flip the iceberg and you see how a lot of companies take the opposite approach:

Building out their own completely custom world that could have been below the surface and expending extensive resources to get to a point where they can reliably deliver solutions and products. This creates an imbalance where the upside-down iceberg will easily topple.

So, what's the solution? Start with the user experience first and build the technology stack around that. By starting with the user experience, you're able to identify the core functionality and features that are necessary to meet user needs. From there, you can build out the technology stack to support those features, while keeping the user experience in mind. This approach ensures that your technology meets the needs of your users while also being scalable, efficient, and cost-effective.

## Future-proofed development 

The power of the iceberg concept lies in its ability to balance simplicity and complexity in software development. By offering users and organizations a simple and easy-to-use starting point, Fathym creates an entry point that sets the tone for the ongoing development of your solutions and products. By providing options for custom workflow configuration and vendor selection, Fathym gives you an open, future-proofed development pathway where control and IP ownership are firmly in your hands.