import React,{useState} from "react";

function CreateArea(props) {
const [title,setTitle]=useState("");
const [content,setContent]=useState("");

function handleTitleChange(event){
  const newValue = event.target.value;
  setTitle(newValue);
};

function handleContentChange(event){
  const newValue = event.target.value;
  setContent(newValue);
}

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleTitleChange} value={title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleContentChange} value={content}/>
        <button
        onClick={(event)=>{
          props.onAddTitle(title);
          props.onAddContent(content);
          setTitle("");
          setContent("");
          event.preventDefault();
        }}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;