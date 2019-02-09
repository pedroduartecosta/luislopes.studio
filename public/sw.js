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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-b3375f39a8ba0e64e140.js"
  },
  {
    "url": "app-2d0490a1949a8b08780e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-64d7e64ac5da9d4d4a8d.js"
  },
  {
    "url": "index.html",
    "revision": "b80b62fb1a13b92a4878ca0134fcfb35"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3b68dad1e3655d35e4ba2ce0bc3df0cb"
  },
  {
    "url": "1.b34ad5b3b4067de45c93.css"
  },
  {
    "url": "1-c349fcb66ed3ea8942d6.js"
  },
  {
    "url": "component---src-pages-index-jsx-5e01b0a51f1c63e6d1f0.js"
  },
  {
    "url": "0-4493f3bb9450e63ada6b.js"
  },
  {
    "url": "static/d/351/path---index-6a9-RIkqaGZelEnY0MGeRokNcE61VU.json",
    "revision": "41c6eea0090d0b89bcf8430914c565c8"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "9b2e4c4fcda5e9c6c24818bb268810f3"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "0bca3b330bd5b14eac6f8afca0076380"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});