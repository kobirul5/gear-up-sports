import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
    const {user} = useContext(AuthContext)
    const equipmentData = useLoaderData()
    const navigate = useNavigate()

    const { _id, itemName, categoryName, price, rating, customization, processingTime, stockStatus, photoUrl, userEmail, userName, description,
    } = equipmentData

    const handleUpdateEquipment = (e) =>{

        e.preventDefault()

        const form = e.target
        const itemName=form.itemName.value
        const categoryName=form.categoryName.value
        const price=form.price.value
        const rating=form.rating.value
        const customization=form.customization.value
        const processingTime=form.processingTime.value
        const stockStatus=form.stockStatus.value
        const photoUrl=form.photoUrl.value
        const userEmail=form.userEmail.value
        const userName=form.userName.value
        const description=form.description.value

        const updatedEquipment = { itemName, categoryName, price, rating, customization, processingTime, stockStatus, photoUrl, userEmail, userName, description,}

        fetch(`https://assignment-10-server-beta-self.vercel.app/allEquipment/${_id}`, {
            method: "PUT",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedEquipment)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount){
                Swal.fire({
                    title: 'successful!',
                    text: 'Updated Equipment Successfully',
                    icon: 'success',
                    confirmButtonText: 'close'
                  })
                }
                navigate(`/equipmentDetails/${_id}`)
        })

    }

    return (
        <div className="flex justify-center items-center py-10">
            <div className="shadow-lg rounded-lg p-8 w-full max-w-3xl border border-primary">
                <h1 className="text-2xl font-bold text-center mb-2">Update New Equipment</h1>
                <p className="text-center mb-6">
                    Fill out the details below to Updated what you Want. Make sure to provide accurate information.
                </p>
                <form onSubmit={handleUpdateEquipment} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Item Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Item Name</label>
                        <input
                            type="text" 
                            defaultValue={itemName}
                            placeholder="Enter item name"
                            className="input border-primary input-bordered w-full"
                            name="itemName"
                        />
                    </div>

                    {/* Category Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Category Name</label>
                        <input
                            type="text"
                            placeholder="Enter category name"
                            className="input border-primary input-bordered w-full"
                            name="categoryName"
                            defaultValue={categoryName}
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Price</label>
                        <input
                            type="number"
                            placeholder="Enter price"
                            className="input input-bordered border-primary w-full"
                            name="price"
                            defaultValue={price}
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Rating</label>
                        <input
                            type="number"
                            step="0.1"
                            max="5"
                            placeholder="Enter rating (out of 5)"
                            className="input input-bordered border-primary w-full"
                            name="rating"
                            defaultValue={rating}
                        />
                    </div>

                    {/* Customization */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Customization</label>
                        <input
                            type="text"
                            placeholder="Enter customization details"
                            className="input input-bordered border-primary w-full"
                            name="customization"
                            defaultValue={customization}
                        />
                    </div>

                    {/* Processing Time */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Processing Time</label>
                        <input
                            type="text"
                            placeholder="Enter processing/delivery time"
                            className="input input-bordered border-primary w-full"
                            name="processingTime"
                            defaultValue={processingTime}
                        />
                    </div>

                    {/* Stock Status */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Stock Status</label>
                        <input
                            type="number"
                            placeholder="Enter available quantity"
                            className="input input-bordered border-primary w-full"
                            name="stockStatus"
                            defaultValue={stockStatus}
                        />
                    </div>

                    {/* Image Input */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Photo URL</label>
                        <input
                            type="text"
                            placeholder="Enter Photo URL"
                            className="input input-bordered border-primary w-full"
                            name="photoUrl"
                            defaultValue={photoUrl}
                        />
                    </div>

                    {/* User Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">User Email</label>
                        <input
                            type="email"
                            value={`${user?.email}`} readOnly
                            placeholder="Enter user email"
                            className="input input-bordered border-primary w-full"
                            name="userEmail"
                            
                        />
                    </div>

                    {/* User Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">User Name</label>
                        <input
                            type="text"
                            value={`${user?.displayName}`} readOnly
                            placeholder="Enter user name"
                            className="input input-bordered border-primary w-full"
                            name="userName"
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            placeholder="Enter item description"
                            className="textarea textarea-bordered border-primary w-full"
                            name="description"
                            defaultValue={description}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 text-center">
                        <button type="submit" className="btn bg-[#ff92527e] hover:bg-btn-color border-btn-color hover:border-btn-color text-dark hover:text-secondary w-full">
                            Updated Equipment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEquipment;