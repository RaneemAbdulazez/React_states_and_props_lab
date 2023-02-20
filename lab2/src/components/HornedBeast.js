import React from "react";

class HornedBeast extends React.Component{
    render(){
        return(
            <div>         
            <h1>{this.props.title}</h1>
            <img width={500} src={this.props.image_url} />
            <p>{this.props.description}</p>
            </div>
 
        )
    }
}

export default HornedBeast;