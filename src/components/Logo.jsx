import logo from "../assets/logo.png";

const Logo = () => {
  let primaryColor = "text-[#025]";

  return (
    <div className="wrap flex items-center">
      <img className="size-16 inline" src={logo} alt="Jobify Logo" />
      <span className={`${primaryColor} text-3xl `}>Jobify</span>
    </div>
  );
};
export default Logo;
