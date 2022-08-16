import React, { Component } from 'react'
import ListSanPham from './ListSanPham'
import Modal from './Modal'
import XemChiTiet from './XemChiTiet'
import dataShoe from './data_shoe'


export default class BaiTapBanGiay extends Component {
    state = {
        sanPhamChiTiet: "",
        gioHang: []
    }
    xuLyChiTiet = (shoe) => {
        this.setState({
            sanPhamChiTiet: shoe
        })
    }
    xuLyThemGioHang = (shoe) => {
        // ! nếu chưa có, nếu đã có
        let index = this.state.gioHang.findIndex((sanPham) => {
            return sanPham.id == shoe.id
        })
        if (index !== -1) { //! nếu đã có
            let newGioHang = [...this.state.gioHang];
            newGioHang[index].soLuong += 1;
            this.setState({
                gioHang: newGioHang
            })
        } else { // ! nếu chưa có
            let newGioHang = [...this.state.gioHang, { ...shoe, soLuong: 1 }];
            this.setState({
                gioHang: newGioHang
            })
        }
    }
    xuLyTongGioHang = () => {
        let sum = 0;
        for (let i = 0; i < this.state.gioHang.length; i++) {
            sum += this.state.gioHang[i].soLuong;
        }
        return sum;
    }
    xuLyTangGiam = (index, tangGiam) => {
        let newGioHang = [...this.state.gioHang];
        tangGiam ?
            newGioHang[index].soLuong += 1
            :
            newGioHang[index].soLuong > 1 ?
                newGioHang[index].soLuong -= 1
                :
                newGioHang[index].soLuong = 1
        this.setState({
            gioHang: newGioHang
        })
    }
    xuLyXoa = (index) => {
        let newGioHang = [...this.state.gioHang];
        newGioHang.splice(index, 1);
        this.setState({
            gioHang: newGioHang
        })
    }
    render() {
        return (
            <div className='container-fluid my-5' >
                <Modal
                    gioHang={this.state.gioHang}
                    xuLyTangGiam={this.xuLyTangGiam}
                    xuLyXoa={this.xuLyXoa}

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
                            dataShoe={dataShoe}
                            xuLyChiTiet={this.xuLyChiTiet}
                            xuLyThemGioHang={this.xuLyThemGioHang}

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
                            sanPhamChiTiet={this.state.sanPhamChiTiet}
                        />
                    </div>

                </div>
            </div>
        )
    }
}
