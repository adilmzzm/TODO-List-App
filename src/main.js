import React,{useEffect,useState,useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
function Nav(){
  return(
    <header>
      <div id="d-info">
        <div><img src="https://cdn.leonardo.ai/users/049d32b6-1b7e-40a7-88bf-26f46c5f0742/generations/6e15c73b-4a91-45b7-b395-726a66db5f7c/GPT_Image_1_create_a_beautiful__and_colorful_logo_of_todo_list_0.png" alt="app icon"/></div>
        <h2>Made By Adil Moazzam</h2>
      </div>
      <nav>
        <div id="l">
          <a href="https://github.com/adilmzzm"><span className="bi bi-github"> adilmzzm</span></a>
          <a href="https://www.linkedin.com/in/adil-moazzam-profile"><span className="bi bi-linkedin"> Adil Moazzam</span></a>
        </div>
      </nav>
    </header>
  )
}
function InputBox({v,cVal}){
  const remItems=()=>{
    $("#ib #ia #bcon #rem").css({backgroundColor:"white",color:"black"});
    setTimeout(()=>{
      $("#ib #ia #bcon #rem").css({backgroundColor:"rgb(94, 94, 73)",color:"white"})
    },100);
    localStorage.clear();
    (v===true)?cVal(false):cVal(true);
  }
  const addItem=()=>{
    $("#ib #ia #add").css({backgroundColor:"rgba(181,163,188, 1)",color:"white"});
    setTimeout(()=>{
       $("#ib #ia #add").css({backgroundColor:"rgba(241, 223, 248, 1)",color:"black"});
    },100)
    if($("#name")[0].value && $("#task")[0].value){
    // alert(typeof($("#task")[0].value));
      let id=Math.floor(Math.random()*1000000);
      // alert(id);
      let d=`<h2><span class="bi bi-tag-fill"> </span>${$("#name")[0].value}</h2><p>${$("#task")[0].value}</p><p><span class="bi bi-calendar-day"> </span>${new Date()}</p>`;
      localStorage.setItem(id,d);
      
      // alert(localStorage.getItem("Shopping"));
      (v===true)?cVal(false):cVal(true);
    }
    
  }
  return(
  <section id="ib">
      
      <div id="ia">
        <h1>WRITE TODO</h1>
        <label for="name">Enter task category</label>
        <input type="text" placeholder="Enter task category" id="name" />
        <br/>
        <label for="task">Enter task</label>
        <input type="text" id="task" placeholder="Enter task"/>
        <br/>
        <div id="bcon">
        <div id="rem" onClick={remItems}><b>Clear All Task </b><span className="bi bi-trash3-fill"></span></div>
        <div id="add" onClick={addItem}><b>Add Task </b><span className="bi bi-plus-circle-fill"></span></div>
        </div>
      </div>
  </section>
  )
}
function Body(){
  let mref=useRef(null);
  let [s,setS]=useState(false);
  let removeTask=(e)=>{
    // alert("Removed");
    localStorage.removeItem(e.target.parentElement.parentElement.id);
    $(e.target.parentElement.parentElement).hide();
  };
  useEffect(()=>{
    console.log("Called");
    if(mref.current){
      $(mref.current).empty();
    }
    for(var i=0;i<localStorage.length;i++){
      let k=localStorage.key(i);
      let d=localStorage.getItem(k);
      
    let e=$(`<div class="e" id=${k}><button id="rem"><span class="bi bi-x-circle-fill"></span></button>${d}</div>`)
    if(mref.current){
      $(mref.current).append(e);
      $("#d .e #rem").on("click",removeTask);
    }
    }
  })
  return(
  <main>
      <Nav/>
      <InputBox v={s} cVal={setS} />
      {/*<button onClick={change}>Click</button>*/}
      <section id="d">
        <div ref={mref} className="con"></div>
      </section>
  </main>
  );
}

let r=ReactDOM.createRoot($("#root")[0]);
r.render(
  <Body/>
);