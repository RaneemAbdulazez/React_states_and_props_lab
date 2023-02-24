import React from "react";
import HornedBeast from "./HornedBeast";
import 'bootstrap/dist/css/bootstrap-grid.min.css'


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }


    render() {

        return (

            <div>

                <div >
                    {this.state.data.map((element) => (
                        <HornedBeast key={element._id} title={element.title} width={500} image_url={element.image_url} description={element.description} 
                       viewBeast={this.props.handlingshow} />
                        ))}
                    
                </div>
            </div>






        )

    };
}


export default Main;