import{m as E,u as g,_ as p,X as l,R as I,w as j,n as V,A as y,Q as H}from"./q-19c51747.js";const Q=y("qc-c"),at=y("qc-ic"),Y=y("qc-h"),z=y("qc-l"),B=y("qc-n"),N=E(g(()=>p(()=>import("./q-29e41cf6.js"),["build/q-29e41cf6.js","build/q-19c51747.js","build/q-2ab47c65.css"]),"s_nd8yk3KO22c")),R=new WeakMap,rt=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const c=o[0].exec(n);if(c){const r=o[1],i=X(o[2],c),a=o[4],f=new Array(r.length),h=[],m=M(e,n);let L;return r.forEach((_,U)=>{w(_,h,W=>f[U]=W,s)}),w(m,h,_=>L=_==null?void 0:_.default,s),h.length>0&&await Promise.all(h),[i,f,L,a]}}return null},w=(t,e,s,n)=>{if(typeof t=="function"){const o=R.get(t);if(o)s(o);else{const c=t();typeof c.then=="function"?e.push(c.then(r=>{n!==!1&&R.set(t,r),s(r)})):c&&s(c)}}},M=(t,e)=>{if(t){const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},X=(t,e)=>{const s={};if(t)for(let n=0;n<t.length;n++)s[t[n]]=e?e[n+1]:"";return s},it=(t,e,s)=>{const n=Z(),o={data:t?t.body:null,head:n,...e};for(let c=s.length-1;c>=0;c--){const r=s[c]&&s[c].head;r&&(typeof r=="function"?D(n,r(o)):typeof r=="object"&&D(n,r))}return o.head},D=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),v(t.meta,e.meta),v(t.links,e.links),v(t.styles,e.styles)},v=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},Z=()=>({title:"",meta:[],links:[],styles:[]}),lt=()=>I(Q),ft=()=>I(Y),J=()=>I(z),ht=()=>I(B),K=()=>j(V("qwikcity")),C=t=>t.pathname+t.search+t.hash,d=(t,e)=>new URL(t,e.href),O=(t,e)=>t.origin===e.origin,x=(t,e)=>t.pathname+t.search===e.pathname+e.search,F=(t,e)=>t.pathname===e.pathname,T=(t,e)=>O(t,e)&&!x(t,e),G=t=>t+(t.endsWith("/")?"":"/")+"q-data.json",ut=(t,e)=>{const s=t.href;if(typeof s=="string"&&s.trim()!==""&&typeof t.target!="string")try{const n=d(s,e),o=d("",e);if(O(n,o))return C(n)}catch(n){console.error(n)}return null},dt=(t,e,s)=>{if(t.prefetch&&e){const n=d(e,s);if(!F(n,d("",s)))return n+""}return null},pt=(t,e)=>{const s=t.location,n=d(e.path,s);T(s,n)&&(q(t,s,n),t.history.pushState("","",C(n))),t[S]||(t[S]=1,t.addEventListener("popstate",()=>{const o=t.location,c=d(e.path,o);T(o,c)&&(q(t,c,o),e.path=C(o))}))},q=async(t,e,s)=>{const n=t.document,o=s.hash;if(x(e,s))e.hash!==o&&(await P(),o?A(n,o):t.scrollTo(0,0));else if(o)for(let c=0;c<24&&(await P(),!A(n,o));c++);else await P(),t.scrollTo(0,0)},P=()=>new Promise(t=>setTimeout(t,12)),A=(t,e)=>{const s=e.slice(1),n=t.getElementById(s);return n&&n.scrollIntoView(),n},b=t=>dispatchEvent(new CustomEvent("qprefetch",{detail:t})),S=Symbol(),_t=()=>{const t=J(),e=K();return H(g(()=>p(()=>import("./q-bce25a34.js"),["build/q-bce25a34.js","build/q-19c51747.js","build/q-2ab47c65.css"]),"s_3SNE8VxnEag",[e,t]))},$=async t=>{const{cacheModules:e}=await p(()=>import("./q-38093af7.js"),["build/q-38093af7.js","build/q-19c51747.js","build/q-2ab47c65.css"]),s=new URL(t).pathname,n=G(s),o=Date.now(),c=e?6e5:15e3,r=u.findIndex(a=>a.u===n);let i=u[r];if(b({links:[s]}),!i||i.t+c<o){i={u:n,t:o,c:new Promise(a=>{fetch(n).then(f=>{const h=f.headers.get("content-type")||"";f.ok&&h.includes("json")?f.json().then(m=>{b({bundles:m.prefetch,links:[s]}),a(m)},()=>a(null)):a(null)},()=>a(null))})};for(let a=u.length-1;a>=0;a--)u[a].t+c<o&&u.splice(a,1);u.push(i)}return i.c.catch(a=>console.error(a)),i.c},u=[],tt=E(g(()=>p(()=>import("./q-28116e47.js"),["build/q-28116e47.js","build/q-19c51747.js","build/q-2ab47c65.css"]),"s_z1nvHyEppoI")),gt=E(g(()=>p(()=>import("./q-c1b32dc3.js"),["build/q-c1b32dc3.js","build/q-19c51747.js","build/q-2ab47c65.css"]),"s_mYsiJcA4IBc")),yt=(t,e)=>{var n;const s=(n=t==null?void 0:t.dataset)==null?void 0:n.prefetch;s&&(k||(k=window.innerWidth),(!e||e&&k<520)&&$(s))};let k=0;const et='((s,a,r,i)=>{r=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{i=()=>{a=e,r({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&i()}):e.active&&i()}).catch(e=>console.error(e))})([])',nt=()=>l("script",{dangerouslySetInnerHTML:et}),st=E(g(()=>p(()=>import("./q-190b74b2.js"),["build/q-190b74b2.js","build/q-19c51747.js","build/q-2ab47c65.css"]),"s_zrbrqoaqXSY")),ot=()=>l(tt,{children:[l("head",{children:[l("meta",{charSet:"utf-8"}),l(st,{})]}),l("body",{lang:"en",children:[l(N,{}),l(nt,{})]})]}),mt=Object.freeze(Object.defineProperty({__proto__:null,s_3sccYCDd1Z0:ot},Symbol.toStringTag,{value:"Module"}));export{at as C,Y as D,gt as L,z as R,rt as a,Z as b,pt as c,Q as d,B as e,ht as f,J as g,ut as h,dt as i,ft as j,lt as k,$ as l,_t as m,mt as n,yt as p,it as r,C as t,K as u};