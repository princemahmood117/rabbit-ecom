import mensCollection from "../../assets/mens-collection.webp"
import womensCollection from "../../assets/womens-collection.webp"

const GenderCollectionSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
           <img src={womensCollection} alt="" />
           <img src={mensCollection} alt="" />
        </div>
    );
};

export default GenderCollectionSection;