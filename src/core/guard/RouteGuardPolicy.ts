class RouteGuardPolicy {
  valid = () => localStorage.getItem("token");
}
export default new RouteGuardPolicy();
