import React, { FC, Fragment } from "react";
import { Header, Form, FormCheckboxProps } from "semantic-ui-react";

/*
 * TODO: 입력시 모든 칸이 함께 렌더되는 것을 방지
 */

const CreateTodo: FC<{}> = ({}) => {
  const [desc, setDesc] = React.useState<string | number | undefined>("");
  const [resp, setResp] = React.useState<string | number | undefined>("");
  const [prior, setPrior] = React.useState<string | number | undefined>("low");

  const handleChange = (
    e: React.FormEvent<HTMLInputElement>,
    { value }: FormCheckboxProps
  ) => setPrior(value);

  const handleChangeDesc: React.ChangeEventHandler<HTMLInputElement> = e => {
    setDesc(e.target.value);
  };
  const handleChangeResp: React.ChangeEventHandler<HTMLInputElement> = e => {
    setResp(e.target.value);
  };

  const handleSubmit: React.FormEventHandler = e => {
    e.preventDefault();
    setDesc("");
    setResp("");
    setPrior("low");
    console.log("Desc: ", desc);
    console.log("Resp: ", resp);
    console.log("priority: ", prior);
  };

  return (
    <Fragment>
      <Header>Create New Todo</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Description"
          onChange={handleChangeDesc}
          value={desc}
        />
        <Form.Input
          label="Responsible"
          onChange={handleChangeResp}
          value={resp}
        />
        <Form.Group inline>
          <label>Priority</label>
          <Form.Radio
            label="Low"
            value="low"
            checked={prior === "low"}
            onChange={handleChange}
          />
          <Form.Radio
            label="Medium"
            value="medium"
            checked={prior === "medium"}
            onChange={handleChange}
          />
          <Form.Radio
            label="High"
            value="high"
            checked={prior === "high"}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button type="submit">Create Todo</Form.Button>
      </Form>
    </Fragment>
  );
};

export default CreateTodo;
