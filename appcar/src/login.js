import React from 'react';
import './App.css';
// eslint-disable-next-line
import logo from './logo.PNG';
import compra from './image2.jpg';
import compra2 from './image3.jpg';
import compra4 from './image4.jpg';
class Login extends React.Component{
    render(){
        return <div className = "componente">
            
            <div className = "vista">
                <div className = "recuadro">
                    <header>
                        
                        <img src = {logo}/>

                    </header>
                    <form className = "campos">
                        <label>Usuario</label>
                        <br/>
                        <div id = "decoracion1">
                        <input id = "user01" type = "text" placeholder = "ej:username001"/>
                        </div>
                    </form>
                    <form className = "campos">
                        <label>Contraseña</label>
                        <br/>
                        <div id = "decoracion1">
                        <input id = "user01" type = "password" placeholder = "ej:********"/>
                        </div>
                    </form>
                    
                    <button id = "Aceptar">ACEPTAR</button>
                    
                    </div>
            </div> 
            <br/>
            <div className = "vista">
                <header id = "slideshead">
                    <h1 id = "esta">ESTA</h1>
                    <h1 id = "car">CAR</h1>
                </header>
                <ul className = "slider">
                    <li id = "slide1">
                        <div id = "info1">
                            <h1>Bienvenido</h1>
                            <p id = "textinfo">Gracias por usar nuestra aplicacion ESTACAR, 
                                en esta encontraras muchas funciones para tus compras en<br/> tiendas
                                cerca de tu hogar</p>
                                <img id = "carrito" src = {compra}/>
                        </div>
                    </li>
                    <li id = "slide2">
                        <div id = "info1">
                            <h1>Consulta TODO LO QUE QUIERAS</h1>
                            <p id = "textinfo">Con esta app puedes buscar la lista de
                            productos de los establecimientos que esten registrados
                            y compararla con otras tiendas y conocer nuevos productos
                            que lleguen a tus tiendas favoritas</p>
                                <img id = "carrito" src = {compra2}/>
                        </div>
                    </li>
                    <li id = "slide3">
                        <div id = "info1">
                            <h1>Registra tu tienda</h1>
                            <p id = "textinfo">NO TE QUEDES ATRAS, si eres dueño de
                            un establecimiento, registralo con el fin de dar a conocer tus
                            productos y los usuarios puedan ver lo que ofreces y al precio que lo haces</p>
                                <img id = "carrito" src = {compra4}/>
                        </div>
                    </li>
                </ul>
                <ul className = "menu">
                    <li>
                        <a href = "#slide1">1</a>
                    </li>
                    <li>
                        <a href = "#slide2">2</a>
                    </li>
                    <li>
                        <a href = "#slide3">3</a>
                    </li>
                </ul>
            </div>
        </div>

    }
} 

export default Login;