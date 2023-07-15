"use client";

import { useState } from "react";
import * as MuiModal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <MuiModal.default
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={true}
      onClose={() => router.back()}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          width: "100%",
          flex: 1,
          maxWidth: "500px",
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
      >
        {children}
      </Sheet>
    </MuiModal.default>
  );
}
