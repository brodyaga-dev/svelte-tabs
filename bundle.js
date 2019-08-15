var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function s(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e,t,n){e.insertBefore(t,n||null)}function r(e){e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function u(){return $(" ")}let i;function d(e){i=e}const f=[],p=[],b=[],m=[],h=Promise.resolve();let g=!1;function y(e){b.push(e)}function v(){const e=new Set;do{for(;f.length;){const e=f.shift();d(e),x(e.$$)}for(;p.length;)p.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];e.has(n)||(n(),e.add(n))}b.length=0}while(f.length);for(;m.length;)m.pop()();g=!1}function x(e){e.fragment&&(e.update(e.dirty),o(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(y))}const _=new Set;let w,T;function E(e,t){e&&e.i&&(_.delete(e),e.i(t))}function C(e,t,n,o){if(e&&e.o){if(_.has(e))return;_.add(e),w.c.push(()=>{_.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function S(e,n,c){const{fragment:l,on_mount:r,on_destroy:a,after_update:$}=e.$$;l.m(n,c),y(()=>{const n=r.map(t).filter(s);a?a.push(...n):o(n),e.$$.on_mount=[]}),$.forEach(y)}function P(e,t){e.$$.fragment&&(o(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function k(e,t){e.$$.dirty||(f.push(e),g||(g=!0,h.then(v)),e.$$.dirty=n()),e.$$.dirty[t]=!0}function B(t,s,c,l,r,a){const $=i;d(t);const u=s.props||{},f=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:n(),dirty:null};let p=!1;var b;f.ctx=c?c(t,u,(e,n)=>{f.ctx&&r(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),p&&k(t,e))}):u,f.update(),p=!0,o(f.before_update),f.fragment=l(f.ctx),s.target&&(s.hydrate?f.fragment.l((b=s.target,Array.from(b.childNodes))):f.fragment.c(),s.intro&&E(t.$$.fragment),S(t,s.target,s.anchor),v()),d($)}class O{$destroy(){P(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function A(){}function L(e,t){for(const n in t)e[n]=t[n];return e}function N(e){return e()}function j(){return Object.create(null)}function F(e){e.forEach(N)}function I(e){return"function"==typeof e}function q(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function D(e,t,n){e.$$.on_destroy.push(function(e,t){const n=e.subscribe(t);return n.unsubscribe?()=>n.unsubscribe():n}(t,n))}function K(e,t,n){if(e){const o=M(e,t,n);return e[0](o)}}function M(e,t,n){return e[1]?L({},L(t.$$scope.ctx,e[1](n?n(t):{}))):t.$$scope.ctx}function z(e,t,n,o){return e[1]?L({},L(t.$$scope.changed||{},e[1](o?o(n):{}))):t.$$scope.changed||{}}function R(e,t){e.appendChild(t)}function G(e,t,n){e.insertBefore(t,n||null)}function H(e){e.parentNode.removeChild(e)}function J(e){return document.createElement(e)}function Q(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function U(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function V(e,t,n){e.classList[n?"add":"remove"](t)}function W(e){T=e}function X(){if(!T)throw new Error("Function called outside component initialization");return T}function Y(e){return X().$$.context.get(e)}const Z=[],ee=[],te=[],ne=[],oe=Promise.resolve();let se=!1;function ce(){se||(se=!0,oe.then(re))}function le(e){te.push(e)}function re(){const e=new Set;do{for(;Z.length;){const e=Z.shift();W(e),ae(e.$$)}for(;ee.length;)ee.pop()();for(let t=0;t<te.length;t+=1){const n=te[t];e.has(n)||(n(),e.add(n))}te.length=0}while(Z.length);for(;ne.length;)ne.pop()();se=!1}function ae(e){e.fragment&&(e.update(e.dirty),F(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(le))}const $e=new Set;let ue;function ie(e,t){e&&e.i&&($e.delete(e),e.i(t))}function de(e,t,n,o){if(e&&e.o){if($e.has(e))return;$e.add(e),ue.c.push(()=>{$e.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function fe(e,t,n,o,s,c){const l=T;W(e);const r=t.props||{},a=e.$$={fragment:null,ctx:null,props:c,update:A,not_equal:s,bound:j(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:j(),dirty:null};let $=!1;var u;a.ctx=n?n(e,r,(t,n)=>{a.ctx&&s(a.ctx[t],a.ctx[t]=n)&&(a.bound[t]&&a.bound[t](n),$&&function(e,t){e.$$.dirty||(Z.push(e),ce(),e.$$.dirty=j()),e.$$.dirty[t]=!0}(e,t))}):r,a.update(),$=!0,F(a.before_update),a.fragment=o(a.ctx),t.target&&(t.hydrate?a.fragment.l((u=t.target,Array.from(u.childNodes))):a.fragment.c(),t.intro&&ie(e.$$.fragment),function(e,t,n){const{fragment:o,on_mount:s,on_destroy:c,after_update:l}=e.$$;o.m(t,n),le(()=>{const t=s.map(N).filter(I);c?c.push(...t):F(t),e.$$.on_mount=[]}),l.forEach(le)}(e,t.target,t.anchor),re()),W(l)}class pe{$destroy(){var e,t;t=1,(e=this).$$.fragment&&(F(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=A}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}let be=1;function me(){return`svelte-tabs-${be++}`}const he=[];function ge(e,t=A){let n;const o=[];function s(t){if(q(e,t)&&(e=t,n)){const t=!he.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),he.push(n,e)}if(t){for(let e=0;e<he.length;e+=2)he[e][0](he[e+1]);he.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,l=A){const r=[c,l];return o.push(r),1===o.length&&(n=t(s)||A),c(e),()=>{const e=o.indexOf(r);-1!==e&&o.splice(e,1),0===o.length&&(n(),n=null)}}}}function ye(e){var t,n,o;const s=e.$$slots.default,c=K(s,e,null);return{c(){t=J("div"),c&&c.c(),U(t,"class","svelte-tabs"),o=Q(t,"keydown",e.handleKeyDown)},l(e){c&&c.l(div_nodes)},m(e,o){G(e,t,o),c&&c.m(t,null),n=!0},p(e,t){c&&c.p&&e.$$scope&&c.p(z(s,t,e,null),M(s,t,null))},i(e){n||(ie(c,e),n=!0)},o(e){de(c,e),n=!1},d(e){e&&H(t),c&&c.d(e),o()}}}const ve={};function xe(e,t,n){var o;e.push(t),n.update(e=>e||t),o=(()=>(function(e,t,n){const o=e.indexOf(t);e.splice(o,1),n.update(n=>n===t?e[o]||e[e.length-1]:n)})(e,t,n)),X().$$.on_destroy.push(o)}function _e(e,t,n){let o;const s=[],c=[],l=[],r=ge({}),a=ge({}),$=ge(null);D(e,$,e=>{n("$selectedTab",o=e)});const u=ge(null);function i(e){const t=c.indexOf(e);$.set(e),u.set(l[t])}var d,f,p;d=ve,f={registerTab(e){xe(c,e,$)},registerTabElement(e){s.push(e)},registerPanel(e){xe(l,e,u)},selectTab:i,selectedTab:$,selectedPanel:u,controls:r,labeledBy:a},X().$$.context.set(d,f),p=(()=>{for(let e=0;e<c.length;e++)r.update(t=>({...t,[c[e].id]:l[e].id})),a.update(t=>({...t,[l[e].id]:c[e].id}))}),X().$$.after_update.push(p);let{$$slots:b={},$$scope:m}=t;return e.$set=(e=>{"$$scope"in e&&n("$$scope",m=e.$$scope)}),{selectedTab:$,handleKeyDown:async function(e){if(e.target.classList.contains("svelte-tabs__tab")){let t=c.indexOf(o);switch(e.key){case"ArrowRight":(t+=1)>c.length-1&&(t=0),i(c[t]),s[t].focus();break;case"ArrowLeft":(t-=1)<0&&(t=c.length-1),i(c[t]),s[t].focus()}}},$$slots:b,$$scope:m}}class we extends pe{constructor(e){super(),fe(this,e,_e,ye,q,[])}}function Te(e){var t,n,o,s,c;const l=e.$$slots.default,r=K(l,e,null);return{c(){t=J("li"),r&&r.c(),U(t,"role","tab"),U(t,"id",e.tab.id),U(t,"aria-controls",n=e.$controls[e.tab.id]),U(t,"aria-selected",e.isSelected),U(t,"tabindex",o=e.isSelected?0:-1),U(t,"class","svelte-tabs__tab svelte-1fbofsd"),V(t,"svelte-tabs__selected",e.isSelected),c=Q(t,"click",e.click_handler)},l(e){r&&r.l(li_nodes)},m(n,o){G(n,t,o),r&&r.m(t,null),e.li_binding(t),s=!0},p(e,c){r&&r.p&&e.$$scope&&r.p(z(l,c,e,null),M(l,c,null)),s&&!e.$controls||n===(n=c.$controls[c.tab.id])||U(t,"aria-controls",n),s&&!e.isSelected||U(t,"aria-selected",c.isSelected),s&&!e.isSelected||o===(o=c.isSelected?0:-1)||U(t,"tabindex",o),e.isSelected&&V(t,"svelte-tabs__selected",c.isSelected)},i(e){s||(ie(r,e),s=!0)},o(e){de(r,e),s=!1},d(n){n&&H(t),r&&r.d(n),e.li_binding(null),c()}}}function Ee(e,t,n){let o,s,c;const l={id:me()},{registerTab:r,registerTabElement:a,selectTab:$,selectedTab:u,controls:i}=Y(ve);let d;var f;D(e,u,e=>{n("$selectedTab",o=e)}),D(e,i,e=>{n("$controls",s=e)}),r(l),f=(async()=>{await(ce(),oe),a(c)}),X().$$.on_mount.push(f);let{$$slots:p={},$$scope:b}=t;return e.$set=(e=>{"$$scope"in e&&n("$$scope",b=e.$$scope)}),e.$$.update=((e={$selectedTab:1})=>{e.$selectedTab&&n("isSelected",d=o===l)}),{tabEl:c,tab:l,selectTab:$,selectedTab:u,controls:i,isSelected:d,$controls:s,li_binding:function(e){ee[e?"unshift":"push"](()=>{n("tabEl",c=e)})},click_handler:function(){return $(l)},$$slots:p,$$scope:b}}class Ce extends pe{constructor(e){var t;super(),document.getElementById("svelte-1fbofsd-style")||((t=J("style")).id="svelte-1fbofsd-style",t.textContent=".svelte-tabs__tab.svelte-1fbofsd{border:none;border-bottom:2px solid transparent;color:#000000;cursor:pointer;list-style:none;display:inline-block;padding:0.5em 0.75em}.svelte-tabs__tab.svelte-1fbofsd:focus{outline:thin dotted}.svelte-tabs__selected.svelte-1fbofsd{border-bottom:2px solid #4F81E5;color:#4F81E5}",R(document.head,t)),fe(this,e,Ee,Te,q,[])}}function Se(e){var t,n;const o=e.$$slots.default,s=K(o,e,null);return{c(){t=J("ul"),s&&s.c(),U(t,"role","tablist"),U(t,"class","svelte-tabs__tab-list svelte-12yby2a")},l(e){s&&s.l(ul_nodes)},m(e,o){G(e,t,o),s&&s.m(t,null),n=!0},p(e,t){s&&s.p&&e.$$scope&&s.p(z(o,t,e,null),M(o,t,null))},i(e){n||(ie(s,e),n=!0)},o(e){de(s,e),n=!1},d(e){e&&H(t),s&&s.d(e)}}}function Pe(e,t,n){let{$$slots:o={},$$scope:s}=t;return e.$set=(e=>{"$$scope"in e&&n("$$scope",s=e.$$scope)}),{$$slots:o,$$scope:s}}class ke extends pe{constructor(e){var t;super(),document.getElementById("svelte-12yby2a-style")||((t=J("style")).id="svelte-12yby2a-style",t.textContent=".svelte-tabs__tab-list.svelte-12yby2a{border-bottom:1px solid #CCCCCC;margin:0;padding:0}",R(document.head,t)),fe(this,e,Pe,Se,q,[])}}function Be(e){var t;const n=e.$$slots.default,o=K(n,e,null);return{c(){o&&o.c()},l(e){o&&o.l(e)},m(e,n){o&&o.m(e,n),t=!0},p(e,t){o&&o.p&&e.$$scope&&o.p(z(n,t,e,null),M(n,t,null))},i(e){t||(ie(o,e),t=!0)},o(e){de(o,e),t=!1},d(e){o&&o.d(e)}}}function Oe(e){var t,n,o,s=e.$selectedPanel===e.panel&&Be(e);return{c(){t=J("div"),s&&s.c(),U(t,"id",e.panel.id),U(t,"aria-labelledby",n=e.$labeledBy[e.panel.id]),U(t,"class","svelte-tabs__tab-panel svelte-epfyet"),U(t,"role","tabpanel")},m(e,n){G(e,t,n),s&&s.m(t,null),o=!0},p(e,c){c.$selectedPanel===c.panel?s?(s.p(e,c),ie(s,1)):((s=Be(c)).c(),ie(s,1),s.m(t,null)):s&&(ue={r:0,c:[],p:ue},de(s,1,1,()=>{s=null}),ue.r||F(ue.c),ue=ue.p),o&&!e.$labeledBy||n===(n=c.$labeledBy[c.panel.id])||U(t,"aria-labelledby",n)},i(e){o||(ie(s),o=!0)},o(e){de(s),o=!1},d(e){e&&H(t),s&&s.d()}}}function Ae(e,t,n){let o,s;const c={id:me()},{registerPanel:l,selectedPanel:r,labeledBy:a}=Y(ve);D(e,r,e=>{n("$selectedPanel",s=e)}),D(e,a,e=>{n("$labeledBy",o=e)}),l(c);let{$$slots:$={},$$scope:u}=t;return e.$set=(e=>{"$$scope"in e&&n("$$scope",u=e.$$scope)}),{panel:c,selectedPanel:r,labeledBy:a,$labeledBy:o,$selectedPanel:s,$$slots:$,$$scope:u}}class Le extends pe{constructor(e){var t;super(),document.getElementById("svelte-epfyet-style")||((t=J("style")).id="svelte-epfyet-style",t.textContent=".svelte-tabs__tab-panel.svelte-epfyet{margin-top:0.5em}",R(document.head,t)),fe(this,e,Ae,Oe,q,[])}}function Ne(e){var t;return{c(){t=$("One")},m(e,n){l(e,t,n)},d(e){e&&r(t)}}}function je(e){var t;return{c(){t=$("Two")},m(e,n){l(e,t,n)},d(e){e&&r(t)}}}function Fe(e){var t;return{c(){t=$("Three")},m(e,n){l(e,t,n)},d(e){e&&r(t)}}}function Ie(e){var t,n,o,s=new Ce({props:{$$slots:{default:[Ne]},$$scope:{ctx:e}}}),c=new Ce({props:{$$slots:{default:[je]},$$scope:{ctx:e}}}),a=new Ce({props:{$$slots:{default:[Fe]},$$scope:{ctx:e}}});return{c(){s.$$.fragment.c(),t=u(),c.$$.fragment.c(),n=u(),a.$$.fragment.c()},m(e,r){S(s,e,r),l(e,t,r),S(c,e,r),l(e,n,r),S(a,e,r),o=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n);var o={};e.$$scope&&(o.$$scope={changed:e,ctx:t}),c.$set(o);var l={};e.$$scope&&(l.$$scope={changed:e,ctx:t}),a.$set(l)},i(e){o||(E(s.$$.fragment,e),E(c.$$.fragment,e),E(a.$$.fragment,e),o=!0)},o(e){C(s.$$.fragment,e),C(c.$$.fragment,e),C(a.$$.fragment,e),o=!1},d(e){P(s,e),e&&r(t),P(c,e),e&&r(n),P(a,e)}}}function qe(e){var t;return{c(){(t=a("h2")).textContent="Panel One"},m(e,n){l(e,t,n)},d(e){e&&r(t)}}}function De(e){var t;return{c(){(t=a("h2")).textContent="Panel Two"},m(e,n){l(e,t,n)},d(e){e&&r(t)}}}function Ke(e){var t;return{c(){(t=a("h2")).textContent="Panel Three"},m(e,n){l(e,t,n)},d(e){e&&r(t)}}}function Me(e){var t,n,o,s,c=new ke({props:{$$slots:{default:[Ie]},$$scope:{ctx:e}}}),a=new Le({props:{$$slots:{default:[qe]},$$scope:{ctx:e}}}),$=new Le({props:{$$slots:{default:[De]},$$scope:{ctx:e}}}),i=new Le({props:{$$slots:{default:[Ke]},$$scope:{ctx:e}}});return{c(){c.$$.fragment.c(),t=u(),a.$$.fragment.c(),n=u(),$.$$.fragment.c(),o=u(),i.$$.fragment.c()},m(e,r){S(c,e,r),l(e,t,r),S(a,e,r),l(e,n,r),S($,e,r),l(e,o,r),S(i,e,r),s=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),c.$set(n);var o={};e.$$scope&&(o.$$scope={changed:e,ctx:t}),a.$set(o);var s={};e.$$scope&&(s.$$scope={changed:e,ctx:t}),$.$set(s);var l={};e.$$scope&&(l.$$scope={changed:e,ctx:t}),i.$set(l)},i(e){s||(E(c.$$.fragment,e),E(a.$$.fragment,e),E($.$$.fragment,e),E(i.$$.fragment,e),s=!0)},o(e){C(c.$$.fragment,e),C(a.$$.fragment,e),C($.$$.fragment,e),C(i.$$.fragment,e),s=!1},d(e){P(c,e),e&&r(t),P(a,e),e&&r(n),P($,e),e&&r(o),P(i,e)}}}function ze(e){var t,n,o,s=new we({props:{$$slots:{default:[Me]},$$scope:{ctx:e}}});return{c(){(t=a("h1")).textContent="Svelte Tabs",n=u(),s.$$.fragment.c()},m(e,c){l(e,t,c),l(e,n,c),S(s,e,c),o=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){o||(E(s.$$.fragment,e),o=!0)},o(e){C(s.$$.fragment,e),o=!1},d(e){e&&(r(t),r(n)),P(s,e)}}}return new class extends O{constructor(e){super(),B(this,e,null,ze,c,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map