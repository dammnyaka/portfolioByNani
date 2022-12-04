import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../../../content-type/conten";
import "./ModalNext.scss";

const ModalNext = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const navigate = useNavigate();

  const NextProject = () => {
    const num = Number(id);
    if (num < projects?.length && num > 0) {
      navigate(`/projects/${num + 1}`);
    } else {
      navigate("/projects/1");
    }
  };

  return (
    <button onClick={NextProject} type="button" className="ModalNext">
      Next
    </button>
  );
};

export default ModalNext;
