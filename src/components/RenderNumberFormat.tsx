import NumberFormat from "react-number-format";
import React, {FC} from "react";

type RenderNumberFormtProps = {
  value: number;
  className?: string;
}

const RenderNumberFormat: FC<RenderNumberFormtProps> = (props) => {
  return (
    <NumberFormat
      thousandSeparator={true}
      prefix={"¥"}
      value={props.value}
      displayType={"text"}
      className={props.className}
    />
  )
}

export default RenderNumberFormat;
