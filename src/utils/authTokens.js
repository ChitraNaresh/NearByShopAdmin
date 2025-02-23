const adminAccessTokenValue = () => {
  return sessionStorage.getItem("ADMIN")
    ? JSON.parse(sessionStorage.getItem("ADMIN"))
    : null;
};

const subAdminAccessTokenValue = () => {
  return sessionStorage.getItem("SUB_ADMIN")
    ? JSON.parse(sessionStorage.getItem("SUB_ADMIN"))
    : null;
};

export { adminAccessTokenValue, subAdminAccessTokenValue };
