import{_ as s,c as n,o as a,a4 as i}from"./chunks/framework.4aTu-Nia.js";const y=JSON.parse('{"title":"部署单实例Redis","description":"","frontmatter":{},"headers":[],"relativePath":"note/计算机/redis/01.运维/部署单实例Redis.md","filePath":"note/计算机/redis/01.运维/部署单实例Redis.md"}'),p={name:"note/计算机/redis/01.运维/部署单实例Redis.md"},l=i(`<h1 id="部署单实例redis" tabindex="-1">部署单实例Redis <a class="header-anchor" href="#部署单实例redis" aria-label="Permalink to &quot;部署单实例Redis&quot;">​</a></h1><p>配置文件：</p><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># redis.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Network settings</span></span>
<span class="line"><span># 允许所有网络接口访问 Redis（仅用于安全网络环境）</span></span>
<span class="line"><span>bind 0.0.0.0</span></span>
<span class="line"><span># 启用保护模式以防止意外访问</span></span>
<span class="line"><span>protected-mode yes</span></span>
<span class="line"><span>port 6379</span></span>
<span class="line"><span>tcp-backlog 511</span></span>
<span class="line"><span></span></span>
<span class="line"><span># General settings</span></span>
<span class="line"><span>timeout 0</span></span>
<span class="line"><span>tcp-keepalive 300</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Logging</span></span>
<span class="line"><span>loglevel notice</span></span>
<span class="line"><span>logfile &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Persistence settings</span></span>
<span class="line"><span>databases 16</span></span>
<span class="line"><span>save 900 1</span></span>
<span class="line"><span>save 300 10</span></span>
<span class="line"><span>save 60 10000</span></span>
<span class="line"><span>stop-writes-on-bgsave-error yes</span></span>
<span class="line"><span>rdbcompression yes</span></span>
<span class="line"><span>rdbchecksum yes</span></span>
<span class="line"><span>dbfilename dump.rdb</span></span>
<span class="line"><span>dir /data</span></span>
<span class="line"><span></span></span>
<span class="line"><span># AOF settings</span></span>
<span class="line"><span># 启用 AOF 持久化，并每秒同步一次以平衡性能和数据安全</span></span>
<span class="line"><span>appendonly yes</span></span>
<span class="line"><span>appendfilename &quot;appendonly.aof&quot;</span></span>
<span class="line"><span>appendfsync everysec</span></span>
<span class="line"><span>no-appendfsync-on-rewrite no</span></span>
<span class="line"><span>aof-load-truncated yes</span></span>
<span class="line"><span>aof-use-rdb-preamble yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Security</span></span>
<span class="line"><span># 设置访问密码，确保 Redis 安全性</span></span>
<span class="line"><span>requirepass your-secure-password</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Memory management</span></span>
<span class="line"><span># 设置最大内存使用量和内存淘汰策略</span></span>
<span class="line"><span>maxmemory 256mb</span></span>
<span class="line"><span>maxmemory-policy allkeys-lru</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Slow log</span></span>
<span class="line"><span>slowlog-log-slower-than 10000</span></span>
<span class="line"><span>slowlog-max-len 128</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Latency monitoring</span></span>
<span class="line"><span>latency-monitor-threshold 100</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Event notification</span></span>
<span class="line"><span>notify-keyspace-events &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Advanced settings</span></span>
<span class="line"><span>hash-max-ziplist-entries 512</span></span>
<span class="line"><span>hash-max-ziplist-value 64</span></span>
<span class="line"><span>list-max-ziplist-size -2</span></span>
<span class="line"><span>list-compress-depth 0</span></span>
<span class="line"><span>set-max-intset-entries 512</span></span>
<span class="line"><span>zset-max-ziplist-entries 128</span></span>
<span class="line"><span>zset-max-ziplist-value 64</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Lazy freeing</span></span>
<span class="line"><span>lazyfree-lazy-eviction yes</span></span>
<span class="line"><span>lazyfree-lazy-expire yes</span></span>
<span class="line"><span>lazyfree-lazy-server-del yes</span></span>
<span class="line"><span>lazyfree-lazy-user-del yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Active defragmentation</span></span>
<span class="line"><span>activedefrag yes</span></span></code></pre></div><p>docker-compose.yml</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  redis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis:7.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;6379:6379&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis_data:/data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./redis.conf:/usr/local/etc/redis/redis.conf</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;redis-server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/usr/local/etc/redis/redis.conf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      biz_net</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    logging</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      driver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;json-file&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        max-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10m&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        max-file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  redis_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  biz_net</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    driver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bridge</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ipam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">subnet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">192.168.100.0/24</span></span></code></pre></div>`,5),e=[l];function t(h,k,c,r,d,E){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{y as __pageData,g as default};
