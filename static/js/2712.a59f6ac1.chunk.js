"use strict";(self.webpackChunksc_station=self.webpackChunksc_station||[]).push([[2712],{72712:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var s=r(35143),i=(r(35238),r(19276)),l=r(73763),o=r(77717),n=r(50346),a=r(68134),u=r(90534),y=r(46053),d=(r(81806),r(76460),r(47249),r(28379)),p=r(85842),h=r(17707),f=r(13312),c=r(25515),v=r(65624),b=r(11270),m=r(94729),g=r(21617),_=r(5682),S=r(95363),w=r(54099),M=r(42553),k=r(49304),x=r(88685),E=r(40565),Z=r(86560),O=r(55171),L=(r(16868),r(3825)),P=r(53084),F=r(42294),I=r(65391);r(86616),r(77725);const A={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function G(e){var t;const r=e.folders||[],s=r.slice(),i=new Map,l=new Map,o=new Map,n=new Map,a=new Map,u={esriGeometryPoint:l,esriGeometryPolyline:o,esriGeometryPolygon:n};((null===(t=e.featureCollection)||void 0===t?void 0:t.layers)||[]).forEach((e=>{const t=(0,P.o8)(e);t.featureSet.features=[];const r=e.featureSet.geometryType;i.set(r,t);const s=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?j(l,s,e.featureSet.features):"esriGeometryPolyline"===r?j(o,s,e.featureSet.features):"esriGeometryPolygon"===r&&j(n,s,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a.set(e.id,e)})),r.forEach((t=>{t.networkLinkIds.forEach((r=>{const i=function(e,t,r){const s=function(e,t){let r;return t.some((t=>t.id===e&&(r=t,!0))),r}(e,r);return s&&(s.parentFolderId=t,s.networkLink=s),s}(r,t.id,e.networkLinks);i&&s.push(i)}))})),s.forEach((e=>{if(e.featureInfos){e.points=(0,P.o8)(i.get("esriGeometryPoint")),e.polylines=(0,P.o8)(i.get("esriGeometryPolyline")),e.polygons=(0,P.o8)(i.get("esriGeometryPolygon")),e.mapImages=[];for(const r of e.featureInfos)switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{var t;const s=u[r.type].get(r.id);s&&(null===(t=e[A[r.type]])||void 0===t||t.featureSet.features.push(s));break}case"GroundOverlay":{const t=a.get(r.id);t&&e.mapImages.push(t);break}}e.fullExtent=J([e])}}));const y=J(s);return{folders:r,sublayers:s,extent:y}}function C(e,t,r,s){const i=null===O.id||void 0===O.id?void 0:O.id.findCredential(e);e=(0,u.a6)(e,{token:null===i||void 0===i?void 0:i.token});const l=Z.A.kmlServiceUrl;return(0,L.A)(l,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:s})}function R(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const i=[],l={},o=t.sublayers,n=new Set(t.folders.map((e=>e.id)));return o.forEach((t=>{const o=new e;if(r?o.read(t,r):o.read(t),s.length&&n.has(o.id)&&(o.visible=s.includes(o.id)),l[t.id]=o,null!=t.parentFolderId&&-1!==t.parentFolderId){var a;const e=l[t.parentFolderId];e.sublayers||(e.sublayers=[]),null===(a=e.sublayers)||void 0===a||a.unshift(o)}else i.unshift(o)})),i}function j(e,t,r){r.forEach((r=>{e.set(r.attributes[t],r)}))}function J(e){const t=(0,F.vt)(F.qv),r=(0,F.vt)(F.qv);for(const o of e){var s,i,l;if(null!==(s=o.polygons)&&void 0!==s&&null!==(s=s.featureSet)&&void 0!==s&&s.features)for(const e of o.polygons.featureSet.features)(0,I.LJ)(t,e.geometry),(0,F.RF)(r,t);if(null!==(i=o.polylines)&&void 0!==i&&null!==(i=i.featureSet)&&void 0!==i&&i.features)for(const e of o.polylines.featureSet.features)(0,I.LJ)(t,e.geometry),(0,F.RF)(r,t);if(null!==(l=o.points)&&void 0!==l&&null!==(l=l.featureSet)&&void 0!==l&&l.features)for(const e of o.points.featureSet.features)(0,I.LJ)(t,e.geometry),(0,F.RF)(r,t);if(o.mapImages)for(const e of o.mapImages)(0,I.LJ)(t,e.extent),(0,F.RF)(r,t)}return(0,F.aI)(r,F.qv)?void 0:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:f.A.WGS84}}var T,H=r(76797);let K=T=class extends(w.A.EventedMixin((0,M.Te)(k.A))){constructor(){super(...arguments),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([(0,a.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer}),a.OH),(0,a.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),a.OH),(0,a.wB)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),a.OH),(0,a.wB)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),a.OH)])}initialize(){(0,a.C_)((()=>this.networkLink)).then((()=>(0,a.C_)((()=>!0===this.visible)))).then((()=>this.load()))}load(e){var t,r;if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const s=null!=e?e.signal:null,l=this._fetchService(null!==(t=null===(r=this._get("networkLink"))||void 0===r?void 0:r.href)&&void 0!==t?t:"",s).then((e=>{var t;const r=J(e.sublayers);this.fullExtent=H.A.fromJSON(r),this.sourceJSON=e;const s=(0,E.dp)(i.A.ofType(T),R(T,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,null!==(t=this.layer)&&void 0!==t&&t.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(l),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return C(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>G(e.data)))}};(0,s._)([(0,y.MZ)()],K.prototype,"description",void 0),(0,s._)([(0,y.MZ)({type:H.A})],K.prototype,"fullExtent",void 0),(0,s._)([(0,y.MZ)()],K.prototype,"id",void 0),(0,s._)([(0,y.MZ)({readOnly:!0,value:null})],K.prototype,"networkLink",void 0),(0,s._)([(0,y.MZ)({json:{write:{allowNull:!0}}})],K.prototype,"parent",void 0),(0,s._)([(0,y.MZ)({type:i.A.ofType(K),json:{write:{allowNull:!0}}})],K.prototype,"sublayers",void 0),(0,s._)([(0,y.MZ)({value:null,json:{read:{source:"name",reader:e=>(0,x._e)(e)}}})],K.prototype,"title",void 0),(0,s._)([(0,y.MZ)({value:!0})],K.prototype,"visible",null),(0,s._)([(0,d.w)("visible",["visibility"])],K.prototype,"readVisible",null),(0,s._)([(0,y.MZ)()],K.prototype,"sourceJSON",void 0),(0,s._)([(0,y.MZ)()],K.prototype,"layer",void 0),K=T=(0,s._)([(0,p.$)("esri.layers.support.KMLSublayer")],K);const N=K,q=["kml","xml"];let z=class extends((0,v.d)((0,g.J)((0,_.j)((0,b.q)((0,m.A)((0,o.P)(c.A))))))){constructor(){super(...arguments),this._visibleFolders=[],this.allSublayers=new l.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=f.A.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([(0,a.wB)((()=>this.sublayers),((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),a.OH),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return R(N,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],s=e.toArray();for(;s.length;){const e=s[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&s.push(...e.sublayers.toArray())),s.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,u.e7)(this.url,q)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(n.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=G((await Promise.resolve().then((()=>{var t;return this.resourceInfo?{ssl:!1,data:this.resourceInfo}:C(null!==(t=this.url)&&void 0!==t?t:"",this.outSpatialReference,this.refreshInterval,e)}))).data);t&&this.read(t,{origin:"service"})}_recomputeFullExtent(){let e=null;null!=this.extent&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const s of r.sublayers.items)t(s),s.visible&&s.fullExtent&&(null!=e?e.union(s.fullExtent):e=s.fullExtent.clone())};return t(this),e}};(0,s._)([(0,y.MZ)({readOnly:!0})],z.prototype,"allSublayers",void 0),(0,s._)([(0,y.MZ)({type:f.A})],z.prototype,"outSpatialReference",void 0),(0,s._)([(0,y.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],z.prototype,"path",void 0),(0,s._)([(0,y.MZ)({readOnly:!0,json:{read:!1,write:!1}})],z.prototype,"legendEnabled",void 0),(0,s._)([(0,y.MZ)({type:["show","hide","hide-children"]})],z.prototype,"listMode",void 0),(0,s._)([(0,y.MZ)({type:["KML"]})],z.prototype,"operationalLayerType",void 0),(0,s._)([(0,y.MZ)({})],z.prototype,"resourceInfo",void 0),(0,s._)([(0,y.MZ)({type:i.A.ofType(N),json:{write:{ignoreOrigin:!0}}})],z.prototype,"sublayers",void 0),(0,s._)([(0,d.w)(["web-map","portal-item"],"sublayers",["visibleFolders"])],z.prototype,"readSublayersFromItemOrWebMap",null),(0,s._)([(0,d.w)("service","sublayers",["sublayers"])],z.prototype,"readSublayers",null),(0,s._)([(0,h.K)("sublayers")],z.prototype,"writeSublayers",null),(0,s._)([(0,y.MZ)({readOnly:!0,json:{read:!1}})],z.prototype,"type",void 0),(0,s._)([(0,y.MZ)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],z.prototype,"title",null),(0,s._)([(0,y.MZ)(S.OZ)],z.prototype,"url",void 0),(0,s._)([(0,y.MZ)({readOnly:!0})],z.prototype,"visibleSublayers",null),(0,s._)([(0,y.MZ)({type:H.A})],z.prototype,"extent",void 0),(0,s._)([(0,y.MZ)()],z.prototype,"fullExtent",null),z=(0,s._)([(0,p.$)("esri.layers.KMLLayer")],z);const W=z}}]);
//# sourceMappingURL=2712.a59f6ac1.chunk.js.map