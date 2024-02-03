import { useState } from 'react'
import ChatMessage from './ChatMessage'
import { analyze } from '../utils';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            message: 'May I have your name?'
        }
    ]);
    const [text, setText] = useState('');
    const onSend = () => {
        let list = [...messages, {
            message: text, user: true
        }];
        if(list.length>2){
            const reply = analyze(text);
            list = [...list, {message: reply}];
        }
        else{
            list = [...list,{
                message: `Hi, ${text}`,
            },
            {
                message:"How can i help you?",
            },
        ];
     }
     setMessages(list);
     setText("");
     setTimeout(()=>{
        document.getElementById('copyright').scrollIntoView({behavior:'smooth'});
     }, 1000)
    };
  return (
    <div>
        <div className='d-flex align-items-center justify-content-center'>
            <img src="https://media.istockphoto.com/vectors/-vector-id1010001882?k=6&m=1010001882&s=612x612&w=0&h=hjArrtcMrHNjzF0CIR75SCp1_02fra9JvZqZJt5oggI="  
                alt="logo" 
                height={200}
                width={200}
            />
            <h2 className='text-primary'>Chatbot</h2>
        </div>
        <div className='chat-message'>
            {
                messages.length>0 && messages.map((data) => 
                    <ChatMessage {...data}/>)
            }
            <div className='d-flex mt-2'>
                <input 
                    className='form-control'
                    type="text" 
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                 />
                <button
                    className='ms-3'
                    type='primary'
                    onClick={onSend}
                >
                    send                   
                </button>
            </div>
            <div id= 'copyright mt-3'>Copyrights reserved tamil skillhub</div>
        </div>
    </div>
  )
}

export default Chatbot