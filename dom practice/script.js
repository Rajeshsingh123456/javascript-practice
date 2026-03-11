// lets practice
//q1 create h2 heading eleement with text = "hello js" then .append ""from apna college student" to this text using js (means h2 me hello js se html me jo hai hello js from apnacollege student likhna hai )
let h2=document.querySelector("h2");
console.dir(h2);
h2.innerText=`${h2.innerText} from apna college student `;
