'use strict';

var parser = require('@typescript-eslint/parser');
var eslint = require('eslint');
var jsdocTypePrattParser = require('jsdoc-type-pratt-parser');
var commentParser = require('comment-parser');

function e(t){return (e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,s=[],u=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1;}else for(;!(u=(n=o.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){l=!0,a=e;}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw a}}return s}}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return "Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return e(t={exports:{}},t.exports),t.exports}var i=o((function(e,t){!function e(t){var r,n,a,o,i,s;function u(e){var t,r,n={};for(t in e)e.hasOwnProperty(t)&&(r=e[t],n[t]="object"==typeof r&&null!==r?u(r):r);return n}function l(e,t){this.parent=e,this.key=t;}function c(e,t,r,n){this.node=e,this.path=t,this.wrap=r,this.ref=n;}function f(){}function p(e){return null!=e&&("object"==typeof e&&"string"==typeof e.type)}function h(e,t){return (e===r.ObjectExpression||e===r.ObjectPattern)&&"properties"===t}function y(e,t){for(var r=e.length-1;r>=0;--r)if(e[r].node===t)return !0;return !1}function d(e,t){return (new f).traverse(e,t)}function m(e,t){var r;return r=function(e,t){var r,n,a,o;for(n=e.length,a=0;n;)t(e[o=a+(r=n>>>1)])?n=r:(a=o+1,n-=r+1);return a}(t,(function(t){return t.range[0]>e.range[0]})),e.extendedRange=[e.range[0],e.range[1]],r!==t.length&&(e.extendedRange[1]=t[r].range[0]),(r-=1)>=0&&(e.extendedRange[0]=t[r].range[1]),e}return r={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ChainExpression:"ChainExpression",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",ForOfStatement:"ForOfStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",GeneratorExpression:"GeneratorExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportExpression:"ImportExpression",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",ModuleSpecifier:"ModuleSpecifier",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",PrivateIdentifier:"PrivateIdentifier",Program:"Program",Property:"Property",PropertyDefinition:"PropertyDefinition",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},a={AssignmentExpression:["left","right"],AssignmentPattern:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],ArrowFunctionExpression:["params","body"],AwaitExpression:["argument"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ChainExpression:["expression"],ClassBody:["body"],ClassDeclaration:["id","superClass","body"],ClassExpression:["id","superClass","body"],ComprehensionBlock:["left","right"],ComprehensionExpression:["blocks","filter","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExportAllDeclaration:["source"],ExportDefaultDeclaration:["declaration"],ExportNamedDeclaration:["declaration","specifiers","source"],ExportSpecifier:["exported","local"],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],ForOfStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],GeneratorExpression:["blocks","filter","body"],Identifier:[],IfStatement:["test","consequent","alternate"],ImportExpression:["source"],ImportDeclaration:["specifiers","source"],ImportDefaultSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportSpecifier:["imported","local"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],MetaProperty:["meta","property"],MethodDefinition:["key","value"],ModuleSpecifier:[],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],PrivateIdentifier:[],Program:["body"],Property:["key","value"],PropertyDefinition:["key","value"],RestElement:["argument"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SpreadElement:["argument"],Super:[],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],TaggedTemplateExpression:["tag","quasi"],TemplateElement:[],TemplateLiteral:["quasis","expressions"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handler","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]},n={Break:o={},Skip:i={},Remove:s={}},l.prototype.replace=function(e){this.parent[this.key]=e;},l.prototype.remove=function(){return Array.isArray(this.parent)?(this.parent.splice(this.key,1),!0):(this.replace(null),!1)},f.prototype.path=function(){var e,t,r,n,a;function o(e,t){if(Array.isArray(t))for(r=0,n=t.length;r<n;++r)e.push(t[r]);else e.push(t);}if(!this.__current.path)return null;for(a=[],e=2,t=this.__leavelist.length;e<t;++e)o(a,this.__leavelist[e].path);return o(a,this.__current.path),a},f.prototype.type=function(){return this.current().type||this.__current.wrap},f.prototype.parents=function(){var e,t,r;for(r=[],e=1,t=this.__leavelist.length;e<t;++e)r.push(this.__leavelist[e].node);return r},f.prototype.current=function(){return this.__current.node},f.prototype.__execute=function(e,t){var r,n;return n=void 0,r=this.__current,this.__current=t,this.__state=null,e&&(n=e.call(this,t.node,this.__leavelist[this.__leavelist.length-1].node)),this.__current=r,n},f.prototype.notify=function(e){this.__state=e;},f.prototype.skip=function(){this.notify(i);},f.prototype.break=function(){this.notify(o);},f.prototype.remove=function(){this.notify(s);},f.prototype.__initialize=function(e,t){this.visitor=t,this.root=e,this.__worklist=[],this.__leavelist=[],this.__current=null,this.__state=null,this.__fallback=null,"iteration"===t.fallback?this.__fallback=Object.keys:"function"==typeof t.fallback&&(this.__fallback=t.fallback),this.__keys=a,t.keys&&(this.__keys=Object.assign(Object.create(this.__keys),t.keys));},f.prototype.traverse=function(e,t){var r,n,a,s,u,l,f,d,m,x,v,g;for(this.__initialize(e,t),g={},r=this.__worklist,n=this.__leavelist,r.push(new c(e,null,null,null)),n.push(new c(null,null,null,null));r.length;)if((a=r.pop())!==g){if(a.node){if(l=this.__execute(t.enter,a),this.__state===o||l===o)return;if(r.push(g),n.push(a),this.__state===i||l===i)continue;if(u=(s=a.node).type||a.wrap,!(x=this.__keys[u])){if(!this.__fallback)throw new Error("Unknown node type "+u+".");x=this.__fallback(s);}for(d=x.length;(d-=1)>=0;)if(v=s[f=x[d]])if(Array.isArray(v)){for(m=v.length;(m-=1)>=0;)if(v[m]&&!y(n,v[m])){if(h(u,x[d]))a=new c(v[m],[f,m],"Property",null);else {if(!p(v[m]))continue;a=new c(v[m],[f,m],null,null);}r.push(a);}}else if(p(v)){if(y(n,v))continue;r.push(new c(v,f,null,null));}}}else if(a=n.pop(),l=this.__execute(t.leave,a),this.__state===o||l===o)return},f.prototype.replace=function(e,t){var r,n,a,u,f,y,d,m,x,v,g,A,E;function b(e){var t,n,a,o;if(e.ref.remove())for(n=e.ref.key,o=e.ref.parent,t=r.length;t--;)if((a=r[t]).ref&&a.ref.parent===o){if(a.ref.key<n)break;--a.ref.key;}}for(this.__initialize(e,t),g={},r=this.__worklist,n=this.__leavelist,y=new c(e,null,null,new l(A={root:e},"root")),r.push(y),n.push(y);r.length;)if((y=r.pop())!==g){if(void 0!==(f=this.__execute(t.enter,y))&&f!==o&&f!==i&&f!==s&&(y.ref.replace(f),y.node=f),this.__state!==s&&f!==s||(b(y),y.node=null),this.__state===o||f===o)return A.root;if((a=y.node)&&(r.push(g),n.push(y),this.__state!==i&&f!==i)){if(u=a.type||y.wrap,!(x=this.__keys[u])){if(!this.__fallback)throw new Error("Unknown node type "+u+".");x=this.__fallback(a);}for(d=x.length;(d-=1)>=0;)if(v=a[E=x[d]])if(Array.isArray(v)){for(m=v.length;(m-=1)>=0;)if(v[m]){if(h(u,x[d]))y=new c(v[m],[E,m],"Property",new l(v,m));else {if(!p(v[m]))continue;y=new c(v[m],[E,m],null,new l(v,m));}r.push(y);}}else p(v)&&r.push(new c(v,E,null,new l(a,E)));}}else if(y=n.pop(),void 0!==(f=this.__execute(t.leave,y))&&f!==o&&f!==i&&f!==s&&y.ref.replace(f),this.__state!==s&&f!==s||b(y),this.__state===o||f===o)return A.root;return A.root},t.Syntax=r,t.traverse=d,t.replace=function(e,t){return (new f).replace(e,t)},t.attachComments=function(e,t,r){var a,o,i,s,l=[];if(!e.range)throw new Error("attachComments needs range information");if(!r.length){if(t.length){for(i=0,o=t.length;i<o;i+=1)(a=u(t[i])).extendedRange=[0,e.range[0]],l.push(a);e.leadingComments=l;}return e}for(i=0,o=t.length;i<o;i+=1)l.push(m(u(t[i]),r));return s=0,d(e,{enter:function(e){for(var t;s<l.length&&!((t=l[s]).extendedRange[1]>e.range[0]);)t.extendedRange[1]===e.range[0]?(e.leadingComments||(e.leadingComments=[]),e.leadingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?n.Break:l[s].extendedRange[0]>e.range[1]?n.Skip:void 0}}),s=0,d(e,{leave:function(e){for(var t;s<l.length&&(t=l[s],!(e.range[1]<t.extendedRange[0]));)e.range[1]===t.extendedRange[0]?(e.trailingComments||(e.trailingComments=[]),e.trailingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?n.Break:l[s].extendedRange[0]>e.range[1]?n.Skip:void 0}}),e},t.VisitorKeys=a,t.VisitorOption=n,t.Controller=f,t.cloneEnvironment=function(){return e({})},t}(t);})),s=o((function(e){e.exports&&(e.exports=function(){function e(t,r,n,a){this.message=t,this.expected=r,this.found=n,this.location=a,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e);}return function(e,t){function r(){this.constructor=e;}r.prototype=t.prototype,e.prototype=new r;}(e,Error),e.buildMessage=function(e,t){var r={literal:function(e){return '"'+a(e.text)+'"'},class:function(e){var t,r="";for(t=0;t<e.parts.length;t++)r+=e.parts[t]instanceof Array?o(e.parts[t][0])+"-"+o(e.parts[t][1]):o(e.parts[t]);return "["+(e.inverted?"^":"")+r+"]"},any:function(e){return "any character"},end:function(e){return "end of input"},other:function(e){return e.description}};function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function a(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return "\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return "\\x"+n(e)}))}function o(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return "\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return "\\x"+n(e)}))}return "Expected "+function(e){var t,n,a,o=new Array(e.length);for(t=0;t<e.length;t++)o[t]=(a=e[t],r[a.type](a));if(o.sort(),o.length>0){for(t=1,n=1;t<o.length;t++)o[t-1]!==o[t]&&(o[n]=o[t],n++);o.length=n;}switch(o.length){case 1:return o[0];case 2:return o[0]+" or "+o[1];default:return o.slice(0,-1).join(", ")+", or "+o[o.length-1]}}(e)+" but "+function(e){return e?'"'+a(e)+'"':"end of input"}(t)+" found."},{SyntaxError:e,parse:function(t,r){r=void 0!==r?r:{};var n,a,o,i,s={},u={start:de},l=de,c=ce(" ",!1),f=/^[^ [\],():#!=><~+.]/,p=fe([" ","[","]",",","(",")",":","#","!","=",">","<","~","+","."],!0,!1),h=ce(">",!1),y=ce("~",!1),d=ce("+",!1),m=ce(",",!1),x=ce("!",!1),v=ce("*",!1),g=ce("#",!1),A=ce("[",!1),E=ce("]",!1),b=/^[><!]/,S=fe([">","<","!"],!1,!1),_=ce("=",!1),C=function(e){return (e||"")+"="},w=/^[><]/,P=fe([">","<"],!1,!1),k=ce(".",!1),D=function(e,t,r){return {type:"attribute",name:e,operator:t,value:r}},I=ce('"',!1),j=/^[^\\"]/,T=fe(["\\",'"'],!0,!1),F=ce("\\",!1),R={type:"any"},O=function(e,t){return e+t},L=function(e){return {type:"literal",value:(t=e.join(""),t.replace(/\\(.)/g,(function(e,t){switch(t){case"b":return "\b";case"f":return "\f";case"n":return "\n";case"r":return "\r";case"t":return "\t";case"v":return "\v";default:return t}})))};var t;},M=ce("'",!1),B=/^[^\\']/,U=fe(["\\","'"],!0,!1),K=/^[0-9]/,W=fe([["0","9"]],!1,!1),V=ce("type(",!1),q=/^[^ )]/,N=fe([" ",")"],!0,!1),G=ce(")",!1),z=/^[imsu]/,H=fe(["i","m","s","u"],!1,!1),Y=ce("/",!1),$=/^[^\/]/,J=fe(["/"],!0,!1),Q=ce(":not(",!1),X=ce(":matches(",!1),Z=ce(":has(",!1),ee=ce(":first-child",!1),te=ce(":last-child",!1),re=ce(":nth-child(",!1),ne=ce(":nth-last-child(",!1),ae=ce(":",!1),oe=0,ie=[{line:1,column:1}],se=0,ue=[],le={};if("startRule"in r){if(!(r.startRule in u))throw new Error("Can't start parsing from rule \""+r.startRule+'".');l=u[r.startRule];}function ce(e,t){return {type:"literal",text:e,ignoreCase:t}}function fe(e,t,r){return {type:"class",parts:e,inverted:t,ignoreCase:r}}function pe(e){var r,n=ie[e];if(n)return n;for(r=e-1;!ie[r];)r--;for(n={line:(n=ie[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return ie[e]=n,n}function he(e,t){var r=pe(e),n=pe(t);return {start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function ye(e){oe<se||(oe>se&&(se=oe,ue=[]),ue.push(e));}function de(){var e,t,r,n,a=30*oe+0,o=le[a];return o?(oe=o.nextPos,o.result):(e=oe,(t=me())!==s&&(r=ge())!==s&&me()!==s?e=t=1===(n=r).length?n[0]:{type:"matches",selectors:n}:(oe=e,e=s),e===s&&(e=oe,(t=me())!==s&&(t=void 0),e=t),le[a]={nextPos:oe,result:e},e)}function me(){var e,r,n=30*oe+1,a=le[n];if(a)return oe=a.nextPos,a.result;for(e=[],32===t.charCodeAt(oe)?(r=" ",oe++):(r=s,ye(c));r!==s;)e.push(r),32===t.charCodeAt(oe)?(r=" ",oe++):(r=s,ye(c));return le[n]={nextPos:oe,result:e},e}function xe(){var e,r,n,a=30*oe+2,o=le[a];if(o)return oe=o.nextPos,o.result;if(r=[],f.test(t.charAt(oe))?(n=t.charAt(oe),oe++):(n=s,ye(p)),n!==s)for(;n!==s;)r.push(n),f.test(t.charAt(oe))?(n=t.charAt(oe),oe++):(n=s,ye(p));else r=s;return r!==s&&(r=r.join("")),e=r,le[a]={nextPos:oe,result:e},e}function ve(){var e,r,n,a=30*oe+3,o=le[a];return o?(oe=o.nextPos,o.result):(e=oe,(r=me())!==s?(62===t.charCodeAt(oe)?(n=">",oe++):(n=s,ye(h)),n!==s&&me()!==s?e=r="child":(oe=e,e=s)):(oe=e,e=s),e===s&&(e=oe,(r=me())!==s?(126===t.charCodeAt(oe)?(n="~",oe++):(n=s,ye(y)),n!==s&&me()!==s?e=r="sibling":(oe=e,e=s)):(oe=e,e=s),e===s&&(e=oe,(r=me())!==s?(43===t.charCodeAt(oe)?(n="+",oe++):(n=s,ye(d)),n!==s&&me()!==s?e=r="adjacent":(oe=e,e=s)):(oe=e,e=s),e===s&&(e=oe,32===t.charCodeAt(oe)?(r=" ",oe++):(r=s,ye(c)),r!==s&&(n=me())!==s?e=r="descendant":(oe=e,e=s)))),le[a]={nextPos:oe,result:e},e)}function ge(){var e,r,n,a,o,i,u,l,c=30*oe+4,f=le[c];if(f)return oe=f.nextPos,f.result;if(e=oe,(r=Ae())!==s){for(n=[],a=oe,(o=me())!==s?(44===t.charCodeAt(oe)?(i=",",oe++):(i=s,ye(m)),i!==s&&(u=me())!==s&&(l=Ae())!==s?a=o=[o,i,u,l]:(oe=a,a=s)):(oe=a,a=s);a!==s;)n.push(a),a=oe,(o=me())!==s?(44===t.charCodeAt(oe)?(i=",",oe++):(i=s,ye(m)),i!==s&&(u=me())!==s&&(l=Ae())!==s?a=o=[o,i,u,l]:(oe=a,a=s)):(oe=a,a=s);n!==s?e=r=[r].concat(n.map((function(e){return e[3]}))):(oe=e,e=s);}else oe=e,e=s;return le[c]={nextPos:oe,result:e},e}function Ae(){var e,t,r,n,a,o,i,u=30*oe+5,l=le[u];if(l)return oe=l.nextPos,l.result;if(e=oe,(t=Ee())!==s){for(r=[],n=oe,(a=ve())!==s&&(o=Ee())!==s?n=a=[a,o]:(oe=n,n=s);n!==s;)r.push(n),n=oe,(a=ve())!==s&&(o=Ee())!==s?n=a=[a,o]:(oe=n,n=s);r!==s?(i=t,e=t=r.reduce((function(e,t){return {type:t[0],left:e,right:t[1]}}),i)):(oe=e,e=s);}else oe=e,e=s;return le[u]={nextPos:oe,result:e},e}function Ee(){var e,r,n,a,o,i,u,l=30*oe+6,c=le[l];if(c)return oe=c.nextPos,c.result;if(e=oe,33===t.charCodeAt(oe)?(r="!",oe++):(r=s,ye(x)),r===s&&(r=null),r!==s){if(n=[],(a=be())!==s)for(;a!==s;)n.push(a),a=be();else n=s;n!==s?(o=r,u=1===(i=n).length?i[0]:{type:"compound",selectors:i},o&&(u.subject=!0),e=r=u):(oe=e,e=s);}else oe=e,e=s;return le[l]={nextPos:oe,result:e},e}function be(){var e,r=30*oe+7,n=le[r];return n?(oe=n.nextPos,n.result):((e=function(){var e,r,n=30*oe+8,a=le[n];return a?(oe=a.nextPos,a.result):(42===t.charCodeAt(oe)?(r="*",oe++):(r=s,ye(v)),r!==s&&(r={type:"wildcard",value:r}),e=r,le[n]={nextPos:oe,result:e},e)}())===s&&(e=function(){var e,r,n,a=30*oe+9,o=le[a];return o?(oe=o.nextPos,o.result):(e=oe,35===t.charCodeAt(oe)?(r="#",oe++):(r=s,ye(g)),r===s&&(r=null),r!==s&&(n=xe())!==s?e=r={type:"identifier",value:n}:(oe=e,e=s),le[a]={nextPos:oe,result:e},e)}())===s&&(e=function(){var e,r,n,a,o=30*oe+10,i=le[o];return i?(oe=i.nextPos,i.result):(e=oe,91===t.charCodeAt(oe)?(r="[",oe++):(r=s,ye(A)),r!==s&&me()!==s&&(n=function(){var e,r,n,a,o=30*oe+14,i=le[o];return i?(oe=i.nextPos,i.result):(e=oe,(r=Se())!==s&&me()!==s&&(n=function(){var e,r,n,a=30*oe+12,o=le[a];return o?(oe=o.nextPos,o.result):(e=oe,33===t.charCodeAt(oe)?(r="!",oe++):(r=s,ye(x)),r===s&&(r=null),r!==s?(61===t.charCodeAt(oe)?(n="=",oe++):(n=s,ye(_)),n!==s?(r=C(r),e=r):(oe=e,e=s)):(oe=e,e=s),le[a]={nextPos:oe,result:e},e)}())!==s&&me()!==s?((a=function(){var e,r,n,a,o,i=30*oe+18,u=le[i];if(u)return oe=u.nextPos,u.result;if(e=oe,"type("===t.substr(oe,5)?(r="type(",oe+=5):(r=s,ye(V)),r!==s)if(me()!==s){if(n=[],q.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(N)),a!==s)for(;a!==s;)n.push(a),q.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(N));else n=s;n!==s&&(a=me())!==s?(41===t.charCodeAt(oe)?(o=")",oe++):(o=s,ye(G)),o!==s?(r={type:"type",value:n.join("")},e=r):(oe=e,e=s)):(oe=e,e=s);}else oe=e,e=s;else oe=e,e=s;return le[i]={nextPos:oe,result:e},e}())===s&&(a=function(){var e,r,n,a,o,i,u=30*oe+20,l=le[u];if(l)return oe=l.nextPos,l.result;if(e=oe,47===t.charCodeAt(oe)?(r="/",oe++):(r=s,ye(Y)),r!==s){if(n=[],$.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(J)),a!==s)for(;a!==s;)n.push(a),$.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(J));else n=s;n!==s?(47===t.charCodeAt(oe)?(a="/",oe++):(a=s,ye(Y)),a!==s?((o=function(){var e,r,n=30*oe+19,a=le[n];if(a)return oe=a.nextPos,a.result;if(e=[],z.test(t.charAt(oe))?(r=t.charAt(oe),oe++):(r=s,ye(H)),r!==s)for(;r!==s;)e.push(r),z.test(t.charAt(oe))?(r=t.charAt(oe),oe++):(r=s,ye(H));else e=s;return le[n]={nextPos:oe,result:e},e}())===s&&(o=null),o!==s?(i=o,r={type:"regexp",value:new RegExp(n.join(""),i?i.join(""):"")},e=r):(oe=e,e=s)):(oe=e,e=s)):(oe=e,e=s);}else oe=e,e=s;return le[u]={nextPos:oe,result:e},e}()),a!==s?(r=D(r,n,a),e=r):(oe=e,e=s)):(oe=e,e=s),e===s&&(e=oe,(r=Se())!==s&&me()!==s&&(n=function(){var e,r,n,a=30*oe+11,o=le[a];return o?(oe=o.nextPos,o.result):(e=oe,b.test(t.charAt(oe))?(r=t.charAt(oe),oe++):(r=s,ye(S)),r===s&&(r=null),r!==s?(61===t.charCodeAt(oe)?(n="=",oe++):(n=s,ye(_)),n!==s?(r=C(r),e=r):(oe=e,e=s)):(oe=e,e=s),e===s&&(w.test(t.charAt(oe))?(e=t.charAt(oe),oe++):(e=s,ye(P))),le[a]={nextPos:oe,result:e},e)}())!==s&&me()!==s?((a=function(){var e,r,n,a,o,i,u=30*oe+15,l=le[u];if(l)return oe=l.nextPos,l.result;if(e=oe,34===t.charCodeAt(oe)?(r='"',oe++):(r=s,ye(I)),r!==s){for(n=[],j.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(T)),a===s&&(a=oe,92===t.charCodeAt(oe)?(o="\\",oe++):(o=s,ye(F)),o!==s?(t.length>oe?(i=t.charAt(oe),oe++):(i=s,ye(R)),i!==s?(o=O(o,i),a=o):(oe=a,a=s)):(oe=a,a=s));a!==s;)n.push(a),j.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(T)),a===s&&(a=oe,92===t.charCodeAt(oe)?(o="\\",oe++):(o=s,ye(F)),o!==s?(t.length>oe?(i=t.charAt(oe),oe++):(i=s,ye(R)),i!==s?(o=O(o,i),a=o):(oe=a,a=s)):(oe=a,a=s));n!==s?(34===t.charCodeAt(oe)?(a='"',oe++):(a=s,ye(I)),a!==s?(r=L(n),e=r):(oe=e,e=s)):(oe=e,e=s);}else oe=e,e=s;if(e===s)if(e=oe,39===t.charCodeAt(oe)?(r="'",oe++):(r=s,ye(M)),r!==s){for(n=[],B.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(U)),a===s&&(a=oe,92===t.charCodeAt(oe)?(o="\\",oe++):(o=s,ye(F)),o!==s?(t.length>oe?(i=t.charAt(oe),oe++):(i=s,ye(R)),i!==s?(o=O(o,i),a=o):(oe=a,a=s)):(oe=a,a=s));a!==s;)n.push(a),B.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(U)),a===s&&(a=oe,92===t.charCodeAt(oe)?(o="\\",oe++):(o=s,ye(F)),o!==s?(t.length>oe?(i=t.charAt(oe),oe++):(i=s,ye(R)),i!==s?(o=O(o,i),a=o):(oe=a,a=s)):(oe=a,a=s));n!==s?(39===t.charCodeAt(oe)?(a="'",oe++):(a=s,ye(M)),a!==s?(r=L(n),e=r):(oe=e,e=s)):(oe=e,e=s);}else oe=e,e=s;return le[u]={nextPos:oe,result:e},e}())===s&&(a=function(){var e,r,n,a,o,i,u,l=30*oe+16,c=le[l];if(c)return oe=c.nextPos,c.result;for(e=oe,r=oe,n=[],K.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(W));a!==s;)n.push(a),K.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(W));if(n!==s?(46===t.charCodeAt(oe)?(a=".",oe++):(a=s,ye(k)),a!==s?r=n=[n,a]:(oe=r,r=s)):(oe=r,r=s),r===s&&(r=null),r!==s){if(n=[],K.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(W)),a!==s)for(;a!==s;)n.push(a),K.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(W));else n=s;n!==s?(i=n,u=(o=r)?[].concat.apply([],o).join(""):"",r={type:"literal",value:parseFloat(u+i.join(""))},e=r):(oe=e,e=s);}else oe=e,e=s;return le[l]={nextPos:oe,result:e},e}())===s&&(a=function(){var e,t,r=30*oe+17,n=le[r];return n?(oe=n.nextPos,n.result):((t=xe())!==s&&(t={type:"literal",value:t}),e=t,le[r]={nextPos:oe,result:e},e)}()),a!==s?(r=D(r,n,a),e=r):(oe=e,e=s)):(oe=e,e=s),e===s&&(e=oe,(r=Se())!==s&&(r={type:"attribute",name:r}),e=r)),le[o]={nextPos:oe,result:e},e)}())!==s&&me()!==s?(93===t.charCodeAt(oe)?(a="]",oe++):(a=s,ye(E)),a!==s?e=r=n:(oe=e,e=s)):(oe=e,e=s),le[o]={nextPos:oe,result:e},e)}())===s&&(e=function(){var e,r,n,a,o,i,u,l,c=30*oe+21,f=le[c];if(f)return oe=f.nextPos,f.result;if(e=oe,46===t.charCodeAt(oe)?(r=".",oe++):(r=s,ye(k)),r!==s)if((n=xe())!==s){for(a=[],o=oe,46===t.charCodeAt(oe)?(i=".",oe++):(i=s,ye(k)),i!==s&&(u=xe())!==s?o=i=[i,u]:(oe=o,o=s);o!==s;)a.push(o),o=oe,46===t.charCodeAt(oe)?(i=".",oe++):(i=s,ye(k)),i!==s&&(u=xe())!==s?o=i=[i,u]:(oe=o,o=s);a!==s?(l=n,r={type:"field",name:a.reduce((function(e,t){return e+t[0]+t[1]}),l)},e=r):(oe=e,e=s);}else oe=e,e=s;else oe=e,e=s;return le[c]={nextPos:oe,result:e},e}())===s&&(e=function(){var e,r,n,a,o=30*oe+22,i=le[o];return i?(oe=i.nextPos,i.result):(e=oe,":not("===t.substr(oe,5)?(r=":not(",oe+=5):(r=s,ye(Q)),r!==s&&me()!==s&&(n=ge())!==s&&me()!==s?(41===t.charCodeAt(oe)?(a=")",oe++):(a=s,ye(G)),a!==s?e=r={type:"not",selectors:n}:(oe=e,e=s)):(oe=e,e=s),le[o]={nextPos:oe,result:e},e)}())===s&&(e=function(){var e,r,n,a,o=30*oe+23,i=le[o];return i?(oe=i.nextPos,i.result):(e=oe,":matches("===t.substr(oe,9)?(r=":matches(",oe+=9):(r=s,ye(X)),r!==s&&me()!==s&&(n=ge())!==s&&me()!==s?(41===t.charCodeAt(oe)?(a=")",oe++):(a=s,ye(G)),a!==s?e=r={type:"matches",selectors:n}:(oe=e,e=s)):(oe=e,e=s),le[o]={nextPos:oe,result:e},e)}())===s&&(e=function(){var e,r,n,a,o=30*oe+24,i=le[o];return i?(oe=i.nextPos,i.result):(e=oe,":has("===t.substr(oe,5)?(r=":has(",oe+=5):(r=s,ye(Z)),r!==s&&me()!==s&&(n=ge())!==s&&me()!==s?(41===t.charCodeAt(oe)?(a=")",oe++):(a=s,ye(G)),a!==s?e=r={type:"has",selectors:n}:(oe=e,e=s)):(oe=e,e=s),le[o]={nextPos:oe,result:e},e)}())===s&&(e=function(){var e,r,n=30*oe+25,a=le[n];return a?(oe=a.nextPos,a.result):(":first-child"===t.substr(oe,12)?(r=":first-child",oe+=12):(r=s,ye(ee)),r!==s&&(r=_e(1)),e=r,le[n]={nextPos:oe,result:e},e)}())===s&&(e=function(){var e,r,n=30*oe+26,a=le[n];return a?(oe=a.nextPos,a.result):(":last-child"===t.substr(oe,11)?(r=":last-child",oe+=11):(r=s,ye(te)),r!==s&&(r=Ce(1)),e=r,le[n]={nextPos:oe,result:e},e)}())===s&&(e=function(){var e,r,n,a,o,i=30*oe+27,u=le[i];if(u)return oe=u.nextPos,u.result;if(e=oe,":nth-child("===t.substr(oe,11)?(r=":nth-child(",oe+=11):(r=s,ye(re)),r!==s)if(me()!==s){if(n=[],K.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(W)),a!==s)for(;a!==s;)n.push(a),K.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(W));else n=s;n!==s&&(a=me())!==s?(41===t.charCodeAt(oe)?(o=")",oe++):(o=s,ye(G)),o!==s?(r=_e(parseInt(n.join(""),10)),e=r):(oe=e,e=s)):(oe=e,e=s);}else oe=e,e=s;else oe=e,e=s;return le[i]={nextPos:oe,result:e},e}())===s&&(e=function(){var e,r,n,a,o,i=30*oe+28,u=le[i];if(u)return oe=u.nextPos,u.result;if(e=oe,":nth-last-child("===t.substr(oe,16)?(r=":nth-last-child(",oe+=16):(r=s,ye(ne)),r!==s)if(me()!==s){if(n=[],K.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(W)),a!==s)for(;a!==s;)n.push(a),K.test(t.charAt(oe))?(a=t.charAt(oe),oe++):(a=s,ye(W));else n=s;n!==s&&(a=me())!==s?(41===t.charCodeAt(oe)?(o=")",oe++):(o=s,ye(G)),o!==s?(r=Ce(parseInt(n.join(""),10)),e=r):(oe=e,e=s)):(oe=e,e=s);}else oe=e,e=s;else oe=e,e=s;return le[i]={nextPos:oe,result:e},e}())===s&&(e=function(){var e,r,n,a=30*oe+29,o=le[a];return o?(oe=o.nextPos,o.result):(e=oe,58===t.charCodeAt(oe)?(r=":",oe++):(r=s,ye(ae)),r!==s&&(n=xe())!==s?e=r={type:"class",name:n}:(oe=e,e=s),le[a]={nextPos:oe,result:e},e)}()),le[r]={nextPos:oe,result:e},e)}function Se(){var e,r,n,a,o,i,u,l,c=30*oe+13,f=le[c];if(f)return oe=f.nextPos,f.result;if(e=oe,(r=xe())!==s){for(n=[],a=oe,46===t.charCodeAt(oe)?(o=".",oe++):(o=s,ye(k)),o!==s&&(i=xe())!==s?a=o=[o,i]:(oe=a,a=s);a!==s;)n.push(a),a=oe,46===t.charCodeAt(oe)?(o=".",oe++):(o=s,ye(k)),o!==s&&(i=xe())!==s?a=o=[o,i]:(oe=a,a=s);n!==s?(u=r,l=n,e=r=[].concat.apply([u],l).join("")):(oe=e,e=s);}else oe=e,e=s;return le[c]={nextPos:oe,result:e},e}function _e(e){return {type:"nth-child",index:{type:"literal",value:e}}}function Ce(e){return {type:"nth-last-child",index:{type:"literal",value:e}}}if((n=l())!==s&&oe===t.length)return n;throw n!==s&&oe<t.length&&ye({type:"end"}),a=ue,o=se<t.length?t.charAt(se):null,i=se<t.length?he(se,se+1):he(se,se),new e(e.buildMessage(a,o),a,o,i)}}}());}));function u(e,t){for(var r=0;r<t.length;++r){if(null==e)return e;e=e[t[r]];}return e}var l="function"==typeof WeakMap?new WeakMap:null;function c(e){if(null==e)return function(){return !0};if(null!=l){var t=l.get(e);return null!=t||(t=f(e),l.set(e,t)),t}return f(e)}function f(t){switch(t.type){case"wildcard":return function(){return !0};case"identifier":var r=t.value.toLowerCase();return function(e,t,n){var a=n&&n.nodeTypeKey||"type";return r===e[a].toLowerCase()};case"field":var n=t.name.split(".");return function(e,t){return function e(t,r,n,a){for(var o=r,i=a;i<n.length;++i){if(null==o)return !1;var s=o[n[i]];if(Array.isArray(s)){for(var u=0;u<s.length;++u)if(e(t,s[u],n,i+1))return !0;return !1}o=s;}return t===o}(e,t[n.length-1],n,0)};case"matches":var a=t.selectors.map(c);return function(e,t,r){for(var n=0;n<a.length;++n)if(a[n](e,t,r))return !0;return !1};case"compound":var o=t.selectors.map(c);return function(e,t,r){for(var n=0;n<o.length;++n)if(!o[n](e,t,r))return !1;return !0};case"not":var s=t.selectors.map(c);return function(e,t,r){for(var n=0;n<s.length;++n)if(s[n](e,t,r))return !1;return !0};case"has":var l=t.selectors.map(c);return function(e,t,r){var n=!1,a=[];return i.traverse(e,{enter:function(e,t){null!=t&&a.unshift(t);for(var o=0;o<l.length;++o)if(l[o](e,a,r))return n=!0,void this.break()},leave:function(){a.shift();},keys:r&&r.visitorKeys,fallback:r&&r.fallback||"iteration"}),n};case"child":var f=c(t.left),p=c(t.right);return function(e,t,r){return !!(t.length>0&&p(e,t,r))&&f(t[0],t.slice(1),r)};case"descendant":var h=c(t.left),x=c(t.right);return function(e,t,r){if(x(e,t,r))for(var n=0,a=t.length;n<a;++n)if(h(t[n],t.slice(n+1),r))return !0;return !1};case"attribute":var v=t.name.split(".");switch(t.operator){case void 0:return function(e){return null!=u(e,v)};case"=":switch(t.value.type){case"regexp":return function(e){var r=u(e,v);return "string"==typeof r&&t.value.value.test(r)};case"literal":var g="".concat(t.value.value);return function(e){return g==="".concat(u(e,v))};case"type":return function(r){return t.value.value===e(u(r,v))}}throw new Error("Unknown selector value type: ".concat(t.value.type));case"!=":switch(t.value.type){case"regexp":return function(e){return !t.value.value.test(u(e,v))};case"literal":var A="".concat(t.value.value);return function(e){return A!=="".concat(u(e,v))};case"type":return function(r){return t.value.value!==e(u(r,v))}}throw new Error("Unknown selector value type: ".concat(t.value.type));case"<=":return function(e){return u(e,v)<=t.value.value};case"<":return function(e){return u(e,v)<t.value.value};case">":return function(e){return u(e,v)>t.value.value};case">=":return function(e){return u(e,v)>=t.value.value}}throw new Error("Unknown operator: ".concat(t.operator));case"sibling":var E=c(t.left),b=c(t.right);return function(e,r,n){return b(e,r,n)&&y(e,E,r,"LEFT_SIDE",n)||t.left.subject&&E(e,r,n)&&y(e,b,r,"RIGHT_SIDE",n)};case"adjacent":var S=c(t.left),_=c(t.right);return function(e,r,n){return _(e,r,n)&&d(e,S,r,"LEFT_SIDE",n)||t.right.subject&&S(e,r,n)&&d(e,_,r,"RIGHT_SIDE",n)};case"nth-child":var C=t.index.value,w=c(t.right);return function(e,t,r){return w(e,t,r)&&m(e,t,C,r)};case"nth-last-child":var P=-t.index.value,k=c(t.right);return function(e,t,r){return k(e,t,r)&&m(e,t,P,r)};case"class":return function(e,r,n){if(n&&n.matchClass)return n.matchClass(t.name,e,r);if(n&&n.nodeTypeKey)return !1;switch(t.name.toLowerCase()){case"statement":if("Statement"===e.type.slice(-9))return !0;case"declaration":return "Declaration"===e.type.slice(-11);case"pattern":if("Pattern"===e.type.slice(-7))return !0;case"expression":return "Expression"===e.type.slice(-10)||"Literal"===e.type.slice(-7)||"Identifier"===e.type&&(0===r.length||"MetaProperty"!==r[0].type)||"MetaProperty"===e.type;case"function":return "FunctionDeclaration"===e.type||"FunctionExpression"===e.type||"ArrowFunctionExpression"===e.type}throw new Error("Unknown class name: ".concat(t.name))}}throw new Error("Unknown selector type: ".concat(t.type))}function p(e,t){var r=t&&t.nodeTypeKey||"type",n=e[r];return t&&t.visitorKeys&&t.visitorKeys[n]?t.visitorKeys[n]:i.VisitorKeys[n]?i.VisitorKeys[n]:t&&"function"==typeof t.fallback?t.fallback(e):Object.keys(e).filter((function(e){return e!==r}))}function h(t,r){var n=r&&r.nodeTypeKey||"type";return null!==t&&"object"===e(t)&&"string"==typeof t[n]}function y(e,r,n,a,o){var i=t(n,1)[0];if(!i)return !1;for(var s=p(i,o),u=0;u<s.length;++u){var l=i[s[u]];if(Array.isArray(l)){var c=l.indexOf(e);if(c<0)continue;var f=void 0,y=void 0;"LEFT_SIDE"===a?(f=0,y=c):(f=c+1,y=l.length);for(var d=f;d<y;++d)if(h(l[d],o)&&r(l[d],n,o))return !0}}return !1}function d(e,r,n,a,o){var i=t(n,1)[0];if(!i)return !1;for(var s=p(i,o),u=0;u<s.length;++u){var l=i[s[u]];if(Array.isArray(l)){var c=l.indexOf(e);if(c<0)continue;if("LEFT_SIDE"===a&&c>0&&h(l[c-1],o)&&r(l[c-1],n,o))return !0;if("RIGHT_SIDE"===a&&c<l.length-1&&h(l[c+1],o)&&r(l[c+1],n,o))return !0}}return !1}function m(e,r,n,a){if(0===n)return !1;var o=t(r,1)[0];if(!o)return !1;for(var i=p(o,a),s=0;s<i.length;++s){var u=o[i[s]];if(Array.isArray(u)){var l=n<0?u.length+n:n-1;if(l>=0&&l<u.length&&u[l]===e)return !0}}return !1}function x(t,n,a,o){if(n){var s=[],u=c(n),l=function t(n,a){if(null==n||"object"!=e(n))return [];null==a&&(a=n);for(var o=n.subject?[a]:[],i=Object.keys(n),s=0;s<i.length;++s){var u=i[s],l=n[u];o.push.apply(o,r(t(l,"left"===u?l:a)));}return o}(n).map(c);i.traverse(t,{enter:function(e,t){if(null!=t&&s.unshift(t),u(e,s,o))if(l.length)for(var r=0,n=l.length;r<n;++r){l[r](e,s,o)&&a(e,t,s);for(var i=0,c=s.length;i<c;++i){var f=s.slice(i+1);l[r](s[i],f,o)&&a(s[i],t,f);}}else a(e,t,s);},leave:function(){s.shift();},keys:o&&o.visitorKeys,fallback:o&&o.fallback||"iteration"});}}function v(e,t,r){var n=[];return x(e,t,(function(e){n.push(e);}),r),n}function g(e){return s.parse(e)}function A(e,t,r){return v(e,g(t),r)}A.parse=g,A.match=v,A.traverse=x,A.matches=function(e,t,r,n){return !t||!!e&&(r||(r=[]),c(t)(e,r,n))},A.query=A;

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
      /^\{/u, ''
    );

    const lastItem = /** @type {JsdocTypeLine} */ (
      /** @type {JsdocTypeLine[]} */ (
        container
      ).at(-1)
    );
    lastItem.rawType = lastItem.rawType.replace(/\}$/u, '');

    return;
  }
  /** @type {JsdocTag} */ (container).rawType =
    /** @type {JsdocTag} */ (container).rawType.replace(
      /^\{/u, ''
    ).replace(/\}$/u, '');
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

/**
 * Converts comment parser AST to ESTree format.
 * @param {import('./index.js').JsdocBlockWithInline} jsdoc
 * @param {import('jsdoc-type-pratt-parser').ParseMode} mode
 * @param {object} opts
 * @param {boolean} [opts.throwOnTypeParsingErrors]
 * @returns {JsdocBlock}
 */
const commentParserToESTree = (jsdoc, mode, {
  throwOnTypeParsingErrors = false
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

    // With even a multiline type now in full, add parsing
    let parsedType = null;

    try {
      parsedType = jsdocTypePrattParser.parse(lastTag.rawType, mode);
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
    description: '',

    descriptionLines: [],
    inlineTags: blockInlineTags.map((t) => inlineTagToAST(t)),

    initial: startRoot,
    tags: [],
    // `terminal` will be overwritten if there are other entries
    terminal: endRoot,
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
        if (description) {
          if (lastTag) {
            ast.hasPreterminalTagDescription = 1;
          } else {
            ast.hasPreterminalDescription = 1;
          }

          const holder = lastTag || ast;
          holder.description += (holder.description ? '\n' : '') + description;
          holder.descriptionLines.push({
            delimiter,
            description,
            postDelimiter,
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
      tagObj.tag = tagObj.tag.replace(/^@/u, '');

      lastTag = tagObj;

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

    if (description) {
      const holder = lastTag || ast;
      holder.descriptionLines.push(
        holder.descriptionLines.length
          ? {
            delimiter,
            description,
            postDelimiter,
            initial,
            type: 'JsdocDescriptionLine'
          }
          : lastTag
            ? {
              delimiter: '',
              description,
              postDelimiter: '',
              initial: '',
              type: 'JsdocDescriptionLine'
            }
            : {
              delimiter,
              description,
              postDelimiter,
              initial,
              type: 'JsdocDescriptionLine'
            }
      );

      if (!tag) {
        holder.description += (!holder.description && !lastTag)
          ? description
          : '\n' + description;
      }
    }

    // Clean-up where last line itself has tag content
    if (end && tag) {
      ast.terminal = end;
      ast.hasPreterminalTagDescription = 1;

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
 * @typedef {import('./index.js').InlineTag} InlineTag
 */

/**
 * Extracts inline tags from a description.
 * @param {string} description
 * @returns {InlineTag[]} Array of inline tags from the description.
 */
function parseDescription (description) {
  /** @type {InlineTag[]} */
  const result = [];

  // This could have been expressed in a single pattern,
  // but having two avoids a potentially exponential time regex.

  const prefixedTextPattern = new RegExp(/(?:\[(?<text>[^\]]+)\])\{@(?<tag>[^}\s]+)\s?(?<namepathOrURL>[^}\s|]*)\}/gu, 'gud');
  // The pattern used to match for text after tag uses a negative lookbehind
  // on the ']' char to avoid matching the prefixed case too.
  const suffixedAfterPattern = new RegExp(/(?<!\])\{@(?<tag>[^}\s]+)\s?(?<namepathOrURL>[^}\s|]*)\s*(?<separator>[\s|])?\s*(?<text>[^}]*)\}/gu, 'gud');

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
 * Splits the `{@prefix}` from remaining `Spec.lines[].token.description`
 * into the `inlineTags` tokens, and populates `spec.inlineTags`
 * @param {import('comment-parser').Block} block
 * @returns {import('./index.js').JsdocBlockWithInline}
 */
function parseInlineTags (block) {
  const inlineTags =
    /**
     * @type {(import('./commentParserToESTree.js').JsdocInlineTagNoType & {
     *   line?: import('./commentParserToESTree.js').Integer
     * })[]}
     */ (
      parseDescription(block.description)
    );

  /** @type {import('./index.js').JsdocBlockWithInline} */ (
    block
  ).inlineTags = inlineTags;

  for (const tag of block.tags) {
    /**
     * @type {import('./index.js').JsdocTagWithInline}
     */ (tag).inlineTags = parseDescription(tag.description);
  }
  return (
    /**
     * @type {import('./index.js').JsdocBlockWithInline}
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
  return spec.tag === 'see' && (/\{@link.+?\}/u).test(spec.source[0].source);
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

const optionalBrackets = /^\[(?<name>[^=]*)=[^\]]*\]/u;
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

        const pos = remainder.search(/(?<![\s,])\s/u);

        let name = pos === -1 ? remainder : remainder.slice(0, pos);
        const extra = remainder.slice(pos);
        let postName = '', description = '', lineEnd = '';
        if (pos > -1) {
          [, postName, description, lineEnd] = /** @type {RegExpMatchArray} */ (
            extra.match(/(\s*)([^\r]*)(\r)?/u)
          );
        }

        if (optionalBrackets.test(name)) {
          name = /** @type {string} */ (
            /** @type {RegExpMatchArray} */ (
              name.match(optionalBrackets)
            )?.groups?.name
          );
          spec.optional = true;
        } else {
          spec.optional = false;
        }

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
 * Accepts a comment token and converts it into `comment-parser` AST.
 * @param {{value: string}} commentNode
 * @param {string} [indent] Whitespace
 * @returns {import('./index.js').JsdocBlockWithInline}
 */
const parseComment = (commentNode, indent = '') => {
  // Preserve JSDoc block start/end indentation.
  const [block] = commentParser.parse(`${indent}/*${commentNode.value}*/`, {
    // @see https://github.com/yavorskiy/comment-parser/issues/21
    tokenizers: getTokenizers()
  });
  return parseInlineTags(block);
};

/* eslint-disable jsdoc/imports-as-dependencies -- https://github.com/gajus/eslint-plugin-jsdoc/issues/1114 */
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
 * @param {(import('estree').Comment|import('eslint').Rule.Node) & {
 *   declaration?: any,
 *   decorators?: any[],
 *   parent?: import('eslint').Rule.Node & {
 *     decorators?: any[]
 *   }
 * }} node
 * @returns {import('@typescript-eslint/types').TSESTree.Decorator|undefined}
 */
const getDecorator = (node) => {
  return node?.declaration?.decorators?.[0] || node?.decorators?.[0] ||
      node?.parent?.decorators?.[0];
};

/**
 * Check to see if it is a ES6 export declaration.
 *
 * @param {import('eslint').Rule.Node} astNode An AST node.
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
 * @param {import('eslint').Rule.Node} astNode
 * @returns {import('eslint').Rule.Node}
 */
const getTSFunctionComment = function (astNode) {
  const {parent} = astNode;
  /* c8 ignore next 3 */
  if (!parent) {
    return astNode;
  }
  const grandparent = parent.parent;
  /* c8 ignore next 3 */
  if (!grandparent) {
    return astNode;
  }
  const greatGrandparent = grandparent.parent;
  const greatGreatGrandparent = greatGrandparent && greatGrandparent.parent;

  // istanbul ignore if
  if (/** @type {ESLintOrTSNode} */ (parent).type !== 'TSTypeAnnotation') {
    return astNode;
  }

  switch (/** @type {ESLintOrTSNode} */ (grandparent).type) {
  // @ts-expect-error
  case 'PropertyDefinition': case 'ClassProperty':
  case 'TSDeclareFunction':
  case 'TSMethodSignature':
  case 'TSPropertySignature':
    return grandparent;
  case 'ArrowFunctionExpression':
    /* c8 ignore next 3 */
    if (!greatGrandparent) {
      return astNode;
    }
    // istanbul ignore else
    if (
      greatGrandparent.type === 'VariableDeclarator'

    // && greatGreatGrandparent.parent.type === 'VariableDeclaration'
    ) {
      /* c8 ignore next 3 */
      if (!greatGreatGrandparent || !greatGreatGrandparent.parent) {
        return astNode;
      }
      return greatGreatGrandparent.parent;
    }

    // istanbul ignore next
    return astNode;
  case 'FunctionExpression':
    /* c8 ignore next 3 */
    if (!greatGreatGrandparent) {
      return astNode;
    }
    // istanbul ignore else
    if (greatGrandparent.type === 'MethodDefinition') {
      return greatGrandparent;
    }

  // Fallthrough
  default:
    // istanbul ignore if
    if (grandparent.type !== 'Identifier') {
      // istanbul ignore next
      return astNode;
    }
  }

  /* c8 ignore next 3 */
  if (!greatGreatGrandparent) {
    return astNode;
  }

  // istanbul ignore next
  switch (greatGrandparent.type) {
  case 'ArrowFunctionExpression':
    // istanbul ignore else
    if (
      greatGreatGrandparent.type === 'VariableDeclarator' &&
      greatGreatGrandparent.parent.type === 'VariableDeclaration'
    ) {
      return greatGreatGrandparent.parent;
    }

    // istanbul ignore next
    return astNode;
  case 'FunctionDeclaration':
    return greatGrandparent;
  case 'VariableDeclarator':
    // istanbul ignore else
    if (greatGreatGrandparent.type === 'VariableDeclaration') {
      return greatGreatGrandparent;
    }

    // Fallthrough
  default:
    // istanbul ignore next
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
 * @param {import('eslint').Rule.Node} node An AST node.
 * @param {import('eslint').SourceCode} sourceCode The ESLint SourceCode.
 * @returns {import('eslint').Rule.Node} The AST node that
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
    /* c8 ignore next 3 */
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
    /* c8 ignore next 3 */
    if (!parent) {
      return node;
    }
    if (
      !invokedExpression.has(parent.type)
    ) {
      /**
       * @type {import('eslint').Rule.Node|Token|null}
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

      if (sourceCode.getCommentsBefore(node).length) {
        return node;
      }

      while (
        !sourceCode.getCommentsBefore(parent).length &&
        !(/Function/u).test(parent.type) &&
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
 * @param {import('eslint').Rule.Node} astNode The AST node to get
 *   the comment for.
 * @param {import('eslint').SourceCode} sourceCode
 * @param {{maxLines: int, minLines: int, [name: string]: any}} settings
 * @returns {Token|null} The Block comment token containing the JSDoc comment
 *    for the given node or null if not found.
 * @private
 */
const findJSDocComment = (astNode, sourceCode, settings) => {
  const {minLines, maxLines} = settings;

  /** @type {import('eslint').Rule.Node|import('estree').Comment} */
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
      currentNode, {includeComments: true}
    );
    if (
      tokenBefore && tokenBefore.type === 'Punctuator' &&
      tokenBefore.value === '('
    ) {
      parenthesisToken = tokenBefore;
      [tokenBefore] = sourceCode.getTokensBefore(currentNode, {
        count: 2,
        includeComments: true
      });
    }
    if (!tokenBefore || !isCommentToken(tokenBefore)) {
      return null;
    }
    if (tokenBefore.type === 'Line') {
      currentNode = tokenBefore;
      continue;
    }
    break;
  }

  /* c8 ignore next 3 */
  if (!tokenBefore || !currentNode.loc || !tokenBefore.loc) {
    return null;
  }

  if (
    tokenBefore.type === 'Block' &&
    (/^\*\s/u).test(tokenBefore.value) &&
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
 * @returns {Token|null} The Block comment
 *   token containing the JSDoc comment for the given node or
 *   null if not found.
 * @public
 */
const getJSDocComment = function (sourceCode, node, settings) {
  const reducedNode = getReducedASTNode(node, sourceCode);

  return findJSDocComment(reducedNode, sourceCode, settings);
};

({...jsdocVisitorKeys, ...jsdocTypePrattParser.visitorKeys});

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
 * @param {import('eslint').Rule.Node & {
 *   parent: import('eslint').Rule.Node
 *   jsdoc?: import('@es-joy/jsdoccomment').JsdocBlock|null
 * }} node
 * @param {import('eslint').Rule.Node} parent
 * @returns {void}
 */

/**
 * @typedef {any} AnyObject
 */

/**
 * @param {AnyObject} obj
 */
const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * @param {(
 *   code: string,
 *   options: any
 * ) => import('eslint').Linter.ESLintParseResult} parser
 * @param {{
 *   mode?: "jsdoc"|"closure"|"typescript"
 * }} bakedInOptions
 */
const getJsdocEslintParser = (parser, bakedInOptions = {}) => {
  /**
   * @param {string} code
   * @param {{
   *   mode?: "jsdoc"|"closure"|"typescript",
   *   maxLines?: number,
   *   minLines?: number,
   *   indent?: string,
   *   throwOnTypeParsingErrors?: boolean
   *   sourceType?: "script"|"module",
   *   babelOptions?: any
   * }} options
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
      // @ts-expect-error Bug in esquery types
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
             */ (getJSDocComment(sourceCode, node, {
              minLines,
              maxLines
            }));

          let ancestor = parent;
          do {
            if (ancestor.type === 'Program') {
              break;
            }
            const ancestorCommentToken = getJSDocComment(sourceCode, ancestor, {
              minLines,
              maxLines
            });

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

const parseForESLint = getJsdocEslintParser(
  // @ts-expect-error Problem matching
  parser.parseForESLint,
  {
    mode: 'typescript',
    tokens: true,
    comment: true,
    loc: true,
    range: true,
    sourceType: 'module'
  }
);

exports.parseForESLint = parseForESLint;
