import { memo, useRef } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../../content-type/conten";
import "./ModalProject.scss";

const ModalProject = memo(() => {
  const ModalRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const close = (e: any) => {
  //     if (!ModalRef.current?.contains(e.target)) {
  //       navigate("/projects");
  //       console.log(e.toElement);
  //     }
  //   };
  //   document.addEventListener("mousedown", close);

  //   return () => document.removeEventListener("mousedown", close);
  // }, [navigate]);

  const { id }: any = useParams();
  const project = projects[parseInt(id, 10) - 1];

  if (!project) return <div className="not_project">NOT PROJECT</div>;

  return (
    <div>
      <div className={"modalDiv"}>
        <div ref={ModalRef} className="modal">
          <div className="sidebar_user">
            <h2 className="sidebar_user_name">{project.name}</h2>
          </div>
          {/* {project.video2 && (
            <div className="video">
              <video crossOrigin="anonymous" poster={project.prev} preload="metadata" autoPlay>
                <source src={project.video2} type="video/mp4" datatype="jsonp" />
              </video>
            </div>
          )} */}
          {project.video && (
            <iframe title="asd" allowFullScreen style={{ width: "100%", border: "none" }} src={project.video}></iframe>
          )}
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
          <div>
            <img src={project.link} alt="" />
          </div>
          {project.link1 && (
            <div>
              <img src={project.link1} alt="" />
            </div>
          )}
          {project.link2 && (
            <div>
              <img src={project.link2} alt="" />
            </div>
          )}
          {project.link3 && (
            <div>
              <img src={project.link3} alt="" />
            </div>
          )}
          {project.link4 && (
            <div>
              <img src={project.link4} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default ModalProject;
