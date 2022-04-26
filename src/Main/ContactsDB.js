import React, {useContext} from 'react'
import { UserContext } from '../UserContext'
import userPhoto from "../ProfilePics/userPhoto.jpg";
import userPhoto2 from "../ProfilePics/userPhoto2.jpg";
import amitProfilePic from "../ProfilePics/photo1.png";
import reutiProfilePic from "../ProfilePics/photo2.webp";
import itayProfilePic from "../ProfilePics/photo3.webp";
import orelProfilePic from "../ProfilePics/photo4.jpg";
import dorProfilePic from "../ProfilePics/photo5.jpg";


const contacts = 
  [
    {id: 1,
     name: "Amiti",
     profilePic: amitProfilePic, 
     lastSeen:"Active now" ,
     messages: [ { name: "Amiti", timestamp: "13:48", content: "Hey My love",
                  reciver: true } ,
                 { name: "Yuval", timestamp: "13:52", content: "Heyyy!!! how are you sis??", reciver: false },
                 { name: "Amiti", timestamp: "13:55", content: "I'm greate! I'm at the beach now",
                  reciver: true },
                { name: "Amiti", timestamp: "13:56", content:  <img src={"https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"} alt="image" className="image-message" id="img" />,
                  reciver: true },
               { name: "Yuval", timestamp: "14:00", content: "Omg!!! looks amazing!! have funnn", reciver: false }]
    },
    {id: 2,
     name: "Reuti",
     profilePic: reutiProfilePic,
     lastSeen:"Typing..." ,
     messages: [ { name: "Reut", timestamp: "13:48", content: "Heyyyyy",
                  reciver: true } ,
                 { name: "Yuval", timestamp: "13:52", content: "What's up my love??", reciver: false }]
    },
    
    {id: 3,
     name: "Orel",
     profilePic: orelProfilePic,
     lastSeen:"30 minutes ago" ,
     messages: [ { name: "Orel", timestamp: "13:48", content: "Heyush",
                  reciver: true } ,
                 { name: "Yuval", timestamp: "13:52", content: "Heyyyy youuu", reciver: false }]
    },
    
    {id: 4,
     name: "Itay",
     profilePic: itayProfilePic,
     lastSeen:"3 hours ago" ,
     messages: [ { name: "Itay", timestamp: "13:48", content: "Hey My love",
                  reciver: true } ,
                 { name: "Yuval", timestamp: "13:52", content: "I missed you", reciver: false }]
    },
    
    {id: 5,
     name: "Dor",
     profilePic: dorProfilePic,
     lastSeen:"Active now" ,
     messages: [ { name: "Dor", timestamp: "13:48", content: "????",
                  reciver: true } ,
                 { name: "Yuval", timestamp: "13:52", content: "What's wrong??", reciver: false }]
    }
  ];

const contacts_1 = 
  [
    {id: 1,
     name: "Amiti",
     profilePic: amitProfilePic, 
     lastSeen:"Active now" ,
     messages: [ { name: "Amiti", timestamp: "13:48", content: "Hey My love",
                  reciver: true } ,
                 { name: "Asaf", timestamp: "13:52", content: "Heyyy!!! how are you sis??", reciver: false },
                 { name: "Amiti", timestamp: "13:55", content: "I'm greate! I'm at the beach now",
                  reciver: true },
                { name: "Amiti", timestamp: "13:56", content:  <img src={"https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"} alt="image" className="image-message" id="img" />,
                  reciver: true },
               { name: "Asaf", timestamp: "14:00", content: "Omg!!! looks amazing!! have funnn", reciver: false }]
    },
    {id: 2,
     name: "Reuti",
     profilePic: reutiProfilePic,
     lastSeen:"Typing..." ,
     messages: [ { name: "Reut", timestamp: "13:48", content: "Heyyyyy",
                  reciver: true } ,
                 { name: "Asaf", timestamp: "13:52", content: "What's up my love??", reciver: false }]
    },
    
    {id: 3,
     name: "Orel",
     profilePic: orelProfilePic,
     lastSeen:"30 minutes ago" ,
     messages: [ { name: "Orel", timestamp: "13:48", content: "Heyush",
                  reciver: true } ,
                 { name: "Asaf", timestamp: "13:52", content: "Heyyyy youuu", reciver: false }]
    },
    
    {id: 4,
     name: "Itay",
     profilePic: itayProfilePic,
     lastSeen:"3 hours ago" ,
     messages: [ { name: "Itay", timestamp: "13:48", content: "Hey My love",
                  reciver: true } ,
                 { name: "Asaf", timestamp: "13:52", content: "I missed you", reciver: false }]
    },
    
    {id: 5,
     name: "Dor",
     profilePic: dorProfilePic,
     lastSeen:"Active now" ,
     messages: [ { name: "Dor", timestamp: "13:48", content: "????",
                  reciver: true } ,
                 { name: "Asaf", timestamp: "13:52", content: "What's wrong??", reciver: false }]
    }
  ];


export const usersDB = [ 
  {userName: "Yuval", password: "a", displayName: "Yuvi", profilePic: userPhoto, chats: contacts}, 
  {userName: "Asaf", password: "a", displayName: "Asaf", profilePic: userPhoto2, chats: contacts_1}]

export default contacts;