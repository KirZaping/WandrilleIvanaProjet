import { createServer } from 'miragejs';

async function loadJSON() {
  const response = await fetch('/db/hotels.json');
  return response.json();
}

async function loadActivitiesJSON() {
  const activities_response = await fetch('/db/activities.json');
  return activities_response.json();
}

export async function makeServer() {
  let jsonData = await loadJSON();
  let activities_jsonData = await loadActivitiesJSON();

  let server = createServer({
    routes() {
      this.namespace = 'api';

      this.get('/hotels', () => {
        return jsonData;
      });

      this.get('/activities', () => {
        return activities_jsonData;
      });

      this.passthrough('https://nominatim.openstreetmap.org/**');
    }
  });

  return server;
}
