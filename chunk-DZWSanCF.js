import{n as m,t as l}from"./chunk-Da4-SChG.js";import{b as M}from"./chunk-BUgmZY5S.js";import{D as cn$1,F as ln$1,R as on$1}from"./chunk-D8HQH6Jj.js";import{$ as Ee,$n as lS,$t as XE,A as yp,An as gM,Ar as vW,At as Q0,B as Ae,Bn as ih,Br as zN,Bt as Su,C as nd$1,Cn as eh,Cr as tt,Ct as Ni$1,D as vm,Dn as fS,Dr as ut$1,Dt as On$1,E as us$1,En as et$1,Er as ue,Et as Om,Fn as h,Fr as yI,Ft as R,G as Bm,Gn as jn$1,Gt as U,H as An$1,Ht as TE,I as $E,In as hX,Ir as yr,It as R1,J as Ct$1,Jn as kE,Jt as V,K as Bn$1,Kn as jv,Kt as UE,L as $r$1,Ln as iN,Lr as yt$1,Lt as Rn$1,Mr as xN,Mt as Qa,Nn as ge,Nr as xs,Nt as Qe,O as vp,On as fe,Or as v1,Ot as Pm,Pn as gl$1,Pr as y,Pt as Qp,Q as Dt,Qn as kn$1,Qt as Wr$1,R as A,Rn as iQ,Rr as z,Rt as Se,S as hn$1,Sn as eN,Sr as tr,St as Ne,T as ps$1,Tn as er,Tr as uQ,Tt as OE,U as At,Un as je,Ut as Ts$1,V as Al$1,Vn as jE,Vr as ze$1,Vt as T1,W as BE,Wn as jm,Wt as Tu,X as Db,Xn as kQ,Xt as Vt$2,Y as D,Yn as kI,Yt as V1,Z as Di$1,Zt as Wo$1,_ as cs$1,_n as bX,_r as sN,_t as Lu,a as Eg,an as Yp,ar as mo,at as I1,b as gb,bn as de,br as ti,bt as Mu,c as Mg,cn as ZM,cr as nr,ct as Is$1,d as Qe$1,dn as Zp,dr as on$2,dt as Jn,en as Xo$1,er as le,et as Fm,f as Ra,fn as _b,fr as pl$1,ft as Jp,g as Yc$2,gn as bM,gr as s0,gt as Lt$2,h as Wa,hn as aS,hr as rr,ht as LI,i as Dg,in as Yn,ir as me,it as H,j as za,jn as gW,jr as vx,jt as QE,k as xb,kn as fl$1,kr as vQ,kt as Pt$1,l as Na,ln as ZY,lr as nt,lt as J,m as Vt$1,mn as _e,mr as qp,mt as LE,n as Be$1,nn as Yc$1,nt as G7,o as Ju,or as nh,ot as Ie,p as Va,pn as _c$1,pr as q,pt as Kp,q as CM,qn as k,r as Cb,rn as Yd$1,rt as Ge,s as Lt$1,sn as Z,sr as nn$1,st as In$1,t as Ba,tn as Xp,tr as ln$2,tt as Ft$1,u as Oc$1,un as Zd$1,ur as o0,ut as Je,v as fb,vr as sS,vt as ME,w as pp,wn as ei,wr as tw,wt as O,x as gt,xn as dl$1,xr as to$1,xt as N,y as fn,yn as ce$1,yr as th,yt as Me,zn as ie,zt as Sn$1}from"./main-AESFS356.js";import{t as nt$1}from"./chunk-z5K9h53N.js";var vo=class{_document;_textarea;constructor(t,e){this._document=e;let i=this._textarea=this._document.createElement(`textarea`),o=i.style;o.position=`fixed`,o.top=o.opacity=`0`,o.left=`-999em`,i.setAttribute(`aria-hidden`,`true`),i.value=t,i.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(i)}copy(){let t=this._textarea,e=!1;try{if(t){let i=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),e=this._document.execCommand(`copy`),i&&i.focus()}}catch{}return e}destroy(){let t=this._textarea;t&&(t.remove(),this._textarea=void 0)}};var xo=(()=>{class n{_document=h(q);copy(e){let i=this.beginCopy(e),o=i.copy();return i.destroy(),o}beginCopy(e){return new vo(e,this._document)}static ɵfac=function(i){return new(i||n)};static ɵprov=N({token:n,factory:n.ɵfac})}return n})();var Ts=new y(`CDK_COPY_TO_CLIPBOARD_CONFIG`);var Sr=(()=>{class n{_clipboard=h(xo);_ngZone=h(V);text=``;attempts=1;copied=new ge;_pending=new Set;_destroyed=!1;_currentTimeout;constructor(){let e=h(Ts,{optional:!0});e&&e.attempts!=null&&(this.attempts=e.attempts)}copy(e=this.attempts){if(e=Math.min(e,50),e>1){let i=e,o=this._clipboard.beginCopy(this.text);this._pending.add(o);let a=()=>{let r=o.copy();!r&&--i&&!this._destroyed?this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(a,1)):(this._currentTimeout=null,this._pending.delete(o),o.destroy(),this.copied.emit(r))};a()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(e=>e.destroy()),this._pending.clear(),this._destroyed=!0}static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[``,`cdkCopyToClipboard`,``]],hostBindings:function(i,o){i&1&&ti(`click`,function(){return o.copy()})},inputs:{text:[0,`cdkCopyToClipboard`,`text`],attempts:[0,`cdkCopyToClipboardAttempts`,`attempts`]},outputs:{copied:`cdkCopyToClipboardCopied`}})}return n})();var Mr=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Je({type:n});static ɵinj=Ge({})}return n})();var Or=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(i){return new(i||n)(ze$1(Pt$1),ze$1(fe))};static ɵdir=_e({type:n})}return n})();var Os=(()=>{class n extends Or{static ɵfac=(()=>{let e;return function(o){return(e||(e=jv(n)))(o||n)}})();static ɵdir=_e({type:n,features:[Jn]})}return n})();var dt=new y(``);var Is={provide:dt,useExisting:Qa(()=>Ir),multi:!0};function Fs(){let n=Rn$1()?Rn$1().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var Ps=new y(``);var Ir=(()=>{class n extends Or{_compositionMode;_composing=!1;constructor(e,i,o){super(e,i),this._compositionMode=o,this._compositionMode??=!Fs()}writeValue(e){let i=e??``;this.setProperty(`value`,i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(i){return new(i||n)(ze$1(Pt$1),ze$1(fe),ze$1(Ps,8))};static ɵdir=_e({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,o){i&1&&ti(`input`,function(r){return o._handleInput(r.target.value)})(`blur`,function(){return o.onTouched()})(`compositionstart`,function(){return o._compositionStart()})(`compositionend`,function(r){return o._compositionEnd(r.target.value)})},standalone:!1,features:[tw([Is]),Jn]})}return n})();function So(n){return n==null||Mo(n)===0}function Mo(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var It=new y(``);var Fr=new y(``);var Rs=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var Ze=class{static min(t){return Vs(t)}static max(t){return Ls(t)}static required(t){return Pr(t)}static requiredTrue(t){return zs(t)}static email(t){return Bs(t)}static minLength(t){return js(t)}static maxLength(t){return Hs(t)}static pattern(t){return Gs(t)}static nullValidator(t){return ui()}static compose(t){return jr(t)}static composeAsync(t){return Hr(t)}};function Vs(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function Ls(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function Pr(n){return So(n.value)?{required:!0}:null}function zs(n){return n.value===!0?null:{required:!0}}function Bs(n){return So(n.value)||Rs.test(n.value)?null:{email:!0}}function js(n){return t=>{let e=t.value?.length??Mo(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Hs(n){return t=>{let e=t.value?.length??Mo(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function Gs(n){if(!n)return ui;let t,e;return typeof n==`string`?(e=``,n.charAt(0)!==`^`&&(e+=`^`),e+=n,n.charAt(n.length-1)!==`$`&&(e+=`$`),t=new RegExp(e)):(e=n.toString(),t=n),i=>{if(So(i.value))return null;let o=i.value;return t.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function ui(n){return null}function Rr(n){return n!=null}function Vr(n){return ei(n)?ce$1(n):n}function Lr(n){let t={};return n.forEach(e=>{t=e!=null?l(l({},t),e):t}),Object.keys(t).length===0?null:t}function zr(n,t){return t.map(e=>e(n))}function Us(n){return!n.validate}function Br(n){return n.map(t=>Us(t)?t:e=>t.validate(e))}function jr(n){if(!n)return null;let t=n.filter(Rr);return t.length==0?null:function(e){return Lr(zr(e,t))}}function ko(n){return n!=null?jr(Br(n)):null}function Hr(n){if(!n)return null;let t=n.filter(Rr);return t.length==0?null:function(e){let i=zr(e,t).map(Vr);return sS(i).pipe(H(Lr))}}function No(n){return n!=null?Hr(Br(n)):null}function kr(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Gr(n){return n._rawValidators}function Ur(n){return n._rawAsyncValidators}function Co(n){return n?Array.isArray(n)?n:[n]:[]}function pi(n,t){return Array.isArray(n)?n.includes(t):n===t}function Nr(n,t){let e=Co(t);return Co(n).forEach(o=>{pi(e,o)||e.push(o)}),e}function Er(n,t){return Co(t).filter(e=>!pi(n,e))}var fi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=ko(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=No(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}};var Qt=class extends fi{name;get formDirective(){return null}get path(){return null}};var xn=`VALID`;var mi=`INVALID`;var $t=`PENDING`;var Cn=`DISABLED`;var yt=class{};var hi=class extends yt{value;source;constructor(t,e){super(),this.value=t,this.source=e}};var Sn=class extends yt{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}};var Mn=class extends yt{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}};var Kt=class extends yt{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var gi=class extends yt{source;constructor(t){super(),this.source=t}};var Yt=class extends yt{source;constructor(t){super(),this.source=t}};function qr(n){return(yi(n)?n.validators:n)||null}function qs(n){return Array.isArray(n)?ko(n):n||null}function Wr(n,t){return(yi(t)?t.asyncValidators:n)||null}function Ws(n){return Array.isArray(n)?No(n):n||null}function yi(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function $s(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new D(1e3,``);if(!$r(i,e))throw new D(1001,``)}function Ks(n,t,e){n._forEachChild((i,o)=>{if(e[o]===void 0)throw new D(-1002,``)})}var Xt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Z(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return z(this.statusReactive)}set status(t){z(()=>this.statusReactive.set(t))}_status=on$2(()=>this.statusReactive());statusReactive=Z(void 0);get valid(){return this.status===xn}get invalid(){return this.status===mi}get pending(){return this.status===$t}get disabled(){return this.status===Cn}get enabled(){return this.status!==Cn}errors;get pristine(){return z(this.pristineReactive)}set pristine(t){z(()=>this.pristineReactive.set(t))}_pristine=on$2(()=>this.pristineReactive());pristineReactive=Z(!0);get dirty(){return!this.pristine}get touched(){return z(this.touchedReactive)}set touched(t){z(()=>this.touchedReactive.set(t))}_touched=on$2(()=>this.touchedReactive());touchedReactive=Z(!1);get untouched(){return!this.touched}_events=new U;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Nr(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Nr(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Er(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Er(t,this._rawAsyncValidators))}hasValidator(t){return pi(this._rawValidators,t)}hasAsyncValidator(t){return pi(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(m(l({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new Mn(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new Mn(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(m(l({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new Sn(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new Sn(!0,i))}markAsPending(t={}){this.status=$t;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Kt(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(m(l({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Cn,this.errors=null,this._forEachChild(o=>{o.disable(m(l({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new hi(this.value,i)),this._events.next(new Kt(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(l({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=xn,this._forEachChild(i=>{i.enable(m(l({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(m(l({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===xn||this.status===$t)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new hi(this.value,e)),this._events.next(new Kt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(m(l({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Cn:xn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=$t,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let i=Vr(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((i,o)=>i&&i._find(o),this)}getError(t,e){let i=e?this.get(e):this;return i?.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new Kt(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new ge,this.statusChanges=new ge}_calculateStatus(){return this._allControlsDisabled()?Cn:this.errors?mi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus($t)?$t:this._anyControlsHaveStatus(mi)?mi:xn}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,e),o&&this._events.next(new Sn(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new Mn(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){yi(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=qs(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Ws(this._rawAsyncValidators)}_updateHasRequiredValidator(){z(()=>this._hasRequired.set(this.hasValidator(Ze.required)))}};function $r(n,t){return Object.hasOwn(n,t)}function Eo(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function Kr(n){if(n.tagName!==`INPUT`)return!1;let t=n.type;return t===`number`||t===`range`||t===`date`||t===`month`}function Qr(n){return n.tagName===`INPUT`||n.tagName===`TEXTAREA`}function Nn(n,t,e,i){switch(e){case`name`:n.setAttribute(t,e,i);break;case`disabled`:case`readonly`:case`required`:i?n.setAttribute(t,e,``):n.removeAttribute(t,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?n.setAttribute(t,e,i.toString()):n.removeAttribute(t,e)}}var wo=class{kind;context;control;message;constructor({kind:t,context:e,control:i}){this.kind=t,this.context=e,this.control=i}};var Qs=(()=>{class n{_validator=ui;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):ui,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,features:[Ft$1]})}return n})();var Ys={provide:It,useExisting:Qa(()=>Yr),multi:!0};var Yr=(()=>{class n extends Qs{required;inputName=`required`;normalizeInput=ie;createValidator=e=>Pr;enabled(e){return e}static ɵfac=(()=>{let e;return function(o){return(e||(e=jv(n)))(o||n)}})();static ɵdir=_e({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,o){i&2&&er(`required`,o._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[tw([Ys]),Jn]})}return n})();var Xr=new y(``);var Zr=new y(``,{factory:()=>Xs});var Xs=`always`;function Dr(n,t,e=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),_i(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function bi(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Jr(n,t){let e=Gr(n);t.validator!==null?n.setValidators(kr(e,t.validator)):typeof e==`function`&&n.setValidators([e]);let i=Ur(n);t.asyncValidator!==null?n.setAsyncValidators(kr(i,t.asyncValidator)):typeof i==`function`&&n.setAsyncValidators([i]);let o=()=>n.updateValueAndValidity();bi(t._rawValidators,o),bi(t._rawAsyncValidators,o)}function _i(n,t){let e=!1;if(n!==null){if(t.validator!==null){let o=Gr(n);if(Array.isArray(o)&&o.length>0){let a=o.filter(r=>r!==t.validator);a.length!==o.length&&(e=!0,n.setValidators(a))}}if(t.asyncValidator!==null){let o=Ur(n);if(Array.isArray(o)&&o.length>0){let a=o.filter(r=>r!==t.asyncValidator);a.length!==o.length&&(e=!0,n.setAsyncValidators(a))}}}let i=()=>{};return bi(t._rawValidators,i),bi(t._rawAsyncValidators,i),e}function el(n,t){Jr(n,t)}function Zs(n,t){return _i(n,t)}function Js(n){return Object.getPrototypeOf(n.constructor)===Os}function tl(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn===`submit`&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Do(n,t){if(!t)return null;let e,i,o;return t.forEach(a=>{a.constructor===Ir?e=a:Js(a)?i=a:o=a}),o||i||e||null}function ed(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var vt=class extends fi{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Yt&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Do(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(t,e,i){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(ue)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.injector?.get(rr);if(!this.control||!t)return;let e=t.markForCheck.bind(t);this.subscription=new Ee,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof Yt&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(o=>{this.control?.markAsDirty(),this.control?.setValue(o,{emitModelToViewChange:!1}),this.viewToModelUpdate(o)}),t.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Eo(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof Yr))}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let i=this.control,o=this.customControlBindings;Object.is(o.value,i.value)||(o.value=i.value,t.setCustomControlModelInput(i.value)),this.bindControlProperty(t,o,`touched`,i.touched),this.bindControlProperty(t,o,`dirty`,i.dirty),this.bindControlProperty(t,o,`valid`,i.valid),this.bindControlProperty(t,o,`invalid`,i.invalid),this.bindControlProperty(t,o,`pending`,i.pending),this.bindControlProperty(t,o,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(t,o,`required`,this.isRequired);let a=i.errors;if(o.errors!==a){o.errors=a;let r=this._convertErrors(a);t.setInputOnDirectives(`errors`,r)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,e,i,o){if(e[i]===o)return;e[i]=o;let a=t.setInputOnDirectives(i,o);this.isNativeFormElement&&!a&&(i===`disabled`||i===`required`)&&this.renderer&&Nn(this.renderer,t.nativeElement,i,o)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([i,o])=>new wo({context:o,kind:i,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,i=on$2(()=>{let o=t();return o.length===0?null:o.reduce((a,r)=>(a[r.kind]=r,a),{})});this.parseErrorsValidator=(()=>e).bind(this),Sn$1(()=>{e=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var kn=class extends Xt{constructor(t,e,i){super(qr(e),Wr(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this._find(t)||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let i=this._find(t);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){let o=this._find(t);o&&o._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){z(()=>{Ks(this,!0,t),Object.keys(t).forEach(i=>{$s(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let o=this._find(i);o&&o.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,o)=>{i.reset(t?t[o]:null,m(l({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Yt(this))}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,i,o)=>((i.enabled||this.disabled)&&(e[o]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((o,a)=>{i=e(i,o,a)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return $r(this.controls,t)?this.controls[t]:null}};var td={provide:Qt,useExisting:Qa(()=>En)};var wn=Promise.resolve();var En=(()=>{class n extends Qt{callSetDisabledState;get submitted(){return z(this.submittedReactive)}_submitted=on$2(()=>this.submittedReactive());submittedReactive=Z(!1);_directives=new Set;form;ngSubmit=new ge;options;constructor(e,i,o){super(),this.callSetDisabledState=o,this.form=new kn({},ko(e),No(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){wn.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){wn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){wn.then(()=>{let i=this._findContainer(e.path),o=new kn({});el(o,e),i.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){wn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){wn.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),tl(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new gi(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(i){return new(i||n)(ze$1(It,10),ze$1(Fr,10),ze$1(Zr,8))};static ɵdir=_e({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(i,o){i&1&&ti(`submit`,function(r){return o.onSubmit(r)})(`reset`,function(){return o.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[tw([td]),Jn]})}return n})();function Tr(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function Ar(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var nd=class extends Xt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(qr(e),Wr(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),yi(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ar(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){z(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Yt(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Tr(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Tr(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Ar(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var id=n=>n instanceof nd;var od=(()=>{class n extends Qt{callSetDisabledState;get submitted(){return z(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=on$2(()=>this._submittedReactive());_submittedReactive=Z(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new D(1052,!1);Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(_i(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Dr(e.control||null,e,!1),ed(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,tl(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new gi(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,o=this.form.get(e.path);i!==o&&(Dr(i||null,e),id(o)&&e._setupWithForm(o,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);el(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&Zs(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Jr(this.form,this),this._oldForm&&_i(this._oldForm,this)}static ɵfac=function(i){return new(i||n)(ze$1(It,10),ze$1(Fr,10),ze$1(Zr,8))};static ɵdir=_e({type:n,features:[Jn,Ft$1]})}return n})();var ad={provide:Qt,useExisting:Qa(()=>Dn)};var Dn=(()=>{class n extends od{form=null;ngSubmit=new ge;get control(){return this.form}static ɵfac=(()=>{let e;return function(o){return(e||(e=jv(n)))(o||n)}})();static ɵdir=_e({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(i,o){i&1&&ti(`submit`,function(r){return o.onSubmit(r)})(`reset`,function(){return o.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[tw([ad]),Jn]})}return n})();var qo=Symbol(`FIELD_TREE`);var To=0;function rd(){return To}function xt(n,t){return(...e)=>{try{return To=t,n(...e)}finally{To=0}}}function ld(n){return!n}function nl(n){return n}function Pt(n){return Array.isArray(n)}function xi(n){return(typeof n==`object`||typeof n==`function`)&&n!=null}var Ft=Symbol();var Di=Symbol();var An=class{predicates;fns=[];constructor(t){this.predicates=t}push(t){this.fns.push(il(this.predicates,t))}mergeIn(t){let e=this.predicates?t.fns.map(i=>il(this.predicates,i)):t.fns;this.fns.push(...e)}hasRules(){return this.fns.length>0}};var Ci=class extends An{get defaultValue(){return!1}compute(t){return this.fns.some(e=>{let i=e(t);return i&&i!==Di})}};var Jt=class n extends An{ignore;static ignoreNull(t){return new n(t,e=>e===null)}constructor(t,e){super(t),this.ignore=e}get defaultValue(){return[]}compute(t){return this.fns.reduce((e,i)=>{let o=i(t);return o===void 0||o===Di?e:Pt(o)?[...e,...this.ignore?o.filter(a=>!this.ignore(a)):o]:this.ignore&&this.ignore(o)?e:[...e,o]},[])}};var Ao=class extends Jt{constructor(t){super(t,void 0)}};var Oo=class extends An{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(t,e){super(t),this.key=e}compute(t){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let o=this.fns[i](t);o!==Di&&(e=this.key.reducer.reduce(e,o))}return e}};function il(n,t){return n.length===0?t:e=>{for(let i of n){let o=e.stateOf(i.path),a=z(o.structure.pathKeys).length-i.depth;for(let r=0;r<a;r++)o=o.structure.parent;if(!i.fn(o.context))return Di}return t(e)}}var en=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(t){this.predicates=t,this.hidden=new Ci(t),this.disabledReasons=new Ao(t),this.readonly=new Ci(t),this.syncErrors=Jt.ignoreNull(t),this.syncTreeErrors=Jt.ignoreNull(t),this.asyncErrors=Jt.ignoreNull(t)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(t){return this.metadata.has(t)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(t){return this.metadata.has(t)||this.metadata.set(t,new Oo(this.predicates,t)),this.metadata.get(t)}mergeIn(t){this.hidden.mergeIn(t.hidden),this.disabledReasons.mergeIn(t.disabledReasons),this.readonly.mergeIn(t.readonly),this.syncErrors.mergeIn(t.syncErrors),this.syncTreeErrors.mergeIn(t.syncTreeErrors),this.asyncErrors.mergeIn(t.asyncErrors);for(let e of t.getMetadataKeys()){let i=t.metadata.get(e);this.getMetadata(e).mergeIn(i)}}};var wi=class{depth;constructor(t){this.depth=t}build(){return new Si(this,[],0)}};var tn=class n extends wi{constructor(t){super(t)}current;all=[];addHiddenRule(t){this.getCurrent().addHiddenRule(t)}addDisabledReasonRule(t){this.getCurrent().addDisabledReasonRule(t)}addReadonlyRule(t){this.getCurrent().addReadonlyRule(t)}addSyncErrorRule(t){this.getCurrent().addSyncErrorRule(t)}addSyncTreeErrorRule(t){this.getCurrent().addSyncTreeErrorRule(t)}addAsyncErrorRule(t){this.getCurrent().addAsyncErrorRule(t)}addMetadataRule(t,e){this.getCurrent().addMetadataRule(t,e)}getChild(t){if(t===Ft){let e=this.getCurrent().children;e.size>(e.has(Ft)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(t)}hasLogic(t){return this===t?!0:this.all.some(({builder:e})=>e.hasLogic(t))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:t})=>t.anyChildHasLogic())}mergeIn(t,e){e?this.all.push({builder:t,predicate:{fn:xt(e.fn,this.depth),path:e.path}}):this.all.push({builder:t}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new On(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}};var On=class extends wi{logic=new en([]);children=new Map;constructor(t){super(t)}addHiddenRule(t){this.logic.hidden.push(xt(t,this.depth))}addDisabledReasonRule(t){this.logic.disabledReasons.push(xt(t,this.depth))}addReadonlyRule(t){this.logic.readonly.push(xt(t,this.depth))}addSyncErrorRule(t){this.logic.syncErrors.push(xt(t,this.depth))}addSyncTreeErrorRule(t){this.logic.syncTreeErrors.push(xt(t,this.depth))}addAsyncErrorRule(t){this.logic.asyncErrors.push(xt(t,this.depth))}addMetadataRule(t,e){this.logic.getMetadata(t).push(xt(e,this.depth))}getChild(t){return this.children.has(t)||this.children.set(t,new tn(this.depth+1)),this.children.get(t)}hasLogic(t){return this===t}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let t of this.children.values())if(t.hasRules())return!0;return!1}};var Si=class n{builder;predicates;depth;logic;constructor(t,e,i){this.builder=t,this.predicates=e,this.depth=i,this.logic=t?sd(t,e,i):new en([])}getChild(t){let e=this.builder?rl(this.builder,t):[];if(e.length===0)return new n(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:o}=e[0];return new n(i,[...this.predicates,...o.map(a=>Fo(a,this.depth))],this.depth+1)}else return new Io(e.map(({builder:o,predicates:a})=>new n(o,[...this.predicates,...a.map(r=>Fo(r,this.depth))],this.depth+1)))}hasLogic(t){return this.builder?this.builder.hasLogic(t):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var Io=class n{all;logic;constructor(t){this.all=t,this.logic=new en([]);for(let e of t)this.logic.mergeIn(e.logic)}getChild(t){return new n(this.all.flatMap(e=>e.getChild(t)))}hasLogic(t){return this.all.some(e=>e.hasLogic(t))}hasRules(){return this.all.some(t=>t.hasRules())}anyChildHasLogic(){return this.all.some(t=>t.anyChildHasLogic())}};function rl(n,t){if(n instanceof tn)return n.all.flatMap(({builder:e,predicate:i})=>{let o=rl(e,t);return i?o.map(({builder:a,predicates:r})=>({builder:a,predicates:[...r,i]})):o});if(n instanceof On)return[...t!==Ft&&n.children.has(Ft)?[{builder:n.getChild(Ft),predicates:[]}]:[],...n.children.has(t)?[{builder:n.getChild(t),predicates:[]}]:[]];throw new D(1909,!1)}function sd(n,t,e){let i=new en(t);if(n instanceof tn){let o=n.all.map(({builder:a,predicate:r})=>new Si(a,r?[...t,Fo(r,e)]:t,e));for(let a of o)i.mergeIn(a.logic)}else if(n instanceof On)i.mergeIn(n.logic);else throw new D(1909,!1);return i}function Fo(n,t){return m(l({},n),{depth:t})}var ll=Symbol(`PATH`);var ct=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,dd);logicBuilder;constructor(t,e,i,o){this.keys=t,this.parent=i,this.keyInParent=o,this.root=e??this,i||(this.logicBuilder=tn.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(t){return this.children.has(t)||this.children.set(t,new n([...this.keys,t],this.root,this,t)),this.children.get(t)}mergeIn(t,e){let i=t.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(t){return t[ll]}static newRoot(){return new n([],void 0,void 0,void 0)}};var dd={get(n,t){return t===ll?n:n.getChild(t).fieldPathProxy}};var vi;var Tn=new Map;var Mi=class n{schemaFn;constructor(t){this.schemaFn=t}compile(){if(Tn.has(this))return Tn.get(this);let t=ct.newRoot();Tn.set(this,t);let e=vi;try{vi=t,this.schemaFn(t.fieldPathProxy)}finally{vi=e}return t}static create(t){return t instanceof n?t:new n(t)}static rootCompile(t){try{return Tn.clear(),t===void 0?ct.newRoot():t instanceof n?t.compile():new n(t).compile()}finally{Tn.clear()}}};function cd(n){return n instanceof Mi||typeof n==`function`}function Wo(n){if(vi!==ct.unwrapFieldPath(n).root)throw new D(1908,!1)}var nn={list(){return{reduce:(n,t)=>t===void 0?n:[...n,t],getInitial:()=>[]}},min(){return{reduce:(n,t)=>n===void 0||t===void 0?n??t:t<n?t:n,getInitial:()=>{}}},max(){return{reduce:(n,t)=>n===void 0||t===void 0?n??t:t>n?t:n,getInitial:()=>{}}},or(){return{reduce:(n,t)=>n||t,getInitial:()=>!1}},and(){return{reduce:(n,t)=>n&&t,getInitial:()=>!0}},override:md};function md(n){return{reduce:(t,e)=>e,getInitial:()=>n?.()}}var $o=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var ki=class{reducer;create;brand;[$o];constructor(t,e){this.reducer=t,this.create=e}};function Rt(n){return new ki(n??nn.override())}function Ko(){return Rt()}var sl=Rt(nn.or());var dl=Ko();var cl=Ko();var ml=Rt(nn.max());var ul=Rt(nn.min());var pl=Rt(nn.list());function De(n,t){if(n===t)return!0;if(!n||!t||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(!Object.is(n[e],t[e]))return!1;return!0}function ud(n){return n.errors().length>0?`invalid`:n.pending()?`unknown`:`valid`}var Po=class{node;constructor(t){this.node=t}rawSyncTreeErrors=on$2(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:De});syncErrors=on$2(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...pd(this.node.submitState.submissionErrors())],{equal:De});syncValid=on$2(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(t,e)=>e&&t.validationState.syncValid(),ld));syncTreeErrors=on$2(()=>this.rawSyncTreeErrors().filter(t=>t.fieldTree===this.node.fieldTree),{equal:De});rawAsyncErrors=on$2(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:De});asyncErrors=on$2(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(t=>t===`pending`||t.fieldTree===this.node.fieldTree),{equal:De});parseErrors=on$2(()=>this.node.formFieldBindings().flatMap(t=>t.parseErrors()),{equal:De});errors=on$2(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(t=>t!==`pending`)],{equal:De});errorSummary=on$2(()=>{let t=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return z(()=>t.sort(fd)),t},{equal:De});pending=on$2(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(t,e)=>e||t.validationState.pending()));status=on$2(()=>{if(this.shouldSkipValidation())return`valid`;let t=ud(this);return this.node.structure.reduceChildren(t,(e,i)=>i===`invalid`||e.validationState.status()===`invalid`?`invalid`:i===`unknown`||e.validationState.status()===`unknown`?`unknown`:`valid`,e=>e===`invalid`)});valid=on$2(()=>this.status()===`valid`);invalid=on$2(()=>this.status()===`invalid`);shouldSkipValidation=on$2(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function pd(n){return n===void 0?[]:Pt(n)?n:[n]}function ol(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((t,e)=>!t||!e.element?t??e.element:t.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:t,void 0)}function fd(n,t){let e=ol(n),i=ol(t);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Ro=Rt();var Vo=class{node;cache=new WeakMap;constructor(t){this.node=t,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(t){if(!this.cache.has(t)){let e=on$2(()=>{let i=ct.unwrapFieldPath(t),o=this.node,a=rd();for(;a>0||!o.structure.logic.hasLogic(i.root.builder);)if(a--,o=o.structure.parent,o===void 0)throw new D(1900,!1);for(let r of i.keys)if(o=o.structure.getChild(r),o===void 0)throw new D(1901,!1);return o.fieldTree});this.cache.set(t,e)}return this.cache.get(t)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=on$2(()=>{let t=this.key();if(!Pt(z(this.node.structure.parent.value)))throw new D(1906,!1);return Number(t)});fieldTreeOf(t){return this.resolve(t)}stateOf(t){return this.resolve(t)()}valueOf=t=>{let e=this.resolve(t)().value();if(e instanceof Xt)throw new D(1907,!1);return e}};var Lo=class{node;metadata=new Map;constructor(t){this.node=t}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let t=iN();t&&sN(!1);try{z(()=>Ie(this.node.structure.injector,()=>{for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),o=e.create(this.node,on$2(()=>i.compute(this.node.context)));this.metadata.set(e,o)}}))}finally{t&&sN(!0)}}get(t){if(this.has(t)&&!this.metadata.has(t)){if(t.create)throw new D(1912,!1);let e=this.node.logicNode.logic.getMetadata(t);this.metadata.set(t,on$2(()=>e.compute(this.node.context)))}return this.metadata.get(t)}has(t){return this.node.logicNode.logic.hasMetadata(t)}};var hd={get(n,t,e){if(t===qo)return!0;let i=n(),o=i.structure.getChild(t);if(o!==void 0)return o.fieldTree;let a=z(i.value);if(Pt(a)){if(t===`length`)return i.value().length;if(t===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(xi(a)&&t===Symbol.iterator)return function*(){for(let r in e)yield[r,e[r]]}},getOwnPropertyDescriptor(n,t){let e=z(n().value),i=Reflect.getOwnPropertyDescriptor(e,t);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(n){let t=z(n().value);return typeof t==`object`&&t!==null?Reflect.ownKeys(t):[]}};function gd(n,t){let e=on$2(()=>n()[t()]);return e[de]=n[de],e.set=i=>{Object.is(z(e),i)||n.update(o=>bd(o,i,t()))},e.update=i=>{e.set(i(z(e)))},e.asReadonly=()=>e,e}function bd(n,t,e){if(Pt(n)){let i=[...n];return i[e]=t,i}else return m(l({},n),{[e]:t})}var Zt=Symbol(``);var fl=on$2(()=>!1);var Ni=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=J.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(t,e,i){this.logic=t,this.node=e,this.createChildNode=i}children(){this.ensureChildrenMap();let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>z(e.reader))}materializedChildren(){let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return z(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||z(()=>{this.childrenMap.update(t=>this.computeChildrenMap(this.value(),t,!0))})}getChild(t){this.ensureChildrenMap();let e=t.toString(),i=z(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(t,e,i){let o=this.childrenMap();if(!o)return t;let a=t;for(let r of o.byPropertyKey.values()){if(i?.(a))break;a=e(z(r.reader),a)}return a}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(t,e,i){if(t===`root`)return{keyInParent:hl,isOrphaned:fl};let o=this.parent,a=i,r=on$2(()=>{if(o.structure.isOrphaned())return Zt;let v=o.structure.childrenMap();if(!v)return Zt;let w=v.byPropertyKey.get(a);if(w&&w.node===this.node)return a;if(e===void 0)return Zt;for(let[V,U]of v.byPropertyKey)if(U.node===this.node)return a=V;return Zt}),l=on$2(()=>r()===Zt);return{keyInParent:on$2(()=>{let v=r();if(v===Zt)throw e===void 0?new D(-1902,!1):new D(1904,!1);return v}),isOrphaned:l}}createChildrenMap(){return ih({source:this.value,computation:(t,e)=>this.computeChildrenMap(t,e?.value,!1)})}computeChildrenMap(t,e,i){if(!xi(t)||!i&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:new Map};let o,a=Pt(t);e!==void 0&&(a?o=yd(e,t,this.identitySymbol):o=vd(e,t));for(let r of Object.keys(t)){let l$1,u=t[r];if(u===void 0){e.byPropertyKey.has(r)&&(o??=l({},e),o.byPropertyKey.delete(r));continue}a&&xi(u)&&!Pt(u)&&(l$1=u[this.identitySymbol]??=Symbol(``));let v;l$1&&(e.byTrackingKey?.has(l$1)||(o??=l({},e),o.byTrackingKey??=new Map,o.byTrackingKey.set(l$1,this.createChildNode(r,l$1,a))),v=(o??e).byTrackingKey.get(l$1));let w=e.byPropertyKey.get(r);w===void 0?(o??=l({},e),o.byPropertyKey.set(r,{reader:this.createReader(r),node:v??this.createChildNode(r,l$1,a)})):v&&v!==w.node&&(o??=l({},e),w.node=v)}return o??e}createReader(t){return on$2(()=>this.childrenMap()?.byPropertyKey.get(t)?.node)}};var zo=class extends Ni{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return _d}get keyInParent(){return hl}isOrphaned=fl;childrenMap;constructor(t,e,i,o,a){super(e,t,a),this.fieldManager=i,this.value=o,this.childrenMap=this.createChildrenMap()}};var Bo=class extends Ni{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(t,e,i,o,a,r){super(e,t,r),this.logic=e,this.parent=i,this.root=this.parent.structure.root;let l=this.createKeyOrOrphanSignals(`child`,o,a);this.isOrphaned=l.isOrphaned,this.keyInParent=l.keyInParent,this.pathKeys=on$2(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=gd(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var _d=on$2(()=>[]);var hl=on$2(()=>{throw new D(1905,!1)});function yd(n,t,e){let i,o=new Set(n.byPropertyKey.keys()),a=n.byTrackingKey&&new Set(n.byTrackingKey.keys());for(let r=0;r<t.length;r++){let l=t[r];o.delete(r.toString()),a&&xi(l)&&Object.hasOwn(l,e)&&a.delete(l[e])}if(o.size>0){i??=l({},n);for(let r of o)i.byPropertyKey.delete(r)}if(a&&a.size>0){i??=l({},n);for(let r of a)i.byTrackingKey.delete(r)}return i}function vd(n,t){let e;for(let i of n.byPropertyKey.keys())Object.hasOwn(t,i)||(e??=l({},n),e.byPropertyKey.delete(i));return e}var jo=class{node;selfSubmitting=Z(!1);submissionErrors;constructor(t){this.node=t,this.submissionErrors=ih({source:this.node.structure.value,computation:()=>[]})}submitting=on$2(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var In=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new Vo(this)}fieldProxy=new Proxy(()=>this,hd);pathNode;constructor(t){this.pathNode=t.pathNode,this.fieldAdapter=t.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,t),this.validationState=this.fieldAdapter.createValidationState(this,t),this.nodeState=this.fieldAdapter.createNodeState(this,t),this.metadataState=new Lo(this),this.submitState=new jo(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(t){this.getBindingForFocus()?.focus(t)}getBindingForFocus(){return this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(al,void 0)||this.structure.children().map(e=>e.getBindingForFocus()).reduce(al,void 0)}pendingSync=ih({source:()=>this.value(),computation:(t,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let t=this.metadata(cl)?.();return t?this.metadata(t):void 0}get maxLength(){return this.metadata(ul)}get min(){let t=this.metadata(dl)?.();return t?this.metadata(t):void 0}get minLength(){return this.metadata(ml)}get pattern(){return this.metadata(pl)??xd}get required(){return this.metadata(sl)??Cd}metadata(t){return this.metadataState.get(t)}getError(t){return this.errors().find(e=>e.kind===t)}hasMetadata(t){return this.metadataState.has(t)}markAsTouched(t){this.structure.isOrphaned()||z(()=>{this.markAsTouchedInternal(t),this.flushSync()})}markAsTouchedInternal(t){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!t?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(t){z(()=>this._reset(t))}_reset(t){this.pendingSync()?.abort(),t!==void 0&&this.value.set(t),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset()}reloadValidation(){z(()=>this._reloadValidation())}_reloadValidation(){let t=this.logicNode.logic.getMetadataKeys();for(let e of t)e[$o]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation()}controlValueSignal(){let t=ih(this.value);t.rawSet=t.set,t.set=i=>{t.rawSet(i),this.markAsDirty(),this.debounceSync()};let e=t.update;return t.update=i=>{e(i),this.markAsDirty(),this.debounceSync()},t}sync(){this.value.set(this.controlValue())}flushSync(){let t=this.pendingSync();t&&!t.signal.aborted&&(t.abort(),this.sync())}async debounceSync(){let t=z(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(t){let e=new AbortController,i=t(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(t,e,i,o){return o.newRoot(t,e,i,o)}createStructure(t){return t.kind===`root`?new zo(this,t.logic,t.fieldManager,t.value,this.newChild.bind(this)):new Bo(this,t.logic,t.parent,t.identityInParent,t.initialKeyInParent,this.newChild.bind(this))}newChild(t,e,i){let o,a;return i?(o=this.pathNode.getChild(Ft),a=this.structure.logic.getChild(Ft)):(o=this.pathNode.getChild(t),a=this.structure.logic.getChild(t)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:o,logic:a,initialKeyInParent:t,identityInParent:e,fieldAdapter:this.fieldAdapter})}};var xd=on$2(()=>[]);var Cd=on$2(()=>!1);function al(n,t){return n?t&&n.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t:n:t}var Ho=class{node;selfTouched=Z(!1);selfDirty=Z(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=Z([]);constructor(t){this.node=t}dirty=on$2(()=>{let t=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,i)=>i||e.nodeState.dirty(),nl)});touched=on$2(()=>{let t=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,i)=>i||e.nodeState.touched(),nl)});disabledReasons=on$2(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:De});disabled=on$2(()=>!!this.disabledReasons().length);readonly=on$2(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=on$2(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=on$2(()=>{let t=this.node.structure.parent;return t?`${t.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=on$2(()=>{if(this.node.logicNode.logic.hasMetadata(Ro)){let e=this.node.logicNode.logic.getMetadata(Ro).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=on$2(()=>this.hidden()||this.disabled()||this.readonly())};var Go=class{newRoot(t,e,i,o){return new In({kind:`root`,fieldManager:t,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:o})}newChild(t){return new In(t)}createNodeState(t){return new Ho(t)}createValidationState(t){return new Po(t)}createStructure(t,e){return t.createStructure(e)}};var Uo=class{injector;rootName;submitOptions;constructor(t,e,i){this.injector=t,this.rootName=e??`${this.injector.get(In$1)}.form${wd++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(t){Sn$1(()=>{let e=new Set;this.markStructuresLive(t,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),z(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(t,e){e.add(t);for(let i of t.children())this.markStructuresLive(i.structure,e)}};var wd=0;var gl=new y(``);function Sd(n){let t,e,i;return n.length===3?[t,e,i]=n:n.length===2?cd(n[1])?[t,e]=n:[t,i]=n:[t]=n,[t,e,i]}function Qo(...n){let[t,e,i]=Sd(n),o=i?.injector??h(J),a=Ie(o,()=>Mi.rootCompile(e)),r=new Uo(o,i?.name,i?.submission),l=i?.adapter??new Go,u=In.newRoot(r,t,a,l);r.createFieldManagementEffect(u.structure);let{experimentalWebMcpTool:v}=i??{};if(v){let w=Ie(o,()=>h(gl,{optional:!0}));w&&Ie(o,()=>w(u.fieldTree,{name:v.name,description:v.description,annotations:v.annotations}))}return u.fieldTree}var Ei=class{kind=`compat`;control;fieldTree;context;message;constructor({context:t,kind:e,control:i}){this.context=t,this.kind=e,this.control=i}};function bl(n){if(n.length===0)return null;let t={};for(let e of n)t[e.kind]=e instanceof Ei?e.context:e;return t}function _l(n,t){return n===null?[]:Object.entries(n).map(([e,i])=>new Ei({context:i,kind:e,control:t}))}function Fn(n){return typeof n==`function`&&n[qo]===!0}var Md=new y(``);function Cl(n,t){Wo(n);let e=ct.unwrapFieldPath(n),i;typeof t==`function`||typeof t==`string`?i=t:i=t?.when,e.builder.addDisabledReasonRule(o=>{let a=!0;return typeof i==`string`?a=i:i&&(a=i(o)),typeof a==`string`?{fieldTree:o.fieldTree,message:a}:a?{fieldTree:o.fieldTree}:void 0})}function wl(n,t){Wo(n);let e=ct.unwrapFieldPath(n),i=typeof t==`function`?t:t?.when??(()=>!0);e.builder.addReadonlyRule(i)}function yl(n){return n===void 0?[]:Array.isArray(n)?n:[n]}var Yo=class{__brand=void 0;kind=``;fieldTree;message;constructor(t){t&&Object.assign(this,t)}};var Ti=class extends Yo{kind=`parse`};function kd(n,t,e){let i=ih({source:n,computation:()=>[],equal:De}),o=r=>{let l=e(r);i.set(yl(l.error)),l.value!==void 0&&t(l.value),i.set(yl(l.error))},a=()=>{i.set([])};return{errors:i.asReadonly(),setRawValue:o,reset:a}}var Xo=class{field;constructor(t){this.field=t}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return bl(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new D(1910,!1)}valueAccessor=null;hasValidator(t){return t===Ze.required?this.field().required():!1}updateValueAndValidity(){}};var Zo={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var Nd=(()=>{let n={};for(let t of Object.keys(Zo))n[Zo[t]]=t;return n})();function Jo(n,t){return n[Nd[t]]?.()}var ea=Object.values(Zo);function Ai(){return{}}function Ct(n,t,e){return Object.is(n[t],e)?!1:(n[t]=e,!0)}function Ed(n,t,e){let i;if(Sl(n)&&e.isBadInput(n))return{error:new Ti};switch(n.type){case`checkbox`:return{value:n.checked};case`number`:case`range`:case`datetime-local`:if(i=z(t),typeof i==`number`||i===null)return{value:n.value===``?null:n.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(i=z(t),i===null||i instanceof Date)return{value:n.valueAsDate};if(typeof i==`number`)return{value:n.valueAsNumber}}if(n.tagName===`INPUT`&&n.type===`text`&&(i??=z(t),typeof i==`number`||i===null)){if(n.value===``)return{value:null};let o=Number(n.value);return Number.isNaN(o)?{error:new Ti}:{value:o}}return{value:n.value}}function vl(n,t){switch(n.type){case`checkbox`:n.checked=t;return;case`radio`:n.checked=t===n.value;return;case`number`:case`range`:case`datetime-local`:if(typeof t==`number`){xl(n,t);return}else if(t===null){n.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(t===null||t instanceof Date){n.valueAsDate=t;return}else if(typeof t==`number`){xl(n,t);return}}if(n.tagName===`INPUT`&&n.type===`text`){if(typeof t==`number`){n.value=isNaN(t)?``:String(t);return}if(t===null){n.value=``;return}}n.value=t}function xl(n,t){isNaN(t)?n.value=``:n.valueAsNumber=t}function Sl(n){return n.tagName===`INPUT`}function Dd(n){return n.type===`date`||n.type===`datetime-local`||n.type===`month`||n.type===`time`||n.type===`week`}function Td(n,t){let e=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,`0`);if(t===`month`)return`${e}-${i}`;return`${e}-${i}-${String(n.getUTCDate()).padStart(2,`0`)}`}function Ml(n,t,e){return t instanceof Date&&(n===`min`||n===`max`)&&(e===`date`||e===`month`)?Td(t,e):t}function Ad(n,t){n.listenToCustomControlModel(i=>t.state().controlValue.set(i)),n.listenToCustomControlOutput(`touch`,()=>t.state().markAsTouched()),t.registerAsBinding(n.customControl);let e=Ai();return()=>{let i=t.state(),o=i.controlValue();Ct(e,`controlValue`,o)&&n.setCustomControlModelInput(o);for(let a of ea){let r;if(a===`errors`?r=t.errors():r=Jo(i,a),Ct(e,a,r)&&(n.setInputOnDirectives(a,r),t.elementAcceptsNativeProperty(a)&&!n.customControlHasInput(a))){let l=Ml(a,r,t.nativeFormElement.type);Nn(t.renderer,t.nativeFormElement,a,l)}}}}function Od(n){return typeof n==`object`&&n!==null}function Id(n,t){let e=Ai();t.controlValueAccessor.registerOnChange(o=>{e.controlValue=o,t.state().controlValue.set(o)}),t.controlValueAccessor.registerOnTouched(()=>t.state().markAsTouched());let i=t.injector.get(It,null,{optional:!0,self:!0});if(i){let o;for(let u of i)Od(u)&&u.registerOnValidatorChange&&(o??=Z(0),u.registerOnValidatorChange(()=>{o.update(v=>v+1)}));let a=i.map(u=>typeof u==`function`?u:u.validate.bind(u)),r=Ze.compose(a),l=on$2(()=>{o?.();return _l(r?r(t.interopNgControl.control):null,t.interopNgControl.control)});t.parseErrorsSource.set(l)}return t.registerAsBinding({reset:()=>{let o=t.state().value();e.controlValue=o,z(()=>t.controlValueAccessor.writeValue(o))}}),()=>{let o=t.state(),a=o.controlValue();Ct(e,`controlValue`,a)&&z(()=>t.controlValueAccessor.writeValue(a));for(let r of ea){let l=Jo(o,r);if(Ct(e,r,l)){let u=n.setInputOnDirectives(r,l,r===`name`?Fd:void 0);r===`disabled`&&t.controlValueAccessor.setDisabledState?z(()=>t.controlValueAccessor.setDisabledState(l)):!u&&t.elementAcceptsNativeProperty(r)&&Nn(t.renderer,t.nativeFormElement,r,l)}}}}function Fd(n){return n==null}function Pd(n,t,e){if(typeof MutationObserver!=`function`)return;let i=new MutationObserver(o=>{o.some(a=>Rd(a))&&t()});i.observe(n,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function Rd(n){if(n.type===`childList`||n.type===`characterData`){if(n.target instanceof Comment)return!1;for(let t of n.addedNodes)if(!(t instanceof Comment))return!0;for(let t of n.removedNodes)if(!(t instanceof Comment))return!0;return!1}return n.type===`attributes`&&n.target instanceof HTMLOptionElement}function Vd(n,t,e,i){let o=!1,a=t.nativeFormElement,r=kd(()=>t.state().value(),u=>t.state().controlValue.set(u),u=>Ed(a,t.state().value,i));e.set(r.errors),t.onReset=()=>{r.reset();let u=t.state().value();l.controlValue=u,vl(a,u)},n.listenToDom(`input`,()=>r.setRawValue(void 0)),n.listenToDom(`blur`,()=>t.state().markAsTouched()),Sl(a)&&Dd(a)&&i.watchValidity(t.destroyRef,a,()=>r.setRawValue(void 0)),t.registerAsBinding(),a.tagName===`SELECT`&&Pd(a,()=>{o&&(a.value=t.state().controlValue())},t.destroyRef);let l=Ai();return()=>{let u=t.state();for(let U of ea){let x=Jo(u,U);if(Ct(l,U,x)&&(n.setInputOnDirectives(U,x),t.elementAcceptsNativeProperty(U))){let Q=Ml(U,x,a.type);Nn(t.renderer,a,U,Q)}}let v=u.controlValue(),w=Ct(l,`controlValue`,v),V=a.type===`radio`&&Ct(l,`radioValue`,a.value);(w||V)&&vl(a,v),o=!0}}var kl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵprov=k({token:n,factory:e=>Ld.ɵfac(e),providedIn:`root`})}return n})();var Ld=(()=>{class n extends kl{document=h(q);cspNonce=h($r$1,{optional:!0});injectedStyles=new WeakMap;watchValidity(e,i,o){let a=i.getRootNode();this.injectedStyles.has(a)||this.injectedStyles.set(a,this.createTransitionStyle(a));let r=l=>{let u=l;(u.animationName===`ng-valid`||u.animationName===`ng-invalid`)&&o()};i.addEventListener(`animationstart`,r),e.onDestroy(()=>{i.removeEventListener(`animationstart`,r)})}isBadInput(e){return e.validity?.badInput??!1}createTransitionStyle(e){let i=this.document.createElement(`style`);return this.cspNonce&&(i.nonce=this.cspNonce),i.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(i):e.appendChild(i),i}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let e;return function(o){return(e||(e=jv(n)))(o||n)}})();static ɵprov=k({token:n,factory:n.ɵfac})}return n})();var zd=Symbol();var on=new y(``);var Nl=(()=>{class n{field=O.required({alias:`formField`});state=on$2(()=>this.field()());renderer=h(Pt$1);destroyRef=h(ue);injector=h(J);element=h(fe).nativeElement;elementIsNativeFormElement=Eo(this.element);elementAcceptsTextualValues=Qr(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=h(dt,{optional:!0,self:!0});config=h(Md,{optional:!0});validityMonitor=h(kl);parseErrorsSource=Z(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Xo(this.state)}parseErrors=on$2(()=>this.parseErrorsSource()?.().map(e=>m(l({},e),{fieldTree:z(this.state).fieldTree,formField:this}))??[],{equal:De});errors=on$2(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:De});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e)}set onReset(e){this.parseErrorsResetCallback=e}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:Do(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([o,a])=>[o,on$2(()=>a(this))]);if(e.length===0)return;let i=Ai();vW({write:()=>{if(!this.state().structure.isOrphaned())for(let[o,a]of e){let r=a();Ct(i,o,r)&&(r?this.renderer.addClass(this.element,o):this.renderer.removeClass(this.element,o))}}},{injector:this.injector})}focus(e){this.focuser(e)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(e){if(this.isFieldBinding)throw new D(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),e?.reset&&(this.resetter=()=>e.reset()),Sn$1(i=>{let o=this.state();o.nodeState.formFieldBindings.update(a=>[...a,this]),i(()=>{let a=o.nodeState.formFieldBindings().filter(r=>r!==this);o.nodeState.formFieldBindings.set(a),a.length===0&&!o.structure.isOrphaned()&&o.flushSync()})},{injector:this.injector})}[zd];ɵngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=Id(e,this);else if(e.customControl)this.ɵngControlUpdate=Ad(e,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=Vd(e,this,this.parseErrorsSource,this.validityMonitor);else throw new D(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case`min`:case`max`:return this._elementAcceptsMinMax??=Kr(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[tw([{provide:on,useExisting:n},{provide:vt,useFactory:()=>h(n).interopNgControl},{provide:Xr,useFactory:()=>h(on,{self:!0})}]),Q0(`formField`)]})}return n})();var Bd=20;var jd=new y(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=h(J);return()=>Va(n,{scrollThrottle:Bd})}});var Hd=new y(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var El=`tooltip-panel`;var Gd={passive:!0};var Ud=8;var qd=8;var Wd=24;var $d=200;var ze=(()=>{class n{_elementRef=h(fe);_ngZone=h(V);_platform=h(Dt);_ariaDescriber=h(G7);_focusMonitor=h(Su);_dir=h(V1);_injector=h(J);_viewContainerRef=h(nn$1);_mediaMatcher=h(Mu);_document=h(q);_renderer=h(Pt$1);_animationsDisabled=Di$1();_defaultOptions=h(Hd,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Dl;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=vQ(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=vQ(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Om(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Om(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new U;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Ud}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Ct$1(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(i);this._detach(),this._portal=this._portal||new Lt$1(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=o.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(Ct$1(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof fe)return this._overlayRef;this._detach()}let i=this._injector.get(hn$1).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${El}`,a=za(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation(`global`);return a.positionChanges.pipe(Ct$1(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=fn(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(jd)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Ct$1(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Ct$1(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Ct$1(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Ct$1(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,o=this._getOrigin(),a=this._getOverlayPosition();i.withPositions([this._addOffset(l(l({},o.main),a.main)),this._addOffset(l(l({},o.fallback),a.fallback))])}_addOffset(e){let i=qd,o=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-i:e.originY===`bottom`?e.offsetY=i:e.originX===`start`?e.offsetX=o?-i:i:e.originX===`end`&&(e.offsetX=o?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,i=this.position,o;i==`above`||i==`below`?o={originX:`center`,originY:i==`above`?`top`:`bottom`}:i==`before`||i==`left`&&e||i==`right`&&!e?o={originX:`start`,originY:`center`}:(i==`after`||i==`right`&&e||i==`left`&&!e)&&(o={originX:`end`,originY:`center`});let{x:a,y:r}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:a,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,i=this.position,o;i==`above`?o={overlayX:`center`,overlayY:`bottom`}:i==`below`?o={overlayX:`center`,overlayY:`top`}:i==`before`||i==`left`&&e||i==`right`&&!e?o={overlayX:`end`,overlayY:`center`}:(i==`after`||i==`right`&&e||i==`left`&&!e)&&(o={overlayX:`start`,overlayY:`center`});let{x:a,y:r}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:a,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Xo$1(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position===`above`||this.position===`below`?i===`top`?i=`bottom`:i===`bottom`&&(i=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:o,originY:a}=e,r;if(i===`center`?this._dir&&this._dir.value===`rtl`?r=o===`end`?`left`:`right`:r=o===`start`?`left`:`right`:r=i===`bottom`&&a===`top`?`above`:`below`,r!==this._currentPosition){let l=this._overlayRef;if(l){let u=`${this._cssClassPrefix}-${El}-`;l.removePanelClass(u+this._currentPosition),l.addPanelClass(u+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let i=e.targetTouches?.[0],o=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),o=this._elementRef.nativeElement;i!==o&&!o.contains(i)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,Gd))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let i=this._elementRef.nativeElement,o=i.style;(e===`on`||i.nodeName!==`INPUT`&&i.nodeName!==`TEXTAREA`)&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect=`none`),(e===`on`||!i.draggable)&&(o.webkitUserDrag=`none`),o.touchAction=`none`,o.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||Xo$1({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!yI(e):!0;static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(i,o){i&2&&nt(`mat-mdc-tooltip-disabled`,o.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var Dl=(()=>{class n{_changeDetectorRef=h(rr);_elementRef=h(fe);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Di$1();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new U;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Wd&&e.width>=$d}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,o=this._showAnimation,a=this._hideAnimation;if(i.classList.remove(e?a:o),i.classList.add(e?o:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let r=getComputedStyle(i);(r.getPropertyValue(`animation-duration`)===`0s`||r.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[`tooltip`];return Ne({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(o,a){if(o&1&&BE(e,7),o&2){let r;Yp(r=Qp())&&(a._tooltip=r.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(o,a){o&1&&ti(`mouseleave`,function(l){return a._handleMouseLeave(l)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(o,a){o&1&&(et$1(0,`div`,1,0),Zp(`animationend`,function(l){return a._handleAnimationEnd(l)}),et$1(2,`div`,2),eh(3),tt()()),o&2&&(Jp(a.tooltipClass),nt(`mdc-tooltip--multiline`,a._isMultiline),An$1(3),th(a.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return n})();function f(n){return new ln$1(cn$1.define(n))}function wt(n){return import(`./chunk-CBWWT5en.js`).then(t=>t.sql({dialect:t[n]}))}var ta=[on$1.of({name:`C`,extensions:[`c`,`h`,`ino`],load(){return import(`./chunk-Bs6Y40sA.js`).then(n=>n.cpp())}}),on$1.of({name:`C++`,alias:[`cpp`],extensions:[`cpp`,`c++`,`cc`,`cxx`,`hpp`,`h++`,`hh`,`hxx`],load(){return import(`./chunk-Bs6Y40sA.js`).then(n=>n.cpp())}}),on$1.of({name:`CQL`,alias:[`cassandra`],extensions:[`cql`],load(){return wt(`Cassandra`)}}),on$1.of({name:`CSS`,extensions:[`css`],load(){return import(`./chunk-CO22NEYY.js`).then(n=>n.css())}}),on$1.of({name:`Go`,extensions:[`go`],load(){return import(`./chunk-CRktQqII.js`).then(n=>n.go())}}),on$1.of({name:`HTML`,alias:[`xhtml`],extensions:[`html`,`htm`,`handlebars`,`hbs`],load(){return import(`./chunk-BrW61aPa.js`).then(n=>n.html())}}),on$1.of({name:`Java`,extensions:[`java`],load(){return import(`./chunk-DBCIL8of.js`).then(n=>n.java())}}),on$1.of({name:`JavaScript`,alias:[`ecmascript`,`js`,`node`],extensions:[`js`,`mjs`,`cjs`],load(){return import(`./chunk-1UBOVdeb.js`).then(n=>n.javascript())}}),on$1.of({name:`Jinja`,extensions:[`j2`,`jinja`,`jinja2`],load(){return import(`./chunk-CXYxG6U9.js`).then(n=>n.jinja())}}),on$1.of({name:`JSON`,alias:[`json5`],extensions:[`json`,`map`],load(){return import(`./chunk-CW8ov_Zn.js`).then(n=>n.json())}}),on$1.of({name:`JSX`,extensions:[`jsx`],load(){return import(`./chunk-1UBOVdeb.js`).then(n=>n.javascript({jsx:!0}))}}),on$1.of({name:`LESS`,extensions:[`less`],load(){return import(`./chunk-DKRF4zKH.js`).then(n=>n.less())}}),on$1.of({name:`Liquid`,extensions:[`liquid`],load(){return import(`./chunk-CfLfHLjl.js`).then(n=>n.liquid())}}),on$1.of({name:`MariaDB SQL`,load(){return wt(`MariaSQL`)}}),on$1.of({name:`Markdown`,extensions:[`md`,`markdown`,`mkd`],load(){return import(`./chunk-Db1sIWUl.js`).then(n=>n.markdown())}}),on$1.of({name:`MS SQL`,load(){return wt(`MSSQL`)}}),on$1.of({name:`MySQL`,load(){return wt(`MySQL`)}}),on$1.of({name:`PHP`,extensions:[`php`,`php3`,`php4`,`php5`,`php7`,`phtml`],load(){return import(`./chunk-DI2r3BaA.js`).then(n=>n.php())}}),on$1.of({name:`PLSQL`,extensions:[`pls`],load(){return wt(`PLSQL`)}}),on$1.of({name:`PostgreSQL`,load(){return wt(`PostgreSQL`)}}),on$1.of({name:`Python`,extensions:[`BUILD`,`bzl`,`py`,`pyw`],filename:/^(BUCK|BUILD)$/,load(){return import(`./chunk-DCkqSBn8.js`).then(n=>n.python())}}),on$1.of({name:`Rust`,extensions:[`rs`],load(){return import(`./chunk-B7Xn0PPz.js`).then(n=>n.rust())}}),on$1.of({name:`Sass`,extensions:[`sass`],load(){return import(`./chunk-Cgv9GQZW.js`).then(n=>n.sass({indented:!0}))}}),on$1.of({name:`SCSS`,extensions:[`scss`],load(){return import(`./chunk-Cgv9GQZW.js`).then(n=>n.sass())}}),on$1.of({name:`SQL`,extensions:[`sql`],load(){return wt(`StandardSQL`)}}),on$1.of({name:`SQLite`,load(){return wt(`SQLite`)}}),on$1.of({name:`TSX`,extensions:[`tsx`],load(){return import(`./chunk-1UBOVdeb.js`).then(n=>n.javascript({jsx:!0,typescript:!0}))}}),on$1.of({name:`TypeScript`,alias:[`ts`],extensions:[`ts`,`mts`,`cts`],load(){return import(`./chunk-1UBOVdeb.js`).then(n=>n.javascript({typescript:!0}))}}),on$1.of({name:`WebAssembly`,extensions:[`wat`,`wast`],load(){return import(`./chunk-Ek1jZ16O.js`).then(n=>n.wast())}}),on$1.of({name:`XML`,alias:[`rss`,`wsdl`,`xsd`],extensions:[`xml`,`xsl`,`xsd`,`svg`],load(){return import(`./chunk-CFmgEoEK.js`).then(n=>n.xml())}}),on$1.of({name:`YAML`,alias:[`yml`],extensions:[`yaml`,`yml`],load(){return import(`./chunk-Dl4xQqHm.js`).then(n=>n.yaml())}}),on$1.of({name:`APL`,extensions:[`dyalog`,`apl`],load(){return import(`./chunk-BzR3NGdS.js`).then(n=>f(n.apl))}}),on$1.of({name:`PGP`,alias:[`asciiarmor`],extensions:[`asc`,`pgp`,`sig`],load(){return import(`./chunk-B8l9iw83.js`).then(n=>f(n.asciiArmor))}}),on$1.of({name:`ASN.1`,extensions:[`asn`,`asn1`],load(){return import(`./chunk-uB5IPWUJ.js`).then(n=>f(n.asn1({})))}}),on$1.of({name:`Asterisk`,filename:/^extensions\.conf$/i,load(){return import(`./chunk-L8XQiDVi.js`).then(n=>f(n.asterisk))}}),on$1.of({name:`Brainfuck`,extensions:[`b`,`bf`],load(){return import(`./chunk-DuJeDwuD.js`).then(n=>f(n.brainfuck))}}),on$1.of({name:`Cobol`,extensions:[`cob`,`cpy`],load(){return import(`./chunk-BpJH2gOJ.js`).then(n=>f(n.cobol))}}),on$1.of({name:`C#`,alias:[`csharp`,`cs`],extensions:[`cs`],load(){return import(`./chunk-BBv-fN7B.js`).then(n=>f(n.csharp))}}),on$1.of({name:`Clojure`,extensions:[`clj`,`cljc`,`cljx`],load(){return import(`./chunk-Bg-N9Gff.js`).then(n=>f(n.clojure))}}),on$1.of({name:`ClojureScript`,extensions:[`cljs`],load(){return import(`./chunk-Bg-N9Gff.js`).then(n=>f(n.clojure))}}),on$1.of({name:`Closure Stylesheets (GSS)`,extensions:[`gss`],load(){return import(`./chunk-BPCr8DLQ.js`).then(n=>f(n.gss))}}),on$1.of({name:`CMake`,extensions:[`cmake`,`cmake.in`],filename:/^CMakeLists\.txt$/,load(){return import(`./chunk-CyhyJdLe.js`).then(n=>f(n.cmake))}}),on$1.of({name:`CoffeeScript`,alias:[`coffee`,`coffee-script`],extensions:[`coffee`],load(){return import(`./chunk-CmiqMmsP.js`).then(n=>f(n.coffeeScript))}}),on$1.of({name:`Common Lisp`,alias:[`lisp`],extensions:[`cl`,`lisp`,`el`],load(){return import(`./chunk-CCMgGIhn.js`).then(n=>f(n.commonLisp))}}),on$1.of({name:`Cypher`,extensions:[`cyp`,`cypher`],load(){return import(`./chunk-BAh91a6z.js`).then(n=>f(n.cypher))}}),on$1.of({name:`Cython`,extensions:[`pyx`,`pxd`,`pxi`],load(){return import(`./chunk-afGlHm6t.js`).then(n=>f(n.cython))}}),on$1.of({name:`Crystal`,extensions:[`cr`],load(){return import(`./chunk-Dxpd47Ni.js`).then(n=>f(n.crystal))}}),on$1.of({name:`D`,extensions:[`d`],load(){return import(`./chunk-Ed1vCDsL.js`).then(n=>f(n.d))}}),on$1.of({name:`Dart`,extensions:[`dart`],load(){return import(`./chunk-BBv-fN7B.js`).then(n=>f(n.dart))}}),on$1.of({name:`diff`,extensions:[`diff`,`patch`],load(){return import(`./chunk-Dj76vDS8.js`).then(n=>f(n.diff))}}),on$1.of({name:`Dockerfile`,filename:/^Dockerfile$/,load(){return import(`./chunk-BPQj_0jl.js`).then(n=>f(n.dockerFile))}}),on$1.of({name:`DTD`,extensions:[`dtd`],load(){return import(`./chunk-CoPeKXR5.js`).then(n=>f(n.dtd))}}),on$1.of({name:`Dylan`,extensions:[`dylan`,`dyl`,`intr`],load(){return import(`./chunk-DfHX8d0F.js`).then(n=>f(n.dylan))}}),on$1.of({name:`EBNF`,load(){return import(`./chunk-0lgmhEQx.js`).then(n=>f(n.ebnf))}}),on$1.of({name:`ECL`,extensions:[`ecl`],load(){return import(`./chunk-BJwhYCBi.js`).then(n=>f(n.ecl))}}),on$1.of({name:`edn`,extensions:[`edn`],load(){return import(`./chunk-Bg-N9Gff.js`).then(n=>f(n.clojure))}}),on$1.of({name:`Eiffel`,extensions:[`e`],load(){return import(`./chunk-B1qWcSdL.js`).then(n=>f(n.eiffel))}}),on$1.of({name:`Elm`,extensions:[`elm`],load(){return import(`./chunk-DNVXIQmL.js`).then(n=>f(n.elm))}}),on$1.of({name:`Erlang`,extensions:[`erl`],load(){return import(`./chunk-DjS06H04.js`).then(n=>f(n.erlang))}}),on$1.of({name:`Esper`,load(){return import(`./chunk-C6LDw2p1.js`).then(n=>f(n.esper))}}),on$1.of({name:`Factor`,extensions:[`factor`],load(){return import(`./chunk-DRvUodkS.js`).then(n=>f(n.factor))}}),on$1.of({name:`FCL`,load(){return import(`./chunk-Bb6r8S32.js`).then(n=>f(n.fcl))}}),on$1.of({name:`Forth`,extensions:[`forth`,`fth`,`4th`],load(){return import(`./chunk-CBomUWW5.js`).then(n=>f(n.forth))}}),on$1.of({name:`Fortran`,extensions:[`f`,`for`,`f77`,`f90`,`f95`],load(){return import(`./chunk-BNZA6KFU.js`).then(n=>f(n.fortran))}}),on$1.of({name:`F#`,alias:[`fsharp`],extensions:[`fs`],load(){return import(`./chunk-DL32iuP0.js`).then(n=>f(n.fSharp))}}),on$1.of({name:`Gas`,extensions:[`s`],load(){return import(`./chunk-Cw-lzCKG.js`).then(n=>f(n.gas))}}),on$1.of({name:`Gherkin`,extensions:[`feature`],load(){return import(`./chunk-YT78SAuz.js`).then(n=>f(n.gherkin))}}),on$1.of({name:`Groovy`,extensions:[`groovy`,`gradle`],filename:/^Jenkinsfile$/,load(){return import(`./chunk-B5I4skMJ.js`).then(n=>f(n.groovy))}}),on$1.of({name:`Haskell`,extensions:[`hs`],load(){return import(`./chunk-t3JpkKDn.js`).then(n=>f(n.haskell))}}),on$1.of({name:`Haxe`,extensions:[`hx`],load(){return import(`./chunk-DGdxxVxd.js`).then(n=>f(n.haxe))}}),on$1.of({name:`HXML`,extensions:[`hxml`],load(){return import(`./chunk-DGdxxVxd.js`).then(n=>f(n.hxml))}}),on$1.of({name:`HTTP`,load(){return import(`./chunk-B1hLdrTw.js`).then(n=>f(n.http))}}),on$1.of({name:`IDL`,extensions:[`pro`],load(){return import(`./chunk-D7w9qbe1.js`).then(n=>f(n.idl))}}),on$1.of({name:`JSON-LD`,alias:[`jsonld`],extensions:[`jsonld`],load(){return import(`./chunk-XEW1yU9K.js`).then(n=>f(n.jsonld))}}),on$1.of({name:`Julia`,extensions:[`jl`],load(){return import(`./chunk-KVbHKHvQ.js`).then(n=>f(n.julia))}}),on$1.of({name:`Kotlin`,extensions:[`kt`,`kts`],load(){return import(`./chunk-BBv-fN7B.js`).then(n=>f(n.kotlin))}}),on$1.of({name:`LiveScript`,alias:[`ls`],extensions:[`ls`],load(){return import(`./chunk-EP3ecUcg.js`).then(n=>f(n.liveScript))}}),on$1.of({name:`Lua`,extensions:[`lua`],load(){return import(`./chunk-DYQnEfpW.js`).then(n=>f(n.lua))}}),on$1.of({name:`mIRC`,extensions:[`mrc`],load(){return import(`./chunk-CqzX5H1y.js`).then(n=>f(n.mirc))}}),on$1.of({name:`Mathematica`,extensions:[`m`,`nb`,`wl`,`wls`],load(){return import(`./chunk-D5mJYkM2.js`).then(n=>f(n.mathematica))}}),on$1.of({name:`Modelica`,extensions:[`mo`],load(){return import(`./chunk-CtlgIJxW.js`).then(n=>f(n.modelica))}}),on$1.of({name:`MUMPS`,extensions:[`mps`],load(){return import(`./chunk-C7JzSd8l.js`).then(n=>f(n.mumps))}}),on$1.of({name:`Mbox`,extensions:[`mbox`],load(){return import(`./chunk-5cwgbT4T.js`).then(n=>f(n.mbox))}}),on$1.of({name:`Nginx`,filename:/nginx.*\.conf$/i,load(){return import(`./chunk-5AJNoRYs.js`).then(n=>f(n.nginx))}}),on$1.of({name:`NSIS`,extensions:[`nsh`,`nsi`],load(){return import(`./chunk-fOXhsbmC.js`).then(n=>f(n.nsis))}}),on$1.of({name:`NTriples`,extensions:[`nt`,`nq`],load(){return import(`./chunk-B1VYIJjT.js`).then(n=>f(n.ntriples))}}),on$1.of({name:`Objective-C`,alias:[`objective-c`,`objc`],extensions:[`m`],load(){return import(`./chunk-BBv-fN7B.js`).then(n=>f(n.objectiveC))}}),on$1.of({name:`Objective-C++`,alias:[`objective-c++`,`objc++`],extensions:[`mm`],load(){return import(`./chunk-BBv-fN7B.js`).then(n=>f(n.objectiveCpp))}}),on$1.of({name:`OCaml`,extensions:[`ml`,`mli`,`mll`,`mly`],load(){return import(`./chunk-DL32iuP0.js`).then(n=>f(n.oCaml))}}),on$1.of({name:`Octave`,extensions:[`m`],load(){return import(`./chunk-B8eFgis9.js`).then(n=>f(n.octave))}}),on$1.of({name:`Oz`,extensions:[`oz`],load(){return import(`./chunk-D7371CwF.js`).then(n=>f(n.oz))}}),on$1.of({name:`Pascal`,extensions:[`p`,`pas`],load(){return import(`./chunk-duGoYlSG.js`).then(n=>f(n.pascal))}}),on$1.of({name:`Perl`,extensions:[`pl`,`pm`],load(){return import(`./chunk-CxespFwK.js`).then(n=>f(n.perl))}}),on$1.of({name:`Pig`,extensions:[`pig`],load(){return import(`./chunk-BEhfbkc8.js`).then(n=>f(n.pig))}}),on$1.of({name:`PowerShell`,extensions:[`ps1`,`psd1`,`psm1`],load(){return import(`./chunk-Dq1jBwtK.js`).then(n=>f(n.powerShell))}}),on$1.of({name:`Properties files`,alias:[`ini`,`properties`],extensions:[`properties`,`ini`,`in`],load(){return import(`./chunk-CFFoPi3e.js`).then(n=>f(n.properties))}}),on$1.of({name:`ProtoBuf`,extensions:[`proto`],load(){return import(`./chunk-ZXTJPx81.js`).then(n=>f(n.protobuf))}}),on$1.of({name:`Pug`,alias:[`jade`],extensions:[`pug`,`jade`],load(){return import(`./chunk-4RQs7T82.js`).then(n=>f(n.pug))}}),on$1.of({name:`Puppet`,extensions:[`pp`],load(){return import(`./chunk-BqiR97LL.js`).then(n=>f(n.puppet))}}),on$1.of({name:`Q`,extensions:[`q`],load(){return import(`./chunk-BP3HwL6Q.js`).then(n=>f(n.q))}}),on$1.of({name:`R`,alias:[`rscript`],extensions:[`r`,`R`],load(){return import(`./chunk-CmXCsqfh.js`).then(n=>f(n.r))}}),on$1.of({name:`RPM Changes`,load(){return import(`./chunk-nFknYhwh.js`).then(n=>f(n.rpmChanges))}}),on$1.of({name:`RPM Spec`,extensions:[`spec`],load(){return import(`./chunk-nFknYhwh.js`).then(n=>f(n.rpmSpec))}}),on$1.of({name:`Ruby`,alias:[`jruby`,`macruby`,`rake`,`rb`,`rbx`],extensions:[`rb`],filename:/^(Gemfile|Rakefile)$/,load(){return import(`./chunk-B0hbzba4.js`).then(n=>f(n.ruby))}}),on$1.of({name:`SAS`,extensions:[`sas`],load(){return import(`./chunk-CzUtmoDO.js`).then(n=>f(n.sas))}}),on$1.of({name:`Scala`,extensions:[`scala`],load(){return import(`./chunk-BBv-fN7B.js`).then(n=>f(n.scala))}}),on$1.of({name:`Scheme`,extensions:[`scm`,`ss`],load(){return import(`./chunk-D4QotWm7.js`).then(n=>f(n.scheme))}}),on$1.of({name:`Shell`,alias:[`bash`,`sh`,`zsh`],extensions:[`sh`,`ksh`,`bash`],filename:/^PKGBUILD$/,load(){return import(`./chunk-DJV-S170.js`).then(n=>f(n.shell))}}),on$1.of({name:`Sieve`,extensions:[`siv`,`sieve`],load(){return import(`./chunk-BGFAulwe.js`).then(n=>f(n.sieve))}}),on$1.of({name:`Smalltalk`,extensions:[`st`],load(){return import(`./chunk-C0FWUCEo.js`).then(n=>f(n.smalltalk))}}),on$1.of({name:`Solr`,load(){return import(`./chunk-BXHm2-Lh.js`).then(n=>f(n.solr))}}),on$1.of({name:`SML`,extensions:[`sml`,`sig`,`fun`,`smackspec`],load(){return import(`./chunk-DL32iuP0.js`).then(n=>f(n.sml))}}),on$1.of({name:`SPARQL`,alias:[`sparul`],extensions:[`rq`,`sparql`],load(){return import(`./chunk-Do2Ib08Z.js`).then(n=>f(n.sparql))}}),on$1.of({name:`Spreadsheet`,alias:[`excel`,`formula`],load(){return import(`./chunk-8xJZR2cG.js`).then(n=>f(n.spreadsheet))}}),on$1.of({name:`Squirrel`,extensions:[`nut`],load(){return import(`./chunk-BBv-fN7B.js`).then(n=>f(n.squirrel))}}),on$1.of({name:`Stylus`,extensions:[`styl`],load(){return import(`./chunk-Bx6zHqTd.js`).then(n=>f(n.stylus))}}),on$1.of({name:`Swift`,extensions:[`swift`],load(){return import(`./chunk-Cmbvx0tF.js`).then(n=>f(n.swift))}}),on$1.of({name:`sTeX`,load(){return import(`./chunk-W0bP4C6e.js`).then(n=>f(n.stex))}}),on$1.of({name:`LaTeX`,alias:[`tex`],extensions:[`text`,`ltx`,`tex`],load(){return import(`./chunk-W0bP4C6e.js`).then(n=>f(n.stex))}}),on$1.of({name:`SystemVerilog`,extensions:[`v`,`sv`,`svh`],load(){return import(`./chunk-CtjGUky9.js`).then(n=>f(n.verilog))}}),on$1.of({name:`Tcl`,extensions:[`tcl`],load(){return import(`./chunk-BUoFZKrk.js`).then(n=>f(n.tcl))}}),on$1.of({name:`Textile`,extensions:[`textile`],load(){return import(`./chunk-DijWEEEV.js`).then(n=>f(n.textile))}}),on$1.of({name:`TiddlyWiki`,load(){return import(`./chunk-Cs8Dq0Df.js`).then(n=>f(n.tiddlyWiki))}}),on$1.of({name:`Tiki wiki`,load(){return import(`./chunk-CNTC2lxM.js`).then(n=>f(n.tiki))}}),on$1.of({name:`TOML`,extensions:[`toml`],load(){return import(`./chunk-DlCGlkf6.js`).then(n=>f(n.toml))}}),on$1.of({name:`Troff`,extensions:[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`],load(){return import(`./chunk-DM12dBaf.js`).then(n=>f(n.troff))}}),on$1.of({name:`TTCN`,extensions:[`ttcn`,`ttcn3`,`ttcnpp`],load(){return import(`./chunk-DMgrZoZg.js`).then(n=>f(n.ttcn))}}),on$1.of({name:`TTCN_CFG`,extensions:[`cfg`],load(){return import(`./chunk-Bv04jMqb.js`).then(n=>f(n.ttcnCfg))}}),on$1.of({name:`Turtle`,extensions:[`ttl`],load(){return import(`./chunk-EFT-9rF0.js`).then(n=>f(n.turtle))}}),on$1.of({name:`Web IDL`,extensions:[`webidl`],load(){return import(`./chunk-DliwZ-QJ.js`).then(n=>f(n.webIDL))}}),on$1.of({name:`VB.NET`,extensions:[`vb`],load(){return import(`./chunk-DRorA3cA.js`).then(n=>f(n.vb))}}),on$1.of({name:`VBScript`,extensions:[`vbs`],load(){return import(`./chunk-Dyik1NzG.js`).then(n=>f(n.vbScript))}}),on$1.of({name:`Velocity`,extensions:[`vtl`],load(){return import(`./chunk-CJ4r4ZI5.js`).then(n=>f(n.velocity))}}),on$1.of({name:`Verilog`,extensions:[`v`],load(){return import(`./chunk-CtjGUky9.js`).then(n=>f(n.verilog))}}),on$1.of({name:`VHDL`,extensions:[`vhd`,`vhdl`],load(){return import(`./chunk-BSS2lkc_.js`).then(n=>f(n.vhdl))}}),on$1.of({name:`XQuery`,extensions:[`xy`,`xquery`,`xq`,`xqm`,`xqy`],load(){return import(`./chunk-COimVzL4.js`).then(n=>f(n.xQuery))}}),on$1.of({name:`Yacas`,extensions:[`ys`],load(){return import(`./chunk-ChNQ5_AK.js`).then(n=>f(n.yacas))}}),on$1.of({name:`Z80`,extensions:[`z80`],load(){return import(`./chunk-ClxAypY3.js`).then(n=>f(n.z80))}}),on$1.of({name:`MscGen`,extensions:[`mscgen`,`mscin`,`msc`],load(){return import(`./chunk-CUe74XCv.js`).then(n=>f(n.mscgen))}}),on$1.of({name:`Xù`,extensions:[`xu`],load(){return import(`./chunk-CUe74XCv.js`).then(n=>f(n.xu))}}),on$1.of({name:`MsGenny`,extensions:[`msgenny`],load(){return import(`./chunk-CUe74XCv.js`).then(n=>f(n.msgenny))}}),on$1.of({name:`Vue`,extensions:[`vue`],load(){return import(`./chunk-k9A1Eh_M.js`).then(n=>n.vue())}}),on$1.of({name:`Angular Template`,load(){return import(`./chunk-Q7oUWG6H.js`).then(n=>n.angular())}})];var Oi=ta.map(n=>({name:n.name,extensions:n.extensions})).concat([{name:`Plain Text`,extensions:[`txt`]}]).sort((n,t)=>n.name.localeCompare(t.name));var Tl=ta;function Ii(n){let t=n.toLowerCase();return Oi.find(e=>e.name.toLowerCase()===t)}function Al(n){return`${n.replaceAll(` `,`_`).replaceAll(`#`,`sharp`).toLowerCase()}.txt`}var St=[{value:`editor`,viewValue:`Editor`},{value:`diff`,viewValue:`Split diff`},{value:`unified-diff`,viewValue:`Unified diff`}];function mt(n,t=``){return{name:n,detail:t}}function rn(n,t){return{name:n,detail:`${t.length} characters`}}function ln(n){return{name:`error`,detail:`${n.code}: ${n.message}`,failed:!0}}var Fi=class n{constructor(){this.common=O.required();this.editor=O.required();this.field=O.required();this.event=yt$1();this.ready=mt(`ready`,`EditorView created`);this.plainEvent=mt;this.valueEvent=rn;this.errorEvent=ln}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=Ne({type:n,selectors:[[`app-editor-mode`]],inputs:{common:[1,`common`],editor:[1,`editor`],field:[1,`field`]},outputs:{event:`event`},decls:1,vars:19,consts:[[1,`editor`,3,`ready`,`valueChange`,`focused`,`blurred`,`touch`,`error`,`formField`,`theme`,`language`,`languages`,`setup`,`placeholder`,`indentWithTab`,`indentUnit`,`tabSize`,`lineWrapping`,`highlightWhitespace`,`lineNumbers`,`foldGutter`,`highlightActiveLine`,`search`,`autocompletion`,`lint`,`presets`,`autoFocus`]],template:function(e,i){e&1&&(Yc$1(0,`ngx-code-editor`,0),o0(),ti(`ready`,function(){return i.event.emit(i.ready)})(`valueChange`,function(a){return i.event.emit(i.valueEvent(`valueChange`,a))})(`focused`,function(){return i.event.emit(i.plainEvent(`focused`))})(`blurred`,function(){return i.event.emit(i.plainEvent(`blurred`))})(`touch`,function(){return i.event.emit(i.plainEvent(`touch`))})(`error`,function(a){return i.event.emit(i.errorEvent(a))}),qp()),e&2&&(kE(`formField`,i.field())(`theme`,i.common().theme)(`language`,i.common().language)(`languages`,i.common().languages)(`setup`,i.common().setup)(`placeholder`,i.common().placeholder)(`indentWithTab`,i.common().indentWithTab)(`indentUnit`,i.common().indentUnit)(`tabSize`,i.common().tabSize)(`lineWrapping`,i.common().lineWrapping)(`highlightWhitespace`,i.common().highlightWhitespace)(`lineNumbers`,i.common().lineNumbers)(`foldGutter`,i.common().foldGutter)(`highlightActiveLine`,i.common().highlightActiveLine)(`search`,i.common().search)(`autocompletion`,i.common().autocompletion)(`lint`,i.common().lint)(`presets`,i.common().presets)(`autoFocus`,i.editor().autoFocus),s0())},dependencies:[Mg,Nl],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem;height:100%;min-height:0}.editor[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}`]})}};var ut=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[`mat-label`]]})}return n})();var Kd=new y(`MatError`);var Pn=(()=>{class n{align=`start`;id=h(Bm).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,o){i&2&&(Kp(`id`,o.id),er(`align`,null),nt(`mat-mdc-form-field-hint-end`,o.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var Qd=new y(`MatPrefix`);var Ll=new y(`MatSuffix`);var na=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[tw([{provide:Ll,useExisting:n}])]})}return n})();var zl=new y(`FloatingLabelParent`);var Ol=(()=>{class n{_elementRef=h(fe);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=h(Oc$1);_ngZone=h(V);_parent=h(zl);_resizeSubscription=new Ee;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Yd(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,o){i&2&&nt(`mdc-floating-label--float-above`,o.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function Yd(n){let t=n;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var Il=`mdc-line-ripple--active`;var Pi=`mdc-line-ripple--deactivating`;var Fl=(()=>{class n{_elementRef=h(fe);_cleanupTransitionEnd;constructor(){let e=h(V),i=h(Pt$1);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Pi),e.add(Il)}deactivate(){this._elementRef.nativeElement.classList.add(Pi)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,o=i.contains(Pi);e.propertyName===`opacity`&&o&&i.remove(Il,Pi)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var Pl=(()=>{class n{_elementRef=h(fe);_ngZone=h(V);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(`.mdc-floating-label`);i?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width=``:i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[`notch`];return Ne({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(a,r){if(a&1&&BE(e,5),a&2){let l;Yp(l=Qp())&&(r._notch=l.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(a,r){a&2&&nt(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(a,r){a&1&&(kn$1(),ut$1(0,`div`,1),et$1(1,`div`,2,0),Se(3),tt(),ut$1(4,`div`,3))},encapsulation:2})})()}return n})();var Rn=(()=>{class n{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n})}return n})();var Vt=new y(`MatFormField`);var Xd=new y(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Rl=`fill`;var Zd=`auto`;var Vl=`fixed`;var Jd=`translateY(-50%)`;var kt=(()=>{class n{_elementRef=h(fe);_changeDetectorRef=h(rr);_platform=h(Dt);_idGenerator=h(Bm);_ngZone=h(V);_defaults=h(Xd,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return Yn(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=xN(`iconPrefixContainer`);_textPrefixContainerSignal=xN(`textPrefixContainer`);_iconSuffixContainerSignal=xN(`iconSuffixContainer`);_textSuffixContainerSignal=xN(`textSuffixContainer`);_prefixSuffixContainers=on$2(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=gW(ut);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=vQ(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Zd}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Rl;this._appearanceSignal.set(i)}_appearanceSignal=Z(Rl);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Vl}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Vl}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new U;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Di$1();constructor(){let e=this._defaults,i=h(V1);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Sn$1(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=Fn(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!Fn(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=on$2(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let i=this._control,o=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(o+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges?.pipe(Ni$1([void 0,void 0]),H(()=>[this._unwrapMaybeSignal(i.errorState),i.userAriaDescribedBy]),fS(),Me(([[a,r],[l,u]])=>a!==l||r!==u)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&!Fn(i.ngField)&&(this._valueChanges=i.ngControl.valueChanges.pipe(Ct$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),aS(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){vW({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=on$2(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let i=this._control?.ngField||this._control?.ngControl;if(!i)return!1;if(Fn(i)){let o=i();return e===`valid`?o.valid():e===`dirty`?o.dirty():e===`touched`?o.touched():e===`pending`?o.pending():e===`untouched`?!o.touched():e===`pristine`?!o.dirty():e===`invalid`?!o.valid():!1}else{let o=i;return e===`valid`?o.valid:e===`dirty`?o.dirty:e===`touched`?o.touched:e===`pending`?o.pending:e===`untouched`?o.untouched:e===`pristine`?o.pristine:e===`invalid`?o.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let a=this._hintChildren?this._hintChildren.find(l=>l.align===`start`):null,r=this._hintChildren?this._hintChildren.find(l=>l.align===`end`):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let i=this._control.describedByIds,o;if(i){let a=this._describedByIds||e;o=e.concat(i.filter(r=>r&&!a.includes(r)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0,v=a?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Jd} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${r+l}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,r+l+u+v]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],i=[`textPrefixContainer`],o=[`iconSuffixContainer`],a=[`textSuffixContainer`],r=[`textField`],l=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],u=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function v(A,W){A&1&&dl$1(0,`span`,21)}function w(A,W){if(A&1&&(Yc$1(0,`label`,20),Se(1,1),tr(2,v,1,0,`span`,21),qp()),A&2){let h=jE(2);kE(`floating`,h._shouldLabelFloat())(`monitorResize`,h._hasOutline())(`id`,h._labelId),er(`for`,h._control.disableAutomaticLabeling?null:h._control.id),An$1(2),nr(!h.hideRequiredMarker&&h._unwrapMaybeSignal(h._control.required)?2:-1)}}function V(A,W){if(A&1&&tr(0,w,3,5,`label`,20),A&2){let h=jE();nr(h._hasFloatingLabel()?0:-1)}}function U(A,W){A&1&&dl$1(0,`div`,7)}function x(A,W){}function Q(A,W){if(A&1&&TE(0,x,0,0,`ng-template`,13),A&2){jE(2);let h=CM(1);kE(`ngTemplateOutlet`,h)}}function _e(A,W){if(A&1&&(Yc$1(0,`div`,9),tr(1,Q,1,1,null,13),qp()),A&2){let h=jE();kE(`matFormFieldNotchedOutlineOpen`,h._shouldLabelFloat()),An$1(),nr(h._forceDisplayInfixLabel()?-1:1)}}function ro(A,W){A&1&&(Yc$1(0,`div`,10,2),Se(2,2),qp())}function vs(A,W){A&1&&(Yc$1(0,`div`,11,3),Se(2,3),qp())}function xs(A,W){}function Cs(A,W){if(A&1&&TE(0,xs,0,0,`ng-template`,13),A&2){jE();let h=CM(1);kE(`ngTemplateOutlet`,h)}}function ws(A,W){A&1&&(Yc$1(0,`div`,14,4),Se(2,4),qp())}function Ss(A,W){A&1&&(Yc$1(0,`div`,15,5),Se(2,5),qp())}function Ms(A,W){A&1&&dl$1(0,`div`,16)}function ks(A,W){A&1&&(Yc$1(0,`div`,18),Se(1,6),qp())}function Ns(A,W){if(A&1&&(Yc$1(0,`mat-hint`,22),eh(1),qp()),A&2){let h=jE(2);kE(`id`,h._hintLabelId),An$1(),th(h.hintLabel)}}function Es(A,W){if(A&1&&(Yc$1(0,`div`,19),tr(1,Ns,2,2,`mat-hint`,22),Se(2,7),dl$1(3,`div`,23),Se(4,8),qp()),A&2){let h=jE();An$1(),nr(h.hintLabel?1:-1)}}return Ne({type:n,selectors:[[`mat-form-field`]],contentQueries:function(W,h,$){if(W&1&&(UE($,h._labelChild,ut,5),fl$1($,Rn,5)($,Qd,5)($,Ll,5)($,Kd,5)($,Pn,5)),W&2){$E();let xe;Yp(xe=Qp())&&(h._formFieldControl=xe.first),Yp(xe=Qp())&&(h._prefixChildren=xe),Yp(xe=Qp())&&(h._suffixChildren=xe),Yp(xe=Qp())&&(h._errorChildren=xe),Yp(xe=Qp())&&(h._hintChildren=xe)}},viewQuery:function(W,h){if(W&1&&(Xp(h._iconPrefixContainerSignal,e,5)(h._textPrefixContainerSignal,i,5)(h._iconSuffixContainerSignal,o,5)(h._textSuffixContainerSignal,a,5),BE(r,5)(e,5)(i,5)(o,5)(a,5)(Ol,5)(Pl,5)(Fl,5)),W&2){$E(4);let $;Yp($=Qp())&&(h._textField=$.first),Yp($=Qp())&&(h._iconPrefixContainer=$.first),Yp($=Qp())&&(h._textPrefixContainer=$.first),Yp($=Qp())&&(h._iconSuffixContainer=$.first),Yp($=Qp())&&(h._textSuffixContainer=$.first),Yp($=Qp())&&(h._floatingLabel=$.first),Yp($=Qp())&&(h._notchedOutline=$.first),Yp($=Qp())&&(h._lineRipple=$.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(W,h){W&2&&nt(`mat-mdc-form-field-label-always-float`,h._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,h._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,h._hasIconSuffix)(`mat-form-field-invalid`,h._unwrapMaybeSignal(h._control.errorState))(`mat-form-field-disabled`,h._unwrapMaybeSignal(h._control.disabled))(`mat-form-field-autofilled`,h._unwrapMaybeSignal(h._control.autofilled))(`mat-form-field-appearance-fill`,h.appearance==`fill`)(`mat-form-field-appearance-outline`,h.appearance==`outline`)(`mat-form-field-hide-placeholder`,h._hasFloatingLabel()&&!h._shouldLabelFloat())(`mat-primary`,h.color!==`accent`&&h.color!==`warn`)(`mat-accent`,h.color===`accent`)(`mat-warn`,h.color===`warn`)(`ng-untouched`,h._shouldForward(`untouched`))(`ng-touched`,h._shouldForward(`touched`))(`ng-pristine`,h._shouldForward(`pristine`))(`ng-dirty`,h._shouldForward(`dirty`))(`ng-valid`,h._shouldForward(`valid`))(`ng-invalid`,h._shouldForward(`invalid`))(`ng-pending`,h._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[tw([{provide:Vt,useExisting:n},{provide:zl,useExisting:n}])],ngContentSelectors:u,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(W,h){if(W&1&&(kn$1(l),TE(0,V,1,1,`ng-template`,null,0,eN),Yc$1(2,`div`,6,1),ti(`click`,function(xe){return h._control.onContainerClick(xe)}),tr(4,U,1,0,`div`,7),Yc$1(5,`div`,8),tr(6,_e,2,2,`div`,9),tr(7,ro,3,0,`div`,10),tr(8,vs,3,0,`div`,11),Yc$1(9,`div`,12),tr(10,Cs,1,1,null,13),Se(11),qp(),tr(12,ws,3,0,`div`,14),tr(13,Ss,3,0,`div`,15),qp(),tr(14,Ms,1,0,`div`,16),qp(),Yc$1(15,`div`,17),tr(16,ks,2,0,`div`,18)(17,Es,5,1,`div`,19),qp()),W&2){let $,xe=h._unwrapMaybeSignal(h._control.disabled);An$1(2),nt(`mdc-text-field--filled`,!h._hasOutline())(`mdc-text-field--outlined`,h._hasOutline())(`mdc-text-field--no-label`,!h._hasFloatingLabel())(`mdc-text-field--disabled`,xe)(`mdc-text-field--invalid`,h._unwrapMaybeSignal(h._control.errorState)),An$1(2),nr(!h._hasOutline()&&!xe?4:-1),An$1(2),nr(h._hasOutline()?6:-1),An$1(),nr(h._hasIconPrefix?7:-1),An$1(),nr(h._hasTextPrefix?8:-1),An$1(2),nr(!h._hasOutline()||h._forceDisplayInfixLabel()?10:-1),An$1(2),nr(h._hasTextSuffix?12:-1),An$1(),nr(h._hasIconSuffix?13:-1),An$1(),nr(h._hasOutline()?-1:14),An$1(),nt(`mat-mdc-form-field-subscript-dynamic-size`,h.subscriptSizing===`dynamic`);let Ds=h._getSubscriptMessageType();An$1(),nr(($=Ds)===`error`?16:$===`hint`?17:-1)}},dependencies:[Ol,Pl,zN,Fl,Pn],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return n})();var Be=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Je({type:n});static ɵinj=Ge({imports:[ZY,kt,Lu]})}return n})();var ec=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Ne({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(i,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})();var tc={passive:!0};var Bl=(()=>{class n{_platform=h(Dt);_ngZone=h(V);_renderer=h(Lt$2).createRenderer(null,null);_styleLoader=h(mo);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return me;this._styleLoader.load(ec);let i=ln$2(e),o=this._monitoredElements.get(i);if(o)return o.subject;let a=new U,r=`cdk-text-field-autofilled`,l=v=>{v.animationName===`cdk-text-field-autofill-start`&&!i.classList.contains(r)?(i.classList.add(r),this._ngZone.run(()=>a.next({target:v.target,isAutofilled:!0}))):v.animationName===`cdk-text-field-autofill-end`&&i.classList.contains(r)&&(i.classList.remove(r),this._ngZone.run(()=>a.next({target:v.target,isAutofilled:!1})))},u=this._ngZone.runOutsideAngular(()=>(i.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(i,`animationstart`,l,tc)));return this._monitoredElements.set(i,{subject:a,unlisten:u}),a}stopMonitoring(e){let i=ln$2(e),o=this._monitoredElements.get(i);o&&(o.unlisten(),o.subject.complete(),i.classList.remove(`cdk-text-field-autofill-monitored`),i.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static ɵfac=function(i){return new(i||n)};static ɵprov=N({token:n,factory:n.ɵfac})}return n})();var jl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Je({type:n});static ɵinj=Ge({})}return n})();var Hl=new y(`MAT_INPUT_VALUE_ACCESSOR`);var Ri=(()=>{class n{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}isSignalErrorState(e){if(!e)return!1;let i=e().invalid(),o=e().touched();return i&&o}static ɵfac=function(i){return new(i||n)};static ɵprov=N({token:n,factory:n.ɵfac})}return n})();var sn=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(t,e,i,o,a){this._defaultMatcher=t,this._parentFormGroup=i,this._parentForm=o,this._stateChanges=a,e?Yn(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let t=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==t&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(t){if(this.formField&&t?.isSignalErrorState)return t.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return t?.isErrorState(i,e)??!1}};var nc=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var ic=new y(`MAT_INPUT_CONFIG`);var dn=(()=>{class n{_elementRef=h(fe);_platform=h(Dt);ngControl=h(vt,{optional:!0,self:!0});_autofillMonitor=h(Bl);_ngZone=h(V);_formField=h(Vt,{optional:!0});_renderer=h(Pt$1);_uid=h(Bm).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=h(ic,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new U;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=vQ(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ze.required)??!1}set required(e){this._required=vQ(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&iQ().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=vQ(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>iQ().has(e));constructor(){let e=h(En,{optional:!0}),i=h(Dn,{optional:!0}),o=h(Ri),a=h(Hl,{optional:!0,self:!0}),r=h(on,{optional:!0,self:!0}),l=this._elementRef.nativeElement,u=l.nodeName.toLowerCase();a?Yn(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new sn(o,r||this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=u===`select`,this._isTextarea=u===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&Sn$1(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type===`number`?(i.type=`text`,i.setSelectionRange(0,0),i.type=`number`):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute(`placeholder`,e):i.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){nc.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute(`aria-describedby`,e.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(i,o){i&1&&ti(`focus`,function(){return o._focusChanged(!0)})(`blur`,function(){return o._focusChanged(!1)})(`input`,function(){return o._onInput()}),i&2&&(Kp(`id`,o.id)(`disabled`,o.disabled&&!o.disabledInteractive)(`required`,o.required),er(`name`,o.name||null)(`readonly`,o._getReadonlyAttribute())(`aria-disabled`,o.disabled&&o.disabledInteractive?`true`:null)(`aria-invalid`,o.empty&&o.required?null:o.errorState)(`aria-required`,o.required)(`id`,o.id),nt(`mat-input-server`,o._isServer)(`mat-mdc-form-field-textarea-control`,o._isInFormField&&o._isTextarea)(`mat-mdc-form-field-input-control`,o._isInFormField)(`mat-mdc-input-disabled-interactive`,o.disabledInteractive)(`mdc-text-field__input`,o._isInFormField)(`mat-mdc-native-select-inline`,o._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ie]},exportAs:[`matInput`],features:[tw([{provide:Rn,useExisting:n}]),Ft$1]})}return n})();var cn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Je({type:n});static ɵinj=Ge({imports:[Be,Be,jl,Lu]})}return n})();var Gl=(()=>{class n{labelPosition=`after`;static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){return Ne({type:n,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(o,a){o&2&&nt(`mdc-form-field--align-end`,a.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(o,a){o&1&&(kn$1(),Se(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return n})();var oc=new y(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var Vi=class{source;checked;constructor(t,e){this.source=t,this.checked=e}};var Li=(()=>{class n{_elementRef=h(fe);_focusMonitor=h(Su);_changeDetectorRef=h(rr);defaults=h(oc);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Vi(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Di$1();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new ge;toggleChange=new ge;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){h(mo).load(kI);let e=h(new gl$1(`tabindex`),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||`accent`,this.id=this._uniqueId=h(Bm).getId(`mat-mdc-slide-toggle-`),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Vi(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[`switch`],i=[`*`];function o(a,r){a&1&&(Yc$1(0,`span`,11),_b(),Yc$1(1,`svg`,13),dl$1(2,`path`,14),qp(),Yc$1(3,`svg`,15),dl$1(4,`path`,16),qp()())}return Ne({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(r,l){if(r&1&&BE(e,5),r&2){let u;Yp(u=Qp())&&(l._switchElement=u.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(r,l){r&2&&(Kp(`id`,l.id),er(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Jp(l.color?`mat-`+l.color:``),nt(`mat-mdc-slide-toggle-focused`,l._focused)(`mat-mdc-slide-toggle-checked`,l.checked)(`mat-slide-toggle-full-width`,l.fullWidth)(`_mat-animation-noopable`,l._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,ie],color:`color`,disabled:[2,`disabled`,`disabled`,ie],fullWidth:[2,`fullWidth`,`fullWidth`,ie],disableRipple:[2,`disableRipple`,`disableRipple`,ie],tabIndex:[2,`tabIndex`,`tabIndex`,a=>a==null?0:Ts$1(a)],checked:[2,`checked`,`checked`,ie],hideIcon:[2,`hideIcon`,`hideIcon`,ie],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ie]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[tw([{provide:dt,useExisting:Qa(()=>n),multi:!0},{provide:It,useExisting:n,multi:!0}]),Ft$1],ngContentSelectors:i,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(r,l){if(r&1&&(kn$1(),Yc$1(0,`div`,1)(1,`button`,2,0),ti(`click`,function(){return l._handleClick()}),dl$1(3,`div`,3)(4,`span`,4),Yc$1(5,`span`,5)(6,`span`,6)(7,`span`,7),dl$1(8,`span`,8),qp(),Yc$1(9,`span`,9),dl$1(10,`span`,10),qp(),tr(11,o,5,0,`span`,11),qp()()(),Yc$1(12,`label`,12),ti(`click`,function(v){return v.stopPropagation()}),Se(13),qp()()),r&2){let u=CM(2);kE(`labelPosition`,l.labelPosition),An$1(),nt(`mdc-switch--selected`,l.checked)(`mdc-switch--unselected`,!l.checked)(`mdc-switch--checked`,l.checked)(`mdc-switch--disabled`,l.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,l.disabledInteractive),kE(`tabIndex`,l.disabled&&!l.disabledInteractive?-1:l.tabIndex)(`disabled`,l.disabled&&!l.disabledInteractive),er(`id`,l.buttonId)(`name`,l.name)(`aria-label`,l.ariaLabel)(`aria-labelledby`,l._getAriaLabelledBy())(`aria-describedby`,l.ariaDescribedby)(`aria-required`,l.required||null)(`aria-checked`,l.checked)(`aria-disabled`,l.disabled&&l.disabledInteractive?`true`:null),An$1(9),kE(`matRippleTrigger`,u)(`matRippleDisabled`,l.disableRipple||l.disabled)(`matRippleCentered`,!0),An$1(),nr(l.hideIcon?-1:11),An$1(),kE(`for`,l.buttonId),er(`id`,l._labelId)}},dependencies:[kQ,Gl],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return n})();var ac=(n,t)=>t.id;function rc(n,t){if(n&1&&(Yc$1(0,`span`,13),eh(1),qp()),n&2){let e=jE().$implicit;An$1(),th(e.detail)}}function lc(n,t){if(n&1&&(Yc$1(0,`li`,10)(1,`time`,11),eh(2),qp(),Yc$1(3,`code`,12),eh(4),qp(),tr(5,rc,2,1,`span`,13),qp()),n&2){let e=t.$implicit;nt(`failed`,e.failed),An$1(2),th(e.time),An$1(2),th(e.name),An$1(),nr(e.detail?5:-1)}}function sc(n,t){n&1&&eh(0,` No event matches the filter. `)}function dc(n,t){n&1&&eh(0,` Focus, blur or edit an editor: its outputs show up here. `)}function cc(n,t){if(n&1&&(Yc$1(0,`li`,9),tr(1,sc,1,0)(2,dc,1,0),qp()),n&2){let e=jE();An$1(),nr(e.entries().length?1:2)}}var zi=class n{constructor(){this.entries=O.required();this.clear=yt$1();this.filter=Z(``);this.errorsOnly=Z(!1);this.visible=on$2(()=>{let t=this.filter().trim().toLowerCase(),e=this.errorsOnly();return this.entries().filter(i=>(!e||i.failed)&&(!t||i.name.toLowerCase().includes(t)||i.detail.toLowerCase().includes(t)))})}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=Ne({type:n,selectors:[[`app-event-log`]],inputs:{entries:[1,`entries`]},outputs:{clear:`clear`},decls:16,vars:6,consts:[[`filterInput`,``],[1,`controls`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`filter`],[`matInput`,``,`type`,`search`,3,`input`,`value`],[3,`change`,`checked`],[`mat-stroked-button`,``,`type`,`button`,3,`click`,`disabled`],[1,`count`],[`aria-live`,`polite`,`aria-label`,`Editor events, most recent first`,1,`entries`],[1,`entry`,3,`failed`],[1,`empty`],[1,`entry`],[1,`time`],[1,`name`],[1,`detail`]],template:function(e,i){if(e&1){let o=LE();Yc$1(0,`div`,1)(1,`mat-form-field`,2)(2,`mat-label`),eh(3,`Filter events`),qp(),Yc$1(4,`input`,3,0),ti(`input`,function(){Zd$1(o);let r=CM(5);return Yd$1(i.filter.set(r.value))}),qp()(),Yc$1(6,`mat-slide-toggle`,4),ti(`change`,function(r){return i.errorsOnly.set(r.checked)}),eh(7,`Errors only`),qp(),Yc$1(8,`button`,5),ti(`click`,function(){return i.clear.emit()}),eh(9,`Clear`),qp()(),Yc$1(10,`p`,6),eh(11),qp(),Yc$1(12,`ol`,7),gM(13,lc,6,5,`li`,8,ac,!1,cc,3,1,`li`,9),qp()}e&2&&(An$1(4),kE(`value`,i.filter()),An$1(2),kE(`checked`,i.errorsOnly()),An$1(2),kE(`disabled`,!i.entries().length),An$1(3),nh(``,i.visible().length,` of `,i.entries().length,` events (the latest 100 are kept)`),An$1(2),bM(i.visible()))},dependencies:[bX,hX,Be,kt,ut,cn,dn,Li],styles:[`[_nghost-%COMP%]{display:block}.controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem 1rem}.filter[_ngcontent-%COMP%]{flex:1 1 12rem}.count[_ngcontent-%COMP%]{margin:.5rem 0;font-size:.75rem;opacity:.7}.entries[_ngcontent-%COMP%]{max-height:16rem;margin:0;padding:0;overflow:auto;list-style:none;font-size:.8125rem}.entry[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:0 .5rem;padding:.125rem 0;border-bottom:1px solid color-mix(in srgb,currentColor 8%,transparent);overflow-wrap:anywhere}.entry.failed[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error, #d32f2f)}.entry.failed[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:600}.time[_ngcontent-%COMP%]{font-family:monospace;opacity:.6}.name[_ngcontent-%COMP%]{font-family:monospace}.empty[_ngcontent-%COMP%]{opacity:.6}`]})}};var mc=(n,t)=>t.key;function uc(n,t){if(n&1&&(Yc$1(0,`dt`)(1,`code`),eh(2),qp()(),Yc$1(3,`dd`),eh(4),qp()),n&2){let e=t.$implicit;An$1(2),th(e.key),An$1(2),th(e.value)}}function pc(n,t){if(n&1&&(Yc$1(0,`dl`,10),gM(1,uc,5,2,null,null,mc),qp()),n&2){let e=jE();An$1(),bM(e.config())}}function fc(n,t){n&1&&(Yc$1(0,`p`,11),eh(1,`Every option has its default value.`),qp())}var ji=class n{constructor(){this.entries=O.required();this.model=O.required();this.modelLabel=O.required();this.config=O.required();this.clearLog=yt$1();this.modelCopied=yt$1()}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=Ne({type:n,selectors:[[`app-inspector`]],inputs:{entries:[1,`entries`],model:[1,`model`],modelLabel:[1,`modelLabel`],config:[1,`config`]},outputs:{clearLog:`clearLog`,modelCopied:`modelCopied`},decls:19,vars:5,consts:[[`animationDuration`,`0ms`,`mat-stretch-tabs`,`false`,1,`tabs`],[`label`,`Events`],[1,`panel`],[3,`clear`,`entries`],[`label`,`Model`],[1,`panel-header`],[1,`panel-title`],[`mat-stroked-button`,``,`type`,`button`,`matTooltip`,`Copy the model to the clipboard`,3,`cdkCopyToClipboardCopied`,`cdkCopyToClipboard`],[1,`model`],[`label`,`Config`],[1,`config`],[1,`empty`]],template:function(e,i){e&1&&(Yc$1(0,`mat-tab-group`,0)(1,`mat-tab`,1)(2,`div`,2)(3,`app-event-log`,3),ti(`clear`,function(){return i.clearLog.emit()}),qp()()(),Yc$1(4,`mat-tab`,4)(5,`div`,2)(6,`div`,5)(7,`span`,6),eh(8,`The bound model: `),Yc$1(9,`code`),eh(10),qp()(),Yc$1(11,`button`,7),ti(`cdkCopyToClipboardCopied`,function(a){return i.modelCopied.emit(a)}),eh(12,` Copy `),qp()(),Yc$1(13,`pre`,8),eh(14),qp()()(),Yc$1(15,`mat-tab`,9)(16,`div`,2),tr(17,pc,3,0,`dl`,10)(18,fc,2,0,`p`,11),qp()()()),e&2&&(An$1(3),kE(`entries`,i.entries()),An$1(7),th(i.modelLabel()),An$1(),kE(`cdkCopyToClipboard`,i.model()),An$1(3),th(i.model()),An$1(3),nr(i.config().length?17:18))},dependencies:[Mr,Sr,zi,bX,hX,gb,vm,fb,ze],styles:[`[_nghost-%COMP%]{display:block;border:1px solid color-mix(in srgb,currentColor 15%,transparent);border-radius:4px;background-color:color-mix(in srgb,currentColor 4%,transparent)}.panel[_ngcontent-%COMP%]{padding:.75rem}.panel-header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.5rem;margin-bottom:.5rem}.panel-title[_ngcontent-%COMP%]{font-size:.8125rem}.model[_ngcontent-%COMP%]{max-height:16rem;margin:0;padding:.5rem;overflow:auto;border-radius:4px;background-color:color-mix(in srgb,currentColor 6%,transparent);font-size:.8125rem;white-space:pre}.config[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content minmax(0,1fr);gap:.25rem 1rem;margin:0;font-size:.8125rem}.config[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0;overflow-wrap:anywhere}.empty[_ngcontent-%COMP%]{margin:0;opacity:.7}`]})}};var Vn=(()=>{class n{_listeners=[];notify(e,i){for(let o of this._listeners)o(e,i)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(i=>e!==i)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(i){return new(i||n)};static ɵprov=N({token:n,factory:n.ɵfac})}return n})();var aa=new y(`CdkAccordion`);var Ul=(()=>{class n{_stateChanges=new U;_openCloseAllActions=new U;id=h(Bm).getId(`cdk-accordion-`);multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[`cdk-accordion`],[``,`cdkAccordion`,``]],inputs:{multi:[2,`multi`,`multi`,ie]},exportAs:[`cdkAccordion`],features:[tw([{provide:aa,useExisting:n}]),Ft$1]})}return n})();var ql=(()=>{class n{accordion=h(aa,{optional:!0,skipSelf:!0});_changeDetectorRef=h(rr);_expansionDispatcher=h(Vn);_openCloseAllSubscription=Ee.EMPTY;closed=new ge;opened=new ge;destroyed=new ge;expandedChange=new ge;id=h(Bm).getId(`cdk-accordion-child-`);get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Z(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,i)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===i&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[`cdk-accordion-item`],[``,`cdkAccordionItem`,``]],inputs:{expanded:[2,`expanded`,`expanded`,ie],disabled:[2,`disabled`,`disabled`,ie]},outputs:{closed:`closed`,opened:`opened`,destroyed:`destroyed`,expandedChange:`expandedChange`},exportAs:[`cdkAccordionItem`],features:[tw([{provide:aa,useValue:void 0}])]})}return n})();var Wl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Je({type:n});static ɵinj=Ge({})}return n})();var Lt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new U;bulk={select:t=>this._select(t),deselect:t=>this._deselect(t),setSelection:t=>this._setSelection(t)};constructor(t=!1,e,i=!0,o){this._multiple=t,this._emitChanges=i,this.compareWith=o,e&&e.length&&(t?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){return this._select(t)}deselect(...t){return this._deselect(t)}setSelection(...t){return this._setSelection(t)}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_select(t){this._verifyValueAssignment(t),t.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(t){this._verifyValueAssignment(t),t.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(t){this._verifyValueAssignment(t);let e=this.selected,i=new Set(t.map(a=>this._getConcreteValue(a)));t.forEach(a=>this._markSelected(a)),e.filter(a=>!i.has(this._getConcreteValue(a,i))).forEach(a=>this._unmarkSelected(a));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(t,i))return i;return t}else return t}};var ra=new y(`MAT_ACCORDION`);var $l=new y(`MAT_EXPANSION_PANEL`);var hc=(()=>{class n{_template=h(Wo$1);_expansionPanel=h($l,{optional:!0});static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[`ng-template`,`matExpansionPanelContent`,``]]})}return n})();var Kl=new y(`MAT_EXPANSION_PANEL_DEFAULT_OPTIONS`);var la=(()=>{class n extends ql{_viewContainerRef=h(nn$1);_animationsDisabled=Di$1();_document=h(q);_ngZone=h(V);_elementRef=h(fe);_renderer=h(Pt$1);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new ge;afterCollapse=new ge;_inputChanges=new U;accordion=h(ra,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=h(Bm).getId(`mat-expansion-panel-header-`);constructor(){super();let e=h(Kl,{optional:!0});this._expansionDispatcher=h(Vn),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?`expanded`:`collapsed`}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Ni$1(null),Me(()=>this.expanded&&!this._portal),Qe(1)).subscribe(()=>{this._portal=new Be$1(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:i})=>{e===this._bodyWrapper?.nativeElement&&i===`grid-template-rows`&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this._transitionEndListener),e.classList.add(`mat-expansion-panel-animations-enabled`)},200)})}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[`body`],i=[`bodyWrapper`],o=[[[`mat-expansion-panel-header`]],`*`,[[`mat-action-row`]]],a=[`mat-expansion-panel-header`,`*`,`mat-action-row`];function r(l,u){}return Ne({type:n,selectors:[[`mat-expansion-panel`]],contentQueries:function(u,v,w){if(u&1&&fl$1(w,hc,5),u&2){let V;Yp(V=Qp())&&(v._lazyContent=V.first)}},viewQuery:function(u,v){if(u&1&&BE(e,5)(i,5),u&2){let w;Yp(w=Qp())&&(v._body=w.first),Yp(w=Qp())&&(v._bodyWrapper=w.first)}},hostAttrs:[1,`mat-expansion-panel`],hostVars:4,hostBindings:function(u,v){u&2&&nt(`mat-expanded`,v.expanded)(`mat-expansion-panel-spacing`,v._hasSpacing())},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,ie],togglePosition:`togglePosition`},outputs:{afterExpand:`afterExpand`,afterCollapse:`afterCollapse`},exportAs:[`matExpansionPanel`],features:[tw([{provide:ra,useValue:void 0},{provide:$l,useExisting:n}]),Jn,Ft$1],ngContentSelectors:a,decls:9,vars:4,consts:[[`bodyWrapper`,``],[`body`,``],[1,`mat-expansion-panel-content-wrapper`],[`role`,`region`,1,`mat-expansion-panel-content`,3,`id`],[1,`mat-expansion-panel-body`],[3,`cdkPortalOutlet`]],template:function(u,v){u&1&&(kn$1(o),Se(0),Yc$1(1,`div`,2,0)(3,`div`,3,1)(5,`div`,4),Se(6,1),TE(7,r,0,0,`ng-template`,5),qp(),Se(8,2),qp()()),u&2&&(An$1(),er(`inert`,v.expanded?null:``),An$1(2),kE(`id`,v.id),er(`aria-labelledby`,v._headerId),An$1(4),kE(`cdkPortalOutlet`,v._portal))},dependencies:[Vt$1],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})})()}return n})();var sa=(()=>{class n{panel=h(la,{host:!0});_element=h(fe);_focusMonitor=h(Su);_changeDetectorRef=h(rr);_parentChangeSubscription=Ee.EMPTY;constructor(){h(mo).load(kI);let e=this.panel,i=h(Kl,{optional:!0}),o=h(new gl$1(`tabindex`),{optional:!0}),a=e.accordion?e.accordion._stateChanges.pipe(Me(r=>!!(r.hideToggle||r.togglePosition))):me;this.tabIndex=parseInt(o||``)||0,this._parentChangeSubscription=aS(e.opened,e.closed,a,e._inputChanges.pipe(Me(r=>!!(r.hideToggle||r.disabled||r.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Me(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,`program`)),i&&(this.expandedHeight=i.expandedHeight,this.collapsedHeight=i.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:yI(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[[[`mat-panel-title`]],[[`mat-panel-description`]],`*`],i=[`mat-panel-title`,`mat-panel-description`,`*`];function o(a,r){a&1&&(et$1(0,`span`,1),_b(),et$1(1,`svg`,2),ut$1(2,`path`,3),tt()())}return Ne({type:n,selectors:[[`mat-expansion-panel-header`]],hostAttrs:[`role`,`button`,1,`mat-expansion-panel-header`,`mat-focus-indicator`],hostVars:13,hostBindings:function(r,l){r&1&&ti(`click`,function(){return l._toggle()})(`keydown`,function(v){return l._keydown(v)}),r&2&&(er(`id`,l.panel._headerId)(`tabindex`,l.disabled?-1:l.tabIndex)(`aria-controls`,l._getPanelId())(`aria-expanded`,l._isExpanded())(`aria-disabled`,l.panel.disabled),pl$1(`height`,l._getHeaderHeight()),nt(`mat-expanded`,l._isExpanded())(`mat-expansion-toggle-indicator-after`,l._getTogglePosition()===`after`)(`mat-expansion-toggle-indicator-before`,l._getTogglePosition()===`before`))},inputs:{expandedHeight:`expandedHeight`,collapsedHeight:`collapsedHeight`,tabIndex:[2,`tabIndex`,`tabIndex`,a=>a==null?0:Ts$1(a)]},ngContentSelectors:i,decls:5,vars:3,consts:[[1,`mat-content`],[1,`mat-expansion-indicator`],[`xmlns`,`http://www.w3.org/2000/svg`,`viewBox`,`0 -960 960 960`,`aria-hidden`,`true`,`focusable`,`false`],[`d`,`M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z`]],template:function(r,l){r&1&&(kn$1(e),et$1(0,`span`,0),Se(1),Se(2,1),Se(3,2),tt(),tr(4,o,3,0,`span`,1)),r&2&&(nt(`mat-content-hide-toggle`,!l._showToggle()),An$1(4),nr(l._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})})()}return n})();var Ql=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[`mat-panel-title`]],hostAttrs:[1,`mat-expansion-panel-header-title`]})}return n})();var Yl=(()=>{class n extends Ul{_keyManager;_ownHeaders=new Wr$1;_headers;hideToggle=!1;displayMode=`default`;togglePosition=`after`;ngAfterContentInit(){this._headers.changes.pipe(Ni$1(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new jm(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static ɵfac=(()=>{let e;return function(o){return(e||(e=jv(n)))(o||n)}})();static ɵdir=_e({type:n,selectors:[[`mat-accordion`]],contentQueries:function(i,o,a){if(i&1&&fl$1(a,sa,5),i&2){let r;Yp(r=Qp())&&(o._headers=r)}},hostAttrs:[1,`mat-accordion`],hostVars:2,hostBindings:function(i,o){i&2&&nt(`mat-accordion-multi`,o.multi)},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,ie],displayMode:`displayMode`,togglePosition:`togglePosition`},exportAs:[`matAccordion`],features:[tw([{provide:ra,useExisting:n}]),Jn]})}return n})();var Xl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Je({type:n});static ɵinj=Ge({imports:[Wl,Ba,Lu]})}return n})();var Hi=(()=>{class n{_animationsDisabled=Di$1();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(i){return new(i||n)};static ɵcmp=Ne({type:n,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(i,o){i&2&&nt(`mat-pseudo-checkbox-indeterminate`,o.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,o.state===`checked`)(`mat-pseudo-checkbox-disabled`,o.disabled)(`mat-pseudo-checkbox-minimal`,o.appearance===`minimal`)(`mat-pseudo-checkbox-full`,o.appearance===`full`)(`_mat-animation-noopable`,o._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(i,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return n})();var mn=new y(`MAT_OPTION_PARENT_COMPONENT`);var un=new y(`MatOptgroup`);var da=(()=>{class n{label;disabled=!1;_labelId=h(Bm).getId(`mat-optgroup-label-`);_inert;constructor(){let e=h(mn,{optional:!0});this._inert=e?.inertGroups??!1}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[`*`,[[`mat-option`],[`ng-container`]]];return Ne({type:n,selectors:[[`mat-optgroup`]],hostAttrs:[1,`mat-mdc-optgroup`],hostVars:3,hostBindings:function(a,r){a&2&&er(`role`,r._inert?null:`group`)(`aria-disabled`,r._inert?null:r.disabled.toString())(`aria-labelledby`,r._inert?null:r._labelId)},inputs:{label:`label`,disabled:[2,`disabled`,`disabled`,ie]},exportAs:[`matOptgroup`],features:[tw([{provide:un,useExisting:n}])],ngContentSelectors:[`*`,`mat-option, ng-container`],decls:5,vars:4,consts:[[`role`,`presentation`,1,`mat-mdc-optgroup-label`,3,`id`],[1,`mdc-list-item__primary-text`]],template:function(a,r){a&1&&(kn$1(e),et$1(0,`span`,0)(1,`span`,1),eh(2),Se(3),tt()(),Se(4,1)),a&2&&(nt(`mdc-list-item--disabled`,r.disabled),Kp(`id`,r._labelId),An$1(2),Is$1(``,r.label,` `))},styles:[`.mat-mdc-optgroup {
  color: var(--%NS%mat-optgroup-label-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-optgroup-label-text-font, var(--%NS%mat-sys-title-small-font));
  line-height: var(--%NS%mat-optgroup-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-optgroup-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-optgroup-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: var(--%NS%mat-optgroup-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-mdc-optgroup-label {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  outline: none;
}
.mat-mdc-optgroup-label.mdc-list-item--disabled {
  opacity: 0.38;
}
.mat-mdc-optgroup-label .mdc-list-item__primary-text {
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  white-space: normal;
  color: inherit;
}
`],encapsulation:2})})()}return n})();var Ln=class{source;isUserInput;constructor(t,e=!1){this.source=t,this.isUserInput=e}};var et=(()=>{class n{_element=h(fe);_changeDetectorRef=h(rr);_parent=h(mn,{optional:!0});group=h(un,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=h(Bm).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Z(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ge;_text;_stateChanges=new U;constructor(){let e=h(mo);e.load(kI),e.load(Pm),this._signalDisableRipple=!!this._parent&&Yn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let o=this._getHostElement();typeof o.focus==`function`&&o.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!yI(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ln(this,e))}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[`text`],i=[[[`mat-icon`]],`*`],o=[`mat-icon`,`*`];function a(u,v){if(u&1&&dl$1(0,`mat-pseudo-checkbox`,1),u&2){let w=jE();kE(`disabled`,w.disabled)(`state`,w.selected?`checked`:`unchecked`)}}function r(u,v){if(u&1&&dl$1(0,`mat-pseudo-checkbox`,3),u&2){let w=jE();kE(`disabled`,w.disabled)}}function l(u,v){if(u&1&&(Yc$1(0,`span`,4),eh(1),qp()),u&2){let w=jE();An$1(),Is$1(`(`,w.group.label,`)`)}}return Ne({type:n,selectors:[[`mat-option`]],viewQuery:function(v,w){if(v&1&&BE(e,7),v&2){let V;Yp(V=Qp())&&(w._text=V.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(v,w){v&1&&ti(`click`,function(){return w._selectViaInteraction()})(`keydown`,function(U){return w._handleKeydown(U)}),v&2&&(Kp(`id`,w.id),er(`aria-selected`,w.selected)(`aria-disabled`,w.disabled.toString()),nt(`mdc-list-item--selected`,w.selected)(`mat-mdc-option-multiple`,w.multiple)(`mat-mdc-option-active`,w.active)(`mdc-list-item--disabled`,w.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,ie]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:o,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(v,w){v&1&&(kn$1(i),tr(0,a,1,2,`mat-pseudo-checkbox`,1),Se(1),Yc$1(2,`span`,2,0),Se(4,1),qp(),tr(5,r,1,1,`mat-pseudo-checkbox`,3),tr(6,l,2,1,`span`,4),dl$1(7,`div`,5)),v&2&&(nr(w.multiple?0:-1),An$1(5),nr(!w.multiple&&w.selected&&!w.hideSingleSelectionIndicator?5:-1),An$1(),nr(w.group&&w.group._inert?6:-1),An$1(),kE(`matRippleTrigger`,w._getHostElement())(`matRippleDisabled`,w.disabled||w.disableRipple))},dependencies:[Hi,kQ],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return n})();function Gi(n,t,e){if(e.length){let i=t.toArray(),o=e.toArray(),a=0;for(let r=0;r<n+1;r++)i[r].group&&i[r].group===o[a]&&a++;return a}return 0}function Ui(n,t,e,i){return n<e?n:n+t>e+i?Math.max(0,n-i+t):e}var Zl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Je({type:n});static ɵinj=Ge({imports:[Lu]})}return n})();var pn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Je({type:n});static ɵinj=Ge({imports:[LI,Zl,et,Lu]})}return n})();var _c=new y(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=h(J);return()=>Va(n)}});var yc=new y(`MAT_SELECT_CONFIG`);var vc=new y(`MatSelectTrigger`);var ca=class{source;value;constructor(t,e){this.source=t,this.value=e}};var qi=(()=>{class n{_viewportRuler=h(Qe$1);_changeDetectorRef=h(rr);_elementRef=h(fe);_dir=h(V1,{optional:!0});_idGenerator=h(Bm);_renderer=h(Pt$1);_parentFormField=h(Vt,{optional:!0});ngControl=h(vt,{self:!0,optional:!0});_liveAnnouncer=h(T1);_defaultOptions=h(yc,{optional:!0});_animationsDisabled=Di$1();_popoverLocation;_initialized=new U;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let o=this.panel.nativeElement,a=Gi(e,this.options,this.optionGroups),r=i._getHostElement();e===0&&a===1?o.scrollTop=0:o.scrollTop=Ui(r.offsetTop,r.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ca(this,e)}_scrollStrategyFactory=h(_c);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new U;_errorStateTracker;stateChanges=new U;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Z(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ze.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=yr(()=>{let e=this.options;return e?e.changes.pipe(Ni$1(e),je(()=>aS(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(je(()=>this.optionSelectionChanges))});openedChange=new ge;_openedStream=this.openedChange.pipe(Me(e=>e),H(()=>{}));_closedStream=this.openedChange.pipe(Me(e=>!e),H(()=>{}));selectionChange=new ge;valueChange=new ge;constructor(){let e=h(Ri),i=h(En,{optional:!0}),o=h(Dn,{optional:!0}),a=h(new gl$1(`tabindex`),{optional:!0}),r=h(Wa,{optional:!0}),l=h(on,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new sn(e,l||this.ngControl,o,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Lt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Ct$1(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Ct$1(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(Ni$1(null),Ct$1(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?o.setAttribute(`aria-labelledby`,e):o.removeAttribute(`aria-labelledby`)}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Qe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(o),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,o=i===40||i===38||i===37||i===39,a=i===13||i===32,r=this._keyManager;if(!r.isTyping()&&a&&!yI(e)||(this.multiple||e.altKey)&&o)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;r.onKeydown(e);let u=this.selected;u&&l!==u&&this._liveAnnouncer.announce(u.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,o=e.keyCode,a=o===40||o===38,r=i.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!r&&(o===13||o===32)&&i.activeItem&&!yI(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!r&&this._multiple&&o===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(u=>!u.disabled&&!u.selected);this.options.forEach(u=>{u.disabled||(l?u.select():u.deselect())})}else{let l=i.activeItemIndex;i.onKeydown(e),this._multiple&&a&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==l&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!yI(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Na?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Fm(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=aS(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Ct$1(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),aS(...this.options.map(i=>i._stateChanges)).pipe(Ct$1(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let o=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(o!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),o!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,o)=>this.sortComparator?this.sortComparator(i,o,e):e.indexOf(i)-e.indexOf(o)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(o=>o.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+` `:``;return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute(`aria-describedby`,e.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(e){let i=Vt$2(e);i&&(i.tagName===`MAT-OPTION`||i.classList.contains(`cdk-overlay-backdrop`)||i.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[`trigger`],i=[`panel`],o=[[[`mat-select-trigger`]],`*`],a=[`mat-select-trigger`,`*`];function r(V,U){if(V&1&&(Yc$1(0,`span`,4),eh(1),qp()),V&2){let x=jE();An$1(),th(x.placeholder)}}function l(V,U){V&1&&Se(0)}function u(V,U){if(V&1&&(Yc$1(0,`span`,11),eh(1),qp()),V&2){let x=jE(2);An$1(),th(x.triggerValue)}}function v(V,U){if(V&1&&(Yc$1(0,`span`,5),tr(1,l,1,0)(2,u,2,1,`span`,11),qp()),V&2){let x=jE();An$1(),nr(x.customTrigger?1:2)}}function w(V,U){if(V&1){let x=LE();Yc$1(0,`div`,12,1),ti(`keydown`,function(_e){Zd$1(x);let ro=jE();return Yd$1(ro._handleKeydown(_e))}),Se(2,1),qp()}if(V&2){let x=jE();Jp(x.panelClass),nt(`mat-select-panel-animations-enabled`,!x._animationsDisabled)(`mat-primary`,x._parentFormField?.color===`primary`)(`mat-accent`,x._parentFormField?.color===`accent`)(`mat-warn`,x._parentFormField?.color===`warn`)(`mat-undefined`,!x._parentFormField?.color),er(`id`,x.id+`-panel`)(`aria-multiselectable`,x.multiple)(`aria-label`,x.ariaLabel||null)(`aria-labelledby`,x._getPanelAriaLabelledby())}}return Ne({type:n,selectors:[[`mat-select`]],contentQueries:function(U,x,Q){if(U&1&&fl$1(Q,vc,5)(Q,et,5)(Q,un,5),U&2){let _e;Yp(_e=Qp())&&(x.customTrigger=_e.first),Yp(_e=Qp())&&(x.options=_e),Yp(_e=Qp())&&(x.optionGroups=_e)}},viewQuery:function(U,x){if(U&1&&BE(e,5)(i,5)(Yc$2,5),U&2){let Q;Yp(Q=Qp())&&(x.trigger=Q.first),Yp(Q=Qp())&&(x.panel=Q.first),Yp(Q=Qp())&&(x._overlayDir=Q.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(U,x){U&1&&ti(`keydown`,function(_e){return x._handleKeydown(_e)})(`focus`,function(){return x._onFocus()})(`blur`,function(){return x._onBlur()}),U&2&&(er(`id`,x.id)(`tabindex`,x.disabled?-1:x.tabIndex)(`aria-controls`,x.panelOpen?x.id+`-panel`:null)(`aria-expanded`,x.panelOpen)(`aria-label`,x.ariaLabel||null)(`aria-required`,x.required.toString())(`aria-disabled`,x.disabled.toString())(`aria-invalid`,x.errorState)(`aria-activedescendant`,x._getAriaActiveDescendant()),nt(`mat-mdc-select-disabled`,x.disabled)(`mat-mdc-select-invalid`,x.errorState)(`mat-mdc-select-required`,x.required)(`mat-mdc-select-empty`,x.empty)(`mat-mdc-select-multiple`,x.multiple)(`mat-select-open`,x.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,ie],disableRipple:[2,`disableRipple`,`disableRipple`,ie],tabIndex:[2,`tabIndex`,`tabIndex`,V=>V==null?0:Ts$1(V)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,ie],placeholder:`placeholder`,required:[2,`required`,`required`,ie],multiple:[2,`multiple`,`multiple`,ie],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,ie],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,Ts$1],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,ie]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[tw([{provide:Rn,useExisting:n},{provide:mn,useExisting:n}]),Ft$1],ngContentSelectors:a,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(U,x){if(U&1&&(kn$1(o),Yc$1(0,`div`,2,0),ti(`click`,function(){return x.open()}),Yc$1(3,`div`,3),tr(4,r,2,1,`span`,4)(5,v,3,1,`span`,5),qp(),Yc$1(6,`div`,6)(7,`div`,7),_b(),Yc$1(8,`svg`,8),dl$1(9,`path`,9),qp()()()(),TE(10,w,3,16,`ng-template`,10),ti(`detach`,function(){return x.close()})(`backdropClick`,function(){return x.close()})(`overlayKeydown`,function(_e){return x._handleOverlayKeydown(_e)})),U&2){let Q=CM(1);An$1(3),er(`id`,x._valueId),An$1(),nr(x.empty?4:5),An$1(6),kE(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,x._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,x._scrollStrategy)(`cdkConnectedOverlayOrigin`,x._preferredOverlayOrigin||Q)(`cdkConnectedOverlayPositions`,x._positions)(`cdkConnectedOverlayWidth`,x._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,x._popoverLocation)}},dependencies:[Na,Yc$2],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return n})();var Wi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Je({type:n});static ɵinj=Ge({imports:[cs$1,pn,Lu,Ra,Be,pn]})}return n})();var $i=[{value:`a-b`,viewValue:`Original left, modified right`},{value:`b-a`,viewValue:`Modified left, original right`}];var Ki=[{value:`none`,viewValue:`None`},{value:`a-to-b`,viewValue:`Original → Modified (copy original over modified)`},{value:`b-to-a`,viewValue:`Modified → Original (copy modified over original)`}];function es(n){return n===`none`?void 0:n}var Qi=[{value:`basic`,viewValue:`Basic`},{value:`minimal`,viewValue:`Minimal`},{value:`none`,viewValue:`None`}];function ts(n){return n===`none`?null:n}var Yi=(n,t)=>t.key;var Xi=(n,t)=>t.value;function xc(n,t){if(n&1){let e=LE();Yc$1(0,`li`)(1,`mat-slide-toggle`,16),ti(`change`,function(o){let a=Zd$1(e).$implicit,r=jE();return Yd$1(r.toggle(a.key,o.checked))}),eh(2),qp()()}if(n&2){let e=t.$implicit,i=jE();An$1(),kE(`checked`,i.options()[e.key])(`matTooltip`,e.hint),An$1(),Is$1(` `,e.label,` `)}}function Cc(n,t){if(n&1){let e=LE();Yc$1(0,`li`)(1,`mat-slide-toggle`,16),ti(`change`,function(o){let a=Zd$1(e).$implicit,r=jE();return Yd$1(r.toggle(a.key,o.checked))}),eh(2),qp()()}if(n&2){let e=t.$implicit,i=jE();An$1(),kE(`checked`,i.options()[e.key])(`matTooltip`,e.hint),An$1(),Is$1(` `,e.label,` `)}}function wc(n,t){if(n&1){let e=LE();Yc$1(0,`li`)(1,`mat-slide-toggle`,16),ti(`change`,function(o){let a=Zd$1(e).$implicit,r=jE();return Yd$1(r.toggle(a.key,o.checked))}),eh(2),qp()()}if(n&2){let e=t.$implicit,i=jE();An$1(),kE(`checked`,i.options()[e.key])(`matTooltip`,e.hint),An$1(),Is$1(` `,e.label,` `)}}function Sc(n,t){if(n&1&&(Yc$1(0,`mat-option`,14),eh(1),qp()),n&2){let e=t.$implicit;kE(`value`,e.value),An$1(),th(e.viewValue)}}function Mc(n,t){if(n&1&&(Yc$1(0,`mat-option`,14),eh(1),qp()),n&2){let e=t.$implicit;kE(`value`,e.value),An$1(),th(e.viewValue)}}function kc(n,t){if(n&1){let e=LE();Yc$1(0,`mat-form-field`,8)(1,`mat-label`),eh(2,`Layout`),qp(),Yc$1(3,`mat-select`,13),ti(`selectionChange`,function(o){Zd$1(e);let a=jE(2);return Yd$1(a.select(`orientation`,a.orientations,o.value))}),gM(4,Sc,2,2,`mat-option`,14,Xi),qp(),Yc$1(6,`mat-hint`),eh(7,`Which side shows which document`),qp()(),Yc$1(8,`mat-form-field`,8)(9,`mat-label`),eh(10,`Revert buttons`),qp(),Yc$1(11,`mat-select`,13),ti(`selectionChange`,function(o){Zd$1(e);let a=jE(2);return Yd$1(a.select(`revertControls`,a.revertControls,o.value))}),gM(12,Mc,2,2,`mat-option`,14,Xi),qp(),Yc$1(14,`mat-hint`),eh(15,`Buttons that copy a change from one side to the other`),qp()()}if(n&2){let e=jE(2);An$1(3),kE(`value`,e.options().orientation),An$1(),bM(e.orientations),An$1(7),kE(`value`,e.options().revertControls),An$1(),bM(e.revertControls)}}function Nc(n,t){if(n&1){let e=LE();Yc$1(0,`li`)(1,`mat-slide-toggle`,16),ti(`change`,function(o){let a=Zd$1(e).$implicit,r=jE(2);return Yd$1(r.toggle(a.key,o.checked))}),eh(2),qp()()}if(n&2){let e=t.$implicit,i=jE(2);An$1(),kE(`checked`,i.options()[e.key])(`matTooltip`,e.hint),An$1(),Is$1(` `,e.label,` `)}}function Ec(n,t){if(n&1&&(Yc$1(0,`mat-expansion-panel`,12)(1,`mat-expansion-panel-header`)(2,`mat-panel-title`),eh(3,`Diff`),qp()(),tr(4,kc,16,2),Yc$1(5,`fieldset`,6)(6,`legend`,7),eh(7,`Diff`),qp(),Yc$1(8,`ul`),gM(9,Nc,3,3,`li`,null,Yi),qp()()()),n&2){let e=jE();An$1(4),nr(e.mode()===`diff`?4:-1),An$1(5),bM(e.diff())}}function Dc(n,t){if(n&1&&(Yc$1(0,`mat-option`,14),eh(1),qp()),n&2){let e=t.$implicit;kE(`value`,e.value),An$1(),th(e.viewValue)}}function Tc(n,t){if(n&1&&(Yc$1(0,`mat-option`,14),eh(1),qp()),n&2){let e=t.$implicit;kE(`value`,e.value),An$1(),th(e.viewValue)}}var Ac=[{key:`disabled`,label:`Disabled`,hint:`No editing and no focus; a form field bound to it is disabled`},{key:`readonly`,label:`Read-only`,hint:`The content can be selected and copied, not edited`},{key:`originalReadonly`,label:`Original read-only`,hint:`Only the original document cannot be edited`,modes:[`diff`]},{key:`autoFocus`,label:`Focus when created`,hint:`Focuses the editor when it is created: switch the mode or reload to see it`,modes:[`editor`,`unified-diff`]}];var Oc=[{key:`indentWithTab`,label:`Tab key indents`,hint:`Tab and Shift-Tab indent instead of moving the focus`},{key:`lineWrapping`,label:`Wrap long lines`,hint:`Long lines wrap instead of scrolling horizontally`},{key:`highlightWhitespace`,label:`Show whitespace`,hint:`Marks spaces and tabs`}];var Ic=[{key:`lineNumbers`,label:`Line numbers`,hint:`The line number gutter`},{key:`foldGutter`,label:`Fold gutter`,hint:`Arrows that fold and unfold code blocks`},{key:`highlightActiveLine`,label:`Highlight active line`,hint:`Highlights the line of the cursor`},{key:`search`,label:`Search panel`,hint:`Search and replace with Mod-f`},{key:`autocompletion`,label:`Autocompletion`,hint:`Completion suggestions while typing`},{key:`lint`,label:`Lint TODO/FIXME`,hint:`A demo linter flagging TODO and FIXME as warnings`}];var Fc=[{key:`highlightChanges`,label:`Highlight changes`,hint:`Marks inserted and deleted text inside changes`},{key:`gutter`,label:`Change gutter`,hint:`A gutter marker next to changed lines`},{key:`collapseUnchanged`,label:`Collapse unchanged lines`,hint:`Hides long stretches of unchanged lines, keeping 3 lines around each change`},{key:`mergeControls`,label:`Accept/reject buttons`,hint:`The buttons that accept or reject each change`,modes:[`unified-diff`]},{key:`syntaxHighlightDeletions`,label:`Highlight deleted code`,hint:`Deleted lines are syntax-highlighted with the language`,modes:[`unified-diff`]},{key:`allowInlineDiffs`,label:`Inline changes`,hint:`Changes within a line are shown inline instead of as deleted and inserted lines`,modes:[`unified-diff`]}];var Zi=class n{constructor(){this.options=O.required();this.patch=yt$1();this.setups=Qi;this.presets=Cb;this.orientations=$i;this.revertControls=Ki;this.mode=on$2(()=>this.options().mode);this.isDiff=on$2(()=>this.mode()!==`editor`);this.behaviour=on$2(()=>this.forMode(Ac));this.formatting=on$2(()=>this.forMode(Oc));this.extensions=on$2(()=>this.forMode(Ic));this.diff=on$2(()=>this.forMode(Fc))}toggle(t,e){this.patch.emit({[t]:e})}setNumber(t,e){let i=Number(e.value);Number.isInteger(i)&&i>=1&&i<=16?this.patch.emit({[t]:i}):e.value=String(this.options()[t])}setPlaceholder(t){this.patch.emit({placeholder:t.slice(0,200)})}select(t,e,i){let o=e.find(a=>a.value===i);o&&this.patch.emit({[t]:o.value})}setPresets(t){Array.isArray(t)&&this.patch.emit({presets:Cb.map(e=>e.value).filter(e=>t.includes(e))})}forMode(t){let e=this.mode();return t.filter(i=>!i.modes||i.modes.includes(e))}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=Ne({type:n,selectors:[[`app-options-panel`]],inputs:{options:[1,`options`]},outputs:{patch:`patch`},decls:76,vars:6,consts:[[`placeholderInput`,``],[`indentInput`,``],[`tabSizeInput`,``],[1,`title`],[`multi`,``,`displayMode`,`flat`],[`expanded`,``],[1,`toggles`],[1,`visually-hidden`],[`appearance`,`outline`,1,`field`],[`matInput`,``,`type`,`text`,`maxlength`,`200`,3,`change`,`value`],[1,`row`],[`matInput`,``,`type`,`number`,`min`,`1`,`max`,`16`,`step`,`1`,3,`change`,`value`],[`expanded`,``,1,`diff-section`],[3,`selectionChange`,`value`],[3,`value`],[`multiple`,``,3,`selectionChange`,`value`],[`matTooltipPosition`,`right`,3,`change`,`checked`,`matTooltip`]],template:function(e,i){if(e&1){let o=LE();Yc$1(0,`h2`,3),eh(1,`Options`),qp(),Yc$1(2,`mat-accordion`,4)(3,`mat-expansion-panel`,5)(4,`mat-expansion-panel-header`)(5,`mat-panel-title`),eh(6,`Behaviour`),qp()(),Yc$1(7,`fieldset`,6)(8,`legend`,7),eh(9,`Behaviour`),qp(),Yc$1(10,`ul`),gM(11,xc,3,3,`li`,null,Yi),qp()(),Yc$1(13,`mat-form-field`,8)(14,`mat-label`),eh(15,`Placeholder`),qp(),Yc$1(16,`input`,9,0),ti(`change`,function(){Zd$1(o);let r=CM(17);return Yd$1(i.setPlaceholder(r.value))}),qp(),Yc$1(18,`mat-hint`),eh(19,`Shown while the document is empty`),qp()()(),Yc$1(20,`mat-expansion-panel`)(21,`mat-expansion-panel-header`)(22,`mat-panel-title`),eh(23,`Formatting`),qp()(),Yc$1(24,`fieldset`,6)(25,`legend`,7),eh(26,`Formatting`),qp(),Yc$1(27,`ul`),gM(28,Cc,3,3,`li`,null,Yi),qp()(),Yc$1(30,`div`,10)(31,`mat-form-field`,8)(32,`mat-label`),eh(33,`Indent unit`),qp(),Yc$1(34,`input`,11,1),ti(`change`,function(){Zd$1(o);let r=CM(35);return Yd$1(i.setNumber(`indentUnit`,r))}),qp(),Yc$1(36,`mat-hint`),eh(37,`Spaces per indentation level`),qp()(),Yc$1(38,`mat-form-field`,8)(39,`mat-label`),eh(40,`Tab size`),qp(),Yc$1(41,`input`,11,2),ti(`change`,function(){Zd$1(o);let r=CM(42);return Yd$1(i.setNumber(`tabSize`,r))}),qp(),Yc$1(43,`mat-hint`),eh(44,`Columns of a tab character`),qp()()()(),Yc$1(45,`mat-expansion-panel`)(46,`mat-expansion-panel-header`)(47,`mat-panel-title`),eh(48,`Extensions`),qp()(),Yc$1(49,`fieldset`,6)(50,`legend`,7),eh(51,`Extensions`),qp(),Yc$1(52,`ul`),gM(53,wc,3,3,`li`,null,Yi),qp()()(),tr(55,Ec,11,1,`mat-expansion-panel`,12),Yc$1(56,`mat-expansion-panel`)(57,`mat-expansion-panel-header`)(58,`mat-panel-title`),eh(59,`Advanced`),qp()(),Yc$1(60,`mat-form-field`,8)(61,`mat-label`),eh(62,`Setup`),qp(),Yc$1(63,`mat-select`,13),ti(`selectionChange`,function(r){return i.select(`setup`,i.setups,r.value)}),gM(64,Dc,2,2,`mat-option`,14,Xi),qp(),Yc$1(66,`mat-hint`),eh(67,`Basic: the full CodeMirror setup; Minimal: history and keymaps; None: a bare editor`),qp()(),Yc$1(68,`mat-form-field`,8)(69,`mat-label`),eh(70,`Presets`),qp(),Yc$1(71,`mat-select`,15),ti(`selectionChange`,function(r){return i.setPresets(r.value)}),gM(72,Tc,2,2,`mat-option`,14,Xi),qp(),Yc$1(74,`mat-hint`),eh(75,`Named extensions registered with withExtensionPresets()`),qp()()()()}e&2&&(An$1(11),bM(i.behaviour()),An$1(5),kE(`value`,i.options().placeholder),An$1(12),bM(i.formatting()),An$1(6),kE(`value`,i.options().indentUnit),An$1(7),kE(`value`,i.options().tabSize),An$1(12),bM(i.extensions()),An$1(2),nr(i.isDiff()?55:-1),An$1(8),kE(`value`,i.options().setup),An$1(),bM(i.setups),An$1(7),kE(`value`,i.options().presets),An$1(),bM(i.presets))},dependencies:[Xl,Yl,la,sa,Ql,Be,kt,ut,Pn,cn,dn,Wi,qi,et,Li,ze],styles:[`[_nghost-%COMP%]{display:block}.title[_ngcontent-%COMP%]{margin:0 0 .75rem;font-size:1rem;font-weight:500}.toggles[_ngcontent-%COMP%]{margin:0 0 .75rem;padding:0;border:0}.toggles[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;gap:.5rem;margin:0;padding:0;list-style:none}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:0 .75rem}.field[_ngcontent-%COMP%]{flex:1 1 8rem;width:100%;margin-bottom:.5rem}.visually-hidden[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}`]})}};var Fe={mode:`editor`,language:`JavaScript`,theme:``,setup:`basic`,disabled:!1,readonly:!1,placeholder:``,autoFocus:!1,indentWithTab:!1,indentUnit:2,tabSize:4,lineWrapping:!1,highlightWhitespace:!1,lineNumbers:!0,foldGutter:!0,highlightActiveLine:!0,search:!0,autocompletion:!0,lint:!1,presets:[],highlightChanges:!0,gutter:!0,collapseUnchanged:!1,orientation:`a-b`,revertControls:`none`,originalReadonly:!1,mergeControls:!0,syntaxHighlightDeletions:!0,allowInlineDiffs:!1};var Ji=Object.keys(Fe);function hn(n,t){return Array.isArray(n)&&Array.isArray(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):Object.is(n,t)}function pt(n,t){let e=Object.keys(n);return e.length===Object.keys(t).length&&e.every(i=>hn(n[i],t[i]))}function ns(n){return Ji.filter(t=>!hn(n[t],Fe[t])).map(t=>({key:t,value:Pc(n[t])}))}function Pc(n){return Array.isArray(n)?n.length?n.join(`, `):`(none)`:n===``?`(empty)`:String(n)}function Rc(n,t){n&1&&eh(0,` No changes `)}function Vc(n,t){if(n&1&&eh(0),n&2){let e=jE();nh(` Change `,e.position().current,` of `,e.position().total,` `)}}function Lc(n,t){if(n&1&&eh(0),n&2){let e=jE();nh(` `,e.position().total,` `,e.position().total===1?`change`:`changes`,` `)}}var gn=class n{constructor(){this.position=O.required();this.previous=yt$1();this.next=yt$1()}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=Ne({type:n,selectors:[[`app-chunk-navigator`]],inputs:{position:[1,`position`]},outputs:{previous:`previous`,next:`next`},decls:8,vars:3,consts:[[`mat-stroked-button`,``,`type`,`button`,`matTooltip`,`Previous change (Alt-↑ in the editor)`,3,`click`,`disabled`],[`role`,`status`,1,`position`],[`mat-stroked-button`,``,`type`,`button`,`matTooltip`,`Next change (Alt-↓ in the editor)`,3,`click`,`disabled`]],template:function(e,i){e&1&&(Yc$1(0,`button`,0),ti(`click`,function(){return i.previous.emit()}),eh(1,` Previous `),qp(),Yc$1(2,`span`,1),tr(3,Rc,1,0)(4,Vc,1,2)(5,Lc,1,2),qp(),Yc$1(6,`button`,2),ti(`click`,function(){return i.next.emit()}),eh(7,` Next `),qp()),e&2&&(kE(`disabled`,!i.position().total),An$1(3),nr(i.position().total?i.position().current?4:5:3),An$1(3),kE(`disabled`,!i.position().total))},dependencies:[bX,hX,ze],styles:[`[_nghost-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}.position[_ngcontent-%COMP%]{min-width:8rem;text-align:center;font-size:.875rem}`]})}};function zn(n,t){return{current:n.findIndex(i=>t>=i.fromB&&t<=i.toB)+1,total:n.length}}var eo=class n{constructor(){this.common=O.required();this.diff=O.required();this.value=xs.required();this.event=yt$1();this.editor=xN.required(Dg);this.position=Z({current:0,total:0},{equal:pt});this.keymap=[{key:`Alt-ArrowUp`,run:()=>this.previousChunk()},{key:`Alt-ArrowDown`,run:()=>this.nextChunk()}];this.tracker=M.updateListener.of(()=>this.refresh());this.plainEvent=mt;this.valueEvent=rn;this.errorEvent=ln}onReady(t){this.mergeView=t,this.refresh(),this.event.emit(mt(`ready`,`MergeView created`))}previousChunk(){let t=this.editor().goToPreviousChunk();return this.refresh(),t}nextChunk(){let t=this.editor().goToNextChunk();return this.refresh(),t}refresh(){this.mergeView&&this.position.set(zn(this.editor().getChunks(),this.mergeView.b.state.selection.main.head))}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=Ne({type:n,selectors:[[`app-split-diff-mode`]],viewQuery:function(e,i){e&1&&Xp(i.editor,Dg,5),e&2&&$E()},inputs:{common:[1,`common`],diff:[1,`diff`],value:[1,`value`]},outputs:{value:`valueChange`,event:`event`},decls:2,vars:30,consts:[[3,`previous`,`next`,`position`],[1,`editor`,3,`valueChange`,`ready`,`originalValueChange`,`modifiedValueChange`,`originalFocused`,`originalBlurred`,`modifiedFocused`,`modifiedBlurred`,`touch`,`error`,`value`,`theme`,`language`,`languages`,`setup`,`disabled`,`readonly`,`placeholder`,`indentWithTab`,`indentUnit`,`tabSize`,`lineWrapping`,`highlightWhitespace`,`lineNumbers`,`foldGutter`,`highlightActiveLine`,`search`,`autocompletion`,`lint`,`presets`,`keymap`,`orientation`,`revertControls`,`highlightChanges`,`gutter`,`collapseUnchanged`,`originalReadonly`,`originalExtensions`,`modifiedExtensions`]],template:function(e,i){e&1&&(Yc$1(0,`app-chunk-navigator`,0),ti(`previous`,function(){return i.previousChunk()})(`next`,function(){return i.nextChunk()}),qp(),Yc$1(1,`ngx-code-diff-editor`,1),XE(`valueChange`,function(a){return ZM(i.value,a)||(i.value=a),a}),ti(`ready`,function(a){return i.onReady(a)})(`originalValueChange`,function(a){return i.event.emit(i.valueEvent(`originalValueChange`,a))})(`modifiedValueChange`,function(a){return i.event.emit(i.valueEvent(`modifiedValueChange`,a))})(`originalFocused`,function(){return i.event.emit(i.plainEvent(`originalFocused`))})(`originalBlurred`,function(){return i.event.emit(i.plainEvent(`originalBlurred`))})(`modifiedFocused`,function(){return i.event.emit(i.plainEvent(`modifiedFocused`))})(`modifiedBlurred`,function(){return i.event.emit(i.plainEvent(`modifiedBlurred`))})(`touch`,function(){return i.event.emit(i.plainEvent(`touch`))})(`error`,function(a){return i.event.emit(i.errorEvent(a))}),qp()),e&2&&(kE(`position`,i.position()),An$1(),QE(`value`,i.value),kE(`theme`,i.common().theme)(`language`,i.common().language)(`languages`,i.common().languages)(`setup`,i.common().setup)(`disabled`,i.common().disabled)(`readonly`,i.common().readonly)(`placeholder`,i.common().placeholder)(`indentWithTab`,i.common().indentWithTab)(`indentUnit`,i.common().indentUnit)(`tabSize`,i.common().tabSize)(`lineWrapping`,i.common().lineWrapping)(`highlightWhitespace`,i.common().highlightWhitespace)(`lineNumbers`,i.common().lineNumbers)(`foldGutter`,i.common().foldGutter)(`highlightActiveLine`,i.common().highlightActiveLine)(`search`,i.common().search)(`autocompletion`,i.common().autocompletion)(`lint`,i.common().lint)(`presets`,i.common().presets)(`keymap`,i.keymap)(`orientation`,i.diff().orientation)(`revertControls`,i.diff().revertControls)(`highlightChanges`,i.diff().highlightChanges)(`gutter`,i.diff().gutter)(`collapseUnchanged`,i.diff().collapseUnchanged)(`originalReadonly`,i.diff().originalReadonly)(`originalExtensions`,i.tracker)(`modifiedExtensions`,i.tracker))},dependencies:[Dg,gn],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem;height:100%;min-height:0}.editor[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}`]})}};var pa=class{source;option;constructor(t,e){this.source=t,this.option=e}};var is=new y(`mat-autocomplete-default-options`,{providedIn:`root`,factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})});var os=(()=>{class n{_changeDetectorRef=h(rr);_elementRef=h(fe);_defaults=h(is);_animationsDisabled=Di$1();_activeOptionChanges=Ee.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new ge;opened=new ge;closed=new ge;optionActivated=new ge;set classList(e){this._classList=e,this._elementRef.nativeElement.className=``}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=h(Bm).getId(`mat-autocomplete-`);inertGroups;constructor(){let e=h(Dt);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Fm(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new pa(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+` `:``;return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[`panel`],i=[`*`];function o(a,r){if(a&1&&(et$1(0,`div`,1,0),Se(2),tt()),a&2){let l=r.id,u=jE();Jp(u._classList),nt(`mat-mdc-autocomplete-visible`,u.showPanel)(`mat-mdc-autocomplete-hidden`,!u.showPanel)(`mat-autocomplete-panel-animations-enabled`,!u._animationsDisabled)(`mat-primary`,u._color===`primary`)(`mat-accent`,u._color===`accent`)(`mat-warn`,u._color===`warn`),Kp(`id`,u.id),er(`aria-label`,u.ariaLabel||null)(`aria-labelledby`,u._getPanelAriaLabelledby(l))}}return Ne({type:n,selectors:[[`mat-autocomplete`]],contentQueries:function(r,l,u){if(r&1&&fl$1(u,et,5)(u,un,5),r&2){let v;Yp(v=Qp())&&(l.options=v),Yp(v=Qp())&&(l.optionGroups=v)}},viewQuery:function(r,l){if(r&1&&BE(Wo$1,7)(e,5),r&2){let u;Yp(u=Qp())&&(l.template=u.first),Yp(u=Qp())&&(l.panel=u.first)}},hostAttrs:[1,`mat-mdc-autocomplete`],inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],displayWith:`displayWith`,autoActiveFirstOption:[2,`autoActiveFirstOption`,`autoActiveFirstOption`,ie],autoSelectActiveOption:[2,`autoSelectActiveOption`,`autoSelectActiveOption`,ie],requireSelection:[2,`requireSelection`,`requireSelection`,ie],panelWidth:`panelWidth`,disableRipple:[2,`disableRipple`,`disableRipple`,ie],classList:[0,`class`,`classList`],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,ie]},outputs:{optionSelected:`optionSelected`,opened:`opened`,closed:`closed`,optionActivated:`optionActivated`},exportAs:[`matAutocomplete`],features:[tw([{provide:mn,useExisting:n}])],ngContentSelectors:i,decls:1,vars:0,consts:[[`panel`,``],[`role`,`listbox`,1,`mat-mdc-autocomplete-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`id`]],template:function(r,l){r&1&&(kn$1(),ME(0,o,3,17,`ng-template`))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--%NS%mat-autocomplete-container-shape, var(--%NS%mat-sys-corner-extra-small));
  box-shadow: var(--%NS%mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--%NS%mat-autocomplete-background-color, var(--%NS%mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2})})()}return n})();var Bc={provide:dt,useExisting:Qa(()=>fa),multi:!0};var jc=new y(`mat-autocomplete-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=h(J);return()=>Va(n)}});var fa=(()=>{class n{_environmentInjector=h(le);_element=h(fe);_injector=h(J);_viewContainerRef=h(nn$1);_zone=h(V);_changeDetectorRef=h(rr);_dir=h(V1,{optional:!0});_formField=h(Vt,{optional:!0,host:!0});_viewportRuler=h(Qe$1);_scrollStrategy=h(jc);_renderer=h(Pt$1);_animationsDisabled=Di$1();_defaults=h(is,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new U;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Ee.EMPTY;_breakpointObserver=h(I1);_handsetLandscapeSubscription=Ee.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new U;_overlayPanelClass=Tu(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position=`auto`;connectedTo;autocompleteAttribute=`off`;autocompleteDisabled=!1;_aboveClass=`mat-mdc-autocomplete-panel-above`;ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen(`window`,`blur`,this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return aS(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Me(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Me(()=>this._overlayAttached)):R()).pipe(H(e=>e instanceof Ln?e:null))}optionSelections=yr(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Ni$1(e),je(()=>aS(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(je(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new A(e=>{let i=a=>{let r=Vt$2(a),l=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,u=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&r!==this._element.nativeElement&&!this._hasFocus()&&(!l||!l.contains(r))&&(!u||!u.contains(r))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(r)&&e.next(a)},o=[this._renderer.listen(`document`,`click`,i),this._renderer.listen(`document`,`auxclick`,i),this._renderer.listen(`document`,`touchend`,i)];return()=>{o.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,o=i.keyCode,a=yI(i);if(o===27&&!a&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&o===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let r=this.autocomplete._keyManager.activeItem,l=o===38||o===40;o===9||l&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):l&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(l||this.autocomplete._keyManager.activeItem!==r)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,o=i.value;if(i.type===`number`&&(o=o==``?null:parseFloat(o)),this._previousValue!==o){if(this._previousValue=o,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(o),!o)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(r=>r.selected);if(a){let r=this._getDisplayValue(a.value);o!==r&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return v1()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel===`auto`&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel=`always`,this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel=`auto`),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new A(o=>{Xo$1(()=>{o.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(Ae(()=>this._positionStrategy.reapplyLastPosition()),lS(0))??R();return aS(e,i).pipe(je(()=>this._zone.run(()=>{let o=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),o!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Qe(1)).subscribe(o=>this._setValueAndClose(o))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e??this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??``)}_updateNativeInputValue(e){let i=this._formField?._control;i?_c$1(i.value)?i.value.set(e):i.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,o=e?e.source:this._pendingAutoselectedOption;o?(this._clearPreviousSelectedOption(o),this._assignOptionValue(o.value),this._onChange(o.value),i._emitSelectEvent(o),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(o=>{o!==e&&o.selected&&o.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Be$1(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=fn(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(uQ.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let o=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&o!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!yI(e)||e.keyCode===38&&yI(e,`altKey`))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??``),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new gt({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=za(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation(`inline`);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}],o=this._aboveClass,a=[{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:o},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:o}],r;this.position===`above`?r=a:this.position===`below`?r=i:r=[...i,...a],e.withPositions(r)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let o=0;o<e.options.length;o++)if(!e.options.get(o).disabled){i=o;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,o=Gi(e,i.options,i.optionGroups);if(e===0&&o===1)i._setScrollTop(0);else if(i.panel){let a=i.options.toArray()[e];if(a){let r=a._getHostElement(),l=Ui(r.offsetTop,r.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(l)}}}static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[`input`,`matAutocomplete`,``],[`textarea`,`matAutocomplete`,``]],hostAttrs:[1,`mat-mdc-autocomplete-trigger`],hostVars:7,hostBindings:function(i,o){i&1&&ti(`focusin`,function(){return o._handleFocus()})(`blur`,function(){return o._onTouched()})(`input`,function(r){return o._handleInput(r)})(`keydown`,function(r){return o._handleKeydown(r)})(`click`,function(){return o._handleClick()}),i&2&&er(`autocomplete`,o.autocompleteAttribute)(`role`,o.autocompleteDisabled?null:`combobox`)(`aria-autocomplete`,o.autocompleteDisabled?null:`list`)(`aria-activedescendant`,o.panelOpen&&o.activeOption?o.activeOption.id:null)(`aria-expanded`,o.autocompleteDisabled?null:o.panelOpen.toString())(`aria-controls`,o.autocompleteDisabled||!o.panelOpen?null:o.autocomplete?.id)(`aria-haspopup`,o.autocompleteDisabled?null:`listbox`)},inputs:{autocomplete:[0,`matAutocomplete`,`autocomplete`],position:[0,`matAutocompletePosition`,`position`],connectedTo:[0,`matAutocompleteConnectedTo`,`connectedTo`],autocompleteAttribute:[0,`autocomplete`,`autocompleteAttribute`],autocompleteDisabled:[2,`matAutocompleteDisabled`,`autocompleteDisabled`,ie]},exportAs:[`matAutocompleteTrigger`],features:[tw([Bc]),Ft$1]})}return n})();var as=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Je({type:n});static ɵinj=Ge({imports:[cs$1,pn,Ra,pn,Lu]})}return n})();var rs=new y(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var ls=new y(`MatButtonToggleGroup`);var Gc={provide:dt,useExisting:Qa(()=>ha),multi:!0};var to=class{source;value;constructor(t,e){this.source=t,this.value=e}};var ha=(()=>{class n{_changeDetector=h(rr);_dir=h(V1,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=h(Bm).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(i=>i.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new ge;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new ge;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=h(rs,{optional:!0});this.appearance=e&&e.appearance?e.appearance:`standard`,this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Lt(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||yI(e))return;let o=e.target.id,a=this._buttonToggles.toArray().findIndex(l=>l.buttonId===o),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(a)||null;break;case 38:r=this._getNextButton(a,-1);break;case 37:r=this._getNextButton(a,this.dir===`ltr`?-1:1);break;case 40:r=this._getNextButton(a,1);break;case 39:r=this._getNextButton(a,this.dir===`ltr`?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus())}_emitChangeEvent(e){let i=new to(e,this.value);this._rawValue=i.value,this._controlValueAccessorChangeFn(i.value),this.change.emit(i)}_syncButtonToggle(e,i,o=!1,a=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?i?this._selectionModel.select(e):this._selectionModel.deselect(e):a=!0,a?Promise.resolve().then(()=>this._updateModelValue(e,o)):this._updateModelValue(e,o)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(i=>e.value!=null&&i===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let i=this._buttonToggles.get(e);if(!i.disabled){i.tabIndex=0;break}}}_getNextButton(e,i){let o=this._buttonToggles;for(let a=1;a<=o.length;a++){let r=(e+i*a+o.length)%o.length,l=o.get(r);if(l&&!l.disabled)return l}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let i=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(o=>this._selectValue(o,i))):(this._clearSelection(),this._selectValue(e,i)),!this.multiple&&i.every(o=>o.tabIndex===-1)){for(let o of i)if(!o.disabled){o.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,i){for(let o of i)if(o.value===e){o.checked=!0,this._selectionModel.select(o),this.multiple||(o.tabIndex=0);break}}_updateModelValue(e,i){i&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static ɵfac=function(i){return new(i||n)};static ɵdir=_e({type:n,selectors:[[`mat-button-toggle-group`]],contentQueries:function(i,o,a){if(i&1&&fl$1(a,no,5),i&2){let r;Yp(r=Qp())&&(o._buttonToggles=r)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(i,o){i&1&&ti(`keydown`,function(r){return o._keydown(r)}),i&2&&(er(`role`,o.multiple?`group`:`radiogroup`)(`aria-disabled`,o.disabled),nt(`mat-button-toggle-vertical`,o.vertical)(`mat-button-toggle-group-appearance-standard`,o.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,ie],value:`value`,multiple:[2,`multiple`,`multiple`,ie],disabled:[2,`disabled`,`disabled`,ie],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ie],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,ie],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,ie]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[tw([Gc,{provide:ls,useExisting:n}])]})}return n})();var no=(()=>{class n{_changeDetectorRef=h(rr);_elementRef=h(fe);_focusMonitor=h(Su);_idGenerator=h(Bm);_animationDisabled=Di$1();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ge;constructor(){h(mo).load(kI);let e=h(ls,{optional:!0}),i=h(new gl$1(`tabindex`),{optional:!0})||``,o=h(rs,{optional:!0});this._tabIndex=Z(parseInt(i)||0),this.buttonToggleGroup=e,this._appearance=o&&o.appearance?o.appearance:`standard`,this._disabledInteractive=o?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let i=this.buttonToggleGroup._buttonToggles.find(o=>o.tabIndex===0);i&&(i.tabIndex=-1),this.tabIndex=0}this.change.emit(new to(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[`button`],i=[`*`];function o(a,r){if(a&1&&(Yc$1(0,`div`,2),dl$1(1,`mat-pseudo-checkbox`,6),qp()),a&2){let l=jE();An$1(),kE(`disabled`,l.disabled)}}return Ne({type:n,selectors:[[`mat-button-toggle`]],viewQuery:function(r,l){if(r&1&&BE(e,5),r&2){let u;Yp(u=Qp())&&(l._buttonElement=u.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(r,l){r&1&&ti(`focus`,function(){return l.focus()}),r&2&&(er(`aria-label`,null)(`aria-labelledby`,null)(`id`,l.id)(`name`,null),nt(`mat-button-toggle-standalone`,!l.buttonToggleGroup)(`mat-button-toggle-checked`,l.checked)(`mat-button-toggle-disabled`,l.disabled)(`mat-button-toggle-disabled-interactive`,l.disabledInteractive)(`mat-button-toggle-appearance-standard`,l.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,ie],appearance:`appearance`,checked:[2,`checked`,`checked`,ie],disabled:[2,`disabled`,`disabled`,ie],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ie]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:i,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(r,l){if(r&1&&(kn$1(),Yc$1(0,`button`,1,0),ti(`click`,function(){return l._onButtonClick()}),tr(2,o,2,1,`div`,2),Yc$1(3,`span`,3),Se(4),qp()(),dl$1(5,`span`,4)(6,`span`,5)),r&2){let u=CM(1);kE(`id`,l.buttonId)(`disabled`,l.disabled&&!l.disabledInteractive||null),er(`role`,l.isSingleSelector()?`radio`:`button`)(`tabindex`,l.disabled&&!l.disabledInteractive?-1:l.tabIndex)(`aria-pressed`,l.isSingleSelector()?null:l.checked)(`aria-checked`,l.isSingleSelector()?l.checked:null)(`name`,l._getButtonName())(`aria-label`,l.ariaLabel)(`aria-labelledby`,l.ariaLabelledby)(`aria-disabled`,l.disabled&&l.disabledInteractive?`true`:null),An$1(2),nr(l.buttonToggleGroup&&(!l.buttonToggleGroup.multiple&&!l.buttonToggleGroup.hideSingleSelectionIndicator||l.buttonToggleGroup.multiple&&!l.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),An$1(4),kE(`matRippleTrigger`,u)(`matRippleDisabled`,l.disableRipple||l.disabled)}},dependencies:[kQ,Hi],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})})()}return n})();var ss=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Je({type:n});static ɵinj=Ge({imports:[LI,no,Lu]})}return n})();var qc=new y(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:ds})});var ds=100;var Wc=10;var cs=(()=>{class n{_elementRef=h(fe);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=h(qc),i=R1(),o=this._elementRef.nativeElement;this._noopAnimations=i===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=o.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&i===`reduced-motion`&&o.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=ds;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Wc)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[`determinateSpinner`];function i(o,a){if(o&1&&(_b(),Yc$1(0,`svg`,11),dl$1(1,`circle`,12),qp()),o&2){let r=jE();er(`viewBox`,r._viewBox()),An$1(),pl$1(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeCircumference()/2,`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),er(`r`,r._circleRadius())}}return Ne({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(a,r){if(a&1&&BE(e,5),a&2){let l;Yp(l=Qp())&&(r._determinateCircle=l.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(a,r){a&2&&(er(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),Jp(`mat-`+r.color),pl$1(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),nt(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,Ts$1],diameter:[2,`diameter`,`diameter`,Ts$1],strokeWidth:[2,`strokeWidth`,`strokeWidth`,Ts$1]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(a,r){if(a&1&&(TE(0,i,2,8,`ng-template`,null,0,eN),Yc$1(2,`div`,2,1),_b(),Yc$1(4,`svg`,3),dl$1(5,`circle`,4),qp()(),Db(),Yc$1(6,`div`,5)(7,`div`,6)(8,`div`,7),OE(9,8),qp(),Yc$1(10,`div`,9),OE(11,8),qp(),Yc$1(12,`div`,10),OE(13,8),qp()()()),a&2){let l=CM(1);An$1(4),er(`viewBox`,r._viewBox()),An$1(),pl$1(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),er(`r`,r._circleRadius()),An$1(4),kE(`ngTemplateOutlet`,l),An$1(2),kE(`ngTemplateOutlet`,l),An$1(2),kE(`ngTemplateOutlet`,l)}},dependencies:[zN],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})})()}return n})();var ms=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Je({type:n});static ɵinj=Ge({imports:[Lu]})}return n})();var us=(n,t)=>t.value;var Kc=(n,t)=>t.name;var Qc=(n,t)=>t.label;function Yc(n,t){if(n&1&&(Yc$1(0,`mat-button-toggle`,3),eh(1),qp()),n&2){let e=t.$implicit;kE(`value`,e.value),An$1(),th(e.viewValue)}}function Xc(n,t){n&1&&dl$1(0,`mat-progress-spinner`,7)}function Zc(n,t){if(n&1&&(Yc$1(0,`mat-option`,3),eh(1),qp()),n&2){let e=t.$implicit;kE(`value`,e.name),An$1(),th(e.name)}}function Jc(n,t){n&1&&(Yc$1(0,`mat-option`,9),eh(1,`No language matches`),qp())}function em(n,t){if(n&1&&(Yc$1(0,`mat-option`,3),eh(1),qp()),n&2){let e=t.$implicit;kE(`value`,e.value),An$1(),th(e.viewValue)}}function tm(n,t){if(n&1&&(Yc$1(0,`mat-optgroup`,11),gM(1,em,2,2,`mat-option`,3,us),qp()),n&2){let e=t.$implicit;kE(`label`,e.label),An$1(),bM(e.options)}}function nm(n,t){n&1&&dl$1(0,`mat-progress-spinner`,12)}var io=class n{constructor(){this.mode=O.required();this.language=O.required();this.theme=O.required();this.themeLoading=O(!1);this.sampleLoading=O(!1);this.modeChange=yt$1();this.languageChange=yt$1();this.themeChange=yt$1();this.reset=yt$1();this.copyLink=yt$1();this.copySnippet=yt$1();this.download=yt$1();this.modes=St;this.query=ih(()=>this.language());this.languages=on$2(()=>{let t=this.query().trim().toLowerCase();return!t||t===this.language().toLowerCase()?Oi:Oi.filter(e=>e.name.toLowerCase().includes(t))});this.themeGroups=on$2(()=>{let t=this.theme();return vp.some(e=>e.value===t)?nd$1:[...nd$1,{label:`Other`,options:[{viewValue:`${t} (unregistered)`,value:t}]}]})}onMode(t){let e=St.find(i=>i.value===t);e&&this.modeChange.emit(e.value)}onLanguage(t){typeof t==`string`&&t!==this.language()&&this.languageChange.emit(t),this.query.set(this.language())}onTheme(t){typeof t==`string`&&this.themeChange.emit(t)}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=Ne({type:n,selectors:[[`app-playground-toolbar`]],inputs:{mode:[1,`mode`],language:[1,`language`],theme:[1,`theme`],themeLoading:[1,`themeLoading`],sampleLoading:[1,`sampleLoading`]},outputs:{modeChange:`modeChange`,languageChange:`languageChange`,themeChange:`themeChange`,reset:`reset`,copyLink:`copyLink`,copySnippet:`copySnippet`,download:`download`},decls:33,vars:7,consts:[[`languageInput`,``],[`languagePanel`,`matAutocomplete`],[`aria-label`,`Editor mode`,`hideSingleSelectionIndicator`,``,1,`modes`,3,`change`,`value`],[3,`value`],[1,`pickers`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`picker`],[`matInput`,``,`type`,`text`,`autocomplete`,`off`,`aria-label`,`Language (type to filter)`,3,`input`,`focus`,`value`,`matAutocomplete`],[`matSuffix`,``,`mode`,`indeterminate`,`diameter`,`18`,`aria-label`,`Loading the sample`,1,`spinner`],[3,`optionSelected`,`closed`],[`disabled`,``],[3,`selectionChange`,`value`],[3,`label`],[`matSuffix`,``,`mode`,`indeterminate`,`diameter`,`18`,`aria-label`,`Loading the theme`,1,`spinner`],[1,`actions`],[1,`visually-hidden`],[`mat-button`,``,`type`,`button`,`matTooltip`,`Restore every option to its default`,3,`click`],[`mat-button`,``,`type`,`button`,`matTooltip`,`Copy a link that reproduces these options`,3,`click`],[`mat-button`,``,`type`,`button`,`matTooltip`,`Copy the editor template with the bindings that differ from the defaults`,3,`click`],[`mat-button`,``,`type`,`button`,`matTooltip`,`Download the editor content as a file`,3,`click`]],template:function(e,i){if(e&1){let o=LE();Yc$1(0,`mat-button-toggle-group`,2),ti(`change`,function(r){return i.onMode(r.value)}),gM(1,Yc,2,2,`mat-button-toggle`,3,us),qp(),Yc$1(3,`div`,4)(4,`mat-form-field`,5)(5,`mat-label`),eh(6,`Language`),qp(),Yc$1(7,`input`,6,0),ti(`input`,function(){Zd$1(o);let r=CM(8);return Yd$1(i.query.set(r.value))})(`focus`,function(){Zd$1(o);let r=CM(8);return Yd$1(r.select())}),qp(),tr(9,Xc,1,0,`mat-progress-spinner`,7),Yc$1(10,`mat-autocomplete`,8,1),ti(`optionSelected`,function(r){return i.onLanguage(r.option.value)})(`closed`,function(){return i.query.set(i.language())}),gM(12,Zc,2,2,`mat-option`,3,Kc,!1,Jc,2,0,`mat-option`,9),qp()(),Yc$1(15,`mat-form-field`,5)(16,`mat-label`),eh(17,`Theme`),qp(),Yc$1(18,`mat-select`,10),ti(`selectionChange`,function(r){return i.onTheme(r.value)}),gM(19,tm,3,1,`mat-optgroup`,11,Qc),qp(),tr(21,nm,1,0,`mat-progress-spinner`,12),qp()(),Yc$1(22,`fieldset`,13)(23,`legend`,14),eh(24,`Playground actions`),qp(),Yc$1(25,`button`,15),ti(`click`,function(){return i.reset.emit()}),eh(26,` Reset `),qp(),Yc$1(27,`button`,16),ti(`click`,function(){return i.copyLink.emit()}),eh(28,` Copy share link `),qp(),Yc$1(29,`button`,17),ti(`click`,function(){return i.copySnippet.emit()}),eh(30,` Copy snippet `),qp(),Yc$1(31,`button`,18),ti(`click`,function(){return i.download.emit()}),eh(32,` Download `),qp()()}if(e&2){let o=CM(11);kE(`value`,i.mode()),An$1(),bM(i.modes),An$1(6),kE(`value`,i.query())(`matAutocomplete`,o),An$1(2),nr(i.sampleLoading()?9:-1),An$1(3),bM(i.languages()),An$1(6),kE(`value`,i.theme()),An$1(),bM(i.themeGroups()),An$1(2),nr(i.themeLoading()?21:-1)}},dependencies:[as,os,et,da,fa,bX,hX,ss,ha,no,Be,kt,ut,na,cn,dn,ms,cs,Wi,qi,ze],styles:[`[_nghost-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.75rem 1rem}.modes[_ngcontent-%COMP%]{flex-wrap:wrap}.pickers[_ngcontent-%COMP%]{display:flex;flex:1 1 24rem;flex-wrap:wrap;gap:.75rem}.picker[_ngcontent-%COMP%]{flex:1 1 12rem;min-width:0}.spinner[_ngcontent-%COMP%]{margin-right:.5rem}.actions[_ngcontent-%COMP%]{display:flex;margin:0;padding:0;border:0;flex-wrap:wrap;gap:.25rem}@media(max-width:959.98px){.actions[_ngcontent-%COMP%]{width:100%}}.visually-hidden[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}`]})}};var oo=class n{constructor(){this.common=O.required();this.unified=O.required();this.original=xs.required();this.value=xs.required();this.event=yt$1();this.editor=xN.required(Eg);this.position=Z({current:0,total:0},{equal:pt});this.keymap=[{key:`Alt-ArrowUp`,run:()=>this.previousChunk()},{key:`Alt-ArrowDown`,run:()=>this.nextChunk()}];this.tracker=M.updateListener.of(t=>this.position.set(zn(this.editor().getChunks(),t.state.selection.main.head)));this.plainEvent=mt;this.valueEvent=rn;this.errorEvent=ln}onReady(){this.refresh(),this.event.emit(mt(`ready`,`EditorView created`))}previousChunk(){let t=this.editor().goToPreviousChunk();return this.refresh(),t}nextChunk(){let t=this.editor().goToNextChunk();return this.refresh(),t}refresh(){let t=this.editor().view();t&&this.position.set(zn(this.editor().getChunks(),t.state.selection.main.head))}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=Ne({type:n,selectors:[[`app-unified-diff-mode`]],viewQuery:function(e,i){e&1&&Xp(i.editor,Eg,5),e&2&&$E()},inputs:{common:[1,`common`],unified:[1,`unified`],original:[1,`original`],value:[1,`value`]},outputs:{original:`originalChange`,value:`valueChange`,event:`event`},decls:2,vars:31,consts:[[3,`previous`,`next`,`position`],[1,`editor`,3,`originalChange`,`valueChange`,`ready`,`focused`,`blurred`,`touch`,`error`,`original`,`value`,`theme`,`language`,`languages`,`setup`,`disabled`,`readonly`,`placeholder`,`indentWithTab`,`indentUnit`,`tabSize`,`lineWrapping`,`highlightWhitespace`,`lineNumbers`,`foldGutter`,`highlightActiveLine`,`search`,`autocompletion`,`lint`,`presets`,`keymap`,`autoFocus`,`mergeControls`,`highlightChanges`,`gutter`,`syntaxHighlightDeletions`,`allowInlineDiffs`,`collapseUnchanged`,`extensions`]],template:function(e,i){e&1&&(Yc$1(0,`app-chunk-navigator`,0),ti(`previous`,function(){return i.previousChunk()})(`next`,function(){return i.nextChunk()}),qp(),Yc$1(1,`ngx-code-unified-diff-editor`,1),XE(`originalChange`,function(a){return ZM(i.original,a)||(i.original=a),a})(`valueChange`,function(a){return ZM(i.value,a)||(i.value=a),a}),ti(`ready`,function(){return i.onReady()})(`valueChange`,function(a){return i.event.emit(i.valueEvent(`valueChange`,a))})(`originalChange`,function(a){return i.event.emit(i.valueEvent(`originalChange`,a))})(`focused`,function(){return i.event.emit(i.plainEvent(`focused`))})(`blurred`,function(){return i.event.emit(i.plainEvent(`blurred`))})(`touch`,function(){return i.event.emit(i.plainEvent(`touch`))})(`error`,function(a){return i.event.emit(i.errorEvent(a))}),qp()),e&2&&(kE(`position`,i.position()),An$1(),QE(`original`,i.original)(`value`,i.value),kE(`theme`,i.common().theme)(`language`,i.common().language)(`languages`,i.common().languages)(`setup`,i.common().setup)(`disabled`,i.common().disabled)(`readonly`,i.common().readonly)(`placeholder`,i.common().placeholder)(`indentWithTab`,i.common().indentWithTab)(`indentUnit`,i.common().indentUnit)(`tabSize`,i.common().tabSize)(`lineWrapping`,i.common().lineWrapping)(`highlightWhitespace`,i.common().highlightWhitespace)(`lineNumbers`,i.common().lineNumbers)(`foldGutter`,i.common().foldGutter)(`highlightActiveLine`,i.common().highlightActiveLine)(`search`,i.common().search)(`autocompletion`,i.common().autocompletion)(`lint`,i.common().lint)(`presets`,i.common().presets)(`keymap`,i.keymap)(`autoFocus`,i.unified().autoFocus)(`mergeControls`,i.unified().mergeControls)(`highlightChanges`,i.unified().highlightChanges)(`gutter`,i.unified().gutter)(`syntaxHighlightDeletions`,i.unified().syntaxHighlightDeletions)(`allowInlineDiffs`,i.unified().allowInlineDiffs)(`collapseUnchanged`,i.unified().collapseUnchanged)(`extensions`,i.tracker))},dependencies:[Eg,gn],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem;height:100%;min-height:0}.editor[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}`]})}};function ps(n,t){let e;return Object.assign((...o)=>{clearTimeout(e),e=setTimeout(()=>{e=void 0,n(...o)},t)},{cancel:()=>{clearTimeout(e),e=void 0}})}var im=100;var om=300;var Bn=class n{constructor(){this._entries=Z([]);this.debounced=new Map;this.nextId=0;this.entries=this._entries.asReadonly();h(ue).onDestroy(()=>{for(let t of this.debounced.values())t.cancel()})}log(t,e,i=!1){let o={id:++this.nextId,time:am(new Date),name:t,detail:e,failed:i};this._entries.update(a=>[o,...a].slice(0,im))}logDebounced(t,e,i=!1){let o=this.debounced.get(t);o||(o=ps((a,r)=>this.log(t,a,r),om),this.debounced.set(t,o)),o(e,i)}clear(){for(let t of this.debounced.values())t.cancel();this._entries.set([])}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵprov=k({token:n,factory:n.ɵfac})}};function am(n){let t=(e,i=2)=>String(e).padStart(i,`0`);return`${t(n.getHours())}:${t(n.getMinutes())}:${t(n.getSeconds())}.${t(n.getMilliseconds(),3)}`}var fs=`There is no sample for this language yet.

Type or paste some code here: the editor highlights it with the selected language.
Switch the mode to compare two versions in a diff editor.
`;function rm(n){let t=n.split(`
`);if(t.length<4)return`${n}
(modified)`;let e=Math.floor(t.length*.25),i=Math.floor(t.length*.5),o=Math.min(Math.floor(t.length*.75),t.length-2),a=t.map((r,l)=>l===o?t[o+1]:l===o+1?t[o]:r);return a.splice(i,0,t[i]),a.splice(e,1),a.join(`
`)}function hs(n){let t=rm(n);return{code:n,diff:{original:n,modified:t},unifiedOriginal:n,unifiedValue:t}}function ga(n,t){return n.code===t.code&&n.diff.original===t.diff.original&&n.diff.modified===t.diff.modified&&n.unifiedOriginal===t.unifiedOriginal&&n.unifiedValue===t.unifiedValue}var jn=class n{constructor(){this.http=h(Al$1);this._loading=Z(!1);this._error=Z(null);this.pending=null;this.loading=this._loading.asReadonly();this.error=this._error.asReadonly();h(ue).onDestroy(()=>this.cancel())}load(t){return this.cancel(),this._loading.set(!0),new Promise(e=>{let i=u=>{this.pending=null,e(u)},o=(u,v)=>{this._loading.set(!1),this._error.set(v),i(u)},a=u=>o({language:t,text:fs,fallback:!0},`No sample for ${t}: ${u}`),r=`lang_samples/${Al(t)}`,l=this.http.get(r,{responseType:`text`,observe:`response`}).subscribe({next:u=>{u.headers.get(`content-type`)?.includes(`text/html`)?a(`not found`):o({language:t,text:(u.body??``).replaceAll(`\r
`,`
`),fallback:!1},null)},error:u=>a(lm(u))});this._loading()&&(this.pending={subscription:l,settle:i})})}cancel(){let t=this.pending;t&&(t.subscription.unsubscribe(),t.settle(null),this._loading.set(!1))}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵprov=k({token:n,factory:n.ɵfac})}};function lm(n){return n!==null&&typeof n==`object`&&`status`in n&&typeof n.status==`number`?n.status?`HTTP ${n.status}`:`network error`:String(n)}var ba=[`theme`,`setup`,`disabled`,`readonly`,`placeholder`,`indentWithTab`,`indentUnit`,`tabSize`,`lineWrapping`,`highlightWhitespace`,`lineNumbers`,`foldGutter`,`highlightActiveLine`,`search`,`autocompletion`,`lint`,`presets`];var sm={editor:[...ba,`autoFocus`],diff:[...ba,`orientation`,`revertControls`,`highlightChanges`,`gutter`,`collapseUnchanged`,`originalReadonly`],"unified-diff":[...ba,`autoFocus`,`mergeControls`,`highlightChanges`,`gutter`,`syntaxHighlightDeletions`,`allowInlineDiffs`,`collapseUnchanged`]};var dm=new Set([`lineNumbers`,`foldGutter`,`highlightActiveLine`,`search`,`autocompletion`]);var cm={editor:`<ngx-code-editor [(value)]="code"`,diff:`<ngx-code-diff-editor [(value)]="diff"`,"unified-diff":`<ngx-code-unified-diff-editor [original]="original" [(value)]="code"`};function gs(n){let t=[cm[n.mode],`language="${n.language}"`,`[languages]="languages"`];for(let e of sm[n.mode]){let i=n[e];hn(i,dm.has(e)?n.setup===`basic`:Fe[e])||t.push(mm(e,i))}return`${t.join(`
  `)} />`}function mm(n,t){switch(n){case`setup`:return t===`none`?`[setup]="null"`:`setup="${String(t)}"`;case`lint`:return`[lint]="lint"`;case`collapseUnchanged`:return`[collapseUnchanged]="{ margin: 3, minSize: 4 }"`;case`presets`:return`[presets]="[${t.map(e=>`'${e}'`).join(`, `)}]"`;case`theme`:case`placeholder`:case`orientation`:case`revertControls`:return`${n}="${um(String(t))}"`;default:return`[${n}]="${String(t)}"`}}function um(n){return n.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`)}var ce=n=>{if(n===!0||n===`true`)return!0;if(n===!1||n===`false`)return!1};var bs=(n,t)=>e=>{let i=typeof e==`string`&&e.trim()!==``?Number(e):e;return typeof i==`number`&&Number.isInteger(i)&&i>=n&&i<=t?i:void 0};var ao=n=>t=>n.find(e=>e.value===t)?.value;var pm={mode:ao(St),language:n=>typeof n==`string`?Ii(n)?.name:void 0,theme:n=>typeof n==`string`&&/^[\w-]{0,64}$/.test(n)?n:void 0,setup:ao(Qi),disabled:ce,readonly:ce,placeholder:n=>typeof n==`string`&&n.length<=200?n:void 0,autoFocus:ce,indentWithTab:ce,indentUnit:bs(1,16),tabSize:bs(1,16),lineWrapping:ce,highlightWhitespace:ce,lineNumbers:ce,foldGutter:ce,highlightActiveLine:ce,search:ce,autocompletion:ce,lint:ce,presets:n=>{let t=typeof n==`string`?n?n.split(`,`):[]:n;return Array.isArray(t)?Cb.map(i=>i.value).filter(i=>t.includes(i)):void 0},highlightChanges:ce,gutter:ce,collapseUnchanged:ce,orientation:ao($i),revertControls:ao(Ki),originalReadonly:ce,mergeControls:ce,syntaxHighlightDeletions:ce,allowInlineDiffs:ce};function _a(n){let t=l({},Fe),e=0;for(let i of Ji){if(!Object.hasOwn(n,i))continue;let o=pm[i](n[i]);o!==void 0&&(t[i]=o,e++)}return{options:t,found:e}}function ya(n){let t={};for(let e of Ji){let i=n[e];hn(i,Fe[e])||(t[e]=Array.isArray(i)?i.join(`,`):String(i))}return t}var _s=`ngx-codemirror:playground`;var ys={margin:3,minSize:4};var Hn=class n{constructor(){this.router=h(Bn$1);this.route=h(jn$1);this.location=h(to$1);this.document=h(q);this.isBrowser=On$1(h(At));this._options=Z(this.initialOptions());this.options=this._options.asReadonly();this.common=on$2(()=>{let t=this._options();return{theme:t.theme||void 0,language:t.language,languages:Tl,setup:ts(t.setup),disabled:t.disabled,readonly:t.readonly,placeholder:t.placeholder||void 0,indentWithTab:t.indentWithTab,indentUnit:t.indentUnit,tabSize:t.tabSize,lineWrapping:t.lineWrapping,highlightWhitespace:t.highlightWhitespace,lineNumbers:t.lineNumbers,foldGutter:t.foldGutter,highlightActiveLine:t.highlightActiveLine,search:t.search,autocompletion:t.autocompletion,lint:t.lint?xb:null,presets:t.presets}},{equal:pt});this.editor=on$2(()=>({autoFocus:this._options().autoFocus}),{equal:pt});this.diff=on$2(()=>{let t=this._options();return{orientation:t.orientation,revertControls:es(t.revertControls),highlightChanges:t.highlightChanges,gutter:t.gutter,collapseUnchanged:t.collapseUnchanged?ys:void 0,originalReadonly:t.originalReadonly}},{equal:pt});this.unified=on$2(()=>{let t=this._options();return{autoFocus:t.autoFocus,mergeControls:t.mergeControls,highlightChanges:t.highlightChanges,gutter:t.gutter,syntaxHighlightDeletions:t.syntaxHighlightDeletions,allowInlineDiffs:t.allowInlineDiffs,collapseUnchanged:t.collapseUnchanged?ys:void 0}},{equal:pt});this.mode=on$2(()=>this._options().mode);this.language=on$2(()=>this._options().language);this.changed=on$2(()=>ns(this._options()));Sn$1(()=>{let t=this._options();z(()=>{this.store(t),this.syncUrl(t)})})}patch(t){this._options.update(e=>l(l({},e),t))}reset(){this._options.set(Fe)}shareUrl(){let t=this.router.createUrlTree([],{relativeTo:this.route,queryParams:ya(this.options())}),e=this.location.prepareExternalUrl(this.router.serializeUrl(t));return new URL(e,this.document.location.origin).toString()}initialOptions(){let t=this.route.snapshot.queryParamMap,e=_a(Object.fromEntries(t.keys.map(o=>[o,t.get(o)])));if(e.found>0)return e.options;let i=this.readStored();return i?_a(i).options:Fe}readStored(){if(!this.isBrowser)return null;try{let t=JSON.parse(localStorage.getItem(_s)??`null`);return t!==null&&typeof t==`object`&&!Array.isArray(t)?t:null}catch{return null}}store(t){if(this.isBrowser)try{localStorage.setItem(_s,JSON.stringify(t))}catch{}}syncUrl(t){let e=ya(t),i=this.route.snapshot.queryParamMap;i.keys.length===Object.keys(e).length&&i.keys.every(a=>i.get(a)===e[a])||this.router.navigate([],{relativeTo:this.route,queryParams:e,replaceUrl:!0})}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵprov=k({token:n,factory:n.ɵfac})}};function fm(n,t){if(n&1){let e=LE();Yc$1(0,`app-editor-mode`,16),ti(`event`,function(o){Zd$1(e);let a=jE();return Yd$1(a.onEditorEvent(o))}),qp()}if(n&2){let e=jE();kE(`common`,e.state.common())(`editor`,e.state.editor())(`field`,e.editorForm.code)}}function hm(n,t){if(n&1){let e=LE();Yc$1(0,`app-split-diff-mode`,17),XE(`valueChange`,function(o){Zd$1(e);let a=jE();return ZM(a.diffValue,o)||(a.diffValue=o),Yd$1(o)}),ti(`event`,function(o){Zd$1(e);let a=jE();return Yd$1(a.onEditorEvent(o))}),qp()}if(n&2){let e=jE();kE(`common`,e.state.common())(`diff`,e.state.diff()),QE(`value`,e.diffValue)}}function gm(n,t){if(n&1){let e=LE();Yc$1(0,`app-unified-diff-mode`,18),XE(`originalChange`,function(o){Zd$1(e);let a=jE();return ZM(a.unifiedOriginal,o)||(a.unifiedOriginal=o),Yd$1(o)})(`valueChange`,function(o){Zd$1(e);let a=jE();return ZM(a.unifiedValue,o)||(a.unifiedValue=o),Yd$1(o)}),ti(`event`,function(o){Zd$1(e);let a=jE();return Yd$1(a.onEditorEvent(o))}),qp()}if(n&2){let e=jE();kE(`common`,e.state.common())(`unified`,e.state.unified()),QE(`original`,e.unifiedOriginal)(`value`,e.unifiedValue)}}var bm=new Set([`valueChange`,`originalChange`,`originalValueChange`,`modifiedValueChange`]);var _m=8e3;var xa=class n{constructor(){this.state=h(Hn);this.samples=h(jn);this.log=h(Bn);this.snackBar=h(pp);this.announcer=h(T1);this.clipboard=h(xo);this.codeEditorTheme=h(Ju);this.document=h(q);this.editorModel=Z({code:``});this.editorForm=Qo(this.editorModel,t=>{Cl(t.code,{when:()=>this.state.common().disabled}),wl(t.code,{when:()=>this.state.common().readonly})});this.diffValue=Z({original:``,modified:``});this.unifiedOriginal=Z(``);this.unifiedValue=Z(``);this.loadedDocuments=null;this.fullscreen=Z(!1);this.themeLoading=Z(!1);this.modeLabel=on$2(()=>va(St,this.state.mode()));this.model=on$2(()=>{switch(this.state.mode()){case`editor`:return this.editorModel().code;case`diff`:return JSON.stringify(this.diffValue(),null,2);case`unified-diff`:return JSON.stringify({original:this.unifiedOriginal(),value:this.unifiedValue()},null,2)}});this.modelLabel=on$2(()=>{switch(this.state.mode()){case`editor`:return`value: string`;case`diff`:return`value: { original, modified }`;case`unified-diff`:return`{ original, value }`}});this.themeName=on$2(()=>this.state.options().theme);let t=h(ps$1);t.setWide(!0),h(ue).onDestroy(()=>t.setWide(!1)),Sn$1(()=>{let e=this.state.language();z(()=>{this.loadSample(e)})}),Sn$1(()=>{let e=this.codeEditorTheme.theme(),i=this.themeName()||e;z(()=>{this.applyMergeStyles(typeof i==`string`?i:void 0,e===us$1)})})}patch(t){this.state.patch(t)}onMode(t){this.state.patch({mode:t}),this.announcer.announce(`${va(St,t)} mode`)}onLanguage(t){this.state.patch({language:t})}onTheme(t){this.state.patch({theme:t}),this.announcer.announce(`Theme: ${va(vp,t)}`)}onEditorEvent(t){bm.has(t.name)?this.log.logDebounced(t.name,t.detail,t.failed):this.log.log(t.name,t.detail,t.failed)}reset(){let t=this.state.language()===Fe.language;this.state.reset(),this.log.log(`reset`,`every option back to its default`),t&&this.loadedDocuments&&!ga(this.documents(),this.loadedDocuments)?this.replaceDocuments(this.loadedDocuments,`Options and sample reset`):this.notify(`Options reset`)}copyShareLink(){this.notify(this.clipboard.copy(this.state.shareUrl())?`Share link copied`:`Could not copy the link`)}copySnippet(){this.notify(this.clipboard.copy(gs(this.state.options()))?`Snippet copied`:`Could not copy the snippet`)}onModelCopied(t){this.notify(t?`Model copied`:`Could not copy the model`)}download(){let t=this.state.mode(),e=t===`editor`?this.editorModel().code:t===`diff`?this.diffValue().modified:this.unifiedValue(),i=Ii(this.state.language())?.extensions[0]??`txt`,o=URL.createObjectURL(new Blob([e],{type:`text/plain`})),a=this.document.createElement(`a`);a.href=o,a.download=`playground.${i}`,a.click(),URL.revokeObjectURL(o)}toggleFullscreen(){this.fullscreen.update(t=>!t)}exitFullscreen(){this.fullscreen.set(!1)}async loadSample(t){let e=await this.samples.load(t);if(!e)return;e.fallback&&this.log.log(`sample`,this.samples.error()??`No sample for ${t}`,!0);let i=this.loadedDocuments!==null&&!ga(this.documents(),this.loadedDocuments),o=hs(e.text);i?this.replaceDocuments(o,`Loaded the ${t} sample`):this.setDocuments(o),this.loadedDocuments=o}replaceDocuments(t,e){let i=this.documents();this.setDocuments(t),this.snackBar.open(e,`Undo`,{duration:_m}).onAction().subscribe(()=>{this.setDocuments(i),this.log.log(`undo`,`previous documents restored`)})}documents(){return{code:this.editorModel().code,diff:this.diffValue(),unifiedOriginal:this.unifiedOriginal(),unifiedValue:this.unifiedValue()}}setDocuments(t){this.editorModel.set({code:t.code}),this.diffValue.set(t.diff),this.unifiedOriginal.set(t.unifiedOriginal),this.unifiedValue.set(t.unifiedValue)}notify(t){this.snackBar.open(t,void 0,{duration:3e3})}async applyMergeStyles(t,e){this.themeLoading.set(!0);try{await yp(t,e)&&this.themeLoading.set(!1)}catch{this.themeLoading.set(!1),this.log.log(`theme`,`the theme bundle could not be loaded`,!0)}}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=Ne({type:n,selectors:[[`app-playground`]],hostBindings:function(e,i){e&1&&ti(`keydown.escape`,function(){return i.exitFullscreen()},vx)},features:[tw([Hn,jn,Bn])],decls:19,vars:21,consts:[[3,`displayTOC`],[`id`,`playground`],[1,`playground`],[1,`toolbar`,3,`modeChange`,`languageChange`,`themeChange`,`reset`,`copyLink`,`copySnippet`,`download`,`mode`,`language`,`theme`,`themeLoading`,`sampleLoading`],[`aria-label`,`Editor options`,1,`options`],[3,`patch`,`options`],[`aria-label`,`Editor`,1,`workspace`],[1,`editor-frame`],[1,`frame-bar`],[1,`frame-title`],[`mat-button`,``,`type`,`button`,3,`click`,`matTooltip`],[1,`frame-body`],[3,`common`,`editor`,`field`],[3,`common`,`diff`,`value`],[3,`common`,`unified`,`original`,`value`],[3,`clearLog`,`modelCopied`,`entries`,`model`,`modelLabel`,`config`],[3,`event`,`common`,`editor`,`field`],[3,`valueChange`,`event`,`common`,`diff`,`value`],[3,`originalChange`,`valueChange`,`event`,`common`,`unified`,`original`,`value`]],template:function(e,i){if(e&1&&(Yc$1(0,`app-scrollspy-nav-layout`,0)(1,`h1`,1),eh(2,`Playground`),qp(),Yc$1(3,`div`,2)(4,`app-playground-toolbar`,3),ti(`modeChange`,function(a){return i.onMode(a)})(`languageChange`,function(a){return i.onLanguage(a)})(`themeChange`,function(a){return i.onTheme(a)})(`reset`,function(){return i.reset()})(`copyLink`,function(){return i.copyShareLink()})(`copySnippet`,function(){return i.copySnippet()})(`download`,function(){return i.download()}),qp(),Yc$1(5,`aside`,4)(6,`app-options-panel`,5),ti(`patch`,function(a){return i.patch(a)}),qp()(),Yc$1(7,`section`,6)(8,`div`,7)(9,`div`,8)(10,`span`,9),eh(11),qp(),Yc$1(12,`button`,10),ti(`click`,function(){return i.toggleFullscreen()}),eh(13),qp()(),Yc$1(14,`div`,11),tr(15,fm,1,3,`app-editor-mode`,12)(16,hm,1,3,`app-split-diff-mode`,13)(17,gm,1,4,`app-unified-diff-mode`,14),qp()(),Yc$1(18,`app-inspector`,15),ti(`clearLog`,function(){return i.log.clear()})(`modelCopied`,function(a){return i.onModelCopied(a)}),qp()()()()),e&2){let o;kE(`displayTOC`,!1),An$1(4),kE(`mode`,i.state.mode())(`language`,i.state.language())(`theme`,i.state.options().theme)(`themeLoading`,i.themeLoading())(`sampleLoading`,i.samples.loading()),An$1(2),kE(`options`,i.state.options()),An$1(2),nt(`fullscreen`,i.fullscreen())(`mat-app-background`,i.fullscreen()),An$1(3),nh(``,i.modeLabel(),` · `,i.state.language()),An$1(),kE(`matTooltip`,i.fullscreen()?`Back to the page (Esc)`:`Fill the window (Esc to exit)`),er(`aria-pressed`,i.fullscreen()),An$1(),Is$1(` `,i.fullscreen()?`Exit fullscreen`:`Fullscreen`,` `),An$1(2),nr((o=i.state.mode())===`editor`?15:o===`diff`?16:o===`unified-diff`?17:-1),An$1(3),kE(`entries`,i.log.entries())(`model`,i.model())(`modelLabel`,i.modelLabel())(`config`,i.state.changed())}},dependencies:[nt$1,io,Zi,Fi,eo,oo,ji,bX,hX,ze],styles:[`.playground[_ngcontent-%COMP%]{display:grid;grid-template-areas:"toolbar" "options" "workspace";grid-template-columns:minmax(0,1fr);gap:1rem}@media(min-width:960px){.playground[_ngcontent-%COMP%]{grid-template-areas:"toolbar toolbar" "options workspace";grid-template-columns:minmax(16rem,20rem) minmax(0,1fr);align-items:start}}.toolbar[_ngcontent-%COMP%]{grid-area:toolbar}.options[_ngcontent-%COMP%]{grid-area:options;padding:.75rem;border:1px solid color-mix(in srgb,currentColor 15%,transparent);border-radius:4px;background-color:color-mix(in srgb,currentColor 4%,transparent)}@media(min-width:960px){.options[_ngcontent-%COMP%]{position:sticky;top:64px;max-height:calc(100vh - 80px);overflow:auto}}.workspace[_ngcontent-%COMP%]{grid-area:workspace;display:flex;flex-direction:column;gap:1rem;min-width:0;margin:0}.editor-frame[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid color-mix(in srgb,currentColor 15%,transparent);border-radius:4px}.editor-frame.fullscreen[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1000;border-radius:0}.editor-frame.fullscreen[_ngcontent-%COMP%]   .frame-body[_ngcontent-%COMP%]{flex:1 1 auto;height:auto;resize:none}.frame-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:.5rem;padding:.25rem .5rem .25rem .75rem;border-bottom:1px solid color-mix(in srgb,currentColor 15%,transparent);background-color:color-mix(in srgb,currentColor 4%,transparent)}.frame-title[_ngcontent-%COMP%]{font-size:.8125rem;overflow-wrap:anywhere}.frame-body[_ngcontent-%COMP%]{box-sizing:border-box;height:28rem;min-height:12rem;padding:.5rem;overflow:hidden;resize:vertical}`]})}};function va(n,t){return n.find(e=>e.value===t)?.viewValue??t}export{xa as default};