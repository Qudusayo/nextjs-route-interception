"use client";

import * as React from "react";
import { Box } from "@mui/joy";
import { RegisterInput } from "@/components/AuthInputs";

export default function SignUp() {
  return (
    <Box
      sx={{
        maxWidth: "90%",
        mx: "auto",
        my: 12,
      }}
    >
      <RegisterInput />
    </Box>
  );
}
