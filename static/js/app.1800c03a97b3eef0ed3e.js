webpackJsonp([1],{"5t1a":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s=i("NYxO"),n={name:"HelloWorld",data:()=>({msg:"Welcome to Your Vue.js App",prePosition:0,prePositionState:"up"}),computed:{},created:function(){window.onscroll=(()=>{let t=document.documentElement.scrollTop||window.pageYOffset,e="";e=this.prePosition<t&&t>30?"down":"up",this.prePosition=t,e!=this.prePositionState&&(this.prePositionState=e,document.getElementById("m1").style.padding="down"==e?"5px 15px":"15px")})},methods:{}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top container",staticStyle:{"margin-top":"5px"}},[e("div",{staticClass:"navbar2"},[e("div",{staticClass:"row"},[e("router-link",{class:{"text-primary-mutable":"ticker"==this.$store.state.topMenu},attrs:{id:"m1",to:"/"}},[this._v("STEEM STATUS")])],1)]),this._v(" "),e("div",{staticStyle:{"margin-bottom":"70px"}})])},staticRenderFns:[]};var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottom",staticStyle:{"margin-top":"35px"}},[e("p",{staticClass:"text-center "},[e("small",[this._v("powered by "),e("a",{attrs:{href:"https://koinbot.org",target:"_blank"}},[this._v("koinbot.org")])])])])}]},l={data:()=>({message:""}),created:function(){this.$bus.$on("showSnackbar",t=>{this.message=t;var e=document.getElementById("snackbar");e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},5e3)})},methods:{}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"snackbar"},[e("div",{attrs:{id:"snackbar"}},[this._v(this._s(this.message))])])},staticRenderFns:[]},u={name:"App",components:{"nav-bar":i("VU/8")(n,o,!1,function(t){i("SuAi")},"data-v-4f7e767c",null).exports,bottom:i("VU/8")({},r,!1,null,null,null).exports,snackbar:i("VU/8")(l,c,!1,null,null,null).exports},created:function(){},methods:{preventZoom(t){console.log("preventZoom");var e=t.timeStamp,i=e-(t.currentTarget.dataset.lastTouch||e),a=t.touches.length;t.currentTarget.dataset.lastTouch=e,!i||i>500||a>1||(t.preventDefault(),t.target.click())}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav-bar"),this._v(" "),e("router-view"),this._v(" "),e("bottom"),this._v(" "),e("snackbar")],1)},staticRenderFns:[]};var p=i("VU/8")(u,m,!1,function(t){i("5t1a")},null,null).exports,h=i("/ocq"),d=i("PJh5"),g={name:"HelloWorld",data:()=>({msg:"Welcome to Your Vue.js App",users:[],isLoading:!1,page:1,pageList:[1,2,3,4,5,6,7,8,9,10],sortBy:"total_steem",userName:"",showSpinner:!1}),computed:{},mounted(){console.log("mounted!!")},created:function(){this.sortBy=localStorage.getItem("sortBy")||"total_steem",this.$store.commit("topMenu","ticker"),console.log("HelloWorld created"),this.getUsers()},methods:{getUsers:function(t){console.log("getUsers : "+t),this.initPage(t),this.isLoading=!0,this.$http.get("http://steemlite.cafe24.com:3001/users?page="+this.page+"&sort="+this.sortBy).then(t=>{this.createUsers(t.data)}).catch(t=>{console.log(t.response)})},updateClick(t){this.showSpinner=!0,this.$http.get("http://steemlite.cafe24.com:3001/users/"+t+"?sort="+this.sortBy).then(t=>{this.getUsers(),this.showSpinner=!1}).catch(t=>{this.showSpinner=!1})},createUsers(t){console.log(t);for(let a of t.data){a.fromNow=d(a.last_updated).fromNow(),a.fromNow.includes("second")?a.fromNow="Sec":a.fromNow.includes("minute")?a.fromNow="Min":a.fromNow.includes("day")?a.fromNow="Day":a.fromNow.includes("hour")&&(a.fromNow="Hour");var e="https://steemit-production-imageproxy-thumbnail.s3.amazonaws.com/U5ds8wePoj1V1DoRR4bzzKUARNiywjp_128x128";if(""===a.json_metadata||2===a.json_metadata.length)a.profile_image=e;else{var i=JSON.parse(a.json_metadata);a.profile_image=void 0!==i.profile.profile_image?i.profile.profile_image:e}console.log(a.profile_image),a.showUpdateBtn=!!a.fromNow.includes("Day")}this.users=t},imageLoadOnError(t){t.profile_image="https://steemit-production-imageproxy-thumbnail.s3.amazonaws.com/U5ds8wePoj1V1DoRR4bzzKUARNiywjp_128x128"},pageClick(t){this.getUsers(t)},preNextClick(t){"prev"==t?this.page>1&&(this.page-=1,this.getUsers(this.page)):(this.page+=1,this.getUsers(this.page))},sortByChange(){localStorage.setItem("sortBy",this.sortBy),console.log(this.userName.length),this.userName.length?this.nameEnter():this.getUsers()},nameKeyup(){console.log("keyup")},nameEnter(){""!=this.userName&&(this.showSpinner=!0,this.$http.get("http://steemlite.cafe24.com:3001/users/"+this.userName+"?sort="+this.sortBy).then(t=>{t.data.message&&this.$bus.$emit("showSnackbar",t.data.message),this.showSpinner=!1,this.initPage(t.data.page),this.createUsers(t.data)}).catch(t=>{this.showSpinner=!1}))},initPage(t){t&&(this.page=t,this.createPageList(t))},createPageList(t){if(t>5){this.pageList=[];for(let e=4;e>0;e--)this.pageList.push(t-e);this.pageList.push(t);for(let e=1;e<=5;e++)this.pageList.push(t+e)}else this.pageList=[1,2,3,4,5,6,7,8,9,10]},fromNow:t=>d(t).fromNow(),toNumber:t=>Number(parseFloat(t).toFixed(0)).toLocaleString(),toLS:t=>Number(t).toLocaleString(),toB:function(t){return(Number(t)/1e9).toFixed(1)},toFixed1:function(t){return Number(t).toFixed(1)},toFixed0:function(t){return Number(t).toFixed(0)},chageColor:function(t){let e="text-blue";return Number(t)<0&&(e="text-red"),e}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello container",staticStyle:{"margin-top":"0px"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("h4",[t._v("Sort By ")]),t._v(" "),i("div",{staticClass:"form-group form-inline"},[i("div",{staticClass:"custom-control custom-radio",staticStyle:{"margin-right":"12px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sortBy,expression:"sortBy"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"customRadio1",name:"customRadio",value:"active_steem"},domProps:{checked:t._q(t.sortBy,"active_steem")},on:{change:[function(e){t.sortBy="active_steem"},t.sortByChange]}}),t._v(" "),i("label",{staticClass:"custom-control-label",attrs:{for:"customRadio1"}},[t._v("Active SP")])]),t._v(" "),i("div",{staticClass:"custom-control custom-radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sortBy,expression:"sortBy"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"customRadio2",name:"customRadio",value:"total_steem"},domProps:{checked:t._q(t.sortBy,"total_steem")},on:{change:[function(e){t.sortBy="total_steem"},t.sortByChange]}}),t._v(" "),i("label",{staticClass:"custom-control-label",attrs:{for:"customRadio2"}},[t._v("Est. STEEM")])])])]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("h4",[t._v("User Name ")]),t._v(" "),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",placeholder:"name"},domProps:{value:t.userName},on:{keyup:t.nameKeyup,keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.nameEnter(e):null},input:function(e){e.target.composing||(t.userName=e.target.value)}}})])])]),t._v(" "),t.showSpinner?i("div",{staticClass:"sk-spinner sk-spinner-pulse"}):t._e(),t._v(" "),i("div",{},[i("table",{staticClass:"table table-hover ",staticStyle:{"margin-top":"5px"}},[t._m(0),t._v(" "),i("tbody",t._l(t.users.data,function(e,a){return i("tr",{class:{"table-light":a%2==0}},[i("td",{staticStyle:{padding:"0.5rem 0.0rem 0.5rem 0.0rem"}},[t._v(t._s(e.rank))]),t._v(" "),i("td",{staticStyle:{padding:"0.4rem 0.0rem 0.4rem 0.0rem"}},[i("img",{staticClass:"pthumbnail",attrs:{src:e.profile_image},on:{error:function(i){t.imageLoadOnError(e)}}})]),t._v(" "),i("td",{staticStyle:{padding:"0.5rem 0.0rem 0.5rem 0.4rem"}},[t._v(t._s(e.name))]),t._v(" "),i("td",{staticClass:"td-style"},[t._v(t._s(t.toNumber(e.active_steem)))]),t._v(" "),i("td",{staticClass:"td-style"},[t._v(t._s(t.toLS(t.toFixed0(e.total_steem))))]),t._v(" "),i("td",{staticClass:"td-style"},[t._v(t._s(t.toNumber(e.balance)))]),t._v(" "),i("td",{staticClass:"td-style"},[t._v(t._s(t.toNumber(e.sbd_balance)))]),t._v(" "),i("td",{staticClass:"td-style"},[t._v(t._s(e.follower_count))]),t._v(" "),i("td",{staticClass:"td-style"},[t._v(t._s(e.following_count))]),t._v(" "),i("td",{staticClass:"td-style small"},[t._v(t._s(e.fromNow)+"\n"),e.showUpdateBtn?i("a",{staticClass:" btn badge badge-pill badge-light",on:{click:function(i){i.preventDefault(),t.updateClick(e.name)}}},[t._v("Update")]):t._e()])])}))]),t._v(" "),i("nav",{staticStyle:{"margin-top":"22px"},attrs:{"aria-label":"Page navigation example"}},[i("ul",{staticClass:"pagination justify-content-center"},[i("li",{staticClass:"page-item"},[i("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:function(e){e.preventDefault(),t.preNextClick("prev")}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),t._v(" "),i("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._v(" "),t._l(t.pageList,function(e,a){return i("li",{staticClass:"page-item",class:{active:t.page==e}},[i("a",{staticClass:"page-link",on:{click:function(i){i.preventDefault(),t.pageClick(e)}}},[t._v(t._s(e))])])}),t._v(" "),i("li",{staticClass:"page-item"},[i("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:function(e){e.preventDefault(),t.preNextClick("next")}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),t._v(" "),i("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])]),t._v(" "),i("br")])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",{staticStyle:{height:"10px"}},[i("th",{}),t._v(" "),i("th",{}),t._v(" "),i("th",{},[t._v("name")]),t._v(" "),i("th",{staticClass:"td-title-style"},[t._v("Active SP")]),t._v(" "),i("th",{staticClass:"td-title-style"},[t._v("Est. STEEM")]),t._v(" "),i("th",{staticClass:"td-title-style"},[t._v("STEEM")]),t._v(" "),i("th",{staticClass:"td-title-style"},[t._v("SBD")]),t._v(" "),i("th",{staticClass:"td-title-style"},[t._v("follower")]),t._v(" "),i("th",{staticClass:"td-title-style"},[t._v("following")]),t._v(" "),i("th",{staticClass:"td-title-style"},[t._v("updated")])])])}]};var v=i("VU/8")(g,b,!1,function(t){i("lBOg")},"data-v-2b70d489",null).exports,f={props:["exchange"],methods:{clickOne:function(t){console.log(this.exchange+"  clickOne : "+t);let e={exchange:this.exchange};"-15"==t?(e.value=.15,e.sign="-"):"-10"==t?(e.value=.1,e.sign="-"):"-5"==t?(e.value=.05,e.sign="-"):"0"==t?(e.value=0,e.sign=""):"+5"==t?(e.value=.05,e.sign="+"):"+10"==t?(e.value=.1,e.sign="+"):"+15"==t&&(e.value=.15,e.sign="+"),this.$emit("clickOne",e)}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"addpercentgroup"},[i("div",{staticClass:"btn-group ",staticStyle:{"margin-top":"5px"},attrs:{role:"group","aria-label":"Basic example"}},[i("button",{staticClass:"btn ",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.clickOne("-15")}}},[i("small",[t._v("-15")])]),t._v(" "),i("button",{staticClass:"btn ",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.clickOne("-10")}}},[i("small",[t._v("-10")])]),t._v(" "),i("button",{staticClass:"btn ",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.clickOne("-5")}}},[i("small",[t._v("-5")])]),t._v(" "),i("button",{staticClass:"btn ",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.clickOne("0")}}},[i("small",[t._v("0")])]),t._v(" "),i("button",{staticClass:"btn ",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.clickOne("+5")}}},[i("small",[t._v("+5")])]),t._v(" "),i("button",{staticClass:"btn ",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.clickOne("+10")}}},[i("small",[t._v("+10")])]),t._v(" "),i("button",{staticClass:"btn ",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.clickOne("+15")}}},[i("small",[t._v("+15")])])])])},staticRenderFns:[]},y={name:"Noti",components:{addPercentGroup:i("VU/8")(f,_,!1,null,null,null).exports},data:()=>({msg:"Welcome to Your Vue.js App",isLogin:!1,loginData:{id:"",key:"",idErrorMsg:"",keyErrorMsg:"",isShowKeyInput:!1},isLoading:!0,userData:{},notiData:void 0,inputData:{priceExchange:"bithumb",priceSymbol:"BTC",priceValue:0},bithumbCoinList:["BTC","ETH","XRP","BCH","LTC","EOS","XMR","DASH","ETC","QTUM","BTG","ZEC"],bitfinexCoinList:["BTC","ETH","XRP","BCH","LTC","EOS","XMR","DASH","ETC","QTUM","BTG","ZEC"],upbitCoinList:["BTC","STEEM","SBD","ADA","NEO","SNT","XLM","LSK","OMG","STRAT","STORJ","WAVES","KMD"],coinList:[],allTicker:{}}),computed:{doubleValue:{get(){return 2*this.value},set(t){this.value=t/2}},exchangePricePair:function(){let t="KRW";return"bitfinex"==this.inputData.priceExchange&&(t="USD"),t}},watch:{$route(t,e){this.show=!1,console.log(e),console.log(t),"Noti"==t.name&&this.loginCheck()},"inputData.priceValue":function(t){this.calPricePercent(this.inputData.priceExchange)}},created:function(){console.log("Noti created"),this.$store.commit("topMenu","noti"),this.loginCheck(),this.inputData.priceExchange=localStorage.getItem("priceExchange")||"bithumb",this.getTicker(),this.$bus.$on("loginRefresh",t=>{console.log("loginRefresh"),this.loginCheck()})},mounted(){console.log("mounted!!")},methods:{getTicker:function(){this.$http.get("http://utillab.com:8886/coin/ticker/all").then(t=>{this.allTicker=t.data,this.coinListUpdate(this.inputData.priceExchange)}).catch(t=>{console.log(t.response)})},getUserInfo:function(t){this.isLoading=!0,this.$http.get("http://utillab.com:8886/coin/users/telegram/"+t).then(t=>{console.log(t.data),this.userData=t.data,this.isLoading=!1,this.setNotiData()}).catch(t=>{this.isLoading=!1})},priceRemove(t){this.userData.telegram.notifications.splice(t,1),this.notiUpdated()},notiUpdated(t,e){console.log("noti update",t,e),this.$http.put("http://utillab.com:8886/coin/telegram/"+this.loginData.id,this.userData.telegram.notifications).then(i=>{if(console.log(i.data),t){let i=e?"On":"Off";this.$bus.$emit("showSnackbar",t+" "+i)}this.setNotiData()}).catch(t=>{console.log(t.response)})},priceAddClick(){let t=this.inputData.priceExchange,e=Number(this.inputData.priceValue),i=this.inputData.priceSymbol||"BTC";if(e){let a={exchange:t,symbol:i,function:"Price",value:e,run:!0};this.userData.telegram.notifications.push(a),this.notiUpdated(),this.$bus.$emit("showSnackbar",t+" "+i+" : "+e.toLocaleString())}},priceExchangeClick(t){this.inputData.priceExchange=t,this.coinListUpdate(t),localStorage.setItem("priceExchange",t)},addPercentGroupClick(t){let e=this.inputData.priceExchange,i=0;"bithumb"==e?i=this.allTicker.bithumb[this.inputData.priceSymbol].buy_price:"bitfinex"==e?i=this.allTicker.bitfinex[this.inputData.priceSymbol].bid:"upbit"==e&&(i=this.allTicker.upbit[this.inputData.priceSymbol].tradePrice);let a=(i=Number(i))*t.value;a=(a="-"==t.sign?i-a:"+"==t.sign?i+a:i)<99?a.toFixed(1):a.toFixed(0),this.inputData.priceValue=Number(a),this.calPricePercent(e)},coinListUpdate(t){"bithumb"==t?(this.coinList=this.bithumbCoinList,this.inputData.priceSymbol=localStorage.getItem("priceSymbolBithumb")||"BTC",this.inputData.priceValue=Number(this.allTicker.bithumb[this.inputData.priceSymbol].buy_price)):"bitfinex"==t?(this.coinList=this.bitfinexCoinList,this.inputData.priceSymbol=localStorage.getItem("priceSymbolBitfinex")||"BTC",this.inputData.priceValue=this.allTicker.bitfinex[this.inputData.priceSymbol].bid):"upbit"==t&&(this.coinList=this.upbitCoinList,this.inputData.priceSymbol=localStorage.getItem("priceSymbolUpbit")||"BTC",this.inputData.priceValue=this.allTicker.upbit[this.inputData.priceSymbol].tradePrice)},priceSymbolChange(){console.log("priceSymbolChange : "),"bithumb"==this.inputData.priceExchange?(this.inputData.priceValue=this.allTicker.bithumb[this.inputData.priceSymbol].buy_price,localStorage.setItem("priceSymbolBithumb",this.inputData.priceSymbol)):"bitfinex"==this.inputData.priceExchange?(this.inputData.priceValue=this.allTicker.bitfinex[this.inputData.priceSymbol].bid,localStorage.setItem("priceSymbolBitfinex",this.inputData.priceSymbol)):"upbit"==this.inputData.priceExchange&&(this.inputData.priceValue=this.allTicker.upbit[this.inputData.priceSymbol].tradePrice,localStorage.setItem("priceSymbolUpbit",this.inputData.priceSymbol))},calPricePercent(t){let e=this.inputData.priceSymbol,i=0;"bithumb"==t?i=Number(this.allTicker.bithumb[e].buy_price):"bitfinex"==t?i=Number(this.allTicker.bitfinex[e].bid):"upbit"==t&&(i=Number(this.allTicker.upbit[e].tradePrice));let a=(this.inputData.priceValue-i)/i*100;this.inputData.priceValuePercent=a.toFixed(1)},priceIncreaseDecreaseClick(t){let e=this.inputData.priceExchange,i=.01*Number(this.inputData.priceValue),a=(this.inputData.priceSymbol,0);"-"==t?a=Number(this.inputData.priceValue)-i:"+"==t&&(a=Number(this.inputData.priceValue)+i),a=a<5?a.toFixed(3):a<100?a.toFixed(2):a.toFixed(0),this.inputData.priceValue=Number(a),this.calPricePercent(e)},setNotiData(){this.notiData={},this.notiData.bithumbAllUpDown=this.getNotiItem("bithumb","ALL","UpDown","2m"),this.notiData.bitfinexBTCSAR5m=this.getNotiItem("bitfinex","BTC","SAR","5m"),this.notiData.bitfinexBTCSAR15m=this.getNotiItem("bitfinex","BTC","SAR","15m"),this.notiData.bitfinexBTCSAR30m=this.getNotiItem("bitfinex","BTC","SAR","30m"),console.log(this.notiData)},getNotiItem:function(t,e,i,a){let s;for(var n of this.userData.telegram.notifications)if(n.symbol==e&&n.exchange==t&&n.function==i&&n.value==a){s=n;break}if(void 0===s){let n={exchange:t,symbol:e,function:i,value:a,run:!1};this.userData.telegram.notifications.push(n),s=n}return s},loginCheck(){let t=localStorage.getItem("telegram_id");this.loginData.isShowKeyInput=!1,this.isLogin=!!t,this.loginData.id=t,t&&this.getUserInfo(t)},toLS:t=>Number(t).toLocaleString(),toFixed0:function(t){return Number(t).toFixed(0)},chageColor:function(t){let e="text-blue";return Number(t)<0&&(e="text-red"),e}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("div",{staticClass:"col-md-6 offset-md-3"},[t._m(0),t._v(" "),i("small",{staticClass:"form-text text-muted"},[t._v("for koinbot notification setting in telegram.")]),t._v(" "),t.userData.telegram?i("div",[t._v(" "+t._s(t.userData.telegram.first_name)+" "+t._s(t.userData.telegram.last_name)+" ")]):t._e(),t._v(" "),i("br"),i("br")]),t._v(" "),t.notiData?i("div",{staticClass:"col-md-6 offset-md-3 ",staticStyle:{"margin-top":"-15px"}},[i("h5",[t._v("1. Price")]),t._v(" "),i("div",{staticClass:"card border-light mb-3"},[t._m(1),t._v(" "),i("div",{staticClass:"card-body",staticStyle:{"margin-bottom":"-10px","margin-top":"-10px"}},[i("button",{staticClass:"btn btn-sm",class:{"btn-primary":"bithumb"==t.inputData.priceExchange},attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.priceExchangeClick("bithumb")}}},[t._v("Bithumb")]),t._v(" "),i("button",{staticClass:"btn btn-sm",class:{"btn-primary":"upbit"==t.inputData.priceExchange},attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.priceExchangeClick("upbit")}}},[t._v("Upbit")]),t._v(" "),i("button",{staticClass:"btn btn-sm",class:{"btn-primary":"bitfinex"==t.inputData.priceExchange},attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.priceExchangeClick("bitfinex")}}},[t._v("Bitfinex")])]),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"card-body"},[i("div",{staticClass:"form-group form-inline",staticStyle:{"margin-top":"-10px"}},t._l(t.coinList,function(e,a){return i("div",{staticClass:"custom-control custom-radio m-r-15 "},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData.priceSymbol,expression:"inputData.priceSymbol"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"priceValue"+a,name:"customRadio"},domProps:{value:e,checked:t._q(t.inputData.priceSymbol,e)},on:{change:[function(i){t.$set(t.inputData,"priceSymbol",e)},t.priceSymbolChange]}}),t._v(" "),i("label",{staticClass:"custom-control-label",attrs:{for:"priceValue"+a}},[t._v(t._s(e))])])})),t._v(" "),i("div",{staticClass:"form-group",staticStyle:{"margin-top":"-15px"}},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"text-right"},[i("small",{staticClass:"text-muted"},[t._v(t._s(t.inputData.priceValuePercent)+" % ")])]),t._v(" "),i("div",{staticClass:"input-group "},[i("div",{staticClass:"input-group-prepend"},[i("span",{staticClass:"input-group-text "},[i("small",[t._v(t._s(t.inputData.priceSymbol)+"-"+t._s(t.exchangePricePair))])])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData.priceValue,expression:"inputData.priceValue"}],staticClass:"form-control text-right",attrs:{type:"number","aria-label":"Amount (to the nearest dollar)"},domProps:{value:t.inputData.priceValue},on:{input:function(e){e.target.composing||t.$set(t.inputData,"priceValue",e.target.value)}}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){e.preventDefault(),t.priceIncreaseDecreaseClick("-")}}},[t._v(" - ")]),t._v(" "),i("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){e.preventDefault(),t.priceIncreaseDecreaseClick("+")}}},[t._v(" + ")])])]),t._v(" "),i("addPercentGroup",{on:{clickOne:t.addPercentGroupClick}})],1)]),t._v(" "),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-primary btn-sm",staticStyle:{"padding-right":"3rem","padding-left":"3rem"},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.priceAddClick(e)}}},[t._v("Add")])])]),t._v(" "),t._m(3),t._v(" "),i("div",{staticClass:"card-body",staticStyle:{"margin-bottom":"-20px"}},[i("table",{staticClass:"table table-hover "},[i("tbody",t._l(t.userData.telegram.notifications,function(e,a){return"Price"==e.function?i("tr",{class:{"table-light":a%2==0}},[i("td",{staticStyle:{padding:"0.3rem 0.0rem 0.3rem 0.3rem","border-top":"0px"}},[t._v(t._s(e.exchange))]),t._v(" "),i("td",{staticStyle:{padding:"0.3rem 0.0rem 0.3rem 0.3rem","border-top":"0px"}},[t._v(t._s(e.symbol))]),t._v(" "),i("td",{staticClass:"td-total-style td-border0"},[t._v(t._s(t.toLS(e.value)))]),t._v(" "),i("td",{staticClass:"td-style td-border0",staticStyle:{width:"90px"}},[i("button",{staticClass:"btn btn-outline-danger btn-sm",staticStyle:{padding:"0.1rem 0.4rem","font-size":"0.7203125rem"},on:{click:function(e){e.preventDefault(),t.priceRemove(a)}}},[t._v("remove")])])]):t._e()}))])])]),t._v(" "),i("h5",[t._v("2. Technical")]),t._v(" "),i("div",{staticClass:"card border-light mb-3"},[i("div",{staticClass:"card-header border-bottom0 padding5rem"},[t._v("Bitfinex > BTC - Parabolic SAR")]),t._v(" "),i("div",{staticClass:"card-body",staticStyle:{"margin-bottom":"-20px"}},[i("div",{staticClass:"form-inline form-group "},[i("div",{staticClass:" custom-control custom-checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.notiData.bitfinexBTCSAR5m.run,expression:"notiData.bitfinexBTCSAR5m.run"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck1"},domProps:{checked:Array.isArray(t.notiData.bitfinexBTCSAR5m.run)?t._i(t.notiData.bitfinexBTCSAR5m.run,null)>-1:t.notiData.bitfinexBTCSAR5m.run},on:{change:[function(e){var i=t.notiData.bitfinexBTCSAR5m.run,a=e.target,s=!!a.checked;if(Array.isArray(i)){var n=t._i(i,null);a.checked?n<0&&t.$set(t.notiData.bitfinexBTCSAR5m,"run",i.concat([null])):n>-1&&t.$set(t.notiData.bitfinexBTCSAR5m,"run",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.notiData.bitfinexBTCSAR5m,"run",s)},function(e){t.notiUpdated("bitfinexBTCSAR5m",t.notiData.bitfinexBTCSAR5m.run)}]}}),t._v(" "),i("label",{staticClass:"custom-control-label",attrs:{for:"customCheck1"}},[t._v("5m  ")])]),t._v(" "),i("div",{staticClass:" custom-control custom-checkbox m-l-15"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.notiData.bitfinexBTCSAR15m.run,expression:"notiData.bitfinexBTCSAR15m.run"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck2"},domProps:{checked:Array.isArray(t.notiData.bitfinexBTCSAR15m.run)?t._i(t.notiData.bitfinexBTCSAR15m.run,null)>-1:t.notiData.bitfinexBTCSAR15m.run},on:{change:[function(e){var i=t.notiData.bitfinexBTCSAR15m.run,a=e.target,s=!!a.checked;if(Array.isArray(i)){var n=t._i(i,null);a.checked?n<0&&t.$set(t.notiData.bitfinexBTCSAR15m,"run",i.concat([null])):n>-1&&t.$set(t.notiData.bitfinexBTCSAR15m,"run",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.notiData.bitfinexBTCSAR15m,"run",s)},function(e){t.notiUpdated("bitfinexBTCSAR15m",t.notiData.bitfinexBTCSAR15m.run)}]}}),t._v(" "),i("label",{staticClass:"custom-control-label",attrs:{for:"customCheck2"}},[t._v("15m")])]),t._v(" "),i("div",{staticClass:" custom-control custom-checkbox m-l-15"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.notiData.bitfinexBTCSAR30m.run,expression:"notiData.bitfinexBTCSAR30m.run"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck3"},domProps:{checked:Array.isArray(t.notiData.bitfinexBTCSAR30m.run)?t._i(t.notiData.bitfinexBTCSAR30m.run,null)>-1:t.notiData.bitfinexBTCSAR30m.run},on:{change:[function(e){var i=t.notiData.bitfinexBTCSAR30m.run,a=e.target,s=!!a.checked;if(Array.isArray(i)){var n=t._i(i,null);a.checked?n<0&&t.$set(t.notiData.bitfinexBTCSAR30m,"run",i.concat([null])):n>-1&&t.$set(t.notiData.bitfinexBTCSAR30m,"run",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.notiData.bitfinexBTCSAR30m,"run",s)},function(e){t.notiUpdated("bitfinexBTCSAR30m",t.notiData.bitfinexBTCSAR30m.run)}]}}),t._v(" "),i("label",{staticClass:"custom-control-label",attrs:{for:"customCheck3"}},[t._v("30m")])])])]),t._v(" "),i("div",{staticClass:"card-header border-bottom0 padding5rem"},[t._v("Bithumb > All coins Up&Down")]),t._v(" "),i("div",{staticClass:"card-body",staticStyle:{"margin-bottom":"-20px"}},[i("div",{staticClass:"form-group form-inline"},[i("div",{staticClass:" custom-control custom-checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.notiData.bithumbAllUpDown.run,expression:"notiData.bithumbAllUpDown.run"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck4"},domProps:{checked:Array.isArray(t.notiData.bithumbAllUpDown.run)?t._i(t.notiData.bithumbAllUpDown.run,null)>-1:t.notiData.bithumbAllUpDown.run},on:{change:[function(e){var i=t.notiData.bithumbAllUpDown.run,a=e.target,s=!!a.checked;if(Array.isArray(i)){var n=t._i(i,null);a.checked?n<0&&t.$set(t.notiData.bithumbAllUpDown,"run",i.concat([null])):n>-1&&t.$set(t.notiData.bithumbAllUpDown,"run",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.notiData.bithumbAllUpDown,"run",s)},function(e){t.notiUpdated("bithumbAllUpDown",t.notiData.bithumbAllUpDown.run)}]}}),t._v(" "),i("label",{staticClass:"custom-control-label",attrs:{for:"customCheck4"}},[t._v("Up Down")])])])])])]):t._e(),t._v(" "),i("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[e("b",[this._v("KoinBot ")]),this._v(" "),e("small",{staticClass:"text-muted"},[this._v(" beta")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header my-card-header"},[e("small",{staticClass:"text-muted"},[this._v("exchange")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header my-card-header"},[e("small",{staticClass:"text-muted"},[this._v("price margin ±0.5%")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header my-card-header"},[e("small",{staticClass:"text-muted"},[this._v("list")])])}]},x=(i("VU/8")(y,C,!1,null,null,null).exports,{name:"HelloWorld",data:()=>({msg:"Welcome to Your Vue.js App",isLogin:!1,loginData:{id:"",key:"",idErrorMsg:"",keyErrorMsg:"",isShowKeyInput:!1},isLoading:!0}),computed:{},ready:function(){console.log("READYYYYY")},created:function(){this.$store.commit("topMenu","noti"),this.loginData.isShowKeyInput=!1;let t=localStorage.getItem("telegram_id");this.isLogin=!!t,this.loginData.id=t,console.log(this.$route.params.tid),console.log(this.$route.params.tid);let e=this.$route.params.tid;e&&(this.loginData.id=e),console.log("created")},methods:{searchTerm:function(){this.isLoading=!0,this.$http.get("http://utillab.com:8886/coin/ticker/all").then(t=>{this.setMcap(t.data),this.setBithumb(t.data),this.setUpbit(t.data),this.isLoading=!1}).catch(t=>{this.isLoading=!1,console.log(t.response)})},getLoginKey(t){""!=this.loginData.id?this.$http.put("http://utillab.com:8886/coin/telegram/loginkey",this.loginData).then(t=>{console.log(t.data),"NotFoundUser"==t.data.message?this.loginData.idErrorMsg="ID not found. Please check your ID or /start.":this.loginData.isShowKeyInput=!0}).catch(t=>{console.log(t.response)}):this.loginData.idErrorMsg="Please input ID."},loginClick:function(t){""!=this.loginData.key?this.$http.post("http://utillab.com:8886/coin/telegram/login",this.loginData).then(t=>{"DoNotEqual"==t.data.message?this.loginData.keyErrorMsg="The login key does not match. Please check it.":"Success"==t.data.message&&(localStorage.setItem("telegram_id",this.loginData.id),this.isLogin=!0,this.$bus.$emit("loginRefresh",1))}).catch(t=>{console.log(t.response)}):this.loginData.keyErrorMsg="Enter the key you received in the telegram."},toFixed1:function(t){return Number(t).toFixed(1)},toFixed0:function(t){return Number(t).toFixed(0)},chageColor:function(t){let e="text-blue";return Number(t)<0&&(e="text-red"),e}}}),D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-top":"5px"}},[t.isLogin?t._e():i("div",{staticClass:"col-md-6 offset-md-3"},[t._m(0),t._v(" "),i("fieldset",{staticStyle:{"margin-top":"35px"}},[i("div",{staticClass:"form-group "},[t._m(1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.id,expression:"loginData.id"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter ID"},domProps:{value:t.loginData.id},on:{input:function(e){e.target.composing||t.$set(t.loginData,"id",e.target.value)}}}),t._v(" "),i("small",{staticClass:"form-text text-danger",attrs:{id:"emailHelp"}},[t._v(t._s(t.loginData.idErrorMsg))])]),t._v(" "),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-primary",on:{click:t.getLoginKey}},[t._v("Get Login Key")])]),t._v(" "),t.loginData.isShowKeyInput?i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Login Key")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.key,expression:"loginData.key"}],staticClass:"form-control",attrs:{type:"number",placeholder:"login key"},domProps:{value:t.loginData.key},on:{input:function(e){e.target.composing||t.$set(t.loginData,"key",e.target.value)}}}),t._v(" "),i("small",{staticClass:"form-text text-danger",attrs:{id:"emailHelp"}},[t._v(t._s(t.loginData.keyErrorMsg))])]):t._e(),t._v(" "),t.loginData.isShowKeyInput?i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.loginClick}},[t._v("Login")])]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"https://steemit.com/kr/@koinbot/telegram-koinbot",target:"_blank"}},[this._v("Telegram Bot Add&Login Guide "),e("small",[this._v("(kor)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"exampleInputEmail1"}},[this._v("ID "),e("small",{staticClass:"text-muted"},[this._v(' (You can get ID by enter "/info" in telegram)')])])}]};i("VU/8")(x,D,!1,null,null,null).exports;a.a.use(h.a);var k=new h.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:v}]}),S=i("mtWM"),j=i.n(S),w=new a.a;a.a.config.productionTip=!1,a.a.prototype.$http=j.a,a.a.prototype.$bus=w,a.a.use(s.a);const N=new s.a.Store({state:{count:0,topMenu:"ticker"},mutations:{increment(t){t.count++},topMenu(t,e){t.topMenu=e}}});N.commit("increment"),console.log(N.state.count),new a.a({el:"#app",store:N,router:k,components:{App:p},template:"<App/>"})},SuAi:function(t,e){},lBOg:function(t,e){},uslO:function(t,e,i){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function s(t){return i(n(t))}function n(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.1800c03a97b3eef0ed3e.js.map