const listClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      email,
      id: uuid.v4(),
    }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clientServices = {
  listClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};

/////////////////////////////////////////////

/////////////////////////////////////////////

/////////////////////////////////////////////
// const listClientes = () => {
//   const promise = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     http.open("GET", "http://localhost:3000/perfil");

//     http.send();

//     http.onload = () => {
//       const response = JSON.parse(http.response);
//       if (http.status >= 400) {
//         reject(response);
//       } else {
//         resolve(response);
//       }
//     };
//   });

//   return promise;
// };

// listClientes()
//   .then((data) => {
//     data.forEach((perfil) => {
//       const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
//       table.appendChild(nuevaLinea);
//     });
//   })
//   .catch((error) => alert("Ocurrio un error"));
