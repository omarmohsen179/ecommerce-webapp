import axios, { AxiosRequestConfig } from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardHeader } from "reactstrap";

// import { REQUEST } from "../../Services/callAPI";
import CategoryForm from "./CategoryForm";
import { useHistory } from "react-router-dom";
// import { apiEndPoint } from "../../Services/config.json";
import CategoryFormSupperAdmin from "./CategoryFormSupperAdmin";
import AdminSection from "../../../../AdminSection";

const Categories = () => {
  let history = useHistory();
  const [productsCategories, setProductsCategories] = useState([]);
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
  const [Auth, setAuth] = useState("SupperAdmin");
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
      <div className="content" style={{ padding: 20 }}>
        <Card className="card-user">
          <CardHeader>
            <h4>{t("Categories")}</h4>
          </CardHeader>
          <CardBody>
            <AdminSection
              data={productsCategories}
              component={CategoryForm}
              colAttributes={categoriesColAttributes}
              controller={"Categories"}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Categories;
