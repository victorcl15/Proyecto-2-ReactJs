import React, { useEffect, useState } from "react";

import "../styles/estilos.css"
import EquipoImg from "../imagenes/equipo.jpg"
import EstadoImg from "../imagenes/estado.jpg"
import UsuarioImg from "../imagenes/usuario.jpg"
import MarcaImg from "../imagenes/marca.jpg"
import InventarioImg from "../imagenes/inventario.jpg"


const Inicio = () => {



  return (
    <>
        <div className="centrar" style={{marginTop: "100px", marginLeft: "100px"}}>
       

      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={EquipoImg} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Tipo de Equipo</h5>
        <p className="card-text">Se definirán distintos tipos de equipos que requiera la organización</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={EstadoImg} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Estado de un Equipo</h5>
        <p className="card-text">Se definirá en que tipo de estado se encuentra el equipo</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={UsuarioImg} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Usuario</h5>
        <p className="card-text">Se guardaran todos los usuarios con los que cuenta la organización</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={MarcaImg} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Marca</h5>
        <p className="card-text">Se almacenaran todas las marcas posibles para luego asignarlas a un equipo</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={InventarioImg} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Inventario</h5>
        <p className="card-text">Se almacenaran todas las marcas posibles para luego asignarlas a un equipo</p>
      </div>
    </div>
  </div>
</div>
</div>
      </>
  )
}

export default Inicio
