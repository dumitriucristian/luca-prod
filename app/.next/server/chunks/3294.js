exports.id=3294,exports.ids=[3294],exports.modules={84169:(e,n,i)=>{let t={"30e193d48cfe7aca55ac4928d88d3fb7b7edf11f":()=>Promise.resolve().then(i.bind(i,52755)).then(e=>e.addMail),dceb5e87f2ac3cfa3568b04ae19a9b40e6bbe0fe:()=>Promise.resolve().then(i.bind(i,52755)).then(e=>e.$$ACTION_0)};async function a(e,...n){return(await t[e]()).apply(null,n)}e.exports={"30e193d48cfe7aca55ac4928d88d3fb7b7edf11f":a.bind(null,"30e193d48cfe7aca55ac4928d88d3fb7b7edf11f"),dceb5e87f2ac3cfa3568b04ae19a9b40e6bbe0fe:a.bind(null,"dceb5e87f2ac3cfa3568b04ae19a9b40e6bbe0fe")}},99189:(e,n,i)=>{Promise.resolve().then(i.t.bind(i,12994,23)),Promise.resolve().then(i.t.bind(i,96114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,79671,23)),Promise.resolve().then(i.t.bind(i,41868,23)),Promise.resolve().then(i.t.bind(i,84759,23))},10127:(e,n,i)=>{Promise.resolve().then(i.t.bind(i,79404,23)),Promise.resolve().then(i.bind(i,25136)),Promise.resolve().then(i.bind(i,70039))},37861:(e,n,i)=>{Promise.resolve().then(i.t.bind(i,44064,23)),Promise.resolve().then(i.bind(i,30692))},30692:(e,n,i)=>{"use strict";i.d(n,{default:()=>a});var t=i(10326);i(17577);let a=function(){return t.jsx(t.Fragment,{})}},25136:(e,n,i)=>{"use strict";i.d(n,{default:()=>r});var t=i(10326),a=i(17577);i(15424);var s=(0,i(46242).$)("30e193d48cfe7aca55ac4928d88d3fb7b7edf11f");function r(){let[e,n]=(0,a.useState)(""),[i,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),[l,c]=(0,a.useState)(0);return(0,t.jsxs)(t.Fragment,{children:[t.jsx(t.Fragment,{children:t.jsx("dialog",{className:"newsletter-response",ref:o,children:(0,t.jsxs)("div",{children:[t.jsx("div",{className:"newsletter-response__image",children:(()=>{switch(l){case 0:return t.jsx("img",{src:"/footer/success.svg",alt:"chipy",width:136,height:142});case 1:return t.jsx("img",{src:"/footer/already.svg",alt:"chipy",width:136,height:142});case 2:return t.jsx("img",{src:"/footer/invalid-email.svg",alt:"chipy",width:136,height:142});default:return t.jsx("img",{src:"/footer/error.svg",alt:"chipy",width:136,height:142})}})()}),(0,t.jsxs)("div",{className:"newsletter-response__text",children:[t.jsx("p",{children:(()=>{switch(l){case 0:return"High-five! You've just made our day by joining. Get ready for a wave of awesome content and surprises!";case 1:return"You're in! No need to sign up again – your email is already subscribed. Thanks for being a loyal member!";case 2:return"Oh no! It seems there's an issue with the email. Could you please check and enter a valid email to join our community?";default:return"Apologies! We're experiencing an internal error. It's definitely not your fault. Please try again in a few moments. Thanks for your understanding!"}})()}),t.jsx("button",{onClick:()=>{o.current?.close()},children:"Okay"})]})]})})}),(0,t.jsxs)("form",{className:"social-mail",onSubmit:i=>{i.preventDefault(),r(!0),e&&s(e).then(e=>{if(e.success){c(0);return}let n=+e.message;if("number"!=typeof n){c(3);return}c(n)}).catch(e=>{let n=+e.message;if("number"!=typeof n){c(3);return}c(n)}).finally(()=>{r(!1),n(""),o.current?.showModal()})},children:[t.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:e=>n(e.target.value),required:!0,name:"email"}),t.jsx("button",{"aria-label":"join our blog",disabled:i,children:i?"Adding...":"Join"})]})]})}},70039:(e,n,i)=>{"use strict";i.d(n,{default:()=>m});var t=i(10326),a=i(17577),s=i(29497),r=i(43440);let o="+1 (860) 329-2988";var l=i(90434);let c={whoweare:"/who-we-are",whatwedo:"/what-we-do",whowehelp:"/who-we-help",solutions:"/solutions",login:"/login"};function d(){return t.jsx("div",{className:"nav-upper",children:(0,t.jsxs)("div",{className:"container",children:[t.jsx("div",{className:"nav-upper__item",children:(0,t.jsxs)("a",{href:`tel:${o}`,children:[t.jsx("span",{children:t.jsx(s.G,{icon:r.Eo4})}),o]})}),t.jsx(l.default,{rel:"canonical",href:c.login,target:"_blank",className:"nav-upper__item nav-button",children:"Partner Login"})]})})}var h=i(35047);function g(){let[e,n]=(0,a.useState)(!1),[i,d]=(0,a.useState)(!0);(0,h.usePathname)();let[g,m]=(0,a.useState)(0);return t.jsx("nav",{className:`nav ${!i&&!e&&"hide"}`,children:t.jsx("div",{className:"container",children:(0,t.jsxs)("div",{className:"nav-bottom",children:[(0,t.jsxs)(t.Fragment,{children:[t.jsx("input",{type:"checkbox",id:"mobile-nav",checked:e,onChange:()=>{n(e=>!e)}}),(0,t.jsxs)("label",{htmlFor:"mobile-nav",children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]})]}),t.jsx("div",{className:"nav-bottom__logo",children:t.jsx(l.default,{href:"/",prefetch:!1,children:t.jsx("img",{src:"/logomennr.svg",alt:"logo"})})}),(0,t.jsxs)("div",{className:"nav-bottom__links",children:[(0,t.jsxs)("ul",{className:"nav-links",children:[t.jsx("li",{children:t.jsx(l.default,{href:c.whoweare,prefetch:!1,children:"Who We Are"})}),t.jsx("li",{children:t.jsx(l.default,{href:c.whowehelp,prefetch:!1,children:"Who We Help"})}),t.jsx("li",{children:t.jsx(l.default,{href:c.whatwedo,prefetch:!1,children:"What We Do"})}),t.jsx("li",{children:t.jsx(l.default,{href:c.solutions,prefetch:!1,children:"Solutions"})}),t.jsx("li",{className:"hidden-large link-button",children:(0,t.jsxs)(l.default,{href:c.login,className:"nav-upper__item nav-button",prefetch:!1,children:[t.jsx("span",{className:"nav-button__circle"}),"Client Login"]})})]}),(0,t.jsxs)("div",{className:"nav-bottom__links-ours",children:[t.jsx("div",{className:"links-phone hidden-large",children:t.jsx("a",{href:`tel:${o}`,"aria-label":"phone_number",children:t.jsx(s.G,{icon:r.Eo4})})}),t.jsx(l.default,{className:"links-button",href:"/solutions/#get-in-touch",prefetch:!1,children:"Get Started"})]})]})]})})})}function m(){return(0,t.jsxs)(t.Fragment,{children:[t.jsx(d,{}),t.jsx(g,{})]})}},52482:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>x});var t=i(19510),a=i(57371);i(71159);var s=i(71839),r=i(72800),o=i(61562),l=i(68570);let c=(0,l.createProxy)(String.raw`/app/src/components/Footer/BlogForm.tsx`),{__esModule:d,$$typeof:h}=c;c.default;let g=(0,l.createProxy)(String.raw`/app/src/components/Footer/BlogForm.tsx#default`);var m=i(59070),u=i(98978);function p(){return t.jsx("footer",{className:"footer",children:t.jsx("div",{className:"container",children:(0,t.jsxs)("div",{className:"footer-container",id:"footer",children:[(0,t.jsxs)("div",{className:"footer-container__item link-grid",children:[(0,t.jsxs)("div",{className:"link-grid__item container-query",children:[t.jsx("h3",{className:"list-head",children:"Navigations"}),(0,t.jsxs)("ul",{children:[t.jsx("li",{children:t.jsx(a.default,{href:m.Ok.whoweare,prefetch:!1,children:"Who we are"})}),t.jsx("li",{children:t.jsx(a.default,{href:m.Ok.whatwedo,prefetch:!1,children:"What we do"})}),t.jsx("li",{children:t.jsx(a.default,{href:m.Ok.whowehelp,prefetch:!1,children:"Who we help"})}),t.jsx("li",{children:t.jsx(a.default,{href:m.Ok.solutions,prefetch:!1,children:"Solutions"})})]})]}),(0,t.jsxs)("div",{className:"link-grid__item",children:[t.jsx("h3",{className:"list-head",children:"Industries"}),t.jsx("ul",{children:u.X.map(e=>t.jsx("li",{children:t.jsx(a.default,{href:e.link,children:e.text})},e.link))})]}),(0,t.jsxs)("div",{className:"link-grid__item",children:[t.jsx("h3",{className:"list-head",children:"Services"}),t.jsx("ul",{className:"services-links",children:u.O.map(e=>t.jsx("li",{children:t.jsx(a.default,{href:e.link,children:e.heading})},e.link))})]}),(0,t.jsxs)("div",{className:"socials link-grid__item",children:[(0,t.jsxs)("div",{className:"socials-container",children:[t.jsx("h3",{className:"list-head",children:"Mennr Blog"}),t.jsx("p",{children:"Sign up for Mennr's weekly marketing newsletter for tips on how you can better utilize the internet to drive more business"}),t.jsx(g,{})]}),(0,t.jsxs)("div",{className:"socials-container",children:[t.jsx("h3",{className:"list-head",children:"Connect With Us"}),(0,t.jsxs)("div",{className:"social-links",children:[t.jsx("a",{href:o.U.facebook,className:"facebook",target:"_blank","aria-label":"Mennrtel_facebook",children:t.jsx(s.G,{icon:r.AYu})}),t.jsx("a",{href:o.U.linkedin,className:"linkedin",target:"_blank","aria-label":"Mennr_linkedin",children:t.jsx(s.G,{icon:r.hwn})}),t.jsx("a",{href:o.U.instagram,className:"instagram",target:"_blank","aria-label":"Mennr_instagram",children:t.jsx(s.G,{icon:r.Zzi})}),t.jsx("a",{href:o.U.threads,className:"threads",target:"_blank","aria-label":"Mennr_threads",children:t.jsx(s.G,{icon:r.LW1})})]})]})]})]}),(0,t.jsxs)("div",{className:"footer-container__item copyright",children:[t.jsx("img",{src:"/logomennr.svg",alt:"Mennr"}),(0,t.jsxs)("div",{className:"footer-container__item copyright_content",children:[t.jsx("div",{children:(0,t.jsxs)("p",{children:[t.jsx(a.default,{href:"/privacy-policy",children:"Privacy Policy"}),"\xa0\xa0 | \xa0\xa0",t.jsx(a.default,{href:"/ccpa",children:"California Privacy Rights"}),"\xa0\xa0 | \xa0\xa0",t.jsx(a.default,{href:"/do-not-sell-or-share",children:"Do Not Sell or Share My Personal Info"})]})}),t.jsx("p",{children:"\xa92024 Mennr LLC. All rights reserved. Mennr and the Mennr logo are trademarks of Mennr LLC."})]})]})]})})})}let f=(0,l.createProxy)(String.raw`/app/src/components/Nav/Nav.tsx`),{__esModule:v,$$typeof:w}=f;f.default;let b=(0,l.createProxy)(String.raw`/app/src/components/Nav/Nav.tsx#default`);function x({children:e}){return(0,t.jsxs)(t.Fragment,{children:[t.jsx(b,{}),e,t.jsx(p,{})]})}},59151:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>u,metadata:()=>m});var t=i(19510),a=i(98207),s=i.n(a);i(87471);var r=i(37010);i(99175);var o=i(9720),l=i(68570);let c=(0,l.createProxy)(String.raw`/app/src/app/DomainRedirect.tsx`),{__esModule:d,$$typeof:h}=c;c.default;let g=(0,l.createProxy)(String.raw`/app/src/app/DomainRedirect.tsx#default`);r.vc.autoAddCss=!1;let m={title:"Mennr: Marketing for Small Businesses",description:"The official website for Mennr.tech"};function u({children:e}){return(0,t.jsxs)("html",{lang:"en",children:[t.jsx("head",{children:t.jsx(o.default,{id:"gtag-code",children:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N9WNGNN2');`})}),(0,t.jsxs)("body",{className:s().className,children:[t.jsx("noscript",{children:t.jsx("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-N9WNGNN2",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),t.jsx(g,{}),e]})]})}},59070:(e,n,i)=>{"use strict";i.d(n,{Ok:()=>t,Q7:()=>a,uZ:()=>s});let t={whoweare:"/who-we-are",whatwedo:"/what-we-do",whowehelp:"/who-we-help",solutions:"/solutions",blog:"/",login:"/login"},a={automotive:"/who-we-help/automotive-business",skilledTradesBusinesses:"/who-we-help/skilled-trades-businesses",personalCare:"/who-we-help/personal-care-businesses",realEstate:"/who-we-help/real-estate",landscapingServices:"/who-we-help/landscaping-businesses",otherSmallBusiness:"/who-we-help/other-small-businesses"},s={seo:"/what-we-do/seo",socialMediaMarketing:"/what-we-do/social-media-marketing",metaAds:"/what-we-do/meta-ads",googleAds:"/what-we-do/google-ads",listingReviewManagement:"/what-we-do/listing-and-review-management",websiteDesignDevelopment:"/what-we-do/website-design-and-development",googleMyBusiness:"/what-we-do/google-business-profile",contentMarketing:"/what-we-do/content-marketing",smsMarketing:"/what-we-do/sms-marketing",emailMarketing:"/what-we-do/email-marketing",amazongMarketing:"/what-we-do/amazon-marketing"}},98978:(e,n,i)=>{"use strict";i.d(n,{O:()=>a,X:()=>s});var t=i(59070);let a=[{heading:"Website Design and Development",link:t.uZ.websiteDesignDevelopment,text:"At Mennr, we craft stunning websites tailored to your brand's needs. From user-friendly interfaces to seamless navigation, our designs captivate audiences and drive conversions. We ensure your website reflects your brand identity while optimizing it for performance across devices and more!",item:["Website Design","Webpage Structure & Flow","User Experience","Hosting & Maintenance","Website Content","Mobile Website"],img:"./services/website-design-dev.jpg"},{heading:"Search Engine Optimization",link:t.uZ.seo,text:"Mennr employs proven strategies to enhance your website's visibility on search engines, drive organic traffic to your website, increase leads, and attract more paid customers. With Mennr, you'll rank higher in search results and stay ahead of the competition. Use the power of SEO to elevate your online presence with Mennr's SEO solutions.",item:["Keyword Research & Analysis","On-page & off Page Optimization","Technical SEO","Local SEO","SEO Content Creation","Analytics & Reporting"],img:"./services/Search-engine-Optimization.png"},{heading:"Google Business Profile",link:t.uZ.googleMyBusiness,text:"Maximize your local visibility with Mennr's Google Business Profile optimization services. Mennr ensures your business stands out in local searches, driving more traffic and inquiries. Trust us to manage your profile, engage with customers, and drive more online and offline conversions for your local business.",item:["Profile Setup & Verification","Keyword Optimization","Business Information Management","Review Management","Engagement Monitoring","Local SEO Optimization"],img:"./services/Google-Business-Profile.png"},{heading:"Google Ads",link:t.uZ.googleAds,text:" Mennr's team of experts specializes in creating targeted Google AD campaigns that get you conversions. By leveraging our deep understanding of the platform, we help you increase your visibility, attract valuable leads, and maximize your return on investment. Be found by potential customers and start growing your online sales with Mennr.",item:["Campaign Setup & Optimization","Keyword Research & Selection","Ad Copywriting & Design","Bid Management","Conversion Tracking Setup","Performance Analysis & Reporting"],img:"./services/Google-Ads.png"},{heading:"Meta Ads",link:t.uZ.metaAds,text:"Mennr helps you reach millions of users across Meta platforms with our Meta Ads solutions. Using a strategic approach our team crafts highly engaging campaigns that captivate your target audience and drive conversions. Make the most of Meta and unlock digital growth for your business.",item:["Ad Campaign Strategy Development","Audience Targeting & Segmentation","Creative Ad Design","Budget Management","Ad Performance Tracking","A/B Testing"],img:"./services/Facebooks-Ads.png"},{heading:"Listing & Reviews Management",link:t.uZ.listingReviewManagement,text:"Manage your online reputation effortlessly with Mennr's listings and reviews management solutions built for local businesses. We ensure accurate business information across platforms and actively engage with customer reviews. With Mennr, you'll build trust, drive conversions, and enhance your brand's credibility online and much more! ",item:["Listing Creation & Optimization","Business Information Management","Review Monitoring & Response","Review Generation Strategies","Reputation Management","Performance Reporting"],img:"./services/Listing-and-Review-Management.png"},{heading:"Social Media Marketing",link:t.uZ.socialMediaMarketing,text:"Harness the power of social media with Mennr's expert marketing strategies. We specialize in creating engaging, high-quality content, running highly targeted campaigns, and interacting with your audience across different social media channels. Our services are designed to help you improve customer loyalty, increase your social media following, and drive more conversions for your brand.",item:["Social Media Strategy Development","Content Creation & Publishing","Community Management","Paid Advertising Campaigns","Influencer Marketing","Social Media Analytics"],img:"./services/Social-Media-Marketing.jpg"},{heading:"Email Marketing",link:t.uZ.emailMarketing,text:"Nurture customer relationships and drive sales with Mennr's email marketing solutions. Our specialized email marketing team works with you to create personalized campaigns that resonate with your customers and drive engagement. Whether you're looking to promote your brand, generate leads or boost conversions, you can trust us to deliver effective email strategies tailored to your specific business goals.",item:["Email Campaign Strategy Development","Subscriber List Management","Email Template Design","Personalization & Segmentation","Automated Drip Campaigns","Performance Tracking & Analytics"],img:"./services/Email-Marketing.png"},{heading:"Content Marketing",link:t.uZ.contentMarketing,text:" Fuel your online presence with captivating content. Mennr takes a creative approach to content creation, ensuring that the content we produce resonates with your target audience and drives engagement. By consistently producing high-quality content that is relevant and authoritative in your industry, we help establish your brand as a thought leader and increase your online visibility.",item:["Content Strategy Development","Blog Post Writing & Publishing","Infographic & Visual Content Creation","img Content Production","Content Distribution","Performance Measurement"],img:"./services/Content-Marketing.png"},{heading:"SMS Marketing",link:t.uZ.smsMarketing,text:"Connect with a broad audience utilizing Mennr's SMS marketing solutions. Our targeted campaigns are designed to help you reach your customers where they are and engage with them meaningfully. By sending personalized messages and timely promotions, you'll be able to boost brand awareness and drive sales with ease. ",item:["SMS Campaign Strategy","Audience Segmentation","Message Personalization","Automated SMS Sequences","Performance Tracking","Compliance Management"],img:"./services/SMS-Marketing.png"},{heading:"Amazon Marketing",link:t.uZ.amazongMarketing,text:"Amplify your presence on the world's largest online marketplace with Mennr's Amazon Ads solutions. Mennr manages all your Amazon marketing end-to-end. We optimize your campaigns to reach targeted audiences, driving visibility and sales. With our expertise, you'll increase product visibility, attract qualified leads, and maximize your ROI on your Amazon advertising spend.",item:["Product Listing Optimization","Amazon Storefront Design","Keyword Targeting & Bid Management","Product Display Ads","Sponsored Product Ads","Performance Analysis & Optimization"],img:"./services/Amazon-Marketing.png"}],s=[{text:"Automotive Businesses",link:t.Q7.automotive,img:"/services/automotive.webp"},{text:"Skilled Trades Businesses ",link:t.Q7.skilledTradesBusinesses,img:"/services/skills.webp"},{text:"Groups and Individuals in Real Estate",img:"/services/realestate.webp",link:t.Q7.realEstate},{text:"Personal Care Businesses",link:t.Q7.personalCare,img:"/services/personal.webp"},{text:"Landscaping Businesses",link:t.Q7.landscapingServices,img:"/services/landscaping.jpg"},{text:"Other Small Businesses",link:t.Q7.otherSmallBusiness,img:"/services/others.webp"}]},61562:(e,n,i)=>{"use strict";i.d(n,{U:()=>t});let t={facebook:"https://www.facebook.com/mennr.tech/",twitter:"https://twitter.com",linkedin:"https://www.linkedin.com/company/mennr/",instagram:"https://www.instagram.com/mennr.tech/",threads:"https://www.threads.net/@mennr.tech"}},52755:(e,n,i)=>{"use strict";i.r(n),i.d(n,{$$ACTION_0:()=>r,addMail:()=>s});var t=i(27745);i(26461);var a=i(85723);let s=(0,t.registerServerReference)("dceb5e87f2ac3cfa3568b04ae19a9b40e6bbe0fe",r);async function r(e){try{let n=JSON.stringify({properties:{email:e,lifecyclestage:"subscriber"}}),i=await fetch("https://api.hubapi.com/crm/v3/objects/contacts",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer pat-na1-99f1c44e-bfaf-4856-b7ab-b0416ea50bdd"},body:n});if(i=await i.json(),"error"===i.status){if("CONFLICT"===i.category)throw Error("1");if("VALIDATION_ERROR"===i.category)throw Error("2");throw Error("3")}return{success:!0,message:"Successfully added email"}}catch(e){return{success:!1,message:e.message}}}(0,a.ensureServerEntryExports)([s]),(0,t.registerServerReference)("30e193d48cfe7aca55ac4928d88d3fb7b7edf11f",s)},73881:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>a});var t=i(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},87471:()=>{}};