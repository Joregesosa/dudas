import { useEffect, useState } from 'react'

export const useData = () => {
    const [data, setData] = useState();
    const [card1, setCard1] = useState(25);
    const [card2, setCar2] = useState(42);


    const changeState = () => {
        setCard1(80)
        setCar2(53)
    }


    const getData = async (latitud = '44.34', longitud = '10.99') => {


        const fetchedData = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitud}&lon=${longitud}&exclude=hourly,daily&appid=3bc4c9f45cf04e7a74ac17d51146bf82`);

        const jsonData = await fetchedData.json();

        setData(jsonData);
    }

    useEffect(() => {
        getData()
    }, []);

    return {
        data,

        getData,
        changeState,
        card1,
        card2
    }
}


