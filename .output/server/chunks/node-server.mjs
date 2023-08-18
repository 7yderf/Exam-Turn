globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, setHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import defu, { defuFn, defu as defu$1 } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash, withBase, withTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=31536000, immutable"}}}},"public":{"API_BASE_URL":"https://apioptimum.demosturn.com/ecom/","siteUrl":"https://urlpage.com","gtmContainerId":"UA-143370271-1","fcbContainerId":"170721278287986","adsContainerId":"G-7QBK9P4LSZ","IS_PROD":""},"nuxt-simple-sitemap":{"enabled":true,"autoLastmod":true,"siteUrl":"https://urlpage.com","trailingSlash":false,"inferStaticPagesAsRoutes":true,"discoverImages":true,"include":["/**"],"exclude":[],"urls":[{"loc":"/","lastmod":"2023-08-18T00:28:31.474Z"}],"sitemaps":false,"xsl":"/__sitemap__/style.xsl","defaults":{},"isNuxtContentDocumentDriven":false,"hasApiRoutesUrl":false,"pagesDirs":["C:/Users/fredy/OneDrive/Documentos/practicas/Exam-Turn/src/pages"],"hasPrerenderedRoutesPayload":true,"extensions":[".js",".jsx",".mjs",".ts",".tsx",".vue"]}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/arrow_black.png": {
    "type": "image/png",
    "etag": "\"179-WYwzG0Wme2anXXdw+qF7r2ycd2A\"",
    "mtime": "2023-04-11T21:07:09.895Z",
    "size": 377,
    "path": "../public/arrow_black.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-04-11T21:07:09.898Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/favicon.png": {
    "type": "image/png",
    "etag": "\"2ed-DG/RK+n0YFwVzWytBTy6+jUZAXE\"",
    "mtime": "2023-04-12T20:38:25.525Z",
    "size": 749,
    "path": "../public/favicon.png"
  },
  "/icon-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"165-qNVdQQCuWRqDCRMYT3SLlZgKN7Q\"",
    "mtime": "2023-04-12T20:38:25.528Z",
    "size": 357,
    "path": "../public/icon-arrow.svg"
  },
  "/home/baner-opt.png": {
    "type": "image/png",
    "etag": "\"74f62-rPShmYemijDefOI6CfTD30BQrgQ\"",
    "mtime": "2023-08-16T17:36:23.111Z",
    "size": 479074,
    "path": "../public/home/baner-opt.png"
  },
  "/home/bannerOptMobile.png": {
    "type": "image/png",
    "etag": "\"1821e3-wqaDE+v4apKxskma63Xbxq/0NtM\"",
    "mtime": "2023-08-16T17:36:23.111Z",
    "size": 1581539,
    "path": "../public/home/bannerOptMobile.png"
  },
  "/home/HowToBuy-1.png": {
    "type": "image/png",
    "etag": "\"8fb1-oveRmBBuCHu75I+8OnPpQvnlAFI\"",
    "mtime": "2023-08-17T16:51:00.436Z",
    "size": 36785,
    "path": "../public/home/HowToBuy-1.png"
  },
  "/home/HowToBuy-2.png": {
    "type": "image/png",
    "etag": "\"8e98-avbBw+60Gmey/HPQytBXnLUaVVI\"",
    "mtime": "2023-08-17T16:51:00.443Z",
    "size": 36504,
    "path": "../public/home/HowToBuy-2.png"
  },
  "/home/HowToBuy-3.png": {
    "type": "image/png",
    "etag": "\"6163-WpuM0BeLKhY0nUP+vP7PuUVZA/I\"",
    "mtime": "2023-08-17T16:51:00.445Z",
    "size": 24931,
    "path": "../public/home/HowToBuy-3.png"
  },
  "/profiles/profile.png": {
    "type": "image/png",
    "etag": "\"179a1-W7YQWCJFUDiYlS4fwVI+C2XVZDk\"",
    "mtime": "2023-04-11T21:07:09.933Z",
    "size": 96673,
    "path": "../public/profiles/profile.png"
  },
  "/icon/arrow-down.svg": {
    "type": "image/svg+xml",
    "etag": "\"139-FGMClrKmBSmAyo6AaFW+hYdb0EA\"",
    "mtime": "2023-04-11T21:07:09.908Z",
    "size": 313,
    "path": "../public/icon/arrow-down.svg"
  },
  "/icon/building.svg": {
    "type": "image/svg+xml",
    "etag": "\"5ef-FMnDEdTYFGwcgzb2dbEhtkyl5Es\"",
    "mtime": "2023-04-11T21:07:09.909Z",
    "size": 1519,
    "path": "../public/icon/building.svg"
  },
  "/icon/call.svg": {
    "type": "image/svg+xml",
    "etag": "\"717-w00lEz/Bh3eOZ5yhSMBBnxYdvSg\"",
    "mtime": "2023-04-11T21:07:09.910Z",
    "size": 1815,
    "path": "../public/icon/call.svg"
  },
  "/icon/close-circle.svg": {
    "type": "image/svg+xml",
    "etag": "\"219-sYg0XJU6yLqgfpOyaYCBRtwzwRg\"",
    "mtime": "2023-04-11T21:07:09.910Z",
    "size": 537,
    "path": "../public/icon/close-circle.svg"
  },
  "/icon/profile-circle.svg": {
    "type": "image/svg+xml",
    "etag": "\"751-FcVeePg5JR/Ay5TBfRuuTLTcm2I\"",
    "mtime": "2023-04-11T21:07:09.910Z",
    "size": 1873,
    "path": "../public/icon/profile-circle.svg"
  },
  "/icon/sms.svg": {
    "type": "image/svg+xml",
    "etag": "\"205-JDpyG1Ys5i+X7XBf06P0QJ3M4PU\"",
    "mtime": "2023-04-11T21:07:09.911Z",
    "size": 517,
    "path": "../public/icon/sms.svg"
  },
  "/icon/tecn_1.svg": {
    "type": "image/svg+xml",
    "etag": "\"a90-LyX1eRNIUdaR34r10ZxVtxhuDIM\"",
    "mtime": "2023-04-11T21:07:09.912Z",
    "size": 2704,
    "path": "../public/icon/tecn_1.svg"
  },
  "/icon/tecn_2.svg": {
    "type": "image/svg+xml",
    "etag": "\"993-DSqWonvgDT3W4sbIaKA861KNlaE\"",
    "mtime": "2023-04-11T21:07:09.912Z",
    "size": 2451,
    "path": "../public/icon/tecn_2.svg"
  },
  "/icon/tecn_3.svg": {
    "type": "image/svg+xml",
    "etag": "\"e1f-r8Pv86szk0fKcTKxHqeRoom/TZY\"",
    "mtime": "2023-04-11T21:07:09.912Z",
    "size": 3615,
    "path": "../public/icon/tecn_3.svg"
  },
  "/icon/tecn_4.svg": {
    "type": "image/svg+xml",
    "etag": "\"7e7-vBTi2k2FIc7DkOJROpWtjb2GFTw\"",
    "mtime": "2023-04-11T21:07:09.913Z",
    "size": 2023,
    "path": "../public/icon/tecn_4.svg"
  },
  "/icon/tick-circle.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a2-2RGYRWIzgHPqLGwlT7jN8Pyqgts\"",
    "mtime": "2023-04-11T21:07:09.914Z",
    "size": 418,
    "path": "../public/icon/tick-circle.svg"
  },
  "/icon/whatsapp.svg": {
    "type": "image/svg+xml",
    "etag": "\"b12-pQngt0rtmaFP9vPT2+IlJ4bRgKE\"",
    "mtime": "2023-04-11T21:07:09.914Z",
    "size": 2834,
    "path": "../public/icon/whatsapp.svg"
  },
  "/_nuxt/config.7ad1db97.js": {
    "type": "application/javascript",
    "etag": "\"a7-88hXmMr1NSDR+ECPZAIA3/Em4Zs\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 167,
    "path": "../public/_nuxt/config.7ad1db97.js"
  },
  "/_nuxt/Default.264a8f7e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2be8-dlKWC980ivFwQyyQfqr4Fj0k/8U\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 11240,
    "path": "../public/_nuxt/Default.264a8f7e.css"
  },
  "/_nuxt/Default.b9d0c7f9.js": {
    "type": "application/javascript",
    "etag": "\"3837-NeKG0jWZkSx8lBkNoKWwcjGcET4\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 14391,
    "path": "../public/_nuxt/Default.b9d0c7f9.js"
  },
  "/_nuxt/entry.d633ed6c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"39270-LgoLEiiRN3v5gaOlGCi/AYHEtEg\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 234096,
    "path": "../public/_nuxt/entry.d633ed6c.css"
  },
  "/_nuxt/entry.f399eef9.js": {
    "type": "application/javascript",
    "etag": "\"75cfb-iUsAvMPpGgTEuu4AAlkGIlSXb4U\"",
    "mtime": "2023-08-18T05:16:50.599Z",
    "size": 482555,
    "path": "../public/_nuxt/entry.f399eef9.js"
  },
  "/_nuxt/error-404.0cd4f3dd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-xSUIdUjWxTJYnmfP1riaGwPeEHA\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.0cd4f3dd.css"
  },
  "/_nuxt/error-404.59f8f87f.js": {
    "type": "application/javascript",
    "etag": "\"907-qCmZ58Xdgkfpt2Aym+SwSIwVpdI\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 2311,
    "path": "../public/_nuxt/error-404.59f8f87f.js"
  },
  "/_nuxt/error-500.748cb764.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-LfCvP8U7J9Fa9L8g6sKzV6Rcp+A\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.748cb764.css"
  },
  "/_nuxt/error-500.a42badc0.js": {
    "type": "application/javascript",
    "etag": "\"78b-Zmiw9wl+iDEXkY6Srv/pjR99PVQ\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 1931,
    "path": "../public/_nuxt/error-500.a42badc0.js"
  },
  "/_nuxt/error-component.f7e8850b.js": {
    "type": "application/javascript",
    "etag": "\"4cc-3VyRq48QQzEyQNfOOrwdV/bDJCc\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 1228,
    "path": "../public/_nuxt/error-component.f7e8850b.js"
  },
  "/_nuxt/Icon.0014aea0.js": {
    "type": "application/javascript",
    "etag": "\"52cd-TjB2bj88s5zUwl2MRVInl7s3tTQ\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 21197,
    "path": "../public/_nuxt/Icon.0014aea0.js"
  },
  "/_nuxt/Icon.3d534480.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43-xd4VR5rzTGiAbFM5VcKNdgvx+L8\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 67,
    "path": "../public/_nuxt/Icon.3d534480.css"
  },
  "/_nuxt/IconCSS.24c50a2a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"102-TjeccAsRNeBlN9jNxjRwfXa9XZU\"",
    "mtime": "2023-08-18T05:16:50.593Z",
    "size": 258,
    "path": "../public/_nuxt/IconCSS.24c50a2a.css"
  },
  "/_nuxt/IconCSS.f3274b1c.js": {
    "type": "application/javascript",
    "etag": "\"3b0-DU8ifJRsD2qRjo25GSD3+uZmLr4\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 944,
    "path": "../public/_nuxt/IconCSS.f3274b1c.js"
  },
  "/_nuxt/index.87ed1326.js": {
    "type": "application/javascript",
    "etag": "\"1dcdc-tXcniSCtsC7+37qWDHMHjRKBgyc\"",
    "mtime": "2023-08-18T05:16:50.599Z",
    "size": 122076,
    "path": "../public/_nuxt/index.87ed1326.js"
  },
  "/_nuxt/index.d526118b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6cb6-VEuv0hiih72zPPune7ge0BvaBeY\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 27830,
    "path": "../public/_nuxt/index.d526118b.css"
  },
  "/_nuxt/lg.22b72ba5.ttf": {
    "type": "font/ttf",
    "etag": "\"1294-k9Arrbf4+R6TKcVeK4ZvTLs69Ts\"",
    "mtime": "2023-08-18T05:16:50.591Z",
    "size": 4756,
    "path": "../public/_nuxt/lg.22b72ba5.ttf"
  },
  "/_nuxt/lg.f2fe1c00.svg": {
    "type": "image/svg+xml",
    "etag": "\"3222-M07XKZF2hoKNpmntHBs0+i+N19c\"",
    "mtime": "2023-08-18T05:16:50.592Z",
    "size": 12834,
    "path": "../public/_nuxt/lg.f2fe1c00.svg"
  },
  "/_nuxt/lg.fefc5c0d.woff": {
    "type": "font/woff",
    "etag": "\"12e0-GbhAkUW9e1mRYFBZjh1vXu9HyWk\"",
    "mtime": "2023-08-18T05:16:50.592Z",
    "size": 4832,
    "path": "../public/_nuxt/lg.fefc5c0d.woff"
  },
  "/_nuxt/loading.298ad3ff.gif": {
    "type": "image/gif",
    "etag": "\"1052-Fadq8nOUgtjec1SrxtjcT8qNFF4\"",
    "mtime": "2023-08-18T05:16:50.590Z",
    "size": 4178,
    "path": "../public/_nuxt/loading.298ad3ff.gif"
  },
  "/_nuxt/nuxt-link.47528ba9.js": {
    "type": "application/javascript",
    "etag": "\"10e5-k27BLrY/PXkak3aBePC+n6EuBX0\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 4325,
    "path": "../public/_nuxt/nuxt-link.47528ba9.js"
  },
  "/_nuxt/Satoshi-Black.78edaca6.ttf": {
    "type": "font/ttf",
    "etag": "\"11dd8-/QUOV04+gdNGhlH5vGGEMZslv8Y\"",
    "mtime": "2023-08-18T05:16:50.591Z",
    "size": 73176,
    "path": "../public/_nuxt/Satoshi-Black.78edaca6.ttf"
  },
  "/_nuxt/Satoshi-Black.a849a7b7.woff": {
    "type": "font/woff",
    "etag": "\"76a8-TLow2vkHQGQggQI5ItjyB669EIY\"",
    "mtime": "2023-08-18T05:16:50.578Z",
    "size": 30376,
    "path": "../public/_nuxt/Satoshi-Black.a849a7b7.woff"
  },
  "/_nuxt/Satoshi-Black.bd11b582.woff2": {
    "type": "font/woff2",
    "etag": "\"5bbc-BpxteIPlhaarNU/FDxNm1JVAOy0\"",
    "mtime": "2023-08-18T05:16:50.583Z",
    "size": 23484,
    "path": "../public/_nuxt/Satoshi-Black.bd11b582.woff2"
  },
  "/_nuxt/Satoshi-BlackItalic.83d61d67.woff2": {
    "type": "font/woff2",
    "etag": "\"5ed4-uPwSsEUGQ6NfoSAs/CxlrBw6a4M\"",
    "mtime": "2023-08-18T05:16:50.584Z",
    "size": 24276,
    "path": "../public/_nuxt/Satoshi-BlackItalic.83d61d67.woff2"
  },
  "/_nuxt/Satoshi-BlackItalic.cf5edac8.woff": {
    "type": "font/woff",
    "etag": "\"7a84-KOIgdy2SfN9wQfZaSbgXzPOXZQg\"",
    "mtime": "2023-08-18T05:16:50.590Z",
    "size": 31364,
    "path": "../public/_nuxt/Satoshi-BlackItalic.cf5edac8.woff"
  },
  "/_nuxt/Satoshi-BlackItalic.d3d6c8d6.ttf": {
    "type": "font/ttf",
    "etag": "\"127f0-ChxrUaS//iqc05Vgjm1u5Xpwc2M\"",
    "mtime": "2023-08-18T05:16:50.591Z",
    "size": 75760,
    "path": "../public/_nuxt/Satoshi-BlackItalic.d3d6c8d6.ttf"
  },
  "/_nuxt/Satoshi-Bold.1789917c.woff": {
    "type": "font/woff",
    "etag": "\"80cc-hEUsQq+QZ3SAPOLaDIOt8QyDEoE\"",
    "mtime": "2023-08-18T05:16:50.586Z",
    "size": 32972,
    "path": "../public/_nuxt/Satoshi-Bold.1789917c.woff"
  },
  "/_nuxt/Satoshi-Bold.2c122eab.ttf": {
    "type": "font/ttf",
    "etag": "\"11e98-uCWkqJtyV1N6ICMWsImXotLwCkk\"",
    "mtime": "2023-08-18T05:16:50.591Z",
    "size": 73368,
    "path": "../public/_nuxt/Satoshi-Bold.2c122eab.ttf"
  },
  "/_nuxt/Satoshi-Bold.353a7fbf.woff2": {
    "type": "font/woff2",
    "etag": "\"62f0-emfkLcebBWtGooanRhAo/Mvefoo\"",
    "mtime": "2023-08-18T05:16:50.584Z",
    "size": 25328,
    "path": "../public/_nuxt/Satoshi-Bold.353a7fbf.woff2"
  },
  "/_nuxt/Satoshi-BoldItalic.52bfd9e8.woff2": {
    "type": "font/woff2",
    "etag": "\"66bc-/mbmGLZ3iJT7MOK6a1Pgk/mq8bo\"",
    "mtime": "2023-08-18T05:16:50.584Z",
    "size": 26300,
    "path": "../public/_nuxt/Satoshi-BoldItalic.52bfd9e8.woff2"
  },
  "/_nuxt/Satoshi-BoldItalic.5d73878e.woff": {
    "type": "font/woff",
    "etag": "\"8620-ljDtDmgTK8Bpbt4SqdMZVa3Fhtk\"",
    "mtime": "2023-08-18T05:16:50.590Z",
    "size": 34336,
    "path": "../public/_nuxt/Satoshi-BoldItalic.5d73878e.woff"
  },
  "/_nuxt/Satoshi-BoldItalic.8ff85a17.ttf": {
    "type": "font/ttf",
    "etag": "\"12aa4-dX4lKJ2JEogu06XBEb7jj6zHVBI\"",
    "mtime": "2023-08-18T05:16:50.591Z",
    "size": 76452,
    "path": "../public/_nuxt/Satoshi-BoldItalic.8ff85a17.ttf"
  },
  "/_nuxt/Satoshi-Italic.14c3d259.ttf": {
    "type": "font/ttf",
    "etag": "\"12b3c-ak0Y5XpMVc6ABehrPsRDDsC5fiE\"",
    "mtime": "2023-08-18T05:16:50.591Z",
    "size": 76604,
    "path": "../public/_nuxt/Satoshi-Italic.14c3d259.ttf"
  },
  "/_nuxt/Satoshi-Italic.a6df1710.woff": {
    "type": "font/woff",
    "etag": "\"8620-iBJBoYLUu1nexIcPB3KjEDHh+Q4\"",
    "mtime": "2023-08-18T05:16:50.584Z",
    "size": 34336,
    "path": "../public/_nuxt/Satoshi-Italic.a6df1710.woff"
  },
  "/_nuxt/Satoshi-Italic.dbcb8c32.woff2": {
    "type": "font/woff2",
    "etag": "\"6758-sUUjT6H/meD32drfbRXppYnRXqE\"",
    "mtime": "2023-08-18T05:16:50.583Z",
    "size": 26456,
    "path": "../public/_nuxt/Satoshi-Italic.dbcb8c32.woff2"
  },
  "/_nuxt/Satoshi-Light.8a24f395.woff2": {
    "type": "font/woff2",
    "etag": "\"5910-thSiarRJlhdAbmmhZKf3Cht7M74\"",
    "mtime": "2023-08-18T05:16:50.583Z",
    "size": 22800,
    "path": "../public/_nuxt/Satoshi-Light.8a24f395.woff2"
  },
  "/_nuxt/Satoshi-Light.b54cf060.ttf": {
    "type": "font/ttf",
    "etag": "\"11804-6iNGjVWtmnaVjPhKUrcbZb6jXbA\"",
    "mtime": "2023-08-18T05:16:50.591Z",
    "size": 71684,
    "path": "../public/_nuxt/Satoshi-Light.b54cf060.ttf"
  },
  "/_nuxt/Satoshi-Light.dd42e743.woff": {
    "type": "font/woff",
    "etag": "\"725c-KD28JKvy8FTDeIrVnk+1MJ0tDXY\"",
    "mtime": "2023-08-18T05:16:50.585Z",
    "size": 29276,
    "path": "../public/_nuxt/Satoshi-Light.dd42e743.woff"
  },
  "/_nuxt/Satoshi-LightItalic.2f9c5264.woff": {
    "type": "font/woff",
    "etag": "\"7680-Cv6xiIaWksLBcvsQWJxidY/Jc20\"",
    "mtime": "2023-08-18T05:16:50.584Z",
    "size": 30336,
    "path": "../public/_nuxt/Satoshi-LightItalic.2f9c5264.woff"
  },
  "/_nuxt/Satoshi-LightItalic.9690a557.woff2": {
    "type": "font/woff2",
    "etag": "\"5b70-FEEy4vZu59Ye1PQ7KFS+nHungGo\"",
    "mtime": "2023-08-18T05:16:50.583Z",
    "size": 23408,
    "path": "../public/_nuxt/Satoshi-LightItalic.9690a557.woff2"
  },
  "/_nuxt/Satoshi-LightItalic.c9a8d027.ttf": {
    "type": "font/ttf",
    "etag": "\"12688-7l0NU16SH1SPUOrx7Hk0Vn5w0Q0\"",
    "mtime": "2023-08-18T05:16:50.591Z",
    "size": 75400,
    "path": "../public/_nuxt/Satoshi-LightItalic.c9a8d027.ttf"
  },
  "/_nuxt/Satoshi-Medium.7130cef6.ttf": {
    "type": "font/ttf",
    "etag": "\"1201c-5FOfRojIZSBKh53DJT01R/BESBg\"",
    "mtime": "2023-08-18T05:16:50.591Z",
    "size": 73756,
    "path": "../public/_nuxt/Satoshi-Medium.7130cef6.ttf"
  },
  "/_nuxt/Satoshi-Medium.7aeaf037.woff": {
    "type": "font/woff",
    "etag": "\"81f8-fzPHxF9fH0xuWrLGZpo+cEHb5oU\"",
    "mtime": "2023-08-18T05:16:50.585Z",
    "size": 33272,
    "path": "../public/_nuxt/Satoshi-Medium.7aeaf037.woff"
  },
  "/_nuxt/Satoshi-Medium.af02a722.woff2": {
    "type": "font/woff2",
    "etag": "\"63fc-f23jQcvGBYuDdr2LJlaNNbHTj88\"",
    "mtime": "2023-08-18T05:16:50.583Z",
    "size": 25596,
    "path": "../public/_nuxt/Satoshi-Medium.af02a722.woff2"
  },
  "/_nuxt/Satoshi-MediumItalic.71f8dce5.ttf": {
    "type": "font/ttf",
    "etag": "\"12b98-3wUITKdAG2qS1J4/xXIPvf+/v7w\"",
    "mtime": "2023-08-18T05:16:50.591Z",
    "size": 76696,
    "path": "../public/_nuxt/Satoshi-MediumItalic.71f8dce5.ttf"
  },
  "/_nuxt/Satoshi-MediumItalic.beb15382.woff2": {
    "type": "font/woff2",
    "etag": "\"6848-yy8XGdPzEnCrAywDqXvewMBOJJA\"",
    "mtime": "2023-08-18T05:16:50.583Z",
    "size": 26696,
    "path": "../public/_nuxt/Satoshi-MediumItalic.beb15382.woff2"
  },
  "/_nuxt/Satoshi-MediumItalic.cf98a3ed.woff": {
    "type": "font/woff",
    "etag": "\"8710-IRL+qCsT1WlKdogklcuneyZFxy4\"",
    "mtime": "2023-08-18T05:16:50.590Z",
    "size": 34576,
    "path": "../public/_nuxt/Satoshi-MediumItalic.cf98a3ed.woff"
  },
  "/_nuxt/Satoshi-Regular.243b23f6.ttf": {
    "type": "font/ttf",
    "etag": "\"11f04-vGBaoIRoz7mkAnWmOGraVskqW+0\"",
    "mtime": "2023-08-18T05:16:50.591Z",
    "size": 73476,
    "path": "../public/_nuxt/Satoshi-Regular.243b23f6.ttf"
  },
  "/_nuxt/Satoshi-Regular.50dca57f.woff2": {
    "type": "font/woff2",
    "etag": "\"63ac-IWM8fM26KEbq5xVU/Cp896DZD/I\"",
    "mtime": "2023-08-18T05:16:50.583Z",
    "size": 25516,
    "path": "../public/_nuxt/Satoshi-Regular.50dca57f.woff2"
  },
  "/_nuxt/Satoshi-Regular.9fbc41c9.woff": {
    "type": "font/woff",
    "etag": "\"8100-0yFpglK3jVYQPMAavtrS0bTWcJs\"",
    "mtime": "2023-08-18T05:16:50.584Z",
    "size": 33024,
    "path": "../public/_nuxt/Satoshi-Regular.9fbc41c9.woff"
  },
  "/_nuxt/Satoshi-Variable.02ad1319.ttf": {
    "type": "font/ttf",
    "etag": "\"1f1bc-1Jhyp0WELzibydJLc9CjCQ/OULE\"",
    "mtime": "2023-08-18T05:16:50.590Z",
    "size": 127420,
    "path": "../public/_nuxt/Satoshi-Variable.02ad1319.ttf"
  },
  "/_nuxt/Satoshi-Variable.9cdbec9e.woff": {
    "type": "font/woff",
    "etag": "\"8958-1zEGjiso1PHf5bTb6MzpwIL6hXI\"",
    "mtime": "2023-08-18T05:16:50.584Z",
    "size": 35160,
    "path": "../public/_nuxt/Satoshi-Variable.9cdbec9e.woff"
  },
  "/_nuxt/Satoshi-Variable.e739aff9.woff2": {
    "type": "font/woff2",
    "etag": "\"a65c-LTTTmLOYp/2I0h+udkLNypCL8+4\"",
    "mtime": "2023-08-18T05:16:50.583Z",
    "size": 42588,
    "path": "../public/_nuxt/Satoshi-Variable.e739aff9.woff2"
  },
  "/_nuxt/Satoshi-VariableItalic.787e19b1.woff": {
    "type": "font/woff",
    "etag": "\"8e78-5EJyuSHAoU53xkDMTPIJxLgMsgU\"",
    "mtime": "2023-08-18T05:16:50.584Z",
    "size": 36472,
    "path": "../public/_nuxt/Satoshi-VariableItalic.787e19b1.woff"
  },
  "/_nuxt/Satoshi-VariableItalic.cfe8f600.ttf": {
    "type": "font/ttf",
    "etag": "\"1fad4-YsNERCIf8X6TqOHK3+pajGjqcFs\"",
    "mtime": "2023-08-18T05:16:50.590Z",
    "size": 129748,
    "path": "../public/_nuxt/Satoshi-VariableItalic.cfe8f600.ttf"
  },
  "/_nuxt/Satoshi-VariableItalic.e7b4e0ec.woff2": {
    "type": "font/woff2",
    "etag": "\"ab44-2vpCnB0KSwU7j7uMcEeLjby57pw\"",
    "mtime": "2023-08-18T05:16:50.583Z",
    "size": 43844,
    "path": "../public/_nuxt/Satoshi-VariableItalic.e7b4e0ec.woff2"
  },
  "/_nuxt/useMediaQuery.b6c19ebd.js": {
    "type": "application/javascript",
    "etag": "\"1b3-fe2K9+jYTGSHcVgpOtOubhmnLzA\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 435,
    "path": "../public/_nuxt/useMediaQuery.b6c19ebd.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2023-08-18T05:16:50.598Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/__sitemap__/routes.json": {
    "type": "application/json",
    "etag": "\"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w\"",
    "mtime": "2023-08-18T05:16:57.536Z",
    "size": 2,
    "path": "../public/__sitemap__/routes.json"
  },
  "/__sitemap__/style.xsl": {
    "type": "application/xml",
    "etag": "\"15e2-hVA03KOgHaGXZygI2F/OoiE3cBM\"",
    "mtime": "2023-08-18T05:16:57.534Z",
    "size": 5602,
    "path": "../public/__sitemap__/style.xsl"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, ...options }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = defu$1(item, res[k] || {});
  });
  return Object.values(res);
}

