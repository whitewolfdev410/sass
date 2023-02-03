import { useRef, useState } from "react";
import { ButtonGroup, Button, Box, Chip } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const StageGroupList = ({
  stages,
  onDeleteStage,
}: {
  stages: string[];
  onDeleteStage: any;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState({ display: "none" });
  const [stageIndex, setStageIndex] = useState(0);

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        ref={ref}
        color="black"
        overflow="scroll"
        sx={{
          p: "15px",
          boxShadow: "var(--shadow-5)",
          borderRadius: "9px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar ": {
            display: "none",
          },
        }}
      >
        <ButtonGroup variant="text" sx={{ minWidth: "100%" }} color="inherit">
          {stages?.map((stage, index) => (
            <>
              <Button
                sx={{ px: 2, py: 0.5, maxWidth: "180px", minWidth: "100px" }}
                onMouseEnter={(e) => {
                  setStyle({ display: "block" });
                  setStageIndex(index);
                }}
                onMouseLeave={(e) => {
                  setStyle({ display: "none" });
                  setStageIndex(0);
                }}
              >
                {stage}
                {index === stageIndex && (
                  <Button
                    style={style}
                    sx={{ color: "red" }}
                    onClick={() => {
                      onDeleteStage && onDeleteStage(index);
                    }}
                  >
                    Delete
                  </Button>
                )}
              </Button>
            </>
          ))}
        </ButtonGroup>
      </Box>
      <Box
        aria-role="button"
        onClick={() => {
          console.log("working", ref.current?.scrollLeft);
          ref.current?.scrollTo({
            left: ref.current?.scrollLeft + 200,
            behavior: "smooth",
          });
        }}
        sx={{
          borderRadius: "50%",
          position: "absolute",
          right: "-20px",
          top: "calc(50% - 20px)",
          width: "40px",
          height: "40px",
          p: 2,
          display: "grid",
          placeContent: "center",
          backgroundColor: "white",
          boxShadow: "var(--shadow-5)",
          cursor: "pointer",
        }}
      >
        <ArrowForwardIosIcon />
      </Box>
    </Box>
  );
};

export default StageGroupList;
