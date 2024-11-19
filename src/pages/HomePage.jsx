import { useContext, useState } from "react";
import Header from "../components/Header";
import { UserContext } from "../contexts/user.context";

const HomePage = () => {
  const { user, login, logout } = useContext(UserContext);
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header></Header>
      <hr />
      <div data-testid="homepage-title">HomePage</div>
      <h2>Hola {user && <span>{user.name}</span>}</h2>

      <br />
      <br />
      <br />
      <h2>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <span data-testid="counter">{counter}</span>
        
        <button
          data-testid="increase-counter"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </h2>
      <br />
      <br />
      <br />

      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default HomePage;
