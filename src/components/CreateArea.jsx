import React,{useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
const [note, setNote]= useState({
  title:"",
  content:""
});

const [isExpended, setExpendStyle]=useState(false);

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

function expend(){
  setExpendStyle(true);
}



  return (
    <div>
      <form className="create-note">
        {isExpended ? <input name="title" placeholder="Title" value={note.title} onChange={handleChange} /> : null}

        <textarea name="content" placeholder="Take a note..." rows={isExpended ? 3 : 1} value={note.content} onChange={handleChange} onClick={expend}/>

        <Zoom in={isExpended}>
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
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;