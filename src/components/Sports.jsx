import Basketball from '../assets/images/basketball.jpg'
import Football from '../assets/images/football.jpg'
import AmericanFootball from '../assets/images/AmericanFootball.jpg'
import Cricket from '../assets/images/cricket.jpg'
const Sports = () => {
    const categories = [
        { name: "Basketball", image: Basketball, tag: "Popular" },
        { name: "Football", image: Football },
        { name: "American Football", image: AmericanFootball },
        { name: "Cricket", image: Cricket },
    ];

    return (
        <div className='my-10'>
            <div>
                <h1 className='text-2xl md:text-5xl text-center font-semibold mr-10'>Sports Categories</h1>
                <p className='text-center my-3'>Discover exciting sports categories like Basketball, Football, Cricket, and American Football etc.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="card w-full bg-base-100 shadow-xl hover:scale-105 transition-transform"
                    >
                        <figure>
                            <img src={category.image} alt={category.name} className="h-48 w-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {category.name}
                                {category.tag && (
                                    <div className="badge badge-secondary ml-2">{category.tag}</div>
                                )}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sports;