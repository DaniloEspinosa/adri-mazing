import axios from "axios";
import { useEffect, useState } from "react";

const Axios = () => {
  const [usersAxios, setUsersAxios] = useState([]);

  const getUsersAxios = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    );
    const data = response.data;
    const results = data.results;
    setUsersAxios(results);
  };



  useEffect(() => {
    getUsersAxios();
  }, []);


  const HTMLUsersAxios = usersAxios.map((user, i) => {
    return (
      <div key={i}>
        <h2>{user.name}</h2>
      </div>
    );
  });


  return (
    <div>
      {HTMLUsersAxios}
    </div>
  );
};

export default Axios;
