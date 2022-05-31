---
title: How to modularize your monolith frontend, transition at your pace
author: Rich Kurtzman
author_title: Brand Communications @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [website, monolithic frontend, frontend architecture, Fathym, micro frontends, modular frontend, webhost]
hide_table_of_contents: true
---

May 31, 2022 by Rich Kurtzman, _Brand Communications @ Fathym_

![](https://www.fathym.com/img/MFERPlasmicGatsbyDocuReact.png)


Being frontend agnostic means not having a dog in the race. It means being able to support either architecture. 

Monolithic or micro frontends: There are some advantages to both.  

For the monolith, it’s been the standard way websites have been built for many years. So, for some entities, staying in what they’ve used for years may seem like the way to go.  

Better the devil you know than the devil you don’t, as they say.  

![](https://www.fathym.com/img/monovsmicro.png) 
(Credit: n-ix.com) 

## Benefits of the monolith  

Of the benefits, most are focused on the fact that a monolith is completely composed within one container. (Well, there are downsides to this too, as we’ll explain in a bit.) 

If everything is inside of one container (ask Mike?), it means everything is in one place. That can make it simpler to do some things.  

A monolith is simple to develop – and straightforward – because everything is in one code base. Everyone who’s developing the site is using that one code base, not multiple code bases as is the case with micro frontends.  

Following that same train of thought, a monolith is simple to deploy because it’s one centralized codebase and repository. 

And continuing, it’s simple to test from end-to-end because it’s all one code base. And, that means it was all built in the same JavaScript framework, too.  

Finally, as we stated before, monoliths are the industry standard and the way websites have been built for many years. That means they are considered more trustworthy than micro frontends.  

## Downsides to monolith  

One code base is great and all, except for when it isn’t.  

And that’s exactly when the code base explodes – or gradually grows over time – into something unmanageable and unwieldy. It means thousands and thousands of lines of code, searching through them when something breaks to find the bug and fix it.  

So in that way, monoliths can be easier to develop at the beginning, but as the code grows, so do the headaches.  

Another downside is scalability issues. In order to change one part of the site – say, the blog – a developer must update the entire site. In micro frontends, autonomous teams can update any part of the site without being “blocked” by another team. And, [scaling is much easier with micro frontends](https://www.fathym.com/blog/articles/2022/april/2022-04-29-scale-as-you-grow) because of their modularity and separate teams which run them.  

Finally, the lack of flexibility is a huge downside. Building everything in one JavaScript framework is easier at the beginning, but what happens when over time, there are new releases and upgrades? That means upgrading the entire site, which could be really tedious. Similarly, if you built your site out of, say, Angular, a few years later you may start hearing great things about Svelte and wish you built it in that framework. In a monolith, you can’t just inject new technology into the old architecture, but you can with micro frontends.  

## Breaking down the monolith one piece at a time 

That’s where micro frontends or modularization comes in, slowly breaking apart or dissolving the monolithic frontend.  

Maybe that earlier example rings true, and you want to try out Svelte – which was rated the [most popular JavaScript framework by developers in Stackoverflow’s 2021 survey](https://www.fathym.com/blog/articles/2022/april/2022-04-13-micro-frontend-popularity) – now you can.  

So, if you start with a monolith and want to break a pricing page out, developers would need to use a subdomain. Conversely, with us, you can simply use “yoursite.com/pricing”. 

These aren’t your grandpa’s micro frontends. We host each and every route independently on your domain.  

![](https://www.fathym.com/img/newmfe.png) 

To the end user, all of the routes (pricing, docs etc.) it seems as if everything is written in the same framework. But, the end user doesn’t know if it’s React, Angular etc. That opens up possibilities for the developer to use new technologies and better fits depending on what is needed for each page/site. 

And a great way to go from monolith to micro frontends is to start small and transition at your own pace. If you're still using a monolith and you host with Fathym, you can start by breaking out one, single page at a time. That allows you to start small and continue down the path to modularization at your own pace.  

## Join our Discord Live on Wednesday, June 1  

We’re going to show you, step by step, how to break down part of your monolith and modularize it! Then, you can easily repeat that step over time and completely modularize your website or app if you so desire. Or, keep it in a monolith-plus-one type situation somewhere in the middle.  

[Join the Discord Live here!](https://discord.gg/kBV6p7gX?event=974437795491885107) It starts at 2 p.m. MDT (4 p.m. EDT)!