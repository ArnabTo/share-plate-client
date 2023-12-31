import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatureFood from "./FeatureFood";
import { useTheme } from "../../hooks/ThemeContext";

const FeaturesFoods = () => {
    const { darkMode } = useTheme();
    const [feaFoods, setFeaFoods] = useState([]);
    useEffect(() => {
        fetch('https://community-food-sharing-server-ruddy.vercel.app/featuredfood')
            .then(res => res.json())
            .then(data => setFeaFoods(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto my-8">
            <h1 className="text-center text-3xl font-bold underline my-4" style={{ color: darkMode ? 'tomato' : '#252525' }}>Our Featured Foods</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    feaFoods.map(feafood => <FeatureFood feafood={feafood} key={feafood._id}></FeatureFood>)
                }
            </div>
            <div className="text-center my-8">
                <Link to='avialabe' className="btn btn-ghost bg-indigo-500 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600000000 focus:ring-offset-2 ">Show All</Link>
            </div>
        </div>
    );
};

export default FeaturesFoods;