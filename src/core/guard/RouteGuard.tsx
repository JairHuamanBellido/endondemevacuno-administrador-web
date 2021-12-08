import React from "react";
import { Navigate } from "react-router";
import RouteGuardPolicy from "./RouteGuardPolicy";

interface IProps {
  component: React.ReactNode;
  redirect: string;
}
const RouterGuard: React.FC<IProps> = (props: IProps) => {
  const { component, redirect } = props;

  return RouteGuardPolicy.valid() ? (
    <>{component}</>
  ) : (
    <Navigate replace to={redirect} />
  );
};

export default RouterGuard;
