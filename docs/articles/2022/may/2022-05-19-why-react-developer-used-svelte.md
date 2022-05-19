---
title: Why a React engineer used Svelte to build his online arcade 
author: Rich Kurtzman
author_title: Brand Communications @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [website, Arcade, Svelte, Fathym, hosting, React, micro frontends]
hide_table_of_contents: true
---

May 19, 2022 by Rich Kurtzman, _Brand Communications @ Fathym_

![](/img/arcadeinterior.png)

If you build websites, you likely have a favorite JavaScript framework you use.  

And it shouldn’t come as a surprise. Once you learn a specific framework (or library, in the case of React), you know the ins and outs of it. You learn how to get things done in an efficient manner. You pick up the tips and tricks for fixing issues.  

Of course, that was the case for frontend engineer, Jack Penhale. 

Now, he may be a bit of a “Jack of all trades” when it comes to frameworks, but Jack also has a favorite, which is React. Most of what he [builds is with React](https://www.fathym.com/react). However, this time around we asked him to step out of his comfort zone a little bit and use Svelte to create an Arcade.  

But first, what makes React so great? 

## React and Svelte popularity  

React is considered one of the most popular JavaScript frameworks (or libraries) in the world. It’s been around since 2011, originally created by Facebook and it’s used by other massive companies like Netflix, Ubereats and AirBnB. It’s the most-used framework out there, which means it also has an incredibly vast community for resources.  

According to Stackoverflow’s 2021 survey, React was the fourth-most popular JavaScript framework to use. It was loved by 69.28% of users as recently as last year.  

Interestingly, though, there’s a newcomer on the scene [in SvelteJS.](https://www.fathym.com/svelte-deployment) 

Svelte was released in 2016 by Rich Harris and has been adopted by a great group of massive companies like Apple, Square, Spotify and more. And according to that same survey by Stackoverflow, Svelte is now the [No. 1 most-popular framework](https://www.fathym.com/blog/articles/2022/april/2022-04-13-micro-frontend-popularity) out there. In fact, 71.47% of developers love using it.  

![](/img/frameworksloved.png)

What makes both Svelte and React similar are the wonderfully interactive, dazzling sites they can build. But it should be noted that the average app size when using Svelte is a mere 1.6Kb, whereas the smallest one can make a React app is 42.2Kb, which is with ReactDOM.  

What does that mean in simple terms?  

Svelte is what we consider “lightweight”, and it helps sites using it run incredibly fast. Where the performance of a React site is strong, Svelte sites are another step up into the “great” category.  

## Why he used Svelte instead of React 

One of the reasons he used Svelte was because of its high-performance ability, as referenced above. He wanted a lightweight option which could run games in the browser with ease.  

Jack designed the carousel-style display, as well as the landing page for all the games.  

![](/img/arcadescreenshot.png)

The intention of the Fathym Arcade was to simply and [clearly illustrate how we use micro frontends.](https://www.fathym.com/blog/articles/2022/may/2022-05-16-arcade-and-micro-frontends) The page was built in Svelte, but each of those games were built in different JavaScript languages. They’re all open-source, and since we give you the link to their repos, you can immediately add one of those games to your new website project if you wish.  

Of course, that’s part of the brilliance of micro frontends: Developers can use whichever frameworks, libraries or static site generators they want to build websites.  

“With Fathym micro frontends, no matter what page on your site you can choose the framework you want,” Penhale explained. “If you wanted to make a landing page like I did here in Svelte, you could. Then you could write your docs using Docusaurus and launch an e-commerce store using React. The freedom to do all of that is nice, especially when you work in a team where individual devs have preferences for different frameworks.” 

## What the React developer liked about Svelte 

“Svelte by itself is easy to use and grasp for a developer to pick up, it's basically just HTML, CSS and JavaScript,” Penhale said. “It also does a lot more work at compile time compared to the other big frameworks like Angular and React. This isn't to say it's better than either of those, but it is lightweight and fast which is always a plus.” 

Many in the developer community have raved about the shallow learning curve of Svelte, as well as its being lightweight in design. That’s a big reason why so many who have heard of the framework want to try to use it, as the following graphic illustrates.  

![](/img/frameworkswhoused.png)

Of course, since it was a new framework to him, there were some hurdles with using Svelte.  

“One challenge I found is when to break my project into smaller components,” he said. “It was easy to just keep everything on one page until my main file was 500 lines long. Approaching this again I would have a more component based view.” 

But, where there were challenges, the strong and extensive Svelte community helped him get back on track.  

“A surprise I had with Svelte was how active the dev community is around it,” Penhale explained. “I was worried about not having a MUI component library, there was already one out there in Svelte Material UI. Any questions I had could be easily answered in the docs or on Stackoverflow.” 

So, if you’re a new developer or a seasoned veteran, Fathym’s micro frontend architecture can help you in many ways.  

First and foremost, it may be your initial foray into micro frontends. Once you give them a try, you may just fall in love with the simplicity of being able to use multiple frameworks and static site generators together.  

Even if it isn’t your first time using micro frontends, you may get the chance to use a framework for the first time, like Svelte, for instance. Fathym’s arcade features five different styles of JavaScript and we encourage users to jump in and use these open-source games on your own site today. 

[Join Fathym today for free](https://www.fathym.com/dashboard) and scale up to a paid subscription when the time comes.  