import { Box, Typography } from "@mui/joy";
import Image from "next/image";
import React from "react";

export default function PreviewCard({
  name,
  description,
  price,
  image,
}: {
  name: string;
  description: string;
  price: number;
  image: string;
}) {
  return (
    <Box>
      <Image
        alt="logo"
        src={image}
        width={400}
        height={400}
        layout="responsive"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "12px",
        }}
      />
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography level="body1" fontSize={"1em"}>
            {name}
          </Typography>
          <Typography level="body2" fontSize={".85em"}>
            {description}
          </Typography>
        </Box>
        <Typography level="body1">${price}</Typography>
      </Box>
    </Box>
  );
}
