import { Typography } from "@mui/material";

export function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <span style={{color: "blue"}}>
          Infosys Ltd
          </span>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }