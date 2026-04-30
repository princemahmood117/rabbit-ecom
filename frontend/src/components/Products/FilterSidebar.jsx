import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const FilterSidebar = () => {

    // handle search params
    const [searchParams,setSearchParams] = useSearchParams()

    const [filters,setFilters] = useState({
        category : "",
        gender : "",
        color : "",
        size : [],
        material : [],
        brand : [],
        minPrice : 0,
        maxPrice : 100,
    })

    const [priceRanze, setPriceRange] = useState([0,100])

    const categories = ["Top Wear", "Bottom Wear"];

    const colors = [
        "Red",
        "Blue",
        "Black",
        "Green",
        "Yellow",
        "Gray",
        "White",
        "Pink",
        "Beige",
        "Navy",
    ];
    const sizes = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
    ];

    const materials =[
        "Cotton",
        "Wool",
        "Denim",
        "Polyester",
        "Silk",
        "Linen",
        "Viscos",
        "Fleece",    
    ];

    const brands = [
        "Urban Threads",
        "Modern Fits",
        "Street Styles",
        "Beach Breeze",
        "ChicStyles",
        "Cats Eye",
    ];

    const genders = ["Men", "Women"];


    useEffect(() => {
        const params = Object.fromEntries([...searchParams]) //This line converts query params into a plain JavaScript object.
        // params = {category : 'Top Wear', maxPrice : 100}

        setFilters({
            category : params.category || "",
            gander : params.gander || "",
            color : params.color || "",
            size : params.size ? params.size.split(",") : [],
            material : params.material ? params.material.split(",") : [],
            brand : params.brand ? params.brand.split(",") : [],
            minPrice : params.minPrice || 0,
            maxPrice : params.maxPrice || 100,

        })

        setPriceRange([0, params.maxPrice || 100])
    },[searchParams])


    return (
        <div className="p-4">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Filter by</h3>

            {/* category filters */}
            <div className="mb-4">
                <label className="block text-gray-900 mb-2">Category</label>
                {categories.map((category) => (
                    <div className="flex items-center mb-2" key={category}>
                        <input 
                        type="radio"
                        name="category"
                        className="mr-2 h-3 w-3"  />
                        <span>{category}</span>
                    </div>
                ))}
            </div>


            {/* Gender filters */}
            <div className="mb-6">
                <label className="block text-gray-900 mb-2">Gender</label>
                {genders.map((gender) => (
                    <div className="flex items-center mb-2" key={gender}>
                        <input 
                        type="radio"
                        name="gender"
                        className="mr-2 h-3 w-3"  />
                        <span>{gender}</span>
                    </div>
                ))}
            </div>


            {/* color section */}
            <div className="mb-6">
                <label className="block text-gray-900 mb-2">Color</label>
                <div className="grid grid-cols-6">
                    {colors.map((color) => (
                        <button 
                        key={color}
                        name="color"
                        className="w-7 h-7 rounded-full border border-gray-400 cursor-pointer transition hover:scale-105"
                        style={{backgroundColor : color.toLowerCase()}}
                        ></button>
                    ))}
                </div>
            </div>


            {/* size section */}
            <div className="mb-6">
                <label className="block text-gray-900 mb-2">Size</label>
                <div>
                    {sizes.map((size) => (
                        <div key={size} className="flex items-center mb-1">
                            <input
                             type="checkbox" 
                             name="size"
                             className="mr-1 h-3 w-3 text-blue-500 focus:ring-blue-400 border-gray-300"
                             />
                            <span className="text-gray-700">{size}</span>
                        </div>
                    ))}
                </div>
            </div>


            {/* material section */}
            <div className="mb-5">
                <label className="block text-gray-900 mb-2">Material</label>
                <div>
                    {materials.map((material) => (
                        <div key={material} className="flex items-center mb-1">
                            <input
                             type="checkbox" 
                             name="material"
                             className="mr-1 h-3 w-3 text-blue-500 focus:ring-blue-400 border-gray-300"
                             />
                            <span className="text-gray-700">{material}</span>
                        </div>
                    ))}
                </div>
            </div>


            {/* brand section */}
            <div className="mb-5">
                <label className="block text-gray-900 mb-2">Brands</label>
                <div>
                    {brands.map((brand) => (
                        <div key={brand} className="flex items-center mb-1">
                            <input
                             type="checkbox" 
                             name="brand"
                             className="mr-1 h-3 w-3 text-blue-500 focus:ring-blue-400 border-gray-300"
                             />
                            <span className="text-gray-700">{brand}</span>
                        </div>
                    ))}
                </div>
            </div>


            {/* price range section */}
            <div className="mb-9">
                <label className="block text-gray-900 mb-2">Price range</label>
                <input
                 type="range"
                 name="priceRange"
                 min={0}
                 max={100}
                 className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer" />

                 <div className="flex justify-between text-gray-800 mt-2">
                    <span>$0</span>
                    <span>${priceRanze[1]}</span>
                 </div>
            </div>


        </div>
    );
};

export default FilterSidebar;