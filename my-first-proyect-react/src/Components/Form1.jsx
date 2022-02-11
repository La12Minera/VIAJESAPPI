import useForm from "../Hooks/useForm";

const Form1 = () => {
  const [formulario, handlerChange] = useForm({ fullName: "", age: 0 });

  return (
    <div>
      <input type="text" name="fullName" onChange={handlerChange} />
      <input type="number" name="age" onChange={handlerChange} />
    </div>
  );
};

export default Form1;
