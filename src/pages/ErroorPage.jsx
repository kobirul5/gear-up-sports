import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FooterImg from "../assets/WorldMap.svg"
import errorImg from "../assets/404.jpg"

const ErrorPage = () => {
    return (
        <div className="mx-auto">
            <Navbar></Navbar>
            <section className="container mx-auto px-5 md:px-10 my-20">
                <Link to="/">
                    <button className="btn text-dark bg-[#ff92527e] hover:bg-btn-color border-btn-color hover:border-btn-color hover:text-secondary">Go back go Home</button>
                </Link>
                <img src={errorImg}
                    className="mx-auto h-[500px]"
                    alt="" />
            </section>

            <section
                style={{
                    backgroundImage: `url(${FooterImg})`,
                }}
            >
                <Footer></Footer>
                <p className="text-center text-primary pb-5">&copy; 2024 GearUp Sports. All rights reserved.</p>
            </section>

        </div>
    );
};

export default ErrorPage;