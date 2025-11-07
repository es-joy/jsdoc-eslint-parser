'use strict';

var eslintParser = require('@babel/eslint-parser');
var eslint = require('eslint');
var jsdocTypePrattParser = require('jsdoc-type-pratt-parser');
var commentParser = require('comment-parser');

function e(t){return (e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,s=[],u=true,l=false;try{if(a=(r=r.call(e)).next,0===t);else for(;!(u=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){l=true,o=e;}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return s}}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return "Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return e(t={exports:{}},t.exports),t.exports}var i=a((function(e,t){!function e(t){var r,n,o,a,i,s;function u(e){var t,r,n={};for(t in e)e.hasOwnProperty(t)&&(r=e[t],n[t]="object"==typeof r&&null!==r?u(r):r);return n}function l(e,t){this.parent=e,this.key=t;}function c(e,t,r,n){this.node=e,this.path=t,this.wrap=r,this.ref=n;}function f(){}function p(e){return null!=e&&("object"==typeof e&&"string"==typeof e.type)}function h(e,t){return (e===r.ObjectExpression||e===r.ObjectPattern)&&"properties"===t}function y(e,t){for(var r=e.length-1;r>=0;--r)if(e[r].node===t)return  true;return  false}function d(e,t){return (new f).traverse(e,t)}function m(e,t){var r;return r=function(e,t){var r,n,o,a;for(n=e.length,o=0;n;)t(e[a=o+(r=n>>>1)])?n=r:(o=a+1,n-=r+1);return o}(t,(function(t){return t.range[0]>e.range[0]})),e.extendedRange=[e.range[0],e.range[1]],r!==t.length&&(e.extendedRange[1]=t[r].range[0]),(r-=1)>=0&&(e.extendedRange[0]=t[r].range[1]),e}return r={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ChainExpression:"ChainExpression",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",ForOfStatement:"ForOfStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",GeneratorExpression:"GeneratorExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportExpression:"ImportExpression",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",ModuleSpecifier:"ModuleSpecifier",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",PrivateIdentifier:"PrivateIdentifier",Program:"Program",Property:"Property",PropertyDefinition:"PropertyDefinition",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},o={AssignmentExpression:["left","right"],AssignmentPattern:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],ArrowFunctionExpression:["params","body"],AwaitExpression:["argument"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ChainExpression:["expression"],ClassBody:["body"],ClassDeclaration:["id","superClass","body"],ClassExpression:["id","superClass","body"],ComprehensionBlock:["left","right"],ComprehensionExpression:["blocks","filter","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExportAllDeclaration:["source"],ExportDefaultDeclaration:["declaration"],ExportNamedDeclaration:["declaration","specifiers","source"],ExportSpecifier:["exported","local"],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],ForOfStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],GeneratorExpression:["blocks","filter","body"],Identifier:[],IfStatement:["test","consequent","alternate"],ImportExpression:["source"],ImportDeclaration:["specifiers","source"],ImportDefaultSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportSpecifier:["imported","local"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],MetaProperty:["meta","property"],MethodDefinition:["key","value"],ModuleSpecifier:[],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],PrivateIdentifier:[],Program:["body"],Property:["key","value"],PropertyDefinition:["key","value"],RestElement:["argument"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SpreadElement:["argument"],Super:[],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],TaggedTemplateExpression:["tag","quasi"],TemplateElement:[],TemplateLiteral:["quasis","expressions"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handler","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]},n={Break:a={},Skip:i={},Remove:s={}},l.prototype.replace=function(e){this.parent[this.key]=e;},l.prototype.remove=function(){return Array.isArray(this.parent)?(this.parent.splice(this.key,1),true):(this.replace(null),false)},f.prototype.path=function(){var e,t,r,n,o;function a(e,t){if(Array.isArray(t))for(r=0,n=t.length;r<n;++r)e.push(t[r]);else e.push(t);}if(!this.__current.path)return null;for(o=[],e=2,t=this.__leavelist.length;e<t;++e)a(o,this.__leavelist[e].path);return a(o,this.__current.path),o},f.prototype.type=function(){return this.current().type||this.__current.wrap},f.prototype.parents=function(){var e,t,r;for(r=[],e=1,t=this.__leavelist.length;e<t;++e)r.push(this.__leavelist[e].node);return r},f.prototype.current=function(){return this.__current.node},f.prototype.__execute=function(e,t){var r,n;return n=void 0,r=this.__current,this.__current=t,this.__state=null,e&&(n=e.call(this,t.node,this.__leavelist[this.__leavelist.length-1].node)),this.__current=r,n},f.prototype.notify=function(e){this.__state=e;},f.prototype.skip=function(){this.notify(i);},f.prototype.break=function(){this.notify(a);},f.prototype.remove=function(){this.notify(s);},f.prototype.__initialize=function(e,t){this.visitor=t,this.root=e,this.__worklist=[],this.__leavelist=[],this.__current=null,this.__state=null,this.__fallback=null,"iteration"===t.fallback?this.__fallback=Object.keys:"function"==typeof t.fallback&&(this.__fallback=t.fallback),this.__keys=o,t.keys&&(this.__keys=Object.assign(Object.create(this.__keys),t.keys));},f.prototype.traverse=function(e,t){var r,n,o,s,u,l,f,d,m,x,v,g;for(this.__initialize(e,t),g={},r=this.__worklist,n=this.__leavelist,r.push(new c(e,null,null,null)),n.push(new c(null,null,null,null));r.length;)if((o=r.pop())!==g){if(o.node){if(l=this.__execute(t.enter,o),this.__state===a||l===a)return;if(r.push(g),n.push(o),this.__state===i||l===i)continue;if(u=(s=o.node).type||o.wrap,!(x=this.__keys[u])){if(!this.__fallback)throw new Error("Unknown node type "+u+".");x=this.__fallback(s);}for(d=x.length;(d-=1)>=0;)if(v=s[f=x[d]])if(Array.isArray(v)){for(m=v.length;(m-=1)>=0;)if(v[m]&&!y(n,v[m])){if(h(u,x[d]))o=new c(v[m],[f,m],"Property",null);else {if(!p(v[m]))continue;o=new c(v[m],[f,m],null,null);}r.push(o);}}else if(p(v)){if(y(n,v))continue;r.push(new c(v,f,null,null));}}}else if(o=n.pop(),l=this.__execute(t.leave,o),this.__state===a||l===a)return},f.prototype.replace=function(e,t){var r,n,o,u,f,y,d,m,x,v,g,A,E;function b(e){var t,n,o,a;if(e.ref.remove())for(n=e.ref.key,a=e.ref.parent,t=r.length;t--;)if((o=r[t]).ref&&o.ref.parent===a){if(o.ref.key<n)break;--o.ref.key;}}for(this.__initialize(e,t),g={},r=this.__worklist,n=this.__leavelist,y=new c(e,null,null,new l(A={root:e},"root")),r.push(y),n.push(y);r.length;)if((y=r.pop())!==g){if(void 0!==(f=this.__execute(t.enter,y))&&f!==a&&f!==i&&f!==s&&(y.ref.replace(f),y.node=f),this.__state!==s&&f!==s||(b(y),y.node=null),this.__state===a||f===a)return A.root;if((o=y.node)&&(r.push(g),n.push(y),this.__state!==i&&f!==i)){if(u=o.type||y.wrap,!(x=this.__keys[u])){if(!this.__fallback)throw new Error("Unknown node type "+u+".");x=this.__fallback(o);}for(d=x.length;(d-=1)>=0;)if(v=o[E=x[d]])if(Array.isArray(v)){for(m=v.length;(m-=1)>=0;)if(v[m]){if(h(u,x[d]))y=new c(v[m],[E,m],"Property",new l(v,m));else {if(!p(v[m]))continue;y=new c(v[m],[E,m],null,new l(v,m));}r.push(y);}}else p(v)&&r.push(new c(v,E,null,new l(o,E)));}}else if(y=n.pop(),void 0!==(f=this.__execute(t.leave,y))&&f!==a&&f!==i&&f!==s&&y.ref.replace(f),this.__state!==s&&f!==s||b(y),this.__state===a||f===a)return A.root;return A.root},t.Syntax=r,t.traverse=d,t.replace=function(e,t){return (new f).replace(e,t)},t.attachComments=function(e,t,r){var o,a,i,s,l=[];if(!e.range)throw new Error("attachComments needs range information");if(!r.length){if(t.length){for(i=0,a=t.length;i<a;i+=1)(o=u(t[i])).extendedRange=[0,e.range[0]],l.push(o);e.leadingComments=l;}return e}for(i=0,a=t.length;i<a;i+=1)l.push(m(u(t[i]),r));return s=0,d(e,{enter:function(e){for(var t;s<l.length&&!((t=l[s]).extendedRange[1]>e.range[0]);)t.extendedRange[1]===e.range[0]?(e.leadingComments||(e.leadingComments=[]),e.leadingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?n.Break:l[s].extendedRange[0]>e.range[1]?n.Skip:void 0}}),s=0,d(e,{leave:function(e){for(var t;s<l.length&&(t=l[s],!(e.range[1]<t.extendedRange[0]));)e.range[1]===t.extendedRange[0]?(e.trailingComments||(e.trailingComments=[]),e.trailingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?n.Break:l[s].extendedRange[0]>e.range[1]?n.Skip:void 0}}),e},t.VisitorKeys=o,t.VisitorOption=n,t.Controller=f,t.cloneEnvironment=function(){return e({})},t}(t);})),s=a((function(e){e.exports&&(e.exports=function(){function e(t,r,n,o){this.message=t,this.expected=r,this.found=n,this.location=o,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e);}return function(e,t){function r(){this.constructor=e;}r.prototype=t.prototype,e.prototype=new r;}(e,Error),e.buildMessage=function(e,t){var r={literal:function(e){return '"'+o(e.text)+'"'},class:function(e){var t,r="";for(t=0;t<e.parts.length;t++)r+=e.parts[t]instanceof Array?a(e.parts[t][0])+"-"+a(e.parts[t][1]):a(e.parts[t]);return "["+(e.inverted?"^":"")+r+"]"},any:function(e){return "any character"},end:function(e){return "end of input"},other:function(e){return e.description}};function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function o(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return "\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return "\\x"+n(e)}))}function a(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return "\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return "\\x"+n(e)}))}return "Expected "+function(e){var t,n,o,a=new Array(e.length);for(t=0;t<e.length;t++)a[t]=(o=e[t],r[o.type](o));if(a.sort(),a.length>0){for(t=1,n=1;t<a.length;t++)a[t-1]!==a[t]&&(a[n]=a[t],n++);a.length=n;}switch(a.length){case 1:return a[0];case 2:return a[0]+" or "+a[1];default:return a.slice(0,-1).join(", ")+", or "+a[a.length-1]}}(e)+" but "+function(e){return e?'"'+o(e)+'"':"end of input"}(t)+" found."},{SyntaxError:e,parse:function(t,r){r=void 0!==r?r:{};var n,o,a,i,s={},u={start:me},l=me,c=fe(" ",false),f=/^[^ [\],():#!=><~+.]/,p=pe([" ","[","]",",","(",")",":","#","!","=",">","<","~","+","."],true,false),h=fe(">",false),y=fe("~",false),d=fe("+",false),m=fe(",",false),x=function(e,t){return [e].concat(t.map((function(e){return e[3]})))},v=fe("!",false),g=fe("*",false),A=fe("#",false),E=fe("[",false),b=fe("]",false),S=/^[><!]/,_=pe([">","<","!"],false,false),C=fe("=",false),w=function(e){return (e||"")+"="},P=/^[><]/,k=pe([">","<"],false,false),D=fe(".",false),I=function(e,t,r){return {type:"attribute",name:e,operator:t,value:r}},j=fe('"',false),T=/^[^\\"]/,F=pe(["\\",'"'],true,false),R=fe("\\",false),O={type:"any"},L=function(e,t){return e+t},M=function(e){return {type:"literal",value:(t=e.join(""),t.replace(/\\(.)/g,(function(e,t){switch(t){case "b":return "\b";case "f":return "\f";case "n":return "\n";case "r":return "\r";case "t":return "\t";case "v":return "\v";default:return t}})))};var t;},B=fe("'",false),U=/^[^\\']/,K=pe(["\\","'"],true,false),N=/^[0-9]/,W=pe([["0","9"]],false,false),V=fe("type(",false),q=/^[^ )]/,G=pe([" ",")"],true,false),z=fe(")",false),H=/^[imsu]/,Y=pe(["i","m","s","u"],false,false),$=fe("/",false),J=/^[^\/]/,Q=pe(["/"],true,false),X=fe(":not(",false),Z=fe(":matches(",false),ee=fe(":has(",false),te=fe(":first-child",false),re=fe(":last-child",false),ne=fe(":nth-child(",false),oe=fe(":nth-last-child(",false),ae=fe(":",false),ie=0,se=[{line:1,column:1}],ue=0,le=[],ce={};if("startRule"in r){if(!(r.startRule in u))throw new Error("Can't start parsing from rule \""+r.startRule+'".');l=u[r.startRule];}function fe(e,t){return {type:"literal",text:e,ignoreCase:t}}function pe(e,t,r){return {type:"class",parts:e,inverted:t,ignoreCase:r}}function he(e){var r,n=se[e];if(n)return n;for(r=e-1;!se[r];)r--;for(n={line:(n=se[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return se[e]=n,n}function ye(e,t){var r=he(e),n=he(t);return {start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function de(e){ie<ue||(ie>ue&&(ue=ie,le=[]),le.push(e));}function me(){var e,t,r,n,o=32*ie+0,a=ce[o];return a?(ie=a.nextPos,a.result):(e=ie,(t=xe())!==s&&(r=Ae())!==s&&xe()!==s?e=t=1===(n=r).length?n[0]:{type:"matches",selectors:n}:(ie=e,e=s),e===s&&(e=ie,(t=xe())!==s&&(t=void 0),e=t),ce[o]={nextPos:ie,result:e},e)}function xe(){var e,r,n=32*ie+1,o=ce[n];if(o)return ie=o.nextPos,o.result;for(e=[],32===t.charCodeAt(ie)?(r=" ",ie++):(r=s,de(c));r!==s;)e.push(r),32===t.charCodeAt(ie)?(r=" ",ie++):(r=s,de(c));return ce[n]={nextPos:ie,result:e},e}function ve(){var e,r,n,o=32*ie+2,a=ce[o];if(a)return ie=a.nextPos,a.result;if(r=[],f.test(t.charAt(ie))?(n=t.charAt(ie),ie++):(n=s,de(p)),n!==s)for(;n!==s;)r.push(n),f.test(t.charAt(ie))?(n=t.charAt(ie),ie++):(n=s,de(p));else r=s;return r!==s&&(r=r.join("")),e=r,ce[o]={nextPos:ie,result:e},e}function ge(){var e,r,n,o=32*ie+3,a=ce[o];return a?(ie=a.nextPos,a.result):(e=ie,(r=xe())!==s?(62===t.charCodeAt(ie)?(n=">",ie++):(n=s,de(h)),n!==s&&xe()!==s?e=r="child":(ie=e,e=s)):(ie=e,e=s),e===s&&(e=ie,(r=xe())!==s?(126===t.charCodeAt(ie)?(n="~",ie++):(n=s,de(y)),n!==s&&xe()!==s?e=r="sibling":(ie=e,e=s)):(ie=e,e=s),e===s&&(e=ie,(r=xe())!==s?(43===t.charCodeAt(ie)?(n="+",ie++):(n=s,de(d)),n!==s&&xe()!==s?e=r="adjacent":(ie=e,e=s)):(ie=e,e=s),e===s&&(e=ie,32===t.charCodeAt(ie)?(r=" ",ie++):(r=s,de(c)),r!==s&&(n=xe())!==s?e=r="descendant":(ie=e,e=s)))),ce[o]={nextPos:ie,result:e},e)}function Ae(){var e,r,n,o,a,i,u,l,c=32*ie+5,f=ce[c];if(f)return ie=f.nextPos,f.result;if(e=ie,(r=be())!==s){for(n=[],o=ie,(a=xe())!==s?(44===t.charCodeAt(ie)?(i=",",ie++):(i=s,de(m)),i!==s&&(u=xe())!==s&&(l=be())!==s?o=a=[a,i,u,l]:(ie=o,o=s)):(ie=o,o=s);o!==s;)n.push(o),o=ie,(a=xe())!==s?(44===t.charCodeAt(ie)?(i=",",ie++):(i=s,de(m)),i!==s&&(u=xe())!==s&&(l=be())!==s?o=a=[a,i,u,l]:(ie=o,o=s)):(ie=o,o=s);n!==s?e=r=x(r,n):(ie=e,e=s);}else ie=e,e=s;return ce[c]={nextPos:ie,result:e},e}function Ee(){var e,t,r,n,o,a=32*ie+6,i=ce[a];return i?(ie=i.nextPos,i.result):(e=ie,(t=ge())===s&&(t=null),t!==s&&(r=be())!==s?(o=r,e=t=(n=t)?{type:n,left:{type:"exactNode"},right:o}:o):(ie=e,e=s),ce[a]={nextPos:ie,result:e},e)}function be(){var e,t,r,n,o,a,i,u=32*ie+7,l=ce[u];if(l)return ie=l.nextPos,l.result;if(e=ie,(t=Se())!==s){for(r=[],n=ie,(o=ge())!==s&&(a=Se())!==s?n=o=[o,a]:(ie=n,n=s);n!==s;)r.push(n),n=ie,(o=ge())!==s&&(a=Se())!==s?n=o=[o,a]:(ie=n,n=s);r!==s?(i=t,e=t=r.reduce((function(e,t){return {type:t[0],left:e,right:t[1]}}),i)):(ie=e,e=s);}else ie=e,e=s;return ce[u]={nextPos:ie,result:e},e}function Se(){var e,r,n,o,a,i,u,l=32*ie+8,c=ce[l];if(c)return ie=c.nextPos,c.result;if(e=ie,33===t.charCodeAt(ie)?(r="!",ie++):(r=s,de(v)),r===s&&(r=null),r!==s){if(n=[],(o=_e())!==s)for(;o!==s;)n.push(o),o=_e();else n=s;n!==s?(a=r,u=1===(i=n).length?i[0]:{type:"compound",selectors:i},a&&(u.subject=true),e=r=u):(ie=e,e=s);}else ie=e,e=s;return ce[l]={nextPos:ie,result:e},e}function _e(){var e,r=32*ie+9,n=ce[r];return n?(ie=n.nextPos,n.result):((e=function(){var e,r,n=32*ie+10,o=ce[n];return o?(ie=o.nextPos,o.result):(42===t.charCodeAt(ie)?(r="*",ie++):(r=s,de(g)),r!==s&&(r={type:"wildcard",value:r}),e=r,ce[n]={nextPos:ie,result:e},e)}())===s&&(e=function(){var e,r,n,o=32*ie+11,a=ce[o];return a?(ie=a.nextPos,a.result):(e=ie,35===t.charCodeAt(ie)?(r="#",ie++):(r=s,de(A)),r===s&&(r=null),r!==s&&(n=ve())!==s?e=r={type:"identifier",value:n}:(ie=e,e=s),ce[o]={nextPos:ie,result:e},e)}())===s&&(e=function(){var e,r,n,o,a=32*ie+12,i=ce[a];return i?(ie=i.nextPos,i.result):(e=ie,91===t.charCodeAt(ie)?(r="[",ie++):(r=s,de(E)),r!==s&&xe()!==s&&(n=function(){var e,r,n,o,a=32*ie+16,i=ce[a];return i?(ie=i.nextPos,i.result):(e=ie,(r=Ce())!==s&&xe()!==s&&(n=function(){var e,r,n,o=32*ie+14,a=ce[o];return a?(ie=a.nextPos,a.result):(e=ie,33===t.charCodeAt(ie)?(r="!",ie++):(r=s,de(v)),r===s&&(r=null),r!==s?(61===t.charCodeAt(ie)?(n="=",ie++):(n=s,de(C)),n!==s?(r=w(r),e=r):(ie=e,e=s)):(ie=e,e=s),ce[o]={nextPos:ie,result:e},e)}())!==s&&xe()!==s?((o=function(){var e,r,n,o,a,i=32*ie+20,u=ce[i];if(u)return ie=u.nextPos,u.result;if(e=ie,"type("===t.substr(ie,5)?(r="type(",ie+=5):(r=s,de(V)),r!==s)if(xe()!==s){if(n=[],q.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(G)),o!==s)for(;o!==s;)n.push(o),q.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(G));else n=s;n!==s&&(o=xe())!==s?(41===t.charCodeAt(ie)?(a=")",ie++):(a=s,de(z)),a!==s?(r={type:"type",value:n.join("")},e=r):(ie=e,e=s)):(ie=e,e=s);}else ie=e,e=s;else ie=e,e=s;return ce[i]={nextPos:ie,result:e},e}())===s&&(o=function(){var e,r,n,o,a,i,u=32*ie+22,l=ce[u];if(l)return ie=l.nextPos,l.result;if(e=ie,47===t.charCodeAt(ie)?(r="/",ie++):(r=s,de($)),r!==s){if(n=[],J.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(Q)),o!==s)for(;o!==s;)n.push(o),J.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(Q));else n=s;n!==s?(47===t.charCodeAt(ie)?(o="/",ie++):(o=s,de($)),o!==s?((a=function(){var e,r,n=32*ie+21,o=ce[n];if(o)return ie=o.nextPos,o.result;if(e=[],H.test(t.charAt(ie))?(r=t.charAt(ie),ie++):(r=s,de(Y)),r!==s)for(;r!==s;)e.push(r),H.test(t.charAt(ie))?(r=t.charAt(ie),ie++):(r=s,de(Y));else e=s;return ce[n]={nextPos:ie,result:e},e}())===s&&(a=null),a!==s?(i=a,r={type:"regexp",value:new RegExp(n.join(""),i?i.join(""):"")},e=r):(ie=e,e=s)):(ie=e,e=s)):(ie=e,e=s);}else ie=e,e=s;return ce[u]={nextPos:ie,result:e},e}()),o!==s?(r=I(r,n,o),e=r):(ie=e,e=s)):(ie=e,e=s),e===s&&(e=ie,(r=Ce())!==s&&xe()!==s&&(n=function(){var e,r,n,o=32*ie+13,a=ce[o];return a?(ie=a.nextPos,a.result):(e=ie,S.test(t.charAt(ie))?(r=t.charAt(ie),ie++):(r=s,de(_)),r===s&&(r=null),r!==s?(61===t.charCodeAt(ie)?(n="=",ie++):(n=s,de(C)),n!==s?(r=w(r),e=r):(ie=e,e=s)):(ie=e,e=s),e===s&&(P.test(t.charAt(ie))?(e=t.charAt(ie),ie++):(e=s,de(k))),ce[o]={nextPos:ie,result:e},e)}())!==s&&xe()!==s?((o=function(){var e,r,n,o,a,i,u=32*ie+17,l=ce[u];if(l)return ie=l.nextPos,l.result;if(e=ie,34===t.charCodeAt(ie)?(r='"',ie++):(r=s,de(j)),r!==s){for(n=[],T.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(F)),o===s&&(o=ie,92===t.charCodeAt(ie)?(a="\\",ie++):(a=s,de(R)),a!==s?(t.length>ie?(i=t.charAt(ie),ie++):(i=s,de(O)),i!==s?(a=L(a,i),o=a):(ie=o,o=s)):(ie=o,o=s));o!==s;)n.push(o),T.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(F)),o===s&&(o=ie,92===t.charCodeAt(ie)?(a="\\",ie++):(a=s,de(R)),a!==s?(t.length>ie?(i=t.charAt(ie),ie++):(i=s,de(O)),i!==s?(a=L(a,i),o=a):(ie=o,o=s)):(ie=o,o=s));n!==s?(34===t.charCodeAt(ie)?(o='"',ie++):(o=s,de(j)),o!==s?(r=M(n),e=r):(ie=e,e=s)):(ie=e,e=s);}else ie=e,e=s;if(e===s)if(e=ie,39===t.charCodeAt(ie)?(r="'",ie++):(r=s,de(B)),r!==s){for(n=[],U.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(K)),o===s&&(o=ie,92===t.charCodeAt(ie)?(a="\\",ie++):(a=s,de(R)),a!==s?(t.length>ie?(i=t.charAt(ie),ie++):(i=s,de(O)),i!==s?(a=L(a,i),o=a):(ie=o,o=s)):(ie=o,o=s));o!==s;)n.push(o),U.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(K)),o===s&&(o=ie,92===t.charCodeAt(ie)?(a="\\",ie++):(a=s,de(R)),a!==s?(t.length>ie?(i=t.charAt(ie),ie++):(i=s,de(O)),i!==s?(a=L(a,i),o=a):(ie=o,o=s)):(ie=o,o=s));n!==s?(39===t.charCodeAt(ie)?(o="'",ie++):(o=s,de(B)),o!==s?(r=M(n),e=r):(ie=e,e=s)):(ie=e,e=s);}else ie=e,e=s;return ce[u]={nextPos:ie,result:e},e}())===s&&(o=function(){var e,r,n,o,a,i,u,l=32*ie+18,c=ce[l];if(c)return ie=c.nextPos,c.result;for(e=ie,r=ie,n=[],N.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(W));o!==s;)n.push(o),N.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(W));if(n!==s?(46===t.charCodeAt(ie)?(o=".",ie++):(o=s,de(D)),o!==s?r=n=[n,o]:(ie=r,r=s)):(ie=r,r=s),r===s&&(r=null),r!==s){if(n=[],N.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(W)),o!==s)for(;o!==s;)n.push(o),N.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(W));else n=s;n!==s?(i=n,u=(a=r)?[].concat.apply([],a).join(""):"",r={type:"literal",value:parseFloat(u+i.join(""))},e=r):(ie=e,e=s);}else ie=e,e=s;return ce[l]={nextPos:ie,result:e},e}())===s&&(o=function(){var e,t,r=32*ie+19,n=ce[r];return n?(ie=n.nextPos,n.result):((t=ve())!==s&&(t={type:"literal",value:t}),e=t,ce[r]={nextPos:ie,result:e},e)}()),o!==s?(r=I(r,n,o),e=r):(ie=e,e=s)):(ie=e,e=s),e===s&&(e=ie,(r=Ce())!==s&&(r={type:"attribute",name:r}),e=r)),ce[a]={nextPos:ie,result:e},e)}())!==s&&xe()!==s?(93===t.charCodeAt(ie)?(o="]",ie++):(o=s,de(b)),o!==s?e=r=n:(ie=e,e=s)):(ie=e,e=s),ce[a]={nextPos:ie,result:e},e)}())===s&&(e=function(){var e,r,n,o,a,i,u,l,c=32*ie+23,f=ce[c];if(f)return ie=f.nextPos,f.result;if(e=ie,46===t.charCodeAt(ie)?(r=".",ie++):(r=s,de(D)),r!==s)if((n=ve())!==s){for(o=[],a=ie,46===t.charCodeAt(ie)?(i=".",ie++):(i=s,de(D)),i!==s&&(u=ve())!==s?a=i=[i,u]:(ie=a,a=s);a!==s;)o.push(a),a=ie,46===t.charCodeAt(ie)?(i=".",ie++):(i=s,de(D)),i!==s&&(u=ve())!==s?a=i=[i,u]:(ie=a,a=s);o!==s?(l=n,r={type:"field",name:o.reduce((function(e,t){return e+t[0]+t[1]}),l)},e=r):(ie=e,e=s);}else ie=e,e=s;else ie=e,e=s;return ce[c]={nextPos:ie,result:e},e}())===s&&(e=function(){var e,r,n,o,a=32*ie+24,i=ce[a];return i?(ie=i.nextPos,i.result):(e=ie,":not("===t.substr(ie,5)?(r=":not(",ie+=5):(r=s,de(X)),r!==s&&xe()!==s&&(n=Ae())!==s&&xe()!==s?(41===t.charCodeAt(ie)?(o=")",ie++):(o=s,de(z)),o!==s?e=r={type:"not",selectors:n}:(ie=e,e=s)):(ie=e,e=s),ce[a]={nextPos:ie,result:e},e)}())===s&&(e=function(){var e,r,n,o,a=32*ie+25,i=ce[a];return i?(ie=i.nextPos,i.result):(e=ie,":matches("===t.substr(ie,9)?(r=":matches(",ie+=9):(r=s,de(Z)),r!==s&&xe()!==s&&(n=Ae())!==s&&xe()!==s?(41===t.charCodeAt(ie)?(o=")",ie++):(o=s,de(z)),o!==s?e=r={type:"matches",selectors:n}:(ie=e,e=s)):(ie=e,e=s),ce[a]={nextPos:ie,result:e},e)}())===s&&(e=function(){var e,r,n,o,a=32*ie+26,i=ce[a];return i?(ie=i.nextPos,i.result):(e=ie,":has("===t.substr(ie,5)?(r=":has(",ie+=5):(r=s,de(ee)),r!==s&&xe()!==s&&(n=function(){var e,r,n,o,a,i,u,l,c=32*ie+4,f=ce[c];if(f)return ie=f.nextPos,f.result;if(e=ie,(r=Ee())!==s){for(n=[],o=ie,(a=xe())!==s?(44===t.charCodeAt(ie)?(i=",",ie++):(i=s,de(m)),i!==s&&(u=xe())!==s&&(l=Ee())!==s?o=a=[a,i,u,l]:(ie=o,o=s)):(ie=o,o=s);o!==s;)n.push(o),o=ie,(a=xe())!==s?(44===t.charCodeAt(ie)?(i=",",ie++):(i=s,de(m)),i!==s&&(u=xe())!==s&&(l=Ee())!==s?o=a=[a,i,u,l]:(ie=o,o=s)):(ie=o,o=s);n!==s?e=r=x(r,n):(ie=e,e=s);}else ie=e,e=s;return ce[c]={nextPos:ie,result:e},e}())!==s&&xe()!==s?(41===t.charCodeAt(ie)?(o=")",ie++):(o=s,de(z)),o!==s?e=r={type:"has",selectors:n}:(ie=e,e=s)):(ie=e,e=s),ce[a]={nextPos:ie,result:e},e)}())===s&&(e=function(){var e,r,n=32*ie+27,o=ce[n];return o?(ie=o.nextPos,o.result):(":first-child"===t.substr(ie,12)?(r=":first-child",ie+=12):(r=s,de(te)),r!==s&&(r=we(1)),e=r,ce[n]={nextPos:ie,result:e},e)}())===s&&(e=function(){var e,r,n=32*ie+28,o=ce[n];return o?(ie=o.nextPos,o.result):(":last-child"===t.substr(ie,11)?(r=":last-child",ie+=11):(r=s,de(re)),r!==s&&(r=Pe(1)),e=r,ce[n]={nextPos:ie,result:e},e)}())===s&&(e=function(){var e,r,n,o,a,i=32*ie+29,u=ce[i];if(u)return ie=u.nextPos,u.result;if(e=ie,":nth-child("===t.substr(ie,11)?(r=":nth-child(",ie+=11):(r=s,de(ne)),r!==s)if(xe()!==s){if(n=[],N.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(W)),o!==s)for(;o!==s;)n.push(o),N.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(W));else n=s;n!==s&&(o=xe())!==s?(41===t.charCodeAt(ie)?(a=")",ie++):(a=s,de(z)),a!==s?(r=we(parseInt(n.join(""),10)),e=r):(ie=e,e=s)):(ie=e,e=s);}else ie=e,e=s;else ie=e,e=s;return ce[i]={nextPos:ie,result:e},e}())===s&&(e=function(){var e,r,n,o,a,i=32*ie+30,u=ce[i];if(u)return ie=u.nextPos,u.result;if(e=ie,":nth-last-child("===t.substr(ie,16)?(r=":nth-last-child(",ie+=16):(r=s,de(oe)),r!==s)if(xe()!==s){if(n=[],N.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(W)),o!==s)for(;o!==s;)n.push(o),N.test(t.charAt(ie))?(o=t.charAt(ie),ie++):(o=s,de(W));else n=s;n!==s&&(o=xe())!==s?(41===t.charCodeAt(ie)?(a=")",ie++):(a=s,de(z)),a!==s?(r=Pe(parseInt(n.join(""),10)),e=r):(ie=e,e=s)):(ie=e,e=s);}else ie=e,e=s;else ie=e,e=s;return ce[i]={nextPos:ie,result:e},e}())===s&&(e=function(){var e,r,n,o=32*ie+31,a=ce[o];return a?(ie=a.nextPos,a.result):(e=ie,58===t.charCodeAt(ie)?(r=":",ie++):(r=s,de(ae)),r!==s&&(n=ve())!==s?e=r={type:"class",name:n}:(ie=e,e=s),ce[o]={nextPos:ie,result:e},e)}()),ce[r]={nextPos:ie,result:e},e)}function Ce(){var e,r,n,o,a,i,u,l,c=32*ie+15,f=ce[c];if(f)return ie=f.nextPos,f.result;if(e=ie,(r=ve())!==s){for(n=[],o=ie,46===t.charCodeAt(ie)?(a=".",ie++):(a=s,de(D)),a!==s&&(i=ve())!==s?o=a=[a,i]:(ie=o,o=s);o!==s;)n.push(o),o=ie,46===t.charCodeAt(ie)?(a=".",ie++):(a=s,de(D)),a!==s&&(i=ve())!==s?o=a=[a,i]:(ie=o,o=s);n!==s?(u=r,l=n,e=r=[].concat.apply([u],l).join("")):(ie=e,e=s);}else ie=e,e=s;return ce[c]={nextPos:ie,result:e},e}function we(e){return {type:"nth-child",index:{type:"literal",value:e}}}function Pe(e){return {type:"nth-last-child",index:{type:"literal",value:e}}}if((n=l())!==s&&ie===t.length)return n;throw n!==s&&ie<t.length&&de({type:"end"}),o=le,a=ue<t.length?t.charAt(ue):null,i=ue<t.length?ye(ue,ue+1):ye(ue,ue),new e(e.buildMessage(o,a),o,a,i)}}}());}));function u(e,t){for(var r=0;r<t.length;++r){if(null==e)return e;e=e[t[r]];}return e}var l="function"==typeof WeakMap?new WeakMap:null;function c(e){if(null==e)return function(){return  true};if(null!=l){var t=l.get(e);return null!=t||(t=f(e),l.set(e,t)),t}return f(e)}function f(t){switch(t.type){case "wildcard":return function(){return  true};case "identifier":var r=t.value.toLowerCase();return function(e,t,n){var o=n&&n.nodeTypeKey||"type";return r===e[o].toLowerCase()};case "exactNode":return function(e,t){return 0===t.length};case "field":var n=t.name.split(".");return function(e,t){return function e(t,r,n,o){for(var a=r,i=o;i<n.length;++i){if(null==a)return  false;var s=a[n[i]];if(Array.isArray(s)){for(var u=0;u<s.length;++u)if(e(t,s[u],n,i+1))return  true;return  false}a=s;}return t===a}(e,t[n.length-1],n,0)};case "matches":var o=t.selectors.map(c);return function(e,t,r){for(var n=0;n<o.length;++n)if(o[n](e,t,r))return  true;return  false};case "compound":var a=t.selectors.map(c);return function(e,t,r){for(var n=0;n<a.length;++n)if(!a[n](e,t,r))return  false;return  true};case "not":var s=t.selectors.map(c);return function(e,t,r){for(var n=0;n<s.length;++n)if(s[n](e,t,r))return  false;return  true};case "has":var l=t.selectors.map(c);return function(e,t,r){var n=false,o=[];return i.traverse(e,{enter:function(e,t){null!=t&&o.unshift(t);for(var a=0;a<l.length;++a)if(l[a](e,o,r))return n=true,void this.break()},leave:function(){o.shift();},keys:r&&r.visitorKeys,fallback:r&&r.fallback||"iteration"}),n};case "child":var f=c(t.left),p=c(t.right);return function(e,t,r){return !!(t.length>0&&p(e,t,r))&&f(t[0],t.slice(1),r)};case "descendant":var h=c(t.left),x=c(t.right);return function(e,t,r){if(x(e,t,r))for(var n=0,o=t.length;n<o;++n)if(h(t[n],t.slice(n+1),r))return  true;return  false};case "attribute":var v=t.name.split(".");switch(t.operator){case void 0:return function(e){return null!=u(e,v)};case "=":switch(t.value.type){case "regexp":return function(e){var r=u(e,v);return "string"==typeof r&&t.value.value.test(r)};case "literal":var g="".concat(t.value.value);return function(e){return g==="".concat(u(e,v))};case "type":return function(r){return t.value.value===e(u(r,v))}}throw new Error("Unknown selector value type: ".concat(t.value.type));case "!=":switch(t.value.type){case "regexp":return function(e){return !t.value.value.test(u(e,v))};case "literal":var A="".concat(t.value.value);return function(e){return A!=="".concat(u(e,v))};case "type":return function(r){return t.value.value!==e(u(r,v))}}throw new Error("Unknown selector value type: ".concat(t.value.type));case "<=":return function(e){return u(e,v)<=t.value.value};case "<":return function(e){return u(e,v)<t.value.value};case ">":return function(e){return u(e,v)>t.value.value};case ">=":return function(e){return u(e,v)>=t.value.value}}throw new Error("Unknown operator: ".concat(t.operator));case "sibling":var E=c(t.left),b=c(t.right);return function(e,r,n){return b(e,r,n)&&y(e,E,r,"LEFT_SIDE",n)||t.left.subject&&E(e,r,n)&&y(e,b,r,"RIGHT_SIDE",n)};case "adjacent":var S=c(t.left),_=c(t.right);return function(e,r,n){return _(e,r,n)&&d(e,S,r,"LEFT_SIDE",n)||t.right.subject&&S(e,r,n)&&d(e,_,r,"RIGHT_SIDE",n)};case "nth-child":var C=t.index.value,w=c(t.right);return function(e,t,r){return w(e,t,r)&&m(e,t,C,r)};case "nth-last-child":var P=-t.index.value,k=c(t.right);return function(e,t,r){return k(e,t,r)&&m(e,t,P,r)};case "class":var D=t.name.toLowerCase();return function(e,r,n){if(n&&n.matchClass)return n.matchClass(t.name,e,r);if(n&&n.nodeTypeKey)return  false;switch(D){case "statement":if("Statement"===e.type.slice(-9))return  true;case "declaration":return "Declaration"===e.type.slice(-11);case "pattern":if("Pattern"===e.type.slice(-7))return  true;case "expression":return "Expression"===e.type.slice(-10)||"Literal"===e.type.slice(-7)||"Identifier"===e.type&&(0===r.length||"MetaProperty"!==r[0].type)||"MetaProperty"===e.type;case "function":return "FunctionDeclaration"===e.type||"FunctionExpression"===e.type||"ArrowFunctionExpression"===e.type}throw new Error("Unknown class name: ".concat(t.name))}}throw new Error("Unknown selector type: ".concat(t.type))}function p(e,t){var r=t&&t.nodeTypeKey||"type",n=e[r];return t&&t.visitorKeys&&t.visitorKeys[n]?t.visitorKeys[n]:i.VisitorKeys[n]?i.VisitorKeys[n]:t&&"function"==typeof t.fallback?t.fallback(e):Object.keys(e).filter((function(e){return e!==r}))}function h(t,r){var n=r&&r.nodeTypeKey||"type";return null!==t&&"object"===e(t)&&"string"==typeof t[n]}function y(e,r,n,o,a){var i=t(n,1)[0];if(!i)return  false;for(var s=p(i,a),u=0;u<s.length;++u){var l=i[s[u]];if(Array.isArray(l)){var c=l.indexOf(e);if(c<0)continue;var f=void 0,y=void 0;"LEFT_SIDE"===o?(f=0,y=c):(f=c+1,y=l.length);for(var d=f;d<y;++d)if(h(l[d],a)&&r(l[d],n,a))return  true}}return  false}function d(e,r,n,o,a){var i=t(n,1)[0];if(!i)return  false;for(var s=p(i,a),u=0;u<s.length;++u){var l=i[s[u]];if(Array.isArray(l)){var c=l.indexOf(e);if(c<0)continue;if("LEFT_SIDE"===o&&c>0&&h(l[c-1],a)&&r(l[c-1],n,a))return  true;if("RIGHT_SIDE"===o&&c<l.length-1&&h(l[c+1],a)&&r(l[c+1],n,a))return  true}}return  false}function m(e,r,n,o){if(0===n)return  false;var a=t(r,1)[0];if(!a)return  false;for(var i=p(a,o),s=0;s<i.length;++s){var u=a[i[s]];if(Array.isArray(u)){var l=n<0?u.length+n:n-1;if(l>=0&&l<u.length&&u[l]===e)return  true}}return  false}function x(t,n,o,a){if(n){var s=[],u=c(n),l=function t(n,o){if(null==n||"object"!=e(n))return [];null==o&&(o=n);for(var a=n.subject?[o]:[],i=Object.keys(n),s=0;s<i.length;++s){var u=i[s],l=n[u];a.push.apply(a,r(t(l,"left"===u?l:o)));}return a}(n).map(c);i.traverse(t,{enter:function(e,t){if(null!=t&&s.unshift(t),u(e,s,a))if(l.length)for(var r=0,n=l.length;r<n;++r){l[r](e,s,a)&&o(e,t,s);for(var i=0,c=s.length;i<c;++i){var f=s.slice(i+1);l[r](s[i],f,a)&&o(s[i],t,f);}}else o(e,t,s);},leave:function(){s.shift();},keys:a&&a.visitorKeys,fallback:a&&a.fallback||"iteration"});}}function v(e,t,r){var n=[];return x(e,t,(function(e){n.push(e);}),r),n}function g(e){return s.parse(e)}function A(e,t,r){return v(e,g(t),r)}A.parse=g,A.match=v,A.traverse=x,A.matches=function(e,t,r,n){return !t||!!e&&(r||(r=[]),c(t)(e,r,n))},A.query=A;

/**
 * Removes initial and ending brackets from `rawType`
 * @param {JsdocTypeLine[]|JsdocTag} container
 * @param {boolean} [isArr]
 * @returns {void}
 */
const stripEncapsulatingBrackets = (container, isArr) => {
  if (isArr) {
    const firstItem = /** @type {JsdocTypeLine[]} */ (container)[0];
    firstItem.rawType = firstItem.rawType.replace(
      /^\{/v, ''
    );

    const lastItem = /** @type {JsdocTypeLine} */ (
      /** @type {JsdocTypeLine[]} */ (
        container
      ).at(-1)
    );
    lastItem.rawType = lastItem.rawType.replace(/\}$/v, '');

    return;
  }
  /** @type {JsdocTag} */ (container).rawType =
    /** @type {JsdocTag} */ (container).rawType.replace(
      /^\{/v, ''
    ).replace(/\}$/v, '');
};

/**
 * @typedef {{
 *   delimiter: string,
 *   postDelimiter: string,
 *   rawType: string,
 *   initial: string,
 *   type: "JsdocTypeLine"
 * }} JsdocTypeLine
 */

/**
 * @typedef {{
 *   delimiter: string,
 *   description: string,
 *   postDelimiter: string,
 *   initial: string,
 *   type: "JsdocDescriptionLine"
 * }} JsdocDescriptionLine
 */

/**
 * @typedef {{
 *   format: 'pipe' | 'plain' | 'prefix' | 'space',
 *   namepathOrURL: string,
 *   tag: string,
 *   text: string,
 * }} JsdocInlineTagNoType
 */
/**
 * @typedef {JsdocInlineTagNoType & {
 *   type: "JsdocInlineTag"
 * }} JsdocInlineTag
 */

/**
 * @typedef {{
 *   delimiter: string,
 *   description: string,
 *   descriptionLines: JsdocDescriptionLine[],
 *   initial: string,
 *   inlineTags: JsdocInlineTag[]
 *   name: string,
 *   postDelimiter: string,
 *   postName: string,
 *   postTag: string,
 *   postType: string,
 *   rawType: string,
 *   parsedType: import('jsdoc-type-pratt-parser').RootResult|null
 *   tag: string,
 *   type: "JsdocTag",
 *   typeLines: JsdocTypeLine[],
 * }} JsdocTag
 */

/**
 * @typedef {number} Integer
 */

/**
 * @typedef {{
 *   delimiter: string,
 *   delimiterLineBreak: string,
 *   description: string,
 *   descriptionEndLine?: Integer,
 *   descriptionLines: JsdocDescriptionLine[],
 *   descriptionStartLine?: Integer,
 *   hasPreterminalDescription: 0|1,
 *   hasPreterminalTagDescription?: 1,
 *   initial: string,
 *   inlineTags: JsdocInlineTag[]
 *   lastDescriptionLine?: Integer,
 *   endLine: Integer,
 *   lineEnd: string,
 *   postDelimiter: string,
 *   tags: JsdocTag[],
 *   terminal: string,
 *   preterminalLineBreak: string,
 *   type: "JsdocBlock",
 * }} JsdocBlock
 */

/**
 * @param {object} cfg
 * @param {string} cfg.text
 * @param {string} cfg.tag
 * @param {'pipe' | 'plain' | 'prefix' | 'space'} cfg.format
 * @param {string} cfg.namepathOrURL
 * @returns {JsdocInlineTag}
 */
const inlineTagToAST = ({text, tag, format, namepathOrURL}) => ({
  text,
  tag,
  format,
  namepathOrURL,
  type: 'JsdocInlineTag'
});

/* eslint-disable jsdoc/reject-any-type -- API */
/**
 * @typedef {{
 *   module?: boolean;
 *   strictMode?: boolean;
 *   asyncFunctionBody?: boolean;
 *   classContext?: boolean;
 *   computedPropertyParser?: (text: string, options?: any) => unknown;
 * }} JtppOptions
 */
/* eslint-enable jsdoc/reject-any-type -- API */

/**
 * @typedef {object} CommentParserToESTreeOptions
 * @property {'compact'|'preserve'} [spacing] By default, empty lines are
 *        compacted; set to 'preserve' to preserve empty comment lines.
 * @property {boolean} [throwOnTypeParsingErrors]
 * @property {JtppOptions} [jsdocTypePrattParserArgs]
 */

/**
 * Converts comment parser AST to ESTree format.
 * @param {import('.').JsdocBlockWithInline} jsdoc
 * @param {import('jsdoc-type-pratt-parser').ParseMode} mode
 * @param {CommentParserToESTreeOptions} [opts]
 * @returns {JsdocBlock}
 */
const commentParserToESTree = (jsdoc, mode = 'typescript', {
  spacing = 'compact',
  throwOnTypeParsingErrors = false,
  jsdocTypePrattParserArgs
} = {}) => {
  /**
   * Strips brackets from a tag's `rawType` values and adds `parsedType`
   * @param {JsdocTag} lastTag
   * @returns {void}
   */
  const cleanUpLastTag = (lastTag) => {
    // Strip out `}` that encapsulates and is not part of
    //   the type
    stripEncapsulatingBrackets(lastTag);

    if (lastTag.typeLines.length) {
      stripEncapsulatingBrackets(lastTag.typeLines, true);
    }

    // Remove single empty line description.
    if (lastTag.descriptionLines.length === 1 &&
      lastTag.descriptionLines[0].description === '') {
      lastTag.descriptionLines.length = 0;
    }

    // With even a multiline type now in full, add parsing
    let parsedType = null;

    try {
      parsedType = jsdocTypePrattParser.parse(
        lastTag.rawType, mode, jsdocTypePrattParserArgs
      );
    } catch (err) {
      // Ignore
      if (lastTag.rawType && throwOnTypeParsingErrors) {
        /** @type {Error} */ (
          err
        ).message = `Tag @${lastTag.tag} with raw type ` +
          `\`${lastTag.rawType}\` had parsing error: ${
            /** @type {Error} */ (err).message}`;
        throw err;
      }
    }

    lastTag.parsedType = parsedType;
  };

  const {source, inlineTags: blockInlineTags} = jsdoc;

  const {tokens: {
    delimiter: delimiterRoot,
    lineEnd: lineEndRoot,
    postDelimiter: postDelimiterRoot,
    start: startRoot,
    end: endRoot
  }} = source[0];

  const endLine = source.length - 1;

  /** @type {JsdocBlock} */
  const ast = {
    delimiter: delimiterRoot,
    delimiterLineBreak: '\n',
    description: '',

    descriptionLines: [],
    inlineTags: blockInlineTags.map((t) => inlineTagToAST(t)),

    initial: startRoot,
    tags: [],
    // `terminal` will be overwritten if there are other entries
    terminal: endRoot,
    preterminalLineBreak: '\n',
    hasPreterminalDescription: 0,
    endLine,
    postDelimiter: postDelimiterRoot,
    lineEnd: lineEndRoot,

    type: 'JsdocBlock'
  };

  /**
   * @type {JsdocTag[]}
   */
  const tags = [];

  /** @type {Integer|undefined} */
  let lastDescriptionLine;

  /** @type {JsdocTag|null} */
  let lastTag = null;

  // Tracks when first valid tag description line is seen.
  let tagDescriptionSeen = false;

  let descLineStateOpen = true;

  source.forEach((info, idx) => {
    const {tokens} = info;
    const {
      delimiter,
      description,
      postDelimiter,
      start: initial,
      tag,
      end,
      type: rawType
    } = tokens;

    if (!tag && description && descLineStateOpen) {
      if (ast.descriptionStartLine === undefined) {
        ast.descriptionStartLine = idx;
      }
      ast.descriptionEndLine = idx;
    }

    if (tag || end) {
      descLineStateOpen = false;
      if (lastDescriptionLine === undefined) {
        lastDescriptionLine = idx;
      }

      // Clean-up with last tag before end or new tag
      if (lastTag) {
        cleanUpLastTag(lastTag);
      }

      // Stop the iteration when we reach the end
      // but only when there is no tag earlier in the line
      // to still process
      if (end && !tag) {
        ast.terminal = end;

        // Check if there are any description lines and if not then this is a
        // one line comment block.
        const isDelimiterLine = ast.descriptionLines.length === 0 &&
          delimiter === '/**';

        // Remove delimiter line break for one line comments blocks.
        if (isDelimiterLine) {
          ast.delimiterLineBreak = '';
        }

        if (description) {
          // Remove terminal line break at end when description is defined.
          if (ast.terminal === '*/') {
            ast.preterminalLineBreak = '';
          }

          if (lastTag) {
            ast.hasPreterminalTagDescription = 1;
          } else {
            ast.hasPreterminalDescription = 1;
          }

          const holder = lastTag || ast;
          holder.description += (holder.description ? '\n' : '') + description;

          // Do not include `delimiter` / `postDelimiter` for opening
          // delimiter line.

          holder.descriptionLines.push({
            delimiter: isDelimiterLine ? '' : delimiter,
            description,
            postDelimiter: isDelimiterLine ? '' : postDelimiter,
            initial,
            type: 'JsdocDescriptionLine'
          });
        }
        return;
      }

      const {
        // eslint-disable-next-line no-unused-vars -- Discarding
        end: ed,
        delimiter: de,
        postDelimiter: pd,
        start: init,
        ...tkns
      } = tokens;

      if (!tokens.name) {
        let i = 1;
        while (source[idx + i]) {
          const {tokens: {
            name,
            postName,
            postType,
            tag: tg
          }} = source[idx + i];
          if (tg) {
            break;
          }
          if (name) {
            tkns.postType = postType;
            tkns.name = name;
            tkns.postName = postName;
            break;
          }
          i++;
        }
      }

      /**
       * @type {JsdocInlineTag[]}
       */
      let tagInlineTags = [];
      if (tag) {
        // Assuming the tags from `source` are in the same order as `jsdoc.tags`
        // we can use the `tags` length as index into the parser result tags.
        tagInlineTags =
          /**
           * @type {import('comment-parser').Spec & {
           *   inlineTags: JsdocInlineTagNoType[]
           * }}
           */ (
            jsdoc.tags[tags.length]
          ).inlineTags.map(
            (t) => inlineTagToAST(t)
          );
      }

      /** @type {JsdocTag} */
      const tagObj = {
        ...tkns,
        initial: endLine ? init : '',
        postDelimiter: lastDescriptionLine ? pd : '',
        delimiter: lastDescriptionLine ? de : '',
        descriptionLines: [],
        inlineTags: tagInlineTags,
        parsedType: null,
        rawType: '',
        type: 'JsdocTag',
        typeLines: []
      };
      tagObj.tag = tagObj.tag.replace(/^@/v, '');

      lastTag = tagObj;
      tagDescriptionSeen = false;

      tags.push(tagObj);
    }

    if (rawType) {
      // Will strip rawType brackets after this tag
      /** @type {JsdocTag} */ (lastTag).typeLines.push(
        /** @type {JsdocTag} */ (lastTag).typeLines.length
          ? {
            delimiter,
            postDelimiter,
            rawType,
            initial,
            type: 'JsdocTypeLine'
          }
          : {
            delimiter: '',
            postDelimiter: '',
            rawType,
            initial: '',
            type: 'JsdocTypeLine'
          }
      );
      /** @type {JsdocTag} */ (lastTag).rawType += /** @type {JsdocTag} */ (
        lastTag
      ).rawType
        ? '\n' + rawType
        : rawType;
    }

    // In `compact` mode skip processing if `description` is an empty string
    // unless lastTag is being processed.
    //
    // In `preserve` mode process when `description` is not the `empty string
    // or the `delimiter` is not `/**` ensuring empty lines are preserved.
    if (((spacing === 'compact' && description) || lastTag) ||
        (spacing === 'preserve' && (description || delimiter !== '/**'))) {
      const holder = lastTag || ast;

      // Check if there are any description lines and if not then this is a
      // multi-line comment block with description on 0th line. Treat
      // `delimiter` / `postDelimiter` / `initial` as being on a new line.
      const isDelimiterLine = holder.descriptionLines.length === 0 &&
        delimiter === '/**';

      // Remove delimiter line break for one line comments blocks.
      if (isDelimiterLine) {
        ast.delimiterLineBreak = '';
      }

      // Track when the first description line is seen to avoid adding empty
      // description lines for tag type lines.
      tagDescriptionSeen ||= Boolean(lastTag &&
        (rawType === '' || rawType?.endsWith('}')));

      if (lastTag) {
        if (tagDescriptionSeen) {
          // The first tag description line is a continuation after type /
          // name parsing.
          const isFirstDescriptionLine = holder.descriptionLines.length === 0;

          // For `compact` spacing must allow through first description line.
          if ((spacing === 'compact' &&
              (description || isFirstDescriptionLine)) ||
              spacing === 'preserve') {
            holder.descriptionLines.push({
              delimiter: isFirstDescriptionLine ? '' : delimiter,
              description,
              postDelimiter: isFirstDescriptionLine ? '' : postDelimiter,
              initial: isFirstDescriptionLine ? '' : initial,
              type: 'JsdocDescriptionLine'
            });
          }
        }
      } else {
        holder.descriptionLines.push({
          delimiter: isDelimiterLine ? '' : delimiter,
          description,
          postDelimiter: isDelimiterLine ? '' : postDelimiter,
          initial: isDelimiterLine ? `` : initial,
          type: 'JsdocDescriptionLine'
        });
      }

      if (!tag) {
        if (lastTag) {
          // For `compact` spacing must filter out any empty description lines
          // after the initial `holder.description` has content.
          if (tagDescriptionSeen && !(spacing === 'compact' &&
            holder.description && description === '')) {
            holder.description += !holder.description
              ? description
              : '\n' + description;
          }
        } else {
          holder.description += !holder.description
            ? description
            : '\n' + description;
        }
      }
    }

    // Clean-up where last line itself has tag content
    if (end && tag) {
      ast.terminal = end;
      ast.hasPreterminalTagDescription = 1;

      // Remove terminal line break at end when tag is defined on last line.
      if (ast.terminal === '*/') {
        ast.preterminalLineBreak = '';
      }

      cleanUpLastTag(/** @type {JsdocTag} */ (lastTag));
    }
  });

  ast.lastDescriptionLine = lastDescriptionLine;
  ast.tags = tags;

  return ast;
};

const jsdocVisitorKeys = {
  JsdocBlock: ['descriptionLines', 'tags', 'inlineTags'],
  JsdocDescriptionLine: [],
  JsdocTypeLine: [],
  JsdocTag: ['parsedType', 'typeLines', 'descriptionLines', 'inlineTags'],
  JsdocInlineTag: []
};

/* eslint-disable jsdoc/reject-any-type -- Todo */
/**
 * Obtained originally from {@link https://github.com/eslint/eslint/blob/master/lib/util/source-code.js#L313}.
 *
 * @license MIT
 */

/**
 * @typedef {import('eslint').AST.Token | import('estree').Comment | {
 *   type: import('eslint').AST.TokenType|"Line"|"Block"|"Shebang",
 *   range: [number, number],
 *   value: string
 * }} Token
 */

/**
 * @typedef {import('eslint').Rule.Node|
 *   import('@typescript-eslint/types').TSESTree.Node} ESLintOrTSNode
 */

/**
 * @typedef {number} int
 */

/**
 * Checks if the given token is a comment token or not.
 *
 * @param {Token} token - The token to check.
 * @returns {boolean} `true` if the token is a comment token.
 */
const isCommentToken = (token) => {
  return token.type === 'Line' || token.type === 'Block' ||
    token.type === 'Shebang';
};

/**
 * @typedef {(
 *   ESLintOrTSNode|
 *   import('estree').Comment|
 *   import('eslint').Rule.Node & {declaration?: any, decorators?: any[]}
 * )} DecoratedNode
 */
/**
 * @param {DecoratedNode} node
 * @returns {import('@typescript-eslint/types').TSESTree.Decorator|undefined}
 */
const getDecorator = (node) => {
  // @ts-expect-error -- Loose checking for decorator presence across node kinds
  return node?.declaration?.decorators?.[0] ||
    // @ts-expect-error -- Loose checking
    node?.decorators?.[0] ||
    // @ts-expect-error -- Loose checking
    node?.parent?.decorators?.[0];
};

/**
 * Check to see if it is a ES6 export declaration.
 *
 * @param {ESLintOrTSNode} astNode An AST node.
 * @returns {boolean} whether the given node represents an export declaration.
 * @private
 */
const looksLikeExport = function (astNode) {
  return astNode.type === 'ExportDefaultDeclaration' ||
    astNode.type === 'ExportNamedDeclaration' ||
    astNode.type === 'ExportAllDeclaration' ||
    astNode.type === 'ExportSpecifier';
};

/**
 * @param {ESLintOrTSNode} astNode
 * @returns {ESLintOrTSNode}
 */
const getTSFunctionComment = function (astNode) {
  const {parent} = astNode;
  /* v8 ignore next 3 */
  if (!parent) {
    return astNode;
  }
  const grandparent = parent.parent;
  /* v8 ignore next 3 */
  if (!grandparent) {
    return astNode;
  }
  const greatGrandparent = grandparent.parent;
  const greatGreatGrandparent = greatGrandparent && greatGrandparent.parent;

  if (/** @type {ESLintOrTSNode} */ (parent).type !== 'TSTypeAnnotation') {
    if (
      parent.type === 'TSTypeAliasDeclaration' &&
      grandparent.type === 'ExportNamedDeclaration'
    ) {
      return grandparent;
    /* v8 ignore next 3 */
    }
    return astNode;
  }

  switch (/** @type {ESLintOrTSNode} */ (grandparent).type) {
  // @ts-expect-error -- For `ClassProperty`.
  case 'PropertyDefinition': case 'ClassProperty':
  case 'TSDeclareFunction':
  case 'TSMethodSignature':
  case 'TSPropertySignature':
    return grandparent;
  case 'ArrowFunctionExpression':
    /* v8 ignore next 3 */
    if (!greatGrandparent) {
      return astNode;
    }

    if (
      greatGrandparent.type === 'VariableDeclarator'

    // && greatGreatGrandparent.parent.type === 'VariableDeclaration'
    ) {
      /* v8 ignore next 3 */
      if (!greatGreatGrandparent || !greatGreatGrandparent.parent) {
        return astNode;
      }
      return greatGreatGrandparent.parent;
    /* v8 ignore next 2 */
    }
    return astNode;
  case 'FunctionExpression':
    /* v8 ignore next 3 */
    if (!greatGreatGrandparent) {
      return astNode;
    }
    if (greatGrandparent.type === 'MethodDefinition') {
      return greatGrandparent;
    }

  // Fallthrough
  default:
    /* v8 ignore next 3 */
    if (grandparent.type !== 'Identifier') {
      return astNode;
    }
  }

  /* v8 ignore next 3 */
  if (!greatGreatGrandparent) {
    return astNode;
  }

  switch (greatGrandparent.type) {
  case 'ArrowFunctionExpression':
    if (
      greatGreatGrandparent.type === 'VariableDeclarator' &&
      greatGreatGrandparent.parent.type === 'VariableDeclaration'
    ) {
      return greatGreatGrandparent.parent;
    }

    return astNode;
  case 'FunctionDeclaration':
    return greatGrandparent;
  case 'VariableDeclarator':
    if (greatGreatGrandparent.type === 'VariableDeclaration') {
      return greatGreatGrandparent;
    }
    /* v8 ignore next 2 */
    // Fallthrough
  default:
    /* v8 ignore next 3 */
    return astNode;
  }
};

const invokedExpression = new Set(
  ['CallExpression', 'OptionalCallExpression', 'NewExpression']
);
const allowableCommentNode = new Set([
  'AssignmentPattern',
  'VariableDeclaration',
  'ExpressionStatement',
  'MethodDefinition',
  'Property',
  'ObjectProperty',
  'ClassProperty',
  'PropertyDefinition',
  'ExportDefaultDeclaration',
  'ReturnStatement'
]);

/**
 * Reduces the provided node to the appropriate node for evaluating
 * JSDoc comment status.
 *
 * @param {ESLintOrTSNode} node An AST node.
 * @param {import('eslint').SourceCode} sourceCode The ESLint SourceCode.
 * @returns {ESLintOrTSNode} The AST node that
 *   can be evaluated for appropriate JSDoc comments.
 */
const getReducedASTNode = function (node, sourceCode) {
  let {parent} = node;
  switch (/** @type {ESLintOrTSNode} */ (node).type) {
  case 'TSFunctionType':
    return getTSFunctionComment(node);
  case 'TSInterfaceDeclaration':
  case 'TSTypeAliasDeclaration':
  case 'TSEnumDeclaration':
  case 'ClassDeclaration':
  case 'FunctionDeclaration':
    /* v8 ignore next 3 */
    if (!parent) {
      return node;
    }
    return looksLikeExport(parent) ? parent : node;

  case 'TSDeclareFunction':
  case 'ClassExpression':
  case 'ObjectExpression':
  case 'ArrowFunctionExpression':
  case 'TSEmptyBodyFunctionExpression':
  case 'FunctionExpression':
    /* v8 ignore next 3 */
    if (!parent) {
      return node;
    }
    if (
      !invokedExpression.has(parent.type)
    ) {
      /**
       * @type {ESLintOrTSNode|Token|null}
       */
      let token = node;
      do {
        token = sourceCode.getTokenBefore(
          /** @type {import('eslint').Rule.Node|import('eslint').AST.Token} */ (
            token
          ),
          {includeComments: true}
        );
      } while (token && token.type === 'Punctuator' && token.value === '(');
      if (token && token.type === 'Block') {
        return node;
      }

      if (sourceCode.getCommentsBefore(
        /** @type {import('eslint').Rule.Node} */
        (node)
      ).length) {
        return node;
      }

      while (
        !sourceCode.getCommentsBefore(
          /** @type {import('eslint').Rule.Node} */
          (parent)
        ).length &&
        !(/Function/v).test(parent.type) &&
        !allowableCommentNode.has(parent.type)
      ) {
        ({parent} = parent);

        if (!parent) {
          break;
        }
      }
      if (parent && parent.type !== 'FunctionDeclaration' &&
        parent.type !== 'Program'
      ) {
        if (parent.parent && parent.parent.type === 'ExportNamedDeclaration') {
          return parent.parent;
        }

        return parent;
      }
    }

    return node;

  default:
    return node;
  }
};

/**
 * Checks for the presence of a JSDoc comment for the given node and returns it.
 *
 * @param {ESLintOrTSNode} astNode The AST node to get
 *   the comment for.
 * @param {import('eslint').SourceCode} sourceCode
 * @param {{maxLines: int, minLines: int, [name: string]: any}} settings
 * @param {{nonJSDoc?: boolean}} [opts]
 * @returns {Token|null} The Block comment token containing the JSDoc comment
 *    for the given node or null if not found.
 */
const findJSDocComment = (astNode, sourceCode, settings, opts = {}) => {
  const {nonJSDoc} = opts;
  const {minLines, maxLines} = settings;

  /** @type {ESLintOrTSNode|import('estree').Comment} */
  let currentNode = astNode;
  let tokenBefore = null;
  let parenthesisToken = null;

  while (currentNode) {
    const decorator = getDecorator(currentNode);
    if (decorator) {
      const dec = /** @type {unknown} */ (decorator);
      currentNode = /** @type {import('eslint').Rule.Node} */ (dec);
    }
    tokenBefore = sourceCode.getTokenBefore(
      /** @type {import('eslint').Rule.Node} */
      (currentNode),
      {includeComments: true}
    );
    if (
      tokenBefore && tokenBefore.type === 'Punctuator' &&
      tokenBefore.value === '('
    ) {
      parenthesisToken = tokenBefore;
      [tokenBefore] = sourceCode.getTokensBefore(
        /** @type {import('eslint').Rule.Node} */
        (currentNode),
        {
          count: 2,
          includeComments: true
        }
      );
    }
    if (!tokenBefore || !isCommentToken(tokenBefore)) {
      return null;
    }
    if (!nonJSDoc && tokenBefore.type === 'Line') {
      currentNode = tokenBefore;
      continue;
    }
    break;
  }

  /* v8 ignore next 3 */
  if (!tokenBefore || !currentNode.loc || !tokenBefore.loc) {
    return null;
  }

  if (
    (
      (nonJSDoc && (tokenBefore.type !== 'Block' ||
        !(/^\*\s/v).test(tokenBefore.value))) ||
      (!nonJSDoc && tokenBefore.type === 'Block' &&
      (/^\*\s/v).test(tokenBefore.value))
    ) &&
    currentNode.loc.start.line - (
      /** @type {import('eslint').AST.Token} */
      (parenthesisToken ?? tokenBefore)
    ).loc.end.line >= minLines &&
    currentNode.loc.start.line - (
      /** @type {import('eslint').AST.Token} */
      (parenthesisToken ?? tokenBefore)
    ).loc.end.line <= maxLines
  ) {
    return tokenBefore;
  }

  return null;
};

/**
 * Retrieves the JSDoc comment for a given node.
 *
 * @param {import('eslint').SourceCode} sourceCode The ESLint SourceCode
 * @param {import('eslint').Rule.Node} node The AST node to get
 *   the comment for.
 * @param {{maxLines: int, minLines: int, [name: string]: any}} settings The
 *   settings in context
 * @param {{checkOverloads?: boolean}} [opts]
 * @returns {Token|null} The Block comment
 *   token containing the JSDoc comment for the given node or
 *   null if not found.
 * @public
 */
const getJSDocComment = function (sourceCode, node, settings, opts = {}) {
  const reducedNode = getReducedASTNode(node, sourceCode);
  const comment = findJSDocComment(reducedNode, sourceCode, settings);

  if (!comment &&
    opts.checkOverloads &&
    (
      reducedNode.parent?.type === 'Program' ||
      reducedNode.parent?.type === 'ExportNamedDeclaration'
    )
  ) {
    let functionName;
    if (reducedNode.type === 'TSDeclareFunction' ||
      reducedNode.type === 'FunctionDeclaration') {
      functionName = reducedNode.id?.name;
    } else if (reducedNode.type === 'ExportNamedDeclaration' &&
      (reducedNode.declaration?.type === 'FunctionDeclaration' ||
      // @ts-expect-error Should be ok
      reducedNode.declaration?.type === 'TSDeclareFunction')
    ) {
      functionName = reducedNode.declaration.id.name;
    } else {
      return null;
    }

    /**
     * @type {import('estree').Program}
     */
    let programNode;

    /**
     * @type {ESLintOrTSNode}
     */
    let childNode;

    if (reducedNode.parent?.type === 'Program') {
      programNode = reducedNode.parent;
      childNode = reducedNode;
    } else if (reducedNode.parent?.parent.type === 'Program') {
      programNode = reducedNode.parent.parent;
      childNode = reducedNode.parent;
    /* v8 ignore next 3 */
    } else {
      throw new Error('unexpected TS guard condition');
    }

    // @ts-expect-error Should be ok
    const idx = programNode.body.indexOf(childNode);
    const prevSibling = /** @type {import('eslint').AST.Program} */ (
      programNode
    ).body[idx - 1];
    if (
      // @ts-expect-error Should be ok
      (prevSibling?.type === 'TSDeclareFunction' &&
        // @ts-expect-error Should be ok
        functionName === prevSibling.id.name) ||
      (prevSibling?.type === 'ExportNamedDeclaration' &&
        // @ts-expect-error Should be ok
        prevSibling.declaration?.type === 'TSDeclareFunction' &&
        // @ts-expect-error Should be ok
        prevSibling.declaration?.id?.name === functionName)
    ) {
      // @ts-expect-error Should be ok
      return getJSDocComment(sourceCode, prevSibling, settings, opts);
    }
  }
  return comment;
};

/**
 * @param {RegExpMatchArray & {
 *   indices: {
 *     groups: {
 *       [key: string]: [number, number]
 *     }
 *   }
 *   groups: {[key: string]: string}
 * }} match An inline tag regexp match.
 * @returns {'pipe' | 'plain' | 'prefix' | 'space'}
 */
function determineFormat (match) {
  const {separator, text} = match.groups;
  const [, textEnd] = match.indices.groups.text;
  const [tagStart] = match.indices.groups.tag;
  if (!text) {
    return 'plain';
  } else if (separator === '|') {
    return 'pipe';
  } else if (textEnd < tagStart) {
    return 'prefix';
  }
  return 'space';
}

/**
 * Extracts inline tags from a description.
 * @param {string} description
 * @returns {import('.').InlineTag[]} Array of inline tags from the description.
 */
function parseDescription (description) {
  /** @type {import('.').InlineTag[]} */
  const result = [];

  // This could have been expressed in a single pattern,
  // but having two avoids a potentially exponential time regex.

  const prefixedTextPattern = /(?:\[(?<text>[^\]]+)\])\{@(?<tag>[^\}\s]+)\s?(?<namepathOrURL>[^\}\s\|]*)\}/gvd;
  // The pattern used to match for text after tag uses a negative lookbehind
  // on the ']' char to avoid matching the prefixed case too.
  const suffixedAfterPattern = /(?<!\])\{@(?<tag>[^\}\s]+)\s?(?<namepathOrURL>[^\}\s\|]*)\s*(?<separator>[\s\|])?\s*(?<text>[^\}]*)\}/gvd;

  const matches = [
    ...description.matchAll(prefixedTextPattern),
    ...description.matchAll(suffixedAfterPattern)
  ];

  for (const mtch of matches) {
    const match = /**
      * @type {RegExpMatchArray & {
      *   indices: {
      *     groups: {
      *       [key: string]: [number, number]
      *     }
      *   }
      *   groups: {[key: string]: string}
      * }}
      */ (
        mtch
      );
    const {tag, namepathOrURL, text} = match.groups;
    const [start, end] = match.indices[0];
    const format = determineFormat(match);

    result.push({
      tag,
      namepathOrURL,
      text,
      format,
      start,
      end
    });
  }

  return result;
}

