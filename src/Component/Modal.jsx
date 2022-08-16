import React, { Component } from 'react'

export default class Modal extends Component {
    renderGioHang = () => {
        let { gioHang, xuLyTangGiam, xuLyXoa } = this.props
        return (
            gioHang.map((sanPham, index) => {
                return (
                    <tr key={index.toString() + sanPham.id} >
                        <td>{sanPham.name}</td>
                        <td>{sanPham.price}</td>
                        <td>
                            <img src={sanPham.image} alt={sanPham.name} height={50} />
                        </td>
                        <td>
                            <span
                                onClick={() => {
                                    xuLyTangGiam(index, false)
                                }}
                                className='btn btn-danger mx-2'  >-</span>
                            {sanPham.soLuong}
                            <span
                                onClick={() => {
                                    xuLyTangGiam(index, true)
                                }}
                                className='btn btn-success mx-2' >+</span>
                        </td>
                        <td>
                            <button
                                onClick={() => {
                                    xuLyXoa(index)
                                }}
                                className='btn btn-danger' >Xóa</button>
                        </td>
                    </tr>
                )
            })

        )
    }
    render() {
        return (
            <>
                <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <table className='table text-center' >
                                <thead>
                                    <tr>
                                        <th>Tên</th>
                                        <th>Giá tiền</th>
                                        <th>Hình ảnh</th>
                                        <th>Số lượng</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.gioHang.length ?
                                            this.renderGioHang()
                                            :
                                            <h1>Chọn sản phẩm đi nà</h1>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
