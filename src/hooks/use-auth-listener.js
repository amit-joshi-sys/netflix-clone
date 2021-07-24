import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const getUser = localStorage.getItem("authUser");
  const [user, setUser] = useState(JSON.parse(getUser));

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listner = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listner();
  }, [firebase]);
  return { user };
}
