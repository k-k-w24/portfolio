(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[990], {
    6903: function() {},
    5330: function(e, t, i) {
        "use strict";
        i.d(t, {
            pt: function() {
                return Autoplay
            }
        });
        var s = i(3987);
        function Autoplay(e) {
            let t, i, r, n, a, l, o, d, u, p, {swiper: c, extendParams: h, on: f, emit: m, params: v} = e;
            c.autoplay = {
                running: !1,
                paused: !1,
                timeLeft: 0
            },
            h({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !1,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            });
            let g = v && v.autoplay ? v.autoplay.delay : 3e3
              , w = v && v.autoplay ? v.autoplay.delay : 3e3
              , S = new Date().getTime();
            function onTransitionEnd(e) {
                c && !c.destroyed && c.wrapperEl && e.target === c.wrapperEl && (c.wrapperEl.removeEventListener("transitionend", onTransitionEnd),
                !p && (!e.detail || !e.detail.bySwiperTouchMove) && resume())
            }
            let calcTimeLeft = () => {
                if (c.destroyed || !c.autoplay.running)
                    return;
                c.autoplay.paused ? n = !0 : n && (w = r,
                n = !1);
                let e = c.autoplay.paused ? r : S + w - new Date().getTime();
                c.autoplay.timeLeft = e,
                m("autoplayTimeLeft", e, e / g),
                i = requestAnimationFrame( () => {
                    calcTimeLeft()
                }
                )
            }
              , getSlideDelay = () => {
                let e;
                if (!(e = c.virtual && c.params.virtual.enabled ? c.slides.find(e => e.classList.contains("swiper-slide-active")) : c.slides[c.activeIndex]))
                    return;
                let t = parseInt(e.getAttribute("data-swiper-autoplay"), 10);
                return t
            }
              , run = e => {
                if (c.destroyed || !c.autoplay.running)
                    return;
                cancelAnimationFrame(i),
                calcTimeLeft();
                let s = void 0 === e ? c.params.autoplay.delay : e;
                g = c.params.autoplay.delay,
                w = c.params.autoplay.delay;
                let n = getSlideDelay();
                !Number.isNaN(n) && n > 0 && void 0 === e && (s = n,
                g = n,
                w = n),
                r = s;
                let a = c.params.speed
                  , proceed = () => {
                    c && !c.destroyed && (c.params.autoplay.reverseDirection ? !c.isBeginning || c.params.loop || c.params.rewind ? (c.slidePrev(a, !0, !0),
                    m("autoplay")) : c.params.autoplay.stopOnLastSlide || (c.slideTo(c.slides.length - 1, a, !0, !0),
                    m("autoplay")) : !c.isEnd || c.params.loop || c.params.rewind ? (c.slideNext(a, !0, !0),
                    m("autoplay")) : c.params.autoplay.stopOnLastSlide || (c.slideTo(0, a, !0, !0),
                    m("autoplay")),
                    c.params.cssMode && (S = new Date().getTime(),
                    requestAnimationFrame( () => {
                        run()
                    }
                    )))
                }
                ;
                return s > 0 ? (clearTimeout(t),
                t = setTimeout( () => {
                    proceed()
                }
                , s)) : requestAnimationFrame( () => {
                    proceed()
                }
                ),
                s
            }
              , start = () => {
                S = new Date().getTime(),
                c.autoplay.running = !0,
                run(),
                m("autoplayStart")
            }
              , stop = () => {
                c.autoplay.running = !1,
                clearTimeout(t),
                cancelAnimationFrame(i),
                m("autoplayStop")
            }
              , pause = (e, i) => {
                if (c.destroyed || !c.autoplay.running)
                    return;
                clearTimeout(t),
                e || (u = !0);
                let proceed = () => {
                    m("autoplayPause"),
                    c.params.autoplay.waitForTransition ? c.wrapperEl.addEventListener("transitionend", onTransitionEnd) : resume()
                }
                ;
                if (c.autoplay.paused = !0,
                i) {
                    d && (r = c.params.autoplay.delay),
                    d = !1,
                    proceed();
                    return
                }
                let s = r || c.params.autoplay.delay;
                r = s - (new Date().getTime() - S),
                c.isEnd && r < 0 && !c.params.loop || (r < 0 && (r = 0),
                proceed())
            }
              , resume = () => {
                c.isEnd && r < 0 && !c.params.loop || c.destroyed || !c.autoplay.running || (S = new Date().getTime(),
                u ? (u = !1,
                run(r)) : run(),
                c.autoplay.paused = !1,
                m("autoplayResume"))
            }
              , onVisibilityChange = () => {
                if (c.destroyed || !c.autoplay.running)
                    return;
                let e = (0,
                s.g)();
                "hidden" === e.visibilityState && (u = !0,
                pause(!0)),
                "visible" === e.visibilityState && resume()
            }
              , onPointerEnter = e => {
                "mouse" === e.pointerType && (u = !0,
                p = !0,
                c.animating || c.autoplay.paused || pause(!0))
            }
              , onPointerLeave = e => {
                "mouse" === e.pointerType && (p = !1,
                c.autoplay.paused && resume())
            }
              , attachMouseEvents = () => {
                c.params.autoplay.pauseOnMouseEnter && (c.el.addEventListener("pointerenter", onPointerEnter),
                c.el.addEventListener("pointerleave", onPointerLeave))
            }
              , detachMouseEvents = () => {
                c.el && "string" != typeof c.el && (c.el.removeEventListener("pointerenter", onPointerEnter),
                c.el.removeEventListener("pointerleave", onPointerLeave))
            }
              , attachDocumentEvents = () => {
                let e = (0,
                s.g)();
                e.addEventListener("visibilitychange", onVisibilityChange)
            }
              , detachDocumentEvents = () => {
                let e = (0,
                s.g)();
                e.removeEventListener("visibilitychange", onVisibilityChange)
            }
            ;
            f("init", () => {
                c.params.autoplay.enabled && (attachMouseEvents(),
                attachDocumentEvents(),
                start())
            }
            ),
            f("destroy", () => {
                detachMouseEvents(),
                detachDocumentEvents(),
                c.autoplay.running && stop()
            }
            ),
            f("_freeModeStaticRelease", () => {
                (l || u) && resume()
            }
            ),
            f("_freeModeNoMomentumRelease", () => {
                c.params.autoplay.disableOnInteraction ? stop() : pause(!0, !0)
            }
            ),
            f("beforeTransitionStart", (e, t, i) => {
                !c.destroyed && c.autoplay.running && (i || !c.params.autoplay.disableOnInteraction ? pause(!0, !0) : stop())
            }
            ),
            f("sliderFirstMove", () => {
                if (!c.destroyed && c.autoplay.running) {
                    if (c.params.autoplay.disableOnInteraction) {
                        stop();
                        return
                    }
                    a = !0,
                    l = !1,
                    u = !1,
                    o = setTimeout( () => {
                        u = !0,
                        l = !0,
                        pause(!0)
                    }
                    , 200)
                }
            }
            ),
            f("touchEnd", () => {
                if (!c.destroyed && c.autoplay.running && a) {
                    if (clearTimeout(o),
                    clearTimeout(t),
                    c.params.autoplay.disableOnInteraction) {
                        l = !1,
                        a = !1;
                        return
                    }
                    l && c.params.cssMode && resume(),
                    l = !1,
                    a = !1
                }
            }
            ),
            f("slideChange", () => {
                !c.destroyed && c.autoplay.running && (d = !0)
            }
            ),
            Object.assign(c.autoplay, {
                start,
                stop,
                pause,
                resume
            })
        }
        i(3455)
    },
    3987: function(e, t, i) {
        "use strict";
        function isObject(e) {
            return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
        }
        function extend(e, t) {
            void 0 === e && (e = {}),
            void 0 === t && (t = {});
            let i = ["__proto__", "constructor", "prototype"];
            Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                void 0 === e[i] ? e[i] = t[i] : isObject(t[i]) && isObject(e[i]) && Object.keys(t[i]).length > 0 && extend(e[i], t[i])
            }
            )
        }
        i.d(t, {
            a: function() {
                return getWindow
            },
            g: function() {
                return getDocument
            }
        });
        let s = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {}
            }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function getDocument() {
            let e = "undefined" != typeof document ? document : {};
            return extend(e, s),
            e
        }
        let r = {
            document: s,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({
                getPropertyValue: () => ""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(),
            null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };
        function getWindow() {
            let e = "undefined" != typeof window ? window : {};
            return extend(e, r),
            e
        }
    },
    3455: function(e, t, i) {
        "use strict";
        i.d(t, {
            a: function() {
                return elementParents
            },
            c: function() {
                return createElement
            },
            d: function() {
                return now
            },
            e: function() {
                return elementChildren
            },
            f: function() {
                return elementOuterSize
            },
            h: function() {
                return elementIndex
            },
            j: function() {
                return getTranslate
            },
            n: function() {
                return nextTick
            },
            p: function() {
                return elementStyle
            },
            q: function() {
                return elementNextAll
            },
            r: function() {
                return elementPrevAll
            },
            s: function() {
                return setCSSProperty
            },
            t: function() {
                return animateCSSModeScroll
            },
            u: function() {
                return showWarning
            },
            v: function() {
                return elementIsChildOf
            },
            w: function() {
                return function extend() {
                    let e = Object(arguments.length <= 0 ? void 0 : arguments[0])
                      , t = ["__proto__", "constructor", "prototype"];
                    for (let i = 1; i < arguments.length; i += 1) {
                        let s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                        if (null != s && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(s instanceof HTMLElement) : !s || 1 !== s.nodeType && 11 !== s.nodeType)) {
                            let i = Object.keys(Object(s)).filter(e => 0 > t.indexOf(e));
                            for (let t = 0, r = i.length; t < r; t += 1) {
                                let r = i[t]
                                  , n = Object.getOwnPropertyDescriptor(s, r);
                                void 0 !== n && n.enumerable && (isObject(e[r]) && isObject(s[r]) ? s[r].__swiper__ ? e[r] = s[r] : extend(e[r], s[r]) : !isObject(e[r]) && isObject(s[r]) ? (e[r] = {},
                                s[r].__swiper__ ? e[r] = s[r] : extend(e[r], s[r])) : e[r] = s[r])
                            }
                        }
                    }
                    return e
                }
            },
            x: function() {
                return deleteProps
            }
        });
        var s = i(3987);
        function deleteProps(e) {
            Object.keys(e).forEach(t => {
                try {
                    e[t] = null
                } catch (e) {}
                try {
                    delete e[t]
                } catch (e) {}
            }
            )
        }
        function nextTick(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        }
        function now() {
            return Date.now()
        }
        function getTranslate(e, t) {
            let i, r, n;
            void 0 === t && (t = "x");
            let a = (0,
            s.a)()
              , l = function(e) {
                let t;
                let i = (0,
                s.a)();
                return i.getComputedStyle && (t = i.getComputedStyle(e, null)),
                !t && e.currentStyle && (t = e.currentStyle),
                t || (t = e.style),
                t
            }(e);
            return a.WebKitCSSMatrix ? ((r = l.transform || l.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(e => e.replace(",", ".")).join(", ")),
            n = new a.WebKitCSSMatrix("none" === r ? "" : r)) : i = (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (r = a.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
            "y" === t && (r = a.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
            r || 0
        }
        function isObject(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }
        function setCSSProperty(e, t, i) {
            e.style.setProperty(t, i)
        }
        function animateCSSModeScroll(e) {
            let t, {swiper: i, targetPosition: r, side: n} = e, a = (0,
            s.a)(), l = -i.translate, o = null, d = i.params.speed;
            i.wrapperEl.style.scrollSnapType = "none",
            a.cancelAnimationFrame(i.cssModeFrameID);
            let u = r > l ? "next" : "prev"
              , isOutOfBound = (e, t) => "next" === u && e >= t || "prev" === u && e <= t
              , animate = () => {
                t = new Date().getTime(),
                null === o && (o = t);
                let e = Math.max(Math.min((t - o) / d, 1), 0)
                  , s = l + (.5 - Math.cos(e * Math.PI) / 2) * (r - l);
                if (isOutOfBound(s, r) && (s = r),
                i.wrapperEl.scrollTo({
                    [n]: s
                }),
                isOutOfBound(s, r)) {
                    i.wrapperEl.style.overflow = "hidden",
                    i.wrapperEl.style.scrollSnapType = "",
                    setTimeout( () => {
                        i.wrapperEl.style.overflow = "",
                        i.wrapperEl.scrollTo({
                            [n]: s
                        })
                    }
                    ),
                    a.cancelAnimationFrame(i.cssModeFrameID);
                    return
                }
                i.cssModeFrameID = a.requestAnimationFrame(animate)
            }
            ;
            animate()
        }
        function elementChildren(e, t) {
            void 0 === t && (t = "");
            let i = (0,
            s.a)()
              , r = [...e.children];
            return (i.HTMLSlotElement && e instanceof HTMLSlotElement && r.push(...e.assignedElements()),
            t) ? r.filter(e => e.matches(t)) : r
        }
        function elementIsChildOf(e, t) {
            let i = (0,
            s.a)()
              , r = t.contains(e);
            if (!r && i.HTMLSlotElement && t instanceof HTMLSlotElement) {
                let i = [...t.assignedElements()];
                (r = i.includes(e)) || (r = function(e, t) {
                    let i = [t];
                    for (; i.length > 0; ) {
                        let t = i.shift();
                        if (e === t)
                            return !0;
                        i.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
                    }
                }(e, t))
            }
            return r
        }
        function showWarning(e) {
            try {
                console.warn(e);
                return
            } catch (e) {}
        }
        function createElement(e, t) {
            var i;
            void 0 === t && (t = []);
            let s = document.createElement(e);
            return s.classList.add(...Array.isArray(t) ? t : (void 0 === (i = t) && (i = ""),
            i.trim().split(" ").filter(e => !!e.trim()))),
            s
        }
        function elementPrevAll(e, t) {
            let i = [];
            for (; e.previousElementSibling; ) {
                let s = e.previousElementSibling;
                t ? s.matches(t) && i.push(s) : i.push(s),
                e = s
            }
            return i
        }
        function elementNextAll(e, t) {
            let i = [];
            for (; e.nextElementSibling; ) {
                let s = e.nextElementSibling;
                t ? s.matches(t) && i.push(s) : i.push(s),
                e = s
            }
            return i
        }
        function elementStyle(e, t) {
            let i = (0,
            s.a)();
            return i.getComputedStyle(e, null).getPropertyValue(t)
        }
        function elementIndex(e) {
            let t, i = e;
            if (i) {
                for (t = 0; null !== (i = i.previousSibling); )
                    1 === i.nodeType && (t += 1);
                return t
            }
        }
        function elementParents(e, t) {
            let i = []
              , s = e.parentElement;
            for (; s; )
                t ? s.matches(t) && i.push(s) : i.push(s),
                s = s.parentElement;
            return i
        }
        function elementOuterSize(e, t, i) {
            let r = (0,
            s.a)();
            return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }
    },
    7702: function(e, t, i) {
        "use strict";
        let s, r, n;
        i.d(t, {
            tq: function() {
                return m
            },
            o5: function() {
                return v
            }
        });
        var a = i(2784)
          , l = i(3987)
          , o = i(3455);
        function getSupport() {
            return s || (s = function() {
                let e = (0,
                l.a)()
                  , t = (0,
                l.g)();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
                    touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()),
            s
        }
        function getDevice(e) {
            return void 0 === e && (e = {}),
            r || (r = function(e) {
                let {userAgent: t} = void 0 === e ? {} : e
                  , i = getSupport()
                  , s = (0,
                l.a)()
                  , r = s.navigator.platform
                  , n = t || s.navigator.userAgent
                  , a = {
                    ios: !1,
                    android: !1
                }
                  , o = s.screen.width
                  , d = s.screen.height
                  , u = n.match(/(Android);?[\s\/]+([\d.]+)?/)
                  , p = n.match(/(iPad).*OS\s([\d_]+)/)
                  , c = n.match(/(iPod)(.*OS\s([\d_]+))?/)
                  , h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                  , f = "MacIntel" === r;
                return !p && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && ((p = n.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]),
                f = !1),
                u && "Win32" !== r && (a.os = "android",
                a.android = !0),
                (p || h || c) && (a.os = "ios",
                a.ios = !0),
                a
            }(e)),
            r
        }
        function getBrowser() {
            return n || (n = function() {
                let e = (0,
                l.a)()
                  , t = getDevice()
                  , i = !1;
                function isSafari() {
                    let t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                }
                if (isSafari()) {
                    let t = String(e.navigator.userAgent);
                    if (t.includes("Version/")) {
                        let[e,s] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                        i = e < 16 || 16 === e && s < 2
                    }
                }
                let s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                  , r = isSafari()
                  , n = r || s && t.ios;
                return {
                    isSafari: i || r,
                    needPerspectiveFix: i,
                    need3dFix: n,
                    isWebView: s
                }
            }()),
            n
        }
        let toggleSlideClasses$1 = (e, t, i) => {
            t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
        }
          , toggleSlideClasses = (e, t, i) => {
            t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
        }
          , processLazyPreloader = (e, t) => {
            if (!e || e.destroyed || !e.params)
                return;
            let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (i) {
                let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame( () => {
                    i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && t.remove()
                }
                )),
                t && t.remove()
            }
        }
          , unlazy = (e, t) => {
            if (!e.slides[t])
                return;
            let i = e.slides[t].querySelector('[loading="lazy"]');
            i && i.removeAttribute("loading")
        }
          , preload = e => {
            if (!e || e.destroyed || !e.params)
                return;
            let t = e.params.lazyPreloadPrevNext
              , i = e.slides.length;
            if (!i || !t || t < 0)
                return;
            t = Math.min(t, i);
            let s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
              , r = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                let i = [r - t];
                i.push(...Array.from({
                    length: t
                }).map( (e, t) => r + s + t)),
                e.slides.forEach( (t, s) => {
                    i.includes(t.column) && unlazy(e, s)
                }
                );
                return
            }
            let n = r + s - 1;
            if (e.params.rewind || e.params.loop)
                for (let s = r - t; s <= n + t; s += 1) {
                    let t = (s % i + i) % i;
                    (t < r || t > n) && unlazy(e, t)
                }
            else
                for (let s = Math.max(r - t, 0); s <= Math.min(n + t, i - 1); s += 1)
                    s !== r && (s > n || s < r) && unlazy(e, s)
        }
        ;
        function transitionEmit(e) {
            let {swiper: t, runCallbacks: i, direction: s, step: r} = e
              , {activeIndex: n, previousIndex: a} = t
              , l = s;
            if (l || (l = n > a ? "next" : n < a ? "prev" : "reset"),
            t.emit(`transition${r}`),
            i && n !== a) {
                if ("reset" === l) {
                    t.emit(`slideResetTransition${r}`);
                    return
                }
                t.emit(`slideChangeTransition${r}`),
                "next" === l ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
            }
        }
        function preventEdgeSwipe(e, t, i) {
            let s = (0,
            l.a)()
              , {params: r} = e
              , n = r.edgeSwipeDetection
              , a = r.edgeSwipeThreshold;
            return !n || !(i <= a) && !(i >= s.innerWidth - a) || "prevent" === n && (t.preventDefault(),
            !0)
        }
        function onTouchStart(e) {
            let t = (0,
            l.g)()
              , i = e;
            i.originalEvent && (i = i.originalEvent);
            let s = this.touchEventsData;
            if ("pointerdown" === i.type) {
                if (null !== s.pointerId && s.pointerId !== i.pointerId)
                    return;
                s.pointerId = i.pointerId
            } else
                "touchstart" === i.type && 1 === i.targetTouches.length && (s.touchId = i.targetTouches[0].identifier);
            if ("touchstart" === i.type) {
                preventEdgeSwipe(this, i, i.targetTouches[0].pageX);
                return
            }
            let {params: r, touches: n, enabled: a} = this;
            if (!a || !r.simulateTouch && "mouse" === i.pointerType || this.animating && r.preventInteractionOnTransition)
                return;
            !this.animating && r.cssMode && r.loop && this.loopFix();
            let d = i.target;
            if ("wrapper" === r.touchEventsTarget && !(0,
            o.v)(d, this.wrapperEl) || "which"in i && 3 === i.which || "button"in i && i.button > 0 || s.isTouched && s.isMoved)
                return;
            let u = !!r.noSwipingClass && "" !== r.noSwipingClass
              , p = i.composedPath ? i.composedPath() : i.path;
            u && i.target && i.target.shadowRoot && p && (d = p[0]);
            let c = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`
              , h = !!(i.target && i.target.shadowRoot);
            if (r.noSwiping && (h ? function(e, t) {
                return void 0 === t && (t = this),
                function __closestFrom(t) {
                    if (!t || t === (0,
                    l.g)() || t === (0,
                    l.a)())
                        return null;
                    t.assignedSlot && (t = t.assignedSlot);
                    let i = t.closest(e);
                    return i || t.getRootNode ? i || __closestFrom(t.getRootNode().host) : null
                }(t)
            }(c, d) : d.closest(c))) {
                this.allowClick = !0;
                return
            }
            if (r.swipeHandler && !d.closest(r.swipeHandler))
                return;
            n.currentX = i.pageX,
            n.currentY = i.pageY;
            let f = n.currentX
              , m = n.currentY;
            if (!preventEdgeSwipe(this, i, f))
                return;
            Object.assign(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }),
            n.startX = f,
            n.startY = m,
            s.touchStartTime = (0,
            o.d)(),
            this.allowClick = !0,
            this.updateSize(),
            this.swipeDirection = void 0,
            r.threshold > 0 && (s.allowThresholdMove = !1);
            let v = !0;
            d.matches(s.focusableElements) && (v = !1,
            "SELECT" === d.nodeName && (s.isTouched = !1)),
            t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== d && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !d.matches(s.focusableElements)) && t.activeElement.blur();
            let g = v && this.allowTouchMove && r.touchStartPreventDefault;
            (r.touchStartForcePreventDefault || g) && !d.isContentEditable && i.preventDefault(),
            r.freeMode && r.freeMode.enabled && this.freeMode && this.animating && !r.cssMode && this.freeMode.onTouchStart(),
            this.emit("touchStart", i)
        }
        function onTouchMove(e) {
            let t, i;
            let s = (0,
            l.g)()
              , r = this.touchEventsData
              , {params: n, touches: a, rtlTranslate: d, enabled: u} = this;
            if (!u || !n.simulateTouch && "mouse" === e.pointerType)
                return;
            let p = e;
            if (p.originalEvent && (p = p.originalEvent),
            "pointermove" === p.type) {
                if (null !== r.touchId)
                    return;
                let e = p.pointerId;
                if (e !== r.pointerId)
                    return
            }
            if ("touchmove" === p.type) {
                if (!(t = [...p.changedTouches].find(e => e.identifier === r.touchId)) || t.identifier !== r.touchId)
                    return
            } else
                t = p;
            if (!r.isTouched) {
                r.startMoving && r.isScrolling && this.emit("touchMoveOpposite", p);
                return
            }
            let c = t.pageX
              , h = t.pageY;
            if (p.preventedByNestedSwiper) {
                a.startX = c,
                a.startY = h;
                return
            }
            if (!this.allowTouchMove) {
                p.target.matches(r.focusableElements) || (this.allowClick = !1),
                r.isTouched && (Object.assign(a, {
                    startX: c,
                    startY: h,
                    currentX: c,
                    currentY: h
                }),
                r.touchStartTime = (0,
                o.d)());
                return
            }
            if (n.touchReleaseOnEdges && !n.loop) {
                if (this.isVertical()) {
                    if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) {
                        r.isTouched = !1,
                        r.isMoved = !1;
                        return
                    }
                } else if (d && (c > a.startX && -this.translate <= this.maxTranslate() || c < a.startX && -this.translate >= this.minTranslate()))
                    return;
                else if (!d && (c < a.startX && this.translate <= this.maxTranslate() || c > a.startX && this.translate >= this.minTranslate()))
                    return
            }
            if (s.activeElement && s.activeElement.matches(r.focusableElements) && s.activeElement !== p.target && "mouse" !== p.pointerType && s.activeElement.blur(),
            s.activeElement && p.target === s.activeElement && p.target.matches(r.focusableElements)) {
                r.isMoved = !0,
                this.allowClick = !1;
                return
            }
            r.allowTouchCallbacks && this.emit("touchMove", p),
            a.previousX = a.currentX,
            a.previousY = a.currentY,
            a.currentX = c,
            a.currentY = h;
            let f = a.currentX - a.startX
              , m = a.currentY - a.startY;
            if (this.params.threshold && Math.sqrt(f ** 2 + m ** 2) < this.params.threshold)
                return;
            if (void 0 === r.isScrolling) {
                let e;
                this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? r.isScrolling = !1 : f * f + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI,
                r.isScrolling = this.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
            }
            if (r.isScrolling && this.emit("touchMoveOpposite", p),
            void 0 === r.startMoving && (a.currentX !== a.startX || a.currentY !== a.startY) && (r.startMoving = !0),
            r.isScrolling || "touchmove" === p.type && r.preventTouchMoveFromPointerMove) {
                r.isTouched = !1;
                return
            }
            if (!r.startMoving)
                return;
            this.allowClick = !1,
            !n.cssMode && p.cancelable && p.preventDefault(),
            n.touchMoveStopPropagation && !n.nested && p.stopPropagation();
            let v = this.isHorizontal() ? f : m
              , g = this.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
            n.oneWayMovement && (v = Math.abs(v) * (d ? 1 : -1),
            g = Math.abs(g) * (d ? 1 : -1)),
            a.diff = v,
            v *= n.touchRatio,
            d && (v = -v,
            g = -g);
            let w = this.touchesDirection;
            this.swipeDirection = v > 0 ? "prev" : "next",
            this.touchesDirection = g > 0 ? "prev" : "next";
            let S = this.params.loop && !n.cssMode
              , y = "next" === this.touchesDirection && this.allowSlideNext || "prev" === this.touchesDirection && this.allowSlidePrev;
            if (!r.isMoved) {
                if (S && y && this.loopFix({
                    direction: this.swipeDirection
                }),
                r.startTranslate = this.getTranslate(),
                this.setTransition(0),
                this.animating) {
                    let e = new window.CustomEvent("transitionend",{
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            bySwiperTouchMove: !0
                        }
                    });
                    this.wrapperEl.dispatchEvent(e)
                }
                r.allowMomentumBounce = !1,
                n.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0),
                this.emit("sliderFirstMove", p)
            }
            if (new Date().getTime(),
            !1 !== n._loopSwapReset && r.isMoved && r.allowThresholdMove && w !== this.touchesDirection && S && y && Math.abs(v) >= 1) {
                Object.assign(a, {
                    startX: c,
                    startY: h,
                    currentX: c,
                    currentY: h,
                    startTranslate: r.currentTranslate
                }),
                r.loopSwapReset = !0,
                r.startTranslate = r.currentTranslate;
                return
            }
            this.emit("sliderMove", p),
            r.isMoved = !0,
            r.currentTranslate = v + r.startTranslate;
            let b = !0
              , T = n.resistanceRatio;
            if (n.touchReleaseOnEdges && (T = 0),
            v > 0 ? (S && y && !i && r.allowThresholdMove && r.currentTranslate > (n.centeredSlides ? this.minTranslate() - this.slidesSizesGrid[this.activeIndex + 1] - ("auto" !== n.slidesPerView && this.slides.length - n.slidesPerView >= 2 ? this.slidesSizesGrid[this.activeIndex + 1] + this.params.spaceBetween : 0) - this.params.spaceBetween : this.minTranslate()) && this.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }),
            r.currentTranslate > this.minTranslate() && (b = !1,
            n.resistance && (r.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + r.startTranslate + v) ** T))) : v < 0 && (S && y && !i && r.allowThresholdMove && r.currentTranslate < (n.centeredSlides ? this.maxTranslate() + this.slidesSizesGrid[this.slidesSizesGrid.length - 1] + this.params.spaceBetween + ("auto" !== n.slidesPerView && this.slides.length - n.slidesPerView >= 2 ? this.slidesSizesGrid[this.slidesSizesGrid.length - 1] + this.params.spaceBetween : 0) : this.maxTranslate()) && this.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: this.slides.length - ("auto" === n.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
            }),
            r.currentTranslate < this.maxTranslate() && (b = !1,
            n.resistance && (r.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - r.startTranslate - v) ** T))),
            b && (p.preventedByNestedSwiper = !0),
            !this.allowSlideNext && "next" === this.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
            !this.allowSlidePrev && "prev" === this.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
            this.allowSlidePrev || this.allowSlideNext || (r.currentTranslate = r.startTranslate),
            n.threshold > 0) {
                if (Math.abs(v) > n.threshold || r.allowThresholdMove) {
                    if (!r.allowThresholdMove) {
                        r.allowThresholdMove = !0,
                        a.startX = a.currentX,
                        a.startY = a.currentY,
                        r.currentTranslate = r.startTranslate,
                        a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
                        return
                    }
                } else {
                    r.currentTranslate = r.startTranslate;
                    return
                }
            }
            n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && this.freeMode || n.watchSlidesProgress) && (this.updateActiveIndex(),
            this.updateSlidesClasses()),
            n.freeMode && n.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(),
            this.updateProgress(r.currentTranslate),
            this.setTranslate(r.currentTranslate))
        }
        function onTouchEnd(e) {
            let t, i;
            let s = this
              , r = s.touchEventsData
              , n = e;
            n.originalEvent && (n = n.originalEvent);
            let a = "touchend" === n.type || "touchcancel" === n.type;
            if (a) {
                if (!(t = [...n.changedTouches].find(e => e.identifier === r.touchId)) || t.identifier !== r.touchId)
                    return
            } else {
                if (null !== r.touchId || n.pointerId !== r.pointerId)
                    return;
                t = n
            }
            if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type)) {
                let e = ["pointercancel", "contextmenu"].includes(n.type) && (s.browser.isSafari || s.browser.isWebView);
                if (!e)
                    return
            }
            r.pointerId = null,
            r.touchId = null;
            let {params: l, touches: d, rtlTranslate: u, slidesGrid: p, enabled: c} = s;
            if (!c || !l.simulateTouch && "mouse" === n.pointerType)
                return;
            if (r.allowTouchCallbacks && s.emit("touchEnd", n),
            r.allowTouchCallbacks = !1,
            !r.isTouched) {
                r.isMoved && l.grabCursor && s.setGrabCursor(!1),
                r.isMoved = !1,
                r.startMoving = !1;
                return
            }
            l.grabCursor && r.isMoved && r.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
            let h = (0,
            o.d)()
              , f = h - r.touchStartTime;
            if (s.allowClick) {
                let e = n.path || n.composedPath && n.composedPath();
                s.updateClickedSlide(e && e[0] || n.target, e),
                s.emit("tap click", n),
                f < 300 && h - r.lastClickTime < 300 && s.emit("doubleTap doubleClick", n)
            }
            if (r.lastClickTime = (0,
            o.d)(),
            (0,
            o.n)( () => {
                s.destroyed || (s.allowClick = !0)
            }
            ),
            !r.isTouched || !r.isMoved || !s.swipeDirection || 0 === d.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) {
                r.isTouched = !1,
                r.isMoved = !1,
                r.startMoving = !1;
                return
            }
            if (r.isTouched = !1,
            r.isMoved = !1,
            r.startMoving = !1,
            i = l.followFinger ? u ? s.translate : -s.translate : -r.currentTranslate,
            l.cssMode)
                return;
            if (l.freeMode && l.freeMode.enabled) {
                s.freeMode.onTouchEnd({
                    currentPos: i
                });
                return
            }
            let m = i >= -s.maxTranslate() && !s.params.loop
              , v = 0
              , g = s.slidesSizesGrid[0];
            for (let e = 0; e < p.length; e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
                let t = e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                void 0 !== p[e + t] ? (m || i >= p[e] && i < p[e + t]) && (v = e,
                g = p[e + t] - p[e]) : (m || i >= p[e]) && (v = e,
                g = p[p.length - 1] - p[p.length - 2])
            }
            let w = null
              , S = null;
            l.rewind && (s.isBeginning ? S = l.virtual && l.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1 : s.isEnd && (w = 0));
            let y = (i - p[v]) / g
              , b = v < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
            if (f > l.longSwipesMs) {
                if (!l.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return
                }
                "next" === s.swipeDirection && (y >= l.longSwipesRatio ? s.slideTo(l.rewind && s.isEnd ? w : v + b) : s.slideTo(v)),
                "prev" === s.swipeDirection && (y > 1 - l.longSwipesRatio ? s.slideTo(v + b) : null !== S && y < 0 && Math.abs(y) > l.longSwipesRatio ? s.slideTo(S) : s.slideTo(v))
            } else {
                if (!l.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return
                }
                let e = s.navigation && (n.target === s.navigation.nextEl || n.target === s.navigation.prevEl);
                e ? n.target === s.navigation.nextEl ? s.slideTo(v + b) : s.slideTo(v) : ("next" === s.swipeDirection && s.slideTo(null !== w ? w : v + b),
                "prev" === s.swipeDirection && s.slideTo(null !== S ? S : v))
            }
        }
        function onResize() {
            let e = this
              , {params: t, el: i} = e;
            if (i && 0 === i.offsetWidth)
                return;
            t.breakpoints && e.setBreakpoint();
            let {allowSlideNext: s, allowSlidePrev: r, snapGrid: n} = e
              , a = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses();
            let l = a && t.loop;
            "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
            e.autoplay.resizeTimeout = setTimeout( () => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }
            , 500)),
            e.allowSlidePrev = r,
            e.allowSlideNext = s,
            e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
        }
        function onClick(e) {
            this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(),
            this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
            e.stopImmediatePropagation()))
        }
        function onScroll() {
            let {wrapperEl: e, rtlTranslate: t, enabled: i} = this;
            if (!i)
                return;
            this.previousTranslate = this.translate,
            this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop,
            0 === this.translate && (this.translate = 0),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
            let s = this.maxTranslate() - this.minTranslate();
            (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate),
            this.emit("setTranslate", this.translate, !1)
        }
        function onLoad(e) {
            processLazyPreloader(this, e.target),
            !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
        }
        function onDocumentTouchStart() {
            !this.documentTouchHandlerProceeded && (this.documentTouchHandlerProceeded = !0,
            this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
        }
        let events = (e, t) => {
            let i = (0,
            l.g)()
              , {params: s, el: r, wrapperEl: n, device: a} = e
              , o = !!s.nested
              , d = "on" === t ? "addEventListener" : "removeEventListener";
            r && "string" != typeof r && (i[d]("touchstart", e.onDocumentTouchStart, {
                passive: !1,
                capture: o
            }),
            r[d]("touchstart", e.onTouchStart, {
                passive: !1
            }),
            r[d]("pointerdown", e.onTouchStart, {
                passive: !1
            }),
            i[d]("touchmove", e.onTouchMove, {
                passive: !1,
                capture: o
            }),
            i[d]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: o
            }),
            i[d]("touchend", e.onTouchEnd, {
                passive: !0
            }),
            i[d]("pointerup", e.onTouchEnd, {
                passive: !0
            }),
            i[d]("pointercancel", e.onTouchEnd, {
                passive: !0
            }),
            i[d]("touchcancel", e.onTouchEnd, {
                passive: !0
            }),
            i[d]("pointerout", e.onTouchEnd, {
                passive: !0
            }),
            i[d]("pointerleave", e.onTouchEnd, {
                passive: !0
            }),
            i[d]("contextmenu", e.onTouchEnd, {
                passive: !0
            }),
            (s.preventClicks || s.preventClicksPropagation) && r[d]("click", e.onClick, !0),
            s.cssMode && n[d]("scroll", e.onScroll),
            s.updateOnWindowResize ? e[t](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : e[t]("observerUpdate", onResize, !0),
            r[d]("load", e.onLoad, {
                capture: !0
            }))
        }
          , isGridEnabled = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var d = {
            init: !0,
            direction: "horizontal",
            oneWayMovement: !1,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            eventsPrefix: "swiper",
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 5,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            loop: !1,
            loopAddBlankSlides: !0,
            loopAdditionalSlides: 0,
            loopPreventsSliding: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
        let u = {
            eventsEmitter: {
                on(e, t, i) {
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                        return s;
                    let r = i ? "unshift" : "push";
                    return e.split(" ").forEach(e => {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []),
                        s.eventsListeners[e][r](t)
                    }
                    ),
                    s
                },
                once(e, t, i) {
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                        return s;
                    function onceHandler() {
                        s.off(e, onceHandler),
                        onceHandler.__emitterProxy && delete onceHandler.__emitterProxy;
                        for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                            r[n] = arguments[n];
                        t.apply(s, r)
                    }
                    return onceHandler.__emitterProxy = t,
                    s.on(e, onceHandler, i)
                },
                onAny(e, t) {
                    return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e),
                    this
                },
                offAny(e) {
                    if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners)
                        return this;
                    let t = this.eventsAnyListeners.indexOf(e);
                    return t >= 0 && this.eventsAnyListeners.splice(t, 1),
                    this
                },
                off(e, t) {
                    let i = this;
                    return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach( (s, r) => {
                            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                        }
                        )
                    }
                    ),
                    i
                },
                emit() {
                    let e, t, i;
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || !s.eventsListeners)
                        return s;
                    for (var r = arguments.length, n = Array(r), a = 0; a < r; a++)
                        n[a] = arguments[a];
                    "string" == typeof n[0] || Array.isArray(n[0]) ? (e = n[0],
                    t = n.slice(1, n.length),
                    i = s) : (e = n[0].events,
                    t = n[0].data,
                    i = n[0].context || s),
                    t.unshift(i);
                    let l = Array.isArray(e) ? e : e.split(" ");
                    return l.forEach(e => {
                        s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(s => {
                            s.apply(i, [e, ...t])
                        }
                        ),
                        s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach(e => {
                            e.apply(i, t)
                        }
                        )
                    }
                    ),
                    s
                }
            },
            update: {
                updateSize: function() {
                    let e, t;
                    let i = this.el;
                    e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth,
                    t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight,
                    0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt((0,
                    o.p)(i, "padding-left") || 0, 10) - parseInt((0,
                    o.p)(i, "padding-right") || 0, 10),
                    t = t - parseInt((0,
                    o.p)(i, "padding-top") || 0, 10) - parseInt((0,
                    o.p)(i, "padding-bottom") || 0, 10),
                    Number.isNaN(e) && (e = 0),
                    Number.isNaN(t) && (t = 0),
                    Object.assign(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    let e;
                    let t = this;
                    function getDirectionPropertyValue(e, i) {
                        return parseFloat(e.getPropertyValue(t.getDirectionLabel(i)) || 0)
                    }
                    let i = t.params
                      , {wrapperEl: s, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: l} = t
                      , d = t.virtual && i.virtual.enabled
                      , u = d ? t.virtual.slides.length : t.slides.length
                      , p = (0,
                    o.e)(r, `.${t.params.slideClass}, swiper-slide`)
                      , c = d ? t.virtual.slides.length : p.length
                      , h = []
                      , f = []
                      , m = []
                      , v = i.slidesOffsetBefore;
                    "function" == typeof v && (v = i.slidesOffsetBefore.call(t));
                    let g = i.slidesOffsetAfter;
                    "function" == typeof g && (g = i.slidesOffsetAfter.call(t));
                    let w = t.snapGrid.length
                      , S = t.slidesGrid.length
                      , y = i.spaceBetween
                      , b = -v
                      , T = 0
                      , E = 0;
                    if (void 0 === n)
                        return;
                    "string" == typeof y && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * n : "string" == typeof y && (y = parseFloat(y)),
                    t.virtualSize = -y,
                    p.forEach(e => {
                        a ? e.style.marginLeft = "" : e.style.marginRight = "",
                        e.style.marginBottom = "",
                        e.style.marginTop = ""
                    }
                    ),
                    i.centeredSlides && i.cssMode && ((0,
                    o.s)(s, "--swiper-centered-offset-before", ""),
                    (0,
                    o.s)(s, "--swiper-centered-offset-after", ""));
                    let x = i.grid && i.grid.rows > 1 && t.grid;
                    x ? t.grid.initSlides(p) : t.grid && t.grid.unsetSlides();
                    let C = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(e => void 0 !== i.breakpoints[e].slidesPerView).length > 0;
                    for (let s = 0; s < c; s += 1) {
                        let r;
                        if (e = 0,
                        p[s] && (r = p[s]),
                        x && t.grid.updateSlide(s, r, p),
                        !p[s] || "none" !== (0,
                        o.p)(r, "display")) {
                            if ("auto" === i.slidesPerView) {
                                C && (p[s].style[t.getDirectionLabel("width")] = "");
                                let n = getComputedStyle(r)
                                  , a = r.style.transform
                                  , l = r.style.webkitTransform;
                                if (a && (r.style.transform = "none"),
                                l && (r.style.webkitTransform = "none"),
                                i.roundLengths)
                                    e = t.isHorizontal() ? (0,
                                    o.f)(r, "width", !0) : (0,
                                    o.f)(r, "height", !0);
                                else {
                                    let t = getDirectionPropertyValue(n, "width")
                                      , i = getDirectionPropertyValue(n, "padding-left")
                                      , s = getDirectionPropertyValue(n, "padding-right")
                                      , a = getDirectionPropertyValue(n, "margin-left")
                                      , l = getDirectionPropertyValue(n, "margin-right")
                                      , o = n.getPropertyValue("box-sizing");
                                    if (o && "border-box" === o)
                                        e = t + a + l;
                                    else {
                                        let {clientWidth: n, offsetWidth: o} = r;
                                        e = t + i + s + a + l + (o - n)
                                    }
                                }
                                a && (r.style.transform = a),
                                l && (r.style.webkitTransform = l),
                                i.roundLengths && (e = Math.floor(e))
                            } else
                                e = (n - (i.slidesPerView - 1) * y) / i.slidesPerView,
                                i.roundLengths && (e = Math.floor(e)),
                                p[s] && (p[s].style[t.getDirectionLabel("width")] = `${e}px`);
                            p[s] && (p[s].swiperSlideSize = e),
                            m.push(e),
                            i.centeredSlides ? (b = b + e / 2 + T / 2 + y,
                            0 === T && 0 !== s && (b = b - n / 2 - y),
                            0 === s && (b = b - n / 2 - y),
                            .001 > Math.abs(b) && (b = 0),
                            i.roundLengths && (b = Math.floor(b)),
                            E % i.slidesPerGroup == 0 && h.push(b),
                            f.push(b)) : (i.roundLengths && (b = Math.floor(b)),
                            (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup == 0 && h.push(b),
                            f.push(b),
                            b = b + e + y),
                            t.virtualSize += e + y,
                            T = e,
                            E += 1
                        }
                    }
                    if (t.virtualSize = Math.max(t.virtualSize, n) + g,
                    a && l && ("slide" === i.effect || "coverflow" === i.effect) && (s.style.width = `${t.virtualSize + y}px`),
                    i.setWrapperSize && (s.style[t.getDirectionLabel("width")] = `${t.virtualSize + y}px`),
                    x && t.grid.updateWrapperSize(e, h),
                    !i.centeredSlides) {
                        let e = [];
                        for (let s = 0; s < h.length; s += 1) {
                            let r = h[s];
                            i.roundLengths && (r = Math.floor(r)),
                            h[s] <= t.virtualSize - n && e.push(r)
                        }
                        h = e,
                        Math.floor(t.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - n)
                    }
                    if (d && i.loop) {
                        let e = m[0] + y;
                        if (i.slidesPerGroup > 1) {
                            let s = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup)
                              , r = e * i.slidesPerGroup;
                            for (let e = 0; e < s; e += 1)
                                h.push(h[h.length - 1] + r)
                        }
                        for (let s = 0; s < t.virtual.slidesBefore + t.virtual.slidesAfter; s += 1)
                            1 === i.slidesPerGroup && h.push(h[h.length - 1] + e),
                            f.push(f[f.length - 1] + e),
                            t.virtualSize += e
                    }
                    if (0 === h.length && (h = [0]),
                    0 !== y) {
                        let e = t.isHorizontal() && a ? "marginLeft" : t.getDirectionLabel("marginRight");
                        p.filter( (e, t) => !i.cssMode || !!i.loop || t !== p.length - 1).forEach(t => {
                            t.style[e] = `${y}px`
                        }
                        )
                    }
                    if (i.centeredSlides && i.centeredSlidesBounds) {
                        let e = 0;
                        m.forEach(t => {
                            e += t + (y || 0)
                        }
                        ),
                        e -= y;
                        let t = e > n ? e - n : 0;
                        h = h.map(e => e <= 0 ? -v : e > t ? t + g : e)
                    }
                    if (i.centerInsufficientSlides) {
                        let e = 0;
                        m.forEach(t => {
                            e += t + (y || 0)
                        }
                        ),
                        e -= y;
                        let t = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
                        if (e + t < n) {
                            let i = (n - e - t) / 2;
                            h.forEach( (e, t) => {
                                h[t] = e - i
                            }
                            ),
                            f.forEach( (e, t) => {
                                f[t] = e + i
                            }
                            )
                        }
                    }
                    if (Object.assign(t, {
                        slides: p,
                        snapGrid: h,
                        slidesGrid: f,
                        slidesSizesGrid: m
                    }),
                    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                        (0,
                        o.s)(s, "--swiper-centered-offset-before", `${-h[0]}px`),
                        (0,
                        o.s)(s, "--swiper-centered-offset-after", `${t.size / 2 - m[m.length - 1] / 2}px`);
                        let e = -t.snapGrid[0]
                          , i = -t.slidesGrid[0];
                        t.snapGrid = t.snapGrid.map(t => t + e),
                        t.slidesGrid = t.slidesGrid.map(e => e + i)
                    }
                    if (c !== u && t.emit("slidesLengthChange"),
                    h.length !== w && (t.params.watchOverflow && t.checkOverflow(),
                    t.emit("snapGridLengthChange")),
                    f.length !== S && t.emit("slidesGridLengthChange"),
                    i.watchSlidesProgress && t.updateSlidesOffset(),
                    t.emit("slidesUpdated"),
                    !d && !i.cssMode && ("slide" === i.effect || "fade" === i.effect)) {
                        let e = `${i.containerModifierClass}backface-hidden`
                          , s = t.el.classList.contains(e);
                        c <= i.maxBackfaceHiddenSlides ? s || t.el.classList.add(e) : s && t.el.classList.remove(e)
                    }
                },
                updateAutoHeight: function(e) {
                    let t;
                    let i = this
                      , s = []
                      , r = i.virtual && i.params.virtual.enabled
                      , n = 0;
                    "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                    let getSlideByIndex = e => r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                    if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                        if (i.params.centeredSlides)
                            (i.visibleSlides || []).forEach(e => {
                                s.push(e)
                            }
                            );
                        else
                            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                let e = i.activeIndex + t;
                                if (e > i.slides.length && !r)
                                    break;
                                s.push(getSlideByIndex(e))
                            }
                    } else
                        s.push(getSlideByIndex(i.activeIndex));
                    for (t = 0; t < s.length; t += 1)
                        if (void 0 !== s[t]) {
                            let e = s[t].offsetHeight;
                            n = e > n ? e : n
                        }
                    (n || 0 === n) && (i.wrapperEl.style.height = `${n}px`)
                },
                updateSlidesOffset: function() {
                    let e = this.slides
                      , t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                    for (let i = 0; i < e.length; i += 1)
                        e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    let t = this.params
                      , {slides: i, rtlTranslate: s, snapGrid: r} = this;
                    if (0 === i.length)
                        return;
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    let n = -e;
                    s && (n = e),
                    this.visibleSlidesIndexes = [],
                    this.visibleSlides = [];
                    let a = t.spaceBetween;
                    "string" == typeof a && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * this.size : "string" == typeof a && (a = parseFloat(a));
                    for (let e = 0; e < i.length; e += 1) {
                        let l = i[e]
                          , o = l.swiperSlideOffset;
                        t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                        let d = (n + (t.centeredSlides ? this.minTranslate() : 0) - o) / (l.swiperSlideSize + a)
                          , u = (n - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (l.swiperSlideSize + a)
                          , p = -(n - o)
                          , c = p + this.slidesSizesGrid[e]
                          , h = p >= 0 && p <= this.size - this.slidesSizesGrid[e]
                          , f = p >= 0 && p < this.size - 1 || c > 1 && c <= this.size || p <= 0 && c >= this.size;
                        f && (this.visibleSlides.push(l),
                        this.visibleSlidesIndexes.push(e)),
                        toggleSlideClasses$1(l, f, t.slideVisibleClass),
                        toggleSlideClasses$1(l, h, t.slideFullyVisibleClass),
                        l.progress = s ? -d : d,
                        l.originalProgress = s ? -u : u
                    }
                },
                updateProgress: function(e) {
                    if (void 0 === e) {
                        let t = this.rtlTranslate ? -1 : 1;
                        e = this && this.translate && this.translate * t || 0
                    }
                    let t = this.params
                      , i = this.maxTranslate() - this.minTranslate()
                      , {progress: s, isBeginning: r, isEnd: n, progressLoop: a} = this
                      , l = r
                      , o = n;
                    if (0 === i)
                        s = 0,
                        r = !0,
                        n = !0;
                    else {
                        s = (e - this.minTranslate()) / i;
                        let t = 1 > Math.abs(e - this.minTranslate())
                          , a = 1 > Math.abs(e - this.maxTranslate());
                        r = t || s <= 0,
                        n = a || s >= 1,
                        t && (s = 0),
                        a && (s = 1)
                    }
                    if (t.loop) {
                        let t = this.getSlideIndexByData(0)
                          , i = this.getSlideIndexByData(this.slides.length - 1)
                          , s = this.slidesGrid[t]
                          , r = this.slidesGrid[i]
                          , n = this.slidesGrid[this.slidesGrid.length - 1]
                          , l = Math.abs(e);
                        (a = l >= s ? (l - s) / n : (l + n - r) / n) > 1 && (a -= 1)
                    }
                    Object.assign(this, {
                        progress: s,
                        progressLoop: a,
                        isBeginning: r,
                        isEnd: n
                    }),
                    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e),
                    r && !l && this.emit("reachBeginning toEdge"),
                    n && !o && this.emit("reachEnd toEdge"),
                    (l && !r || o && !n) && this.emit("fromEdge"),
                    this.emit("progress", s)
                },
                updateSlidesClasses: function() {
                    let e, t, i;
                    let {slides: s, params: r, slidesEl: n, activeIndex: a} = this
                      , l = this.virtual && r.virtual.enabled
                      , d = this.grid && r.grid && r.grid.rows > 1
                      , getFilteredSlide = e => (0,
                    o.e)(n, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
                    if (l) {
                        if (r.loop) {
                            let t = a - this.virtual.slidesBefore;
                            t < 0 && (t = this.virtual.slides.length + t),
                            t >= this.virtual.slides.length && (t -= this.virtual.slides.length),
                            e = getFilteredSlide(`[data-swiper-slide-index="${t}"]`)
                        } else
                            e = getFilteredSlide(`[data-swiper-slide-index="${a}"]`)
                    } else
                        d ? (e = s.find(e => e.column === a),
                        i = s.find(e => e.column === a + 1),
                        t = s.find(e => e.column === a - 1)) : e = s[a];
                    e && !d && (i = (0,
                    o.q)(e, `.${r.slideClass}, swiper-slide`)[0],
                    r.loop && !i && (i = s[0]),
                    t = (0,
                    o.r)(e, `.${r.slideClass}, swiper-slide`)[0],
                    r.loop),
                    s.forEach(s => {
                        toggleSlideClasses(s, s === e, r.slideActiveClass),
                        toggleSlideClasses(s, s === i, r.slideNextClass),
                        toggleSlideClasses(s, s === t, r.slidePrevClass)
                    }
                    ),
                    this.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    let t, i;
                    let s = this
                      , r = s.rtlTranslate ? s.translate : -s.translate
                      , {snapGrid: n, params: a, activeIndex: l, realIndex: o, snapIndex: d} = s
                      , u = e
                      , getVirtualRealIndex = e => {
                        let t = e - s.virtual.slidesBefore;
                        return t < 0 && (t = s.virtual.slides.length + t),
                        t >= s.virtual.slides.length && (t -= s.virtual.slides.length),
                        t
                    }
                    ;
                    if (void 0 === u && (u = function(e) {
                        let t;
                        let {slidesGrid: i, params: s} = e
                          , r = e.rtlTranslate ? e.translate : -e.translate;
                        for (let e = 0; e < i.length; e += 1)
                            void 0 !== i[e + 1] ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : r >= i[e] && r < i[e + 1] && (t = e + 1) : r >= i[e] && (t = e);
                        return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0),
                        t
                    }(s)),
                    n.indexOf(r) >= 0)
                        t = n.indexOf(r);
                    else {
                        let e = Math.min(a.slidesPerGroupSkip, u);
                        t = e + Math.floor((u - e) / a.slidesPerGroup)
                    }
                    if (t >= n.length && (t = n.length - 1),
                    u === l && !s.params.loop) {
                        t !== d && (s.snapIndex = t,
                        s.emit("snapIndexChange"));
                        return
                    }
                    if (u === l && s.params.loop && s.virtual && s.params.virtual.enabled) {
                        s.realIndex = getVirtualRealIndex(u);
                        return
                    }
                    let p = s.grid && a.grid && a.grid.rows > 1;
                    if (s.virtual && a.virtual.enabled && a.loop)
                        i = getVirtualRealIndex(u);
                    else if (p) {
                        let e = s.slides.find(e => e.column === u)
                          , t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                        Number.isNaN(t) && (t = Math.max(s.slides.indexOf(e), 0)),
                        i = Math.floor(t / a.grid.rows)
                    } else if (s.slides[u]) {
                        let e = s.slides[u].getAttribute("data-swiper-slide-index");
                        i = e ? parseInt(e, 10) : u
                    } else
                        i = u;
                    Object.assign(s, {
                        previousSnapIndex: d,
                        snapIndex: t,
                        previousRealIndex: o,
                        realIndex: i,
                        previousIndex: l,
                        activeIndex: u
                    }),
                    s.initialized && preload(s),
                    s.emit("activeIndexChange"),
                    s.emit("snapIndexChange"),
                    (s.initialized || s.params.runCallbacksOnInit) && (o !== i && s.emit("realIndexChange"),
                    s.emit("slideChange"))
                },
                updateClickedSlide: function(e, t) {
                    let i;
                    let s = this.params
                      , r = e.closest(`.${s.slideClass}, swiper-slide`);
                    !r && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                        !r && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (r = e)
                    }
                    );
                    let n = !1;
                    if (r) {
                        for (let e = 0; e < this.slides.length; e += 1)
                            if (this.slides[e] === r) {
                                n = !0,
                                i = e;
                                break
                            }
                    }
                    if (r && n)
                        this.clickedSlide = r,
                        this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = i;
                    else {
                        this.clickedSlide = void 0,
                        this.clickedIndex = void 0;
                        return
                    }
                    s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    let {params: t, rtlTranslate: i, translate: s, wrapperEl: r} = this;
                    if (t.virtualTranslate)
                        return i ? -s : s;
                    if (t.cssMode)
                        return s;
                    let n = (0,
                    o.j)(r, e);
                    return n += this.cssOverflowAdjustment(),
                    i && (n = -n),
                    n || 0
                },
                setTranslate: function(e, t) {
                    let {rtlTranslate: i, params: s, wrapperEl: r, progress: n} = this
                      , a = 0
                      , l = 0;
                    this.isHorizontal() ? a = i ? -e : e : l = e,
                    s.roundLengths && (a = Math.floor(a),
                    l = Math.floor(l)),
                    this.previousTranslate = this.translate,
                    this.translate = this.isHorizontal() ? a : l,
                    s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -a : -l : s.virtualTranslate || (this.isHorizontal() ? a -= this.cssOverflowAdjustment() : l -= this.cssOverflowAdjustment(),
                    r.style.transform = `translate3d(${a}px, ${l}px, 0px)`);
                    let o = this.maxTranslate() - this.minTranslate();
                    (0 === o ? 0 : (e - this.minTranslate()) / o) !== n && this.updateProgress(e),
                    this.emit("setTranslate", this.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, i, s, r) {
                    let n;
                    void 0 === e && (e = 0),
                    void 0 === t && (t = this.params.speed),
                    void 0 === i && (i = !0),
                    void 0 === s && (s = !0);
                    let a = this
                      , {params: l, wrapperEl: d} = a;
                    if (a.animating && l.preventInteractionOnTransition)
                        return !1;
                    let u = a.minTranslate()
                      , p = a.maxTranslate();
                    if (n = s && e > u ? u : s && e < p ? p : e,
                    a.updateProgress(n),
                    l.cssMode) {
                        let e = a.isHorizontal();
                        if (0 === t)
                            d[e ? "scrollLeft" : "scrollTop"] = -n;
                        else {
                            if (!a.support.smoothScroll)
                                return (0,
                                o.t)({
                                    swiper: a,
                                    targetPosition: -n,
                                    side: e ? "left" : "top"
                                }),
                                !0;
                            d.scrollTo({
                                [e ? "left" : "top"]: -n,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0),
                    a.setTranslate(n),
                    i && (a.emit("beforeTransitionStart", t, r),
                    a.emit("transitionEnd"))) : (a.setTransition(t),
                    a.setTranslate(n),
                    i && (a.emit("beforeTransitionStart", t, r),
                    a.emit("transitionStart")),
                    a.animating || (a.animating = !0,
                    a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                        a.onTranslateToWrapperTransitionEnd = null,
                        delete a.onTranslateToWrapperTransitionEnd,
                        a.animating = !1,
                        i && a.emit("transitionEnd"))
                    }
                    ),
                    a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))),
                    !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`,
                    this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""),
                    this.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    let {params: i} = this;
                    i.cssMode || (i.autoHeight && this.updateAutoHeight(),
                    transitionEmit({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    let {params: i} = this;
                    this.animating = !1,
                    i.cssMode || (this.setTransition(0),
                    transitionEmit({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function(e, t, i, s, r) {
                    let n;
                    void 0 === e && (e = 0),
                    void 0 === i && (i = !0),
                    "string" == typeof e && (e = parseInt(e, 10));
                    let a = this
                      , l = e;
                    l < 0 && (l = 0);
                    let {params: d, snapGrid: u, slidesGrid: p, previousIndex: c, activeIndex: h, rtlTranslate: f, wrapperEl: m, enabled: v} = a;
                    if (!v && !s && !r || a.destroyed || a.animating && d.preventInteractionOnTransition)
                        return !1;
                    void 0 === t && (t = a.params.speed);
                    let g = Math.min(a.params.slidesPerGroupSkip, l)
                      , w = g + Math.floor((l - g) / a.params.slidesPerGroup);
                    w >= u.length && (w = u.length - 1);
                    let S = -u[w];
                    if (d.normalizeSlideIndex)
                        for (let e = 0; e < p.length; e += 1) {
                            let t = -Math.floor(100 * S)
                              , i = Math.floor(100 * p[e])
                              , s = Math.floor(100 * p[e + 1]);
                            void 0 !== p[e + 1] ? t >= i && t < s - (s - i) / 2 ? l = e : t >= i && t < s && (l = e + 1) : t >= i && (l = e)
                        }
                    if (a.initialized && l !== h && (!a.allowSlideNext && (f ? S > a.translate && S > a.minTranslate() : S < a.translate && S < a.minTranslate()) || !a.allowSlidePrev && S > a.translate && S > a.maxTranslate() && (h || 0) !== l))
                        return !1;
                    l !== (c || 0) && i && a.emit("beforeSlideChangeStart"),
                    a.updateProgress(S),
                    n = l > h ? "next" : l < h ? "prev" : "reset";
                    let y = a.virtual && a.params.virtual.enabled;
                    if (!(y && r) && (f && -S === a.translate || !f && S === a.translate))
                        return a.updateActiveIndex(l),
                        d.autoHeight && a.updateAutoHeight(),
                        a.updateSlidesClasses(),
                        "slide" !== d.effect && a.setTranslate(S),
                        "reset" !== n && (a.transitionStart(i, n),
                        a.transitionEnd(i, n)),
                        !1;
                    if (d.cssMode) {
                        let e = a.isHorizontal()
                          , i = f ? S : -S;
                        if (0 === t)
                            y && (a.wrapperEl.style.scrollSnapType = "none",
                            a._immediateVirtual = !0),
                            y && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0,
                            requestAnimationFrame( () => {
                                m[e ? "scrollLeft" : "scrollTop"] = i
                            }
                            )) : m[e ? "scrollLeft" : "scrollTop"] = i,
                            y && requestAnimationFrame( () => {
                                a.wrapperEl.style.scrollSnapType = "",
                                a._immediateVirtual = !1
                            }
                            );
                        else {
                            if (!a.support.smoothScroll)
                                return (0,
                                o.t)({
                                    swiper: a,
                                    targetPosition: i,
                                    side: e ? "left" : "top"
                                }),
                                !0;
                            m.scrollTo({
                                [e ? "left" : "top"]: i,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    let b = getBrowser()
                      , T = b.isSafari;
                    return y && !r && T && a.isElement && a.virtual.update(!1, !1, l),
                    a.setTransition(t),
                    a.setTranslate(S),
                    a.updateActiveIndex(l),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, s),
                    a.transitionStart(i, n),
                    0 === t ? a.transitionEnd(i, n) : a.animating || (a.animating = !0,
                    a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                        a.onSlideToWrapperTransitionEnd = null,
                        delete a.onSlideToWrapperTransitionEnd,
                        a.transitionEnd(i, n))
                    }
                    ),
                    a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)),
                    !0
                },
                slideToLoop: function(e, t, i, s) {
                    if (void 0 === e && (e = 0),
                    void 0 === i && (i = !0),
                    "string" == typeof e) {
                        let t = parseInt(e, 10);
                        e = t
                    }
                    let r = this;
                    if (r.destroyed)
                        return;
                    void 0 === t && (t = r.params.speed);
                    let n = r.grid && r.params.grid && r.params.grid.rows > 1
                      , a = e;
                    if (r.params.loop) {
                        if (r.virtual && r.params.virtual.enabled)
                            a += r.virtual.slidesBefore;
                        else {
                            let e;
                            if (n) {
                                let t = a * r.params.grid.rows;
                                e = r.slides.find(e => 1 * e.getAttribute("data-swiper-slide-index") === t).column
                            } else
                                e = r.getSlideIndexByData(a);
                            let t = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length
                              , {centeredSlides: i} = r.params
                              , l = r.params.slidesPerView;
                            "auto" === l ? l = r.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(r.params.slidesPerView, 10)),
                            i && l % 2 == 0 && (l += 1));
                            let o = t - e < l;
                            if (i && (o = o || e < Math.ceil(l / 2)),
                            s && i && "auto" !== r.params.slidesPerView && !n && (o = !1),
                            o) {
                                let s = i ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                                r.loopFix({
                                    direction: s,
                                    slideTo: !0,
                                    activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                                    slideRealIndex: "next" === s ? r.realIndex : void 0
                                })
                            }
                            if (n) {
                                let e = a * r.params.grid.rows;
                                a = r.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e).column
                            } else
                                a = r.getSlideIndexByData(a)
                        }
                    }
                    return requestAnimationFrame( () => {
                        r.slideTo(a, t, i, s)
                    }
                    ),
                    r
                },
                slideNext: function(e, t, i) {
                    void 0 === t && (t = !0);
                    let s = this
                      , {enabled: r, params: n, animating: a} = s;
                    if (!r || s.destroyed)
                        return s;
                    void 0 === e && (e = s.params.speed);
                    let l = n.slidesPerGroup;
                    "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                    let o = s.activeIndex < n.slidesPerGroupSkip ? 1 : l
                      , d = s.virtual && n.virtual.enabled;
                    if (n.loop) {
                        if (a && !d && n.loopPreventsSliding)
                            return !1;
                        if (s.loopFix({
                            direction: "next"
                        }),
                        s._clientLeft = s.wrapperEl.clientLeft,
                        s.activeIndex === s.slides.length - 1 && n.cssMode)
                            return requestAnimationFrame( () => {
                                s.slideTo(s.activeIndex + o, e, t, i)
                            }
                            ),
                            !0
                    }
                    return n.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                },
                slidePrev: function(e, t, i) {
                    void 0 === t && (t = !0);
                    let s = this
                      , {params: r, snapGrid: n, slidesGrid: a, rtlTranslate: l, enabled: o, animating: d} = s;
                    if (!o || s.destroyed)
                        return s;
                    void 0 === e && (e = s.params.speed);
                    let u = s.virtual && r.virtual.enabled;
                    if (r.loop) {
                        if (d && !u && r.loopPreventsSliding)
                            return !1;
                        s.loopFix({
                            direction: "prev"
                        }),
                        s._clientLeft = s.wrapperEl.clientLeft
                    }
                    let p = l ? s.translate : -s.translate;
                    function normalize(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    let c = normalize(p)
                      , h = n.map(e => normalize(e))
                      , f = r.freeMode && r.freeMode.enabled
                      , m = n[h.indexOf(c) - 1];
                    if (void 0 === m && (r.cssMode || f)) {
                        let e;
                        n.forEach( (t, i) => {
                            c >= t && (e = i)
                        }
                        ),
                        void 0 !== e && (m = f ? n[e] : n[e > 0 ? e - 1 : e])
                    }
                    let v = 0;
                    if (void 0 !== m && ((v = a.indexOf(m)) < 0 && (v = s.activeIndex - 1),
                    "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (v = Math.max(v = v - s.slidesPerViewDynamic("previous", !0) + 1, 0))),
                    r.rewind && s.isBeginning) {
                        let r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                        return s.slideTo(r, e, t, i)
                    }
                    return r.loop && 0 === s.activeIndex && r.cssMode ? (requestAnimationFrame( () => {
                        s.slideTo(v, e, t, i)
                    }
                    ),
                    !0) : s.slideTo(v, e, t, i)
                },
                slideReset: function(e, t, i) {
                    if (void 0 === t && (t = !0),
                    !this.destroyed)
                        return void 0 === e && (e = this.params.speed),
                        this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function(e, t, i, s) {
                    if (void 0 === t && (t = !0),
                    void 0 === s && (s = .5),
                    this.destroyed)
                        return;
                    void 0 === e && (e = this.params.speed);
                    let r = this.activeIndex
                      , n = Math.min(this.params.slidesPerGroupSkip, r)
                      , a = n + Math.floor((r - n) / this.params.slidesPerGroup)
                      , l = this.rtlTranslate ? this.translate : -this.translate;
                    if (l >= this.snapGrid[a]) {
                        let e = this.snapGrid[a]
                          , t = this.snapGrid[a + 1];
                        l - e > (t - e) * s && (r += this.params.slidesPerGroup)
                    } else {
                        let e = this.snapGrid[a - 1]
                          , t = this.snapGrid[a];
                        l - e <= (t - e) * s && (r -= this.params.slidesPerGroup)
                    }
                    return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1),
                    this.slideTo(r, e, t, i)
                },
                slideToClickedSlide: function() {
                    let e;
                    let t = this;
                    if (t.destroyed)
                        return;
                    let {params: i, slidesEl: s} = t
                      , r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView
                      , n = t.clickedIndex
                      , a = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                    if (i.loop) {
                        if (t.animating)
                            return;
                        e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
                        i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(),
                        n = t.getSlideIndex((0,
                        o.e)(s, `${a}[data-swiper-slide-index="${e}"]`)[0]),
                        (0,
                        o.n)( () => {
                            t.slideTo(n)
                        }
                        )) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(),
                        n = t.getSlideIndex((0,
                        o.e)(s, `${a}[data-swiper-slide-index="${e}"]`)[0]),
                        (0,
                        o.n)( () => {
                            t.slideTo(n)
                        }
                        )) : t.slideTo(n)
                    } else
                        t.slideTo(n)
                }
            },
            loop: {
                loopCreate: function(e, t) {
                    let i = this
                      , {params: s, slidesEl: r} = i;
                    if (!s.loop || i.virtual && i.params.virtual.enabled)
                        return;
                    let initSlides = () => {
                        let e = (0,
                        o.e)(r, `.${s.slideClass}, swiper-slide`);
                        e.forEach( (e, t) => {
                            e.setAttribute("data-swiper-slide-index", t)
                        }
                        )
                    }
                      , n = i.grid && s.grid && s.grid.rows > 1
                      , a = s.slidesPerGroup * (n ? s.grid.rows : 1)
                      , l = i.slides.length % a != 0
                      , d = n && i.slides.length % s.grid.rows != 0
                      , addBlankSlides = e => {
                        for (let t = 0; t < e; t += 1) {
                            let e = i.isElement ? (0,
                            o.c)("swiper-slide", [s.slideBlankClass]) : (0,
                            o.c)("div", [s.slideClass, s.slideBlankClass]);
                            i.slidesEl.append(e)
                        }
                    }
                    ;
                    if (l) {
                        if (s.loopAddBlankSlides) {
                            let e = a - i.slides.length % a;
                            addBlankSlides(e),
                            i.recalcSlides(),
                            i.updateSlides()
                        } else
                            (0,
                            o.u)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                        initSlides()
                    } else if (d) {
                        if (s.loopAddBlankSlides) {
                            let e = s.grid.rows - i.slides.length % s.grid.rows;
                            addBlankSlides(e),
                            i.recalcSlides(),
                            i.updateSlides()
                        } else
                            (0,
                            o.u)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                        initSlides()
                    } else
                        initSlides();
                    i.loopFix({
                        slideRealIndex: e,
                        direction: s.centeredSlides ? void 0 : "next",
                        initial: t
                    })
                },
                loopFix: function(e) {
                    let {slideRealIndex: t, slideTo: i=!0, direction: s, setTranslate: r, activeSlideIndex: n, initial: a, byController: l, byMousewheel: d} = void 0 === e ? {} : e
                      , u = this;
                    if (!u.params.loop)
                        return;
                    u.emit("beforeLoopFix");
                    let {slides: p, allowSlidePrev: c, allowSlideNext: h, slidesEl: f, params: m} = u
                      , {centeredSlides: v, initialSlide: g} = m;
                    if (u.allowSlidePrev = !0,
                    u.allowSlideNext = !0,
                    u.virtual && m.virtual.enabled) {
                        i && (m.centeredSlides || 0 !== u.snapIndex ? m.centeredSlides && u.snapIndex < m.slidesPerView ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0) : u.snapIndex === u.snapGrid.length - 1 && u.slideTo(u.virtual.slidesBefore, 0, !1, !0) : u.slideTo(u.virtual.slides.length, 0, !1, !0)),
                        u.allowSlidePrev = c,
                        u.allowSlideNext = h,
                        u.emit("loopFix");
                        return
                    }
                    let w = m.slidesPerView;
                    "auto" === w ? w = u.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(m.slidesPerView, 10)),
                    v && w % 2 == 0 && (w += 1));
                    let S = m.slidesPerGroupAuto ? w : m.slidesPerGroup
                      , y = S;
                    y % S != 0 && (y += S - y % S),
                    y += m.loopAdditionalSlides,
                    u.loopedSlides = y;
                    let b = u.grid && m.grid && m.grid.rows > 1;
                    p.length < w + y || "cards" === u.params.effect && p.length < w + 2 * y ? (0,
                    o.u)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && (0,
                    o.u)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                    let T = []
                      , E = []
                      , x = b ? Math.ceil(p.length / m.grid.rows) : p.length
                      , C = a && x - g < w && !v
                      , M = C ? g : u.activeIndex;
                    void 0 === n ? n = u.getSlideIndex(p.find(e => e.classList.contains(m.slideActiveClass))) : M = n;
                    let P = "next" === s || !s
                      , O = "prev" === s || !s
                      , L = 0
                      , k = 0
                      , _ = b ? p[n].column : n
                      , I = _ + (v && void 0 === r ? -w / 2 + .5 : 0);
                    if (I < y) {
                        L = Math.max(y - I, S);
                        for (let e = 0; e < y - I; e += 1) {
                            let t = e - Math.floor(e / x) * x;
                            if (b) {
                                let e = x - t - 1;
                                for (let t = p.length - 1; t >= 0; t -= 1)
                                    p[t].column === e && T.push(t)
                            } else
                                T.push(x - t - 1)
                        }
                    } else if (I + w > x - y) {
                        k = Math.max(I - (x - 2 * y), S),
                        C && (k = Math.max(k, w - x + g + 1));
                        for (let e = 0; e < k; e += 1) {
                            let t = e - Math.floor(e / x) * x;
                            b ? p.forEach( (e, i) => {
                                e.column === t && E.push(i)
                            }
                            ) : E.push(t)
                        }
                    }
                    if (u.__preventObserver__ = !0,
                    requestAnimationFrame( () => {
                        u.__preventObserver__ = !1
                    }
                    ),
                    "cards" === u.params.effect && p.length < w + 2 * y && (E.includes(n) && E.splice(E.indexOf(n), 1),
                    T.includes(n) && T.splice(T.indexOf(n), 1)),
                    O && T.forEach(e => {
                        p[e].swiperLoopMoveDOM = !0,
                        f.prepend(p[e]),
                        p[e].swiperLoopMoveDOM = !1
                    }
                    ),
                    P && E.forEach(e => {
                        p[e].swiperLoopMoveDOM = !0,
                        f.append(p[e]),
                        p[e].swiperLoopMoveDOM = !1
                    }
                    ),
                    u.recalcSlides(),
                    "auto" === m.slidesPerView ? u.updateSlides() : b && (T.length > 0 && O || E.length > 0 && P) && u.slides.forEach( (e, t) => {
                        u.grid.updateSlide(t, e, u.slides)
                    }
                    ),
                    m.watchSlidesProgress && u.updateSlidesOffset(),
                    i) {
                        if (T.length > 0 && O) {
                            if (void 0 === t) {
                                let e = u.slidesGrid[M]
                                  , t = u.slidesGrid[M + L]
                                  , i = t - e;
                                d ? u.setTranslate(u.translate - i) : (u.slideTo(M + Math.ceil(L), 0, !1, !0),
                                r && (u.touchEventsData.startTranslate = u.touchEventsData.startTranslate - i,
                                u.touchEventsData.currentTranslate = u.touchEventsData.currentTranslate - i))
                            } else if (r) {
                                let e = b ? T.length / m.grid.rows : T.length;
                                u.slideTo(u.activeIndex + e, 0, !1, !0),
                                u.touchEventsData.currentTranslate = u.translate
                            }
                        } else if (E.length > 0 && P) {
                            if (void 0 === t) {
                                let e = u.slidesGrid[M]
                                  , t = u.slidesGrid[M - k]
                                  , i = t - e;
                                d ? u.setTranslate(u.translate - i) : (u.slideTo(M - k, 0, !1, !0),
                                r && (u.touchEventsData.startTranslate = u.touchEventsData.startTranslate - i,
                                u.touchEventsData.currentTranslate = u.touchEventsData.currentTranslate - i))
                            } else {
                                let e = b ? E.length / m.grid.rows : E.length;
                                u.slideTo(u.activeIndex - e, 0, !1, !0)
                            }
                        }
                    }
                    if (u.allowSlidePrev = c,
                    u.allowSlideNext = h,
                    u.controller && u.controller.control && !l) {
                        let e = {
                            slideRealIndex: t,
                            direction: s,
                            setTranslate: r,
                            activeSlideIndex: n,
                            byController: !0
                        };
                        Array.isArray(u.controller.control) ? u.controller.control.forEach(t => {
                            !t.destroyed && t.params.loop && t.loopFix({
                                ...e,
                                slideTo: t.params.slidesPerView === m.slidesPerView && i
                            })
                        }
                        ) : u.controller.control instanceof u.constructor && u.controller.control.params.loop && u.controller.control.loopFix({
                            ...e,
                            slideTo: u.controller.control.params.slidesPerView === m.slidesPerView && i
                        })
                    }
                    u.emit("loopFix")
                },
                loopDestroy: function() {
                    let {params: e, slidesEl: t} = this;
                    if (!e.loop || !t || this.virtual && this.params.virtual.enabled)
                        return;
                    this.recalcSlides();
                    let i = [];
                    this.slides.forEach(e => {
                        let t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                        i[t] = e
                    }
                    ),
                    this.slides.forEach(e => {
                        e.removeAttribute("data-swiper-slide-index")
                    }
                    ),
                    i.forEach(e => {
                        t.append(e)
                    }
                    ),
                    this.recalcSlides(),
                    this.slideTo(this.realIndex, 0)
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    let t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                        return;
                    let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0),
                    i.style.cursor = "move",
                    i.style.cursor = e ? "grabbing" : "grab",
                    t.isElement && requestAnimationFrame( () => {
                        t.__preventObserver__ = !1
                    }
                    )
                },
                unsetGrabCursor: function() {
                    let e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
                    e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "",
                    e.isElement && requestAnimationFrame( () => {
                        e.__preventObserver__ = !1
                    }
                    ))
                }
            },
            events: {
                attachEvents: function() {
                    let {params: e} = this;
                    this.onTouchStart = onTouchStart.bind(this),
                    this.onTouchMove = onTouchMove.bind(this),
                    this.onTouchEnd = onTouchEnd.bind(this),
                    this.onDocumentTouchStart = onDocumentTouchStart.bind(this),
                    e.cssMode && (this.onScroll = onScroll.bind(this)),
                    this.onClick = onClick.bind(this),
                    this.onLoad = onLoad.bind(this),
                    events(this, "on")
                },
                detachEvents: function() {
                    events(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    let e = this
                      , {realIndex: t, initialized: i, params: s, el: r} = e
                      , n = s.breakpoints;
                    if (!n || n && 0 === Object.keys(n).length)
                        return;
                    let a = (0,
                    l.g)()
                      , d = "window" !== s.breakpointsBase && s.breakpointsBase ? "container" : s.breakpointsBase
                      , u = ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase ? e.el : a.querySelector(s.breakpointsBase)
                      , p = e.getBreakpoint(n, d, u);
                    if (!p || e.currentBreakpoint === p)
                        return;
                    let c = p in n ? n[p] : void 0
                      , h = c || e.originalParams
                      , f = isGridEnabled(e, s)
                      , m = isGridEnabled(e, h)
                      , v = e.params.grabCursor
                      , g = h.grabCursor
                      , w = s.enabled;
                    f && !m ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`),
                    e.emitContainerClasses()) : !f && m && (r.classList.add(`${s.containerModifierClass}grid`),
                    (h.grid.fill && "column" === h.grid.fill || !h.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`),
                    e.emitContainerClasses()),
                    v && !g ? e.unsetGrabCursor() : !v && g && e.setGrabCursor(),
                    ["navigation", "pagination", "scrollbar"].forEach(t => {
                        if (void 0 === h[t])
                            return;
                        let i = s[t] && s[t].enabled
                          , r = h[t] && h[t].enabled;
                        i && !r && e[t].disable(),
                        !i && r && e[t].enable()
                    }
                    );
                    let S = h.direction && h.direction !== s.direction
                      , y = s.loop && (h.slidesPerView !== s.slidesPerView || S)
                      , b = s.loop;
                    S && i && e.changeDirection(),
                    (0,
                    o.w)(e.params, h);
                    let T = e.params.enabled
                      , E = e.params.loop;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    w && !T ? e.disable() : !w && T && e.enable(),
                    e.currentBreakpoint = p,
                    e.emit("_beforeBreakpoint", h),
                    i && (y ? (e.loopDestroy(),
                    e.loopCreate(t),
                    e.updateSlides()) : !b && E ? (e.loopCreate(t),
                    e.updateSlides()) : b && !E && e.loopDestroy()),
                    e.emit("breakpoint", h)
                },
                getBreakpoint: function(e, t, i) {
                    if (void 0 === t && (t = "window"),
                    !e || "container" === t && !i)
                        return;
                    let s = !1
                      , r = (0,
                    l.a)()
                      , n = "window" === t ? r.innerHeight : i.clientHeight
                      , a = Object.keys(e).map(e => {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            let t = parseFloat(e.substr(1));
                            return {
                                value: n * t,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }
                    );
                    a.sort( (e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let e = 0; e < a.length; e += 1) {
                        let {point: n, value: l} = a[e];
                        "window" === t ? r.matchMedia(`(min-width: ${l}px)`).matches && (s = n) : l <= i.clientWidth && (s = n)
                    }
                    return s || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    let {isLocked: e, params: t} = this
                      , {slidesOffsetBefore: i} = t;
                    if (i) {
                        let e = this.slides.length - 1
                          , t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                        this.isLocked = this.size > t
                    } else
                        this.isLocked = 1 === this.snapGrid.length;
                    !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                    !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked),
                    e && e !== this.isLocked && (this.isEnd = !1),
                    e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    let {classNames: e, params: t, rtl: i, el: s, device: r} = this
                      , n = function(e, t) {
                        let i = [];
                        return e.forEach(e => {
                            "object" == typeof e ? Object.keys(e).forEach(s => {
                                e[s] && i.push(t + s)
                            }
                            ) : "string" == typeof e && i.push(t + e)
                        }
                        ),
                        i
                    }(["initialized", t.direction, {
                        "free-mode": this.params.freeMode && t.freeMode.enabled
                    }, {
                        autoheight: t.autoHeight
                    }, {
                        rtl: i
                    }, {
                        grid: t.grid && t.grid.rows > 1
                    }, {
                        "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                    }, {
                        android: r.android
                    }, {
                        ios: r.ios
                    }, {
                        "css-mode": t.cssMode
                    }, {
                        centered: t.cssMode && t.centeredSlides
                    }, {
                        "watch-progress": t.watchSlidesProgress
                    }], t.containerModifierClass);
                    e.push(...n),
                    s.classList.add(...e),
                    this.emitContainerClasses()
                },
                removeClasses: function() {
                    let {el: e, classNames: t} = this;
                    e && "string" != typeof e && (e.classList.remove(...t),
                    this.emitContainerClasses())
                }
            }
        }
          , p = {};
        let Swiper = class Swiper {
            constructor() {
                let e, t;
                for (var i = arguments.length, s = Array(i), r = 0; r < i; r++)
                    s[r] = arguments[r];
                1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e,t] = s,
                t || (t = {}),
                t = (0,
                o.w)({}, t),
                e && !t.el && (t.el = e);
                let n = (0,
                l.g)();
                if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
                    let e = [];
                    return n.querySelectorAll(t.el).forEach(i => {
                        let s = (0,
                        o.w)({}, t, {
                            el: i
                        });
                        e.push(new Swiper(s))
                    }
                    ),
                    e
                }
                let a = this;
                a.__swiper__ = !0,
                a.support = getSupport(),
                a.device = getDevice({
                    userAgent: t.userAgent
                }),
                a.browser = getBrowser(),
                a.eventsListeners = {},
                a.eventsAnyListeners = [],
                a.modules = [...a.__modules__],
                t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
                let u = {};
                a.modules.forEach(e => {
                    var i;
                    e({
                        params: t,
                        swiper: a,
                        extendParams: (i = t,
                        function(e) {
                            void 0 === e && (e = {});
                            let t = Object.keys(e)[0]
                              , s = e[t];
                            if ("object" != typeof s || null === s || (!0 === i[t] && (i[t] = {
                                enabled: !0
                            }),
                            "navigation" === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0),
                            ["pagination", "scrollbar"].indexOf(t) >= 0 && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0),
                            !(t in i && "enabled"in s))) {
                                (0,
                                o.w)(u, e);
                                return
                            }
                            "object" != typeof i[t] || "enabled"in i[t] || (i[t].enabled = !0),
                            i[t] || (i[t] = {
                                enabled: !1
                            }),
                            (0,
                            o.w)(u, e)
                        }
                        ),
                        on: a.on.bind(a),
                        once: a.once.bind(a),
                        off: a.off.bind(a),
                        emit: a.emit.bind(a)
                    })
                }
                );
                let c = (0,
                o.w)({}, d, u);
                return a.params = (0,
                o.w)({}, c, p, t),
                a.originalParams = (0,
                o.w)({}, a.params),
                a.passedParams = (0,
                o.w)({}, t),
                a.params && a.params.on && Object.keys(a.params.on).forEach(e => {
                    a.on(e, a.params.on[e])
                }
                ),
                a.params && a.params.onAny && a.onAny(a.params.onAny),
                Object.assign(a, {
                    enabled: a.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === a.params.direction,
                    isVertical: () => "vertical" === a.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return 8388608 * Math.trunc(this.translate / 8388608)
                    },
                    allowSlideNext: a.params.allowSlideNext,
                    allowSlidePrev: a.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: a.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: !0,
                    allowTouchMove: a.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                a.emit("_swiper"),
                a.params.init && a.init(),
                a
            }
            getDirectionLabel(e) {
                return this.isHorizontal() ? e : ({
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                })[e]
            }
            getSlideIndex(e) {
                let {slidesEl: t, params: i} = this
                  , s = (0,
                o.e)(t, `.${i.slideClass}, swiper-slide`)
                  , r = (0,
                o.h)(s[0]);
                return (0,
                o.h)(e) - r
            }
            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e))
            }
            recalcSlides() {
                let {slidesEl: e, params: t} = this;
                this.slides = (0,
                o.e)(e, `.${t.slideClass}, swiper-slide`)
            }
            enable() {
                this.enabled || (this.enabled = !0,
                this.params.grabCursor && this.setGrabCursor(),
                this.emit("enable"))
            }
            disable() {
                this.enabled && (this.enabled = !1,
                this.params.grabCursor && this.unsetGrabCursor(),
                this.emit("disable"))
            }
            setProgress(e, t) {
                e = Math.min(Math.max(e, 0), 1);
                let i = this.minTranslate()
                  , s = this.maxTranslate()
                  , r = (s - i) * e + i;
                this.translateTo(r, void 0 === t ? 0 : t),
                this.updateActiveIndex(),
                this.updateSlidesClasses()
            }
            emitContainerClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                let t = this;
                return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
            }
            emitSlidesClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                let t = [];
                e.slides.forEach(i => {
                    let s = e.getSlideClasses(i);
                    t.push({
                        slideEl: i,
                        classNames: s
                    }),
                    e.emit("_slideClass", i, s)
                }
                ),
                e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"),
                void 0 === t && (t = !1);
                let {params: i, slides: s, slidesGrid: r, slidesSizesGrid: n, size: a, activeIndex: l} = this
                  , o = 1;
                if ("number" == typeof i.slidesPerView)
                    return i.slidesPerView;
                if (i.centeredSlides) {
                    let e, t = s[l] ? Math.ceil(s[l].swiperSlideSize) : 0;
                    for (let i = l + 1; i < s.length; i += 1)
                        s[i] && !e && (t += Math.ceil(s[i].swiperSlideSize),
                        o += 1,
                        t > a && (e = !0));
                    for (let i = l - 1; i >= 0; i -= 1)
                        s[i] && !e && (t += s[i].swiperSlideSize,
                        o += 1,
                        t > a && (e = !0))
                } else if ("current" === e)
                    for (let e = l + 1; e < s.length; e += 1) {
                        let i = t ? r[e] + n[e] - r[l] < a : r[e] - r[l] < a;
                        i && (o += 1)
                    }
                else
                    for (let e = l - 1; e >= 0; e -= 1) {
                        let t = r[l] - r[e] < a;
                        t && (o += 1)
                    }
                return o
            }
            update() {
                let e;
                let t = this;
                if (!t || t.destroyed)
                    return;
                let {snapGrid: i, params: s} = t;
                function setTranslate() {
                    let e = t.rtlTranslate ? -1 * t.translate : t.translate
                      , i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                    t.setTranslate(i),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                }
                if (s.breakpoints && t.setBreakpoint(),
                [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                    e.complete && processLazyPreloader(t, e)
                }
                ),
                t.updateSize(),
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                s.freeMode && s.freeMode.enabled && !s.cssMode)
                    setTranslate(),
                    s.autoHeight && t.updateAutoHeight();
                else {
                    if (("auto" === s.slidesPerView || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
                        let i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
                        e = t.slideTo(i.length - 1, 0, !1, !0)
                    } else
                        e = t.slideTo(t.activeIndex, 0, !1, !0);
                    e || setTranslate()
                }
                s.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
                t.emit("update")
            }
            changeDirection(e, t) {
                void 0 === t && (t = !0);
                let i = this.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                e === i || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${i}`),
                this.el.classList.add(`${this.params.containerModifierClass}${e}`),
                this.emitContainerClasses(),
                this.params.direction = e,
                this.slides.forEach(t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                }
                ),
                this.emit("changeDirection"),
                t && this.update()),
                this
            }
            changeLanguageDirection(e) {
                (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e,
                this.rtlTranslate = "horizontal" === this.params.direction && this.rtl,
                this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`),
                this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`),
                this.el.dir = "ltr"),
                this.update())
            }
            mount(e) {
                let t = this;
                if (t.mounted)
                    return !0;
                let i = e || t.params.el;
                if ("string" == typeof i && (i = document.querySelector(i)),
                !i)
                    return !1;
                i.swiper = t,
                i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                let getWrapperSelector = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`
                  , s = ( () => {
                    if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                        let e = i.shadowRoot.querySelector(getWrapperSelector());
                        return e
                    }
                    return (0,
                    o.e)(i, getWrapperSelector())[0]
                }
                )();
                return !s && t.params.createElements && (s = (0,
                o.c)("div", t.params.wrapperClass),
                i.append(s),
                (0,
                o.e)(i, `.${t.params.slideClass}`).forEach(e => {
                    s.append(e)
                }
                )),
                Object.assign(t, {
                    el: i,
                    wrapperEl: s,
                    slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : s,
                    hostEl: t.isElement ? i.parentNode.host : i,
                    mounted: !0,
                    rtl: "rtl" === i.dir.toLowerCase() || "rtl" === (0,
                    o.p)(i, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === (0,
                    o.p)(i, "direction")),
                    wrongRTL: "-webkit-box" === (0,
                    o.p)(s, "display")
                }),
                !0
            }
            init(e) {
                let t = this;
                if (t.initialized)
                    return t;
                let i = t.mount(e);
                if (!1 === i)
                    return t;
                t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                t.params.loop && t.loopCreate(void 0, !0),
                t.attachEvents();
                let s = [...t.el.querySelectorAll('[loading="lazy"]')];
                return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
                s.forEach(e => {
                    e.complete ? processLazyPreloader(t, e) : e.addEventListener("load", e => {
                        processLazyPreloader(t, e.target)
                    }
                    )
                }
                ),
                preload(t),
                t.initialized = !0,
                preload(t),
                t.emit("init"),
                t.emit("afterInit"),
                t
            }
            destroy(e, t) {
                void 0 === e && (e = !0),
                void 0 === t && (t = !0);
                let i = this
                  , {params: s, el: r, wrapperEl: n, slides: a} = i;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"),
                i.initialized = !1,
                i.detachEvents(),
                s.loop && i.loopDestroy(),
                t && (i.removeClasses(),
                r && "string" != typeof r && r.removeAttribute("style"),
                n && n.removeAttribute("style"),
                a && a.length && a.forEach(e => {
                    e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index")
                }
                )),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach(e => {
                    i.off(e)
                }
                ),
                !1 !== e && (i.el && "string" != typeof i.el && (i.el.swiper = null),
                (0,
                o.x)(i)),
                i.destroyed = !0),
                null
            }
            static extendDefaults(e) {
                (0,
                o.w)(p, e)
            }
            static get extendedDefaults() {
                return p
            }
            static get defaults() {
                return d
            }
            static installModule(e) {
                Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
                let t = Swiper.prototype.__modules__;
                "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? e.forEach(e => Swiper.installModule(e)) : Swiper.installModule(e),
                Swiper
            }
        }
        ;
        Object.keys(u).forEach(e => {
            Object.keys(u[e]).forEach(t => {
                Swiper.prototype[t] = u[e][t]
            }
            )
        }
        ),
        Swiper.use([function(e) {
            let {swiper: t, on: i, emit: s} = e
              , r = (0,
            l.a)()
              , n = null
              , a = null
              , resizeHandler = () => {
                t && !t.destroyed && t.initialized && (s("beforeResize"),
                s("resize"))
            }
              , createObserver = () => {
                t && !t.destroyed && t.initialized && (n = new ResizeObserver(e => {
                    a = r.requestAnimationFrame( () => {
                        let {width: i, height: s} = t
                          , r = i
                          , n = s;
                        e.forEach(e => {
                            let {contentBoxSize: i, contentRect: s, target: a} = e;
                            a && a !== t.el || (r = s ? s.width : (i[0] || i).inlineSize,
                            n = s ? s.height : (i[0] || i).blockSize)
                        }
                        ),
                        (r !== i || n !== s) && resizeHandler()
                    }
                    )
                }
                )).observe(t.el)
            }
              , removeObserver = () => {
                a && r.cancelAnimationFrame(a),
                n && n.unobserve && t.el && (n.unobserve(t.el),
                n = null)
            }
              , orientationChangeHandler = () => {
                t && !t.destroyed && t.initialized && s("orientationchange")
            }
            ;
            i("init", () => {
                if (t.params.resizeObserver && void 0 !== r.ResizeObserver) {
                    createObserver();
                    return
                }
                r.addEventListener("resize", resizeHandler),
                r.addEventListener("orientationchange", orientationChangeHandler)
            }
            ),
            i("destroy", () => {
                removeObserver(),
                r.removeEventListener("resize", resizeHandler),
                r.removeEventListener("orientationchange", orientationChangeHandler)
            }
            )
        }
        , function(e) {
            let {swiper: t, extendParams: i, on: s, emit: r} = e
              , n = []
              , a = (0,
            l.a)()
              , attach = function(e, i) {
                void 0 === i && (i = {});
                let s = a.MutationObserver || a.WebkitMutationObserver
                  , l = new s(e => {
                    if (t.__preventObserver__)
                        return;
                    if (1 === e.length) {
                        r("observerUpdate", e[0]);
                        return
                    }
                    let observerUpdate = function() {
                        r("observerUpdate", e[0])
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(observerUpdate) : a.setTimeout(observerUpdate, 0)
                }
                );
                l.observe(e, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: t.isElement || (void 0 === i.childList || i).childList,
                    characterData: void 0 === i.characterData || i.characterData
                }),
                n.push(l)
            };
            i({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }),
            s("init", () => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        let e = (0,
                        o.a)(t.hostEl);
                        for (let t = 0; t < e.length; t += 1)
                            attach(e[t])
                    }
                    attach(t.hostEl, {
                        childList: t.params.observeSlideChildren
                    }),
                    attach(t.wrapperEl, {
                        attributes: !1
                    })
                }
            }
            ),
            s("destroy", () => {
                n.forEach(e => {
                    e.disconnect()
                }
                ),
                n.splice(0, n.length)
            }
            )
        }
        ]);
        let c = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
        function isObject(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
        }
        function extend(e, t) {
            let i = ["__proto__", "constructor", "prototype"];
            Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                void 0 === e[i] ? e[i] = t[i] : isObject(t[i]) && isObject(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : extend(e[i], t[i]) : e[i] = t[i]
            }
            )
        }
        function needsNavigation(e) {
            return void 0 === e && (e = {}),
            e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
        }
        function needsPagination(e) {
            return void 0 === e && (e = {}),
            e.pagination && void 0 === e.pagination.el
        }
        function needsScrollbar(e) {
            return void 0 === e && (e = {}),
            e.scrollbar && void 0 === e.scrollbar.el
        }
        function uniqueClasses(e) {
            void 0 === e && (e = "");
            let t = e.split(" ").map(e => e.trim()).filter(e => !!e)
              , i = [];
            return t.forEach(e => {
                0 > i.indexOf(e) && i.push(e)
            }
            ),
            i.join(" ")
        }
        let updateOnVirtualData = e => {
            e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
        }
        ;
        function _extends() {
            return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                        Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function isChildSwiperSlide(e) {
            return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
        }
        function useIsomorphicLayoutEffect(e, t) {
            return "undefined" == typeof window ? (0,
            a.useEffect)(e, t) : (0,
            a.useLayoutEffect)(e, t)
        }
        let h = (0,
        a.createContext)(null)
          , f = (0,
        a.createContext)(null)
          , m = (0,
        a.forwardRef)(function(e, t) {
            var i;
            let {className: s, tag: r="div", wrapperTag: n="div", children: l, onSwiper: o, ...u} = void 0 === e ? {} : e
              , p = !1
              , [h,m] = (0,
            a.useState)("swiper")
              , [v,g] = (0,
            a.useState)(null)
              , [w,S] = (0,
            a.useState)(!1)
              , y = (0,
            a.useRef)(!1)
              , b = (0,
            a.useRef)(null)
              , T = (0,
            a.useRef)(null)
              , E = (0,
            a.useRef)(null)
              , x = (0,
            a.useRef)(null)
              , C = (0,
            a.useRef)(null)
              , M = (0,
            a.useRef)(null)
              , P = (0,
            a.useRef)(null)
              , O = (0,
            a.useRef)(null)
              , {params: L, passedParams: k, rest: _, events: I} = function(e, t) {
                void 0 === e && (e = {}),
                void 0 === t && (t = !0);
                let i = {
                    on: {}
                }
                  , s = {}
                  , r = {};
                extend(i, d),
                i._emitClasses = !0,
                i.init = !1;
                let n = {}
                  , a = c.map(e => e.replace(/_/, ""))
                  , l = Object.assign({}, e);
                return Object.keys(l).forEach(l => {
                    void 0 !== e[l] && (a.indexOf(l) >= 0 ? isObject(e[l]) ? (i[l] = {},
                    r[l] = {},
                    extend(i[l], e[l]),
                    extend(r[l], e[l])) : (i[l] = e[l],
                    r[l] = e[l]) : 0 === l.search(/on[A-Z]/) && "function" == typeof e[l] ? t ? s[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : i.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : n[l] = e[l])
                }
                ),
                ["navigation", "pagination", "scrollbar"].forEach(e => {
                    !0 === i[e] && (i[e] = {}),
                    !1 === i[e] && delete i[e]
                }
                ),
                {
                    params: i,
                    passedParams: r,
                    rest: n,
                    events: s
                }
            }(u)
              , {slides: z, slots: A} = function(e) {
                let t = []
                  , i = {
                    "container-start": [],
                    "container-end": [],
                    "wrapper-start": [],
                    "wrapper-end": []
                };
                return a.Children.toArray(e).forEach(e => {
                    if (isChildSwiperSlide(e))
                        t.push(e);
                    else if (e.props && e.props.slot && i[e.props.slot])
                        i[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        let s = function processChildren(e) {
                            let t = [];
                            return a.Children.toArray(e).forEach(e => {
                                isChildSwiperSlide(e) ? t.push(e) : e.props && e.props.children && processChildren(e.props.children).forEach(e => t.push(e))
                            }
                            ),
                            t
                        }(e.props.children);
                        s.length > 0 ? s.forEach(e => t.push(e)) : i["container-end"].push(e)
                    } else
                        i["container-end"].push(e)
                }
                ),
                {
                    slides: t,
                    slots: i
                }
            }(l)
              , onBeforeBreakpoint = () => {
                S(!w)
            }
            ;
            Object.assign(L.on, {
                _containerClasses(e, t) {
                    m(t)
                }
            });
            let initSwiper = () => {
                Object.assign(L.on, I),
                p = !0;
                let e = {
                    ...L
                };
                if (delete e.wrapperClass,
                T.current = new Swiper(e),
                T.current.virtual && T.current.params.virtual.enabled) {
                    T.current.virtual.slides = z;
                    let e = {
                        cache: !1,
                        slides: z,
                        renderExternal: g,
                        renderExternalUpdate: !1
                    };
                    extend(T.current.params.virtual, e),
                    extend(T.current.originalParams.virtual, e)
                }
            }
            ;
            b.current || initSwiper(),
            T.current && T.current.on("_beforeBreakpoint", onBeforeBreakpoint);
            let attachEvents = () => {
                !p && I && T.current && Object.keys(I).forEach(e => {
                    T.current.on(e, I[e])
                }
                )
            }
              , detachEvents = () => {
                I && T.current && Object.keys(I).forEach(e => {
                    T.current.off(e, I[e])
                }
                )
            }
            ;
            return (0,
            a.useEffect)( () => () => {
                T.current && T.current.off("_beforeBreakpoint", onBeforeBreakpoint)
            }
            ),
            (0,
            a.useEffect)( () => {
                !y.current && T.current && (T.current.emitSlidesClasses(),
                y.current = !0)
            }
            ),
            useIsomorphicLayoutEffect( () => {
                if (t && (t.current = b.current),
                b.current)
                    return T.current.destroyed && initSwiper(),
                    function(e, t) {
                        let {el: i, nextEl: s, prevEl: r, paginationEl: n, scrollbarEl: a, swiper: l} = e;
                        needsNavigation(t) && s && r && (l.params.navigation.nextEl = s,
                        l.originalParams.navigation.nextEl = s,
                        l.params.navigation.prevEl = r,
                        l.originalParams.navigation.prevEl = r),
                        needsPagination(t) && n && (l.params.pagination.el = n,
                        l.originalParams.pagination.el = n),
                        needsScrollbar(t) && a && (l.params.scrollbar.el = a,
                        l.originalParams.scrollbar.el = a),
                        l.init(i)
                    }({
                        el: b.current,
                        nextEl: C.current,
                        prevEl: M.current,
                        paginationEl: P.current,
                        scrollbarEl: O.current,
                        swiper: T.current
                    }, L),
                    o && !T.current.destroyed && o(T.current),
                    () => {
                        T.current && !T.current.destroyed && T.current.destroy(!0, !1)
                    }
            }
            , []),
            useIsomorphicLayoutEffect( () => {
                attachEvents();
                let e = function(e, t, i, s, r) {
                    let n = [];
                    if (!t)
                        return n;
                    let addKey = e => {
                        0 > n.indexOf(e) && n.push(e)
                    }
                    ;
                    if (i && s) {
                        let e = s.map(r)
                          , t = i.map(r);
                        e.join("") !== t.join("") && addKey("children"),
                        s.length !== i.length && addKey("children")
                    }
                    let a = c.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                    return a.forEach(i => {
                        if (i in e && i in t) {
                            if (isObject(e[i]) && isObject(t[i])) {
                                let s = Object.keys(e[i])
                                  , r = Object.keys(t[i]);
                                s.length !== r.length ? addKey(i) : (s.forEach(s => {
                                    e[i][s] !== t[i][s] && addKey(i)
                                }
                                ),
                                r.forEach(s => {
                                    e[i][s] !== t[i][s] && addKey(i)
                                }
                                ))
                            } else
                                e[i] !== t[i] && addKey(i)
                        }
                    }
                    ),
                    n
                }(k, E.current, z, x.current, e => e.key);
                return E.current = k,
                x.current = z,
                e.length && T.current && !T.current.destroyed && function(e) {
                    let t, i, s, r, n, a, l, o, {swiper: d, slides: u, passedParams: p, changedParams: c, nextEl: h, prevEl: f, scrollbarEl: m, paginationEl: v} = e, g = c.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e), {params: w, pagination: S, navigation: y, scrollbar: b, virtual: T, thumbs: E} = d;
                    c.includes("thumbs") && p.thumbs && p.thumbs.swiper && !p.thumbs.swiper.destroyed && w.thumbs && (!w.thumbs.swiper || w.thumbs.swiper.destroyed) && (t = !0),
                    c.includes("controller") && p.controller && p.controller.control && w.controller && !w.controller.control && (i = !0),
                    c.includes("pagination") && p.pagination && (p.pagination.el || v) && (w.pagination || !1 === w.pagination) && S && !S.el && (s = !0),
                    c.includes("scrollbar") && p.scrollbar && (p.scrollbar.el || m) && (w.scrollbar || !1 === w.scrollbar) && b && !b.el && (r = !0),
                    c.includes("navigation") && p.navigation && (p.navigation.prevEl || f) && (p.navigation.nextEl || h) && (w.navigation || !1 === w.navigation) && y && !y.prevEl && !y.nextEl && (n = !0);
                    let destroyModule = e => {
                        d[e] && (d[e].destroy(),
                        "navigation" === e ? (d.isElement && (d[e].prevEl.remove(),
                        d[e].nextEl.remove()),
                        w[e].prevEl = void 0,
                        w[e].nextEl = void 0,
                        d[e].prevEl = void 0,
                        d[e].nextEl = void 0) : (d.isElement && d[e].el.remove(),
                        w[e].el = void 0,
                        d[e].el = void 0))
                    }
                    ;
                    if (c.includes("loop") && d.isElement && (w.loop && !p.loop ? a = !0 : !w.loop && p.loop ? l = !0 : o = !0),
                    g.forEach(e => {
                        if (isObject(w[e]) && isObject(p[e]))
                            Object.assign(w[e], p[e]),
                            ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled"in p[e] && !p[e].enabled && destroyModule(e);
                        else {
                            let t = p[e];
                            (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && destroyModule(e) : w[e] = p[e]
                        }
                    }
                    ),
                    g.includes("controller") && !i && d.controller && d.controller.control && w.controller && w.controller.control && (d.controller.control = w.controller.control),
                    c.includes("children") && u && T && w.virtual.enabled ? (T.slides = u,
                    T.update(!0)) : c.includes("virtual") && T && w.virtual.enabled && (u && (T.slides = u),
                    T.update(!0)),
                    c.includes("children") && u && w.loop && (o = !0),
                    t) {
                        let e = E.init();
                        e && E.update(!0)
                    }
                    i && (d.controller.control = w.controller.control),
                    s && (d.isElement && (!v || "string" == typeof v) && ((v = document.createElement("div")).classList.add("swiper-pagination"),
                    v.part.add("pagination"),
                    d.el.appendChild(v)),
                    v && (w.pagination.el = v),
                    S.init(),
                    S.render(),
                    S.update()),
                    r && (d.isElement && (!m || "string" == typeof m) && ((m = document.createElement("div")).classList.add("swiper-scrollbar"),
                    m.part.add("scrollbar"),
                    d.el.appendChild(m)),
                    m && (w.scrollbar.el = m),
                    b.init(),
                    b.updateSize(),
                    b.setTranslate()),
                    n && (d.isElement && (h && "string" != typeof h || ((h = document.createElement("div")).classList.add("swiper-button-next"),
                    h.innerHTML = d.hostEl.constructor.nextButtonSvg,
                    h.part.add("button-next"),
                    d.el.appendChild(h)),
                    f && "string" != typeof f || ((f = document.createElement("div")).classList.add("swiper-button-prev"),
                    f.innerHTML = d.hostEl.constructor.prevButtonSvg,
                    f.part.add("button-prev"),
                    d.el.appendChild(f))),
                    h && (w.navigation.nextEl = h),
                    f && (w.navigation.prevEl = f),
                    y.init(),
                    y.update()),
                    c.includes("allowSlideNext") && (d.allowSlideNext = p.allowSlideNext),
                    c.includes("allowSlidePrev") && (d.allowSlidePrev = p.allowSlidePrev),
                    c.includes("direction") && d.changeDirection(p.direction, !1),
                    (a || o) && d.loopDestroy(),
                    (l || o) && d.loopCreate(),
                    d.update()
                }({
                    swiper: T.current,
                    slides: z,
                    passedParams: k,
                    changedParams: e,
                    nextEl: C.current,
                    prevEl: M.current,
                    scrollbarEl: O.current,
                    paginationEl: P.current
                }),
                () => {
                    detachEvents()
                }
            }
            ),
            useIsomorphicLayoutEffect( () => {
                updateOnVirtualData(T.current)
            }
            , [v]),
            a.createElement(r, _extends({
                ref: b,
                className: uniqueClasses(`${h}${s ? ` ${s}` : ""}`)
            }, _), a.createElement(f.Provider, {
                value: T.current
            }, A["container-start"], a.createElement(n, {
                className: (void 0 === (i = L.wrapperClass) && (i = ""),
                i) ? i.includes("swiper-wrapper") ? i : `swiper-wrapper ${i}` : "swiper-wrapper"
            }, A["wrapper-start"], L.virtual ? function(e, t, i) {
                if (!i)
                    return null;
                let getSlideIndex = e => {
                    let i = e;
                    return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length),
                    i
                }
                  , s = e.isHorizontal() ? {
                    [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                } : {
                    top: `${i.offset}px`
                }
                  , {from: r, to: n} = i
                  , l = e.params.loop ? -t.length : 0
                  , o = e.params.loop ? 2 * t.length : t.length
                  , d = [];
                for (let e = l; e < o; e += 1)
                    e >= r && e <= n && d.push(t[getSlideIndex(e)]);
                return d.map( (t, i) => a.cloneElement(t, {
                    swiper: e,
                    style: s,
                    key: t.props.virtualIndex || t.key || `slide-${i}`
                }))
            }(T.current, z, v) : z.map( (e, t) => a.cloneElement(e, {
                swiper: T.current,
                swiperSlideIndex: t
            })), A["wrapper-end"]), needsNavigation(L) && a.createElement(a.Fragment, null, a.createElement("div", {
                ref: M,
                className: "swiper-button-prev"
            }), a.createElement("div", {
                ref: C,
                className: "swiper-button-next"
            })), needsScrollbar(L) && a.createElement("div", {
                ref: O,
                className: "swiper-scrollbar"
            }), needsPagination(L) && a.createElement("div", {
                ref: P,
                className: "swiper-pagination"
            }), A["container-end"]))
        });
        m.displayName = "Swiper";
        let v = (0,
        a.forwardRef)(function(e, t) {
            let {tag: i="div", children: s, className: r="", swiper: n, zoom: l, lazy: o, virtualIndex: d, swiperSlideIndex: u, ...p} = void 0 === e ? {} : e
              , c = (0,
            a.useRef)(null)
              , [f,m] = (0,
            a.useState)("swiper-slide")
              , [v,g] = (0,
            a.useState)(!1);
            function updateClasses(e, t, i) {
                t === c.current && m(i)
            }
            useIsomorphicLayoutEffect( () => {
                if (void 0 !== u && (c.current.swiperSlideIndex = u),
                t && (t.current = c.current),
                c.current && n) {
                    if (n.destroyed) {
                        "swiper-slide" !== f && m("swiper-slide");
                        return
                    }
                    return n.on("_slideClass", updateClasses),
                    () => {
                        n && n.off("_slideClass", updateClasses)
                    }
                }
            }
            ),
            useIsomorphicLayoutEffect( () => {
                n && c.current && !n.destroyed && m(n.getSlideClasses(c.current))
            }
            , [n]);
            let w = {
                isActive: f.indexOf("swiper-slide-active") >= 0,
                isVisible: f.indexOf("swiper-slide-visible") >= 0,
                isPrev: f.indexOf("swiper-slide-prev") >= 0,
                isNext: f.indexOf("swiper-slide-next") >= 0
            }
              , renderChildren = () => "function" == typeof s ? s(w) : s;
            return a.createElement(i, _extends({
                ref: c,
                className: uniqueClasses(`${f}${r ? ` ${r}` : ""}`),
                "data-swiper-slide-index": d,
                onLoad: () => {
                    g(!0)
                }
            }, p), l && a.createElement(h.Provider, {
                value: w
            }, a.createElement("div", {
                className: "swiper-zoom-container",
                "data-swiper-zoom": "number" == typeof l ? l : void 0
            }, renderChildren(), o && !v && a.createElement("div", {
                className: "swiper-lazy-preloader"
            }))), !l && a.createElement(h.Provider, {
                value: w
            }, renderChildren(), o && !v && a.createElement("div", {
                className: "swiper-lazy-preloader"
            })))
        });
        v.displayName = "SwiperSlide"
    }
}]);
