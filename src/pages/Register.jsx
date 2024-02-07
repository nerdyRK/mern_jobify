import { Link } from "react-router-dom";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <div className="register flex flex-col items-center gap-y-8 pt-4 bg-slate-500 h-screen  ">
      <Logo></Logo>
      <h2 className="text-4xl font-semibold">Register</h2>
      <form className="flex p-4 flex-col gap-4 border-solid border-2 border-slate-100">
        <FormRow name="name" type="text" defaultValue="John" />
        <FormRow
          name="lastName"
          type="text"
          defaultValue="smith"
          labelText="last name"
        />
        <FormRow name="email" type="email" defaultValue="John@gmail.com" />
        <FormRow name="password" type="password" defaultValue="1234 " />
        <button
          type="submit"
          className="block bg-blue-400 text-white font-semibold w-full py-2 rounded-2xl"
        >
          Submit
        </button>
        <p className="text-center">
          Already a member?{" "}
          <Link className="text-blue-600 font-semibold" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Register;
