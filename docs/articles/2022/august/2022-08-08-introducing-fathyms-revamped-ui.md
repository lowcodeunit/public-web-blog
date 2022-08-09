---
title: Introducing Fathym's revamped user interface
author: Kilian Carroll
author_title: Marketing @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [Fathym, Fathym UI, Fathym user interface, deploy, modular, composable, devops]
hide_table_of_contents: true
---

August 8, 2022 by Kilian Carroll, _Marketing @ Fathym_

![](https://www.fathym.com/img/fathymbubbles.png)

We are delighted to introduce a revamped user interface for Fathym! This year has been a whirlwind of rapid user adoption, invaluable feedback and product iteration. Thank you to the over 29,000 people who have tried out Fathym so far and to those that have provided extremely helpful feedback. 

Let’s dig into it! 

## A new overview dashboard 

![](https://www.fathym.com/img/ui1.png)

The overview dashboard is the new home for returning users.  

We felt that we had too much packed into our main dashboard, so we have adopted a streamlined navigation with tabs for overview, projects, teams, DevOps and modifiers. 

![](https://www.fathym.com/img/ui2a.png) 

In the overview tab you can view recent activity (builds, pull requests or issues) and your projects. 

To view your activity feed in full, click Activity in the navbar.  

![](https://www.fathym.com/img/ui2.png) 

For your deployed projects, you can launch them in your browser or click on the edit button to dig into the details or add additional modular frontends or APIs. 

![](https://www.fathym.com/img/ui3.png) 

To create and deploy a new web project, simply click Add Project and you will land in the create project wizard. 

## Deploy a new project in no time  

You can deploy your web project in just a few clicks. 

![](https://www.fathym.com/img/ui4.png) 

A great way to get started with Fathym is to deploy one of our templates. 

The templates range from customizable starters for frameworks React, Vue, Svelte and Angular, and Static Site Generators Gatsby and Docusaurus. 

You can also launch a customizable no code site builder or a modular frontend example site to see how you can integrate multiple repos and tech stacks as a composable frontend under one domain. 

![](https://www.fathym.com/img/ui5.png) 

To import and deploy your existing GitHub project, simply click Import from Git and select your GitHub organization, repository and branch.  

Then hit deploy and let Fathym handle the rest. 

## Make your projects modular and composable  

The projects tab is a space for managing your web projects. 

![](https://www.fathym.com/img/ui6.png) 

Let’s quickly dive into how you can edit and add to your projects. From the list in the screenshot above, I’m going to click the edit button beside the modular frontend project. 

![](https://www.fathym.com/img/ui7.png) 


This modular frontend example template was set up to show how you can structure your web project as a series of modular frontends. In this example we’re using Plasmic (a no code, visual builder), Gatsby and Docusarus (static site generators) and React (the popular JavaScript library). 

These pages are configured as ‘routes’ or subdirectories off your main domain (in this case, [composablefrontend.fathym-it.com](https://composablefrontend.fathym-it.com)). The Plasmic homepage is /, the [Gatsby blog is /blog](https://composablefrontend.fathym-it.com/blog), the [Docusaurus docs are /docs](https://composablefrontend.fathym-it.com/docs), and the starter template built from [React is /admin](https://composablefrontend.fathym-it.com/admin). 

![](https://www.fathym.com/img/ui8.png)

You can see in the screenshot above the 4 routes and modular frontends that make up this template. 

I now want to deploy an additional modular app to this project. To do this I click Add Route and the Create Application wizard pops up. 

![](https://www.fathym.com/img/ui9.png)

I am going to create a dashboard route. In this case I am deploying our angular starter template from GitHub as /dashboard. 

![](https://www.fathym.com/img/ui10.png)

You can also deploy additional routes through npm or zip upload.  

As you can see here, we now have 5 routes in our project, with /dashboard an [Angular-built subdirectory](https://composablefrontend.fathym-it.com/dashboard/) off composablefrontend.fathym-it.com. 

![](https://www.fathym.com/img/ui11.png)

We now have a truly composable, modular frontend with routes built by Plasmic, Gatsby, Docusaurus, React and now Angular.  

Of course, in real development scenarios it is not necessary to use 5 different tech stacks for 5 different pages of your web project. But even if you build your whole project in React, by breaking your project down into a series of composable and modular apps, your project is now more flexible, pluggable, replaceable and scalable. 

## Keep on top of your DevOps 

The DevOps tab is a space for managing your source controls and build pipelines. Our approach to independently versioning and deploying each route within your projects makes for a lot of repos and build pipelines, so it’s important to have a consolidated view of them.  

![](https://www.fathym.com/img/ui12.png) 

Source control (or version control) is the practice of tracking and managing changes to code. When you create a web project, Fathym either automatically creates a new source control repository within your preferred GitHub organization or connects to an existing one. Version control also lets you update to the latest version of your app, or rollback to a previous version at the click of a button. 

A build pipeline automates the CI/CD processes that build and deploy code. Fathym automates individual build pipelines for each source control and application deployed. 

## Do more with application modifiers 

The Mods tab is a space for managing your application modifiers. 

![](https://www.fathym.com/img/ui13.png) 

Application file modifiers allow you to add custom modifications or third-party JavaScript libraries at runtime, support pre-rendering workflows for your dynamic content and single page applications (SPAs).  

Fathym automatically sets up the LCU Reg modifier for current username and configured state values, and the HTML Base modifier for writing base href values in HTML headers. 

You can also add third-party modifiers such as Google tag manager, or analytics tracking from your CRM (Salesforce, HubSpot, Gist etc.). 

## Try Fathym today! 

To get started with Fathym or to dive back in to check out our recent updates, [sign up or log in for free here](https://www.fathym.com/dashboard). 

Let us know what you think! 