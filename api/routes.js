import controller from './controller.js';

export default function routes(app) {
  app.route('/repo/language')
    .get(controller.getLanguages);
}
