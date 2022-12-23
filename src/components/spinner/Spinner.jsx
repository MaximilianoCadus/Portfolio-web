import { Bars } from "react-loader-spinner";
import "../../css/spinner/spinner.css";

function spinner() {
  return (
    <div className="spinner">
      <Bars height="80" width="80" color="#7c117c" ariaLabel="bars-loading" />
    </div>
  );
}

export default spinner;
