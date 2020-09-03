(this["webpackJsonpopen-source-portfolio"]=this["webpackJsonpopen-source-portfolio"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),s=(a(13),a(14),a(1)),c=a(2),l=a(4),m=a(3),d=["Projects","Discography","About"],u=(a(15),a(5)),h=(a(16),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changePage=function(e){e.preventDefault(),n.setState({selectedNavItem:e.currentTarget.innerText}),n.props.itemClick(e.currentTarget.innerText)},n.changePage=n.changePage.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=d,a=this.props.selectedPage;return o.a.createElement("div",{className:"nav-bar"},o.a.createElement(o.a.Fragment,null,t.map((function(t,n){var r=t===a?"selected-nav-item":"nav-item";return o.a.createElement("a",{className:r,onClick:e.changePage,key:n},t)}))))}}]),a}(o.a.Component)),p=["\u3004","\u2021","\u3024","\u232d","\u232e","\u3006","\u232c","\u0f04"],g=[{name:"Leo's Delusion",previewImg:"imgs/LD.jpg",description:"Leo's Delusion is the name under which the duo realizes their passion for music production. Blending a variety of influences from hip-hop and electronic, it's the soundtrack of a video game yet to be.",works:[{description:"A cinematic, rough, and punchy glimpse into the post-apocalyptic.",externalLocation:"https://www.youtube.com/embed/videoseries?list=PL1Lgz0XMNSE0eBvGx-cHKNDxZoe9InZ7V",type:"video",title:"2 0 X X"},{description:"The genesis of our collaboration, and no better place to dive in.",externalLocation:"https://www.youtube.com/embed/videoseries?list=PL1Lgz0XMNSE3ZZAeXMTAd75JRIRQz7o5A",type:"video",title:"Chromaglyphs"}]},{name:"Rescored",previewImg:"imgs/RescoredLogoForSite.png",description:"Rescored provides original scores and in-house editing to select movie scenes, painting the films' moments in new colors.",works:[{description:"An eerie conspiracy looms...",externalLocation:"https://player.vimeo.com/video/446263688",type:"video",title:"Rescored: Flightplan"},{description:"You have five minutes.",externalLocation:"https://player.vimeo.com/video/446336266",type:"video",title:"Rescored: Drive"},{description:"Not all hearts beat.",externalLocation:"https://player.vimeo.com/video/446336431",type:"video",title:"Rescored: Sebastian's Voodoo"}]}],v=(a(17),a(18),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).displayContent=function(){var e=n.props.singleItemToShow;return"video"===(e.type?e.type:"img")?o.a.createElement("iframe",{className:"display-video",src:e.externalLocation,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):o.a.createElement("img",{className:"display-img",alt:e.title,src:e.previewImg})},n.displayPayWhatYouWant=function(){return n.props.showPayWhatYouWant?o.a.createElement("p",null,o.a.createElement("a",{href:n.props.singleItemToShow.externalLocation,target:"_blank"},"Pay what you want!")):o.a.createElement(o.a.Fragment,null)},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"single-item-view"},o.a.createElement("h1",null,this.props.singleItemToShow.title),o.a.createElement("div",{className:"content-display"},this.displayContent(),o.a.createElement("br",null),o.a.createElement("div",{className:"single-item-text-container"},o.a.createElement("p",null,this.props.singleItemToShow.description)),this.displayPayWhatYouWant())),o.a.createElement("hr",{className:"item-splitter"}))}}]),a}(o.a.Component)),f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).showProjectPreview=function(){return n.state.projectToPreview&&!n.state.selectedProject?o.a.createElement("div",{className:"project-previews-containter"},o.a.createElement("div",{className:"project-preview"},o.a.createElement("img",{alt:n.state.projectToPreview.name,src:n.state.projectToPreview.previewImg}),o.a.createElement("div",{className:"project-preview-p-container"},o.a.createElement("p",null,n.state.projectToPreview.description)))):void 0},n.showProject=function(){return n.state.selectedProject?o.a.createElement("div",{className:"single-project-container"},o.a.createElement("a",{className:"projects-clear-item",onClick:n.clearSelectedProject},"X"),n.state.selectedProject.works.map((function(e,t){return o.a.createElement(v,{key:t,singleItemToShow:e})}))):void 0},n.clearSelectedProject=function(e){e.preventDefault(),n.setState({selectedProject:void 0})},n.hoverController=function(e){e.preventDefault(),"onMouseEnter"===e.dispatchConfig.registrationName?n.setState({projectToPreview:g.find((function(t){return t.name===e.currentTarget.innerHTML}))}):"onMouseLeave"===e.dispatchConfig.registrationName&&n.setState({projectToPreview:void 0})},n.changeProject=function(e){e.preventDefault(),n.setState({selectedProject:g.find((function(t){return t.name===e.currentTarget.innerHTML}))})},n.showSymbolFlakes=function(){var e=g,t=Math.floor(100/e.length);if(!n.state.projectToPreview&&!n.state.selectedProject)return o.a.createElement("div",{className:"flakes-container"},e.map((function(e,a){return o.a.createElement("div",{style:{width:t+"%"},className:"symbolflakes",key:a},o.a.createElement("div",{className:"symbolflake"},p[Math.floor(Math.random()*p.length)]),o.a.createElement("div",{className:"symbolflake"},p[Math.floor(Math.random()*p.length)]),o.a.createElement("div",{className:"symbolflake"},p[Math.floor(Math.random()*p.length)]),o.a.createElement("div",{className:"symbolflake"},p[Math.floor(Math.random()*p.length)]),o.a.createElement("div",{className:"symbolflake"},p[Math.floor(Math.random()*p.length)]),o.a.createElement("div",{className:"symbolflake"},p[Math.floor(Math.random()*p.length)]))})))},n.state={projectToPreview:void 0,selectedProject:void 0},n.changeProject=n.changeProject.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=g,a=Math.floor(100/t.length);return o.a.createElement(o.a.Fragment,null,this.showProject(),o.a.createElement("div",{className:"project-titles-container"},t.map((function(t,n){var r=e.state.selectedProject&&t.name===e.state.selectedProject.name?"selected-project-button":"project-button";return o.a.createElement("button",{className:r,style:{width:a+"%"},onClick:e.changeProject,onMouseEnter:e.hoverController,onMouseLeave:e.hoverController,key:n},t.name)}))),this.showSymbolFlakes(),this.showProjectPreview())}}]),a}(o.a.Component),w=[{previewImg:"imgs/TheEndComes.png",description:"A cinematic, rough, and punchy glimpse into the post-apocalyptic.",externalLocation:"https://leosdelusion.bandcamp.com/album/2-0-x-x",title:"2 0 X X - Leo's Delusion"},{previewImg:"imgs/chromaglyphs.jpg",description:"The genesis of our collaboration, and no better place to dive in.",externalLocation:"https://leosdelusion.bandcamp.com/album/chromaglyphs",title:"Chromaglyphs - Leo's Delusion"},{previewImg:"imgs/Impressions3.png",description:"An eerie conspiracy looms...",externalLocation:"https://rescored.bandcamp.com/album/impressions-iii-flightplan",title:"Impressions III: Flightplan - Rescored"},{previewImg:"imgs/Impressions2.png",description:"You have five minutes.",externalLocation:"https://rescored.bandcamp.com/album/impressions-ii-drive",title:"Impressions II: Drive - Rescored"},{previewImg:"imgs/Impressions1.png",description:"Not all hearts beat.",externalLocation:"https://rescored.bandcamp.com/album/impressions-i-sebastians-voodoo",title:"Impressions I: Sebastian's Voodoo - Rescored"}],b=(a(19),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setSingleItem=function(e){e.preventDefault(),n.setState({singleItemToShow:w[e.currentTarget.id]}),console.log("SHOW SINGLE ITEM PAGE: "+e.currentTarget.id),window.scrollTo(0,0)},n.showSingleItem=function(){return n.state.singleItemToShow?o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{className:"discography-clear-item",onClick:n.clearSingleItem},"X"),o.a.createElement(v,{singleItemToShow:n.state.singleItemToShow,clearSingleItem:n.clearSingleItem,showPayWhatYouWant:"true"})):o.a.createElement(o.a.Fragment,null)},n.clearSingleItem=function(e){e.preventDefault(),n.setState({singleItemToShow:void 0})},n.state={singleItemToShow:void 0},n.setSingleItem=n.setSingleItem.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=w;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"single-item-view"},this.showSingleItem()),o.a.createElement("div",{className:"array-view-discography"},t.map((function(t,a){return o.a.createElement("button",{key:a,id:a,onClick:e.setSingleItem},o.a.createElement("img",{alt:t.title,src:t.previewImg}))}))))}}]),a}(o.a.Component)),y=["Two students of the arts and sciences, Corey Ferris and Jayson Perkins have spent the last decade forging their friendship and creative endeavors. Both have been lifelong audio and video enthusiasts, and their capacity for creating their own content manifested in recent years through a number of projects.","Corey has spent no shortage of time immersed in the world of music production. Even as a listener, he's had years absorbing influences and styles from his biggest inspirations. His insight on rhythmic structures and drum composition come from countless sessions in the lab and at venues. In addition, he's a self taught video editor, and has made several reels and montages for his local gaming scene.","Jayson is an unapologetic disciple of the synth and all things sinister. After experiencing the raw power behind some of his favorite artists playing live, he was nothing but energized. He aims to push the listener's understanding of what is considered 'groovy' or 'danceable' with his signature rough and heavy sound design. He dove into music production with an unwavering focus, and one goal - that the listener would never forget what they just heard.","Corey and Jayson continue to work on new music and video releases, bringing gritty bass, ethereal beats, and fantastic soundscapes wherever they go. They hope to weave these mediums in new ways to fascinate and excite their audience."],E=(a(20),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"about-content-container"},o.a.createElement("div",{className:"about-content"},o.a.createElement("div",{className:"about-img-container"},o.a.createElement("img",{src:"imgs/TheBoysBW.jpg"})),o.a.createElement("div",{className:"about-p-container"},y.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,e))})),o.a.createElement("p",{className:"about-contact-paragraph"},"Contact: ","cfjpsoundscapes@gmail.com"))))}}]),a}(o.a.Component)),j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).components={Projects:f,Discography:b,About:E},n.changePage=function(e){n.setState({pageToShow:e}),console.log("nav to (From Main): ".concat(e,"!"))},n.state={pageToShow:d[0]},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.components[this.state.pageToShow];return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"page-header"},o.a.createElement("div",{className:"app-header"},o.a.createElement(h,{itemClick:this.changePage,selectedPage:this.state.pageToShow})),o.a.createElement("img",{className:"banner",src:"imgs/banner.PNG"})),o.a.createElement("div",{className:"component-container"},o.a.createElement(e,null)))}}]),a}(o.a.Component);var I=function(){return o.a.createElement("div",{className:"app"},o.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f1c208cb.chunk.js.map