/* eslint-disable */

import { useContext } from "react";

import { Context } from "../Context/DataContext";
import ButtonChangeData from "./ButtonChangeData";

const Page2 = () => {
  const { data, setData } = useContext(Context);
  return (
    <div>
      <h1>Pagina 2</h1>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <ButtonChangeData changeData={setData} />
    </div>
  );
};

export default Page2;
