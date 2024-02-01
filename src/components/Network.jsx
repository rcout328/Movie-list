
import { ToastContainer } from 'react-toastify';
import { Player } from '@lottiefiles/react-lottie-player';
import { useNetworkStatus } from './useNetworkstatus';
import Online from "./Online.json";
import Offline from "./Offline.json";
import 'react-toastify/dist/ReactToastify.css';

const NetworkStatusComponent = () => {
  const { online, since } = useNetworkStatus();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="w-96 h-96 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-4">
        <Player
          autoplay
          controls
          loop
          mode="normal"
          src={online ? Online : Offline}
          style={{ height: '250px', width: '250px' }}
        />
        <p className="text-xl font-semibold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          You are {online ? 'online' : 'offline'} since {since}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NetworkStatusComponent;
