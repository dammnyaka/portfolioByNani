import { useLocation, useNavigate, useParams } from "react-router-dom";
import { projects } from "../../../content-type/conten";
import "./ModalBack.scss";

const ModalBack = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const navigate = useNavigate();
  const location = useLocation();

  const BackProject = () => {
    const num = Number(id);
    const nan = isNaN(num);
    const locationArr = location.pathname?.split("/") ?? [];
    const loc = locationArr[1] === "projects" ? "/projects/" : "/";
    if (num === 1 || num < 0 || num > projects?.length || nan) {
      navigate(loc + `${projects.length}`);
    } else {
      navigate(loc + `${num - 1}`);
    }
  };

  return (
    <button onClick={BackProject} type="button" className="ModalBack">
      <div className="arrow_back"></div>
    </button>
  );
};

export default ModalBack;
