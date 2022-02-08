//sử dụng hook => thêm useState
// sử dụng tác dụng phụ: useEffect (thay thế cho componentDidMount,...)
import React, { useState, useEffect, useCallback, useMemo } from 'react'

import Child from "./Child";

export default function Hook() {

    const result = useState(1);

    // console.log(result); // [ state, setState ]
    const [count, setCount] = result;
    const [name, setName] = useState("Hasagi");

    /**
     * useEffect Không có tham số thứ 2
     * chạy trong 3 giai đoạn: mounting, updating, unmounting
     * 
     */

    useEffect(() => {
        // console.log("useEffect Không có tham số thứ 2");
        return () => {
            //clear các tác dụng phụ (vd: setTimeout) để ko bị lỗi
            // console.log("useEffect Không có tham số thứ 2, unmounting");
        }
    });


    /**
     * useEffect có tham số thứ 2 là 1 mảng không rỗng
     * [name] thay đổi thì useEffect chạy lại. Ngược lại ko thay đổi => ko chạy
     * Chạy trong 3 giai đoạn như ko có tham số thứ 2
     */
    useEffect(() => {
        //call api tại đây
        // console.log("useEffect có tham số thứ 2 là 1 mảng không rỗng");
        return () => {

        }
    }, [name]);

    /**
   * useEffect có tham số thứ 2 là 1 mảng rỗng
   * chỉ chạy đi mounting vào cây DOM
   * 
   */
    useEffect(() => {
        //call api tại đây
        // console.log("useEffect có tham số thứ 2 là 1 mảng rỗng");
        return () => {

        }
    }, []);


   

    const showCode = () => {
        console.log("show Code");
    };

    //giúp hàm không bị chạy lại
    // nếu là [] = null sẽ ko chạy lại
    // nếu muốn thay đổi khi set Name hay count thì sửa thành [count], [name]...
    const showCodeCallBack = useCallback(showCode, [count]);

    const stringCode = "aaaaaaaaaaaaaaaaaa";

    const tapDem = ()=>{
        let tong = 0;
        for (let index = 0; index < 100; index++) {
            console.log(index);
            tong += index;
        }
        return tong;
    };

     //useMemo: lưu cache lại => ko bị gọi lại nữa
     const tapDemUseMemo = useMemo(tapDem, []);

    return (
        <div className="text-center">
            <h3>Hook</h3>
            <hr></hr>
            <p>{count}</p>
            <button
                className="btn btn-info"
                onClick={() => {
                    const newCount = count + 1;
                    setCount(newCount);
                }}

            >Tăng 1</button>
            <hr></hr>
            <p>{name}</p>

            <button className="btn btn-danger"
                onClick={() => {
                    const newName = "Yasua Hasagi";
                    setName(newName);
                }}
            > Yasua</button>

            <hr></hr>

            <Child 
            
             showCode={showCodeCallBack}
             stringCode={stringCode}
            // showCodeCallBack={showCodeCallBack}
            />

            <hr></hr>
            <p>{tapDemUseMemo}</p>
        </div>
    );
};
