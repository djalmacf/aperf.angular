import './polyfills.server.mjs';
import{A as c,B,C as U,D as H,E as S,F as p,H as Fe,L as we,N as Se,P as de,Q as I,R as g,S as Ie,T as he,V as _,W as xe,X as Oe,_ as Ne,a as De,b as be,c as Me,d as Ae,e as T,ea as Pe,f as A,g as re,h as y,i as f,j as oe,k as d,l as se,m as ae,n as E,o as le,p as j,q as l,r as ue,s as F,t as m,u as Ee,v as ce,w as s,x as a,y as C,z as w}from"./chunk-MVMEV6UX.mjs";import{a as u,b as h}from"./chunk-5XUXGTUW.mjs";var L=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["app-header"]],standalone:!0,features:[p],decls:10,vars:0,consts:[[1,"header"],[1,"logo"],["src","img/logo2.png","alt","Logo da Advocacia"],[1,"nav-links"],["href","#sobre-nos"],["href","#servicos"],["href","#contato"]],template:function(t,i){t&1&&(s(0,"header",0)(1,"div",1),C(2,"img",2),a(),s(3,"nav",3)(4,"a",4),c(5,"Sobre N\xF3s"),a(),s(6,"a",5),c(7,"Servi\xE7os"),a(),s(8,"a",6),c(9,"Contato"),a()()())},dependencies:[_],styles:[".header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:15px 30px;background-color:#000;color:#fff}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50px}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;margin-left:20px;text-decoration:none;font-weight:700;transition:color .3s}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ffdd57}"]})};var $=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["app-carousel"]],standalone:!0,features:[p],decls:5,vars:0,consts:[[1,"carousel"],[1,"carousel-slide"],["src","https://www.promad.adv.br/blog/wp-content/uploads/2021/11/6-praticas-mais-valorizadas-em-um-escritorio-de-advocacia.jpg","alt","Imagem 1"],["src","https://blog.lfg.com.br/wp-content/uploads/2023/05/advocacia-civel-1.jpg","alt","Imagem 2"],["src","https://www.cora.com.br/blog/wp-content/uploads/2022/05/captar-clientes-na-advocacia.jpg","alt","Imagem 3"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"div",1),C(2,"img",2)(3,"img",3)(4,"img",4),a()())},dependencies:[_],styles:[".carousel[_ngcontent-%COMP%]{width:100%;overflow:hidden}.carousel-slide[_ngcontent-%COMP%]{display:flex;animation:_ngcontent-%COMP%_slide 15s infinite}.carousel-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:400px;size-adjust:center;flex-shrink:0}@keyframes _ngcontent-%COMP%_slide{0%{transform:translate(0)}33%{transform:translate(-100%)}66%{transform:translate(-200%)}to{transform:translate(0)}}"]})};var Le=(()=>{class n{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(i){return new(i||n)(l(ue),l(le))}}static{this.\u0275dir=d({type:n})}}return n})(),ct=(()=>{class n extends Le{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=ae(n)))(r||n)}})()}static{this.\u0275dir=d({type:n,features:[m]})}}return n})(),We=new y("");var dt={provide:We,useExisting:A(()=>Q),multi:!0};function ht(){let n=he()?he().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var ft=new y(""),Q=(()=>{class n extends Le{constructor(t,i,r){super(t,i),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ht())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(i){return new(i||n)(l(ue),l(le),l(ft,8))}}static{this.\u0275dir=d({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&w("input",function(v){return r._handleInput(v.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(v){return r._compositionEnd(v.target.value)})},features:[S([dt]),m]})}}return n})();function pt(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}var pe=new y(""),$e=new y("");function mt(n){return pt(n.value)?{required:!0}:null}function ke(n){return null}function qe(n){return n!=null}function ze(n){return Fe(n)?be(n):n}function Ze(n){let e={};return n.forEach(t=>{e=t!=null?u(u({},e),t):e}),Object.keys(e).length===0?null:e}function Xe(n,e){return e.map(t=>t(n))}function gt(n){return!n.validate}function Ye(n){return n.map(e=>gt(e)?e:t=>e.validate(t))}function _t(n){if(!n)return null;let e=n.filter(qe);return e.length==0?null:function(t){return Ze(Xe(t,e))}}function me(n){return n!=null?_t(Ye(n)):null}function vt(n){if(!n)return null;let e=n.filter(qe);return e.length==0?null:function(t){let i=Xe(t,e).map(ze);return Ae(i).pipe(Me(Ze))}}function ge(n){return n!=null?vt(Ye(n)):null}function Re(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function yt(n){return n._rawValidators}function Ct(n){return n._rawAsyncValidators}function fe(n){return n?Array.isArray(n)?n:[n]:[]}function z(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ge(n,e){let t=fe(e);return fe(n).forEach(r=>{z(t,r)||t.push(r)}),t}function Te(n,e){return fe(e).filter(t=>!z(n,t))}var Z=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=me(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ge(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},b=class extends Z{get formDirective(){return null}get path(){return null}},G=class extends Z{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},X=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Vt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},mn=h(u({},Vt),{"[class.ng-submitted]":"isSubmitted"}),Ke=(()=>{class n extends X{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||n)(l(G,2))}}static{this.\u0275dir=d({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ce("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[m]})}}return n})(),Je=(()=>{class n extends X{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||n)(l(b,10))}}static{this.\u0275dir=d({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&ce("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[m]})}}return n})();var O="VALID",q="INVALID",V="PENDING",N="DISABLED",M=class{},Y=class extends M{constructor(e,t){super(),this.value=e,this.source=t}},k=class extends M{constructor(e,t){super(),this.pristine=e,this.source=t}},R=class extends M{constructor(e,t){super(),this.touched=e,this.source=t}},D=class extends M{constructor(e,t){super(),this.status=e,this.source=t}};function Qe(n){return(ee(n)?n.validators:n)||null}function Dt(n){return Array.isArray(n)?me(n):n||null}function et(n,e){return(ee(e)?e.asyncValidators:n)||null}function bt(n){return Array.isArray(n)?ge(n):n||null}function ee(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Mt(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new T(1e3,"");if(!i[t])throw new T(1001,"")}function At(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new T(1002,"")})}var K=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=I(()=>this.statusReactive()),this.statusReactive=F(void 0),this._pristine=I(()=>this.pristineReactive()),this.pristineReactive=F(!0),this._touched=I(()=>this.touchedReactive()),this.touchedReactive=F(!1),this._events=new De,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return g(this.statusReactive)}set status(e){g(()=>this.statusReactive.set(e))}get valid(){return this.status===O}get invalid(){return this.status===q}get pending(){return this.status==V}get disabled(){return this.status===N}get enabled(){return this.status!==N}get pristine(){return g(this.pristineReactive)}set pristine(e){g(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return g(this.touchedReactive)}set touched(e){g(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ge(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Te(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Te(e,this._rawAsyncValidators))}hasValidator(e){return z(this._rawValidators,e)}hasAsyncValidator(e){return z(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(h(u({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new R(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new R(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(h(u({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new k(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new k(!0,i))}markAsPending(e={}){this.status=V;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new D(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(h(u({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=N,this.errors=null,this._forEachChild(r=>{r.disable(h(u({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Y(this.value,i)),this._events.next(new D(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(i=>{i.enable(h(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(h(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===V)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Y(this.value,t)),this._events.next(new D(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(h(u({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=ze(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new D(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(q)?q:O}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new k(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new R(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ee(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Dt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=bt(this._rawAsyncValidators)}},J=class extends K{constructor(e,t,i){super(Qe(t),et(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){At(this,!0,e),Object.keys(e).forEach(i=>{Mt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var _e=new y("CallSetDisabledState",{providedIn:"root",factory:()=>ve}),ve="always";function Et(n,e){return[...e.path,n]}function tt(n,e,t=ve){nt(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),wt(n,e),It(n,e),St(n,e),Ft(n,e)}function je(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Ft(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function nt(n,e){let t=yt(n);e.validator!==null?n.setValidators(Re(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=Ct(n);e.asyncValidator!==null?n.setAsyncValidators(Re(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();je(e._rawValidators,r),je(e._rawAsyncValidators,r)}function wt(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&it(n,e)})}function St(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&it(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function it(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function It(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function xt(n,e){n==null,nt(n,e)}function Ot(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Nt(n){return Object.getPrototypeOf(n.constructor)===ct}function Pt(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function kt(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===Q?t=o:Nt(o)?i=o:r=o}),r||i||t||null}var Rt={provide:b,useExisting:A(()=>ye)},P=Promise.resolve(),ye=(()=>{class n extends b{get submitted(){return g(this.submittedReactive)}constructor(t,i,r){super(),this.callSetDisabledState=r,this._submitted=I(()=>this.submittedReactive()),this.submittedReactive=F(!1),this._directives=new Set,this.ngSubmit=new E,this.form=new J({},me(t),ge(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){P.then(()=>{let i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),tt(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){P.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){P.then(()=>{let i=this._findContainer(t.path),r=new J({});xt(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){P.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){P.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Pt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(i){return new(i||n)(l(pe,10),l($e,10),l(_e,8))}}static{this.\u0275dir=d({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&w("submit",function(v){return r.onSubmit(v)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[S([Rt]),m]})}}return n})();function Be(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Ue(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Gt=class extends K{constructor(e=null,t,i){super(Qe(t),et(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ee(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ue(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Be(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Be(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Tt={provide:G,useExisting:A(()=>Ce)},He=Promise.resolve(),Ce=(()=>{class n extends G{constructor(t,i,r,o,v,ut){super(),this._changeDetectorRef=v,this.callSetDisabledState=ut,this.control=new Gt,this._registered=!1,this.name="",this.update=new E,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=kt(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ot(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){tt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){He.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&de(i);He.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Et(t,this._parent):[t]}static{this.\u0275fac=function(i){return new(i||n)(l(b,9),l(pe,10),l($e,10),l(We,10),l(Se,8),l(_e,8))}}static{this.\u0275dir=d({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[S([Tt]),m,se]})}}return n})(),rt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=d({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return n})();var jt=(()=>{class n{constructor(){this._validator=ke}ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):ke,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=d({type:n,features:[se]})}}return n})();var Bt={provide:pe,useExisting:A(()=>Ve),multi:!0};var Ve=(()=>{class n extends jt{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=de,this.createValidator=t=>mt}enabled(t){return t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=ae(n)))(r||n)}})()}static{this.\u0275dir=d({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&Ee("required",r._enabled?"":null)},inputs:{required:"required"},features:[S([Bt]),m]})}}return n})();var Ut=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=oe({type:n})}static{this.\u0275inj=re({})}}return n})();var ot=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:_e,useValue:t.callSetDisabledState??ve}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=oe({type:n})}static{this.\u0275inj=re({imports:[Ut]})}}return n})();var te=class n{name="";email="";message="";onSubmit(){console.log("Formul\xE1rio enviado:",this.name,this.email,this.message)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["app-contact-form"]],standalone:!0,features:[p],decls:12,vars:3,consts:[[1,"contact-form",3,"ngSubmit"],["for","name"],["type","text","id","name","name","name","required","",3,"ngModelChange","ngModel"],["for","email"],["type","email","id","email","name","email","required","",3,"ngModelChange","ngModel"],["for","message"],["id","message","name","message","required","",3,"ngModelChange","ngModel"],["type","submit"]],template:function(t,i){t&1&&(s(0,"form",0),w("ngSubmit",function(){return i.onSubmit()}),s(1,"label",1),c(2,"Nome:"),a(),s(3,"input",2),H("ngModelChange",function(o){return U(i.name,o)||(i.name=o),o}),a(),s(4,"label",3),c(5,"Email:"),a(),s(6,"input",4),H("ngModelChange",function(o){return U(i.email,o)||(i.email=o),o}),a(),s(7,"label",5),c(8,"Mensagem:"),a(),s(9,"textarea",6),H("ngModelChange",function(o){return U(i.message,o)||(i.message=o),o}),a(),s(10,"button",7),c(11,"Enviar"),a()()),t&2&&(j(3),B("ngModel",i.name),j(3),B("ngModel",i.email),j(3),B("ngModel",i.message))},dependencies:[_,ot,rt,Q,Ke,Je,Ve,Ce,ye],styles:[".contact-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px;max-width:500px;margin:0 auto}.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700}.contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:10px;border:1px solid #ccc;border-radius:5px;font-size:1rem}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 15px;background-color:#333;color:#fff;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background-color .3s}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#444}"]})};var ne=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["app-about-us"]],standalone:!0,features:[p],decls:5,vars:0,consts:[[1,"about-us"]],template:function(t,i){t&1&&(s(0,"section",0)(1,"h2"),c(2,"Sobre N\xF3s"),a(),s(3,"p"),c(4,"Com mais de 20 anos de experi\xEAncia, nossa advocacia est\xE1 comprometida em oferecer solu\xE7\xF5es jur\xEDdicas eficazes e personalizadas para nossos clientes. Nosso objetivo \xE9 fornecer suporte jur\xEDdico com excel\xEAncia e \xE9tica, protegendo os interesses e os direitos de nossos clientes."),a()())},dependencies:[_],styles:[".about-us[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;padding:30px;text-align:center}.about-us[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;color:#333;margin-bottom:20px}.about-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;color:#555;line-height:1.6}"]})};var ie=class n{title="advocacia";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["app-root"]],standalone:!0,features:[p],decls:4,vars:0,template:function(t,i){t&1&&C(0,"app-header")(1,"app-carousel")(2,"app-about-us")(3,"app-contact-form")},dependencies:[L,$,te,ne]})};var st=[];var at={providers:[we({eventCoalescing:!0}),Pe(st),Oe()]};var Lt={providers:[Ne()]},lt=Ie(at,Lt);var Wt=()=>xe(ie,lt),Ln=Wt;export{Ln as a};
