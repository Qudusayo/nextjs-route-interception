import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import * as MuiInput from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

export default function Input(
  props: React.ComponentProps<typeof MuiInput.default>
) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  if (props.type === "password")
    return (
      <MuiInput.default
        {...props}
        placeholder={props.placeholder}
        type={passwordVisible ? "text" : "password"}
        size="lg"
        endDecorator={
          <IconButton
            sx={{
              backgroundColor: "transparent",
              color: "rgba(74, 74, 74, 0.7)",

              "&:hover": {
                backgroundColor: "transparent",
                color: "rgba(74, 74, 74, 1)",
              },
            }}
            onClick={() => setPasswordVisible((prevState) => !prevState)}
          >
            {passwordVisible ? (
              <VisibilityOffRoundedIcon />
            ) : (
              <VisibilityRoundedIcon />
            )}
          </IconButton>
        }
      />
    );

  return (
    <>
      <MuiInput.default {...props} size="lg" />
    </>
  );
}
