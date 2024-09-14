import React from 'react'
import "./NoteCard.css"
import ImgDelete from "./delete.png"

function titleCase(str){
  return str[0].toUpperCase() + str.slice(1);
}

function deleteNote (index){
  const savedNotes = JSON.parse(localStorage.getItem("notes") || []);
  savedNotes.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(savedNotes));
  window.location.reload();
}

// shopping, work, personal, learning, health

function NoteCategory({category}){
  const CATEGORY_EMOJI = {
    shopping: "🛍",
    work: "💼",
    personal: "🤝",
    learning: "📚",
    Health: "🏥",
  }

   return(
    <div className={`notecard-category bg-${category}`}>
      <span className='note-category-emoji'>{CATEGORY_EMOJI[category]}</span>
      {titleCase(category)}
    </div>
   )
}

function NoteCard({ index, title, description, category, emoji}) {
  return (
    <div className='note-card'>
        <div className='notecard-emoji'>{emoji}</div>
        <div>
            <h3 className='notecard-title'>{title}</h3>
            <p className='notecard-description'>{description}</p>
            <NoteCategory  category={category}/>

            <img src = {ImgDelete} 
            className='delete'
            alt='delete'
            onClick={()=>{
              deleteNote(index);
            }}
            />
        </div>
    </div>
  );
};

export default NoteCard