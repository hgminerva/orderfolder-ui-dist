exports.ids=[10],exports.modules={"/t3+":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return MatToolbar})),__webpack_require__.d(__webpack_exports__,"b",(function(){return MatToolbarModule}));var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fXoL"),_angular_material_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("FKr1"),_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("nLfN"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("ofXK");const _c0=["*",[["mat-toolbar-row"]]],_c1=["*","mat-toolbar-row"];const _MatToolbarMixinBase=Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.w)(class{constructor(_elementRef){this._elementRef=_elementRef}});let MatToolbarRow=(()=>{class MatToolbarRow{}return MatToolbarRow.\u0275fac=function MatToolbarRow_Factory(t){return new(t||MatToolbarRow)},MatToolbarRow.\u0275dir=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc({type:MatToolbarRow,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),MatToolbarRow})(),MatToolbar=(()=>{class MatToolbar extends _MatToolbarMixinBase{constructor(elementRef,_platform,document){super(elementRef),this._platform=_platform,this._document=document}ngAfterViewInit(){Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.wb)()&&this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){if(!this._toolbarRows.length)return;Array.from(this._elementRef.nativeElement.childNodes).filter(node=>!(node.classList&&node.classList.contains("mat-toolbar-row"))).filter(node=>node.nodeType!==(this._document?this._document.COMMENT_NODE:8)).some(node=>!(!node.textContent||!node.textContent.trim()))&&function throwToolbarMixedModesError(){throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.")}()}}return MatToolbar.\u0275fac=function MatToolbar_Factory(t){return new(t||MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Oc(_angular_core__WEBPACK_IMPORTED_MODULE_0__.v),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Oc(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.a),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Oc(_angular_common__WEBPACK_IMPORTED_MODULE_3__.d))},MatToolbar.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Ic({type:MatToolbar,selectors:[["mat-toolbar"]],contentQueries:function MatToolbar_ContentQueries(rf,ctx,dirIndex){var _t;(1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(dirIndex,MatToolbarRow,!0),2&rf)&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.qd(_t=_angular_core__WEBPACK_IMPORTED_MODULE_0__.dd())&&(ctx._toolbarRows=_t))},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function MatToolbar_HostBindings(rf,ctx){2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__.Fc("mat-toolbar-multiple-rows",ctx._toolbarRows.length>0)("mat-toolbar-single-row",0===ctx._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__.zc],ngContentSelectors:_c1,decls:2,vars:0,template:function MatToolbar_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.kd(_c0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.jd(0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.jd(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],encapsulation:2,changeDetection:0}),MatToolbar.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.v},{type:_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.a},{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.D,args:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.d]}]}],MatToolbar.propDecorators={_toolbarRows:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.s,args:[MatToolbarRow,{descendants:!0}]}]},MatToolbar})();let MatToolbarModule=(()=>{class MatToolbarModule{}return MatToolbarModule.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Mc({type:MatToolbarModule}),MatToolbarModule.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Lc({factory:function MatToolbarModule_Factory(t){return new(t||MatToolbarModule)},imports:[[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.i],_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.i]}),MatToolbarModule})()},STbY:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return menu_MatMenuModule}));var a11y=__webpack_require__("u47x"),coercion=__webpack_require__("8LU1"),keycodes=__webpack_require__("FtGj"),core=__webpack_require__("fXoL"),Subject=__webpack_require__("XNiG"),Subscription=__webpack_require__("quSY"),merge=__webpack_require__("VRyK"),of=__webpack_require__("LRne"),asap=__webpack_require__("7Hc7"),startWith=__webpack_require__("JX91"),switchMap=__webpack_require__("eIep"),take=__webpack_require__("IzEk"),filter=__webpack_require__("pLZG"),takeUntil=__webpack_require__("1G5W"),scheduler_async=__webpack_require__("D0XW");var Subscriber=__webpack_require__("7o/Q"),Notification=__webpack_require__("WMd4");function delay_delay(delay,scheduler=scheduler_async.a){const delayFor=function isDate(value){return value instanceof Date&&!isNaN(+value)}(delay)?+delay-scheduler.now():Math.abs(delay);return source=>source.lift(new DelayOperator(delayFor,scheduler))}class DelayOperator{constructor(delay,scheduler){this.delay=delay,this.scheduler=scheduler}call(subscriber,source){return source.subscribe(new delay_DelaySubscriber(subscriber,this.delay,this.scheduler))}}class delay_DelaySubscriber extends Subscriber.a{constructor(destination,delay,scheduler){super(destination),this.delay=delay,this.scheduler=scheduler,this.queue=[],this.active=!1,this.errored=!1}static dispatch(state){const source=state.source,queue=source.queue,scheduler=state.scheduler,destination=state.destination;for(;queue.length>0&&queue[0].time-scheduler.now()<=0;)queue.shift().notification.observe(destination);if(queue.length>0){const delay=Math.max(0,queue[0].time-scheduler.now());this.schedule(state,delay)}else this.unsubscribe(),source.active=!1}_schedule(scheduler){this.active=!0;this.destination.add(scheduler.schedule(delay_DelaySubscriber.dispatch,this.delay,{source:this,destination:this.destination,scheduler:scheduler}))}scheduleNotification(notification){if(!0===this.errored)return;const scheduler=this.scheduler,message=new DelayMessage(scheduler.now()+this.delay,notification);this.queue.push(message),!1===this.active&&this._schedule(scheduler)}_next(value){this.scheduleNotification(Notification.a.createNext(value))}_error(err){this.errored=!0,this.queue=[],this.destination.error(err),this.unsubscribe()}_complete(){this.scheduleNotification(Notification.a.createComplete()),this.unsubscribe()}}class DelayMessage{constructor(time,notification){this.time=time,this.notification=notification}}var animations=__webpack_require__("R0Ic"),portal=__webpack_require__("+rOU"),common=__webpack_require__("ofXK"),fesm2015_core=__webpack_require__("FKr1"),bidi=__webpack_require__("cH1L"),overlay=__webpack_require__("rDax"),platform=__webpack_require__("nLfN"),scrolling=__webpack_require__("vxfF");const _c0=["mat-menu-item",""],_c1=["*"];function _MatMenu_ng_template_0_Template(rf,ctx){if(1&rf){const _r2=core.Vc();core.Uc(0,"div",0),core.cd("keydown",(function _MatMenu_ng_template_0_Template_div_keydown_0_listener($event){core.td(_r2);return core.gd()._handleKeydown($event)}))("click",(function _MatMenu_ng_template_0_Template_div_click_0_listener(){core.td(_r2);return core.gd().closed.emit("click")}))("@transformMenu.start",(function _MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event){core.td(_r2);return core.gd()._onAnimationStart($event)}))("@transformMenu.done",(function _MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event){core.td(_r2);return core.gd()._onAnimationDone($event)})),core.Uc(1,"div",1),core.jd(2),core.Tc(),core.Tc()}if(2&rf){const ctx_r0=core.gd();core.ld("id",ctx_r0.panelId)("ngClass",ctx_r0._classList)("@transformMenu",ctx_r0._panelAnimationState),core.Dc("aria-label",ctx_r0.ariaLabel||null)("aria-labelledby",ctx_r0.ariaLabelledby||null)("aria-describedby",ctx_r0.ariaDescribedby||null)}}const matMenuAnimations={transformMenu:Object(animations.n)("transformMenu",[Object(animations.k)("void",Object(animations.l)({opacity:0,transform:"scale(0.8)"})),Object(animations.m)("void => enter",Object(animations.g)([Object(animations.i)(".mat-menu-content, .mat-mdc-menu-content",Object(animations.e)("100ms linear",Object(animations.l)({opacity:1}))),Object(animations.e)("120ms cubic-bezier(0, 0, 0.2, 1)",Object(animations.l)({transform:"scale(1)"}))])),Object(animations.m)("* => void",Object(animations.e)("100ms 25ms linear",Object(animations.l)({opacity:0})))]),fadeInItems:Object(animations.n)("fadeInItems",[Object(animations.k)("showing",Object(animations.l)({opacity:1})),Object(animations.m)("void => *",[Object(animations.l)({opacity:0}),Object(animations.e)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])};let menu_MatMenuContent=(()=>{class MatMenuContent{constructor(_template,_componentFactoryResolver,_appRef,_injector,_viewContainerRef,_document,_changeDetectorRef){this._template=_template,this._componentFactoryResolver=_componentFactoryResolver,this._appRef=_appRef,this._injector=_injector,this._viewContainerRef=_viewContainerRef,this._document=_document,this._changeDetectorRef=_changeDetectorRef,this._attached=new Subject.a}attach(context={}){this._portal||(this._portal=new portal.i(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new portal.e(this._document.createElement("div"),this._componentFactoryResolver,this._appRef,this._injector));const element=this._template.elementRef.nativeElement;element.parentNode.insertBefore(this._outlet.outletElement,element),this._changeDetectorRef&&this._changeDetectorRef.markForCheck(),this._portal.attach(this._outlet,context),this._attached.next()}detach(){this._portal.isAttached&&this._portal.detach()}ngOnDestroy(){this._outlet&&this._outlet.dispose()}}return MatMenuContent.\u0275fac=function MatMenuContent_Factory(t){return new(t||MatMenuContent)(core.Oc(core.kb),core.Oc(core.p),core.Oc(core.g),core.Oc(core.H),core.Oc(core.qb),core.Oc(common.d),core.Oc(core.k))},MatMenuContent.\u0275dir=core.Jc({type:MatMenuContent,selectors:[["ng-template","matMenuContent",""]]}),MatMenuContent.ctorParameters=()=>[{type:core.kb},{type:core.p},{type:core.g},{type:core.H},{type:core.qb},{type:void 0,decorators:[{type:core.D,args:[common.d]}]},{type:core.k}],MatMenuContent})();const MAT_MENU_PANEL=new core.G("MAT_MENU_PANEL");const _MatMenuItemMixinBase=Object(fesm2015_core.x)(Object(fesm2015_core.y)(class{}));let menu_MatMenuItem=(()=>{class MatMenuItem extends _MatMenuItemMixinBase{constructor(_elementRef,document,_focusMonitor,_parentMenu){super(),this._elementRef=_elementRef,this._focusMonitor=_focusMonitor,this._parentMenu=_parentMenu,this.role="menuitem",this._hovered=new Subject.a,this._focused=new Subject.a,this._highlighted=!1,this._triggersSubmenu=!1,_parentMenu&&_parentMenu.addItem&&_parentMenu.addItem(this),this._document=document}focus(origin="program",options){this._focusMonitor?this._focusMonitor.focusVia(this._getHostElement(),origin,options):this._getHostElement().focus(options),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(event){this.disabled&&(event.preventDefault(),event.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const element=this._elementRef.nativeElement,textNodeType=this._document?this._document.TEXT_NODE:3;let output="";if(element.childNodes){const length=element.childNodes.length;for(let i=0;i<length;i++)element.childNodes[i].nodeType===textNodeType&&(output+=element.childNodes[i].textContent)}return output.trim()}}return MatMenuItem.\u0275fac=function MatMenuItem_Factory(t){return new(t||MatMenuItem)(core.Oc(core.v),core.Oc(common.d),core.Oc(a11y.h),core.Oc(MAT_MENU_PANEL,8))},MatMenuItem.\u0275cmp=core.Ic({type:MatMenuItem,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-focus-indicator"],hostVars:10,hostBindings:function MatMenuItem_HostBindings(rf,ctx){1&rf&&core.cd("click",(function MatMenuItem_click_HostBindingHandler($event){return ctx._checkDisabled($event)}))("mouseenter",(function MatMenuItem_mouseenter_HostBindingHandler(){return ctx._handleMouseEnter()})),2&rf&&(core.Dc("role",ctx.role)("tabindex",ctx._getTabIndex())("aria-disabled",ctx.disabled.toString())("disabled",ctx.disabled||null),core.Fc("mat-menu-item",!0)("mat-menu-item-highlighted",ctx._highlighted)("mat-menu-item-submenu-trigger",ctx._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[core.zc],attrs:_c0,ngContentSelectors:_c1,decls:2,vars:2,consts:[["matRipple","",1,"mat-menu-ripple",3,"matRippleDisabled","matRippleTrigger"]],template:function MatMenuItem_Template(rf,ctx){1&rf&&(core.kd(),core.jd(0),core.Pc(1,"div",0)),2&rf&&(core.Cc(1),core.ld("matRippleDisabled",ctx.disableRipple||ctx.disabled)("matRippleTrigger",ctx._getHostElement()))},directives:[fesm2015_core.r],encapsulation:2,changeDetection:0}),MatMenuItem.ctorParameters=()=>[{type:core.v},{type:void 0,decorators:[{type:core.D,args:[common.d]}]},{type:a11y.h},{type:void 0,decorators:[{type:core.D,args:[MAT_MENU_PANEL]},{type:core.T}]}],MatMenuItem.propDecorators={role:[{type:core.I}],_checkDisabled:[{type:core.B,args:["click",["$event"]]}],_handleMouseEnter:[{type:core.B,args:["mouseenter"]}]},MatMenuItem})();const MAT_MENU_DEFAULT_OPTIONS=new core.G("mat-menu-default-options",{providedIn:"root",factory:function MAT_MENU_DEFAULT_OPTIONS_FACTORY(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let menuPanelUid=0,menu_MatMenuBase=(()=>{class _MatMenuBase{constructor(_elementRef,_ngZone,_defaultOptions){this._elementRef=_elementRef,this._ngZone=_ngZone,this._defaultOptions=_defaultOptions,this._xPosition=this._defaultOptions.xPosition,this._yPosition=this._defaultOptions.yPosition,this._directDescendantItems=new core.Z,this._tabSubscription=Subscription.a.EMPTY,this._classList={},this._panelAnimationState="void",this._animationDone=new Subject.a,this.backdropClass=this._defaultOptions.backdropClass,this._overlapTrigger=this._defaultOptions.overlapTrigger,this._hasBackdrop=this._defaultOptions.hasBackdrop,this.closed=new core.y,this.close=this.closed,this.panelId="mat-menu-panel-"+menuPanelUid++}get xPosition(){return this._xPosition}set xPosition(value){"before"!==value&&"after"!==value&&function throwMatMenuInvalidPositionX(){throw Error('xPosition value must be either \'before\' or after\'.\n      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>')}(),this._xPosition=value,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(value){"above"!==value&&"below"!==value&&function throwMatMenuInvalidPositionY(){throw Error('yPosition value must be either \'above\' or below\'.\n      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>')}(),this._yPosition=value,this.setPositionClasses()}get overlapTrigger(){return this._overlapTrigger}set overlapTrigger(value){this._overlapTrigger=Object(coercion.c)(value)}get hasBackdrop(){return this._hasBackdrop}set hasBackdrop(value){this._hasBackdrop=Object(coercion.c)(value)}set panelClass(classes){const previousPanelClass=this._previousPanelClass;previousPanelClass&&previousPanelClass.length&&previousPanelClass.split(" ").forEach(className=>{this._classList[className]=!1}),this._previousPanelClass=classes,classes&&classes.length&&(classes.split(" ").forEach(className=>{this._classList[className]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(classes){this.panelClass=classes}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new a11y.g(this._directDescendantItems).withWrap().withTypeAhead(),this._tabSubscription=this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Object(startWith.a)(this._directDescendantItems),Object(switchMap.a)(items=>Object(merge.a)(...items.map(item=>item._focused)))).subscribe(focusedItem=>this._keyManager.updateActiveItem(focusedItem))}ngOnDestroy(){this._directDescendantItems.destroy(),this._tabSubscription.unsubscribe(),this.closed.complete()}_hovered(){return this._directDescendantItems.changes.pipe(Object(startWith.a)(this._directDescendantItems),Object(switchMap.a)(items=>Object(merge.a)(...items.map(item=>item._hovered))))}addItem(_item){}removeItem(_item){}_handleKeydown(event){const keyCode=event.keyCode,manager=this._keyManager;switch(keyCode){case keycodes.f:Object(keycodes.r)(event)||(event.preventDefault(),this.closed.emit("keydown"));break;case keycodes.h:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case keycodes.l:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;case keycodes.g:case keycodes.d:Object(keycodes.r)(event)||(keyCode===keycodes.g?manager.setFirstItemActive():manager.setLastItemActive(),event.preventDefault());break;default:keyCode!==keycodes.o&&keyCode!==keycodes.c||manager.setFocusOrigin("keyboard"),manager.onKeydown(event)}}focusFirstItem(origin="program"){this.lazyContent?this._ngZone.onStable.asObservable().pipe(Object(take.a)(1)).subscribe(()=>this._focusFirstItem(origin)):this._focusFirstItem(origin)}_focusFirstItem(origin){const manager=this._keyManager;if(manager.setFocusOrigin(origin).setFirstItemActive(),!manager.activeItem&&this._directDescendantItems.length){let element=this._directDescendantItems.first._getHostElement().parentElement;for(;element;){if("menu"===element.getAttribute("role")){element.focus();break}element=element.parentElement}}}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(depth){const newElevation="mat-elevation-z"+Math.min(4+depth,24),customElevation=Object.keys(this._classList).find(c=>c.startsWith("mat-elevation-z"));customElevation&&customElevation!==this._previousElevation||(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[newElevation]=!0,this._previousElevation=newElevation)}setPositionClasses(posX=this.xPosition,posY=this.yPosition){const classes=this._classList;classes["mat-menu-before"]="before"===posX,classes["mat-menu-after"]="after"===posX,classes["mat-menu-above"]="above"===posY,classes["mat-menu-below"]="below"===posY}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(event){this._animationDone.next(event),this._isAnimating=!1}_onAnimationStart(event){this._isAnimating=!0,"enter"===event.toState&&0===this._keyManager.activeItemIndex&&(event.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(Object(startWith.a)(this._allItems)).subscribe(items=>{this._directDescendantItems.reset(items.filter(item=>item._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}}return _MatMenuBase.\u0275fac=function _MatMenuBase_Factory(t){return new(t||_MatMenuBase)(core.Oc(core.v),core.Oc(core.S),core.Oc(MAT_MENU_DEFAULT_OPTIONS))},_MatMenuBase.\u0275dir=core.Jc({type:_MatMenuBase,contentQueries:function _MatMenuBase_ContentQueries(rf,ctx,dirIndex){var _t;(1&rf&&(core.Hc(dirIndex,menu_MatMenuContent,!0),core.Hc(dirIndex,menu_MatMenuItem,!0),core.Hc(dirIndex,menu_MatMenuItem,!1)),2&rf)&&(core.qd(_t=core.dd())&&(ctx.lazyContent=_t.first),core.qd(_t=core.dd())&&(ctx._allItems=_t),core.qd(_t=core.dd())&&(ctx.items=_t))},viewQuery:function _MatMenuBase_Query(rf,ctx){var _t;(1&rf&&core.Ed(core.kb,!0),2&rf)&&(core.qd(_t=core.dd())&&(ctx.templateRef=_t.first))},inputs:{backdropClass:"backdropClass",xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:"overlapTrigger",hasBackdrop:"hasBackdrop",panelClass:["class","panelClass"],classList:"classList",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{closed:"closed",close:"close"}}),_MatMenuBase.ctorParameters=()=>[{type:core.v},{type:core.S},{type:void 0,decorators:[{type:core.D,args:[MAT_MENU_DEFAULT_OPTIONS]}]}],_MatMenuBase.propDecorators={_allItems:[{type:core.s,args:[menu_MatMenuItem,{descendants:!0}]}],backdropClass:[{type:core.I}],ariaLabel:[{type:core.I,args:["aria-label"]}],ariaLabelledby:[{type:core.I,args:["aria-labelledby"]}],ariaDescribedby:[{type:core.I,args:["aria-describedby"]}],xPosition:[{type:core.I}],yPosition:[{type:core.I}],templateRef:[{type:core.ob,args:[core.kb]}],items:[{type:core.s,args:[menu_MatMenuItem,{descendants:!1}]}],lazyContent:[{type:core.r,args:[menu_MatMenuContent]}],overlapTrigger:[{type:core.I}],hasBackdrop:[{type:core.I}],panelClass:[{type:core.I,args:["class"]}],classList:[{type:core.I}],closed:[{type:core.U}],close:[{type:core.U}]},_MatMenuBase})(),menu_MatMenu=(()=>{class MatMenu extends menu_MatMenuBase{}MatMenu.\u0275fac=function MatMenu_Factory(t){return \u0275MatMenu_BaseFactory(t||MatMenu)},MatMenu.\u0275dir=core.Jc({type:MatMenu,features:[core.zc]});const \u0275MatMenu_BaseFactory=core.Wc(MatMenu);return MatMenu})();(()=>{class _MatMenu extends menu_MatMenu{constructor(elementRef,ngZone,defaultOptions){super(elementRef,ngZone,defaultOptions)}}_MatMenu.\u0275fac=function _MatMenu_Factory(t){return new(t||_MatMenu)(core.Oc(core.v),core.Oc(core.S),core.Oc(MAT_MENU_DEFAULT_OPTIONS))},_MatMenu.\u0275cmp=core.Ic({type:_MatMenu,selectors:[["mat-menu"]],exportAs:["matMenu"],features:[core.Bc([{provide:MAT_MENU_PANEL,useExisting:menu_MatMenu},{provide:menu_MatMenu,useExisting:_MatMenu}]),core.zc],ngContentSelectors:_c1,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-menu-panel",3,"id","ngClass","keydown","click"],[1,"mat-menu-content"]],template:function _MatMenu_Template(rf,ctx){1&rf&&(core.kd(),core.zd(0,_MatMenu_ng_template_0_Template,3,6,"ng-template"))},directives:[common.i],styles:['.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:"";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n'],encapsulation:2,data:{animation:[matMenuAnimations.transformMenu,matMenuAnimations.fadeInItems]},changeDetection:0}),_MatMenu.ctorParameters=()=>[{type:core.v},{type:core.S},{type:void 0,decorators:[{type:core.D,args:[MAT_MENU_DEFAULT_OPTIONS]}]}]})();const MAT_MENU_SCROLL_STRATEGY=new core.G("mat-menu-scroll-strategy");const MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER={provide:MAT_MENU_SCROLL_STRATEGY,deps:[overlay.c],useFactory:function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay){return()=>overlay.scrollStrategies.reposition()}},passiveEventListenerOptions=Object(platform.f)({passive:!0});(()=>{class MatMenuTrigger{constructor(_overlay,_element,_viewContainerRef,scrollStrategy,_parentMenu,_menuItemInstance,_dir,_focusMonitor){this._overlay=_overlay,this._element=_element,this._viewContainerRef=_viewContainerRef,this._parentMenu=_parentMenu,this._menuItemInstance=_menuItemInstance,this._dir=_dir,this._focusMonitor=_focusMonitor,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=Subscription.a.EMPTY,this._hoverSubscription=Subscription.a.EMPTY,this._menuCloseSubscription=Subscription.a.EMPTY,this._handleTouchStart=()=>this._openedBy="touch",this._openedBy=null,this.restoreFocus=!0,this.menuOpened=new core.y,this.onMenuOpen=this.menuOpened,this.menuClosed=new core.y,this.onMenuClose=this.menuClosed,_element.nativeElement.addEventListener("touchstart",this._handleTouchStart,passiveEventListenerOptions),_menuItemInstance&&(_menuItemInstance._triggersSubmenu=this.triggersSubmenu()),this._scrollStrategy=scrollStrategy}get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(v){this.menu=v}get menu(){return this._menu}set menu(menu){menu!==this._menu&&(this._menu=menu,this._menuCloseSubscription.unsubscribe(),menu&&(this._menuCloseSubscription=menu.close.asObservable().subscribe(reason=>{this._destroyMenu(),"click"!==reason&&"tab"!==reason||!this._parentMenu||this._parentMenu.closed.emit(reason)})))}ngAfterContentInit(){this._checkMenu(),this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,passiveEventListenerOptions),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!(!this._menuItemInstance||!this._parentMenu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){if(this._menuOpen)return;this._checkMenu();const overlayRef=this._createOverlay(),overlayConfig=overlayRef.getConfig();this._setPosition(overlayConfig.positionStrategy),overlayConfig.hasBackdrop=null==this.menu.hasBackdrop?!this.triggersSubmenu():this.menu.hasBackdrop,overlayRef.attach(this._getPortal()),this.menu.lazyContent&&this.menu.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(),this.menu instanceof menu_MatMenu&&this.menu._startAnimation()}closeMenu(){this.menu.close.emit()}focus(origin="program",options){this._focusMonitor?this._focusMonitor.focusVia(this._element,origin,options):this._element.nativeElement.focus(options)}_destroyMenu(){if(!this._overlayRef||!this.menuOpen)return;const menu=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this._restoreFocus(),menu instanceof menu_MatMenu?(menu._resetAnimation(),menu.lazyContent?menu._animationDone.pipe(Object(filter.a)(event=>"void"===event.toState),Object(take.a)(1),Object(takeUntil.a)(menu.lazyContent._attached)).subscribe({next:()=>menu.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),menu.lazyContent&&menu.lazyContent.detach())}_initMenu(){this.menu.parentMenu=this.triggersSubmenu()?this._parentMenu:void 0,this.menu.direction=this.dir,this._setMenuElevation(),this._setIsMenuOpen(!0),this.menu.focusFirstItem(this._openedBy||"program")}_setMenuElevation(){if(this.menu.setElevation){let depth=0,parentMenu=this.menu.parentMenu;for(;parentMenu;)depth++,parentMenu=parentMenu.parentMenu;this.menu.setElevation(depth)}}_restoreFocus(){this.restoreFocus&&(this._openedBy?this.triggersSubmenu()||this.focus(this._openedBy):this.focus()),this._openedBy=null}_setIsMenuOpen(isOpen){this._menuOpen=isOpen,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&(this._menuItemInstance._highlighted=isOpen)}_checkMenu(){this.menu||function throwMatMenuMissingError(){throw Error('matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu="matMenu"></mat-menu>\n      <button [matMenuTriggerFor]="menu"></button>')}()}_createOverlay(){if(!this._overlayRef){const config=this._getOverlayConfig();this._subscribeToPositions(config.positionStrategy),this._overlayRef=this._overlay.create(config),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(){return new overlay.d({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:this.menu.backdropClass||"cdk-overlay-transparent-backdrop",scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(position){this.menu.setPositionClasses&&position.positionChanges.subscribe(change=>{const posX="start"===change.connectionPair.overlayX?"after":"before",posY="top"===change.connectionPair.overlayY?"below":"above";this.menu.setPositionClasses(posX,posY)})}_setPosition(positionStrategy){let[originX,originFallbackX]="before"===this.menu.xPosition?["end","start"]:["start","end"],[overlayY,overlayFallbackY]="above"===this.menu.yPosition?["bottom","top"]:["top","bottom"],[originY,originFallbackY]=[overlayY,overlayFallbackY],[overlayX,overlayFallbackX]=[originX,originFallbackX],offsetY=0;this.triggersSubmenu()?(overlayFallbackX=originX="before"===this.menu.xPosition?"start":"end",originFallbackX=overlayX="end"===originX?"start":"end",offsetY="bottom"===overlayY?8:-8):this.menu.overlapTrigger||(originY="top"===overlayY?"bottom":"top",originFallbackY="top"===overlayFallbackY?"bottom":"top"),positionStrategy.withPositions([{originX:originX,originY:originY,overlayX:overlayX,overlayY:overlayY,offsetY:offsetY},{originX:originFallbackX,originY:originY,overlayX:overlayFallbackX,overlayY:overlayY,offsetY:offsetY},{originX:originX,originY:originFallbackY,overlayX:overlayX,overlayY:overlayFallbackY,offsetY:-offsetY},{originX:originFallbackX,originY:originFallbackY,overlayX:overlayFallbackX,overlayY:overlayFallbackY,offsetY:-offsetY}])}_menuClosingActions(){const backdrop=this._overlayRef.backdropClick(),detachments=this._overlayRef.detachments(),parentClose=this._parentMenu?this._parentMenu.closed:Object(of.a)(),hover=this._parentMenu?this._parentMenu._hovered().pipe(Object(filter.a)(active=>active!==this._menuItemInstance),Object(filter.a)(()=>this._menuOpen)):Object(of.a)();return Object(merge.a)(backdrop,parentClose,hover,detachments)}_handleMousedown(event){Object(a11y.l)(event)||(this._openedBy=0===event.button?"mouse":null,this.triggersSubmenu()&&event.preventDefault())}_handleKeydown(event){const keyCode=event.keyCode;this.triggersSubmenu()&&(keyCode===keycodes.l&&"ltr"===this.dir||keyCode===keycodes.h&&"rtl"===this.dir)&&this.openMenu()}_handleClick(event){this.triggersSubmenu()?(event.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&(this._hoverSubscription=this._parentMenu._hovered().pipe(Object(filter.a)(active=>active===this._menuItemInstance&&!active.disabled),delay_delay(0,asap.a)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof menu_MatMenu&&this.menu._isAnimating?this.menu._animationDone.pipe(Object(take.a)(1),delay_delay(0,asap.a),Object(takeUntil.a)(this._parentMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(){return this._portal&&this._portal.templateRef===this.menu.templateRef||(this._portal=new portal.i(this.menu.templateRef,this._viewContainerRef)),this._portal}}MatMenuTrigger.\u0275fac=function MatMenuTrigger_Factory(t){return new(t||MatMenuTrigger)(core.Oc(overlay.c),core.Oc(core.v),core.Oc(core.qb),core.Oc(MAT_MENU_SCROLL_STRATEGY),core.Oc(menu_MatMenu,8),core.Oc(menu_MatMenuItem,10),core.Oc(bidi.b,8),core.Oc(a11y.h))},MatMenuTrigger.\u0275dir=core.Jc({type:MatMenuTrigger,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:["aria-haspopup","true",1,"mat-menu-trigger"],hostVars:2,hostBindings:function MatMenuTrigger_HostBindings(rf,ctx){1&rf&&core.cd("mousedown",(function MatMenuTrigger_mousedown_HostBindingHandler($event){return ctx._handleMousedown($event)}))("keydown",(function MatMenuTrigger_keydown_HostBindingHandler($event){return ctx._handleKeydown($event)}))("click",(function MatMenuTrigger_click_HostBindingHandler($event){return ctx._handleClick($event)})),2&rf&&core.Dc("aria-expanded",ctx.menuOpen||null)("aria-controls",ctx.menuOpen?ctx.menu.panelId:null)},inputs:{restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"],_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"]}),MatMenuTrigger.ctorParameters=()=>[{type:overlay.c},{type:core.v},{type:core.qb},{type:void 0,decorators:[{type:core.D,args:[MAT_MENU_SCROLL_STRATEGY]}]},{type:menu_MatMenu,decorators:[{type:core.T}]},{type:menu_MatMenuItem,decorators:[{type:core.T},{type:core.fb}]},{type:bidi.b,decorators:[{type:core.T}]},{type:a11y.h}],MatMenuTrigger.propDecorators={_deprecatedMatMenuTriggerFor:[{type:core.I,args:["mat-menu-trigger-for"]}],menu:[{type:core.I,args:["matMenuTriggerFor"]}],menuData:[{type:core.I,args:["matMenuTriggerData"]}],restoreFocus:[{type:core.I,args:["matMenuTriggerRestoreFocus"]}],menuOpened:[{type:core.U}],onMenuOpen:[{type:core.U}],menuClosed:[{type:core.U}],onMenuClose:[{type:core.U}]}})();let menu_MatMenuDirectivesModule=(()=>{class _MatMenuDirectivesModule{}return _MatMenuDirectivesModule.\u0275mod=core.Mc({type:_MatMenuDirectivesModule}),_MatMenuDirectivesModule.\u0275inj=core.Lc({factory:function _MatMenuDirectivesModule_Factory(t){return new(t||_MatMenuDirectivesModule)},providers:[MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],imports:[fesm2015_core.i]}),_MatMenuDirectivesModule})(),menu_MatMenuModule=(()=>{class MatMenuModule{}return MatMenuModule.\u0275mod=core.Mc({type:MatMenuModule}),MatMenuModule.\u0275inj=core.Lc({factory:function MatMenuModule_Factory(t){return new(t||MatMenuModule)},providers:[MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],imports:[[common.c,fesm2015_core.i,fesm2015_core.s,overlay.f,menu_MatMenuDirectivesModule],scrolling.b,fesm2015_core.i,menu_MatMenuDirectivesModule]}),MatMenuModule})()}};