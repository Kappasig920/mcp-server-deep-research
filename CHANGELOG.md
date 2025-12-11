# Changelog

## 1.2.0 (2025-12-11)

Full Changelog: [v1.1.2...v1.2.0](https://github.com/Kappasig920/mcp-server-deep-research/compare/v1.1.2...v1.2.0)

### Features

* **mcp:** add detail field to docs search tool ([60c32bf](https://github.com/Kappasig920/mcp-server-deep-research/commit/60c32bf99459c78269706b0f4fc2aea21c4a4771))
* **mcp:** add typescript check to code execution tool ([ee3d5da](https://github.com/Kappasig920/mcp-server-deep-research/commit/ee3d5da6c1ce6b5579dc2289f0a96bc30269cf23))
* **mcp:** enable optional code execution tool on http mcp servers ([f232065](https://github.com/Kappasig920/mcp-server-deep-research/commit/f2320658d00409f2ee80f9e52e890cc3d781e79d))
* **mcp:** handle code mode calls in the Stainless API ([75a0ecd](https://github.com/Kappasig920/mcp-server-deep-research/commit/75a0ecd965a883a68b70d23b34231b5a4af5c6f0))
* **mcp:** return logs on code tool errors ([0a9f1cd](https://github.com/Kappasig920/mcp-server-deep-research/commit/0a9f1cdfe91aef442173d95976da24a33c99c00f))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([1a1769a](https://github.com/Kappasig920/mcp-server-deep-research/commit/1a1769a35825ce08b1ee44be1d3277304168bd30))
* **mcpb:** pin @anthropic-ai/mcpb version ([472c1c2](https://github.com/Kappasig920/mcp-server-deep-research/commit/472c1c213006fedb9a6c4b16dd2f08bfd7115139))
* **mcp:** correct code tool API endpoint ([4ae02a1](https://github.com/Kappasig920/mcp-server-deep-research/commit/4ae02a1a8e3369c1056ffbfe334a7116bac2233c))
* **mcp:** return correct lines on typescript errors ([ee91be5](https://github.com/Kappasig920/mcp-server-deep-research/commit/ee91be5a39cca4638372055c450621ed75a5d6a5))
* **mcp:** return tool execution error on api error ([34cd225](https://github.com/Kappasig920/mcp-server-deep-research/commit/34cd225430f70f3be93fa5ace565ffd699bc90f7))
* **mcp:** return tool execution error on jq failure ([7275ebf](https://github.com/Kappasig920/mcp-server-deep-research/commit/7275ebff03ef1985ba657a1a221f928c10ff2f9b))


### Chores

* **client:** fix logger property type ([bb7bd87](https://github.com/Kappasig920/mcp-server-deep-research/commit/bb7bd875db6c134381a16dffa195ab4d7779968f))
* **internal:** codegen related update ([f2b6476](https://github.com/Kappasig920/mcp-server-deep-research/commit/f2b64767f95630d6a72bcd88de5c619de547a267))
* **internal:** codegen related update ([4702745](https://github.com/Kappasig920/mcp-server-deep-research/commit/4702745f47d220f74de50cc993231e1cfbea9f51))
* **internal:** codegen related update ([3ed464b](https://github.com/Kappasig920/mcp-server-deep-research/commit/3ed464b31c42aeb3dc35aa5a01708f37ed1b5fd0))
* **internal:** codegen related update ([d1c01d1](https://github.com/Kappasig920/mcp-server-deep-research/commit/d1c01d11fe218217c97f494b16511421996100ea))
* **internal:** grammar fix (it's -&gt; its) ([d8b82d0](https://github.com/Kappasig920/mcp-server-deep-research/commit/d8b82d01c752b94870e272cc5a5a43eb92a4919c))
* **internal:** upgrade eslint ([ad40d97](https://github.com/Kappasig920/mcp-server-deep-research/commit/ad40d97231fa0db44796d140013d5662eaea0a6d))
* mcp code tool explicit error message when missing a run function ([244706b](https://github.com/Kappasig920/mcp-server-deep-research/commit/244706bd9e56e6252afdc0217c8678b6c3d19ee2))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([10cdaf7](https://github.com/Kappasig920/mcp-server-deep-research/commit/10cdaf7ace6693ea65420b16be798f03d8e65ea9))
* **mcp:** add line numbers to code tool errors ([79ddd22](https://github.com/Kappasig920/mcp-server-deep-research/commit/79ddd22fa36c962202f4d0683e99ad5202a45b89))
* **mcp:** clarify http auth error ([3981f29](https://github.com/Kappasig920/mcp-server-deep-research/commit/3981f2958854476b630eaf89c6facebd978c90f6))
* **mcp:** update lockfile ([520fe68](https://github.com/Kappasig920/mcp-server-deep-research/commit/520fe686d522d6ca1c416c1d9a22d93a391dfa9d))
* **mcp:** upgrade jq-web ([b349273](https://github.com/Kappasig920/mcp-server-deep-research/commit/b349273cb811c5cec9aab4446141de720795431d))
* use latest @modelcontextprotocol/sdk ([b3eec08](https://github.com/Kappasig920/mcp-server-deep-research/commit/b3eec0830c5eac3284831ee2143caacdc963006c))
* use structured error when code execution tool errors ([7b47fab](https://github.com/Kappasig920/mcp-server-deep-research/commit/7b47fab44469d495c10843f4a4bc11b2d1f8003e))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([6e450fe](https://github.com/Kappasig920/mcp-server-deep-research/commit/6e450fee2287cae093837f068161293ccc3827d6))
* **mcp:** add a README link to add server to VS Code or Claude Code ([a129574](https://github.com/Kappasig920/mcp-server-deep-research/commit/a12957416de487961112d065f36f5009af84025a))

## 1.1.2 (2025-10-22)

Full Changelog: [v1.1.1...v1.1.2](https://github.com/Kappasig920/mcp-server-deep-research/compare/v1.1.1...v1.1.2)

### Chores

* update SDK settings ([a24277a](https://github.com/Kappasig920/mcp-server-deep-research/commit/a24277acf98e2cfc1411b351ea30664a9cd814cb))

## 1.1.1 (2025-10-22)

Full Changelog: [v0.0.1...v1.1.1](https://github.com/Kappasig920/mcp-server-deep-research/compare/v0.0.1...v1.1.1)

### Chores

* sync repo ([e838d97](https://github.com/Kappasig920/mcp-server-deep-research/commit/e838d97bd98fa31019c21c914ab4f8031aba5f03))
* update SDK settings ([efe8925](https://github.com/Kappasig920/mcp-server-deep-research/commit/efe8925c2132ab4cff8234cc8eb2c4fd5bcfcba2))
