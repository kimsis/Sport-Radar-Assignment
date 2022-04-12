import { createContext } from "react";

let http: string = "https://cp.fn.sportradar.com";
let suffix: string = "/common/en/Etc:UTC/gismo";

const AppContext = createContext<{ http: string; suffix: string}>({
  http: http,
  suffix: suffix,
});

export const AppContextProvider: React.FC = (props) => {
  const context = {
    http: http,
    suffix: suffix,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export default AppContext;