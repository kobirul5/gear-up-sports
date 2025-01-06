import { Link } from "react-router-dom";

const EquipmentCard = ({ equipment }) => {
    const { _id, itemName, price, photoUrl} = equipment
    return (
        <div className="card  shadow-xl border border-primary rounded-2xl">
            <figure className="px-5 pt-5">
                <img
                    src={photoUrl}
                    alt={itemName}
                    className="rounded-xl w-full h-[150px] object-cover" />
            </figure>
            <div className="card-body gap-0 p-5">
                <h2 className="card-title">{itemName}</h2>
                <p className="font-bold text-xl">${price}</p>
                <div className="card-actions">
                    <Link to={`/equipmentDetails/${_id}`} className="btn text-dark bg-[#ff92527e] hover:bg-btn-color border-btn-color hover:border-btn-color hover:text-secondary ">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;