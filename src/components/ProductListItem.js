import React, {Component} from "react";

class ProductListItem extends Component{
    constructor(props){
        super(props);
        this.goToDetail = this.goToDetail.bind(this);
    }

    goToDetail(){
        let {Item} = this.props;
        this.props.Action(Item);
    }

    render(){
        let item = this.props.Item;
        const retailPrice = item["Retail Price"];
        const price = item["Price"];
        return (
            <div className="item">
                <div className="image">
                    <img src={item.ThumbnailURL} />
                </div>
                <div className="content">
                    <span className="title">{item.Name}</span>
                    <div>
                        <span className="price">{`$ ${price}`}</span>
                        {(price != retailPrice) ? <span className="realprice">{`$ ${retailPrice}`}</span> : ''}
                    </div>
                </div>
                <div className="action">
                    <input type="button" className="btn btn-success" value="View Details" onClick={this.goToDetail} />
                </div>
            </div>
        );
    }

}

export default ProductListItem;