/**
 * Splits the `{@ prefix}` from remaining `Spec.lines[].token.description`
 * into the `inlineTags` tokens, and populates `spec.inlineTags`
 * @param {import('comment-parser').Block} block
 * @returns {import('.').JsdocBlockWithInline}
 */
function parseInlineTags (block) {
  const inlineTags =
    /**
     * @type {(import('./commentParserToESTree').JsdocInlineTagNoType & {
     *   line?: import('./commentParserToESTree').Integer
     * })[]}
     */ (
      parseDescription(block.description)
    );

  /** @type {import('.').JsdocBlockWithInline} */ (
    block
  ).inlineTags = inlineTags;

  for (const tag of block.tags) {
    /**
     * @type {import('.').JsdocTagWithInline}
     */ (tag).inlineTags = parseDescription(tag.description);
  }
  return (
    /**
     * @type {import('.').JsdocBlockWithInline}
     */ (block)
  );
}

/* eslint-disable prefer-named-capture-group -- Temporary */

const {
  name: nameTokenizer,
  tag: tagTokenizer,
  type: typeTokenizer,
  description: descriptionTokenizer
} = commentParser.tokenizers;

/**
 * @param {import('comment-parser').Spec} spec
 * @returns {boolean}
 */
const hasSeeWithLink = (spec) => {
  return spec.tag === 'see' && (/\{@link.+?\}/v).test(spec.source[0].source);
};

