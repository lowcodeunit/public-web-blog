---
title: Modular frontends are fantastically functional
author: Rich Kurtzman
author_title: Brand Communications @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [Fathym, React, Angular, modular frontends, modular, micro frontends, JAMstack]
hide_table_of_contents: true
---

August 16, 2022 by Rich Kurtzman, _Brand Communications @ Fathym_

![](https://www.fathym.com/img/smilingdev.png)

Modular frontends are fantastically functional however you want to use them, be it with multiple frameworks, no-code tools and single-page application creators or if you want to use the same framework throughout.  

Let’s dig into the modular frontends concept and then take a look at how modular frontends behave when using the same framework for every route, app & page on your site.  

## Modular frontends definition 

One of the misconceptions about micro frontends is the way the architecture works. At least, with us. That’s part of the reason we changed the name to “modular” frontends. 

A common approach to micro frontends is to break a single page down to multiple *components*. That’s not exactly how we do modular frontends. 

Instead, in the modular approach, we use “routes” which allow you to run as many apps or pages as you want under each route. Think of a route as a subpath of a website. And since it’s fully modular, each app/page can be created by a single developer or by a separate team. 

For instance, with a /blog route, you could put multiple different blog pages inside/underneath it. Like: The blog home page, blog1, blog2, blog3, a list of content links on another page, and even a photo gallery on another page - all under that /blog route!  

“Each app/page under a route is its own NPM package or GitHub repo,” director of engineering Jeremy Tomlinson explained. “That means you can use separate teams. It also means no more blocking!” 

We host each route, app/page independently on your domain. That means no more subdomains, making your site easier to find by customers.  

To the end user, all of the routes (blog, pricing, docs etc.) seem as if everything is written in the same monolithic codebase. However, it’s not, which means the codebases are smaller and therefore easier to update, replace, change, scale and fix bugs! 

## Benefits of using modular frontends 

We just shared a few of the benefits of using the modular approach, but here’s a complete list: 

- Individual, independent, smaller frontends.  

- Smaller, more cohesive codebases. This makes them easier to maintain and change, too. 

- Multiple teams work on their own projects concurrently. 

- This means smaller, incremental deployments. One team isn’t waiting on another team to push their updates. 

- Allows for scaling teams as needed. 

- Give the ability to rewrite, change or update parts of frontend incrementally. This means fixing bugs or changing features of part of the site doesn’t force the entire site to be down for maintenance. 

## Modular frontends visualization 

If you’ve read this far, you may be wondering, “OK, that sounds great, but what would it actually look like to build a site that way?”  

Well, my friend, it would look just like this:  

![](https://www.fathym.com/img/newmfetree.png)

As you can see, each different “route” as we say *can be* run by a different team and, in this case, a different framework and/or no-code builder.  

Imagine you needed to add some new technical documentation. You’d do it through Docusaurus – just as we do on our site – by writing that doc in markdown, adding it to the site using a code editor, like Visual Studio Code, and then creating a pull request through GitHub.  

Then your site’s QA person simply needs to approve the PR, merge the branch into integration and deploy with Fathym.  

That new doc didn’t disrupt the work going on in the blog section, nor did it slow down the updates being made to the “root” homepage, or the Admin area. The doc changes were simply made, approved, and all other areas of the website kept humming along as if nothing happened.  

It’s really quite wonderful that way! 

That update example can continue through many different iterations, too. 

## Modular frontends workflow 

Another example is your marketing person adding a new blog – in this case, in Gatsby – and creating a pull request to be approved before that blog is deployed.  

Similarly, maybe you want to update the homepage with a slick, new announcement of a featured product. Based on the image above, the team member responsible for working on the homepage would simply go into Plasmic to make their changes, and again, create the pull request.  

Within Fathym’s modular frontends, the workflow is exactly like that. We allow multiple teams and individuals to carry out tasks throughout their day, with everyone working on something small and separate, but fulfilling the goals of the group. Whenever a team member has an update to what they’re working on, they simply create a pull request that is either approved or denied by the QA person, and then deployed with Fathym.  

Imagine a hive of bees.  

Those worker bees go out to find the best pollen they can, searching close by as well as far away, in some cases. Each worker bee is tending to their own task, and then they’re bringing it back to help the entire hive.  

![](https://www.fathym.com/img/beehives.png)

Those bees work in a modular fashion and have discovered the “divide and conquer” workflow, and so have we.  

It allows smaller teams, like ours (and yours!), to accomplish big tasks and goals in short amounts of time.  

Simply, modular frontends allow for a more efficient approach to web development.  

## Modular frontends with the same framework 

![](https://www.fathym.com/img/MFERReactReactReact.png)

Up until now we’ve been talking about the [power of using different frameworks and no-code tools](https://www.fathym.com/blog/articles/2022/june/2022-06-06-go-fully-modular-frontend) for your different apps/pages under your routes. But keep in mind that you can use the same framework for everything if that’s best for your team or company. 

And since you can use a combination of different repositories and NPM packages, it still provides a huge amount of flexibility. Referring to the image above, instead of one giant React repository for your entire site, with Fathym you can modularize and use different React repos for each section of your site. 

The same benefits we listed previously still apply: Individual, independent, smaller frontends. Smaller, more cohesive codebases. Multiple teams working on their own projects concurrently. Smaller, incremental deployments. Scale teams as needed. In addition, it means less time dealing with dependency management and different teams needing a different version of a library – and avoiding all the associated headaches. 

## Conclusion and signup 

At Fathym, our Platform allows developers and non-developers alike to build websites with modular frontends by using JAMstack architecture. That means using a no-code tool, static site generator or JavaScript framework to accomplish the feat. Or users can use a combination of the three, all while being hosted under one domain. 

Fathym's flexibility to deploy different tech stacks and repos under one domain makes for an impressively flexible and seamless way for building your frontend with the best tools for different sections of your site. 

[Sign up today to host your site with Fathym](https://www.fathym.com/dashboard) for free. 