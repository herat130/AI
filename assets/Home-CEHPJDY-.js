import{j as i,r as l,p as r,B as p}from"./index-DdWugfvQ.js";function e({text:t="",align:s="left",width:a="100%"}){return i.jsx("p",{style:{textAlign:s,width:a},children:t})}const c=r.div`
  width: 100%;
  text-align: left;
`;function d({text:t="",speed:s=100}){const[a,n]=l.useState(t.split(" ")[0]);return l.useEffect(()=>{let u=0;const o=window.setInterval(()=>{u<t.split(" ").length-1?(n(m=>m.concat(` ${t.split(" ")[u]}`)),u++):(console.log("clear interval"),clearInterval(o))},s);return()=>{console.log("clear interval return"),clearInterval(o)}},[s,t]),i.jsx(c,{children:i.jsx("p",{style:{textAlign:"left"},children:a})})}const x=r.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 700px;
  height: 700px;
  overflow-y: auto;
`,h=r.textarea`
  align-items: flex-end;
  flex-basis: 90%;
  width: 80%;
  min-height: 60px;
`;function g(){return i.jsxs(i.Fragment,{children:[i.jsxs(x,{children:[i.jsxs("h2",{children:["Title using ENV file ","DEV"]}),i.jsxs("h2",{children:["Mode ","production"]}),i.jsx(p,{primary:!0,label:"UI LIB"}),i.jsx(e,{text:"here is a question?",align:"right"}),i.jsx(e,{text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis!",align:"justify"}),i.jsx(e,{text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis!",align:"justify"}),i.jsx(e,{text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis!",align:"justify"}),i.jsx(e,{text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis!",align:"justify"}),i.jsx(d,{text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta commodi odit ab ex? Ratione omnis odit incidunt, nemo velit ex adipisci veritatis iure voluptates architecto nobis eligendi quasi consequuntur.",speed:100})]}),i.jsx(h,{name:"question",id:"question",title:"please ask your question here",placeholder:"ask question..."})]})}export{g as default};