const defaultNoTypes = [
  'default', 'defaultvalue', 'description', 'example',
  'file', 'fileoverview', 'license',
  'overview', 'see', 'summary'
];

const defaultNoNames = [
  'access', 'author',
  'default', 'defaultvalue',
  'description',
  'example', 'exception', 'file', 'fileoverview',
  'kind',
  'license', 'overview',
  'return', 'returns',
  'since', 'summary',
  'throws',
  'version', 'variation'
];

const optionalBrackets = /^\[(?<name>[^=]*)=[^\]]*\]/v;
const preserveTypeTokenizer = typeTokenizer('preserve');
const preserveDescriptionTokenizer = descriptionTokenizer('preserve');
const plainNameTokenizer = nameTokenizer();

/**
 * Can't import `comment-parser/es6/parser/tokenizers/index.js`,
 *   so we redefine here.
 * @typedef {(spec: import('comment-parser').Spec) =>
 *   import('comment-parser').Spec} CommentParserTokenizer
 */

/**
 * @param {object} [cfg]
 * @param {string[]} [cfg.noTypes]
 * @param {string[]} [cfg.noNames]
 * @returns {CommentParserTokenizer[]}
 */
const getTokenizers = ({
  noTypes = defaultNoTypes,
  noNames = defaultNoNames
} = {}) => {
  // trim
  return [
    // Tag
    tagTokenizer(),

    /**
     * Type tokenizer.
     * @param {import('comment-parser').Spec} spec
     * @returns {import('comment-parser').Spec}
     */
    (spec) => {
      if (noTypes.includes(spec.tag)) {
        return spec;
      }

      return preserveTypeTokenizer(spec);
    },

    /**
     * Name tokenizer.
     * @param {import('comment-parser').Spec} spec
     * @returns {import('comment-parser').Spec}
     */
    (spec) => {
      if (spec.tag === 'template') {
        // const preWS = spec.postTag;
        const remainder = spec.source[0].tokens.description;

        let pos;
        if (remainder.startsWith('[') && remainder.includes(']')) {
          const endingBracketPos = remainder.lastIndexOf(']');
          pos = remainder.slice(endingBracketPos).search(/(?<![\s,])\s/v);
          if (pos > -1) { // Add offset to starting point if space found
            pos += endingBracketPos;
          }
        } else {
          pos = remainder.search(/(?<![\s,])\s/v);
        }

        const name = pos === -1 ? remainder : remainder.slice(0, pos);
        const extra = remainder.slice(pos);
        let postName = '', description = '', lineEnd = '';
        if (pos > -1) {
          [, postName, description, lineEnd] = /** @type {RegExpMatchArray} */ (
            extra.match(/(\s*)([^\r]*)(\r)?/v)
          );
        }

        spec.optional = optionalBrackets.test(name);
        // name = /** @type {string} */ (
        //   /** @type {RegExpMatchArray} */ (
        //     name.match(optionalBrackets)
        //   )?.groups?.name
        // );

        spec.name = name;
        const {tokens} = spec.source[0];
        tokens.name = name;
        tokens.postName = postName;
        tokens.description = description;
        tokens.lineEnd = lineEnd || '';

        return spec;
      }

      if (noNames.includes(spec.tag) || hasSeeWithLink(spec)) {
        return spec;
      }

      return plainNameTokenizer(spec);
    },

    /**
     * Description tokenizer.
     * @param {import('comment-parser').Spec} spec
     * @returns {import('comment-parser').Spec}
     */
    (spec) => {
      return preserveDescriptionTokenizer(spec);
    }
  ];
};

