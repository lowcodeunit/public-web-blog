---
title: Go fully modular with micro frontends 
author: Rich Kurtzman
author_title: Brand Communications @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [website, micro frontends, frontend architecture, Fathym, monolith, micro frontends, modularize, webhost]
hide_table_of_contents: true
---

June 6, 2022 by Rich Kurtzman, _Brand Communications @ Fathym_

![](https://www.fathym.com/img/newmfe2.png) 

Somewhere along the way, micro frontends got a bad name for themselves.  

Maybe it’s the fact that the “trustworthy” tried and true way of building websites has been in the monolithic style. If it ain’t broke, why fix it? 

Some say micro frontends are unnecessary and overcomplicating things. Others worry about [payload size of apps, which we addressed here.](https://www.fathym.com/blog/articles/2022/march/2022-03-31-addressing-micro-frontend-criticisms-payload) Still others are concerned about environmental [differences between testing and production environments, as Martin Fowler said here.](https://martinfowler.com/articles/micro-frontends.html#Downsides) 

For a long time, micro frontends have gotten a bad rap. But these aren’t your dad’s micro frontends.  

## Truly, fully modular micro frontends 

One of the misconceptions about micro frontends is the way the architecture actually works. At least, with us.  

In the past – and even still today – some would break a single page, say the homepage, down to multiple components. That’s not exactly how we do micro frontends.  

Instead, in the fully modular approach, each page is created by a separate team or developer.  

“Each route is its own NPM package or GitHub repo,” director of engineering Jeremy Tomlinson explained. “That means separate teams. It also means no more blocking!” 

We host each and every route independently on your domain.  

To the end user, all of the routes (pricing, docs etc.) seem as if everything is written in the same codebase. 

## Benefits of modularization 

Micro frontends are: 

- Individual, independent, smaller frontends. 

- Multiple teams work on their own projects concurrently. 

- That means smaller, incremental deployments. One team isn’t waiting on another to push their deploy. 

- Smaller, more cohesive codebases. That makes them easier to maintain and change, too. 

- Allow for scaling teams as needed. 

- Give the ability to rewrite, change or update parts of frontend incrementally. That means fixing bugs or changing features of a site doesn’t force the site to be down for maintenance. 

## Use multiple different frameworks 

Another huge advantage of using the modular approach is each route/page/app can be written in a different JavaScript framework if you choose. But, the end user doesn’t know if it’s React, Angular etc. That opens up possibilities for the developer to use new technologies and better fits depending on what is needed for each page/site. 

Why would a company want to use multiple different frameworks on a single website? The reasons are numerous. 

As CEO Matt Smith quipped, “I’ve forgotten more frameworks than I can remember.” 

Simply, there are a ton of them out there. Hundreds, even, with more being created all the time. Or, at least, variants which may be design tools first and foremost, but can also be translated into JavaScript and used.  

With all those options, they offer different capabilities and fit different needs. Developers are given the freedom to use whichever they deem best for each specific application and route.  

## Team members’ abilities  

Maybe you have a team member who isn’t a developer but they need or want to help out. You can choose to use static site generators, too, and even pair them alongside JavaScript frameworks which have been fully developed by a developer. 

The rise of the “citizen developer” using low and especially no-code tools means almost anyone can stand up a web page or an entire website if you wish. And that’s all facilitated with the modular architecture we’re talking about here.  

It means more contributions from more people. And those folks could have some surprising ideas from an outside perspective the typical developers may not have had.  

## Conclusion 

Over the years, micro frontends have gotten a bad name.  

Some believe they’re unnecessary. Hey, monoliths have been around forever, and if it ain’t broke, don’t fix it, right? Well, sometimes those legacy codebases and the monoliths are so large and convoluted, one could argue they are broken and need a fix.  

Others dislike micro frontends because they believe them to be too complicated. In truth, *some* micro frontend architecture is too complicated. For instance, those who believe multiple teams should be working on one single page, with each team producing a separate element or feature. In that case, yes, it’s very complicated.  

But that’s not what we mean by micro frontends and “fully modular.”  

What we mean by micro frontends is that *each and every page is built and maintained by a different team.* For example: React for the homepage, Docusaurus for docs, Angular for the forum and static site builder Gatsby for the blog.  

![](https://www.fathym.com/img/MFERReactGatsbyAngular.png)

One can imagine a tech startup who of course has a homepage to explain who they were, they have a page devoted to their technical documentation, and a forum for feedback from users. Then, as time goes on, the startup realizes they need a more content-focused approach to tell the world about all the wonderful things they’re doing. So, now they need a blog, too.  

Instead of taking developers away from other important tasks, the new content creator can go and build the blog with, in this case, Gatsby.  

Which illustrates the point of micro frontends: Multiple teams can be working concurrently on different projects/pages which support the entire project.  

In the case of smaller companies, or even a single developer using micro frontends, the repositories can be managed by one person, they don’t have to be divided amongst multiple teams. Our modular approach [helps teams big and small.](https://www.fathym.com/blog/articles/2022/january/2022-01-20-how-our-microfontends-help-businesses-big-and-small)  

Even more wonderfully, if say a single developer created a [website but the company was scaling,](https://www.fathym.com/blog/articles/2022/april/2022-04-29-scale-as-you-grow) they could easily divide things up by using the all-important routes and then dole out tasks and/or create responsibilities for each person. Continue to scale up, and each team has their own responsibilities, goals and objectives which not only serve their facet of the site, but the entire group’s effort, as well.  

The best way to try out fully modular micro frontends is to [sign up for a free account today,](https://www.fathym.com/dashboard) and then upgrade in the future.  