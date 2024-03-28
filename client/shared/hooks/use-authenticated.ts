import axios from 'axios';
import * as React from 'react';

function useAuthenticated() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(undefined);

  React.useEffect(() => {
     async function isAuthenticated() {
      try {
        const res = await axios.get('http://localhost:8000/get-cookie', { withCredentials: true });

        setIsLoggedIn(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    isAuthenticated();
  }, [isLoggedIn]);

  return isLoggedIn;
}

export default useAuthenticated;
