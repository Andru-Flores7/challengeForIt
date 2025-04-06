import React from "react";
import "../assets/css/CreateTaskForm.css";
const CreateTaskForm = () => {
  return (
    <>
      <div className="create">
        <h1>Crear Nueva Tarea</h1>
      </div>
      <div className="containerCreateForm">
        <form>
          <div>
            <div>
              <label>Tarea</label>
              <input type="text" />
            </div>
            <div>
              <label>Descripcion</label>
              <textarea ></textarea>
            </div>
          </div>
          <button className="btnCreate btn btn-primary" type="submit">
            Crear
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTaskForm;
