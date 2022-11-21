import loading from "../../utils/loading.svg";
import "./styles.css";
const Loader = () => {
  return (
    <div className="loader__container">
      <img className="loader" src={loading} alt="Loading" />
    </div>
  );
};
export default Loader;
