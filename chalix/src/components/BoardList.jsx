import { useEffect } from "react";

const BoardList = () => {
    // board read
    const fetchData = async () => {
        try{
            const response = await fetch("http://daeho2.shop:8081/board" , {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            console.log(data)
            return data;
        }catch(error){
            console.log(error)
            const response = await fetch("../../chailx.json" , {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            return data.list;
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="BoardList">
            BoardList
        </div>
    )
}

export default BoardList;