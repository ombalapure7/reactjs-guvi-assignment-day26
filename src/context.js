import { useState, useEffect, useContext } from "react";
import axios from "axios";
import React from "react";

const url = "https://614eabf9b4f6d30017b482be.mockapi.io/users";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  /* Fetch list of users */
  const fetchUser = async () => {
    setLoading(true);
    const users = await axios.get(url);
    setUsers(users.data);
    setLoading(false);
  };

  const filterUser = () => {
    if (users.length > 0) {
      const filteredUsers = users.filter((user) => {
        let temp = searchValue;
        let processedStr = temp.charAt(0).toUpperCase() + temp.slice(1);
        
        console.log("PROCESSED STRING: ", processedStr);

        if (user.name.includes(processedStr)) {
          return user;
        } 
      });

      setUsers(filteredUsers);
      setLoading(false);
      console.log("FILTERED USERS: ", filteredUsers, filteredUsers.length);
    }
  };

  /* Fire the search function if searchValue is supplied */
  useEffect(() => {
    filterUser();
  }, [searchValue]);

  /* Fetch data when this component loads */
  useEffect(() => {
    fetchUser();
  }, []);

  /* Delete a user */
  const deleteUser = async (id) => {
    await axios.delete(`${url}/${id}`);
    fetchUser();
  };

  /* Prevent form from being submitted */
  const preventSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <AppContext.Provider
      value={{
        fetchUser,
        loading,
        users,
        deleteUser,
        preventSubmit,
        setSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
