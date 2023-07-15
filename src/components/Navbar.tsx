"use client";

import { Avatar, Box, Button, Container, Typography } from "@mui/joy";
import Badge from "@mui/joy/Badge";
import React, { useState } from "react";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "./Link";

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
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={80} height={20} />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          <Typography level="body1">Blog</Typography>
          <Link href="/contact-us">Contact Us</Link>
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
          {/* <Avatar sx={{ width: 35, height: 35 }} /> */}
          <Link href="/login">Login</Link>
        </Box>
      </Box>
    </Container>
  );
}
