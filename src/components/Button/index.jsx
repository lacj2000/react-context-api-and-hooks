import { Plus } from 'phosphor-react';
import P from 'prop-types';

export function Button({ children, buttonTitle, onButtonClick}) {
  return (
    <button onClick={onButtonClick} title={buttonTitle} >
      {children}
    </button>
  );
}


Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
  buttonTitle:P.string,
}
