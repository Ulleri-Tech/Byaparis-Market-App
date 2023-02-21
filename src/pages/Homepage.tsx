import * as React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";


export interface IHomePageProps {}

export default class HomePage extends React.Component<IHomePageProps> {
  public render() {
    return (
      <div className="App">
        <h1>Welcome to Byapari's MarketPlace</h1>
   
       
        {/* <Alert dismissible variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Change this and that and try again.</p>
        </Alert>
        <Stack direction="horizontal" gap={2}>
          <Button as="a" variant="primary">
            Button as link
          </Button>
          <Button as="a" variant="success">
            Button as link
          </Button>
        </Stack> */}
      </div>
    );
  }
}
