import React, { useEffect, useState } from "react";
import { getTipoEquipos} from "../../servicios/TipoEquipo";
import UseEdit from "./UseEdit";
import UseDel from "./UseDel";
function UseList({
  equipos1,
  valido,
  invalido,
  nada,
  idImport,
  eliminar
}) {


    

    return (
        <>
      <button 
          
          type="button" 
          className="btn btn-outline-primary"
          data-bs-toggle="modal" 
          data-bs-target="#exampleModal" 
          data-bs-whatever="@mdo"
        >
          Agregar
        </button>
            <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Estado</th>
          <th scope="col">Fecha</th>
          <th scope="col">Fecha-Actualizada</th>
          <th scope="col"></th>
        </tr>
      </thead>
  <tbody className="table-group-divider">
    {
      equipos1 != null ? equipos1.map((tipoequipos, index) => {
        return(
          <tr key={tipoequipos.id}>
      <th scope="row">{index+1}</th>
      <td>{tipoequipos.name}</td>
      <td>{tipoequipos.estado ? valido : invalido}</td>
      <td>{tipoequipos.date}</td>
      <td>{tipoequipos.dateUp}</td>
      <td><button type="button" className="btn btn-success"
      data-bs-toggle="modal" 
      data-bs-target="#exampleModal15" 
      data-bs-whatever="@mdo"
      value={tipoequipos.id}
      name={tipoequipos.name}
      
      onClick={idImport}
      >Editar</button>
      {" "}
      <button type="button" className="btn btn-danger"
      onClick={eliminar} value={tipoequipos.id}
      >Eliminar</button></td>
    </tr>
        )
      }): nada }
  
  </tbody>
</table>
        </>
    );
}

export default UseList;