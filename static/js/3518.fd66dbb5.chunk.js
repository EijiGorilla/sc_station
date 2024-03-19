"use strict";(self.webpackChunksc_station=self.webpackChunksc_station||[]).push([[3518],{53596:(e,t,r)=>{r.d(t,{DS:()=>o,J7:()=>n,w$:()=>i});const n="updating";function i(e){return"updating"===e?null:e}function o(e){return"updating"===e}},74294:(e,t,r)=>{r.d(t,{Eu:()=>f,bh:()=>u,r0:()=>p,ry:()=>g});var n=r(98773),i=r(53084),o=r(74438);const s={setAttribute(){},rollback(){},commit(){}};var l,a;function u(e,t){const r=t.attributes[e.objectIdField];if(null==r)return s;const n=e.sessions.get(r);if(n)return n;const o=(0,i.o8)(t.attributes),a=new Set,u=e.i3sOverrides.createInteractiveEditSession(r),d=new Map,c=(e,t)=>{const n=d.get(e);if(null==n){const n=t.indexOf(r);return d.set(e,n),n}return n};let f=l.EDITING;const p={setAttribute(r,n){if(f!==l.EDITING)return;const i=e.fieldsIndex.get(r);if(!i)return;const s=e.attributeStorageInfo.findIndex((e=>e.name===i.name));if(s<0)return;if(!(r in o))throw new Error('Attribute "'.concat(r,'" is not an attribute of the edited feature.'));u.setAttribute(s,n);const d=e.attributeStorageInfo[s];let p=!1;a.add(r),e.forEachNode(((r,i)=>{const o=c(r,i);if(-1===o)return;const s=e.getAttributeData(r.index);if(s){const i=s[d.name];i&&(i[o]=n,e.setAttributeData(r.index,s,t),p=!0)}})),p&&e.clearMemCache()},rollback(){if(f===l.EDITING){for(const e of a)this.setAttribute(e,o[e]);u.remove(),f=l.ROLLED_BACK,e.sessions.delete(r)}},commit(){f===l.EDITING&&(u.remove(),f=l.COMMITTED,e.sessions.delete(r))}};return e.sessions.set(r,p),p}function d(e,t,r){var n;const{gidToFeatureInfo:i,oidToFeatureInfo:o,fieldsIndex:s,objectIdField:l,globalIdField:a,featureOrIdentifierList:u}=r;if(!r.featuresResolved&&null!=u){for(const e of u){var d;const t={feature:null,oid:-1,gid:null};if("attributes"in e){t.feature=e;const r=e.attributes;if(null!=r)for(const e in r){var c;if(-1!==t.oid&&null!=t.gid)break;const n=s.normalizeFieldName(e);n===l&&(t.oid=null!==(c=r[e])&&void 0!==c?c:-1),n===a&&(t.gid=r[e])}}else t.oid=null!==(d=e.objectId)&&void 0!==d?d:-1,t.gid=e.globalId;null!=t.gid&&i.set(t.gid,t),-1!==t.oid&&o.set(t.oid,t)}r.featuresResolved=!0}return null!==(n=-1!==e?o.get(e):null)&&void 0!==n?n:null!=t?i.get(t):null}function c(e,t,r,n){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];const s=[],l={gidToFeatureInfo:new Map,oidToFeatureInfo:new Map,featuresResolved:null==r,fieldsIndex:e.fieldsIndex,objectIdField:e.objectIdField,globalIdField:e.globalIdField,featureOrIdentifierList:r};for(const f of t){var a,u,c;if(null!=f.error)continue;const e=null!==(a=f.objectId)&&void 0!==a?a:-1,t=f.globalId,r=null!==(u=-1===e||o?d(e,t,l):null)&&void 0!==u?u:{feature:null,oid:e,gid:t},p={oid:-1===e?r.oid:e,gid:null!==t&&void 0!==t?t:r.gid,feature:r.feature,result:f};if(s.push(p),-1===p.oid&&null!=p.gid&&null!=i&&(p.oid=null!==(c=i.get(p.gid))&&void 0!==c?c:-1),-1===p.oid&&null!=p.gid){let e=n.get(p.gid);null==e&&(e=[],n.set(p.gid,e)),e.push(p)}}return s}async function f(e,t){var r,i,s;const l=new Map,a=c(e,t.addedFeatures,null===(r=t.edits)||void 0===r?void 0:r.addFeatures,l),u=c(e,t.updatedFeatures,null===(i=t.edits)||void 0===i?void 0:i.updateFeatures,l),d=c(e,t.deletedFeatures,null===(s=t.edits)||void 0===s?void 0:s.deleteFeatures,l,t.globalIdToObjectId,!1);return l.size>0&&await async function(e,t){const r=e.i3sOverrides.layer.associatedLayer;if(null==(null===r||void 0===r?void 0:r.globalIdField))return;const i=r.createQuery(),{objectIdField:s,globalIdField:l}=r;i.where=Array.from(t.keys()).map((e=>"".concat(l,"='").concat(e,"'"))).join(" OR "),i.returnGeometry=!1,i.outFields=[s,l],i.cacheHint=!1;const a=await(0,n.DZ)((0,o.SE)(r,i));if(!a.ok)return;const u=a.value.features;for(const n of u){const e=n.attributes[l],r=n.attributes[s];if(null==e||null==r||-1===r)continue;const i=t.get(e);if(null!=i)for(const t of i)t.oid=r}}(e,l),{adds:a.filter((e=>-1!==e.oid)),updates:u.filter((e=>-1!==e.oid)),deletes:d.filter((e=>-1!==e.oid))}}function p(e,t){const r=new Map,n=t.adds,i=t.updates,o=t.deletes;if(n.length>0)for(const a of n){var s;const e=a.oid,t=a.feature;"mesh"===(null===t||void 0===t||null===(s=t.geometry)||void 0===s?void 0:s.type)&&r.set(e,t.geometry)}if(i.length>0)for(const a of i){var l;const e=a.oid,t=a.feature;"mesh"===(null===t||void 0===t||null===(l=t.geometry)||void 0===l?void 0:l.type)&&r.set(e,t.geometry)}if(o.length>0)for(const a of o)r.set(a.oid,null);for(const[a,u]of r)e.i3sOverrides.updateGeometry(a,u)}function g(e,t){var r;const n=function(e,t){const r=t.updates;if(!r||0===r.length)return new m;const n=new m,i=new Map;for(let o=0;o<e.attributeStorageInfo.length;o++)i.set(e.attributeStorageInfo[o].name,o);return e.forEachNode(((t,i)=>{for(const o of r){if(null==o.feature)continue;const r=o.feature,s=o.oid,l=i.indexOf(s);for(const i in r.attributes){const o=e.fieldsIndex.normalizeFieldName(i),a=h(n,t.index,o),u=r.attributes[i];a.push({featureIndex:l,featureId:s,value:u})}}})),n}(e,t),i=function(e,t){const r=new Map,n=t.adds;if(!n||0===n.length||null==e.globalIdField)return r;for(const o of n){var i;const e=o.oid,t=o.feature;"mesh"===(null===t||void 0===t||null===(i=t.geometry)||void 0===i?void 0:i.type)&&r.set(e,t)}return r}(e,t);if(0===n.size&&0===i.size)return;const o=new Map;for(let p=0;p<e.attributeStorageInfo.length;p++)o.set(e.attributeStorageInfo[p].name,p);let s=!1;n.forEach(((t,r)=>{const n=e.getAttributeData(r);let i=!1;t.forEach(((t,r)=>{const l=null!=n?n[r]:null,a=o.get(r);for(const{featureIndex:n,value:o,featureId:u}of t)l&&(l[n]=o,i=!0,s=!0),e.i3sOverrides.updateAttributeValue(u,a,o)})),i&&e.setAttributeData(r,n,null)})),s&&e.clearMemCache();const{fieldsIndex:l,i3sOverrides:a,objectIdField:u,globalIdField:d}=e,c=null===(r=a.layer.associatedLayer)||void 0===r?void 0:r.infoFor3D,f=new Set(c?[...Object.values(c.assetMapFieldRoles),...Object.values(c.transformFieldRoles)]:[]);for(const[p,g]of i){a.featureAdded(p);const{attributes:e}=g;for(const t in e){if(t!==u&&t!==d&&f.has(t))continue;const r=l.normalizeFieldName(t),n=null!=r?o.get(r):null;if(null==n)continue;const i=e[t];a.updateAttributeValue(p,n,i)}}}function h(e,t,r){const n=function(e,t){const r=e.get(t);if(r)return r;const n=new y;return e.set(t,n),n}(e,t),i=null!=r&&n.get(r);if(i)return i;const o=new Array;return n.set(r,o),o}(a=l||(l={}))[a.EDITING=0]="EDITING",a[a.ROLLED_BACK=1]="ROLLED_BACK",a[a.COMMITTED=2]="COMMITTED";const y=Map,m=Map},39097:(e,t,r)=>{r.d(t,{E:()=>u});var n=r(35143),i=r(76460),o=r(46053),s=(r(81806),r(47249),r(85842)),l=r(97216),a=r(74279);const u=e=>{let t=class extends e{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=e=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&i.A.getLogger(this).error("Error while evaluating definitionExpression: "+e),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&i.A.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){var e;if(null===(e=this.i3slayer)||void 0===e||!e.definitionExpression)return null;try{const e=l.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return i.A.getLogger(this).error("definitionExpression is using non standard function"),null;const t=[],r=e.fieldNames;return(0,a.W)(r,this.i3slayer.fields,{missingFields:t}),t.length>0?(i.A.getLogger(this).error("definitionExpression references unknown fields: ".concat(t.join(", "))),null):(this._definitionExpressionErrors=0,e)}catch(t){return i.A.getLogger(this).error("Failed to parse definitionExpression: "+t),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(e,t){try{return e.testFeature(t)}catch(r){return this.logError(r),!1}}_addDefinitionExpressionToQuery(e){if(!this.parsedDefinitionExpression)return e;const t=this.i3slayer.definitionExpression,r=e.clone();return r.where?r.where="(".concat(t,") AND (").concat(r.where,")"):r.where=t,r}};return(0,n._)([(0,o.MZ)({readOnly:!0})],t.prototype,"parsedDefinitionExpression",null),(0,n._)([(0,o.MZ)({readOnly:!0})],t.prototype,"definitionExpressionFields",null),t=(0,n._)([(0,s.$)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],t),t}},58698:(e,t,r)=>{r.d(t,{R:()=>a});var n=r(35143),i=r(50076),o=(r(76460),r(81806),r(47249),r(85842)),s=r(53430),l=r(2257);const a=e=>{let t=class extends e{_validateFetchPopupFeatures(e){const{layer:t}=this,{popupEnabled:r}=t;if(!r)throw new i.A("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:t});if(!(0,l.D8)(t,e))throw new i.A("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:t})}async prepareFetchPopupFeatures(e){}async fetchPopupFeaturesFromGraphics(e,t){if(this._validateFetchPopupFeatures(t),0===e.length)return[];const r="scene"===this.layer.type&&null!=this.layer.associatedLayer?this.layer.associatedLayer:this.layer;let n=[];"fieldsIndex"in this.layer&&(n=(0,s.hL)(this.layer.fieldsIndex,await(0,l.TO)(r,(0,l.D8)(this.layer,t)))),await this.prepareFetchPopupFeatures(n);const i=new Set,o=[],a=[];for(const l of e)(0,s.Q1)(n,l,i)?a.push(l):o.push(l);if(0===a.length)return o;const u=new Map;for(let s=0;s<e.length;s++){var d;u.set(null!==(d=e[s].getObjectId())&&void 0!==d?d:0,s)}const c=await this.whenGraphicAttributes(a,[...i]).catch((()=>a)).then((e=>o.concat(e)));return c.sort(((e,t)=>{var r,n,i,o;const s=null!==(r=e.getObjectId())&&void 0!==r?r:0,l=null!==(n=u.get(s))&&void 0!==n?n:0,a=null!==(i=t.getObjectId())&&void 0!==i?i:0;return l-(null!==(o=u.get(a))&&void 0!==o?o:0)})),c}};return t=(0,n._)([(0,o.$)("esri.views.3d.layers.support.PopupSceneLayerView")],t),t}},33680:(e,t,r)=>{r.d(t,{z:()=>g});var n=r(35143),i=r(91967),o=r(76460),s=r(50346),l=r(68134),a=r(46053),u=r(85842);const d=e=>{let t=class extends e{constructor(){super(...arguments),this._numUpdating=0}get updating(){return this._numUpdating>0}autoUpdateAsync(e,t){const r=(0,s.sg)((async t=>{++this._numUpdating;try{const r=await t;this.destroyed||this._set(e,r)}catch(r){o.A.getLogger(this).warn('Async update of "'.concat(String(e),'" failed. Async update functions should not throw exceptions.'))}--this._numUpdating}));return(0,l.wB)(t,r,l.Vh)}};return(0,n._)([(0,a.MZ)({readOnly:!0})],t.prototype,"updating",null),(0,n._)([(0,a.MZ)()],t.prototype,"_numUpdating",void 0),t=(0,n._)([(0,u.$)("esri.core.AsyncUpdate")],t),t};let c=class extends(d(i.A)){};c=(0,n._)([(0,u.$)("esri.core.AsyncUpdate")],c);r(81806),r(47249);var f=r(53430);const p="esri.views.3d.layers.support.SceneLayerViewRequiredFields";let g=class extends(d(i.A)){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:t},rendererFields:r,labelingFields:n,viewFilterFields:i}=this;return(0,f.DB)(e,[...null!==t&&void 0!==t?t:[],...null!==r&&void 0!==r?r:[],...null!==n&&void 0!==n?n:[],...null!==i&&void 0!==i?i:[]])}constructor(e){super(e)}initialize(){this.addHandles([this.autoUpdateAsync("rendererFields",(async()=>{const{fieldsIndex:e,renderer:t}=this.layer;return t?h((r=>t.collectRequiredFields(r,e))):null})),this.autoUpdateAsync("labelingFields",(async()=>{const{layer:e}=this;return e.labelsVisible?h((t=>(0,f.Im)(t,e))):null})),this.autoUpdateAsync("viewFilterFields",(()=>{const{layer:e,mergedFilter:t}=this.layerView;return h((r=>(0,f.o)(r,e,t)))}))])}};async function h(e){const t=new Set;try{return await e(t),Array.from(t).sort()}catch(r){return o.A.getLogger(p).error(r),null}}(0,n._)([(0,a.MZ)()],g.prototype,"layerView",void 0),(0,n._)([(0,a.MZ)()],g.prototype,"layer",null),(0,n._)([(0,a.MZ)()],g.prototype,"requiredFields",null),(0,n._)([(0,a.MZ)()],g.prototype,"rendererFields",void 0),(0,n._)([(0,a.MZ)()],g.prototype,"labelingFields",void 0),(0,n._)([(0,a.MZ)()],g.prototype,"viewFilterFields",void 0),g=(0,n._)([(0,u.$)(p)],g)},50532:(e,t,r)=>{r.d(t,{P:()=>d});var n=r(35143),i=r(46053),o=(r(81806),r(76460),r(47249),r(85842)),s=r(23478),l=r(95363),a=r(8203),u=r(74279);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null}get mergedFilter(){var e,t,r;const{filter:n,timeExtent:i}=this;if(null==i)return n;const o=null!==(e=null===n||void 0===n?void 0:n.clone())&&void 0!==e?e:new a.A;return null!=i&&(o.timeExtent=null!==(t=null===(r=o.timeExtent)||void 0===r?void 0:r.intersection(i))&&void 0!==t?t:i),o}getTimeFilterDependencies(){const{timeInfo:e}=this.i3slayer;if(null==e)return[];const{startField:t,endField:r}=e;return[t,r]}addTimeFilter(e,t){if(null==t)return;const{timeInfo:r}=this.i3slayer;if(null==r)return;const{startField:n,endField:i,useTime:o}=r;if(!o||null==n&&null==i)return;const s=r.toJSON(),l=t.toJSON();e.push(((e,t)=>this._timeFilter(e,t,s,l)))}_timeFilter(e,t,r,n){var i;const o=null===(i=t.attributeInfo)||void 0===i?void 0:i.attributeData;if(null==o)return;const{startTimeField:l,endTimeField:a}=r;if(null!=l&&null==o[l]||null!=a&&null==o[a])return;const d=(0,s.I)(r,n,new c(o));if(null==d)return;const{featureIds:f}=t;(0,u.$i)(e,f,d)}};return(0,n._)([(0,i.MZ)(l.ui)],t.prototype,"timeExtent",void 0),(0,n._)([(0,i.MZ)()],t.prototype,"mergedFilter",null),t=(0,n._)([(0,o.$)("esri.views.3d.layers.support.TemporalSceneLayerView")],t),t};class c{constructor(e){this.attributeData=e}getAttribute(e,t){return(0,u.E5)(this.attributeData[t],e)}getAttributeAsTimestamp(e,t){const r=this.getAttribute(e,t);return"string"==typeof r?new Date(r).getTime():"number"==typeof r||null==r?r:null}}},38229:(e,t,r)=>{r.d(t,{p:()=>i});var n=r(53430);function i(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return e.outFields?(0,n.DB)(t,[...(0,n.hL)(t,e.outFields),...r]):(0,n.DB)(t,r)}}}}},82558:(e,t,r)=>{r.d(t,{A:()=>h});var n=r(35143),i=r(18690),o=r(76460),s=r(30726),l=r(53596),a=r(50346),u=r(68134),d=r(46053),c=(r(81806),r(85842)),f=r(9624),p=r(91196);let g=class extends p.A{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return(0,l.w$)(this._layerFilter)}get _layerFilter(){var e;const t=null===(e=this.layer)||void 0===e?void 0:e.filter;if(null==t||t.geometries.length<1)return null;const r=this._geometryEngine;if(null==r||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return l.J7;const n=t.geometries.at(0).spatialReference,s=t.geometries.toArray().map((e=>{try{e=r.simplify(e)}catch(t){return o.A.getLogger(this).warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(null==e)return null;if(e.spatialReference.equals(n))return e;try{return(0,f.project)(e,n)}catch(t){return o.A.getLogger(this).warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}})).filter(i.Ru).sort(((e,t)=>e.extent.xmin-t.extent.xmin)),a=new Set,u=new Array,d=new Array;for(let i of s){const e=i.extent.xmin;if(u.length=0,a.forEach((t=>{if(e>=t.extent.xmax)return d.push(t),void a.delete(t);i.extent.ymin<=t.extent.ymax&&i.extent.ymax>=t.extent.ymin&&r.intersects(i,t)&&u.push(t)})),u.length>0){u.push(i);try{i=r.union(u)}catch(c){o.A.getLogger(this).warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}u.pop(),u.forEach((e=>a.delete(e)))}a.add(i)}return a.forEach((e=>d.push(e))),d.length>0?{spatialRelationship:t.spatialRelationship,geometries:d}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(null==e||e.geometries.length<=1)return!1;const t=e.geometries.at(0).spatialReference;return e.geometries.some((e=>{let{spatialReference:r}=e;return!r.equals(t)&&!(0,f.canProjectWithoutEngine)(r,t)}))}get layerFilterUpdating(){return(0,l.DS)(this._layerFilter)}initialize(){const{signal:e}=this._abortController;(0,u.C_)((()=>{var e;return this.destroyed||!this._geometryEngine&&(null===(e=this.layer)||void 0===e||null===(e=e.filter)||void 0===e||null===(e=e.geometries)||void 0===e?void 0:e.length)}),e).then((async()=>{(0,a.QP)(e),this._geometryEngine=await Promise.all([r.e(2612),r.e(3391)]).then(r.bind(r,63391))})).catch(a.jH),this._projectionEngineLoaded=(0,f.isLoaded)(),(0,u.C_)((()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine),e).then((async()=>{(0,a.QP)(e),await(0,f.load)(),this._projectionEngineLoaded=!0})).catch(a.jH)}destroy(){this._abortController=(0,s.DC)(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}};(0,n._)([(0,d.MZ)()],g.prototype,"layer",void 0),(0,n._)([(0,d.MZ)()],g.prototype,"availableFields",null),(0,n._)([(0,d.MZ)()],g.prototype,"maximumNumberOfFeatures",null),(0,n._)([(0,d.MZ)({readOnly:!0})],g.prototype,"maximumNumberOfFeaturesExceeded",null),(0,n._)([(0,d.MZ)()],g.prototype,"filter",void 0),(0,n._)([(0,d.MZ)({readOnly:!0})],g.prototype,"layerFilter",null),(0,n._)([(0,d.MZ)({readOnly:!0})],g.prototype,"_layerFilter",null),(0,n._)([(0,d.MZ)()],g.prototype,"_geometryEngine",void 0),(0,n._)([(0,d.MZ)()],g.prototype,"_projectionEngineLoaded",void 0),(0,n._)([(0,d.MZ)()],g.prototype,"_filterNeedsProjectionEngine",null),(0,n._)([(0,d.MZ)()],g.prototype,"layerFilterUpdating",null),g=(0,n._)([(0,c.$)("esri.views.layers.SceneLayerView")],g);const h=g}}]);
//# sourceMappingURL=3518.fd66dbb5.chunk.js.map