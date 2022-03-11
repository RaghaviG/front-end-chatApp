import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';


export const MessageForm = ({sendMessage}) => {
    const [message, setMessage] = useState('');
    const [showSmilie, setShowSmilie] = useState(false);

    return (
        <Form
        onSubmit={e => {
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }}>
        <InputGroup>
            <FormControl type="user" placeholder="message..."
                onChange={e => setMessage(e.target.value)} value={message} />
                <Button variant="primary" type="submit" disabled={!message}>Send</Button>
                <Button onClick={()=>{showSmilie? setShowSmilie(false) : setShowSmilie(true)}}>Smilie</Button>
                <span  hidden={!showSmilie}><Picker onClick={(e)=>setMessage(e.native)}></Picker></span>
        </InputGroup>
    </Form>



    )
}