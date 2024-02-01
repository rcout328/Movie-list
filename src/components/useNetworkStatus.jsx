import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useNetworkStatus = () => {
  const [status, setStatus] = useState({
    online: navigator.onLine,
    since: new Date().toString(),
  });

  useEffect(() => {
    const handleOnline = () => {
      setStatus({
        online: true,
        since: new Date().toString(),
      });
      toast("Ping aa Gayi yes (Online)", { type: "success" });
    };

    const handleOffline = () => {
      setStatus({
        online: false,
        since: new Date().toString(),
      });
      toast("Ping chali Gayi yaar (offline)", { type: "error" });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return status;
};
