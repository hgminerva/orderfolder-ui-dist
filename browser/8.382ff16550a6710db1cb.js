(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{jcJX:function(e,t,i){"use strict";i.r(t),i.d(t,"AccountModule",(function(){return me}));var r=i("ofXK"),s=i("3Pt+"),a=i("fXoL"),o=i("LRne"),n=i("2Vo4"),l=i("XNiG");const c=new a.s("recaptcha-language"),d=new a.s("recaptcha-base-url"),b=new a.s("recaptcha-nonce-tag");let u=(()=>{let e=h=class{constructor(e,t,i,s){this.platformId=e,this.language=t,this.baseUrl=i,this.nonce=s,this.init(),this.ready=Object(r.t)(this.platformId)?h.ready.asObservable():Object(o.a)()}init(){if(!h.ready&&Object(r.t)(this.platformId)){const e=new n.a(null);h.ready=e,function(t,i,r,s,a){window.ng2recaptchaloaded=()=>{(t=>{e.next(t)})(grecaptcha)};const o=document.createElement("script");o.innerHTML="",o.src=`${s||"https://www.google.com/recaptcha/api.js"}?render=explicit&onload=ng2recaptchaloaded${r}`,a&&(o.nonce=a),o.async=!0,o.defer=!0,document.head.appendChild(o)}(0,0,this.language?"&hl="+this.language:"",this.baseUrl,this.nonce)}}};return e.\u0275fac=function(t){return new(t||e)(a.Xb(a.D),a.Xb(c,8),a.Xb(d,8),a.Xb(b,8))},e.\u0275prov=a.Jb({token:e,factory:function(t){return e.\u0275fac(t)}}),e.ready=null,e})();var h;const p=new a.s("recaptcha-settings");let g=0,m=(()=>{let e=class{constructor(e,t,i,r){this.elementRef=e,this.loader=t,this.zone=i,this.id="ngrecaptcha-"+g++,this.resolved=new a.o,r&&(this.siteKey=r.siteKey,this.theme=r.theme,this.type=r.type,this.size=r.size,this.badge=r.badge)}ngAfterViewInit(){this.subscription=this.loader.ready.subscribe(e=>{null!=e&&e.render instanceof Function&&(this.grecaptcha=e,this.renderRecaptcha())})}ngOnDestroy(){this.grecaptchaReset(),this.subscription&&this.subscription.unsubscribe()}execute(){"invisible"===this.size&&(null!=this.widget?this.grecaptcha.execute(this.widget):this.executeRequested=!0)}reset(){null!=this.widget&&(this.grecaptcha.getResponse(this.widget)&&this.resolved.emit(null),this.grecaptchaReset())}expired(){this.resolved.emit(null)}captchaResponseCallback(e){this.resolved.emit(e)}grecaptchaReset(){null!=this.widget&&this.zone.runOutsideAngular(()=>this.grecaptcha.reset(this.widget))}renderRecaptcha(){this.widget=this.grecaptcha.render(this.elementRef.nativeElement,{badge:this.badge,callback:e=>{this.zone.run(()=>this.captchaResponseCallback(e))},"expired-callback":()=>{this.zone.run(()=>this.expired())},sitekey:this.siteKey,size:this.size,tabindex:this.tabIndex,theme:this.theme,type:this.type}),!0===this.executeRequested&&(this.executeRequested=!1,this.execute())}};return e.\u0275fac=function(t){return new(t||e)(a.Nb(a.l),a.Nb(u),a.Nb(a.B),a.Nb(p,8))},e.\u0275cmp=a.Hb({type:e,selectors:[["re-captcha"]],hostVars:1,hostBindings:function(e,t){2&e&&a.Cb("id",t.id)},inputs:{id:"id",siteKey:"siteKey",theme:"theme",type:"type",size:"size",badge:"badge",tabIndex:"tabIndex"},outputs:{resolved:"resolved"},exportAs:["reCaptcha"],decls:0,vars:0,template:function(e,t){},encapsulation:2}),e})(),f=(()=>{let e=class{};return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)}}),e})(),v=(()=>{let e=S=class{static forRoot(){return S}};return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)},providers:[u],imports:[[f]]}),e})();var S;let y=(()=>{let e=class{};return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)},imports:[[s.g,f]]}),e})();var _=i("tyNb"),T=i("tk/3"),k=i("24n0");let w=(()=>{class e{constructor(e,t){this.appSettings=e,this.httpClient=t,this.defaultAPIURLHost=this.appSettings.APIURLHost,this.options={headers:new T.c({"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")})},this.userTypeSubject=new l.a,this.userTypeObservable=this.userTypeSubject.asObservable()}getUserType(){this.httpClient.get(this.defaultAPIURLHost+"/api/MstUser/userType",this.options).subscribe(e=>{this.userTypeSubject.next(null!=e?e.toString():"")},e=>{this.userTypeSubject.next("")})}}return e.\u0275fac=function(t){return new(t||e)(a.Xb(k.a),a.Xb(T.a))},e.\u0275prov=a.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),x=(()=>{class e{constructor(e,t){this.router=e,this.accountService=t}canActivate(){if(null==localStorage.getItem("access_token"))return!0;if(null==localStorage.getItem("user_type"))this.accountService.getUserType(),this.userTypeSubscription=this.accountService.userTypeObservable.subscribe(e=>{switch(e){case"Seller":return this.router.navigate(["/software-seller"]),!1;case"Buyer":return this.router.navigate(["/software-buyer"]),!1;default:return!0}});else switch(localStorage.getItem("user_type")){case"Seller":return this.router.navigate(["/software-seller"]),!1;case"Buyer":return this.router.navigate(["/software-buyer"]),!1;default:return!0}}}return e.\u0275fac=function(t){return new(t||e)(a.Xb(_.b),a.Xb(w))},e.\u0275prov=a.Jb({token:e,factory:e.\u0275fac}),e})(),M=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Hb({type:e,selectors:[["app-account"]],decls:1,vars:0,template:function(e,t){1&e&&a.Ob(0,"router-outlet")},directives:[_.f],styles:[""]}),e})();var O=i("0IaG"),C=i("bTqV");let I=(()=>{class e{constructor(e,t){this.loginErrorDialogComponent=e,this.loginErrorDialogData=t,this.dialogTitle="Login Error",this.dialogContent=this.loginErrorDialogData.errorMessage}buttonLoginErrorDialogOKClick(){this.loginErrorDialogComponent.close(200)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(O.f),a.Nb(O.a))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-login-error-dialog"]],decls:8,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-stroked-button","","id","buttonLoginErrorDialogOK",3,"click"]],template:function(e,t){1&e&&(a.Tb(0,"h1",0),a.zc(1),a.Sb(),a.Tb(2,"div",1),a.Tb(3,"p"),a.zc(4),a.Sb(),a.Sb(),a.Tb(5,"div",2),a.Tb(6,"button",3),a.bc("click",(function(){return t.buttonLoginErrorDialogOKClick()})),a.zc(7," OK "),a.Sb(),a.Sb()),2&e&&(a.Bb(1),a.Bc(" ",t.dialogTitle,"\n"),a.Bb(3),a.Ac(t.dialogContent))},directives:[O.g,O.d,O.c,C.a],styles:[""]}),e})(),R=(()=>{class e{constructor(e,t){this.appSettings=e,this.httpClient=t,this.defaultAPIURLHost=this.appSettings.APIURLHost,this.options={headers:new T.c({"Content-Type":"application/json"})},this.loginSubject=new l.a,this.loginObservable=this.loginSubject.asObservable()}login(e){let t=this.defaultAPIURLHost+"/api/SysUserAuthentication/authenticate",i=JSON.stringify(e);this.httpClient.post(t,i,this.options).subscribe(e=>{let t=e;localStorage.setItem("access_token",t.accessToken),localStorage.setItem("expires_in",t.expiresIn),localStorage.setItem("username",t.userName),localStorage.setItem("full_name",t.fullName),localStorage.setItem("user_type",t.userType),this.loginSubject.next([!0,t.userType])},e=>{let t="";if(null!=e.error.errors){for(var i in e.error.errors)if(null!=i)for(let r=0;r<e.error.errors[i].length;r++){t=e.error.errors[i][r];break}}else t=e.error.message;this.loginSubject.next([!1,t])})}}return e.\u0275fac=function(t){return new(t||e)(a.Xb(k.a),a.Xb(T.a))},e.\u0275prov=a.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var z=i("XiUz"),N=i("Wp6s"),A=i("kmnG"),P=i("qFsG"),B=i("NFeN");const q=function(){return{standalone:!0}};let D=(()=>{class e{constructor(e,t,i,r){this.loginService=e,this.activatedRoute=t,this.router=i,this.loginErrorDialog=r,this.loginModel={UserName:"",Password:""},this.passwordHide=!0}linkRegisterPageClick(){let e=parseInt(this.activatedRoute.snapshot.paramMap.get("productId"));this.router.navigate(null!=e||0!=e?["/account/register/Buyer/"+e]:["/account/register/Buyer/0"])}login(){let e=document.getElementById("buttonLogin");e.setAttribute("disabled","disabled"),""===this.loginModel.UserName||""===this.loginModel.Password?this.loginErrorDialog.open(I,{width:"300px",data:{errorMessage:"Username or Password is required."},disableClose:!0}).afterClosed().subscribe(t=>{200==t&&e.removeAttribute("disabled")}):(this.loginService.login(this.loginModel),this.loginSubscribe=this.loginService.loginObservable.subscribe(t=>{if(t[0]){let e=parseInt(this.activatedRoute.snapshot.paramMap.get("productId"));if(0!=e)"Buyer"===t[1]?setTimeout(()=>{this.router.navigate(["/software-buyer-order/create-order/"+e])},500):"Seller"===t[1]&&setTimeout(()=>{this.router.navigate(["/software-seller"])},500);else switch(t[1]){case"Buyer":setTimeout(()=>{this.router.navigate(["/software-buyer"])},500);break;case"Seller":setTimeout(()=>{this.router.navigate(["/software-seller"])},500)}}else this.loginErrorDialog.open(I,{width:"300px",data:{errorMessage:t[1]},disableClose:!0}).afterClosed().subscribe(t=>{200==t&&e.removeAttribute("disabled")});null!=this.loginSubscribe&&this.loginSubscribe.unsubscribe()}))}ngOnInit(){}ngOnDestroy(){null!=this.loginSubscribe&&this.loginSubscribe.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(R),a.Nb(_.a),a.Nb(_.b),a.Nb(O.b))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-login"]],decls:55,vars:8,consts:[[1,"login-container"],["fxLayout","row","fxLayout.xs","column"],["fxFlex","30",2,"margin","5px"],["fxFlex","40",2,"margin","5px"],[2,"text-align","center","width","100%"],["routerLink","/landing"],["src","../../../assets/logo/ordercliq_logo_nav.png","height","60"],[3,"ngSubmit"],[2,"padding","20px"],["appearance","outline",2,"width","100%"],["matInput","","maxlength","100","placeholder","Enter your username",3,"ngModel","ngModelOptions","ngModelChange"],["text_username",""],["matSuffix",""],["align","end"],["type","password","matInput","","maxlength","100","placeholder","Enter your password",3,"ngModel","ngModelOptions","ngModelChange"],["text_password",""],["type","submit","mat-flat-button","","id","buttonLogin","color","primary",2,"width","100%","padding-top","10px","padding-bottom","10px"],["routerLink","",3,"click"],[2,"width","100%","text-align","center"],[2,"margin-top","5px","margin-bottom","20px","font-size","17px"],["href","#"],["src","../../../assets/footer/facebook.png","height","40",2,"vertical-align","middle"],["src","../../../assets/footer/instagram.png","height","40",2,"vertical-align","middle"],["src","../../../assets/footer/twitter.png","height","40",2,"vertical-align","middle"]],template:function(e,t){if(1&e&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Ob(2,"div",2),a.Tb(3,"div",3),a.Tb(4,"mat-card"),a.Tb(5,"mat-card-content"),a.Tb(6,"div",4),a.Tb(7,"a",5),a.Ob(8,"img",6),a.Sb(),a.Sb(),a.Tb(9,"form",7),a.bc("ngSubmit",(function(){return t.login()})),a.Tb(10,"div",8),a.Tb(11,"mat-form-field",9),a.Tb(12,"mat-label"),a.zc(13,"Username"),a.Sb(),a.Tb(14,"input",10,11),a.bc("ngModelChange",(function(e){return t.loginModel.UserName=e})),a.Sb(),a.Tb(16,"mat-icon",12),a.zc(17,"vpn_key"),a.Sb(),a.Tb(18,"mat-hint",13),a.zc(19),a.Sb(),a.Sb(),a.Tb(20,"mat-form-field",9),a.Tb(21,"mat-label"),a.zc(22,"Password"),a.Sb(),a.Tb(23,"input",14,15),a.bc("ngModelChange",(function(e){return t.loginModel.Password=e})),a.Sb(),a.Tb(25,"mat-icon",12),a.zc(26,"security"),a.Sb(),a.Tb(27,"mat-hint",13),a.zc(28),a.Sb(),a.Sb(),a.Ob(29,"br"),a.Tb(30,"button",16),a.Tb(31,"mat-icon",12),a.zc(32,"login"),a.Sb(),a.zc(33," Login "),a.Sb(),a.Ob(34,"br"),a.Ob(35,"br"),a.Ob(36,"br"),a.Tb(37,"a",17),a.bc("click",(function(){return t.linkRegisterPageClick()})),a.zc(38,"No account? Register here!"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Ob(39,"br"),a.Tb(40,"div",18),a.Tb(41,"p",19),a.zc(42," \xa9 2020 "),a.Tb(43,"b"),a.zc(44,"ordercliq.com"),a.Sb(),a.Sb(),a.Tb(45,"a",20),a.Ob(46,"img",21),a.Sb(),a.zc(47," \xa0 "),a.Tb(48,"a",20),a.Ob(49,"img",22),a.Sb(),a.zc(50," \xa0 "),a.Tb(51,"a",20),a.Ob(52,"img",23),a.Sb(),a.Sb(),a.Ob(53,"br"),a.Sb(),a.Ob(54,"div",2),a.Sb(),a.Sb()),2&e){const e=a.qc(15),i=a.qc(24);a.Bb(14),a.kc("ngModel",t.loginModel.UserName)("ngModelOptions",a.mc(6,q)),a.Bb(5),a.Bc("",e.value.length," / 100"),a.Bb(4),a.kc("ngModel",t.loginModel.Password)("ngModelOptions",a.mc(7,q)),a.Bb(5),a.Bc("",i.value.length," / 100")}},directives:[z.b,z.a,N.a,N.b,_.d,s.s,s.m,s.n,A.b,A.f,P.b,s.c,s.h,s.l,s.o,B.a,A.g,A.e,C.a],styles:[".login-container[_ngcontent-%COMP%]{margin-top:20px}"]}),e})(),E=(()=>{class e{constructor(e,t){this.registerErrorDialogComponent=e,this.registerErrorDialogData=t,this.dialogTitle="Register Error",this.dialogContent=this.registerErrorDialogData.errorMessage}buttonRegisterErrorDialogOKClick(){this.registerErrorDialogComponent.close(200)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(O.f),a.Nb(O.a))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-register-error-dialog"]],decls:8,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-stroked-button","","id","buttonRegisterErrorDialogOK",3,"click"]],template:function(e,t){1&e&&(a.Tb(0,"h1",0),a.zc(1),a.Sb(),a.Tb(2,"div",1),a.Tb(3,"p"),a.zc(4),a.Sb(),a.Sb(),a.Tb(5,"div",2),a.Tb(6,"button",3),a.bc("click",(function(){return t.buttonRegisterErrorDialogOKClick()})),a.zc(7," OK "),a.Sb(),a.Sb()),2&e&&(a.Bb(1),a.Bc(" ",t.dialogTitle,"\n"),a.Bb(3),a.Ac(t.dialogContent))},directives:[O.g,O.d,O.c,C.a],styles:[""]}),e})(),L=(()=>{class e{constructor(e,t){this.appSettings=e,this.httpClient=t,this.defaultAPIURLHost=this.appSettings.APIURLHost,this.options={headers:new T.c({"Content-Type":"application/json"})},this.registerSubject=new l.a,this.registerObservable=this.registerSubject.asObservable()}register(e,t){let i=this.defaultAPIURLHost+"/api/MstUser/register?captachaResponseToken="+t,r=JSON.stringify(e);this.httpClient.post(i,r,this.options).subscribe(e=>{let t=e;localStorage.setItem("access_token",t.accessToken),localStorage.setItem("expires_in",t.expiresIn),localStorage.setItem("username",t.userName),localStorage.setItem("full_name",t.fullName),localStorage.setItem("user_type",t.userType),this.registerSubject.next([!0,t.userType])},e=>{let t="";if(null!=e.error.errors){for(var i in e.error.errors)if(null!=i)for(let r=0;r<e.error.errors[i].length;r++){t=e.error.errors[i][r];break}}else t=null!=e.error.message?e.error.message:e.error;this.registerSubject.next([!1,t])})}}return e.\u0275fac=function(t){return new(t||e)(a.Xb(k.a),a.Xb(T.a))},e.\u0275prov=a.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var U=i("FKr1"),j=i("8LU1"),G=i("R1ws"),F=i("u47x"),K=i("0EQZ");const H=["input"],X=function(){return{enterDuration:150}},V=["*"],J=new a.s("mat-radio-default-options",{providedIn:"root",factory:function(){return{color:"accent"}}});let Z=0;const Q={provide:s.j,useExisting:Object(a.V)(()=>W),multi:!0};class Y{constructor(e,t){this.source=e,this.value=t}}let $=(()=>{class e{constructor(e){this._changeDetector=e,this._value=null,this._name="mat-radio-group-"+Z++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new a.o}get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition="before"===e?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(j.c)(e),this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=Object(j.c)(e),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Y(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(a.h))},e.\u0275dir=a.Ib({type:e,inputs:{name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"}}),e})(),W=(()=>{class e extends ${}e.\u0275fac=function(i){return t(i||e)},e.\u0275dir=a.Ib({type:e,selectors:[["mat-radio-group"]],contentQueries:function(e,t,i){var r;1&e&&a.Gb(i,re,!0),2&e&&a.pc(r=a.cc())&&(t._radios=r)},hostAttrs:["role","radiogroup",1,"mat-radio-group"],exportAs:["matRadioGroup"],features:[a.Ab([Q]),a.yb]});const t=a.Vb(e);return e})();class ee{constructor(e){this._elementRef=e}}const te=Object(U.x)(Object(U.B)(ee));let ie=(()=>{class e extends te{constructor(e,t,i,r,s,o,n){super(t),this._changeDetector=i,this._focusMonitor=r,this._radioDispatcher=s,this._animationMode=o,this._providerOverride=n,this._uniqueId="mat-radio-"+ ++Z,this.id=this._uniqueId,this.change=new a.o,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,this._removeUniqueSelectionListener=s.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}get checked(){return this._checked}set checked(e){const t=Object(j.c)(e);this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(e){this._setDisabled(Object(j.c)(e))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=Object(j.c)(e)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return(this.id||this._uniqueId)+"-input"}focus(e){this._focusMonitor.focusVia(this._inputElement,"keyboard",e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.name=this.radioGroup.name)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Y(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputChange(e){e.stopPropagation();const t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(a.Nb($,8),a.Nb(a.l),a.Nb(a.h),a.Nb(F.h),a.Nb(K.d),a.Nb(G.a,8),a.Nb(J,8))},e.\u0275dir=a.Ib({type:e,viewQuery:function(e,t){var i;1&e&&a.Dc(H,!0),2&e&&a.pc(i=a.cc())&&(t._inputElement=i.first)},inputs:{id:"id",checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{change:"change"},features:[a.yb]}),e})(),re=(()=>{class e extends ie{constructor(e,t,i,r,s,a,o){super(e,t,i,r,s,a,o)}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(W,8),a.Nb(a.l),a.Nb(a.h),a.Nb(F.h),a.Nb(K.d),a.Nb(G.a,8),a.Nb(J,8))},e.\u0275cmp=a.Hb({type:e,selectors:[["mat-radio-button"]],hostAttrs:[1,"mat-radio-button"],hostVars:17,hostBindings:function(e,t){1&e&&a.bc("focus",(function(){return t._inputElement.nativeElement.focus()})),2&e&&(a.Cb("tabindex",-1)("id",t.id)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),a.Eb("mat-radio-checked",t.checked)("mat-radio-disabled",t.disabled)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-primary","primary"===t.color)("mat-accent","accent"===t.color)("mat-warn","warn"===t.color))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matRadioButton"],features:[a.yb],ngContentSelectors:V,decls:13,vars:19,consts:[[1,"mat-radio-label"],["label",""],[1,"mat-radio-container"],[1,"mat-radio-outer-circle"],[1,"mat-radio-inner-circle"],["type","radio",1,"mat-radio-input","cdk-visually-hidden",3,"id","checked","disabled","tabIndex","required","change","click"],["input",""],["mat-ripple","",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-radio-label-content"],[2,"display","none"]],template:function(e,t){if(1&e&&(a.jc(),a.Tb(0,"label",0,1),a.Tb(2,"div",2),a.Ob(3,"div",3),a.Ob(4,"div",4),a.Tb(5,"input",5,6),a.bc("change",(function(e){return t._onInputChange(e)}))("click",(function(e){return t._onInputClick(e)})),a.Sb(),a.Tb(7,"div",7),a.Ob(8,"div",8),a.Sb(),a.Sb(),a.Tb(9,"div",9),a.Tb(10,"span",10),a.zc(11,"\xa0"),a.Sb(),a.ic(12),a.Sb(),a.Sb()),2&e){const e=a.qc(1);a.Cb("for",t.inputId),a.Bb(5),a.kc("id",t.inputId)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex)("required",t.required),a.Cb("name",t.name)("value",t.value)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby),a.Bb(2),a.kc("matRippleTrigger",e)("matRippleDisabled",t._isRippleDisabled())("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",a.mc(18,X)),a.Bb(2),a.Eb("mat-radio-label-before","before"==t.labelPosition)}},directives:[U.r],styles:[".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],encapsulation:2,changeDetection:0}),e})(),se=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)},imports:[[U.s,U.i],U.i]}),e})();const ae=function(){return{standalone:!0}},oe=[{path:"",canActivate:[x],component:M,children:[{path:"",canActivate:[x],component:D},{path:"login/:productId",canActivate:[x],component:D},{path:"register/:user_type/:productId",canActivate:[x],component:(()=>{class e{constructor(e,t,i,r){this.registerService=e,this.activatedRoute=t,this.router=i,this.registerErrorDialog=r,this.registerModel={UserType:"",UserName:"",Password:"",FullName:"",Address:"NA",ContactNumber:"NA",EmailAddress:"",Status:"Active"},this.captchaResponseToken="",this.confirmPassword="",this.passwordHide=!0,this.confirmPasswordHide=!0}linkLoginPageClick(){let e=parseInt(this.activatedRoute.snapshot.paramMap.get("productId"));this.router.navigate(null!=e||0!=e?["/account/login/"+e]:["/account/login/0"])}register(){let e=document.getElementById("buttonRegister");e.setAttribute("disabled","disabled");let t="",i=!1;""===this.registerModel.UserType?t="User type is required.":""===this.registerModel.FullName?t="Full name is required.":""===this.registerModel.UserName?t="Username is required.":""===this.registerModel.Password?t="Password is required.":""===this.confirmPassword?t="Confirm Password is required.":this.registerModel.Password!==this.confirmPassword?t="Password and confirm password did not match.":""===this.registerModel.Address?t="Address is required.":""===this.registerModel.ContactNumber?t="Contact number is required.":""===this.registerModel.EmailAddress?t="Email address is required.":""===this.captchaResponseToken||null===this.captchaResponseToken?t="Catpcha is Required.":i=!0,0==i?this.registerErrorDialog.open(E,{width:"300px",data:{errorMessage:t},disableClose:!0}).afterClosed().subscribe(t=>{200==t&&e.removeAttribute("disabled")}):(this.registerService.register(this.registerModel,this.captchaResponseToken),this.registerSubscribe=this.registerService.registerObservable.subscribe(t=>{if(t[0]){let e=parseInt(this.activatedRoute.snapshot.paramMap.get("productId"));if(0!=e)"Buyer"===t[1]?setTimeout(()=>{this.router.navigate(["/software-buyer-order/create-order/"+e])},500):"Seller"===t[1]&&setTimeout(()=>{this.router.navigate(["/software-seller"])},500);else switch(t[1]){case"Buyer":setTimeout(()=>{this.router.navigate(["/software-buyer"])},500);break;case"Seller":setTimeout(()=>{this.router.navigate(["/software-seller"])},500)}}else this.registerErrorDialog.open(E,{width:"300px",data:{errorMessage:t[1]},disableClose:!0}).afterClosed().subscribe(t=>{200==t&&e.removeAttribute("disabled")});null!=this.registerSubscribe&&this.registerSubscribe.unsubscribe()}))}resolved(e){this.captchaResponseToken=e}ngOnInit(){let e=this.activatedRoute.snapshot.paramMap.get("user_type");"Buyer"===e&&(this.registerModel.UserType="Buyer"),"Seller"===e&&(this.registerModel.UserType="Seller")}ngOnDestroy(){null!=this.registerSubscribe&&this.registerSubscribe.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(L),a.Nb(_.a),a.Nb(_.b),a.Nb(O.b))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-register"]],decls:92,vars:25,consts:[[1,"register-container"],["fxLayout","row","fxLayout.xs","column"],["fxFlex","30",2,"margin","5px"],["fxFlex","40",2,"margin","5px"],[2,"text-align","center","width","100%"],["routerLink","/landing"],["src","../../../assets/logo/ordercliq_logo_nav.png","height","60"],[3,"ngSubmit"],[2,"padding","20px"],["color","primary","aria-label","Select an option",3,"ngModel","ngModelOptions","ngModelChange"],["value","Buyer"],["value","Seller"],["appearance","outline",2,"width","100%"],["matInput","","maxlength","100","placeholder","Full Name",3,"ngModel","ngModelOptions","ngModelChange"],["text_fullname",""],["matSuffix",""],["align","end"],["matInput","","maxlength","100","placeholder","Email Address",3,"ngModel","ngModelOptions","ngModelChange"],["text_email_address",""],["matInput","","maxlength","100","placeholder","Username",3,"ngModel","ngModelOptions","ngModelChange"],["text_username",""],["matInput","","maxlength","100","placeholder","Password",3,"ngModel","ngModelOptions","type","ngModelChange"],["text_password",""],["text_confirm_password",""],["siteKey","6Lf8gLEZAAAAAG8vInmtpbAFjXZKpfNYiTC9bbne",3,"resolved"],["type","submit","mat-flat-button","","id","buttonRegister","color","accent",2,"width","100%","padding-top","10px","padding-bottom","10px"],["routerLink","",2,"margin","5px",3,"click"],[2,"width","100%","text-align","center"],[2,"margin-top","5px","margin-bottom","20px","font-size","17px"],["href","#"],["src","../../../assets/footer/facebook.png","height","40",2,"vertical-align","middle"],["src","../../../assets/footer/instagram.png","height","40",2,"vertical-align","middle"],["src","../../../assets/footer/twitter.png","height","40",2,"vertical-align","middle"]],template:function(e,t){if(1&e&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Ob(2,"div",2),a.Tb(3,"div",3),a.Tb(4,"mat-card"),a.Tb(5,"mat-card-content"),a.Tb(6,"div",4),a.Tb(7,"a",5),a.Ob(8,"img",6),a.Sb(),a.Sb(),a.Tb(9,"form",7),a.bc("ngSubmit",(function(){return t.register()})),a.Tb(10,"div",8),a.Tb(11,"mat-radio-group",9),a.bc("ngModelChange",(function(e){return t.registerModel.UserType=e})),a.Tb(12,"mat-radio-button",10),a.zc(13,"Buyer"),a.Sb(),a.zc(14," \xa0\xa0\xa0\xa0\xa0 "),a.Tb(15,"mat-radio-button",11),a.zc(16,"Seller"),a.Sb(),a.Sb(),a.Ob(17,"br"),a.Ob(18,"br"),a.Tb(19,"mat-form-field",12),a.Tb(20,"mat-label"),a.zc(21,"Full Name"),a.Sb(),a.Tb(22,"input",13,14),a.bc("ngModelChange",(function(e){return t.registerModel.FullName=e})),a.Sb(),a.Tb(24,"mat-icon",15),a.zc(25,"person"),a.Sb(),a.Tb(26,"mat-hint",16),a.zc(27),a.Sb(),a.Sb(),a.Tb(28,"mat-form-field",12),a.Tb(29,"mat-label"),a.zc(30,"Email Address"),a.Sb(),a.Tb(31,"input",17,18),a.bc("ngModelChange",(function(e){return t.registerModel.EmailAddress=e})),a.Sb(),a.Tb(33,"mat-icon",15),a.zc(34,"email"),a.Sb(),a.Tb(35,"mat-hint",16),a.zc(36),a.Sb(),a.Sb(),a.Tb(37,"mat-form-field",12),a.Tb(38,"mat-label"),a.zc(39,"Username"),a.Sb(),a.Tb(40,"input",19,20),a.bc("ngModelChange",(function(e){return t.registerModel.UserName=e})),a.Sb(),a.Tb(42,"mat-icon",15),a.zc(43,"vpn_key"),a.Sb(),a.Tb(44,"mat-hint",16),a.zc(45),a.Sb(),a.Sb(),a.Tb(46,"mat-form-field",12),a.Tb(47,"mat-label"),a.zc(48,"Password"),a.Sb(),a.Tb(49,"input",21,22),a.bc("ngModelChange",(function(e){return t.registerModel.Password=e})),a.Sb(),a.Tb(51,"mat-icon",15),a.zc(52,"security"),a.Sb(),a.Tb(53,"mat-hint",16),a.zc(54),a.Sb(),a.Sb(),a.Tb(55,"mat-form-field",12),a.Tb(56,"mat-label"),a.zc(57,"Confirm Password"),a.Sb(),a.Tb(58,"input",21,23),a.bc("ngModelChange",(function(e){return t.confirmPassword=e})),a.Sb(),a.Tb(60,"mat-icon",15),a.zc(61,"security"),a.Sb(),a.Tb(62,"mat-hint",16),a.zc(63),a.Sb(),a.Sb(),a.Tb(64,"div"),a.Tb(65,"re-captcha",24),a.bc("resolved",(function(e){return t.resolved(e)})),a.Sb(),a.Sb(),a.Ob(66,"br"),a.Tb(67,"button",25),a.Tb(68,"mat-icon",15),a.zc(69,"checkmark"),a.Sb(),a.zc(70," Register "),a.Sb(),a.Ob(71,"br"),a.Ob(72,"br"),a.Ob(73,"br"),a.Tb(74,"a",26),a.bc("click",(function(){return t.linkLoginPageClick()})),a.zc(75,"Already have an account? Login here!"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Ob(76,"br"),a.Tb(77,"div",27),a.Tb(78,"p",28),a.zc(79," \xa9 2020 "),a.Tb(80,"b"),a.zc(81,"ordercliq.com"),a.Sb(),a.Sb(),a.Tb(82,"a",29),a.Ob(83,"img",30),a.Sb(),a.zc(84," \xa0 "),a.Tb(85,"a",29),a.Ob(86,"img",31),a.Sb(),a.zc(87," \xa0 "),a.Tb(88,"a",29),a.Ob(89,"img",32),a.Sb(),a.Sb(),a.Ob(90,"br"),a.Sb(),a.Ob(91,"div",2),a.Sb(),a.Sb()),2&e){const e=a.qc(23),i=a.qc(32),r=a.qc(41),s=a.qc(50),o=a.qc(59);a.Bb(11),a.kc("ngModel",t.registerModel.UserType)("ngModelOptions",a.mc(19,ae)),a.Bb(11),a.kc("ngModel",t.registerModel.FullName)("ngModelOptions",a.mc(20,ae)),a.Bb(5),a.Bc("",e.value.length," / 100"),a.Bb(4),a.kc("ngModel",t.registerModel.EmailAddress)("ngModelOptions",a.mc(21,ae)),a.Bb(5),a.Bc("",i.value.length," / 100"),a.Bb(4),a.kc("ngModel",t.registerModel.UserName)("ngModelOptions",a.mc(22,ae)),a.Bb(5),a.Bc("",r.value.length," / 100"),a.Bb(4),a.kc("ngModel",t.registerModel.Password)("ngModelOptions",a.mc(23,ae))("type",t.passwordHide?"password":"text"),a.Bb(5),a.Bc("",s.value.length," / 100"),a.Bb(4),a.kc("ngModel",t.confirmPassword)("ngModelOptions",a.mc(24,ae))("type",t.confirmPasswordHide?"password":"text"),a.Bb(5),a.Bc("",o.value.length," / 100")}},directives:[z.b,z.a,N.a,N.b,_.d,s.s,s.m,s.n,W,s.l,s.o,re,A.b,A.f,P.b,s.c,s.h,B.a,A.g,A.e,m,C.a],styles:[".register-container[_ngcontent-%COMP%]{margin-top:20px}"]}),e})()}]}];let ne=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)},imports:[[_.e.forChild(oe)],_.e]}),e})();var le=i("GU7r");let ce=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)}}),e})(),de=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)},imports:[[U.s,U.i,le.c,ce],U.i,ce]}),e})();var be=i("wZkO"),ue=i("iadO"),he=i("d3UM"),pe=i("f0Cb"),ge=i("YUcS");let me=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)},providers:[x],imports:[[r.c,s.g,s.q,ne,N.c,P.c,A.d,B.b,C.b,de,be.c,ue.c,U.l,he.b,O.e,pe.b,se,ge.a,v,y]]}),e})()}}]);