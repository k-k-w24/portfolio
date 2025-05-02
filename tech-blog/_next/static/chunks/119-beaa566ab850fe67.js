(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[119], {
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
    776: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return CardList
            }
        });
        var r = n(2322)
          , a = n(1055)
          , s = n.n(a)
          , i = n(9097)
          , c = n.n(i)
          , o = n(5997)
          , l = n.n(o)
          , d = n(5380)
          , g = n(9367)
          , h = n.n(g)
          , u = n(8161)
          , _ = n(9510)
          , p = n(9699);
        function NewBadge(e) {
            let {date: t} = e
              , n = new Date
              , a = t.getTime() + 2592e5 > n.getTime();
            return a ? (0,
            r.jsx)("div", {
                className: l().badge,
                children: (0,
                r.jsx)(_.Z, {
                    label: "NEW",
                    color: "orange"
                })
            }) : null
        }
        function Card(e) {
            let {article: t} = e;
            return (0,
            r.jsxs)("div", {
                className: l().container,
                children: [(0,
                r.jsxs)("div", {
                    className: l().thumbnailContainer,
                    children: [(0,
                    r.jsx)(u.Z, {
                        article: t
                    }), (0,
                    r.jsx)(NewBadge, {
                        date: new Date(t.date)
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: l().content,
                    children: [(0,
                    r.jsxs)("div", {
                        className: l().header,
                        children: [(0,
                        r.jsxs)("div", {
                            className: l().categoryAndDateContainer,
                            children: [(0,
                            r.jsx)("div", {
                                className: l().category,
                                children: (0,
                                r.jsx)(_.Z, {
                                    href: "/category/".concat(t.category_id),
                                    label: t.category_nm,
                                    tag: c()
                                })
                            }), (0,
                            r.jsx)(d.Z, {
                                date: t.date
                            })]
                        }), (0,
                        r.jsx)(c(), {
                            href: "/article/".concat(t.topics_id),
                            className: l().subject,
                            children: t.subject
                        })]
                    }), t.tags.length > 0 && (0,
                    r.jsx)("ul", {
                        className: h().container,
                        children: t.tags.map(e => (0,
                        r.jsx)("li", {
                            className: h().item,
                            children: (0,
                            r.jsx)(p.Z, {
                                label: e.tag_nm,
                                id: e.tag_id
                            })
                        }, e.tag_id))
                    })]
                })]
            })
        }
        function CardList(e) {
            let {articles: t} = e;
            return (0,
            r.jsx)("ul", {
                className: s().container,
                children: t.map(e => (0,
                r.jsx)("li", {
                    className: s().item,
                    children: (0,
                    r.jsx)(Card, {
                        article: e
                    })
                }, e.topics_id))
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
          , s = n.n(a)
          , i = n(5632);
        n(2784);
        var c = n(4568);
        t.Z = e => {
            let {title: t, description: n, url: a, image: o, canonical: l, isNoIndex: d} = e
              , g = (0,
            i.useRouter)()
              , h = t ? "".concat(t, "｜").concat(c.Z.SITE_TITLE) : c.Z.SITE_TITLE
              , u = n || c.Z.SITE_DESCRIPTION
              , _ = a || c.Z.BASE_URL
              , p = o || c.Z.OGP_DEFAULT_IMAGE
              , m = l || "".concat(c.Z.BASE_URL).concat(g.asPath.split("?")[0].slice(1));
            return (0,
            r.jsxs)(s(), {
                children: [(0,
                r.jsx)("title", {
                    children: h
                }), (0,
                r.jsx)("meta", {
                    name: "description",
                    content: u
                }), d && (0,
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
                    content: _
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
                    content: h
                }), (0,
                r.jsx)("meta", {
                    property: "og:site_name",
                    content: c.Z.SITE_TITLE
                }), (0,
                r.jsx)("meta", {
                    property: "og:description",
                    content: u
                }), (0,
                r.jsx)("meta", {
                    property: "og:image",
                    content: p
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
                    content: h
                }), (0,
                r.jsx)("link", {
                    rel: "canonical",
                    href: m
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
          , s = n.n(a)
          , i = n(2784)
          , c = n(4437)
          , o = n(2406)
          , l = n(1246)
          , d = n(2850);
        function RankingList() {
            let {result: e, isLoading: t} = (0,
            d.wh)("/tech-blog/api/ranking/");
            return t || (null == e ? void 0 : e.errors.length) || "list"in e == !1 ? null : (0,
            r.jsx)("nav", {
                children: e.list.map(e => (0,
                r.jsx)(l.Z, {
                    article: e
                }, e.topics_id))
            })
        }
        var g = n(9822)
          , h = n.n(g)
          , u = n(4310)
          , _ = n.n(u)
          , p = n(2427)
          , m = n(3838);
        function SideBarTagList() {
            let[e,t] = (0,
            i.useState)(!1);
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("div", {
                    className: "".concat(_().toggleContent, " ").concat(e ? "open" : ""),
                    children: (0,
                    r.jsx)(p.Z, {})
                }), (0,
                r.jsx)("div", {
                    className: "".concat(_().toggleButton, " ").concat(e ? "open" : ""),
                    children: (0,
                    r.jsxs)(m.Z, {
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
                            className: _().icon
                        }), (0,
                        r.jsx)("span", {
                            className: _().label
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
            className: h().product,
            children: (0,
            r.jsx)(s(), {
                src: "https://ownedmedia-blog-skygroup.g.kuroco-img.app/files/user/ownedMedia_blog/products/banners/skypce.jpg?format=webp&quality=100&width=500",
                width: "500",
                height: "400",
                alt: "SKYPCE"
            })
        });
        function SideBar() {
            let e = (0,
            i.useRef)(null);
            return (0,
            i.useEffect)( () => {
                if (!e.current)
                    return;
                let t = e.current
                  , toggleSticky = () => {
                    window.innerHeight >= t.offsetHeight ? (t.classList.add(h().top),
                    t.classList.remove(h().bottom)) : (t.classList.remove(h().top),
                    t.classList.add(h().bottom))
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
                className: h().container,
                ref: e,
                children: [(0,
                r.jsx)("div", {
                    className: h().bannerTop,
                    children: (0,
                    r.jsx)(SKYPCEBanner, {})
                }), (0,
                r.jsxs)("div", {
                    children: [(0,
                    r.jsx)("span", {
                        className: h().heading,
                        children: "カテゴリー"
                    }), (0,
                    r.jsx)(c.Z, {})]
                }), (0,
                r.jsxs)("div", {
                    children: [(0,
                    r.jsx)("span", {
                        className: h().heading,
                        children: "タグ"
                    }), (0,
                    r.jsx)(SideBarTagList, {})]
                }), (0,
                r.jsxs)("div", {
                    children: [(0,
                    r.jsxs)("span", {
                        className: h().heading,
                        children: ["人気の記事", (0,
                        r.jsx)("small", {
                            children: "（過去7日間）"
                        })]
                    }), (0,
                    r.jsx)(RankingList, {})]
                }), (0,
                r.jsxs)("div", {
                    className: h().bannerBottom,
                    children: [(0,
                    r.jsx)(SKYPCEBanner, {}), (0,
                    r.jsx)("a", {
                        href: "https://www.sky-recruit.jp/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0,
                        r.jsx)(s(), {
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
                        r.jsx)(s(), {
                            src: "https://tech-blog-skygroup.g.kuroco-img.app/files/user/banners/image_recruit_career.webp?format=webp&quality=100&width=500",
                            width: "500",
                            height: "400",
                            alt: "Ｓｋｙ株式会社 キャリア採用"
                        })
                    })]
                }), (0,
                r.jsx)("div", {
                    children: (0,
                    r.jsxs)(m.Z, {
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
          , s = n.n(a)
          , i = n(7221)
          , c = n.n(i)
          , o = n(8368);
        function Thumbnail(e) {
            var t, n;
            let {article: a, priority: i=!1} = e
              , l = null !== (n = null === (t = a.thumbnail_color) || void 0 === t ? void 0 : t.color) && void 0 !== n ? n : "blue";
            return a.thumbnail.url ? (0,
            r.jsx)(s(), {
                src: a.thumbnail.url,
                width: "960",
                height: "504",
                alt: a.subject,
                quality: 80,
                priority: i,
                className: c().image
            }) : (0,
            r.jsxs)("div", {
                className: c().container,
                children: [(0,
                r.jsx)(s(), {
                    src: "".concat("https://www.skygroup.jp/", "tech-blog-assets/images/thumbnails/thumbnail_bg_").concat(l, ".webp"),
                    width: "960",
                    height: "504",
                    alt: "",
                    quality: 80,
                    priority: i,
                    className: c().bg
                }), (0,
                r.jsx)(s(), {
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
    1055: function(e) {
        e.exports = {
            container: "CardList_container__yurhP",
            item: "CardList_item__R5gk_"
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
    5997: function(e) {
        e.exports = {
            container: "Card_container__YVntn",
            subject: "Card_subject__b8WBN",
            thumbnailContainer: "Card_thumbnailContainer__Keulw",
            badge: "Card_badge__xeVFS",
            category: "Card_category__B0CA8",
            content: "Card_content__0MdZj",
            header: "Card_header__gALAx",
            categoryAndDateContainer: "Card_categoryAndDateContainer__uoxU6"
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
}]);
