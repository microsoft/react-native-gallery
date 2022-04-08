#!/usr/bin/env node
param([string]$testVersion='') 
// @ts-check

/**
 * @typedef {{
 *   version?: string;
 *   dependencies?: Record<string, string>;
 *   peerDependencies?: Record<string, string>;
 *   devDependencies?: Record<string, string>;
 * }} Manifest
 */

/**
 * Fetches information about specified package.
 * @param {string} pkg
 * @return {Promise<Manifest>}
 */
function fetchPackageInfo(pkg) {
  return new Promise((resolve) => {
    const {spawn} = require('child_process');
    const os = require('os');

    /** @type {string[]} */
    const result = [];

    const npm = os.platform() === 'win32' ? 'npm.cmd' : 'npm';
    const fetch = spawn(npm, ['view', '--json', pkg]);
    fetch.stdout.on('data', (data) => result.push(data));
    fetch.on('close', (code) => {
      if (code !== 0 || result.length === 0) {
        resolve({});
      } else {
        const list = JSON.parse(result.join(''));
        const latest = Array.isArray(list) ? list[list.length - 1] : list;
        resolve({
          version: latest.version,
          dependencies: latest.dependencies,
          peerDependencies: latest.peerDependencies,
          devDependencies: latest.devDependencies,
        });
      }
    });
  });
}

/**
 * Fetches the latest react-native-windows@canary and modifies `package.json` to
 * consume it.
 */
(async () => {
  //const canaryVersion = 'react-native-windows@canary';
  const {version, peerDependencies} = await fetchPackageInfo(testVersion);
  if (!version || !peerDependencies) {
    throw new Error(`Failed to fetch info about ${testVersion}`);
  }

  const fs = require('fs/promises');

  const data = await fs.readFile('package.json', {encoding: 'utf-8'});
  const manifest = JSON.parse(data);

  const canaryDependencies = {
    react: peerDependencies.react,
    'react-native': peerDependencies['react-native'],
    'react-native-windows': version,
  };

  manifest.dependencies = {
    ...manifest.dependencies,
    ...canaryDependencies,
  };

  fs.writeFile('package.json', JSON.stringify(manifest, undefined, 2) + '\n');

  console.log(canaryDependencies);
})();
