import React, {useContext} from 'react'
import { UserContext } from '../UserContext'
import userPhoto from "../ProfilePics/userPhoto.jpg";
import userPhoto2 from "../ProfilePics/userPhoto2.jpg";
import amitProfilePic from "../ProfilePics/photo1.png";
import reutiProfilePic from "../ProfilePics/photo2.webp";
import itayProfilePic from "../ProfilePics/photo3.webp";
import orelProfilePic from "../ProfilePics/photo4.jpg";
import dorProfilePic from "../ProfilePics/photo5.jpg";
import video1 from "../Images&Videos/video1.MOV";
import dog from "../Images&Videos/dog.jpeg";
import audio1 from "../Images&Videos/audio.ogg";



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
     messages: [ { name: "Itay", timestamp: "13:48", content: "Hey , what's up?",
                  reciver: true } ,
                 { name: "Yuval", timestamp: "13:52", content: "all good mylove, what is your plans for today?", reciver: false },
                 { name: "Itay", timestamp: "14:00", content: "just chillin'",
                  reciver: true }, 
                 { name: "Itay", timestamp: "14:01", content: "I don't want to start any homework yet :( what about you?", reciver: true },
                 { name: "Yuval", timestamp: "14:07", content: "I'm already started", reciver: false},
                 { name: "Yuval", timestamp: "14:08", content: "look!! this project is so cool", reciver: false }, 
                 { name: "Yuval", timestamp: "14:08", content: <video src={video1} alt="video" className="video-message" id="video" controls />, reciver: false }, 
                 { name: "Itay", timestamp: "14:10", content: "yuvvvv!!! that's awesome!!! ", reciver: true }]
    },
    
    {id: 5,
     name: "Dor",
     profilePic: dorProfilePic,
     lastSeen:"Active now" ,
     messages: [ { name: "Dor", timestamp: "13:48", content: "????", reciver: true } ,
                 { name: "Yuval", timestamp: "13:52", content: "What's wrong??", reciver: false },
                 { name: "Dor", timestamp: "15:00", content: <audio src={audio1} controls />, reciver: true }, 
                 { name: "Yuval", timestamp: "15:01", content: "I can't here anything! send again!", reciver: false }]
    }
  ];

const contacts_1 = 
  [
    {id: 1,
     name: "Amiti",
     profilePic: amitProfilePic, 
     lastSeen:"Active now" ,
     messages: [ { name: "Amiti", timestamp: "13:48", content: "Asafiiii! do you want to travel in Brazil???", reciver: true } ,
                 { name: "Asaf", timestamp: "13:52", content: "Of course!!", reciver: false },
                 { name: "Amiti", timestamp: "13:56", content:  <img src={"https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"} alt="image" className="image-message" id="img" />, reciver: true },
                { name: "Amiti", timestamp: "13:56", content: "That's the place we will go to!", reciver: true },
               { name: "Asaf", timestamp: "14:00", content: "I can't wait!!", reciver: false }]
    },
    {id: 2,
     name: "Reuti",
     profilePic: reutiProfilePic,
     lastSeen:"Typing..." ,
     messages: [ { name: "Reut", timestamp: "13:48", content: "Heyyyyy",
                  reciver: true } ,
                 { name: "Asaf", timestamp: "13:52", content: "How are you my love??", reciver: false},
                 { name: "Reut", timestamp: "13:58", content: "I'm fine! just chillin'.. listening to music", reciver: true },
                 { name: "Asaf", timestamp: "14:00", content: "which song?", reciver: false},
                 { name: "Reut", timestamp: "14:01", content: <audio src={audio1} controls />, reciver: true }]
    },
    
    {id: 3,
     name: "Orel",
     profilePic: orelProfilePic,
     lastSeen:"30 minutes ago" ,
     messages: [ { name: "Orel", timestamp: "13:48", content: "hey bro!", reciver: true } ,
                 { name: "Asaf", timestamp: "13:52", content: "what's up??", reciver: false },
                 { name: "Orel", timestamp: "13:48", content: "doing great! walking with my dog now, he's crazy!! look", reciver: true },
                 { name: "Orel", timestamp: "13:48", content: <img src={dog} alt="image" className="image-message" id="img" />, reciver: true }]
    },
    
    {id: 4,
     name: "Itay",
     profilePic: itayProfilePic,
     lastSeen:"3 hours ago" ,
     messages: [ { name: "Itay", timestamp: "13:48", content: "Hey budy, what's up?",
                  reciver: true } ,
                 { name: "Asaf", timestamp: "13:52", content: "all good bro, what is your plans for today?", reciver: false },
                 { name: "Itay", timestamp: "14:00", content: "just chillin'",
                  reciver: true }, 
                 { name: "Itay", timestamp: "14:01", content: "I don't want to start any homework yet :( what about you?", reciver: true },
                 { name: "Asaf", timestamp: "14:07", content: "I'm already started", reciver: false},                  { name: "Asaf", timestamp: "14:08", content: "look!! this project is so cool", reciver: false }, 
                 { name: "Asaf", timestamp: "14:08", content: <video src={video1} alt="video" className="video-message" id="video" controls />, reciver: false }, 
                 { name: "Itay", timestamp: "14:10", content: "Dude!!! that's awesome!!! ", reciver: true }]
    }
  ];


export const usersDB = [ 
  {userName: "Yuval", password: "a", displayName: "Yuvi", profilePic: userPhoto, chats: contacts}, 
  {userName: "Asaf", password: "a", displayName: "Asaf", profilePic: userPhoto2, chats: contacts_1}]

export default contacts;