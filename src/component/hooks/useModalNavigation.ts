import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../../content-type/conten";

export const useModalNavigation = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentId, setCurrentId] = useState<number>(Number(id!));
  const [direction, setDirection] = useState<number>(0);

  useEffect(() => {
    setCurrentId(Number(id));
  }, [id]);

  const navigateTo = (nextId: number) => {
    const locationArr = location.pathname?.split("/") ?? [];
    const loc = locationArr[1] === "projects" ? "/projects/" : "/";
    if (nextId < 1 || nextId > projects?.length) {
      navigate(loc + `${nextId > Number(currentId) ? 1 : projects.length}`, { state: `${currentId}` });
    } else {
      navigate(loc + `${nextId}`, { state: `${currentId}` });
    }
  };

  const next = () => {
    setDirection(1);
    navigateTo(Number(currentId) + 1);
  };

  const back = () => {
    setDirection(-1);
    navigateTo(Number(currentId) - 1);
  };

  return {
    currentId,
    direction,
    next,
    back,
  };
};
