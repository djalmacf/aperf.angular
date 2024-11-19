import './polyfills.server.mjs';
import{$ as Me,A as X,B as c,C as N,D as ge,E as Y,F as K,G as J,H as x,I as O,K as _e,O as ve,Q as ye,S as Ce,T as P,U as g,V as Ve,W as Q,Y as De,Z as be,_ as Ae,a as le,b as ue,c as ce,ca as Ee,d as de,e as F,f as L,g as _,h as w,i as W,ia as Fe,j as m,k as he,l as $,m as I,n as q,o as h,p as a,q as z,r as S,s as v,t as fe,u as Z,v as pe,w as l,x as o,y as me,z as f}from"./chunk-HBMCHCLH.mjs";import{a as u,b as d}from"./chunk-5XUXGTUW.mjs";var Re=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(a(z),a(q))}}static{this.\u0275dir=m({type:i})}}return i})(),Ge=(()=>{class i extends Re{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=$(i)))(r||i)}})()}static{this.\u0275dir=m({type:i,features:[v]})}}return i})(),re=new _("");var Qe={provide:re,useExisting:F(()=>j),multi:!0};function et(){let i=Q()?Q().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var tt=new _(""),j=(()=>{class i extends Re{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!et())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(a(z),a(q),a(tt,8))}}static{this.\u0275dir=m({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&f("input",function(p){return r._handleInput(p.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(p){return r._compositionEnd(p.target.value)})},features:[x([Qe]),v]})}}return i})();var it=new _(""),nt=new _("");function Te(i){return i!=null}function je(i){return _e(i)?ue(i):i}function Be(i){let e={};return i.forEach(t=>{e=t!=null?u(u({},e),t):e}),Object.keys(e).length===0?null:e}function Ue(i,e){return e.map(t=>t(i))}function rt(i){return!i.validate}function He(i){return i.map(e=>rt(e)?e:t=>e.validate(t))}function st(i){if(!i)return null;let e=i.filter(Te);return e.length==0?null:function(t){return Be(Ue(t,e))}}function Le(i){return i!=null?st(He(i)):null}function ot(i){if(!i)return null;let e=i.filter(Te);return e.length==0?null:function(t){let n=Ue(t,e).map(je);return de(n).pipe(ce(Be))}}function We(i){return i!=null?ot(He(i)):null}function we(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function at(i){return i._rawValidators}function lt(i){return i._rawAsyncValidators}function ee(i){return i?Array.isArray(i)?i:[i]:[]}function R(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ie(i,e){let t=ee(e);return ee(i).forEach(r=>{R(t,r)||t.push(r)}),t}function Se(i,e){return ee(e).filter(t=>!R(i,t))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Le(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=We(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},te=class extends G{get formDirective(){return null}get path(){return null}},E=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ie=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ut={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ti=d(u({},ut),{"[class.ng-submitted]":"isSubmitted"}),$e=(()=>{class i extends ie{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(a(E,2))}}static{this.\u0275dir=m({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&pe("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[v]})}}return i})();var D="VALID",k="INVALID",y="PENDING",b="DISABLED",V=class{},T=class extends V{constructor(e,t){super(),this.value=e,this.source=t}},A=class extends V{constructor(e,t){super(),this.pristine=e,this.source=t}},M=class extends V{constructor(e,t){super(),this.touched=e,this.source=t}},C=class extends V{constructor(e,t){super(),this.status=e,this.source=t}};function ct(i){return(B(i)?i.validators:i)||null}function dt(i){return Array.isArray(i)?Le(i):i||null}function ht(i,e){return(B(e)?e.asyncValidators:i)||null}function ft(i){return Array.isArray(i)?We(i):i||null}function B(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var ne=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=P(()=>this.statusReactive()),this.statusReactive=S(void 0),this._pristine=P(()=>this.pristineReactive()),this.pristineReactive=S(!0),this._touched=P(()=>this.touchedReactive()),this.touchedReactive=S(!1),this._events=new le,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return g(this.statusReactive)}set status(e){g(()=>this.statusReactive.set(e))}get valid(){return this.status===D}get invalid(){return this.status===k}get pending(){return this.status==y}get disabled(){return this.status===b}get enabled(){return this.status!==b}get pristine(){return g(this.pristineReactive)}set pristine(e){g(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return g(this.touchedReactive)}set touched(e){g(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ie(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ie(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Se(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Se(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(d(u({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new M(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new M(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(d(u({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new A(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new A(!0,n))}markAsPending(e={}){this.status=y;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new C(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(d(u({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=b,this.errors=null,this._forEachChild(r=>{r.disable(d(u({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new T(this.value,n)),this._events.next(new C(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=D,this._forEachChild(n=>{n.enable(d(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===y)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new T(this.value,t)),this._events.next(new C(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(d(u({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=je(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new C(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new I,this.statusChanges=new I}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(k)?k:D}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new A(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new M(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){B(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=dt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ft(this._rawAsyncValidators)}};var qe=new _("CallSetDisabledState",{providedIn:"root",factory:()=>se}),se="always";function pt(i,e){return[...e.path,i]}function mt(i,e,t=se){_t(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),vt(i,e),Ct(i,e),yt(i,e),gt(i,e)}function Ne(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function gt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function _t(i,e){let t=at(i);e.validator!==null?i.setValidators(we(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=lt(i);e.asyncValidator!==null?i.setAsyncValidators(we(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Ne(e._rawValidators,r),Ne(e._rawAsyncValidators,r)}function vt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&ze(i,e)})}function yt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&ze(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function ze(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Ct(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Vt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Dt(i){return Object.getPrototypeOf(i.constructor)===Ge}function bt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===j?t=s:Dt(s)?n=s:r=s}),r||n||t||null}function xe(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Oe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var At=class extends ne{constructor(e=null,t,n){super(ct(t),ht(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Oe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){xe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){xe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Oe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Mt={provide:E,useExisting:F(()=>oe)},Pe=Promise.resolve(),oe=(()=>{class i extends E{constructor(t,n,r,s,p,Je){super(),this._changeDetectorRef=p,this.callSetDisabledState=Je,this.control=new At,this._registered=!1,this.name="",this.update=new I,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=bt(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Vt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){mt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Pe.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&Ce(n);Pe.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?pt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(a(te,9),a(it,10),a(nt,10),a(re,10),a(ye,8),a(qe,8))}}static{this.\u0275dir=m({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[x([Mt]),v,he]})}}return i})();var Et={provide:re,useExisting:F(()=>ae),multi:!0},ae=(()=>{class i extends Ge{writeValue(t){let n=t??"";this.setProperty("value",n)}registerOnChange(t){this.onChange=n=>{t(n==""?null:parseFloat(n))}}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=$(i)))(r||i)}})()}static{this.\u0275dir=m({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,r){n&1&&f("input",function(p){return r.onChange(p.target.value)})("blur",function(){return r.onTouched()})},features:[x([Et]),v]})}}return i})();var Ft=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=W({type:i})}static{this.\u0275inj=L({})}}return i})();var Ze=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:qe,useValue:t.callSetDisabledState??se}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=W({type:i})}static{this.\u0275inj=L({imports:[Ft]})}}return i})();function St(i,e){if(i&1&&(l(0,"p"),c(1),o()),i&2){let t=X();h(),ge("Resultado: ",t.resultado,"")}}function Nt(i,e){if(i&1&&(l(0,"p"),c(1),o()),i&2){let t=X();h(),N(t.mensagem)}}var U=class i{num1=null;num2=null;resultado=null;mensagem="";calcular(e){if(this.num1===null||this.num2===null){this.mensagem="Por favor, preencha os dois n\xFAmeros!";return}switch(this.mensagem="",e){case"soma":this.resultado=this.num1+this.num2;break;case"subtracao":this.resultado=this.num1-this.num2;break;case"multiplicacao":this.resultado=this.num1*this.num2;break;case"divisao":this.num2===0?(this.mensagem="Divis\xE3o por zero n\xE3o \xE9 permitida!",this.resultado=null):this.resultado=this.num1/this.num2;break}}limpar(){this.num1=null,this.num2=null,this.resultado=null,this.mensagem=""}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["app-calculadora"]],standalone:!0,features:[O],decls:18,vars:4,consts:[["type","number","placeholder","N\xFAmero 1",3,"ngModelChange","ngModel"],["type","number","placeholder","N\xFAmero 2",3,"ngModelChange","ngModel"],[3,"click"],[4,"ngIf"]],template:function(t,n){t&1&&(l(0,"div")(1,"h2"),c(2,"Calculadora Simples"),o(),l(3,"input",0),J("ngModelChange",function(s){return K(n.num1,s)||(n.num1=s),s}),o(),l(4,"input",1),J("ngModelChange",function(s){return K(n.num2,s)||(n.num2=s),s}),o(),l(5,"div")(6,"button",2),f("click",function(){return n.calcular("soma")}),c(7,"+"),o(),l(8,"button",2),f("click",function(){return n.calcular("subtracao")}),c(9,"-"),o(),l(10,"button",2),f("click",function(){return n.calcular("multiplicacao")}),c(11,"*"),o(),l(12,"button",2),f("click",function(){return n.calcular("divisao")}),c(13,"/"),o(),l(14,"button",2),f("click",function(){return n.limpar()}),c(15,"Limpar"),o()(),fe(16,St,2,1,"p",3)(17,Nt,2,1,"p",3),o()),t&2&&(h(3),Y("ngModel",n.num1),h(),Y("ngModel",n.num2),h(12),Z("ngIf",n.resultado!==null),h(),Z("ngIf",n.mensagem))},dependencies:[be,De,Ze,j,ae,$e,oe]})};var H=class i{title="Calculadora Simples";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["app-root"]],standalone:!0,features:[O],decls:3,vars:1,template:function(t,n){t&1&&(l(0,"h1"),c(1),o(),me(2,"app-calculadora")),t&2&&(h(),N(n.title))},dependencies:[U],styles:["h1[_ngcontent-%COMP%]{display:none}"]})};var Xe=[];var Ye={providers:[ve({eventCoalescing:!0}),Fe(Xe),Me()]};var xt={providers:[Ee()]},Ke=Ve(Ye,xt);var Ot=()=>Ae(H,Ke),Mi=Ot;export{Mi as a};