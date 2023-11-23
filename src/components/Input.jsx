

// eslint-disable-next-line react/prop-types
const Input = ({ id, onChange, value, type, label }) => {
  return (
    <div className="form-floating mb-3">
      <input
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        className="form-control"
        placeholder=" "
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;
