(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{102:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return l}));var n=t(2),o=t(6),c=(t(0),t(107)),r={title:"10. Launching our stakepool",description:"Launching our Cardano stakepool.",keywords:["cardano","blockchain","stakepool","staking","stake","how to","create","your","guide","documentation","proof of africa","poa","poapool","charles hoskinson","bitcoin","ethereum","ouroboros","proof of stake","pos","education","delegate","pledge"],image:"https://i.imgur.com/3V57abJ.png"},i={unversionedId:"english/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/launching-the-stakepool",id:"english/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/launching-the-stakepool",isDocsHomePage:!1,title:"10. Launching our stakepool",description:"Launching our Cardano stakepool.",source:"@site/docs/english/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/launching-the-stakepool.md",permalink:"/docs/english/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/launching-the-stakepool",sidebar:"docs",previous:{title:"9. Backing up your files",permalink:"/docs/english/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/backing-up-your-files"},next:{title:"Bienvenue!",permalink:"/docs/francais/Welcomefr"}},b=[{value:"Configuring the <em>topology.json</em> file on your <em>bp-node</em>",id:"configuring-the-topologyjson-file-on-your-bp-node",children:[]},{value:"Configuring the <em>topology.json</em> file on your <em>relay-node</em>",id:"configuring-the-topologyjson-file-on-your-relay-node",children:[]}],s={rightToc:b};function l(e){var a=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"IT'S TIME!!!"),Object(c.b)("p",null,"Yes! We are now finally going to launch the stakepool. But just before, we need to change some things in the ",Object(c.b)("em",{parentName:"p"},"topology.json")," files of our block-producing node, and our relay node."),Object(c.b)("h3",{id:"configuring-the-topologyjson-file-on-your-bp-node"},"Configuring the ",Object(c.b)("em",{parentName:"h3"},"topology.json")," file on your ",Object(c.b)("em",{parentName:"h3"},"bp-node")),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"topology.json")," file is for a node, what a map was for Marco Polo. It really is like a map for a node, as it gives all the necessary info for it to reach other nodes. It's ",Object(c.b)("strong",{parentName:"p"},"incredibly")," important."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.01")," Log into the VPS of your block-producing node."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.02")," Execute the following command to modify the ",Object(c.b)("em",{parentName:"p"},"topology.json")," file:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"nano cardano-node/bp-node/mainnet-topology.json\n")),Object(c.b)("p",null,"You should normally see something like this:"),Object(c.b)("p",null,Object(c.b)("img",{src:t(131).default})),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.03")," Remove everything, and copy paste this instead:"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Replace TheIPaddressOfYourRelayNodeVPS with the IP address of your relay's VPS."))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'{\n"Producers": [\n  {\n    "addr": "TheIPaddressOfYourRelayNodeVPS",\n    "port": 3000,\n    "valency": 1\n  }\n]\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.04")," Save the file, leave the editor, and let's modify the ",Object(c.b)("em",{parentName:"p"},".bashrc")," file to do some magic:"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"To go back to the Terminal, press ",Object(c.b)("em",{parentName:"p"},"ctrl+o")," to save the file, and ",Object(c.b)("em",{parentName:"p"},"ctrl + x")," to quit."))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"nano .bashrc\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.05")," Add the following to your ",Object(c.b)("em",{parentName:"p"},".bashrc")," file:"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Replace ",Object(c.b)("em",{parentName:"p"},"YourUserNameOnYourVPS")," with the username you are using on your bp-node's VPS.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Replace ",Object(c.b)("em",{parentName:"p"},"TheIPaddressOfYourVPS")," with the IP address of your bp-node's VPS."))),Object(c.b)("p",{parentName:"div"},"In my case, the command looks like this:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'alias bplaunch="cardano-node run --topology /home/foufnir/cardano-node/bp-node/mainnet-topology.json --database-path /home/foufnir/cardano-node/bp-node/db --socket-path /home/foufnir/cardano-node/bp-node/db/node.socket --host-addr I\'m-Not-Giving-You-The-IP --port 3000 --config /home/foufnir/cardano-node/bp-node/mainnet-config.json --shelley-kes-key /home/foufnir/cardano-node/pool-keys/kes.skey --shelley-vrf-key /home/foufnir/cardano-node/pool-keys/vrf.skey --shelley-operational-certificate /home/foufnir/cardano-node/pool-keys/node.cert"\n')))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'alias bplaunch="cardano-node run --topology /home/YourUserNameOnYourVPS/cardano-node/bp-node/mainnet-topology.json --database-path /home/YourUserNameOnYourVPS/cardano-node/bp-node/db --socket-path /home/YourUserNameOnYourVPS/cardano-node/bp-node/db/node.socket --host-addr TheIPaddressOfYourVPS --port 3000 --config /home/YourUserNameOnYourVPS/cardano-node/bp-node/mainnet-config.json --shelley-kes-key /home/YourUserNameOnYourVPS/cardano-node/pool-keys/kes.skey --shelley-vrf-key /home/YourUserNameOnYourVPS/cardano-node/pool-keys/vrf.skey --shelley-operational-certificate /home/YourUserNameOnYourVPS/cardano-node/pool-keys/node.cert"\n')),Object(c.b)("p",null,Object(c.b)("img",{src:t(295).default})),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.06")," Save the file, leave the editor, and refresh the ",Object(c.b)("em",{parentName:"p"},".bashrc")," file:"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"To go back to the Terminal, save the file with ",Object(c.b)("em",{parentName:"p"},"ctrl + o"),", and leave the editor with ",Object(c.b)("em",{parentName:"p"},"ctrl + x"),"."))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"source .bashrc\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.07")," Time to launch the ",Object(c.b)("em",{parentName:"p"},"bp-node"),"! Execute the following command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"bplaunch\n")),Object(c.b)("p",null,"Boom! Magic. You should now see your node launching."),Object(c.b)("p",null,"Though, we still need to configure the relay node to interact with the ",Object(c.b)("em",{parentName:"p"},"bp-node"),"."),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Are you delegating to POA?")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If not, please do. It's the only way we generate funds, which we can afterwards use to invest in our activities in Africa to get Cardano adopted there, but also to create more of the guides like the one you are currently using to create your stakepool."),Object(c.b)("p",{parentName:"div"},"Our ticker is ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"https://adapools.org/pool/683e89fa1bcde139504b11fbfd914f8ebe9b8db2678b3da0abdcb2f1"}),"POA")),". You know what to do."),Object(c.b)("p",{parentName:"div"},Object(c.b)("strong",{parentName:"p"},"Make the difference. #StakeWithAfrica")))),Object(c.b)("h3",{id:"configuring-the-topologyjson-file-on-your-relay-node"},"Configuring the ",Object(c.b)("em",{parentName:"h3"},"topology.json")," file on your ",Object(c.b)("em",{parentName:"h3"},"relay-node")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.08")," Log into the VPS of your relay-node node."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.02")," Execute the following command to modify the ",Object(c.b)("em",{parentName:"p"},"topology.json")," file:"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Due to the fact you used the same guide to create the ",Object(c.b)("em",{parentName:"p"},"relay-node"),", you have likely called the relay's folder ",Object(c.b)("em",{parentName:"p"},"bp-node"),". If you want, you can modify its name for better clarity, however, you will also then have to modify every time the name of the folder in the following commands."))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"nano cardano-node/bp-node/mainnet-topology.json\n")),Object(c.b)("p",null,"You should normally see something like this:"),Object(c.b)("p",null,Object(c.b)("img",{src:t(131).default})),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.03")," Remove everything, and copy paste this instead:"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Replace TheIPaddressOfYourBlockProducingNodeVPS with the IP address of your bp-node's VPS."))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'{\n"Producers": [\n  {\n  "addr": "relays-new.cardano-mainnet.iohk.io",\n  "port": 3001,\n  "valency": 2\n  },\n  {\n    "addr": "TheIPaddressOfYourBlockProducingNodeVPS",\n    "port": 3000,\n    "valency": 1\n  }\n]\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.04")," Save the file, leave the editor, and let's modify the ",Object(c.b)("em",{parentName:"p"},".bashrc")," file to do some magic:"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"To go back to the Terminal, press ",Object(c.b)("em",{parentName:"p"},"ctrl+o")," to save the file, and ",Object(c.b)("em",{parentName:"p"},"ctrl + x")," to quit."))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"nano .bashrc\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.05")," Add the following to your ",Object(c.b)("em",{parentName:"p"},".bashrc")," file:"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Replace ",Object(c.b)("em",{parentName:"p"},"YourUserNameOnYourVPS")," with the username you are using on your relay-node's VPS.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Replace ",Object(c.b)("em",{parentName:"p"},"TheIPaddressOfYourVPS")," with the IP address of your relay-node's VPS."))),Object(c.b)("p",{parentName:"div"},"In my case, the command looks like this:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'alias relaylaunch="cardano-node run --topology /home/foufnir/cardano-node/bp-node/mainnet-topology.json --database-path /home/foufnir/cardano-node/bp-node/db --socket-path /home/foufnir/cardano-node/bp-node/db/node.socket --host-addr I\'m-Not-Giving-You-The-IP --port 3000 --config /home/foufnir/cardano-node/bp-node/mainnet-config.json"\n')))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'alias relaylaunch="cardano-node run --topology /home/YourUserNameOnYourVPS/cardano-node/bp-node/mainnet-topology.json --database-path /home/YourUserNameOnYourVPS/cardano-node/bp-node/db --socket-path /home/YourUserNameOnYourVPS/cardano-node/bp-node/db/node.socket --host-addr TheIPaddressOfYourVPS --port 3000 --config /home/YourUserNameOnYourVPS/cardano-node/bp-node/mainnet-config.json"\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.06")," Save the file, leave the editor, and refresh the ",Object(c.b)("em",{parentName:"p"},".bashrc")," file:"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"To go back to the Terminal, save the file with ",Object(c.b)("em",{parentName:"p"},"ctrl + o"),", and leave the editor with ",Object(c.b)("em",{parentName:"p"},"ctrl + x"),"."))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"source .bashrc\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10.07")," Time to launch the ",Object(c.b)("em",{parentName:"p"},"relay-node"),"! Execute the following command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"relaylaunch\n")),Object(c.b)("p",null,"Boom! Magic. You should now see your node launching."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Become part of the POA community!")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If you want to meet other builders and global shapers, make sure to join our ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"https://t.me/poapool"}),"Telegram chat")),", where most of our community is hanging out. Oh, and if you have a question, you can also ask it there!"))))}l.isMDXComponent=!0},107:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return h}));var n=t(0),o=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var a=o.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=l(e.components);return o.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},m=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),d=l(t),m=n,h=d["".concat(r,".").concat(m)]||d[m]||p[m]||c;return t?o.a.createElement(h,i(i({ref:a},s),{},{components:t})):o.a.createElement(h,i({ref:a},s))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,r=new Array(c);r[0]=m;var i={};for(var b in a)hasOwnProperty.call(a,b)&&(i[b]=a[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var s=2;s<c;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},131:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/launching-the-stakepool_topology-dot-json-change-bp-before-29384e21c45260826b06d569a08effe5.png"},295:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/launching-the-stakepool__bplaunch-120dcab3a3c1f986ce16d876e249ea36.png"}}]);