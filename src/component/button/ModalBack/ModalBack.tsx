import { useModalNavigation } from "../../hooks/useModalNavigation";
import "./ModalBack.scss";

const ModalBack = () => {
  const { back } = useModalNavigation();

  return (
    <button onClick={back} type="button" className="ModalBack">
      <div className="arrow_back"></div>
    </button>
  );
};

export default ModalBack;
