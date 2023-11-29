import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const [titleItem,setTitleItem]= useState([]);
const [contentItem,setContentItem] = useState([]);

function addTitle(newTitle){
 setTitleItem(prevItems=>{
  return [...prevItems,newTitle];
 });
}

function addContent(newContent){
  setContentItem(prevItems=>{
    return [...prevItems,newContent];
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
      onAddTitle={addTitle}
      onAddContent={addContent}
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