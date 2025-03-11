import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { getUserInfo } from "@/redux/authSlice";

function useAuth() {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(function () {
    dispatch(getUserInfo())
  }, [location])

}

export default useAuth