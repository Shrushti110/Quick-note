import React, { useState } from 'react'
import './Add.css'
import HomeButton from '../../components/HomeButton/HomeButton';
import EmojiPicker from 'emoji-picker-react';
import toast from 'react-hot-toast';

function Add() {
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");
  const[category ,setCategory] = useState("");
  const[emoji, setEmoji] = useState("");
  const[openEmojiDialog, setOpenEmojiDialog] = useState(false);

  const addnote = () =>{
    const notes= JSON.parse(localStorage.getItem("notes")) || [];

    const noteObject = {
      title,
      description,
      category,
      emoji,
    };

    notes.push(noteObject);

    localStorage.setItem("notes",JSON.stringify(notes));

    toast.success("Note added successfully!");

    setTitle("");
    setDescription("");
    setCategory("");
    setEmoji("");
  };

  return (
    <div>
      <h1 className='text-center text-primary'>📝 Add Note</h1>

         
      <input
       type='text' 
       placeholder='Title' 
       value={title}
       onChange={(e)=>{
       setTitle(e.target.value);
       }}
       className='user-input'
       />

      <input
       type='text' 
       placeholder='Description' 
       value={description}
       onChange={(e)=>{
       setDescription(e.target.value);
       }}
        className='user-input'
       />

       <select 
       type='text' 
       placeholder='Category' 
       value={category}
       onChange={(e)=> {
       setCategory(e.target.value);
       }}
       className='user-input user-input-select'>

        <option value="">Select Category</option>
        <option value="Shopping">Shopping</option>
        <option value="Work">Work</option>
        <option value="Learning">Learning</option>
        <option value="Personal">Personal</option>
        <option value="Health">Health</option>

       </select>
       
       <EmojiPicker 
        open={openEmojiDialog} 
        height={"350px"} 
        width={"400px"}
        skinTonesDisabled={true}
        onEmojiClick={(emojiObject)=>{
        setEmoji(emojiObject.emoji)
        setOpenEmojiDialog(false)
        }}
        className='emoji-picker'
        />

      <div className='user-input user-input-emoji' onClick={()=>setOpenEmojiDialog(true)}>
        {emoji ? emoji :"Select Emoji"}
      </div>
       
      <button 
      type='button' 
      className='btn btn-primary btn-add'
       onClick={addnote}>
        Add Note
      </button>
    <HomeButton/>
    </div>
  );
}

export default Add