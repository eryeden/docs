"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=l,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),l=(r(67294),r(3905));const a={slug:"memo",title:"ROS2 Callback\u5185\u3067Service\u3092\u547c\u3076",authors:["eryeden"],tags:["memo","python","rclpy"]},o=void 0,c={permalink:"/blog/memo",editUrl:"https://github.com/eryeden/docs/tree/main/blog/2022-08-31-call-service-in-callback.md",source:"@site/blog/2022-08-31-call-service-in-callback.md",title:"ROS2 Callback\u5185\u3067Service\u3092\u547c\u3076",description:"ROS2\u3067\u306fTopic\u306eSubscribe\u6642\u306b\u547c\u3070\u308c\u308bCallback\u3084Timer\u306eCallback\u3092\u4ed5\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u308b\u3002",date:"2022-08-31T00:00:00.000Z",formattedDate:"August 31, 2022",tags:[{label:"memo",permalink:"/blog/tags/memo"},{label:"python",permalink:"/blog/tags/python"},{label:"rclpy",permalink:"/blog/tags/rclpy"}],readingTime:1.31,hasTruncateMarker:!1,authors:[{name:"kk",title:"doe",url:"https://google.com",key:"eryeden"}],frontMatter:{slug:"memo",title:"ROS2 Callback\u5185\u3067Service\u3092\u547c\u3076",authors:["eryeden"],tags:["memo","python","rclpy"]}},i={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ROS2\u3067\u306fTopic\u306eSubscribe\u6642\u306b\u547c\u3070\u308c\u308bCallback\u3084Timer\u306eCallback\u3092\u4ed5\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u308b\u3002\nCallback\u95a2\u6570\u5185\u3067ROS2\u306eService\u3092\u547c\u3076\u3068\u30c7\u30c3\u30c9\u30ed\u30c3\u30af\u3059\u308b\u5834\u5408\u304c\u3042\u308b\u3002\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.ros2.org/foxy/api/rclpy/api/services.html#rclpy.client.Client.call"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u306b\u3082Warning\u3067\u30c7\u30c3\u30c9\u30ed\u30c3\u30af\u306e\u65e8\u304c\u66f8\u3044\u3066\u3042\u308b\u3002\u3058\u3083\u3042\u3069\u3046\u3059\u308c\u3070\u3044\u3044\u306e\uff1f\u305f\u3060\u3001\u30b5\u30fc\u30d3\u30b9\u547c\u3093\u3067\u7d50\u679c\u3092\u53d7\u3051\u53d6\u308b\u7a0b\u5ea6\u306e\u3053\u3068\u3082\u3067\u304d\u306a\u3044\u306e\uff01\uff1f\u3068\u601d\u3063\u3066\u3057\u307e\u3046\u3002\n\u4ee5\u4e0b\u306e\u65b9\u6cd5\u3067\u56de\u907f\u304c\u53ef\u80fd\u3002"),(0,l.kt)("p",null,"\u30dd\u30a4\u30f3\u30c8\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"MutuallyExclusiveCallbackGroup"),"\u3002Node\u5185\u306eServiceClient\u3068TimerCallback\u3092\u5225\u30b9\u30ec\u30c3\u30c9\u3067\u51e6\u7406\u3059\u308b\u3053\u3068\u3092\u660e\u793a\u3057\u3066\u3044\u308b\u3002\n\u3053\u306e\u5834\u5408\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"MultiThreadedExecutor"),"\u3067Node\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u3067\u6ce8\u610f\u3002\nServiceClient\u3068Callback\u304c\u540c\u4e00\u30b9\u30ec\u30c3\u30c9\u3067\u8d70\u308b\u3068\u30c7\u30c3\u30c9\u30ed\u30c3\u30af\u3059\u308b\u306e\u3060\u308d\u3046\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import rclpy\nfrom rclpy.node import Node\nfrom rclpy.timer import Timer\n\nfrom rclpy.callback_groups import MutuallyExclusiveCallbackGroup\nfrom rclpy.executors import MultiThreadedExecutor\n\nclass TestNode(Node):\n\n    def __init__(self):\n        super().__init__('test_node')\n\n        # Service\n        self.test_service = self.create_client(srv.Test, 'test_service', callback_group=MutuallyExclusiveCallbackGroup()) # <= \u3053\u3053\n\n        # timer\n        self.t_callback = self.create_timer(1, self.timer_cb, callback_group=MutuallyExclusiveCallbackGroup()) # <= \u3053\u3053\n\n    # Timer callback\n    def timer_cb(self):\n        self.get_logger().info(\"Timer cb\")\n\n        # Call service\n        test_request = srv.Test.Request()\n        test_response: srv.Test.Response = self.test_service.call(test_request)\n\n\ndef main():\n    rclpy.init()\n\n    test_node = TestNode()\n\n    executor = MultiThreadedExecutor()  # <= \u3053\u3053\n    executor.add_node(test_node)\n\n    executor.spin()\n\n    test_node.destroy_node()\n    rclpy.shutdown()\n\n\nif __name__ == '__main__':\n    main()\n")))}u.isMDXComponent=!0}}]);