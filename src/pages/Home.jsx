import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import Sports from "../components/Sports";
import NewsLetter from "../components/NewsLetter";
import Benefits from "../components/Benefits";
import Discount from "../components/Discount";

const Home = () => {
    const { user } = useContext(AuthContext)
    const allData = useLoaderData()
    const [allEquipment, setAllEquipment] = useState()
    useEffect(() => {
        const uniqueCategories = [...new Set(allData?.map(item => item.categoryName))];
        setAllEquipment(uniqueCategories)
    }, [setAllEquipment])
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto px-5 md:px-10 my-12 pb-10 border-b-2">
                <Benefits></Benefits>
            </div>
            <section>
                <Heading title={"Explore Our Collection"}
                    subtitle={"Top-Quality Sports Products to Elevate Your Game"}
                ></Heading>
                <div className="grid grid-cols-12 gap-5 container my-12 mx-auto px-5 md:px-10">
                    {/* category */}
                    <div 
                    className="col-span-12 md:col-span-3 flex flex-col border border-primary p-5 rounded-3xl gap-3">
                        
                        <NavLink 
                        to={`/category/allEquip`} 
                        className="w-full btn bg-[#ff92527e] hover:bg-btn-color border-btn-color hover:border-btn-color"
                        ><button>All Product</button>
                        </NavLink>
                        {
                            allEquipment?.map((data, idx) => <NavLink
                                state={data}
                                key={idx}
                                className="w-full btn bg-[#ff92527e] hover:bg-btn-color border-btn-color hover:border-btn-color"
                                to={`/category/${data}`}
                            ><button >
                                    {data}
                                </button></NavLink>)
                        }
                    </div>
                    {/* Products */}
                    <div className=" col-span-12 md:col-span-9 ">
                        <Outlet></Outlet>
                    </div>

                </div>
            </section>
            <section className="container mx-auto px-5 md:px-10 my-12"> 
                <Discount></Discount>
                <Sports></Sports>
                <NewsLetter></NewsLetter>

            </section>
        </div>
    );
};

export default Home;