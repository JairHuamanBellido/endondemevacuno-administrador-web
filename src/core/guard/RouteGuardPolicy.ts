class RouteGuardPolicy {
    valid = () => localStorage.getItem("token");
    // valid = () => true;
  }
  export default new RouteGuardPolicy();