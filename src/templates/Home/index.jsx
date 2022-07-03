import { Button } from "../../components/Button";
import {  Counter } from "../../components/Counter";
import { useCounterContext } from "../../contexts/CounterContext";
import { Minus, Plus, ArrowCounterClockwise, DotsThreeCircleVertical, Textbox } from "phosphor-react";


export const Home =  () => {
  const [state, actions] = useCounterContext();
  return (
    <div>
      <Counter />
      <div>
        <Button onButtonClick={()=>actions.decrease()}>
          <Minus size={38}/>
        </Button>
        <Button onButtonClick={()=>actions.reset()}>
          <ArrowCounterClockwise size={38} />
        </Button>
        <Button onButtonClick={()=>actions.increase()}>
          <Plus size={38} />
        </Button>
        <Button
         onButtonClick={()=>actions.setCounter(10)}
        >
          <Textbox size={38} />
        </Button>

        <Button
         onButtonClick={()=>actions.setCounter(100)}
        >
          <Textbox size={38} />
        </Button>

      </div>
    </div>
  );
}


