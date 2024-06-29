import{_ as s,c as i,o as a,a4 as h}from"./chunks/framework.4aTu-Nia.js";const k="/assets/WX20230929-111741@2x.CsGU3Y-J.png",t="/assets/WX20230929-112034@2x.DU4ogRG2.png",C=JSON.parse('{"title":"每小时产量","description":"","frontmatter":{},"headers":[],"relativePath":"note/计算机/influxdb/03.查询案例/每小时产量.md","filePath":"note/计算机/influxdb/03.查询案例/每小时产量.md"}'),n={name:"note/计算机/influxdb/03.查询案例/每小时产量.md"},p=h(`<h1 id="每小时产量" tabindex="-1">每小时产量 <a class="header-anchor" href="#每小时产量" aria-label="Permalink to &quot;每小时产量&quot;">​</a></h1><h2 id="导入数据" tabindex="-1">导入数据 <a class="header-anchor" href="#导入数据" aria-label="Permalink to &quot;导入数据&quot;">​</a></h2><p>行协议数据：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">eqp_prod_data,eqpId=SB001 goodOut=100 1680080100000000000</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">eqp_prod_data,eqpId=SB001 goodOut=130 1680083700000000000</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">eqp_prod_data,eqpId=SB001 goodOut=180 1680087300000000000</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">eqp_prod_data,eqpId=SB001 goodOut=300 1680090900000000000</span></span></code></pre></div><h2 id="查询" tabindex="-1">查询 <a class="header-anchor" href="#查询" aria-label="Permalink to &quot;查询&quot;">​</a></h2><p>原始数据：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bucket: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pub_bucket&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(start: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2023</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">03</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">29</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">T08</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.000000000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, stop: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2023</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">03</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">29</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">T20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.000000000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fn: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_measurement&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;eqp_prod_data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fn: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_field&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;goodOut&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fn: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eqpId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;SB001&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> yield</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;mean&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="`+k+`" alt="image"></p><p>每小时产量：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bucket: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pub_bucket&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(start: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2023</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">03</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">29</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">T08</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.000000000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, stop: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2023</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">03</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">29</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">T20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.000000000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fn: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_measurement&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;eqp_prod_data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fn: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_field&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;goodOut&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fn: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eqpId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;SB001&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aggregateWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(every: 1h, fn:last, createEmpty: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> yield</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;mean&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="`+t+'" alt="image"></p>',11),l=[p];function e(E,r,d,g,F,y){return a(),i("div",null,l)}const c=s(n,[["render",e]]);export{C as __pageData,c as default};
