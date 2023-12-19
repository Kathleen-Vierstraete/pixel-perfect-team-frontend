import { CardProduct } from "./CardProduct";

export const FirstProduct = ({products}) => {     
    const getRandomProducts = (count) => {
        const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
        return shuffledProducts.slice(0, count);
    };
    const randomProducts = getRandomProducts(10);
    
    
    return (
        <div className="grid grid-cols-2 grid-rows-14 gap-2 lg:grid-cols-6 lg:grid-rows-3">
            {randomProducts.map((product, index) => (
                <CardProduct key={index} product={product} position={getGridPosition(index)}/>
            ))}
        </div>
    );
};

const getGridPosition = (index) => {
    switch (index) {
        case 0:
            return "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2";
        case 1:
            return "row-start-3 lg:row-start-auto lg:col-span-2 lg:col-start-3";
        case 2:
            return "row-span-2 col-start-1 row-start-4 lg:row-span-1 lg:col-span-2 lg:col-start-3 lg:row-start-2";
        case 3:
            return "row-span-3 col-start-2 row-start-3 lg:row-span-2 lg:col-start-5 lg:row-start-1";
        case 4:
            return "col-span-2 row-span-2 row-start-6 lg:col-span-auto lg:row-span-1 lg:col-start-6 lg:row-start-1";
        case 5:
            return "col-span-2 row-span-2 row-start-8 lg:col-span-auto lg:row-span-1 lg:col-start-6 lg:row-start-2";
        case 6:
            return "col-span-2 row-span-2 row-start-10 lg:row-span-1  lg:row-start-3";
        case 7:
            return "row-start-12 lg:col-start-3 lg:row-start-3";
        case 8:
            return "row-span-3 col-start-2 lg:row-span-1 lg:col-start-4 lg:row-start-3";
        case 9:
            return "row-span-2 col-start-1 row-start-13 lg:row-span-1 lg:col-span-2 lg:col-start-5 lg:row-start-3";
        default:
            return "";
    }
};