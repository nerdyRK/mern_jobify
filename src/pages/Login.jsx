import { Link } from "react-router-dom";
import { FormRow, Logo } from "../components";

const Login = () => {
  return (
    <div className="login flex flex-col items-center gap-y-8 pt-4 bg-slate-500 h-screen  ">
      <Logo></Logo>
      <h1 className="text-4xl font-semibold">Login</h1>
      <form className="flex p-4 flex-col gap-4 border-solid border-2 border-slate-100">
        <FormRow name="email" type="email" defaultValue="John@gmail.com" />
        <FormRow name="password" type="password" defaultValue="1234 " />
        <button
          type="button"
          className="block bg-blue-400 text-white font-semibold w-full py-2 rounded-2xl"
        >
          Submit
        </button>
        <button
          type="button"
          className="block bg-blue-400 text-white font-semibold w-full py-2 rounded-2xl"
        >
          Explore the App
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link className="text-blue-600 font-semibold" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
