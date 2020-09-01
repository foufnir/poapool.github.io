(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{107:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),l=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return t?o.a.createElement(b,u(u({ref:n},c),{},{components:t})):o.a.createElement(b,u({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(6),a=(t(0),t(107)),i={title:"1. Introduction",description:"Introduction au guide POA pour la cr\xe9ation d'une stake pool Cardano (Mainnet) sur fonctionnant sur VPS",keywords:["cardano","blockchain","stakepool","staking","stake","how to","create","your","guide","documentation","proof of africa","poa","poapool","charles hoskinson","bitcoin","ethereum","ouroboros","proof of stake","pos","education","delegate","pledge"],image:"https://i.imgur.com/3V57abJ.png"},u={unversionedId:"francais/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/introduction",id:"francais/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/introduction",isDocsHomePage:!1,title:"1. Introduction",description:"Introduction au guide POA pour la cr\xe9ation d'une stake pool Cardano (Mainnet) sur fonctionnant sur VPS",source:"@site/docs/francais/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/introduction.md",permalink:"/docs/francais/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/introduction",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/francais/cardano-stakepool-mainnet-guide/virtualbox/Introduction"},next:{title:"2. Configuration du serveur (DigitalOcean)",permalink:"/docs/francais/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/server-setup-digitalocean"}},s=[{value:"Qu&#39;est-ce qu&#39;un VPS?",id:"quest-ce-quun-vps",children:[]},{value:"De combien de VPS ai-je besoin pour g\xe9rer une stake pool?",id:"de-combien-de-vps-ai-je-besoin-pour-g\xe9rer-une-stake-pool",children:[]},{value:"Quel fournisseur de VPS dois-je choisir?",id:"quel-fournisseur-de-vps-dois-je-choisir",children:[]},{value:"Quel syst\xe8me d&#39;exploitation dois-je utiliser sur mes VPS?",id:"quel-syst\xe8me-dexploitation-dois-je-utiliser-sur-mes-vps",children:[]},{value:"Quelle configuration allons-nous utiliser dans ce guide?",id:"quelle-configuration-allons-nous-utiliser-dans-ce-guide",children:[]}],c={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Dans ce guide, nous allons cr\xe9er une stake pool op\xe9rant enti\xe8rement dans le cloud \xe0 partir de z\xe9ro gr\xe2ce \xe0 l'utilisation d'un VPS."),Object(a.b)("h3",{id:"quest-ce-quun-vps"},"Qu'est-ce qu'un VPS?"),Object(a.b)("p",null,"VPS signifie ",Object(a.b)("strong",{parentName:"p"},"Virtual Private Server, ou Serveur Virtuel Priv\xe9"),". Vous pouvez le voir comme un ordinateur fonctionnant dans le cloud et que vous pouvez louer."),Object(a.b)("h3",{id:"de-combien-de-vps-ai-je-besoin-pour-g\xe9rer-une-stake-pool"},"De combien de VPS ai-je besoin pour g\xe9rer une stake pool?"),Object(a.b)("p",null,"Id\xe9alement, 3 (selon les r\xe9commandations d'IOHK). Mais plus il y en a, mieux c'est, l'id\xe9e est de d\xe9centraliser autant que possible votre infrastructure, pour r\xe9duire les risques de d\xe9faillance. Pour cette raison, vous ne voulez clairement pas faire fonctionner tous vos noeuds sur le m\xeame serveur, car cela rendrait votre noeud producteur de blocs vuln\xe9rable aux attaques (nous expliquerons l'architecture plus en d\xe9tail dans la suite de ce guide)."),Object(a.b)("p",null,"Dans un monde parfait, vous feriez fonctionner votre noeud producteur de blocs sur un serveur sp\xe9cifique. Et chacun de vos noeuds relais serait sur un serveur diff\xe9rent, avec un fournisseur diff\xe9rent. Mais c'est bien s\xfbr le cas id\xe9al. Tout le monde ne peut pas se permettre de payer plusieurs serveurs chaque mois. Donc, ce que la plupart des op\xe9rateurs de stake pool ont, c'est un serveur sp\xe9cifique pour leur noeud producteur de blocs, puis un serveur diff\xe9rent (parfois avec le m\xeame fournisseur) pour leurs 2 noeuds relais."),Object(a.b)("h3",{id:"quel-fournisseur-de-vps-dois-je-choisir"},"Quel fournisseur de VPS dois-je choisir?"),Object(a.b)("p",null,"Il existe de nombreux fournisseurs de VPS, notamment AWS, Google Cloud, Microsoft Azure et DigitalOcean. Chez POA, nous utilisons CLOUD.co.za, un fournisseur sud-africain. Mais c'est surtout parce que nous voulons \xeatre enti\xe8rement bas\xe9s en Afrique. Si vous recherchez un fournisseur VPS, nous vous recommandons DigitalOcean, car la configuration est tr\xe8s facile, c'est financi\xe8rement assez abordable, ",Object(a.b)("strong",{parentName:"p"},"nous ferons l'ensemble du guide en utilisant DigitalOcean"),"."),Object(a.b)("p",null,"Cependant, notez que vous pouvez utiliser le fournisseur de votre choix, le fonctionement sera presque toujours le m\xeame."),Object(a.b)("h3",{id:"quel-syst\xe8me-dexploitation-dois-je-utiliser-sur-mes-vps"},"Quel syst\xe8me d'exploitation dois-je utiliser sur mes VPS?"),Object(a.b)("p",null,"Dans ce guide, nous utiliserons la distribution Linux Ubuntu sur nos VPS. Qu'il s'agisse d'Ubuntu 18.04 ou 20.04, cela n'a pas vraiment d'importance. Mais la version pr\xe9f\xe9r\xe9e est bien s\xfbr la derni\xe8re version stable."),Object(a.b)("h3",{id:"quelle-configuration-allons-nous-utiliser-dans-ce-guide"},"Quelle configuration allons-nous utiliser dans ce guide?"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Dans ce guide, nous allons configurer notre stake pool en utilisant deux VPS sur DigitalOcean. Un VPS avec notre noeud producteur de blocs, et l'autre avec nos deux noeuds relais.")),Object(a.b)("p",null,"Ce n'est certainement pas la configuration parfaite, mais c'est la plus coh\xe9rente \xe9conomiquement parlant, ainsi qu'en termes d'exp\xe9rience utilisateur. Si vous souhaitez configurer un troisi\xe8me VPS pour avoir une configuration optimale, il vous suffira de refaire ce que vous avez fait pour le deuxi\xe8me serveur."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Chacun de nos serveurs aura 4 Go de RAM et 80 Go de SSD. Le processeur n'a pas vraiment d'importance, la RAM en a, et plus vous avez de stockage SSD, mieux ce sera sur le long terme.")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Rejoignez la communaut\xe9 POA!")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Si vous souhaitez rencontrer d'autres d\xe9veloppeurs et b\xe2tisseurs du monde de demain, assurez-vous de rejoindre notre fil ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"https://t.me/poapool"}),"Telegram")),", o\xf9 la plupart de notre communaut\xe9 se retrouve pour \xe9changer. Et si vous avez une question, c'est aussi l'endroit parfait pour la poser!"))))}l.isMDXComponent=!0}}]);