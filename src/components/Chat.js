import { MessageContainer } from "./MessageContainer";
import {MessageForm} from "./MessageForm";
import {Button} from 'react-bootstrap';
import {ConnectedUsers} from './ConnectedUsers';

 export const Chat = ({messages,sendMessage,closeConnection,users}) => {
    return(
      <>
        <div className="leave-room">
          <Button variant="danger" onClick={() => closeConnection()}>Leave Room</Button>
        </div>
        <ConnectedUsers users={users}/>
        <div className="chat">
          <MessageContainer messages={messages}/>
          <MessageForm sendMessage={sendMessage}/>
        </div>
        </>
    );
}

