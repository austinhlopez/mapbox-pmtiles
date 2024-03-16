"use strict";(self.webpackChunkdocs_src=self.webpackChunkdocs_src||[]).push([[594],{8897:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var i=t(4848),n=t(8453);const o={id:"index",title:"mapbox-pmtiles",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},l="Mapbox-PmTiles",r={id:"api/index",title:"mapbox-pmtiles",description:"NPM Build",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/mapbox-pmtiles/docs/api/",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"mapbox-pmtiles",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",next:{title:"Exports",permalink:"/mapbox-pmtiles/docs/api/modules"}},a={},m=[{value:"ESM Module",id:"esm-module",level:2},{value:"JSDeliver",id:"jsdeliver",level:2},{value:"What is PmTiles",id:"what-is-pmtiles",level:2}];function p(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"mapbox-pmtiles",children:"Mapbox-PmTiles"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/am2222/mapbox-pmtiles/actions/workflows/build.yml",children:(0,i.jsx)(s.img,{src:"https://github.com/am2222/mapbox-pmtiles/actions/workflows/build.yml/badge.svg",alt:"NPM Build"})})," ",(0,i.jsx)(s.a,{href:"https://www.jsdelivr.com/package/npm/mapbox-pmtiles",children:(0,i.jsx)(s.img,{src:"https://data.jsdelivr.com/v1/package/npm/mapbox-pmtiles/badge",alt:""})})]}),"\n",(0,i.jsx)(s.p,{children:"Add PmTiles support to mapbox"}),"\n",(0,i.jsx)(s.h1,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s.h2,{id:"esm-module",children:"ESM Module"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'import mapboxgl from "mapbox-gl";\n\nimport { PmTilesSource } from "mapbox-pmtiles";\n//Define custom source\nmapboxgl.Style.setSourceType(PmTilesSource.SOURCE_TYPE, PmTilesSource);\n\nmap.on("load", () => {\n\n    const PMTILES_URL =\n    "https://r2-public.protomaps.com/protomaps-sample-datasets/protomaps-basemap-opensource-20230408.pmtiles";\n\n    map.addSource("pmTileSourceName", {\n    type: PmTilesSource.SOURCE_TYPE, //Add this line\n    url: PMTILES_URL,\n    maxzoom: 10,\n    });\n\n    map.current.showTileBoundaries = true;\n    map.current.addLayer({\n        id: "places",\n        source: "pmTileSourceName",\n        "source-layer": "places",\n        type: "circle",\n        paint: {\n            "circle-color": "steelblue",\n        },\n        maxzoom: 14,\n    });\n});\n\n'})}),"\n",(0,i.jsx)(s.h2,{id:"jsdeliver",children:"JSDeliver"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:"\n<script type=\"module\">\nimport mapboxPmtiles from 'https://cdn.jsdelivr.net/npm/mapbox-pmtiles/+esm'\n<\/script>\n\n"})}),"\n",(0,i.jsx)(s.h2,{id:"what-is-pmtiles",children:"What is PmTiles"}),"\n",(0,i.jsxs)(s.p,{children:["See the ",(0,i.jsx)(s.a,{href:"https://docs.protomaps.com/pmtiles/",children:"PmTiles"})," repository for more information"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>r});var i=t(6540);const n={},o=i.createContext(n);function l(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);