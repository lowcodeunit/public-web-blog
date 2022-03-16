---
title: How I blog in markdown with Docusaurus
author: Rich Kurtzman
author_title: Brand Communications @ Fathym
author_url: https://www.fathym.com
author_image_url: https://github.com/richkurtzman.png
tags: [website, application, no code, micro-frontend, hosting, low code]
hide_table_of_contents: true
---

> March 16, 2022 by Rich Kurtzman, _Brand Communications @ Fathym_

![](/img/blogcode.jpeg)

Full disclosure: I’m not a coder. Or a developer. I don’t even know how to spell HTML. Wait… 

The truth is, what I am is an artist. I paint, create furniture out of wood, I create dishes in the kitchen, and I write.  

Those two things – being a developer and an artist – don’t necessarily have to be on opposite ends of the spectrum, though. Artists can, and do, work within limits and rules. Although, they’re probably not as extensive as the rules of the road when writing code, think of the many confusing rules of the English language.  

And really, no matter how you’re wired upstairs, looking at a blank editor in Visual Studio Code can be a bit scary.  

Thoughts of, “How does this work?” and “What did I get myself into?” may start creeping in.  

But fear not, my fellow linguists! Writing your blog in VSCode using Docusaurus is really, pretty dang easy.  

## The top, crucial part 

For our blogs at Fathym, I start with a template. There’s the slug, title, author name, my URL, my author image (located on GitHub) and tags. It’s important to get all these right, but they’re simple to fill out.  

Slug: Whatever your website name is, this will follow the main “.com/” part.  

For instance, my blog “Why Fathym rocks and saves you time” has a slug like this: why-fathym-rocks-and-saves-you-time 

Title: The interesting, clickable, enticing title you come up with to describe what the piece is about. Some good formats include:  

- How I (accomplished something) with (technology)  

- How I blog in markdown with Docusaurus, the title of this piece, is an example. 

- How to build… 

- How (something) works… 

- A history of (something)  

Name: Your name.  

Author title: Readers would like to know who it is they’re getting this information from. It’s important to build credibility with your title. For me, we started with “Content Creator,” which is great. But, we thought “Brand Communications” sounded more official, and I agree.  

Website link: Your home URL, which for me, points back to my company’s website here.  

Author image: You don’t have to have this, but it makes the piece look more credible and professional. People want to know who you are, and a quick pic. of yourself helps. Keep in mind, it should be a professional picture, not one where your hair is a mess, you have a band’s T-shirt on with a cuss word on it etc. 

## The body 

Onto the meat of the piece, the body. 

This is again really simple. For me, writing in a word processor is the best practice. For others, you may want to write directly in markdown using Docusaurus, which is fine, too.  

I like the ability to save independently from VSCode, or have an “autosave” turned on, which Microsoft Word now allows. It’s similar to what Google Docs does, although, it takes some internet bandwidth and processing speed.  

But nothing is worse than losing a piece of work you’ve been toiling on for hours because of a computer crash, so for me, the bandwidth usage is worth it.  

After writing your copy in your favorite processor, simply copy and paste it into markdown, and then hit a CTRL+S to save it. Then, go back through, and add your links, add headlines and then preview it if possible.  

On Fathym, we allow for quick and easy previews, so you can get a visual of how it all looks before taking it live.  

## Tips for writing in markdown in Docusaurus 

Use hashtags as “headline” formatters.  

For instance, starting a new line with # Hello World will make a giant headline, but adding two hashtags (##) or three (###) will make the headlines progressively smaller.  

Links – To link around a word, use these brackets [] and then next to those, use these brackets () with your hyperlink in between the second set.  

Ex. Come to [ Fathym ] (https://www.fathym.com) today for all your webhosting needs! Note: I put an extra space between the ] and ( so the link wouldn’t just look like this:  

Come to [Fathym](https://www.fathym.com) today for all your webhosting needs! 

Previews – If you’re writing on Fathym, go to the terminal at the bottom of VSCode. 

Type in: npm install. And once that’s done running… 

Type in: npm run start 

Fathym will automatically start a preview of your blog for you to see, double check and fix before you publish.  

## General tips for writing online 

Spelling and grammar matter. They really matter. You should make it a point to re-read over your piece multiple times before publishing.  

Write in short paragraphs. Your “graphs” should be 2-3 sentences most of the time, which help to push the reader down the page.  

And every paragraph should connect to the next one. Otherwise, it’s not needed.  

Once I’m happy with my blog, I push it along to a content moderator at our site, and they’re able to make it live.  

More specifically within Fathym, I push along the changes in VSCode to GitHub, and then our Director of Engineering makes sure it all checks out before completing a pull request and then merging it all to integration.  

In non-developer speak: He makes it go live on our website.  

Then, I can share it on places like Medium.com, or on social media networks.  

See, that really is easy. So, if you’re working for a company who wants a blog, Docusaurus could be the perfect answer for you. 

At Fathym, our platform is currently in its freemium stage and we encourage you to join today! Hosting a blog with Docusaurus on Fathym is simple, quick and free. 

## Join Fathym 

[We invite you to sign up](https://auth.fathym.com/fathymcloudprd.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_sign_up_sign_in&client_id=98f014f1-2547-4bcc-a583-3edc8f1190f2&redirect_uri=https%3A%2F%2Fwww.lowcodeunit.com%2F.oauth%2FB2C_1_SIGN_UP_SIGN_IN&response_type=id_token&scope=openid%20profile&response_mode=form_post&nonce=637789907534834707.OWNhMWZkZGMtODQ2NC00YTg0LWFjZWQtYjlkNzg0YTIzMDhkYTcxMzVkZmYtN2E2Mi00ZDRlLWIxODQtZjMxMjBkNWI2OTEx&state=CfDJ8C5COa2dn0dMrEVjdLxcXm-FCakeBxrXIOHa_lF_u0ckh9rvLFuKJ30MWBprExUQA_N5HmWWWPdxqWlni-KFqpg_jVjPahrQdGw79U0sMBN8dTvgrlAMeT9--L-7VgMBsZfFPAho9dcKUN1jO6lAaxL13PM1_vGer-vJc6tcpigRpNr5jcHtitGIKjexLmQqkIslp3MFKCKAi-5IiVd3JbpibPm4gbmDQpYtgstmG9SSlpjvEqJk_2AIqtMHkiojK3kE4WSc5mcYS3FQ3hiRqVQRPlL3jI7U3bUsqGYtLuoJr_St6mGBbHvGmB6M0MCeFn_G5LDsRzyHZhBWf9a1qo6dktz_kEcsAahYPLWjAI_2&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.11.1.0) for our freemium platform now, not only to achieve your goals, but to have a little fun while you’re at it, too. 