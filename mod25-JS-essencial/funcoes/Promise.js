function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    console.log(`🔍 Buscando usuário com id ${id}...`);

    setTimeout(() => {
      const usuarios = {
        1: { nome: "Alice", idade: 25 },
        2: { nome: "Bruno", idade: 30 },
        3: { nome: "Carla", idade: 22 }
      };

      const usuario = usuarios[id];

      if (usuario) {
        resolve(usuario);
      } else {
        reject(`❌ Usuário com id ${id} não encontrado.`);
      }
    }, 1500); // simula um delay de 1.5 segundos
  });
}

// Usando a Promise
buscarUsuario(2)
  .then(usuario => {
    console.log("✅ Usuário encontrado:", usuario);
  })
  .catch(erro => {
    console.error("Erro:", erro);
  });