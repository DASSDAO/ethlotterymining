(function(t){function e(e){for(var a,r,s=e[0],l=e[1],u=e[2],p=0,m=[];p<s.length;p++)r=s[p],o[r]&&m.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"11f2":function(t,e,n){"use strict";var a=n("8b7c"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=n("bb71");n("da64");a["a"].use(o["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"appbackground"},[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("ETH")]),n("span",{staticClass:"font-weight-light"},[t._v("Lottery Mining")])]),n("v-spacer"),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{flat:"",target:"_blank"}},[n("span",{staticClass:"mr-2"},[t._v("Language")])])],1),n("v-content",{staticClass:"content"},[n("HomePage",{attrs:{bettingInfo:t.bettingInfo,lastLucyNum:t.lastLucyNum,awardAmt:t.awardAmt,winner:t.winner,relink:t.relink}})],1),n("Dialog",{attrs:{dialog:t.showDialog,dialogMsg:t.dialogMsg}})],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-top-info"},[n("div",{staticClass:"home-top-text"},[t._v("\n    Previous winning information\n    "),n("br"),t._v("Lucky number:\n    "),n("span",{staticClass:"text-wininfo"},[t._v(t._s(t.lastLucyNum))]),n("br"),t._v("Award amount:\n    "),n("span",{staticClass:"text-wininfo"},[t._v(t._s(t.awardAmt)+" ETH")]),n("br"),t._v("Winner:\n    "),n("span",{staticClass:"text-wininfo"},[t._v(t._s(t.winner))]),n("br")]),n("v-btn",{attrs:{color:"success"},on:{click:t.betting}},[t._v("Play with 0.1 ETH")]),n("br"),n("br"),n("div",[t._v("\n    My referral link:\n    "),n("span",{staticClass:"rlink-text"},[t._v(t._s(t.relink))])]),n("span",[t._v("Copy green url text above and recommend to enjoy permanent income!")]),n("BasicTable",{staticClass:"bettinginfo",attrs:{bettingInfo:t.bettingInfo}}),t._m(0),n("Dialog",{attrs:{dialog:t.showDialog,dialogMsg:t.dialogMsg}})],1)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"faq"},[n("span",{staticClass:"faq-title"},[t._v("What is ETH Lottery Mining?")]),n("br"),n("span",{staticClass:"faq-text"},[t._v("\n      It is a lottery mining game,You only need 0.1 ETH to play once.\n      The lottery automatically announce when it reaches more than 20 people per round.Then a lucky number between 0 and 19 will be generated automatically(Nobody can calculate this number in advance).\n      If you are this lucky number, you can get 0.8 ETH. More miraculous is if you recommend your referral link(the green url on the top) to others, you can enjoy his betting income forever.\n    ")]),n("br"),n("br"),n("span",{staticClass:"faq-title"},[t._v("How to calculate the recommended income?")]),n("br"),n("span",{staticClass:"faq-text"},[t._v("\n      For example: A recommended his referral link to B. Every time B play the game, A will get 0.025 ETH(0.1*0.5*0.5), so if B play 10 times ,A will get 0.25 ETH,\n      and B play 100 times ,A will get 2.5 ETH And so on. And if B recommended his referral link to C. in the same way,Every time C play the game ,B will get 0.025 ETH(0.1*0.5*0.5),in addition,\n      A will still get 0.015 ETH(0.1*0.5*0.3). There are four levels of referral rewards.Note: one person only can use one referral link, so you should recommend to different people.\n    ")]),n("br"),n("br"),n("span",{staticClass:"faq-title"},[t._v("When will i get my rewards?")]),n("br"),n("span",{staticClass:"faq-text"},[t._v("\n      You need to do notthing, Every time your referee played,the ETH will automatically transferred to you by the contract. Evert time? Yes!\n      that's so cool! You can go to bed and ETH still be transferred to you!\n    ")]),n("br"),n("br")])}],u=(n("a481"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.bettingInfo,pagination:t.pagination,"rows-per-page-items":t.rowsperpage},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{class:{"text-xs-left":t.textLeft,"text-green":e.item.ismy}},[t._v(t._s(e.item.number))]),n("td",{class:{"text-xs-left":t.textLeft,"text-green":e.item.ismy}},[t._v(t._s(e.item.betaker))]),n("td",{class:{"text-xs-left":t.textLeft,"text-green":e.item.ismy}},[t._v(t._s(e.item.time))])]}}])})}),c=[],p={props:["bettingInfo"],data:function(){return{textLeft:!0,headers:[{text:"Number",sortable:!1,value:"number"},{text:"Player",value:"betaker",sortable:!1},{text:"Time",value:"time",sortable:!1}],pagination:{rowsPerPage:20},rowsperpage:[5,10,15,20,25,{text:"$vuetify.dataIterator.rowsPerPageAll",value:-1}]}}},m=p,d=(n("11f2"),n("2877")),y=n("6544"),b=n.n(y),f=n("8fea"),v=Object(d["a"])(m,u,c,!1,null,"3a1f6ebc",null);v.options.__file="BasicTable.vue";var g=v.exports;b()(v,{VDataTable:f["a"]});var h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-xs-center"},[n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n        Tips\n      ")]),n("v-card-text",{domProps:{innerHTML:t._s(t.dialogMsg)}}),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          OK\n        ")])],1)],1)],1)],1)},w=[],_={data:function(){return{}},props:["dialog","dialogMsg"]},x=_,A=n("8336"),M=n("b0af"),k=n("99d9"),T=n("12b2"),E=n("169a"),C=n("ce7e"),P=n("9910"),G=Object(d["a"])(x,h,w,!1,null,null,null);G.options.__file="Dialog.vue";var D=G.exports;b()(G,{VBtn:A["a"],VCard:M["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:T["a"],VDialog:E["a"],VDivider:C["a"],VSpacer:P["a"]});n("6b54");var L,O,B=n("3452"),V=n.n(B),H={encrypt:function(t,e){e=e||"8dc615eE115d9D812173a5D887c73F0ae83B900F";var n=V.a.enc.Utf8.parse(e),a=V.a.enc.Utf8.parse(t),o=V.a.AES.encrypt(a,n,{mode:V.a.mode.ECB,padding:V.a.pad.Pkcs7});return o.toString()},decrypt:function(t,e){e=e||"8dc615eE115d9D812173a5D887c73F0ae83B900F";var n=V.a.enc.Utf8.parse(e),a=V.a.AES.decrypt(t,n,{mode:V.a.mode.ECB,padding:V.a.pad.Pkcs7});return V.a.enc.Utf8.stringify(a).toString()}},I=H,j=Object(d["a"])(I,L,O,!1,null,null,null);j.options.__file="utils.vue";j.exports,n("27ae");var N={components:{BasicTable:g,Dialog:D},props:["lastLucyNum","awardAmt","winner","bettingInfo","relink"],data:function(){return{showDialog:!1,dialogMsg:"You are using android phone, please open MetaMask in the explorer menu to confirm the transaction!",isAndroid:!1}},mounted:function(){var t=navigator.userAgent;this.isAndroid=t.indexOf("Android")>-1||t.indexOf("Adr")>-1},methods:{betting:function(){var t=this,e="0x0000000000000000000000000000000000000000";this.myGlobal.contract.methods.xRecommendMap(this.myGlobal.userAccount).call().then(function(n){var a="";if(document.referrer.indexOf("ethlotterymining.com")>0&&(a=document.referrer.replace("http://www.ethlotterymining.com/","")),n==e&&""!=a){var o=a;o!=t.myGlobal.userAccount?t.recommendAndPlay(o):t.gamePlay()}else t.gamePlay()})},recommendAndPlay:function(t){this.myGlobal.contract.methods.recommendAndPlay(t).send({from:this.myGlobal.userAccount,value:web3.toWei("0.1","ether")}).then(function(t){}),this.isAndroid&&(this.showDialog=!0)},gamePlay:function(){this.myGlobal.contract.methods.gamePlay().send({from:this.myGlobal.userAccount,value:web3.toWei("0.1","ether")}).then(function(t){}),this.isAndroid&&(this.showDialog=!0)},generatereferrallink:function(){}}},S=N,W=(n("a4b2"),Object(d["a"])(S,s,l,!1,null,"64298a64",null));W.options.__file="HomePage.vue";var F=W.exports;b()(W,{VBtn:A["a"]});var q={name:"App",components:{HomePage:F,Dialog:D},data:function(){return{showDialog:!1,dialogMsg:'Ethlotterymining is running on the Ethereum public blockchain, therefore you\'ll need the <a href="https://metamask.io/" target="_blank">MetaMask</a> browser extension to be able to use it with Chrome or FireFox Explorer',lastLucyNum:"--",awardAmt:"--",winner:"--",relink:"--",bettingInfo:[]}},mounted:function(){var t=navigator.userAgent.toUpperCase().indexOf("CHROME"),e=navigator.userAgent.toUpperCase().indexOf("FIREFOX");t||e||(this.showDialog=!0);var n=this;"undefined"!==typeof web3?(console.log("metamask checked"),this.myGlobal.web3Provider=new Web3(web3.currentProvider)):(this.showDialog=!0,console.log("metamask is not exist")),this.myGlobal.contract=new this.myGlobal.web3Provider.eth.Contract(this.myGlobal.contractabi,this.myGlobal.contractAddress),this.myGlobal.web3Provider.eth.getAccounts().then(function(t){n.myGlobal.userAccount=t[0]});setInterval(function(){n.myGlobal.web3Provider.eth.getAccounts().then(function(t){n.myGlobal.userAccount!==t[0]&&(n.myGlobal.userAccount=t[0]),n.relink="www.ethlotterymining.com/"+n.myGlobal.userAccount})},1e3);this.getPrevWinInfo(),this.getpastBettingInfo(),this.bettingListener(),this.lotteryEventListener()},methods:{lotteryEventListener:function(){var t=this;this.myGlobal.contract.events.LotteryEvent().on("data",function(e){var n=e.returnValues;t.lastLucyNum=n.lucyNumber,t.awardAmt=web3.fromWei(n.amt),t.winner=n.lucyer,t.winner===t.myGlobal.userAccount&&t.$toasted.show("Congratulations! You Win!",{theme:"bubble",position:"top-center",duration:3e3})}).on("error",console.error)},getPrevWinInfo:function(){var t=this;this.myGlobal.contract.methods.lucyNumber().call().then(function(e){t.lastLucyNum=e}),this.myGlobal.contract.methods.lastRewardAmt().call().then(function(e){t.awardAmt=web3.fromWei(e)}),this.myGlobal.contract.methods.winner().call().then(function(e){t.winner=e})},bettingListener:function(){var t=this;this.myGlobal.contract.events.BettingEvent().on("data",function(e){var n=e.returnValues;t.bettingInfo.unshift({number:n.number,betaker:n.better,time:t.convertUTCTimeToLocalTime(new Date(1e3*n.time)),ismy:n.better===t.myGlobal.userAccount&&"true"})}).on("error",console.error)},getpastBettingInfo:function(){var t=this;this.myGlobal.contract.getPastEvents("BettingEvent",{fromBlock:0,toBlock:"latest"}).then(function(e){for(var n=e.length-1;n>=0;n--)t.bettingInfo.push({number:e[n].returnValues.number,betaker:e[n].returnValues.better,time:t.convertUTCTimeToLocalTime(new Date(1e3*e[n].returnValues.time)),ismy:e[n].returnValues.better===t.myGlobal.userAccount&&"true"})})},convertUTCTimeToLocalTime:function(t){if(!t)return"-";function e(t){return t>9?t:"0"+t}var n=new Date(t),a=n.getFullYear(),o=e(n.getMonth()+1),i=e(n.getDate()),r=n.getHours(),s=r>=12?"PM":"AM";r=r>=12?r-12:r,r=e(r);var l=e(n.getMinutes()),u=a+"-"+o+"-"+i+" "+s+" "+r+":"+l;return u}}},U=q,R=(n("8a1e"),n("7496")),$=n("549c"),Y=n("71d9"),J=n("2a7f"),K=Object(d["a"])(U,i,r,!1,null,"49507efc",null);K.options.__file="App.vue";var X=K.exports;b()(K,{VApp:R["a"],VBtn:A["a"],VContent:$["a"],VSpacer:P["a"],VToolbar:Y["a"],VToolbarTitle:J["a"]});var z,Q,Z,tt,et,nt=n("acc3"),at="0xa4e792ebe25fadfbf505c8f64228a9c4686ba54d",ot={contractabi:nt,contractAddress:at,web3Provider:z,contract:Q,userAccount:Z},it=ot,rt=Object(d["a"])(it,tt,et,!1,null,null,null);rt.options.__file="Global.vue";var st=rt.exports,lt=n("a65d"),ut=n.n(lt);a["a"].use(ut.a),a["a"].prototype.myGlobal=st,a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(X)}}).$mount("#app")},"6dae":function(t,e,n){},"8a1e":function(t,e,n){"use strict";var a=n("dff3"),o=n.n(a);o.a},"8b7c":function(t,e,n){},a4b2:function(t,e,n){"use strict";var a=n("6dae"),o=n.n(a);o.a},acc3:function(t){t.exports=[{constant:!1,inputs:[],name:"gamePlay",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"ownerWithDraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"recommender",type:"address"}],name:"recommendAndPlay",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_isAward",type:"bool"},{name:"_awardAmt",type:"uint256"},{name:"_token",type:"address"}],name:"setAwardToken",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_onePlayAmtEth",type:"uint256"},{name:"_betsRequired",type:"uint256"}],name:"setBettingConfig",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"better",type:"address"},{indexed:!1,name:"number",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"BettingEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"lucyNumber",type:"uint256"},{indexed:!1,name:"amt",type:"uint256"},{indexed:!0,name:"lucyer",type:"address"}],name:"LotteryEvent",type:"event"},{constant:!0,inputs:[],name:"awardTokenAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"betsRequired",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"currentNumber",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isAwardToken",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"lastRewardAmt",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"lucyNumber",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"onePlayAmtEth",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"ownerIncome",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"rewardAmt",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenAwardAmt",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"winner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"xRecommendMap",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"}]},dff3:function(t,e,n){}});
//# sourceMappingURL=app.31286c4c.js.map