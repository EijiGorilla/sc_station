"use strict";(self.webpackChunksc_station=self.webpackChunksc_station||[]).push([[2544],{62544:(e,r,a)=>{a.r(r),a.d(r,{fromUrl:()=>f});var t=a(50076),s=a(90534),n=a(13096),l=a(39323),o=a(11668),c=a(31933),u=a(62487),i=a(67061);const y={FeatureLayer:!0,SceneLayer:!0};async function f(e){const{properties:r,url:t}=e,s={...r,url:t},n=await w(t,r?.customParameters),{Constructor:l,layerId:o,sourceJSON:c,parsedUrl:u,layers:i,tables:y}=n;if(i.length+y.length===0)return null!=o&&(s.layerId=o),null!=c&&(s.sourceJSON=c),new l(s);const f=new(0,(await Promise.resolve().then(a.bind(a,16095))).default)({title:u.title});return await async function(e,r,a){const t=r.sublayerConstructorProvider;for(const{id:s,serverUrl:n}of r.layers){const l=p(r.sublayerInfos,s),o=d(n,s,l,(l&&t?.(l))??r.Constructor,a);e.add(o)}if(r.tables.length){const t=await v("FeatureLayer");r.tables.forEach((s=>{let{id:n,serverUrl:l}=s;const o=d(l,n,p(r.tableInfos,n),t,a);e.tables.add(o)}))}}(f,n,s),f}function p(e,r){return e?e.find((e=>{let{id:a}=e;return a===r})):null}function d(e,r,a,t,s){const n={...s,layerId:r};return null!=e&&(n.url=e),null!=a&&(n.sourceJSON=a),"sublayerTitleMode"in t.prototype&&(n.sublayerTitleMode="service-name"),new t(n)}async function w(e,r){let a=(0,n.qg)(e);if(null==a&&(a=await async function(e,r){const a=await(0,i.V)(e,{customParameters:r});let t=null,l=null;const o=a.type;if("Feature Layer"===o||"Table"===o?(t="FeatureServer",l=a.id??null):"indexedVector"===o?t="VectorTileServer":a.hasOwnProperty("mapName")?t="MapServer":a.hasOwnProperty("bandCount")&&a.hasOwnProperty("pixelSizeX")?t="ImageServer":a.hasOwnProperty("maxRecordCount")&&a.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":a.hasOwnProperty("streamUrls")?t="StreamServer":m(a)?(t="SceneServer",l=a.id):a.hasOwnProperty("layers")&&m(a.layers?.[0])&&(t="SceneServer"),!t)return null;const c=null!=l?(0,n.iz)(e):null;return{title:null!=c&&a.name||(0,s.e7)(e),serverType:t,sublayer:l,url:{path:null!=c?c.serviceUrl:(0,s.An)(e).path}}}(e,r)),null==a)throw new t.A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:u,sublayer:f}=a;let p;const d={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},w="FeatureServer"===u,S="SceneServer"===u,b={parsedUrl:a,Constructor:null,layerId:w||S?f??void 0:void 0,layers:[],tables:[]};switch(u){case"MapServer":if(null!=f){const{type:a}=await(0,i.V)(e,{customParameters:r});switch(p="FeatureLayer",a){case"Catalog Layer":p="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new t.A("arcgis-layers:unsupported",`fromUrl() not supported for "${a}" layers`)}}else p=await async function(e,r){return(await(0,i.V)(e,{customParameters:r})).tileInfo}(e,r)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const a=await(0,i.V)(e,{customParameters:r}),{tileInfo:t,cacheType:s}=a;p=t?"LERC"!==t?.format?.toUpperCase()||s&&"elevation"!==s.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,i.V)(a.url.path,{customParameters:r});if(p="SceneLayer",e){const r=e?.layers;if("Voxel"===e?.layerType)p="VoxelLayer";else if(r?.length){const e=r[0]?.layerType;null!=e&&null!=c.XX[e]&&(p=c.XX[e])}}break}case"3DTilesServer":throw new t.A("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(p="FeatureLayer",null!=f){const a=await(0,i.V)(e,{customParameters:r});b.sourceJSON=a,p=(0,o.K)(a.type)}break;default:p=d[u]}if(y[p]&&null==f){const a=await async function(e,r,a){let t,s,n=!1;switch(r){case"FeatureServer":{const r=await(0,o.Q)(e,{customParameters:a});n=!!r.layersJSON,t=r.layersJSON||r.serviceJSON;break}case"SceneServer":{const r=await async function(e,r){const a=await(0,i.V)(e,{customParameters:r}),t=a.layers?.[0];if(!t)return{serviceInfo:a};try{const{serverUrl:t}=await(0,l.L)(e),s=await(0,i.V)(t,{customParameters:r}).catch((()=>null));return s&&(a.tables=s.tables),{serviceInfo:a,tableServerUrl:t}}catch{return{serviceInfo:a}}}(e,a);t=r.serviceInfo,s=r.tableServerUrl;break}default:t=await(0,i.V)(e,{customParameters:a})}const c=t?.layers,u=t?.tables;return{layers:c?.map((e=>({id:e.id}))).reverse()||[],tables:u?.map((e=>({serverUrl:s,id:e.id}))).reverse()||[],layerInfos:n?c:[],tableInfos:n?u:[]}}(e,u,r);if(w&&(b.sublayerInfos=a.layerInfos,b.tableInfos=a.tableInfos),1!==a.layers.length+a.tables.length)b.layers=a.layers,b.tables=a.tables,w&&a.layerInfos?.length&&(b.sublayerConstructorProvider=await async function(e){if(!e.length)return;const r=new Set,a=[];for(const{type:n}of e)r.has(n)||(r.add(n),a.push(v((0,o.K)(n))));const t=await Promise.all(a),s=new Map;return Array.from(r).forEach(((e,r)=>{s.set(e,t[r])})),e=>s.get(e.type)}(a.layerInfos));else if(w||S){const e=a.layerInfos?.[0]??a.tableInfos?.[0];if(b.layerId=a.layers[0]?.id??a.tables[0]?.id,b.sourceJSON=e,w){const r=e?.type;p=(0,o.K)(r)}}}return b.Constructor=await v(p),b}function m(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function v(e){return(0,u.S[e])()}},11668:(e,r,a)=>{a.d(r,{K:()=>f,Q:()=>n});var t=a(67061);const s=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function n(e,r){const{loadContext:a,...s}=r||{},n=a?await a.fetchServiceMetadata(e,s):await(0,t.V)(e,s);y(n),c(n);const l={serviceJSON:n};if((n.currentVersion??0)<10.5)return l;const o=`${e}/layers`,u=a?await a.fetchServiceMetadata(o,s):await(0,t.V)(o,s);return y(u),c(u),l.layersJSON={layers:u.layers,tables:u.tables},l}function l(e){const{type:r}=e;return!!r&&s.has(r)}function o(e){return"Table"===e.type}function c(e){e.layers=e.layers?.filter(l),e.tables=e.tables?.filter(o)}function u(e){e.type||="Feature Layer"}function i(e){e.type||="Table"}function y(e){e.layers?.forEach(u),e.tables?.forEach(i)}function f(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},67061:(e,r,a)=>{a.d(r,{V:()=>s});var t=a(3825);async function s(e,r){const{data:a}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...r?.customParameters,token:r?.apiKey}});return a}}}]);
//# sourceMappingURL=2544.09dfffd5.chunk.js.map