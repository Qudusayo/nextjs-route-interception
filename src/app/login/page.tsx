"use client";

import * as React from "react";
import { Box } from "@mui/joy";
import { LoginInput } from "@/components/AuthInputs";

export default function Login() {
  return (
    <Box
      sx={{
        maxWidth: "90%",
        mx: "auto",
        my: 12,
      }}
    >
      <LoginInput />
    </Box>
  );
}
