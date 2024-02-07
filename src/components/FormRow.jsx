const FormRow = ({ name, type, labelText, defaultValue }) => {
  return (
    <div className="form-row flex flex-col justify-between min-w-[300px] ">
      <label className="text-white block" htmlFor={name}>
        {labelText || name}
      </label>
      <input
        className="rounded-xl px-4 py-2 w-full"
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ""}
        required
      />
    </div>
  );
};
export default FormRow;
