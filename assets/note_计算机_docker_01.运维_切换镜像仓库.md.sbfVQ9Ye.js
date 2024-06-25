import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.4aTu-Nia.js";const F=JSON.parse('{"title":"切换镜像仓库","description":"","frontmatter":{},"headers":[],"relativePath":"note/计算机/docker/01.运维/切换镜像仓库.md","filePath":"note/计算机/docker/01.运维/切换镜像仓库.md"}'),t={name:"note/计算机/docker/01.运维/切换镜像仓库.md"},n=e(`<h1 id="切换镜像仓库" tabindex="-1">切换镜像仓库 <a class="header-anchor" href="#切换镜像仓库" aria-label="Permalink to &quot;切换镜像仓库&quot;">​</a></h1><p>在 /etc/docker/daemon.json 文件中加入 registry-mirrors 配置项：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;registry-mirrors&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://docker.m.daocloud.io&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>由于镜像仓库被国外封杀，目前亲测可用的镜像仓库是上述 DaoCloud 的镜像仓库。</p></blockquote><p>重启 Docker 进程：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre></div><p>查看是否切换成功：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mirrors:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  https://docker.m.daocloud.io</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Live</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Restore</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Enabled:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span></code></pre></div>`,9),p=[n];function l(h,o,k,d,r,c){return i(),a("div",null,p)}const u=s(t,[["render",l]]);export{F as __pageData,u as default};
