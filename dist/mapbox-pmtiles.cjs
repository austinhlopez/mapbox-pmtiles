"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("mapbox-gl");var t=Math.pow,r=(e,t,r)=>new Promise(((n,i)=>{var o=e=>{try{a(r.next(e))}catch(t){i(t)}},s=e=>{try{a(r.throw(e))}catch(t){i(t)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);a((r=r.apply(e,t)).next())})),n=Uint8Array,i=Uint16Array,o=Int32Array,s=new n([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),a=new n([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),l=new n([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),c=function(e,t){for(var r=new i(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];var s=new o(r[30]);for(n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)s[a]=a-r[n]<<5|n;return{b:r,r:s}},h=c(s,2),u=h.b,d=h.r;u[28]=258,d[258]=28;var f,g=c(a,0).b,m=new i(32768);for(v=0;v<32768;++v)f=(61680&(f=(52428&(f=(43690&v)>>1|(21845&v)<<1))>>2|(13107&f)<<2))>>4|(3855&f)<<4,m[v]=((65280&f)>>8|(255&f)<<8)>>1;var p=function(e,t,r){for(var n=e.length,o=0,s=new i(t);o<n;++o)e[o]&&++s[e[o]-1];var a,l=new i(t);for(o=1;o<t;++o)l[o]=l[o-1]+s[o-1]<<1;if(r){a=new i(1<<t);var c=15-t;for(o=0;o<n;++o)if(e[o])for(var h=o<<4|e[o],u=t-e[o],d=l[e[o]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[m[d]>>c]=h}else for(a=new i(n),o=0;o<n;++o)e[o]&&(a[o]=m[l[e[o]-1]++]>>15-e[o]);return a},y=new n(288);for(v=0;v<144;++v)y[v]=8;for(v=144;v<256;++v)y[v]=9;for(v=256;v<280;++v)y[v]=7;for(v=280;v<288;++v)y[v]=8;var v,w=new n(32);for(v=0;v<32;++v)w[v]=5;var x=p(y,9,1),b=p(w,5,1),T=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},D=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(7&t)&r},U=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},L=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],M=function(e,t,r){var n=new Error(t||L[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,M),!r)throw n;return n},z=function(e,t,r,i){var o=e.length,c=i?i.length:0;if(!o||t.f&&!t.l)return r||new n(0);var h=!r||2!=t.i,d=t.i;r||(r=new n(3*o));var f=function(e){var t=r.length;if(e>t){var i=new n(Math.max(2*t,e));i.set(r),r=i}},m=t.f||0,y=t.p||0,v=t.b||0,w=t.l,L=t.d,z=t.m,E=t.n,C=8*o;do{if(!w){m=D(e,y,1);var A=D(e,y+1,3);if(y+=3,!A){var _=e[(H=4+((y+7)/8|0))-4]|e[H-3]<<8,S=H+_;if(S>o){d&&M(0);break}h&&f(v+_),r.set(e.subarray(H,S),v),t.b=v+=_,t.p=y=8*S,t.f=m;continue}if(1==A)w=x,L=b,z=9,E=5;else if(2==A){var B=D(e,y,31)+257,O=D(e,y+10,15)+4,Z=B+D(e,y+5,31)+1;y+=14;for(var P=new n(Z),k=new n(19),I=0;I<O;++I)k[l[I]]=D(e,y+3*I,7);y+=3*O;var R=T(k),V=(1<<R)-1,$=p(k,R,1);for(I=0;I<Z;){var H,q=$[D(e,y,V)];if(y+=15&q,(H=q>>4)<16)P[I++]=H;else{var j=0,W=0;for(16==H?(W=3+D(e,y,3),y+=2,j=P[I-1]):17==H?(W=3+D(e,y,7),y+=3):18==H&&(W=11+D(e,y,127),y+=7);W--;)P[I++]=j}}var J=P.subarray(0,B),K=P.subarray(B);z=T(J),E=T(K),w=p(J,z,1),L=p(K,E,1)}else M(1);if(y>C){d&&M(0);break}}h&&f(v+131072);for(var N=(1<<z)-1,F=(1<<E)-1,Y=y;;Y=y){var G=(j=w[U(e,y)&N])>>4;if((y+=15&j)>C){d&&M(0);break}if(j||M(2),G<256)r[v++]=G;else{if(256==G){Y=y,w=null;break}var Q=G-254;if(G>264){var X=s[I=G-257];Q=D(e,y,(1<<X)-1)+u[I],y+=X}var ee=L[U(e,y)&F],te=ee>>4;ee||M(3),y+=15&ee;K=g[te];if(te>3){X=a[te];K+=U(e,y)&(1<<X)-1,y+=X}if(y>C){d&&M(0);break}h&&f(v+131072);var re=v+Q;if(v<K){var ne=c-K,ie=Math.min(K,re);for(ne+v<0&&M(3);v<ie;++v)r[v]=i[ne+v]}for(;v<re;v+=4)r[v]=r[v-K],r[v+1]=r[v+1-K],r[v+2]=r[v+2-K],r[v+3]=r[v+3-K];v=re}}t.l=w,t.p=Y,t.b=v,t.f=m,w&&(m=1,t.m=z,t.d=L,t.n=E)}while(!m);return v==r.length?r:function(e,t,r){(null==t||t<0)&&(t=0),(null==r||r>e.length)&&(r=e.length);var i=new n(r-t);return i.set(e.subarray(t,r)),i}(r,0,v)},E=new n(0),C=function(e){31==e[0]&&139==e[1]&&8==e[2]||M(6,"invalid gzip data");var t=e[3],r=10;4&t&&(r+=2+(e[10]|e[11]<<8));for(var n=(t>>3&1)+(t>>4&1);n>0;n-=!e[r++]);return r+(2&t)},A=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},_=function(e,t){return(8!=(15&e[0])||e[0]>>4>7||(e[0]<<8|e[1])%31)&&M(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&M(6,"invalid zlib data: "+(32&e[1]?"need":"unexpected")+" dictionary"),2+(e[1]>>3&4)};function S(e,t){return 31==e[0]&&139==e[1]&&8==e[2]?function(e,t){var r=C(e);return r+8>e.length&&M(6,"invalid gzip data"),z(e.subarray(r,-8),{i:2},t&&t.out||new n(A(e)),t&&t.dictionary)}(e,t):8!=(15&e[0])||e[0]>>4>7||(e[0]<<8|e[1])%31?function(e,t){return z(e,{i:2},t&&t.out,t&&t.dictionary)}(e,t):function(e,t){return z(e.subarray(_(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}(e,t)}var B="undefined"!=typeof TextDecoder&&new TextDecoder;try{B.decode(E,{stream:!0}),1}catch(ye){}var O=(e,r)=>e*t(2,r),Z=(e,r)=>Math.floor(e/t(2,r)),P=(e,t)=>O(e.getUint16(t+1,!0),8)+e.getUint8(t),k=(e,t)=>O(e.getUint32(t+2,!0),16)+e.getUint16(t,!0),I=(e,t,r,n,i)=>{if(e!==n.getUint8(i))return e-n.getUint8(i);const o=P(n,i+1);if(t!==o)return t-o;const s=P(n,i+4);return r!==s?r-s:0},R=(e,t,r,n)=>{const i=V(e,t,r,n);return i?{z:t,x:r,y:n,offset:i[0],length:i[1],isDir:!1}:null},V=(e,t,r,n)=>{let i=0,o=e.byteLength/17-1;for(;i<=o;){const s=o+i>>1,a=I(t,r,n,e,17*s);if(a>0)i=s+1;else{if(!(a<0))return[k(e,17*s+7),e.getUint32(17*s+13,!0)];o=s-1}}return null},$=(e,t)=>e.isDir&&!t.isDir?1:!e.isDir&&t.isDir?-1:e.z!==t.z?e.z-t.z:e.x!==t.x?e.x-t.x:e.y-t.y,H=(e,t)=>{const r=e.getUint8(17*t);return{z:127&r,x:P(e,17*t+1),y:P(e,17*t+4),offset:k(e,17*t+7),length:e.getUint32(17*t+13,!0),isDir:r>>7==1}},q=e=>{const t=[],r=new DataView(e);for(let n=0;n<r.byteLength/17;n++)t.push(H(r,n));return j(t)},j=e=>{e.sort($);const t=new ArrayBuffer(17*e.length),r=new Uint8Array(t);for(let n=0;n<e.length;n++){const t=e[n];let i=t.z;t.isDir&&(i|=128),r[17*n]=i,r[17*n+1]=255&t.x,r[17*n+2]=t.x>>8&255,r[17*n+3]=t.x>>16&255,r[17*n+4]=255&t.y,r[17*n+5]=t.y>>8&255,r[17*n+6]=t.y>>16&255,r[17*n+7]=255&t.offset,r[17*n+8]=255&Z(t.offset,8),r[17*n+9]=255&Z(t.offset,16),r[17*n+10]=255&Z(t.offset,24),r[17*n+11]=255&Z(t.offset,32),r[17*n+12]=255&Z(t.offset,48),r[17*n+13]=255&t.length,r[17*n+14]=t.length>>8&255,r[17*n+15]=t.length>>16&255,r[17*n+16]=t.length>>24&255}return t};var W={getHeader:function(e){return r(this,null,(function*(){const t=yield e.getBytes(0,512e3),r=new DataView(t.data),n=r.getUint32(4,!0),i=r.getUint16(8,!0),o=new TextDecoder("utf-8"),s=JSON.parse(o.decode(new DataView(t.data,10,n)));let a=0;"gzip"===s.compression&&(a=2);let l=0;"minzoom"in s&&(l=+s.minzoom);let c=0;"maxzoom"in s&&(c=+s.maxzoom);let h=0,u=0,d=0,f=-180,g=-85,m=180,p=85;if(s.bounds){const e=s.bounds.split(",");f=+e[0],g=+e[1],m=+e[2],p=+e[3]}if(s.center){const e=s.center.split(",");h=+e[0],u=+e[1],d=+e[2]}return{specVersion:r.getUint16(2,!0),rootDirectoryOffset:10+n,rootDirectoryLength:17*i,jsonMetadataOffset:10,jsonMetadataLength:n,leafDirectoryOffset:0,leafDirectoryLength:void 0,tileDataOffset:0,tileDataLength:void 0,numAddressedTiles:0,numTileEntries:0,numTileContents:0,clustered:!1,internalCompression:1,tileCompression:a,tileType:1,minZoom:l,maxZoom:c,minLon:f,minLat:g,maxLon:m,maxLat:p,centerZoom:d,centerLon:h,centerLat:u,etag:t.etag}}))},getZxy:function(e,t,n,i,o,s,a){return r(this,null,(function*(){let r=yield n.getArrayBuffer(t,e.rootDirectoryOffset,e.rootDirectoryLength,e);1===e.specVersion&&(r=q(r));const l=R(new DataView(r),i,o,s);if(l){let e=(yield t.getBytes(l.offset,l.length,a)).data;const r=new DataView(e);return 31===r.getUint8(0)&&139===r.getUint8(1)&&(e=S(new Uint8Array(e))),{data:e}}const c=((e,t)=>{if(e.byteLength<17)return null;const r=e.byteLength/17,n=H(e,r-1);if(n.isDir){const e=n.z,r=t.z-e;return{z:e,x:Math.trunc(t.x/(1<<r)),y:Math.trunc(t.y/(1<<r))}}return null})(new DataView(r),{z:i,x:o,y:s});if(c){const l=((e,t,r,n)=>{const i=V(e,128|t,r,n);return i?{z:t,x:r,y:n,offset:i[0],length:i[1],isDir:!0}:null})(new DataView(r),c.z,c.x,c.y);if(l){let r=yield n.getArrayBuffer(t,l.offset,l.length,e);1===e.specVersion&&(r=q(r));const c=R(new DataView(r),i,o,s);if(c){let e=(yield t.getBytes(c.offset,c.length,a)).data;const r=new DataView(e);return 31===r.getUint8(0)&&139===r.getUint8(1)&&(e=S(new Uint8Array(e))),{data:e}}}}}))}},J=class{constructor(){var e;this.tilev4=(e,t)=>r(this,null,(function*(){if("json"===e.type){const t=e.url.substr(10);let r=this.tiles.get(t);r||(r=new se(t),this.tiles.set(t,r));const n=yield r.getHeader();return{data:{tiles:[`${e.url}/{z}/{x}/{y}`],minzoom:n.minZoom,maxzoom:n.maxZoom,bounds:[n.minLon,n.minLat,n.maxLon,n.maxLat]}}}const r=new RegExp(/pmtiles:\/\/(.+)\/(\d+)\/(\d+)\/(\d+)/),n=e.url.match(r);if(!n)throw new Error("Invalid PMTiles protocol URL");const i=n[1];let o=this.tiles.get(i);o||(o=new se(i),this.tiles.set(i,o));const s=n[2],a=n[3],l=n[4],c=yield o.getHeader(),h=yield null==o?void 0:o.getZxy(+s,+a,+l,t.signal);return h?{data:new Uint8Array(h.data),cacheControl:h.cacheControl,expires:h.expires}:1===c.tileType?{data:new Uint8Array}:{data:null}})),this.tile=(e=this.tilev4,(t,r)=>{if(r instanceof AbortController)return e(t,r);const n=new AbortController;return e(t,n).then((e=>r(void 0,e.data,e.cacheControl||"",e.expires||"")),(e=>r(e))).catch((e=>r(e))),{cancel:()=>n.abort()}}),this.tiles=new Map}add(e){this.tiles.set(e.source.getKey(),e)}get(e){return this.tiles.get(e)}};function K(e,t){return 4294967296*(t>>>0)+(e>>>0)}function N(e){const t=e.buf;let r=t[e.pos++],n=127&r;return r<128?n:(r=t[e.pos++],n|=(127&r)<<7,r<128?n:(r=t[e.pos++],n|=(127&r)<<14,r<128?n:(r=t[e.pos++],n|=(127&r)<<21,r<128?n:(r=t[e.pos],n|=(15&r)<<28,function(e,t){const r=t.buf;let n=r[t.pos++],i=(112&n)>>4;if(n<128)return K(e,i);if(n=r[t.pos++],i|=(127&n)<<3,n<128)return K(e,i);if(n=r[t.pos++],i|=(127&n)<<10,n<128)return K(e,i);if(n=r[t.pos++],i|=(127&n)<<17,n<128)return K(e,i);if(n=r[t.pos++],i|=(127&n)<<24,n<128)return K(e,i);if(n=r[t.pos++],i|=(1&n)<<31,n<128)return K(e,i);throw new Error("Expected varint not more than 10 bytes")}(n,e)))))}function F(e,t,r,n){if(0===n){1===r&&(t[0]=e-1-t[0],t[1]=e-1-t[1]);const n=t[0];t[0]=t[1],t[1]=n}}var Y=[0,1,5,21,85,341,1365,5461,21845,87381,349525,1398101,5592405,22369621,89478485,357913941,1431655765,5726623061,22906492245,91625968981,366503875925,1466015503701,5864062014805,23456248059221,93824992236885,375299968947541,0x5555555555555];function G(e,t){return r(this,null,(function*(){if(1===t||0===t)return e;if(2===t){if(void 0===globalThis.DecompressionStream)return S(new Uint8Array(e));const t=new Response(e).body;if(!t)throw Error("Failed to read response stream");const r=t.pipeThrough(new globalThis.DecompressionStream("gzip"));return new Response(r).arrayBuffer()}throw Error("Compression method not supported")}))}var Q=(e=>(e[e.Unknown=0]="Unknown",e[e.Mvt=1]="Mvt",e[e.Png=2]="Png",e[e.Jpeg=3]="Jpeg",e[e.Webp=4]="Webp",e[e.Avif=5]="Avif",e))(Q||{});function X(e,t){let r=0,n=e.length-1;for(;r<=n;){const i=n+r>>1,o=t-e[i].tileId;if(o>0)r=i+1;else{if(!(o<0))return e[i];n=i-1}}if(n>=0){if(0===e[n].runLength)return e[n];if(t-e[n].tileId<e[n].runLength)return e[n]}return null}var ee=class{constructor(e,t=new Headers){this.url=e,this.customHeaders=t,this.mustReload=!1}getKey(){return this.url}setHeaders(e){this.customHeaders=e}getBytes(e,t,n,i){return r(this,null,(function*(){let r,o;n?o=n:(r=new AbortController,o=r.signal);const s=new Headers(this.customHeaders);let a;s.set("range",`bytes=${e}-${e+t-1}`),this.mustReload&&(a="reload");let l=yield fetch(this.url,{signal:o,cache:a,headers:s});if(0===e&&416===l.status){const e=l.headers.get("Content-Range");if(!e||!e.startsWith("bytes */"))throw Error("Missing content-length on 416 response");const t=+e.substr(8);l=yield fetch(this.url,{signal:o,cache:"reload",headers:{range:"bytes=0-"+(t-1)}})}let c=l.headers.get("Etag");if((null==c?void 0:c.startsWith("W/"))&&(c=null),416===l.status||i&&c&&c!==i)throw this.mustReload=!0,new ne(i);if(l.status>=300)throw Error(`Bad response code: ${l.status}`);const h=l.headers.get("Content-Length");if(200===l.status&&(!h||+h>t))throw r&&r.abort(),Error("Server returned no content-length header or content-length exceeding request. Check that your storage backend supports HTTP Byte Serving.");return{data:yield l.arrayBuffer(),etag:c||void 0,cacheControl:l.headers.get("Cache-Control")||void 0,expires:l.headers.get("Expires")||void 0}}))}};function te(e,r){const n=e.getUint32(r+4,!0),i=e.getUint32(r+0,!0);return n*t(2,32)+i}function re(e){const t={buf:new Uint8Array(e),pos:0},r=N(t),n=[];let i=0;for(let o=0;o<r;o++){const e=N(t);n.push({tileId:i+e,offset:0,length:0,runLength:1}),i+=e}for(let o=0;o<r;o++)n[o].runLength=N(t);for(let o=0;o<r;o++)n[o].length=N(t);for(let o=0;o<r;o++){const e=N(t);n[o].offset=0===e&&o>0?n[o-1].offset+n[o-1].length:e-1}return n}var ne=class extends Error{};function ie(e,t){return r(this,null,(function*(){const r=yield e.getBytes(0,16384);if(19792!==new DataView(r.data).getUint16(0,!0))throw new Error("Wrong magic number for PMTiles archive");if(function(e){const t=new DataView(e);return 2===t.getUint16(2,!0)?(console.warn("PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"),2):1===t.getUint16(2,!0)?(console.warn("PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"),1):3}(r.data)<3)return[yield W.getHeader(e)];const n=function(e,t){const r=new DataView(e),n=r.getUint8(7);if(n>3)throw Error(`Archive is spec version ${n} but this library supports up to spec version 3`);return{specVersion:n,rootDirectoryOffset:te(r,8),rootDirectoryLength:te(r,16),jsonMetadataOffset:te(r,24),jsonMetadataLength:te(r,32),leafDirectoryOffset:te(r,40),leafDirectoryLength:te(r,48),tileDataOffset:te(r,56),tileDataLength:te(r,64),numAddressedTiles:te(r,72),numTileEntries:te(r,80),numTileContents:te(r,88),clustered:1===r.getUint8(96),internalCompression:r.getUint8(97),tileCompression:r.getUint8(98),tileType:r.getUint8(99),minZoom:r.getUint8(100),maxZoom:r.getUint8(101),minLon:r.getInt32(102,!0)/1e7,minLat:r.getInt32(106,!0)/1e7,maxLon:r.getInt32(110,!0)/1e7,maxLat:r.getInt32(114,!0)/1e7,centerZoom:r.getUint8(118),centerLon:r.getInt32(119,!0)/1e7,centerLat:r.getInt32(123,!0)/1e7,etag:t}}(r.data.slice(0,127),r.etag),i=r.data.slice(n.rootDirectoryOffset,n.rootDirectoryOffset+n.rootDirectoryLength),o=`${e.getKey()}|${n.etag||""}|${n.rootDirectoryOffset}|${n.rootDirectoryLength}`,s=re(yield t(i,n.internalCompression));return[n,[o,s.length,s]]}))}var oe=class{constructor(e=100,t=!0,r=G){this.cache=new Map,this.invalidations=new Map,this.maxCacheEntries=e,this.counter=1,this.decompress=r}getHeader(e){return r(this,null,(function*(){const t=e.getKey(),r=this.cache.get(t);if(r){r.lastUsed=this.counter++;return yield r.data}const n=new Promise(((t,r)=>{ie(e,this.decompress).then((e=>{e[1]&&this.cache.set(e[1][0],{lastUsed:this.counter++,data:Promise.resolve(e[1][2])}),t(e[0]),this.prune()})).catch((e=>{r(e)}))}));return this.cache.set(t,{lastUsed:this.counter++,data:n}),n}))}getDirectory(e,t,n,i){return r(this,null,(function*(){const o=`${e.getKey()}|${i.etag||""}|${t}|${n}`,s=this.cache.get(o);if(s){s.lastUsed=this.counter++;return yield s.data}const a=new Promise(((o,s)=>{(function(e,t,n,i,o){return r(this,null,(function*(){const r=yield e.getBytes(n,i,void 0,o.etag),s=re(yield t(r.data,o.internalCompression));if(0===s.length)throw new Error("Empty directory is invalid");return s}))})(e,this.decompress,t,n,i).then((e=>{o(e),this.prune()})).catch((e=>{s(e)}))}));return this.cache.set(o,{lastUsed:this.counter++,data:a}),a}))}getArrayBuffer(e,t,n,i){return r(this,null,(function*(){const r=`${e.getKey()}|${i.etag||""}|${t}|${n}`,o=this.cache.get(r);if(o){o.lastUsed=this.counter++;return yield o.data}const s=new Promise(((o,s)=>{e.getBytes(t,n,void 0,i.etag).then((e=>{o(e.data),this.cache.has(r),this.prune()})).catch((e=>{s(e)}))}));return this.cache.set(r,{lastUsed:this.counter++,data:s}),s}))}prune(){if(this.cache.size>=this.maxCacheEntries){let e,t=1/0;this.cache.forEach(((r,n)=>{r.lastUsed<t&&(t=r.lastUsed,e=n)})),e&&this.cache.delete(e)}}invalidate(e){return r(this,null,(function*(){const t=e.getKey();if(this.invalidations.get(t))return yield this.invalidations.get(t);this.cache.delete(e.getKey());const r=new Promise(((r,n)=>{this.getHeader(e).then((e=>{r(),this.invalidations.delete(t)})).catch((e=>{n(e)}))}));this.invalidations.set(t,r)}))}},se=class{constructor(e,t,r){this.source="string"==typeof e?new ee(e):e,this.decompress=r||G,this.cache=t||new oe}getHeader(){return r(this,null,(function*(){return yield this.cache.getHeader(this.source)}))}getZxyAttempt(e,n,i,o){return r(this,null,(function*(){const r=function(e,r,n){if(e>26)throw Error("Tile zoom level exceeds max safe number limit (26)");if(r>t(2,e)-1||n>t(2,e)-1)throw Error("tile x/y outside zoom level bounds");const i=Y[e];let o=0,s=0,a=0;const l=[r,n];let c=t(2,e)/2;for(;c>0;)o=(l[0]&c)>0?1:0,s=(l[1]&c)>0?1:0,a+=c*c*(3*o^s),F(c,l,o,s),c/=2;return i+a}(e,n,i),s=yield this.cache.getHeader(this.source);if(s.specVersion<3)return W.getZxy(s,this.source,this.cache,e,n,i,o);if(e<s.minZoom||e>s.maxZoom)return;let a=s.rootDirectoryOffset,l=s.rootDirectoryLength;for(let e=0;e<=3;e++){const e=X(yield this.cache.getDirectory(this.source,a,l,s),r);if(!e)return;if(e.runLength>0){const t=yield this.source.getBytes(s.tileDataOffset+e.offset,e.length,o,s.etag);return{data:yield this.decompress(t.data,s.tileCompression),cacheControl:t.cacheControl,expires:t.expires}}a=s.leafDirectoryOffset+e.offset,l=e.length}throw Error("Maximum directory depth exceeded")}))}getZxy(e,t,n,i){return r(this,null,(function*(){try{return yield this.getZxyAttempt(e,t,n,i)}catch(ye){if(ye instanceof ne)return this.cache.invalidate(this.source),yield this.getZxyAttempt(e,t,n,i);throw ye}}))}getMetadataAttempt(){return r(this,null,(function*(){const e=yield this.cache.getHeader(this.source),t=yield this.source.getBytes(e.jsonMetadataOffset,e.jsonMetadataLength,void 0,e.etag),r=yield this.decompress(t.data,e.internalCompression),n=new TextDecoder("utf-8");return JSON.parse(n.decode(r))}))}getMetadata(){return r(this,null,(function*(){try{return yield this.getMetadataAttempt()}catch(ye){if(ye instanceof ne)return this.cache.invalidate(this.source),yield this.getMetadataAttempt();throw ye}}))}};const ae=e.Style.getSourceType("vector"),le="pmtile-source",ce=(e,...t)=>{for(const r of t)for(const t in r)e[t]=r[t];return e},he=e=>(180+e)/360,ue=e=>(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+e*Math.PI/360)))/360;class de{constructor(t,r,n){this.bounds=e.LngLatBounds.convert(this.validateBounds(t)),this.minzoom=r||0,this.maxzoom=n||24}validateBounds(e){return Array.isArray(e)&&4===e.length?[Math.max(-180,e[0]),Math.max(-90,e[1]),Math.min(180,e[2]),Math.min(90,e[3])]:[-180,-90,180,90]}contains(e){const t=Math.pow(2,e.z),r=Math.floor(he(this.bounds.getWest())*t),n=Math.floor(ue(this.bounds.getNorth())*t),i=Math.ceil(he(this.bounds.getEast())*t),o=Math.ceil(ue(this.bounds.getSouth())*t);return e.x>=r&&e.x<i&&e.y>=n&&e.y<o}}class fe{constructor(e,t={}){ce(this,t),this.type=e}}class ge extends fe{constructor(e,t={}){super("error",ce({error:e},t))}}const me=class extends ae{constructor(e,t,r,n){super(e,t,r,n),this.scheme="xyz",this.roundZoom=!0,this.type="vector",this.dispatcher=void 0,this.reparseOverscaled=!0,this._loaded=!1,this._dataType="vector",this.id=e,this._dataType="vector",this.dispatcher=r,this._implementation=t,this._implementation||this.fire(new ge(new Error(`Missing options for ${this.id} ${le} source`)));const{url:i}=t;this.reparseOverscaled=!0,this.scheme="xyz",this.tileSize=512,this._loaded=!1,this.type="vector",this._protocol=new J,this.tiles=[`pmtiles://${i}/{z}/{x}/{y}`];const o=new se(i);this._protocol.add(o),this._instance=o}static async getMetadata(e){return new se(e).getMetadata()}static async getHeader(e){return new se(e).getHeader()}getExtent(){if(!this.header)return[[-180,-90],[180,90]];const{minZoom:e,maxZoom:t,minLon:r,minLat:n,maxLon:i,maxLat:o,centerZoom:s,centerLon:a,centerLat:l}=this.header;return[r,n,i,o]}hasTile(e){return!this.tileBounds||this.tileBounds.contains(e.canonical)}async load(e){return this._loaded=!1,this.fire(new fe("dataloading",{dataType:"source"})),this._tileJSONRequest=Promise.all([this._instance.getHeader(),this._instance.getMetadata()]).then((([e,t])=>{ce(this,t),this.header=e;const{specVersion:r,clustered:n,tileType:i,minZoom:o,maxZoom:s,minLon:a,minLat:l,maxLon:c,maxLat:h,centerZoom:u,centerLon:d,centerLat:f}=e,g=[o,s,a,l,c,h];switch(g.includes(void 0)||g.includes(null)||(this.tileBounds=new de([a,l,c,h],o,s),this.minzoom=o,this.maxzoom=s),null==this.maxzoom&&console.warn("The maxzoom parameter is not defined in the source json. This can cause memory leak. So make sure to define maxzoom in the layer"),this.minzoom=Number.parseInt(this.minzoom.toString())||0,this.maxzoom=Number.parseInt(this.maxzoom.toString())||0,this._tileJSONRequest=void 0,this._loaded=!0,this.tileType=i,i){case Q.Png:this.contentType="image/png";break;case Q.Jpeg:this.contentType="image/jpeg";break;case Q.Webp:this.contentType="image/webp";break;case Q.Avif:this.contentType="image/avif";break;case Q.Mvt:this.contentType="application/vnd.mapbox-vector-tile"}[Q.Jpeg,Q.Png].includes(this.tileType)?(this.loadTile=this.loadRasterTile,this.type="raster"):this.tileType===Q.Mvt?(this.loadTile=this.loadVectorTile,this.type="vector"):this.fire(new ge(new Error("Unsupported Tile Type"))),this.fire(new fe("data",{dataType:"source",sourceDataType:"metadata"})),this.fire(new fe("data",{dataType:"source",sourceDataType:"content"}))})).catch((t=>{this.fire(new ge(t)),e&&e(t)})),this._tileJSONRequest}loaded(){return this._loaded}loadVectorTile(e,t){var r,n,i;const o=(r,n)=>{var i,o;return delete e.request,e.aborted?t(null):r&&404!==r.status?t(r):(n&&n.resourceTiming&&(e.resourceTiming=n.resourceTiming),(null==(i=this.map)?void 0:i._refreshExpiredTiles)&&n&&e.setExpiryData(n),e.loadVectorData(n,null==(o=this.map)?void 0:o.painter),t(null),void(e.reloadCallback&&(this.loadVectorTile(e,e.reloadCallback),e.reloadCallback=null)))},s=null==(r=this.map)?void 0:r._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme)),a=null==(n=this.map)?void 0:n._requestManager.transformRequest(s,"Tile"),l={request:a,data:{},uid:e.uid,tileID:e.tileID,tileZoom:e.tileZoom,zoom:e.tileID.overscaledZ,tileSize:this.tileSize*e.tileID.overscaleFactor(),type:"vector",source:this.id,scope:this.scope,showCollisionBoxes:null==(i=this.map)?void 0:i.showCollisionBoxes,promoteId:this.promoteId,isSymbolTile:e.isSymbolTile,extraShadowCaster:e.isExtraShadowCaster},c=(t,r,n,i)=>{!t&&r?(l.data={cacheControl:n,expires:i,rawData:r},this.map._refreshExpiredTiles&&e.setExpiryData({cacheControl:n,expires:i}),e.actor&&e.actor.send("loadTile",l,o.bind(this),void 0,!0)):o.call(this,t)};e.actor&&"expired"!==e.state?"loading"===e.state?e.reloadCallback=t:e.request=this._protocol.tile({...e,url:s},c):(e.actor=this._tileWorkers[s]=this._tileWorkers[s]||this.dispatcher.getActor(),e.request=this._protocol.tile({...a},c))}loadRasterTileData(e,t){e.setTexture(t,this.map.painter)}loadRasterTile(e,t){var r,n;const i=null==(r=this.map)?void 0:r._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme)),o=null==(n=this.map)?void 0:n._requestManager.transformRequest(i,"Tile"),s=new AbortController;e.request={cancel:()=>s.abort()},this._protocol.tile(o,s).then((({data:r,cacheControl:n,expires:i})=>{if(delete e.request,e.aborted)return t(null);if(null==r){const r={width:this.tileSize,height:this.tileSize,data:null};return this.loadRasterTileData(e,r),e.state="loaded",t(null)}r&&r.resourceTiming&&(e.resourceTiming=r.resourceTiming),this.map._refreshExpiredTiles&&e.setExpiryData({cacheControl:n,expires:i});const o=new window.Blob([new Uint8Array(r)],{type:"image/png"});window.createImageBitmap(o).then((r=>{this.loadRasterTileData(e,r),e.state="loaded",t(null)})).catch((r=>(e.state="errored",t(new Error(`Can't infer data type for ${this.id}, only raster data supported at the moment. ${r}`)))))}).bind(this)).catch((r=>{20!==r.code&&(e.state="errored",t(r))}))}};me.SOURCE_TYPE=le;let pe=me;exports.PmTilesSource=pe,exports.SOURCE_TYPE=le,exports.default=pe;
