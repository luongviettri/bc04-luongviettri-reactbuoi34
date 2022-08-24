import React, { Component } from 'react'
import SanPham from './SanPham'
import { connect } from 'react-redux';
import dataShoe from './data_shoe';
export default class ListSanPham extends Component {
    renderGiay = () => {
        return dataShoe.map((shoe, index) => {
            return <SanPham
                shoe={shoe}
                key={index.toString() + shoe.id}
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