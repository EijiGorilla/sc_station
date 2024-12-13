"use strict";(self.webpackChunksc_station=self.webpackChunksc_station||[]).push([[4075],{64075:(e,t,r)=>{r.r(t),r.d(t,{registerFunctions:()=>x});var n=r(86560),o=(r(35238),r(26043)),i=r(67253),a=r(9861),s=r(43036),p=r(45018),l=r(89189),u=r(9624),c=r(45417),d=r(65308),f=r(70652),h=r(71334),y=r(9505),m=r(35380),g=r(38156),w=r(68325),v=r(23908),A=r(70414),S=r(13312);let _=null;async function R(e,t){const n=new f.default({portal:e,id:t});return await n.load(),null===_&&(_=await r.e(8739).then(r.bind(r,88739))),await _.fetchKnowledgeGraph(n.url)}function G(e,t,r,n,o){if(null===e)return null;if((0,s.c)(e)||(0,s.b)(e))return e;if((0,s.k)(e))return e.toJSDate();if((0,s.k)(e))return e.toJSDate();if((0,s.m)(e))return e.toStorageFormat();if((0,s.n)(e))return e.toStorageString();if((0,s.v)(e)){const i={};for(const a of e.keys())i[a]=G(e.field(a),t,r,n,o),i[a]instanceof l.A&&o.push({container:i,indexer:a});return i}if((0,s.o)(e)){const i=e.map((e=>G(e,t,r,n,o)));for(let e=0;e<i.length;e++)i[e]instanceof l.A&&o.push({container:i,indexer:e});return i}return(0,s.p)(e)?e.spatialReference.isWGS84?e:e.spatialReference.isWebMercator&&t?(0,c.ci)(e):e:void 0}function j(e,t){if(!e)return null;const r={};for(const n in e)r[n]=b(e[n],t);return r}function b(e,t){return null===e?null:(0,s.o)(e)?e.map((e=>b(e,t))):e instanceof y.A?{graphTypeName:e.typeName,id:e.id,graphType:"entity",properties:j(e.properties,t)}:e instanceof g.A?{graphType:"object",properties:j(e.properties,t)}:e instanceof v.A?{graphTypeName:e.typeName,id:e.id,graphType:"relationship",originId:e.originId??null,destinationId:e.destinationId??null,properties:j(e.properties,t)}:e instanceof w.A?{graphType:"path",path:e.path?e.path.map((e=>b(e,t))):null}:(0,s.p)(e)?function(e,t){if(!e)return e;if(e.spatialReference.isWGS84&&t.spatialReference.isWebMercator)return(0,c.Gh)(e);if(e.spatialReference.equals(t.spatialReference))return e;throw new a.D$(t,a.TX.WrongSpatialReference,null)}(e,t):(0,s.c)(e)||(0,s.b)(e)||(0,s.a6)(e)?e:null}function x(e){"async"===e.mode&&(e.functions.knowledgegraphbyportalitem=function(t,r){return e.standardFunctionAsync(t,r,((e,n,i)=>{if((0,s.G)(i,2,2,t,r),null===i[0])throw new a.D$(t,a.TX.PortalRequired,r);if(i[0]instanceof o.A){const e=(0,s.j)(i[1]);let r;return r=t.services?.portal?t.services.portal:d.A.getDefault(),R((0,p.R)(i[0],r),e)}if(!1===(0,s.c)(i[0]))throw new a.D$(t,a.TX.InvalidParameter,r);const l=(0,s.j)(i[0]);return R(t.services?.portal??d.A.getDefault(),l)}))},e.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),e.functions.querygraph=function(t,o){return e.standardFunctionAsync(t,o,(async(e,p,l)=>{(0,s.G)(l,2,4,t,o);const c=l[0];if(!(0,s.w)(c))throw new a.D$(t,a.TX.InvalidParameter,o);const d=l[1];if(!(0,s.c)(d))throw new a.D$(t,a.TX.InvalidParameter,o);null===_&&(_=await r.e(8739).then(r.bind(r,88739)));let f=null;const y=(0,s.K)(l[2],null);if(!(y instanceof i.A||null===y))throw new a.D$(t,a.TX.InvalidParameter,o);if(y){let e=[];f=G(y,!0,!1,t,e),e=e.filter((e=>!e.container[e.indexer].spatialReference.isWGS84)),e.length>0&&await async function(e){const t=n.A.geometryServiceUrl??"";if(!t){(0,u.isLoaded)()||await(0,u.load)();for(const t of e)t.container[t.indexer]=(0,u.project)(t.container[t.indexer],S.A.WGS84);return}const r=e.map((e=>e.container[e.indexer])),o=new A.A({geometries:r,outSpatialReference:S.A.WGS84}),i=await(0,h.C)(t,o);for(let n=0;n<i.length;n++){const t=e[n];t.container[t.indexer]=i[n]}}(e)}const g=new m.A({openCypherQuery:d,bindParameters:f});(c?.serviceDefinition?.currentVersion??11.3)>11.2&&(g.outputSpatialReference=t.spatialReference);const w=(await _.executeQueryStreaming(c,g)).resultRowsStream.getReader(),v=[];try{for(;;){const{done:e,value:r}=await w.read();if(e)break;if((0,s.o)(r))for(const n of r)v.push(b(n,t));else{const e=[];for(const n of r)e.push(b(r[n],t));v.push(e)}}}catch(R){throw R}return i.A.convertJsonToArcade(v,(0,s.N)(t),!1,!0)}))},e.signatures.push({name:"querygraph",min:2,max:4}))}},45018:(e,t,r)=>{r.d(t,{R:()=>o});var n=r(65308);function o(e,t){return null===e?t:new n.A({url:e.field("url")})}},71334:(e,t,r)=>{r.d(t,{C:()=>u});var n=r(3825),o=r(40565),i=r(19902),a=r(54994),s=r(71838),p=r(70414);const l=(0,o.dp)(p.A);async function u(e,t,r){t=l(t);const o=(0,a.Dl)(e),p={...o.query,f:"json",...t.toJSON()},u=t.outSpatialReference,c=(0,i.$B)(t.geometries[0]),d=(0,a.jV)(p,r);return(0,n.A)(o.path+"/project",d).then((e=>{let{data:{geometries:t}}=e;return(0,s.V)(t,c,u)}))}},71838:(e,t,r)=>{r.d(t,{V:()=>i,X:()=>o});var n=r(19902);function o(e){return{geometryType:(0,n.$B)(e[0]),geometries:e.map((e=>e.toJSON()))}}function i(e,t,r){const o=(0,n.xD)(t);return e.map((e=>{const t=o.fromJSON(e);return t.spatialReference=r,t}))}},9505:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(35143),o=(r(35238),r(46053)),i=(r(81806),r(76460),r(47249),r(85842)),a=r(27544),s=r(19247);let p=class extends a.A{constructor(e){super(e),this.layoutGeometry=null}};(0,n._)([(0,o.MZ)({type:s.A,json:{write:!0}})],p.prototype,"layoutGeometry",void 0),p=(0,n._)([(0,i.$)("esri.rest.knowledgeGraph.Entity")],p);const l=p},27544:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(35143),o=r(46053),i=(r(81806),r(76460),r(47249),r(85842)),a=r(12831);let s=class extends a.A{constructor(e){super(e),this.typeName=null,this.id=null}};(0,n._)([(0,o.MZ)({type:String,json:{write:!0}})],s.prototype,"typeName",void 0),(0,n._)([(0,o.MZ)({type:String,json:{write:!0}})],s.prototype,"id",void 0),s=(0,n._)([(0,i.$)("esri.rest.knowledgeGraph.GraphNamedObject")],s);const p=s},12831:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(35143),o=r(42553),i=r(46053),a=(r(81806),r(76460),r(47249),r(85842));let s=class extends o.oY{constructor(e){super(e),this.properties=null}};(0,n._)([(0,i.MZ)({json:{write:!0}})],s.prototype,"properties",void 0),s=(0,n._)([(0,a.$)("esri.rest.knowledgeGraph.GraphObject")],s);const p=s},35380:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(35143),o=r(46053),i=(r(81806),r(76460),r(47249),r(85842)),a=r(91967);let s=class extends a.A{constructor(e){super(e),this.openCypherQuery=""}};(0,n._)([(0,o.MZ)()],s.prototype,"openCypherQuery",void 0),s=(0,n._)([(0,i.$)("esri.rest.knowledgeGraph.GraphQuery")],s);const p=s;let l=class extends p{constructor(e){super(e),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null,this.provenanceBehavior=null}};(0,n._)([(0,o.MZ)()],l.prototype,"bindParameters",void 0),(0,n._)([(0,o.MZ)()],l.prototype,"bindGeometryQuantizationParameters",void 0),(0,n._)([(0,o.MZ)()],l.prototype,"outputQuantizationParameters",void 0),(0,n._)([(0,o.MZ)()],l.prototype,"outputSpatialReference",void 0),(0,n._)([(0,o.MZ)()],l.prototype,"provenanceBehavior",void 0),l=(0,n._)([(0,i.$)("esri.rest.knowledgeGraph.GraphQueryStreaming")],l);const u=l},38156:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(35143),o=(r(76460),r(81806),r(47249),r(50076),r(85842)),i=r(12831);let a=class extends i.A{constructor(e){super(e)}};a=(0,n._)([(0,o.$)("esri.rest.knowledgeGraph.ObjectValue")],a);const s=a},68325:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(35143),o=r(42553),i=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),s=r(12831);let p=class extends o.oY{constructor(e){super(e),this.path=null}};(0,n._)([(0,i.MZ)({type:[s.A],json:{write:!0}})],p.prototype,"path",void 0),p=(0,n._)([(0,a.$)("esri.rest.knowledgeGraph.Path")],p);const l=p},23908:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(35143),o=(r(35238),r(46053)),i=(r(81806),r(76460),r(47249),r(85842)),a=r(27544),s=r(23701);let p=class extends a.A{constructor(e){super(e),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};(0,n._)([(0,o.MZ)({type:String,json:{write:!0}})],p.prototype,"originId",void 0),(0,n._)([(0,o.MZ)({type:String,json:{write:!0}})],p.prototype,"destinationId",void 0),(0,n._)([(0,o.MZ)({type:s.A,json:{write:!0}})],p.prototype,"layoutGeometry",void 0),p=(0,n._)([(0,i.$)("esri.rest.knowledgeGraph.Relationship")],p);const l=p},70414:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(35143),o=r(42553),i=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),s=r(19902),p=r(80963);let l=class extends o.oY{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map((e=>e.toJSON())),t=this.geometries[0],r={};return r.outSR=(0,p.YX)(this.outSpatialReference),r.inSR=(0,p.YX)(t.spatialReference),r.geometries=JSON.stringify({geometryType:(0,s.$B)(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};(0,n._)([(0,i.MZ)()],l.prototype,"geometries",void 0),(0,n._)([(0,i.MZ)({json:{read:{source:"outSR"}}})],l.prototype,"outSpatialReference",void 0),(0,n._)([(0,i.MZ)()],l.prototype,"transformation",void 0),(0,n._)([(0,i.MZ)()],l.prototype,"transformForward",void 0),l=(0,n._)([(0,a.$)("esri.rest.support.ProjectParameters")],l);const u=l},54994:(e,t,r)=>{r.d(t,{Dl:()=>a,jV:()=>i,lF:()=>s});r(86560),r(55171);var n=r(53084),o=r(90534);r(90924);function i(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function a(e){return"string"==typeof e?(0,o.An)(e):(0,n.o8)(e)}function s(e,t,r){const n={};for(const o in e){if("declaredClass"===o)continue;const i=e[o];if(null!=i&&"function"!=typeof i)if(Array.isArray(i))n[o]=i.map((e=>s(e)));else if("object"==typeof i)if(i.toJSON){const e=i.toJSON(r?.[o]);n[o]=t?e:JSON.stringify(e)}else n[o]=t?i:JSON.stringify(i);else n[o]=i}return n}}}]);
//# sourceMappingURL=4075.ddef5fe4.chunk.js.map