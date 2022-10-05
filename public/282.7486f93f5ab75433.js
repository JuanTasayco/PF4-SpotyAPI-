"use strict";(self.webpackChunkFM3_SpotyApp=self.webpackChunkFM3_SpotyApp||[]).push([[282],{6282:(sr,ut,l)=>{l.r(ut),l.d(ut,{SpotifyModule:()=>or});var p=l(6895),f=l(7891),r=l(8256);let be=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[p.ez,f.Bz]}),e})();var H=l(3900);function ct(e,n,t,o,i,s,a){try{var u=e[s](a),h=u.value}catch(v){return void t(v)}u.done?n(h):Promise.resolve(h).then(o,i)}function A(e){return function(){var n=this,t=arguments;return new Promise(function(o,i){var s=e.apply(n,t);function a(h){ct(s,o,i,a,u,"next",h)}function u(h){ct(s,o,i,a,u,"throw",h)}a(void 0)})}}var dt=l(529),Me=l(6805),De=l(2961),M=l(4004),Oe=l(2340);let R=(()=>{class e{constructor(t){this.http=t,this.urlSpotify="https://api.spotify.com/v1",this.tokenSpotify=Oe.N.tokenSpotify,this.getToken()}getToken(){var t=this;return A(function*(){const s=`${t.tokenSpotify}/dca770d7a8c04eedbfcb8381b4c4e76a/23ecc99b63c246dfbdeb5f0e21dd0e54`;return yield function Fe(e,n){const t="object"==typeof n;return new Promise((o,i)=>{const s=new De.Hp({next:a=>{o(a),s.unsubscribe()},error:i,complete:()=>{t?o(n.defaultValue):i(new Me.K)}});e.subscribe(s)})}(t.http.get(`${s}`).pipe((0,M.U)(a=>a.access_token)))})()}getQuery(t){var o=this;return A(function*(){const i=yield o.getToken(),s=(new dt.WM).set("Authorization",`Bearer ${i}`);return o.http.get(`${o.urlSpotify}/${t}`,{headers:s})})()}getNewRelease(){var t=this;return A(function*(){return(yield t.getQuery("browse/new-releases")).pipe((0,M.U)(i=>i.albums.items))})()}searchArtist(t){var o=this;return A(function*(){return(yield o.getQuery(`search?q=${t}&type=artist&limit=15`)).pipe((0,M.U)(s=>s.artists.items))})()}getArtistByID(t){var o=this;return A(function*(){return yield o.getQuery(`artists/${t}`)})()}getTopTracks(t){var o=this;return A(function*(){return(yield o.getQuery(`artists/${t}/top-tracks?country=ES`)).pipe((0,M.U)(s=>s.tracks))})()}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(dt.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),j=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-spinner"]],decls:4,vars:0,consts:[[1,"Spinner","d-flex","justify-content-center"],["role","status",1,"Spinner-item","spinner-border","text-success"],[1,"Spinner-msg","visually-hidden"]],template:function(t,o){1&t&&(r.TgZ(0,"div",0)(1,"div",1)(2,"span",2),r._uU(3,"Loading..."),r.qZA()()())},styles:[".Spinner[_ngcontent-%COMP%]{margin-top:10rem}.Spinner-item[_ngcontent-%COMP%]{width:15rem;height:15rem}"]}),e})(),ht=(()=>{class e{transform(t){return t&&t||"assets/img/noimage.png"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r.Yjl({name:"img",type:e,pure:!0}),e})();var we=l(1481);let Ee=(()=>{class e{constructor(t){this.domSanitizer=t}transform(t,o){return this.domSanitizer.bypassSecurityTrustResourceUrl(o+t)}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(we.H7,16))},e.\u0275pipe=r.Yjl({name:"domseguro",type:e,pure:!0}),e})();function Ne(e,n){1&e&&r._UZ(0,"app-spinner")}function Se(e,n){if(1&e&&(r.TgZ(0,"tbody")(1,"tr")(2,"td"),r._UZ(3,"img",16),r.ALo(4,"img"),r.qZA(),r.TgZ(5,"td"),r._uU(6),r.qZA(),r.TgZ(7,"td"),r._uU(8),r.qZA(),r.TgZ(9,"td"),r._UZ(10,"iframe",17),r.ALo(11,"domseguro"),r.qZA()()()),2&e){const t=n.$implicit;r.xp6(3),r.Q6J("src",r.lcZ(4,4,t.album.images[0].url),r.LSH),r.xp6(3),r.Oqu(t.album.name),r.xp6(2),r.Oqu(t.name),r.xp6(2),r.Q6J("src",r.xi3(11,6,t.id,"https://open.spotify.com/embed/track/"),r.uOi)}}function xe(e,n){if(1&e&&(r.ynx(0),r.TgZ(1,"main",1)(2,"section",2)(3,"div",3),r._UZ(4,"img",4),r.ALo(5,"img"),r.qZA(),r.TgZ(6,"div",5)(7,"h3",6),r._uU(8),r.qZA(),r.TgZ(9,"a",7),r._uU(10,"Ir a la p\xe1gina del artista"),r.qZA(),r.TgZ(11,"div",8)(12,"button",9),r._uU(13," Regresar "),r.qZA()()()(),r.TgZ(14,"section",10)(15,"div",11)(16,"table",12)(17,"thead",13)(18,"tr",14)(19,"th"),r._uU(20,"Foto"),r.qZA(),r.TgZ(21,"th"),r._uU(22,"Album"),r.qZA(),r.TgZ(23,"th"),r._uU(24,"Canci\xf3n"),r.qZA(),r.TgZ(25,"th"),r._uU(26,"Vista Previa"),r.qZA()()(),r.YNc(27,Se,12,9,"tbody",15),r.qZA()()()(),r.BQk()),2&e){const t=r.oxw();r.xp6(4),r.Q6J("src",r.lcZ(5,4,t.artista.images[0].url),r.LSH),r.xp6(4),r.Oqu(t.artista.name),r.xp6(1),r.Q6J("href",t.artista.external_urls.spotify,r.LSH),r.xp6(18),r.Q6J("ngForOf",t.tracks)}}let Ge=(()=>{class e{constructor(t,o){this.spotiService=t,this.route=o,this.SpinnerIsActive=!1}ngOnInit(){this.SpinnerIsActive=!0,this.route.params.pipe((0,H.w)(({id:t})=>this.spotiService.getArtistByID(t))).subscribe(t=>{t.subscribe(o=>{this.artista=o,this.SpinnerIsActive=!1})}),this.route.params.pipe((0,H.w)(({id:t})=>this.spotiService.getTopTracks(t))).subscribe(t=>{t.subscribe(o=>{this.tracks=o,this.SpinnerIsActive=!1})})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(R),r.Y36(f.gz))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-artista"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"Artists","container","mt-5"],[1,"Artists-section","Artists-section--header","row","d-flex","flex-wrap"],[1,"Artists-col","col","col-md-5","d-flex","justify-content-center"],["alt","",1,"Artists-img","Artists-img--header","img-thumbnail",3,"src"],[1,"Artists-col","Artists-col--description","col-md-7","text-center","text-md-start"],[1,"Artists-h3","display-3","fw-bold"],["target","_blank",1,"text-warning","text-decoration-none","fs-5",3,"href"],[1,"pt-3"],["routerLink","/spotify/buscar",1,"btn","btn-success","mt-1"],[1,"Artists-section","Artists-section--table","Table","row","mt-5"],[1,"Artists-col","col","overflow-auto","py-5"],[1,"Artists-table","table","text-light"],[1,""],[1,"fs-5"],[4,"ngFor","ngForOf"],["alt","",1,"Artists-img","Artists-img--table","rounded-2",3,"src"],["width","300","height","80","frameborder","0","allowtransparency","true","allow","encrypted-media",3,"src"]],template:function(t,o){1&t&&(r.YNc(0,Ne,1,0,"app-spinner",0),r.YNc(1,xe,28,6,"ng-container",0)),2&t&&(r.Q6J("ngIf",o.SpinnerIsActive),r.xp6(1),r.Q6J("ngIf",o.artista))},dependencies:[p.sg,p.O5,f.rH,j,ht,Ee],encapsulation:2}),e})();var Be=l(7579),Te=l(2076),Ie=l(9751),ke=l(4742),Pe=l(8421),Ue=l(7669),He=l(5403),Re=l(3268),je=l(1810);const c=new r.OlP("NgValidators"),_=new r.OlP("NgAsyncValidators");function Mt(e){return null!=e}function Dt(e){return(0,r.QGY)(e)?(0,Te.D)(e):e}function Ft(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function Ot(e,n){return n.map(t=>t(e))}function wt(e){return e.map(n=>function Je(e){return!e.validate}(n)?n:t=>n.validate(t))}function L(e){return null!=e?function Et(e){if(!e)return null;const n=e.filter(Mt);return 0==n.length?null:function(t){return Ft(Ot(t,n))}}(wt(e)):null}function Z(e){return null!=e?function Nt(e){if(!e)return null;const n=e.filter(Mt);return 0==n.length?null:function(t){return function qe(...e){const n=(0,Ue.jO)(e),{args:t,keys:o}=(0,ke.D)(e),i=new Ie.y(s=>{const{length:a}=t;if(!a)return void s.complete();const u=new Array(a);let h=a,v=a;for(let U=0;U<a;U++){let lt=!1;(0,Pe.Xf)(t[U]).subscribe((0,He.x)(s,ir=>{lt||(lt=!0,v--),u[U]=ir},()=>h--,void 0,()=>{(!h||!lt)&&(v||s.next(o?(0,je.n)(o,u):u),s.complete())}))}});return n?i.pipe((0,Re.Z)(n)):i}(Ot(t,n).map(Dt)).pipe((0,M.U)(Ft))}}(wt(e)):null}function St(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Y(e){return e?Array.isArray(e)?e:[e]:[]}function N(e,n){return Array.isArray(e)?e.includes(n):e===n}function Bt(e,n){const t=Y(n);return Y(e).forEach(i=>{N(t,i)||t.push(i)}),t}function Tt(e,n){return Y(n).filter(t=>!N(e,t))}class d extends class It{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=L(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Z(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}{get formDirective(){return null}get path(){return null}}let Pt=(()=>{class e extends class kt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}{constructor(t){super(t)}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(d,10))},e.\u0275dir=r.lG2({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,o){2&t&&r.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[r.qOj]}),e})();const D="VALID",x="INVALID",b="PENDING",F="DISABLED";function Ht(e){return Array.isArray(e)?L(e):e||null}function Rt(e){return Array.isArray(e)?Z(e):e||null}function G(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class X extends class Lt{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=n,this._rawAsyncValidators=t,this._composedValidatorFn=Ht(this._rawValidators),this._composedAsyncValidatorFn=Rt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===x}get pending(){return this.status==b}get disabled(){return this.status===F}get enabled(){return this.status!==F}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._rawValidators=n,this._composedValidatorFn=Ht(n)}setAsyncValidators(n){this._rawAsyncValidators=n,this._composedAsyncValidatorFn=Rt(n)}addValidators(n){this.setValidators(Bt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Bt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Tt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Tt(n,this._rawAsyncValidators))}hasValidator(n){return N(this._rawValidators,n)}hasAsyncValidator(n){return N(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=b,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=F,this.errors=null,this._forEachChild(o=>{o.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=D,this._forEachChild(o=>{o.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===b)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator=!0;const t=Dt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(o=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(o,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((o,i)=>o&&o._find(i),this)}getError(n,t){const o=t?this.get(t):this;return o&&o.errors?o.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(x)?x:D}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){G(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}}{constructor(n,t,o){super(function J(e){return(G(e)?e.validators:e)||null}(t),function Q(e,n){return(G(n)?n.asyncValidators:e)||null}(o,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,o={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,o={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){(function qt(e,n,t){e._forEachChild((o,i)=>{if(void 0===t[i])throw new r.vHH(1002,"")})})(this,0,n),Object.keys(n).forEach(o=>{(function jt(e,n,t){const o=e.controls;if(!(n?Object.keys(o):o).length)throw new r.vHH(1e3,"");if(!o[t])throw new r.vHH(1001,"")})(this,!0,o),this.controls[o].setValue(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(o=>{const i=this.controls[o];i&&i.patchValue(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((o,i)=>{o.reset(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,o)=>(n[o]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,o)=>!!o._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const o=this.controls[t];o&&n(o,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,o]of Object.entries(this.controls))if(this.contains(t)&&n(o))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,o,i)=>((o.enabled||this.disabled)&&(t[i]=o.value),t))}_reduceChildren(n,t){let o=n;return this._forEachChild((i,s)=>{o=t(o,i,s)}),o}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}function I(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function K(e,n){const t=function xt(e){return e._rawValidators}(e);null!==n.validator?e.setValidators(St(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const o=function Gt(e){return e._rawAsyncValidators}(e);null!==n.asyncValidator?e.setAsyncValidators(St(o,n.asyncValidator)):"function"==typeof o&&e.setAsyncValidators([o]);const i=()=>e.updateValueAndValidity();I(n._rawValidators,i),I(n._rawAsyncValidators,i)}function Zt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}const fn={provide:d,useExisting:(0,r.Gpc)(()=>P)},w=(()=>Promise.resolve())();let P=(()=>{class e extends d{constructor(t,o){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new r.vpe,this.form=new X({},L(t),Z(o))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){w.then(()=>{const o=this._findContainer(t.path);t.control=o.registerControl(t.name,t.control),function O(e,n){K(e,n),n.valueAccessor.writeValue(e.value),e.disabled&&n.valueAccessor.setDisabledState?.(!0),function an(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Zt(e,n)})}(e,n),function un(e,n){const t=(o,i)=>{n.valueAccessor.writeValue(o),i&&n.viewToModelUpdate(o)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function ln(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Zt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function sn(e,n){if(n.valueAccessor.setDisabledState){const t=o=>{n.valueAccessor.setDisabledState(o)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){w.then(()=>{const o=this._findContainer(t.path);o&&o.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){w.then(()=>{const o=this._findContainer(t.path),i=new X({});(function Yt(e,n){K(e,n)})(i,t),o.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){w.then(()=>{const o=this._findContainer(t.path);o&&o.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,o){w.then(()=>{this.form.get(t.path).setValue(o)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,function zt(e,n){e._syncPendingControls(),n.forEach(t=>{const o=t.control;"submit"===o.updateOn&&o._pendingChange&&(t.viewToModelUpdate(o._pendingValue),o._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c,10),r.Y36(_,10))},e.\u0275dir=r.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,o){1&t&&r.NdJ("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([fn]),r.qOj]}),e})(),ne=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),e})(),oe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({}),e})(),Rn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[oe]}),e})(),jn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[Rn]}),e})();function Ln(e,n){if(1&e&&(r.TgZ(0,"button",10),r._uU(1),r.ALo(2,"titlecase"),r.qZA()),2&e){const t=n.$implicit;r.xp6(1),r.hij(" ",r.lcZ(2,1,t.name),"")}}const Zn=function(e){return["/spotify/artista/",e]};function Yn(e,n){if(1&e&&(r.TgZ(0,"div",3)(1,"div",4),r._UZ(2,"img",5),r.ALo(3,"img"),r.TgZ(4,"div",6)(5,"div",7)(6,"button",8),r._uU(7),r.ALo(8,"titlecase"),r.qZA()(),r.TgZ(9,"div",7),r.YNc(10,Ln,3,3,"button",9),r.qZA()()()()),2&e){const t=n.$implicit,o=r.oxw();r.xp6(1),r.Q6J("routerLink",r.VKq(8,Zn,o.obtenerTipo(t))),r.xp6(1),r.Q6J("src",r.lcZ(3,4,null==t.images[0]?null:t.images[0].url),r.LSH),r.xp6(5),r.Oqu(r.lcZ(8,6,t.name)),r.xp6(3),r.Q6J("ngForOf",t.artists)}}let Ae=(()=>{class e{constructor(){this.contenidos=[]}ngOnInit(){}obtenerTipo(t){return"artist"===t.type?t.id:t.artists[0].id}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-cards"]],inputs:{contenidos:"contenidos"},decls:3,vars:1,consts:[[1,"Card","container","p-5"],[1,"Card-row","row"],["class","Card-col col-md-4 mb-4 shadow-lg",4,"ngFor","ngForOf"],[1,"Card-col","col-md-4","mb-4","shadow-lg"],[1,"Card-body","card",3,"routerLink"],["alt","",1,"Card-img","img-fluid","rounded-3",3,"src"],[1,"Card-overlay","card-body"],[1,"Card-content","card-title"],[1,"Card-button","btn","btn-outline-light"],["class","btn btn-success",4,"ngFor","ngForOf"],[1,"btn","btn-success"]],template:function(t,o){1&t&&(r.TgZ(0,"div",0)(1,"div",1),r.YNc(2,Yn,11,10,"div",2),r.qZA()()),2&t&&(r.xp6(2),r.Q6J("ngForOf",o.contenidos))},dependencies:[p.sg,f.rH,p.rS,ht],encapsulation:2}),e})();const $n=["valoresInput"];function zn(e,n){1&e&&r._UZ(0,"app-spinner")}function Wn(e,n){if(1&e&&(r.ynx(0),r._UZ(1,"app-cards",7),r.BQk()),2&e){const t=r.oxw();r.xp6(1),r.Q6J("contenidos",t.resultados)}}let Jn=(()=>{class e{constructor(t){this.spotiService=t,this.debounce=new Be.x,this.resultados=[],this.SpinnerIsActive=!1}ngOnInit(){this.resultados=JSON.parse(localStorage.getItem("keySearch"))||[],this.debounce.pipe((0,H.w)(t=>this.spotiService.searchArtist(t))).subscribe(t=>{t.subscribe(o=>{this.resultados=o,localStorage.setItem("keySearch",JSON.stringify(this.resultados)),this.SpinnerIsActive=!1})})}obtenerBusqueda(t){const o=t.target.value;o.length>0&&(this.SpinnerIsActive=!0,this.debounce.next(o))}presionarEnter(){this.valorInput.nativeElement.value=""}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(R))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-buscar"]],viewQuery:function(t,o){if(1&t&&r.Gf($n,5),2&t){let i;r.iGM(i=r.CRH())&&(o.valorInput=i.first)}},decls:8,vars:2,consts:[[1,"container"],[1,"row","p-2"],[1,"col-12"],[3,"ngSubmit"],["type","text","placeholder","Busca tu artista favorito..",1,"form-control","bg-dark","rounded-5","px-4",3,"input"],["valoresInput",""],[4,"ngIf"],[3,"contenidos"]],template:function(t,o){1&t&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3),r.NdJ("ngSubmit",function(){return o.presionarEnter()}),r.TgZ(4,"input",4,5),r.NdJ("input",function(s){return o.obtenerBusqueda(s)}),r.qZA()()()()(),r.YNc(6,zn,1,0,"app-spinner",6),r.YNc(7,Wn,2,1,"ng-container",6)),2&t&&(r.xp6(6),r.Q6J("ngIf",o.SpinnerIsActive),r.xp6(1),r.Q6J("ngIf",o.resultados.length>0))},dependencies:[p.O5,ne,Pt,P,Ae,j],encapsulation:2}),e})();const Qn=function(){return{exact:!0}};function Xn(e,n){if(1&e&&(r.TgZ(0,"li",10)(1,"a",11),r._uU(2),r.qZA()()),2&e){const t=n.$implicit;r.xp6(1),r.Q6J("routerLink",t.ubicacion)("routerLinkActiveOptions",r.DdM(3,Qn)),r.xp6(1),r.Oqu(t.nombre)}}let Kn=(()=>{class e{constructor(){this.rutas=[{nombre:"Home",ubicacion:"/spotify/principal"},{nombre:"Buscar",ubicacion:"/spotify/buscar"}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-navbar"]],decls:12,vars:1,consts:[[1,"Nav","navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"Nav-container","container-fluid"],["routerLink","/spotify",1,"Nav-a","navbar-brand","gap-1"],["src","assets/img/banner-ico.png","alt","spotyimg",1,"Nav-img"],[1,"my-auto"],["type","button","data-bs-toggle","collapse","data-bs-target","#spotyNav",1,"Nav-button","navbar-toggler"],[1,"Nav-span","navbar-toggler-icon"],["id","spotyNav",1,"Nav-collapse","collapse","navbar-collapse"],[1,"Nav-ul","navbar-nav","d-flex","align-items-center"],["class","Nav-li nav-item",4,"ngFor","ngForOf"],[1,"Nav-li","nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLink","routerLinkActiveOptions"]],template:function(t,o){1&t&&(r.TgZ(0,"header")(1,"nav",0)(2,"div",1)(3,"a",2),r._UZ(4,"img",3),r.TgZ(5,"h5",4),r._uU(6,"Spotify"),r.qZA()(),r.TgZ(7,"button",5),r._UZ(8,"span",6),r.qZA(),r.TgZ(9,"div",7)(10,"ul",8),r.YNc(11,Xn,3,4,"li",9),r.qZA()()()()()),2&t&&(r.xp6(11),r.Q6J("ngForOf",o.rutas))},dependencies:[p.sg,f.yS,f.Od],encapsulation:2}),e})();function er(e,n){1&e&&r._UZ(0,"app-spinner")}const nr=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-home"]],decls:2,vars:0,template:function(t,o){1&t&&r._UZ(0,"app-navbar")(1,"router-outlet")},dependencies:[f.lC,Kn],encapsulation:2}),e})(),children:[{path:"principal",component:(()=>{class e{constructor(t){this.spotiService=t,this.nuevasPeliculas=[],this.SpinnerIsActive=!1}ngOnInit(){this.SpinnerIsActive=!0,this.spotiService.getNewRelease().then(t=>{t.subscribe(o=>{this.SpinnerIsActive=!1,this.nuevasPeliculas=o})})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(R))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-principal"]],decls:15,vars:2,consts:[[4,"ngIf"],[1,"menu"],[1,"container","mt-5"],[1,"display-2","fw-bold","text-center"],[1,"w-50","m-auto","my-4"],[1,"text-center","fs-5"],[1,"d-flex","justify-content-center","gap-4","mt-5"],["routerLink","/spotify/buscar",1,"btn","btn-success"],[1,"btn","btn-success"],["href","https://open.spotify.com/","target","d_blank",1,"text-decoration-none","text-light"],[3,"contenidos"]],template:function(t,o){1&t&&(r.YNc(0,er,1,0,"app-spinner",0),r.TgZ(1,"div",1)(2,"div",2)(3,"h2",3),r._uU(4,"Nuestros Mayores Exitos, a la palma de tu mano con Spotify"),r.qZA(),r.TgZ(5,"div",4)(6,"p",5),r._uU(7,"Busca tus canciones favoritas en nuestro buscador personalizado, elige y escucha los \xe9xitos m\xe1s recientes de tus artistas"),r.qZA()(),r.TgZ(8,"div",6)(9,"button",7),r._uU(10,"Buscar canciones"),r.qZA(),r.TgZ(11,"button",8)(12,"a",9),r._uU(13,"Ir a Spotify"),r.qZA()()()(),r._UZ(14,"app-cards",10),r.qZA()),2&t&&(r.Q6J("ngIf",o.SpinnerIsActive),r.xp6(14),r.Q6J("contenidos",o.nuevasPeliculas))},dependencies:[p.O5,f.rH,Ae,j],encapsulation:2}),e})()},{path:"buscar",component:Jn},{path:"artista/:id",component:Ge},{path:"**",redirectTo:"principal"}]}];let rr=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[f.Bz.forChild(nr),f.Bz]}),e})(),or=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[p.ez,rr,be,jn]}),e})()}}]);