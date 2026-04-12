import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (params) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_MENU_URL + params.resId);
        const json = await data.json();
        setResInfo(json?.data);
    }

    return resInfo;
}

export default useRestaurantMenu;