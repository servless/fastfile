var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.ts
var title = "\u6587\u4EF6\u52A0\u901F\u4E0B\u8F7D";
var subtitle = "\u5FEB\u901F\u4E0B\u8F7D\u7F51\u7EDC\u6587\u4EF6";
var inputPlaceholder = "\u8BF7\u8F93\u5165\u4E0B\u8F7D\u94FE\u63A5";
var tips = "\u6309\u56DE\u8F66\u952E\u6267\u884C\u4E0B\u8F7D";
var githubUrl = "https://github.com/servless/fastfile";
var footerJS = `
<script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"><\/script>
<script>LA.init({id:"KjS1VsJ98ywewicI",ck:"KjS1VsJ98ywewicI"})<\/script>
`;
var logoSVG = /* @__PURE__ */ __name((size = 120) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
	<path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"/>
	<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
	</svg>`;
}, "logoSVG");
var AntiReptilianUA = ["netcraft"];
function routeByHosts(host) {
  const routes = {
    // 生产环境
    "quay": "quay.io",
    "gcr": "gcr.io",
    "k8s-gcr": "k8s.gcr.io",
    "k8s": "registry.k8s.io",
    "ghcr": "ghcr.io",
    "cloudsmith": "docker.cloudsmith.io",
    "nvcr": "nvcr.io",
    "github": "github.com",
    "gitlab": "gitlab.com",
    // 测试环境
    "test": "registry-1.docker.io"
  };
  if (host in routes) {
    return [routes[host], true];
  }
  return [host, false];
}
__name(routeByHosts, "routeByHosts");
function isStrictValidUrl(urlString) {
  const regex = /^https?:\/\/((?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(\/[^\s]*)?$/;
  return regex.test(urlString);
}
__name(isStrictValidUrl, "isStrictValidUrl");
var PREFLIGHT_INIT = {
  // 预检请求配置
  headers: new Headers({
    "access-control-allow-origin": "*",
    // 允许所有来源
    "access-control-allow-methods": "GET,POST,PUT,PATCH,TRACE,DELETE,HEAD,OPTIONS",
    // 允许的HTTP方法
    "access-control-max-age": "1728000"
    // 预检请求的缓存时间
  })
};
function newUrl(urlStr) {
  try {
    return new URL(urlStr);
  } catch (err) {
    console.error(err);
    return null;
  }
}
__name(newUrl, "newUrl");
async function nginx() {
  const text = `
  <!DOCTYPE html>
  <html>
  <head>
  <title>Welcome to nginx!</title>
  <style>
    body {
      width: 35em;
      margin: 0 auto;
      font-family: Tahoma, Verdana, Arial, sans-serif;
    }
  </style>
  </head>
  <body>
  <h1>Welcome to nginx!</h1>
  <p>If you see this page, the nginx web server is successfully installed and
  working. Further configuration is required.</p>

  <p>For online documentation and support please refer to
  <a href="http://nginx.org/">nginx.org</a>.<br/>
  Commercial support is available at
  <a href="http://nginx.com/">nginx.com</a>.</p>

  <p><em>Thank you for using nginx.</em></p>
  </body>
  </html>
  `;
  return text;
}
__name(nginx, "nginx");
async function searchInterface() {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>${title}</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    :root {
      --github-color: #f0f6fc;
      --githubbj-color: #010409;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center; // \u65B0\u589E
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(120deg, #1a90ff 0%, #003eb3 100%);
      padding: 20px;
    }

    .container {
      text-align: center;
      width: 100%;
      max-width: 800px;
      padding: 0 20px;
      margin: 0 auto; // \u4FEE\u6539
      display: flex; // \u65B0\u589E
      flex-direction: column; // \u65B0\u589E
      justify-content: center; // \u65B0\u589E
      min-height: 70vh; // \u65B0\u589E
    }

    .github-corner {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 999;
    }

    .github-corner svg {
      fill: var(githubbj-color);
      color: var(--github-color);
      position: absolute;
      top: 0;
      border: 0;
      right: 0;
      width: 80px;
      height: 80px;
    }

    .github-corner a,
    .github-corner a:visited {
    color: var(--github-color) !important;
    }

    .github-corner a,
    .github-corner a:visited {
    color: transparent !important;
    text-decoration: none !important;
    }

    .github-corner .octo-body,
    .github-corner .octo-arm {
    fill: var(--github-color) !important;
    }

    .github-corner:hover .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }

    @keyframes octocat-wave {
      0%, 100% {
        transform: rotate(0);
      }
      20%, 60% {
        transform: rotate(-25deg);
      }
      40%, 80% {
        transform: rotate(10deg);
      }
    }

    .logo {
      margin-bottom: 30px;
      transition: transform 0.3s ease;
    }
    .logo:hover {
      transform: scale(1.05);
    }
    .title {
      color: white;
      font-size: 2em;
      margin-bottom: 10px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .subtitle {
      color: rgba(255,255,255,0.9);
      font-size: 1.1em;
      margin-bottom: 30px;
    }
    .search-container {
      display: flex;
      align-items: stretch;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      height: 50px;
    }
    #search-input {
      flex: 1;
      padding: 15px 20px;
      font-size: 16px;
      border: none;
      border-radius: 8px 0 0 8px;
      outline: none;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }
    #search-input {
      flex: 1;
      padding: 0 20px;
      font-size: 16px;
      border: none;
      border-radius: 8px 0 0 8px;
      outline: none;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      height: 100%;
    }
    #search-button {
      padding: 0 25px;
      background-color: #0066ff;
      border: none;
      border-radius: 0 8px 8px 0;
      cursor: pointer;
      transition: all 0.3s ease;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #search-button:hover {
      background-color: #0052cc;
      transform: translateY(-1px);
    }
    #search-button svg {
      width: 24px;
      height: 24px;
    }
    .tips {
      color: rgba(255,255,255,0.8);
      margin-top: 20px;
      font-size: 0.9em;
    }
    @media (max-width: 480px) {
      .container {
        padding: 0 15px;
        min-height: 60vh; // \u65B0\u589E
      }
      .github-corner svg {
        width: 60px;
        height: 60px;
      }
      .github-corner:hover .octo-arm {
        animation: none;
      }
      .github-corner .octo-arm {
        animation: octocat-wave 560ms ease-in-out;
      }
      .search-container {
        height: 45px;
      }

      #search-input {
        padding: 0 15px;
      }

      #search-button {
        padding: 0 20px;
      }
    }
    </style>
  </head>
  <body>
    <a href="${githubUrl}" target="_blank" class="github-corner" aria-label="View source on Github">
      <svg viewBox="0 0 250 250" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
      </svg>
    </a>
    <div class="container">
      <div class="logo">${logoSVG(120)}</div>
			<h1 class="title">${title}</h1>
			<p class="subtitle">${subtitle}</p>
			<div class="search-container">
				<input type="text" id="search-input" placeholder="${inputPlaceholder}">
				<button id="search-button" title="\u641C\u7D22">
					<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg>
				</button>
			</div>
			<p class="tips">\u63D0\u793A\uFF1A${tips}</p>
		</div>
    <script>
			function performSearch() {
				const query = document.getElementById('search-input').value;
				if (query) {
					window.location.href = '/search?q=' + encodeURIComponent(query);
				}
			}

			document.getElementById('search-button').addEventListener('click', performSearch);
			document.getElementById('search-input').addEventListener('keypress', function(event) {
				if (event.key === 'Enter') {
					performSearch();
				}
			});
    <\/script>
		${footerJS}
  </body>
  </html>
  `;
  return html;
}
__name(searchInterface, "searchInterface");
var src_default = {
  async fetch(request, env) {
    const getReqHeader = /* @__PURE__ */ __name((key) => request.headers.get(key), "getReqHeader");
    let url = new URL(request.url);
    const homePage = url.origin;
    const pathnameFirst = url.pathname;
    const pathnameArray = pathnameFirst.split("/");
    let targetUrl = "";
    switch (pathnameArray[1]) {
      case "":
        return new Response(await searchInterface(), {
          headers: {
            "Content-Type": "text/html; charset=UTF-8"
          }
        });
      case "favicon.ico":
        return new Response(logoSVG(32), {
          headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "public, max-age=86400"
            // 缓存 1 天
          }
        });
      case "https:":
      case "http:":
        targetUrl = pathnameFirst.startsWith("/") ? pathnameFirst.slice(1) : pathnameFirst;
        targetUrl = targetUrl + url.search;
        break;
      case "search":
        targetUrl = url.searchParams.get("q") ?? "";
        break;
      default:
        let shortHost = routeByHosts(pathnameArray[1]);
        targetUrl = "https://" + (shortHost[1] ? pathnameFirst.replace(new RegExp(`^/${pathnameArray[1]}/`), `${shortHost[0]}/`) : pathnameFirst.replace(/^\/+/, ""));
        break;
    }
    if (!isStrictValidUrl(targetUrl)) {
      return Response.redirect(homePage, 302);
    }
    url = new URL(targetUrl);
    const userAgentHeader = request.headers.get("User-Agent");
    const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
    if (env.UA) {
      AntiReptilianUA = AntiReptilianUA.concat(await ADD(env.UA));
    }
    if (AntiReptilianUA.some((fxxk) => userAgent.includes(fxxk)) && AntiReptilianUA.length > 0) {
      return new Response(await nginx(), {
        headers: {
          "Content-Type": "text/html; charset=UTF-8"
        }
      });
    }
    if (userAgent && userAgent.includes("mozilla")) {
      if (url.pathname === "/") {
        if (env.URL302) {
          return Response.redirect(env.URL302, 302);
        } else if (env.URL) {
          if (env.URL.toLowerCase() === "nginx") {
            return new Response(await nginx(), {
              headers: {
                "Content-Type": "text/html; charset=UTF-8"
              }
            });
          } else {
            return fetch(new Request(env.URL, request));
          }
        }
      }
    }
    if (!/%2F/.test(url.search) && /%3A/.test(url.toString())) {
      let modifiedUrl = url.toString().replace(/%3A(?=.*?&)/, "%3Alibrary%2F");
      url = new URL(modifiedUrl);
    }
    return httpHandler(request, url.toString());
  }
};
async function httpHandler(req, reqURL) {
  console.log(1, reqURL, reqURL);
  const reqHdrRaw = req.headers;
  if (req.method === "OPTIONS" && reqHdrRaw.has("access-control-request-headers")) {
    return new Response(null, PREFLIGHT_INIT);
  }
  const rawLen = "";
  const reqHdrNew = new Headers(reqHdrRaw);
  reqHdrNew.delete("Authorization");
  const urlObj = newUrl(reqURL);
  console.log(urlObj);
  if (!urlObj)
    return new Response("Bad URL", { status: 400 });
  const reqInit = {
    method: req.method,
    headers: reqHdrNew,
    redirect: "follow",
    body: req.body
  };
  return await proxy(urlObj, reqInit, rawLen);
}
__name(httpHandler, "httpHandler");
async function proxy(urlObj, reqInit, rawLen) {
  const res = await fetch(urlObj.href, reqInit);
  const resHdrOld = res.headers;
  const resHdrNew = new Headers(resHdrOld);
  console.log(2, resHdrNew);
  if (resHdrNew.has("location")) {
    const location = resHdrNew.get("location");
    if (location === null) {
      return new Response("Location header is null", { status: 500 });
    }
    reqInit.redirect = "follow";
    return proxy(new URL(location), reqInit, resHdrOld.get("content-length"));
  }
  const status = res.status;
  resHdrNew.set("access-control-expose-headers", "*");
  resHdrNew.set("access-control-allow-origin", "*");
  resHdrNew.set("Cache-Control", "max-age=1500");
  resHdrNew.delete("content-security-policy");
  resHdrNew.delete("content-security-policy-report-only");
  resHdrNew.delete("clear-site-data");
  return new Response(res.body, {
    status,
    headers: resHdrNew
  });
}
__name(proxy, "proxy");
async function ADD(envadd) {
  let addtext = envadd.replace(/[  |"'\r\n]+/g, ",").replace(/,+/g, ",");
  if (addtext.charAt(0) === ",")
    addtext = addtext.slice(1);
  if (addtext.charAt(addtext.length - 1) === ",")
    addtext = addtext.slice(0, addtext.length - 1);
  const add = addtext.split(",");
  return add;
}
__name(ADD, "ADD");
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
