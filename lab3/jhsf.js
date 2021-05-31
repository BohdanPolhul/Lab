import { Button } from 'bootstrap';
import React,{Component} from 'react';
import {Modal, Row, Col, Form} from 'react-bootstrap';
export class Register extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
       handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5001/account/register',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Name:event.target.Name.value,
                Email:event.target.Email.value,
                Phone:event.target.Phone.value,
                Password:event.target.Password.value,
                PasswordConfirm:event.target.PasswordConfirm.value,
                RememberMe:event.target.RememberMe.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">
    <Modal.Body >
      <Row>
              <Col sm={6}>
               <Form onSubmit={this.handleSubmit} className="Registerform" >
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="Name" required 
                        placeholder="Name"/>
                   </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="Email" required 
                        placeholder="Email"/>
                    </Form.Group>
                    <Form.Group controlId="Phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" name="Phone" required 
                        placeholder="Phone"/>
                    </Form.Group>
                    <Form.Group controlId="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" name="Password" required 
                        placeholder="Password"/>
                    </Form.Group>
                    <Form.Group controlId="PasswordConfirm">
                        <Form.Label>PasswordConfirm</Form.Label>
                        <Form.Control type="text" name="PasswordConfirm" required 
                        placeholder="PasswordConfirm"/>
                    </Form.Group>
                <div class="form-group col-md-4">
                    <label for="inputState">RememberMe</label>
                    <select id="inputState" class="form-control">
                     <option selected>True</option>
                     <option>Folse</option>
                     </select>
                </div>
                    <Form.Group>
                    <Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
            </div>
        )
    }
}