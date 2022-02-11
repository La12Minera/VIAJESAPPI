import { useState } from "react";

const useForm = (initialState) => {
  const [formulario, setChangeForm] = useState(initialState);

  const handlerChange = ({ target }) => {
    setChangeForm({ ...formulario, [target.name]: target.value });
  };

  return [formulario, handlerChange];
};

export default useForm;
