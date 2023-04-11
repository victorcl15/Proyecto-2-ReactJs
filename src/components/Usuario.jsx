import React, { useEffect, useState } from "react";
//import {getAll} from "../servicios/equipos"
import { getTipoEquipos, createTipoEquipo, editarTipoEquipo, eliminarTipoEquipo } from "../servicios/TipoEquipo";
import "../styles/estilos.css"

export default function Usuario() {

  const [equipos1, setEquipos] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)
    const [newEquipo, setNewEquipo] = useState({name: "", email: ""})
    const [identificador, setIdentificador] = useState("")
    const [equipoRecuperado, setEquipoRecuperado] = useState({name: "", email: ""})
    const [newEditarEquipo, setNewEditarEquipo] = useState({
      name: "",
      email: "",
      estado: ""
    })
    const rutas = "usuarios"

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log('Name:', newEquipo.name);
      console.log(newEquipo)
      
      
      await createTipoEquipo(rutas ,newEquipo)
       listarEquipos()
       setNewEquipo({name: "", email: ""})
    }

    const listarEquipos = async () => {
      const {data} = await getTipoEquipos(rutas)
      console.log(data)
      setEquipos(data)
    }

    const eliminar = async (event) => {
      event.preventDefault();
      await eliminarTipoEquipo(rutas ,event.target.value)
      console.log(event.target.value)
      listarEquipos()
    }

    
    const editarEquipos = async (event) => {
      event.preventDefault();
      console.log(newEditarEquipo)
      
      console.log(identificador)
      
     await editarTipoEquipo(identificador, rutas, newEditarEquipo)
     
     
      
      listarEquipos()
      setNewEditarEquipo({estado: "", name: "", email: ""})

     // setNewEditarEquipo({name: "",
     //estado: true})
    }

    const idImport = (event) => {
      //console.log(event.target.value)
      //console.log(event.target.name)
      //let idDefi = event.target.value
      //return idDefi
      setEquipoRecuperado({name: event.target.name, email: event.target.value})
      setIdentificador(event.target.id)
      
      
    }

    const refrescarEdit = () => {
      //window.location.reload();
      setNewEditarEquipo({estado: "", name: "", email: ""})
      setEquipoRecuperado({name: "", email: ""})
    }

    const refrescarNew = () => {
      //window.location.reload();
      setNewEquipo({name: "", email: ""})
    }

    useEffect(() => {
  
      listarEquipos()
      //getAll(setEquipos)
    }, [])
    
    const estados = [{label: "Activo", value: true},
  {label: "Inactivo", value: false}]
    const valido = "Valido"
    const invalido = "Invalido"
    const nada = "No hay datos"

  return (
    <>
        
        <div className="centrar" style={{marginLeft: "50px", marginRight: "50px", marginBottom: "50px", marginTop: "50px"}}>
{/* modal para crear equipo */}

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Crear Nuevo Usuario</h1>
        <button type="button" onClick={refrescarNew} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
            <input 
            type="text"
            placeholder="Escribe un equipo"
            className="form-control"
            id="recipient-name"
            value={newEquipo.name}
            onChange={event => setNewEquipo({ name: event.target.value, email: newEquipo.email })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Email:</label>
            <input 
            type="text"
            placeholder="Escribe un email"
            className="form-control"
            id="recipient-email"
            value={newEquipo.email}
            onChange={event => setNewEquipo({ email: event.target.value, name: newEquipo.name })}
            />
          </div>
          <div className="modal-footer">
        <button type="button" onClick={refrescarNew} className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="submit" disabled={!newEquipo.name} className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
      </div>
        </form>
      </div>
      
    </div>
  </div>
</div>
{/* aqui termina el modal de crear equipo */}

{/* modal para editar equipo*/}
<div className="modal fade" id="exampleModal15" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edita un Usuario</h1>
        <button type="button" onClick={refrescarEdit} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={editarEquipos}>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
            <input 
            type="text"
            className="form-control"
            id="recipient-name"
            
            value={newEditarEquipo.name==="" ? equipoRecuperado.name : newEditarEquipo.name}
            name={equipoRecuperado.name}
            onChange={event => setNewEditarEquipo({ 
              name: event.target.value==="" ? equipoRecuperado.name : event.target.value,
              email: newEditarEquipo.email,
              estado: newEditarEquipo.estado
             })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Email:</label>
            <input 
            type="text"
            className="form-control"
            id="recipient-email"
            
            value={newEditarEquipo.email==="" ? equipoRecuperado.email : newEditarEquipo.email}
            name={equipoRecuperado.email}
            onChange={event => setNewEditarEquipo({ 
              email: event.target.value==="" ? equipoRecuperado.email : event.target.value,
              name: newEditarEquipo.name,
              estado: newEditarEquipo.estado
             })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Estado:</label>
            <select className="form-select" aria-label="Default select example"
            value={newEditarEquipo.estado}
            name={newEditarEquipo.name}
            onChange={event => setNewEditarEquipo({ estado: event.target.value,
              name: newEditarEquipo.name==="" ? equipoRecuperado.name : newEditarEquipo.name,
              email: newEditarEquipo.email==="" ? equipoRecuperado.email : newEditarEquipo.email
            })}
            required={true}
            >
              <option value="">Selecciona el estado...</option>
              <option value={true}
              
              >Activo</option>
              <option value={false}
             
              >Inactivo</option>
              
            </select>
  
          </div>
          <div className="modal-footer">
        <button type="button" onClick={refrescarEdit} className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="submit" disabled={!newEditarEquipo.estado} className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
      </div>
        </form>
      </div>
      
    </div>
  </div>
</div>
{/* Aqui termina el modal de editar equipo */}

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
          <th scope="col">Email</th>
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
      <td>{tipoequipos.email}</td>
      <td>{tipoequipos.estado ? valido : invalido}</td>
      <td>{tipoequipos.date}</td>
      <td>{tipoequipos.dateUp}</td>
      <td><button type="button" className="btn btn-success"
      data-bs-toggle="modal" 
      data-bs-target="#exampleModal15" 
      data-bs-whatever="@mdo"
      id={tipoequipos.id}
      value={tipoequipos.email}
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
</div>
      
            

      </>
  )
}
