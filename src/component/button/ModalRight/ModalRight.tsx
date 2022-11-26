import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../../../content-type/conten";
import "./ModalRight.scss";

const ModalRight = () => {
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
    <button onClick={NextProject} type="button" className="ModalRight">
      Right
    </button>
  );
};

export default ModalRight;
