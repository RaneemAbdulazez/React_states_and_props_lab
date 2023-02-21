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
    render() {

        return (

            <Row xs={1} md={2} className="g-4">

                <Col>
                    <Card>
                        <p>{this.state.favorite}</p>


                        <Card.Img width={300} onClick={this.addOne} key={this.props._id} width={500} variant="top" src={this.props.image_url} />
                        <Card.Body>
                            <Card.Title>{this.props.title} </Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
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