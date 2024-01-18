---
title: 'The reason for choosing Next.js'
summary: 'Trying to answer my own question'
publishDate: 2020-11-01
---

## Table of Contents

- [Brief](#brief)
- [Extensive](#extensive)
- [Something Lacking](#something-lacking)
- [Comparison](#comparison)
- [Answer](#answer)

## Brief

Because Next.js is based on React and its cool features. Done.

This short answer does not answer and describes the question 'why choose Next.js?', Here are the answers at length.

## Extensive

Next.js itself is one of the Reactjs frameworks that was discovered and developed by [Vercel](https://vercel.com?ref=kawari.space) (previously Zeit) which offers website experiences with methods such as Serverless, SSR, SSG, and the latest is ISR (Incremental Static Generation) in one project.

In addition, there is also a Fast Refresh feature that allows us to change the code without having to completely refresh the browser page. For those of you who prefer to use TypeScript in addition to JavaScript? Next.js is very possible. By simply changing the extension to `.tsx` you will be prompted to install the related dependencies.

Next.js supports many libraries and examples of implementation are also provided, such as the example implementation of Next.js with Tailwindcss [examples/with-tailwindcss](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss). In its latest update, Next.js has launched an official template to create an E-commerce website that is ready to be modified and then launched. The demo can be seen at [demo.vercel.store](https://demo.vercel.store/).

## Something Lacking

From everything I described earlier, there is still something lacking from Next.js, namely image optimization, because almost all websites will usually display an image where if the image is not optimized it will affect the performance of the website. An example of a case in this case is [kawari.space](https://kawari.space) which initially displays images as usual without any CDN or library; because it feels too heavy and can burden the performance of the website especially on a slow internet, so I try to display it through the CDN provided free by [statically.io](https://statically.io/?ref=kawari.space) and displayed in a form that is [webp](https://developer.mozilla.org/en-US/docs/Glossary/webp), of course this is a development because it significantly reduces the size of the image without reducing its quality.
As the news circulating, Next.js will have features for image optimization in the 10th version now and the results are really unexpected. Here is a comparison of the page snapshot [/projects](https://kawari.space/projects), there are differences in image size from those that are not optimized, using a CDN, and implementing Next.js' image optimization features.

## Comparison

1.Without any optimization

![tanpa optimasi](https://cdn.statically.io/img/kalwabed.xyz/f=auto/static/posts/nextjs-reason/default.png)

2.Using a CDN from [statically.io](https://statically.io/)

![tanpa optimasi](https://cdn.statically.io/img/kalwabed.xyz/f=auto/static/posts/nextjs-reason/statically.png)

3.Using image optimization from Next.js `next/image`

![tanpa optimasi](https://cdn.statically.io/img/kalwabed.xyz/f=auto/static/posts/nextjs-reason/next-image.png)

Unexpectedly, with the latest version (v.10) of Next.js we can really optimize images easily and quickly without requiring a CDN.

## Answer

There are many other interesting features that are present in Next.js version 10, such as: Next.js Analytics, Internationalized Routing, and others. Details can be found at [nextjs.org/blog/next-10](https://nextjs.org/blog/next-10?ref=kawari.space).

That's more or less the answer to 'the reason for choosing Next.js'. There are still many features from Next.js that I haven't tasted, but overall I think Next.js is very comprehensive for front-end development needs.
