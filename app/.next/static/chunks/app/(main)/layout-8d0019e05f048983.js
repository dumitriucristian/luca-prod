(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4095],{7905:function(e,n,s){Promise.resolve().then(s.t.bind(s,231,23)),Promise.resolve().then(s.bind(s,3944)),Promise.resolve().then(s.bind(s,2173))},7138:function(e,n,s){"use strict";s.d(n,{default:function(){return r.a}});var t=s(231),r=s.n(t)},6463:function(e,n,s){"use strict";var t=s(1169);s.o(t,"usePathname")&&s.d(n,{usePathname:function(){return t.usePathname}}),s.o(t,"useRouter")&&s.d(n,{useRouter:function(){return t.useRouter}})},8064:function(e,n,s){"use strict";Object.defineProperty(n,"$",{enumerable:!0,get:function(){return r}});let t=s(4590);function r(e){let{createServerReference:n}=s(6671);return n(e,t.callServer)}},3944:function(e,n,s){"use strict";s.d(n,{default:function(){return i}});var t=s(7437),r=s(2265);s(4590);var a=(0,s(8064).$)("30e193d48cfe7aca55ac4928d88d3fb7b7edf11f");function i(){let[e,n]=(0,r.useState)(""),[s,i]=(0,r.useState)(!1),l=(0,r.useRef)(null),[c,o]=(0,r.useState)(0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("dialog",{className:"newsletter-response",ref:l,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"newsletter-response__image",children:(()=>{switch(c){case 0:return(0,t.jsx)("img",{src:"/footer/success.svg",alt:"chipy",width:136,height:142});case 1:return(0,t.jsx)("img",{src:"/footer/already.svg",alt:"chipy",width:136,height:142});case 2:return(0,t.jsx)("img",{src:"/footer/invalid-email.svg",alt:"chipy",width:136,height:142});default:return(0,t.jsx)("img",{src:"/footer/error.svg",alt:"chipy",width:136,height:142})}})()}),(0,t.jsxs)("div",{className:"newsletter-response__text",children:[(0,t.jsx)("p",{children:(()=>{switch(c){case 0:return"High-five! You've just made our day by joining. Get ready for a wave of awesome content and surprises!";case 1:return"You're in! No need to sign up again – your email is already subscribed. Thanks for being a loyal member!";case 2:return"Oh no! It seems there's an issue with the email. Could you please check and enter a valid email to join our community?";default:return"Apologies! We're experiencing an internal error. It's definitely not your fault. Please try again in a few moments. Thanks for your understanding!"}})()}),(0,t.jsx)("button",{onClick:()=>{var e;null===(e=l.current)||void 0===e||e.close()},children:"Okay"})]})]})})}),(0,t.jsxs)("form",{className:"social-mail",onSubmit:s=>{s.preventDefault(),i(!0),e&&a(e).then(e=>{if(e.success){o(0);return}let n=+e.message;if("number"!=typeof n){o(3);return}o(n)}).catch(e=>{let n=+e.message;if("number"!=typeof n){o(3);return}o(n)}).finally(()=>{var e;i(!1),n(""),null===(e=l.current)||void 0===e||e.showModal()})},children:[(0,t.jsx)("input",{type:"email",placeholder:"Email",value:e,onChange:e=>n(e.target.value),required:!0,name:"email"}),(0,t.jsx)("button",{"aria-label":"join our blog",disabled:s,children:s?"Adding...":"Join"})]})]})}},2173:function(e,n,s){"use strict";s.d(n,{default:function(){return f}});var t=s(7437),r=s(2265),a=s(6920),i=s(5079);let l="+1 (860) 329-2988";var c=s(7138);let o="/login";function u(){return(0,t.jsx)("div",{className:"nav-upper",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"nav-upper__item",children:(0,t.jsxs)("a",{href:"tel:".concat(l),children:[(0,t.jsx)("span",{children:(0,t.jsx)(a.G,{icon:i.Eo4})}),l]})}),(0,t.jsx)(c.default,{rel:"canonical",href:o,target:"_blank",className:"nav-upper__item nav-button",children:"Partner Login"})]})})}var d=s(6463);function h(){let[e,n]=(0,r.useState)(!1),[s,u]=(0,r.useState)(!0),h=(0,d.usePathname)(),[f,m]=(0,r.useState)(0),j=()=>{{let e=window.scrollY;e>f&&e>90?u(!1):u(!0),m(e)}};return(0,r.useEffect)(()=>{n(!1)},[h]),(0,r.useEffect)(()=>(window.addEventListener("scroll",j),()=>{window.removeEventListener("scroll",j)}),[f]),(0,t.jsx)("nav",{className:"nav ".concat(!s&&!e&&"hide"),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"nav-bottom",children:[(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{type:"checkbox",id:"mobile-nav",checked:e,onChange:()=>{n(e=>!e)}}),(0,t.jsxs)("label",{htmlFor:"mobile-nav",children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})]}),(0,t.jsx)("div",{className:"nav-bottom__logo",children:(0,t.jsx)(c.default,{href:"/",prefetch:!1,children:(0,t.jsx)("img",{src:"/logomennr.svg",alt:"logo"})})}),(0,t.jsxs)("div",{className:"nav-bottom__links",children:[(0,t.jsxs)("ul",{className:"nav-links",children:[(0,t.jsx)("li",{children:(0,t.jsx)(c.default,{href:"/who-we-are",prefetch:!1,children:"Who We Are"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c.default,{href:"/who-we-help",prefetch:!1,children:"Who We Help"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c.default,{href:"/what-we-do",prefetch:!1,children:"What We Do"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c.default,{href:"/solutions",prefetch:!1,children:"Solutions"})}),(0,t.jsx)("li",{className:"hidden-large link-button",children:(0,t.jsxs)(c.default,{href:o,className:"nav-upper__item nav-button",prefetch:!1,children:[(0,t.jsx)("span",{className:"nav-button__circle"}),"Client Login"]})})]}),(0,t.jsxs)("div",{className:"nav-bottom__links-ours",children:[(0,t.jsx)("div",{className:"links-phone hidden-large",children:(0,t.jsx)("a",{href:"tel:".concat(l),"aria-label":"phone_number",children:(0,t.jsx)(a.G,{icon:i.Eo4})})}),(0,t.jsx)(c.default,{className:"links-button",href:"/solutions/#get-in-touch",prefetch:!1,children:"Get Started"})]})]})]})})})}function f(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u,{}),(0,t.jsx)(h,{})]})}}},function(e){e.O(0,[3676,231,6920,2971,7023,1744],function(){return e(e.s=7905)}),_N_E=e.O()}]);