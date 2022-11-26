import { useEffect, FC, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../loader";
import Modal from "./Modal";

const ModalProject = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("../page/projects/ModalProject");
});

// const ModalProject = lazy(() => {
//   return new Promise<any>((resolve) => {
//     setTimeout(() => {
//       resolve(import("../page/projects/ModalProject"));
//     }, 1000);
//   });
// });

const NewModal: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = () => {
    document.body.style.overflow = "";
    navigate("/projects");
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

export default NewModal;
