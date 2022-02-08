import React, { Component } from 'react'
import NhanVien from "./nhan-vien";
import SanPham from "./san-pham";
import WithModal from "./with-modal";

let FormModalNV = WithModal(NhanVien);
let FormModalSP = WithModal(SanPham);


export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>***HocPage</h3>
                <FormModalNV />
                <FormModalSP />
            </div>
        )
    }
}
