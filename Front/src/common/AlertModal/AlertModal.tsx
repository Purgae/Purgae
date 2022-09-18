import { AlertModalProps } from "./AlertModal.types";
import { Fragment } from "react";
import FlexDiv from "../FlexDiv/FlexDiv";

import {
  DefaultAlertModal,
  NoticeAlertModal,
  DangerAlertModal,
  BlackAlertModal,
  RedAlertModal,
  PrimaryAlertModal,
  XButton,
} from "./AlertModal.styled";

const AlertModal = ({ styles = "DEFAULT", icon = true, ...props }: React.PropsWithChildren<AlertModalProps>) => {
  const args = {
    top: props.top,
    right: props.right,
  };

  const content = (
    <Fragment>
      <FlexDiv>
        {icon && <div className="material-icons-outlined">error_outline</div>}
        <div>{props.children}</div>
      </FlexDiv>
      <XButton styles={styles} onClick={props.offModal}>
        <span className="material-icons">close</span>
      </XButton>
    </Fragment>
  );

  switch (styles) {
    case "NOTICE":
      return <NoticeAlertModal {...args}>{content}</NoticeAlertModal>;

    case "DANGER":
      return <DangerAlertModal {...args}>{content}</DangerAlertModal>;

    case "BLACK":
      return <BlackAlertModal {...args}>{content}</BlackAlertModal>;

    case "PRIMARY":
      return <PrimaryAlertModal {...args}>{content}</PrimaryAlertModal>;

    case "RED":
      return <RedAlertModal {...args}>{content}</RedAlertModal>;

    default:
      return <DefaultAlertModal {...args}>{content}</DefaultAlertModal>;
  }
};

export default AlertModal;
