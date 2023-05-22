import { useModalNavigation } from "../../hooks/useModalNavigation";
import "./ModalNext.scss";

const ModalNext = () => {
  const { next } = useModalNavigation();

  return (
    <button onClick={next} type="button" className="ModalNext">
      <div className="arrow_next"></div>
    </button>
  );
};

export default ModalNext;
