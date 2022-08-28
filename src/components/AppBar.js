import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import NewPostDialog from "./NewPostDialog";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

function AppBar() {
  return (
    <MuiAppBar position="sticky" color="default">
      <StyledToolbar>
        <Typography variant="h4">My Blog</Typography>
        {/* TODO pass setData function here */}
        <NewPostDialog />
      </StyledToolbar>
    </MuiAppBar>
  );
}
export default AppBar;
