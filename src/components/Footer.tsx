"use client";

import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/joy";
import Image from "next/image";
import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Container maxWidth={"xl"}>
      <Box
        sx={{
          px: 3,
          pb: 6,
        }}
      >
        <Divider sx={{ mb: 8 }} />
        <Grid container spacing={3}>
          <Grid xs={3} display={"flex"} alignItems={"center"}>
            <Image
              src="/logo.svg"
              alt="logo"
              width={200}
              height={200}
              // layout="responsive"
            />
          </Grid>
          <Grid
            xs={3}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            gap={2}
          >
            <FooterLink
              title="Our Proprietary Agents"
              links={[
                { name: "AutoPhil" },
                { name: "ChatOCR" },
                { name: "Future Agents" },
              ]}
            />
            <FooterLink
              title="Community"
              links={[{ name: "Newsletter" }, { name: "Discord" }]}
            />
          </Grid>
          <Grid
            xs={3}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            gap={2}
          >
            <FooterLink
              title="Resources"
              links={[
                { name: "View All Agents" },
                { name: "Future Agents" },
                { name: "Request New Agents" },
                { name: "Submit new agent" },
              ]}
            />
            <FooterLink title="Support" links={[{ name: "Help Center" }]} />
          </Grid>
          <Grid
            xs={3}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            gap={2}
          >
            <FooterLink
              title="Company"
              links={[{ name: "About" }, { name: "Affiliates" }]}
            />
            <FooterLink title="Join Our Team" links={[{ name: "Jobs" }]} />
            <FooterLink title="Investors" links={[{ name: "Contact here" }]} />
          </Grid>
        </Grid>
        <Box m={"auto"} width={"fit-content"} display={"flex"} gap={3}>
          <TwitterIcon sx={{ fontSize: "2em" }} />
          <FacebookIcon sx={{ fontSize: "2em" }} />
          <InstagramIcon sx={{ fontSize: "2em" }} />
          <YouTubeIcon sx={{ fontSize: "2em" }} />
        </Box>
        <Breadcrumbs
          separator="|"
          aria-label="breadcrumb"
          sx={{
            margin: "auto",
            my: 3,
            width: "fit-content",
          }}
        >
          <Typography color="neutral">Privacy Policy</Typography>
          <Typography color="neutral">Cookie Policy</Typography>
          <Typography color="neutral">
            Do Not Sell My Personal Information
          </Typography>
          <Typography color="neutral">Terms</Typography>
        </Breadcrumbs>
        <Typography color="neutral" textAlign={"center"}>
          &copy; {new Date().getFullYear()} Staf.ai
        </Typography>
      </Box>
    </Container>
  );
}

const FooterLink = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href?: string }[];
}) => {
  return (
    <Box
      sx={{
        mb: 3,
      }}
    >
      <Typography level="body1" fontWeight={"bold"}>
        {title}
      </Typography>
      <List
        sx={{
          "& li": {
            paddingLeft: 0,
          },
        }}
      >
        {links.map(({ name, href }, i) => (
          <ListItem key={i}>{name}</ListItem>
        ))}
      </List>
    </Box>
  );
};
