import { useLocation } from "react-router";
import { Paths } from "src/pages/paths";

export const useNavigationParams = (urlParam: Paths) => {
  const location = useLocation();

  return location.pathname === urlParam;
};
