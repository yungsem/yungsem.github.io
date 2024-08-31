import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.4aTu-Nia.js";const g=JSON.parse('{"title":"事务","description":"","frontmatter":{},"headers":[],"relativePath":"note/计算机/loadrunner/02.脚本录制/事务.md","filePath":"note/计算机/loadrunner/02.脚本录制/事务.md"}'),n={name:"note/计算机/loadrunner/02.脚本录制/事务.md"},e=t(`<h1 id="事务" tabindex="-1">事务 <a class="header-anchor" href="#事务" aria-label="Permalink to &quot;事务&quot;">​</a></h1><p>事务开始：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lr_start_transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;devt-query&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>事务结束：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lr_end_transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;devt-query&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,LR_AUTO);</span></span></code></pre></div><p>事务成功结束：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lr_end_transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;devt-query&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,LR_PASS);</span></span></code></pre></div><p>事务失败结束：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lr_end_transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;devt-query&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,LR_FAIL);</span></span></code></pre></div><p>示例代码：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//不检查结果,自动结束</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lr_end_transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;devt-query&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,LR_AUTO);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//判断是否成功</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">atoi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lr_eval_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{param1}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lr_end_transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;devt-query&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,LR_PASS);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lr_end_transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;devt-query&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,LR_FAIL);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,11),p=[e];function l(h,k,d,r,E,o){return a(),i("div",null,p)}const y=s(n,[["render",l]]);export{g as __pageData,y as default};
