class RouteGuardPolicy {
    valid = () => localStorage.getItem("authorization");
  }
  export default new RouteGuardPolicy();