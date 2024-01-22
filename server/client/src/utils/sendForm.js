// utils/submitForm.js
const submitForm = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/api/v8/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: formData })
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
        return data; // Puedes devolver datos adicionales si es necesario
      } else {
        throw new Error(`Error al enviar datos al servidor: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error de red:', error);
  
      // Puedes arrojar el error nuevamente para manejarlo en el componente que llama a esta función
      throw error;
    }
  };
  
  export default submitForm;
  