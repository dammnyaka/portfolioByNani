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
  const [staticType, setStaticType] = useState<string>("");
  const [dynamicType, setDynamicType] = useState<string>("");
  const [indexProps, setIndexProps] = useState<number>(1);
  const [phase, setPhase] = useState(TypePhase.Typing);

  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const one = props[0].slice(0, staticType.length + 1);
        const nextTypeWritter = props[indexProps].slice(0, dynamicType.length + 1);
        if (nextTypeWritter === dynamicType) {
          setPhase(TypePhase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setStaticType(one);
          if (one === staticType) {
            setDynamicType(nextTypeWritter);
          }
        }, TYPING_INTERVAL);
        return () => clearTimeout(timeout);
      }

      case TypePhase.Deleting: {
        if (!dynamicType) {
          const nextIndex = indexProps + 1;
          setIndexProps(props[nextIndex] ? nextIndex : 1);
          setPhase(TypePhase.Typing);
          return;
        }

        const backTypeWritter = props[indexProps].slice(0, dynamicType.length - 1);
        const timeout = setTimeout(() => {
          setDynamicType(backTypeWritter);
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
  }, [props, staticType, dynamicType, phase, indexProps]);

  return (
    <div className="typewritter">
      <div className="staticType">{staticType}</div>
      <div className="dynamicType">{dynamicType}</div>
    </div>
  );
};

export default Typewritter;
