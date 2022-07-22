import React, { PropsWithChildren } from "react";
import { MainLayoutContent } from "./MainLayout.styles";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <MainLayoutContent>{children}</MainLayoutContent>;
};

export default MainLayout;
