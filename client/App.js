import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import theme from "./theme";
import { styled } from "@mui/system";

const UserContext = createContext([{}, () => {}]);// this format allows us to use array destructuring when usiing useContext

const RootDiv = styled("div")({
  minHeight: "100vh",
  backgroundColor: theme.palette.secondary.light,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});
function App() {
  const [user, setUser] = useState(null); //set user to null until login
  return (
    <RootDiv>
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          {/* <Route index element={<App />} /> */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </RootDiv>
  );
}

export { App, UserContext };

// {/* Routes nest inside one another. Nested route paths build upon
//           parent route paths, and nested route elements render inside
//           parent route elements. See the note about <Outlet> below. */}
//           <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="dashboard" element={<Dashboard />} />

//             {/* Using path="*"" means "match anything", so this route
//                   acts like a catch-all for URLs that we don't have explicit
//                   routes for. */}
//             <Route path="*" element={<NoMatch />} />
//           </Route>
//         </Routes>
//       </div>
//     );
//   }

//   function Layout() {
//     return (
//       <div>
//         {/* A "layout route" is a good place to put markup you want to
//             share across all the pages on your site, like navigation. */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//             <li>
//               <Link to="/nothing-here">Nothing Here</Link>
//             </li>
//           </ul>
//         </nav>

//         <hr />

//         {/* An <Outlet> renders whatever child route is currently active,
//             so you can think about this <Outlet> as a placeholder for
//             the child routes we defined above. */}
//         <Outlet />
//       </div>
//     );
//   }

//   function Home() {
//     return (
//       <div>
//         <h2>Home</h2>
//       </div>
//     );
//   }

//   function About() {
//     return (
//       <div>
//         <h2>About</h2>
//       </div>
//     );
//   }

//   function Dashboard() {
//     return (
//       <div>
//         <h2>Dashboard</h2>
//       </div>
//     );
//   }

//   function NoMatch() {
//     return (
//       <div>
//         <h2>Nothing to see here!</h2>
//         <p>
//           <Link to="/">Go to the home page</Link>
//         </p>
//       </div>
//     );
//   }
