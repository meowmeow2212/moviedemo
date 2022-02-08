//Tổng hợp những thứ sử dụng chung bằng HOC

// Bắt buộc sử dụng rsc : style less

import React from 'react'

export default function WithModal(Component) {
    //HOC: là Một hàm with modal sẽ return trả về 1 hàm mới
    //HOC: higher order component
    // laf 1 function sẽ return về 1 function mới
    return function () {
        return (
            <div>
                <div>
                    {/* Button trigger modal */}
                    <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-toggle="modal"
                        data-target="#modelId"
                    >
                        Launch
        </button>
                    {/* Modal */}
                    <div
                        className="modal fade"
                        id="modelId"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="modelTitleId"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    {/* chỗ này dùng chung
                                        Component nào được truyền vào thì nó sẽ nhận tham số đó:
                                        vd: nhân viên, sản phẩm
                                    */}

                                    <Component />

                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        Close
                </button>
                                    <button type="button" className="btn btn-primary">
                                        Save
                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
