import React, { Component } from "react";
import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

const baseUrl= "http://localhost:3001/usuario";
const cookies = new Cookies();

class Login extends Component {
    state = {
        form: {
            username : "",
            password : ""
        }
    }
    handleChange= async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
    inicioSesion=async()=>{
        await axios.post(baseUrl, {username: this.state.form.username, password: md5(this.state.form.password)})
        .then(response=>{
            return response.data;
        })
        .then(response => {
            console.log(response);
            if(response.length > 0){
                var respuesta = response[0];
                cookies.set("id", respuesta.id, {path:"/"});
                cookies.set("username", respuesta.username, {path:"/"});
                alert(`Bienvenid@ ${respuesta.username}`);
                window.location.href="./nav";
            } else {
                alert("El usuario y/o contraseña son incorrectos")
            }
        })
        .catch(error=>{
            console.log("Error en la solicitud:", error.response || error.message || error);
        });
    }
    render () {
        const backgroundStyle = {
            backgroundImage: `url("/gigantes.jpg")`,
            
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          };
        return (
            <div style={backgroundStyle}>
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Username :</label><br/>
                        <input type ="text"
                        className="form-control" name="username" onChange={this.handleChange}/>
                        <br/>
                        <label>Password :</label><br/>
                        <input type="password"
                        className="form-control" name="password" onChange={this.handleChange}/><br/>
                        <button className="btn btn-primary" onClick={()=> this.inicioSesion()}>L O G  I N</button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Login;