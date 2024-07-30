var P=Object.defineProperty;var _=(e,t,s)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var A=(e,t,s)=>_(e,typeof t!="symbol"?t+"":t,s);import{r as c,q,t as G,n as J,v as W,u as Y,o as B,j as i,w as k,x as D}from"./index-CcV0cHIe.js";const H=(...e)=>{console!=null&&console.warn&&(p(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},I={},T=(...e)=>{p(e[0])&&I[e[0]]||(p(e[0])&&(I[e[0]]=new Date),H(...e))},$=(e,t)=>()=>{if(e.isInitialized)t();else{const s=()=>{setTimeout(()=>{e.off("initialized",s)},0),t()};e.on("initialized",s)}},F=(e,t,s)=>{e.loadNamespaces(t,$(e,s))},M=(e,t,s,o)=>{p(s)&&(s=[s]),s.forEach(u=>{e.options.ns.indexOf(u)<0&&e.options.ns.push(u)}),e.loadLanguages(t,$(e,o))},K=(e,t,s={})=>!t.languages||!t.languages.length?(T("i18n.languages were undefined or empty",t.languages),!0):t.hasLoadedNamespace(e,{lng:s.lng,precheck:(o,u)=>{var n;if(((n=s.bindI18n)==null?void 0:n.indexOf("languageChanging"))>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!u(o.isLanguageChangingTo,e))return!1}}),p=e=>typeof e=="string",Q=e=>typeof e=="object"&&e!==null,X=c.createContext();class Z{constructor(){A(this,"getUsedNamespaces",()=>Object.keys(this.usedNamespaces));this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(s=>{var o;(o=this.usedNamespaces)[s]??(o[s]=!0)})}}const V=(e,t)=>{const s=c.useRef();return c.useEffect(()=>{s.current=e},[e,t]),s.current},O=(e,t,s,o)=>e.getFixedT(t,s,o),ee=(e,t,s,o)=>c.useCallback(O(e,t,s,o),[e,t,s,o]),te=(e,t={})=>{var L,R,U,z;const{i18n:s}=t,{i18n:o,defaultNS:u}=c.useContext(X)||{},n=s||o||G();if(n&&!n.reportNamespaces&&(n.reportNamespaces=new Z),!n){T("You will need to pass in an i18next instance by using initReactI18next");const r=(m,h)=>p(h)?h:Q(h)&&p(h.defaultValue)?h.defaultValue:Array.isArray(m)?m[m.length-1]:m,f=[r,{},!1];return f.t=r,f.i18n={},f.ready=!1,f}(L=n.options.react)!=null&&L.wait&&T("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const l={...q(),...n.options.react,...t},{useSuspense:x,keyPrefix:N}=l;let a=u||((R=n.options)==null?void 0:R.defaultNS);a=p(a)?[a]:a||["translation"],(z=(U=n.reportNamespaces).addUsedNamespaces)==null||z.call(U,a);const d=(n.isInitialized||n.initializedStoreOnce)&&a.every(r=>K(r,n,l)),S=ee(n,t.lng||null,l.nsMode==="fallback"?a:a[0],N),g=()=>S,y=()=>O(n,t.lng||null,l.nsMode==="fallback"?a:a[0],N),[E,j]=c.useState(g);let C=a.join();t.lng&&(C=`${t.lng}${C}`);const v=V(C),b=c.useRef(!0);c.useEffect(()=>{const{bindI18n:r,bindI18nStore:f}=l;b.current=!0,!d&&!x&&(t.lng?M(n,t.lng,a,()=>{b.current&&j(y)}):F(n,a,()=>{b.current&&j(y)})),d&&v&&v!==C&&b.current&&j(y);const m=()=>{b.current&&j(y)};return r&&(n==null||n.on(r,m)),f&&(n==null||n.store.on(f,m)),()=>{b.current=!1,n&&(r==null||r.split(" ").forEach(h=>n.off(h,m))),f&&n&&f.split(" ").forEach(h=>n.store.off(h,m))}},[n,C]),c.useEffect(()=>{b.current&&d&&j(g)},[n,N,d]);const w=[E,n,d];if(w.t=E,w.i18n=n,w.ready=d,d||!d&&!x)return w;throw new Promise(r=>{t.lng?M(n,t.lng,a,()=>r()):F(n,a,()=>r())})},ne="_btn1_c8ybl_1",se={btn1:ne},ae=()=>{const{addUser:e,disabled:t}=c.useContext(J),[s,o]=c.useState({name:"",age:""}),u=c.useRef(),n=W(),{t:l,i18n:x}=te(),N=Y(g=>g.language.language),a=B(),d=g=>{g.preventDefault(),e(s),o({name:"",age:""}),n("/users"),console.log(u),a(D(1))};c.useEffect(()=>{u.current.focus()},[]);const S=g=>{console.log(g.target.name),o(y=>({...y,[g.target.name]:g.target.value}))};return i.jsxs("div",{dir:`${N==="en"?"ltr":"rtl"}`,style:{width:"80%",margin:"0 auto"},children:[N,x.language==="en"&&i.jsx("button",{onClick:()=>{x.changeLanguage("ar"),a(k("ar"))},children:"Ar"}),x.language==="ar"&&i.jsx("button",{onClick:()=>{x.changeLanguage("en"),a(k("en"))},children:"En"}),i.jsx("h1",{children:l("Add User")}),i.jsxs("form",{onSubmit:d,children:[i.jsxs("label",{children:[l("Name")," : "]}),i.jsx("input",{ref:u,name:"name",value:s.name,onChange:S}),i.jsx("br",{}),i.jsxs("label",{children:[l("Age")," : "]}),i.jsx("input",{name:"age",value:s.age,onChange:S}),i.jsx("br",{}),i.jsx("input",{className:se.btn1,disabled:t,type:"submit",value:l("Submit")})]})]})},ie=()=>i.jsx(ae,{});export{ie as default};