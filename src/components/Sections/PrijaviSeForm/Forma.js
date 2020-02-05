import React, {Component} from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import "../NewsSections/HeaderSections.css"

class Forma extends Component {
    render(){
            const categoryId=this.props.categoryId
            const eventId=this.props.eventId
            console.log(this.props.eventId)
        return (
          <div className={"container"}>
              <div className={"row pt-2"}>
                <div className={"col-2"}>
                   <img className="img-icon" src={this.props.categories[categoryId].backgroundUrl}/>
                </div>
                <div className={"col"}>
                   <h2 className={"font-weight-bold justify content centre"}>{this.props.categories[categoryId].nastani[eventId].naslov}</h2>
                </div>
              </div>
              <br/>
              <br/>
          <div className={"container"}>
               <Form>
                 <Form.Row className={"pr-2"}>
                   <Form.Group  controlId="formGridEmail" className={"pr-2"}>
                     <Form.Label>Име</Form.Label>
                     <Form.Control type="email" placeholder="Внеси име" />
                   </Form.Group>

                   <Form.Group  controlId="formGridPassword">
                     <Form.Label>Презиме</Form.Label>
                     <Form.Control type="password" placeholder="Внеси презиме" />
                   </Form.Group>
                 </Form.Row>

                 <Form.Group controlId="formGridAddress1">
                   <Form.Label>Адреса</Form.Label>
                   <Form.Control placeholder="" />
                 </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Датум на раѓање</Form.Label>
                    <Form.Control placeholder="дд/мм/гггг" />
                  </Form.Group>

                 <Form.Row>
                   <Form.Group controlId="formGridCity" className={"pr-2"}>
                     <Form.Label>Град</Form.Label>
                     <Form.Control as="select">
                       <option>Избери...</option>
                       <option>Скопје</option>
                       <option>Битола</option>
                       <option>Прилеп</option>
                       <option>Тетово</option>
                       <option>Куманово</option>
                     </Form.Control>
                   </Form.Group>

                 </Form.Row>

                 <Button variant="primary" type="submit">
                   Пријави се
                 </Button>
               </Form>
               </div>
        </div>

        );
    }
}

export default Forma;