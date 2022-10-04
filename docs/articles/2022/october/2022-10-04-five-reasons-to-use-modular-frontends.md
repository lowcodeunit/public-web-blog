---
title: 5 reasons you should be using modular frontends
author: Rich Kurtzman
author_title: Brand Communications @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [Fathym Platform, modular, modular frontends, high-code, low-code, no-code, javascript, react.js, react, Plasmic]
hide_table_of_contents: true
---

October 4, 2022 by Rich kurtzman, _Brand Communications @ Fathym_

![](https://www.fathym.com/img/modular.jpg) 

Monolithic architecture is like, so 90s.  

Step into the 2020s with modular frontend architecture and reap all the rewards along the way.  

In this piece, we’ll break down [what modular frontends are](https://www.fathym.com/blog/articles/2022/august/2022-08-16-modular-frontends-fantastically-functional), and then give all the benefits they bring to individual developers and businesses alike.  

## Modular frontends definition  

In the modular approach, we use “routes” which allow you to run as many apps or pages as you want under each route. Think of a route as a subpath of a website. And since it’s fully modular, each app/page can be created by a single developer or by a separate team. 

For instance, with a /blog route, you could put multiple different blog pages inside/underneath it. Like: The blog home page, blog1, blog2, blog3, a list of content links on another page, and even a photo gallery on another page - all under that /blog route. 

“Each app/page under a route is its own NPM package or GitHub repo,” director of engineering Jeremy Tomlinson explained. “That means you can use separate teams. It also means no more blocking!” 

We host each route, app/page independently on your domain. That means no more subdomains, making your site easier to find by customers and better SEO. 

To the end user, all the routes (blog, pricing, docs etc.) seem as if everything is written in the same monolithic codebase. However, it’s not, which means the codebases are smaller and therefore easier to update, replace, change, scale and fix bugs! 

# Benefits of using modular frontends  

We just shared a few of the benefits of using the modular approach, but here’s a complete list: 

## Individual, independent, smaller frontends 

We’re not anti-monolith – you can host a monolith frontend on Fathym – but there are certain advantages to smaller frontends.  

For instance, that means smaller, incremental deployments. And incremental deployments mean a smaller likelihood of big-time bugs when deploying.  

The independent teams means one team isn’t waiting on another team to push their updates. Teamwork makes the dream work, and this workflow helps not only in keeping the site moving forward in its evolution, but also keeps teams working alongside one another in harmony. 

## Multiple teams work on their own projects concurrently 

Businesses almost always have multiple goals they are trying to achieve all running at once.  

Similarly, websites aren’t simple, one-page applications anymore, either.  

Today, websites almost must be complex in order to meet goals and to impress customers as they visit.  

Let’s say you’re a photographer, for instance. You’ll want a homepage, a contact page, a newsletter signup page, a gallery for all your photos (of course), possibly an e-commerce page to sell prints of your photos, a shop with many pages to browse your works and the list just goes on.  

Or maybe you’re a company who focuses on selling film cameras. That e-commerce page/shop would include all the different, unique cameras you find and sell, all the film they use, and it may even offer equipment for photogs to develop their own film. In that instance, you’d probably want a place for customer feedback on your site with reviews, a page with all your social media accounts listed and linked, as well as a blog to give updates to your customers.  

Whether your team is small or large, using modular frontends means you can divide and conquer. Have a marketing team working on your blogs, shop items and newsletters. Have a photographer on staff sharing pictures of the new cameras, film etc. And maybe an accountant needs to look at sales, setting prices etc. 

All those folks can be working concurrently on their own projects, in their own part of the site, without slowing one another down. 

Imagine a hive of bees. 

Those worker bees go out to find the best pollen they can, searching close by as well as far away, in some cases. Each worker bee is tending to their own task, and then they’re bringing it back to help the entire hive. 

Those bees work in a modular fashion and have discovered the “divide and conquer” workflow, and so have we. 

It allows smaller teams, like ours (and yours!), to accomplish big tasks and goals in short amounts of time. 

Simply, modular frontends allow for a more efficient approach to web development. 

## Allows for scaling teams as needed 

Modular frontends certainly help with scaling teams.  

Almost no one gets into business looking to stay a one-person show forever. We want to grow, scale, and succeed.  

As your business grows, your website needs to have the agility to be able to scale along with it.  

Need to add a new page or route to your website? Modular frontends allows you to do that at any time. And because the routes and pages are independent, it means you don’t have to figure out how to fit it into the old, giant codebase.  

Simply add a new route in the Fathym Platform and choose your own adventure. Use [no-code tools like Plasmic](https://www.fathym.com/blog/articles/2022/august/2022-08-10-why-we-loved-using-plasmic-for-our-marketing-page) to create awesome marketing pages, blogs and more. Use low-code tools like [Docusaurus](https://www.fathym.com/blog/articles/2022/march/2022-03-16-how-i-blog-in-markdown) to create tutorials or docs. Or use JavaScript like Svelte.js to create something dazzling from scratch.  

It’s up to you. 

## Smaller, more cohesive codebases 

We touched on this a bit in a previous bullet point, and now we’ll dive in further. 

Monolithic codebases are usually bloated, old and difficult to use. Adding a new feature, page or app can create huge headaches, bugs or even take out the entire site.  

Modular frontends have smaller codebases by default: Because you only need that codebase to run *that route*. 

Smaller codebases make each one easier to maintain and change, too. 

They give developers and citizen developers – depending on the tools – the ability to rewrite, change or update parts of frontend incrementally. This means fixing bugs or changing features of part of the site *doesn’t force the entire site to be down for maintenance.* 

## Modular frontends with one framework 

This is an example of how a website could look by using only React.js in the modular approach. React powers each route of your site, and you’d likely want different codebases directed toward specific goals for each one.  

![](https://www.fathym.com/img/MFERReactReactReact.png)

Clearly, you’d want the “root” in this example to have a robust, beautiful UI/UX. There will likely be links to all kinds of other pages on your site. The blog has its own criteria; it needs to have a specific UI/UX, a pleasing design, clickable blog links, a search bar etc. The forum would be the simplest of the three in the above example.  

Within modular frontends, it pays to have different, smaller codebases for each, individual route.  

# Combinatorial approach within modular frontends 

Another option is you can use whatever [combination of high-code, low-code and no-code tools](https://www.fathym.com/blog/articles/2022/september/2022-09-01-explaining-composable-frontend-architecture-as-simply-as-possible) you want within the structure of your website. And end users will probably not even have a clue.  

For instance, you can have the homepage designed and written with Plasmic (no-code tool), your blog built with Gatsby (low-code), your docs in Docusaurus (low-code) and your administrator pages created from scratch in React (high-code).  

![](https://www.fathym.com/img/MFERPlasmicGatsbyDocuReact.png)

If you don’t want to build a blog from scratch, simply plug-and-play with Gatsby. The same goes for a docs route; Docusaurus is an easy, straightforward solution there.  

Being able to use no-code tools also empowers the “citizen developers” on your team to do more. 

## Modular frontends visualization 

This graphic helps bring it all together. Not only are you using a combination of tools together for the site, but you can see how the independence of the teams works, and how each update isn’t affecting the others.  

![](https://www.fathym.com/img/newmfetree.png) 

## Conclusion 

Modular frontends are fun and functional. They are powerful and flexible.  

The limits to how you want to build your frontend are only your imagination.  

Try today at [Fathym.com.](https://www.fathym.com/dashboard) 