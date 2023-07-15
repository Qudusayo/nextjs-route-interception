import { Avatar, Box, Button, Container, Typography } from "@mui/joy";
import Badge from "@mui/joy/Badge";
import React, { useState } from "react";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        <Box component={"div"} sx={{ display: "block" }}>
          <Image src="/logo.svg" alt="logo" width={80} height={20} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          <Typography level="body1">Blog</Typography>
          <Typography level="body1">Contact Us</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon sx={{ fontSize: "1.5em" }} color="action" />
          </Badge>
          <Avatar sx={{ width: 35, height: 35 }} />
        </Box>
      </Box>
    </Container>
  );
}
