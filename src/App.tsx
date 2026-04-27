import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./components/pages/Homepage";
import Root from "./components/layout/Root";
import SinglePost from "./components/pages/SinglePost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Homepage />}></Route>
      <Route path="/post/:subReddit/:postId" element={<SinglePost />}></Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
