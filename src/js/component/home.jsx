//import React from "react";
import React, {useState} from 'react';
import "../../styles/home.css";


//create your first component
const Home = () => {
	const [ color , setcolor] = useState("");
	return (
		<div className="container">
			<div className="stick"></div>
			<div className="semaforo">
			<div className={"luces-circulo red"+ (color == "red" ? " light" : "")} onClick={()=> {setcolor('red')}}></div>
			<div className={"luces-circulo yellow"+ (color == "yellow" ? " light" : "")} onClick={()=> {setcolor('yellow')}}></div>
			<div className={"luces-circulo green"+ (color == "green" ? " light" : "")} onClick={()=> {setcolor('green')}}></div>
			</div>
		</div>
	);
};

export default Home;
