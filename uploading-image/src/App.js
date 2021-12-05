import './App.css';
import React from "react";

function App() {
  const [file,setfile] = React.useState("")
  const [text,settext] = React.useState("")

  function handlesubmit(){
    console.log("file",file)
    console.log("text",text)
  }

  return (
    <div className="App">
      <input type="text" onChange={(e)=>settext(e.target.value)}/>
      <input type="file" onChange={(e)=>setfile(e.target.value)}/>
      <button onClick={()=>handlesubmit()}>Submit</button>
    </div>
  );
}

export default App;
