(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25],{25273:(e,t,s)=>{"use strict";s.r(t),s.d(t,{contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>u,toc:()=>l});var n=s(87462),r=(s(67294),s(3905)),o=s(93456);const d={},i="New OrderPublish",u={unversionedId:"Pishon4/po_design/new_order_publish",id:"Pishon4/po_design/new_order_publish",isDocsHomePage:!1,title:"New OrderPublish",description:"Concept",source:"@site/docs/Pishon4/po_design/new_order_publish.md",sourceDirName:"Pishon4/po_design",slug:"/Pishon4/po_design/new_order_publish",permalink:"/docs/Pishon4/po_design/new_order_publish",editUrl:"https://github.com/eryeden/docs/tree/main/docs/Pishon4/po_design/new_order_publish.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Portfolio optimization design docs",permalink:"/docs/Pishon4/po_design/index"},next:{title:"New PO",permalink:"/docs/Pishon4/po_design/new_po"}},l=[{value:"Concept",id:"concept",children:[]},{value:"Flow",id:"flow",children:[{value:"1. PO",id:"1-po",children:[]},{value:"2. OrdeAmountCalc",id:"2-ordeamountcalc",children:[]},{value:"3. ExecuteSellOrder",id:"3-executesellorder",children:[]},{value:"4. ExecuteBuyOrder",id:"4-executebuyorder",children:[]},{value:"5. POAssetAdjustment",id:"5-poassetadjustment",children:[]}]},{value:"Input",id:"input",children:[]}],c={toc:l};function a(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"new-orderpublish"},"New OrderPublish"),(0,r.kt)("h2",{id:"concept"},"Concept"),(0,r.kt)("p",null,"\u65b0PO\u3067\u306f\u6700\u9069\u5316\u7d50\u679c\u3068\u3057\u3066\u3001BaseAsset\u5358\u4f4d\u3067\u306e\u6700\u9069\u4fdd\u6709\u91cf\u304c\u308f\u304b\u308b\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u73fe\u5728\u306e\u4fdd\u6709\u91cf\u3068\u6bd4\u8f03\u3059\u308b\u3060\u3051\u3067\u5fc5\u8981\u306a\u8cfc\u5165\u91cf\u304c\u8a08\u7b97\u3067\u304d\u308b\u3002\u307e\u305f\u3001PO\u30e2\u30c7\u30eb\u306f\u58f2\u5374->\u8cfc\u5165\u306e\u9806\u5e8f\u3067\u30e2\u30c7\u30eb\u5316\u3055\u308c\u3066\u3044\u308b\u3002\u3057\u305f\u304c\u3063\u3066OrderPublish\u3067\u3082\u3053\u306e\u6d41\u308c\u306b\u6cbf\u3046\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,r.kt)("p",null,"\u4f9d\u7136\u3001\u8cfc\u5165\u6642\u306b\u5fc5\u8981\u306a\u30a2\u30bb\u30c3\u30c8\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044\u5834\u5408\u3084\u3001\u904e\u53bb\u306e\u30bf\u30a4\u30e0\u30b9\u30ed\u30c3\u30c8\u306b\u5fae\u5c0f\u306a\u91cf\u306e\u30a2\u30bb\u30c3\u30c8\u304c\u6b8b\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3002\u3053\u308c\u3089\u306fOrder\u5b9f\u884c\u5f8c\u306a\u3069\u3067\u30b1\u30a2\u304c\u5fc5\u8981\u3002"),(0,r.kt)("h2",{id:"flow"},"Flow"),(0,r.kt)("p",null,"PO\u3082\u542b\u3081\u308b\u3068\u4e0b\u8a18\u306e\u6d41\u308c\u3067OrderPublish\u3059\u308b\u3002\n\u6d41\u308c\u3092\u8aac\u660e\u3059\u308b\uff1a"),(0,r.kt)("h3",{id:"1-po"},"1. PO"),(0,r.kt)("p",null,"PO\u304b\u3089\u6700\u9069\u306aPOAssets\u304c\u51fa\u529b\u3055\u308c\u308b\u3002\u3053\u3053\u3067\u5404\u30a2\u30bb\u30c3\u30c8\u306e\u5404\u30bf\u30a4\u30e0\u30b9\u30ed\u30c3\u30c8\u3067\u306e\u6700\u9069\u4fdd\u6709\u91cf\u3068\u6700\u9069\u306a\u65b0\u898f\u8cfc\u5165\u91cf\u304c\u308f\u304b\u308b\u3002"),(0,r.kt)("h3",{id:"2-ordeamountcalc"},"2. OrdeAmountCalc"),(0,r.kt)("p",null,"\u73fe\u5728\u306ePOAssets\u3068\u6700\u9069POAssets\u3092\u6bd4\u8f03\u3057\u3001\u5404\u30a2\u30bb\u30c3\u30c8\u3054\u3068\u306e\u58f2\u5374\u91cf\u3092\u8a08\u7b97\u3002\u8cfc\u5165\u91cf\u306f\u5404\u30a2\u30bb\u30c3\u30c8\u306e\u65b0\u898f\u8cfc\u5165\u91cf\u306b\u306a\u308b\u3002\u8cfc\u5165\u91cf\u306f\u6210\u884c\u304d\u6ce8\u6587\u306e\u5834\u5408\u3067\u306fprice slippage\u306b\u3088\u308a\u5e0c\u671b\u306eBase asset\u5358\u4f4d\u306e\u8cfc\u5165\u91cf\u3092\u5b9f\u73fe\u3067\u304d\u306a\u3044\u53ef\u80fd\u6027\u3042\u308a\u3002Quote asset\u5358\u4f4d\u3067\u306e\u6ce8\u6587\u3092\u884c\u3046\u3053\u3068\u3067\u3001\u6ce8\u6587\u304c\u901a\u3089\u306a\u3044\u53ef\u80fd\u6027\u3092\u8003\u616e\u3057\u305f\u82e5\u5e72\u5c11\u306a\u3081\u306e\u6ce8\u6587\u306a\u3069\u306f\u4e0d\u8981\u306b\u306a\u308b\u3068\u601d\u308f\u308c\u308b\u3002"),(0,r.kt)("h3",{id:"3-executesellorder"},"3. ExecuteSellOrder"),(0,r.kt)("p",null,"\u307e\u305a\u306f\u58f2\u308a\u6ce8\u6587\u3092\u5b9f\u884c\u3059\u308b\u3002\u58f2\u5374\u91cf\u3068\u58f2\u308a\u6ce8\u6587\u306e\u6210\u5426\u304b\u3089POAsset\u3092\u66f4\u65b0\u3059\u308b\u3002\u307e\u305fSaifu\u30c7\u30fc\u30bf\u3082\u66f4\u65b0\u3059\u308b\u3002"),(0,r.kt)("h3",{id:"4-executebuyorder"},"4. ExecuteBuyOrder"),(0,r.kt)("p",null,"\u58f2\u308a\u6ce8\u6587\u306e\u7d50\u679c\u5f97\u305fQuoteAsset\u306e\u91cf\u3092\u8003\u616e\u3057\u3066\u8cb7\u3044\u6ce8\u6587\u3092\u5b9f\u884c\u3059\u308b\u3002\u8cb7\u3044\u6ce8\u6587\u306f\u3001\u5f97\u3089\u308c\u308bProfit\u306e\u5927\u304d\u3044\u30a2\u30bb\u30c3\u30c8\u304b\u3089\u5b9f\u884c\u3059\u308b\u3002\u8cb7\u3044\u6ce8\u6587\u306e\u7d50\u679c\u5f97\u305fBaseAsset\u306e\u91cf\u3068\u6210\u5426\u304b\u3089POAsset\u3092\u66f4\u65b0\u3059\u308b\u3002\u307e\u305fSaifu\u30c7\u30fc\u30bf\u3082\u66f4\u65b0\u3059\u308b\u3002"),(0,r.kt)("h3",{id:"5-poassetadjustment"},"5. POAssetAdjustment"),(0,r.kt)("p",null,"Saifu\u30c7\u30fc\u30bf\u3068POAsset\u306e\u6574\u5408\u6027\u304c\u53d6\u308c\u308b\u3088\u3046\u306b\u5404\u30a2\u30bb\u30c3\u30c8\u306e\u30bf\u30a4\u30e0\u30b9\u30ed\u30c3\u30c8\u3092\u8abf\u6574\u3059\u308b\u3002\u307e\u305f\u3001\u4e00\u5b9a\u4ee5\u4e0a\u6642\u9593\u304c\u7d4c\u3064\u304b\u91cf\u304c\u5fae\u5c0f\u306a\u30bf\u30a4\u30e0\u30b9\u30ed\u30c3\u30c8\u306f\u30de\u30fc\u30b8\u3059\u308b\u3002\u305d\u3057\u3066\u51fa\u6765\u4e0a\u304c\u3063\u305f\u6700\u7d42\u7684\u306aPOAssets\u3092\u4fdd\u5b58\u3057\u6b21\u56de\u306ePO\u306b\u5099\u3048\u308b\u3002"),(0,r.kt)(o.Mermaid,{config:{},chart:"flowchart TD\n    Start --\x3e PO\n    PO --\x3e |Optimal POAssets| OrderAmountCalc\n    OrderAmountCalc --\x3e ExecuteSellOrder\n    ExecuteSellOrder --\x3e ExecuteBuyOrder\n    ExecuteBuyOrder --\x3e POAssetAdjustment\n    POAssetAdjustment --\x3e |Final POAssets|End\n\n    A(Current POAssets) --\x3e OrderAmountCalc\n    B(Saifu data) --\x3e POAssetAdjustment",mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"input"},"Input"))}a.isMDXComponent=!0},11748:(e,t,s)=>{var n={"./locale":89234,"./locale.js":89234};function r(e){var t=o(e);return s(t)}function o(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=11748}}]);