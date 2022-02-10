/* eslint-disable */
import { useContext } from "react";

import { Context } from "../Context/DataContext";

const Page1 = () => {
  const { data } = useContext(Context);
  return (
    <div>
      <h1>Pagina 1</h1>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Page1;
