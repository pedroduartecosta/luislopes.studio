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
    "url": "webpack-runtime-c8f676bcbf1b9e5c0949.js"
  },
  {
    "url": "app-2b840d1e8b3e5dd7b8b0.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-64d7e64ac5da9d4d4a8d.js"
  },
  {
    "url": "index.html",
    "revision": "e9f08aac9e99028a51c5583bec69baff"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4daa4b3ae89f9b525c5dd0b16d567892"
  },
  {
    "url": "0.b34ad5b3b4067de45c93.css"
  },
  {
    "url": "0-8ffebbcd10d6f342470a.js"
  },
  {
    "url": "component---src-pages-index-jsx-8e5d01b7dee66e947d3a.js"
  },
  {
    "url": "1-9accc4e0f650ac3e8e41.js"
  },
  {
    "url": "static/d/605/path---index-6a9-gZxNdqXlirWVIypU0FdRwtsAZs.json",
    "revision": "852d2d06ffcdcdf612f7197bd70d6e20"
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