import React,{useState} from "react";

function CreateArea(props) {
const [note, setNote]= useState({
  title:"",
  content:""
});


function handleChange(event){
  //destruction
  const {name, value} = event.target;
  setContent(prevItems=>{
    return{
      ...prevItems,
      [name]:value
    }
  });
}

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content}/>
        <button
        onClick={(event)=>{
          props.onAddNote(note);
          setNote("");
          event.preventDefault();
        }}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;