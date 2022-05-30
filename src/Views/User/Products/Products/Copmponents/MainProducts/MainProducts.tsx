import React, { FC, useState, useCallback, useMemo, useEffect } from "react";
import { useHistory } from "react-router-dom";
// React-Strap
import { Card, Form, CardBody, CardHeader } from "reactstrap";
import ControlsTable from "../ControlsTable/ControlsTable";

// Components

import { Status } from "../ControlsTable/Enums";
// import MainProductForm from "../../Copmponents/MainProducts/MainProductForm";

import { ProductBasicsInformation } from "../ControlsTable/Interfaces";
import axios, { AxiosRequestConfig } from "axios";
import { useTranslation } from "react-i18next";
// import { REQUEST } from "../../../../Services/callAPI";
// import { apiEndPoint } from "../../../../Services/config.json";

interface Props {
	colAttributes: any[];
}

const MainProducts: FC<Props> = ({ colAttributes }) => {
	const [Auth, setAuth] = useState<any>("");

	const { t } = useTranslation();
	// const [itemToUpdate, setItemToUpdate] = useState();
	const [status, setStatus] = useState<Status>(Status.IDLE);

	const [products, setProducts] = useState<ProductBasicsInformation[]>();

	const history = useHistory();

	const showForm = useMemo(() => {
		return status === Status.ADD || status === Status.UPDATE;
	}, [status]);

	// useEffect(() => {
	// 	checkusertype().then((type) => {
	// 		setAuth(type);

	// 		let config: AxiosRequestConfig = {
	// 			method: "GET",
	// 			url: type === "SupperAdmin" ? "ProductIdentity" : "Products",
	// 		};

	// 		REQUEST(config).then((response: any) => {
	// 			if (response.length > 0 && response[0].Icon) {
	// 				response = response.map((item) => {
	// 					if (
	// 						item.Icon &&
	// 						!(item.Icon as string).includes(apiEndPoint)
	// 					) {
	// 						item.Icon = `${apiEndPoint}${item.Icon}`;
	// 					}
	// 					return item;
	// 				});
	// 			}
	// 			let _result = response as unknown as ProductBasicsInformation[];

	// 			setProducts(_result);
	// 		});
	// 	});
	// }, []);

	let redirectAdd = () => {
		history.push("/admin/products/add");
	};

	let redirectEdit = (event) => {
		if (event.data?.Id) {
			history.push(`/admin/products/edit/${event.data?.Id}`);
			// Auth === "SupperAdmin"
			// 	? history.push(`/admin/products/edit/${event.data?.ProductId}`)
			// 	: history.push(`/admin/products/edit/${event.data?.Id}`);
		}
	};

	// let removeProduct = useCallback(
	// 	async (e) => {
	// 		e.cancel = true;
	// 		let config: AxiosRequestConfig = {
	// 			method: "DELETE",
	// 			url: "ProductIdentity/" + e.data.Id,
	// 			data: { Id: e.data.Id },
	// 		};

	// 		REQUEST(config)
	// 			.then(async () => {
	// 				if (products) {
	// 					let items = [...products];
	// 					items = items.filter((p) => p.Id !== e.data.Id);
	// 					setProducts([...items]);
	// 				}
	// 				setStatus(Status.IDLE);

	// 				await e.component.refresh(true);

	// 				e.component.cancelEditData();
	// 			})
	// 			.catch((error) => {
	// 				console.log(error);
	// 			});
	// 	},
	// 	[products]
	// );

	// let checkusertype: any = useCallback(
	// 	async function () {
	// 		let item = JSON.parse(localStorage.getItem("user") || "{}");

	// 		!item || !item.type
	// 			? history.push("/")
	// 			: await axios
	// 					.get(apiEndPoint + "/api/check-type", {
	// 						headers: {
	// 							...axios.defaults.headers,
	// 							Authorization: `bearer ${
	// 								JSON.parse(
	// 									localStorage.getItem("user") || "{}"
	// 								).token
	// 							}`,
	// 						},
	// 					})
	// 					.then((res) => {
	// 						return res[0] ? res[0] : "";
	// 					})
	// 					.catch((err) => {
	// 						history.push("/log-in");
	// 						localStorage.removeItem("user");
	// 						return "";
	// 					});
	// 		return item?.type ? item?.type[0] : "";
	// 	},
	// 	[history]
	// );
	return (
		<Form>
			<Card className="card-user">
				<CardHeader>
					<h4>{t("Products")}</h4>
				</CardHeader>
				<CardBody>
					<ControlsTable
						disabled={showForm}
						colAttributes={
							Auth === "SupperAdmin"
								? [
										{
											field: "ProductNameEn",
											caption: t("Product Name English"),
											alignment: "center",
										},
										{
											field: "CategoryName",
											caption: t("Category Name"),
											alignment: "center",
											grouped: true,
											isVisable: false,
										},
								  ]
								: colAttributes
						}
						dataSource={products}
						onAddButtonClicked={redirectAdd}
						onRowDoubleClick={redirectEdit}
						// onRowRemoving={removeProduct}
						allowAdd={Auth === "SupperAdmin"}
						allowDelete={Auth === "SupperAdmin"}
					/>
				</CardBody>
			</Card>
		</Form>
	);
};

export default React.memo(MainProducts);
