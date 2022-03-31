---
title: Addressing micro frontends criticisms | Payload size
author: Rich Kurtzman
author_title: Brand Communications @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [website, headless wordpress, no code, micro-frontend, gatsby, low code]
hide_table_of_contents: true
---

> March 31, 2022 by Rich Kurtzman, _Brand Communications @ Fathym_

![](/img/MFEzoom.jpg)

Many years ago, we embraced micro frontends. Even before the term was coined.  

Now, the proof is in the pudding.  

Many big-time corporations are using micro frontends in 2022 – IKEA, Spotify, HelloFresh – and that’s helping others become more curious if the architecture is right for their company, too. Fathym’s micro frontends platform is the wave of the future.  

First, let’s quickly define micro frontends. Then, we’ll examine when they are appropriate. Finally, we’ll address one of the criticisms of micro frontends, the payload size and load times. 

## Definition 

At its core, micro frontends simply means taking a monolithic front end — the rigid, immovable, indivisible — and [breaking it down into smaller pieces](http://fathym.com/blog/articles/2022/march/2022-03-14-a-simple-micro-frontends-explainer). Those smaller pieces are then handled by small teams, which work autonomously toward a shared goal.  

The benefits of using micro frontends are numerous. One can break down that bigger codebase into smaller pieces, which means faster builds as well as faster fixes. Updates can be performed on one part of a site without having downtime for the entire site. Also, multiple different JavaScript frameworks can be used on one single project.  

![](/img/MFERReactGatsbyAngular.png)

In this example, the homepage was built in React, one of the most popular frameworks out there. The forum was created in Angular. Meanwhile, the blog was created in Gatsby, and the static site generator Docusaurus runs the technical documentation. 

Beyond just being able to use these different frameworks, imagine each one of those routes were being built and maintained by a different team. That again makes updating one aspect of the website easier and faster, because each team isn’t necessarily waiting for one another to finish before they can push their updates.  

Micro front ends also mean smaller codebases, which turns into quicker fixes for bugs and faster builds overall.  

## When to use them 

Honestly, there isn’t really a bad time to use micro frontends. It may seem unnecessary to a tiny team, or a one-person show, but it makes sense to keep an eye towards the future, too. Because if a team is scaled up, others can jump in and be given specific tasks or goals.  

The bigger a group working on a website is, the more it makes sense to split that workload into smaller, bite-sized pieces which can be managed by smaller teams.  

## Payload size criticism  

One of the main criticisms of micro front ends follows: If one is using multiple instances of a framework, each one will have to be loaded every time a site is opened.  

As Martin Fowler explained it:

> “For example, if every micro frontend includes its own copy of React, then we're forcing our customers to download React n times. There is a direct relationship between page performance and user engagement/conversion, and much of the world runs on internet infrastructure much slower than those in highly-developed cities are used to, so we have many reasons to care about download sizes.” 

While this is true, we work our way around large download sizes by creating lightweight micro frontends, including only what is necessary.  

Specifically, our frontends are lighter weight when we’re able to use static site generators for certain aspects of the website. At Fathym, we’re lowering the bar in terms of coding experience needed to build a site, and part of that is using low-code and no-code site builders.  

[One example is Docusaurus](http://fathym.com/blog/articles/2022/march/2022-03-16-how-i-blog-in-markdown), which we use for our blogs, as well as our technical documentation. [Another is Gatsby](http://fathym.com/blog/articles/2022/march/2022-03-24-headless-wordpress-made-easy-with-gatsby) (our blog example above) and then there’s Plasmic, which is a wonderfully performative and easy-to-use site generator. In fact, we like it so much, we currently use it for our home page.  

Site generators are not only less to load, they can also be pre-generated/pre-loaded to improve speed and dodge downloads.  

## Fathym FTW 

So, the choice is yours when developing on Fathym. You can build a site with whichever framework you like or are best trained in, or you can [flashup a website](http://fathym.com/blog/articles/2022/february/2022-02-23-flashup-use-case-redwood-crystals) in mere minutes by using static site builders.  

Fathym’s micro frontends platform [allows the use of popular frameworks like Angular, React, Vue, Svelte](http://fathym.com/blog/articles/2022/february/2022-02-28-angular-vs-react-vs-vue-you-choose) and more. That’s an amazing amount of flexibility considering those frameworks are valued for different abilities.  

Fathym is currently in its freemium stage and we encourage you to join today! Hosting a micro frontend site on Fathym is simple, quick and free. 

[We invite you to sign up for Fathym now](https://auth.fathym.com/fathymcloudprd.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_sign_up_sign_in&client_id=98f014f1-2547-4bcc-a583-3edc8f1190f2&redirect_uri=https%3A%2F%2Fwww.lowcodeunit.com%2F.oauth%2FB2C_1_SIGN_UP_SIGN_IN&response_type=id_token&scope=openid%20profile&response_mode=form_post&nonce=637789907534834707.OWNhMWZkZGMtODQ2NC00YTg0LWFjZWQtYjlkNzg0YTIzMDhkYTcxMzVkZmYtN2E2Mi00ZDRlLWIxODQtZjMxMjBkNWI2OTEx&state=CfDJ8C5COa2dn0dMrEVjdLxcXm-FCakeBxrXIOHa_lF_u0ckh9rvLFuKJ30MWBprExUQA_N5HmWWWPdxqWlni-KFqpg_jVjPahrQdGw79U0sMBN8dTvgrlAMeT9--L-7VgMBsZfFPAho9dcKUN1jO6lAaxL13PM1_vGer-vJc6tcpigRpNr5jcHtitGIKjexLmQqkIslp3MFKCKAi-5IiVd3JbpibPm4gbmDQpYtgstmG9SSlpjvEqJk_2AIqtMHkiojK3kE4WSc5mcYS3FQ3hiRqVQRPlL3jI7U3bUsqGYtLuoJr_St6mGBbHvGmB6M0MCeFn_G5LDsRzyHZhBWf9a1qo6dktz_kEcsAahYPLWjAI_2&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.11.1.0), not only to achieve your goals, but to have a little fun while you’re at it, too. 
