import loading from "../../utils/loading.svg";
import styles from "./styles.css";
const Loader = () => {
  return (
    <div className="loader_container">
      <img className="loader" src={loading} alt="Loading" />
    </div>
  );
};
export default Loader;
