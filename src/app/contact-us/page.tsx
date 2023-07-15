"use client";

import Input from "@/components/Inputs";
import Subscribe from "@/components/Subscribe";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Textarea,
  Typography,
} from "@mui/joy";
import React from "react";

export default function ContactUs() {
  return (
    <Container maxWidth={"xl"}>
      <Typography
        level="h3"
        textAlign={"center"}
        fontWeight={"600"}
        fontSize={"3.5rem"}
        sx={{
          textWrap: "balance",
          pb: 8,
        }}
      >
        Contact Us
      </Typography>
      <Typography level="h5" textAlign={"center"} my={2}>
        Get in touch, we would love to hear from you.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
          gap: 1.5,
          maxWidth: "md",
          margin: "auto",
          py: 2,
          pb: 8,
        }}
      >
        <FormControl>
          <FormLabel>Your Name</FormLabel>
          <Input size="lg" placeholder="Enter your e-mail" />
        </FormControl>

        <FormControl>
          <FormLabel>What is your role ?</FormLabel>
          <Input size="lg" type="password" placeholder="Enter your password" />
        </FormControl>

        <FormControl>
          <FormLabel>Your Email</FormLabel>
          <Input
            size="lg"
            type="password"
            placeholder="Enter your password again"
          />
        </FormControl>

        <FormControl
          sx={{
            gridRow: "1 / 4",
            gridColumn: "2 / -1",
          }}
        >
          <FormLabel>Your Message</FormLabel>
          <Textarea
            placeholder="Let us know how can we help you"
            sx={{
              height: "100%",
            }}
          />
        </FormControl>
      </Box>
      <Subscribe divider={false} />
    </Container>
  );
}
