function x(){}const A=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function B(){return Object.create(null)}function j(t){t.forEach(E)}function C(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function P(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function S(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const c of n)c(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(q(n,e))}function D(t,n,e,c){if(t){const r=y(t,n,e,c);return t[0](r)}}function y(t,n,e,c){return t[1]&&c?w(e.ctx.slice(),t[1](c(n))):e.ctx}function G(t,n,e,c){if(t[2]&&c){const r=t[2](c(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],_=Math.max(n.dirty.length,r.length);for(let u=0;u<_;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function H(t,n,e,c,r,l){if(r){const _=y(n,e,c,l);t.p(_,r)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let c=0;c<e;c++)n[c]=-1;return n}return-1}function J(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let f;function h(t){f=t}function m(){if(!f)throw new Error("Function called outside component initialization");return f}function K(t){m().$$.on_mount.push(t)}function L(t){m().$$.after_update.push(t)}function N(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(c=>c.call(this,n))}const a=[],g=[];let s=[];const p=[],k=Promise.resolve();let b=!1;function v(){b||(b=!0,k.then(z))}function Q(){return v(),k}function O(t){s.push(t)}function R(t){p.push(t)}const d=new Set;let o=0;function z(){if(o!==0)return;const t=f;do{try{for(;o<a.length;){const n=a[o];o++,h(n),M(n.$$)}}catch(n){throw a.length=0,o=0,n}for(h(null),a.length=0,o=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(a.length);for(;p.length;)p.pop()();b=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function T(t){const n=[],e=[];s.forEach(c=>t.indexOf(c)===-1?n.push(c):e.push(c)),e.forEach(c=>c()),s=n}export{E as A,a as B,v as C,L as a,g as b,D as c,G as d,w as e,J as f,I as g,N as h,R as i,O as j,U as k,P as l,A as m,x as n,K as o,C as p,B as q,j as r,F as s,Q as t,H as u,z as v,S as w,T as x,f as y,h as z};
