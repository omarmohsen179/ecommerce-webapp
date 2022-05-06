import REQUEST from "../../../Service/Request";

export const CREATE_ACCOUNT = async (e) => {
  return await REQUEST({
    method: "post",
    url: "/create-account",
    data: e,
  });
};
export const CHECK_EMAIL = async (e) => {
  return await REQUEST({
    method: "post",
    url: "/check-email/" + e,
  });
};
export const CHECK_USERNAME = async (e) => {
  return await REQUEST({
    method: "post",
    url: "/check-username/" + e,
  });
};
