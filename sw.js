/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "ethnocentric_bd-webfont.woff",
    "revision": "25bab0aa0fece68e7ea75869864c012c"
  },
  {
    "url": "icon.png",
    "revision": "ed4cc3a3dfdfc10d50c9823303676825"
  },
  {
    "url": "index.html",
    "revision": "80b71d1b97abf4dcf89f5ee1d6b87b68"
  },
  {
    "url": "main.css",
    "revision": "edbbcd31e203ae17cb572a0be38183eb"
  },
  {
    "url": "portal.html",
    "revision": "ad12da56caed94134ccf1729b34e5e79"
  },
  {
    "url": "punchcard.js",
    "revision": "94d7db3d4c765103e44d48ea84a24d81"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
