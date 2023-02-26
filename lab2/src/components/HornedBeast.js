import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class HornedBeast extends React.Component {

    //  when we want to re -redner the compoenent we use setstate 
    constructor(props) {
        super(props);

        this.state = {
            favorite: 0
        }
    }


    addOne = () => {
        this.setState(
            {
                favorite: this.state.favorite + 1
            }
        )
    }

<<<<<<< HEAD
    displayBeast=(e)=>{
        
        this.props.viewBeast(e);
        this.addOne()
        
    }
=======

    displayModal = (e) => {
        this.props.handlingshow(e);
    }


    displayNumberOfHorns=()=>{
console.log(this.props.numberOfHorns);
    }

>>>>>>> d4dcfca (finished lab4)
    render() {

        return (

            <Row xs={1} md={2} className="g-4">

                <Col>
                    <Card>
                        <p>{this.state.favorite}</p>


<<<<<<< HEAD
                        <Card.Img width={300} nonce={this.props.description} name={this.props.title} onClick={this.displayBeast}  key={this.props._id} variant="top" src={this.props.image_url} />
=======
                        <Card.Img width={300} alt={this.props.description} name={this.props.title} onClick={this.displayModal} key={this.props._id} variant="top" src={this.props.image_url} />
>>>>>>> d4dcfca (finished lab4)
                        <Card.Body>
                            <Card.Title>{this.props.title} </Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
<<<<<<< HEAD
=======

>>>>>>> d4dcfca (finished lab4)
                            <button onClick={this.addOne}>Like</button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            // <div>
            //     <Heart/>
            // <h1>{this.props.title}</h1>
            // <img onClick={this.addOne} width ={500}src={this.props.image_url}/>
            // <p>{this.props.description}</p>   
            // </div>
        )
    }
}

export default HornedBeast;