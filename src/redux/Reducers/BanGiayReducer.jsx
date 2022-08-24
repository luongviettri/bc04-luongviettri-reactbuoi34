import dataShoe from "../../Component/data_shoe"
import { ADD_TO_CART, DELETE, DETAIL, QUANTITY_CHANGE } from "../Consts/BanGiayConsts"

const initialState = {
    sanPhamChiTiet: "",
    gioHang: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case DELETE:
            {
                return { ...state, gioHang: [...state.gioHang].filter(item => item.id !== payload) }
            }
        case QUANTITY_CHANGE: {
            let [index, tangGiam] = payload;
            let newGioHang = [...state.gioHang];
            tangGiam ?
                newGioHang[index].soLuong += 1
                :
                newGioHang[index].soLuong > 1 ?
                    newGioHang[index].soLuong -= 1
                    :
                    newGioHang[index].soLuong = 1
            return { ...state, gioHang: newGioHang }
        }
        case DETAIL: {
            return { ...state, sanPhamChiTiet: payload }
        }
        case ADD_TO_CART: {
            let shoe = payload;
            let mangGioHang = [...state.gioHang]
            // ! nếu chưa có, nếu đã có
            let index = mangGioHang.findIndex((sanPham) => {
                return sanPham.id == shoe.id
            })
            index !== -1 ? mangGioHang[index].soLuong += 1 : mangGioHang = [...state.gioHang, { ...shoe, soLuong: 1 }]
            return { ...state, gioHang: mangGioHang }
        }
        default:
            return state
    }
}
