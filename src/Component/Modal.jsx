import React, { Component } from "react";
import { connect } from "react-redux";
import {
    actionDelete,
    actionQuantityChange,
} from "../redux/Actions/BanGiayActions";

class Modal extends Component {
    xuLyTangGiam = (index, tangGiam) => {
        this.props.dispatch(actionQuantityChange(index, tangGiam));
    };
    xuLyXoa = (ID) => {
        this.props.dispatch(actionDelete(ID));
    };
    renderTongTien = () => {
        let { gioHang } = this.props;
        let tongTien = gioHang.reduce((sum, item, index) => {
            return sum += item.price * item.soLuong
        }, 0)
        return tongTien;
    }
    renderGioHang = () => {
        let { gioHang } = this.props;
        return gioHang.map((sanPham, index) => {
            return (
                <tr key={index.toString() + sanPham.id}>
                    <td>{sanPham.name}</td>
                    <td>{sanPham.price}</td>
                    <td>
                        <img src={sanPham.image} alt={sanPham.name} height={50} />
                    </td>
                    <td>
                        <span
                            onClick={() => {
                                this.xuLyTangGiam(index, false);
                            }}
                            className="btn btn-danger mx-2"
                        >
                            -
                        </span>
                        {sanPham.soLuong}
                        <span
                            onClick={() => {
                                this.xuLyTangGiam(index, true);
                            }}
                            className="btn btn-success mx-2"
                        >
                            +
                        </span>
                    </td>
                    <td>
                        <button
                            onClick={() => {
                                this.xuLyXoa(sanPham.id);
                            }}
                            className="btn btn-danger"
                        >
                            Xóa
                        </button>
                    </td>
                </tr>
            );
        });
    };
    render() {
        return (
            <>
                <div
                    className="modal fade bd-example-modal-lg"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            {this.props.gioHang.length ? (
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>Tên</th>
                                            <th>Giá tiền</th>
                                            <th>Hình ảnh</th>
                                            <th>Số lượng</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>{this.renderGioHang()}</tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="2"></td>
                                            <td>Tổng tiền</td>
                                            <td>{

                                                this.renderTongTien()

                                            }</td>

                                        </tr>
                                    </tfoot>
                                </table>
                            ) : (
                                <h2 className="text-center text-success py-2">
                                    Chọn sản phẩm đi nà
                                </h2>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    gioHang: state.BanGiayReducer.gioHang,
});

export default connect(mapStateToProps)(Modal);
