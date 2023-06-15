import { Route, Routes } from "react-router-dom";
import Login from "./pages/sign-up-signin/Login";
import SignUp from "./pages/sign-up-signin/SignUp";
import Home from "./pages/home/Home";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase-config";
import { useDispatch } from "react-redux";
import { getUserAction } from "./pages/user/userAction";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import Books from "./pages/books/Books";
import History from "./pages/history/History";
import Clients from "./pages/clients/Clients";
import NewBook from "./pages/books/NewBook";
import EditBook from "./pages/books/EditBook";

function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    user?.uid && dispatch(getUserAction(user.uid));
  });
  return (
    <div className="">
      <Routes>
        {/* public routers  */}
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<Login />} />

        {/* private routers */}

        <Route
          path="/signup"
          element={
            <PrivateRoute>
              <SignUp />
            </PrivateRoute>
          }
        />

        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="books"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />
        <Route
          path="new-book"
          element={
            <PrivateRoute>
              <NewBook />
            </PrivateRoute>
          }
        />
        <Route
          path="edit-book/:id"
          element={
            <PrivateRoute>
              <EditBook />
            </PrivateRoute>
          }
        />

        <Route
          path="history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />

        <Route
          path="clients"
          element={
            <PrivateRoute>
              <Clients />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
