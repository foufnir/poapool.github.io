(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{128:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ssh_key-gen_picture-a83331878e1441c073bdba2b7f9317fb.png"},129:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ssh_key-gen_result_picture-c7f62019ce8fedc55e16a11e07fbcacd.png"},130:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/digitalocean_droplet_selection-defb6c57e286d3f2ef68f638c32f4faa.png"},131:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/digitalocean_leave_ubuntu-59ee0c95a54b7c1804bec99591d3fba5.png"},132:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/digitalocean_server_plan-b81115dcaba0e253f65f3bba092db0c8.png"},133:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/digitalocean_where_server-1069fcd9c191cb259951a62bb829616c.png"},134:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/digitalocean_server_new_ssh_key-1e9a47ee6c0cbadee4cf5b41e6178551.png"},135:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/digitalocean_ssh_key_pub-9a3c72f3bf47cb2192d46b7c29afa43e.png"},136:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/digitalocean_server_creation_adding_ssh_key-99dc25119803d55566a70673ebd592b7.png"},137:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/digitalocean_adding_ssh_key_pub_final-b103a32b013d7b2272177ee724e233a2.png"},138:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/digitalocean_server_creation_final-d3ff3707bf588ae0413dc6c397c2db51.png"},139:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/digitalocean_server_creation_final_final-7eadf0e8aeb7030eaa3df7611508d2ca.png"},140:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/logging_into_your_server_one_line-74077e3f04150c55db1b88adac69d436.png"},141:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/conection_to_server_final-b8a4bdacde30cd541822f9496fbafc2a.png"},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(2),o=a(6),r=(a(0),a(94)),c={title:"2. Server setup (DigitalOcean)",description:"Setting up the server for our Cardano stakepool.",keywords:["cardano","blockchain","stakepool","staking","stake","how to","create","your","guide","documentation","proof of africa","poa","poapool","charles hoskinson","bitcoin","ethereum","ouroboros","proof of stake","pos","education","delegate","pledge"],image:"https://i.imgur.com/3V57abJ.png"},i={unversionedId:"english/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/server-setup-digitalocean",id:"english/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/server-setup-digitalocean",isDocsHomePage:!1,title:"2. Server setup (DigitalOcean)",description:"Setting up the server for our Cardano stakepool.",source:"@site/docs/english/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/server-setup-digitalocean.md",permalink:"/docs/english/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/server-setup-digitalocean",sidebar:"docs",previous:{title:"1. Introduction",permalink:"/docs/english/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/introduction"},next:{title:"3. Configuring our server",permalink:"/docs/english/cardano-stakepool-mainnet-guide/vps/creating-the-stakepool/server-configuration"}},s=[{value:"Generating your SSH keys",id:"generating-your-ssh-keys",children:[]},{value:"Creating your DigitalOcean server",id:"creating-your-digitalocean-server",children:[]},{value:"Connecting to your server",id:"connecting-to-your-server",children:[]}],b={rightToc:s};function l(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"OK! In this second part of the guide, we will be setting up our first server on DigitalOcean. If you are using another cloud provider, feel free to skip this step, and go directly to the third part of the guide."),Object(r.b)("h3",{id:"generating-your-ssh-keys"},"Generating your SSH keys"),Object(r.b)("p",null,"There are two ways to connect to a server. The first one, is by using a password. This is commonly considered as not optimal, simply because passwords can be hacked. To connect to our servers, we will thus be using what is called an SSH connection. This means we will need to generate SSH keys, one public key, and one private. Like in crypto, you want to keep your private key private, but your public key can of course be public. That's how simple it is."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.01")," Open the ",Object(r.b)("strong",{parentName:"p"},"terminal"),", and execute the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"cd .ssh\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you don't have this .ssh folder, no worries. You can create one with the following command:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"mkdir .ssh\n")),Object(r.b)("p",{parentName:"div"},"And you can enter it with the following command:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"cd .ssh\n")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.02")," Now we are into the .ssh folder, we can create an SSH key pair with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"ssh key-gen\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.03"),' Enter "myssh" as name.'),Object(r.b)("p",null,Object(r.b)("img",{src:a(128).default})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.04")," Now enter a password, confirm it, and you should now see the following:"),Object(r.b)("p",null,Object(r.b)("img",{src:a(129).default})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.05")," Let's lock up our private SSH key for additional security:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"chmod 400 myssh\n")),Object(r.b)("p",null,"Congratulations! You now have successfully created your own SSH key pair, which will allow you to connect to your server, which we are now going to create."),Object(r.b)("h3",{id:"creating-your-digitalocean-server"},"Creating your DigitalOcean server"),Object(r.b)("p",null,"Now we have our own SSH keys we will be using to connect to the server, let's actually create this server. If you are new to DigitalOcean, you will want to deposit 20$ on it, which you will need to during the registration of your DigitalOcean account."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Depending on whether or not you have already been using DigitalOcean in the past, you may have a different process regarding the server configuration. If that's the case, pay close attention to what the specifications are of the server we will be using."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.06")," Open your ",Object(r.b)("strong",{parentName:"p"},"browser"),", go to ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://digitalocean.com"}),"https://digitalocean.com")),", and create an account or log in if you already have an account."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.07"),' Now you are on DigitalOcean, the first step consists of selecting the droplet option after clicking the "create" button:'),Object(r.b)("p",null,Object(r.b)("img",{src:a(130).default})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.08")," Leave the OS option and the plan option like it is:"),Object(r.b)("p",null,Object(r.b)("img",{src:a(131).default})),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Are you delegating to POA?")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If not, please do. It's the only way we generate funds, which we can afterwards use to invest in our activities in Africa to get Cardano adopted there, but also to create more of the guides like the one you are currently using to create your stakepool."),Object(r.b)("p",{parentName:"div"},"Our ticker is ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://adapools.org/pool/683e89fa1bcde139504b11fbfd914f8ebe9b8db2678b3da0abdcb2f1"}),"POA")),". You know what to do."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Make the difference. #StakeWithAfrica")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.09")," Scroll down, and select the 20$ monthly plan. Double check the specifications to make sure you are selecting the right server:"),Object(r.b)("p",null,Object(r.b)("img",{src:a(132).default})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.10")," Feel free to select a different location."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There are two things worth taking in consideration regarding the server's location."),Object(r.b)("p",{parentName:"div"},"First, most stakepool operators are either based in the US, or in Europe. Ideally, you want your nodes to be active there, so the connection to other nodes is as fast as possible."),Object(r.b)("p",{parentName:"div"},"Second, you don't want to take a server at the other side of the world, because your terminal-experience will then be slower."))),Object(r.b)("p",null,Object(r.b)("img",{src:a(133).default})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.11"),' Scroll down, then click on "New SSH Key":'),Object(r.b)("p",null,Object(r.b)("img",{src:a(134).default})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.12")," Now go back to the ",Object(r.b)("strong",{parentName:"p"},"terminal")," and execute the following command to view your public SSH key:"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Make sure you are still in the .ssh folder, if not, execute the following commands first:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"cd\n")),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"cd .ssh\n")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"cat myssh.pub\n")),Object(r.b)("p",null,Object(r.b)("img",{src:a(135).default})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.13"),' Select the whole SSH public key (starting from "ssh-rsa"), copy it, go back to DigitalOcean, paste it there, and finally give it a name:'),Object(r.b)("p",null,Object(r.b)("img",{src:a(136).default})),Object(r.b)("p",null,Object(r.b)("img",{src:a(137).default})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.14"),' Simply click on "Create Droplet":'),Object(r.b)("p",null,Object(r.b)("img",{src:a(138).default})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.15")," Et voil\xe0! You know have successfully created a server on DigitalOcean, and you can see the IP address (I hided a part of it, because I'm paranoid) of your server, which we will be using to log into it:"),Object(r.b)("p",null,Object(r.b)("img",{src:a(139).default})),Object(r.b)("h3",{id:"connecting-to-your-server"},"Connecting to your server"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.16")," To connect to your server, simply execute the following command in a new tab in the terminal:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"ssh -i ~/.ssh/myssh root@THE-IP-ADDRESS-OF-YOUR-SERVER\n")),Object(r.b)("p",null,Object(r.b)("img",{src:a(140).default})),Object(r.b)("p",null,"And as we haven't created a password, you should normally directly be in the server:"),Object(r.b)("p",null,Object(r.b)("img",{src:a(141).default})),Object(r.b)("p",null,"Congratulations! You can now go to the third part of this guide, where we will be configuring the server."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Become part of the POA community!")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you want to meet other builders and global shapers, make sure to join our ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://t.me/poapool"}),"Telegram chat")),", where most of our community is hanging out. Oh, and if you have a question, you can also ask it there!"))))}l.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return a?o.a.createElement(m,i(i({ref:t},b),{},{components:a})):o.a.createElement(m,i({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<r;b++)c[b]=a[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);