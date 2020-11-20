import React, {Component} from "react";

class ProductDetail extends Component {

    constructor(){
        super();
    }

    render(){
        let {Name} = this.props.Item;
        console.log(Name);
        return(<div>{Name}</div>);
    }

}

export default ProductDetail;