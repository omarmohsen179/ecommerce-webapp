import axios, { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useMemo } from "react";

import { Status } from "../../../Enums";
import { REQUEST } from "../../../Services/callAPI";
import ControlsTable from "../../../SharedComponents/AdminPanel/ControlsTable/ControlsTable";

import { apiEndPoint } from "../../../Services/config.json";
import { useHistory } from "react-router-dom";
interface Props<T extends { Id: number }> {
  data?: T[];
  component: Function;
  colAttributes: any[];
  controller?: string;
  productId?: number;
}

export default function AdminSection<T extends { Id: number }>({
  data,
  component: Component,
  colAttributes = [],
  controller,
  productId,
}: Props<T>) {
  let history = useHistory();

  const [status, setStatus] = useState<Status>(Status.IDLE);

  const [itemToUpdate, setItemToUpdate] = useState();

  const [records, setRecords] = useState<T[]>([]);

  useEffect(() => {
    if (data) {
      data.map((item) => {
        if (item["Image"] && !(item["Image"] as string).includes(apiEndPoint)) {
          item["Image"] = `${apiEndPoint}${item["Image"]}`;
        }
        return item;
      });
      setRecords([...data]);
    }
  }, [data]);

  // Internal Updates
  const updateRowHandle = useCallback((e) => {
    setItemToUpdate(e.data);
    setStatus(Status.UPDATE);
  }, []);

  const showForm = useMemo(() => {
    return status === Status.ADD || status === Status.UPDATE;
  }, [status]);

  const deleteItem = useCallback(
    async (e) => {
      e.cancel = true;
      let config: AxiosRequestConfig = {
        method: "DELETE",
        url: controller + "/" + e.data.CategoryId,
      };

      REQUEST(config)
        .then(async (response: any) => {
          setRecords((prevState) => {
            return [...prevState.filter((item) => item.Id !== e.data.Id)];
          });

          setStatus(Status.IDLE);

          await e.component.refresh(true);

          e.component.cancelEditData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [controller]
  );

  const saveForm = useCallback(
    (data, images: any = []) => {
      data.ProductId = productId;

      if (
        typeof data.Image === "string" &&
        data.Image &&
        data.Image.includes(apiEndPoint)
      ) {
        data.Image = data.Image.replace(apiEndPoint, "");
      }
      let formData = new FormData();
      for (let [key, value] of Object.entries(data)) {
        formData.append(key.toString(), value as Blob | string);
      }
      if (images && images.length > 0) {
        for (var i = 0; i < images.length; i++) {
          formData.append("imagelist", images[i]);
        }
      }

      let config: AxiosRequestConfig = {
        method: status === Status.ADD ? "POST" : "PUT",
        url: controller,
        data: formData,
      };

      REQUEST(config)
        .then((response: any) => {
          if (
            response.Image &&
            !(response.Image as string).includes(apiEndPoint)
          ) {
            response.Image = `${apiEndPoint}${response.Image}`;
          }
          if (
            response["Image"] &&
            !(response["Image"] as string).includes(apiEndPoint)
          ) {
            response["Image"] = `${apiEndPoint}${response["Image"]}`;
          }

          if (status === Status.ADD) {
            setRecords([...records, response]);
          } else {
            /* setRecords((prevState) => {
              let index = prevState.findIndex((ele) => ele.Id === response.Id);
              if (index !== -1) {
                prevState[index] = { ...response };
              }
              return [...prevState];
            });*/

            setRecords(
              records.map((da) => {
                if (da.Id === response.Id) {
                  return { ...response };
                }
                return da;
              })
            );
          }

          setStatus(Status.IDLE);

          setItemToUpdate(undefined);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [controller, productId, status, records]
  );
  const [Auth, setAuth] = useState<any>("");
  useEffect(() => {
    let INFI = async () => {
      let x = await checkusertype();
      setAuth(x ? x : "");
    };
    INFI();
  }, []);
  let checkusertype: any = useCallback(async function () {
    let item = JSON.parse(localStorage.getItem("user") || "{}");

    !item || !item.type
      ? history.push("/")
      : await axios
          .get(apiEndPoint + "/api/check-type", {
            headers: {
              ...axios.defaults.headers,
              Authorization: `bearer ${
                JSON.parse(localStorage.getItem("user") || "{}").token
              }`,
            },
          })
          .then((res) => {
            return res[0] ? res[0] : "";
          })
          .catch((err) => {
            history.push("/log-in");
            localStorage.removeItem("user");
            return "";
          });
    return item?.type ? item?.type[0] : "";
  }, []);
  const cancelForm = useCallback(() => {
    setStatus(Status.IDLE);
    setItemToUpdate(undefined);
  }, []);

  return (
    <>
      <ControlsTable
        disabled={showForm}
        allowAdd={Auth == "SupperAdmin" || controller !== "Categories"}
        allowDelete={Auth == "SupperAdmin" || controller !== "Categories"}
        colAttributes={colAttributes}
        dataSource={records}
        onAddButtonClicked={() => setStatus(Status.ADD)}
        onRowClick={updateRowHandle}
        onRowRemoving={deleteItem}
      />
      {showForm && (
        <Component
          data={itemToUpdate}
          productId={productId}
          onSubmit={saveForm}
          onCancel={cancelForm}
        />
      )}
    </>
  );
}
