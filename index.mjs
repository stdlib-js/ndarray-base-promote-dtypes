// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-promotion-rules@v0.4.0-esm/index.mjs";function n(n){var t,e;if(0===n.length)return null;for(t=n[0],e=1;e<n.length;e++)if(null===(t=r(t,n[e]))||-1===t)return null;return t}export{n as default};
//# sourceMappingURL=index.mjs.map
