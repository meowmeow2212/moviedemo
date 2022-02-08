import React, { memo } from 'react'

//memo giúp cho những gì không thay đổi sẽ không bị chạy lại
// tăng performance trang web

export default memo(function Child() {
    console.log("run Child");
    return (
        <div>
            <h3>Child</h3>
        </div>
    )
}
)