import { useState } from "react";

const Formularios = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log("El formulario se ha enviado");
  };

  const handleName = (e) => {
    setUser({ ...user, userName: e.target.value });
  };

  const handlePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  return (
    <div>
      <h1>Formularios</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            onChange={handleName}
            value={user.userName}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="text"
            id="username"
            onChange={handlePassword}
            value={user.password}
          />
        </fieldset>
        <button>Enviar</button>
      </form>
      <button onClick={() => setUser({ userName: "", password: "" })}>
        Logout
      </button>
    </div>
  );
};

export default Formularios;
