import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-hot-toast";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const token = localStorage.getItem("token") || "";
  const UserName = localStorage.getItem('UserName') || "";
  const [auth, setAuth] = useState(token);
  const [username, setUsername] = useState(UserName);

  const signIn = (data, history) => {
    api
      .post("sessions/", data)
      .then((response) => {
        localStorage.clear();
        setUsername(data.username);
        localStorage.setItem('UserName', data.username)
        localStorage.setItem("token", JSON.stringify(response.data.access));
        const decodedToken = jwt_decode(response.data.access);
        setAuth(decodedToken);

        history.push("/dashboard");
      })
      .catch(() => toast.error("Username or password is invalid"));
  };

  const changeName = (data, user) => {
    api
      .patch(`users/${user}/`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then(()=> toast.success('Username updated'))
      .then(() => {
        setUsername(data.username);
        
      })
      .catch(() => toast.error("Failed to change"));
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, signIn, username, changeName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
