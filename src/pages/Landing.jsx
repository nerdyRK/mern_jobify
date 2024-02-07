import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Logo } from "../components";
// import style from "./Landing.module.css";

const Landing = () => {
  let primaryColor = "text-[#025]";

  return (
    <div className="landing-page h-screen bg-slate-400 text-teal-50 py-12 px-64 flex flex-col gap-y-40 justify-center items-start">
      <Logo />
      <div className="hero text-black flex justify-center gap-x-60 items-center">
        <div className="left ">
          <h1 className="text-4xl">
            Job{" "}
            <span className={`${primaryColor} font-semibold`}>Tracking </span>
            App
          </h1>
          <p className="max-w-[500px] pt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            temporibus, veritatis nisi id provident iure rem eius beatae ullam
            consectetur corporis eveniet qui at, perferendis ea adipisci modi
            velit et explicabo. Possimus nihil ratione voluptate quia sit
            commodi vitae maiores fugiat animi repellat obcaecati dolores,
            facere illo voluptatum corporis perferendis.
          </p>
          <Link
            to="/register"
            className={`bg-[#025] text-white mt-4 mr-5 px-4 py-2 inline-block rounded`}
          >
            Register
          </Link>
          <Link
            to="/login"
            className={`bg-[#025] text-white mt-4 px-4 py-2 inline-block rounded`}
          >
            Guest Login
          </Link>
        </div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};
export default Landing;
