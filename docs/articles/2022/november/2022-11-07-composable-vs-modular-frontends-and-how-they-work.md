---
title: Composable vs. Modular frontends and how they work together 
author: Rich Kurtzman
author_title: Brand Communications @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [Fathym, API, composable frontend, modular frontend, combinatorial, web dev, developer, JavaScript, no-code, low-code]
hide_table_of_contents: true
---

November 8, 2022 by Rich Kurtzman, _Brand Communications @ Fathym_

![](https://www.fathym.com/img/MFER4blogs5.png) 


**In this piece** 

- Defining Modular frontend architecture
- Defining Composable frontends
- Explaining how they work together 
- Composable frontends can save companies in an order of magnitude by using no-code tools


For developers – whether working alone or within an enterprise – deciding to use a monolith or smaller, modular frontends is a solid starting point when building a web application or website.  

Many enterprises have monolithic architecture, with legacy code. That makes it extremely difficult to make changes, updates and to scale as the company grows. So, some may want to [transition from monolith to a modular approach one piece at a time.](https://www.fathym.com/blog/articles/2022/may/2022-05-31-modularize-your-monolith-one-page)  

Or, executives may decide to stick with the legacy code. The good news is all of those options are hostable on Fathym using our Microsoft Azure provisioned cloud.  

And while we support either journey, let’s dive into how you can use Fathym to easily assemble applications with modular architecture and composable frontends. 

## What is modular architecture? 

In the modular approach, Fathym uses “routes” which allow you to run as many micro apps or pages as you want under each route. Think of a route as a subpath of a website. And since it’s modular, each app/page can be created by a single developer or by a separate team. 

For instance, with a /blog route, you could put multiple different blog pages inside/underneath it. Like: The blog home page, blog1, blog2, blog3, a list of content links on another page, and even a photo gallery on another page - all under that /blog route. 

“Each app/page under a route is its own NPM package or GitHub repo,” director of engineering Jeremy Tomlinson explained. “That means you can use separate teams. It also means no more blocking!” 

We host each route, app/page independently on your domain. We host each route independently as a sub directory on your domain. That means no more subdomains, or awkward proxies and redirects to map subdomains to your main site.  

To the end user, all the routes (blog, pricing, docs etc.) seem as if everything is written in the same monolithic codebase. However, it’s not, which means the codebases are smaller and therefore easier to update, replace, change, scale and fix bugs! 

## What it looks like 

Think of modular frontends as a _way_ to build frontends, UIs and UXs. It’s the architectural style.  

This is what a simplified website would look like using modular frontend architecture:  

![](https://www.fathym.com/img/MFERReactReactReact.png)

## Imagining modular frontends being similar to modular housing 

Modular frontends is a major change to the web development world, just as modular homes are in the world of home building. 

Modular homes consist of smaller pieces which come together to form the whole house. They’re a new, innovative way to streamline the homebuilding process; each piece is built in a factory, then shipped to the site where it’s quickly assembled.  

In opposition is traditional homebuilding, from the ground-up. In that way of building, a foundation is laid and waited on to dry. Then everything is framed in before adding insulation, windows, siding and a roof. At that point, the focus turns inside, where flooring and fixtures are finished.  

Now if we imagine that traditional house being monolithic architecture, we can see how a change to one thing can affect the entire structure. You can’t just move a doorway if it’s in a load-bearing wall. But in a modular house, you have more freedom to change one part of the house without disrupting the others. 

That’s one benefit to modular frontends, too; developers can change one piece of the site or app without worrying about breaking the code in another section. But, let’s go into the other benefits of modular architecture.  

## Modular architecture advantages 

Individual, independent, smaller frontends. 

Smaller, more cohesive codebases. This makes them easier to maintain and change, too. 

Multiple teams or multiple individuals work on their own projects concurrently. 

This means smaller, incremental deployments. One team isn’t waiting on another team to push their updates. 

Allows for scaling teams as needed. 

Give the ability to rewrite, change or update parts of frontend incrementally. This means fixing bugs or changing features of part of the site doesn’t force the entire site to be down for maintenance. 

## So then, what are composable frontends? 

In the modern world of composable applications, most of that composability is often presented at the headless, API layer. Fathym facilitates that but also believes there should be true composability on the frontend, presentation layer too. 

They are GitHub repos, NPM packages, zip files, etc. which are put together in any combination the developer – or citizen developer – wants to use. That means the freedom of using high-code, low-code or no-code all together, or choosing to use preferred strategy.  

![](https://www.fathym.com/img/newmfe.png)

As you can see, businesses can choose the best approach for each piece of their website or app.  

You may need to use React, which is robust, to create the homepage using high-code. And then, thanks to its lightweight design, Svelte could be a great solution to the blog. Use a low-code tool like Docusaurus for your docs. And then, in this example, use Angular for the behind-the-scenes dashboard.  

Really, the options are limitless with how you want to compose your frontend, and the use of no-code tools – like Plasmic – allow you to assign a project like building a blog to someone with zero coding experience. That not only saves resources in terms of the developer’s workload, but it also saves time because no-code tools allow for quick creation of projects thanks to templates and their drag-and-drop workflows. 

## How modular and composable frontends work together 

That’s how modular and composable frontends work together. Modular refers to the architecture developers can build frontends on top of at Fathym. [Modular frontends](https://www.fathym.com/blog/articles/2022/october/2022-10-04-five-reasons-to-use-modular-frontends) are smaller frontends and smaller codebases which set developers up with easier changes to codebases, quicker deployments and simpler bug fixes. 

Within [Fathym’s composable frontend architecture,](https://www.fathym.com/blog/articles/2022/september/2022-09-01-explaining-composable-frontend-architecture-as-simply-as-possible) you can use any JavaScript framework (and even some other frameworks) to build one aspect of your website. And then, if you wish, use a different framework, or a combination of high-code, low-code and no-code builders to build other parts of the site or app. 

## Join the composable frontend revolution 

“Bringing a series of no-code tools together to make an application can take your total application cost from $100,000 to $100. That's insane,” Fathym CEO Matt Smith explained recently. “That's a collapse in the world of technology. That's a revolution.” 

Exactly. 

Within composable frontends, businesses can choose to only use no-code tools in their new site or app. That means more collaboration between team members, it gives ownership and ability to move the project forward for “citizen developers” and ultimately saves both time and money. 

“Composable frontends and no-code tools – plus Fathym – allow you not to have a DevOps team,” Smith continued. “They allow you to start getting more done faster for far less money. We're not talking like $5 less. We're talking in an order of magnitude.” 