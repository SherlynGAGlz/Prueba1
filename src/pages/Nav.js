import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Nav extends Component {
    render() {
        const id = cookies.get("id");
        const username = cookies.get("username");
        console.log("id: " + (id ? id : "No ID"));
        console.log("username: " + (username ? username : "No Username"));
        return (
            <>
                {/* Aquí puedes agregar contenido o elementos de navegación */}
            </>
        );
    }
}
export default Nav;
