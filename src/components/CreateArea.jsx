import React,{useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
const [note, setNote]= useState({
  title:"",
  content:""
});


function handleChange(event){
  //destruction
  const {name, value} = event.target;
  setNote(prevItems=>{
    return{
      ...prevItems,
      [name]:value
    }
  });
}

  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content}/>
        <Fab
        onClick={(event)=>{
          props.onAddNote(note);
          setNote({
            title:"",
            content:""
          });
          event.preventDefault();
        }}
        ><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;