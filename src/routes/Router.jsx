import { createBrowserRouter } from "react-router";

/* ===== Layouts ===== */
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";

/* ===== Public Pages ===== */
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

/* ===== Route Protection ===== */
import PrivateRoute from "../components/common/PrivateRoute";
// import AdminRoute from "./AdminRoute";
import WorkerRoute from "./WorkerRoute";
import BuyerRoute from "./BuyerRoute";

/* ===== Worker Pages ===== */
import WorkerHome from "../pages/Dashboard/Worker/WorkerHome";
import TaskList from "../pages/Dashboard/Worker/TaskList";
import TaskDetails from "../pages/Dashboard/Worker/TaskDetails";
import MySubmissions from "../pages/Dashboard/Worker/MySubmissions";
import ApprovedSubmissions from "../pages/Dashboard/Worker/ApprovedSubmissions";
import Withdrawals from "../pages/Dashboard/Worker/Withdrawals";

/* ===== Buyer Pages ===== */
import BuyerHome from "../pages/Dashboard/Buyer/BuyerHome";
import AddTask from "../pages/Dashboard/Buyer/AddTask";
import MyTasks from "../pages/Dashboard/Buyer/MyTasks";
import TaskReview from "../pages/Dashboard/Buyer/TaskReview";
import PurchaseCoin from "../pages/Dashboard/Buyer/PurchaseCoin";
import PaymentHistory from "../pages/Dashboard/Buyer/PaymentHistory";

/* ===== Admin Pages ===== */
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageTasks from "../pages/Dashboard/Admin/ManageTasks";
import WithdrawRequests from "../pages/Dashboard/Admin/WithdrawRequests";

/* ===== Error Page ===== */
import ErrorPage from "../pages/ErrorPage";
import AdminRoute from "./AdminRoute";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
import Support from "../pages/support/Support";



export const router = createBrowserRouter([
  /* ================= PUBLIC ROUTES ================= */
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "support",
        element: <Support></Support>,
      }
    ],
  },

  /* ================= AUTH ROUTES ================= */
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },

  /* ================= DASHBOARD ROUTES ================= */
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      /* -------- WORKER DASHBOARD -------- */
      {
        path: "worker",
        element: (
          <WorkerRoute>
            <WorkerHome />
          </WorkerRoute>
        ),
      },
      {
        path: "worker/task-list",
        element: (
          <WorkerRoute>
            <TaskList />
          </WorkerRoute>
        ),
      },
      {
        path: "worker/task/:id",
        element: (
          <WorkerRoute>
            <TaskDetails />
          </WorkerRoute>
        ),
      },
      {
        path: "worker/my-submissions",
        element: (
          <WorkerRoute>
            <MySubmissions />
          </WorkerRoute>
        ),
      },
      {
        path: "worker/approved-submissions",
        element: (
          <WorkerRoute>
            <ApprovedSubmissions />
          </WorkerRoute>
        ),
      },
      {
        path: "worker/withdrawals",
        element: (
          <WorkerRoute>
            <Withdrawals />
          </WorkerRoute>
        ),
      },

      /* -------- BUYER DASHBOARD -------- */
      {
        path: "buyer",
        element: (
          <BuyerRoute>
            <BuyerHome />
          </BuyerRoute>
        ),
      },
      {
        path: "buyer/add-task",
        element: (
          <BuyerRoute>
            <AddTask />
          </BuyerRoute>
        ),
      },
      {
        path: "buyer/my-tasks",
        element: (
          <BuyerRoute>
            <MyTasks />
          </BuyerRoute>
        ),
      },
      {
        path: "buyer/task-review",
        element: (
          <BuyerRoute>
            <TaskReview />
          </BuyerRoute>
        ),
      },
      {
        path: "buyer/purchase-coin",
        element: (
          <BuyerRoute>
            <PurchaseCoin />
          </BuyerRoute>
        ),
      },
      {
        path: "buyer/payment-history",
        element: (
          <BuyerRoute>
            <PaymentHistory />
          </BuyerRoute>
        ),
      },

      /* -------- ADMIN DASHBOARD -------- */
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "admin/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "admin/manage-tasks",
        element: (
          <AdminRoute>
            <ManageTasks />
          </AdminRoute>
        ),
      },
      {
        path: "admin/withdraw-requests",
        element: (
          <AdminRoute>
            <WithdrawRequests />
          </AdminRoute>
        ),
      },
    ],
  },

  /* ================= ERROR ROUTE ================= */
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
