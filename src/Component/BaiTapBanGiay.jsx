import React, { Component } from 'react'
import ListSanPham from './ListSanPham'
import Modal from './Modal'
import XemChiTiet from './XemChiTiet'
import dataShoe from './data_shoe'
import { connect } from 'react-redux'
class BaiTapBanGiay extends Component {
    xuLyTongGioHang = () => {
        let { gioHang } = this.props;
        let tongTien = gioHang.reduce((sum, sanPham, index) => {
            return sum += sanPham.soLuong
        }, 0)
        return tongTien;
    }
    render() {
        return (
            <div className='container-fluid my-5' >
                <Modal
                />
                <div className="row justify-content-end mx-2"
                    style={{
                        position: "fixed",
                        right: "0",
                        top: "10px"
                    }}
                >
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Giỏ hàng(
                        <span>
                            {this.xuLyTongGioHang()}
                        </span>

                        )</button>
                </div>
                <div className="row my-2">
                    <div className="col-8">
                        <ListSanPham
                        />
                    </div>
                    <div className="col-4"
                        style={{
                            position: "fixed",
                            right: "0",
                            top: "55px"
                        }}
                    >
                        <XemChiTiet
                        />
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    gioHang: state.BanGiayReducer.gioHang
})
export default connect(mapStateToProps)(BaiTapBanGiay)