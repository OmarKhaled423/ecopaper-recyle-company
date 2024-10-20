import { useContext } from "react";

const AppContext = () => {
  const { data } = useContext();
  return <div>AppContext</div>;
};

export default AppContext;
