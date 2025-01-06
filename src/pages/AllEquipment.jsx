import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EquipmentCard from "../components/EquipmentCard";

const AllEquipment = () => {
    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        fetch("https://assignment-10-server-beta-self.vercel.app/allEquipment")
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [])
    const handleSort = () => {
        const sortIEquipment = [...equipments].sort((a, b) => a.price - b.price)
        setEquipments(sortIEquipment)
    }
    return (
        <div className="container mx-auto px-5 md:px-10 my-12">
            <div className="flex justify-end">
                <button onClick={handleSort} className="btn bg-[#ff851b77] border border-primary hover:bg-primary mb-2">Sort By Price</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    equipments === 0 ?
                        "No Data found"
                        :
                        equipments?.map((equipment, idx) => <EquipmentCard
                        key={idx}
                        equipment={equipment}
                        ></EquipmentCard>)
                }
            </div>
        </div>
    );
};

export default AllEquipment;