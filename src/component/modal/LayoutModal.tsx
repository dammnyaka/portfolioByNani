import { useEffect, FC, lazy, Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Loader from "../loader";
import Modal from "./Modal";

const ModalProject = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("../page/projects/ModalProject");
});

const LayoutModal: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const closeModal = () => {
    const locationArr = location.pathname?.split("/") ?? [];
    const loc = locationArr[1] === "projects" ? "/projects" : "/";
    navigate(loc);
  };

  return (
    <>
      <Modal close={closeModal}>
        <Suspense fallback={<Loader />}>
          <ModalProject />
        </Suspense>
      </Modal>
    </>
  );
};

export default LayoutModal;
