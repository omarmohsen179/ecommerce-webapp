import REQUEST from "../../../Service/Request";

export const CONFIRM = async (e) => {
  return await REQUEST({
    method: "post",
    url: "confirm-email",
    data: e,
  });
};
