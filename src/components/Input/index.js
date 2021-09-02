import { InputContainer1 } from "../../Pages/Login/styles";
// import { ContainerInput } from "../../Pages/Login/styles";

const Input = ({ label, icon: Icon, error, register, name, ...rest }) => {
  return (
    <div >
      <div>{label}</div>
      <InputContainer1>
        {Icon  && <Icon size={24}  />}
        <input {...register(name)} {...rest} />
      </InputContainer1>
      {!!error && <span style={{color:"red"}}>{error}</span>}
    </div>
  );
};

export default Input;
