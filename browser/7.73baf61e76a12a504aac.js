(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/t3+":function(t,o,e){"use strict";e.d(o,"a",(function(){return d})),e.d(o,"b",(function(){return m}));var r=e("fXoL"),n=e("FKr1"),i=e("ofXK"),a=e("nLfN");const s=["*",[["mat-toolbar-row"]]],c=["*","mat-toolbar-row"];class l{constructor(t){this._elementRef=t}}const b=Object(n.w)(l);let p=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275dir=r.Ib({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),t})(),d=(()=>{class t extends b{constructor(t,o,e){super(t),this._platform=o,this._document=e}ngAfterViewInit(){Object(r.X)()&&this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length&&Array.from(this._elementRef.nativeElement.childNodes).filter(t=>!(t.classList&&t.classList.contains("mat-toolbar-row"))).filter(t=>t.nodeType!==(this._document?this._document.COMMENT_NODE:8)).some(t=>!(!t.textContent||!t.textContent.trim()))&&function(){throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.")}()}}return t.\u0275fac=function(o){return new(o||t)(r.Nb(r.l),r.Nb(a.a),r.Nb(i.d))},t.\u0275cmp=r.Hb({type:t,selectors:[["mat-toolbar"]],contentQueries:function(t,o,e){var n;1&t&&r.Gb(e,p,!0),2&t&&r.pc(n=r.cc())&&(o._toolbarRows=n)},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(t,o){2&t&&r.Eb("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",0===o._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[r.yb],ngContentSelectors:c,decls:2,vars:0,template:function(t,o){1&t&&(r.jc(s),r.ic(0),r.ic(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],encapsulation:2,changeDetection:0}),t})(),m=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(o){return new(o||t)},imports:[[n.i],n.i]}),t})()},WMCE:function(t,o,e){"use strict";e.r(o),e.d(o,"LandingModule",(function(){return v}));var r=e("ofXK"),n=e("tyNb"),i=e("fXoL");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["app-landing"]],decls:1,vars:0,template:function(t,o){1&t&&i.Ob(0,"router-outlet")},directives:[n.f],styles:[""]}),t})();var s=e("/t3+"),c=e("bTqV"),l=e("XiUz"),b=e("Wp6s");let p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["app-home"]],decls:40,vars:0,consts:[[1,"toolbar-fixed-top"],["routerLink","/landing"],["src","./../../../assets/logo/ordercliq_logo_nav.png","height","40",2,"margin-top","7px"],[1,"toolbar-spacer"],["mat-button","","routerLink","/account/login/0"],[2,"padding-top","100px","padding-left","30px","padding-right","30px","padding-bottom","30px","background-color","#7FBA00"],["fxLayout","row","fxLayout.xs","column"],["fxFlex","60",2,"margin","30px"],[2,"width","100%","text-align","center"],[2,"font-size","50px","font-weight","bold","font-family","'Segoe UI', Tahoma, Geneva, Verdana, sans-serif","line-height","1.2","color","white"],["fxFlex","40",2,"margin","5px"],["mat-flat-button","","color","primary","routerLink","/account/register/Seller/0",2,"padding","10px"],["src","../../../assets/dashboard-icons/seller.png",2,"width","20%","margin-bottom","15px"],[2,"font-size","25px","line-height","1"],["src","../../../assets/dashboard-icons/buyer.png",2,"width","20%","margin-bottom","15px"],[1,"footer"],[2,"margin-top","3px","font-size","15px"],[1,"spacer"],["href","#"],["src","../../assets/footer/facebook.png","height","25",2,"vertical-align","middle","margin-right","10px"],["src","../../assets/footer/instagram.png","height","25",2,"vertical-align","middle","margin-right","10px"],["src","../../assets/footer/twitter.png","height","25",2,"vertical-align","middle","margin-right","10px"]],template:function(t,o){1&t&&(i.Tb(0,"mat-toolbar",0),i.Tb(1,"a",1),i.Ob(2,"img",2),i.Sb(),i.Ob(3,"span",3),i.Tb(4,"button",4),i.zc(5," Login "),i.Sb(),i.Sb(),i.Tb(6,"div",5),i.Tb(7,"div",6),i.Tb(8,"div",7),i.Tb(9,"div",8),i.Tb(10,"h1",9),i.zc(11," Manage your orders with ease like a folder! "),i.Sb(),i.Sb(),i.Sb(),i.Tb(12,"div",10),i.Tb(13,"mat-card"),i.Tb(14,"button",11),i.Ob(15,"img",12),i.Tb(16,"p",13),i.zc(17," I want to Sell! "),i.Sb(),i.Sb(),i.Ob(18,"br"),i.Ob(19,"br"),i.Tb(20,"button",11),i.Ob(21,"img",14),i.Tb(22,"p",13),i.zc(23," I want to Buy! "),i.Sb(),i.Sb(),i.Sb(),i.Ob(24,"br"),i.Ob(25,"br"),i.Sb(),i.Sb(),i.Sb(),i.Ob(26,"br"),i.Tb(27,"footer",15),i.Tb(28,"div",16),i.zc(29," \xa0 \xa9 2020 "),i.Tb(30,"b"),i.zc(31,"ordercliq.com"),i.Sb(),i.Sb(),i.Ob(32,"span",17),i.Tb(33,"a",18),i.Ob(34,"img",19),i.Sb(),i.Tb(35,"a",18),i.Ob(36,"img",20),i.Sb(),i.Tb(37,"a",18),i.Ob(38,"img",21),i.Sb(),i.zc(39," \xa0 \xa0 \xa0 \xa0\n"),i.Sb())},directives:[s.a,n.d,c.a,n.c,l.b,l.a,b.a],styles:[".toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.toolbar-fixed-top[_ngcontent-%COMP%]{top:0;border-bottom:5px solid #00a4ef}.footer[_ngcontent-%COMP%], .toolbar-fixed-top[_ngcontent-%COMP%]{position:fixed;z-index:1000}.footer[_ngcontent-%COMP%]{width:100%;background-color:#737373;bottom:0;margin-bottom:0;padding:10px;color:#fff;display:flex}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),t})();const d=[{path:"",component:a,children:[{path:"",component:p},{path:"home",component:p}]}];let m=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(o){return new(o||t)},imports:[[n.e.forChild(d)],n.e]}),t})();var f=e("NFeN");e("u47x"),e("8LU1"),e("FtGj"),e("XNiG"),e("quSY"),e("VRyK"),e("LRne"),e("7Hc7"),e("JX91"),e("eIep"),e("IzEk"),e("pLZG"),e("1G5W"),e("D0XW"),e("7o/Q"),e("WMd4"),e("R0Ic"),e("+rOU");var u=e("FKr1"),g=e("rDax"),h=(e("nLfN"),e("vxfF"));e("cH1L");const x={provide:new i.s("mat-menu-scroll-strategy"),deps:[g.c],useFactory:function(t){return()=>t.scrollStrategies.reposition()}};let w=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(o){return new(o||t)},providers:[x],imports:[u.i]}),t})(),y=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(o){return new(o||t)},providers:[x],imports:[[r.c,u.i,u.s,g.f,w],h.b,u.i,w]}),t})();var T=e("YUcS");let v=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(o){return new(o||t)},imports:[[r.c,m,s.b,f.b,c.b,y,b.c,T.a]]}),t})()}}]);