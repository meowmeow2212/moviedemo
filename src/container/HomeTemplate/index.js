import React from 'react';
import { Route } from "react-router-dom";
import NavbarHome from "./../../components/NavbarHome";


function HomeLayout(props){
    return (
        <div>
            <NavbarHome />
            {props.children}
        </div>
    );
};


//Bóc tắt ngay tại đây
//{...props, Component} : 
//{...props} = { exact, path }
export default function HomeTemplate({ Component, ...props }) {

    //const { exact, path } = props;
    
    return (
        <Route
            {...props}
            // component={Component}
            render={(propsComponent)=>(
                <HomeLayout>
                    <Component {...propsComponent}/>
                </HomeLayout>
            )}
        />
    );
};