function normaliseDate(date) {
  const d = typeof date === "string" ? new Date(date) : date;
  if (!(d instanceof Date))
    return false;
  const z = (n) => `0${n}`.slice(-2);
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}T${z(d.getHours())}:${z(d.getMinutes())}:${z(d.getSeconds())}+00:00`;
}

async function generateSitemapEntries(options) {
  const {
    urls: configUrls,
    defaults,
    exclude,
    isNuxtContentDocumentDriven,
    include,
    trailingSlash,
    inferStaticPagesAsRoutes,
    hasApiRoutesUrl,
    autoLastmod,
    siteUrl,
    hasPrerenderedRoutesPayload,
    autoAlternativeLangPrefixes
  } = options.sitemapConfig;
  const baseURL = options.baseURL;
  const includeWithBase = include?.map((i) => withBase(i, baseURL));
  const excludeWithBase = exclude?.map((i) => withBase(i, baseURL));
  const urlFilter = createFilter({ include: includeWithBase, exclude: excludeWithBase });
  ({ ...defaults });
  const fixLoc = (url) => {
    url = encodeURI(trailingSlash ? withTrailingSlash(url) : withoutTrailingSlash(url));
    return url.startsWith(baseURL) ? url : withBase(url, baseURL);
  };
  function preNormalise(entries) {
    return mergeOnKey(
      entries.map((e) => typeof e === "string" ? { loc: e } : e).map((e) => ({ ...defaults, ...e })).map((e) => ({ ...e, loc: fixLoc(e.loc || e.url) })),
      "loc"
    ).filter((e) => urlFilter(e.loc)).sort((a, b) => a.loc.length - b.loc.length).map((e) => {
      delete e.url;
      if (e.lastmod)
        e.lastmod = normaliseDate(e.lastmod);
      if (!e.lastmod)
        delete e.lastmod;
      if (Array.isArray(autoAlternativeLangPrefixes)) {
        if (autoAlternativeLangPrefixes.some((prefix) => {
          return e.loc.startsWith(withBase(`/${prefix}`, options.baseURL));
        }))
          return false;
        const loc = e.loc?.replace(options.baseURL, "") || "";
        e.alternatives = autoAlternativeLangPrefixes.map((prefix) => ({
          hreflang: prefix,
          href: fixLoc(joinURL(prefix, loc))
        }));
      }
      return e;
    }).filter(Boolean);
  }
  function postNormalise(e) {
    const siteUrlWithoutBase = siteUrl.replace(new RegExp(`${baseURL}$`), "");
    e.loc = withBase(e.loc, siteUrlWithoutBase);
    return e;
  }
  let pageUrls = [];
  let lazyApiUrls = [];
  if (hasApiRoutesUrl) {
    try {
      lazyApiUrls = await $fetch(withBase("/api/_sitemap-urls", options.baseURL));
    } catch {
    }
  }
  let prerenderedRoutesPayload = [];
  if (hasPrerenderedRoutesPayload) {
    try {
      prerenderedRoutesPayload = await $fetch(withBase("/__sitemap__/routes.json", options.baseURL), {
        baseURL: options.sitemapConfig.siteUrl
      });
    } catch {
    }
  }
  let nuxtContentUrls = [];
  if (isNuxtContentDocumentDriven) {
    try {
      nuxtContentUrls = await $fetch(withBase("/api/__sitemap__/document-driven-urls", options.baseURL));
    } catch {
    }
  }
  const urls = [
    "/",
    ...prerenderedRoutesPayload,
    ...lazyApiUrls,
    ...configUrls,
    ...pageUrls,
    ...nuxtContentUrls
  ];
  return mergeOnKey(
    preNormalise(urls).map((entry) => {
      const routeRules = options.getRouteRulesForPath(withoutTrailingSlash(entry.loc));
      if (routeRules.index === false)
        return false;
      return defu$1(routeRules.sitemap, entry);
    }).filter(Boolean).map(postNormalise),
    "loc"
  );
}

function urlWithBase(url, base, siteUrl) {
  return joinURL(siteUrl.replace(new RegExp(`${base}$`), ""), base, url.replace(new RegExp(`^${base}`), ""));
}

const MaxSitemapSize = 1e3;
async function buildSitemap(options) {
  const sitemapsConfig = options.sitemapConfig.sitemaps;
  let urls = await generateSitemapEntries(options);
  if (sitemapsConfig === true)
    urls = urls.slice(Number(options.sitemapName) * MaxSitemapSize, (Number(options.sitemapName) + 1) * MaxSitemapSize);
  const ctx = { urls, sitemapName: options.sitemapName };
  await options.callHook?.(ctx);
  const resolveKey = (k) => {
    switch (k) {
      case "images":
        return "image";
      case "videos":
        return "video";
      default:
        return k;
    }
  };
  const handleArray = (key, arr) => {
    if (arr.length === 0)
      return false;
    key = resolveKey(key);
    if (key === "alternatives") {
      return arr.map((obj) => [
        `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${normaliseValue(sk, sv, options)}"`).join(" ")} />`
      ].join("\n")).join("\n");
    }
    return arr.map((obj) => [
      `        <${key}:${key}>`,
      ...Object.entries(obj).map(([sk, sv]) => `            <${key}:${sk}>${normaliseValue(sk, sv, options)}</${key}:${sk}>`),
      `        </${key}:${key}>`
    ].join("\n")).join("\n");
  };
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...ctx.urls?.map((e) => `    <url>
${Object.keys(e).map((k) => Array.isArray(e[k]) ? handleArray(k, e[k]) : `        <${k}>${normaliseValue(k, e[k], options)}</${k}>`).filter((l) => l !== false).join("\n")}
    </url>`) ?? [],
    "</urlset>"
  ], options.sitemapConfig.xsl);
}
function normaliseValue(key, value, options) {
  if (["loc", "href"].includes(key) && typeof value === "string") {
    if (value.startsWith("http://") || value.startsWith("https://"))
      return value;
    const url = urlWithBase(value, options.baseURL, options.sitemapConfig.siteUrl);
    if (url.includes("."))
      return url;
    return options.sitemapConfig.trailingSlash ? withTrailingSlash(url) : withoutTrailingSlash(url);
  }
  if (value instanceof Date)
    return normaliseDate(value);
  if (typeof value === "boolean")
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function generateXslStylesheet() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          #content {
            margin: 0 auto;
            width: 1000px;
          }

          .warn {
            padding: 10px;
            background-color: #fef9c3;
            color: #ca8a04;
            border-radius: 4px;
            margin: 10px 0 !important;
            display: inline-block;
          }

          .expl {
            margin: 18px 3px;
            line-height: 1.2em;
          }

          .expl a {
            color: #00DC82;
            font-weight: 600;
          }

          .expl a:visited {
            color: #00DC82;
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
        </style>
      </head>
      <body>
        <div id="content">
          <h1>XML Sitemap</h1>
          <p class="expl">
            Generated by <a href="https://github.com/harlan-zw/nuxt-simple-sitemap" target="_blank" rel="noopener">Nuxt
            Simple Sitemap</a>.
          </p>
          ${""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">URL</th>
                  <th width="5%">Images</th>
                  <th title="Last Modification Time" width="20%">Last Mod.</th>
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of select="count(image:image)"/>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
}
function wrapSitemapXml(input, xsl) {
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  input.push("<!-- XML Sitemap generated by Nuxt Simple Sitemap -->");
  return input.join("\n");
}

const _UuarHM = defineEventHandler(async (e) => {
  setHeader(e, "Content-Type", "application/xslt+xml");
  setHeader(e, "Cache-Control", "max-age=600, must-revalidate");
  return generateXslStylesheet();
});

function useHostname(e) {
  const config = useRuntimeConfig()["nuxt-simple-sitemap"];
  const base = useRuntimeConfig().app.baseURL;
  if (config.siteUrl)
    return withBase(base, config.siteUrl);
  const host = getRequestHeader(e, "host") || process.env.NITRO_HOST || process.env.HOST || "localhost";
  const protocol = getRequestHeader(e, "x-forwarded-proto") || "http";
  const useHttp = host.includes("127.0.0.1") || host.includes("localhost") || protocol === "http";
  const port = host.includes(":") ? host.split(":").pop() : process.env.NITRO_PORT || process.env.PORT;
  return withBase(base, `http${useHttp ? "" : "s"}://${host.includes(":") ? host.split(":")[0] : host}${port ? `:${port}` : ""}`);
}

const _wLXQ3P = defineEventHandler(async (e) => {
  const sitemapConfig = useRuntimeConfig()["nuxt-simple-sitemap"];
  if (sitemapConfig.sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 301);
  }
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  setHeader(e, "Cache-Control", "max-age=600, must-revalidate");
  const callHook = async (ctx) => {
    const nitro = useNitroApp();
    await nitro.hooks.callHook("sitemap:sitemap-xml", ctx);
  };
  return await buildSitemap({
    sitemapName: "sitemap",
    sitemapConfig: { ...sitemapConfig, siteUrl: useHostname(e) },
    baseURL: useRuntimeConfig().app.baseURL,
    getRouteRulesForPath,
    callHook
  });
});

const _lazy_u54hUK = () => import('./renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_u54hUK, lazy: true, middleware: false, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _UuarHM, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _wLXQ3P, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_u54hUK, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
