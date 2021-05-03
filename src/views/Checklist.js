import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Button,
} from "reactstrap";
import { addListAction, getListAction } from "../store/actions/listAction";

const Checklist = () => {
  const { lists, isLoading } = useSelector((state) => state.list);
  console.log(lists);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const addList = (e) => {
    setName(e.target.value);
  };

  const addSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
    };
    dispatch(addListAction(data));
    setName("");
  };

  useEffect(() => {
    dispatch(getListAction());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col lg="5">
            <h1 className="text-center text-primary font-weight-bold mt-5">
              Checklist
            </h1>
            <Form className="mt-3 " onSubmit={addSubmit}>
              <FormGroup className="justify-content-center d-flex">
                <Input
                  type="text"
                  name="text"
                  placeholder="tambah list baru"
                  value={name}
                  onChange={addList}
                  required
                />
                <Button
                  onClick={addSubmit}
                  className="bg-primary font-weight-bold ml-1"
                >
                  add
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        {/* <Row>
          <ul>
            {lists.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Row> */}
      </Container>
    </div>
  );
};

export default Checklist;
