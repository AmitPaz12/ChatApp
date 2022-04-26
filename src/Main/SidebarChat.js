import React, {useContext} from 'react'
import { UserContext } from '../UserContext'
import './SidebarChat.css'
import ContactItem from './ContactItem';

function SidebarChat({chatsList}) {
  var obj = <i class="bi bi-camera"></i>;
  const contactList = chatsList.map((contact, key) => {
    if (Array.isArray(contact.messages) && contact.messages.at(-1)) {
      if(contact.messages.at(-1).content.type === 'img' ){
          return <ContactItem id={contact.id} profilePic={contact.profilePic} name={contact.name} lastMessage={ "image" } time={contact.messages.at(-1).timestamp} key={key}/>
        } else if(contact.messages.at(-1).content.type === 'audio' ){
            return <ContactItem id={contact.id} profilePic={contact.profilePic} name={contact.name} lastMessage={"sent a voice message"} time={contact.messages.at(-1).timestamp} key={key}/>
        } else if(contact.messages.at(-1).content.type === 'video' ){
            return <ContactItem id={contact.id} profilePic={contact.profilePic} name={contact.name} lastMessage={"sent a video"} time={contact.messages.at(-1).timestamp} key={key}/>
        } else if(contact.messages){
            return <ContactItem id={contact.id} profilePic={contact.profilePic} name={contact.name} lastMessage={contact.messages.at(-1).content} time={contact.messages.at(-1).timestamp} key={key}/>
      }
    } else {
          return <ContactItem id={contact.id} profilePic={null} name={contact.name} lastMessage={""} time={""} key={key}/>;
    }
});
  
  return(
    <div className="sidebarChat">
      {contactList}
    </div>
  )
}

export default SidebarChat
