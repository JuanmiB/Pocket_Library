import InputForm from "./InputForm.jsx";
import { useState } from "react";
import  submitForm  from "../utils/sendForm.js";

export default function NewForm({refresco}) {
  // Estado para almacenar los datos del formulario
  const [formulario, setFormulario] = useState({
    title: "",
    description: "",
    author: "",
    genre: ["Drama"],
    read: false,
    readDate: "23/05/2021",
  });

  // Manejador de cambios para actualizar el estado del formulario
  const handleInputChange = (fieldName, fieldValue) => {
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [fieldName]: fieldValue,
    }));
  };

  // Manejador de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    refresco()
    console.log(formulario);

    try {
      // Llama a la función submitForm y espera la respuesta antes de continuar
      const response = await submitForm(formulario);
      console.log(response);
      // Aquí puedes realizar acciones adicionales después de enviar el formulario si es necesario
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Manejo de errores si es necesario
    }
  };
  return (
    <form
    onSubmit={(e) => { handleSubmit(e) } }
    >

      {/* Para el campo de título */}
      <InputForm
        label="Titulo"
        type="text"
        placeholder="Escribe el titulo del libro"
        value={formulario.title}
        onChange={(value) => handleInputChange("title", value)}
      />

      {/* Para el campo de autor */}
      <InputForm
        label="Autor"
        type="text"
        placeholder="Escribe el autor del libro"
        value={formulario.author}
        onChange={(value) => handleInputChange("author", value)}
      />

      {/* Para el campo de descripción (textarea) */}
      <InputForm
        textarea
        label={"Descripcion"}
        placeholder={"Escribe una descripcion"}
        value={formulario.description}
        onChange={(value) => handleInputChange("description", value)}
      />

      {/* Para el campo de género (select) */}
      <InputForm
        select
        label={"Genero"}
        options={["Ciencia Ficcion", "Terror", "Romance", "Drama"]}
        value={formulario.genre}
        onChange={(value) => handleInputChange("genre", value)}
        multiple
      />
        
        {/* Para el campo de leído (checkbox) */}
      <InputForm
        label={"Leido"}
        type={"checkbox"}
        value={formulario.read}
        onChange={(value) => handleInputChange("read", value)}
      />
      <button>Enviar</button>
    </form>
  );
}
