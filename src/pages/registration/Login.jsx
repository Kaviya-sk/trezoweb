import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/data/MyContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

function Login() {
  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      toast.success("Login Successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      setLoading(false)


    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  return (
    <div className="bg-background flex justify-center items-center h-screen">
      
        {loading && <Loader />}
      <div className=" bg-gray-800 bg-opacity-70 px-10 py-10 rounded-xl w-full max-w-md ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" bg-white mt-4 mb-8 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-white mb-8 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button className=" bg-white hover:bg-gray-800 hover:text-white w-full lg:w-[20em] text-black font-bold mr-10 mb-4 mt-8 px-2 py-2 rounded-lg" onClick={login}>
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Don't have an account{" "}
            <Link className=" text-yellow-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;