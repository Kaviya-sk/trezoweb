import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/data/MyContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from '../../components/loader/Loader';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const signup = async () => {
    setLoading(true)
    if (name === "" || email === "" || password === "") {
      return toast.error("All Fields are required");
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Successfully Signed Up");
      setName("");
      setEmail("");
      setPassword("");
      
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  return (
    <div className="bg-background flex justify-center items-center h-screen">
        {loading && <Loader />}
      <div className=" bg-gray-800 bg-opacity-70 px-10 py-10 rounded-xl w-full max-w-md">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" bg-white mb-8 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" bg-white mb-8 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray-200 outline-none"
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
          <button
            onClick={signup}
            className=" bg-white w-full lg:w-[20em] hover:bg-gray-800 hover:text-white  text-black font-bold mr-10 px-2 py-2 rounded-lg"
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-yellow-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
