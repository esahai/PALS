(function(){"use strict";var e={2041:function(e,t,n){n(9773);var r=n(9199),s=n(4402),i=n(6265),o=n.n(i),l=n(6423),a=n(7718),u=n(3369),c=n(9271);function d(e,t,n,s,i,o){const l=(0,r.up)("AppHeader"),d=(0,r.up)("DrinkSelection"),f=(0,r.up)("CupSelection"),g=(0,r.up)("DispenserAction"),p=(0,r.up)("DispenserStatus"),h=(0,r.up)("AppFooter");return(0,r.wg)(),(0,r.j4)(a.q,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l),(0,r.Wm)(c.O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u.K,{fluid:""},{default:(0,r.w5)((()=>[(0,r.Wm)(d),(0,r.Wm)(f),(0,r.Wm)(g),(0,r.Wm)(p)])),_:1})])),_:1}),(0,r.Wm)(h)])),_:1})}var f=n(9056),g=n(9156),p=n(1556),h=n(4310);const m=(0,r.Uk)("Eashan's SoftDrink Cocktail Bar");function w(e,t){return(0,r.wg)(),(0,r.j4)(f.L,{color:"teal-darken-4",image:"https://picsum.photos/1920/1080?random"},{image:(0,r.w5)((()=>[(0,r.Wm)(h.f,{gradient:"to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"})])),prepend:(0,r.w5)((()=>[(0,r.Wm)(g.g)])),default:(0,r.w5)((()=>[(0,r.Wm)(p.o,null,{default:(0,r.w5)((()=>[m])),_:1})])),_:1})}var k=n(89);const v={},b=(0,k.Z)(v,[["render",w]]);var S=b,W=n(4075),_=n(6824),D=n(8521);const y=(0,r._)("h1",{align:"center"},"Select 1-3 drinks",-1);function x(e,t,n,s,i,o){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(_.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(D.D,null,{default:(0,r.w5)((()=>[y])),_:1})])),_:1}),(0,r.Wm)(_.o,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.drinks,((e,t)=>((0,r.wg)(),(0,r.j4)(D.D,{key:t,class:"d-sm-flex child-flex",sm:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(h.f,{src:o.image(t),class:"drink-not-selected",id:t,onClick:o.toggleSelection},null,8,["src","id","onClick"])])),_:2},1024)))),128)),(0,r.Wm)(W.J)])),_:1})],64)}const C=(0,r.qj)({order:{size:null,drinks:[]},inProgress:!1,status:"Ready to serve!",setSize(e){this.order.size=e,console.log("Setting cup size to "+e)},addDrink(e){this.order.drinks.push(e)},removeDrink(e){let t=this.order.drinks.indexOf(e);-1!==t&&this.order.drinks.splice(t,1)},setInProgress(e){this.inProgress=e},setStatus(e){this.status=e}});var O={data(){return{drinks:{Fanta:{selected:!1},Sprite:{selected:!1},"Coca-Cola":{selected:!1}},store:C}},methods:{image(e){return"/images/"+e+".png"},getDrinkTypes(){this.axios.get("/api/menu").then((e=>function(){this.drinks={};for(let t in e.data)this.drinks[t]={selected:!1}}))},toggleSelection(e){console.log(e.currentTarget);let t=e.currentTarget.id,n=e.target;this.drinks[t].selected=!this.drinks[t].selected,this.drinks[t].selected?(n.setAttribute("class","drink-selected"),this.store.addDrink(t)):(n.setAttribute("class","drink-not-selected"),this.store.removeDrink(t)),console.log(this.drinks[t].selected)},beforeMount(){this.getDrinkTypes()}}};const z=(0,k.Z)(O,[["render",x]]);var j=z;const P=(0,r._)("h1",{align:"center"},"Select one size",-1);function A(e,t,n,s,i,o){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(_.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(D.D,null,{default:(0,r.w5)((()=>[P])),_:1})])),_:1}),(0,r.Wm)(_.o,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.cups,(e=>((0,r.wg)(),(0,r.j4)(D.D,{key:"col"+e.size,class:"d-sm-flex child-flex",sm:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(h.f,{src:o.image(e.size),width:"100%",height:"375",id:e.size,class:"not-selected",onClick:o.selectCup},null,8,["src","id","onClick"])])),_:2},1024)))),128)),(0,r.Wm)(W.J,{inset:""})])),_:1})],64)}var T={data(){return{cups:[{size:"small"},{size:"medium"},{size:"large"}],selectedCup:null,selectedImage:null,store:C}},methods:{image(e){return"/images/"+e+".jpeg"},selectCup(e){console.log(e.currentTarget),null!==this.selectedImage&&this.selectedImage.setAttribute("class","not-selected"),this.selectedImage=e.target,this.selectedImage.setAttribute("class","selected"),this.store.setSize(e.currentTarget.id)},getCupSizes(){this.axios.get("/api/glass/sizes").then((e=>function(){console.log(e.data);let t=0;for(let n in e.data)this.cups[t].size=n,t++}))},beforeMount(){this.getCupSizes()}}};const I=(0,k.Z)(T,[["render",A]]);var Z=I,H=n(9806);const M=(0,r.Uk)("Dispense");function E(e,t,n,s,i,o){return(0,r.wg)(),(0,r.j4)(u.K,{align:"right"},{default:(0,r.w5)((()=>[(0,r.Wm)(H.T,{onClick:o.submitOrder,color:"red",size:"large",block:""},{default:(0,r.w5)((()=>[M])),_:1},8,["onClick"])])),_:1})}var Y={data(){return{store:C}},methods:{submitOrder(){console.log(this.store.order),this.store.setStatus("Your drink is being prepapred ..."),this.store.setInProgress(!0),this.axios.post("/api/dispenser/dispense",this.store.order).then((e=>{this.store.setStatus(e.data),this.store.setInProgress(!1)})).catch((e=>{this.store.setStatus(e.data),this.store.setInProgress(!1)}))}}};const F=(0,k.Z)(Y,[["render",E]]);var K=F,U=n(8162),J=n(2897);function q(e,t,n,s,i,o){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(_.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(D.D,{cols:"4"},{default:(0,r.w5)((()=>[(0,r._)("h3",null,(0,r.zw)(i.store.status),1)])),_:1}),(0,r.Wm)(U.C),(0,r.Wm)(D.D,{cols:"4"},{default:(0,r.w5)((()=>[(0,r.wy)((0,r.Wm)(J.L,{rotate:90,size:50,width:5,indeterminate:"",color:"red"},null,512),[[r.F8,i.store.inProgress]])])),_:1})])),_:1}),(0,r.Wm)(W.J)],64)}var L={data(){return{store:C}}};const R=(0,k.Z)(L,[["render",q]]);var B=R,G=n(1666);const N=(0,r._)("div",{class:"bg-teal d-flex w-100 align-center px-4"},[(0,r._)("strong",{class:"text-white"},"(c) Copyright - 2022 Eashan Sahai, UPenn")],-1);function Q(e,t){return(0,r.wg)(),(0,r.j4)(G.c,{class:"d-flex flex-column"},{default:(0,r.w5)((()=>[N])),_:1})}const V={},X=(0,k.Z)(V,[["render",Q]]);var $=X,ee={name:"App",components:{AppHeader:S,DrinkSelection:j,CupSelection:Z,DispenserAction:K,DispenserStatus:B,AppFooter:$},data:()=>({})};const te=(0,k.Z)(ee,[["render",d]]);var ne=te;const re=(0,r.ri)(ne),se=(0,s.Rd)();re.use(se),re.use(l.Z,o()),re.mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,s,i){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],i=e[c][2];for(var l=!0,a=0;a<r.length;a++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(l=!1,i<o&&(o=i));if(l){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,o=r[0],l=r[1],a=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(a)var c=a(n)}for(t&&t(r);u<o.length;u++)i=o[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkpals"]=self["webpackChunkpals"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2041)}));r=n.O(r)})();
//# sourceMappingURL=app.8fa79263.js.map