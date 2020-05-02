import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn:
      "https://acaae47e40f64282a689d731afd8f357@o378864.ingest.sentry.io/5209741"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
