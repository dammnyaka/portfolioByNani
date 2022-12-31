import { useLocation, useNavigate, useParams } from "react-router-dom";
import { projects } from "../../../content-type/conten";
import "./ModalNext.scss";

const ModalNext = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const navigate = useNavigate();
  const location = useLocation();

  const NextProject = () => {
    const num = Number(id);
    const locationArr: any = location.pathname?.split("/") ?? [];
    const loc = locationArr[1] === "projects" ? "/projects/" : "/";
    if (num < projects?.length && num > 0) {
      navigate(loc + `${num + 1}`);
    } else {
      navigate(loc + "1");
    }
  };

  return (
    <button onClick={NextProject} type="button" className="ModalNext">
      <div className="arrow_next"></div>
    </button>
  );
};

export default ModalNext;
