import React, {Component} from 'react';
//import './DonateForm.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu/Menu.js';
import Footer from './Footer.js';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';
class DonateForm extends Component{
    render() {


    return(
        <div>
            <Menu/>
            <br/>
            <br/>
            <div className={"container"}>
                <Form>
                    <h3 className="{justify-content-start}">Донирај овде: </h3>
                    <br/>
                    <Form.Row className={"pr-2"}>
                        <Form.Group  controlId="formGridEmail" className={"pr-2"}>
                            <Form.Label><b>Име</b></Form.Label>
                            <Form.Control type="email" placeholder="Внесе име" />
                        </Form.Group>

                        <Form.Group  controlId="formGridPassword">
                            <Form.Label><b>Презиме</b></Form.Label>
                            <Form.Control type="password" placeholder="Внесете презиме" />
                        </Form.Group>
                    </Form.Row>


                     <Form.Row>
                      <Form.Group controlId="formGridCity" className={"pr-2"}>
                           <Form.Label>Подржани цели на донирање:</Form.Label>
                           <Form.Control as="select">
                                           <option>Избери донација...</option>
                                           <option>Изградба на основно училиште</option>
                                           <option>Набавка на лекови за лица со ретки болести</option>
                                           <option>Пошумување на опожарената област во Велес</option>
                                           <option>СОС Детско село</option>
                           </Form.Control>
                       </Form.Group>

                      </Form.Row>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label><b>Матичен број</b></Form.Label>
                        <Form.Control placeholder="ЕМБГ" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label><b>Сума</b></Form.Label>
                        <Form.Control placeholder="наведете ја и валутата :) " />
                    </Form.Group>



                    <Button variant="primary" type="submit">
                        <b>Донирај</b>
                    </Button>
                </Form>
            </div>
            <br/>
            <br/>
            <Footer/>
        </div>



    );
    }
}
export default DonateForm;