import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_MY_WEBSITE_URL,
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {

    // 🔐 REQUEST INTERCEPTOR
    const requestInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user.getIdToken();
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 🚨 RESPONSE INTERCEPTOR
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error.response?.status;

        if (status === 401 || status === 403) {
          logOut().then(() => {
            navigate("/login");
          });
        }

        return Promise.reject(error);
      }
    );

    // 🧹 cleanup
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };

  }, [user, logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
