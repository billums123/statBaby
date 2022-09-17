import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import theme from "./theme";
import { styled } from "@mui/system";
import Feedings from "./components/Feedings";
import Naps from "./components/Naps";
import Settings from "./components/Settings";
import ChartsContainer from "./components/ChartsContainer";

const UserContext = createContext([{}, () => {}]);// this format allows us to use array destructuring when usiing useContext
const ChildIdContext = createContext([{}, () => {}]);// this format allows us to use array destructuring when usiing useContext

const RootDiv = styled("div")({
  minHeight: "100vh",
  backgroundColor: theme.palette.secondary.light,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});
function App() {
  const [user, setUser] = useState(null); //set user to null until login
  const [childId, setChildId] = useState(null); //set user to null until login, this will allow us to know which child is currently selected
  return (
    <RootDiv>
      <UserContext.Provider value={[user, setUser]}>
      <ChildIdContext.Provider value={[childId, setChildId]}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="feedings" element={<Feedings />} />
          <Route path="naps" element={<Naps />} />
          <Route path="settings" element={<Settings />} />
          <Route path="charts" element={<ChartsContainer />} />
        </Routes>
      </ChildIdContext.Provider>
      </UserContext.Provider>
    </RootDiv>
  );
}

export { App, UserContext, ChildIdContext };

