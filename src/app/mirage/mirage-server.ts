import { createServer } from 'miragejs';

export function makeServer() {
  return createServer({
    routes() {
      this.namespace = 'api'; // Préfixe pour toutes les routes exposées

      // Exemple d'endpoint GET retournant des données d'un fichier JSON
      this.get('/data', () => {
        return {
          items: [
            { id: 1, name: 'Item 1', description: 'Description 1' },
            { id: 2, name: 'Item 2', description: 'Description 2' },
            { id: 3, name: 'Item 3', description: 'Description 3' },
          ],
        };
      });
    },
  });
}
