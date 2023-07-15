import React from "react";
import NextLink from "next/link";
import { Link as MuiLink } from "@mui/joy";

export default function Link(
  props: React.ComponentProps<typeof MuiLink> & { href: string }
) {
  return (
    <MuiLink
      component={NextLink}
      {...props}
      sx={{
        textDecoration: "none",
        color: "primary.main",
      }}
    />
  );
}
