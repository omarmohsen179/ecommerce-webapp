import React from "react";
import { FormGroup, Input, Row, Col } from "reactstrap";

interface Props {
  id: string;
  label: string;
  value?: string;
  valueEn?: string;
  maxLength?: number;
  enDisabled?: boolean;
  DisabledAnotherLangue?: boolean;
  onValueChange: (value: string, id: string) => void;
}

const InputTwoLanguages: React.FC<Props> = ({
  id,
  label,
  value,
  valueEn,
  enDisabled = false,
  maxLength = 10000000000000,
  DisabledAnotherLangue = false,
  onValueChange,
}) => {
  return (
    <>
      <Row>
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>{label}</label>
            <Input
              id={id}
              value={value}
              disabled={DisabledAnotherLangue}
              onChange={(e) => onValueChange(e.target.value, e.target.id)}
              type="text"
              maxLength={maxLength}
            />
          </FormGroup>
        </Col>
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>{label} English</label>
            <Input
              id={id + "En"}
              value={valueEn}
              disabled={enDisabled}
              onChange={(e) => onValueChange(e.target.value, e.target.id)}
              type="text"
              maxLength={maxLength}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

export default InputTwoLanguages;
