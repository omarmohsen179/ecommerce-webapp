import axios, { AxiosRequestConfig } from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardHeader } from "reactstrap";
import AdminSection from "../Products/Copmponents/ControlsTable/AdminSection";
import { Category } from "../Products/Copmponents/ControlsTable/Interfaces";
// import { REQUEST } from "../../Services/callAPI";
import CategoryForm from "./CategoryForm";
import { useHistory } from "react-router-dom";
// import { apiEndPoint } from "../../Services/config.json";
import CategoryFormSupperAdmin from "./CategoryFormSupperAdmin";
interface Props {}

const Categories: React.FC<Props> = () => {
  let history = useHistory();
  const [productsCategories, setProductsCategories] = useState<Category[]>([]);
  const { t } = useTranslation();
  const categoriesColAttributes = useMemo(() => {
    return [
      {
        field: "Rank",
        caption: t("Rank"),
        alignment: "center",
      },
      { field: "Title", caption: t("Title"), alignment: "center" },
      {
        field: "TitleEn",
        caption: t("Title En"),
        alignment: "center",
      },
      {
        field: "ProductsCount",
        caption: t("Products Count"),
        alignment: "center",
      },
    ];
  }, [t]);

  // useEffect(() => {
  //   // get categories
  //   let config: AxiosRequestConfig = {
  //     method: "GET",
  //     url: `Categories`,
  //   };

  //   REQUEST(config).then((response) => {
  //     let _productsCategries = response as unknown as Category[];
  //     setProductsCategories([..._productsCategries]);
  //   });
  // }, []);
  const [Auth, setAuth] = useState<any>("");
  // React.useEffect(() => {
  //   let INFI = async () => {
  //     let x = await checkusertype();
  //     setAuth(x ? x : "");
  //   };
  //   INFI();
  // }, []);
  // let checkusertype: any = useCallback(async function () {
  //   let item = JSON.parse(localStorage.getItem("user") || "{}");

  //   !item || !item.type
  //     ? history.push("/")
  //     : await axios
  //         .get(apiEndPoint + "/api/check-type", {
  //           headers: {
  //             ...axios.defaults.headers,
  //             Authorization: `bearer ${
  //               JSON.parse(localStorage.getItem("user") || "{}").token
  //             }`,
  //           },
  //         })
  //         .then((res) => {
  //           return res[0] ? res[0] : "";
  //         })
  //         .catch((err) => {
  //           history.push("/log-in");
  //           localStorage.removeItem("user");
  //           return "";
  //         });
  //   return item?.type ? item?.type[0] : "";
  // }, []);
  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <h4>{t("Categories")}</h4>
          </CardHeader>
          <CardBody>
            <AdminSection<Category>
              data={productsCategories}
              component={
                Auth == "SupperAdmin" ? CategoryFormSupperAdmin : CategoryForm
              }
              colAttributes={categoriesColAttributes}
              controller={
                Auth == "SupperAdmin" ? "CategoryIdentity" : "Categories"
              }
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Categories;
