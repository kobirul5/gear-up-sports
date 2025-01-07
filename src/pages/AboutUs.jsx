import BannerImage2 from "../assets/images/mission.jpg"
import BannerImage3 from "../assets/images/bannerimg2.jpg"
import BannerImage4 from "../assets/images/cricket.jpg"
import jonDeo from "../assets/team/jon.jpg"
import janaSmith from "../assets/team/don.jpg"
import samaRron from "../assets/team/ron.jpg"
const AboutUs = () => {
    return (
        <div className=" py-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-primary">About Us</h1>
                    <p className="text-gray-600 mt-4 text-lg">We are passionate about bringing the latest and most exciting sports content to enthusiasts all over the world.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-primary">Our Mission</h2>
                        <p className="mt-4 text-gray-700">
                            Our mission is to create a comprehensive platform where sports fans can stay updated, find community, and celebrate their favorite games. We aim to inspire, inform, and connect people through the power of sports.
                        </p>
                        <p className="mt-4 text-gray-700">
                            Whether you're a player, a coach, or simply a fan, our website provides you with resources, news, and a vibrant community to share your passion for sports.
                        </p>
                    </div>
                    <div>
                        <img src={BannerImage2} alt="Sports passion" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
                    <div>
                        <img src={BannerImage3} alt="Teamwork in sports" className="rounded-lg shadow-md" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-primary">What We Offer</h2>
                        <p className="mt-4 text-gray-700">
                            - Comprehensive sports news and updates.
                        </p>
                        <p className="mt-2 text-gray-700">
                            - In-depth analysis and live score tracking.
                        </p>
                        <p className="mt-2 text-gray-700">
                            - Resources for training and development for players and coaches.
                        </p>
                        <p className="mt-2 text-gray-700">
                            - A platform to discuss and share your opinions on trending sports topics.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
                    <div>
                        <h2 className="text-2xl font-semibold text-primary">Our Equipment Store</h2>
                        <p className="mt-4 text-gray-700">
                            We provide high-quality sports equipment for players of all levels. From beginner kits to professional gear, our store is stocked with everything you need to elevate your game.
                        </p>
                        <p className="mt-2 text-gray-700">
                            Explore our collection of:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>Sportswear and uniforms</li>
                            <li>Training equipment</li>
                            <li>Accessories like gloves, bats, balls, and more</li>
                            <li>Customizable team merchandise</li>
                        </ul>
                        <p className="mt-4 text-gray-700">
                            Shop with confidence knowing that all our products are sourced from trusted brands and are designed to deliver top-notch performance.
                        </p>
                    </div>
                    <div>
                        <img src={BannerImage4} alt="Sports equipment" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl  font-semibold text-primary text-center">Our Team</h2>
                    <p className="mt-4 text-gray-700 text-center">
                        Our team consists of seasoned sports enthusiasts, analysts, and tech experts who work together to bring you the best user experience.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="text-center">
                            <img src={jonDeo} alt="Team Member" className="w-32 h-32 rounded-full object-cover mx-auto" />
                            <h3 className="mt-4 text-lg font-semibold">John Doe</h3>
                            <p className="text-gray-600">Founder & CEO</p>
                        </div>
                        <div className="text-center">
                            <img src={janaSmith} alt="Team Member" className="w-32 h-32 rounded-full object-cover mx-auto" />
                            <h3 className="mt-4 text-lg font-semibold">Jane Smith</h3>
                            <p className="text-gray-600">Lead Sports Analyst</p>
                        </div>
                        <div className="text-center">
                            <img src={samaRron} alt="Team Member" className="w-32 h-32 rounded-full object-cover mx-auto" />
                            <h3 className="mt-4 text-lg font-semibold">Sam Brown</h3>
                            <p className="text-gray-600">Tech Lead</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold text-primary text-center">Join Our Community</h2>
                        <p className="mt-4 text-gray-700 text-justify">
                            Become part of our growing community. Engage with other sports enthusiasts, share your thoughts, and stay connected with everything sports.
                        </p>
                        <div className="text-center mt-6">
                            <button className="btn text-white border-secondary bg-orange-500 hover:border-secondary btn-outline hover:bg-orange-600  ">Join Now</button>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold text-primary text-center">Contact Us</h2>
                        <p className="mt-4 text-gray-700 text-justify">
                            Have any questions or suggestions? Feel free to reach out to us. We'd love to hear from you!
                        </p>
                        <div className="text-center mt-6">
                            <button className="btn text-white border-secondary bg-orange-500 hover:border-secondary btn-outline hover:bg-orange-600   ">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;