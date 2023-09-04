const btn_enviar = document.getElementById("btn_enviar");
const input_nombre = document.getElementById("nombre");
const input_apellido = document.getElementById("apellido");
const input_nacimiento = document.getElementById("fecha_nacimiento");

btn_enviar.addEventListener("click", function() {
    var formulario = JSON.stringify({ "nombre": input_nombre.value, "apellido": input_apellido.value, "fecha_nacimiento": input_nacimiento.value});
    get_respuesta(formulario);
});

async function get_respuesta (formulario) {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users", {method:"POST", headers: {'Accept': 'application/json','Content-Type': 'application/json'}, body: formulario});
    const json = await respuesta.json();
    console.log(JSON.stringify(json));
}