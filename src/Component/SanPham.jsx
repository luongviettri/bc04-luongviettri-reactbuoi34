import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionAddToCart, actionDetailProduct } from '../redux/Actions/BanGiayActions';
class SanPham extends Component {
    xuLyChiTiet = (shoe) => {
        this.props.dispatch(actionDetailProduct(shoe))
    }
    xuLyThemGioHang = (shoe) => {
        this.props.dispatch(actionAddToCart(shoe))
    }
    render() {
        let { shoe } = this.props;
        return (
            <div className="col-3 my-2"
            >
                <div className="card h-100">
                    <img className="card-img-top "
                        src={shoe.image}
                        alt="ok" />
                    <div className="card-body">
                        <h4 className="card-title">
                            {
                                shoe.name
                            }
                        </h4>
                        {
                            shoe.shortDescription.length > 30 ?
                                <p className='className="card-text"' >{shoe.shortDescription.substring(0, 30)}...</p>
                                :
                                <p className="card-text"> {shoe.shortDescription.length} </p>
                        }
                    </div>
                    <div className='d-flex flex-column container'
                    >
                        <button
                            onClick={() => {
                                this.xuLyThemGioHang(shoe)
                            }}
                            className='btn btn-success my-1'>Add to cart</button>
                        <button className='btn btn-warning my-1'
                            onClick={() => {
                                this.xuLyChiTiet(shoe)
                            }}
                        >Detail</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect()(SanPham)