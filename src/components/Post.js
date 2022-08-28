import { styled, darken } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion = styled(MuiAccordion, {
  shouldForwardProp: (prop) => prop !== "odd",
})(({ odd, theme }) => ({
  backgroundColor: odd
    ? theme.palette.background.paper
    : darken(theme.palette.background.paper, 0.3),
}));

function Post({ title, body, odd = false }) {
  return (
    <Accordion odd={odd}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Post;