/**
 * Accepts a comment token or complete comment string and converts it into
 * `comment-parser` AST.
 * @param {string | {value: string}} commentOrNode
 * @param {string} [indent] Whitespace
 * @returns {import('.').JsdocBlockWithInline}
 */
const parseComment = (commentOrNode, indent = '') => {
  let result;

  switch (typeof commentOrNode) {
  case 'string':
    // Preserve JSDoc block start/end indentation.
    result = commentParser.parse(`${indent}${commentOrNode}`, {
      // @see https://github.com/yavorskiy/comment-parser/issues/21
      tokenizers: getTokenizers()
    });
    break;
  case 'object':
    if (commentOrNode === null) {
      throw new TypeError(`'commentOrNode' is not a string or object.`);
    }

    // Preserve JSDoc block start/end indentation.
    result = commentParser.parse(`${indent}/*${commentOrNode.value}*/`, {
      // @see https://github.com/yavorskiy/comment-parser/issues/21
      tokenizers: getTokenizers()
    });
    break;

  default:
    throw new TypeError(`'commentOrNode' is not a string or object.`);
  }

  if (!result.length) {
    throw new Error('There were no results for comment parsing');
  }

  const [block] = result;
  return parseInlineTags(block);
};

/* eslint-disable unicorn/prefer-structured-clone -- JSON desired here */
/* eslint-enable import/no-unresolved -- Bug? */

