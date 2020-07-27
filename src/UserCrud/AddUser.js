import React from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap';  
  
class AddUser extends React.Component {  
  constructor(props) {  
    super(props);  
   
    this.initialState = {  
      user_id: '',  
      user_name: '',  
      user_email: '',  
      user_phone: '',  
      loaction_id: '',   
    }  
  
    if (props.user.user_id) {  
      this.state = props.user  
    } else {  
      this.state = this.initialState;  
    }  
  
    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  
  }  
  
  handleChange(event) {  
    const name = event.target.name;  
    const value = event.target.value;  
  
    this.setState({  
      [name]: value  
    })  
  }  
  
  handleSubmit(event) {  
    event.preventDefault();  
    this.props.onFormSubmit(this.state);  
    this.setState(this.initialState);  
  }  
  render() {  
    let pageTitle;  
    let actionStatus;  
    if (this.state.UserId) {  
  
      pageTitle = <h2>Edit User</h2>  
      actionStatus = <b>Update</b>  
    } else {  
      pageTitle = <h2>Add User</h2>  
      actionStatus = <b>Save</b>  
    }  
  
    return (  
      <div>        
        <h2> {pageTitle}</h2>  
        <Row>  
          <Col sm={7}>  
            <Form onSubmit={this.handleSubmit}>  
              <Form.Group controlId="user_id">  
                <Form.Label>First Name</Form.Label>  
                <Form.Control  
                  //type="int"  
                  name="user_id"  
                  value={this.state.user_id}  
                  onChange={this.handleChange}  
                  placeholder="First Name" />  
              </Form.Group>  
              <Form.Group controlId="user_name">  
                <Form.Label>Last Name</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="user_name"  
                  value={this.state.user_name}  
                  onChange={this.handleChange}  
                  placeholder="Last Name" />  
              </Form.Group>  
              <Form.Group controlId="user_email">  
                <Form.Label>EmailId</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="user_email"  
                  value={this.state.user_email}  
                  onChange={this.handleChange}  
                  placeholder="EmailId" />  
              </Form.Group>  
              <Form.Group controlId="user_phone">  
                <Form.Label>MobileNo</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="user_phone"  
                  value={this.state.user_phone}  
                  onChange={this.handleChange}  
                  placeholder="MobileNo" />  
              </Form.Group>  
              <Form.Group controlId="location_id">  
                <Form.Label>Address</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="location_id"  
                  value={this.state.loaction_id}  
                  onChange={this.handleChange}  
                  placeholder="Address" />  
              </Form.Group>  
  
               
              <Form.Group>  
                <Form.Control type="hidden" name="user_id" value={this.state.user_id} />  
                <Button variant="success" type="submit">{actionStatus}</Button>            
  
              </Form.Group>  
            </Form>  
          </Col>  
        </Row>  
      </div>  
    )  
  }  
}  
  
export default AddUser;  