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
  setTitleItem(prevItem=>{
    return prevItem.filter((item,index)=>{
      return index !== id;
   });
  });
  
  setContentItem(prevItem=>{
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
      {titleItem.map((title,index)=>(
        <Note 
        key={index}
        id ={index} 
        title={title} 
        content={contentItem[index]}
        onChecked={deleteNote}
        />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;