import React, { useContext } from "react";
import MyContext from "../../../../context/data/MyContext";

function AddProduct() {
  const context = useContext(MyContext);
  const { products, setProducts, addProduct } = context;

  return (
    <div>
      <div className="flex justify-center bg-custom-gradient items-center h-screen ">
        <div className=" bg-darkblue px-10 py-10 rounded-xl h-[35em]">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Add Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              value={products.title}
              name="title"
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              value={products.price}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              name="imageurl"
              onChange={(e) =>
                setProducts({ ...products, imgURL: e.target.value })
              }
              value={products.imgURL}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
              value={products.category}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="desc"
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
              value={products.description}
              className=" bg-gray-600 mb-4 px-2 py-2 h-[10em] w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product Description  "
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={addProduct}
              className=" bg-lightgreen hover:lightblue w-full text-black font-bold  px-2 py-2 rounded-lg"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
