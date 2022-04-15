'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var eslintParser = require('@babel/eslint-parser');
var eslint = require('eslint');
var jsdocTypePrattParser = require('jsdoc-type-pratt-parser');
var commentParser = require('comment-parser');

function e(t){return (e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e;}finally{try{n||null==s.return||s.return();}finally{if(a)throw o}}return r}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return "Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return {s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return {s:function(){r=e[Symbol.iterator]();},n:function(){var e=r.next();return s=e.done,e},e:function(e){l=!0,i=e;},f:function(){try{s||null==r.return||r.return();}finally{if(l)throw i}}}}function i(e,t){return e(t={exports:{}},t.exports),t.exports}var s=i((function(e,t){!function e(t){var r,n,a,o,i,s;function l(e){var t,r,n={};for(t in e)e.hasOwnProperty(t)&&(r=e[t],n[t]="object"==typeof r&&null!==r?l(r):r);return n}function u(e,t){this.parent=e,this.key=t;}function c(e,t,r,n){this.node=e,this.path=t,this.wrap=r,this.ref=n;}function f(){}function p(e){return null!=e&&("object"==typeof e&&"string"==typeof e.type)}function h(e,t){return (e===r.ObjectExpression||e===r.ObjectPattern)&&"properties"===t}function y(e,t){for(var r=e.length-1;r>=0;--r)if(e[r].node===t)return !0;return !1}function d(e,t){return (new f).traverse(e,t)}function m(e,t){var r;return r=function(e,t){var r,n,a,o;for(n=e.length,a=0;n;)t(e[o=a+(r=n>>>1)])?n=r:(a=o+1,n-=r+1);return a}(t,(function(t){return t.range[0]>e.range[0]})),e.extendedRange=[e.range[0],e.range[1]],r!==t.length&&(e.extendedRange[1]=t[r].range[0]),(r-=1)>=0&&(e.extendedRange[0]=t[r].range[1]),e}return r={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ChainExpression:"ChainExpression",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",ForOfStatement:"ForOfStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",GeneratorExpression:"GeneratorExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportExpression:"ImportExpression",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",ModuleSpecifier:"ModuleSpecifier",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},a={AssignmentExpression:["left","right"],AssignmentPattern:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],ArrowFunctionExpression:["params","body"],AwaitExpression:["argument"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ChainExpression:["expression"],ClassBody:["body"],ClassDeclaration:["id","superClass","body"],ClassExpression:["id","superClass","body"],ComprehensionBlock:["left","right"],ComprehensionExpression:["blocks","filter","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExportAllDeclaration:["source"],ExportDefaultDeclaration:["declaration"],ExportNamedDeclaration:["declaration","specifiers","source"],ExportSpecifier:["exported","local"],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],ForOfStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],GeneratorExpression:["blocks","filter","body"],Identifier:[],IfStatement:["test","consequent","alternate"],ImportExpression:["source"],ImportDeclaration:["specifiers","source"],ImportDefaultSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportSpecifier:["imported","local"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],MetaProperty:["meta","property"],MethodDefinition:["key","value"],ModuleSpecifier:[],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],Program:["body"],Property:["key","value"],RestElement:["argument"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SpreadElement:["argument"],Super:[],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],TaggedTemplateExpression:["tag","quasi"],TemplateElement:[],TemplateLiteral:["quasis","expressions"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handler","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]},n={Break:o={},Skip:i={},Remove:s={}},u.prototype.replace=function(e){this.parent[this.key]=e;},u.prototype.remove=function(){return Array.isArray(this.parent)?(this.parent.splice(this.key,1),!0):(this.replace(null),!1)},f.prototype.path=function(){var e,t,r,n,a;function o(e,t){if(Array.isArray(t))for(r=0,n=t.length;r<n;++r)e.push(t[r]);else e.push(t);}if(!this.__current.path)return null;for(a=[],e=2,t=this.__leavelist.length;e<t;++e)o(a,this.__leavelist[e].path);return o(a,this.__current.path),a},f.prototype.type=function(){return this.current().type||this.__current.wrap},f.prototype.parents=function(){var e,t,r;for(r=[],e=1,t=this.__leavelist.length;e<t;++e)r.push(this.__leavelist[e].node);return r},f.prototype.current=function(){return this.__current.node},f.prototype.__execute=function(e,t){var r,n;return n=void 0,r=this.__current,this.__current=t,this.__state=null,e&&(n=e.call(this,t.node,this.__leavelist[this.__leavelist.length-1].node)),this.__current=r,n},f.prototype.notify=function(e){this.__state=e;},f.prototype.skip=function(){this.notify(i);},f.prototype.break=function(){this.notify(o);},f.prototype.remove=function(){this.notify(s);},f.prototype.__initialize=function(e,t){this.visitor=t,this.root=e,this.__worklist=[],this.__leavelist=[],this.__current=null,this.__state=null,this.__fallback=null,"iteration"===t.fallback?this.__fallback=Object.keys:"function"==typeof t.fallback&&(this.__fallback=t.fallback),this.__keys=a,t.keys&&(this.__keys=Object.assign(Object.create(this.__keys),t.keys));},f.prototype.traverse=function(e,t){var r,n,a,s,l,u,f,d,m,x,v,g;for(this.__initialize(e,t),g={},r=this.__worklist,n=this.__leavelist,r.push(new c(e,null,null,null)),n.push(new c(null,null,null,null));r.length;)if((a=r.pop())!==g){if(a.node){if(u=this.__execute(t.enter,a),this.__state===o||u===o)return;if(r.push(g),n.push(a),this.__state===i||u===i)continue;if(l=(s=a.node).type||a.wrap,!(x=this.__keys[l])){if(!this.__fallback)throw new Error("Unknown node type "+l+".");x=this.__fallback(s);}for(d=x.length;(d-=1)>=0;)if(v=s[f=x[d]])if(Array.isArray(v)){for(m=v.length;(m-=1)>=0;)if(v[m]&&!y(n,v[m])){if(h(l,x[d]))a=new c(v[m],[f,m],"Property",null);else {if(!p(v[m]))continue;a=new c(v[m],[f,m],null,null);}r.push(a);}}else if(p(v)){if(y(n,v))continue;r.push(new c(v,f,null,null));}}}else if(a=n.pop(),u=this.__execute(t.leave,a),this.__state===o||u===o)return},f.prototype.replace=function(e,t){var r,n,a,l,f,y,d,m,x,v,g,b,A;function E(e){var t,n,a,o;if(e.ref.remove())for(n=e.ref.key,o=e.ref.parent,t=r.length;t--;)if((a=r[t]).ref&&a.ref.parent===o){if(a.ref.key<n)break;--a.ref.key;}}for(this.__initialize(e,t),g={},r=this.__worklist,n=this.__leavelist,y=new c(e,null,null,new u(b={root:e},"root")),r.push(y),n.push(y);r.length;)if((y=r.pop())!==g){if(void 0!==(f=this.__execute(t.enter,y))&&f!==o&&f!==i&&f!==s&&(y.ref.replace(f),y.node=f),this.__state!==s&&f!==s||(E(y),y.node=null),this.__state===o||f===o)return b.root;if((a=y.node)&&(r.push(g),n.push(y),this.__state!==i&&f!==i)){if(l=a.type||y.wrap,!(x=this.__keys[l])){if(!this.__fallback)throw new Error("Unknown node type "+l+".");x=this.__fallback(a);}for(d=x.length;(d-=1)>=0;)if(v=a[A=x[d]])if(Array.isArray(v)){for(m=v.length;(m-=1)>=0;)if(v[m]){if(h(l,x[d]))y=new c(v[m],[A,m],"Property",new u(v,m));else {if(!p(v[m]))continue;y=new c(v[m],[A,m],null,new u(v,m));}r.push(y);}}else p(v)&&r.push(new c(v,A,null,new u(a,A)));}}else if(y=n.pop(),void 0!==(f=this.__execute(t.leave,y))&&f!==o&&f!==i&&f!==s&&y.ref.replace(f),this.__state!==s&&f!==s||E(y),this.__state===o||f===o)return b.root;return b.root},t.Syntax=r,t.traverse=d,t.replace=function(e,t){return (new f).replace(e,t)},t.attachComments=function(e,t,r){var a,o,i,s,u=[];if(!e.range)throw new Error("attachComments needs range information");if(!r.length){if(t.length){for(i=0,o=t.length;i<o;i+=1)(a=l(t[i])).extendedRange=[0,e.range[0]],u.push(a);e.leadingComments=u;}return e}for(i=0,o=t.length;i<o;i+=1)u.push(m(l(t[i]),r));return s=0,d(e,{enter:function(e){for(var t;s<u.length&&!((t=u[s]).extendedRange[1]>e.range[0]);)t.extendedRange[1]===e.range[0]?(e.leadingComments||(e.leadingComments=[]),e.leadingComments.push(t),u.splice(s,1)):s+=1;return s===u.length?n.Break:u[s].extendedRange[0]>e.range[1]?n.Skip:void 0}}),s=0,d(e,{leave:function(e){for(var t;s<u.length&&(t=u[s],!(e.range[1]<t.extendedRange[0]));)e.range[1]===t.extendedRange[0]?(e.trailingComments||(e.trailingComments=[]),e.trailingComments.push(t),u.splice(s,1)):s+=1;return s===u.length?n.Break:u[s].extendedRange[0]>e.range[1]?n.Skip:void 0}}),e},t.VisitorKeys=a,t.VisitorOption=n,t.Controller=f,t.cloneEnvironment=function(){return e({})},t}(t);})),l=i((function(e){e.exports&&(e.exports=function(){function e(t,r,n,a){this.message=t,this.expected=r,this.found=n,this.location=a,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e);}return function(e,t){function r(){this.constructor=e;}r.prototype=t.prototype,e.prototype=new r;}(e,Error),e.buildMessage=function(e,t){var r={literal:function(e){return '"'+a(e.text)+'"'},class:function(e){var t,r="";for(t=0;t<e.parts.length;t++)r+=e.parts[t]instanceof Array?o(e.parts[t][0])+"-"+o(e.parts[t][1]):o(e.parts[t]);return "["+(e.inverted?"^":"")+r+"]"},any:function(e){return "any character"},end:function(e){return "end of input"},other:function(e){return e.description}};function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function a(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return "\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return "\\x"+n(e)}))}function o(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return "\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return "\\x"+n(e)}))}return "Expected "+function(e){var t,n,a,o=new Array(e.length);for(t=0;t<e.length;t++)o[t]=(a=e[t],r[a.type](a));if(o.sort(),o.length>0){for(t=1,n=1;t<o.length;t++)o[t-1]!==o[t]&&(o[n]=o[t],n++);o.length=n;}switch(o.length){case 1:return o[0];case 2:return o[0]+" or "+o[1];default:return o.slice(0,-1).join(", ")+", or "+o[o.length-1]}}(e)+" but "+function(e){return e?'"'+a(e)+'"':"end of input"}(t)+" found."},{SyntaxError:e,parse:function(t,r){r=void 0!==r?r:{};var n,a,o,i,s={},l={start:be},u=be,c=de(" ",!1),f=/^[^ [\],():#!=><~+.]/,p=me([" ","[","]",",","(",")",":","#","!","=",">","<","~","+","."],!0,!1),h=de(">",!1),y=de("~",!1),d=de("+",!1),m=de(",",!1),x=de("!",!1),v=de("*",!1),g=de("#",!1),b=de("[",!1),A=de("]",!1),E=/^[><!]/,S=me([">","<","!"],!1,!1),_=de("=",!1),w=function(e){return (e||"")+"="},C=/^[><]/,P=me([">","<"],!1,!1),k=de(".",!1),D=function(e,t,r){return {type:"attribute",name:e,operator:t,value:r}},j=de('"',!1),I=/^[^\\"]/,T=me(["\\",'"'],!0,!1),F=de("\\",!1),L={type:"any"},O=function(e,t){return e+t},R=function(e){return {type:"literal",value:(t=e.join(""),t.replace(/\\(.)/g,(function(e,t){switch(t){case"b":return "\b";case"f":return "\f";case"n":return "\n";case"r":return "\r";case"t":return "\t";case"v":return "\v";default:return t}})))};var t;},B=de("'",!1),M=/^[^\\']/,U=me(["\\","'"],!0,!1),V=/^[0-9]/,q=me([["0","9"]],!1,!1),N=de("type(",!1),W=/^[^ )]/,K=me([" ",")"],!0,!1),G=de(")",!1),z=/^[imsu]/,H=me(["i","m","s","u"],!1,!1),Y=de("/",!1),$=/^[^\/]/,J=me(["/"],!0,!1),Q=de(":not(",!1),X=de(":matches(",!1),Z=de(":has(",!1),ee=de(":first-child",!1),te=de(":last-child",!1),re=de(":nth-child(",!1),ne=de(":nth-last-child(",!1),ae=de(":",!1),oe=de("statement",!0),ie=de("expression",!0),se=de("declaration",!0),le=de("function",!0),ue=de("pattern",!0),ce=0,fe=[{line:1,column:1}],pe=0,he=[],ye={};if("startRule"in r){if(!(r.startRule in l))throw new Error("Can't start parsing from rule \""+r.startRule+'".');u=l[r.startRule];}function de(e,t){return {type:"literal",text:e,ignoreCase:t}}function me(e,t,r){return {type:"class",parts:e,inverted:t,ignoreCase:r}}function xe(e){var r,n=fe[e];if(n)return n;for(r=e-1;!fe[r];)r--;for(n={line:(n=fe[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return fe[e]=n,n}function ve(e,t){var r=xe(e),n=xe(t);return {start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function ge(e){ce<pe||(ce>pe&&(pe=ce,he=[]),he.push(e));}function be(){var e,t,r,n,a=30*ce+0,o=ye[a];return o?(ce=o.nextPos,o.result):(e=ce,(t=Ae())!==s&&(r=_e())!==s&&Ae()!==s?e=t=1===(n=r).length?n[0]:{type:"matches",selectors:n}:(ce=e,e=s),e===s&&(e=ce,(t=Ae())!==s&&(t=void 0),e=t),ye[a]={nextPos:ce,result:e},e)}function Ae(){var e,r,n=30*ce+1,a=ye[n];if(a)return ce=a.nextPos,a.result;for(e=[],32===t.charCodeAt(ce)?(r=" ",ce++):(r=s,ge(c));r!==s;)e.push(r),32===t.charCodeAt(ce)?(r=" ",ce++):(r=s,ge(c));return ye[n]={nextPos:ce,result:e},e}function Ee(){var e,r,n,a=30*ce+2,o=ye[a];if(o)return ce=o.nextPos,o.result;if(r=[],f.test(t.charAt(ce))?(n=t.charAt(ce),ce++):(n=s,ge(p)),n!==s)for(;n!==s;)r.push(n),f.test(t.charAt(ce))?(n=t.charAt(ce),ce++):(n=s,ge(p));else r=s;return r!==s&&(r=r.join("")),e=r,ye[a]={nextPos:ce,result:e},e}function Se(){var e,r,n,a=30*ce+3,o=ye[a];return o?(ce=o.nextPos,o.result):(e=ce,(r=Ae())!==s?(62===t.charCodeAt(ce)?(n=">",ce++):(n=s,ge(h)),n!==s&&Ae()!==s?e=r="child":(ce=e,e=s)):(ce=e,e=s),e===s&&(e=ce,(r=Ae())!==s?(126===t.charCodeAt(ce)?(n="~",ce++):(n=s,ge(y)),n!==s&&Ae()!==s?e=r="sibling":(ce=e,e=s)):(ce=e,e=s),e===s&&(e=ce,(r=Ae())!==s?(43===t.charCodeAt(ce)?(n="+",ce++):(n=s,ge(d)),n!==s&&Ae()!==s?e=r="adjacent":(ce=e,e=s)):(ce=e,e=s),e===s&&(e=ce,32===t.charCodeAt(ce)?(r=" ",ce++):(r=s,ge(c)),r!==s&&(n=Ae())!==s?e=r="descendant":(ce=e,e=s)))),ye[a]={nextPos:ce,result:e},e)}function _e(){var e,r,n,a,o,i,l,u,c=30*ce+4,f=ye[c];if(f)return ce=f.nextPos,f.result;if(e=ce,(r=we())!==s){for(n=[],a=ce,(o=Ae())!==s?(44===t.charCodeAt(ce)?(i=",",ce++):(i=s,ge(m)),i!==s&&(l=Ae())!==s&&(u=we())!==s?a=o=[o,i,l,u]:(ce=a,a=s)):(ce=a,a=s);a!==s;)n.push(a),a=ce,(o=Ae())!==s?(44===t.charCodeAt(ce)?(i=",",ce++):(i=s,ge(m)),i!==s&&(l=Ae())!==s&&(u=we())!==s?a=o=[o,i,l,u]:(ce=a,a=s)):(ce=a,a=s);n!==s?e=r=[r].concat(n.map((function(e){return e[3]}))):(ce=e,e=s);}else ce=e,e=s;return ye[c]={nextPos:ce,result:e},e}function we(){var e,t,r,n,a,o,i,l=30*ce+5,u=ye[l];if(u)return ce=u.nextPos,u.result;if(e=ce,(t=Ce())!==s){for(r=[],n=ce,(a=Se())!==s&&(o=Ce())!==s?n=a=[a,o]:(ce=n,n=s);n!==s;)r.push(n),n=ce,(a=Se())!==s&&(o=Ce())!==s?n=a=[a,o]:(ce=n,n=s);r!==s?(i=t,e=t=r.reduce((function(e,t){return {type:t[0],left:e,right:t[1]}}),i)):(ce=e,e=s);}else ce=e,e=s;return ye[l]={nextPos:ce,result:e},e}function Ce(){var e,r,n,a,o,i,l,u=30*ce+6,c=ye[u];if(c)return ce=c.nextPos,c.result;if(e=ce,33===t.charCodeAt(ce)?(r="!",ce++):(r=s,ge(x)),r===s&&(r=null),r!==s){if(n=[],(a=Pe())!==s)for(;a!==s;)n.push(a),a=Pe();else n=s;n!==s?(o=r,l=1===(i=n).length?i[0]:{type:"compound",selectors:i},o&&(l.subject=!0),e=r=l):(ce=e,e=s);}else ce=e,e=s;return ye[u]={nextPos:ce,result:e},e}function Pe(){var e,r=30*ce+7,n=ye[r];return n?(ce=n.nextPos,n.result):((e=function(){var e,r,n=30*ce+8,a=ye[n];return a?(ce=a.nextPos,a.result):(42===t.charCodeAt(ce)?(r="*",ce++):(r=s,ge(v)),r!==s&&(r={type:"wildcard",value:r}),e=r,ye[n]={nextPos:ce,result:e},e)}())===s&&(e=function(){var e,r,n,a=30*ce+9,o=ye[a];return o?(ce=o.nextPos,o.result):(e=ce,35===t.charCodeAt(ce)?(r="#",ce++):(r=s,ge(g)),r===s&&(r=null),r!==s&&(n=Ee())!==s?e=r={type:"identifier",value:n}:(ce=e,e=s),ye[a]={nextPos:ce,result:e},e)}())===s&&(e=function(){var e,r,n,a,o=30*ce+10,i=ye[o];return i?(ce=i.nextPos,i.result):(e=ce,91===t.charCodeAt(ce)?(r="[",ce++):(r=s,ge(b)),r!==s&&Ae()!==s&&(n=function(){var e,r,n,a,o=30*ce+14,i=ye[o];return i?(ce=i.nextPos,i.result):(e=ce,(r=ke())!==s&&Ae()!==s&&(n=function(){var e,r,n,a=30*ce+12,o=ye[a];return o?(ce=o.nextPos,o.result):(e=ce,33===t.charCodeAt(ce)?(r="!",ce++):(r=s,ge(x)),r===s&&(r=null),r!==s?(61===t.charCodeAt(ce)?(n="=",ce++):(n=s,ge(_)),n!==s?(r=w(r),e=r):(ce=e,e=s)):(ce=e,e=s),ye[a]={nextPos:ce,result:e},e)}())!==s&&Ae()!==s?((a=function(){var e,r,n,a,o,i=30*ce+18,l=ye[i];if(l)return ce=l.nextPos,l.result;if(e=ce,"type("===t.substr(ce,5)?(r="type(",ce+=5):(r=s,ge(N)),r!==s)if(Ae()!==s){if(n=[],W.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(K)),a!==s)for(;a!==s;)n.push(a),W.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(K));else n=s;n!==s&&(a=Ae())!==s?(41===t.charCodeAt(ce)?(o=")",ce++):(o=s,ge(G)),o!==s?(r={type:"type",value:n.join("")},e=r):(ce=e,e=s)):(ce=e,e=s);}else ce=e,e=s;else ce=e,e=s;return ye[i]={nextPos:ce,result:e},e}())===s&&(a=function(){var e,r,n,a,o,i,l=30*ce+20,u=ye[l];if(u)return ce=u.nextPos,u.result;if(e=ce,47===t.charCodeAt(ce)?(r="/",ce++):(r=s,ge(Y)),r!==s){if(n=[],$.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(J)),a!==s)for(;a!==s;)n.push(a),$.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(J));else n=s;n!==s?(47===t.charCodeAt(ce)?(a="/",ce++):(a=s,ge(Y)),a!==s?((o=function(){var e,r,n=30*ce+19,a=ye[n];if(a)return ce=a.nextPos,a.result;if(e=[],z.test(t.charAt(ce))?(r=t.charAt(ce),ce++):(r=s,ge(H)),r!==s)for(;r!==s;)e.push(r),z.test(t.charAt(ce))?(r=t.charAt(ce),ce++):(r=s,ge(H));else e=s;return ye[n]={nextPos:ce,result:e},e}())===s&&(o=null),o!==s?(i=o,r={type:"regexp",value:new RegExp(n.join(""),i?i.join(""):"")},e=r):(ce=e,e=s)):(ce=e,e=s)):(ce=e,e=s);}else ce=e,e=s;return ye[l]={nextPos:ce,result:e},e}()),a!==s?(r=D(r,n,a),e=r):(ce=e,e=s)):(ce=e,e=s),e===s&&(e=ce,(r=ke())!==s&&Ae()!==s&&(n=function(){var e,r,n,a=30*ce+11,o=ye[a];return o?(ce=o.nextPos,o.result):(e=ce,E.test(t.charAt(ce))?(r=t.charAt(ce),ce++):(r=s,ge(S)),r===s&&(r=null),r!==s?(61===t.charCodeAt(ce)?(n="=",ce++):(n=s,ge(_)),n!==s?(r=w(r),e=r):(ce=e,e=s)):(ce=e,e=s),e===s&&(C.test(t.charAt(ce))?(e=t.charAt(ce),ce++):(e=s,ge(P))),ye[a]={nextPos:ce,result:e},e)}())!==s&&Ae()!==s?((a=function(){var e,r,n,a,o,i,l=30*ce+15,u=ye[l];if(u)return ce=u.nextPos,u.result;if(e=ce,34===t.charCodeAt(ce)?(r='"',ce++):(r=s,ge(j)),r!==s){for(n=[],I.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(T)),a===s&&(a=ce,92===t.charCodeAt(ce)?(o="\\",ce++):(o=s,ge(F)),o!==s?(t.length>ce?(i=t.charAt(ce),ce++):(i=s,ge(L)),i!==s?(o=O(o,i),a=o):(ce=a,a=s)):(ce=a,a=s));a!==s;)n.push(a),I.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(T)),a===s&&(a=ce,92===t.charCodeAt(ce)?(o="\\",ce++):(o=s,ge(F)),o!==s?(t.length>ce?(i=t.charAt(ce),ce++):(i=s,ge(L)),i!==s?(o=O(o,i),a=o):(ce=a,a=s)):(ce=a,a=s));n!==s?(34===t.charCodeAt(ce)?(a='"',ce++):(a=s,ge(j)),a!==s?(r=R(n),e=r):(ce=e,e=s)):(ce=e,e=s);}else ce=e,e=s;if(e===s)if(e=ce,39===t.charCodeAt(ce)?(r="'",ce++):(r=s,ge(B)),r!==s){for(n=[],M.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(U)),a===s&&(a=ce,92===t.charCodeAt(ce)?(o="\\",ce++):(o=s,ge(F)),o!==s?(t.length>ce?(i=t.charAt(ce),ce++):(i=s,ge(L)),i!==s?(o=O(o,i),a=o):(ce=a,a=s)):(ce=a,a=s));a!==s;)n.push(a),M.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(U)),a===s&&(a=ce,92===t.charCodeAt(ce)?(o="\\",ce++):(o=s,ge(F)),o!==s?(t.length>ce?(i=t.charAt(ce),ce++):(i=s,ge(L)),i!==s?(o=O(o,i),a=o):(ce=a,a=s)):(ce=a,a=s));n!==s?(39===t.charCodeAt(ce)?(a="'",ce++):(a=s,ge(B)),a!==s?(r=R(n),e=r):(ce=e,e=s)):(ce=e,e=s);}else ce=e,e=s;return ye[l]={nextPos:ce,result:e},e}())===s&&(a=function(){var e,r,n,a,o,i,l,u=30*ce+16,c=ye[u];if(c)return ce=c.nextPos,c.result;for(e=ce,r=ce,n=[],V.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(q));a!==s;)n.push(a),V.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(q));if(n!==s?(46===t.charCodeAt(ce)?(a=".",ce++):(a=s,ge(k)),a!==s?r=n=[n,a]:(ce=r,r=s)):(ce=r,r=s),r===s&&(r=null),r!==s){if(n=[],V.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(q)),a!==s)for(;a!==s;)n.push(a),V.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(q));else n=s;n!==s?(i=n,l=(o=r)?[].concat.apply([],o).join(""):"",r={type:"literal",value:parseFloat(l+i.join(""))},e=r):(ce=e,e=s);}else ce=e,e=s;return ye[u]={nextPos:ce,result:e},e}())===s&&(a=function(){var e,t,r=30*ce+17,n=ye[r];return n?(ce=n.nextPos,n.result):((t=Ee())!==s&&(t={type:"literal",value:t}),e=t,ye[r]={nextPos:ce,result:e},e)}()),a!==s?(r=D(r,n,a),e=r):(ce=e,e=s)):(ce=e,e=s),e===s&&(e=ce,(r=ke())!==s&&(r={type:"attribute",name:r}),e=r)),ye[o]={nextPos:ce,result:e},e)}())!==s&&Ae()!==s?(93===t.charCodeAt(ce)?(a="]",ce++):(a=s,ge(A)),a!==s?e=r=n:(ce=e,e=s)):(ce=e,e=s),ye[o]={nextPos:ce,result:e},e)}())===s&&(e=function(){var e,r,n,a,o,i,l,u,c=30*ce+21,f=ye[c];if(f)return ce=f.nextPos,f.result;if(e=ce,46===t.charCodeAt(ce)?(r=".",ce++):(r=s,ge(k)),r!==s)if((n=Ee())!==s){for(a=[],o=ce,46===t.charCodeAt(ce)?(i=".",ce++):(i=s,ge(k)),i!==s&&(l=Ee())!==s?o=i=[i,l]:(ce=o,o=s);o!==s;)a.push(o),o=ce,46===t.charCodeAt(ce)?(i=".",ce++):(i=s,ge(k)),i!==s&&(l=Ee())!==s?o=i=[i,l]:(ce=o,o=s);a!==s?(u=n,r={type:"field",name:a.reduce((function(e,t){return e+t[0]+t[1]}),u)},e=r):(ce=e,e=s);}else ce=e,e=s;else ce=e,e=s;return ye[c]={nextPos:ce,result:e},e}())===s&&(e=function(){var e,r,n,a,o=30*ce+22,i=ye[o];return i?(ce=i.nextPos,i.result):(e=ce,":not("===t.substr(ce,5)?(r=":not(",ce+=5):(r=s,ge(Q)),r!==s&&Ae()!==s&&(n=_e())!==s&&Ae()!==s?(41===t.charCodeAt(ce)?(a=")",ce++):(a=s,ge(G)),a!==s?e=r={type:"not",selectors:n}:(ce=e,e=s)):(ce=e,e=s),ye[o]={nextPos:ce,result:e},e)}())===s&&(e=function(){var e,r,n,a,o=30*ce+23,i=ye[o];return i?(ce=i.nextPos,i.result):(e=ce,":matches("===t.substr(ce,9)?(r=":matches(",ce+=9):(r=s,ge(X)),r!==s&&Ae()!==s&&(n=_e())!==s&&Ae()!==s?(41===t.charCodeAt(ce)?(a=")",ce++):(a=s,ge(G)),a!==s?e=r={type:"matches",selectors:n}:(ce=e,e=s)):(ce=e,e=s),ye[o]={nextPos:ce,result:e},e)}())===s&&(e=function(){var e,r,n,a,o=30*ce+24,i=ye[o];return i?(ce=i.nextPos,i.result):(e=ce,":has("===t.substr(ce,5)?(r=":has(",ce+=5):(r=s,ge(Z)),r!==s&&Ae()!==s&&(n=_e())!==s&&Ae()!==s?(41===t.charCodeAt(ce)?(a=")",ce++):(a=s,ge(G)),a!==s?e=r={type:"has",selectors:n}:(ce=e,e=s)):(ce=e,e=s),ye[o]={nextPos:ce,result:e},e)}())===s&&(e=function(){var e,r,n=30*ce+25,a=ye[n];return a?(ce=a.nextPos,a.result):(":first-child"===t.substr(ce,12)?(r=":first-child",ce+=12):(r=s,ge(ee)),r!==s&&(r=De(1)),e=r,ye[n]={nextPos:ce,result:e},e)}())===s&&(e=function(){var e,r,n=30*ce+26,a=ye[n];return a?(ce=a.nextPos,a.result):(":last-child"===t.substr(ce,11)?(r=":last-child",ce+=11):(r=s,ge(te)),r!==s&&(r=je(1)),e=r,ye[n]={nextPos:ce,result:e},e)}())===s&&(e=function(){var e,r,n,a,o,i=30*ce+27,l=ye[i];if(l)return ce=l.nextPos,l.result;if(e=ce,":nth-child("===t.substr(ce,11)?(r=":nth-child(",ce+=11):(r=s,ge(re)),r!==s)if(Ae()!==s){if(n=[],V.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(q)),a!==s)for(;a!==s;)n.push(a),V.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(q));else n=s;n!==s&&(a=Ae())!==s?(41===t.charCodeAt(ce)?(o=")",ce++):(o=s,ge(G)),o!==s?(r=De(parseInt(n.join(""),10)),e=r):(ce=e,e=s)):(ce=e,e=s);}else ce=e,e=s;else ce=e,e=s;return ye[i]={nextPos:ce,result:e},e}())===s&&(e=function(){var e,r,n,a,o,i=30*ce+28,l=ye[i];if(l)return ce=l.nextPos,l.result;if(e=ce,":nth-last-child("===t.substr(ce,16)?(r=":nth-last-child(",ce+=16):(r=s,ge(ne)),r!==s)if(Ae()!==s){if(n=[],V.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(q)),a!==s)for(;a!==s;)n.push(a),V.test(t.charAt(ce))?(a=t.charAt(ce),ce++):(a=s,ge(q));else n=s;n!==s&&(a=Ae())!==s?(41===t.charCodeAt(ce)?(o=")",ce++):(o=s,ge(G)),o!==s?(r=je(parseInt(n.join(""),10)),e=r):(ce=e,e=s)):(ce=e,e=s);}else ce=e,e=s;else ce=e,e=s;return ye[i]={nextPos:ce,result:e},e}())===s&&(e=function(){var e,r,n,a=30*ce+29,o=ye[a];return o?(ce=o.nextPos,o.result):(e=ce,58===t.charCodeAt(ce)?(r=":",ce++):(r=s,ge(ae)),r!==s?("statement"===t.substr(ce,9).toLowerCase()?(n=t.substr(ce,9),ce+=9):(n=s,ge(oe)),n===s&&("expression"===t.substr(ce,10).toLowerCase()?(n=t.substr(ce,10),ce+=10):(n=s,ge(ie)),n===s&&("declaration"===t.substr(ce,11).toLowerCase()?(n=t.substr(ce,11),ce+=11):(n=s,ge(se)),n===s&&("function"===t.substr(ce,8).toLowerCase()?(n=t.substr(ce,8),ce+=8):(n=s,ge(le)),n===s&&("pattern"===t.substr(ce,7).toLowerCase()?(n=t.substr(ce,7),ce+=7):(n=s,ge(ue)))))),n!==s?e=r={type:"class",name:n}:(ce=e,e=s)):(ce=e,e=s),ye[a]={nextPos:ce,result:e},e)}()),ye[r]={nextPos:ce,result:e},e)}function ke(){var e,r,n,a,o,i,l,u,c=30*ce+13,f=ye[c];if(f)return ce=f.nextPos,f.result;if(e=ce,(r=Ee())!==s){for(n=[],a=ce,46===t.charCodeAt(ce)?(o=".",ce++):(o=s,ge(k)),o!==s&&(i=Ee())!==s?a=o=[o,i]:(ce=a,a=s);a!==s;)n.push(a),a=ce,46===t.charCodeAt(ce)?(o=".",ce++):(o=s,ge(k)),o!==s&&(i=Ee())!==s?a=o=[o,i]:(ce=a,a=s);n!==s?(l=r,u=n,e=r=[].concat.apply([l],u).join("")):(ce=e,e=s);}else ce=e,e=s;return ye[c]={nextPos:ce,result:e},e}function De(e){return {type:"nth-child",index:{type:"literal",value:e}}}function je(e){return {type:"nth-last-child",index:{type:"literal",value:e}}}if((n=u())!==s&&ce===t.length)return n;throw n!==s&&ce<t.length&&ge({type:"end"}),a=he,o=pe<t.length?t.charAt(pe):null,i=pe<t.length?ve(pe,pe+1):ve(pe,pe),new e(e.buildMessage(a,o),a,o,i)}}}());}));function u(t,r,n,a){if(!r)return !0;if(!t)return !1;switch(n||(n=[]),r.type){case"wildcard":return !0;case"identifier":return r.value.toLowerCase()===t.type.toLowerCase();case"field":var i=r.name.split("."),l=n[i.length-1];return function e(t,r,n){if(0===n.length)return t===r;if(null==r)return !1;var a=r[n[0]],i=n.slice(1);if(Array.isArray(a)){var s,l=o(a);try{for(l.s();!(s=l.n()).done;){if(e(t,s.value,i))return !0}}catch(e){l.e(e);}finally{l.f();}return !1}return e(t,a,i)}(t,l,i);case"matches":var c,f=o(r.selectors);try{for(f.s();!(c=f.n()).done;){var d=c.value;if(u(t,d,n,a))return !0}}catch(e){f.e(e);}finally{f.f();}return !1;case"compound":var m,x=o(r.selectors);try{for(x.s();!(m=x.n()).done;){var v=m.value;if(!u(t,v,n,a))return !1}}catch(e){x.e(e);}finally{x.f();}return !0;case"not":var g,b=o(r.selectors);try{for(b.s();!(g=b.n()).done;){var A=g.value;if(u(t,A,n,a))return !1}}catch(e){b.e(e);}finally{b.f();}return !0;case"has":var E=function(){var e,n=[],i=o(r.selectors);try{var l=function(){var r=e.value,o=[];s.traverse(t,{enter:function(e,t){null!=t&&o.unshift(t),u(e,r,o,a)&&n.push(e);},leave:function(){o.shift();},keys:a&&a.visitorKeys,fallback:a&&a.fallback||"iteration"});};for(i.s();!(e=i.n()).done;)l();}catch(e){i.e(e);}finally{i.f();}return {v:0!==n.length}}();if("object"===e(E))return E.v;case"child":return !!u(t,r.right,n,a)&&u(n[0],r.left,n.slice(1),a);case"descendant":if(u(t,r.right,n,a))for(var S=0,_=n.length;S<_;++S)if(u(n[S],r.left,n.slice(S+1),a))return !0;return !1;case"attribute":var w=function(e,t){var r,n=o(t.split("."));try{for(n.s();!(r=n.n()).done;){var a=r.value;if(null==e)return e;e=e[a];}}catch(e){n.e(e);}finally{n.f();}return e}(t,r.name);switch(r.operator){case void 0:return null!=w;case"=":switch(r.value.type){case"regexp":return "string"==typeof w&&r.value.value.test(w);case"literal":return "".concat(r.value.value)==="".concat(w);case"type":return r.value.value===e(w)}throw new Error("Unknown selector value type: ".concat(r.value.type));case"!=":switch(r.value.type){case"regexp":return !r.value.value.test(w);case"literal":return "".concat(r.value.value)!=="".concat(w);case"type":return r.value.value!==e(w)}throw new Error("Unknown selector value type: ".concat(r.value.type));case"<=":return w<=r.value.value;case"<":return w<r.value.value;case">":return w>r.value.value;case">=":return w>=r.value.value}throw new Error("Unknown operator: ".concat(r.operator));case"sibling":return u(t,r.right,n,a)&&p(t,r.left,n,"LEFT_SIDE",a)||r.left.subject&&u(t,r.left,n,a)&&p(t,r.right,n,"RIGHT_SIDE",a);case"adjacent":return u(t,r.right,n,a)&&h(t,r.left,n,"LEFT_SIDE",a)||r.right.subject&&u(t,r.left,n,a)&&h(t,r.right,n,"RIGHT_SIDE",a);case"nth-child":return u(t,r.right,n,a)&&y(t,n,(function(){return r.index.value-1}),a);case"nth-last-child":return u(t,r.right,n,a)&&y(t,n,(function(e){return e-r.index.value}),a);case"class":switch(r.name.toLowerCase()){case"statement":if("Statement"===t.type.slice(-9))return !0;case"declaration":return "Declaration"===t.type.slice(-11);case"pattern":if("Pattern"===t.type.slice(-7))return !0;case"expression":return "Expression"===t.type.slice(-10)||"Literal"===t.type.slice(-7)||"Identifier"===t.type&&(0===n.length||"MetaProperty"!==n[0].type)||"MetaProperty"===t.type;case"function":return "FunctionDeclaration"===t.type||"FunctionExpression"===t.type||"ArrowFunctionExpression"===t.type}throw new Error("Unknown class name: ".concat(r.name))}throw new Error("Unknown selector type: ".concat(r.type))}function c(e,t){var r=e.type;return t&&t.visitorKeys&&t.visitorKeys[r]?t.visitorKeys[r]:s.VisitorKeys[r]?s.VisitorKeys[r]:t&&"function"==typeof t.fallback?t.fallback(e):Object.keys(e).filter((function(e){return "type"!==e}))}function f(t){return null!==t&&"object"===e(t)&&"string"==typeof t.type}function p(e,r,n,a,i){var s=t(n,1)[0];if(!s)return !1;var l,p=o(c(s,i));try{for(p.s();!(l=p.n()).done;){var h=s[l.value];if(Array.isArray(h)){var y=h.indexOf(e);if(y<0)continue;var d=void 0,m=void 0;"LEFT_SIDE"===a?(d=0,m=y):(d=y+1,m=h.length);for(var x=d;x<m;++x)if(f(h[x])&&u(h[x],r,n,i))return !0}}}catch(e){p.e(e);}finally{p.f();}return !1}function h(e,r,n,a,i){var s=t(n,1)[0];if(!s)return !1;var l,p=o(c(s,i));try{for(p.s();!(l=p.n()).done;){var h=s[l.value];if(Array.isArray(h)){var y=h.indexOf(e);if(y<0)continue;if("LEFT_SIDE"===a&&y>0&&f(h[y-1])&&u(h[y-1],r,n,i))return !0;if("RIGHT_SIDE"===a&&y<h.length-1&&f(h[y+1])&&u(h[y+1],r,n,i))return !0}}}catch(e){p.e(e);}finally{p.f();}return !1}function y(e,r,n,a){var i=t(r,1)[0];if(!i)return !1;var s,l=o(c(i,a));try{for(l.s();!(s=l.n()).done;){var u=i[s.value];if(Array.isArray(u)){var f=u.indexOf(e);if(f>=0&&f===n(u.length))return !0}}}catch(e){l.e(e);}finally{l.f();}return !1}function d(n,a){if(null==n||"object"!=e(n))return [];null==a&&(a=n);for(var o=n.subject?[a]:[],i=0,s=function(e){for(var t=[],r=Object.keys(e),n=0;n<r.length;n++)t.push([r[n],e[r[n]]]);return t}(n);i<s.length;i++){var l=t(s[i],2),u=l[0],c=l[1];o.push.apply(o,r(d(c,"left"===u?c:a)));}return o}function m(e,t,r,n){if(t){var a=[],o=d(t);s.traverse(e,{enter:function(e,i){if(null!=i&&a.unshift(i),u(e,t,a,n))if(o.length)for(var s=0,l=o.length;s<l;++s){u(e,o[s],a,n)&&r(e,i,a);for(var c=0,f=a.length;c<f;++c){var p=a.slice(c+1);u(a[c],o[s],p,n)&&r(a[c],i,p);}}else r(e,i,a);},leave:function(){a.shift();},keys:n&&n.visitorKeys,fallback:n&&n.fallback||"iteration"});}}function x(e,t,r){var n=[];return m(e,t,(function(e){n.push(e);}),r),n}function v(e){return l.parse(e)}function g(e,t,r){return x(e,v(t),r)}g.parse=v,g.match=x,g.traverse=m,g.matches=u,g.query=g;

/**
 * Removes initial and ending brackets from `rawType`
 * @param {JsdocTypeLine[]|JsdocTag} container
 * @param {boolean} isArr
 * @returns {void}
 */
const stripEncapsulatingBrackets = (container, isArr) => {
  if (isArr) {
    const firstItem = container[0];
    firstItem.rawType = firstItem.rawType.replace(
      /^\{/u, ''
    );

    const lastItem = container[container.length - 1];
    lastItem.rawType = lastItem.rawType.replace(/\}$/u, '');

    return;
  }
  container.rawType = container.rawType.replace(
    /^\{/u, ''
  ).replace(/\}$/u, '');
};

/**
 * @external CommentParserJsdoc
 */

/**
 * @external JsdocTypePrattParserMode
 */

/**
 * @typedef {{
 *   delimiter: string,
 *   postDelimiter: string,
 *   rawType: string,
 *   start: string,
 *   type: "JsdocTypeLine"
 * }} JsdocTypeLine
 */

/**
 * @typedef {{
 *   delimiter: string,
 *   description: string,
 *   postDelimiter: string,
 *   start: string,
 *   type: "JsdocDescriptionLine"
 * }} JsdocDescriptionLine
 */

/**
 * @typedef {{
 *   delimiter: string,
 *   description: string,
 *   postDelimiter: string,
 *   start: string,
 *   tag: string,
 *   end: string,
 *   type: string,
 *   descriptionLines: JsdocDescriptionLine[],
 *   rawType: string,
 *   type: "JsdocTag",
 *   typeLines: JsdocTypeLine[]
 * }} JsdocTag
 */

/**
 * @typedef {{
 *   delimiter: string,
 *   description: string,
 *   descriptionLines: JsdocDescriptionLine[],
 *   end: string,
 *   postDelimiter: string,
 *   lineEnd: string,
 *   type: "JsdocBlock",
 *   lastDescriptionLine: Integer,
 *   tags: JsdocTag[]
 * }} JsdocBlock
 */

/**
 * Converts comment parser AST to ESTree format.
 * @param {external:CommentParserJsdoc} jsdoc
 * @param {external:JsdocTypePrattParserMode} mode
 * @param {PlainObject} opts
 * @param {throwOnTypeParsingErrors} [opts.throwOnTypeParsingErrors=false]
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
        err.message = `Tag @${lastTag.tag} with raw type ` +
          `\`${lastTag.rawType}\` had parsing error: ${err.message}`;
        throw err;
      }
    }

    lastTag.parsedType = parsedType;
  };

  const {source} = jsdoc;

  const {tokens: {
    delimiter: delimiterRoot,
    lineEnd: lineEndRoot,
    postDelimiter: postDelimiterRoot,
    end: endRoot,
    description: descriptionRoot
  }} = source[0];

  const endLine = source.length - 1;
  const ast = {
    delimiter: delimiterRoot,
    description: descriptionRoot,

    descriptionLines: [],

    // `end` will be overwritten if there are other entries
    end: endRoot,
    endLine,
    postDelimiter: postDelimiterRoot,
    lineEnd: lineEndRoot,

    type: 'JsdocBlock'
  };

  const tags = [];
  let lastDescriptionLine;
  let lastTag = null;

  source.forEach((info, idx) => {
    const {tokens} = info;
    const {
      delimiter,
      description,
      postDelimiter,
      start,
      tag,
      end,
      type: rawType
    } = tokens;

    if (tag || end) {
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
        ast.end = end;

        return;
      }

      const {
        end: ed,
        delimiter: de,
        postDelimiter: pd,
        ...tkns
      } = tokens;

      if (!tokens.name) {
        let i = 0;
        while (source[idx + i]) {
          const {tokens: {
            name,
            postName
          }} = source[idx + i];
          if (name) {
            tkns.name = name;
            tkns.postName = postName;
            break;
          }
          i++;
        }
      }

      const tagObj = {
        ...tkns,
        postDelimiter: lastDescriptionLine ? pd : '',
        delimiter: lastDescriptionLine ? de : '',
        descriptionLines: [],
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
      lastTag.typeLines.push(
        lastTag.typeLines.length
          ? {
            delimiter,
            postDelimiter,
            rawType,
            start,
            type: 'JsdocTypeLine'
          }
          : {
            delimiter: '',
            postDelimiter: '',
            rawType,
            start: '',
            type: 'JsdocTypeLine'
          }
      );
      lastTag.rawType += lastTag.rawType ? '\n' + rawType : rawType;
    }

    if (description) {
      const holder = lastTag || ast;
      holder.descriptionLines.push(
        holder.descriptionLines.length
          ? {
            delimiter,
            description,
            postDelimiter,
            start,
            type: 'JsdocDescriptionLine'
          }
          : {
            delimiter: '',
            description,
            postDelimiter: '',
            start: '',
            type: 'JsdocDescriptionLine'
          }
      );
      holder.description += holder.description
        ? '\n' + description
        : description;
    }

    // Clean-up where last line itself has tag content
    if (end && tag) {
      ast.end = end;

      cleanUpLastTag(lastTag);
    }
  });

  ast.lastDescriptionLine = lastDescriptionLine;
  ast.tags = tags;

  return ast;
};

const jsdocVisitorKeys = {
  JsdocBlock: ['descriptionLines', 'tags'],
  JsdocDescriptionLine: [],
  JsdocTypeLine: [],
  JsdocTag: ['parsedType', 'typeLines', 'descriptionLines']
};

/* eslint-disable prefer-named-capture-group -- Temporary */

const {
  name: nameTokenizer,
  tag: tagTokenizer,
  type: typeTokenizer,
  description: descriptionTokenizer
} = commentParser.tokenizers;

const hasSeeWithLink = (spec) => {
  return spec.tag === 'see' && (/\{@link.+?\}/u).test(spec.source[0].source);
};

const defaultNoTypes = ['default', 'defaultvalue', 'see'];

const defaultNoNames = [
  'access', 'author',
  'default', 'defaultvalue',
  'description',
  'example', 'exception', 'kind',
  'license',
  'return', 'returns',
  'since', 'summary',
  'throws',
  'version', 'variation'
];

const getTokenizers = ({
  noTypes = defaultNoTypes,
  noNames = defaultNoNames
} = {}) => {
  // trim
  return [
    // Tag
    tagTokenizer(),

    // Type
    (spec) => {
      if (noTypes.includes(spec.tag)) {
        return spec;
      }

      return typeTokenizer()(spec);
    },

    // Name
    (spec) => {
      if (spec.tag === 'template') {
        // const preWS = spec.postTag;
        const remainder = spec.source[0].tokens.description;

        const pos = remainder.search(/(?<![\s,])\s/u);

        const name = pos === -1 ? remainder : remainder.slice(0, pos);
        const extra = remainder.slice(pos);
        let postName = '', description = '', lineEnd = '';
        if (pos > -1) {
          [, postName, description, lineEnd] = extra.match(/(\s*)([^\r]*)(\r)?/u);
        }

        spec.name = name;
        spec.optional = false;
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

      return nameTokenizer()(spec);
    },

    // Description
    (spec) => {
      return descriptionTokenizer('preserve')(spec);
    }
  ];
};

/**
 * Accepts a comment token and converts it into `comment-parser` AST.
 * @param {PlainObject} commentNode
 * @param {string} [indent=""] Whitespace
 * @returns {PlainObject}
 */
const parseComment = (commentNode, indent = '') => {
  // Preserve JSDoc block start/end indentation.
  return commentParser.parse(`/*${commentNode.value}*/`, {
    // @see https://github.com/yavorskiy/comment-parser/issues/21
    tokenizers: getTokenizers()
  })[0];
};

/**
 * Obtained originally from {@link https://github.com/eslint/eslint/blob/master/lib/util/source-code.js#L313}.
 *
 * @license MIT
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
 * @param {AST} node
 * @returns {boolean}
 */
const getDecorator = (node) => {
  return node?.declaration?.decorators?.[0] || node?.decorators?.[0] ||
      node?.parent?.decorators?.[0];
};

/**
 * Check to see if it is a ES6 export declaration.
 *
 * @param {ASTNode} astNode An AST node.
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
 * @param {AST} astNode
 * @returns {AST}
 */
const getTSFunctionComment = function (astNode) {
  const {parent} = astNode;
  const grandparent = parent.parent;
  const greatGrandparent = grandparent.parent;
  const greatGreatGrandparent = greatGrandparent && greatGrandparent.parent;

  // istanbul ignore if
  if (parent.type !== 'TSTypeAnnotation') {
    return astNode;
  }

  switch (grandparent.type) {
  case 'PropertyDefinition':
  case 'ClassProperty':
  case 'TSDeclareFunction':
  case 'TSMethodSignature':
  case 'TSPropertySignature':
    return grandparent;
  case 'ArrowFunctionExpression':
    // istanbul ignore else
    if (
      greatGrandparent.type === 'VariableDeclarator'

    // && greatGreatGrandparent.parent.type === 'VariableDeclaration'
    ) {
      return greatGreatGrandparent.parent;
    }

    // istanbul ignore next
    return astNode;
  case 'FunctionExpression':
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
  'VariableDeclaration',
  'ExpressionStatement',
  'MethodDefinition',
  'Property',
  'ObjectProperty',
  'ClassProperty',
  'PropertyDefinition',
  'ExportDefaultDeclaration'
]);

/**
 * Reduces the provided node to the appropriate node for evaluating
 * JSDoc comment status.
 *
 * @param {ASTNode} node An AST node.
 * @param {SourceCode} sourceCode The ESLint SourceCode.
 * @returns {ASTNode} The AST node that can be evaluated for appropriate
 * JSDoc comments.
 */
const getReducedASTNode = function (node, sourceCode) {
  let {parent} = node;

  switch (node.type) {
  case 'TSFunctionType':
    return getTSFunctionComment(node);
  case 'TSInterfaceDeclaration':
  case 'TSTypeAliasDeclaration':
  case 'TSEnumDeclaration':
  case 'ClassDeclaration':
  case 'FunctionDeclaration':
    return looksLikeExport(parent) ? parent : node;

  case 'TSDeclareFunction':
  case 'ClassExpression':
  case 'ObjectExpression':
  case 'ArrowFunctionExpression':
  case 'TSEmptyBodyFunctionExpression':
  case 'FunctionExpression':
    if (
      !invokedExpression.has(parent.type)
    ) {
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
 * @param {ASTNode} astNode The AST node to get the comment for.
 * @param {SourceCode} sourceCode
 * @param {{maxLines: Integer, minLines: Integer}} settings
 * @returns {Token|null} The Block comment token containing the JSDoc comment
 *    for the given node or null if not found.
 * @private
 */
const findJSDocComment = (astNode, sourceCode, settings) => {
  const {minLines, maxLines} = settings;
  let currentNode = astNode;
  let tokenBefore = null;

  while (currentNode) {
    const decorator = getDecorator(currentNode);
    if (decorator) {
      currentNode = decorator;
    }
    tokenBefore = sourceCode.getTokenBefore(
      currentNode, {includeComments: true}
    );
    if (
      tokenBefore && tokenBefore.type === 'Punctuator' &&
      tokenBefore.value === '('
    ) {
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

  if (
    tokenBefore.type === 'Block' &&
    (/^\*\s/u).test(tokenBefore.value) &&
    currentNode.loc.start.line - tokenBefore.loc.end.line >= minLines &&
    currentNode.loc.start.line - tokenBefore.loc.end.line <= maxLines
  ) {
    return tokenBefore;
  }

  return null;
};

/**
 * Retrieves the JSDoc comment for a given node.
 *
 * @param {SourceCode} sourceCode The ESLint SourceCode
 * @param {ASTNode} node The AST node to get the comment for.
 * @param {PlainObject} settings The settings in context
 * @returns {Token|null} The Block comment token containing the JSDoc comment
 *    for the given node or null if not found.
 * @public
 */
const getJSDocComment = function (sourceCode, node, settings) {
  const reducedNode = getReducedASTNode(node, sourceCode);

  return findJSDocComment(reducedNode, sourceCode, settings);
};

({...jsdocVisitorKeys, ...jsdocTypePrattParser.visitorKeys});

const jsdocCommentProperty = 'jsdoc';
const jsdocBlocksProperty = 'jsdocBlocks';

const getJsdocEslintParser = (parser) => {
  return function (code, options) {
    const {
      mode = 'jsdoc',
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
      ...parserOptions

      // These would be needed by the regular Babel parser, but apparently
      //   this Babel ESLint parser properly adds them for us:
      // Required by ESLint on `Program`
      // tokens: true,
      // Required by ESLint on each Node
      // ranges: true
    });

    const modifiedVisitorKeys = JSON.parse(JSON.stringify(visitorKeys));
    Object.entries(modifiedVisitorKeys).forEach(([key, value]) => {
      modifiedVisitorKeys[key] = Array.isArray(value)
        ? [jsdocCommentProperty, jsdocBlocksProperty, ...value]
        /* c8 ignore next 1 */
        : [jsdocCommentProperty, jsdocBlocksProperty];
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

    const sel = g.parse('*[type]');
    g.traverse(ast, sel, (node, parent) => {
      // `parent` not available by default, so we add; must be
      //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
      node.parent = parent;

      // Have must `range` and `loc` per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
      // We've specified `ranges` above and seem to be getting `loc` set.
      // const [start, end] = node.range;
      // node.loc = {start: {line: 0}, end: {line: 0}};
      // node.loc = {start: {line: start}, end: {line: end}};

      const commentToken = getJSDocComment(sourceCode, node, {
        minLines,
        maxLines
      });

      let commentAST = null;
      if (commentToken) {
        const jsdoc = parseComment(
          commentToken,
          indent
        );
        commentAST = commentParserToESTree(jsdoc, mode, {
          throwOnTypeParsingErrors
        });
        commentAST.loc = commentToken.loc;
        commentAST.range = commentToken.range;
        g.traverse(commentAST, sel, (_node, parent) => {
          // `parent` not available by default, so we add; must be
          //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
          _node.parent = parent;

          // For now, we are just fudging these by using the comment block's
          //   location
          _node.loc = commentToken.loc;
          _node.range = commentToken.range;
        }, {visitorKeys: newVisitorKeys});
      }

      if (!node.type.startsWith('Jsdoc')) {
        node[jsdocCommentProperty] = commentAST;
      }
    }, {visitorKeys: newVisitorKeys});

    if (ast.comments) {
      ast[jsdocBlocksProperty] = ast.comments.map(({
        type, value: comment, range, loc
      }, idx) => {
        if (type !== 'Block') {
          return null;
        }
        let jsdoc;
        try {
          // Todo: detect leading whitespace for indent argument?
          jsdoc = parseComment({value: comment}, indent);
          if (!jsdoc) {
            return null;
          }
        // Unreachable?
        /* c8 ignore next 3 */
        } catch (err) {
          return null;
        }
        const commentAST = commentParserToESTree(jsdoc, mode, {
          throwOnTypeParsingErrors
        });

        commentAST.loc = loc;
        commentAST.range = range;
        commentAST.commentsIndex = idx;

        g.traverse(commentAST, sel, (node, parent) => {
          // `parent` not available by default, so we add; must be
          //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
          node.parent = parent;

          // For now, we are just fudging these by using the comment block's
          //   location
          node.loc = loc;
          node.range = range;
        }, {visitorKeys: newVisitorKeys});

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
