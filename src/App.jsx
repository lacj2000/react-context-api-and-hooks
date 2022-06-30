import { CounterContextProvider } from "./contexts/CounterContext"
import { Home } from "./templates/Home"

export const  App = () => {

  return (
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  )
};
