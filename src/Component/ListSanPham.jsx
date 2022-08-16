import React, { Component } from 'react'
import SanPham from './SanPham'

export default class ListSanPham extends Component {
    renderGiay = () => {
        let { dataShoe, xuLyChiTiet, xuLyThemGioHang } = this.props
        return dataShoe.map((shoe, index) => {
            return <SanPham
                shoe={shoe}
                key={index.toString() + shoe.id}
                xuLyChiTiet={xuLyChiTiet}
                xuLyThemGioHang={xuLyThemGioHang}
            />
        })

    }
    render() {
        return (
            <div className='row'>
                {this.renderGiay()}
            </div>
        )
    }
}
