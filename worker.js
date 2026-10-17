/**
 * WiseBlock hosting entrypoint.
 *
 * The app is a purely static, hash-routed Vite build: no backend, no database,
 * no environment configuration. So this Worker has exactly one job - hand every
 * request to the static asset binding.
 *
 * Hash routing means the browser never asks the server for deep links
 * (#/lesson/m3/l4 stays client-side), but `spa: true` in the deploy manifest
 * still serves index.html for unknown paths so a stray URL lands on the app
 * rather than a 404.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
