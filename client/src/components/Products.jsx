import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productListAction } from "../Redux/Actions/Product";

const Products = () => {
  const dispatch = useDispatch();
  const productListReducer = useSelector((state) => state.productListReducer);
  const { loading, error, products = [] } = productListReducer;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div className="w-full"> {/* Ensure full width */}
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto px-5 py-24">
              <div className="flex flex-wrap -m-4"> {/* Removed justify-center */}
                {products.map((product) => (
                  <div className="p-4 lg:w-1/4 md:w-1/2" key={product.id}>
                    <div className="bg-white h-full flex flex-col"> {/* Ensure full height */}
                      <div className="max-w-2xl h-full flex flex-col justify-between"> {/* Flex column for proper alignment */}
                        <Link to={`/products/${product._id}`} className="overflow-hidden rounded-md bg-gray-200 flex-grow"> {/* Wrap img in Link */}
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover" // Adjusted for cover
                          />
                        </Link>
                        <div className="mt-4 flex justify-between items-end"> {/* Adjusted to ensure items are at the bottom */}
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              Review Count: {product.numReview}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Products;