const jsdocCommentProperty = 'jsdoc';
const jsdocBlocksProperty = 'jsdocBlocks';

/**
 * @typedef {import('@es-joy/jsdoccomment').JsdocBlock & {
 *   loc: import('estree').SourceLocation,
 *   range: [number, number],
 *   commentsIndex: number
 * }} JsdocBlockEnhanced
 */

/**
 * @callback TraverseCallback
 * @param {import('estree').Node & {
 *   parent?: import('estree').Node & {
 *      parent?: import('estree').Node
 *   }
 *   jsdoc?: import('@es-joy/jsdoccomment').JsdocBlock|null
 * }} node
 * @param {import('estree').Node} parent
 * @returns {void}
 */

/* eslint-disable jsdoc/reject-any-type -- Needed */
/**
 * @typedef {any} AnyObject
 */
/* eslint-enable jsdoc/reject-any-type -- Needed */

/* eslint-disable jsdoc/reject-any-type -- Babel doesn't specify */
/**
 * @typedef {{
 *   mode?: "jsdoc"|"closure"|"typescript",
 *   maxLines?: number,
 *   minLines?: number,
 *   indent?: string,
 *   throwOnTypeParsingErrors?: boolean
 *   sourceType?: "script"|"module",
 *   babelOptions?: any
 * }} Options
 */
