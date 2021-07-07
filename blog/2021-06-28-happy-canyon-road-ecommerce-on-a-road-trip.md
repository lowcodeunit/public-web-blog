---
slug: happy-canyon-road-ecommerce-on-a-road-trip
title: Happy Canyon Road - e-Commerce on a Road Trip
author: Michael Gearhardt
author_title: CTO @ Fathym
author_url: https://www.lowcodeunit.com
author_image_url: https://github.com/mcgear.png
tags: [website, application, no code, micro-frontend, ecommerce]
hide_table_of_contents: true
---

Coding has come a long way from the days when I shell programmed my TI-83 with physics and calculus programs, maybe even a Mortal Kombat stick fighter or two.  New ways of programing computers have evolved from C++, VB Script, C#, and Java to Javascript, Flash, Javascript again, paython, Go and on and on and on.  Every step meant to further remove the developer from "How" in order to focus on "What" and "Why".  This is our constant focus at Fathym.  How do we make more technology more accessible to more people?  Can we move people further up the stack, even closer to solving the why with what the customer needs without the need for understanding all that underpins enterprise grade software?  

I always remember back to an eBay conference when I was maybe 19 or 20.  A presenter came on stage talking about how they (2 coders) used a satelite internet connection, some ebay APIs, and an ice fishing shack to develop their multi-million dollar enterprise.  The thought of such simplicity for all developers has been a focal point of my entire development philosophy for the better part of 2 decades.

We started our family road trip to Arizona today, stopping for lunch in south Denver, and by the time we reached Happy Cannyon Road, I had my laptop out while the boys napped in the back and my wife (pregnant with our 3rd) drove us south for Albequereque.  I should also note, it is our 12th anniversary, so i won't have a lot of time except for on the road.  Alanis in the background, I wondered what I could do with Fathym's LowCodeUnit product to showcase the posibilities of technology in the modern era.  With any not invented here syndrom checked at the door and a handful of 7 hour drive days, let's take a look at where today's technology can take us.

## The Use Case

A common need (and relatable example to work with) for many enterprises is e-Commerce.  When broken down, we're going to need a frontend, data management for our products, a shopping cart, checkout, and somewhere to bring it all to our users.  Let's make our use case a growing IoT  manufacturer that's looking to digitize their catalog of goods.  We'll have a page that lists all of the goods and once selected shows a complete details page where we can add the item to our cart and eventually checkout.

Out of this, we'll want a working open source example, a [complete guide](https://www.lowcodeunit.com/docs/guides/e-commerce/forestry-11ty-jamcart/overview) that provides the step by step walkthrough for building it yourself, and this blog so we can shout it from the hill tops.  Cramming all the information necessary to complete this use case into a single blog would come across as a bit much.  This doesn't mean accomplishing it will take a long time, just that you deserve a blueprint and understanding of what and why, then you can dig into the how with the complete guide.

So, withought Further ado, e-Commerce with 11ty, Forestry, JamCart, and LowCodeUnit...

Let's take a look at what we're using, why we're using it, and how it plays a role in our completed solution.

### The Frontend - 11ty

A common approach to modern frontend development is to use static generated sites.  This is a great way to boost performance and allows for a number of hosting options.  There are plenty to choose from like Gatsby, Docusaurus, VuePress and more, in our case we'll use 11ty.  11ty (Eleventy) is a simple static site generator based on JavaScript, that is zero-config by default and allows you to transform a directory of templates into HTML.  [Getting started with 11ty](https://www.lowcodeunit.com/docs/guides/e-commerce/forestry-11ty-jamcart/setup-11ty) is simple and makes a nice lightweight way to generate static UIs.  

### The Data - Forestry CMS

There are a number of great options when it comes to our data management needs, good ol' SQL, some newer NoSql or Graph approaches, or another CMS like Strapi.  For this use case we'll go with Forestry CMS.  Forestry gives editors the power of Git; to create, edit, and instant preview Markdown-based sites.  One of the reasons we really like Forestry is that like our own technology, forestry works like a virtual developer, controlling its workflow through Git in the same way developers would.  This prevents vendor lock in scenarios, and immediately frees your CMS data to your enterprise.  [See how Forestry](https://www.lowcodeunit.com/docs/guides/e-commerce/forestry-11ty-jamcart/connecting-forestry) can streamline how you get started with CMS.

### The Commerce - JamCart

If we're going to call it an e-commerce example, we'll need to allow our users to add items to a shopping cart and eventually checkout.  Depending on your coding prowess, there are several options for this layer.  From PayPal to Stripe, but for simplicity we'll try out JamCart for this use case.    JamCart provides a simple approach to carts and checkout, really a wrapper of simplicity around Stripe.  We'll have no problem [getting JamCart integrated](https://www.lowcodeunit.com/docs/guides/e-commerce/forestry-11ty-jamcart/develop-site) and up and running.

### The Hosting - LowCodeUnit

For hosting, we're going to use LowCodeUnit and it's micro-frontend hosting capabilities.  LowCodeUnit is used to automate our project setup, DevOps processes, and hosting of our application.  There is a lot more that LowCodeUnit brings to the table, but that is outside the scope of this use case.  We'll start  by [creating our project](https://www.lowcodeunit.com/docs/guides/e-commerce/forestry-11ty-jamcart/overview) on a free domain, but can always take our site to a custom domain.  In seperate guides and tutorials you'll see how layers of security and micro-frontends can be used to expand the usefulness of your site.

## Conclusion

With maybe 8 hours of total computer time under my belt (it was a week long anniversary vacation after all), and about an hour from Happy Canyon Road...  Mission Complete!  e-Commerce running on LowCodeUnit, a [step-by-step walkthrough](https://www.lowcodeunit.com/docs/guides/e-commerce/forestry-11ty-jamcart/overview) and a blog to boot.  All made possible by the ever growing SaaS and Open Source ecosystem.  We look forward to bringing you more examples of simple and focused tools that can support you in your next enterprise project.
