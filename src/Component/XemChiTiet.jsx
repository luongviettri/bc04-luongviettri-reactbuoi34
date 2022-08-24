import React, { Component } from 'react'
import { connect } from 'react-redux';
class XemChiTiet extends Component {
    render() {
        let { name, price, description, image } = this.props.sanPhamChiTiet;
        return (
            <div>
                {
                    this.props.sanPhamChiTiet ?
                        <>
                            <div className="card">
                                <img className="card-img-top" src={image} alt='ok' />
                                <div className="card-body">
                                    <h4 className="card-title">{name}</h4>
                                    <p className="card-text text-danger ">Price: {price}</p>
                                    <p className="card-text">{description}</p>
                                </div>
                            </div>
                        </>
                        :
                        <h2 className='my-5 mx-2 text-primary'>Chọn một sản phẩm để hiển thị nà</h2>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    sanPhamChiTiet: state.BanGiayReducer.sanPhamChiTiet
})

export default connect(mapStateToProps)(XemChiTiet);