/* eslint-enable jsdoc/reject-any-type -- Babel doesn't specify */

/**
 * @param {AnyObject} obj
 */
const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * @param {(
 *   code: string,
 *   options: Options
 * ) => import('eslint').Linter.ESLintParseResult} parser
 * @param {{
 *   mode?: "jsdoc"|"closure"|"typescript"
 * }} bakedInOptions
 */
const getJsdocEslintParser = (parser, bakedInOptions = {}) => {
  /**
   * @param {string} code
   * @param {Options} options
   */
  return function (code, options = {}) {
    const {
      mode = bakedInOptions.mode || 'jsdoc',
      maxLines = 1,
      minLines = 0,
      indent = '',
      throwOnTypeParsingErrors = false,
      sourceType,
      babelOptions,
      ...parserOptions
    } = options;

    // console.log('options', options, code);
    const {ast, scopeManager, visitorKeys} = parser(code, {
      // Grab if not within `babelOptions`
      sourceType,
      ...babelOptions,
      ...parserOptions,
      ...bakedInOptions

      // These would be needed by the regular Babel parser, but apparently
      //   this Babel ESLint parser properly adds them for us:
      // Required by ESLint on `Program`
      // tokens: true,
      // Required by ESLint on each Node
      // ranges: true
    });

    const modifiedVisitorKeys = JSON.parse(JSON.stringify(visitorKeys));
    Object.entries(modifiedVisitorKeys).forEach(([key, value]) => {
      if (key === 'Program') {
        modifiedVisitorKeys[key] = Array.isArray(value)
          ? [jsdocBlocksProperty, ...value]
          /* c8 ignore next 1 */
          : [jsdocBlocksProperty];
      } else {
        modifiedVisitorKeys[key] = Array.isArray(value)
          ? [jsdocCommentProperty, ...value]
          /* c8 ignore next 1 */
          : [jsdocCommentProperty];
      }
    });

    const newVisitorKeys = {
      ...modifiedVisitorKeys,
      ...jsdocVisitorKeys,
      ...jsdocTypePrattParser.visitorKeys
    };

    // Todo: Expose comment or type parsing utilities?
    const parserServices = {
      /*
      foo () {
        // eslint-disable-next-line no-console -- Testing
        console.log('test');
      }
      */
    };

    // Filed https://github.com/jsdoctypeparser/jsdoctypeparser/issues/139
    //  and commented at https://github.com/syavorsky/comment-parser/issues/99
    //  regarding jsdoctypeparser and comment-parser supporting this AST
    //  out of the box

    // Todo: Should really be building this as building AST rather than
    //   traversing and running on each node
    const sourceCode = new eslint.SourceCode(
      {
        ast,
        scopeManager,
        visitorKeys,
        text: code,
        parserServices
      }
    );

    const sel = A.parse('*[type]');

    /**
     * @type {{[key: string]: boolean}}
     */
    const takenRanges = {};

    A.traverse(
      ast,
      sel,
      /** @type {TraverseCallback} */
      (node, parent) => {
        // `parent` not available by default, so we add; must be
        //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
        node.parent = parent;

        // Have must `range` and `loc` per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
        // We've specified `ranges` above and seem to be getting `loc` set.
        // const [start, end] = node.range;
        // node.loc = {start: {line: 0}, end: {line: 0}};
        // node.loc = {start: {line: start}, end: {line: end}};

        let commentAST = null;
        if (node.type !== 'Program' && !node.type.startsWith('Jsdoc')) {
          let commentToken =
            /**
             * @type {import('@es-joy/jsdoccomment').Token & {
             *   loc: import('estree').SourceLocation
             * }|null}
             */ (getJSDocComment(
              sourceCode,
              // @ts-expect-error Ok
              node,
              {
                minLines,
                maxLines
              }
            ));

          /**
           * @type {(import('estree').Node & {
           *   parent?: import('estree').Node
           * })|undefined}
           */
          let ancestor = parent;
          do {
            if (ancestor.type === 'Program') {
              break;
            }
            const ancestorCommentToken = getJSDocComment(
              sourceCode,
              // @ts-expect-error Ok
              ancestor,
              {
                minLines,
                maxLines
              }
            );

            if (ancestorCommentToken && ancestorCommentToken === commentToken) {
              // Ancestor has handled instead
              commentToken = null;
              break;
            }

            ancestor = ancestor.parent;
          } while (ancestor);

          if (
            commentToken && commentToken.range && 'loc' in commentToken &&
            commentToken.loc && 'start' in commentToken.loc
          ) {
            // Note: When there is no end line (it is inline), the `initial` of
            //   the comment, could be too long, so we can't just repeat solely
            //   based on the start column
            const idx = commentToken.range[0];
            // We could also add to the Comment AST to suggest a line should be
            //   stringified with line breaks (even if only a single line), if
            //   it occurs on its own line (the start.column (and end.column))
            //   have nothing before or after.
            const indnt = sourceCode.getText().slice(
              idx - commentToken.loc.start.column, idx
            ).match(/\s+$/u)?.[0] || '';

            const jsdoc = parseComment(
              commentToken,
              indnt
            );
            commentAST =
              /**
               * @type {import('@es-joy/jsdoccomment').JsdocBlock & {
               *   loc: import('estree').SourceLocation,
               *   range: [number, number]
               * }}
               */ (commentParserToESTree(jsdoc, mode, {
                throwOnTypeParsingErrors
                /* ,
                jsdocTypePrattParserArgs: {
                  loc: true,
                  range: true
                } */
              }));
            commentAST.loc = clone(commentToken.loc);
            commentAST.range = clone(commentToken.range);

            takenRanges[String(commentToken.range)] = true;

            A.traverse(
              // @ts-expect-error Bug
              commentAST,
              sel,
              /** @type {TraverseCallback} */
              (_node, parent) => {
                // `parent` not available by default, so we add; must be
                //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
                _node.parent = parent;

                // For now, we are just fudging these by using the comment
                //   block's location
                _node.loc = clone(commentToken?.loc);
                _node.range = clone(commentToken?.range);
              }, {visitorKeys: newVisitorKeys}
            );
          }
        }

        if (node.type !== 'Program' && !node.type.startsWith('Jsdoc')) {
          node[jsdocCommentProperty] = commentAST;
        }
      }, {visitorKeys: newVisitorKeys}
    );

    if (ast.comments) {
      /**
       * @type {import('eslint').AST.Program & {
       *   jsdocBlocks: (JsdocBlockEnhanced|null)[]
       * }}
       */
      (ast)[jsdocBlocksProperty] = ast.comments.map(({
        type, value: comment, range, loc
      }, idx) => {
        if (type !== 'Block' || takenRanges[String(range)]) {
          return null;
        }
        let jsdoc;
        try {
          // Todo: detect leading whitespace for indent argument?
          jsdoc = parseComment({value: comment}, indent);
          // No longer possible here?
          /* c8 ignore next 3 */
          if (!jsdoc) {
            return null;
          }
        // Unreachable?
        /* c8 ignore next 3 */
        } catch (err) {
          return null;
        }
        const commentAST =
          /**
           * @type {JsdocBlockEnhanced}
           */ (commentParserToESTree(jsdoc, mode, {
            throwOnTypeParsingErrors
            /* ,
            jsdocTypePrattParserArgs: {
              loc: true,
              range: true
            } */
          }));

        commentAST.loc = clone(loc);
        commentAST.range = clone(range);
        commentAST.commentsIndex = idx;

        A.traverse(
          // @ts-expect-error Bug
          commentAST,
          sel,
          /** @type {TraverseCallback} */
          (node, parent) => {
            // `parent` not available by default, so we add; must be
            //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
            node.parent = parent;

            // For now, we are just fudging these by using the comment block's
            //   location
            node.loc = clone(loc);
            node.range = clone(range);
          }, {visitorKeys: newVisitorKeys}
        );

        return commentAST;
      }).filter(Boolean);
    }

    // console.log('modifiedVisitorKeys', modifiedVisitorKeys);
    // console.log('ast', ast.jsdoc.tags[0]);

    return {
      ast,
      services: parserServices,
      scopeManager,
      visitorKeys: newVisitorKeys
    };
  };
};

const parseForESLint = getJsdocEslintParser(eslintParser.parseForESLint);

exports.parseForESLint = parseForESLint;
