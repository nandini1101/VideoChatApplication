import './App.css';
import {Routes, Route} from 'react-router-dom'
import Lobby from './screens/Lobby';
import RoomPage from './screens/Room';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Lobby/>} />
          <Route path="/room/:roomId" element={<RoomPage/>} />
        </Routes>
    </div>
  );
}

export default App;
