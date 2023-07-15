import React from "react";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import EmailIcon from "@mui/icons-material/Email";
import FormHelperText from "@mui/joy/FormHelperText";
import { Box, Divider, Typography } from "@mui/joy";
import { Container } from "@mui/joy";

export default function Subscribe({ divider = true }: { divider?: boolean }) {
  const [data, setData] = React.useState<{
    email: string;
    status: "initial" | "loading" | "failure" | "sent";
  }>({
    email: "",
    status: "initial",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };

  return (
    <Container maxWidth={"xl"}>
      <Typography
        level="h3"
        textAlign={"center"}
        fontWeight={"600"}
        fontSize={"3.5rem"}
        sx={{
          textWrap: "balance",
        }}
      >
        Stay up to date
        <br /> with our newsletter
      </Typography>
      <form onSubmit={handleSubmit} id="demo">
        <FormControl
          sx={{
            width: "90%",
            maxWidth: "375px",
            margin: "auto",
            my: 3,
          }}
        >
          <Input
            sx={{ "--Input-decoratorChildHeight": "45px" }}
            placeholder="Enter your e-mail"
            type="email"
            required
            value={data.email}
            onChange={(event) =>
              setData({ email: event.target.value, status: "initial" })
            }
            error={data.status === "failure"}
            startDecorator={<EmailIcon />}
            endDecorator={
              <Button
                variant="solid"
                color="primary"
                loading={data.status === "loading"}
                type="submit"
                sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                Subscribe
              </Button>
            }
          />
          {data.status === "failure" && (
            <FormHelperText
              sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
            >
              Oops! something went wrong, please try again later.
            </FormHelperText>
          )}
          {data.status === "sent" && (
            <FormHelperText
              sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
            >
              You are all set!
            </FormHelperText>
          )}
        </FormControl>
      </form>
      {divider && <Divider sx={{ my: 4 }} />}
    </Container>
  );
}
