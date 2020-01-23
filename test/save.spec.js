//  import MockFirebase from '../_mocks_/firebase-mock.js';
//  global.firebase = MockFirebase();
import MockFirebase from 'mock-cloud-firestore';

import { savePost, deletePost } from '../src/firebase/post.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc3d: {
          uidUser: '0003',
          nameUser: 'Patricia',
          photoUser: '',
          contentPost: 'vegana',
          likes: 1,
          privacity: 'publico',
          publicationDate: '15/01/2020',
        },
        abc4d: {
          uidUser: '0004',
          nameUser: 'Gaby',
          photoUser: '',
          contentPost: 'Comidas',
          likes: 1,
          privacity: 'privado',
          publicationDate: '16/01/2020',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

const publicacion = {
  contentPost: 'comida vegana',
};
const tipo = {
  type: 'publico',
};

const user = {
  id: 'abcd123',
  name: 'Patricia',
  photo: '',
};
describe('publicaciones', () => {
  it('Debería poder guardar un post', (done) => {
    savePost(user, publicacion, tipo).then((data) => {
      // eslint-disable-next-line no-underscore-dangle
      expect(data._data.contentPost.contentPost).toBe('comida vegana');
      done();
    });
  });
});
describe('elimina publicaciones', () => {
  it('Debería poder eliminar un post', (done) => {
    deletePost('abc3d').then((data) => {
      console.log(data);
      expect(data.id).toBe('abc3d');
      done();
    });
  });
});
