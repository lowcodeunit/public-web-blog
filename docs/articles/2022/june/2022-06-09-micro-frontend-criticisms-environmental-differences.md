---
title: Addressing micro frontend criticisms | Environmental Differences
author: Rich Kurtzman
author_title: Brand Communications @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [website, micro frontends, webdev, Fathym, Microsoft, Martin Fowler]
hide_table_of_contents: true
---

June 9, 2022 by Rich Kurtzman, _Brand Communications @ Fathym_

![](https://www.fathym.com/img/devshelpingdevs2.png) 

Micro frontends are the wave of the future, the next big thing in website frontend development. But, that’s only the case if you’re using them correctly.  

Of course, micro frontends aren’t perfect, and they also have some negative connotations connected to them. That’s where we hope to clear the air and explain how we use the frontend architecture differently than others.  

For one, [our fully modular approach](https://www.fathym.com/blog/articles/2022/june/2022-06-06-go-fully-modular-frontend) means each page (or route) is managed by a separate team. We do not have multiple teams combining their work into a single page or container, as is the case with the older definition of micro frontends. But more on that later.  

For now, let’s define micro frontends. 

## Definition  

At its core, [micro frontends](https://www.fathym.com/blog/articles/2022/march/2022-03-14-a-simple-micro-frontends-explainer) simply mean taking a monolithic frontend — the rigid, immovable, indivisible — and breaking it down into smaller pieces. Those smaller pieces are then handled by small teams, which work autonomously toward a shared goal. 

The benefits of using micro frontends are numerous. One can break down that bigger codebase into smaller pieces, which means faster builds as well as faster fixes. Updates can be performed on one part of a site without having downtime for the entire site. Also, multiple different [JavaScript frameworks](https://www.fathym.com/blog/articles/2022/april/2022-04-21-four-javascript-frameworks-you-should-know) can be used on one single project. 

![](https://www.fathym.com/img/newmfe2.png)

In this example, the homepage was built in React, one of the most popular frameworks out there. The forum was created in Angular. Meanwhile, the blog was created in Svelte, and the static site generator Docusaurus runs the technical documentation. 

Beyond just being able to use these different frameworks, imagine each one of those routes were being built and maintained by a different team (or individual). That again makes updating one aspect of the website easier and faster, because each team isn’t necessarily waiting for one another to finish before they can push their updates. 

Micro frontends also mean smaller codebases, which turns into quicker fixes for bugs and faster builds overall. 

## When to use them  

Really, there isn’t really a bad time to use micro frontends. It may seem unnecessary to a tiny team, or a one-person show, but it makes sense to keep an eye towards the future, too. Because if a team is scaled up, others can jump in and be given specific tasks or goals. 

The bigger a group working on a website is, the more it makes sense to split that workload into smaller, bite-sized pieces which can be managed by smaller teams. And if you have a bug or error happening on one page, it won’t necessarily impact the other pages. Meaning you can tackle that fix while the rest of your site is still up and running perfectly.  

## Environmental differences criticism 

As we work to champion micro frontends, we’re also working through Martin Fowler’s criticisms of the architecture.  

In a previous blog, [we addressed their payload size criticism.](https://www.fathym.com/blog/articles/2022/march/2022-03-31-addressing-micro-frontend-criticisms-payload) Yes, it’s true, having an entire site built with many iterations of React could and likely would slow performance. But, we look to use static site generators as well as lightweight JavaScript frameworks – like Svelte and Vue – when possible and applicable. (Read more in the link posted above.) 

Now, moving onto environmental differences, Martin Fowler’s 2019 blog explains it as:  

“If we're developing locally in an environment that is not production-like, we need to ensure that we regularly integrate and deploy our micro frontend to environments that are like production, and we should do testing (manual and automated) in these environments to catch integration issues as early as possible.” 

There are two different ways we are able to address this issue.  

First, thanks to the new and improved version/definition of micro frontends – which we think of as [fully modular](https://www.fathym.com/blog/articles/2022/june/2022-06-06-go-fully-modular-frontend)  – each and every frontend is hosted on it’s own route. Therefore, there is no shared container, as was the old way of thinking about micro frontends, and there are no integration issues.  

For example, if your homepage is built in React ex. www.yoursite.com and your forum is built in Angular ex. www.yoursite.com/forum, they’re separate repositories, they’re hosted on different routes and managed by different teams. Although they appear to be running on the same domain, they are completely modular and independent of one another – thus, no integration issues.  

![](https://www.fathym.com/img/MFERReactGatsbyAngular.png)

Secondly, we avoid these environmental differences by setting up test routes in Fathym that host your /feature branches and the QA team can verify it’s working before merging it into integration. That means creating a production-like environment and testing it before deploying, therefore knowing it will work. 

“When you push it live, nothing’s a surprise. That's a big efficiency gain,” Director of Engineering Jeremy Tomlinson explained. “Fathym’s helping you be successful and removing those headaches so it’s not on the developer to be just guessing.” 

Our goal is to not only lower the bar in terms of developing experience needed to build a website, but also to catch integration issues as early as possible.” 

[We invite you to sign up for Fathym now,](https://www.fathym.com/dashboard) not only to achieve your goals, but to have a little fun while you’re at it, too. 