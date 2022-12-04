import { FC, useEffect, useState } from "react";
import "./style.scss";

enum TypePhase {
  Typing,
  Pausing,
  Deleting,
}

interface Props {
  props: string[];
}

const TYPING_INTERVAL = 100;
const PAUSE_TIME = 800;
const DELETING_INTERVAL = 40;

const Typewritter: FC<Props> = ({ props }) => {
  const [qw, setQw] = useState<string>("");
  const [typeWritter, setTypeWritter] = useState<string>("");
  const [indexProps, setIndexProps] = useState<number>(1);
  const [phase, setPhase] = useState(TypePhase.Typing);

  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const one = props[0].slice(0, qw.length + 1);
        const nextTypeWritter = props[indexProps].slice(0, typeWritter.length + 1);
        if (nextTypeWritter === typeWritter) {
          setPhase(TypePhase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setQw(one);
          if (one === qw) {
            setTypeWritter(nextTypeWritter);
          }
        }, TYPING_INTERVAL);
        return () => clearTimeout(timeout);
      }

      case TypePhase.Deleting: {
        if (!typeWritter) {
          const nextIndex = indexProps + 1;
          setIndexProps(props[nextIndex] ? nextIndex : 1);
          setPhase(TypePhase.Typing);
          return;
        }

        const backTypeWritter = props[indexProps].slice(0, typeWritter.length - 1);
        const timeout = setTimeout(() => {
          setTypeWritter(backTypeWritter);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case TypePhase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting);
        }, PAUSE_TIME);

        return () => clearTimeout(timeout);
    }
  }, [props, qw, typeWritter, phase, indexProps]);

  return (
    <div className="typewritter">
      <div className="staticType">{qw}</div>
      <div className="flashType">{typeWritter}</div>
    </div>
  );
};

export default Typewritter;
