import { useCounterContext } from "../../contexts/CounterContext";

export function Counter(){
  const [state, actions] = useCounterContext();

  return (
    <div>
      <h1 style={{ fontSize: '60px'}}>
        {state.counter}
      </h1>
    </div>
  );
}
