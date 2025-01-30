import { createServer } from 'miragejs';

// Fonction pour charger les données depuis le fichier JSON
async function loadJSON() {
  const response = await fetch('/db/hotels.json'); // Chargement depuis public/db/hotels.json
  return response.json();
}

export async function makeServer() {
  let jsonData = await loadJSON();

  let server = createServer({
    routes() {
      this.namespace = 'api';

      this.get('/hotels', () => {
        return jsonData;
      });
      this.passthrough('https://nominatim.openstreetmap.org/**');
    }
  });

  return server;
}
