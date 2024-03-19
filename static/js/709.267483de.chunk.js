"use strict";(self.webpackChunksc_station=self.webpackChunksc_station||[]).push([[709],{50709:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var s=r(35143),o=(r(35238),r(16868)),i=(r(63844),r(14873),r(47662),r(72690),r(86946),r(71832),r(5766),r(35039),r(86616),r(31382)),n=r(77717),a=r(50346),l=r(90534),u=r(46053),p=r(81806),d=r(76460),c=(r(47249),r(85842)),h=r(31608),y=r(25515),m=r(50076),f=r(49304),g=r(16783),v=r(40296),_=r(77725),F=r(76797),S=r(65215);let b=class extends f.A{constructor(){super(...arguments),this.type="geojson",this.refresh=(0,a.sg)((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null!==(e=this._connection)&&void 0!==e&&e.close(),this._connection=null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>_.A.fromJSON(e)))}queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:F.A.fromJSON(e.extent)})))}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new m.A("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],s=[],o=[];if(e.addFeatures)for(const i of e.addFeatures)r.push(this._serializeFeature(i));if(e.deleteFeatures)for(const i of e.deleteFeatures)"objectId"in i&&null!=i.objectId?s.push(i.objectId):"attributes"in i&&null!=i.attributes[t]&&s.push(i.attributes[t]);if(e.updateFeatures)for(const i of e.updateFeatures)o.push(this._serializeFeature(i));return this._connection.invoke("applyEdits",{adds:r,updates:o,deletes:s}).then((e=>{let{extent:t,timeExtent:r,featureEditResults:s}=e;return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),this._createEditsResult(s)}))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m.A("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return null==t?null:"mesh"===t.type||"extent"===t.type?S.A.fromExtent(t.extent):t}async _startWorker(e){var t;this._connection=await(0,g.ho)("GeoJSONSourceWorker",{strategy:(0,p.A)("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:r,spatialReference:s,hasZ:o,geometryType:i,objectIdField:n,url:a,timeInfo:l,customParameters:u}=this.layer,c="defaults"===this.layer.originOf("spatialReference"),y={url:a,customParameters:u,fields:r&&r.map((e=>e.toJSON())),geometryType:h.g.toJSON(i),hasZ:o,objectIdField:n,timeInfo:l?l.toJSON():null,spatialReference:c?null:s&&s.toJSON()},m=await this._connection.invoke("load",y,{signal:e});for(const p of m.warnings){var f;d.A.getLogger(this.layer).warn("#load()","$".concat(p.message," (title: '").concat(this.layer.title||"no title","', id: '").concat(null!==(f=this.layer.id)&&void 0!==f?f:"no id","')"),{warning:p})}m.featureErrors.length&&d.A.getLogger(this.layer).warn("#load()","Encountered ".concat(m.featureErrors.length," validation errors while loading features. (title: '").concat(this.layer.title||"no title","', id: '").concat(null!==(t=this.layer.id)&&void 0!==t?t:"no id","')"),{errors:m.featureErrors}),this.sourceJSON=m.layerDefinition,this.capabilities=(0,v.f)(this.sourceJSON.hasZ,!0)}};(0,s._)([(0,u.MZ)()],b.prototype,"capabilities",void 0),(0,s._)([(0,u.MZ)()],b.prototype,"type",void 0),(0,s._)([(0,u.MZ)({constructOnly:!0})],b.prototype,"layer",void 0),(0,s._)([(0,u.MZ)()],b.prototype,"sourceJSON",void 0),b=(0,s._)([(0,c.$)("esri.layers.graphics.sources.GeoJSONSource")],b);var O=r(65624),x=r(31362),E=r(74440),Z=r(71448),M=r(11270),I=r(37534),A=r(94729),R=r(21617),w=r(5682),J=r(78817),P=r(95363),j=r(15427),N=r(44135),q=r(76350),T=r(53430),C=r(71401),k=r(27937),D=r(97015),Q=r(30973),G=r(67478),z=r(13312);const B=(0,q.p)();let U=class extends((0,I.f)((0,x.d)((0,Z.J)((0,E.F)((0,O.d)((0,J.e)((0,w.j)((0,R.J)((0,M.q)((0,A.A)((0,n.P)(y.A)))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new b({layer:this}),this.spatialReference=z.A.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(a.QP).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,T.yp)(this.renderer,this.fieldsIndex),(0,T.sv)(this.timeInfo,this.fieldsIndex)}));return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,l.An)(this.url):null}set renderer(e){(0,T.yp)(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=(0,l.An)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:s}=await r.e(4610).then(r.bind(r,54610));await this.load();const o=await s(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),o}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,Q.tn)(this,e)}createQuery(){var e;const t=new D.A,r=null===(e=this.capabilities)||void 0===e?void 0:e.data;t.returnGeometry=!0,r&&r.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:o}=this;return t.timeExtent=null!=s&&null!=o?o.offset(-s.value,s.unit):o||null,t}getFieldDomain(e,t){var r;return null===(r=this.getField(e))||void 0===r?void 0:r.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(D.A.from(e)||this.createQuery(),t))).then((e=>{if(null!==e&&void 0!==e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(D.A.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(D.A.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(D.A.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};(0,s._)([(0,u.MZ)({readOnly:!0,json:{read:!1,write:!1}})],U.prototype,"capabilities",null),(0,s._)([(0,u.MZ)({type:String})],U.prototype,"copyright",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],U.prototype,"createQueryVersion",null),(0,s._)([(0,u.MZ)((0,G.P6)("dateFieldsTimeReference"))],U.prototype,"dateFieldsTimeZone",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],U.prototype,"defaultPopupTemplate",null),(0,s._)([(0,u.MZ)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],U.prototype,"definitionExpression",void 0),(0,s._)([(0,u.MZ)({type:String})],U.prototype,"displayField",void 0),(0,s._)([(0,u.MZ)({type:Boolean})],U.prototype,"editingEnabled",void 0),(0,s._)([(0,u.MZ)(P.Yj)],U.prototype,"elevationInfo",void 0),(0,s._)([(0,u.MZ)({type:[N.A],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],U.prototype,"fields",void 0),(0,s._)([(0,u.MZ)(B.fieldsIndex)],U.prototype,"fieldsIndex",void 0),(0,s._)([(0,u.MZ)({type:F.A,json:{name:"extent"}})],U.prototype,"fullExtent",void 0),(0,s._)([(0,u.MZ)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:h.g.read}}})],U.prototype,"geometryType",void 0),(0,s._)([(0,u.MZ)({type:Boolean})],U.prototype,"hasZ",void 0),(0,s._)([(0,u.MZ)(P.id)],U.prototype,"id",void 0),(0,s._)([(0,u.MZ)({type:Boolean,readOnly:!0})],U.prototype,"isTable",null),(0,s._)([(0,u.MZ)(P.kF)],U.prototype,"labelsVisible",void 0),(0,s._)([(0,u.MZ)({type:[C.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:k.w},write:!0}})],U.prototype,"labelingInfo",void 0),(0,s._)([(0,u.MZ)(P.fV)],U.prototype,"legendEnabled",void 0),(0,s._)([(0,u.MZ)({type:["show","hide"]})],U.prototype,"listMode",void 0),(0,s._)([(0,u.MZ)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],U.prototype,"objectIdField",void 0),(0,s._)([(0,u.MZ)(P.ke)],U.prototype,"opacity",void 0),(0,s._)([(0,u.MZ)({type:["GeoJSON"]})],U.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],U.prototype,"parsedUrl",null),(0,s._)([(0,u.MZ)(P.M6)],U.prototype,"popupEnabled",void 0),(0,s._)([(0,u.MZ)({type:o.A,json:{name:"popupInfo",write:!0}})],U.prototype,"popupTemplate",void 0),(0,s._)([(0,u.MZ)({types:i.H,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:i.X}}}})],U.prototype,"renderer",null),(0,s._)([(0,u.MZ)(P.PY)],U.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],U.prototype,"source",void 0),(0,s._)([(0,u.MZ)({type:z.A})],U.prototype,"spatialReference",void 0),(0,s._)([(0,u.MZ)({type:[j.A]})],U.prototype,"templates",void 0),(0,s._)([(0,u.MZ)()],U.prototype,"title",void 0),(0,s._)([(0,u.MZ)({json:{read:!1},readOnly:!0})],U.prototype,"type",void 0),(0,s._)([(0,u.MZ)(P.OZ)],U.prototype,"url",null),U=(0,s._)([(0,c.$)("esri.layers.GeoJSONLayer")],U);const V=U},8298:(e,t,r)=>{r.d(t,{F:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},40296:(e,t,r)=>{r.d(t,{F0:()=>a,Vx:()=>p,e2:()=>d,f:()=>c});var s=r(81806),o=r(53084),i=r(8298),n=r(44460);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.Cb:"esriGeometryPolyline"===e?n.yM:n.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function p(e,t){if((0,s.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r="this.".concat(t," = null;");for(const t in e)r+="this".concat(l.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const s=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return()=>new s}catch(r){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,o.o8)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);
//# sourceMappingURL=709.267483de.chunk.js.map