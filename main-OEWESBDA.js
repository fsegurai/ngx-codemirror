import{a as tn,b as en,d as Ht,e as nn,f as an,g as zt,i as on,j as rn,l as sn}from"./chunk-JLJY3R3M.js";import{$ as pe,$a as Rt,$b as Q,Aa as wt,Ab as ke,B as st,Ba as Mt,Bb as xe,Ca as F,Cb as Te,Cc as at,Da as l,Db as ft,E as V,Ea as d,Eb as Be,F as P,Fa as p,Fb as Ie,G as w,Gb as we,H as K,Hb as Me,I as s,Ib as _t,Ja as St,Jb as Se,K as M,Kb as Re,L as At,La as h,Lb as Pe,M as kt,Ma as ut,Mb as Le,N as me,Na as R,O as L,Oa as B,Ob as Ot,P as g,Pa as dt,Pb as Oe,Qa as mt,Qb as Ne,R as xt,Ra as D,Rb as He,S as ct,Sa as v,Sb as ze,T as lt,Tb as je,U as $,Ua as _e,Va as ge,Wa as bt,Wb as W,Xa as De,Y as f,Ya as y,Yb as Ve,Z as be,Za as et,Zb as $e,_a as N,a as yt,aa as he,ab as Pt,b as Xt,ba as m,bc as We,c as C,ca as Y,cc as Qe,d as Jt,da as Tt,e as te,eb as ve,ec as Ue,fa as fe,fc as Ze,g as A,h as ee,hb as Ce,hc as qe,i as j,ic as nt,ja as b,jb as Fe,k as ne,ka as O,kb as pt,l as ae,la as T,m as Et,ma as X,n as ie,na as Bt,nb as ye,oc as Ge,p as oe,pc as U,q as re,qb as ht,r as se,rb as E,s as ce,sb as Lt,sc as Ke,tc as Nt,u as le,ua as S,uc as Ye,vc as gt,w as ue,wb as Ee,wc as Xe,x as rt,xa as J,xc as Z,y as de,ya as tt,z as k,za as It,zb as Ae,zc as Je}from"./chunk-XSC27SVJ.js";import{a as z}from"./chunk-2NFLSA4Y.js";Prism.languages.typescript=Prism.languages.extend("typescript",{"class-name":[Prism.languages.typescript["class-name"],{pattern:/(:)\s*([A-Z][a-zA-Z0-9_]*(?:\[\])?)/,lookbehind:!0,alias:"type-annotation"},{pattern:/([A-Z][a-zA-Z0-9_]*)\s*(<[^>]*>)/,inside:{generic:{pattern:/<[^>]*>/,inside:Prism.languages.typescript}}},{pattern:/(implements\s+)([A-Z][a-zA-Z0-9_]*(?:\s*,\s*[A-Z][a-zA-Z0-9_]*)*)/,lookbehind:!0,inside:{"interface-name":/[A-Z][a-zA-Z0-9_]*/,punctuation:/,/}},{pattern:/(extends\s+)([A-Z][a-zA-Z0-9_]*)/,lookbehind:!0},{pattern:/(new\s+)([A-Z][a-zA-Z0-9_]*)/,lookbehind:!0},{pattern:/\b([A-Z][a-zA-Z0-9_]*)(\s*\.)/,lookbehind:!1,inside:{"class-reference":/[A-Z][a-zA-Z0-9_]*/,punctuation:/\./}}],function:[Prism.languages.typescript.function,{pattern:/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*[=:]\s*\([^)]*\)\s*=>/,inside:{"function-name":/^[a-zA-Z_$][a-zA-Z0-9_$]*/,punctuation:/[=:()]/,operator:/=>/}},{pattern:/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)\s*[:{]/,inside:{"method-name":/^[a-zA-Z_$][a-zA-Z0-9_$]*/,punctuation:/[(){}:]/}}],keyword:[...Prism.languages.typescript.keyword,/\b(?:abstract|as|asserts|constructor|declare|enum|implements|interface|is|keyof|namespace|never|readonly|type|typeof|unknown)\b/,/\b(?:private|protected|public|static|readonly)\b/],decorator:{pattern:/@[a-zA-Z_$][a-zA-Z0-9_$]*(?:\.[a-zA-Z_$][a-zA-Z0-9_$]*)*/,alias:"symbol"},"type-assertion":{pattern:/<[^>]+>/,inside:Prism.languages.typescript},import:[Prism.languages.typescript.import,{pattern:/(import\s*{)\s*([^}]+)/,lookbehind:!0,inside:{"import-name":/[a-zA-Z_$][a-zA-Z0-9_$]*/,punctuation:/[,\s]/,keyword:/\bas\b/}},{pattern:/(import\s+)([a-zA-Z_$][a-zA-Z0-9_$]*)/,lookbehind:!0,alias:"import-default"}],generic:{pattern:/<[^<>]*>/,inside:Prism.languages.typescript},"type-parameter":{pattern:/\b[A-Z][a-zA-Z0-9_]*(?:\s+extends\s+[^,>=]+)?/,inside:{constraint:{pattern:/extends\s+.+/,inside:Prism.languages.typescript}}}});Prism.languages.ts=Prism.languages.typescript;var cn=[{path:"get-started",loadComponent:()=>import("./chunk-TMYAUMIE.js"),data:{label:"Get Started"}},{path:"render",loadComponent:()=>import("./chunk-Y6SSY35K.js"),data:{label:"Render"}},{path:"playground",loadComponent:()=>import("./chunk-BTOQUP2Z.js"),data:{label:"Playground"}},{path:"**",redirectTo:"get-started"}];function ln(a){let r=new Ot;return r.link=({href:t,title:e,tokens:n,text:i,raw:o})=>{let c=a.normalizeExternalUrl(t);return Ot.prototype.link.call(r,{type:"link",raw:o,href:c,title:e,text:i,tokens:n})},{renderer:r}}var q=class a{constructor(){this.document=s(g);this.locationStrategy=s(Ee);this.route=s(we);this.router=s(_t);this.viewportScroller=s(ke)}interceptClick(r){let t=r.target;if(!(t instanceof HTMLAnchorElement))return;let e=t.getAttribute("href")||"";this.isExternalUrl(e)||this.isRouterLink(t)||(this.navigate(e),r.preventDefault())}navigate(r,t=!1){let e=this.getUrlTree(r);this.router.navigated=!1,this.router.navigateByUrl(e,{replaceUrl:t})}normalizeExternalUrl(r){if(this.isExternalUrl(r))return r;let t=this.getUrlTree(r),e=this.router.serializeUrl(t);return this.locationStrategy.prepareExternalUrl(e)}scrollToAnchor(){this.router.parseUrl(this.router.url).fragment&&this.navigate(this.router.url,!0)}setOffset(...r){this.viewportScroller.setOffset(...r)}getUrlTree(r){let t=this.stripFragment(r)||this.stripFragment(this.router.url),e=this.router.parseUrl(r).fragment||void 0;return this.router.createUrlTree([t],{relativeTo:this.route,fragment:e})}isExternalUrl(r){try{let t=new URL(r,this.document.location?.origin??"http://localhost");return["http:","https:","ftp:","ftps:","mailto:","tel:","sms:","geo:","file:","data:"].includes(t.protocol)}catch{return!1}}isRouterLink(r){return r.getAttributeNames().some(t=>t.startsWith("_ngcontent"))}stripFragment(r){return/[^#]*/.exec(r)[0]}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275prov=V({token:a,factory:a.\u0275fac,providedIn:"root"})}};function Sn(a,r){if(a&1){let t=St();l(0,"div",1)(1,"button",2),h("click",function(){At(t);let n=ut();return kt(n.action())}),N(2),d()()}if(a&2){let t=ut();m(2),Pt(" ",t.data.action," ")}}var Rn=["label"];function Pn(a,r){}var Ln=Math.pow(2,31)-1,it=class{_overlayRef;instance;containerInstance;_afterDismissed=new C;_afterOpened=new C;_onAction=new C;_durationTimeoutId;_dismissedByAction=!1;constructor(r,t){this._overlayRef=t,this.containerInstance=r,r._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(r){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(r,Ln))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},un=new w("MatSnackBarData"),G=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},On=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=T({type:a,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return a})(),Nn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=T({type:a,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return a})(),Hn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=T({type:a,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return a})(),zn=(()=>{class a{snackBarRef=s(it);data=s(un);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(l(0,"div",0),N(1),d(),J(2,Sn,3,1,"div",1)),e&2&&(m(),Pt(" ",n.data.message,`
`),m(),tt(n.hasAction?2:-1))},dependencies:[Je,On,Nn,Hn],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return a})(),jt="_mat-snack-bar-enter",Vt="_mat-snack-bar-exit",jn=(()=>{class a extends an{_ngZone=s(ct);_elementRef=s(f);_changeDetectorRef=s(ht);_platform=s(W);_animationsDisabled=U();snackBarConfig=s(G);_document=s(g);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(L);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new C;_onExit=new C;_onEnter=new C;_animationState="void";_live;_label;_role;_liveElementId=s(nt).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===Vt?this._completeExit():t===jt&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Y(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(jt)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(jt)},200)))}exit(){return this._destroyed?A(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Y(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Vt)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Vt),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(o=>t.classList.add(o)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,i="mdc-snackbar__label";n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let i=e[n],o=i.getAttribute("aria-owns");this._trackedModals.add(i),o?o.indexOf(t)===-1&&i.setAttribute("aria-owns",o+" "+t):i.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),n=t.querySelector("[aria-live]");if(e&&n){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(i=document.activeElement),e.removeAttribute("aria-hidden"),n.appendChild(e),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&mt(zt,7)(Rn,7),e&2){let i;D(i=v())&&(n._portalOutlet=i.first),D(i=v())&&(n._label=i.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(e,n){e&1&&h("animationend",function(o){return n.onAnimationEnd(o.animationName)})("animationcancel",function(o){return n.onAnimationEnd(o.animationName)}),e&2&&y("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[X],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(l(0,"div",1)(1,"div",2,0)(3,"div",3),Bt(4,Pn,0,0,"ng-template",4),d(),p(5,"div"),d()()),e&2&&(m(5),S("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[zt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return a})(),Vn=new w("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new G}),dn=(()=>{class a{_live=s(Ue);_injector=s(L);_breakpointObserver=s(We);_parentSnackBar=s(a,{optional:!0,skipSelf:!0});_defaultConfig=s(Vn);_animationsDisabled=U();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=zn;snackBarContainerComponent=jn;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let i=z(z({},this._defaultConfig),n);return i.data={message:t,action:e},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,i=L.create({parent:n||this._injector,providers:[{provide:G,useValue:e}]}),o=new Ht(this.snackBarContainerComponent,e.viewContainerRef,i),c=t.attach(o);return c.instance.snackBarConfig=e,c.instance}_attach(t,e){let n=z(z(z({},new G),this._defaultConfig),e),i=this._createOverlay(n),o=this._attachSnackBarContainer(i,n),c=new it(o,i);if(t instanceof Tt){let u=new nn(t,null,{$implicit:n.data,snackBarRef:c});c.instance=o.attachTemplatePortal(u)}else{let u=this._createInjector(n,c),_=new Ht(t,void 0,u),x=o.attachComponentPortal(_);c.instance=x.instance}return this._breakpointObserver.observe(Ge.HandsetPortrait).pipe(k(i.detachments())).subscribe(u=>{i.overlayElement.classList.toggle(this.handsetCssClass,u.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(c,n),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new on;e.direction=t.direction;let n=rn(this._injector),i=t.direction==="rtl",o=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!i||t.horizontalPosition==="end"&&i,c=!o&&t.horizontalPosition!=="center";return o?n.left("0"):c?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,e.disableAnimations=this._animationsDisabled,sn(this._injector,e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return L.create({parent:n||this._injector,providers:[{provide:it,useValue:e},{provide:un,useValue:t.data}]})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=V({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Dt=class a{constructor(){this.snackbar=s(dn)}onCopyToClipboard(){this.snackbar.open("Copied to clipboard via component!",void 0,{duration:3e3,horizontalPosition:"right",verticalPosition:"bottom"})}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=b({type:a,selectors:[["app-clipboard-button"]],decls:3,vars:0,consts:[["aria-label","Copy to clipboard","mat-icon-button","","type","button",1,"btn-clipboard",3,"click"],["aria-hidden","true","viewBox","0 0 24 24",2,"width","16px","height","16px"],["d","M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z","fill","#fff"]],template:function(t,e){t&1&&(l(0,"button",0),h("click",function(){return e.onCopyToClipboard()}),me(),l(1,"svg",1),p(2,"path",2),d()())},dependencies:[at,gt],styles:[".btn-clipboard.mat-mdc-icon-button[_ngcontent-%COMP%]{height:30px;width:30px;padding:0}"],changeDetection:0})}};var mn=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;var Qn=Object.hasOwnProperty,ot=class{constructor(){this.occurrences,this.reset()}slug(r,t){let e=this,n=Un(r,t===!0),i=n;for(;Qn.call(e.occurrences,n);)e.occurrences[i]++,n=i+"-"+e.occurrences[i];return e.occurrences[n]=0,n}reset(){this.occurrences=Object.create(null)}};function Un(a,r){return typeof a!="string"?"":(r||(a=a.toLowerCase()),a.replace(mn,"").replace(/ /g,"-"))}var bn=new ot,pn=[],Zn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function qn(a){return a.replace(Zn,(r,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}function hn({prefix:a="",globalSlugs:r=!1}={}){return{headerIds:!1,hooks:{preprocess(t){return r||Gn(),t}},useNewRenderer:!0,renderer:{heading({tokens:t,depth:e}){let n=this.parser.parseInline(t),i=qn(n).trim().replace(/<[!\/a-z].*?>/gi,""),o=e,c=`${a}${bn.slug(i.toLowerCase())}`,u={level:o,text:n,id:c,raw:i};return pn.push(u),`<h${o} id="${c}">${n}</h${o}>
`}}}}function Gn(){pn=[],bn=new ot}var fn={providers:[Ce(),Be(),Pe(cn,Le({anchorScrolling:"enabled",scrollPositionRestoration:"enabled"})),je({loader:ft,clipboardOptions:{provide:Oe,useValue:{buttonComponent:Dt}},markedOptions:{provide:He,useFactory:ln,deps:[q]},markedExtensions:[{provide:Ne,useFactory:hn,multi:!0}],mermaidOptions:{provide:ze,useValue:{darkMode:!0,look:"handDrawn"}},sanitize:M.NONE})]};function _n(a){return Error(`Unable to find icon with the name "${a}"`)}function Kn(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function gn(a){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${a}".`)}function Dn(a){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${a}".`)}var I=class{url;svgText;options;svgElement=null;constructor(r,t,e){this.url=r,this.svgText=t,this.options=e}},Cn=(()=>{class a{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,n,i){this._httpClient=t,this._sanitizer=e,this._errorHandler=i,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,i){return this._addSvgIconConfig(t,e,new I(n,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,i){let o=this._sanitizer.sanitize(M.HTML,n);if(!o)throw Dn(n);let c=Q(o);return this._addSvgIconConfig(t,e,new I("",c,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new I(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let i=this._sanitizer.sanitize(M.HTML,e);if(!i)throw Dn(e);let o=Q(i);return this._addSvgIconSetConfig(t,new I("",o,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(M.RESOURCE_URL,t);if(!e)throw gn(t);let n=this._cachedIconsByUrl.get(e);return n?A(vt(n)):this._loadSvgIconFromConfig(new I(t,null)).pipe(st(i=>this._cachedIconsByUrl.set(e,i)),j(i=>vt(i)))}getNamedSvgIcon(t,e=""){let n=vn(e,t),i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(e,t),i)return this._svgIconConfigs.set(n,i),this._getSvgFromConfig(i);let o=this._iconSetConfigs.get(e);return o?this._getSvgFromIconSetConfigs(t,o):ee(_n(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?A(vt(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(j(e=>vt(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return A(n);let i=e.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(oe(c=>{let _=`Loading icon set URL: ${this._sanitizer.sanitize(M.RESOURCE_URL,o.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(_)),A(null)})));return ne(i).pipe(j(()=>{let o=this._extractIconWithNameFromAnySet(t,e);if(!o)throw _n(t);return o}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){let o=this._svgElementFromConfig(i),c=this._extractSvgIconFromSet(o,t,i.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(st(e=>t.svgText=e),j(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?A(null):this._fetchIcon(t).pipe(st(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let i=t.querySelector(`[id="${e}"]`);if(!i)return null;let o=i.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,n);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),n);let c=this._svgElementFromString(Q("<svg></svg>"));return c.appendChild(o),this._setSvgAttributes(c,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(Q("<svg></svg>")),n=t.attributes;for(let i=0;i<n.length;i++){let{name:o,value:c}=n[i];o!=="id"&&e.setAttribute(o,c)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[i].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,i=n?.withCredentials??!1;if(!this._httpClient)throw Kn();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let o=this._sanitizer.sanitize(M.RESOURCE_URL,e);if(!o)throw gn(e);let c=this._inProgressUrlFetches.get(o);if(c)return c;let u=this._httpClient.get(o,{responseType:"text",withCredentials:i}).pipe(j(_=>Q(_)),ce(()=>this._inProgressUrlFetches.delete(o)),le());return this._inProgressUrlFetches.set(o,u),u}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(vn(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let i=this._resolvers[n](e,t);if(i)return Yn(i)?new I(i.url,null,i.options):new I(i,null)}}static \u0275fac=function(e){return new(e||a)(K(ft,8),K(Ie),K(g,8),K(lt))};static \u0275prov=V({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function vt(a){return a.cloneNode(!0)}function vn(a,r){return a+":"+r}function Yn(a){return!!(a.url&&a.options)}var Xn=["*"],Jn=new w("MAT_ICON_DEFAULT_OPTIONS"),ta=new w("mat-icon-location",{providedIn:"root",factory:()=>{let a=s(g),r=a?a.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),Fn=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ea=Fn.map(a=>`[${a}]`).join(", "),na=/^url\(['"]?#(.*?)['"]?\)$/,yn=(()=>{class a{_elementRef=s(f);_iconRegistry=s(Cn);_location=s(ta);_errorHandler=s(lt);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=yt.EMPTY;constructor(){let t=s(new pt("aria-hidden"),{optional:!0}),e=s(Jn,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,i)=>{n.forEach(o=>{i.setAttribute(o.name,`url('${t}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ea),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<e.length;i++)Fn.forEach(o=>{let c=e[i],u=c.getAttribute(o),_=u?u.match(na):null;if(_){let x=n.get(c);x||(x=[],n.set(c,x)),x.push({name:o,value:_[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(se(1)).subscribe(i=>this._setSvgElement(i),i=>{let o=`Error retrieving icon ${e}:${n}! ${i.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(S("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),et(n.color?"mat-"+n.color:""),y("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",E],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Xn,decls:1,vars:0,template:function(e,n){e&1&&(R(),B(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return a})(),En=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=O({type:a});static \u0275inj=P({imports:[Z]})}return a})();var Ut=["*"];var ia=["tabListContainer"],oa=["tabList"],ra=["tabListInner"],sa=["nextPaginator"],ca=["previousPaginator"];var la=["mat-tab-nav-bar",""],ua=["mat-tab-link",""];var $t="mdc-tab-indicator--active",An="mdc-tab-indicator--no-transition",Qt=class{_items;_currentItem;constructor(r){this._items=r}hide(){this._items.forEach(r=>r.deactivateInkBar()),this._currentItem=void 0}alignToElement(r){let t=this._items.find(n=>n.elementRef.nativeElement===r),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},da=(()=>{class a{_elementRef=s(f);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add($t);return}let n=e.getBoundingClientRect(),i=t.width/n.width,o=t.left-n.left;e.classList.add(An),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(An),e.classList.add($t),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove($t)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=T({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",E]}})}return a})();var kn={passive:!0},ma=650,ba=100,pa=(()=>{class a{_elementRef=s(f);_changeDetectorRef=s(ht);_viewportRuler=s(en);_dir=s(Xe,{optional:!0});_ngZone=s(ct);_platform=s(W);_sharedResizeObserver=s(tn);_injector=s(L);_renderer=s(fe);_animationsDisabled=U();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new C;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new C;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new xt;indexFocused=new xt;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),kn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),kn))}ngAfterContentInit(){let t=this._dir?this._dir.change:A("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(re(32),k(this._destroyed)),n=this._viewportRuler.change(150).pipe(k(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new qe(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Y(i,{injector:this._injector}),Et(t,n,e,this._items.changes,this._itemsResized()).pipe(k(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?te:this._items.changes.pipe(rt(this._items),de(t=>new Xt(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),ue(1),ie(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Ze(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:o}=e.elementRef.nativeElement,c,u;this._getLayoutDirection()=="ltr"?(c=i,u=c+o):(u=this._tabListInner.nativeElement.offsetWidth-i,c=u-o);let _=this.scrollDistance,x=this.scrollDistance+n;c<_?this.scrollDistance-=_-c:u>x&&(this.scrollDistance+=Math.min(u-x,c-_))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),ae(ma,ba).pipe(k(Et(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=T({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",E],selectedIndex:[2,"selectedIndex","selectedIndex",Lt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})();var ha=new w("MAT_TABS_CONFIG");var Zt=(()=>{class a extends pa{_focusedItem=$(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(t){this._fitInkBarToContent.next(t),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new Jt(!1);stretchTabs=!0;get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=$(!1);color="primary";tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let t=s(ha,{optional:!0});super(),this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new Qt(this._items),this._items.changes.pipe(rt(null),k(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(rt(null),k(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let t=this._items.toArray();for(let e=0;e<t.length;e++)if(t[e].active){this.selectedIndex=e,this.tabPanel&&(this.tabPanel._activeTabId=t[e].id),this._focusedItem.set(t[e]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}_hasFocus(t){return this._keyManager?.activeItem===t}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(e,n,i){if(e&1&&dt(i,qt,5),e&2){let o;D(o=v())&&(n._items=o)}},viewQuery:function(e,n){if(e&1&&mt(ia,7)(oa,7)(ra,7)(sa,5)(ca,5),e&2){let i;D(i=v())&&(n._tabListContainer=i.first),D(i=v())&&(n._tabList=i.first),D(i=v())&&(n._tabListInner=i.first),D(i=v())&&(n._nextPaginator=i.first),D(i=v())&&(n._previousPaginator=i.first)}},hostAttrs:[1,"mat-mdc-tab-nav-bar","mat-mdc-tab-header"],hostVars:17,hostBindings:function(e,n){e&2&&(S("role",n._getRole()),De("--mat-tab-animation-duration",n.animationDuration),y("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")("mat-mdc-tab-nav-bar-stretch-tabs",n.stretchTabs)("mat-primary",n.color!=="warn"&&n.color!=="accent")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("_mat-animation-noopable",n._animationsDisabled))},inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",E],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",E],animationDuration:"animationDuration",backgroundColor:"backgroundColor",disableRipple:[2,"disableRipple","disableRipple",E],color:"color",tabPanel:"tabPanel"},exportAs:["matTabNavBar","matTabNav"],features:[X],attrs:la,ngContentSelectors:Ut,decls:13,vars:6,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-link-container",3,"keydown"],[1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-links"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(R(),l(0,"div",5,0),h("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(o){return n._handlePaginatorPress("before",o)})("touchend",function(){return n._stopInterval()}),p(2,"div",6),d(),l(3,"div",7,1),h("keydown",function(o){return n._handleKeydown(o)}),l(5,"div",8,2),h("cdkObserveContent",function(){return n._onContentChanges()}),l(7,"div",9,3),B(9),d()()(),l(10,"div",10,4),h("mousedown",function(o){return n._handlePaginatorPress("after",o)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),p(12,"div",6),d()),e&2&&(y("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),F("matRippleDisabled",n._disableScrollBefore||n.disableRipple),m(10),y("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),F("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Nt,Qe],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
`],encapsulation:2})}return a})(),qt=(()=>{class a extends da{_tabNavBar=s(Zt);elementRef=s(f);_focusMonitor=s(Ve);_destroyed=new C;_isActive=!1;_tabIndex=Fe(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=$(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=s(nt).getId("mat-tab-link-");constructor(){super(),s($e).load(Ye);let t=s(Ke,{optional:!0}),e=s(new pt("tabindex"),{optional:!0});this.rippleConfig=t||{},this.tabIndex=e==null?0:parseInt(e)||0,U()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(k(this._destroyed)).subscribe(n=>{this.fitInkBarToContent=n})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(this.disabled?t.preventDefault():this._tabNavBar.tabPanel&&(t.keyCode===32&&t.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mdc-tab","mat-mdc-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(e,n){e&1&&h("focus",function(){return n._handleFocus()})("keydown",function(o){return n._handleKeydown(o)}),e&2&&(S("aria-controls",n._getAriaControls())("aria-current",n._getAriaCurrent())("aria-disabled",n.disabled)("aria-selected",n._getAriaSelected())("id",n.id)("tabIndex",n._tabIndex())("role",n._getRole()),y("mat-mdc-tab-disabled",n.disabled)("mdc-tab--active",n.active))},inputs:{active:[2,"active","active",E],disabled:[2,"disabled","disabled",E],disableRipple:[2,"disableRipple","disableRipple",E],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:Lt(t)],id:"id"},exportAs:["matTabLink"],features:[X],attrs:ua,ngContentSelectors:Ut,decls:5,vars:2,consts:[[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"]],template:function(e,n){e&1&&(R(),p(0,"span",0)(1,"div",1),l(2,"span",2)(3,"span",3),B(4),d()()),e&2&&(m(),F("matRippleTrigger",n.elementRef.nativeElement)("matRippleDisabled",n.rippleDisabled))},dependencies:[Nt],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2,changeDetection:0})}return a})(),Tn=(()=>{class a{id=s(nt).getId("mat-tab-nav-panel-");_activeTabId;static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["mat-tab-nav-panel"]],hostAttrs:["role","tabpanel",1,"mat-mdc-tab-nav-panel"],hostVars:2,hostBindings:function(e,n){e&2&&S("aria-labelledby",n._activeTabId)("id",n.id)},inputs:{id:"id"},exportAs:["matTabNavPanel"],ngContentSelectors:Ut,decls:1,vars:0,template:function(e,n){e&1&&(R(),B(0))},encapsulation:2,changeDetection:0})}return a})(),Bn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=O({type:a});static \u0275inj=P({imports:[Z]})}return a})();var _a=["*",[["mat-toolbar-row"]]],ga=["*","mat-toolbar-row"],Gt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=T({type:a,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return a})(),In=(()=>{class a{_elementRef=s(f);_platform=s(W);_document=s(g);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["mat-toolbar"]],contentQueries:function(e,n,i){if(e&1&&dt(i,Gt,5),e&2){let o;D(o=v())&&(n._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,n){e&2&&(et(n.color?"mat-"+n.color:""),y("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:ga,decls:2,vars:0,template:function(e,n){e&1&&(R(_a),B(0),B(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var wn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=O({type:a});static \u0275inj=P({imports:[Z]})}return a})();var Ct=(t=>(t.Light="light",t.Dark="dark",t))(Ct||{});function Mn(a){return a!=null&&typeof a=="string"&&Object.values(Ct).includes(a)}var Kt="light",Yt="ngx-codemirror:theme";var va=["tabHeader"];function Ca(a,r){a&1&&p(0,"img",8),a&2&&F("ngSrc","icon-light-off.svg")}function Fa(a,r){a&1&&p(0,"img",9),a&2&&F("ngSrc","icon-light-on.svg")}function ya(a,r){if(a&1&&(l(0,"a",13,3)(2,"div",15),p(3,"img",16),l(4,"span"),N(5),d()()()),a&2){let t=r.$implicit,e=bt(1);F("active",e.isActive)("routerLink",t.path),m(3),F("alt",ve("",t.data==null?null:t.data.label," Path"))("ngSrc","icon-"+t.path+".svg"),m(2),Rt(t.data==null?null:t.data.label)}}var Ft=class a{constructor(){this.document=s(g);this.anchorService=s(q);this.router=s(_t);this.isBrowser=Ae(s(be));this.theme=$(Kt);this.tabHeader=ye("tabHeader",{read:f});this.stickyClassName="mat-mdc-tab-nav-bar--sticky";this.routes=this.router.config.filter(r=>r.data&&r.data.label)}onDocumentClick(r){this.anchorService.interceptClick(r)}onWindowScroll(){let r=this.tabHeader();if(r==null)return;let t=r.nativeElement,e=Math.ceil(t.offsetTop),n=Math.ceil(this.document.defaultView?.scrollY??0),i=t.classList.contains(this.stickyClassName);!i&&n>=e&&t.classList.add(this.stickyClassName),i&&n<e&&t.classList.remove(this.stickyClassName)}ngOnInit(){if(this.anchorService.setOffset([0,64]),!this.isBrowser)return;let r=this.readStoredTheme();this.setTheme(Mn(r)?r:Kt)}handleFragment(){this.anchorService.scrollToAnchor()}onRouteAnimationEnd(r){r.target instanceof Element&&r.target.parentElement===r.currentTarget&&this.handleFragment()}toggleTheme(){this.setTheme(this.theme()==="light"?"dark":"light")}setTheme(r){this.theme.set(r);let t=this.document.querySelector("body").classList,e=/\w*-theme\b/.exec(t.value);e&&t.remove(...e),t.add(`${r}-theme`);try{localStorage.setItem(Yt,r)}catch{}}readStoredTheme(){try{return localStorage.getItem(Yt)}catch{return null}}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=b({type:a,selectors:[["app-root"]],viewQuery:function(t,e){t&1&&_e(e.tabHeader,va,5,f),t&2&&ge()},hostBindings:function(t,e){t&1&&h("click",function(i){return e.onDocumentClick(i)},he)("scroll",function(){return e.onWindowScroll()},pe)},decls:19,vars:3,consts:[["tabHeader",""],["tabPanel",""],["outlet","outlet"],["tabLink","routerLinkActive"],["color","primary"],[1,"lib-title"],[1,"spacer"],["mat-icon-button","","aria-label","Toggle theme","type","button",3,"click"],["alt","Dark theme","fill","","priority","",3,"ngSrc"],["alt","Light theme","fill","","priority","",3,"ngSrc"],["href","https://github.com/fsegurai/ngx-codemirror","mat-icon-button",""],["alt","GitHub","width","24","height","24","priority","",1,"github-icon",3,"ngSrc"],["backgroundColor","primary","disableRipple","","fitInkBarToContent","","mat-stretch-tabs","false","mat-tab-nav-bar","",3,"tabPanel"],["mat-tab-link","","routerLinkActive","",3,"active","routerLink"],[1,"outlet-wrapper",3,"animationend"],[1,"tab-label"],["priority","","width","24","height","24",3,"ngSrc","alt"]],template:function(t,e){if(t&1&&(l(0,"mat-toolbar",4)(1,"mat-toolbar-row")(2,"h1",5),N(3,"@fsegurai/ngx-codemirror"),d(),p(4,"span",6),l(5,"button",7),h("click",function(){return e.toggleTheme()}),l(6,"mat-icon"),J(7,Ca,1,1,"img",8)(8,Fa,1,1,"img",9),d()(),l(9,"a",10),p(10,"img",11),d()()(),l(11,"nav",12,0),wt(13,ya,6,6,"a",13,It),d(),l(15,"mat-tab-nav-panel",14,1),h("animationend",function(i){return e.onRouteAnimationEnd(i)}),p(17,"router-outlet",null,2),d()),t&2){let n=bt(16);m(7),tt(e.theme()==="dark"?7:8),m(3),F("ngSrc","icon-github.svg"),m(),F("tabPanel",n),m(2),Mt(e.routes)}},dependencies:[at,gt,En,yn,Bn,Zt,Tn,qt,wn,In,Gt,Se,Re,Me,xe],styles:["[_nghost-%COMP%]{display:block}.spacer[_ngcontent-%COMP%]{box-sizing:border-box;flex:1 1 0%}.tab-label[_ngcontent-%COMP%]{align-items:center;box-sizing:border-box;display:flex;flex-direction:row;gap:8px;place-content:center}.lib-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.github-icon[_ngcontent-%COMP%]{--mat-icon-button-icon-size: 28px;position:relative;top:-2px;left:-2px}.mat-mdc-tab-nav-bar--sticky[_ngcontent-%COMP%]{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f;transition:box-shadow .3s ease-out}.mat-mdc-tab-nav-bar[_ngcontent-%COMP%]    {position:sticky;top:0;z-index:24}.mat-mdc-tab-nav-bar[_ngcontent-%COMP%]     .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px;transition-duration:.5s}.mat-mdc-tab-nav-bar[_ngcontent-%COMP%]     .mat-mdc-tab-link{font-size:14px;font-weight:500;letter-spacing:normal;margin:0 16px;min-width:0;opacity:.6;padding:0;text-decoration:none;transition:all .2s ease-out}.mat-mdc-tab-nav-bar[_ngcontent-%COMP%]     .mat-mdc-tab-link:not(.mdc-tab--active):hover{transform:translateY(-1px)}.mat-mdc-tab-nav-bar[_ngcontent-%COMP%]     .mat-mdc-tab-link:hover, .mat-mdc-tab-nav-bar[_ngcontent-%COMP%]     .mdc-tab--active{opacity:1}.mat-mdc-tab-nav-bar[_ngcontent-%COMP%]     .mat-mdc-tab-link-container{margin:0 auto;max-width:960px;overflow:auto}.mat-mdc-tab-nav-bar[_ngcontent-%COMP%]     .mdc-tab__ripple{opacity:0}.mat-mdc-tab-nav-bar[_ngcontent-%COMP%]     .mat-mdc-tab-header-pagination{display:none!important}.mat-mdc-tab-nav-bar[_ngcontent-%COMP%]     .mat-mdc-tab-list{transform:unset!important}.mat-toolbar[_ngcontent-%COMP%]     .mat-toolbar-row{margin:0 auto;max-width:960px;padding-left:16px;padding-right:16px}.mat-toolbar[_ngcontent-%COMP%]     .mat-icon-button{transition:all .2s ease-out}.mat-toolbar[_ngcontent-%COMP%]     .mat-icon-button:hover{transform:translateY(-2px)}.outlet-wrapper[_ngcontent-%COMP%]{margin:16px auto;max-width:960px;padding-left:16px;padding-right:16px;display:block;position:relative}"],changeDetection:0})}};Te(Ft,fn).catch(a=>console.error(a));
