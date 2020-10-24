import React, { Component } from 'react';
import { Button, Container, Col, CardTitle, Input, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchUsers, handleButton, updateEmail, updateNewUsers } from "./actions/thunkActions";
import { USERS_API_URL } from "./config/configApi";

class Users extends Component {
  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers(USERS_API_URL);
  }

  // function to handle input of user list
  handleClick = (event, target) => {
    const { id, value } = event.target;
    target === "name" ?
      this.props.updateNewUsers(id, value) :
      this.props.updateEmail(id, value);
  }

  // function to handle button action
  handleBtn = () => {
    this.props.handleButton();
  }

  render() {
    const { button, users } = this.props;

    const usersList = users.length > 0 && users.map(each => {
      return <>
        <Col>
          <CardTitle>
            <Input type="text" id={each.id}
              value={each.name}
              onChange={e => this.handleClick(e, "name")}
            />
          </CardTitle>
        </Col>
        <Col>
          <CardTitle>
            <Input type="email" id={each.id}
              value={each.email}
              onChange={e => this.handleClick(e, "email")}
            />
          </CardTitle>
        </Col>
      </>
    });

    const newInputList = <>
      <Col>
        <CardTitle>
          <Input type="text" id="newId" />
        </CardTitle>
      </Col>
      <Col>
        <CardTitle>
          <Input type="email" id="newEmailId" />
        </CardTitle>
      </Col>
    </>

    return (
      <div className="external">
        <div className="center">
          <Button className="btn-user"
            color="success"
            size="lg"
            onClick={() => this.handleBtn()}>
            Add New User</Button>
        </div>
        <div className="contain-new">
          <Container className="rowContain">
            <Row xs="2">
              {usersList}
              {button && newInputList}
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    button: state.button,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (url) => dispatch(fetchUsers(url)),
  updateNewUsers: (userId, name) => dispatch(updateNewUsers(userId, name)),
  updateEmail: (userId, email) => dispatch(updateEmail(userId, email)),
  handleButton: () => dispatch(handleButton())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
