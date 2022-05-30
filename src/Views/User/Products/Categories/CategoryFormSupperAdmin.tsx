import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Col, FormGroup, Input, Row } from "reactstrap";
import { Status } from "../Products/Copmponents/ControlsTable/Enums";
import { Category } from "../Products/Copmponents/ControlsTable/Interfaces";
import InputTwoLanguages from "../Products/Copmponents/ControlsTable/InputTwoLanguages/InputTwoLanguages";

interface Props {
  data: Category | undefined;
  onSubmit: (formData: Category) => void;
  onCancel: () => void;
}

const CategoryFormSupperAdmin: React.FC<Props> = ({
  onSubmit,
  onCancel,
  data,
}) => {
  const { t } = useTranslation();
  const [categoryInitValues, setCategoryInitValues] = useState<Category>({
    Id: 0,
    Title: "",
    TitleEn: "",
    Description: " ",
    DescriptionEn: " ",
    ProductsCount: 0,
    Rank: 0,
    CategoryId: 0,
  });

  const [status, setStatus] = useState(Status.IDLE);

  const [category, setCategory] = useState<Category>(categoryInitValues);

  useEffect(() => {
    if (data) {
      setStatus(Status.UPDATE);
      setCategory({ ...data, Id: data.CategoryId });
      setCategoryInitValues({ ...data, Id: data.CategoryId });
    } else {
      setStatus(Status.ADD);
    }
  }, [data]);
  const updateCategory = useCallback((value, id) => {
    setCategory((prev) => ({ ...prev, [id]: value }));
  }, []);

  const isNotValid = useMemo(() => {
    let keysToCheck = ["TitleEn"];
    for (let key of keysToCheck) {
      if (!category[key] || !category[key].toString()) {
        return true;
      }
    }

    if (category.Id) {
      let result = true;
      for (let key of Object.keys(category)) {
        if (category[key] !== categoryInitValues[key]) {
          result = false;
        }
      }
      return result;
    }
  }, [category, categoryInitValues]);

  // submit form
  const addHandle = useCallback(() => {
    onSubmit(category);
  }, [category, onSubmit]);

  return (
    <>
      <div className="mt-2">
        <InputTwoLanguages
          id="Title"
          label="Title"
          DisabledAnotherLangue
          onValueChange={updateCategory}
          value={category.Title}
          valueEn={category.TitleEn}
        />
        <InputTwoLanguages
          id="Description"
          label="Description"
          DisabledAnotherLangue
          onValueChange={updateCategory}
          value={category.Description}
          valueEn={category.DescriptionEn}
        />
        <div className="button-container">
          <Row>
            <Col style={{ width: "170px" }}>
              <Button
                className="btn btn btn-success col-12"
                disabled={isNotValid}
                onClick={addHandle}
              >
                {status === Status.UPDATE ? t("Update") : t("Add")}
              </Button>
            </Col>
            <Col style={{ width: "170px" }}>
              <Button
                className=" btn btn-danger col-12"
                disabled={false}
                onClick={onCancel}
              >
                {t("Cancel")}
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default CategoryFormSupperAdmin;
