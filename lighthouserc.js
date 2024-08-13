const BASE_URL = 'https://cesar.school/';
const RUNS = 3;
const MAX_WAIT_TIME = 45 * 1000;
const MIN_ACCESSIBILITY_SCORE = 0.7;

const throttlingConfig = {
  rttMs: 40,
  throughputKbps: 10 * 1024,
  cpuSlowdownMultiplier: 1,
  requestLatencyMs: 0,
  downloadThroughputKbps: 0,
  uploadThroughputKbps: 0
};

const collectConfig = {
  url: [BASE_URL],
  numberOfRuns: RUNS,
  settings: {
    onlyCategories: ['accessibility'],
    maxWaitForLoad: MAX_WAIT_TIME,
    emulatedFormFactor: 'desktop',
    throttlingMethod: 'simulate',
    throttling: throttlingConfig
  }
};

const uploadConfig = {
  target: 'temporary-public-storage',
};

const assertConfig = {
  assertions: {
    'categories:pwa': 'off',
    'categories:seo': 'off',
    'categories.best-practices': 'off',
    'categories.accessibility': ['error', { minScore: MIN_ACCESSIBILITY_SCORE }]
  }
};

module.exports = {
  ci: {
    collect: collectConfig,
    upload: uploadConfig,
    assert: assertConfig
  },
};
