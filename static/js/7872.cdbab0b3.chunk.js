"use strict";(self.webpackChunksc_station=self.webpackChunksc_station||[]).push([[7872],{17872:(t,e,r)=>{r.d(e,{A:()=>F});var n=r(35143),o=r(91967),i=r(50076),s=r(81806),a=r(50346),u=r(90534),l=r(46053),c=(r(76460),r(47249),r(85842)),d=r(19463),f=r(89551),h=r(54994),y=r(37713),p=(r(35238),r(36643)),m=r(97015),_=r(76797);var S=r(53104),g=r(14009),x=r(78469),b=r(77725);let v=class extends o.A{constructor(t){super(t),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return(0,u.An)(this.url)}async execute(t,e){const r=await this.executeJSON(t,e);return this.featureSetFromJSON(t,r,e)}async executeJSON(t,e){var r;const n=this._normalizeQuery(t),o=null!=(null===(r=t.outStatistics)||void 0===r?void 0:r[0]),i=(0,s.A)("featurelayer-pbf-statistics"),a=!o||i;let u;if(this.pbfSupported&&a)try{u=await(0,x.S)(this.url,n,e)}catch(l){if("query:parsing-pbf"!==l.name)throw l;this.pbfSupported=!1}return this.pbfSupported&&a||(u=await(0,g.e)(this.url,n,e)),this._normalizeFields(u.fields),u}async featureSetFromJSON(t,e,n){if(!this._queryIs3DObjectFormat(t)||null==this.infoFor3D||!e.features)return b.A.fromJSON(e);const{meshFeatureSetFromJSON:o}=await(0,a.qr)(Promise.all([r.e(8582),r.e(156)]).then(r.bind(r,10156)),n);return o(t,this.infoFor3D,e)}executeForCount(t,e){return(0,y.I)(this.url,this._normalizeQuery(t),e)}executeForExtent(t,e){return async function(t,e,r){const n=(0,h.Dl)(t),o=await(0,p.Jf)(n,m.A.from(e),{...r}),i=o.data.extent;return!i||isNaN(i.xmin)||isNaN(i.ymin)||isNaN(i.xmax)||isNaN(i.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:_.A.fromJSON(i)}}(this.url,this._normalizeQuery(t),e)}executeForIds(t,e){return(0,S.V)(this.url,this._normalizeQuery(t),e)}async executeRelationshipQuery(t,e){const[{default:n},{executeRelationshipQuery:o}]=await(0,a.qr)(Promise.all([Promise.resolve().then(r.bind(r,58289)),r.e(9437).then(r.bind(r,69437))]),e);return t=n.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),o(this.url,t,e)}async executeRelationshipQueryForCount(t,e){const[{default:n},{executeRelationshipQueryForCount:o}]=await(0,a.qr)(Promise.all([Promise.resolve().then(r.bind(r,58289)),r.e(9437).then(r.bind(r,69437))]),e);return t=n.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),o(this.url,t,e)}async executeAttachmentQuery(t,e){const{executeAttachmentQuery:n,fetchAttachments:o,processAttachmentQueryResult:i}=await(0,a.qr)(r.e(5297).then(r.bind(r,55297)),e),s=(0,h.Dl)(this.url);return i(s,await(this.queryAttachmentsSupported?n(s,t,e):o(s,t,e)))}async executeTopFeaturesQuery(t,e){const{executeTopFeaturesQuery:n}=await(0,a.qr)(r.e(6244).then(r.bind(r,63863)),e);return n(this.parsedUrl,t,this.sourceSpatialReference,e)}async executeForTopIds(t,e){const{executeForTopIds:n}=await(0,a.qr)(r.e(9119).then(r.bind(r,69119)),e);return n(this.parsedUrl,t,e)}async executeForTopExtents(t,e){const{executeForTopExtents:n}=await(0,a.qr)(r.e(2520).then(r.bind(r,12520)),e);return n(this.parsedUrl,t,e)}async executeForTopCount(t,e){const{executeForTopCount:n}=await(0,a.qr)(r.e(6406).then(r.bind(r,36406)),e);return n(this.parsedUrl,t,e)}_normalizeQuery(t){let e=m.A.from(t);e.sourceSpatialReference=e.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(e=e===t?e.clone():e,e.gdbVersion=t.gdbVersion||this.gdbVersion,e.dynamicDataSource=t.dynamicDataSource?f.L.from(t.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(null!=r&&this._queryIs3DObjectFormat(t)){var n,o;e=e===t?e.clone():e,e.formatOf3DObjects=null;const{supportedFormats:s,queryFormats:a}=r,u=null!==(n=(0,d.R_)("model/gltf-binary",s))&&void 0!==n?n:(0,d.E1)("glb",s),l=null!==(o=(0,d.R_)("model/gltf+json",s))&&void 0!==o?o:(0,d.E1)("gltf",s);for(const t of a){if(t===u){e.formatOf3DObjects=t;break}t!==l||e.formatOf3DObjects||(e.formatOf3DObjects=t)}if(!e.formatOf3DObjects)throw new i.A("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(null==e.outFields||!e.outFields.includes("*")){e=e===t?e.clone():e,null==e.outFields&&(e.outFields=[]);const{originX:n,originY:o,originZ:i,translationX:s,translationY:a,translationZ:u,scaleX:l,scaleY:c,scaleZ:d,rotationX:f,rotationY:h,rotationZ:y,rotationDeg:p}=r.transformFieldRoles;e.outFields.push(n,o,i,s,a,u,l,c,d,f,h,y,p)}}return e}_normalizeFields(t){if(null!=this.fieldsIndex&&null!=t)for(const e of t){const t=this.fieldsIndex.get(e.name);t&&Object.assign(e,t.toJSON())}}_queryIs3DObjectFormat(t){return null!=this.infoFor3D&&!0===t.returnGeometry&&"xyFootprint"!==t.multipatchOption&&!t.outStatistics}};(0,n._)([(0,l.MZ)({type:f.L})],v.prototype,"dynamicDataSource",void 0),(0,n._)([(0,l.MZ)()],v.prototype,"fieldsIndex",void 0),(0,n._)([(0,l.MZ)()],v.prototype,"gdbVersion",void 0),(0,n._)([(0,l.MZ)()],v.prototype,"infoFor3D",void 0),(0,n._)([(0,l.MZ)({readOnly:!0})],v.prototype,"parsedUrl",null),(0,n._)([(0,l.MZ)()],v.prototype,"pbfSupported",void 0),(0,n._)([(0,l.MZ)()],v.prototype,"queryAttachmentsSupported",void 0),(0,n._)([(0,l.MZ)()],v.prototype,"sourceSpatialReference",void 0),(0,n._)([(0,l.MZ)({type:String})],v.prototype,"url",void 0),v=(0,n._)([(0,c.$)("esri.tasks.QueryTask")],v);const F=v},19463:(t,e,r)=>{r.d(e,{E1:()=>a,Fm:()=>u,JZ:()=>p,R_:()=>s,fu:()=>o,oF:()=>i,rq:()=>l});const n=[["binary","application/octet-stream","bin",""]];function o(t,e){var r;return null!=d(e.name,null!==(r=null===t||void 0===t?void 0:t.supportedFormats)&&void 0!==r?r:[])}function i(t,e){var r;if(!t)return!1;const n=l(e,null!==(r=t.supportedFormats)&&void 0!==r?r:[]);return null!=n&&t.editFormats.includes(n)}function s(t,e){return f(function(t,e){const r=t.toLowerCase();return c(e).find((t=>h(t)===r))}(t,e))}function a(t,e){return f(d(t,e))}function u(t,e){return h(function(t,e){return c(e).find((e=>f(e)===t))}(t,e))}function l(t,e){var r;return null!==(r=a(t.name,e))&&void 0!==r?r:s(t.type,e)}function c(t){return[...n,...t]}function d(t,e){const r=t.toLowerCase();return c(e).find((t=>y(t).some((t=>r.endsWith(t)))))}function f(t){return null===t||void 0===t?void 0:t[0]}function h(t){return null===t||void 0===t?void 0:t[1].toLowerCase()}function y(t){var e;return null!==(e=null===t||void 0===t?void 0:t[2].split(",").map((t=>t.toLowerCase())))&&void 0!==e?e:[]}function p(t){var e;return null===(e=t.tables)||void 0===e?void 0:e.find((t=>"assetMaps"===t.role))}},78238:(t,e,r)=>{function n(t){const e={};for(const r in t){if("declaredClass"===r)continue;const o=t[r];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){e[r]=[];for(let t=0;t<o.length;t++)e[r][t]=n(o[t])}else"object"==typeof o?o.toJSON&&(e[r]=JSON.stringify(o)):e[r]=o}return e}r.d(e,{z:()=>n})},37713:(t,e,r)=>{r.d(e,{I:()=>s});var n=r(54994),o=r(36643),i=r(97015);async function s(t,e,r){const s=(0,n.Dl)(t);return(0,o.gW)(s,i.A.from(e),{...r}).then((t=>t.data.count))}},53104:(t,e,r)=>{r.d(e,{V:()=>s});var n=r(54994),o=r(36643),i=r(97015);async function s(t,e,r){const s=(0,n.Dl)(t);return(0,o.Pk)(s,i.A.from(e),{...r}).then((t=>t.data.objectIds))}},14009:(t,e,r)=>{r.d(e,{e:()=>u,s:()=>a});var n=r(54994),o=r(36643),i=r(77725),s=r(97015);async function a(t,e,r){const n=await u(t,e,r);return i.A.fromJSON(n)}async function u(t,e,r){const i=(0,n.Dl)(t),a={...r},u=s.A.from(e),{data:l}=await(0,o.eW)(i,u,u.sourceSpatialReference,a);return l}},78469:(t,e,r)=>{r.d(e,{S:()=>m});var n=r(54994),o=r(30726),i=r(86729),s=r(98618);function a(t,e){return e}function u(t,e,r,n){switch(r){case 0:return f(t,e+n,0);case 1:return"lowerLeft"===t.originPosition?f(t,e+n,1):function(t,e,r){let{translate:n,scale:o}=t;return n[r]-e*o[r]}(t,e+n,1)}}function l(t,e,r,n){return 2===r?f(t,e,2):u(t,e,r,n)}function c(t,e,r,n){return 2===r?0===e?0:f(t,e,3):u(t,e,r,n)}function d(t,e,r,n){return 3===r?0===e?0:f(t,e,3):l(t,e,r,n)}function f(t,e,r){let{translate:n,scale:o}=t;return n[r]+e*o[r]}class h{constructor(t){this._options=t,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=a,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._mValueOffset=null,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,i.N)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(null!=e)for(const r of t.features)e(r.geometry)}createSpatialReference(){return{}}addField(t,e){const r=t.fields;(0,o.Lw)(r),r.push(e);const n=r.map((t=>t.name));this._attributesConstructor=function(){for(const t of n)this[t]=null}}addFeature(t,e){t.features.push(e)}prepareFeatures(t){switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._mValueOffset=null,this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&(this._mValueOffset=this._vertexDimension,this._vertexDimension++),t.geometryType){case"esriGeometryPoint":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"esriGeometryPolygon":this.addCoordinate=(t,e,r)=>this._addCoordinatePolygon(t,e,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"esriGeometryPolyline":this.addCoordinate=(t,e,r)=>this._addCoordinatePolyline(t,e,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"esriGeometryMultipoint":this.addCoordinate=(t,e,r)=>this._addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this._createMultipointGeometry(t)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(t,e,r){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:n}=e,o=(0,s.Ch)(r.clone(),r,!1,!1,this._transform),i=(0,s.zv)(o,n,!1,!1);t.queryGeometryType=n,t.queryGeometry={...i}}createPointGeometry(t){const e={x:0,y:0,spatialReference:t.spatialReference};return t.hasZ&&(e.z=0),t.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){const n=this._transform;switch(e=this._applyTransform(n,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:"z"in t?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let r=0;e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t);const n=this._transform;return null===this._mValueOffset||0!==t||e%this._mValueOffset?this._applyTransform(n,t,e,r):0}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const n=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(n)}_createPolygonGeometry(t){return{rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const n=this._transformPathLikeValue(e,r),o=t[t.length-1];0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),o.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=n}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?d:e?l:r?c:u}}var y=r(36643),p=(r(77725),r(97015));async function m(t,e,r){const o=(0,n.Dl)(t),i={...r},s=p.A.from(e),a=!s.quantizationParameters,{data:u}=await(0,y.IJ)(o,s,new h({sourceSpatialReference:s.sourceSpatialReference,applyTransform:a}),i);return u}},36643:(t,e,r)=>{r.d(e,{GB:()=>g,IJ:()=>y,Jf:()=>S,Pk:()=>m,eW:()=>h,gW:()=>_,kS:()=>p});var n=r(3825),o=r(90534),i=r(19902),s=r(1438),a=r(80963),u=r(78238),l=r(89122),c=r(57831);const d="Layer does not support extent calculation.";function f(t,e){var r;const n=t.geometry,o=t.toJSON();delete o.compactGeometryEnabled,delete o.defaultSpatialReferenceEnabled;const s=o;let u,l,c;if(null!=n&&(l=n.spatialReference,c=(0,a.YX)(l),s.geometryType=(0,i.$B)(n),s.geometry=function(t,e){if(e&&"extent"===t.type)return"".concat(t.xmin,",").concat(t.ymin,",").concat(t.xmax,",").concat(t.ymax);if(e&&"point"===t.type)return"".concat(t.x,",").concat(t.y);const r=t.toJSON();return delete r.spatialReference,JSON.stringify(r)}(n,t.compactGeometryEnabled),s.inSR=c),o.groupByFieldsForStatistics&&(s.groupByFieldsForStatistics=o.groupByFieldsForStatistics.join(",")),o.objectIds&&(s.objectIds=o.objectIds.join(",")),o.orderByFields&&(s.orderByFields=o.orderByFields.join(",")),!o.outFields||!o.returnDistinctValues&&(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?delete s.outFields:o.outFields.includes("*")?s.outFields="*":s.outFields=o.outFields.join(","),o.outSR?(s.outSR=(0,a.YX)(o.outSR),u=t.outSpatialReference):n&&(o.returnGeometry||o.returnCentroid)&&(s.outSR=s.inSR,u=l),o.returnGeometry&&delete o.returnGeometry,o.outStatistics&&(s.outStatistics=JSON.stringify(o.outStatistics)),o.fullText&&(s.fullText=JSON.stringify(o.fullText)),o.pixelSize&&(s.pixelSize=JSON.stringify(o.pixelSize)),o.quantizationParameters&&(t.defaultSpatialReferenceEnabled&&null!=l&&null!=(null===(r=t.quantizationParameters)||void 0===r?void 0:r.extent)&&l.equals(t.quantizationParameters.extent.spatialReference)&&delete o.quantizationParameters.extent.spatialReference,s.quantizationParameters=JSON.stringify(o.quantizationParameters)),o.parameterValues&&(s.parameterValues=JSON.stringify(o.parameterValues)),o.rangeValues&&(s.rangeValues=JSON.stringify(o.rangeValues)),o.dynamicDataSource&&(s.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o.timeExtent){const t=o.timeExtent,{start:e,end:r}=t;null==e&&null==r||(s.time=e===r?e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==r&&void 0!==r?r:"null")),delete o.timeExtent}return t.defaultSpatialReferenceEnabled&&null!=l&&null!=u&&l.equals(u)&&(s.defaultSR=s.inSR,delete s.inSR,delete s.outSR),s}async function h(t,e,r,n){const o=null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{features:[]}}:await g(t,e,"json",n);return(0,c.q)(e,r,o.data),o}async function y(t,e,r,n){if(null!=e.timeExtent&&e.timeExtent.isEmpty)return{data:r.createFeatureResult()};const o=await p(t,e,n),i=o;return i.data=(0,l.m)(o.data,r),i}function p(t,e,r){return g(t,e,"pbf",r)}function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):g(t,e,"json",r,{returnIdsOnly:!0})}function _(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):g(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}async function S(t,e,r){if(null!=e.timeExtent&&e.timeExtent.isEmpty)return{data:{count:0,extent:null}};const n=await g(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}),o=n.data;if(o.hasOwnProperty("extent"))return n;if(o.features)throw new Error(d);if(o.hasOwnProperty("count"))throw new Error(d);return n}async function g(t,e,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const l="string"==typeof t?(0,o.An)(t):t,c=e.geometry?[e.geometry]:[],d=await(0,s.el)(c,null,{signal:i.signal}),h=null===d||void 0===d?void 0:d[0];null!=h&&((e=e.clone()).geometry=h);const y=(0,u.z)({...l.query,f:r,...a,...f(e,a)});return(0,n.A)((0,o.fj)(l.path,(p=a,null==e.formatOf3DObjects||p.returnCountOnly||p.returnExtentOnly||p.returnIdsOnly?"query":"query3d")),{...i,responseType:"pbf"===r?"array-buffer":"json",query:{...y,...i.query}});var p}}}]);
//# sourceMappingURL=7872.cdbab0b3.chunk.js.map