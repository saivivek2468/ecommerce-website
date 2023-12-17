export const availabeToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
