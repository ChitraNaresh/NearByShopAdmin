import "./formHeader.scss";
import appLogo from "../../../assets/logo.svg";

const FormHeader = ({ welcomeText, formName }) => {
  return (
    <div className="form-header">
      {welcomeText && <h2>{welcomeText}</h2>}
      {welcomeText && <img src={appLogo} alt="" />}
      <h3>{formName}</h3>
    </div>
  );
};

export default FormHeader;
