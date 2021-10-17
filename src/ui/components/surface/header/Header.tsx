import Reack from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Container, Toolbar } from "@mui/material";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/logos/logo.svg"} alt={"e-diaristas"} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;