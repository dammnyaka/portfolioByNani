import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../../../content-type/conten";
import "./ModalBack.scss";

const ModalBack = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const navigate = useNavigate();

  const BackProject = () => {
    const num = Number(id);
    const nan = isNaN(num);
    if (num === 1 || num < 0 || num > projects?.length || nan) {
      navigate(`/projects/${projects.length}`);
    } else {
      navigate(`/projects/${num - 1}`);
    }
  };

  return (
    <button onClick={BackProject} type="button" className="ModalBack">
      Back
    </button>
  );
};

export default ModalBack;
