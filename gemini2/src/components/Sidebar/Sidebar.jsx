import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';

const Sidebar = () => {


  const[extended , setExtended] = useState(false);
  const{onSent , prevPrompts , setRecentPrompt , newChat} = useContext(Context);

  const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt)
    onSent(prompt)

  }


  return (
    <div className='sidebar'>
        <div className="top">
             <img src={assets.menu_icon} alt='menuicon' className='menu' onClick={()=> setExtended(prev => !prev)}/>
        </div>
        <div  onClick={()=> newChat()} className="new-chat">
             <img src={assets.plus_icon} alt='plusicon'/>
             {extended && <p>New Chat</p>}
        </div>
        {extended && 
        <div className="recent">
            <p className='recent-title'>Recent</p>
            {prevPrompts.map(item =>{
               
               return(

                <div  onClick={()=> loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt='' />
                <p>{item.slice(0, 18)} ...</p>
            </div>
               )
            })}
        
         
        </div>
        }
        <div className="bottom">
               <div className="bottom-item recent-entry">
                 <img  src={ assets.question_icon} alt=''/>
                {extended && <p>Help</p>}
                <span class="icon-text">Help</span>
               </div>
               <div className="bottom-item recent-entry">
                 <img  src={ assets.history_icon} alt=''/>
                 {extended && <p>Activity</p>}
                 <span class="icon-text">Gemini App activity</span>
               </div>
               <div className="bottom-item recent-entry">
                 <img  src={ assets.setting_icon} alt=''/>
                 {extended && <p>Settings</p>}
                 <span class="icon-text">Settings</span>
               </div>
        </div>

    </div>
  )
}

export default Sidebar