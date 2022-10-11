/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","f0ea4bdc9baa0dd7c811d197473bb9ae"],["/archives/2021/index.html","17481664ac7243bc27645f661a1cbe6e"],["/archives/2022/03/index.html","2f4f197aa58875ca26cff66a0a7513e9"],["/archives/2022/05/index.html","9fd304424805d90eed95dd3e6210a72a"],["/archives/2022/07/index.html","6e945d0cf9d5871e66f5feabdbb0ce99"],["/archives/2022/10/index.html","78aa2e547b62237c3e0d06de650a2c35"],["/archives/2022/index.html","9da762a8e6fb7f3cdb2f2018bee81b0c"],["/archives/index.html","7bae996bc24d013a9fb82bf6aa274794"],["/archives/page/2/index.html","9eb9135662437f02cccd89cfe4629343"],["/categories/Articles/index.html","67d1b68f5808254b978f91a6d01f07d7"],["/categories/Books/index.html","a2d137b28ebfe04a655032705988dd39"],["/categories/Books/娜塔莎之舞/index.html","93dcbae5e9a71a9772b0f3492ebcaeb0"],["/categories/Movies/index.html","7c08325d54725ca20b67a9cad1c20b01"],["/categories/Music/index.html","0c0f8c0e6c5fe062bfb6af4e78feef9e"],["/categories/Study/CS/index.html","74052e95498e5d6e0d459a46bd0b1add"],["/categories/Study/CS/个人博客/index.html","0a82c46c74e8803d996963676571640f"],["/categories/Study/espanol/index.html","ca70bc193ae44a1261ab2ba5e2f8a826"],["/categories/Study/index.html","196d15d6c0a397dd196b274206d176b8"],["/categories/Study/论文/index.html","0d7ad6742cbcb4719e6970b853ba831d"],["/categories/index.html","16b844bd453a55119c3eb3c05b6688f1"],["/css/main.css","15c70cb413bae71ebcfcf93a5a6f5532"],["/favicon1.png","6200cc57527fd973cabc95f7fd3e7cf1"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/apple-touch-icon1-next.png","d0ead8f498b06d1adbd0ab40ae04503d"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/email.svg","312dd175881a062b4a79312c93ec4482"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon1-16x16-next.png","952df5adb44ce54367a4528591c14b07"],["/images/favicon1-32x32-next.png","2f381073e2e2d9346a0e63b726b1c557"],["/images/github.svg","5acbc10c75b63a9685828f208bbb7d5b"],["/images/instagram.svg","60adc45d6dfc1ca906cccbd36a2104f2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e91047a56c6f55f9c871352b09437db2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","7e2b711f9df69ff976ae896e95e16aee"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","3ffb6f951ab8ef1d748513b74d7885fe"],["/post/156542a9.html","52c5779d17210ced3b7dcf028cc0e4f3"],["/post/52bdea0.html","61c7e5e55b4383fc0ba5441ae1c50b16"],["/post/52bdea0/image-20221008001939475.png","4ac6ff6cb76cc2d7833af33ea8adf7f2"],["/post/52bdea0/image-20221008002215350.png","1c433689e2c3101221a6608baacf4a6b"],["/post/52bdea0/image-20221008013022856.png","458d59915b6b2122259a44682db22325"],["/post/52bdea0/image-20221008013919729.png","2efc44144ea418de5e0f451b7fe74431"],["/post/52bdea0/image-20221008015305025.png","e15f94c562a50ac62cf8e8b9c25ff4b6"],["/post/5e0c2cae.html","3adaef5729e245f1a597701f671623d8"],["/post/9c83a55c.html","9749a7002f9ec2861432c532ff34a399"],["/post/9c83a55c/fleabag.jpg","678c5f6917fd1391520cb1bf8339407c"],["/post/9c83a55c/hound from heaven.jpg","3cf965562edf5cb200784420f9d8cfe6"],["/post/bf9aff6d.html","7d596d8fefd1faf19dd5226d8b10d473"],["/post/cc152a40.html","ba9befdbcf0cef736dada9efaeb8fc49"],["/post/cc152a40/A0A319D1-045D-4426-BE7B-9556990FDB7D.png","0c48d1ec8d1f0f1a84ffe14f34ae0d9a"],["/post/cc152a40/E350BFC7-4228-4AF1-B877-7EB1FF1ED87E.png","3519f5f9e0a8a946ff4c7ab619d968dd"],["/post/cc152a40/EE772A8D-C80F-4678-8E25-BDADD19F121B.png","36959e2d5c3136b638a09eaabf6f1024"],["/post/d18d27c0.html","14c2c4e5ad1551e6e67ba7fdcc0a03ed"],["/post/d18d27c0/image-20221003115048579.png","f7e43ae0a08a38039abc555bfec4a57b"],["/post/d18d27c0/image-20221003125955976.png","e04d9d087cf56463da41f233b20c1611"],["/post/d18d27c0/image-20221003130319340.png","ba1c523c73b50b337be7e1fce333f2c8"],["/post/d18d27c0/image-20221003130438371.png","67330447138e8211b56b949b2e982552"],["/post/d18d27c0/image-20221003130659056.png","fc0555ae6164dcca0b692d0c4fbb9497"],["/post/d18d27c0/image-20221003131115998.png","0563a396270fb64efa80ad92becddd5c"],["/post/d18d27c0/image-20221003131216041.png","1e4cced0b1644184c2dcf6efa3ce5d7b"],["/post/d18d27c0/image-20221003131343166.png","cd3fcf865bcd8b68f84ab22ca7450901"],["/post/d18d27c0/image-20221003131537330.png","94ccf7b44d80529abc967d89ea48ace7"],["/post/d18d27c0/image-20221003131715429.png","b0483d1361187e8cdbd4cb97aa3eb8ed"],["/post/d18d27c0/image-20221003132354318.png","a7a96175c2200e63182f8706849b790b"],["/post/d18d27c0/image-20221003132457566.png","64f75e691600b3bf5825be78f02ac668"],["/post/d18d27c0/image-20221003133030565.png","660105319e068320506af4c170bcbc17"],["/post/d18d27c0/image-20221003134146258.png","dbbeb656727131a303064b17f55cbaef"],["/post/d18d27c0/image-20221003134742872.png","2cd8480854be00ca6bbd6593f7ffff76"],["/post/d18d27c0/image-20221003135150848.png","a3b42212e8032fa4f0fa1f58bc08e5ba"],["/post/d18d27c0/image-20221003135419273.png","cf0268842a00f28a5590854b91d154fa"],["/post/d18d27c0/image-20221003140059889.png","461365f79673c6dc63e93c9b28e19fac"],["/post/d18d27c0/image-20221003140450982.png","9d26a34fe903e96bc88febab54f845a3"],["/post/d18d27c0/image-20221003140550076.png","45b8931ec21f4bc82a36f6cd7305c3d4"],["/post/d18d27c0/image-20221003140759841.png","f5675a697ff66643b70995c430f8ac35"],["/post/d7d406e6.html","e0ab49a4a6a3951e27e9f9f13e750802"],["/post/edbd0a6e.html","ef88e1c872d73b4e19d9bfb6d3ffe937"],["/post/edbd0a6e/image-20220706203918541.png","531d37c9b9fa98dc0f7639fc001a799d"],["/post/edbd0a6e/image-20220706212045745.png","6d79379e7d92c01839036042927bad62"],["/post/edbd0a6e/image-20221003152812944.png","b1ad7300f07c7390771a5cf536e11465"],["/post/f9df2e3c.html","e1b28b3e7980f6bb6520ee69fff8bf63"],["/post/fe654675.html","4c652500bde6d4708ae0c41d086a4629"],["/sw-register.js","b92d50c67d68fb14f1623c0eeebf1eaa"],["/tags/BT下载/index.html","b594e7fb52a36a90a1b44a5f0e62b94e"],["/tags/Indie-Music/index.html","2655cc87dbe59665f938c55adf8b4e1a"],["/tags/hexo/index.html","2dceac1f4785a9cb865f6416152cc2ef"],["/tags/index.html","96c3f4387433b121b2679831a8c4139d"],["/tags/个人博客管理/index.html","d8ed5bf57510d5aa8abb7a85fba0fb39"],["/tags/乐评/index.html","98a13dfa8acf77e158026d375382c0ff"],["/tags/关于爱与痛苦/index.html","c9a1dd308c59af40afd7576b5a32a41c"],["/tags/教程/index.html","d9d4e63be8019ac17d5dfa754eba9211"],["/tags/文化史/index.html","a1c61ccb655e19ecf37714f13734e99b"],["/tags/文献综述/index.html","66ee9ebf9d28a5c5139955afa9033e57"],["/tags/电影资源/index.html","0e82b1ce396841bed1a5733866d79e0a"],["/tags/西班牙语/index.html","87a94e03f757e6b4115ffcec83b31c71"],["/tags/论文写作/index.html","1ebc16f92bcdaad1a1679eadf525d8f8"],["/tags/读书笔记/index.html","34527f51d425741d5c15ac1e95817e11"],["/tags/输入法/index.html","ec8456173285b3690c39ad4f19e755d4"],["/tags/随笔/index.html","e6cc4ba64868ccb4f4b7dded7aa35b21"],["/tags/非必要/index.html","7245485e808403416f11a7679f4ee946"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
