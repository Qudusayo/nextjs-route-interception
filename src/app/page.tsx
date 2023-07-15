"use client";

import React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  Input,
  TabPanel,
  Typography,
} from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import PreviewCard from "@/components/PreviewCard";
import Subscribe from "@/components/Subscribe";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Home() {
  const [tabValue, setTabValue] = React.useState(0);
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 6 }}>
        <Typography
          level="h1"
          textAlign={"center"}
          fontWeight={"600"}
          fontSize={"6.25rem"}
          sx={{
            textWrap: "balance",
            lineHeight: "1",
          }}
        >
          Say Hello to Your New AI Employee
        </Typography>
        <Typography level="h5" textAlign={"center"}>
          Browse vetted AI agents, tools, and copilots
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 6,
        }}
      >
        <Tabs
          aria-label="Plain tabs"
          value={tabValue}
          onChange={(event, value) => setTabValue(value as number)}
          sx={{ borderRadius: "md", backgroundColor: "rgba(0,0,0,0.1)" }}
        >
          <TabList variant="plain">
            <Tab variant={tabValue === 0 ? "outlined" : "plain"}>Discover</Tab>
            <Tab variant={tabValue === 1 ? "outlined" : "plain"}>Trending</Tab>
            <Tab variant={tabValue === 2 ? "outlined" : "plain"}>Onsale</Tab>
            <Tab variant={tabValue === 3 ? "outlined" : "plain"}>Upcoming</Tab>
            <Tab variant={tabValue === 4 ? "outlined" : "plain"}>New</Tab>
          </TabList>
        </Tabs>
      </Box>

      <FormControl
        id="Id"
        required
        size="lg"
        color="primary"
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "md",
          margin: "auto",
          my: 6,
          maxWidth: "700px",
        }}
      >
        <Input
          placeholder="Search"
          name="Name"
          type="tel"
          autoComplete="on"
          autoFocus
          error={false}
          fullWidth
          variant="plain"
          color="neutral"
          startDecorator={<SearchIcon />}
        />
      </FormControl>

      <Tabs
        aria-label="Pipeline"
        value={tabIndex}
        onChange={(event, value) => setTabIndex(value as number)}
        sx={{ "--Tabs-gap": "0px" }}
      >
        <TabList
          variant="plain"
          sx={{
            width: "100%",
            maxWidth: 400,
            mx: "auto",
            my: 4,
            mt: 0,
            // pt: 2,
            alignSelf: "flex-start",
            [`& .${tabClasses.root}`]: {
              bgcolor: "transparent",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "transparent",
              },
              [`&.${tabClasses.selected}`]: {
                color: "primary.plainColor",
                fontWeight: "lg",
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  zIndex: 1,
                  bottom: "-1px",
                  left: "var(--ListItem-paddingLeft)",
                  right: "var(--ListItem-paddingRight)",
                  height: "3px",
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                  bgcolor: "primary.500",
                },
              },
            },
          }}
        >
          <Tab
            sx={{ borderBottom: "1px solid rgba(0,0,0,0.12)", borderRadius: 0 }}
          >
            Operations{" "}
          </Tab>
          <Tab
            sx={{ borderBottom: "1px solid rgba(0,0,0,0.12)", borderRadius: 0 }}
          >
            HR{" "}
          </Tab>
          <Tab
            sx={{ borderBottom: "1px solid rgba(0,0,0,0.12)", borderRadius: 0 }}
          >
            Sales
          </Tab>
          <Tab
            sx={{ borderBottom: "1px solid rgba(0,0,0,0.12)", borderRadius: 0 }}
          >
            Marketing
          </Tab>
          <Tab
            sx={{ borderBottom: "1px solid rgba(0,0,0,0.12)", borderRadius: 0 }}
          >
            Finance
          </Tab>
        </TabList>
        <Box
          sx={(theme) => ({
            "--bg": theme.vars.palette.background.surface,
            background: "var(--bg)",
            boxShadow: "0 0 0 100vmax var(--bg)",
            clipPath: "inset(0 -100vmax)",
            px: 4,
            py: 2,
          })}
        >
          <TabPanel value={0}>
            <TabContent />
          </TabPanel>
          <TabPanel value={1}>
            <TabContent />
          </TabPanel>
          <TabPanel value={2}>
            <TabContent />
          </TabPanel>
          <TabPanel value={3}>
            <TabContent />
          </TabPanel>
          <TabPanel value={4}>
            <TabContent />
          </TabPanel>
        </Box>
        <Divider
          sx={{
            my: 3,
            px: 3,
          }}
        >
          <Button>Show More</Button>
        </Divider>
      </Tabs>
      <Subscribe />
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          typography: "body1",
          my: 4,
          px: 3,
        }}
      >
        <Typography
          level="h3"
          textAlign={"center"}
          sx={{
            textWrap: "balance",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          Welcome to this scheduling embed example for Sales Teams.
        </Typography>
        <Grid container spacing={4} columns={16} my={1}>
          <Grid xs={8}>
            <DiscoveryCard title="Discovery call" boxColor="#FFA600" />
          </Grid>
          <Grid xs={8}>
            <DiscoveryCard title="Account review" boxColor="#17E885" />
          </Grid>
          <Grid xs={8}>
            <DiscoveryCard title="Pricing review" boxColor="#0099FF" />
          </Grid>
          <Grid xs={8}>
            <DiscoveryCard title="Discovery call" boxColor="#F8E436" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const DiscoveryCard = ({
  title,
  boxColor,
}: {
  title: string;
  boxColor: string;
}) => {
  return (
    <Box
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      p={2}
      py={3}
      borderRadius={"10px"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Box
            width={"20px"}
            height={"20px"}
            bgcolor={boxColor}
            borderRadius={"50%"}
          />
          <Typography level="h4" textAlign={"center"}>
            {title}
          </Typography>
        </Box>
        <PlayArrowIcon fontSize="medium" />
      </Box>
      <Typography level="body1" textAlign={"justify"} mt={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam
        consectetur delectus dolore aliquid animi rem dicta! Est autem cumque,
        laudantium consequatur tempora inventore sed similique unde facere
        dolores eaque molestias odit illo iste ex, natus delectus reprehenderit
        vero. Nisi.
      </Typography>
    </Box>
  );
};

const TabContent = () => {
  return (
    <Grid container spacing={3}>
      <Grid xs={3}>
        <PreviewCard
          name="Tripnotes"
          description="Personalized travel palnner software"
          image="/images/tripNotes.png"
          price={40}
        />
      </Grid>
      <Grid xs={3}>
        <PreviewCard
          name="Tripnotes"
          description="Personalized travel palnner software"
          image="/images/tripNotes.png"
          price={40}
        />
      </Grid>
      <Grid xs={3}>
        <PreviewCard
          name="Flair AI"
          description="Brand Content with AI"
          image="/images/flairAI.png"
          price={40}
        />
      </Grid>
      <Grid xs={3}>
        <PreviewCard
          name="Random"
          description="Some random description"
          image="/images/flairAI.png"
          price={40}
        />
      </Grid>
      <Grid xs={3}>
        <PreviewCard
          name="Flair AI"
          description="Brand Content with AI"
          image="/images/flairAI.png"
          price={40}
        />
      </Grid>
      <Grid xs={3}>
        <PreviewCard
          name="Random"
          description="Some random description"
          image="/images/flairAI.png"
          price={40}
        />
      </Grid>
      <Grid xs={3}>
        <PreviewCard
          name="Tripnotes"
          description="Personalized travel palnner software"
          image="/images/tripNotes.png"
          price={40}
        />
      </Grid>
      <Grid xs={3}>
        <PreviewCard
          name="Tripnotes"
          description="Personalized travel palnner software"
          image="/images/tripNotes.png"
          price={40}
        />
      </Grid>
    </Grid>
  );
};
