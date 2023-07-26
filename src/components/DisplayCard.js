import React from "react";
import { useNavigate } from "react-router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const DisplayCard = ({ title, preview, route }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(route);
  };
  return (
    <Card
      sx={{ minWidth: 275, maxWidth: 300, minHeight: 275, maxHeight: 300 }}
      style={{
        margin: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {preview}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="small" onClick={handleClick}>
          Start Lesson
        </Button>
      </CardActions>
    </Card>
  );
};

export default DisplayCard;
