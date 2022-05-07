import REQUEST from "../../../Service/Request";

export const RESET_PASSWORD = async (e) => {
  return await REQUEST({
    method: "post",
    url: "auth/create-account",
    data: e,
  });
};
