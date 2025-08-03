import './App.css'
import {RecoilRoot, useRecoilValue , atom} from 'recoil';
import { friendsAtom, messagesAtom, postsAtom, totalNotificationSelector } from './atoms/headerAtoms';

function App() {

  const messages = useRecoilValue(messagesAtom);
  const friends = useRecoilValue(friendsAtom);
  const posts = useRecoilValue(postsAtom);
  const totalNotifications = useRecoilValue(totalNotificationSelector);

  return (
    <>

        <button>Home</button>
        <button>Messages ({messages})</button>
        <button>Friends ({friends})</button>
        <button>Posts ({posts})</button>
        <button>Profile ({totalNotifications})</button>

    </>
  )
}

export default App
