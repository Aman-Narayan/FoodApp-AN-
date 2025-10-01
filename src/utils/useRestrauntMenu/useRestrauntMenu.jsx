import { useState, useEffect } from "react";
import { RES_API_ULR } from "../constant";
import Shimer from "../../components/Shimer";
const useRestrauntMenu = (resId) => {
  //fetchdata
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_API_ULR + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestrauntMenu;
