(this["webpackJsonpcowin-notif"]=this["webpackJsonpcowin-notif"]||[]).push([[0],{251:function(e,t,n){},252:function(e,t,n){},274:function(e,t){},276:function(e,t){},286:function(e,t){},288:function(e,t){},315:function(e,t){},316:function(e,t){},321:function(e,t){},323:function(e,t){},330:function(e,t){},349:function(e,t){},406:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then((function(e){console.log("registration",e),e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var r=n(23),c=n.n(r),l=(n(251),n(29)),h=n.n(l),u=n(50),d=n(113),p=n(114),f=n(244),b=n(241),g=(n(252),n(425)),y=n(424),v=n(428),m=n(427),w=n(245),j=n(431),k=n(433),O=n(429),x=n(69),S=n(432),C=n(430),A=n(133),T=n(56),I=n.n(T),W=n(426),_=n(159),P=n.n(_),B="https://cdn-api.co-vin.in/api",D=parseInt(localStorage.pollFreq)||560,Y=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,[{key:"req",value:function(e){var t={};return localStorage.token&&(t.authorization=localStorage.token),new Promise((function(n,a){I.a.get(e,t).then((function(e){return n(e.data)})).catch((function(e){return a(e)}))}))}},{key:"init",value:function(e,t){var n=this,a={};return localStorage.token&&(a.authorization=localStorage.token),new W.a((function(i){var o=n.req.bind(n);n.watcher=setInterval((function(){o("".concat("https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin","?pincode=").concat(e,"&date=").concat(t),a).then((function(e){i.next(e)})).catch((function(e){i.error(e)}))}),D)}))}},{key:"initDist",value:function(e,t){var n=this;return new W.a((function(a){var i=n.req.bind(n),o=function(){i("".concat("https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict","?district_id=").concat(e,"&date=").concat(t)).then((function(e){a.next(e)})).catch((function(e){a.error(e)}))};o(),n.watcher=setInterval(o,D)}))}},{key:"clearWatch",value:function(){console.log(this),clearInterval(this.watcher)}},{key:"clearAuthWatch",value:function(){clearInterval(this.authWatcher)}},{key:"generateOtp",value:function(){var e=Object(u.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP",{mobile:t,secret:"U2FsdGVkX19mD56KTNfQsZgXJMwOG7u/6tuj0Qvil1LEjx783oxHXGUTDWYm+XMYVGXPeu+a24sl5ndEKcLTUQ=="}).then((function(e){return e.data})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"verifyOtp",value:function(){var e=Object(u.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=P.a.SHA256(t).toString(P.a.enc.Hex),console.log(a),e.next=4,I.a.post("https://cdn-api.co-vin.in/api/v2/auth/validateMobileOtp",{otp:a,txnId:n}).then((function(e){return console.log(e),e.data})).catch((function(e){return console.log(e)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getBenefeciaries",value:function(){var e=Object(u.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries",{headers:{"content-type":"application/json",authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.data.beneficiaries})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"book",value:function(){var e=Object(u.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("https://cdn-api.co-vin.in/api/v2/appointment/schedule",t,{headers:{"content-type":"application/json",authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.data})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"trackAuth",value:function(e){var t=this;return new W.a((function(n){var a=t.getBenefeciaries.bind(t);t.authWatcher=setInterval((function(){a(e).then((function(e){n.next(e)})).catch((function(e){n.next("err")}))}),1e4)}))}},{key:"getStates",value:function(){var e=Object(u.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.a.get("".concat(B,"/v2/admin/location/states")).then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getDistricts",value:function(){var e=Object(u.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.a.get("".concat(B,"/v2/admin/location/districts/").concat(t)).then((function(e){return e.data.districts})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCaptcha",value:function(){var e=Object(u.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("https://cdn-api.co-vin.in/api/v2/auth/getRecaptcha",{},{headers:{"content-type":"application/json",authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.data})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),N=n.p+"static/media/wallet.bc6f0cd6.png",z=n.p+"static/media/OfflineMerchant.b9f1ab6b.png",M=n(160),E=n(161),L=n.n(E),V=n(412),q=n(413),F=n(414),G=n(415),U=n(416),H=n(417),R=n(418),X=n(419),J=n(420),K=n(421),Q=n(422),Z=n(423),$=n(5),ee=g.a.Text,te=y.a.TabPane,ne=new Y,ae=v.a.Search,ie=m.a.Option,oe={text:"Use this link to track vaccine availability and automatically book a slot for you and your family. The app will automatically send OTPs and speak out to tell you to enter security code at the time of booking. ",title:"Automated vaccine booking and availability tracking",tags:["covid19vaccines","covid19help","vaccination2021","covid19india"],url:window.location.href.indexOf("localhost")?"https://yashwanthm.github.io/cowin-vaccine-booking/":window.location.href},se=document.getElementsByTagName("meta"),re=se[se.length-1].getAttribute("build-version"),ce=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).bookingError=function(e,t){w.a.error({message:e,description:t})},a.bookingIntervals=[],setInterval((function(){a.bookingIntervals.map((function(e){clearInterval(e)}))}),1e3);var i={isWatchingAvailability:!1,vaccineType:"ANY",bookingInProgress:!1,isAuthenticated:!!localStorage.token,minAge:18,districtId:null,stateId:null,beneficiaries:[],selectedBeneficiaries:[],otpData:{txnId:null},vaccineCalendar:{},zip:null,enableOtp:!1,otp:null,mobile:null,feeType:"Any",token:localStorage.token||null,selectedTab:"1",dates:[],states:[],dose:1,districs:[],session:null,showCaptcha:!1,captcha:null,bookingCaptcha:null,bookingCenter:null,showSuccessModal:!1};return localStorage.appData&&(i=Object.assign(i,JSON.parse(localStorage.appData))),localStorage.token&&(i.token=localStorage.token,i.isAuthenticated=!0,i.enableOtp=!1),a.state=i,a}return Object(p.a)(n,[{key:"waitForOtp",value:function(){var e=Object(u.a)(h.a.mark((function e(){var t,n=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("waiting for otp"),this.ac&&this.ac.abort(),!("OTPCredential"in window)){e.next=17;break}return console.log("Waiting for SMS. Try sending yourself a following message:\n\nYour verification code is: 123ABC\n\n@whatwebcando.today #123ABC"),e.prev=4,this.ac=new AbortController,e.next=8,navigator.credentials.get({otp:{transport:["sms"]},signal:this.ac.signal}).then((function(e){console.log("otp is ",e),console.log("otp, ".concat(e)),n.setState({otp:e})})).catch((function(e){console.log("ssss ".concat(e))}));case 8:t=e.sent,console.log(t),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:e.next=18;break;case 17:console.log("Web OTP API not supported");case 18:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"getBeneficiaries",value:function(){var e=this;ne.getBenefeciaries(this.state.token).then((function(t){e.setState({beneficiaries:t},(function(){e.setStorage()}))})).catch((function(t){console.log(t),delete localStorage.token,e.setState({isAuthenticated:!1,token:null,enableOtp:!1},(function(){e.state.mobile}))}))}},{key:"speak",value:function(e){var t=new SpeechSynthesisUtterance;t.lang="en-UK",t.volume=1,t.rate=1,t.pitch=1,t.text=e,window.speechSynthesis.speak(t)}},{key:"componentDidMount",value:function(){var e=this;this.notifSound=document.getElementById("notif");var t=localStorage.token||this.state.token;t&&(this.getBeneficiaries(),this.trackAuth(t)),ne.getStates().then((function(t){e.setState({states:t.states},(function(){e.selectState(e.state.stateId),e.selectDistrict(e.state.districtId)}))})).catch((function(e){console.log(e)}));try{Notification.requestPermission((function(e){console.log("Notification permission status:",e)}))}catch(a){console.log(a)}var n={title:"Vaccine Notifications Enabled",body:"You now have notifications active for Covid vaccine availability",native:!0,vibrate:[300,100,400]};try{Notification.requestPermission((function(e){console.log("result is",e),"granted"===e&&navigator.serviceWorker.ready.then((function(e){console.log("registration i s",e),e.showNotification(n.title,n)}))})),new Notification(n.title,n)}catch(a){console.log(a)}}},{key:"setStorage",value:function(){var e=Object.assign({},this.state);delete e.enableOtp,delete e.vaccineCalendar,delete e.isWatchingAvailability,localStorage.appData=JSON.stringify(e)}},{key:"componentWillUnmount",value:function(){this.setStorage(),this.watcher&&this.watcher.unsubscribe()}},{key:"handleNotification",value:function(){var e=this,t=this.state.vaccineCalendar.centers,n=1;this.state.selectedBeneficiaries&&Array.isArray(this.state.selectedBeneficiaries)&&this.state.selectedBeneficiaries.length>0&&(n=this.state.selectedBeneficiaries.length);var a=!1;t.map((function(t){t.sessions.map((function(i){if(parseInt(i.min_age_limit)===e.state.minAge&&parseInt(i.available_capacity)>=n&&!e.state.bookingInProgress){var o=e.state.vaccineType;if("ANY"!==o&&o!==i.vaccine)return;if(e.state.feeType&&"Any"!==e.state.feeType&&e.state.feeType!==t.fee_type)return;if(1===parseInt(e.state.dose)&&i.available_capacity_dose1<n)return;if(2===parseInt(e.state.dose)&&i.available_capacity_dose2<n)return;var s={title:t.name,body:"".concat(t.pincode," ").concat(t.address," has ").concat(i.available_capacity," on ").concat(i.date),vibrate:[300,100,400],native:!0};try{Notification.requestPermission((function(e){"granted"===e&&navigator.serviceWorker.ready.then((function(e){e.showNotification(s.message,s)}))})),new Notification(s.title,s)}catch(r){console.log(r)}e.speak("Vaccines available at ".concat(t.name)),e.state.isAuthenticated&&e.setState({bookingInProgress:!0,bookingCenter:t,bookingSession:i},(function(){e.state.bookingCaptcha||a||(e.getCaptcha(),a=!0,e.clearWatch())}))}}))}))}},{key:"getCaptcha",value:function(){var e=this;window.speechSynthesis.cancel(),this.setState({bookingInProgress:!0},(function(){ne.getCaptcha().then((function(t){e.speak("Enter captcha to proceed with booking. Vaccines available at ".concat(e.state.bookingCenter.name)),e.setState({captcha:t.captcha,showCaptcha:!0},(function(){}))})).catch((function(t){console.log("error getting captcha ",t),e.setState({bookingInProgress:!1})}))}))}},{key:"book",value:function(){var e=Object(u.a)(h.a.mark((function e(t){var n,a,i,o=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("book"),n=[],a=this.state.bookingSession,0!==this.state.selectedBeneficiaries.length){e.next=8;break}return this.state.isAuthenticated||this.setState({enableOtp:!0},(function(){o.generateOtp()})),e.abrupt("return");case 8:this.state.selectedBeneficiaries.map((function(e){n.push(e.beneficiary_reference_id)}));case 9:i={dose:this.state.dose?parseInt(this.state.dose):1,session_id:a.session_id,slot:a.slots[Math.floor(Math.random()*a.slots.length)],beneficiaries:n,captcha:this.state.bookingCaptcha},ne.book(i,this.state.token).then((function(e){console.log("Booking success ",e.appointment_id),o.clearWatch(),o.setState({bookingInProgress:!1,appointment_id:JSON.stringify(e),showSuccessModal:!0})})).catch((function(e){o.setState({bookingInProgress:!1,session:null,bookingCenter:null,captcha:null,bookingSession:null,bookingCaptcha:null,showCaptcha:!1});var t="Booking did not get through. ";o.bookingError(t,"The availability probably ran out before you could take an action. You can refresh if needed. Otherwise the app will continue to look for slots."),console.log(t)}));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"initWatch",value:function(e){var t=this;this.setStorage(),this.setState({isWatchingAvailability:!0}),"1"===this.state.selectedTab?this.watcher=ne.initDist(this.state.districtId,L()().format("DD-MM-YYYY")).subscribe({next:function(e){t.setState({vaccineCalendar:e},(function(){t.handleNotification()}))},error:function(e){console.error("something wrong occurred: "+e)},complete:function(){console.log("done"),this.setState({isWatchingAvailability:!1})}}):this.watcher=ne.init(this.state.zip,L()().format("DD-MM-YYYY")).subscribe({next:function(e){t.setState({vaccineCalendar:e},(function(){t.handleNotification(),t.setStorage()}))},error:function(e){console.error("something wrong occurred: "+e)},complete:function(){console.log("done"),this.setState({isWatchingAvailability:!1})}})}},{key:"trackAuth",value:function(){var e=this;console.log("trackauth"),!1!==this.state.isAuthenticated&&(this.authWatch=ne.trackAuth(this.state.token).subscribe({next:function(t){Array.isArray(t)?e.setState({beneficiaries:t}):(console.log("asasad"),ne.clearAuthWatch(),delete localStorage.token,e.setState({isAuthenticated:!1,token:null},(function(){e.state.isWatchingAvailability&&(e.generateOtp(),e.speak("Session expired!"))})))},error:function(t){console.error("something wrong occurred: "+t),e.speak("Session expired!"),ne.clearAuthWatch(),delete localStorage.token,e.setState({isAuthenticated:!1,token:null},(function(){e.state.isWatchingAvailability&&!e.state.enableOtp&&(e.generateOtp(),e.speak("Session expired!"))}))},complete:function(){console.log("done"),e.setState({isWatchingAvailability:!1})}}))}},{key:"clearWatch",value:function(){ne.clearWatch(),this.setState({isWatchingAvailability:!1})}},{key:"renderTable",value:function(e){return Object($.jsxs)("div",{style:{maxWidth:"100%",overflow:"scroll"},children:[Object($.jsx)("h2",{style:{marginTop:10},children:"Vaccination Centers & Availability Info"}),Object($.jsx)(ee,{type:"secondary",children:"You will see all kinds of availability below. But, the notifications and bookings will be done for your selected preferences only."}),Object($.jsx)("table",{style:{marginTop:10},children:e.centers.map((function(e){return e.sessions.map((function(e){e.available_capacity>0&&!1})),Object($.jsxs)("tr",{children:[Object($.jsxs)("td",{children:[Object($.jsx)("h3",{children:e.name}),Object($.jsxs)("b",{children:["Fee: ",e.fee_type]}),Object($.jsx)("br",{}),e.block_name,", ",e.address,", ",e.pincode,"."]}),e.sessions.map((function(e){return Object($.jsxs)("td",{children:[Object($.jsx)("h4",{children:e.date}),Object($.jsx)("p",{children:e.vaccine}),Object($.jsx)("div",{children:parseInt(e.available_capacity)>0?"".concat(e.available_capacity," shots available for ").concat(e.min_age_limit,"+"):"No Availability ".concat(e.min_age_limit)}),parseInt(e.available_capacity>0)?Object($.jsxs)("div",{children:[Object($.jsx)("b",{children:"Available Slots"}),e.slots.map((function(e){return Object($.jsx)(j.a,{children:e})}))]}):null]},e.session_id)}))]},e.center_id)}))})]})}},{key:"setMinAge",value:function(e){this.setState({minAge:e.target.value})}},{key:"generateOtp",value:function(){var e=this;this.setState({enableOtp:!0},(function(){ne.generateOtp(e.state.mobile).then((function(t){e.speak("One Time Password has been sent to your phone. Please enter."),e.setState({otpData:t,enableOtp:!0})})).catch((function(t){console.log(t),e.setState({enableOtp:!1})}))}))}},{key:"verifyOtp",value:function(){var e=this;ne.verifyOtp(this.state.otp,this.state.otpData.txnId).then((function(t){localStorage.token=t.token,e.setState({token:t.token,isAuthenticated:!0,enableOtp:!1},(function(){e.setStorage(),e.getBeneficiaries(),e.trackAuth(t.token)}))})).catch((function(t){console.log(t),e.state.isAuthenticated&&(delete localStorage.appData,delete localStorage.token,e.setState({token:null,isAuthenticated:!1}))}))}},{key:"selectState",value:function(e){var t=this;this.setState({stateId:e},(function(){ne.getDistricts(e).then((function(e){t.setState({districs:e})})).catch((function(e){console.log(e)}))}))}},{key:"selectDistrict",value:function(e){this.setState({districtId:e},(function(){}))}},{key:"renderCaptcha",value:function(){var e=this;return Object($.jsxs)("div",{children:[Object($.jsx)("h2",{style:{marginTop:10,marginBottom:0},children:"Enter Captcha"}),Object($.jsxs)(j.a,{children:[Object($.jsx)(k.a,{children:Object(M.a)(this.state.captcha)}),Object($.jsx)(ae,{placeholder:"Enter Captcha",allowClear:!0,style:{width:300,marginTop:10},enterButton:"Submit & Book",size:"large",onSearch:function(t){console.log(t),e.setState({bookingCaptcha:t},(function(){e.book()}))}})]})]})}},{key:"renderModal",value:function(){var e=this;if(this.state.bookingSession&&this.state.bookingCenter)return Object($.jsxs)(O.a,{mask:!0,maskClosable:!1,title:"Congrats!",visible:this.state.showSuccessModal,onOk:function(t){e.setState({showSuccessModal:!1},(function(){e.messagesEnd.scrollIntoView({behavior:"smooth"})}))},onCancel:function(t){e.messagesEnd.scrollIntoView({behavior:"smooth"}),e.setState({bookingInProgress:!1,showSuccessModal:!1,bookingCenter:null,bookingSession:null,captcha:null,bookingCaptcha:null,showCaptcha:!1})},children:[Object($.jsxs)("p",{children:["Your vaccination slot is booked for selected beneficiaries at"," ",this.state.bookingCenter.name,", ",this.state.bookingCenter.block_name,", ",this.state.bookingCenter.address,","," ",this.state.bookingCenter.district_name,","," ",this.state.bookingCenter.state_name,","," ",this.state.bookingCenter.pincode]}),Object($.jsxs)("p",{children:["Your appointment id is ",this.state.appointment_id]}),Object($.jsxs)("p",{children:["You can login into"," ",Object($.jsx)("a",{href:"https://www.cowin.gov.in/home",target:"_blank",rel:"noreferrer",children:"Cowin"})," ","to see details of your vaccincation slot."]}),Object($.jsx)("h3",{children:"If you have liked using this app, please consider donating and sharing a word around."})]})}},{key:"renderShare",value:function(){return Object($.jsxs)("div",{children:[Object($.jsx)(V.a,{url:oe.url,quote:oe.text,hashtag:oe.tags[0],className:"Demo__some-network__share-button",children:Object($.jsx)(q.a,{size:48,round:!0})}),Object($.jsx)(F.a,{url:oe.url,title:oe.title,className:"Demo__some-network__share-button",children:Object($.jsx)(G.a,{size:48,round:!0})}),Object($.jsx)(U.a,{url:oe.url,title:oe.text,separator:":: ",className:"Demo__some-network__share-button",children:Object($.jsx)(H.a,{size:48,round:!0})}),Object($.jsx)(R.a,{url:oe.url,summary:oe.text,className:"Demo__some-network__share-button",children:Object($.jsx)(X.a,{size:48,round:!0})}),Object($.jsx)(J.a,{url:oe.url,title:oe.text,windowWidth:660,windowHeight:460,className:"Demo__some-network__share-button",children:Object($.jsx)(K.a,{size:48,round:!0})}),Object($.jsx)(Q.a,{url:oe.url,title:oe.text,className:"Demo__some-network__share-button",children:Object($.jsx)(Z.a,{size:48,round:!0})})]})}},{key:"renderDonate",value:function(){return Object($.jsxs)("div",{children:[Object($.jsx)("h3",{style:{marginTop:15,marginBottom:0},children:"Donate"}),Object($.jsx)("img",{style:{width:300},src:z,alt:"PayTM QR Code"}),Object($.jsxs)("div",{children:[Object($.jsx)("p",{style:{marginTop:10,marginBottom:0,fontWeight:"bold"},children:"Crypto Wallet"}),Object($.jsx)("img",{style:{width:100},src:N,alt:"crypto-wallet"})]})]})}},{key:"render",value:function(){var e=this,t=this.state.vaccineCalendar,n=this.state.isAuthenticated,a=this.state,i=a.beneficiaries,o=a.selectedBeneficiaries;return Object($.jsxs)("div",{className:"App",children:[Object($.jsx)("audio",{id:"notif",children:Object($.jsx)("source",{src:"https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"})}),Object($.jsxs)("header",{className:"App-header",children:[Object($.jsx)("h1",{children:"Covid-19 automatic vaccine bookings and availability tracking in India"}),Object($.jsxs)("p",{children:["This web-app can continously track for availability of vaccine and proceed with booking on your behalf if you are logged in. ",Object($.jsx)("br",{})]}),Object($.jsxs)("p",{style:{color:"#555"},children:["Please register on"," ",Object($.jsx)("a",{href:"https://www.cowin.gov.in/home",target:"_blank",rel:"noreferrer",children:"Cowin"}),", ","add beneficiaries and then, come back here for automated bookings.",Object($.jsx)("br",{}),"For automatic bookings, login, select beneficiaries, keep feeding in OTPs every few mins. When there's availability, the app will automatically attempt for a booking based on your preferences. When there's availability, you will have to enter captcha code. The app will speak out for any inputs(OTP and Captcha) required. For more information, please see the"," ",Object($.jsx)("a",{href:"https://github.com/yashwanthm/cowin-vaccine-booking/wiki/Usage-Guide",target:"_blank",rel:"noreferrer",children:"Help/Usage Guide"})]})]}),Object($.jsx)(j.a,{children:Object($.jsxs)(k.a,{children:[n?null:Object($.jsxs)("div",{children:[Object($.jsx)("h2",{children:"Login"}),this.state.enableOtp?null:Object($.jsx)(ae,{placeholder:this.state.mobile?this.state.mobile:"Mobile Number",allowClear:!0,defaultValue:this.state.mobile||null,type:"number",enterButton:"Generate OTP",size:"large",onSearch:function(t){e.setState({mobile:""===t?e.state.mobile:t,enableOtp:!0},(function(){e.generateOtp()}))}}),this.state.enableOtp?Object($.jsxs)("span",{children:[Object($.jsx)(ae,{placeholder:"Enter OTP",allowClear:!0,type:"number",enterButton:"Submit",size:"large",onSearch:function(t){e.setState({otp:t},(function(){e.verifyOtp()}))}}),Object($.jsx)(x.a,{danger:!0,onClick:function(t){e.setState({enableOtp:!1})},type:"link",children:"Cancel"})]}):null]}),n?Object($.jsxs)("div",{children:[Object($.jsx)("h2",{children:"Beneficiaries"}),0===i.length?Object($.jsxs)("p",{children:["You do not have any benificiares added yet. Please login to"," ",Object($.jsx)("a",{href:"https://www.cowin.gov.in/home",target:"_blank",rel:"noreferrer",children:"Cowin"})," ","and add beneficiaries"]}):Object($.jsx)("p",{children:"Select beneficiaries to book a slot automatically when there's availability. This app can continuously track availability and make a booking."}),this.state.beneficiaries.map((function(t){return Object($.jsx)(j.a,{children:Object($.jsx)(S.a,{disabled:e.state.isWatchingAvailability,checked:-1!==o.findIndex((function(e){return e.beneficiary_reference_id===t.beneficiary_reference_id})),onClick:function(n){var a=e.state.selectedBeneficiaries,i=a.findIndex((function(e){return e.beneficiary_reference_id===t.beneficiary_reference_id}));-1===i?a.push(t):a.splice(i,1),e.setState({selectedBeneficiaries:a})},children:t.name})})}))]}):null,Object($.jsx)("h2",{style:{marginTop:14,marginBottom:0},children:"Booking Preferences"}),Object($.jsxs)(j.a,{style:{marginTop:10},children:[Object($.jsx)("h3",{style:{marginTop:10,marginBottom:0},children:"Vaccine Type"}),Object($.jsxs)(C.a.Group,{style:{marginTop:12,marginLeft:10},onChange:function(t){e.setState({vaccineType:t.target.value})},value:this.state.vaccineType,disabled:this.state.isWatchingAvailability,children:[Object($.jsx)(C.a,{value:"ANY",children:"Any"}),Object($.jsx)(C.a,{value:"COVAXIN",children:"Covaxin"}),Object($.jsx)(C.a,{value:"COVISHIELD",children:"Covishield"})]})]}),Object($.jsxs)(j.a,{style:{marginTop:10},children:[Object($.jsx)("h3",{style:{marginTop:10,marginBottom:0},children:"Age Group"}),Object($.jsxs)(C.a.Group,{style:{marginTop:12,marginLeft:10},onChange:this.setMinAge.bind(this),value:this.state.minAge,disabled:this.state.isWatchingAvailability,children:[Object($.jsx)(C.a,{value:18,children:"18 to 45 Years"}),Object($.jsx)(C.a,{value:45,children:"45+ Years"})]})]}),Object($.jsxs)(j.a,{style:{marginTop:10},children:[Object($.jsx)("h3",{style:{marginTop:10,marginBottom:0},children:"Fee Type"}),Object($.jsxs)(C.a.Group,{style:{marginTop:12,marginLeft:10},onChange:function(t){e.setState({feeType:t.target.value})},value:this.state.feeType,disabled:this.state.isWatchingAvailability,children:[Object($.jsx)(C.a,{value:"Any",children:"Any"}),Object($.jsx)(C.a,{value:"Free",children:"Free"}),Object($.jsx)(C.a,{value:"Paid",children:"Paid"})]})]}),Object($.jsxs)(j.a,{style:{marginTop:5},children:[Object($.jsx)("h3",{style:{marginTop:10,marginBottom:0},children:"Dose"}),Object($.jsxs)(C.a.Group,{style:{marginTop:12,marginLeft:10},onChange:function(t){e.setState({dose:t.target.value})},defaultValue:1,value:this.state.dose,disabled:this.state.isWatchingAvailability,children:[Object($.jsx)(C.a,{value:1,children:"Dose 1"}),Object($.jsx)(C.a,{value:2,children:"Dose 2"})]})]}),Object($.jsx)("h2",{style:{marginTop:15,marginBottom:0},children:"Select Location for Tracking Availability"}),Object($.jsxs)(y.a,{defaultActiveKey:this.state.selectedTab||"1",onChange:function(t){e.setState({selectedTab:t})},children:[Object($.jsxs)(te,{tab:"Track By District",children:[Object($.jsx)(m.a,{style:{width:234},size:"large",defaultValue:this.state.stateId,disabled:this.state.isWatchingAvailability,onChange:this.selectState.bind(this),placeholder:"Select State",children:this.state.states.map((function(e){return Object($.jsx)(ie,{value:e.state_id,children:e.state_name},e.state_id)}))}),Object($.jsx)(m.a,{style:{width:234},defaultValue:this.state.districtId,disabled:this.state.isWatchingAvailability,size:"large",onChange:function(t){e.selectDistrict(t)},placeholder:"Select District",children:this.state.districs.map((function(e){return Object($.jsx)(ie,{value:e.district_id,children:e.district_name},e.district_id)}))}),Object($.jsx)(x.a,{type:"primary",size:"large",loading:this.state.isWatchingAvailability,onClick:function(t){return e.initWatch()},children:this.state.isWatchingAvailability?"Tracking":this.state.isAuthenticated?"Track Availability & Book":"Track Availability"}),this.state.isWatchingAvailability?Object($.jsx)(x.a,{type:"primary",icon:Object($.jsx)(A.a,{}),size:"large",danger:!0,onClick:this.clearWatch.bind(this),children:"Stop"}):null]},1),Object($.jsx)(te,{tab:"Track By Pincode",children:Object($.jsxs)(j.a,{children:[Object($.jsx)(ae,{disabled:this.state.isWatchingAvailability,placeholder:this.state.zip?this.state.zip:"Enter your area pincode",allowClear:!0,defaultValue:this.state.zip||null,type:"number",enterButton:this.state.isWatchingAvailability?"Tracking":this.state.isAuthenticated?"Track Availability & Book":"Track Availability",size:"large",loading:this.state.isWatchingAvailability,onSearch:function(t){e.setState({zip:t,isWatchingAvailability:!0},(function(){e.initWatch()}))}}),this.state.isWatchingAvailability?Object($.jsx)(x.a,{type:"primary",icon:Object($.jsx)(A.a,{}),size:"large",danger:!0,onClick:this.clearWatch.bind(this),children:"Stop"}):null]})},2)]})]})}),this.state.showCaptcha?this.renderCaptcha():null,t&&t.centers?this.renderTable(t):null,Object($.jsx)("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}),this.renderDonate(),Object($.jsx)("h3",{style:{marginTop:15,marginBottom:0},children:"Share"}),this.renderShare(),Object($.jsx)("div",{style:{marginTop:10}}),Object($.jsxs)(ee,{code:!0,children:["Build last updated at: ",re]}),this.renderModal(),Object($.jsx)("div",{children:Object($.jsxs)(j.a,{children:[Object($.jsx)(x.a,{type:"link",href:"https://github.com/yashwanthm/cowin-vaccine-booking/issues",rel:"noreferrer",target:"_blank",children:"Report an issue"})," ",Object($.jsx)(x.a,{type:"link",href:"https://github.com/yashwanthm/cowin-vaccine-booking/",rel:"noreferrer",target:"_blank",children:"Git Repo is here"}),Object($.jsx)(x.a,{type:"link",onClick:function(t){e.setState({showPrivacyPolicy:!0})},children:"Privacy Policy"})]})}),Object($.jsx)(O.a,{title:"",okText:"Close",footer:[Object($.jsx)(x.a,{onClick:function(t){e.setState({showPrivacyPolicy:!1})},children:"Okay"},"back")],visible:this.state.showPrivacyPolicy,onOk:function(t){e.setState({showPrivacyPolicy:!1})},children:Object(M.a)('<h2>Privacy Policy</h2><p>Your privacy is important to us. It is Cowin Automatic Vaccine Booking&#39;s policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, <a href="https://yashwanthm.github.io/cowin-vaccine-booking/">https://yashwanthm.github.io/cowin-vaccine-booking/</a>, and other sites we own and operate.</p><p>This policy is effective as of 13 May 2021 and was last updated on 13 May 2021.</p><h3>Information We Collect</h3><p>Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.</p><h4>Log Data</h4><p>When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device\u2019s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter.</p><p>Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.</p><h4>Personal Information</h4><p>We may ask for personal information which may include one or more of the following:</p><ul><li>Phone/mobile number</li></ul><h4>Legitimate Reasons for Processing Your Personal Information</h4><p>We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you.</p><h4>Collection and Use of Information</h4><p>We may collect personal information from you when you do any of the following on our website:</p><ul><li>Use a mobile device or web browser to access our content</li><li>Contact us via email, social media, or on any similar technologies</li><li>When you mention us on social media</li></ul><p>We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:</p><p>Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources.</p><h4>Security of Your Personal Information</h4><p>When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.</p><p>Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach.</p><p>You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services.</p><h4>How Long We Keep Your Personal Information</h4><p>We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you.</p><p>However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.</p><h3>Children\u2019s Privacy</h3><p>We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13.</p><h3>International Transfers of Personal Information</h3><p>The personal information we collect is stored and/or processed where we or our partners, affiliates, and third-party providers maintain facilities. Please be aware that the locations to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries: (i) we will perform those transfers in accordance with the requirements of applicable law; and (ii) we will protect the transferred personal information in accordance with this privacy policy.</p><h3>Your Rights and Controlling Your Personal Information</h3><p>You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy. You retain the right to request details of any personal information we hold about you.</p><p>If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person\u2019s consent to provide the personal information to us.</p><p>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time. We will provide you with the ability to unsubscribe from our email-database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity.</p><p>If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.</p><p>If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.</p><h3>Limits of Our Policy</h3><p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.</p><h3>Changes to This Policy</h3><p>At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.</p><p>If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.</p><h3>Contact Us</h3><p>For any questions or concerns regarding your privacy, you may contact us using the following details:</p><p>Yashwanth Maheshwaram<br /> https://yashwanthm.github.io/cowin-vaccine-booking/issues/</p>')})]})}}]),n}(i.a.Component),le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,434)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))},he=n(166);he.a.initialize("G-GS2F4HCX5T"),he.a.pageview(window.location.pathname+window.location.search),c.a.render(Object($.jsx)(i.a.StrictMode,{children:Object($.jsx)(ce,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cowin-vaccine-booking",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/cowin-vaccine-booking","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):s(t,e)}))}}(),le()}},[[406,1,2]]]);
//# sourceMappingURL=main.ed1fe6e9.chunk.js.map