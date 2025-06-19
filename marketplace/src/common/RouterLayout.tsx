import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { useAppSelector } from "../redux/hooks";

export const RouterLayout: React.FC<{}> = () => {
    const [,setCookie, remove] = useCookies()
    const { isAuth, isExpired, accessToken } = useAppSelector(
        (state) => state.authReducer,
    );

    React.useEffect(() => {
        if(accessToken) {
            setCookie('accessToken', accessToken) 
        }
    }, [accessToken]);
    
    React.useEffect(() => {
        if(isExpired) {
            remove('accessToken');
        }
    }, [isExpired]);

    return isAuth ? (
        <>
            <NavBar />
            <Outlet />
        </>
    ) : (
        <Navigate to='/login' />
    );
};