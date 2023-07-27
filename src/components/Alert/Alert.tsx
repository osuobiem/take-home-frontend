import {useEffect, useState} from "react";
import * as S from "./Alert.style";

type PropsType = {
  show?: boolean;
  hideAlert?: () => void;
  content: string;
  type?: "success" | "warning" | "error";
  float?: boolean;
};

type AlertType = {
  $border: string;
  $bg: string;
  $color: string;
};

const warning: AlertType = {
  $border: "#F79009",
  $bg: "#FFFAEB",
  $color: "#B54708",
};
const error: AlertType = {
  $border: "#F04438",
  $bg: "#FEF3F2",
  $color: "#B42318",
};
const success: AlertType = {
  $border: "#12B76A",
  $bg: "#ECFDF3",
  $color: "#027A48",
};
const alertColours = {warning, success, error};

export const Alert = ({
  show = false,
  hideAlert = () => {},
  content,
  type = "success",
  float = true,
  ...rest
}: PropsType) => {
  const [classes, setClasses] = useState("hidden");

  useEffect(() => {
    if (show) {
      setClasses("animate__fadeIn");

      if (float) {
        setTimeout(() => {
          hideAlert();
        }, 4000);

        setTimeout(() => {
          setClasses("animate__fadeOut");
        }, 3000);
      }
    } else {
      setClasses("hidden");
    }
  }, [show, float, hideAlert]);

  return (
    <S.AlertContainer
      $float={float}
      {...alertColours[type]}
      className={`animate__animated ${classes}`}
      {...rest}
    >
      <p>{content}</p>
    </S.AlertContainer>
  );
};
