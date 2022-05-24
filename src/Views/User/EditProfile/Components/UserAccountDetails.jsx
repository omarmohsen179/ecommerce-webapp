import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
} from "shards-react";
import SquaredInput from "../../../../Components/SquaredInput";
import { CheckInputs } from "../../../../Service/SharedApi/SharedFunctions";

const UserAccountDetails = ({ title }) => {
  const defualtvalues = useRef({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Adress: "",
    City: "",
  });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState({});
  const [values, setvalues] = useState(defualtvalues.current);
  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  console.log(values);
  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <SquaredInput
                      label={"First Name"}
                      handleChange={handleChange}
                      name="FirstName"
                      value={values["FirstName"]}
                      required
                      errorMessage={error.FullName}
                      onBlur={CheckInputs(values, error)}
                    />
                    {/* Last Name */}
                    <SquaredInput
                      label={"Last Name"}
                      handleChange={handleChange}
                      name="LastName"
                      value={values["LastName"]}
                      required
                      errorMessage={error.FullName}
                      onBlur={CheckInputs(values, error)}
                    />
                    <Col md="6" className="form-group"></Col>
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="6" className="form-group">
                    <SquaredInput
                      label={"E-Mail"}
                      handleChange={handleChange}
                      name="FirstName"
                      value={values["FirstName"]}
                      required
                      errorMessage={error.FullName}
                      onBlur={CheckInputs(values, error)}
                    />
                  </Col>
                  {/* Password */}
                  <Col md="6" className="form-group">
                    <label htmlFor="fePassword">Password</label>
                    <FormInput
                      type="password"
                      id="fePassword"
                      placeholder="Password"
                      value="EX@MPL#P@$$w0RD"
                      onChange={() => {}}
                      autoComplete="current-password"
                    />
                  </Col>
                </Row>
                <FormGroup>
                  <label htmlFor="feAddress">Address</label>
                  <FormInput
                    id="feAddress"
                    placeholder="Address"
                    value="1234 Main St."
                    onChange={() => {}}
                  />
                </FormGroup>
                <Row form>
                  {/* City */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">City</label>
                    <FormInput
                      id="feCity"
                      placeholder="City"
                      onChange={() => {}}
                    />
                  </Col>
                  {/* State */}
                  <Col md="4" className="form-group">
                    <label htmlFor="feInputState">State</label>
                    <FormSelect id="feInputState">
                      <option>Choose...</option>
                      <option>...</option>
                    </FormSelect>
                  </Col>
                  {/* Zip Code */}
                  <Col md="2" className="form-group">
                    <label htmlFor="feZipCode">Zip</label>
                    <FormInput
                      id="feZipCode"
                      placeholder="Zip"
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">Description</label>
                    <FormTextarea id="feDescription" rows="5" />
                  </Col>
                </Row>
                <Button theme="accent">Update Account</Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
};

UserAccountDetails.defaultProps = {
  title: "Account Details",
};

export default UserAccountDetails;
