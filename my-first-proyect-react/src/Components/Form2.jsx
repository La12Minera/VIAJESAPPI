import useForm from "../Hooks/useForm";

const Form2 = () => {
  const [formulario, handlerChange] = useForm({ company: "", salary: 0 });

  return (
    <div>
      <input
        type="text"
        name="company"
        onChange={handlerChange}
        placeholder="Company"
      />
      <input type="number" name="salary" onChange={handlerChange} />
    </div>
  );
};

export default Form2;
