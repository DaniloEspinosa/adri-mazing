import { useEffect, useState } from "react";

const Child = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Child se ha montado");

    return () => {
        console.log("El componente se ha desmontado")
    };
  }, []);


  return (
    <>
      <h2>Este es el componente hijo</h2>
      <h3>{counter}</h3>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter
      </button>
    </>
  );
};

export default Child;
