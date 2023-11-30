import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const [note,setNote]= useState([]);


function addNote(newNote){
  // create shallow copy of previous state value
 setNote(prevItems=>{
  return [...prevItems,newNote];
 });
}



function deleteNote(id){
  setNote(prevItem=>{
    return prevItem.filter((item,index)=>{
      return index !== id;
   });
  });
}
  

  return (
    <div>
      <Header />
      <CreateArea 
      onAddNote={addNote}
      />
      {note.map((noteItem,index)=>(
        <Note 
        key={index}
        id ={index} 
        title={noteItem.title} 
        content={noteItem.content}
        onDelete={deleteNote}
        />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;