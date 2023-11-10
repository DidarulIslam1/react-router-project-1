import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";


const Products = () => {
    const { products } = useLoaderData();
    // console.log(products);
    return (
        <div className="grid grid-cols-1 p-5 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-32 lg:py-14 gap-8">
            {
                products.map(product => <ProductsCard
                    key={product.id}
                    product={product}
                ></ProductsCard>)
            }
        </div>
    );
};

export default Products;