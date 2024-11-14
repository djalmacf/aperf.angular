import './polyfills.server.mjs';
import{$ as C,A as _e,B as ve,C as h,D as ye,E as d,F as O,G as X,H as Y,I as K,J,K as y,M as Ce,Q as Ve,S as De,U as be,V as x,W as m,X as Me,Y as Q,_ as Ae,a as ae,aa as Ee,b as le,ba as Fe,c as ue,d as ce,e as L,ea as we,f as W,g,h as _,i as $,j as v,k as de,ka as Se,l as he,m as fe,n as pe,o as f,p as q,q as p,r as l,s as z,t as N,u as A,v as me,w as Z,x as ge,y as o,z as a}from"./chunk-I33JYLDG.mjs";import{a as u,b as c}from"./chunk-5XUXGTUW.mjs";var Ge=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(l(z),l(q))}}static{this.\u0275dir=v({type:i})}}return i})(),tt=(()=>{class i extends Ge{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=pe(i)))(r||i)}})()}static{this.\u0275dir=v({type:i,features:[A]})}}return i})(),Te=new g("");var it={provide:Te,useExisting:L(()=>T),multi:!0};function nt(){let i=Q()?Q().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var rt=new g(""),T=(()=>{class i extends Ge{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!nt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(l(z),l(q),l(rt,8))}}static{this.\u0275dir=v({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&h("input",function(M){return r._handleInput(M.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(M){return r._compositionEnd(M.target.value)})},features:[J([it]),A]})}}return i})();var st=new g(""),ot=new g("");function je(i){return i!=null}function Be(i){return Ce(i)?le(i):i}function Ue(i){let e={};return i.forEach(t=>{e=t!=null?u(u({},e),t):e}),Object.keys(e).length===0?null:e}function He(i,e){return e.map(t=>t(i))}function at(i){return!i.validate}function Le(i){return i.map(e=>at(e)?e:t=>e.validate(t))}function lt(i){if(!i)return null;let e=i.filter(je);return e.length==0?null:function(t){return Ue(He(t,e))}}function We(i){return i!=null?lt(Le(i)):null}function ut(i){if(!i)return null;let e=i.filter(je);return e.length==0?null:function(t){let n=He(t,e).map(Be);return ce(n).pipe(ue(Ue))}}function $e(i){return i!=null?ut(Le(i)):null}function Ie(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function ct(i){return i._rawValidators}function dt(i){return i._rawAsyncValidators}function ee(i){return i?Array.isArray(i)?i:[i]:[]}function k(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ne(i,e){let t=ee(e);return ee(i).forEach(r=>{k(t,r)||t.push(r)}),t}function Oe(i,e){return ee(e).filter(t=>!k(i,t))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=We(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=$e(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},te=class extends R{get formDirective(){return null}get path(){return null}},I=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ie=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ht={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ii=c(u({},ht),{"[class.ng-submitted]":"isSubmitted"}),qe=(()=>{class i extends ie{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(l(I,2))}}static{this.\u0275dir=v({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&ge("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[A]})}}return i})();var E="VALID",P="INVALID",V="PENDING",F="DISABLED",b=class{},G=class extends b{constructor(e,t){super(),this.value=e,this.source=t}},w=class extends b{constructor(e,t){super(),this.pristine=e,this.source=t}},S=class extends b{constructor(e,t){super(),this.touched=e,this.source=t}},D=class extends b{constructor(e,t){super(),this.status=e,this.source=t}};function ft(i){return(j(i)?i.validators:i)||null}function pt(i){return Array.isArray(i)?We(i):i||null}function mt(i,e){return(j(e)?e.asyncValidators:i)||null}function gt(i){return Array.isArray(i)?$e(i):i||null}function j(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var ne=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=x(()=>this.statusReactive()),this.statusReactive=N(void 0),this._pristine=x(()=>this.pristineReactive()),this.pristineReactive=N(!0),this._touched=x(()=>this.touchedReactive()),this.touchedReactive=N(!1),this._events=new ae,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return m(this.statusReactive)}set status(e){m(()=>this.statusReactive.set(e))}get valid(){return this.status===E}get invalid(){return this.status===P}get pending(){return this.status==V}get disabled(){return this.status===F}get enabled(){return this.status!==F}get pristine(){return m(this.pristineReactive)}set pristine(e){m(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return m(this.touchedReactive)}set touched(e){m(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ne(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Oe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Oe(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(u({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new S(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new S(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(u({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new w(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new w(!0,n))}markAsPending(e={}){this.status=V;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new D(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(u({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(r=>{r.disable(c(u({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,n)),this._events.next(new D(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=E,this._forEachChild(n=>{n.enable(c(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===V)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,t)),this._events.next(new D(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(u({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Be(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new D(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new f,this.statusChanges=new f}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(P)?P:E}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new w(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new S(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){j(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=pt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=gt(this._rawAsyncValidators)}};var ze=new g("CallSetDisabledState",{providedIn:"root",factory:()=>se}),se="always";function _t(i,e){return[...e.path,i]}function vt(i,e,t=se){Ct(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Vt(i,e),bt(i,e),Dt(i,e),yt(i,e)}function xe(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function yt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function Ct(i,e){let t=ct(i);e.validator!==null?i.setValidators(Ie(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=dt(i);e.asyncValidator!==null?i.setAsyncValidators(Ie(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();xe(e._rawValidators,r),xe(e._rawAsyncValidators,r)}function Vt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ze(i,e)})}function Dt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ze(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ze(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function bt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Mt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function At(i){return Object.getPrototypeOf(i.constructor)===tt}function Et(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===T?t=s:At(s)?n=s:r=s}),r||n||t||null}function Pe(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function ke(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Ft=class extends ne{constructor(e=null,t,n){super(ft(t),mt(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),j(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ke(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Pe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Pe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ke(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var wt={provide:I,useExisting:L(()=>oe)},Re=Promise.resolve(),oe=(()=>{class i extends I{constructor(t,n,r,s,M,et){super(),this._changeDetectorRef=M,this.callSetDisabledState=et,this.control=new Ft,this._registered=!1,this.name="",this.update=new f,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Et(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Mt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){vt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Re.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&be(n);Re.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?_t(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(l(te,9),l(st,10),l(ot,10),l(Te,10),l(De,8),l(ze,8))}}static{this.\u0275dir=v({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[J([wt]),A,de]})}}return i})();var St=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=$({type:i})}static{this.\u0275inj=W({})}}return i})();var Xe=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:ze,useValue:t.callSetDisabledState??se}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=$({type:i})}static{this.\u0275inj=W({imports:[St]})}}return i})();var B=class i{usuario="";senha="";mensagem="";loginSucesso=new f;onLogin(){this.usuario==="admin"&&this.senha==="senha"?(localStorage.setItem("usuario",this.usuario),this.loginSucesso.emit()):this.mensagem="Usu\xE1rio ou senha incorretos!"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["app-login"]],outputs:{loginSucesso:"loginSucesso"},standalone:!0,features:[y],decls:9,vars:3,consts:[["placeholder","Usu\xE1rio",3,"ngModelChange","ngModel"],["type","password","placeholder","Senha",3,"ngModelChange","ngModel"],[3,"click"]],template:function(t,n){t&1&&(o(0,"div")(1,"h2"),d(2,"Login"),a(),o(3,"input",0),K("ngModelChange",function(s){return Y(n.usuario,s)||(n.usuario=s),s}),a(),o(4,"input",1),K("ngModelChange",function(s){return Y(n.senha,s)||(n.senha=s),s}),a(),o(5,"button",2),h("click",function(){return n.onLogin()}),d(6,"Entrar"),a(),o(7,"p"),d(8),a()()),t&2&&(p(3),X("ngModel",n.usuario),p(),X("ngModel",n.senha),p(4),O(n.mensagem))},dependencies:[C,Xe,T,qe,oe]})};var U=class i{fechar=new f;onFechar(){this.fechar.emit()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["app-modal-boas-vindas"]],outputs:{fechar:"fechar"},standalone:!0,features:[y],decls:7,vars:0,consts:[[1,"modal"],[3,"click"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"h3"),d(2,"Bem-vindo!"),a(),o(3,"p"),d(4,"Login realizado com sucesso!"),a(),o(5,"button",1),h("click",function(){return n.onFechar()}),d(6,"Fechar"),a()())},dependencies:[C]})};function Nt(i,e){i&1&&_e(0,"div",3)}function Ot(i,e){if(i&1){let t=ve();o(0,"app-modal-boas-vindas",4),h("fechar",function(){he(t);let r=ye();return fe(r.fecharModal())}),a()}}var H=class i{title="login-angular";mostrarModal=!1;mostrarBoasVindas(){this.mostrarModal=!0}fecharModal(){this.mostrarModal=!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["app-root"]],standalone:!0,features:[y],decls:5,vars:3,consts:[[3,"loginSucesso"],["class","modal-backdrop",4,"ngIf"],[3,"fechar",4,"ngIf"],[1,"modal-backdrop"],[3,"fechar"]],template:function(t,n){t&1&&(o(0,"h1"),d(1),a(),o(2,"app-login",0),h("loginSucesso",function(){return n.mostrarBoasVindas()}),a(),me(3,Nt,1,0,"div",1)(4,Ot,1,0,"app-modal-boas-vindas",2)),t&2&&(p(),O(n.title),p(2),Z("ngIf",n.mostrarModal),p(),Z("ngIf",n.mostrarModal))},dependencies:[C,Ae,B,U],styles:["h1[_ngcontent-%COMP%]{display:none}"]})};var Ke=[];var Je={providers:[Ve({eventCoalescing:!0}),Se(Ke),Fe()]};var xt={providers:[we()]},Qe=Me(Je,xt);var Pt=()=>Ee(H,Qe),Ri=Pt;export{Ri as a};