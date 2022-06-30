import { useCounterContext } from "../../contexts/CounterContext";

export const Home =  () => {
  const [state, actions] = useCounterContext();
  return (
    <h1 onClick={()=>actions.increase()}>
      {state.counter}
    </h1>
  );
}


