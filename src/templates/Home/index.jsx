import { Button } from "../../components/Button";
import {  Counter } from "../../components/Counter";
import { useCounterContext } from "../../contexts/CounterContext";

export const Home =  () => {
  const [state, actions] = useCounterContext();
  return (
    <div>
      <Counter />
      <div>
        <Button onButtonClick={()=>actions.decrease()}>-</Button>
        <Button onButtonClick={()=>actions.increase()}>+</Button>
      </div>
    </div>
  );
}


