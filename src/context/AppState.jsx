import React, { useEffect, useState } from "react";

const AppState = () => {
  const data = 10;
  const URL = "http://localhost:4000/api";
  const [UserData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/user/all`);
      const userData = await response.json();
      console.log(userData);
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default AppState;
