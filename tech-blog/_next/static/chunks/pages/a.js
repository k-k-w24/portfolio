(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[580], {
    8899: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/article/[id]", function() {
            return n(6573)
        }
        ])
    },
    4568: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return Define
            }
        });
        let Define = class Define {
        }
        ;
        Define.SITE_TITLE = "Ｓｋｙ Tech Blog（スカイ テック ブログ）",
        Define.SITE_DESCRIPTION = "Ｓｋｙ株式会社の公式技術ブログ 「Ｓｋｙ Tech Blog（スカイ テック ブログ）」です。ソフトウェア開発、業務系システム開発、システムインテグレーションなどＳｋｙ株式会社の携わる分野の技術を中心に、開発の裏話や現場の動向、過去の失敗談から最新のトレンドなど一歩踏み込んだコンテンツを提供します。",
        Define.BASE_URL = "https://www.skygroup.jp/tech-blog/",
        Define.OGP_DEFAULT_IMAGE = "https://www.skygroup.jp/tech-blog-assets/images/ogp.jpg",
        Define.PAGINATION_MAX = 5,
        Define.BREADCRUMBS = [],
        Define.GLOBAL_NOT_FOUND_URL = "https://www.skygroup.jp/error/page.html"
    },
    6414: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return ArticleEmpty
            }
        });
        var r = n(2322);
        function ArticleEmpty() {
            return (0,
            r.jsxs)("p", {
                children: ["申し訳ございません。", (0,
                r.jsx)("br", {}), "該当する記事はございません。"]
            })
        }
    },
    4462: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return Breadcrumb
            }
        });
        var r = n(2322)
          , a = n(9097)
          , i = n.n(a)
          , s = n(4568)
          , c = n(1678)
          , o = n.n(c)
          , l = n(7252);
        function Breadcrumb(e) {
            let {pageLocations: t} = e
              , n = [...s.Z.BREADCRUMBS, {
                label: s.Z.SITE_TITLE,
                url: "/"
            }, ...t]
              , a = n.map( (e, t) => ({
                "@type": "ListItem",
                position: t + 1,
                item: {
                    "@id": "".concat("https://www.skygroup.jp/".replace(/.$/, "")).concat("/tech-blog/".replace(/.$/, "")).concat("/" === e.url ? e.url : e.url + "/"),
                    name: e.label
                }
            }));
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: '\n          {\n            "@context": "https://schema.org",\n            "@type": "BreadcrumbList",\n            "@id": "https://www.skygroup.jp/tech-blog/#/schema/BreadcrumbList",\n            "itemListElement": '.concat(JSON.stringify(a), "\n          }\n        ")
                    }
                }), (0,
                r.jsx)("ul", {
                    className: o().container,
                    itemType: "http://rdf.data-vocabulary.org/#",
                    children: n.map( (e, t) => (0,
                    r.jsxs)("li", {
                        className: "breadCrumb__item",
                        itemProp: "itemListElement",
                        itemScope: !0,
                        itemType: "http://schema.org/ListItem",
                        children: [n.length - 1 === t ? (0,
                        r.jsx)("span", {
                            itemProp: "name",
                            children: (0,
                            l.uz)(e.label)
                        }) : (0,
                        r.jsx)(i(), {
                            href: e.url,
                            itemProp: "url",
                            children: (0,
                            r.jsx)("span", {
                                itemProp: "name",
                                children: (0,
                                l.uz)(e.label)
                            })
                        }), (0,
                        r.jsx)("meta", {
                            itemProp: "position",
                            content: String(t + 1)
                        })]
                    }, e.label + t))
                })]
            })
        }
    },
    2489: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return ErrorAPI
            }
        });
        var r = n(2322);
        function ErrorAPI(e) {
            let {errors: t} = e;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)("p", {
                    children: ["申し訳ございません。", (0,
                    r.jsx)("br", {}), "エラーが発生しました。"]
                }), t.map( (e, t) => (0,
                r.jsxs)("p", {
                    children: [e.code, " : ", e.message]
                }, t))]
            })
        }
    },
    1196: function(e, t, n) {
        "use strict";
        var r = n(2322)
          , a = n(7729)
          , i = n.n(a)
          , s = n(5632);
        n(2784);
        var c = n(4568);
        t.Z = e => {
            let {title: t, description: n, url: a, image: o, canonical: l, isNoIndex: u} = e
              , d = (0,
            s.useRouter)()
              , g = t ? "".concat(t, "｜").concat(c.Z.SITE_TITLE) : c.Z.SITE_TITLE
              , p = n || c.Z.SITE_DESCRIPTION
              , h = a || c.Z.BASE_URL
              , m = o || c.Z.OGP_DEFAULT_IMAGE
              , _ = l || "".concat(c.Z.BASE_URL).concat(d.asPath.split("?")[0].slice(1));
            return (0,
            r.jsxs)(i(), {
                children: [(0,
                r.jsx)("title", {
                    children: g
                }), (0,
                r.jsx)("meta", {
                    name: "description",
                    content: p
                }), u && (0,
                r.jsx)("meta", {
                    name: "robots",
                    content: "noindex"
                }), (0,
                r.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary"
                }), (0,
                r.jsx)("meta", {
                    name: "twitter:site",
                    content: "@Sky_corporate"
                }), (0,
                r.jsx)("meta", {
                    name: "twitter:creator",
                    content: "@Sky_corporate"
                }), (0,
                r.jsx)("meta", {
                    property: "og:url",
                    content: h
                }), (0,
                r.jsx)("meta", {
                    property: "og:locale",
                    content: "ja_JP"
                }), (0,
                r.jsx)("meta", {
                    property: "og:type",
                    content: "article"
                }), (0,
                r.jsx)("meta", {
                    property: "og:title",
                    content: g
                }), (0,
                r.jsx)("meta", {
                    property: "og:site_name",
                    content: c.Z.SITE_TITLE
                }), (0,
                r.jsx)("meta", {
                    property: "og:description",
                    content: p
                }), (0,
                r.jsx)("meta", {
                    property: "og:image",
                    content: m
                }), (0,
                r.jsx)("meta", {
                    property: "og:image:width",
                    content: "1200"
                }), (0,
                r.jsx)("meta", {
                    property: "og:image:height",
                    content: "630"
                }), (0,
                r.jsx)("meta", {
                    property: "og:image:alt",
                    content: g
                }), (0,
                r.jsx)("link", {
                    rel: "canonical",
                    href: _
                })]
            })
        }
    },
    7043: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return SideBar
            }
        });
        var r = n(2322)
          , a = n(6577)
          , i = n.n(a)
          , s = n(2784)
          , c = n(4437)
          , o = n(2406)
          , l = n(1246)
          , u = n(2850);
        function RankingList() {
            let {result: e, isLoading: t} = (0,
            u.wh)("/tech-blog/api/ranking/");
            return t || (null == e ? void 0 : e.errors.length) || "list"in e == !1 ? null : (0,
            r.jsx)("nav", {
                children: e.list.map(e => (0,
                r.jsx)(l.Z, {
                    article: e
                }, e.topics_id))
            })
        }
        var d = n(9822)
          , g = n.n(d)
          , p = n(4310)
          , h = n.n(p)
          , m = n(2427)
          , _ = n(3838);
        function SideBarTagList() {
            let[e,t] = (0,
            s.useState)(!1);
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("div", {
                    className: "".concat(h().toggleContent, " ").concat(e ? "open" : ""),
                    children: (0,
                    r.jsx)(m.Z, {})
                }), (0,
                r.jsx)("div", {
                    className: "".concat(h().toggleButton, " ").concat(e ? "open" : ""),
                    children: (0,
                    r.jsxs)(_.Z, {
                        variant: "border",
                        size: "sm",
                        width: "full",
                        onClick: () => {
                            t(!e)
                        }
                        ,
                        children: [(0,
                        r.jsx)(o.Z, {
                            src: "".concat("https://www.skygroup.jp/", "tech-blog-assets/images/icon_arrow_down.svg"),
                            color: "blue",
                            className: h().icon
                        }), (0,
                        r.jsx)("span", {
                            className: h().label
                        })]
                    })
                })]
            })
        }
        let SKYPCEBanner = () => (0,
        r.jsx)("a", {
            href: "https://www.skypce.net/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: g().product,
            children: (0,
            r.jsx)(i(), {
                src: "https://ownedmedia-blog-skygroup.g.kuroco-img.app/files/user/ownedMedia_blog/products/banners/skypce.jpg?format=webp&quality=100&width=500",
                width: "500",
                height: "400",
                alt: "SKYPCE"
            })
        });
        function SideBar() {
            let e = (0,
            s.useRef)(null);
            return (0,
            s.useEffect)( () => {
                if (!e.current)
                    return;
                let t = e.current
                  , toggleSticky = () => {
                    window.innerHeight >= t.offsetHeight ? (t.classList.add(g().top),
                    t.classList.remove(g().bottom)) : (t.classList.remove(g().top),
                    t.classList.add(g().bottom))
                }
                ;
                window.addEventListener("resize", toggleSticky);
                let n = new MutationObserver(toggleSticky);
                return n.observe(t, {
                    childList: !0,
                    subtree: !0
                }),
                toggleSticky(),
                () => {
                    window.removeEventListener("resize", toggleSticky),
                    n.disconnect()
                }
            }
            , []),
            (0,
            r.jsxs)("aside", {
                className: g().container,
                ref: e,
                children: [(0,
                r.jsx)("div", {
                    className: g().bannerTop,
                    children: (0,
                    r.jsx)(SKYPCEBanner, {})
                }), (0,
                r.jsxs)("div", {
                    children: [(0,
                    r.jsx)("span", {
                        className: g().heading,
                        children: "カテゴリー"
                    }), (0,
                    r.jsx)(c.Z, {})]
                }), (0,
                r.jsxs)("div", {
                    children: [(0,
                    r.jsx)("span", {
                        className: g().heading,
                        children: "タグ"
                    }), (0,
                    r.jsx)(SideBarTagList, {})]
                }), (0,
                r.jsxs)("div", {
                    children: [(0,
                    r.jsxs)("span", {
                        className: g().heading,
                        children: ["人気の記事", (0,
                        r.jsx)("small", {
                            children: "（過去7日間）"
                        })]
                    }), (0,
                    r.jsx)(RankingList, {})]
                }), (0,
                r.jsxs)("div", {
                    className: g().bannerBottom,
                    children: [(0,
                    r.jsx)(SKYPCEBanner, {}), (0,
                    r.jsx)("a", {
                        href: "https://www.sky-recruit.jp/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0,
                        r.jsx)(i(), {
                            src: "https://tech-blog-skygroup.g.kuroco-img.app/files/user/banners/image_recruit.webp?format=webp&quality=100&width=500",
                            width: "500",
                            height: "400",
                            alt: "Ｓｋｙ株式会社 新卒採用"
                        })
                    }), (0,
                    r.jsx)("a", {
                        href: "https://www.sky-career.jp/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0,
                        r.jsx)(i(), {
                            src: "https://tech-blog-skygroup.g.kuroco-img.app/files/user/banners/image_recruit_career.webp?format=webp&quality=100&width=500",
                            width: "500",
                            height: "400",
                            alt: "Ｓｋｙ株式会社 キャリア採用"
                        })
                    })]
                }), (0,
                r.jsx)("div", {
                    children: (0,
                    r.jsxs)(_.Z, {
                        tag: "a",
                        bg: "orange",
                        size: "sm",
                        href: "".concat("/tech-blog/", "news.xml"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [(0,
                        r.jsx)(o.Z, {
                            src: "".concat("https://www.skygroup.jp/", "tech-blog-assets/images/icon_rss.svg"),
                            color: "white"
                        }), "RSS"]
                    })
                })]
            })
        }
    },
    8161: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return Thumbnail
            }
        });
        var r = n(2322)
          , a = n(6577)
          , i = n.n(a)
          , s = n(7221)
          , c = n.n(s)
          , o = n(8368);
        function Thumbnail(e) {
            var t, n;
            let {article: a, priority: s=!1} = e
              , l = null !== (n = null === (t = a.thumbnail_color) || void 0 === t ? void 0 : t.color) && void 0 !== n ? n : "blue";
            return a.thumbnail.url ? (0,
            r.jsx)(i(), {
                src: a.thumbnail.url,
                width: "960",
                height: "504",
                alt: a.subject,
                quality: 80,
                priority: s,
                className: c().image
            }) : (0,
            r.jsxs)("div", {
                className: c().container,
                children: [(0,
                r.jsx)(i(), {
                    src: "".concat("https://www.skygroup.jp/", "tech-blog-assets/images/thumbnails/thumbnail_bg_").concat(l, ".webp"),
                    width: "960",
                    height: "504",
                    alt: "",
                    quality: 80,
                    priority: s,
                    className: c().bg
                }), (0,
                r.jsx)(i(), {
                    src: "".concat("https://www.skygroup.jp/", "tech-blog-assets/images/logo_wt.svg"),
                    width: "235",
                    height: "40",
                    alt: "Sky Tech Blog",
                    className: c().logo
                }), (0,
                r.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        o.d)(a.subject)
                    }
                })]
            })
        }
    },
    7252: function(e, t, n) {
        "use strict";
        n.d(t, {
            Ev: function() {
                return removeBreakChar
            },
            uz: function() {
                return removeBrTag
            }
        });
        let removeBreakChar = e => e ? e.replace(/\r\n/g, "") : ""
          , removeBrTag = e => e.replace(/<br>|<br \/>/g, "")
    },
    8368: function(e, t, n) {
        "use strict";
        n.d(t, {
            d: function() {
                return parseWakachigakiWord
            },
            i: function() {
                return parseWakachigakiHeading
            }
        });
        var r = n(4595);
        let parseWakachigakiHeading = e => {
            let t = add(e, 2);
            return t = add(t, 3),
            t = add(t, 4),
            t = add(t, 5)
        }
          , parseWakachigakiWord = e => {
            let t = (0,
            r.D4)();
            return t.translateHTMLString(e)
        }
          , add = (e, t) => {
            let n = (0,
            r.D4)()
              , a = RegExp("(<h".concat(t, "(?: .+?)?>)(.*?)(</h").concat(t, ">)"), "g");
            return e.replace(a, (e, t, r, a) => "".concat(t).concat(n.translateHTMLString(r)).concat(a))
        }
    },
    6573: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSP: function() {
                return Y
            },
            default: function() {
                return Index
            }
        });
        var r = n(2322)
          , a = n(6577)
          , i = n.n(a)
          , s = n(9097)
          , c = n.n(s)
          , o = n(5632)
          , l = n(4568)
          , u = n(2784)
          , d = n(3923)
          , g = n(3054)
          , p = n.n(g)
          , h = n(2314)
          , m = n(3289)
          , _ = n.n(m)
          , j = n(7308)
          , w = n.n(j)
          , x = n(6068)
          , f = n.n(x)
          , b = n(388)
          , y = n.n(b)
          , v = n(7216)
          , k = n.n(v);
        function Toc(e) {
            let {html: t} = e
              , [n,a] = (0,
            u.useState)();
            return (0,
            u.useEffect)( () => {
                let e = document.createElement("div");
                e.innerHTML = t,
                a(e.querySelectorAll("h2"))
            }
            , [t]),
            (0,
            r.jsx)(r.Fragment, {
                children: (null == n ? void 0 : n.length) > 0 && (0,
                r.jsxs)("div", {
                    className: k().container,
                    children: [(0,
                    r.jsx)("p", {
                        children: "目次"
                    }), (0,
                    r.jsx)("ul", {
                        children: Array.from(n).map(e => (0,
                        r.jsx)("li", {
                            children: (0,
                            r.jsx)("a", {
                                href: "#".concat(encodeURIComponent(e.getAttribute("id"))),
                                children: e.textContent
                            })
                        }, e.textContent))
                    })]
                })
            })
        }
        var S = n(3563)
          , T = n.n(S);
        n(350);
        var L = n(8368)
          , E = n(5224);
        n(8014);
        let useImageZoomer = (e, t) => {
            (0,
            u.useEffect)( () => {
                if (!e)
                    return;
                let t = e.querySelectorAll(".zoom")
                  , r = [];
                return t.forEach( (e, t) => {
                    if ("true" === e.dataset.initialized)
                        return;
                    e.dataset.initialized = "true";
                    let a = new Image;
                    a.addEventListener("load", () => {
                        e.outerHTML = '<div class="zoom'.concat(t, ' zoomContainer"><a href="').concat(e.getAttribute("src"), '" data-pswp-width="').concat(e.naturalWidth, '" data-pswp-height="').concat(e.naturalHeight, '">').concat(e.outerHTML, "</a></div>");
                        let a = new E.Z({
                            gallery: ".zoom".concat(t),
                            children: "a",
                            zoom: !1,
                            bgOpacity: .75,
                            mainClass: "pswp-overwrite",
                            tapAction: "close",
                            closeSVG: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.886 15.9997L25.8193 8.06637C26.3407 7.54504 26.3407 6.70237 25.8193 6.18104C25.298 5.65971 24.4553 5.65971 23.934 6.18104L16.0007 14.1144L8.06735 6.18104C7.54602 5.65971 6.70335 5.65971 6.18202 6.18104C5.66068 6.70237 5.66068 7.54504 6.18202 8.06637L14.1153 15.9997L6.18202 23.933C5.66068 24.4544 5.66068 25.297 6.18202 25.8184C6.44202 26.0784 6.78335 26.209 7.12468 26.209C7.46602 26.209 7.80735 26.0784 8.06735 25.8184L16.0007 17.885L23.934 25.8184C24.194 26.0784 24.5353 26.209 24.8767 26.209C25.218 26.209 25.5593 26.0784 25.8193 25.8184C26.3407 25.297 26.3407 24.4544 25.8193 23.933L17.886 15.9997Z" fill="#fff"/>',
                            pswpModule: () => n.e(554).then(n.bind(n, 6103))
                        });
                        a.init(),
                        a.on("change", () => {
                            var e;
                            null === (e = document.querySelector(".pswp__button--close")) || void 0 === e || e.removeAttribute("title")
                        }
                        ),
                        r.push(a)
                    }
                    , {
                        once: !0
                    }),
                    a.src = e.getAttribute("src")
                }
                ),
                () => {
                    r.forEach(e => e.destroy())
                }
            }
            , [e, t])
        }
          , useRelatedBlock = (e, t) => {
            (0,
            u.useEffect)( () => {
                if (!e)
                    return;
                let t = new IntersectionObserver(async e => {
                    e.forEach(async e => {
                        var n, r, a;
                        let i;
                        let s = e.target;
                        if (!e.isIntersecting)
                            return;
                        t.unobserve(s);
                        let c = await fetch("/tech-blog/api/ogp/", {
                            method: "POST",
                            body: s.dataset.relatedArticleUrl
                        });
                        try {
                            i = await c.json()
                        } catch (e) {
                            s.remove();
                            return
                        }
                        if (i.errors.length > 0) {
                            s.remove();
                            return
                        }
                        let o = i.details;
                        if (!o.requestUrl || !o.ogTitle) {
                            s.remove();
                            return
                        }
                        null === (n = s.querySelector(".subject")) || void 0 === n || n.setAttribute("href", o.requestUrl),
                        s.querySelector(".subject").textContent = o.ogTitle,
                        s.querySelector(".thumbnail").innerHTML = (null === (r = o.ogImage) || void 0 === r ? void 0 : r.length) > 0 ? '<div class="ogp" style="background-image: url('.concat(o.ogImage[0].url, ');"></div>') : '<p class="empty">No image.</p>',
                        s.querySelector(".description").textContent = null !== (a = o.ogDescription) && void 0 !== a ? a : "",
                        s.classList.remove("related--skeleton")
                    }
                    )
                }
                )
                  , n = e.querySelectorAll(".related");
                return n.forEach(e => {
                    e.dataset.relatedArticleUrl && t.observe(e)
                }
                ),
                () => {
                    t.disconnect()
                }
            }
            , [e, t])
        }
          , useSourceCopier = (e, t) => {
            let n = "Copy"
              , r = (0,
            u.useRef)([])
              , copy = async e => {
                let t = e.currentTarget;
                try {
                    var a;
                    await navigator.clipboard.writeText(null === (a = t.nextElementSibling) || void 0 === a ? void 0 : a.textContent)
                } catch (e) {
                    return
                }
                t.textContent = "Copied!",
                t.classList.add("copied");
                let i = window.setTimeout( () => {
                    t.textContent = n,
                    t.classList.remove("copied"),
                    r.current = r.current.filter(e => e !== i)
                }
                , 1e3);
                r.current.push(i)
            }
              , a = (0,
            u.useCallback)(e => {
                let t = document.createElement("button");
                t.textContent = n,
                t.classList.add("copyButton"),
                e.prepend(t),
                t.addEventListener("click", copy)
            }
            , []);
            (0,
            u.useEffect)( () => {
                if (!e)
                    return;
                let t = e.querySelectorAll(".source");
                return t.forEach(e => {
                    "true" !== e.dataset.initialized && (e.dataset.initialized = "true",
                    a(e))
                }
                ),
                () => {
                    r.current.forEach(e => clearTimeout(e))
                }
            }
            , [e, t, a])
        }
          , initHljs = () => {
            d.Z.listLanguages().forEach(e => d.Z.unregisterLanguage(e)),
            d.Z.registerLanguage("c", n(6958)),
            d.Z.registerLanguage("css", n(913)),
            d.Z.registerLanguage("go", n(2454)),
            d.Z.registerLanguage("java", n(7788)),
            d.Z.registerLanguage("javascript", n(6029)),
            d.Z.registerLanguage("json", n(4314)),
            d.Z.registerLanguage("kotlin", n(2234)),
            d.Z.registerLanguage("markdown", n(246)),
            d.Z.registerLanguage("php", n(6707)),
            d.Z.registerLanguage("python", n(3542)),
            d.Z.registerLanguage("ruby", n(3718)),
            d.Z.registerLanguage("rust", n(127)),
            d.Z.registerLanguage("swift", n(2632)),
            d.Z.registerLanguage("txt", n(5869)),
            d.Z.registerLanguage("typescript", n(9530)),
            d.Z.registerLanguage("xml", n(4296))
        }
        ;
        function Article(e) {
            var t;
            let {article: a} = e
              , i = n(187)
              , {html5Media: s} = n(3026)
              , c = n(6220)
              , o = n(6753);
            initHljs();
            let l = new (p())({
                html: !0,
                highlight: (e, t) => {
                    try {
                        let n = 0 === t.length ? d.Z.highlightAuto(e).value : d.Z.highlight(e, {
                            language: t,
                            ignoreIllegals: !0
                        }).value;
                        return '<pre><code class="hljs">'.concat(n, "</code></pre>")
                    } catch (e) {
                        return ""
                    }
                }
            }).use(w()).use(_()).use(y()).use(h.Z, {
                level: [2],
                slugify: e => encodeURIComponent(e)
            }).use(f(), {
                rowspan: !0,
                headerless: !0
            }).use(i).use(s, {
                videoAttrs: 'playsinline controls preload="metadata"'
            }).use(c).use(o)
              , g = (0,
            L.i)(l.render(a.body))
              , [m,j] = (0,
            u.useState)(null);
            return useImageZoomer(m, String(a.topics_id)),
            useSourceCopier(m, String(a.topics_id)),
            useRelatedBlock(m, String(a.topics_id)),
            (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("p", {
                    className: T().description,
                    children: a.description
                }), (null === (t = a.toc) || void 0 === t ? void 0 : t.length) > 0 && (0,
                r.jsx)(Toc, {
                    html: g
                }), (0,
                r.jsx)("div", {
                    className: "".concat(T().content, " articleContent"),
                    dangerouslySetInnerHTML: {
                        __html: g
                    },
                    ref: e => j(e)
                })]
            })
        }
        var Z = n(6414)
          , C = n(4462)
          , N = n(5380)
          , B = n(2489)
          , I = n(1196)
          , A = n(2406)
          , P = n(7043)
          , q = n(9367)
          , H = n.n(q)
          , D = n(8161)
          , M = n(9510)
          , R = n(3838)
          , O = n(9699)
          , z = n(7252)
          , F = n(2126)
          , U = n.n(F)
          , G = n(2902)
          , W = n.n(G)
          , Y = !0;
        function Index(e) {
            let {articleResult: t} = e
              , n = (0,
            o.useRouter)()
              , a = t.details;
            if (t.errors.length > 0)
                return (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(I.Z, {}), (0,
                    r.jsx)(B.Z, {
                        errors: t.errors
                    })]
                });
            if (!a)
                return (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(I.Z, {}), (0,
                    r.jsx)(Z.Z, {})]
                });
            let s = a.update_system ? a.update_system.split("T")[0] : ""
              , u = new Date(a.date).getTime() >= new Date(s).getTime() ? null : a.update_date.length ? a.update_date : s.length ? s : null
              , d = (0,
            z.uz)("".concat(a.subject))
              , g = (0,
            z.Ev)(a.description);
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(I.Z, {
                    title: d,
                    description: g,
                    url: "".concat(l.Z.BASE_URL).concat(n.asPath.slice(1)),
                    image: a.thumbnail ? a.thumbnail.url : void 0
                }), (0,
                r.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: '\n          {\n            "@context": "https://schema.org/",\n            "@type": "Article",\n            "headline": "'.concat(d, "｜").concat(l.Z.SITE_TITLE, '",\n            "datePublished": "').concat(new Date(a.date).toISOString(), '",\n            "dateModified ": "').concat(u ? new Date(u).toISOString() : new Date(a.date).toISOString(), '",\n            "description": "').concat(g, '",\n            "author": "Ｓｋｙ株式会社"\n          }\n        ')
                    }
                }), (0,
                r.jsxs)("main", {
                    className: W().main,
                    children: [(0,
                    r.jsx)("div", {
                        className: W().header,
                        children: (0,
                        r.jsx)(C.Z, {
                            pageLocations: [{
                                label: "".concat(a.category_nm),
                                url: "/category/".concat(String(a.category_id))
                            }, {
                                label: "".concat(a.subject),
                                url: "/article/".concat(String(n.query.id))
                            }]
                        })
                    }), (0,
                    r.jsxs)("div", {
                        className: "".concat(W().content, " ").concat(W().article),
                        children: [(0,
                        r.jsxs)("div", {
                            className: U().container,
                            children: [(0,
                            r.jsxs)("article", {
                                className: U().article,
                                children: [(0,
                                r.jsx)(D.Z, {
                                    article: a,
                                    priority: !0
                                }), (0,
                                r.jsxs)("div", {
                                    className: U().articleContainer,
                                    children: [(0,
                                    r.jsxs)("hgroup", {
                                        className: U().header,
                                        children: [(0,
                                        r.jsxs)("div", {
                                            className: U().info,
                                            children: [(0,
                                            r.jsx)(M.Z, {
                                                href: "/category/".concat(a.category_id),
                                                className: U().category,
                                                label: a.category_nm,
                                                tag: c()
                                            }), (0,
                                            r.jsx)(N.Z, {
                                                date: a.date
                                            })]
                                        }), (0,
                                        r.jsx)("h1", {
                                            className: U().subject,
                                            dangerouslySetInnerHTML: {
                                                __html: (0,
                                                L.d)(a.subject)
                                            }
                                        })]
                                    }), (0,
                                    r.jsx)(Article, {
                                        article: a
                                    }), (0,
                                    r.jsx)("hr", {
                                        className: U().splitter
                                    }), a.tags.length > 0 && (0,
                                    r.jsx)("ul", {
                                        className: "".concat(H().container, " ").concat(U().tag),
                                        children: a.tags.map(e => (0,
                                        r.jsx)("li", {
                                            className: H().item,
                                            children: (0,
                                            r.jsx)(O.Z, {
                                                label: e.tag_nm,
                                                id: e.tag_id
                                            })
                                        }, e.tag_id))
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: U().socialButtonContainer,
                                        children: [(0,
                                        r.jsx)("a", {
                                            href: "https://twitter.com/intent/tweet?url=https://www.skygroup.jp/tech-blog/article/".concat(a.topics_id, "/&text=").concat(a.subject, "｜").concat(l.Z.SITE_TITLE),
                                            target: "_blank",
                                            rel: "noopener",
                                            children: (0,
                                            r.jsx)(i(), {
                                                src: "".concat("https://www.skygroup.jp/", "tech-blog-assets/images/icon_x.svg"),
                                                width: "24",
                                                height: "24",
                                                alt: "X"
                                            })
                                        }), (0,
                                        r.jsx)("a", {
                                            href: "http://www.facebook.com/share.php?u=https://www.skygroup.jp/tech-blog/article/".concat(a.topics_id, "/"),
                                            target: "_blank",
                                            rel: "noopener",
                                            children: (0,
                                            r.jsx)(i(), {
                                                src: "".concat("https://www.skygroup.jp/", "tech-blog-assets/images/icon_facebook.svg"),
                                                width: "24",
                                                height: "24",
                                                alt: "Facebook"
                                            })
                                        }), (0,
                                        r.jsx)("a", {
                                            href: "https://social-plugins.line.me/lineit/share?url=https://www.skygroup.jp/tech-blog/article/".concat(a.topics_id, "/"),
                                            target: "_blank",
                                            rel: "noopener",
                                            children: (0,
                                            r.jsx)(i(), {
                                                src: "".concat("https://www.skygroup.jp/", "tech-blog-assets/images/icon_line.svg"),
                                                width: "24",
                                                height: "24",
                                                alt: "LINE"
                                            })
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: U().careerBannerContainer,
                                        children: [(0,
                                        r.jsx)(i(), {
                                            src: "https://www.sky-career.jp/common/img/ogp_img.jpg",
                                            width: "1200",
                                            height: "630",
                                            alt: "",
                                            className: U().thumbnail
                                        }), (0,
                                        r.jsxs)("div", {
                                            className: U().content,
                                            children: [(0,
                                            r.jsx)("a", {
                                                href: "https://www.sky-career.jp/",
                                                className: U().subject,
                                                children: "キャリア採用募集中！"
                                            }), (0,
                                            r.jsx)("p", {
                                                className: U().description,
                                                children: "入社後にスキルアップを目指す若手の方も、ご自身の経験を幅広いフィールドで生かしたいベテランの方も、お一人おひとりの経験に応じたキャリア採用を行っています。"
                                            })]
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: U().inquiryContainer,
                                        children: ["Ｓｋｙ株式会社のソフトウェア開発や製品、採用に関するお問い合わせについては、下記のリンクをご確認ください。", (0,
                                        r.jsx)("div", {
                                            className: U().inquiryButtonContainer,
                                            children: (0,
                                            r.jsxs)(R.Z, {
                                                tag: "a",
                                                href: "https://www.skygroup.jp/inquiry/",
                                                target: "_blank",
                                                rel: "noopener",
                                                children: [(0,
                                                r.jsx)(A.Z, {
                                                    src: "".concat("https://www.skygroup.jp/", "tech-blog-assets/images/icon_mail.svg"),
                                                    color: "white"
                                                }), "お問い合わせ"]
                                            })
                                        })]
                                    })]
                                })]
                            }), (0,
                            r.jsx)("div", {
                                className: U().backHomeButtonContainer,
                                children: (0,
                                r.jsx)(c(), {
                                    href: "/",
                                    className: U().backHomeButton,
                                    children: "ホーム"
                                })
                            })]
                        }), (0,
                        r.jsx)(P.Z, {})]
                    })]
                })]
            })
        }
    },
    6753: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        e.exports = function(e) {
            e.core.ruler.push("source_fence", function(e) {
                var t, n = e.tokens;
                if (n)
                    return t = [],
                    n.forEach(function(n, r) {
                        var a, i = !1;
                        "fence" === n.type && (n.nesting = -1,
                        (a = new e.Token("div_open","div",1)).attrJoin("class", "source"),
                        t.push(a),
                        i = !0),
                        t.push(n),
                        i && t.push(new e.Token("div_close","/div",1))
                    }),
                    t.forEach(function(e, t) {
                        n[t] = e
                    }),
                    !0
            })
        }
    },
    6220: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        e.exports = function(e) {
            e.core.ruler.push("related_block", function(e) {
                var t = e.tokens;
                if (!t)
                    return !1;
                for (var n, r, a, i, s, c, o, l, u = 0, d = t.length; u < d && !(d - 2 <= u); u++)
                    if ("paragraph_open" === t[u].type && t[u + 1].content.match(/^\$related:http.*/) && !t[u + 1].content.match(/\n/) && "paragraph_close" === t[u + 2].type && (i = t[u + 1].content.split("related:")[1],
                    t[u].type = "div_open",
                    t[u].tag = "div",
                    t[u].attrSet("class", "related related--skeleton"),
                    t[u].attrSet("data-related-article-url", i),
                    t[u + 2].type = "div_close",
                    t[u + 2].tag = "div",
                    p = t[u + 1].children,
                    (n = new e.Token("div_open","div",1)).attrSet("class", "thumbnail"),
                    r = new e.Token("div_close","div",-1),
                    (g = new e.Token("div_open","div",1)).attrSet("class", "content"),
                    j = new e.Token("div_close","div",-1),
                    (a = new e.Token("a_open","a",1)).attrSet("href", i),
                    a.attrSet("class", "subject"),
                    (i = new e.Token("text","",0)).content = "...",
                    s = new e.Token("a_open","a",-1),
                    (c = new e.Token("paragraph_open","p",1)).attrSet("class", "description"),
                    (o = new e.Token("text","",0)).content = "...",
                    l = new e.Token("paragraph_close","p",-1),
                    p[0] = n,
                    p[1] = r,
                    p[2] = g,
                    p[3] = a,
                    p[4] = i,
                    p[5] = s,
                    p[6] = c,
                    p[7] = o,
                    p[8] = l,
                    p[9] = j),
                    "paragraph_open" === t[u].type && t[u + 1].content.match(/^\$related:\[.*\]\(http.*\)/) && "paragraph_close" === t[u + 2].type) {
                        t[u].type = "div_open",
                        t[u].tag = "div",
                        t[u].attrSet("class", "related"),
                        t[u + 2].type = "div_close",
                        t[u + 2].tag = "div";
                        var g, p = t[u + 1].children;
                        (g = new e.Token("div_open","div",1)).attrSet("class", "content"),
                        p[0] = g,
                        p[1].attrSet("class", "subject");
                        for (var h, m = 0, _ = p.length; m < _; m++)
                            "softbreak" === p[m].type && ((h = p[m]).type = "paragraph_open",
                            h.tag = "p",
                            h.nesting = 1,
                            h.attrSet("class", "description"),
                            p.push(new e.Token("paragraph_close","p",-1)));
                        var j = new e.Token("div_close","div",-1);
                        p.push(j)
                    }
                return !0
            })
        }
    },
    3563: function(e) {
        e.exports = {
            content: "ArticleContent_content__Jl_oy",
            description: "ArticleContent_description__6gp_k"
        }
    },
    1678: function(e) {
        e.exports = {
            container: "Breadcrumb_container__nRDbb"
        }
    },
    4310: function(e) {
        e.exports = {
            toggleContent: "SideBarTagList_toggleContent__2q32t",
            toggleButton: "SideBarTagList_toggleButton__EOw7o",
            label: "SideBarTagList_label__SfFG_",
            icon: "SideBarTagList_icon__GfK_N"
        }
    },
    7221: function(e) {
        e.exports = {
            image: "Thumbnail_image__0tytg",
            container: "Thumbnail_container__xc_32",
            bg: "Thumbnail_bg___TOI5",
            logo: "Thumbnail_logo__PKPYX"
        }
    },
    7216: function(e) {
        e.exports = {
            container: "Toc_container__Wg11h"
        }
    },
    2126: function(e) {
        e.exports = {
            container: "article_container__KtPYo",
            article: "article_article__H39yO",
            articleContainer: "article_articleContainer__Sng5L",
            header: "article_header__ByQ7F",
            info: "article_info__igw1n",
            splitter: "article_splitter__6yysb",
            backHomeButtonContainer: "article_backHomeButtonContainer__oVNx5",
            backHomeButton: "article_backHomeButton__Ji3dw",
            inquiryContainer: "article_inquiryContainer__p_Ct3",
            inquiryButtonContainer: "article_inquiryButtonContainer__jH8h7",
            socialButtonContainer: "article_socialButtonContainer__Xr1zB",
            careerBannerContainer: "article_careerBannerContainer__Yy_NM",
            thumbnail: "article_thumbnail__Q0A3a",
            content: "article_content__oQitd",
            subject: "article_subject__q96yw",
            description: "article_description__nBgZS"
        }
    },
    2902: function(e) {
        e.exports = {
            main: "container_main__I8xnA",
            header: "container_header__r_ZYZ",
            content: "container_content__e_XG_",
            cardList: "container_cardList__jNccW",
            home: "container_home__wmFa4",
            article: "container_article__cF6pb"
        }
    }
}, function(e) {
    e.O(0, [595, 131, 774, 888, 179], function() {
        return e(e.s = 8899)
    }),
    _N_E = e.O()
}
]);
