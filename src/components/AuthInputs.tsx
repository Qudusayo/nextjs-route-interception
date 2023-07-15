import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Typography,
} from "@mui/joy";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { IoKeySharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Input from "./Inputs";
import Link from "./Link";

export function LoginInput() {
  return (
    <Card
      // variant="outlined"
      sx={{
        maxHeight: "max-content",
        Width: "100%",
        maxWidth: "500px",
        mx: "auto",
        boxShadow: "none",
        p: 0,
      }}
    >
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Email</FormLabel>
          <Input
            size="lg"
            placeholder="Enter your e-mail"
            startDecorator={<MailOutlineIcon />}
          />
        </FormControl>

        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Password</FormLabel>
          <Input
            size="lg"
            type="password"
            startDecorator={
              <IoKeySharp
                size={27}
                style={{
                  transform: "scaleX(-1)",
                }}
              />
            }
            placeholder="Enter your password"
          />
        </FormControl>
        <FormControl>
          <Checkbox label="Remeber Me" sx={{ gridColumn: "1/-1", my: 1 }} />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          Forget Password ?
        </Box>
        <CardActions sx={{ gridColumn: "1/-1" }}>
          <Button variant="solid" color="primary" size="lg">
            Sign In
          </Button>
        </CardActions>
        <Box sx={{ gridColumn: "1/-1", textAlign: "center", my: 1 }}>
          <Typography level="body2" color="neutral">
            Don&apos;t have an account? <Link href="/sign-up">Sign Up</Link>
          </Typography>
        </Box>
        <Divider sx={{ gridColumn: "1/-1", py: 1 }}>Or with</Divider>
        <Box>
          <Button
            variant="outlined"
            color="neutral"
            size="lg"
            fullWidth
            startDecorator={<FcGoogle size={25} />}
          >
            Google
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="neutral"
            size="lg"
            fullWidth
            startDecorator={<FaApple size={25} />}
          >
            Apple
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export function RegisterInput() {
  return (
    <Card
      // variant="outlined"
      sx={{
        maxHeight: "max-content",
        Width: "100%",
        maxWidth: "500px",
        mx: "auto",
        boxShadow: "none",
        p: 0,
      }}
    >
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Email</FormLabel>
          <Input
            size="lg"
            placeholder="Enter your e-mail"
            startDecorator={<MailOutlineIcon />}
          />
        </FormControl>

        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Password</FormLabel>
          <Input
            size="lg"
            type="password"
            startDecorator={
              <IoKeySharp
                size={27}
                style={{
                  transform: "scaleX(-1)",
                }}
              />
            }
            placeholder="Enter your password"
          />
        </FormControl>

        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            size="lg"
            type="password"
            startDecorator={
              <IoKeySharp
                size={27}
                style={{
                  transform: "scaleX(-1)",
                }}
              />
            }
            placeholder="Enter your password again"
          />
        </FormControl>
        <FormControl>
          <Checkbox label="Remeber Me" sx={{ gridColumn: "1/-1", my: 1 }} />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          Forget Password ?
        </Box>
        <CardActions sx={{ gridColumn: "1/-1" }}>
          <Button variant="solid" color="primary" size="lg">
            Sign In
          </Button>
        </CardActions>
        <Box sx={{ gridColumn: "1/-1", textAlign: "center", my: 1 }}>
          <Typography level="body2" color="neutral">
            Already have an account? <Link href="/login">Login Now</Link>
          </Typography>
        </Box>
        <Divider sx={{ gridColumn: "1/-1", py: 1 }}>Or with</Divider>
        <Box>
          <Button
            variant="outlined"
            color="neutral"
            size="lg"
            fullWidth
            startDecorator={<FcGoogle size={25} />}
          >
            Google
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="neutral"
            size="lg"
            fullWidth
            startDecorator={<FaApple size={25} />}
          >
            Apple
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
