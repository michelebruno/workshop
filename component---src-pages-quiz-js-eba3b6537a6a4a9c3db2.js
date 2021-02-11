/*! For license information please see component---src-pages-quiz-js-eba3b6537a6a4a9c3db2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"82gj":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));var n=function(){},o=function(){}},"9uj6":function(e,t,r){"use strict";r.r(t);var n=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return n.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));t.default=o},GCOq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),i=r("ZMKu"),u=r("rY4l");var s=function(e){var t=e.onNext,r=e.answers,a=e.position,s=e.title,c=e.children,l=e.active,d=e.score,p=(e.onAnswer,Object(n.useState)(!1)),f=p[0],m=p[1];return o.a.createElement("div",{className:"question row border border-dark border-4 border-bottom-0 border-top-0 align-items-stretch "+(l?"":"d-none")},o.a.createElement("div",{className:"col-12"},o.a.createElement(u.a,{left:"Score "+d})),o.a.createElement("div",{className:"col-12"},o.a.createElement("span",{className:"h3 pb-5 text-primary"},a),o.a.createElement(i.a.h2,{className:"h1"},s)),o.a.createElement("div",{className:"col-12 mt-auto"},!f&&o.a.createElement(i.a.div,{className:"p-0 row border border-4 border-start-0 border-end-0 overflow-hidden"},!f&&r.map((function(e,t){var r=e.label,n=e.isTrue;return o.a.createElement(i.a.button,{variants:{visible:function(e){return{translateY:0,opacity:1,transition:{duration:.25,delay:.3*e}}},hidden:{opacity:0,translateY:200}},animate:l?"visible":"hidden",initial:"hidden",className:"answer btn btn-primary border-4 border-start-0 border-end-0 border-top-0 border-dark answer col-12 col-md-6 text-center py-5",key:r,custom:t,type:"button",onClick:function(){return m(n?"right":"wrong")}},r)})))),f&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-12 "},c),o.a.createElement("div",{className:"col-12 mt-auto border-bottom border-4 text-end "},o.a.createElement("button",{type:"button",className:"btn btn-text",onClick:t},"Next"))))},c=[{title:"How long does it take on average to read the term of use?",answers:[{label:"40 minutes",isTrue:!0},{label:"10 minutes",isTrue:!1},{label:"10 mi nutes",isTrue:!1},{label:"1 minutes",isTrue:!1}]},{title:"do you know what cookies are?",answers:[{label:"Some kind of app guidelines",isTrue:!1},{label:"Something that serve to make a site work better",isTrue:!0},{label:"Software of the browser that allow you to visit a website",isTrue:!1},{label:"The conditions you have to accept when you go on a site",isTrue:!1}],children:o.a.createElement("span",null,'"cookies" sono file di testo in cui sono scritte informazioni riguardo il sito visitato ed il computer usato per navigare hanno una scadenza e dopo un determinato periodo di tempo si cancellano automaticamente se non vengono rinnovati (visitando di nuovo un sito) prima parte: informazioni come il numero di sessioni o di visualizzazioni di pagina terza parte: possono essere trasmessi a un sito diverso da quello visitato ed implicano questioni di privacy Cookie di sessione: più sicuri, ricorda l’identità di un computer durante la navigazione tra pagine, quando termina la sessione, smette di funzionare Cookie persistenti: permanenti (quasi), memorizzare preferenze degli utenti Evercookie, cookie zombie e supercookie: non proprio cookie/salvataggi di dati, ma routine in grado di autoreplicarsi anche dopo che la cache del browser è stata svuotata Di per sé, i cookie non possono danneggiare un computer, ma possono aiutare gli hacker a infiltrarsi e recuperare le informazioni contenute nei cookie')},{title:"why do you think social media are free?",answers:[{label:"because they are paid by other companies and society",isTrue:!1},{label:"their shares are listed on the stock exchange",isTrue:!1},{label:"to engage people who are not willing to pay for such services on the platforms",isTrue:!1},{label:"because they collect and sell our data to third-party",isTrue:!0}],children:o.a.createElement("span",null,"“if the service is free, the product is you” gratuita e questo accade perché inseriamo, volontariamente i nostri dati all’interno dei vari portali e siti. quello che tu pubblichi, quello che tu fai, è tutto tracciato, immagazzinato e ritirato fuori nel momento del bisogno, quando qualcuno è disposto a pagare per poter utilizzare i tuoi dati. Chiunque voglia fare pubblicità sui social sta “affittando” i tuoi dati per poter far vedere solo a te il proprio spot, permettono di settorializzare, o targettizzare la nostra pubblicità e farla arrivare esattamente a chi ha bisogno. es. se scrivi che vuoi della pizza sul tuo programma di messaggistica preferito è molto probabile che se navighi appena dopo su Facebook ti ritrovi delle pubblicità della pizza. Questo perché anche le nostre conversazioni private sono tracciate e utilizzate a scopi commerciali. WhatsApp manda dati sul comportamento degli utenti a Facebook per creare pubblicità specifiche (L’utente può scegliere se condividere i propri dati con altre applicazioni o meno. Si può disattivare la condivisione dalle impostazioni di WhatsApp)")},{title:"what may happen after you store one of your personal pictures on your cloud/google drive?",answers:[{label:"because they are paid by other companies and society",isTrue:!1},{label:"their shares are listed on the stock exchange",isTrue:!1},{label:"to engage people who are not willing to pay for such services on the platforms",isTrue:!1},{label:"because they collect and sell our data to third-party",isTrue:!0}],children:o.a.createElement("span",null,"“if the service is free, the product is you” gratuita e questo accade perché inseriamo, volontariamente i nostri dati all’interno dei vari portali e siti. quello che tu pubblichi, quello che tu fai, è tutto tracciato, immagazzinato e ritirato fuori nel momento del bisogno, quando qualcuno è disposto a pagare per poter utilizzare i tuoi dati. Chiunque voglia fare pubblicità sui social sta “affittando” i tuoi dati per poter far vedere solo a te il proprio spot, permettono di settorializzare, o targettizzare la nostra pubblicità e farla arrivare esattamente a chi ha bisogno. es. se scrivi che vuoi della pizza sul tuo programma di messaggistica preferito è molto probabile che se navighi appena dopo su Facebook ti ritrovi delle pubblicità della pizza. Questo perché anche le nostre conversazioni private sono tracciate e utilizzate a scopi commerciali. WhatsApp manda dati sul comportamento degli utenti a Facebook per creare pubblicità specifiche (L’utente può scegliere se condividere i propri dati con altre applicazioni o meno. Si può disattivare la condivisione dalle impostazioni di WhatsApp)")},{title:"can you delete your data from google servers?",answers:[{label:"because they are paid by other companies and society",isTrue:!1},{label:"their shares are listed on the stock exchange",isTrue:!1},{label:"to engage people who are not willing to pay for such services on the platforms",isTrue:!1},{label:"because they collect and sell our data to third-party",isTrue:!0}],children:o.a.createElement("span",null,"“if the service is free, the product is you” gratuita e questo accade perché inseriamo, volontariamente i nostri dati all’interno dei vari portali e siti. quello che tu pubblichi, quello che tu fai, è tutto tracciato, immagazzinato e ritirato fuori nel momento del bisogno, quando qualcuno è disposto a pagare per poter utilizzare i tuoi dati. Chiunque voglia fare pubblicità sui social sta “affittando” i tuoi dati per poter far vedere solo a te il proprio spot, permettono di settorializzare, o targettizzare la nostra pubblicità e farla arrivare esattamente a chi ha bisogno. es. se scrivi che vuoi della pizza sul tuo programma di messaggistica preferito è molto probabile che se navighi appena dopo su Facebook ti ritrovi delle pubblicità della pizza. Questo perché anche le nostre conversazioni private sono tracciate e utilizzate a scopi commerciali. WhatsApp manda dati sul comportamento degli utenti a Facebook per creare pubblicità specifiche (L’utente può scegliere se condividere i propri dati con altre applicazioni o meno. Si può disattivare la condivisione dalle impostazioni di WhatsApp)")}];function l(){var e=Object(n.useState)(0),t=e[0],r=e[1];function i(){r((function(e){return c.length<=e?0:e+1}))}var u=Object(n.useState)(0),l=u[0],d=u[1];return o.a.createElement("main",{className:"container d-flex min-vh-100 align-items-center"},o.a.createElement("div",{className:""},c.map((function(e,r){return o.a.createElement(s,Object.assign({key:e.title,score:l,onAnswer:function(){return d((function(e){return e+50}))},active:r===t,position:r+1+"/"+c.length},e,{onNext:i}))})),t===c.length&&Object(a.c)("/about",{state:{score:l}})))}},Ibe6:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return T})),r.d(t,"c",(function(){return C})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return F})),r.d(t,"f",(function(){return S})),r.d(t,"g",(function(){return x})),r.d(t,"h",(function(){return l})),r.d(t,"i",(function(){return h})),r.d(t,"j",(function(){return y})),r.d(t,"k",(function(){return v})),r.d(t,"l",(function(){return O})),r.d(t,"m",(function(){return p})),r.d(t,"n",(function(){return g})),r.d(t,"o",(function(){return b}));var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var o=function(e,t){return function(r){return Math.max(Math.min(r,t),e)}},a=function(e){return e%1?Number(e.toFixed(5)):e},i=/(-)?([\d]*\.?[\d])+/g,u=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,s=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function c(e){return"string"==typeof e}var l={test:function(e){return"number"==typeof e},parse:parseFloat,transform:function(e){return e}},d=n(n({},l),{transform:o(0,1)}),p=n(n({},l),{default:1}),f=function(e){return{test:function(t){return c(t)&&t.endsWith(e)&&1===t.split(" ").length},parse:parseFloat,transform:function(t){return""+t+e}}},m=f("deg"),h=f("%"),v=f("px"),g=f("vh"),b=f("vw"),y=n(n({},h),{parse:function(e){return h.parse(e)/100},transform:function(e){return h.transform(100*e)}}),w=function(e,t){return function(r){return c(r)&&s.test(r)&&r.startsWith(e)||t&&r.hasOwnProperty(t)}},k=function(e,t,r){return function(n){var o;if(!c(n))return n;var a=n.match(i),u=a[0],s=a[1],l=a[2],d=a[3];return(o={})[e]=parseFloat(u),o[t]=parseFloat(s),o[r]=parseFloat(l),o.alpha=void 0!==d?parseFloat(d):1,o}},x={test:w("hsl","hue"),parse:k("hue","saturation","lightness"),transform:function(e){var t=e.hue,r=e.saturation,n=e.lightness,o=e.alpha,i=void 0===o?1:o;return"hsla("+Math.round(t)+", "+h.transform(a(r))+", "+h.transform(a(n))+", "+a(d.transform(i))+")"}},z=o(0,255),M=n(n({},l),{transform:function(e){return Math.round(z(e))}}),O={test:w("rgb","red"),parse:k("red","green","blue"),transform:function(e){var t=e.red,r=e.green,n=e.blue,o=e.alpha,i=void 0===o?1:o;return"rgba("+M.transform(t)+", "+M.transform(r)+", "+M.transform(n)+", "+a(d.transform(i))+")"}};var S={test:w("#"),parse:function(e){var t="",r="",n="",o="";return e.length>5?(t=e.substr(1,2),r=e.substr(3,2),n=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),r=e.substr(2,1),n=e.substr(3,1),o=e.substr(4,1),t+=t,r+=r,n+=n,o+=o),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:o?parseInt(o,16)/255:1}},transform:O.transform},T={test:function(e){return O.test(e)||S.test(e)||x.test(e)},parse:function(e){return O.test(e)?O.parse(e):x.test(e)?x.parse(e):S.parse(e)},transform:function(e){return c(e)?e:e.hasOwnProperty("red")?O.transform(e):x.transform(e)}};function A(e){var t=[],r=0,n=e.match(u);n&&(r=n.length,e=e.replace(u,"${c}"),t.push.apply(t,n.map(T.parse)));var o=e.match(i);return o&&(e=e.replace(i,"${n}"),t.push.apply(t,o.map(l.parse))),{values:t,numColors:r,tokenised:e}}function q(e){return A(e).values}function E(e){var t=A(e),r=t.values,n=t.numColors,o=t.tokenised,i=r.length;return function(e){for(var t=o,r=0;r<i;r++)t=t.replace(r<n?"${c}":"${n}",r<n?T.transform(e[r]):a(e[r]));return t}}var j=function(e){return"number"==typeof e?0:e};var C={test:function(e){var t,r,n,o;return isNaN(e)&&c(e)&&(null!==(r=null===(t=e.match(i))||void 0===t?void 0:t.length)&&void 0!==r?r:0)+(null!==(o=null===(n=e.match(u))||void 0===n?void 0:n.length)&&void 0!==o?o:0)>0},parse:q,createTransformer:E,getAnimatableNone:function(e){var t=q(e);return E(e)(t.map(j))}},P=new Set(["brightness","contrast","saturate","opacity"]);function N(e){var t=e.slice(0,-1).split("("),r=t[0],n=t[1];if("drop-shadow"===r)return e;var o=(n.match(i)||[])[0];if(!o)return e;var a=n.replace(o,""),u=P.has(r)?1:0;return o!==n&&(u*=100),r+"("+u+a+")"}var R=/([a-z-]*)\(.*?\)/g,F=n(n({},C),{getAnimatableNone:function(e){var t=e.match(R);return t?t.map(N).join(" "):e}})},Neuu:function(e,t,r){"use strict";r.d(t,"a",(function(){return ne})),r.d(t,"b",(function(){return V})),r.d(t,"c",(function(){return X})),r.d(t,"d",(function(){return G})),r.d(t,"e",(function(){return _})),r.d(t,"f",(function(){return J})),r.d(t,"g",(function(){return Q})),r.d(t,"h",(function(){return $})),r.d(t,"i",(function(){return H})),r.d(t,"j",(function(){return Y})),r.d(t,"k",(function(){return B})),r.d(t,"l",(function(){return s})),r.d(t,"m",(function(){return be})),r.d(t,"n",(function(){return de})),r.d(t,"o",(function(){return L})),r.d(t,"p",(function(){return W})),r.d(t,"q",(function(){return U})),r.d(t,"r",(function(){return ae})),r.d(t,"s",(function(){return P})),r.d(t,"t",(function(){return I})),r.d(t,"u",(function(){return g})),r.d(t,"v",(function(){return O})),r.d(t,"w",(function(){return v})),r.d(t,"x",(function(){return oe})),r.d(t,"y",(function(){return pe}));r("E9XD");var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}var a=r("82gj"),i=r("Ibe6"),u=r("eUsl"),s=function(e,t,r){return Math.min(Math.max(r,e),t)};function c(e){var t,r,n=e.duration,o=void 0===n?800:n,i=e.bounce,u=void 0===i?.25:i,c=e.velocity,d=void 0===c?0:c,p=e.mass,f=void 0===p?1:p;Object(a.b)(o<=1e4,"Spring duration must be 10 seconds or less");var m=1-u;m=s(.05,1,m),o=s(.01,10,o/1e3),m<1?(t=function(e){var t=e*m,r=t*o;return.001-(t-d)/l(e,m)*Math.exp(-r)},r=function(e){var r=e*m*o,n=r*d+d,a=Math.pow(m,2)*Math.pow(e,2)*o,i=Math.exp(-r),u=l(Math.pow(e,2),m);return(.001-t(e)>0?-1:1)*((n-a)*i)/u}):(t=function(e){return Math.exp(-e*o)*((e-d)*o+1)-.001},r=function(e){return Math.exp(-e*o)*(o*o*(d-e))});var h=function(e,t,r){for(var n=r,o=1;o<12;o++)n-=e(n)/t(n);return n}(t,r,5/o);if(isNaN(h))return{stiffness:100,damping:10};var v=Math.pow(h,2)*f;return{stiffness:v,damping:2*m*Math.sqrt(f*v)}}function l(e,t){return e*Math.sqrt(1-t*t)}var d=["duration","bounce"],p=["stiffness","damping","mass"];function f(e,t){return t.some((function(t){return void 0!==e[t]}))}function m(e){var t=e.from,r=void 0===t?0:t,a=e.to,i=void 0===a?1:a,u=e.restSpeed,s=void 0===u?2:u,m=e.restDelta,v=o(e,["from","to","restSpeed","restDelta"]),g={done:!1,value:r},b=function(e){var t=n({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!f(e,p)&&f(e,d)){var r=c(e);(t=n(n(n({},t),r),{velocity:0,mass:1})).isResolvedFromDuration=!0}return t}(v),y=b.stiffness,w=b.damping,k=b.mass,x=b.velocity,z=b.isResolvedFromDuration,M=h,O=h;function S(){var e=x?-x/1e3:0,t=i-r,n=w/(2*Math.sqrt(y*k)),o=Math.sqrt(y/k)/1e3;if(null!=m||(m=Math.abs(i-r)<=1?.01:.4),n<1){var a=l(o,n);M=function(r){var u=Math.exp(-n*o*r);return i-u*((e+n*o*t)/a*Math.sin(a*r)+t*Math.cos(a*r))},O=function(r){var i=Math.exp(-n*o*r);return n*o*i*(Math.sin(a*r)*(e+n*o*t)/a+t*Math.cos(a*r))-i*(Math.cos(a*r)*(e+n*o*t)-a*t*Math.sin(a*r))}}else if(1===n)M=function(r){return i-Math.exp(-o*r)*(t+(e+o*t)*r)};else{var u=o*Math.sqrt(n*n-1);M=function(r){var a=Math.exp(-n*o*r),s=Math.min(u*r,300);return i-a*((e+n*o*t)*Math.sinh(s)+u*t*Math.cosh(s))/u}}}return S(),{next:function(e){var t=M(e);if(z)g.done=e>=v.duration;else{var r=1e3*O(e),n=Math.abs(r)<=s,o=Math.abs(i-t)<=m;g.done=n&&o}return g.value=g.done?i:t,g},flipTarget:function(){var e;x=-x,r=(e=[i,r])[0],i=e[1],S()}}}m.needsInterpolation=function(e,t){return"string"==typeof e||"string"==typeof t};var h=function(e){return 0},v=function(e,t,r){var n=t-e;return 0===n?1:(r-e)/n},g=function(e,t,r){return-r*e+r*t+e},b=function(e,t,r){var n=e*e,o=t*t;return Math.sqrt(Math.max(0,r*(o-n)+n))},y=[i.f,i.l,i.g],w=function(e){return y.find((function(t){return t.test(e)}))},k=function(e){return"'"+e+"' is not an animatable color. Use the equivalent color code instead."},x=function(e,t){var r=w(e),o=w(t);Object(a.a)(!!r,k(e)),Object(a.a)(!!o,k(t)),Object(a.a)(r.transform===o.transform,"Both colors must be hex/RGBA, OR both must be HSLA.");var u=r.parse(e),s=o.parse(t),c=n({},u),l=r===i.g?g:b;return function(e){for(var t in c)"alpha"!==t&&(c[t]=l(u[t],s[t],e));return c.alpha=g(u.alpha,s.alpha,e),r.transform(c)}},z=function(e){return"number"==typeof e},M=function(e,t){return function(r){return t(e(r))}},O=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce(M)};function S(e,t){return z(e)?function(r){return g(e,t,r)}:i.b.test(e)?x(e,t):E(e,t)}var T=function(e,t){var r=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)n[o]=a[i];return n}(e),n=r.length,o=e.map((function(e,r){return S(e,t[r])}));return function(e){for(var t=0;t<n;t++)r[t]=o[t](e);return r}},A=function(e,t){var r=n(n({},e),t),o={};for(var a in r)void 0!==e[a]&&void 0!==t[a]&&(o[a]=S(e[a],t[a]));return function(e){for(var t in o)r[t]=o[t](e);return r}};function q(e){for(var t=i.c.parse(e),r=t.length,n=0,o=0,a=0,u=0;u<r;u++)n||"number"==typeof t[u]?n++:void 0!==t[u].hue?a++:o++;return{parsed:t,numNumbers:n,numRGB:o,numHSL:a}}var E=function(e,t){var r=i.c.createTransformer(t),n=q(e),o=q(t);return Object(a.a)(n.numHSL===o.numHSL&&n.numRGB===o.numRGB&&n.numNumbers>=o.numNumbers,"Complex values '"+e+"' and '"+t+"' too different to mix. Ensure all colors are of the same type."),O(T(n.parsed,o.parsed),r)},j=function(e,t){return function(r){return g(e,t,r)}};function C(e,t,r){for(var n,o=[],a=r||("number"==typeof(n=e[0])?j:"string"==typeof n?i.b.test(n)?x:E:Array.isArray(n)?T:"object"==typeof n?A:void 0),u=e.length-1,s=0;s<u;s++){var c=a(e[s],e[s+1]);if(t){var l=Array.isArray(t)?t[s]:t;c=O(l,c)}o.push(c)}return o}function P(e,t,r){var n=void 0===r?{}:r,o=n.clamp,i=void 0===o||o,u=n.ease,c=n.mixer,l=e.length;Object(a.a)(l===t.length,"Both input and output ranges must be the same length"),Object(a.a)(!u||!Array.isArray(u)||u.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());var d=C(t,u,c),p=2===l?function(e,t){var r=e[0],n=e[1],o=t[0];return function(e){return o(v(r,n,e))}}(e,d):function(e,t){var r=e.length,n=r-1;return function(o){var a=0,i=!1;if(o<=e[0]?i=!0:o>=e[n]&&(a=n-1,i=!0),!i){for(var u=1;u<r&&!(e[u]>o||u===n);u++);a=u-1}var s=v(e[a],e[a+1],o);return t[a](s)}}(e,d);return i?function(t){return p(s(e[0],e[l-1],t))}:p}var N=function(e){return function(t){return 1-e(1-t)}},R=function(e){return function(t){return t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2}},F=function(e){return function(t){return t*t*((e+1)*t-e)}},D=function(e){var t=F(e);return function(e){return(e*=2)<1?.5*t(e):.5*(2-Math.pow(2,-10*(e-1)))}},I=function(e){return e},L=function(e){return function(t){return Math.pow(t,e)}}(2),U=N(L),W=R(L),H=function(e){return 1-Math.sin(Math.acos(e))},B=N(H),Y=R(B),X=F(1.525),_=N(X),G=R(X),V=D(1.525),$=function(e){if(1===e||0===e)return e;var t=e*e;return e<4/11?7.5625*t:e<8/11?9.075*t-9.9*e+3.4:e<.9?4356/361*t-35442/1805*e+16061/1805:10.8*e*e-20.52*e+10.72},J=N($),Q=function(e){return e<.5?.5*(1-$(1-2*e)):.5*$(2*e-1)+.5};function K(e,t){return e.map((function(){return t||W})).splice(0,e.length-1)}function Z(e){var t=e.from,r=void 0===t?0:t,n=e.to,o=void 0===n?1:n,a=e.ease,i=e.offset,u=e.duration,s=void 0===u?300:u,c={done:!1,value:r},l=Array.isArray(o)?o:[r,o],d=function(e,t){return e.map((function(e){return e*t}))}(i&&i.length===l.length?i:function(e){var t=e.length;return e.map((function(e,r){return 0!==r?r/(t-1):0}))}(l),s);function p(){return P(d,l,{ease:Array.isArray(a)?a:K(l,a)})}var f=p();return{next:function(e){return c.value=f(e),c.done=e>=s,c},flipTarget:function(){l.reverse(),f=p()}}}var ee={keyframes:Z,spring:m,decay:function(e){var t=e.velocity,r=void 0===t?0:t,n=e.from,o=void 0===n?0:n,a=e.power,i=void 0===a?.8:a,u=e.timeConstant,s=void 0===u?350:u,c=e.restDelta,l=void 0===c?.5:c,d=e.modifyTarget,p={done:!1,value:o},f=i*r,m=o+f,h=void 0===d?m:d(m);return h!==m&&(f=h-o),{next:function(e){var t=-f*Math.exp(-e/s);return p.done=!(t>l||t<-l),p.value=p.done?h:h+t,p},flipTarget:function(){}}}};function te(e,t,r){return void 0===r&&(r=0),e-t-r}var re=function(e){var t=function(t){var r=t.delta;return e(r)};return{start:function(){return u.b.update(t,!0,!0)},stop:function(){return u.a.update(t)}}};function ne(e){var t,r,a,i,u,s=e.from,c=e.autoplay,l=void 0===c||c,d=e.driver,p=void 0===d?re:d,f=e.elapsed,h=void 0===f?0:f,v=e.repeat,g=void 0===v?0:v,b=e.repeatType,y=void 0===b?"loop":b,w=e.repeatDelay,k=void 0===w?0:w,x=e.onPlay,z=e.onStop,M=e.onComplete,O=e.onRepeat,S=e.onUpdate,T=o(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]),A=T.to,q=0,E=T.duration,j=!1,C=!0,N=function(e){if(Array.isArray(e.to))return Z;if(ee[e.type])return ee[e.type];var t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Z:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?m:Z}(T);(null===(r=(t=N).needsInterpolation)||void 0===r?void 0:r.call(t,s,A))&&(u=P([0,100],[s,A],{clamp:!1}),s=0,A=100);var R=N(n(n({},T),{from:s,to:A}));function F(){q++,"reverse"===y?h=function(e,t,r,n){return void 0===r&&(r=0),void 0===n&&(n=!0),n?te(t+-e,t,r):t-(e-t)+r}(h,E,k,C=q%2==0):(h=te(h,E,k),"mirror"===y&&R.flipTarget()),j=!1,O&&O()}function D(e){if(C||(e=-e),h+=e,!j){var t=R.next(Math.max(0,h));i=t.value,u&&(i=u(i)),j=C?t.done:h<=0}null==S||S(i),j&&(0===q&&(null!=E||(E=h)),q<g?function(e,t,r,n){return n?e>=t+r:e<=-r}(h,E,k,C)&&F():(a.stop(),M&&M()))}return l&&(null==x||x(),(a=p(D)).start()),{stop:function(){null==z||z(),a.stop()}}}function oe(e,t){return t?e*(1e3/t):0}function ae(e){var t,r=e.from,o=void 0===r?0:r,a=e.velocity,i=void 0===a?0:a,s=e.min,c=e.max,l=e.power,d=void 0===l?.8:l,p=e.timeConstant,f=void 0===p?750:p,m=e.bounceStiffness,h=void 0===m?500:m,v=e.bounceDamping,g=void 0===v?10:v,b=e.restDelta,y=void 0===b?1:b,w=e.modifyTarget,k=e.driver,x=e.onUpdate,z=e.onComplete;function M(e){return void 0!==s&&e<s||void 0!==c&&e>c}function O(e){return void 0===s?c:void 0===c||Math.abs(s-e)<Math.abs(c-e)?s:c}function S(e){null==t||t.stop(),t=ne(n(n({},e),{driver:k,onUpdate:function(t){var r;null==x||x(t),null===(r=e.onUpdate)||void 0===r||r.call(e,t)},onComplete:z}))}function T(e){S(n({type:"spring",stiffness:h,damping:g,restDelta:y},e))}if(M(o))T({from:o,velocity:i,to:O(o)});else{var A=d*i+o;void 0!==w&&(A=w(A));var q,E,j=O(A),C=j===s?-1:1;S({type:"decay",from:o,velocity:i,timeConstant:f,power:d,restDelta:y,modifyTarget:w,onUpdate:M(A)?function(e){q=E,E=e,i=oe(e-q,Object(u.c)().delta),(1===C&&e>j||-1===C&&e<j)&&T({from:e,to:j,velocity:i})}:void 0})}return{stop:function(){return null==t?void 0:t.stop()}}}var ie=function(e){return e},ue=function(e){return void 0===e&&(e=ie),function(t,r,n){var o=r-n,a=-(0-t+1)*(0-e(Math.abs(o)));return o<=0?r+a:r-a}},se=(Math.sqrt,function(e){return e.hasOwnProperty("x")&&e.hasOwnProperty("y")}),ce=function(e){return se(e)&&e.hasOwnProperty("z")},le=function(e,t){return Math.abs(e-t)};function de(e,t){if(z(e)&&z(t))return le(e,t);if(se(e)&&se(t)){var r=le(e.x,t.x),n=le(e.y,t.y),o=ce(e)&&ce(t)?le(e.z,t.z):0;return Math.sqrt(Math.pow(r,2)+Math.pow(n,2)+Math.pow(o,2))}}var pe=function(e,t,r){var n=t-e;return((r-e)%n+n)%n+e},fe=function(e,t){return 1-3*t+3*e},me=function(e,t){return 3*t-6*e},he=function(e){return 3*e},ve=function(e,t,r){return((fe(t,r)*e+me(t,r))*e+he(t))*e},ge=function(e,t,r){return 3*fe(t,r)*e*e+2*me(t,r)*e+he(t)};function be(e,t,r,n){if(e===t&&r===n)return I;for(var o=new Float32Array(11),a=0;a<11;++a)o[a]=ve(.1*a,e,r);function i(t){for(var n=0,a=1;10!==a&&o[a]<=t;++a)n+=.1;--a;var i=n+.1*((t-o[a])/(o[a+1]-o[a])),u=ge(i,e,r);return u>=.001?function(e,t,r,n){for(var o=0;o<8;++o){var a=ge(t,r,n);if(0===a)return t;t-=(ve(t,r,n)-e)/a}return t}(t,i,e,r):0===u?i:function(e,t,r,n,o){var a,i,u=0;do{(a=ve(i=t+(r-t)/2,n,o)-e)>0?r=i:t=i}while(Math.abs(a)>1e-7&&++u<10);return i}(t,n,n+.1,e,r)}return function(e){return 0===e||1===e?e:ve(i(e),t,n)}}},YRJC:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a})),r.d(t,"d",(function(){return i})),r.d(t,"f",(function(){return u})),r.d(t,"c",(function(){return s})),r.d(t,"e",(function(){return c}));var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function u(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function c(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e}},eUsl:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"c",(function(){return h}));r("E9XD");var n="undefined"!=typeof window?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout((function(){return e(performance.now())}),1/60*1e3)};var o=!0,a=!1,i=!1,u={delta:0,timestamp:0},s=["read","update","preRender","render","postRender"],c=s.reduce((function(e,t){return e[t]=function(e){var t=[],r=[],n=0,o=!1,a=new WeakSet,i={schedule:function(e,i,u){void 0===i&&(i=!1),void 0===u&&(u=!1);var s=u&&o,c=s?t:r;return i&&a.add(e),-1===c.indexOf(e)&&(c.push(e),s&&o&&(n=t.length)),e},cancel:function(e){var t=r.indexOf(e);-1!==t&&r.splice(t,1),a.delete(e)},process:function(u){var s;if(o=!0,t=(s=[r,t])[0],(r=s[1]).length=0,n=t.length)for(var c=0;c<n;c++){var l=t[c];l(u),a.has(l)&&(i.schedule(l),e())}o=!1}};return i}((function(){return a=!0})),e}),{}),l=s.reduce((function(e,t){var r=c[t];return e[t]=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=!1),a||m(),r.schedule(e,t,n)},e}),{}),d=s.reduce((function(e,t){return e[t]=c[t].cancel,e}),{}),p=function(e){return c[e].process(u)},f=function e(t){a=!1,u.delta=o?1/60*1e3:Math.max(Math.min(t-u.timestamp,40),1),u.timestamp=t,i=!0,s.forEach(p),i=!1,a&&(o=!1,n(e))},m=function(){a=!0,o=!0,i||n(f)},h=function(){return u};t.b=l},rY4l:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("q1tI"),o=r.n(n),a=r("Wbzz");function i(e){var t=e.left,r=e.className;return o.a.createElement("header",{className:"row border border-4 border-end-0 border-start-0 "+r},o.a.createElement("div",{className:"col "},o.a.createElement(a.a,{to:"/"},o.a.createElement("span",null,"Logo"))),t&&o.a.createElement("div",{className:"col  text-end"},t))}}}]);
//# sourceMappingURL=component---src-pages-quiz-js-eba3b6537a6a4a9c3db2.js.map