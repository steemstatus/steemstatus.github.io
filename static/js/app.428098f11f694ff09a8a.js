webpackJsonp([1],{"2XGv":function(t,e){},GN2D:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r=s("NYxO"),o={data:()=>({prePositionState:"up"}),computed:{},methods:{}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"navbar2"},[s("router-link",{class:{"text-primary-mutable":"steemstatus"==t.$store.state.topMenu},attrs:{id:"m1",to:"/"}},[t._v("STEEM STATUS")]),t._v(" "),s("router-link",{class:{"text-primary-mutable":"accounts"==t.$store.state.topMenu},staticStyle:{"margin-left":"20px","margin-right":"-5px"},attrs:{id:"m2",to:"/accounts"}},[t._v("Accounts")]),t._v(" "),s("router-link",{class:{"text-primary-mutable":"witness"==t.$store.state.topMenu},attrs:{id:"m3",to:"/witness"}},[t._v("Witness")]),t._v(" "),s("hr",{staticStyle:{"margin-top":"50px","margin-bottom":"1px",width:"100%"},attrs:{id:"h1"}})],1),t._v(" "),s("div",{staticStyle:{"margin-bottom":"70px"}})])},staticRenderFns:[]};var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottom ",staticStyle:{"margin-top":"30px","padding-bottom":"10px"}},[e("p",{staticClass:"text-center "},[e("small",[this._v("created by "),e("a",{attrs:{href:"https://steemit.com/@koinbot",target:"_blank"}},[this._v("@koinbot")])])])])}]},l={data:()=>({message:""}),created:function(){this.$bus.$on("showSnackbar",t=>{this.message=t;var e=document.getElementById("snackbar");e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)})},methods:{}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"snackbar"},[e("div",{attrs:{id:"snackbar"}},[this._v(this._s(this.message))])])},staticRenderFns:[]},u={name:"App",components:{"nav-bar":s("VU/8")(o,i,!1,function(t){s("nLBI")},"data-v-35e2d907",null).exports,bottom:s("VU/8")({},n,!1,null,null,null).exports,snackbar:s("VU/8")(l,c,!1,null,null,null).exports},created:function(){let t=localStorage.getItem("topMenu")||"";this.$router.push({path:"/"+t})},methods:{preventZoom(t){console.log("preventZoom");var e=t.timeStamp,s=e-(t.currentTarget.dataset.lastTouch||e),a=t.touches.length;t.currentTarget.dataset.lastTouch=e,!s||s>500||a>1||(t.preventDefault(),t.target.click())}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav-bar"),this._v(" "),e("router-view"),this._v(" "),e("bottom"),this._v(" "),e("snackbar")],1)},staticRenderFns:[]};var _=s("VU/8")(u,p,!1,function(t){s("2XGv")},null,null).exports,m=s("/ocq"),v=s("PJh5"),d={name:"accounts",data:()=>({allUsers:[],users:[],page:1,pageList:[1,2,3,4,5],sortBy:"total_steem",userName:"",showSpinner:!1,globalProperties:{vestingValue:0},accountCount:{}}),computed:{},mounted(){},created:function(){localStorage.setItem("topMenu","accounts"),this.$store.commit("topMenu","accounts"),this.sortBy=localStorage.getItem("sortBy")||"total_steem",this.showSpinner=!0,this.getGlobalProperties()},methods:{getGlobalProperties(){this.$http.get("http://steemlite.cafe24.com:3001/steem/cache").then(t=>{this.globalProperties.time=t.data.time,this.globalProperties.vestingValue=t.data.vesting_value,this.getUsers(1)}).catch(t=>{console.log(t.response)}),this.$http.get(this.$apiserver+"/usercount").then(t=>{this.accountCount=t.data}).catch(t=>{console.log(t.response)})},getUsers:function(t){let e="";if(1===t)e=this.$apiserver+"/users?page=1&sort="+this.sortBy;else{let s=this.page<t?"/next":"/prev",a="";if("/next"==s){let e=15*(t-this.page)-1;console.log(e),a=this.allUsers[e].name}else a=this.allUsers[0].name;console.log(a),e=this.$apiserver+"/users/"+a+s+"?sort="+this.sortBy}this.initPage(t),this.showSpinner=!0,this.$http.get(e).then(t=>{this.createUsers(t.data),this.showSpinner=!1}).catch(t=>{console.log(t.response),this.showSpinner=!1})},updateClick(t){this.$http.get(this.$apiserver+"/users/"+t+"?sort="+this.sortBy).then(t=>{this.getUsers()}).catch(t=>{})},createUsers(t){let e=[];for(let r of t.data){r.fromNow=v(r.last_updated).fromNow();var s="https://steemit-production-imageproxy-thumbnail.s3.amazonaws.com/U5ds8wePoj1V1DoRR4bzzKUARNiywjp_128x128";if(""===r.json_metadata||2===r.json_metadata.length)r.profile_image=s;else{var a=JSON.parse(r.json_metadata);a.profile?(r.profile_image=void 0!==a.profile.profile_image?a.profile.profile_image:s,r.about=a.profile.about||""):r.profile_image=s}r.reputation=r.num_reputation,r.witnessVotes="";for(let t of r.witness_votes)r.witnessVotes+="@"+t+" ";let t=parseFloat(r.vesting_shares);r.sp=t*this.globalProperties.vestingValue,r.proxy=""==r.proxy?'""':r.proxy,r.proxied=Number(r.proxied_vsf_votes[0])/1e6*this.globalProperties.vestingValue,r.proxied=Number(r.proxied.toFixed(0)).toLocaleString(),r.lastVoteTime=this.fromNowDay(r.last_vote_time),e.length<15&&e.push(r)}console.log("c user finished"),this.allUsers=t.data,this.users=e},imageLoadOnError(t){t.profile_image="https://steemit-production-imageproxy-thumbnail.s3.amazonaws.com/U5ds8wePoj1V1DoRR4bzzKUARNiywjp_128x128"},pageClick(t){this.getUsers(t)},preNextClick(t){"prev"==t?this.page>1&&(this.page-=1,this.getUsers(this.page)):(this.page+=1,this.getUsers(this.page))},sortByChange(){localStorage.setItem("sortBy",this.sortBy),console.log(this.userName.length),this.userName.length?this.nameEnter():this.getUsers(1)},nameKeyup(){console.log("keyup")},nameEnter(){""!=this.userName?(this.showSpinner=!0,this.$http.get(this.$apiserver+"/users/"+this.userName+"?sort="+this.sortBy).then(t=>{t.data.message&&(console.log("show snack"),this.$bus.$emit("showSnackbar",t.data.message)),this.showSpinner=!1,this.initPage(t.data.page),this.createUsers(t.data)}).catch(t=>{this.showSpinner=!1})):this.getUsers(1)},initPage(t){t&&(this.page=t,this.createPageList(t)),$("html,body").scrollTop(0)},createPageList(t){if(t>2){this.pageList=[];for(let e=1;e>0;e--)this.pageList.push(t-e);this.pageList.push(t);for(let e=1;e<=3;e++)this.pageList.push(t+e)}else this.pageList=[1,2,3,4,5]},fromNow:t=>v(t).fromNow(),fromNowDay(t){let e=new Date(this.globalProperties.time).getTime()-new Date(t).getTime(),s=Math.floor(e/1e3)/60/1440;return isNaN(s)&&(s=9999),s=Number(s.toFixed(0))},toNumber:t=>Number(parseFloat(t).toFixed(0)).toLocaleString(),toLS:t=>Number(t).toLocaleString(),toB:function(t){return(Number(t)/1e9).toFixed(1)},toFixed1:function(t){return Number(t).toFixed(1)},toFixed0:function(t){return Number(t).toFixed(0)},chageColor:function(t){let e="text-blue";return Number(t)<0&&(e="text-red"),e}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"accounts container"},[t._m(0),t._v(" "),s("div",{staticClass:"card mb-2"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[t._v("\n        Sort By\n        "),s("div",{staticClass:"form-group"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.sortBy,expression:"sortBy"}],staticClass:"custom-select",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.sortBy=e.target.multiple?s:s[0]},t.sortByChange]}},[s("option",{attrs:{value:"total_steem"}},[t._v("Total STEEM")]),t._v(" "),s("option",{attrs:{value:"active_steem"}},[t._v("Effective SP")]),t._v(" "),s("option",{attrs:{value:"num_reputation"}},[t._v("Reputation")])])])]),t._v(" "),s("div",{staticClass:"col-sm-4"},[t._v("\n        User Name\n        "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group mb-3"},[s("div",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"form-control ",attrs:{type:"text",id:"inputGroupFile02"},domProps:{value:t.userName},on:{keyup:t.nameKeyup,keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.nameEnter(e):null},input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-group-append"},[s("span",{staticClass:"btn btn-secondary",attrs:{id:""},on:{click:t.nameEnter}},[t._v("Search")])])])])]),t._v(" "),s("div",{staticClass:"col-sm-4"},[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center "},[t._v("\n            Accounts\n            "),s("div",{staticClass:"text-right"},[s("span",[t._v(t._s(t.toLS(t.accountCount.block_user_count))+" "),s("small",[t._v("steem")])]),s("br"),t._v(" "),s("span",[t._v(t._s(t.toLS(t.accountCount.db_user_count))+" "),s("small",[t._v("status")])])])])])])])])]),t._v(" "),t.showSpinner?s("div",{staticClass:"sk-spinner sk-spinner-pulse"}):t._e(),t._v(" "),t._l(t.users,function(e,a){return s("div",{staticClass:"card mb-2"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row justify-content-between",staticStyle:{padding:"0.1rem 1rem 0.5rem 1rem"}},[s("span",[s("b",[t._v("#"+t._s(e.rank))]),t._v(" "),s("img",{staticClass:"pthumbnail",attrs:{src:e.profile_image},on:{error:function(s){t.imageLoadOnError(e)}}}),t._v(" "),s("b",[t._v(t._s(e.name)+" ")])]),t._v(" "),s("span",{staticClass:"text-right",class:{"alive-2":e.lastVoteTime>7&&e.lastVoteTime<=31,"alive-1":e.lastVoteTime<=7,"alive-3":e.lastVoteTime>31}},[t._v("●")])]),t._v(" "),s("p",[t._v(t._s(e.about))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center "},[t._v("\n            Calculated\n            "),s("div",{staticClass:"text-right"},[s("span",[t._v(t._s(t.toLS(t.toFixed0(e.total_steem)))+" "),s("small",[t._v("STEEM (total)")])]),s("br"),t._v(" "),s("span",[t._v(t._s(t.toNumber(e.active_steem))+" "),s("small",[t._v("SP (effective)")])])])]),t._v(" "),s("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t._v("\n            Balances\n            "),s("div",{staticClass:"text-right"},[s("span",[t._v(t._s(t.toNumber(e.balance))+" "),s("small",[t._v("STEEM")])]),s("br"),t._v(" "),s("span",[t._v(t._s(t.toNumber(e.sp))+" "),s("small",[t._v("SP")])]),s("br"),t._v(" "),s("span",[t._v(t._s(t.toNumber(e.sbd_balance))+" "),s("small",[t._v("SBD")])])])]),t._v(" "),s("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t._v("\n              Reputation\n              "),s("span",[t._v(t._s(e.reputation)+" ")])])])]),t._v(" "),s("div",{staticClass:"col-sm-6"},[s("ul",{staticClass:"list-group"},["0"!=e.witnesses_voted_for?s("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t._v("\n            Witnesses voted count\n            "),s("span",[t._v(t._s(e.witnesses_voted_for))])]):t._e(),t._v(" "),""!=e.witnessVotes?s("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center"},[s("span",[s("small",[t._v(t._s(e.witnessVotes))])])]):t._e(),t._v(" "),"0"==e.witnesses_voted_for?s("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t._v("\n            Proxy\n              "),s("span",[t._v(t._s(e.proxy)+" ")])]):t._e(),t._v(" "),s("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t._v("\n            Proxied\n              "),s("span",[t._v(t._s(e.proxied)+" "),s("small",[t._v("STEEM")])])])])])])])])}),t._v(" "),s("div",[s("nav",{staticStyle:{"margin-top":"22px"},attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination justify-content-center"},t._l(t.pageList,function(e,a){return s("li",{staticClass:"page-item",class:{active:t.page==e}},[s("a",{staticClass:"page-link",on:{click:function(s){s.preventDefault(),t.pageClick(e)}}},[t._v(t._s(e))])])}))])]),t._v(" "),s("br")],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"list-group mb-2"},[e("li",{staticClass:"d-flex justify-content-between steem-card-title"},[e("p"),this._v(" "),e("span",[e("small",[this._v("Synced daily.")])])])])}]};var g=s("VU/8")(d,h,!1,function(t){s("GN2D")},"data-v-72d27c6a",null).exports,b=(s("PJh5"),{name:"steem",data:()=>({showSpinner:!1,userReport:{},postReport:{},globalProperties:{}}),computed:{},mounted(){console.log("mounted!!")},created:function(){localStorage.setItem("topMenu",""),this.$store.commit("topMenu","steemstatus"),this.showSpinner=!0,this.getGlobalProperties(),this.getPostReport(),this.getUserReport()},methods:{getGlobalProperties(){this.$http.get(this.$apiserver+"/steem/cache").then(t=>{this.globalProperties=t.data}).catch(t=>{console.log(t.response)})},getPostReport(){this.$http.get(this.$apiserver+"/postreport").then(t=>{let e=t.data,s=0;for(let t of e.post_counts)t.count>s&&(s=t.count);for(let t of e.post_counts)t.percent=Number((t.count/s*100).toFixed(1));e.post_count_max=s,this.postReport=e}).catch(t=>{console.log(t.response)})},getUserReport(){this.$http.get(this.$apiserver+"/userreport").then(t=>{let e=t.data,s=e.reputation_counts[e.reputation_counts.length-1].value,a=e.total_steem_counts[e.total_steem_counts.length-1].value,r=e.total_steem_counts[e.total_steem_counts.length-2].value,o=[];for(let t of e.reputation_counts)"26"!=t.key&&(t.percent=Number((t.value/s*100).toFixed(1)),o.push(t));e.reputation_counts=o;let i=[];for(let t of e.total_steem_counts)"100000"!=t.key&&"10000"!=t.key&&"1000"!=t.key&&"100"!=t.key||(t.percent=Number((t.value/r*100).toFixed(1)),i.push(t));e.total_steem_counts=i;let n=0;for(let t of e.account_created_counts)t.count>n&&(n=t.count);for(let t of e.account_created_counts)t.percent=Number((t.count/n*100).toFixed(0));let l=Number((e.witnesses_voted_for_count/a*100).toFixed(1)),c=Number((e.proxy_count/a*100).toFixed(1));e.witnesses_voted_for_count_percent=l,e.proxy_count_percent=c,e.total_vote_count=e.witnesses_voted_for_count+e.proxy_count,e.total_vote_percent=Number((l+c).toFixed(1)),e.totalSteem10=a,e.totalSteem50=r,e.reputationMax=s,e.accountCreatedCountMax=n,this.userReport=e,this.showSpinner=!1}).catch(t=>{this.showSpinner=!1,console.log(t.response)})},toNumber:t=>Number(parseFloat(t).toFixed(0)).toLocaleString(),toLS:t=>Number(t).toLocaleString(),toB:function(t){return(Number(t)/1e9).toFixed(1)},toFixed1:function(t){return Number(t).toFixed(1)},toFixed0:function(t){return Number(t).toFixed(0)},chageColor:function(t){let e="text-blue";return Number(t)<0&&(e="text-red"),e}}}),f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"steem container"},[s("div",{staticClass:"d-flex align-items-end flex-column bd-highlight mb-3"},[s("div",{staticClass:"mb-1 bd-highlight"},[t._v("Total STEEM : "+t._s(t.toNumber(t.globalProperties.current_supply)))]),t._v(" "),s("div",{staticClass:"mb-1 bd-highlight"},[t._v("Total SP : "+t._s(t.toNumber(t.globalProperties.total_sp)))]),t._v(" "),s("div",{staticClass:"mt-auto mb-1 bd-highlight"},[t._v("Total SBD : "+t._s(t.toNumber(t.globalProperties.current_sbd_supply)))])]),t._v(" "),t.postReport.post_counts?s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"card-body"},[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"d-flex justify-content-between steem-card-title"},[s("p",[s("b",[t._v("Posting Count")]),s("br"),s("small",[t._v(t._s(t.postReport.post_counts[0].date)+" ~ "+t._s(t.postReport.post_counts[t.postReport.post_counts.length-1].date))])]),t._v(" "),s("span",[t._v(t._s(t.toLS(t.postReport.post_count_max))+" ")])])]),t._v(" "),t._l(t.postReport.post_counts,function(e,a){return s("div",{staticClass:"progress progress-bar-square"},[s("div",{staticClass:"progress-bar progress-bar-striped bg-info bg-opacity8",style:{width:e.percent+"%"},attrs:{role:"progressbar","aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100"}},[s("span",{staticClass:"text-left"},[t._v(t._s(t.toLS(e.count)))])])])})],2)]):t._e(),t._v(" "),t.userReport.account_created_counts?s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"card-body"},[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"d-flex justify-content-between steem-card-title"},[s("p",[s("b",[t._v("New Accounts")]),s("br"),s("small",[t._v(t._s(t.userReport.account_created_counts[0].date)+" ~ "+t._s(t.userReport.account_created_counts[t.userReport.account_created_counts.length-1].date))])]),t._v(" "),s("span",[t._v(t._s(t.toLS(t.userReport.accountCreatedCountMax))+" ")])])]),t._v(" "),t._l(t.userReport.account_created_counts,function(e,a){return s("div",{staticClass:"progress progress-bar-square"},[s("div",{staticClass:"progress-bar progress-bar-striped bg-info bg-opacity8",style:{width:e.percent+"%"},attrs:{role:"progressbar","aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100"}},[s("span",{staticClass:"text-left"},[t._v(t._s(t.toLS(e.count)))])])])})],2)]):t._e(),t._v(" "),s("ul",{staticClass:"list-group mb-2"},[s("li",{staticClass:"d-flex justify-content-between steem-card-title"},[s("p"),t._v(" "),s("span",[s("small",[t._v("Synced "+t._s(t.userReport.from_now_hour)+" hours ago ")])])])]),t._v(" "),s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"card-body"},[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"d-flex justify-content-between steem-card-title"},[t._m(0),t._v(" "),s("span",[t._v(t._s(t.toLS(t.userReport.totalSteem10))+" ")])])]),t._v(" "),s("div",[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"d-flex justify-content-between progress-title"},[t._v("\n\t              Voted : "+t._s(t.toLS(t.userReport.witnesses_voted_for_count))+"  \n\t              "),s("span",[t._v(t._s(t.userReport.witnesses_voted_for_count_percent)+"% ")])])]),t._v(" "),s("div",{staticClass:"progress vertical"},[s("div",{staticClass:"progress-bar progress-bar-striped bg-info",style:{width:t.userReport.witnesses_voted_for_count_percent+"%"},attrs:{role:"progressbar","aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),s("div",[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"d-flex justify-content-between progress-title"},[t._v("\n\t              Proxied : "+t._s(t.toLS(t.userReport.proxy_count))+"  \n\t              "),s("span",[t._v(t._s(t.userReport.proxy_count_percent)+"% ")])])]),t._v(" "),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar progress-bar-striped bg-info",style:{width:t.userReport.proxy_count_percent+"%"},attrs:{role:"progressbar","aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),s("div",[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"d-flex justify-content-between progress-title"},[t._v("\n\t              Voted+Proxied : "+t._s(t.toLS(t.userReport.total_vote_count))+"  \n\t              "),s("span",[t._v(t._s(t.userReport.total_vote_percent)+"% ")])])]),t._v(" "),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar progress-bar-striped bg-info",style:{width:t.userReport.total_vote_percent+"%"},attrs:{role:"progressbar","aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100"}})])])])]),t._v(" "),s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"card-body"},[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"d-flex justify-content-between steem-card-title"},[t._m(1),t._v(" "),s("span",[t._v(t._s(t.toLS(t.userReport.totalSteem50))+" ")])])]),t._v(" "),t._l(t.userReport.total_steem_counts,function(e,a){return s("div",[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"d-flex justify-content-between progress-title"},[s("span",[t._v(t._s(t.toLS(e.key))),s("small",[t._v(" STEEM")]),t._v(" : "+t._s(t.toLS(e.value)))]),t._v(" "),s("span",[t._v(t._s(e.percent)+"% ")])])]),t._v(" "),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar progress-bar-striped bg-info",style:{width:e.percent+"%"},attrs:{role:"progressbar","aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100"}})])])})],2)]),t._v(" "),s("div",{staticClass:"card mb-2"},[s("div",{staticClass:"card-body"},[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"d-flex justify-content-between steem-card-title"},[t._m(2),t._v(" "),s("span",[t._v(t._s(t.toLS(t.userReport.reputationMax))+" ")])])]),t._v(" "),t._l(t.userReport.reputation_counts,function(e,a){return s("div",[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"d-flex justify-content-between progress-title"},[s("span",[t._v(t._s(e.key)+" : "+t._s(t.toLS(e.value)))]),t._v(" "),s("span",[t._v(t._s(e.percent)+"% ")])])]),t._v(" "),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar progress-bar-striped bg-info",style:{width:e.percent+"%"},attrs:{role:"progressbar","aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100"}})])])})],2)]),t._v(" "),t.showSpinner?s("div",{staticClass:"sk-spinner sk-spinner-pulse"}):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("Witness vote")]),e("br"),e("small",[this._v("Includes people with more than 10 steem.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("STEEM")]),e("br"),e("small",[this._v("Includes people with more than 50 steem.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("Reputation")]),e("br"),e("small",[this._v("Includes people with a reputation of 26 or higher.")])])}]};var j=s("VU/8")(b,f,!1,function(t){s("lQ8J")},"data-v-7c5036f5",null).exports,x=(s("PJh5"),{name:"witness",data:()=>({showSpinner:!1,global:{},witness:{}}),computed:{},mounted(){console.log("mounted!!")},created:function(){localStorage.setItem("topMenu","witness"),this.$store.commit("topMenu","witness"),this.showSpinner=!0,this.getWitness()},methods:{getWitness(){this.showSpinner=!0,this.$http.get(this.$apiserver+"/witness").then(t=>{let e=t.data,s=0;for(let t of e.witness){let s=3*(e.global.head_block_number-t.last_confirmed_block_num)/60/60;t.last_confirmed_block_h=s<.1?0:Number(s.toFixed(1)),t.votes_sp_percent=Number((t.votes_sp/e.global.total_sp*100).toFixed(1));let a=new Date(e.global.time),r=new Date(t.last_sbd_exchange_update),o=a.getTime()-r.getTime(),i=Math.floor(o/1e3)/60/60;i=Number(i.toFixed(1)),t.last_sbd_exchange_update_h=i;let n=t.running_version.replace(/\./gi,"");(n=Number(n))<=190&&(t.active=!1)}for(let t of e.witness)t.active&&(s++,t.active_rank=s);let a=new Date(e.global.time+".000Z"),r=new Date(e.witness[0].last_updated),o=a.getTime()-r.getTime(),i=Math.floor(o/1e3),n=Number((i/60).toFixed(1));n=n<0?"?":n,this.global={active_count:s,synced_m:n},this.witness=e.witness,this.showSpinner=!1}).catch(t=>{console.log(t.response),this.showSpinner=!1})},toNumber:t=>Number(parseFloat(t).toFixed(0)).toLocaleString(),toLS:t=>Number(t).toLocaleString(),toB:function(t){return(Number(t)/1e9).toFixed(1)},toFixed1:function(t){return Number(t).toFixed(1)},toFixed0:function(t){return Number(t).toFixed(0)},chageColor:function(t){let e="text-blue";return Number(t)<0&&(e="text-red"),e}}}),y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"witness container"},[s("ul",{staticClass:"list-group mb-2"},[s("li",{staticClass:"d-flex justify-content-between steem-card-title"},[s("p",[t._v("Active witness : "+t._s(t.global.active_count))]),t._v(" "),s("span",[s("small",[t._v("synced "+t._s(t.global.synced_m)+" minute ago ")])])])]),t._v(" "),t.showSpinner?s("div",{staticClass:"sk-spinner sk-spinner-pulse"}):t._e(),t._v(" "),s("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),s("tbody",t._l(t.witness,function(e,a){return s("tr",{class:{witness_disabled:!e.active}},[s("td",{staticStyle:{padding:"0.3rem 0.5rem 0.3rem 0rem"}},[s("b",[t._v(t._s(e.active_rank))])]),t._v(" "),s("td",{staticStyle:{padding:"0.3rem 1.1rem 0.3rem 0rem"}},[t._v(t._s(e.owner))]),t._v(" "),s("td",{staticClass:"text-right",staticStyle:{padding:"0.3rem 1.1rem 0.3rem 0rem"}},[t._v(t._s(t.toLS(e.votes_sp))),e.active?s("small",[s("br"),t._v(t._s(e.votes_sp_percent)+"%")]):t._e()]),t._v(" "),s("td",{staticClass:"text-right",staticStyle:{padding:"0.3rem 1.1rem 0.3rem 0rem"}},[t._v(t._s(e.last_confirmed_block_num)),e.active?s("span",{class:{"alive-2":e.last_confirmed_block_h>.1&&e.last_confirmed_block_h<=1,"alive-1":e.last_confirmed_block_h<=.1}},[s("br"),t._v(t._s(e.last_confirmed_block_h)),s("small",[t._v("h")])]):t._e()]),t._v(" "),s("td",{staticClass:"text-right",staticStyle:{padding:"0.3rem 1.1rem 0.3rem 0rem"}},[t._v("$"+t._s(parseFloat(e.sbd_exchange_rate.base))),e.active?s("span",{class:{"alive-1":e.last_sbd_exchange_update_h<=2}},[s("br"),t._v(t._s(e.last_sbd_exchange_update_h)),s("small",[t._v("h")])]):t._e()]),t._v(" "),s("td",{staticClass:"text-right",staticStyle:{padding:"0.3rem 1.1rem 0.3rem 0rem"}},[t._v(t._s(e.total_missed))]),t._v(" "),s("td",{staticClass:"text-right",staticStyle:{padding:"0.3rem 0rem"}},[t._v(t._s(e.running_version))])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticStyle:{padding:"0.5rem 0rem"}},[t._v("#")]),t._v(" "),s("th",{staticStyle:{padding:"0.5rem 0rem"}},[t._v("Witness")]),t._v(" "),s("th",{staticClass:"text-right",staticStyle:{padding:"0.5rem 1.1rem 0.5rem 0rem"}},[t._v("Votes"),s("small",[t._v("(SP)")])]),t._v(" "),s("th",{staticClass:"text-right",staticStyle:{padding:"0.5rem 1.1rem 0.5rem 0rem"}},[t._v("Last confirmed")]),t._v(" "),s("th",{staticClass:"text-right",staticStyle:{padding:"0.5rem 1.1rem 0.5rem 0rem"}},[t._v("Price feed")]),t._v(" "),s("th",{staticClass:"text-right",staticStyle:{padding:"0.5rem 1.1rem 0.5rem 0rem"}},[t._v("Missed B.")]),t._v(" "),s("th",{staticClass:"text-right",staticStyle:{padding:"0.5rem 0rem"}},[t._v("Version")])])])}]};var w=s("VU/8")(x,y,!1,function(t){s("TIn+")},"data-v-2543e0eb",null).exports;a.a.use(m.a);var C=new m.a({mode:"history",routes:[{path:"/",name:"steem",component:j},{path:"/accounts",name:"accounts",component:g},{path:"/witness",name:"witness",component:w}]}),S=s("mtWM"),N=s.n(S),k=new a.a;a.a.config.productionTip=!1,a.a.prototype.$http=N.a,a.a.prototype.$bus=k,a.a.prototype.$apiserver="http://119.205.235.236:3001",a.a.use(r.a);const F=new r.a.Store({state:{count:0,topMenu:"steemstatus"},mutations:{increment(t){t.count++},topMenu(t,e){t.topMenu=e}}});F.commit("increment"),console.log(F.state.count),new a.a({el:"#app",store:F,router:C,components:{App:_},template:"<App/>"})},"TIn+":function(t,e){},lQ8J:function(t,e){},nLBI:function(t,e){},uslO:function(t,e,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return s(o(t))}function o(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.428098f11f694ff09a8a.js.map