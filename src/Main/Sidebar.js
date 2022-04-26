import defaultProfilePic from "../ProfilePics/photo6.jpg";
import React, {useState, useContext, useRef} from 'react'
import { UserContext } from '../UserContext'
import { Modal } from 'react-bootstrap'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import Image from 'react-bootstrap/Image'

function Sidebar() {

	const {user, setUser} = useContext(UserContext);
  const [fieldError, setFieldError] = useState('');
  const [input, setInput] = useState({inputField:""});
  const [isClosed, setIsClosed] = useState(false);
  var [chatsList, setChatsList] = useState(user.chats);

  
  const doSearch = function(q) {
    setChatsList(user.chats.filter((contact) => contact.name.includes(q)));
  }

  const search = function() {
    doSearch(searchBox.current.value);
  }
  
  const searchBox = useRef(null);

  const checkIfExists = () => {
    return user.chats.find((element) => {
			return (element.name === input.inputField);
    });
  }
  
  const handleAdd = () => {
    if(input.inputField !== ""){
      if (checkIfExists()) {
        setFieldError("You already have a contact with this name. Please choose another name");
      } else {
        console.log(defaultProfilePic);
        var obj = {id: chatsList.length +1, name: input.inputField, profilePic: defaultProfilePic, lastSeen: "", messages: []};
        chatsList.push(obj);
        setChatsList([...chatsList,])
        setUser({...user, chats:[...chatsList,]});
        console.log(user.chats);
        setInput({inputField: ''});
        handleClose();
      }
    }
  }

  const handleClose = () => {
      setIsClosed(!isClosed);
  }

  const handleChange = (e) => {
    if (fieldError !== ""){
      setFieldError("");
    }
    const {name,value} = e.target;
    setInput({...input,[name]:value});
  }


  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Image bsPrefix="img" src={user.profilePic} roundedCircle={true}></Image>
        <div className="user-name"><h6>{user.displayName}</h6></div>
        <div className="sidebar-headerRight">
        <button onClick={handleClose} type="button" class="btn btn-outline-secondary btn-sm"><i class="bi bi-person-plus-fill"></i></button>
          <Modal show={isClosed} onHide={handleClose && handleAdd}>
            <Modal.Header>Add new Contact</Modal.Header>
            <Modal.Body>
              <input value={input.inputField} onChange={handleChange} placeholder="Contact's nickname" name="inputField" type="text" autocomplete="off"/> 
              <p>{fieldError}</p>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={handleAdd} type="button" class="btn btn-outline-primary">Add</button>
              <button onClick={handleClose} type="button" class="btn btn-outline-dark">Close</button>
            </Modal.Footer>
          
          </Modal>
          
        <button type="button" class="btn btn-outline-secondary btn-sm"><i class="bi bi-chat-left-dots"></i></button>
        <button type="button" class="btn btn-outline-secondary btn-sm"><i class="bi bi-three-dots-vertical"></i></button>
        </div>

      </div>

      <div className="sidebar-search">

          <div className="sidebar-searchContainer">
              <i class="bi bi-search"></i>
              <input ref={searchBox} onKeyUp={search} placeholder="Search or start new chat" type="text" autocomplete="off"/>
          </div>

      </div>
      
      <div className="sidebar-chats">
        <SidebarChat chatsList={chatsList} />
      </div>
    </div>
  )
}

export default Sidebar
