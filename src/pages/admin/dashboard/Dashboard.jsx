import React, { useContext, useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import Layout from "../../../components/layout/Layout";
import MyContext from "../../../context/data/MyContext";
import DashboardTab from "./DashboardTab";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../../../firebase/FirebaseConfig";
import Product from "../../../assets/product.png";

function Dashboard() {
  const context = useContext(MyContext);
  const { mode } = context;

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);

  // Function to fetch total products
  const getTotalProducts = async () => {
    const querySnapshot = await getDocs(collection(fireDB, "products"));
    setTotalProducts(querySnapshot.size); // .size gives the number of documents
  };

  // Function to fetch total orders
  const getTotalOrders = async () => {
    const querySnapshot = await getDocs(collection(fireDB, "order"));
    setTotalOrders(querySnapshot.size);
  };

  // Function to fetch total users
  const getTotalUsers = async () => {
    const querySnapshot = await getDocs(collection(fireDB, "users"));
    setTotalUsers(querySnapshot.size);
  };

  const getTotalCategories = async () => {
    const querySnapshot = await getDocs(collection(fireDB, "products"));
    const categorySet = new Set();
    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      if (productData.category) {
        categorySet.add(productData.category); // Add each category to the set
      }
    });
    setTotalCategories(categorySet.size); // Set the number of unique categories
  };

  // Fetch data on component mount
  useEffect(() => {
    getTotalProducts();
    getTotalOrders();
    getTotalUsers();
    getTotalCategories();
  }, []);

  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  {/* <FaUserTie size={50} /> */}
                  <img
                    src={Product}
                    alt="productIcon"
                  
                  />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {totalProducts}
                </h2>
                <p
                  className=" text-black  font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  {/* <FaUserTie size={50} /> */}
                  <img src="./order.png" alt="OrdersIcon" />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {totalOrders}
                </h2>
                <p
                  className=" text-purple-500  font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Orders
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  {/* <FaUserTie size={50} /> */}
                  <img src="./user.png" alt="userIcon"  />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {totalUsers}
                </h2>
                <p
                  className=" text-purple-500  font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Users
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  {/* <FaUserTie size={50} /> */}
                  <img src="./category.png" alt="categoryIcon" />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {totalCategories}
                </h2>
                <p
                  className=" text-purple-500  font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Categories
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;
