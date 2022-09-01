---
title: 3 frameworks and 1 runtime developers should know in 2022
author: Rich Kurtzman
author_title: Brand Communications @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [Fathym, Node.js, Next.js, Nuxt.js, JavaScript, modular frontends, composable frontends, web development]
hide_table_of_contents: true
---

August 29, 2022 by Rich Kurtzman, _Brand Communications @ Fathym_

![](https://www.fathym.com/img/nextnuxtnode.png)

The world of web development is ever-changing. 

For some of us, that’s exactly the draw. We love to be on the cutting-edge, to learn about what’s coming next and tell our friends about it.  

And when talking about JavaScript frameworks specifically, it’s an ever-evolving world, too, with newly made frameworks coming onto the scene seemingly daily.  

As Fathym CEO Matt Smith quipped in a recent meeting, “I’ve forgotten more frameworks than I know.” 

Let’s dive into four newcomers to the scene you should know in 2022. 

# 3 newer frameworks and 1 runtime you should know 

To start off, most developers know of React, Angular, Svelte, Vue and likely many others. And there’s likely a favorite they have when creating new websites, apps etc.  

Looking back at 2021, the [most-popular framework as named by developers was Svelte,](https://www.fathym.com/blog/articles/2022/april/2022-04-13-micro-frontend-popularity) while React remained immensely popular, followed by Vue, Angular and many others. 

But, as we examined the 2022 survey posted by StackOverflow, there were a ton of newcomers to the list of most-popular. [Leading the way was Phoenix Framework, just edging out Svelte,](https://www.fathym.com/blog/articles/2022/july/2022-07-13-ranking-javascript-frameworks-by-popularity-2022) and following down the list Next.js edged out React, with Node.js and Nuxt.js scoring higher than Vue.  

 

So, let’s take a quick look at these newcomers, when they began and what they’re known for. 

## Next.js 

### What is Next.js? 

Next.js was developed by Guillermo Rauch, the CEO of Vercel, in 2016 and it’s currently in version 12.2, releasing in late June, 2022. And Next.js is actually written on top of Node.js, so it requires you have Node.js to use with Node Package Manager (npm).  

One of the features of Next.js is the way it renders on the server side and client side, otherwise known as “universal apps.” That’s crucial for the single page applications (SPAs) it builds, and how it helps those SPAs have much-improved success in terms of SEO (search engine optimization).  

As SEO expert Barry Adams explains:  

“What happens when you use React without server-side rendering is that the crawler halts on the very first page because it can’t see any hyperlinks to follow. It sends the page to the indexer, which then has to render the page and extracts the hyperlinks, which will then be added to the crawler’s queue. Then the crawler will eventually crawl the next set of pages, and again will stop there because all the links are invisible until the JavaScript is rendered. So it has to wait for the indexer to come back with a new set of URLs to crawl,” Adams explained [in a Medium article.](https://medium.com/@badams/another-very-late-response-youre-confusing-googlebot-the-crawler-with-caffeine-google-s-b9ef24d81524) 

In the simplest of terms: SEO is crucial for anyone with a website who wants it to be discovered through Google search, and Next.js helps immensely with exactly that. SPAs are great because they are fast, flexible and adaptable. But a major SPA downside is, because they are mostly client-side rendered, when Google’s crawler looks for data, they can’t find any until they are rendered on the server side, too.  

Next.js renders on both the client and server side: Some or all of the website is rendered on the server side so Google’s crawler can find the information (URL, meta tags and content etc.) and therefore put it into search results.  

“Server-side rendering (SSR) is a popular technique for rendering a normally client-side only single page app (SPA) on the server and then sending a fully rendered page to the client,” as explained by [geeksforgeeks.org.](https://www.geeksforgeeks.org/node-js-server-side-rendering-ssr-using-ejs/#:~:text=js%20Server%20Side%20Rendering%20(SSR)%20using%20EJS,-View%20Discussion&text=Server%2Dside%20rendering%20(SSR),SPA%20can%20operate%20as%20normal.). 

Keep in mind, Nuxt.js and Node.js also render on both the client and server-sides.  

In order to help with load times and to break up code into smaller chunks, Next.js does perform automatic code splitting for the developer.  

For marketing people, the improved SEO is wonderful. For business owners, a faster time to market for websites and apps is made possible thanks to many premade components inside Next.js. Also, because Next.js helps make static sites, there’s improved security; there’s no connection to the database or the user’s data either.  

**Other positives with Next.js are:** 

- Excellent performance in terms of load times 

- Load times helped with “lazy loading” and automatic code splitting 

- Tons of support for developers 

- Fantastic user-experience 

- Faster time to market 

- Great SEO 

**Cons of Next.js are:**   

- Some developers find it too opinionated 

- Multiple developers complain about how Next.js does routing, others champion it 

## Node.js 

### What is Node.js? 

Node.js isn’t a framework, but it is a runtime. So, developers use React and other JavaScript frameworks on top of it.  

React.js is still considered the standard (some may argue that’s Angular) in terms of JavaScript frameworks, and there are a ton of developers who know how to use it in and out. Node.js helps make React even better. 

Just like Next.js (and likely because it’s built on top of Node.js) it is special because of the server-side rendering. In fact, until Node.js came along in 2009, there was no JavaScript server-side rendering, so they revolutionized the game.  

Besides wildly improving the performance of single page applications (SPAs), Node.js is hailed for some other reasons as well.  

One of the big differentiators is it’s considered a full-stack framework. Developers are able to write server-side code in JavaScript in Node.js; that means one developer can write on the frontend (with React.js) and backend easily.  

[LinkedIn did this with Node.js 10 years ago,](https://www.infoq.com/news/2012/10/Ruby-on-Rails-Node-js-LinkedIn/) and that helped them reduce their servers from 30 down to a mere three. On top of that, frontend engineers were able to write code on the back end, allowing the two teams to be merged into one. In that instance, moving from Ruby on Rails to Node.js helped LinkedIn enjoy better performance, save time in terms of development and save resources in terms of personnel, too.   

Another huge positive is Node.js ability to deliver incredibly high-performance and immediate scalability. Many have referenced [GoDaddy’s usage of Node.js](https://thenewstack.io/enterprises-embracing-microservices-node-js/) which helped them work through 10,000 requests per second while using only 10% of their hardware. Not only that, but Netflix used Node.js to reduce its startup time from 40 minutes to mere seconds, too.  

Node.js is revered for the way it works with microservices on the backend. Microservices are small, independent which communicate well over API. On the frontend, there are micro (or modular) frontends; which is what we employ here at [Fathym!](https://www.fathym.com/dashboard)  

That means being able to break up your website into smaller “routes” -- commonly, different pages – which can be created, managed and run by individuals or separate teams. Modular frontends means more flexibility for developers, more quickly built websites and simple scalability. Node.js’ microservices ability on the back end and Fathym’s micro frontends with React.js may be a match made in heaven.  

**Node.js advantages:**

- Easy to learn 

- Simply scalable 

- High performance 

- Great community and support 

- Full-stack development 

- Loading time helped with “quick caching” 

**Node.js disadvantages:** 

- Still need to use React as it’s not a framework 

- Not a great library of support 

- Performance struggles when running heavy computing tasks 

- Unstable API 

## Nuxt.js 

### What is Nuxt? 

Nuxt is a JavaScript framework and it is somewhat similar to Node.js in the way that Nuxt.js was built on top of Vue.js. It gives a simpler way to create universal or single-page Vue apps. 

The Nuxt, is also akin to both Node and Next because all three promise to enhance SPAs’ SEO scores with a combination of client and server-side rendering. Nuxt is also hailed for how well it performs with mobile SPAs and the experience brought to users there. 

Something that sets Nuxt apart from the others, though, is the way it comes with the ability to generate static websites out of the box. That’s a huge deal to folks looking to hurry up and just get a site out there. Static sites are simpler and won’t fit every type of website needed, but they can be used for things like blogs that are only a few pages or promotional websites which will be up for only a certain amount of time. Again, static sites are great for security, too because they’re not connected to the server or any information.  

The other thing Nuxt does is minifies the size of your apps with automatic code splitting. They come in at a lightweight 57kb.  

So, why would you use Nuxt.js instead of Vue.js, which it’s built on top of? Nuxt.js helps with building faster and more efficient Vue apps for the reasons we mentioned above.  

**Nuxt.js advantages:**  

- SEO improvement for SPAs 

- Mobile app performance 

- Comes with ability to create static websites out of the box 

- Static sites, again, have great security 

- Enterprise-ready compared to Vue.js 

- Automatic code splitting 

**Nuxt.js disadvantages:**

- Lack of common plugins 

- High traffic on your site can cause server strain 

- Debugging is difficult 

- Small community behind it 

## Phoenix Framework 

### What is Phoenix Framework 

It should be noted here that while the other three mentioned above are made in JavaScript, Phoenix isn’t a JavaScript framework, it’s built in another language called Elixir.  

Elixir’s Phoenix first came onto the scene in 2014, but it’s current stable release (1.6.6) was released Jan. 5, 2022. Phoenix is considered a great choice for high-volume applications because it is built on BEAM, which is Erlang’s VM. That’s why companies like Adobe (collaborative workflow), Discord (millions of users and messages) and Moz (SEO analytics) use Elixir’s Phoenix. 

Elixir’s language is considered a “functional programming language” which means easier testing, debugging and maintainability of codebases. 

However, the downsides are that there’s a very large learning curve due to it being a new language completely, instead of another JavaScript framework. Continuing, there’s a much smaller community compared to these others, and the ecosystem of libraries are smaller, too. 

**Phoenix framework advantages:**

- Ease of use thanks to being “functional” or easy to read, too 

- Scalability is simple 

**Phoenix framework disadvantages:**

- More expensive to use because you may need to hire a developer with Elixir-specific skills 

- Continuing that line of thought, the developer needs to know Erlang, too 

- Smaller community because it’s newer 

## Conclusion, host with Fathym 

It turns out the people who made these latest frameworks were really concerned with SEO and specifically helping people build single page applications which were also good at SEO. As mentioned earlier, Next, Node and Nuxt all circle around being able to perform both client-side and server-side rendering. That helps Google find the website easier, meaning it’s likely more people will visit.  

Beyond that aspect, multiple frameworks mentioned above also focused on automatic code-splitting to help build lighter weight, faster-to-load websites and apps.  

Have a favorite JavaScript framework you want to build exclusively with? You can develop your site at Fathym and we’ll host, leveraging our Microsoft Azure cloud. 

Or, maybe you want to try out a new framework? Multiple new frameworks? Multiple frameworks AND a no-code site builder side-by-side? You can do all of that on **one** website thanks to Fathym’s composable architecture. 

![](https://www.fathym.com/img/MFERReactReactReactDocu.png)

Mind blown, right? 

[Try our modular frontends today and sign up for free!](https://www.fathym.com/dashboard) 

Fathym deploys, hosts and integrates your favorite tech stacks, frameworks, no-code builders and data on one domain. Deploy and host your JavaScript-built apps and websites on Fathym.