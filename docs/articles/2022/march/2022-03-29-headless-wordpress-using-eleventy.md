---
title: Headless WordPress using 11ty
author: Rich Kurtzman
author_title: Brand Communications @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [website, headless wordpress, no code, micro-frontend, gatsby, low code]
hide_table_of_contents: true
---

> March 29, 2022 by Rich Kurtzman, _Brand Communications @ Fathym_

![](https://www.fathym.com/img/11tylogo.png)

WordPress is widely regarded as one of the most popular content management systems in the world.  

In fact, as of late 2021, [WordPress powered 35% of the top 1 million websites in the world](https://gracethemes.com/wordpress-is-still-the-most-popular-cms-choice-top-trends-in-2020-and-predictions-for-2021/). That’s remarkable! 

Why is it so popular?  

First, it’s free to download and use. However, if you want to customize it, WordPress does charge a fee for some of their templates and plug-ins. Especially some of the most useful ones. 

Beyond being free, WordPress’s ubiquity means if you’re a content creator on the internet, you’ve probably used it before.  

And if you haven’t, that’s no problem because it’s extremely user-friendly. Plus, it’s versatile enough to not only work as a great as a blog, but for many different possible projects.  

## Downsides to WordPress 

However, even though it's very popular, there are some serious downsides to using WordPress.  

One is security simply because it’s so popular. The logic used by hackers is, if it’s popular, it makes more sense to figure out how to hack inside. Then, once discovered how to, the process can be repeated.  

Another downside is that WordPress sites have slower download times. That means the audience is waiting for the site to load and could become disinterested and leave. Their use of redundant code and heavy themes certainly hurt their sites’ speeds.  

Finally, the necessity of plugins is a third drawback. Using many plugins at once will result in lethargic loading times. On top of that, many crucial plugins are only accessible by paying a yearly subscription fee. That means your “free” site is now much more to operate a year.  

## Solution: Headless WordPress with Eleventy 

Luckily, there’s a way around all of those issues we just illustrated above. 

It’s called a “headless WordPress.” 

Headless might sound scary – like something from The Walking Dead – but it just refers to using WordPress to manage the content, and a different framework to display the content. 

In this example, we’ll be using Eleventy (11ty), a “simpler static site generator” as they call themselves.  

![Winnie](https://www.fathym.com/img/eleventy11ty.jpg)

What makes Eleventy so great?  

It has multiple different templates with multiple different JavaScript languages. Which is certainly a plus when you’re using micro frontends, as they’re also open to using whichever JavaScript language works best for you.  

11ty also makes it clear that their product isn’t a JavaSctipt framework itself, it’s a static site generator. And one of the best aspects of SSGs is they are pre-rendered at the time of build, meaning they load incredibly quickly when they’re requested by a visitor. That’s a major upgrade as compared to WordPress and their slow loading speeds.  

Beyond the faster loading times, because sites are pre-rendered with static site generators, it helps with SEO for the site, too because search engines can find that rendered data. In comparison, WordPress sites that are single-page applications (SPAs) only send back a blank HTML page.  

Another solid aspect of Eleventy is the templates they have. That means a customer or developer doesn’t have to start from scratch. It makes getting a website up and running quick and easy.  

## Use case: RedwoodCrystals.com 

To go one step further, we’ve actually put 11ty to use. [Fathym’s George Hatch used Eleventy](https://www.fathym.com/blog/articles/2021/december/2021-12-30-How-to-host-an-ecommerce-site-with-fathym) as part of his website that utilized all kinds of open-source applications.

The result was easy-to-use content management, and a website with eCommerce abilities – hosted by Fathym – which he was able to [flashup in mere minutes thanks to 11ty as well as our micro frontends.](https://www.fathym.com/blog/articles/2022/february/2022-02-23-flashup-use-case-redwood-crystals) 

Transfer your WordPress [website over to Fathym today](https://www.fathym.com/dashboard) and try it out for free with Eleventy. And once you see the improved speed and user experience, we have a feeling you’ll stick around. 