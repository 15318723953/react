import { Fragment } from "react";
import React  from 'react';

const Index = () => {
    return (
        // Fragment 标签可以被react忽略解析页面不会渲染 可以传key值但不可以传其他值
        <Fragment key={1}>
            <input type="text" />
            <input type="text" />
        </Fragment>
        // <>  空标签也会被react忽略 但是不可以传入任何值
        //     <input type="text" />
        //     <input type="text" />
        // </>
    );
}

export default Index;
