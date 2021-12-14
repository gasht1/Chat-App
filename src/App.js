import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';
import './App.css';
const App=() =>{
    if (!localStorage.getItem('username')) return <LoginForm />;
    
    return(
        <ChatEngine
            height="100vh"
            projectID="e15ed27d-d9a6-4c0e-ac79-a4c467448ebe"
            userName="firstDreamer"
            userSecret="1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}
export default App
