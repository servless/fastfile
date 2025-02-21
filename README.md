# fastfile

基于 CloudFlare Workers / Pages 的文件加速下载

**注意：本项目内置我自己的 51 网站统计代码,请自行删除或修改 [`src/index.ts`](/servless/fastfile/blob/main/src/index.ts#L9)**

## 部署教程 - Workers

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/servless/fastfile&paid=true)

### 通过 GitHub Actions 发布至 CloudFlare

从 CloudFlare 获取 [`CLOUDFLARE_API_TOKEN`](https://dash.cloudflare.com/profile/api-tokens) 值（`编辑 Cloudflare Workers`），并设置到项目。

> `https://github.com/<ORG>/dchere/settings/secrets/actions`

### 本地部署到 CloudFlare

1. 注册 [CloudFlare 账号](https://www.cloudflare.com/)，并且设置 **Workers** 域名 (比如：`abcd.workers.dev`)
2. 安装 [Wrangler 命令行工具](https://developers.cloudflare.com/workers/wrangler/)。
   ```bash
   npm install -g wrangler
   ```
3. 登录 `Wrangler`（可能需要扶梯）：

   ```bash
   # 登录，可能登录不成功
   # 若登录不成功，可能需要使用代理。
   wrangler login
   ```

4. 拉取本项目：

   ```bash
   git clone https://github.com/servless/fastfile.git
   ```

5. 修改 `wrangler.toml` 文件中的 `name`（fastfile）为服务名 `mydocker`（访问域名为：`fastfile.abcd.workers.dev`）。

6. 发布

   ```bash
    wrangler deploy
   ```

   发布成功将会显示对应的网址

   ```bash
    Proxy environment variables detected. We'll use your proxy for fetch requests.
   ⛅️ wrangler 3.99.0
   	--------------------
   	Total Upload: 0.66 KiB / gzip: 0.35 KiB
   	Uploaded fastfile (1.38 sec)
   	Published fastfile (4.55 sec)
   		https://fastfile.abcd.workers.dev
   	Current Deployment ID:  xxxx.xxxx.xxxx.xxxx
   ```

   **由于某些原因，`workers.dev` 可能无法正常访问，建议绑定自有域名。**

7. 绑定域名

   在 **Compute (Workers)** -> **Workers & Pages** -> **Settings** -> **Domains & Routes** -> **Add** -> **Custom Domain**（仅支持解析在 CF 的域名），按钮以绑定域名。

## 部署教程 - Pages

### 直接连接到 `GitHub` 后,一键部署

### 本地部署到 CloudFlare

- 修改代码 [`pages/_worker.js`]

> - 修改 `_worker.js` 文件。
> - 修改 `src/index.ts` 后，通过 `Workers` 部署后，在 `CloudFlare` 平台复制代码替换 `_worker.js`

...

登录请参考 **Workers** 中的**本地部署**的步骤 `1~4`

...

5. 发布

	```bash
	 wrangler pages deploy pages --project-name fastfile
	```

	发布成功将会显示对应的网址

	```bash
		▲ [WARNING] Pages now has wrangler.toml support.

			We detected a configuration file at
			Ignoring configuration file for now, and proceeding with project deploy.

			To silence this warning, pass in --commit-dirty=true


		✨ Success! Uploaded 0 files (11 already uploaded) (0.38 sec)

		✨ Compiled Worker successfully
		✨ Uploading Worker bundle
		🌎 Deploying...
		✨ Deployment complete! Take a peek over at https://2e4bd9c5.dcba.pages.dev
	```

   **由于某些原因，`pages.dev` 可能无法正常访问，建议绑定自有域名。**

6. 绑定域名

   在 **Compute (Workers)** -> **Workers & Pages** -> **Custom domains** -> **Add Custom Domain**（支持解析不在 CF 的域名），按钮以绑定域名。

## 仓库镜像

- https://git.jetsung.com/servless/fastfile
- https://framagit.org/servless/fastfile
- https://github.com/servless/fastfile
