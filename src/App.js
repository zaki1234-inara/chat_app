import { ChatEngine, ChatFeed } from "react-chat-engine";

import './App.css';

import ChatFeed from './components/ChatFeed';

const App = () => {
return (
    <ChatEngine 
        height = "100vh"
        projectID="7985c9ad-57bb-4d79-b1a6-245bd9f07249"
        userName="harrypotter"
        userSecret="0123"
        renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} /> }
    
    />
);

}

export default App;