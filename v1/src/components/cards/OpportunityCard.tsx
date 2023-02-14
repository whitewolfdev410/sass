import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type OpportunityCardProps = {
  coverImage?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
};

const OpportunityCard = ({
  coverImage,
  title,
  children,
}: OpportunityCardProps) => {
  return (
    <Stack direction="row">
      <Box
        component="img"
        borderRadius={3}
        src={coverImage}
        width={500}
        height={300}
      />
      <Stack sx={{ paddingY: 3, paddingX: 5 }} rowGap={3}>
        {typeof title === "string" ? (
          <Typography variant="h2">{title}</Typography>
        ) : (
          title
        )}
        {children}
      </Stack>
    </Stack>
  );
};

export default OpportunityCard;
