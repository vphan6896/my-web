(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[0],{27:function(e,t,s){},29:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(1),c=s.n(i),r=s(17),n=s.n(r),o=(s(27),s(28),s(29),s(2));var h=function(e){return Object(a.jsx)("div",{className:"column is-one-quarter fade",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-image",children:Object(a.jsx)("figure",{className:"image is-5by3",children:e.image})}),Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("div",{className:"title is-size-4",children:e.headliner}),Object(a.jsx)("div",{className:"content",children:e.descrip})]})]})})},l=s(4);var b=function(e){return Object(a.jsxs)("section",{class:"section fade",children:[Object(a.jsx)("h1",{class:"title has-text-grey-darker is-1",children:e.title}),Object(a.jsx)("h2",{class:"subtitle",children:e.subtitle}),Object(a.jsx)("p",{children:e.body}),Object(a.jsx)("div",{className:"has-text-weight-normal is-size-7",children:e.credits})]})},d=s.p+"static/media/keyboard.2cf890cc.gif",j=s.p+"static/media/lancelot.baf06c9a.png",m=s.p+"static/media/dropmtfujikeycap.493c2a5a.png",p=s.p+"static/media/matchakeycaps.285d271b.png";var u=[{path:"/blogs/blog0",name:"blog0",Component:function(){var e={height:"200px",width:"400px",marginBottom:"10px"},t={height:"300px",width:"450px"};return Object(a.jsx)("div",{children:Object(a.jsx)(b,{title:"Mechanical Keyboards",subtitle:"and how I built my own",body:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{style:e,src:d,alt:"Glowing keyboard showing outline of Lancelot"})," ",Object(a.jsx)("img",{style:e,src:j,alt:"Lancelot from Fate Zero"}),Object(a.jsx)("h3",{className:"has-text-weight-medium is-size-4",children:"TLDR"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"1. Find switches I liked (quiet): Cherry MX Silent Red with Tealios Housing"}),Object(a.jsx)("li",{children:"2. Find someone to make my custom keycaps: Maxkeyboards.com"}),Object(a.jsx)("li",{children:"3. Find a case. Preferably hot-swappable so you can plug-n-play switches essentially.: GK96s from Epomaker"}),Object(a.jsx)("li",{children:"3. Do some labor with switches. Then assemble."})]}),Object(a.jsx)("h3",{className:"has-text-weight-medium is-size-4",children:"What's the deal with mechanical keyboards?"}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"is-size-5",children:["Mechanical keyboards are not a new concept. You can look up on more history behind them but an example of an early mechanical keyboard would be the typewriter or the ",Object(a.jsx)("a",{href:"https://en.wikipedia.org/wiki/Model_M_keyboard",children:"Model M Keyboard from IBM"}),'. In summary, mechanical keyboards offer the end-user what every mouse does: functionality with feedback. Ever notice your mouse clicks make that "clicky" sound? That was in-place partly to inform the user that your attempt to press down on the mouse was sufficient to trigger the mouse button. Basic physics but this is what keyboards do for us as well.',Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"If you get deeper into the keyboard hobby, you'll start to notice the finer details such as the sound profile of each keyboard. There may be keyboards with more ",Object(a.jsx)("a",{href:"https://youtu.be/HF0ZlqMe3rw?t=6",children:" distinct tappy sounds"})," or maybe the ",Object(a.jsx)("a",{href:"https://youtu.be/x_VRaHneWto?t=99",children:"sound of their clicky switches overwhelm the reverb of the switches"}),". Then there's the aesthetic part of keyboards which can be appreciated by everyone. Once you move past the ostentatious leds and their numerous settings, you can coordinate color schemes and even get custom-made keycaps to bring some personality to your battlestation. ",Object(a.jsx)("br",{}),Object(a.jsx)("img",{style:t,src:p,alt:"soft shades of green colored keycaps"})," ",Object(a.jsx)("img",{style:t,src:m,alt:"keycap with Mount Fuji model inside resin"}),Object(a.jsx)("h3",{className:"has-text-weight-medium is-size-4",children:"So why build my own custom one?"}),'I dislike membrane keyboards (what you see in offices and schools). It\'s debatable that they\'re almost as loud as a mechanical keyboard depending on a user\'s typing behavior. They are difficult to repair due to lack of support and sometimes keys get stuck or not register. When I was coding or typing an essay, pressing the left shift key on a Dell membrane keyboard was extremely hard. If I type a "abcdef" quickly, it would register as "acef". Failure to register keystrokes is called ghosting. Good quality keyboards will try to implement anti-ghosting but nothing is perfect. Especially not a Dell keyboard built with low quality parts.',Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Now, not all non-mechanical keyboards are bad. I am very comfortable typing on laptop keyboards Macs and Windows alike. Windows laptops have scissor switches which like other commercial non-mechanical keyboards are difficult to repair (My '-'' minus key is still broken on my laptop) and suffer ghosting as well. With less resistance than a membrane keyboard, laptop keyboards have a reactive, light stroke feeling to them which makes them comfortable for typing. Fair warning, if you even buy a keyboard from a large company like Logitech, appreciate it for a few years, somehow lost your 'e' key, then it's possible your warranty expired or Logitech no longer has any spare parts to send to you (even if they did, you'll be expecting $5 for a single letter). Not to mention, replacing a scissor switch on a laptop is a lot harder than the mechanical keyboards' plug-n-play.",Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://switchandclick.com/cherry-mx-guide/",children:" Guide to Cherry (most popular types of switches) switches"}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),"My goal was to build a quiet linear keyboard with custom keycaps outlined in white for backlight capability as you can see at the top of the page. Linears eliminate sound from the mechanical switch. I've used Cherry MX reds before from a ",Object(a.jsx)("a",{href:"https://www.corsair.com/us/en/Categories/Products/Gaming-Keyboards/CORSAIR-Gaming-K70-Mechanical-Gaming-Keyboard-%E2%80%94-CHERRY%C2%AE-MX-Red/p/CH-9000069-NA",children:"Corsair K70 "}),". They're light to press on but still make a significant sound when typing. A quick google search showed there were Cherry MX Silent Red switches which were basically red switches but had rubber dampeners at the bottom to cut some of the sound of pressing down on a key. Then I thought, if I'm going out of my way to find a vendor that makes custom keycaps, I might as well make my switches feel a little more premium feeling. What better to do then to consult a friend who knows more than me? TLDR: He recommended putting the Cherry MX Red Silent stem (inside part of a switch) in a Tealios housing (outside casing part of a switch). This housing would provide a more firm and solid feel than that of the Cherry's which can further dampen any unwanted sound. One flaw with this frankenswitch is paying for twice the amount of switches and the labor to swap the parts out. It's not a difficult thing to do, but it is tedious."]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]}),Object(a.jsx)("hr",{style:{"border-top":"2px solid black"}})]}),credits:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"https://www.tomshardware.com/picturestory/736-history-of-mechanical-keyboards.html"}),Object(a.jsx)("li",{children:"https://switchandclick.com/cherry-mx-guide/"}),Object(a.jsx)("li",{children:"https://drop.com/buy/gks-xda-v2-dye-subbed-pbt-matcha-keycap-set"}),Object(a.jsx)("li",{children:"https://drop.com/buy/bkd-mt-fuji-wood-resin-artisan-keycap"})]})})})}}];var x=function(){return Object(a.jsxs)(o.c,{children:[u.map((function(e){return Object(a.jsx)(o.a,{path:e.path,component:e.Component},e.path)})),Object(a.jsx)(o.a,{path:"/blogs",exact:!0,render:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("section",{class:"columns section hero",children:[Object(a.jsx)("h1",{className:"title has-text-grey-darker is-1",children:"Blogs"}),Object(a.jsx)("h2",{class:"subtitle",children:"Documentation of my experiences in various hobbies which can range from programming to fitness."})]}),Object(a.jsx)("div",{className:"columns section has-text-weight-medium",children:Object(a.jsx)(h,{image:Object(a.jsx)(l.b,{to:"/blogs/blog0",children:Object(a.jsx)("img",{src:d,alt:"Keyboard glowing"})}),headliner:Object(a.jsx)(l.b,{to:"/blogs/blog0",children:" Mechanical Keyboards "}),descrip:Object(a.jsxs)("div",{children:["Why are there hobbyists who collect and build keyboards? Isn't my Apple",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{children:"#software"})]})})})]})}})]})},g=s.p+"static/media/profile_picture-removebg.c121ad99.png",O=s.p+"static/media/sunny_joypixels.3e70a111.gif",y=s.p+"static/media/sunset.ceb393c6.gif",f=s.p+"static/media/sunrise.ea5b2b2b.gif",w=s.p+"static/media/linkedin-logo-png-1840.a1932ea6.png";s(35);var v=function(){var e=(new Date).getHours(),t="",s=O;return e<12?(t="Good Morning",s=f):e>=12&&e<17?t="Good Afternoon":(t="Good Evening",s=y),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"hero",children:Object(a.jsxs)("div",{className:"hero-body",children:[Object(a.jsx)("h1",{className:"title has-text-grey-darker is-1 intro",children:t}),Object(a.jsx)("img",{id:"GreetingID",className:"intro",alt:"sun shining on water",style:{marginTop:"0px",marginLeft:"0px",marginRight:"0px",marginBottom:"0px"},src:s})]})}),Object(a.jsxs)("div",{className:"columns profile",children:[Object(a.jsx)("div",{className:"column",children:Object(a.jsx)("img",{style:{width:"70%",height:"100%"},alt:"Vy Phan posing",src:g})}),Object(a.jsxs)("div",{className:"column",children:[Object(a.jsxs)("article",{className:"message is-info is-size-3",children:[Object(a.jsx)("div",{className:"message-header",children:"Vy Phan"}),Object(a.jsx)("div",{className:"message-body is-size-3 has-text-weight-medium",children:Object(a.jsxs)("ul",{className:"has-text-left",children:[Object(a.jsx)("li",{className:"mb-2",children:Object(a.jsx)("a",{href:"resume",children:"Resume"})}),Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"https://www.linkedin.com/in/vy-phan-ut2020/",children:[" ",Object(a.jsx)("img",{alt:"LinkedIn logo",style:{height:"45px",width:"160px"},src:w}),"  "]})}),Object(a.jsx)("li",{className:"mb-1",children:Object(a.jsx)(l.b,{to:"/blog",children:"Blog"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/projects",children:"Projects"})})]})})]}),Object(a.jsx)("article",{className:" message is-info is-size-4 has-text-weight-medium",children:Object(a.jsx)("div",{className:"message-body",children:"Welcome to my site. I am a University of Texas Austin Computer Science B.S. Graduate with a certificate in Applied Statistics."})})]})]})]})},k=s(14),N=s.p+"static/media/phonevideodoctor.f8b023ed.png";var M=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("h1",{className:"title has-text-white",children:"Pvd Testing nesting routes here. Nothing available here yet. Sorry!"})})};var I=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("h1",{className:"title has-text-white",children:"Abc Testing nesting routes here. Nothing available here yet. Sorry!"})})},C=s.p+"static/media/dangerzone.5990f119.png",T=s.p+"static/media/Apex-Legends-Stats.8ddacff2.png",S=[{path:"/projects/pvd",name:"Pvd",Component:M},{path:"/projects/abc",name:"Abc",Component:I}];var D=function(){var e,t=Object(o.f)();return t.path,t.url,Object(a.jsxs)(o.c,{children:[S.map((function(e){return Object(a.jsx)(o.a,{path:e.path,component:e.Component},e.path)})),Object(a.jsx)(o.a,(e={exact:!0,path:"/projects"},Object(k.a)(e,"exact",!0),Object(k.a)(e,"render",(function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("section",{class:"columns section hero",children:[Object(a.jsx)("h1",{className:"title has-text-grey-darker is-1",children:"Projects"}),Object(a.jsx)("h2",{class:"subtitle",children:"Documentation of my projects. There may be a blog attached to them or links that will better describe the projects."})]}),Object(a.jsxs)("div",{className:"columns section has-text-weight-medium",children:[Object(a.jsx)(h,{image:Object(a.jsx)(l.b,{to:"/projects/pvd",children:Object(a.jsx)("img",{src:N,alt:"Project Page for PhoneVideoDoctor"})}),headliner:Object(a.jsx)("a",{href:"https://github.com/vphan6896/telemedicine-app",children:"PhoneVideoDoctor"}),descrip:Object(a.jsxs)("div",{children:["Telemedicine platform for geriatrics",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=n_Xggqjipbk",children:"Video Link"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{children:"#software"})]})}),Object(a.jsx)(h,{image:Object(a.jsx)("a",{href:"https://gitlab.com/vphan6896/DangerZone/",children:Object(a.jsx)("img",{src:C,alt:"Project Page for DangerZone"})}),headliner:Object(a.jsx)("a",{href:"https://gitlab.com/vphan6896/DangerZone/",children:"DangerZone"}),descrip:Object(a.jsxs)("div",{children:["Website consolidating health and danger statistics of many cities",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=SyOgSfFRq1g",children:"Video Link"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{children:"#software"})]})}),Object(a.jsx)(h,{image:Object(a.jsx)("a",{href:"https://github.com/vphan6896/apex-stats-2-public",children:Object(a.jsx)("img",{src:T,alt:"Project Page for Apex Legends Stats"})}),headliner:Object(a.jsx)("a",{href:"https://github.com/vphan6896/apex-stats-2-public",children:"Apex Legends Stats"}),descrip:Object(a.jsxs)("div",{children:["Cloud focused solution utilizing Jenkins X on an Azure Kubernetes cluster",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=g6l3LZFDMCE",children:"Video Link"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{children:"#software"})]})})]})]})})),e)),Object(a.jsx)(o.a,{path:"*",children:Object(a.jsx)("h1",{className:"has-text-white title",children:"This appears to be an invalid page."})})]})};var P=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/projects",component:D}),Object(a.jsx)(o.a,{path:"/blogs",component:x}),Object(a.jsx)(o.a,{path:"/my-web",component:v}),Object(a.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(a.jsx)(o.a,{path:"*",children:Object(a.jsx)("h1",{className:"has-text-white title",children:"This appears to be an invalid page."})})]})})},L=s(19),A=s(15),F=s(21),R=s(20),z=function(e){Object(F.a)(s,e);var t=Object(R.a)(s);function s(e){var a;return Object(L.a)(this,s),(a=t.call(this,e)).state={hour:0,minute:0,page:""},a}return Object(A.a)(s,[{key:"render",value:function(){var e=((new Date).getTimezoneOffset()/60*100).toString();return e=3===e.length?e.substring(0,1)+":"+e.substring(1):e.substring(0,2)+":"+e.substring(2),Object(a.jsx)("nav",{className:"navbar is-black",role:"navigation","aria-label":"main navigation",children:Object(a.jsxs)("div",{id:"navbarBasicExample",className:"navbar-menu",children:[Object(a.jsxs)("div",{className:"navbar-start has-text-weight-semibold",children:[Object(a.jsx)(l.b,{className:"navbar-item",to:"/my-web",children:"Home"}),Object(a.jsx)(l.b,{className:"navbar-item",to:"/blogs",children:"Blogs"}),Object(a.jsx)(l.b,{className:"navbar-item",to:"/projects",children:"Projects"})]}),Object(a.jsx)("div",{className:"navbar-end has-text-weight-semibold",children:Object(a.jsxs)("p",{className:"navbar-item",children:["GMT ",e," \u2003 ",this.state.hour,":",this.state.minute]})})]})})}}]),Object(A.a)(s,[{key:"timeUpdate",value:function(){var e=new Date,t=e.getHours(),s=e.getMinutes();1===s.toString().length&&(s="0"+s),1===t.toString().length&&(t="0"+t),this.setState((function(e){return{hour:t,minute:s}}))}},{key:"componentDidMount",value:function(){var e=this;this.timeUpdate(),this.interval=setInterval((function(){return e.timeUpdate()}),3e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),s}(i.Component);var G=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(z,{}),Object(a.jsx)(P,{})]})})},B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),i(e),c(e),r(e)}))};n.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root")),B()}},[[36,1,2]]]);
//# sourceMappingURL=main.ef69223f.chunk.js.map