(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[131], {
    251: function(e, t, s) {
        "use strict";
        function assign(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return t.forEach(function(t) {
                t && Object.keys(t).forEach(function(s) {
                    e[s] = t[s]
                })
            }),
            e
        }
        function _class(e) {
            return Object.prototype.toString.call(e)
        }
        function isFunction(e) {
            return "[object Function]" === _class(e)
        }
        function escapeRE(e) {
            return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
        }
        var l = {
            fuzzyLink: !0,
            fuzzyEmail: !0,
            fuzzyIP: !1
        }
          , c = {
            "http:": {
                validate: function(e, t, s) {
                    var l = e.slice(t);
                    return (s.re.http || (s.re.http = RegExp("^\\/\\/" + s.re.src_auth + s.re.src_host_port_strict + s.re.src_path, "i")),
                    s.re.http.test(l)) ? l.match(s.re.http)[0].length : 0
                }
            },
            "https:": "http:",
            "ftp:": "http:",
            "//": {
                validate: function(e, t, s) {
                    var l = e.slice(t);
                    return (s.re.no_http || (s.re.no_http = RegExp("^" + s.re.src_auth + "(?:localhost|(?:(?:" + s.re.src_domain + ")\\.)+" + s.re.src_domain_root + ")" + s.re.src_port + s.re.src_host_terminator + s.re.src_path, "i")),
                    s.re.no_http.test(l)) ? t >= 3 && ":" === e[t - 3] || t >= 3 && "/" === e[t - 3] ? 0 : l.match(s.re.no_http)[0].length : 0
                }
            },
            "mailto:": {
                validate: function(e, t, s) {
                    var l = e.slice(t);
                    return (s.re.mailto || (s.re.mailto = RegExp("^" + s.re.src_email_name + "@" + s.re.src_host_strict, "i")),
                    s.re.mailto.test(l)) ? l.match(s.re.mailto)[0].length : 0
                }
            }
        }
          , u = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
        function createNormalizer() {
            return function(e, t) {
                t.normalize(e)
            }
        }
        function compile(e) {
            var t = e.re = s(7998)(e.__opts__)
              , l = e.__tlds__.slice();
            function untpl(e) {
                return e.replace("%TLDS%", t.src_tlds)
            }
            e.onCompile(),
            e.__tlds_replaced__ || l.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"),
            l.push(t.src_xn),
            t.src_tlds = l.join("|"),
            t.email_fuzzy = RegExp(untpl(t.tpl_email_fuzzy), "i"),
            t.link_fuzzy = RegExp(untpl(t.tpl_link_fuzzy), "i"),
            t.link_no_ip_fuzzy = RegExp(untpl(t.tpl_link_no_ip_fuzzy), "i"),
            t.host_fuzzy_test = RegExp(untpl(t.tpl_host_fuzzy_test), "i");
            var c = [];
            function schemaError(e, t) {
                throw Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
            }
            e.__compiled__ = {},
            Object.keys(e.__schemas__).forEach(function(t) {
                var s, l = e.__schemas__[t];
                if (null !== l) {
                    var u = {
                        validate: null,
                        link: null
                    };
                    if (e.__compiled__[t] = u,
                    "[object Object]" === _class(l)) {
                        "[object RegExp]" === _class(l.validate) ? u.validate = (s = l.validate,
                        function(e, t) {
                            var l = e.slice(t);
                            return s.test(l) ? l.match(s)[0].length : 0
                        }
                        ) : isFunction(l.validate) ? u.validate = l.validate : schemaError(t, l),
                        isFunction(l.normalize) ? u.normalize = l.normalize : l.normalize ? schemaError(t, l) : u.normalize = createNormalizer();
                        return
                    }
                    if ("[object String]" === _class(l)) {
                        c.push(t);
                        return
                    }
                    schemaError(t, l)
                }
            }),
            c.forEach(function(t) {
                e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate,
                e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
            }),
            e.__compiled__[""] = {
                validate: null,
                normalize: createNormalizer()
            };
            var u = Object.keys(e.__compiled__).filter(function(t) {
                return t.length > 0 && e.__compiled__[t]
            }).map(escapeRE).join("|");
            e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"),
            e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"),
            e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"),
            e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
            e.__index__ = -1,
            e.__text_cache__ = ""
        }
        function Match(e, t) {
            var s = e.__index__
              , l = e.__last_index__
              , c = e.__text_cache__.slice(s, l);
            this.schema = e.__schema__.toLowerCase(),
            this.index = s + t,
            this.lastIndex = l + t,
            this.raw = c,
            this.text = c,
            this.url = c
        }
        function createMatch(e, t) {
            var s = new Match(e,t);
            return e.__compiled__[s.schema].normalize(s, e),
            s
        }
        function LinkifyIt(e, t) {
            if (!(this instanceof LinkifyIt))
                return new LinkifyIt(e,t);
            !t && Object.keys(e || {}).reduce(function(e, t) {
                return e || l.hasOwnProperty(t)
            }, !1) && (t = e,
            e = {}),
            this.__opts__ = assign({}, l, t),
            this.__index__ = -1,
            this.__last_index__ = -1,
            this.__schema__ = "",
            this.__text_cache__ = "",
            this.__schemas__ = assign({}, c, e),
            this.__compiled__ = {},
            this.__tlds__ = u,
            this.__tlds_replaced__ = !1,
            this.re = {},
            compile(this)
        }
        LinkifyIt.prototype.add = function(e, t) {
            return this.__schemas__[e] = t,
            compile(this),
            this
        }
        ,
        LinkifyIt.prototype.set = function(e) {
            return this.__opts__ = assign(this.__opts__, e),
            this
        }
        ,
        LinkifyIt.prototype.test = function(e) {
            var t, s, l, c, u, d, h, g;
            if (this.__text_cache__ = e,
            this.__index__ = -1,
            !e.length)
                return !1;
            if (this.re.schema_test.test(e)) {
                for ((h = this.re.schema_search).lastIndex = 0; null !== (t = h.exec(e)); )
                    if (c = this.testSchemaAt(e, t[2], h.lastIndex)) {
                        this.__schema__ = t[2],
                        this.__index__ = t.index + t[1].length,
                        this.__last_index__ = t.index + t[0].length + c;
                        break
                    }
            }
            return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (g = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || g < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (u = s.index + s[1].length,
            (this.__index__ < 0 || u < this.__index__) && (this.__schema__ = "",
            this.__index__ = u,
            this.__last_index__ = s.index + s[0].length)),
            this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (l = e.match(this.re.email_fuzzy)) && (u = l.index + l[1].length,
            d = l.index + l[0].length,
            (this.__index__ < 0 || u < this.__index__ || u === this.__index__ && d > this.__last_index__) && (this.__schema__ = "mailto:",
            this.__index__ = u,
            this.__last_index__ = d)),
            this.__index__ >= 0
        }
        ,
        LinkifyIt.prototype.pretest = function(e) {
            return this.re.pretest.test(e)
        }
        ,
        LinkifyIt.prototype.testSchemaAt = function(e, t, s) {
            return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, s, this) : 0
        }
        ,
        LinkifyIt.prototype.match = function(e) {
            var t = 0
              , s = [];
            this.__index__ >= 0 && this.__text_cache__ === e && (s.push(createMatch(this, t)),
            t = this.__last_index__);
            for (var l = t ? e.slice(t) : e; this.test(l); )
                s.push(createMatch(this, t)),
                l = l.slice(this.__last_index__),
                t += this.__last_index__;
            return s.length ? s : null
        }
        ,
        LinkifyIt.prototype.matchAtStart = function(e) {
            if (this.__text_cache__ = e,
            this.__index__ = -1,
            !e.length)
                return null;
            var t = this.re.schema_at_start.exec(e);
            if (!t)
                return null;
            var s = this.testSchemaAt(e, t[2], t[0].length);
            return s ? (this.__schema__ = t[2],
            this.__index__ = t.index + t[1].length,
            this.__last_index__ = t.index + t[0].length + s,
            createMatch(this, 0)) : null
        }
        ,
        LinkifyIt.prototype.tlds = function(e, t) {
            return (e = Array.isArray(e) ? e : [e],
            t) ? this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(e, t, s) {
                return e !== s[t - 1]
            }).reverse() : (this.__tlds__ = e.slice(),
            this.__tlds_replaced__ = !0),
            compile(this),
            this
        }
        ,
        LinkifyIt.prototype.normalize = function(e) {
            e.schema || (e.url = "http://" + e.url),
            "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
        }
        ,
        LinkifyIt.prototype.onCompile = function() {}
        ,
        e.exports = LinkifyIt
    },
    7998: function(e, t, s) {
        "use strict";
        e.exports = function(e) {
            var t = {};
            e = e || {},
            t.src_Any = s(3530).source,
            t.src_Cc = s(6889).source,
            t.src_Z = s(8442).source,
            t.src_P = s(7062).source,
            t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"),
            t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
            var l = "[><｜]";
            return t.src_pseudo_letter = "(?:(?!" + l + "|" + t.src_ZPCc + ")" + t.src_Any + ")",
            t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
            t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?",
            t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",
            t.src_host_terminator = "(?=$|" + l + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))",
            t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + l + "|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?",
            t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',
            t.src_xn = "xn--[a-z0-9\\-]{1,59}",
            t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})",
            t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))",
            t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))",
            t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))",
            t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))",
            t.src_host_strict = t.src_host + t.src_host_terminator,
            t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator,
            t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator,
            t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator,
            t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator,
            t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))",
            t.tpl_email_fuzzy = "(^|" + l + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")",
            t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")",
            t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")",
            t
        }
    },
    3289: function(e, t, s) {
        "use strict";
        let l = s(2876)
          , c = {
            leftDelimiter: "{",
            rightDelimiter: "}",
            allowedAttributes: []
        };
        e.exports = function(e, t) {
            let s = Object.assign({}, c);
            s = Object.assign(s, t);
            let u = l(s);
            e.core.ruler.before("linkify", "curly_attributes", function(e) {
                let t = e.tokens;
                for (let e = 0; e < t.length; e++)
                    for (let s = 0; s < u.length; s++) {
                        let l = u[s]
                          , c = null
                          , d = l.tests.every(s => {
                            let l = function test(e, t, s) {
                                var l, c;
                                let u = {
                                    match: !1,
                                    j: null
                                }
                                  , d = void 0 !== s.shift ? t + s.shift : s.position;
                                if (void 0 !== s.shift && d < 0)
                                    return u;
                                let h = d >= 0 ? e[d] : e[e.length + d];
                                if (void 0 === h)
                                    return u;
                                for (let e of Object.keys(s))
                                    if ("shift" !== e && "position" !== e) {
                                        if (void 0 === h[e])
                                            return u;
                                        if ("children" === e && Array.isArray(l = s.children) && l.length && l.every(e => "object" == typeof e)) {
                                            let e;
                                            if (0 === h.children.length)
                                                return u;
                                            let t = s.children
                                              , l = h.children;
                                            if (t.every(e => void 0 !== e.position)) {
                                                if (e = t.every(e => test(l, e.position, e).match)) {
                                                    let e = (t.slice(-1)[0] || {}).position;
                                                    u.j = e >= 0 ? e : l.length + e
                                                }
                                            } else
                                                for (let s = 0; s < l.length; s++)
                                                    if (e = t.every(e => test(l, s, e).match)) {
                                                        u.j = s;
                                                        break
                                                    }
                                            if (!1 === e)
                                                return u;
                                            continue
                                        }
                                        switch (typeof s[e]) {
                                        case "boolean":
                                        case "number":
                                        case "string":
                                            if (h[e] !== s[e])
                                                return u;
                                            break;
                                        case "function":
                                            if (!s[e](h[e]))
                                                return u;
                                            break;
                                        case "object":
                                            if (Array.isArray(c = s[e]) && c.length && c.every(e => "function" == typeof e)) {
                                                let t = s[e].every(t => t(h[e]));
                                                if (!1 === t)
                                                    return u;
                                                break
                                            }
                                        default:
                                            throw Error(`Unknown type of pattern test (key: ${e}). Test should be of type boolean, number, string, function or array of functions.`)
                                        }
                                    }
                                return u.match = !0,
                                u
                            }(t, e, s);
                            return null !== l.j && (c = l.j),
                            l.match
                        }
                        );
                        if (d)
                            try {
                                l.transform(t, e, c),
                                ("inline attributes" === l.name || "inline nesting 0" === l.name) && s--
                            } catch (e) {
                                console.error(`markdown-it-attrs: Error in pattern '${l.name}': ${e.message}`),
                                console.error(e.stack)
                            }
                    }
            })
        }
    },
    2876: function(e, t, s) {
        "use strict";
        let l = s(351);
        function last(e) {
            return e.slice(-1)[0]
        }
        function hidden(e) {
            e.hidden = !0,
            e.children && e.children.forEach(e => (e.content = "",
            void hidden(e)))
        }
        e.exports = e => {
            let t = RegExp("^ {0,3}[-*_]{3,} ?" + l.escapeRegExp(e.leftDelimiter) + "[^" + l.escapeRegExp(e.rightDelimiter) + "]");
            return [{
                name: "fenced code blocks",
                tests: [{
                    shift: 0,
                    block: !0,
                    info: l.hasDelimiters("end", e)
                }],
                transform: (t, s) => {
                    let c = t[s]
                      , u = c.info.lastIndexOf(e.leftDelimiter)
                      , d = l.getAttrs(c.info, u, e);
                    l.addAttrs(d, c),
                    c.info = l.removeDelimiter(c.info, e)
                }
            }, {
                name: "inline nesting 0",
                tests: [{
                    shift: 0,
                    type: "inline",
                    children: [{
                        shift: -1,
                        type: e => "image" === e || "code_inline" === e
                    }, {
                        shift: 0,
                        type: "text",
                        content: l.hasDelimiters("start", e)
                    }]
                }],
                transform: (t, s, c) => {
                    let u = t[s].children[c]
                      , d = u.content.indexOf(e.rightDelimiter)
                      , h = t[s].children[c - 1]
                      , g = l.getAttrs(u.content, 0, e);
                    l.addAttrs(g, h),
                    u.content.length === d + e.rightDelimiter.length ? t[s].children.splice(c, 1) : u.content = u.content.slice(d + e.rightDelimiter.length)
                }
            }, {
                name: "tables",
                tests: [{
                    shift: 0,
                    type: "table_close"
                }, {
                    shift: 1,
                    type: "paragraph_open"
                }, {
                    shift: 2,
                    type: "inline",
                    content: l.hasDelimiters("only", e)
                }],
                transform: (t, s) => {
                    let c = t[s + 2]
                      , u = l.getMatchingOpeningToken(t, s)
                      , d = l.getAttrs(c.content, 0, e);
                    l.addAttrs(d, u),
                    t.splice(s + 1, 3)
                }
            }, {
                name: "tables thead metadata",
                tests: [{
                    shift: 0,
                    type: "tr_close"
                }, {
                    shift: 1,
                    type: "thead_close"
                }, {
                    shift: 2,
                    type: "tbody_open"
                }],
                transform: (e, t) => {
                    let s = l.getMatchingOpeningToken(e, t)
                      , c = e[t - 1]
                      , u = 0
                      , d = t;
                    for (; --d; ) {
                        if (e[d] === s) {
                            e[d - 1].meta = Object.assign({}, e[d + 2].meta, {
                                colsnum: u
                            });
                            break
                        }
                        u += (e[d].level === c.level && e[d].type === c.type) >> 0
                    }
                    e[t + 2].meta = Object.assign({}, e[t + 2].meta, {
                        colsnum: u
                    })
                }
            }, {
                name: "tables tbody calculate",
                tests: [{
                    shift: 0,
                    type: "tbody_close",
                    hidden: !1
                }],
                transform: (e, t) => {
                    let s = t - 2;
                    for (; s > 0 && "tbody_open" !== e[--s].type; )
                        ;
                    let l = e[s].meta.colsnum >> 0;
                    if (l < 2)
                        return;
                    let c = e[t].level + 2;
                    for (let u = s; u < t; u++) {
                        if (e[u].level > c)
                            continue;
                        let d = e[u]
                          , h = d.hidden ? 0 : d.attrGet("rowspan") >> 0
                          , g = d.hidden ? 0 : d.attrGet("colspan") >> 0;
                        if (h > 1) {
                            let t = l - (g > 0 ? g : 1);
                            for (let s = u, l = h; l > 1; s++)
                                "tr_open" == e[s].type && (e[s].meta = Object.assign({}, e[s].meta),
                                e[s].meta && e[s].meta.colsnum && (t -= 1),
                                e[s].meta.colsnum = t,
                                l--)
                        }
                        if ("tr_open" == d.type && d.meta && d.meta.colsnum) {
                            let s = d.meta.colsnum;
                            for (let l = u, c = 0; l < t; l++) {
                                if ("td_open" == e[l].type)
                                    c += 1;
                                else if ("tr_close" == e[l].type)
                                    break;
                                c > s && (e[l].hidden || hidden(e[l]))
                            }
                        }
                        if (g > 1) {
                            let c = []
                              , h = u + 3
                              , m = l;
                            for (let t = u; t > s; t--) {
                                if ("tr_open" == e[t].type) {
                                    m = e[t].meta && e[t].meta.colsnum || m;
                                    break
                                }
                                "td_open" === e[t].type && c.unshift(t)
                            }
                            for (let s = u + 2; s < t; s++) {
                                if ("tr_close" == e[s].type) {
                                    h = s;
                                    break
                                }
                                "td_open" == e[s].type && c.push(s)
                            }
                            let b = c.indexOf(u)
                              , _ = m - b;
                            _ = _ > g ? g : _,
                            g > _ && d.attrSet("colspan", _ + "");
                            for (let t = c.slice(m + 1 - l - _)[0]; t < h; t++)
                                e[t].hidden || hidden(e[t])
                        }
                    }
                }
            }, {
                name: "inline attributes",
                tests: [{
                    shift: 0,
                    type: "inline",
                    children: [{
                        shift: -1,
                        nesting: -1
                    }, {
                        shift: 0,
                        type: "text",
                        content: l.hasDelimiters("start", e)
                    }]
                }],
                transform: (t, s, c) => {
                    let u = t[s].children[c]
                      , d = u.content
                      , h = l.getAttrs(d, 0, e)
                      , g = l.getMatchingOpeningToken(t[s].children, c - 1);
                    l.addAttrs(h, g),
                    u.content = d.slice(d.indexOf(e.rightDelimiter) + e.rightDelimiter.length)
                }
            }, {
                name: "list softbreak",
                tests: [{
                    shift: -2,
                    type: "list_item_open"
                }, {
                    shift: 0,
                    type: "inline",
                    children: [{
                        position: -2,
                        type: "softbreak"
                    }, {
                        position: -1,
                        type: "text",
                        content: l.hasDelimiters("only", e)
                    }]
                }],
                transform: (t, s, c) => {
                    let u = t[s].children[c]
                      , d = u.content
                      , h = l.getAttrs(d, 0, e)
                      , g = s - 2;
                    for (; t[g - 1] && "ordered_list_open" !== t[g - 1].type && "bullet_list_open" !== t[g - 1].type; )
                        g--;
                    l.addAttrs(h, t[g - 1]),
                    t[s].children = t[s].children.slice(0, -2)
                }
            }, {
                name: "list double softbreak",
                tests: [{
                    shift: 0,
                    type: e => "bullet_list_close" === e || "ordered_list_close" === e
                }, {
                    shift: 1,
                    type: "paragraph_open"
                }, {
                    shift: 2,
                    type: "inline",
                    content: l.hasDelimiters("only", e),
                    children: e => 1 === e.length
                }, {
                    shift: 3,
                    type: "paragraph_close"
                }],
                transform: (t, s) => {
                    let c = t[s + 2]
                      , u = c.content
                      , d = l.getAttrs(u, 0, e)
                      , h = l.getMatchingOpeningToken(t, s);
                    l.addAttrs(d, h),
                    t.splice(s + 1, 3)
                }
            }, {
                name: "list item end",
                tests: [{
                    shift: -2,
                    type: "list_item_open"
                }, {
                    shift: 0,
                    type: "inline",
                    children: [{
                        position: -1,
                        type: "text",
                        content: l.hasDelimiters("end", e)
                    }]
                }],
                transform: (t, s, c) => {
                    let u = t[s].children[c]
                      , d = u.content
                      , h = l.getAttrs(d, d.lastIndexOf(e.leftDelimiter), e);
                    l.addAttrs(h, t[s - 2]);
                    let g = d.slice(0, d.lastIndexOf(e.leftDelimiter));
                    u.content = " " !== last(g) ? g : g.slice(0, -1)
                }
            }, {
                name: "\n{.a} softbreak then curly in start",
                tests: [{
                    shift: 0,
                    type: "inline",
                    children: [{
                        position: -2,
                        type: "softbreak"
                    }, {
                        position: -1,
                        type: "text",
                        content: l.hasDelimiters("only", e)
                    }]
                }],
                transform: (t, s, c) => {
                    let u = t[s].children[c]
                      , d = l.getAttrs(u.content, 0, e)
                      , h = s + 1;
                    for (; t[h + 1] && -1 === t[h + 1].nesting; )
                        h++;
                    let g = l.getMatchingOpeningToken(t, h);
                    l.addAttrs(d, g),
                    t[s].children = t[s].children.slice(0, -2)
                }
            }, {
                name: "horizontal rule",
                tests: [{
                    shift: 0,
                    type: "paragraph_open"
                }, {
                    shift: 1,
                    type: "inline",
                    children: e => 1 === e.length,
                    content: e => null !== e.match(t)
                }, {
                    shift: 2,
                    type: "paragraph_close"
                }],
                transform: (t, s) => {
                    let c = t[s];
                    c.type = "hr",
                    c.tag = "hr",
                    c.nesting = 0;
                    let u = t[s + 1].content
                      , d = u.lastIndexOf(e.leftDelimiter)
                      , h = l.getAttrs(u, d, e);
                    l.addAttrs(h, c),
                    c.markup = u,
                    t.splice(s + 1, 2)
                }
            }, {
                name: "end of block",
                tests: [{
                    shift: 0,
                    type: "inline",
                    children: [{
                        position: -1,
                        content: l.hasDelimiters("end", e),
                        type: e => "code_inline" !== e && "math_inline" !== e
                    }]
                }],
                transform: (t, s, c) => {
                    let u = t[s].children[c]
                      , d = u.content
                      , h = l.getAttrs(d, d.lastIndexOf(e.leftDelimiter), e)
                      , g = s + 1;
                    do
                        if (t[g] && -1 === t[g].nesting)
                            break;
                    while (g++ < t.length);
                    let m = l.getMatchingOpeningToken(t, g);
                    l.addAttrs(h, m);
                    let b = d.slice(0, d.lastIndexOf(e.leftDelimiter));
                    u.content = " " !== last(b) ? b : b.slice(0, -1)
                }
            }]
        }
    },
    351: function(e, t) {
        function escapeRegExp(e) {
            return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        t.getAttrs = function(e, t, s) {
            let l = /[^\t\n\f />"'=]/
              , c = []
              , u = ""
              , d = ""
              , h = !0
              , g = !1;
            for (let m = t + s.leftDelimiter.length; m < e.length; m++) {
                if (e.slice(m, m + s.rightDelimiter.length) === s.rightDelimiter) {
                    "" !== u && c.push([u, d]);
                    break
                }
                let t = e.charAt(m);
                if ("=" === t && h) {
                    h = !1;
                    continue
                }
                if ("." === t && "" === u) {
                    "." === e.charAt(m + 1) ? (u = "css-module",
                    m += 1) : u = "class",
                    h = !1;
                    continue
                }
                if ("#" === t && "" === u) {
                    u = "id",
                    h = !1;
                    continue
                }
                if ('"' === t && "" === d && !g) {
                    g = !0;
                    continue
                }
                if ('"' === t && g) {
                    g = !1;
                    continue
                }
                if (" " === t && !g) {
                    if ("" === u)
                        continue;
                    c.push([u, d]),
                    u = "",
                    d = "",
                    h = !0;
                    continue
                }
                if (!h || -1 !== t.search(l)) {
                    if (h) {
                        u += t;
                        continue
                    }
                    d += t
                }
            }
            if (s.allowedAttributes && s.allowedAttributes.length) {
                let e = s.allowedAttributes;
                return c.filter(function(t) {
                    let s = t[0];
                    return e.some(function(e) {
                        return s === e || e instanceof RegExp && e.test(s)
                    })
                })
            }
            return c
        }
        ,
        t.addAttrs = function(e, t) {
            for (let s = 0, l = e.length; s < l; ++s) {
                let l = e[s][0];
                "class" === l ? t.attrJoin("class", e[s][1]) : "css-module" === l ? t.attrJoin("css-module", e[s][1]) : t.attrPush(e[s])
            }
            return t
        }
        ,
        t.hasDelimiters = function(e, t) {
            if (!e)
                throw Error('Parameter `where` not passed. Should be "start", "end" or "only".');
            return function(s) {
                let l, c, u;
                let d = t.leftDelimiter.length + 1 + t.rightDelimiter.length;
                if (!s || "string" != typeof s || s.length < d)
                    return !1;
                let h = d - t.rightDelimiter.length;
                switch (e) {
                case "start":
                    c = -1 == (l = s.slice(0, t.leftDelimiter.length) === t.leftDelimiter ? 0 : -1) ? -1 : s.indexOf(t.rightDelimiter, h),
                    (u = s.charAt(c + t.rightDelimiter.length)) && -1 !== t.rightDelimiter.indexOf(u) && (c = -1);
                    break;
                case "end":
                    c = (c = -1 === (l = s.lastIndexOf(t.leftDelimiter)) ? -1 : s.indexOf(t.rightDelimiter, l + h)) === s.length - t.rightDelimiter.length ? c : -1;
                    break;
                case "only":
                    l = s.slice(0, t.leftDelimiter.length) === t.leftDelimiter ? 0 : -1,
                    c = s.slice(s.length - t.rightDelimiter.length) === t.rightDelimiter ? s.length - t.rightDelimiter.length : -1;
                    break;
                default:
                    throw Error(`Unexpected case ${e}, expected 'start', 'end' or 'only'`)
                }
                return -1 !== l && -1 !== c && function(e) {
                    let s = "." === e.charAt(t.leftDelimiter.length)
                      , l = "#" === e.charAt(t.leftDelimiter.length);
                    return s || l ? e.length >= d + 1 : e.length >= d
                }(s.substring(l, c + t.rightDelimiter.length))
            }
        }
        ,
        t.removeDelimiter = function(e, t) {
            let s = escapeRegExp(t.leftDelimiter)
              , l = escapeRegExp(t.rightDelimiter)
              , c = RegExp("[ \\n]?" + s + "[^" + s + l + "]+" + l + "$")
              , u = e.search(c);
            return -1 !== u ? e.slice(0, u) : e
        }
        ,
        t.escapeRegExp = escapeRegExp,
        t.getMatchingOpeningToken = function(e, t) {
            if ("softbreak" === e[t].type)
                return !1;
            if (0 === e[t].nesting)
                return e[t];
            let s = e[t].level
              , l = e[t].type.replace("_close", "_open");
            for (; t >= 0; --t)
                if (e[t].type === l && e[t].level === s)
                    return e[t];
            return !1
        }
        ;
        let s = /[&<>"]/
          , l = /[&<>"]/g
          , c = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        };
        function replaceUnsafeChar(e) {
            return c[e]
        }
        t.escapeHtml = function(e) {
            return s.test(e) ? e.replace(l, replaceUnsafeChar) : e
        }
    },
    7308: function(e) {
        "use strict";
        e.exports = function(e, t) {
            var s = (t = t || {}).marker || ":"
              , l = s.charCodeAt(0)
              , c = s.length
              , u = t.validate || function() {
                return !0
            }
              , d = t.render || function(e, t, s, l, c) {
                if (1 === e[t].nesting) {
                    for (var u = e[t].info.split(/\s+/), d = null, h = [], g = 0; g < u.length; g++) {
                        var m = u[g];
                        if (m.includes("=")) {
                            var b = m.split("=", 2);
                            e[t].attrJoin(b[0], b[1])
                        } else
                            "#" === m[0] ? d = m.slice(1) : "." === m[0] ? h.push(m.slice(1)) : h.push(m)
                    }
                    d && e[t].attrJoin("id", d),
                    h.length > 0 && e[t].attrJoin("class", h.join(" "))
                }
                return c.renderToken(e, t, s, l, c)
            }
            ;
            e.block.ruler.before("fence", "container", function(e, t, d, h) {
                var g, m, b, _, k, y, v, x, E = 1, w = !1, A = e.bMarks[t] + e.tShift[t], C = e.eMarks[t];
                if (l !== e.src.charCodeAt(A))
                    return !1;
                for (g = A + 1; g <= C && s[(g - A) % c] === e.src[g]; g++)
                    ;
                if ((b = Math.floor((g - A) / c)) < 3 || (g -= (g - A) % c,
                _ = e.src.slice(A, g),
                !u(k = e.src.slice(g, C).trim())))
                    return !1;
                if (h)
                    return !0;
                for (m = t; !(++m >= d) && (!((A = e.bMarks[m] + e.tShift[m]) < (C = e.eMarks[m])) || !(e.sCount[m] < e.blkIndent)); )
                    if (l === e.src.charCodeAt(A) && !(e.sCount[m] - e.blkIndent >= 4)) {
                        for (g = A + 1; g <= C && s[(g - A) % c] === e.src[g]; g++)
                            ;
                        if (!(Math.floor((g - A) / c) < b)) {
                            if (g -= (g - A) % c,
                            (g = e.skipSpaces(g)) < C) {
                                E++;
                                continue
                            }
                            if (0 == --E) {
                                w = !0;
                                break
                            }
                        }
                    }
                return v = e.parentType,
                x = e.lineMax,
                e.parentType = "container",
                e.lineMax = m,
                (y = e.push("container", "div", 1)).markup = _,
                y.block = !0,
                y.info = k,
                y.map = [t, m],
                e.md.block.tokenize(e, t + 1, m),
                (y = e.push("container", "div", -1)).markup = e.src.slice(A, g),
                y.block = !0,
                e.parentType = v,
                e.lineMax = x,
                e.line = m + (w ? 1 : 0),
                !0
            }, {
                alt: ["paragraph", "reference", "blockquote", "list"]
            }),
            e.renderer.rules.container = d
        }
    },
    187: function(e) {
        "use strict";
        function render_footnote_anchor_name(e, t, s, l) {
            let c = Number(e[t].meta.id + 1).toString()
              , u = "";
            return "string" == typeof l.docId && (u = `-${l.docId}-`),
            u + c
        }
        function render_footnote_caption(e, t) {
            let s = Number(e[t].meta.id + 1).toString();
            return e[t].meta.subId > 0 && (s += `:${e[t].meta.subId}`),
            `[${s}]`
        }
        function render_footnote_ref(e, t, s, l, c) {
            let u = c.rules.footnote_anchor_name(e, t, s, l, c)
              , d = c.rules.footnote_caption(e, t, s, l, c)
              , h = u;
            return e[t].meta.subId > 0 && (h += `:${e[t].meta.subId}`),
            `<sup class="footnote-ref"><a href="#fn${u}" id="fnref${h}">${d}</a></sup>`
        }
        function render_footnote_block_open(e, t, s) {
            return (s.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n') + '<section class="footnotes">\n<ol class="footnotes-list">\n'
        }
        function render_footnote_block_close() {
            return "</ol>\n</section>\n"
        }
        function render_footnote_open(e, t, s, l, c) {
            let u = c.rules.footnote_anchor_name(e, t, s, l, c);
            return e[t].meta.subId > 0 && (u += `:${e[t].meta.subId}`),
            `<li id="fn${u}" class="footnote-item">`
        }
        function render_footnote_close() {
            return "</li>\n"
        }
        function render_footnote_anchor(e, t, s, l, c) {
            let u = c.rules.footnote_anchor_name(e, t, s, l, c);
            return e[t].meta.subId > 0 && (u += `:${e[t].meta.subId}`),
            ` <a href="#fnref${u}" class="footnote-backref">\u21a9\uFE0E</a>`
        }
        e.exports = function(e) {
            let t = e.helpers.parseLinkLabel
              , s = e.utils.isSpace;
            e.renderer.rules.footnote_ref = render_footnote_ref,
            e.renderer.rules.footnote_block_open = render_footnote_block_open,
            e.renderer.rules.footnote_block_close = render_footnote_block_close,
            e.renderer.rules.footnote_open = render_footnote_open,
            e.renderer.rules.footnote_close = render_footnote_close,
            e.renderer.rules.footnote_anchor = render_footnote_anchor,
            e.renderer.rules.footnote_caption = render_footnote_caption,
            e.renderer.rules.footnote_anchor_name = render_footnote_anchor_name,
            e.block.ruler.before("reference", "footnote_def", function(e, t, l, c) {
                let u;
                let d = e.bMarks[t] + e.tShift[t]
                  , h = e.eMarks[t];
                if (d + 4 > h || 91 !== e.src.charCodeAt(d) || 94 !== e.src.charCodeAt(d + 1))
                    return !1;
                for (u = d + 2; u < h; u++) {
                    if (32 === e.src.charCodeAt(u))
                        return !1;
                    if (93 === e.src.charCodeAt(u))
                        break
                }
                if (u === d + 2 || u + 1 >= h || 58 !== e.src.charCodeAt(++u))
                    return !1;
                if (c)
                    return !0;
                u++,
                e.env.footnotes || (e.env.footnotes = {}),
                e.env.footnotes.refs || (e.env.footnotes.refs = {});
                let g = e.src.slice(d + 2, u - 2);
                e.env.footnotes.refs[`:${g}`] = -1;
                let m = new e.Token("footnote_reference_open","",1);
                m.meta = {
                    label: g
                },
                m.level = e.level++,
                e.tokens.push(m);
                let b = e.bMarks[t]
                  , _ = e.tShift[t]
                  , k = e.sCount[t]
                  , y = e.parentType
                  , v = u
                  , x = e.sCount[t] + u - (e.bMarks[t] + e.tShift[t])
                  , E = x;
                for (; u < h; ) {
                    let t = e.src.charCodeAt(u);
                    if (s(t))
                        9 === t ? E += 4 - E % 4 : E++;
                    else
                        break;
                    u++
                }
                e.tShift[t] = u - v,
                e.sCount[t] = E - x,
                e.bMarks[t] = v,
                e.blkIndent += 4,
                e.parentType = "footnote",
                e.sCount[t] < e.blkIndent && (e.sCount[t] += e.blkIndent),
                e.md.block.tokenize(e, t, l, !0),
                e.parentType = y,
                e.blkIndent -= 4,
                e.tShift[t] = _,
                e.sCount[t] = k,
                e.bMarks[t] = b;
                let w = new e.Token("footnote_reference_close","",-1);
                return w.level = --e.level,
                e.tokens.push(w),
                !0
            }, {
                alt: ["paragraph", "reference"]
            }),
            e.inline.ruler.after("image", "footnote_inline", function(e, s) {
                let l = e.posMax
                  , c = e.pos;
                if (c + 2 >= l || 94 !== e.src.charCodeAt(c) || 91 !== e.src.charCodeAt(c + 1))
                    return !1;
                let u = c + 2
                  , d = t(e, c + 1);
                if (d < 0)
                    return !1;
                if (!s) {
                    e.env.footnotes || (e.env.footnotes = {}),
                    e.env.footnotes.list || (e.env.footnotes.list = []);
                    let t = e.env.footnotes.list.length
                      , s = [];
                    e.md.inline.parse(e.src.slice(u, d), e.md, e.env, s);
                    let l = e.push("footnote_ref", "", 0);
                    l.meta = {
                        id: t
                    },
                    e.env.footnotes.list[t] = {
                        content: e.src.slice(u, d),
                        tokens: s
                    }
                }
                return e.pos = d + 1,
                e.posMax = l,
                !0
            }),
            e.inline.ruler.after("footnote_inline", "footnote_ref", function(e, t) {
                let s;
                let l = e.posMax
                  , c = e.pos;
                if (c + 3 > l || !e.env.footnotes || !e.env.footnotes.refs || 91 !== e.src.charCodeAt(c) || 94 !== e.src.charCodeAt(c + 1))
                    return !1;
                for (s = c + 2; s < l; s++) {
                    if (32 === e.src.charCodeAt(s) || 10 === e.src.charCodeAt(s))
                        return !1;
                    if (93 === e.src.charCodeAt(s))
                        break
                }
                if (s === c + 2 || s >= l)
                    return !1;
                s++;
                let u = e.src.slice(c + 2, s - 1);
                if (void 0 === e.env.footnotes.refs[`:${u}`])
                    return !1;
                if (!t) {
                    let t;
                    e.env.footnotes.list || (e.env.footnotes.list = []),
                    e.env.footnotes.refs[`:${u}`] < 0 ? (t = e.env.footnotes.list.length,
                    e.env.footnotes.list[t] = {
                        label: u,
                        count: 0
                    },
                    e.env.footnotes.refs[`:${u}`] = t) : t = e.env.footnotes.refs[`:${u}`];
                    let s = e.env.footnotes.list[t].count;
                    e.env.footnotes.list[t].count++;
                    let l = e.push("footnote_ref", "", 0);
                    l.meta = {
                        id: t,
                        subId: s,
                        label: u
                    }
                }
                return e.pos = s,
                e.posMax = l,
                !0
            }),
            e.core.ruler.after("inline", "footnote_tail", function(e) {
                let t, s, l;
                let c = !1
                  , u = {};
                if (!e.env.footnotes || (e.tokens = e.tokens.filter(function(e) {
                    return "footnote_reference_open" === e.type ? (c = !0,
                    s = [],
                    l = e.meta.label,
                    !1) : "footnote_reference_close" === e.type ? (c = !1,
                    u[":" + l] = s,
                    !1) : (c && s.push(e),
                    !c)
                }),
                !e.env.footnotes.list))
                    return;
                let d = e.env.footnotes.list;
                e.tokens.push(new e.Token("footnote_block_open","",1));
                for (let s = 0, l = d.length; s < l; s++) {
                    let l;
                    let c = new e.Token("footnote_open","",1);
                    if (c.meta = {
                        id: s,
                        label: d[s].label
                    },
                    e.tokens.push(c),
                    d[s].tokens) {
                        t = [];
                        let l = new e.Token("paragraph_open","p",1);
                        l.block = !0,
                        t.push(l);
                        let c = new e.Token("inline","",0);
                        c.children = d[s].tokens,
                        c.content = d[s].content,
                        t.push(c);
                        let u = new e.Token("paragraph_close","p",-1);
                        u.block = !0,
                        t.push(u)
                    } else
                        d[s].label && (t = u[`:${d[s].label}`]);
                    t && (e.tokens = e.tokens.concat(t)),
                    l = "paragraph_close" === e.tokens[e.tokens.length - 1].type ? e.tokens.pop() : null;
                    let h = d[s].count > 0 ? d[s].count : 1;
                    for (let t = 0; t < h; t++) {
                        let l = new e.Token("footnote_anchor","",0);
                        l.meta = {
                            id: s,
                            subId: t,
                            label: d[s].label
                        },
                        e.tokens.push(l)
                    }
                    l && e.tokens.push(l),
                    e.tokens.push(new e.Token("footnote_close","",-1))
                }
                e.tokens.push(new e.Token("footnote_block_close","",-1))
            })
        }
    },
    3026: function(e) {
        "use strict";
        let t = ["aac", "m4a", "mp3", "oga", "ogg", "wav"]
          , s = ["mp4", "m4v", "ogv", "webm", "mpg", "mpeg"]
          , l = {
            en: {
                "html5 video not supported": "Your browser does not support playing HTML5 video.",
                "html5 audio not supported": "Your browser does not support playing HTML5 audio.",
                "html5 media fallback link": 'You can <a href="%s" download>download the file</a> instead.',
                "html5 media description": "Here is a description of the content: %s"
            }
        }
          , translate = function(e, t, s) {
            if (l[e] && l[e][t] || (e = "en"),
            !l[e])
                return "";
            let c = l[e][t] || "";
            if (s)
                for (let e of s)
                    c = c.replace("%s", e);
            return c
        };
        function guessMediaType(e) {
            let l = e.match(/\.([^/.]+)$/);
            if (null === l)
                return "image";
            let c = l[1];
            return -1 != t.indexOf(c.toLowerCase()) ? "audio" : -1 != s.indexOf(c.toLowerCase()) ? "video" : "image"
        }
        e.exports = {
            html5Media: function(e, t={}) {
                t.messages && (l = t.messages),
                t.translateFn && (translate = t.translateFn);
                let s = void 0 !== t.videoAttrs ? t.videoAttrs : 'controls class="html5-video-player"'
                  , c = void 0 !== t.audioAttrs ? t.audioAttrs : 'controls class="html5-audio-player"';
                e.inline.ruler.at("image", (t, s) => (function(e, t, s) {
                    let l, c, u, d, h, g, m, b, _, k, y, v, x;
                    let E = ""
                      , w = e.pos
                      , A = e.posMax;
                    if (33 !== e.src.charCodeAt(e.pos) || 91 !== e.src.charCodeAt(e.pos + 1) || (g = e.pos + 2,
                    (h = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)) < 0))
                        return !1;
                    if ((m = h + 1) < A && 40 === e.src.charCodeAt(m)) {
                        for (m++; m < A && (c = e.src.charCodeAt(m),
                        s.utils.isSpace(c) || 10 === c); m++)
                            ;
                        if (m >= A)
                            return !1;
                        for (x = m,
                        (_ = e.md.helpers.parseLinkDestination(e.src, m, e.posMax)).ok && (E = e.md.normalizeLink(_.str),
                        e.md.validateLink(E) ? m = _.pos : E = ""),
                        x = m; m < A && (c = e.src.charCodeAt(m),
                        s.utils.isSpace(c) || 10 === c); m++)
                            ;
                        if (_ = e.md.helpers.parseLinkTitle(e.src, m, e.posMax),
                        m < A && x !== m && _.ok)
                            for (k = _.str,
                            m = _.pos; m < A && (c = e.src.charCodeAt(m),
                            s.utils.isSpace(c) || 10 === c); m++)
                                ;
                        else
                            k = "";
                        if (m >= A || 41 !== e.src.charCodeAt(m))
                            return e.pos = w,
                            !1;
                        m++
                    } else {
                        if (void 0 === e.env.references)
                            return !1;
                        if (m < A && 91 === e.src.charCodeAt(m) ? (x = m + 1,
                        (m = e.md.helpers.parseLinkLabel(e, m)) >= 0 ? d = e.src.slice(x, m++) : m = h + 1) : m = h + 1,
                        d || (d = e.src.slice(g, h)),
                        !(b = e.env.references[s.utils.normalizeReference(d)]))
                            return e.pos = w,
                            !1;
                        E = b.href,
                        k = b.title
                    }
                    if (e.pos = m,
                    e.posMax = A,
                    t)
                        return !0;
                    u = e.src.slice(g, h),
                    e.md.inline.parse(u, e.md, e.env, v = []);
                    let C = guessMediaType(E)
                      , S = "image" == C ? "img" : C;
                    return (y = e.push(C, S, 0)).attrs = l = [["src", E]],
                    "image" == C && l.push(["alt", ""]),
                    y.children = v,
                    y.content = u,
                    k && l.push(["title", k]),
                    e.pos = m,
                    e.posMax = A,
                    !0
                }
                )(t, s, e)),
                e.renderer.rules.video = e.renderer.rules.audio = (t, l, u, d) => (u.html5Media = {
                    videoAttrs: s,
                    audioAttrs: c
                },
                function(e, t, s, l, c) {
                    let u = e[t]
                      , d = u.type;
                    if ("video" !== d && "audio" !== d)
                        return "";
                    let h = s.html5Media[`${d}Attrs`].trim();
                    h && (h = " " + h);
                    let g = u.attrs[u.attrIndex("src")][1]
                      , m = -1 != u.attrIndex("title") ? ` title="${c.utils.escapeHtml(u.attrs[u.attrIndex("title")][1])}"` : ""
                      , b = translate(l.language, `html5 ${d} not supported`) + "\n" + translate(l.language, "html5 media fallback link", [g])
                      , _ = u.content ? "\n" + translate(l.language, "html5 media description", [c.utils.escapeHtml(u.content)]) : "";
                    return `<${d} src="${g}"${m}${h}>
${b}${_}
</${d}>`
                }(t, l, u, d, e))
            },
            messages: l,
            guessMediaType
        }
    },
    6068: function(e, t, s) {
        "use strict";
        var l = s(1413);
        e.exports = function(e, t) {
            function scan_bound_indices(e, t) {
                var s, l, c = e.bMarks[t] + e.sCount[t], u = e.bMarks[t] + e.blkIndent, d = e.skipSpacesBack(e.eMarks[t], u), h = [], g = !1, m = !1, b = 0;
                for (s = c; s < d; s++)
                    switch (e.src.charCodeAt(s)) {
                    case 92:
                        g = !0;
                        break;
                    case 96:
                        (l = e.skipChars(s, 96) - 1) > s ? (m || (0 === b ? b = l - s : b !== l - s || (b = 0)),
                        s = l) : !m && (g || b) || (m = !m),
                        g = !1;
                        break;
                    case 124:
                        m || g || h.push(s),
                        g = !1;
                        break;
                    default:
                        g = !1
                    }
                return 0 === h.length || (h[0] > u && h.unshift(u - 1),
                h[h.length - 1] < d - 1 && h.push(d)),
                h
            }
            function table_caption(e, s, l) {
                var c = {
                    text: null,
                    label: null
                }
                  , u = e.bMarks[l] + e.sCount[l]
                  , d = e.eMarks[l]
                  , h = e.src.slice(u, d).match(/^\[(.+?)\](\[([^\[\]]+)\])?\s*$/);
                return !!h && (!!s || (c.text = h[1],
                (t.autolabel || h[2]) && (c.label = h[2] || h[1],
                c.label = c.label.toLowerCase().replace(/\W+/g, "")),
                c))
            }
            function table_row(e, s, l) {
                var c, u, d, h = {
                    bounds: null,
                    multiline: null
                }, g = scan_bound_indices(e, l);
                return !(g.length < 2) && (!!s || (h.bounds = g,
                t.multiline && (c = e.bMarks[l] + e.sCount[l],
                u = e.eMarks[l] - 1,
                h.multiline = 92 === e.src.charCodeAt(u),
                h.multiline && (d = e.eMarks[l],
                e.eMarks[l] = e.skipSpacesBack(u, c),
                h.bounds = scan_bound_indices(e, l),
                e.eMarks[l] = d)),
                h))
            }
            function table_separator(e, t, s) {
                var l, c, u = {
                    aligns: [],
                    wraps: []
                }, d = scan_bound_indices(e, s), h = /^:?(-+|=+):?\+?$/;
                if (e.sCount[s] - e.blkIndent >= 4 || 0 === d.length)
                    return !1;
                for (l = 0; l < d.length - 1; l++) {
                    if (c = e.src.slice(d[l] + 1, d[l + 1]).trim(),
                    !h.test(c))
                        return !1;
                    switch (u.wraps.push(43 === c.charCodeAt(c.length - 1)),
                    (58 === c.charCodeAt(0)) << 4 | 58 === c.charCodeAt(c.length - 1 - u.wraps[l])) {
                    case 0:
                        u.aligns.push("");
                        break;
                    case 1:
                        u.aligns.push("right");
                        break;
                    case 16:
                        u.aligns.push("left");
                        break;
                    case 17:
                        u.aligns.push("center")
                    }
                }
                return !!t || u
            }
            function table_empty(e, t, s) {
                return e.isEmpty(s)
            }
            t = e.utils.assign({}, {
                multiline: !1,
                rowspan: !1,
                headerless: !1,
                multibody: !0,
                autolabel: !0
            }, t || {}),
            e.block.ruler.at("table", function(e, s, c, u) {
                var d, h, g, m, b, _, k, y, v, x, E, w, A, C, S, D, N = new l, M = 16, I = -1, T = [];
                if (s + 2 > c || ((h = new e.Token("table_open","table",1)).meta = {
                    sep: null,
                    cap: null,
                    tr: []
                },
                N.set_highest_alphabet(65536),
                N.set_initial_state(65792),
                N.set_accept_states([65552, 65553, 0]),
                N.set_match_alphabets({
                    65536: table_caption.bind(this, e, !0),
                    4096: table_separator.bind(this, e, !0),
                    256: table_row.bind(this, e, !0),
                    16: table_row.bind(this, e, !0),
                    1: table_empty.bind(this, e, !0)
                }),
                N.set_transitions({
                    65792: {
                        65536: 256,
                        256: 4352
                    },
                    256: {
                        256: 4352
                    },
                    4352: {
                        4096: 65552,
                        256: 4352
                    },
                    65552: {
                        65536: 0,
                        16: 65553
                    },
                    65553: {
                        65536: 0,
                        16: 65553,
                        1: 65552
                    }
                }),
                t.headerless && (N.set_initial_state(69888),
                N.update_transition(69888, {
                    65536: 4352,
                    4096: 65552,
                    256: 4352
                }),
                (g = new e.Token("tr_placeholder","tr",0)).meta = {}),
                t.multibody || N.update_transition(65552, {
                    65536: 0,
                    16: 65552
                }),
                N.set_actions(function(l, c, u) {
                    switch (u) {
                    case 65536:
                        if (h.meta.cap)
                            break;
                        h.meta.cap = table_caption(e, !1, l),
                        h.meta.cap.map = [l, l + 1],
                        h.meta.cap.first = l === s;
                        break;
                    case 4096:
                        h.meta.sep = table_separator(e, !1, l),
                        h.meta.sep.map = [l, l + 1],
                        g.meta.grp |= 1,
                        M = 16;
                        break;
                    case 256:
                    case 16:
                        (g = new e.Token("tr_open","tr",1)).map = [l, l + 1],
                        g.meta = table_row(e, !1, l),
                        g.meta.type = u,
                        g.meta.grp = M,
                        M = 0,
                        h.meta.tr.push(g),
                        t.multiline && (g.meta.multiline && I < 0 ? I = h.meta.tr.length - 1 : !g.meta.multiline && I >= 0 && ((d = h.meta.tr[I]).meta.mbounds = h.meta.tr.slice(I).map(function(e) {
                            return e.meta.bounds
                        }),
                        d.map[1] = g.map[1],
                        h.meta.tr = h.meta.tr.slice(0, I + 1),
                        I = -1));
                        break;
                    case 1:
                        g.meta.grp |= 1,
                        M = 16
                    }
                }),
                !1 === N.execute(s, c) || !h.meta.tr.length))
                    return !1;
                if (u)
                    return !0;
                if (h.meta.tr[h.meta.tr.length - 1].meta.grp |= 1,
                h.map = k = [s, 0],
                h.block = !0,
                h.level = e.level++,
                e.tokens.push(h),
                h.meta.cap) {
                    (d = e.push("caption_open", "caption", 1)).map = h.meta.cap.map;
                    var O = []
                      , L = h.meta.cap.first ? "top" : "bottom";
                    null !== h.meta.cap.label && O.push(["id", h.meta.cap.label]),
                    "top" !== L && O.push(["style", "caption-side: " + L]),
                    d.attrs = O,
                    (d = e.push("inline", "", 0)).content = h.meta.cap.text,
                    d.map = h.meta.cap.map,
                    d.children = [],
                    d = e.push("caption_close", "caption", -1)
                }
                for (w = 0; w < h.meta.tr.length; w++) {
                    for (b = new e.Token("td_th_placeholder","",0),
                    16 & (g = h.meta.tr[w]).meta.grp && (v = 256 === g.meta.type ? "thead" : "tbody",
                    (d = e.push(v + "_open", v, 1)).map = y = [g.map[0], 0],
                    T = []),
                    g.block = !0,
                    g.level = e.level++,
                    e.tokens.push(g),
                    A = 0; A < g.meta.bounds.length - 1; A++) {
                        if (E = [g.meta.bounds[A] + 1, g.meta.bounds[A + 1]],
                        "" === (x = e.src.slice.apply(e.src, E))) {
                            m = b.attrGet("colspan"),
                            b.attrSet("colspan", null === m ? 2 : m + 1);
                            continue
                        }
                        if (t.rowspan && T[A] && "^^" === x.trim()) {
                            _ = T[A].attrGet("rowspan"),
                            T[A].attrSet("rowspan", null === _ ? 2 : _ + 1),
                            b = new e.Token("td_th_placeholder","",0);
                            continue
                        }
                        if (v = 256 === g.meta.type ? "th" : "td",
                        (d = e.push(v + "_open", v, 1)).map = g.map,
                        d.attrs = [],
                        h.meta.sep.aligns[A] && d.attrs.push(["style", "text-align:" + h.meta.sep.aligns[A]]),
                        h.meta.sep.wraps[A] && d.attrs.push(["class", "extend"]),
                        b = T[A] = d,
                        t.multiline && g.meta.multiline && g.meta.mbounds) {
                            for (C = 1,
                            x = Array(g.map[0]).fill("").concat([x.trimRight()]); C < g.meta.mbounds.length; C++)
                                A > g.meta.mbounds[C].length - 2 || (E = [g.meta.mbounds[C][A] + 1, g.meta.mbounds[C][A + 1]],
                                x.push(e.src.slice.apply(e.src, E).trimRight()));
                            for ((D = new e.md.block.State(x.join("\n"),e.md,e.env,[])).level = g.level + 1,
                            e.md.block.tokenize(D, g.map[0], D.lineMax),
                            S = 0; S < D.tokens.length; S++)
                                e.tokens.push(D.tokens[S])
                        } else
                            (d = e.push("inline", "", 0)).content = x.trim(),
                            d.map = g.map,
                            d.level = g.level + 1,
                            d.children = [];
                        d = e.push(v + "_close", v, -1)
                    }
                    e.push("tr_close", "tr", -1),
                    1 & g.meta.grp && (v = 256 === g.meta.type ? "thead" : "tbody",
                    d = e.push(v + "_close", v, -1),
                    y[1] = g.map[1])
                }
                return k[1] = Math.max(y[1], h.meta.sep.map[1], h.meta.cap ? h.meta.cap.map[1] : -1),
                d = e.push("table_close", "table", -1),
                e.line = k[1],
                !0
            }, {
                alt: ["paragraph", "reference"]
            })
        }
    },
    1413: function(e) {
        "use strict";
        function DFA() {
            this.__highest_alphabet__ = 0,
            this.__match_alphabets__ = {},
            this.__initial_state__ = 0,
            this.__accept_states__ = {},
            this.__transitions__ = {},
            this.__actions__ = {}
        }
        DFA.prototype.set_highest_alphabet = function(e) {
            this.__highest_alphabet__ = e
        }
        ,
        DFA.prototype.set_match_alphabets = function(e) {
            this.__match_alphabets__ = e
        }
        ,
        DFA.prototype.set_initial_state = function(e) {
            this.__initial_state__ = e
        }
        ,
        DFA.prototype.set_accept_states = function(e) {
            for (var t = 0; t < e.length; t++)
                this.__accept_states__[e[t]] = !0
        }
        ,
        DFA.prototype.set_transitions = function(e) {
            this.__transitions__ = e
        }
        ,
        DFA.prototype.set_actions = function(e) {
            this.__actions__ = e
        }
        ,
        DFA.prototype.update_transition = function(e, t) {
            this.__transitions__[e] = Object.assign(this.__transitions__[e] || {}, t)
        }
        ,
        DFA.prototype.execute = function(e, t) {
            var s, l, c;
            for (s = this.__initial_state__,
            l = e; s && l < t; l++) {
                for (c = this.__highest_alphabet__; c > 0 && !(s & c && this.__match_alphabets__[c].call(this, l, s, c)); c >>= 4)
                    ;
                if (this.__actions__(l, s, c),
                0 === c)
                    break;
                s = this.__transitions__[s][c] || 0
            }
            return !!this.__accept_states__[s]
        }
        ,
        e.exports = DFA
    },
    388: function(e) {
        "use strict";
        var t = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
        function superscript(e, s) {
            var l, c, u = e.posMax, d = e.pos;
            if (94 !== e.src.charCodeAt(d) || s || d + 2 >= u)
                return !1;
            for (e.pos = d + 1; e.pos < u; ) {
                if (94 === e.src.charCodeAt(e.pos)) {
                    l = !0;
                    break
                }
                e.md.inline.skipToken(e)
            }
            return !l || d + 1 === e.pos || (c = e.src.slice(d + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = d,
            !1) : (e.posMax = e.pos,
            e.pos = d + 1,
            e.push("sup_open", "sup", 1).markup = "^",
            e.push("text", "", 0).content = c.replace(t, "$1"),
            e.push("sup_close", "sup", -1).markup = "^",
            e.pos = e.posMax + 1,
            e.posMax = u,
            !0)
        }
        e.exports = function(e) {
            e.inline.ruler.after("emphasis", "sup", superscript)
        }
    },
    3054: function(e, t, s) {
        "use strict";
        e.exports = s(1671)
    },
    3906: function(e, t, s) {
        "use strict";
        e.exports = s(2059)
    },
    5373: function(e) {
        "use strict";
        e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
    },
    9372: function(e) {
        "use strict";
        var t = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>"
          , s = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>"
          , l = RegExp("^(?:" + t + "|" + s + "|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")
          , c = RegExp("^(?:" + t + "|" + s + ")");
        e.exports.n = l,
        e.exports.q = c
    },
    5292: function(e, t, s) {
        "use strict";
        var l = Object.prototype.hasOwnProperty;
        function has(e, t) {
            return l.call(e, t)
        }
        function isValidEntityCode(e) {
            return (!(e >= 55296) || !(e <= 57343)) && (!(e >= 64976) || !(e <= 65007)) && (65535 & e) != 65535 && (65535 & e) != 65534 && (!(e >= 0) || !(e <= 8)) && 11 !== e && (!(e >= 14) || !(e <= 31)) && (!(e >= 127) || !(e <= 159)) && !(e > 1114111)
        }
        function fromCodePoint(e) {
            return e > 65535 ? String.fromCharCode(55296 + ((e -= 65536) >> 10), 56320 + (1023 & e)) : String.fromCharCode(e)
        }
        var c = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g
          , u = RegExp(c.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi")
          , d = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i
          , h = s(3906)
          , g = /[&<>"]/
          , m = /[&<>"]/g
          , b = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        };
        function replaceUnsafeChar(e) {
            return b[e]
        }
        var _ = /[.?*+^$[\]\\(){}|-]/g
          , k = s(7062);
        t.lib = {},
        t.lib.mdurl = s(4976),
        t.lib.ucmicro = s(8579),
        t.assign = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return t.forEach(function(t) {
                if (t) {
                    if ("object" != typeof t)
                        throw TypeError(t + "must be object");
                    Object.keys(t).forEach(function(s) {
                        e[s] = t[s]
                    })
                }
            }),
            e
        }
        ,
        t.isString = function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        }
        ,
        t.has = has,
        t.unescapeMd = function(e) {
            return 0 > e.indexOf("\\") ? e : e.replace(c, "$1")
        }
        ,
        t.unescapeAll = function(e) {
            return 0 > e.indexOf("\\") && 0 > e.indexOf("&") ? e : e.replace(u, function(e, t, s) {
                var l;
                return t || (has(h, s) ? h[s] : 35 === s.charCodeAt(0) && d.test(s) && isValidEntityCode(l = "x" === s[1].toLowerCase() ? parseInt(s.slice(2), 16) : parseInt(s.slice(1), 10)) ? fromCodePoint(l) : e)
            })
        }
        ,
        t.isValidEntityCode = isValidEntityCode,
        t.fromCodePoint = fromCodePoint,
        t.escapeHtml = function(e) {
            return g.test(e) ? e.replace(m, replaceUnsafeChar) : e
        }
        ,
        t.arrayReplaceAt = function(e, t, s) {
            return [].concat(e.slice(0, t), s, e.slice(t + 1))
        }
        ,
        t.isSpace = function(e) {
            switch (e) {
            case 9:
            case 32:
                return !0
            }
            return !1
        }
        ,
        t.isWhiteSpace = function(e) {
            if (e >= 8192 && e <= 8202)
                return !0;
            switch (e) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 160:
            case 5760:
            case 8239:
            case 8287:
            case 12288:
                return !0
            }
            return !1
        }
        ,
        t.isMdAsciiPunct = function(e) {
            switch (e) {
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 124:
            case 125:
            case 126:
                return !0;
            default:
                return !1
            }
        }
        ,
        t.isPunctChar = function(e) {
            return k.test(e)
        }
        ,
        t.escapeRE = function(e) {
            return e.replace(_, "\\$&")
        }
        ,
        t.normalizeReference = function(e) {
            return (e = e.trim().replace(/\s+/g, " ")).toLowerCase().toUpperCase()
        }
    },
    4960: function(e, t, s) {
        "use strict";
        t.parseLinkLabel = s(1519),
        t.parseLinkDestination = s(5361),
        t.parseLinkTitle = s(5477)
    },
    5361: function(e, t, s) {
        "use strict";
        var l = s(5292).unescapeAll;
        e.exports = function(e, t, s) {
            var c, u, d = t, h = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
            if (60 === e.charCodeAt(d)) {
                for (d++; d < s && 10 !== (c = e.charCodeAt(d)) && 60 !== c; ) {
                    if (62 === c) {
                        h.pos = d + 1,
                        h.str = l(e.slice(t + 1, d)),
                        h.ok = !0;
                        break
                    }
                    if (92 === c && d + 1 < s) {
                        d += 2;
                        continue
                    }
                    d++
                }
                return h
            }
            for (u = 0; d < s && 32 !== (c = e.charCodeAt(d)) && !(c < 32) && 127 !== c; ) {
                if (92 === c && d + 1 < s) {
                    if (32 === e.charCodeAt(d + 1))
                        break;
                    d += 2;
                    continue
                }
                if (40 === c && ++u > 32)
                    return h;
                if (41 === c) {
                    if (0 === u)
                        break;
                    u--
                }
                d++
            }
            return t === d || 0 !== u || (h.str = l(e.slice(t, d)),
            h.pos = d,
            h.ok = !0),
            h
        }
    },
    1519: function(e) {
        "use strict";
        e.exports = function(e, t, s) {
            var l, c, u, d, h = -1, g = e.posMax, m = e.pos;
            for (e.pos = t + 1,
            l = 1; e.pos < g; ) {
                if (93 === (u = e.src.charCodeAt(e.pos)) && 0 == --l) {
                    c = !0;
                    break
                }
                if (d = e.pos,
                e.md.inline.skipToken(e),
                91 === u) {
                    if (d === e.pos - 1)
                        l++;
                    else if (s)
                        return e.pos = m,
                        -1
                }
            }
            return c && (h = e.pos),
            e.pos = m,
            h
        }
    },
    5477: function(e, t, s) {
        "use strict";
        var l = s(5292).unescapeAll;
        e.exports = function(e, t, s) {
            var c, u, d = 0, h = t, g = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
            if (h >= s || 34 !== (u = e.charCodeAt(h)) && 39 !== u && 40 !== u)
                return g;
            for (h++,
            40 === u && (u = 41); h < s; ) {
                if ((c = e.charCodeAt(h)) === u) {
                    g.pos = h + 1,
                    g.lines = d,
                    g.str = l(e.slice(t + 1, h)),
                    g.ok = !0;
                    break
                }
                if (40 === c && 41 === u)
                    break;
                10 === c ? d++ : 92 === c && h + 1 < s && (h++,
                10 === e.charCodeAt(h) && d++),
                h++
            }
            return g
        }
    },
    1671: function(e, t, s) {
        "use strict";
        var l = s(5292)
          , c = s(4960)
          , u = s(3931)
          , d = s(8777)
          , h = s(9101)
          , g = s(4197)
          , m = s(251)
          , b = s(4976)
          , _ = s(8058)
          , k = {
            default: s(1602),
            zero: s(8373),
            commonmark: s(5112)
        }
          , y = /^(vbscript|javascript|file|data):/
          , v = /^data:image\/(gif|png|jpeg|webp);/;
        function validateLink(e) {
            var t = e.trim().toLowerCase();
            return !y.test(t) || !!v.test(t)
        }
        var x = ["http:", "https:", "mailto:"];
        function normalizeLink(e) {
            var t = b.parse(e, !0);
            if (t.hostname && (!t.protocol || x.indexOf(t.protocol) >= 0))
                try {
                    t.hostname = _.toASCII(t.hostname)
                } catch (e) {}
            return b.encode(b.format(t))
        }
        function normalizeLinkText(e) {
            var t = b.parse(e, !0);
            if (t.hostname && (!t.protocol || x.indexOf(t.protocol) >= 0))
                try {
                    t.hostname = _.toUnicode(t.hostname)
                } catch (e) {}
            return b.decode(b.format(t), b.decode.defaultChars + "%")
        }
        function MarkdownIt(e, t) {
            if (!(this instanceof MarkdownIt))
                return new MarkdownIt(e,t);
            t || l.isString(e) || (t = e || {},
            e = "default"),
            this.inline = new g,
            this.block = new h,
            this.core = new d,
            this.renderer = new u,
            this.linkify = new m,
            this.validateLink = validateLink,
            this.normalizeLink = normalizeLink,
            this.normalizeLinkText = normalizeLinkText,
            this.utils = l,
            this.helpers = l.assign({}, c),
            this.options = {},
            this.configure(e),
            t && this.set(t)
        }
        MarkdownIt.prototype.set = function(e) {
            return l.assign(this.options, e),
            this
        }
        ,
        MarkdownIt.prototype.configure = function(e) {
            var t, s = this;
            if (l.isString(e) && !(e = k[t = e]))
                throw Error('Wrong `markdown-it` preset "' + t + '", check name');
            if (!e)
                throw Error("Wrong `markdown-it` preset, can't be empty");
            return e.options && s.set(e.options),
            e.components && Object.keys(e.components).forEach(function(t) {
                e.components[t].rules && s[t].ruler.enableOnly(e.components[t].rules),
                e.components[t].rules2 && s[t].ruler2.enableOnly(e.components[t].rules2)
            }),
            this
        }
        ,
        MarkdownIt.prototype.enable = function(e, t) {
            var s = [];
            Array.isArray(e) || (e = [e]),
            ["core", "block", "inline"].forEach(function(t) {
                s = s.concat(this[t].ruler.enable(e, !0))
            }, this),
            s = s.concat(this.inline.ruler2.enable(e, !0));
            var l = e.filter(function(e) {
                return 0 > s.indexOf(e)
            });
            if (l.length && !t)
                throw Error("MarkdownIt. Failed to enable unknown rule(s): " + l);
            return this
        }
        ,
        MarkdownIt.prototype.disable = function(e, t) {
            var s = [];
            Array.isArray(e) || (e = [e]),
            ["core", "block", "inline"].forEach(function(t) {
                s = s.concat(this[t].ruler.disable(e, !0))
            }, this),
            s = s.concat(this.inline.ruler2.disable(e, !0));
            var l = e.filter(function(e) {
                return 0 > s.indexOf(e)
            });
            if (l.length && !t)
                throw Error("MarkdownIt. Failed to disable unknown rule(s): " + l);
            return this
        }
        ,
        MarkdownIt.prototype.use = function(e) {
            var t = [this].concat(Array.prototype.slice.call(arguments, 1));
            return e.apply(e, t),
            this
        }
        ,
        MarkdownIt.prototype.parse = function(e, t) {
            if ("string" != typeof e)
                throw Error("Input data should be a String");
            var s = new this.core.State(e,this,t);
            return this.core.process(s),
            s.tokens
        }
        ,
        MarkdownIt.prototype.render = function(e, t) {
            return t = t || {},
            this.renderer.render(this.parse(e, t), this.options, t)
        }
        ,
        MarkdownIt.prototype.parseInline = function(e, t) {
            var s = new this.core.State(e,this,t);
            return s.inlineMode = !0,
            this.core.process(s),
            s.tokens
        }
        ,
        MarkdownIt.prototype.renderInline = function(e, t) {
            return t = t || {},
            this.renderer.render(this.parseInline(e, t), this.options, t)
        }
        ,
        e.exports = MarkdownIt
    },
    9101: function(e, t, s) {
        "use strict";
        var l = s(1390)
          , c = [["table", s(3031), ["paragraph", "reference"]], ["code", s(1094)], ["fence", s(5883), ["paragraph", "reference", "blockquote", "list"]], ["blockquote", s(4261), ["paragraph", "reference", "blockquote", "list"]], ["hr", s(1208), ["paragraph", "reference", "blockquote", "list"]], ["list", s(1551), ["paragraph", "reference", "blockquote"]], ["reference", s(4600)], ["html_block", s(5231), ["paragraph", "reference", "blockquote"]], ["heading", s(4758), ["paragraph", "reference", "blockquote"]], ["lheading", s(8971)], ["paragraph", s(2248)]];
        function ParserBlock() {
            this.ruler = new l;
            for (var e = 0; e < c.length; e++)
                this.ruler.push(c[e][0], c[e][1], {
                    alt: (c[e][2] || []).slice()
                })
        }
        ParserBlock.prototype.tokenize = function(e, t, s) {
            for (var l, c, u, d = this.ruler.getRules(""), h = d.length, g = t, m = !1, b = e.md.options.maxNesting; g < s && (e.line = g = e.skipEmptyLines(g),
            !(g >= s) && !(e.sCount[g] < e.blkIndent)); ) {
                if (e.level >= b) {
                    e.line = s;
                    break
                }
                for (c = 0,
                u = e.line; c < h; c++)
                    if (l = d[c](e, g, s, !1)) {
                        if (u >= e.line)
                            throw Error("block rule didn't increment state.line");
                        break
                    }
                if (!l)
                    throw Error("none of the block rules matched");
                e.tight = !m,
                e.isEmpty(e.line - 1) && (m = !0),
                (g = e.line) < s && e.isEmpty(g) && (m = !0,
                g++,
                e.line = g)
            }
        }
        ,
        ParserBlock.prototype.parse = function(e, t, s, l) {
            var c;
            e && (c = new this.State(e,t,s,l),
            this.tokenize(c, c.line, c.lineMax))
        }
        ,
        ParserBlock.prototype.State = s(9043),
        e.exports = ParserBlock
    },
    8777: function(e, t, s) {
        "use strict";
        var l = s(1390)
          , c = [["normalize", s(7244)], ["block", s(2304)], ["inline", s(4059)], ["linkify", s(9357)], ["replacements", s(8919)], ["smartquotes", s(2508)], ["text_join", s(6499)]];
        function Core() {
            this.ruler = new l;
            for (var e = 0; e < c.length; e++)
                this.ruler.push(c[e][0], c[e][1])
        }
        Core.prototype.process = function(e) {
            var t, s, l;
            for (t = 0,
            s = (l = this.ruler.getRules("")).length; t < s; t++)
                l[t](e)
        }
        ,
        Core.prototype.State = s(7811),
        e.exports = Core
    },
    4197: function(e, t, s) {
        "use strict";
        var l = s(1390)
          , c = [["text", s(1414)], ["linkify", s(1817)], ["newline", s(4537)], ["escape", s(8199)], ["backticks", s(8706)], ["strikethrough", s(338).w], ["emphasis", s(7147).w], ["link", s(6267)], ["image", s(2641)], ["autolink", s(1858)], ["html_inline", s(3095)], ["entity", s(5796)]]
          , u = [["balance_pairs", s(2877)], ["strikethrough", s(338).g], ["emphasis", s(7147).g], ["fragments_join", s(3976)]];
        function ParserInline() {
            var e;
            for (e = 0,
            this.ruler = new l; e < c.length; e++)
                this.ruler.push(c[e][0], c[e][1]);
            for (e = 0,
            this.ruler2 = new l; e < u.length; e++)
                this.ruler2.push(u[e][0], u[e][1])
        }
        ParserInline.prototype.skipToken = function(e) {
            var t, s, l = e.pos, c = this.ruler.getRules(""), u = c.length, d = e.md.options.maxNesting, h = e.cache;
            if (void 0 !== h[l]) {
                e.pos = h[l];
                return
            }
            if (e.level < d) {
                for (s = 0; s < u; s++)
                    if (e.level++,
                    t = c[s](e, !0),
                    e.level--,
                    t) {
                        if (l >= e.pos)
                            throw Error("inline rule didn't increment state.pos");
                        break
                    }
            } else
                e.pos = e.posMax;
            !t && e.pos++,
            h[l] = e.pos
        }
        ,
        ParserInline.prototype.tokenize = function(e) {
            for (var t, s, l, c = this.ruler.getRules(""), u = c.length, d = e.posMax, h = e.md.options.maxNesting; e.pos < d; ) {
                if (l = e.pos,
                e.level < h) {
                    for (s = 0; s < u; s++)
                        if (t = c[s](e, !1)) {
                            if (l >= e.pos)
                                throw Error("inline rule didn't increment state.pos");
                            break
                        }
                }
                if (t) {
                    if (e.pos >= d)
                        break;
                    continue
                }
                e.pending += e.src[e.pos++]
            }
            e.pending && e.pushPending()
        }
        ,
        ParserInline.prototype.parse = function(e, t, s, l) {
            var c, u, d, h = new this.State(e,t,s,l);
            for (this.tokenize(h),
            d = (u = this.ruler2.getRules("")).length,
            c = 0; c < d; c++)
                u[c](h)
        }
        ,
        ParserInline.prototype.State = s(1245),
        e.exports = ParserInline
    },
    5112: function(e) {
        "use strict";
        e.exports = {
            options: {
                html: !0,
                xhtmlOut: !0,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: ["normalize", "block", "inline", "text_join"]
                },
                block: {
                    rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
                },
                inline: {
                    rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
                    rules2: ["balance_pairs", "emphasis", "fragments_join"]
                }
            }
        }
    },
    1602: function(e) {
        "use strict";
        e.exports = {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 100
            },
            components: {
                core: {},
                block: {},
                inline: {}
            }
        }
    },
    8373: function(e) {
        "use strict";
        e.exports = {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: ["normalize", "block", "inline", "text_join"]
                },
                block: {
                    rules: ["paragraph"]
                },
                inline: {
                    rules: ["text"],
                    rules2: ["balance_pairs", "fragments_join"]
                }
            }
        }
    },
    3931: function(e, t, s) {
        "use strict";
        var l = s(5292).assign
          , c = s(5292).unescapeAll
          , u = s(5292).escapeHtml
          , d = {};
        function Renderer() {
            this.rules = l({}, d)
        }
        d.code_inline = function(e, t, s, l, c) {
            var d = e[t];
            return "<code" + c.renderAttrs(d) + ">" + u(d.content) + "</code>"
        }
        ,
        d.code_block = function(e, t, s, l, c) {
            var d = e[t];
            return "<pre" + c.renderAttrs(d) + "><code>" + u(e[t].content) + "</code></pre>\n"
        }
        ,
        d.fence = function(e, t, s, l, d) {
            var h, g, m, b, _ = e[t], k = _.info ? c(_.info).trim() : "", y = "", v = "";
            return (k && (y = (m = k.split(/(\s+)/g))[0],
            v = m.slice(2).join("")),
            0 === (h = s.highlight && s.highlight(_.content, y, v) || u(_.content)).indexOf("<pre")) ? h + "\n" : k ? (g = _.attrIndex("class"),
            b = _.attrs ? _.attrs.slice() : [],
            g < 0 ? b.push(["class", s.langPrefix + y]) : (b[g] = b[g].slice(),
            b[g][1] += " " + s.langPrefix + y),
            "<pre><code" + d.renderAttrs({
                attrs: b
            }) + ">" + h + "</code></pre>\n") : "<pre><code" + d.renderAttrs(_) + ">" + h + "</code></pre>\n"
        }
        ,
        d.image = function(e, t, s, l, c) {
            var u = e[t];
            return u.attrs[u.attrIndex("alt")][1] = c.renderInlineAsText(u.children, s, l),
            c.renderToken(e, t, s)
        }
        ,
        d.hardbreak = function(e, t, s) {
            return s.xhtmlOut ? "<br />\n" : "<br>\n"
        }
        ,
        d.softbreak = function(e, t, s) {
            return s.breaks ? s.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
        }
        ,
        d.text = function(e, t) {
            return u(e[t].content)
        }
        ,
        d.html_block = function(e, t) {
            return e[t].content
        }
        ,
        d.html_inline = function(e, t) {
            return e[t].content
        }
        ,
        Renderer.prototype.renderAttrs = function(e) {
            var t, s, l;
            if (!e.attrs)
                return "";
            for (t = 0,
            l = "",
            s = e.attrs.length; t < s; t++)
                l += " " + u(e.attrs[t][0]) + '="' + u(e.attrs[t][1]) + '"';
            return l
        }
        ,
        Renderer.prototype.renderToken = function(e, t, s) {
            var l, c = "", u = !1, d = e[t];
            return d.hidden ? "" : (d.block && -1 !== d.nesting && t && e[t - 1].hidden && (c += "\n"),
            c += (-1 === d.nesting ? "</" : "<") + d.tag + this.renderAttrs(d),
            0 === d.nesting && s.xhtmlOut && (c += " /"),
            d.block && (u = !0,
            1 === d.nesting && t + 1 < e.length && ("inline" === (l = e[t + 1]).type || l.hidden ? u = !1 : -1 === l.nesting && l.tag === d.tag && (u = !1))),
            c += u ? ">\n" : ">")
        }
        ,
        Renderer.prototype.renderInline = function(e, t, s) {
            for (var l, c = "", u = this.rules, d = 0, h = e.length; d < h; d++)
                void 0 !== u[l = e[d].type] ? c += u[l](e, d, t, s, this) : c += this.renderToken(e, d, t);
            return c
        }
        ,
        Renderer.prototype.renderInlineAsText = function(e, t, s) {
            for (var l = "", c = 0, u = e.length; c < u; c++)
                "text" === e[c].type ? l += e[c].content : "image" === e[c].type ? l += this.renderInlineAsText(e[c].children, t, s) : "softbreak" === e[c].type && (l += "\n");
            return l
        }
        ,
        Renderer.prototype.render = function(e, t, s) {
            var l, c, u, d = "", h = this.rules;
            for (l = 0,
            c = e.length; l < c; l++)
                "inline" === (u = e[l].type) ? d += this.renderInline(e[l].children, t, s) : void 0 !== h[u] ? d += h[u](e, l, t, s, this) : d += this.renderToken(e, l, t, s);
            return d
        }
        ,
        e.exports = Renderer
    },
    1390: function(e) {
        "use strict";
        function Ruler() {
            this.__rules__ = [],
            this.__cache__ = null
        }
        Ruler.prototype.__find__ = function(e) {
            for (var t = 0; t < this.__rules__.length; t++)
                if (this.__rules__[t].name === e)
                    return t;
            return -1
        }
        ,
        Ruler.prototype.__compile__ = function() {
            var e = this
              , t = [""];
            e.__rules__.forEach(function(e) {
                e.enabled && e.alt.forEach(function(e) {
                    0 > t.indexOf(e) && t.push(e)
                })
            }),
            e.__cache__ = {},
            t.forEach(function(t) {
                e.__cache__[t] = [],
                e.__rules__.forEach(function(s) {
                    !s.enabled || t && 0 > s.alt.indexOf(t) || e.__cache__[t].push(s.fn)
                })
            })
        }
        ,
        Ruler.prototype.at = function(e, t, s) {
            var l = this.__find__(e);
            if (-1 === l)
                throw Error("Parser rule not found: " + e);
            this.__rules__[l].fn = t,
            this.__rules__[l].alt = (s || {}).alt || [],
            this.__cache__ = null
        }
        ,
        Ruler.prototype.before = function(e, t, s, l) {
            var c = this.__find__(e);
            if (-1 === c)
                throw Error("Parser rule not found: " + e);
            this.__rules__.splice(c, 0, {
                name: t,
                enabled: !0,
                fn: s,
                alt: (l || {}).alt || []
            }),
            this.__cache__ = null
        }
        ,
        Ruler.prototype.after = function(e, t, s, l) {
            var c = this.__find__(e);
            if (-1 === c)
                throw Error("Parser rule not found: " + e);
            this.__rules__.splice(c + 1, 0, {
                name: t,
                enabled: !0,
                fn: s,
                alt: (l || {}).alt || []
            }),
            this.__cache__ = null
        }
        ,
        Ruler.prototype.push = function(e, t, s) {
            this.__rules__.push({
                name: e,
                enabled: !0,
                fn: t,
                alt: (s || {}).alt || []
            }),
            this.__cache__ = null
        }
        ,
        Ruler.prototype.enable = function(e, t) {
            Array.isArray(e) || (e = [e]);
            var s = [];
            return e.forEach(function(e) {
                var l = this.__find__(e);
                if (l < 0) {
                    if (t)
                        return;
                    throw Error("Rules manager: invalid rule name " + e)
                }
                this.__rules__[l].enabled = !0,
                s.push(e)
            }, this),
            this.__cache__ = null,
            s
        }
        ,
        Ruler.prototype.enableOnly = function(e, t) {
            Array.isArray(e) || (e = [e]),
            this.__rules__.forEach(function(e) {
                e.enabled = !1
            }),
            this.enable(e, t)
        }
        ,
        Ruler.prototype.disable = function(e, t) {
            Array.isArray(e) || (e = [e]);
            var s = [];
            return e.forEach(function(e) {
                var l = this.__find__(e);
                if (l < 0) {
                    if (t)
                        return;
                    throw Error("Rules manager: invalid rule name " + e)
                }
                this.__rules__[l].enabled = !1,
                s.push(e)
            }, this),
            this.__cache__ = null,
            s
        }
        ,
        Ruler.prototype.getRules = function(e) {
            return null === this.__cache__ && this.__compile__(),
            this.__cache__[e] || []
        }
        ,
        e.exports = Ruler
    },
    4261: function(e, t, s) {
        "use strict";
        var l = s(5292).isSpace;
        e.exports = function(e, t, s, c) {
            var u, d, h, g, m, b, _, k, y, v, x, E, w, A, C, S, D, N, M, I, T = e.lineMax, O = e.bMarks[t] + e.tShift[t], L = e.eMarks[t];
            if (e.sCount[t] - e.blkIndent >= 4 || 62 !== e.src.charCodeAt(O))
                return !1;
            if (c)
                return !0;
            for (v = [],
            x = [],
            A = [],
            C = [],
            N = e.md.block.ruler.getRules("blockquote"),
            w = e.parentType,
            e.parentType = "blockquote",
            k = t; k < s && (I = e.sCount[k] < e.blkIndent,
            !((O = e.bMarks[k] + e.tShift[k]) >= (L = e.eMarks[k]))); k++) {
                if (62 === e.src.charCodeAt(O++) && !I) {
                    for (g = e.sCount[k] + 1,
                    32 === e.src.charCodeAt(O) ? (O++,
                    g++,
                    u = !1,
                    S = !0) : 9 === e.src.charCodeAt(O) ? (S = !0,
                    (e.bsCount[k] + g) % 4 == 3 ? (O++,
                    g++,
                    u = !1) : u = !0) : S = !1,
                    y = g,
                    v.push(e.bMarks[k]),
                    e.bMarks[k] = O; O < L && l(d = e.src.charCodeAt(O)); )
                        9 === d ? y += 4 - (y + e.bsCount[k] + (u ? 1 : 0)) % 4 : y++,
                        O++;
                    b = O >= L,
                    x.push(e.bsCount[k]),
                    e.bsCount[k] = e.sCount[k] + 1 + (S ? 1 : 0),
                    A.push(e.sCount[k]),
                    e.sCount[k] = y - g,
                    C.push(e.tShift[k]),
                    e.tShift[k] = O - e.bMarks[k];
                    continue
                }
                if (b)
                    break;
                for (h = 0,
                D = !1,
                m = N.length; h < m; h++)
                    if (N[h](e, k, s, !0)) {
                        D = !0;
                        break
                    }
                if (D) {
                    e.lineMax = k,
                    0 !== e.blkIndent && (v.push(e.bMarks[k]),
                    x.push(e.bsCount[k]),
                    C.push(e.tShift[k]),
                    A.push(e.sCount[k]),
                    e.sCount[k] -= e.blkIndent);
                    break
                }
                v.push(e.bMarks[k]),
                x.push(e.bsCount[k]),
                C.push(e.tShift[k]),
                A.push(e.sCount[k]),
                e.sCount[k] = -1
            }
            for (E = e.blkIndent,
            e.blkIndent = 0,
            (M = e.push("blockquote_open", "blockquote", 1)).markup = ">",
            M.map = _ = [t, 0],
            e.md.block.tokenize(e, t, k),
            (M = e.push("blockquote_close", "blockquote", -1)).markup = ">",
            e.lineMax = T,
            e.parentType = w,
            _[1] = e.line,
            h = 0; h < C.length; h++)
                e.bMarks[h + t] = v[h],
                e.tShift[h + t] = C[h],
                e.sCount[h + t] = A[h],
                e.bsCount[h + t] = x[h];
            return e.blkIndent = E,
            !0
        }
    },
    1094: function(e) {
        "use strict";
        e.exports = function(e, t, s) {
            var l, c, u;
            if (e.sCount[t] - e.blkIndent < 4)
                return !1;
            for (c = l = t + 1; l < s; ) {
                if (e.isEmpty(l)) {
                    l++;
                    continue
                }
                if (e.sCount[l] - e.blkIndent >= 4) {
                    c = ++l;
                    continue
                }
                break
            }
            return e.line = c,
            (u = e.push("code_block", "code", 0)).content = e.getLines(t, c, 4 + e.blkIndent, !1) + "\n",
            u.map = [t, e.line],
            !0
        }
    },
    5883: function(e) {
        "use strict";
        e.exports = function(e, t, s, l) {
            var c, u, d, h, g, m, b, _ = !1, k = e.bMarks[t] + e.tShift[t], y = e.eMarks[t];
            if (e.sCount[t] - e.blkIndent >= 4 || k + 3 > y || 126 !== (c = e.src.charCodeAt(k)) && 96 !== c || (g = k,
            (u = (k = e.skipChars(k, c)) - g) < 3) || (b = e.src.slice(g, k),
            d = e.src.slice(k, y),
            96 === c && d.indexOf(String.fromCharCode(c)) >= 0))
                return !1;
            if (l)
                return !0;
            for (h = t; !(++h >= s) && (!((k = g = e.bMarks[h] + e.tShift[h]) < (y = e.eMarks[h])) || !(e.sCount[h] < e.blkIndent)); )
                if (!(e.src.charCodeAt(k) !== c || e.sCount[h] - e.blkIndent >= 4 || (k = e.skipChars(k, c)) - g < u || (k = e.skipSpaces(k)) < y)) {
                    _ = !0;
                    break
                }
            return u = e.sCount[t],
            e.line = h + (_ ? 1 : 0),
            (m = e.push("fence", "code", 0)).info = d,
            m.content = e.getLines(t + 1, h, u, !0),
            m.markup = b,
            m.map = [t, e.line],
            !0
        }
    },
    4758: function(e, t, s) {
        "use strict";
        var l = s(5292).isSpace;
        e.exports = function(e, t, s, c) {
            var u, d, h, g, m = e.bMarks[t] + e.tShift[t], b = e.eMarks[t];
            if (e.sCount[t] - e.blkIndent >= 4 || 35 !== (u = e.src.charCodeAt(m)) || m >= b)
                return !1;
            for (d = 1,
            u = e.src.charCodeAt(++m); 35 === u && m < b && d <= 6; )
                d++,
                u = e.src.charCodeAt(++m);
            return !(d > 6) && (!(m < b) || !!l(u)) && (!!c || (b = e.skipSpacesBack(b, m),
            (h = e.skipCharsBack(b, 35, m)) > m && l(e.src.charCodeAt(h - 1)) && (b = h),
            e.line = t + 1,
            (g = e.push("heading_open", "h" + String(d), 1)).markup = "########".slice(0, d),
            g.map = [t, e.line],
            (g = e.push("inline", "", 0)).content = e.src.slice(m, b).trim(),
            g.map = [t, e.line],
            g.children = [],
            (g = e.push("heading_close", "h" + String(d), -1)).markup = "########".slice(0, d),
            !0))
        }
    },
    1208: function(e, t, s) {
        "use strict";
        var l = s(5292).isSpace;
        e.exports = function(e, t, s, c) {
            var u, d, h, g, m = e.bMarks[t] + e.tShift[t], b = e.eMarks[t];
            if (e.sCount[t] - e.blkIndent >= 4 || 42 !== (u = e.src.charCodeAt(m++)) && 45 !== u && 95 !== u)
                return !1;
            for (d = 1; m < b; ) {
                if ((h = e.src.charCodeAt(m++)) !== u && !l(h))
                    return !1;
                h === u && d++
            }
            return !(d < 3) && (!!c || (e.line = t + 1,
            (g = e.push("hr", "hr", 0)).map = [t, e.line],
            g.markup = Array(d + 1).join(String.fromCharCode(u)),
            !0))
        }
    },
    5231: function(e, t, s) {
        "use strict";
        var l = s(5373)
          , c = s(9372).q
          , u = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0], [/^<!--/, /-->/, !0], [/^<\?/, /\?>/, !0], [/^<![A-Z]/, />/, !0], [/^<!\[CDATA\[/, /\]\]>/, !0], [RegExp("^</?(" + l.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0], [RegExp(c.source + "\\s*$"), /^$/, !1]];
        e.exports = function(e, t, s, l) {
            var c, d, h, g, m = e.bMarks[t] + e.tShift[t], b = e.eMarks[t];
            if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || 60 !== e.src.charCodeAt(m))
                return !1;
            for (c = 0,
            g = e.src.slice(m, b); c < u.length && !u[c][0].test(g); c++)
                ;
            if (c === u.length)
                return !1;
            if (l)
                return u[c][2];
            if (d = t + 1,
            !u[c][1].test(g)) {
                for (; d < s && !(e.sCount[d] < e.blkIndent); d++)
                    if (m = e.bMarks[d] + e.tShift[d],
                    b = e.eMarks[d],
                    g = e.src.slice(m, b),
                    u[c][1].test(g)) {
                        0 !== g.length && d++;
                        break
                    }
            }
            return e.line = d,
            (h = e.push("html_block", "", 0)).map = [t, d],
            h.content = e.getLines(t, d, e.blkIndent, !0),
            !0
        }
    },
    8971: function(e) {
        "use strict";
        e.exports = function(e, t, s) {
            var l, c, u, d, h, g, m, b, _, k, y = t + 1, v = e.md.block.ruler.getRules("paragraph");
            if (e.sCount[t] - e.blkIndent >= 4)
                return !1;
            for (k = e.parentType,
            e.parentType = "paragraph"; y < s && !e.isEmpty(y); y++)
                if (!(e.sCount[y] - e.blkIndent > 3)) {
                    if (e.sCount[y] >= e.blkIndent && (g = e.bMarks[y] + e.tShift[y]) < (m = e.eMarks[y]) && (45 === (_ = e.src.charCodeAt(g)) || 61 === _) && (g = e.skipChars(g, _),
                    (g = e.skipSpaces(g)) >= m)) {
                        b = 61 === _ ? 1 : 2;
                        break
                    }
                    if (!(e.sCount[y] < 0)) {
                        for (u = 0,
                        c = !1,
                        d = v.length; u < d; u++)
                            if (v[u](e, y, s, !0)) {
                                c = !0;
                                break
                            }
                        if (c)
                            break
                    }
                }
            return !!b && (l = e.getLines(t, y, e.blkIndent, !1).trim(),
            e.line = y + 1,
            (h = e.push("heading_open", "h" + String(b), 1)).markup = String.fromCharCode(_),
            h.map = [t, e.line],
            (h = e.push("inline", "", 0)).content = l,
            h.map = [t, e.line - 1],
            h.children = [],
            (h = e.push("heading_close", "h" + String(b), -1)).markup = String.fromCharCode(_),
            e.parentType = k,
            !0)
        }
    },
    1551: function(e, t, s) {
        "use strict";
        var l = s(5292).isSpace;
        function skipBulletListMarker(e, t) {
            var s, c, u;
            return (c = e.bMarks[t] + e.tShift[t],
            u = e.eMarks[t],
            42 !== (s = e.src.charCodeAt(c++)) && 45 !== s && 43 !== s || c < u && !l(e.src.charCodeAt(c))) ? -1 : c
        }
        function skipOrderedListMarker(e, t) {
            var s, c = e.bMarks[t] + e.tShift[t], u = c, d = e.eMarks[t];
            if (u + 1 >= d || (s = e.src.charCodeAt(u++)) < 48 || s > 57)
                return -1;
            for (; ; ) {
                if (u >= d)
                    return -1;
                if ((s = e.src.charCodeAt(u++)) >= 48 && s <= 57) {
                    if (u - c >= 10)
                        return -1;
                    continue
                }
                if (41 === s || 46 === s)
                    break;
                return -1
            }
            return u < d && !l(s = e.src.charCodeAt(u)) ? -1 : u
        }
        e.exports = function(e, t, s, l) {
            var c, u, d, h, g, m, b, _, k, y, v, x, E, w, A, C, S, D, N, M, I, T, O, L, R, F, z, B = t, q = !1, P = !0;
            if (e.sCount[B] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[B] - e.listIndent >= 4 && e.sCount[B] < e.blkIndent)
                return !1;
            if (l && "paragraph" === e.parentType && e.sCount[B] >= e.blkIndent && (q = !0),
            (T = skipOrderedListMarker(e, B)) >= 0) {
                if (b = !0,
                L = e.bMarks[B] + e.tShift[B],
                E = Number(e.src.slice(L, T - 1)),
                q && 1 !== E)
                    return !1
            } else {
                if (!((T = skipBulletListMarker(e, B)) >= 0))
                    return !1;
                b = !1
            }
            if (q && e.skipSpaces(T) >= e.eMarks[B])
                return !1;
            if (l)
                return !0;
            for (x = e.src.charCodeAt(T - 1),
            v = e.tokens.length,
            b ? (z = e.push("ordered_list_open", "ol", 1),
            1 !== E && (z.attrs = [["start", E]])) : z = e.push("bullet_list_open", "ul", 1),
            z.map = y = [B, 0],
            z.markup = String.fromCharCode(x),
            O = !1,
            F = e.md.block.ruler.getRules("list"),
            S = e.parentType,
            e.parentType = "list"; B < s; ) {
                for (I = T,
                w = e.eMarks[B],
                m = A = e.sCount[B] + T - (e.bMarks[B] + e.tShift[B]); I < w; ) {
                    if (9 === (c = e.src.charCodeAt(I)))
                        A += 4 - (A + e.bsCount[B]) % 4;
                    else if (32 === c)
                        A++;
                    else
                        break;
                    I++
                }
                if ((g = (u = I) >= w ? 1 : A - m) > 4 && (g = 1),
                h = m + g,
                (z = e.push("list_item_open", "li", 1)).markup = String.fromCharCode(x),
                z.map = _ = [B, 0],
                b && (z.info = e.src.slice(L, T - 1)),
                M = e.tight,
                N = e.tShift[B],
                D = e.sCount[B],
                C = e.listIndent,
                e.listIndent = e.blkIndent,
                e.blkIndent = h,
                e.tight = !0,
                e.tShift[B] = u - e.bMarks[B],
                e.sCount[B] = A,
                u >= w && e.isEmpty(B + 1) ? e.line = Math.min(e.line + 2, s) : e.md.block.tokenize(e, B, s, !0),
                (!e.tight || O) && (P = !1),
                O = e.line - B > 1 && e.isEmpty(e.line - 1),
                e.blkIndent = e.listIndent,
                e.listIndent = C,
                e.tShift[B] = N,
                e.sCount[B] = D,
                e.tight = M,
                (z = e.push("list_item_close", "li", -1)).markup = String.fromCharCode(x),
                B = e.line,
                _[1] = B,
                B >= s || e.sCount[B] < e.blkIndent || e.sCount[B] - e.blkIndent >= 4)
                    break;
                for (d = 0,
                R = !1,
                k = F.length; d < k; d++)
                    if (F[d](e, B, s, !0)) {
                        R = !0;
                        break
                    }
                if (R)
                    break;
                if (b) {
                    if ((T = skipOrderedListMarker(e, B)) < 0)
                        break;
                    L = e.bMarks[B] + e.tShift[B]
                } else if ((T = skipBulletListMarker(e, B)) < 0)
                    break;
                if (x !== e.src.charCodeAt(T - 1))
                    break
            }
            return (z = b ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(x),
            y[1] = B,
            e.line = B,
            e.parentType = S,
            P && function(e, t) {
                var s, l, c = e.level + 2;
                for (s = t + 2,
                l = e.tokens.length - 2; s < l; s++)
                    e.tokens[s].level === c && "paragraph_open" === e.tokens[s].type && (e.tokens[s + 2].hidden = !0,
                    e.tokens[s].hidden = !0,
                    s += 2)
            }(e, v),
            !0
        }
    },
    2248: function(e) {
        "use strict";
        e.exports = function(e, t, s) {
            var l, c, u, d, h, g, m = t + 1, b = e.md.block.ruler.getRules("paragraph");
            for (g = e.parentType,
            e.parentType = "paragraph"; m < s && !e.isEmpty(m); m++)
                if (!(e.sCount[m] - e.blkIndent > 3) && !(e.sCount[m] < 0)) {
                    for (u = 0,
                    c = !1,
                    d = b.length; u < d; u++)
                        if (b[u](e, m, s, !0)) {
                            c = !0;
                            break
                        }
                    if (c)
                        break
                }
            return l = e.getLines(t, m, e.blkIndent, !1).trim(),
            e.line = m,
            (h = e.push("paragraph_open", "p", 1)).map = [t, e.line],
            (h = e.push("inline", "", 0)).content = l,
            h.map = [t, e.line],
            h.children = [],
            h = e.push("paragraph_close", "p", -1),
            e.parentType = g,
            !0
        }
    },
    4600: function(e, t, s) {
        "use strict";
        var l = s(5292).normalizeReference
          , c = s(5292).isSpace;
        e.exports = function(e, t, s, u) {
            var d, h, g, m, b, _, k, y, v, x, E, w, A, C, S, D, N = 0, M = e.bMarks[t] + e.tShift[t], I = e.eMarks[t], T = t + 1;
            if (e.sCount[t] - e.blkIndent >= 4 || 91 !== e.src.charCodeAt(M))
                return !1;
            for (; ++M < I; )
                if (93 === e.src.charCodeAt(M) && 92 !== e.src.charCodeAt(M - 1)) {
                    if (M + 1 === I || 58 !== e.src.charCodeAt(M + 1))
                        return !1;
                    break
                }
            for (m = e.lineMax,
            S = e.md.block.ruler.getRules("reference"),
            x = e.parentType,
            e.parentType = "reference"; T < m && !e.isEmpty(T); T++)
                if (!(e.sCount[T] - e.blkIndent > 3) && !(e.sCount[T] < 0)) {
                    for (_ = 0,
                    C = !1,
                    k = S.length; _ < k; _++)
                        if (S[_](e, T, m, !0)) {
                            C = !0;
                            break
                        }
                    if (C)
                        break
                }
            for (M = 1,
            I = (A = e.getLines(t, T, e.blkIndent, !1).trim()).length; M < I; M++) {
                if (91 === (d = A.charCodeAt(M)))
                    return !1;
                if (93 === d) {
                    v = M;
                    break
                }
                10 === d ? N++ : 92 === d && ++M < I && 10 === A.charCodeAt(M) && N++
            }
            if (v < 0 || 58 !== A.charCodeAt(v + 1))
                return !1;
            for (M = v + 2; M < I; M++)
                if (10 === (d = A.charCodeAt(M)))
                    N++;
                else if (c(d))
                    ;
                else
                    break;
            if (!(E = e.md.helpers.parseLinkDestination(A, M, I)).ok || (b = e.md.normalizeLink(E.str),
            !e.md.validateLink(b)))
                return !1;
            for (M = E.pos,
            N += E.lines,
            h = M,
            g = N,
            w = M; M < I; M++)
                if (10 === (d = A.charCodeAt(M)))
                    N++;
                else if (c(d))
                    ;
                else
                    break;
            for (E = e.md.helpers.parseLinkTitle(A, M, I),
            M < I && w !== M && E.ok ? (D = E.str,
            M = E.pos,
            N += E.lines) : (D = "",
            M = h,
            N = g); M < I && c(d = A.charCodeAt(M)); )
                M++;
            if (M < I && 10 !== A.charCodeAt(M) && D)
                for (D = "",
                M = h,
                N = g; M < I && c(d = A.charCodeAt(M)); )
                    M++;
            return !!((!(M < I) || 10 === A.charCodeAt(M)) && (y = l(A.slice(1, v)))) && (!!u || (void 0 === e.env.references && (e.env.references = {}),
            void 0 === e.env.references[y] && (e.env.references[y] = {
                title: D,
                href: b
            }),
            e.parentType = x,
            e.line = t + N + 1,
            !0))
        }
    },
    9043: function(e, t, s) {
        "use strict";
        var l = s(9147)
          , c = s(5292).isSpace;
        function StateBlock(e, t, s, l) {
            var u, d, h, g, m, b, _, k;
            for (this.src = e,
            this.md = t,
            this.env = s,
            this.tokens = l,
            this.bMarks = [],
            this.eMarks = [],
            this.tShift = [],
            this.sCount = [],
            this.bsCount = [],
            this.blkIndent = 0,
            this.line = 0,
            this.lineMax = 0,
            this.tight = !1,
            this.ddIndent = -1,
            this.listIndent = -1,
            this.parentType = "root",
            this.level = 0,
            this.result = "",
            d = this.src,
            k = !1,
            h = g = b = _ = 0,
            m = d.length; g < m; g++) {
                if (u = d.charCodeAt(g),
                !k) {
                    if (c(u)) {
                        b++,
                        9 === u ? _ += 4 - _ % 4 : _++;
                        continue
                    }
                    k = !0
                }
                (10 === u || g === m - 1) && (10 !== u && g++,
                this.bMarks.push(h),
                this.eMarks.push(g),
                this.tShift.push(b),
                this.sCount.push(_),
                this.bsCount.push(0),
                k = !1,
                b = 0,
                _ = 0,
                h = g + 1)
            }
            this.bMarks.push(d.length),
            this.eMarks.push(d.length),
            this.tShift.push(0),
            this.sCount.push(0),
            this.bsCount.push(0),
            this.lineMax = this.bMarks.length - 1
        }
        StateBlock.prototype.push = function(e, t, s) {
            var c = new l(e,t,s);
            return c.block = !0,
            s < 0 && this.level--,
            c.level = this.level,
            s > 0 && this.level++,
            this.tokens.push(c),
            c
        }
        ,
        StateBlock.prototype.isEmpty = function(e) {
            return this.bMarks[e] + this.tShift[e] >= this.eMarks[e]
        }
        ,
        StateBlock.prototype.skipEmptyLines = function(e) {
            for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
                ;
            return e
        }
        ,
        StateBlock.prototype.skipSpaces = function(e) {
            for (var t = this.src.length; e < t && c(this.src.charCodeAt(e)); e++)
                ;
            return e
        }
        ,
        StateBlock.prototype.skipSpacesBack = function(e, t) {
            if (e <= t)
                return e;
            for (; e > t; )
                if (!c(this.src.charCodeAt(--e)))
                    return e + 1;
            return e
        }
        ,
        StateBlock.prototype.skipChars = function(e, t) {
            for (var s = this.src.length; e < s && this.src.charCodeAt(e) === t; e++)
                ;
            return e
        }
        ,
        StateBlock.prototype.skipCharsBack = function(e, t, s) {
            if (e <= s)
                return e;
            for (; e > s; )
                if (t !== this.src.charCodeAt(--e))
                    return e + 1;
            return e
        }
        ,
        StateBlock.prototype.getLines = function(e, t, s, l) {
            var u, d, h, g, m, b, _, k = e;
            if (e >= t)
                return "";
            for (u = 0,
            b = Array(t - e); k < t; k++,
            u++) {
                for (d = 0,
                _ = g = this.bMarks[k],
                m = k + 1 < t || l ? this.eMarks[k] + 1 : this.eMarks[k]; g < m && d < s; ) {
                    if (c(h = this.src.charCodeAt(g)))
                        9 === h ? d += 4 - (d + this.bsCount[k]) % 4 : d++;
                    else if (g - _ < this.tShift[k])
                        d++;
                    else
                        break;
                    g++
                }
                d > s ? b[u] = Array(d - s + 1).join(" ") + this.src.slice(g, m) : b[u] = this.src.slice(g, m)
            }
            return b.join("")
        }
        ,
        StateBlock.prototype.Token = l,
        e.exports = StateBlock
    },
    3031: function(e, t, s) {
        "use strict";
        var l = s(5292).isSpace;
        function getLine(e, t) {
            var s = e.bMarks[t] + e.tShift[t]
              , l = e.eMarks[t];
            return e.src.slice(s, l)
        }
        function escapedSplit(e) {
            var t, s = [], l = 0, c = e.length, u = !1, d = 0, h = "";
            for (t = e.charCodeAt(l); l < c; )
                124 === t && (u ? (h += e.substring(d, l - 1),
                d = l) : (s.push(h + e.substring(d, l)),
                h = "",
                d = l + 1)),
                u = 92 === t,
                l++,
                t = e.charCodeAt(l);
            return s.push(h + e.substring(d)),
            s
        }
        e.exports = function(e, t, s, c) {
            var u, d, h, g, m, b, _, k, y, v, x, E, w, A, C, S, D, N;
            if (t + 2 > s || (b = t + 1,
            e.sCount[b] < e.blkIndent || e.sCount[b] - e.blkIndent >= 4 || (h = e.bMarks[b] + e.tShift[b]) >= e.eMarks[b] || 124 !== (D = e.src.charCodeAt(h++)) && 45 !== D && 58 !== D || h >= e.eMarks[b] || 124 !== (N = e.src.charCodeAt(h++)) && 45 !== N && 58 !== N && !l(N) || 45 === D && l(N)))
                return !1;
            for (; h < e.eMarks[b]; ) {
                if (124 !== (u = e.src.charCodeAt(h)) && 45 !== u && 58 !== u && !l(u))
                    return !1;
                h++
            }
            for (g = 0,
            _ = (d = getLine(e, t + 1)).split("|"),
            v = []; g < _.length; g++) {
                if (!(x = _[g].trim())) {
                    if (0 === g || g === _.length - 1)
                        continue;
                    return !1
                }
                if (!/^:?-+:?$/.test(x))
                    return !1;
                58 === x.charCodeAt(x.length - 1) ? v.push(58 === x.charCodeAt(0) ? "center" : "right") : 58 === x.charCodeAt(0) ? v.push("left") : v.push("")
            }
            if (-1 === (d = getLine(e, t).trim()).indexOf("|") || e.sCount[t] - e.blkIndent >= 4 || ((_ = escapedSplit(d)).length && "" === _[0] && _.shift(),
            _.length && "" === _[_.length - 1] && _.pop(),
            0 === (k = _.length) || k !== v.length))
                return !1;
            if (c)
                return !0;
            for (g = 0,
            A = e.parentType,
            e.parentType = "table",
            S = e.md.block.ruler.getRules("blockquote"),
            (y = e.push("table_open", "table", 1)).map = E = [t, 0],
            (y = e.push("thead_open", "thead", 1)).map = [t, t + 1],
            (y = e.push("tr_open", "tr", 1)).map = [t, t + 1]; g < _.length; g++)
                y = e.push("th_open", "th", 1),
                v[g] && (y.attrs = [["style", "text-align:" + v[g]]]),
                (y = e.push("inline", "", 0)).content = _[g].trim(),
                y.children = [],
                y = e.push("th_close", "th", -1);
            for (y = e.push("tr_close", "tr", -1),
            y = e.push("thead_close", "thead", -1),
            b = t + 2; b < s && !(e.sCount[b] < e.blkIndent); b++) {
                for (g = 0,
                C = !1,
                m = S.length; g < m; g++)
                    if (S[g](e, b, s, !0)) {
                        C = !0;
                        break
                    }
                if (C || !(d = getLine(e, b).trim()) || e.sCount[b] - e.blkIndent >= 4)
                    break;
                for ((_ = escapedSplit(d)).length && "" === _[0] && _.shift(),
                _.length && "" === _[_.length - 1] && _.pop(),
                b === t + 2 && ((y = e.push("tbody_open", "tbody", 1)).map = w = [t + 2, 0]),
                (y = e.push("tr_open", "tr", 1)).map = [b, b + 1],
                g = 0; g < k; g++)
                    y = e.push("td_open", "td", 1),
                    v[g] && (y.attrs = [["style", "text-align:" + v[g]]]),
                    (y = e.push("inline", "", 0)).content = _[g] ? _[g].trim() : "",
                    y.children = [],
                    y = e.push("td_close", "td", -1);
                y = e.push("tr_close", "tr", -1)
            }
            return w && (y = e.push("tbody_close", "tbody", -1),
            w[1] = b),
            y = e.push("table_close", "table", -1),
            E[1] = b,
            e.parentType = A,
            e.line = b,
            !0
        }
    },
    2304: function(e) {
        "use strict";
        e.exports = function(e) {
            var t;
            e.inlineMode ? ((t = new e.Token("inline","",0)).content = e.src,
            t.map = [0, 1],
            t.children = [],
            e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens)
        }
    },
    4059: function(e) {
        "use strict";
        e.exports = function(e) {
            var t, s, l, c = e.tokens;
            for (s = 0,
            l = c.length; s < l; s++)
                "inline" === (t = c[s]).type && e.md.inline.parse(t.content, e.md, e.env, t.children)
        }
    },
    9357: function(e, t, s) {
        "use strict";
        var l = s(5292).arrayReplaceAt;
        e.exports = function(e) {
            var t, s, c, u, d, h, g, m, b, _, k, y, v, x, E, w, A, C, S, D = e.tokens;
            if (e.md.options.linkify) {
                for (u = 0,
                d = D.length; u < d; u++)
                    if ("inline" === D[u].type && e.md.linkify.pretest(D[u].content))
                        for (h = D[u].children,
                        E = 0,
                        c = h.length - 1; c >= 0; c--) {
                            if ("link_close" === (m = h[c]).type) {
                                for (c--; h[c].level !== m.level && "link_open" !== h[c].type; )
                                    c--;
                                continue
                            }
                            if ("html_inline" === m.type && (t = m.content,
                            /^<a[>\s]/i.test(t) && E > 0 && E--,
                            s = m.content,
                            /^<\/a\s*>/i.test(s) && E++),
                            !(E > 0) && "text" === m.type && e.md.linkify.test(m.content)) {
                                for (k = m.content,
                                S = e.md.linkify.match(k),
                                b = [],
                                x = m.level,
                                v = 0,
                                S.length > 0 && 0 === S[0].index && c > 0 && "text_special" === h[c - 1].type && (S = S.slice(1)),
                                _ = 0; _ < S.length; _++)
                                    w = S[_].url,
                                    A = e.md.normalizeLink(w),
                                    e.md.validateLink(A) && (C = S[_].text,
                                    C = S[_].schema ? "mailto:" !== S[_].schema || /^mailto:/i.test(C) ? e.md.normalizeLinkText(C) : e.md.normalizeLinkText("mailto:" + C).replace(/^mailto:/, "") : e.md.normalizeLinkText("http://" + C).replace(/^http:\/\//, ""),
                                    (y = S[_].index) > v && ((g = new e.Token("text","",0)).content = k.slice(v, y),
                                    g.level = x,
                                    b.push(g)),
                                    (g = new e.Token("link_open","a",1)).attrs = [["href", A]],
                                    g.level = x++,
                                    g.markup = "linkify",
                                    g.info = "auto",
                                    b.push(g),
                                    (g = new e.Token("text","",0)).content = C,
                                    g.level = x,
                                    b.push(g),
                                    (g = new e.Token("link_close","a",-1)).level = --x,
                                    g.markup = "linkify",
                                    g.info = "auto",
                                    b.push(g),
                                    v = S[_].lastIndex);
                                v < k.length && ((g = new e.Token("text","",0)).content = k.slice(v),
                                g.level = x,
                                b.push(g)),
                                D[u].children = h = l(h, c, b)
                            }
                        }
            }
        }
    },
    7244: function(e) {
        "use strict";
        var t = /\r\n?|\n/g
          , s = /\0/g;
        e.exports = function(e) {
            var l;
            l = (l = e.src.replace(t, "\n")).replace(s, "�"),
            e.src = l
        }
    },
    8919: function(e) {
        "use strict";
        var t = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/
          , s = /\((c|tm|r)\)/i
          , l = /\((c|tm|r)\)/ig
          , c = {
            c: "\xa9",
            r: "\xae",
            tm: "™"
        };
        function replaceFn(e, t) {
            return c[t.toLowerCase()]
        }
        e.exports = function(e) {
            var c;
            if (e.md.options.typographer)
                for (c = e.tokens.length - 1; c >= 0; c--)
                    "inline" === e.tokens[c].type && (s.test(e.tokens[c].content) && function(e) {
                        var t, s, c = 0;
                        for (t = e.length - 1; t >= 0; t--)
                            "text" !== (s = e[t]).type || c || (s.content = s.content.replace(l, replaceFn)),
                            "link_open" === s.type && "auto" === s.info && c--,
                            "link_close" === s.type && "auto" === s.info && c++
                    }(e.tokens[c].children),
                    t.test(e.tokens[c].content) && function(e) {
                        var s, l, c = 0;
                        for (s = e.length - 1; s >= 0; s--)
                            "text" === (l = e[s]).type && !c && t.test(l.content) && (l.content = l.content.replace(/\+-/g, "\xb1").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")),
                            "link_open" === l.type && "auto" === l.info && c--,
                            "link_close" === l.type && "auto" === l.info && c++
                    }(e.tokens[c].children))
        }
    },
    2508: function(e, t, s) {
        "use strict";
        var l = s(5292).isWhiteSpace
          , c = s(5292).isPunctChar
          , u = s(5292).isMdAsciiPunct
          , d = /['"]/
          , h = /['"]/g;
        function replaceAt(e, t, s) {
            return e.slice(0, t) + s + e.slice(t + 1)
        }
        e.exports = function(e) {
            var t;
            if (e.md.options.typographer)
                for (t = e.tokens.length - 1; t >= 0; t--)
                    "inline" === e.tokens[t].type && d.test(e.tokens[t].content) && function(e, t) {
                        var s, d, g, m, b, _, k, y, v, x, E, w, A, C, S, D, N, M, I, T, O;
                        for (s = 0,
                        I = []; s < e.length; s++) {
                            for (d = e[s],
                            k = e[s].level,
                            N = I.length - 1; N >= 0 && !(I[N].level <= k); N--)
                                ;
                            if (I.length = N + 1,
                            "text" === d.type) {
                                g = d.content,
                                b = 0,
                                _ = g.length;
                                e: for (; b < _ && (h.lastIndex = b,
                                m = h.exec(g)); ) {
                                    if (S = D = !0,
                                    b = m.index + 1,
                                    M = "'" === m[0],
                                    v = 32,
                                    m.index - 1 >= 0)
                                        v = g.charCodeAt(m.index - 1);
                                    else
                                        for (N = s - 1; N >= 0 && "softbreak" !== e[N].type && "hardbreak" !== e[N].type; N--)
                                            if (e[N].content) {
                                                v = e[N].content.charCodeAt(e[N].content.length - 1);
                                                break
                                            }
                                    if (x = 32,
                                    b < _)
                                        x = g.charCodeAt(b);
                                    else
                                        for (N = s + 1; N < e.length && "softbreak" !== e[N].type && "hardbreak" !== e[N].type; N++)
                                            if (e[N].content) {
                                                x = e[N].content.charCodeAt(0);
                                                break
                                            }
                                    if (E = u(v) || c(String.fromCharCode(v)),
                                    w = u(x) || c(String.fromCharCode(x)),
                                    A = l(v),
                                    (C = l(x)) ? S = !1 : w && !(A || E) && (S = !1),
                                    A ? D = !1 : E && !(C || w) && (D = !1),
                                    34 === x && '"' === m[0] && v >= 48 && v <= 57 && (D = S = !1),
                                    S && D && (S = E,
                                    D = w),
                                    !S && !D) {
                                        M && (d.content = replaceAt(d.content, m.index, "’"));
                                        continue
                                    }
                                    if (D) {
                                        for (N = I.length - 1; N >= 0 && (y = I[N],
                                        !(I[N].level < k)); N--)
                                            if (y.single === M && I[N].level === k) {
                                                y = I[N],
                                                M ? (T = t.md.options.quotes[2],
                                                O = t.md.options.quotes[3]) : (T = t.md.options.quotes[0],
                                                O = t.md.options.quotes[1]),
                                                d.content = replaceAt(d.content, m.index, O),
                                                e[y.token].content = replaceAt(e[y.token].content, y.pos, T),
                                                b += O.length - 1,
                                                y.token === s && (b += T.length - 1),
                                                _ = (g = d.content).length,
                                                I.length = N;
                                                continue e
                                            }
                                    }
                                    S ? I.push({
                                        token: s,
                                        pos: m.index,
                                        single: M,
                                        level: k
                                    }) : D && M && (d.content = replaceAt(d.content, m.index, "’"))
                                }
                            }
                        }
                    }(e.tokens[t].children, e)
        }
    },
    7811: function(e, t, s) {
        "use strict";
        var l = s(9147);
        function StateCore(e, t, s) {
            this.src = e,
            this.env = s,
            this.tokens = [],
            this.inlineMode = !1,
            this.md = t
        }
        StateCore.prototype.Token = l,
        e.exports = StateCore
    },
    6499: function(e) {
        "use strict";
        e.exports = function(e) {
            var t, s, l, c, u, d, h = e.tokens;
            for (t = 0,
            s = h.length; t < s; t++)
                if ("inline" === h[t].type) {
                    for (c = 0,
                    u = (l = h[t].children).length; c < u; c++)
                        "text_special" === l[c].type && (l[c].type = "text");
                    for (c = d = 0; c < u; c++)
                        "text" === l[c].type && c + 1 < u && "text" === l[c + 1].type ? l[c + 1].content = l[c].content + l[c + 1].content : (c !== d && (l[d] = l[c]),
                        d++);
                    c !== d && (l.length = d)
                }
        }
    },
    1858: function(e) {
        "use strict";
        var t = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/
          , s = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
        e.exports = function(e, l) {
            var c, u, d, h, g, m, b = e.pos;
            if (60 !== e.src.charCodeAt(b))
                return !1;
            for (g = e.pos,
            m = e.posMax; ; ) {
                if (++b >= m || 60 === (h = e.src.charCodeAt(b)))
                    return !1;
                if (62 === h)
                    break
            }
            return (c = e.src.slice(g + 1, b),
            s.test(c)) ? (u = e.md.normalizeLink(c),
            !!e.md.validateLink(u) && (l || ((d = e.push("link_open", "a", 1)).attrs = [["href", u]],
            d.markup = "autolink",
            d.info = "auto",
            (d = e.push("text", "", 0)).content = e.md.normalizeLinkText(c),
            (d = e.push("link_close", "a", -1)).markup = "autolink",
            d.info = "auto"),
            e.pos += c.length + 2,
            !0)) : !!t.test(c) && (u = e.md.normalizeLink("mailto:" + c),
            !!e.md.validateLink(u) && (l || ((d = e.push("link_open", "a", 1)).attrs = [["href", u]],
            d.markup = "autolink",
            d.info = "auto",
            (d = e.push("text", "", 0)).content = e.md.normalizeLinkText(c),
            (d = e.push("link_close", "a", -1)).markup = "autolink",
            d.info = "auto"),
            e.pos += c.length + 2,
            !0))
        }
    },
    8706: function(e) {
        "use strict";
        e.exports = function(e, t) {
            var s, l, c, u, d, h, g, m, b = e.pos;
            if (96 !== e.src.charCodeAt(b))
                return !1;
            for (s = b,
            b++,
            l = e.posMax; b < l && 96 === e.src.charCodeAt(b); )
                b++;
            if (g = (c = e.src.slice(s, b)).length,
            e.backticksScanned && (e.backticks[g] || 0) <= s)
                return t || (e.pending += c),
                e.pos += g,
                !0;
            for (h = b; -1 !== (d = e.src.indexOf("`", h)); ) {
                for (h = d + 1; h < l && 96 === e.src.charCodeAt(h); )
                    h++;
                if ((m = h - d) === g)
                    return t || ((u = e.push("code_inline", "code", 0)).markup = c,
                    u.content = e.src.slice(b, d).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")),
                    e.pos = h,
                    !0;
                e.backticks[m] = d
            }
            return e.backticksScanned = !0,
            t || (e.pending += c),
            e.pos += g,
            !0
        }
    },
    2877: function(e) {
        "use strict";
        function processDelimiters(e) {
            var t, s, l, c, u, d, h, g, m = {}, b = e.length;
            if (b) {
                var _ = 0
                  , k = -2
                  , y = [];
                for (t = 0; t < b; t++)
                    if (l = e[t],
                    y.push(0),
                    (e[_].marker !== l.marker || k !== l.token - 1) && (_ = t),
                    k = l.token,
                    l.length = l.length || 0,
                    l.close) {
                        for (m.hasOwnProperty(l.marker) || (m[l.marker] = [-1, -1, -1, -1, -1, -1]),
                        u = m[l.marker][(l.open ? 3 : 0) + l.length % 3],
                        d = s = _ - y[_] - 1; s > u; s -= y[s] + 1)
                            if ((c = e[s]).marker === l.marker && c.open && c.end < 0 && (h = !1,
                            (c.close || l.open) && (c.length + l.length) % 3 == 0 && (c.length % 3 != 0 || l.length % 3 != 0) && (h = !0),
                            !h)) {
                                g = s > 0 && !e[s - 1].open ? y[s - 1] + 1 : 0,
                                y[t] = t - s + g,
                                y[s] = g,
                                l.open = !1,
                                c.end = t,
                                c.close = !1,
                                d = -1,
                                k = -2;
                                break
                            }
                        -1 !== d && (m[l.marker][(l.open ? 3 : 0) + (l.length || 0) % 3] = d)
                    }
            }
        }
        e.exports = function(e) {
            var t, s = e.tokens_meta, l = e.tokens_meta.length;
            for (processDelimiters(e.delimiters),
            t = 0; t < l; t++)
                s[t] && s[t].delimiters && processDelimiters(s[t].delimiters)
        }
    },
    7147: function(e) {
        "use strict";
        function postProcess(e, t) {
            var s, l, c, u, d, h;
            for (s = t.length - 1; s >= 0; s--)
                (95 === (l = t[s]).marker || 42 === l.marker) && -1 !== l.end && (c = t[l.end],
                h = s > 0 && t[s - 1].end === l.end + 1 && t[s - 1].marker === l.marker && t[s - 1].token === l.token - 1 && t[l.end + 1].token === c.token + 1,
                d = String.fromCharCode(l.marker),
                (u = e.tokens[l.token]).type = h ? "strong_open" : "em_open",
                u.tag = h ? "strong" : "em",
                u.nesting = 1,
                u.markup = h ? d + d : d,
                u.content = "",
                (u = e.tokens[c.token]).type = h ? "strong_close" : "em_close",
                u.tag = h ? "strong" : "em",
                u.nesting = -1,
                u.markup = h ? d + d : d,
                u.content = "",
                h && (e.tokens[t[s - 1].token].content = "",
                e.tokens[t[l.end + 1].token].content = "",
                s--))
        }
        e.exports.w = function(e, t) {
            var s, l, c = e.pos, u = e.src.charCodeAt(c);
            if (t || 95 !== u && 42 !== u)
                return !1;
            for (s = 0,
            l = e.scanDelims(e.pos, 42 === u); s < l.length; s++)
                e.push("text", "", 0).content = String.fromCharCode(u),
                e.delimiters.push({
                    marker: u,
                    length: l.length,
                    token: e.tokens.length - 1,
                    end: -1,
                    open: l.can_open,
                    close: l.can_close
                });
            return e.pos += l.length,
            !0
        }
        ,
        e.exports.g = function(e) {
            var t, s = e.tokens_meta, l = e.tokens_meta.length;
            for (postProcess(e, e.delimiters),
            t = 0; t < l; t++)
                s[t] && s[t].delimiters && postProcess(e, s[t].delimiters)
        }
    },
    5796: function(e, t, s) {
        "use strict";
        var l = s(3906)
          , c = s(5292).has
          , u = s(5292).isValidEntityCode
          , d = s(5292).fromCodePoint
          , h = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i
          , g = /^&([a-z][a-z0-9]{1,31});/i;
        e.exports = function(e, t) {
            var s, m, b, _ = e.pos, k = e.posMax;
            if (38 !== e.src.charCodeAt(_) || _ + 1 >= k)
                return !1;
            if (35 === e.src.charCodeAt(_ + 1)) {
                if (m = e.src.slice(_).match(h))
                    return t || (s = "x" === m[1][0].toLowerCase() ? parseInt(m[1].slice(1), 16) : parseInt(m[1], 10),
                    (b = e.push("text_special", "", 0)).content = u(s) ? d(s) : d(65533),
                    b.markup = m[0],
                    b.info = "entity"),
                    e.pos += m[0].length,
                    !0
            } else if ((m = e.src.slice(_).match(g)) && c(l, m[1]))
                return t || ((b = e.push("text_special", "", 0)).content = l[m[1]],
                b.markup = m[0],
                b.info = "entity"),
                e.pos += m[0].length,
                !0;
            return !1
        }
    },
    8199: function(e, t, s) {
        "use strict";
        for (var l = s(5292).isSpace, c = [], u = 0; u < 256; u++)
            c.push(0);
        "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
            c[e.charCodeAt(0)] = 1
        }),
        e.exports = function(e, t) {
            var s, u, d, h, g, m = e.pos, b = e.posMax;
            if (92 !== e.src.charCodeAt(m) || ++m >= b)
                return !1;
            if (10 === (s = e.src.charCodeAt(m))) {
                for (t || e.push("hardbreak", "br", 0),
                m++; m < b && l(s = e.src.charCodeAt(m)); )
                    m++;
                return e.pos = m,
                !0
            }
            return h = e.src[m],
            s >= 55296 && s <= 56319 && m + 1 < b && (u = e.src.charCodeAt(m + 1)) >= 56320 && u <= 57343 && (h += e.src[m + 1],
            m++),
            d = "\\" + h,
            t || (g = e.push("text_special", "", 0),
            s < 256 && 0 !== c[s] ? g.content = h : g.content = d,
            g.markup = d,
            g.info = "escape"),
            e.pos = m + 1,
            !0
        }
    },
    3976: function(e) {
        "use strict";
        e.exports = function(e) {
            var t, s, l = 0, c = e.tokens, u = e.tokens.length;
            for (t = s = 0; t < u; t++)
                c[t].nesting < 0 && l--,
                c[t].level = l,
                c[t].nesting > 0 && l++,
                "text" === c[t].type && t + 1 < u && "text" === c[t + 1].type ? c[t + 1].content = c[t].content + c[t + 1].content : (t !== s && (c[s] = c[t]),
                s++);
            t !== s && (c.length = s)
        }
    },
    3095: function(e, t, s) {
        "use strict";
        var l = s(9372).n;
        e.exports = function(e, t) {
            var s, c, u, d, h, g, m, b = e.pos;
            return !!(e.md.options.html && (g = e.posMax,
            60 === e.src.charCodeAt(b) && !(b + 2 >= g)) && (33 === (d = e.src.charCodeAt(b + 1)) || 63 === d || 47 === d || (s = 32 | d) >= 97 && s <= 122) && (h = e.src.slice(b).match(l))) && (!t && ((m = e.push("html_inline", "", 0)).content = h[0],
            c = m.content,
            /^<a[>\s]/i.test(c) && e.linkLevel++,
            u = m.content,
            /^<\/a\s*>/i.test(u) && e.linkLevel--),
            e.pos += h[0].length,
            !0)
        }
    },
    2641: function(e, t, s) {
        "use strict";
        var l = s(5292).normalizeReference
          , c = s(5292).isSpace;
        e.exports = function(e, t) {
            var s, u, d, h, g, m, b, _, k, y, v, x, E, w = "", A = e.pos, C = e.posMax;
            if (33 !== e.src.charCodeAt(e.pos) || 91 !== e.src.charCodeAt(e.pos + 1) || (m = e.pos + 2,
            (g = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)) < 0))
                return !1;
            if ((b = g + 1) < C && 40 === e.src.charCodeAt(b)) {
                for (b++; b < C && (c(u = e.src.charCodeAt(b)) || 10 === u); b++)
                    ;
                if (b >= C)
                    return !1;
                for (E = b,
                (k = e.md.helpers.parseLinkDestination(e.src, b, e.posMax)).ok && (w = e.md.normalizeLink(k.str),
                e.md.validateLink(w) ? b = k.pos : w = ""),
                E = b; b < C && (c(u = e.src.charCodeAt(b)) || 10 === u); b++)
                    ;
                if (k = e.md.helpers.parseLinkTitle(e.src, b, e.posMax),
                b < C && E !== b && k.ok)
                    for (y = k.str,
                    b = k.pos; b < C && (c(u = e.src.charCodeAt(b)) || 10 === u); b++)
                        ;
                else
                    y = "";
                if (b >= C || 41 !== e.src.charCodeAt(b))
                    return e.pos = A,
                    !1;
                b++
            } else {
                if (void 0 === e.env.references)
                    return !1;
                if (b < C && 91 === e.src.charCodeAt(b) ? (E = b + 1,
                (b = e.md.helpers.parseLinkLabel(e, b)) >= 0 ? h = e.src.slice(E, b++) : b = g + 1) : b = g + 1,
                h || (h = e.src.slice(m, g)),
                !(_ = e.env.references[l(h)]))
                    return e.pos = A,
                    !1;
                w = _.href,
                y = _.title
            }
            return !t && (d = e.src.slice(m, g),
            e.md.inline.parse(d, e.md, e.env, x = []),
            (v = e.push("image", "img", 0)).attrs = s = [["src", w], ["alt", ""]],
            v.children = x,
            v.content = d,
            y && s.push(["title", y])),
            e.pos = b,
            e.posMax = C,
            !0
        }
    },
    6267: function(e, t, s) {
        "use strict";
        var l = s(5292).normalizeReference
          , c = s(5292).isSpace;
        e.exports = function(e, t) {
            var s, u, d, h, g, m, b, _, k = "", y = "", v = e.pos, x = e.posMax, E = e.pos, w = !0;
            if (91 !== e.src.charCodeAt(e.pos) || (g = e.pos + 1,
            (h = e.md.helpers.parseLinkLabel(e, e.pos, !0)) < 0))
                return !1;
            if ((m = h + 1) < x && 40 === e.src.charCodeAt(m)) {
                for (w = !1,
                m++; m < x && (c(u = e.src.charCodeAt(m)) || 10 === u); m++)
                    ;
                if (m >= x)
                    return !1;
                if (E = m,
                (b = e.md.helpers.parseLinkDestination(e.src, m, e.posMax)).ok) {
                    for (k = e.md.normalizeLink(b.str),
                    e.md.validateLink(k) ? m = b.pos : k = "",
                    E = m; m < x && (c(u = e.src.charCodeAt(m)) || 10 === u); m++)
                        ;
                    if (b = e.md.helpers.parseLinkTitle(e.src, m, e.posMax),
                    m < x && E !== m && b.ok)
                        for (y = b.str,
                        m = b.pos; m < x && (c(u = e.src.charCodeAt(m)) || 10 === u); m++)
                            ;
                }
                (m >= x || 41 !== e.src.charCodeAt(m)) && (w = !0),
                m++
            }
            if (w) {
                if (void 0 === e.env.references)
                    return !1;
                if (m < x && 91 === e.src.charCodeAt(m) ? (E = m + 1,
                (m = e.md.helpers.parseLinkLabel(e, m)) >= 0 ? d = e.src.slice(E, m++) : m = h + 1) : m = h + 1,
                d || (d = e.src.slice(g, h)),
                !(_ = e.env.references[l(d)]))
                    return e.pos = v,
                    !1;
                k = _.href,
                y = _.title
            }
            return t || (e.pos = g,
            e.posMax = h,
            e.push("link_open", "a", 1).attrs = s = [["href", k]],
            y && s.push(["title", y]),
            e.linkLevel++,
            e.md.inline.tokenize(e),
            e.linkLevel--,
            e.push("link_close", "a", -1)),
            e.pos = m,
            e.posMax = x,
            !0
        }
    },
    1817: function(e) {
        "use strict";
        var t = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
        e.exports = function(e, s) {
            var l, c, u, d, h, g, m;
            return !!e.md.options.linkify && !(e.linkLevel > 0) && !!(!((l = e.pos) + 3 > e.posMax) && 58 === e.src.charCodeAt(l) && 47 === e.src.charCodeAt(l + 1) && 47 === e.src.charCodeAt(l + 2) && (c = e.pending.match(t))) && (u = c[1],
            !!(d = e.md.linkify.matchAtStart(e.src.slice(l - u.length))) && !((h = d.url).length <= u.length) && (h = h.replace(/\*+$/, ""),
            g = e.md.normalizeLink(h),
            !!e.md.validateLink(g) && (s || (e.pending = e.pending.slice(0, -u.length),
            (m = e.push("link_open", "a", 1)).attrs = [["href", g]],
            m.markup = "linkify",
            m.info = "auto",
            (m = e.push("text", "", 0)).content = e.md.normalizeLinkText(h),
            (m = e.push("link_close", "a", -1)).markup = "linkify",
            m.info = "auto"),
            e.pos += h.length - u.length,
            !0)))
        }
    },
    4537: function(e, t, s) {
        "use strict";
        var l = s(5292).isSpace;
        e.exports = function(e, t) {
            var s, c, u, d = e.pos;
            if (10 !== e.src.charCodeAt(d))
                return !1;
            if (s = e.pending.length - 1,
            c = e.posMax,
            !t) {
                if (s >= 0 && 32 === e.pending.charCodeAt(s)) {
                    if (s >= 1 && 32 === e.pending.charCodeAt(s - 1)) {
                        for (u = s - 1; u >= 1 && 32 === e.pending.charCodeAt(u - 1); )
                            u--;
                        e.pending = e.pending.slice(0, u),
                        e.push("hardbreak", "br", 0)
                    } else
                        e.pending = e.pending.slice(0, -1),
                        e.push("softbreak", "br", 0)
                } else
                    e.push("softbreak", "br", 0)
            }
            for (d++; d < c && l(e.src.charCodeAt(d)); )
                d++;
            return e.pos = d,
            !0
        }
    },
    1245: function(e, t, s) {
        "use strict";
        var l = s(9147)
          , c = s(5292).isWhiteSpace
          , u = s(5292).isPunctChar
          , d = s(5292).isMdAsciiPunct;
        function StateInline(e, t, s, l) {
            this.src = e,
            this.env = s,
            this.md = t,
            this.tokens = l,
            this.tokens_meta = Array(l.length),
            this.pos = 0,
            this.posMax = this.src.length,
            this.level = 0,
            this.pending = "",
            this.pendingLevel = 0,
            this.cache = {},
            this.delimiters = [],
            this._prev_delimiters = [],
            this.backticks = {},
            this.backticksScanned = !1,
            this.linkLevel = 0
        }
        StateInline.prototype.pushPending = function() {
            var e = new l("text","",0);
            return e.content = this.pending,
            e.level = this.pendingLevel,
            this.tokens.push(e),
            this.pending = "",
            e
        }
        ,
        StateInline.prototype.push = function(e, t, s) {
            this.pending && this.pushPending();
            var c = new l(e,t,s)
              , u = null;
            return s < 0 && (this.level--,
            this.delimiters = this._prev_delimiters.pop()),
            c.level = this.level,
            s > 0 && (this.level++,
            this._prev_delimiters.push(this.delimiters),
            this.delimiters = [],
            u = {
                delimiters: this.delimiters
            }),
            this.pendingLevel = this.level,
            this.tokens.push(c),
            this.tokens_meta.push(u),
            c
        }
        ,
        StateInline.prototype.scanDelims = function(e, t) {
            var s, l, h, g, m, b, _, k, y, v = e, x = !0, E = !0, w = this.posMax, A = this.src.charCodeAt(e);
            for (s = e > 0 ? this.src.charCodeAt(e - 1) : 32; v < w && this.src.charCodeAt(v) === A; )
                v++;
            return h = v - e,
            l = v < w ? this.src.charCodeAt(v) : 32,
            _ = d(s) || u(String.fromCharCode(s)),
            y = d(l) || u(String.fromCharCode(l)),
            b = c(s),
            (k = c(l)) ? x = !1 : y && !(b || _) && (x = !1),
            b ? E = !1 : _ && !(k || y) && (E = !1),
            t ? (g = x,
            m = E) : (g = x && (!E || _),
            m = E && (!x || y)),
            {
                can_open: g,
                can_close: m,
                length: h
            }
        }
        ,
        StateInline.prototype.Token = l,
        e.exports = StateInline
    },
    338: function(e) {
        "use strict";
        function postProcess(e, t) {
            var s, l, c, u, d, h = [], g = t.length;
            for (s = 0; s < g; s++)
                126 === (c = t[s]).marker && -1 !== c.end && (u = t[c.end],
                (d = e.tokens[c.token]).type = "s_open",
                d.tag = "s",
                d.nesting = 1,
                d.markup = "~~",
                d.content = "",
                (d = e.tokens[u.token]).type = "s_close",
                d.tag = "s",
                d.nesting = -1,
                d.markup = "~~",
                d.content = "",
                "text" === e.tokens[u.token - 1].type && "~" === e.tokens[u.token - 1].content && h.push(u.token - 1));
            for (; h.length; ) {
                for (l = (s = h.pop()) + 1; l < e.tokens.length && "s_close" === e.tokens[l].type; )
                    l++;
                s !== --l && (d = e.tokens[l],
                e.tokens[l] = e.tokens[s],
                e.tokens[s] = d)
            }
        }
        e.exports.w = function(e, t) {
            var s, l, c, u, d = e.pos, h = e.src.charCodeAt(d);
            if (t || 126 !== h || (c = (l = e.scanDelims(e.pos, !0)).length,
            u = String.fromCharCode(h),
            c < 2))
                return !1;
            for (c % 2 && (e.push("text", "", 0).content = u,
            c--),
            s = 0; s < c; s += 2)
                e.push("text", "", 0).content = u + u,
                e.delimiters.push({
                    marker: h,
                    length: 0,
                    token: e.tokens.length - 1,
                    end: -1,
                    open: l.can_open,
                    close: l.can_close
                });
            return e.pos += l.length,
            !0
        }
        ,
        e.exports.g = function(e) {
            var t, s = e.tokens_meta, l = e.tokens_meta.length;
            for (postProcess(e, e.delimiters),
            t = 0; t < l; t++)
                s[t] && s[t].delimiters && postProcess(e, s[t].delimiters)
        }
    },
    1414: function(e) {
        "use strict";
        e.exports = function(e, t) {
            for (var s = e.pos; s < e.posMax && !function(e) {
                switch (e) {
                case 10:
                case 33:
                case 35:
                case 36:
                case 37:
                case 38:
                case 42:
                case 43:
                case 45:
                case 58:
                case 60:
                case 61:
                case 62:
                case 64:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 123:
                case 125:
                case 126:
                    return !0;
                default:
                    return !1
                }
            }(e.src.charCodeAt(s)); )
                s++;
            return s !== e.pos && (t || (e.pending += e.src.slice(e.pos, s)),
            e.pos = s,
            !0)
        }
    },
    9147: function(e) {
        "use strict";
        function Token(e, t, s) {
            this.type = e,
            this.tag = t,
            this.attrs = null,
            this.map = null,
            this.nesting = s,
            this.level = 0,
            this.children = null,
            this.content = "",
            this.markup = "",
            this.info = "",
            this.meta = null,
            this.block = !1,
            this.hidden = !1
        }
        Token.prototype.attrIndex = function(e) {
            var t, s, l;
            if (!this.attrs)
                return -1;
            for (s = 0,
            l = (t = this.attrs).length; s < l; s++)
                if (t[s][0] === e)
                    return s;
            return -1
        }
        ,
        Token.prototype.attrPush = function(e) {
            this.attrs ? this.attrs.push(e) : this.attrs = [e]
        }
        ,
        Token.prototype.attrSet = function(e, t) {
            var s = this.attrIndex(e)
              , l = [e, t];
            s < 0 ? this.attrPush(l) : this.attrs[s] = l
        }
        ,
        Token.prototype.attrGet = function(e) {
            var t = this.attrIndex(e)
              , s = null;
            return t >= 0 && (s = this.attrs[t][1]),
            s
        }
        ,
        Token.prototype.attrJoin = function(e, t) {
            var s = this.attrIndex(e);
            s < 0 ? this.attrPush([e, t]) : this.attrs[s][1] = this.attrs[s][1] + " " + t
        }
        ,
        e.exports = Token
    },
    3771: function(e) {
        "use strict";
        var t = {};
        function decode(e, s) {
            var l;
            return "string" != typeof s && (s = decode.defaultChars),
            l = function(e) {
                var s, l, c = t[e];
                if (c)
                    return c;
                for (s = 0,
                c = t[e] = []; s < 128; s++)
                    l = String.fromCharCode(s),
                    c.push(l);
                for (s = 0; s < e.length; s++)
                    c[l = e.charCodeAt(s)] = "%" + ("0" + l.toString(16).toUpperCase()).slice(-2);
                return c
            }(s),
            e.replace(/(%[a-f0-9]{2})+/gi, function(e) {
                var t, s, c, u, d, h, g, m = "";
                for (t = 0,
                s = e.length; t < s; t += 3) {
                    if ((c = parseInt(e.slice(t + 1, t + 3), 16)) < 128) {
                        m += l[c];
                        continue
                    }
                    if ((224 & c) == 192 && t + 3 < s && (192 & (u = parseInt(e.slice(t + 4, t + 6), 16))) == 128) {
                        (g = c << 6 & 1984 | 63 & u) < 128 ? m += "��" : m += String.fromCharCode(g),
                        t += 3;
                        continue
                    }
                    if ((240 & c) == 224 && t + 6 < s && (u = parseInt(e.slice(t + 4, t + 6), 16),
                    d = parseInt(e.slice(t + 7, t + 9), 16),
                    (192 & u) == 128 && (192 & d) == 128)) {
                        (g = c << 12 & 61440 | u << 6 & 4032 | 63 & d) < 2048 || g >= 55296 && g <= 57343 ? m += "���" : m += String.fromCharCode(g),
                        t += 6;
                        continue
                    }
                    if ((248 & c) == 240 && t + 9 < s && (u = parseInt(e.slice(t + 4, t + 6), 16),
                    d = parseInt(e.slice(t + 7, t + 9), 16),
                    h = parseInt(e.slice(t + 10, t + 12), 16),
                    (192 & u) == 128 && (192 & d) == 128 && (192 & h) == 128)) {
                        (g = c << 18 & 1835008 | u << 12 & 258048 | d << 6 & 4032 | 63 & h) < 65536 || g > 1114111 ? m += "����" : (g -= 65536,
                        m += String.fromCharCode(55296 + (g >> 10), 56320 + (1023 & g))),
                        t += 9;
                        continue
                    }
                    m += "�"
                }
                return m
            })
        }
        decode.defaultChars = ";/?:@&=+$,#",
        decode.componentChars = "",
        e.exports = decode
    },
    1737: function(e) {
        "use strict";
        var t = {};
        function encode(e, s, l) {
            var c, u, d, h, g, m = "";
            for ("string" != typeof s && (l = s,
            s = encode.defaultChars),
            void 0 === l && (l = !0),
            g = function(e) {
                var s, l, c = t[e];
                if (c)
                    return c;
                for (s = 0,
                c = t[e] = []; s < 128; s++)
                    l = String.fromCharCode(s),
                    /^[0-9a-z]$/i.test(l) ? c.push(l) : c.push("%" + ("0" + s.toString(16).toUpperCase()).slice(-2));
                for (s = 0; s < e.length; s++)
                    c[e.charCodeAt(s)] = e[s];
                return c
            }(s),
            c = 0,
            u = e.length; c < u; c++) {
                if (d = e.charCodeAt(c),
                l && 37 === d && c + 2 < u && /^[0-9a-f]{2}$/i.test(e.slice(c + 1, c + 3))) {
                    m += e.slice(c, c + 3),
                    c += 2;
                    continue
                }
                if (d < 128) {
                    m += g[d];
                    continue
                }
                if (d >= 55296 && d <= 57343) {
                    if (d >= 55296 && d <= 56319 && c + 1 < u && (h = e.charCodeAt(c + 1)) >= 56320 && h <= 57343) {
                        m += encodeURIComponent(e[c] + e[c + 1]),
                        c++;
                        continue
                    }
                    m += "%EF%BF%BD";
                    continue
                }
                m += encodeURIComponent(e[c])
            }
            return m
        }
        encode.defaultChars = ";/?:@&=+$,-_.!~*'()#",
        encode.componentChars = "-_.!~*'()",
        e.exports = encode
    },
    5024: function(e) {
        "use strict";
        e.exports = function(e) {
            var t = "";
            return t += (e.protocol || "") + (e.slashes ? "//" : "") + (e.auth ? e.auth + "@" : ""),
            e.hostname && -1 !== e.hostname.indexOf(":") ? t += "[" + e.hostname + "]" : t += e.hostname || "",
            t += (e.port ? ":" + e.port : "") + (e.pathname || "") + (e.search || "") + (e.hash || "")
        }
    },
    4976: function(e, t, s) {
        "use strict";
        e.exports.encode = s(1737),
        e.exports.decode = s(3771),
        e.exports.format = s(5024),
        e.exports.parse = s(2084)
    },
    2084: function(e) {
        "use strict";
        function Url() {
            this.protocol = null,
            this.slashes = null,
            this.auth = null,
            this.port = null,
            this.hostname = null,
            this.hash = null,
            this.search = null,
            this.pathname = null
        }
        var t = /^([a-z0-9.+-]+:)/i
          , s = /:[0-9]*$/
          , l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
          , c = ["%", "/", "?", ";", "#"].concat(["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])))
          , u = ["/", "?", "#"]
          , d = /^[+a-z0-9A-Z_-]{0,63}$/
          , h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
          , g = {
            javascript: !0,
            "javascript:": !0
        }
          , m = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };
        Url.prototype.parse = function(e, s) {
            var b, _, k, y, v, x = e;
            if (x = x.trim(),
            !s && 1 === e.split("#").length) {
                var E = l.exec(x);
                if (E)
                    return this.pathname = E[1],
                    E[2] && (this.search = E[2]),
                    this
            }
            var w = t.exec(x);
            if (w && (k = (w = w[0]).toLowerCase(),
            this.protocol = w,
            x = x.substr(w.length)),
            (s || w || x.match(/^\/\/[^@\/]+@[^@\/]+/)) && (v = "//" === x.substr(0, 2)) && !(w && g[w]) && (x = x.substr(2),
            this.slashes = !0),
            !g[w] && (v || w && !m[w])) {
                var A, C, S = -1;
                for (b = 0; b < u.length; b++)
                    -1 !== (y = x.indexOf(u[b])) && (-1 === S || y < S) && (S = y);
                for (-1 !== (C = -1 === S ? x.lastIndexOf("@") : x.lastIndexOf("@", S)) && (A = x.slice(0, C),
                x = x.slice(C + 1),
                this.auth = A),
                S = -1,
                b = 0; b < c.length; b++)
                    -1 !== (y = x.indexOf(c[b])) && (-1 === S || y < S) && (S = y);
                -1 === S && (S = x.length),
                ":" === x[S - 1] && S--;
                var D = x.slice(0, S);
                x = x.slice(S),
                this.parseHost(D),
                this.hostname = this.hostname || "";
                var N = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!N) {
                    var M = this.hostname.split(/\./);
                    for (b = 0,
                    _ = M.length; b < _; b++) {
                        var I = M[b];
                        if (I && !I.match(d)) {
                            for (var T = "", O = 0, L = I.length; O < L; O++)
                                I.charCodeAt(O) > 127 ? T += "x" : T += I[O];
                            if (!T.match(d)) {
                                var R = M.slice(0, b)
                                  , F = M.slice(b + 1)
                                  , z = I.match(h);
                                z && (R.push(z[1]),
                                F.unshift(z[2])),
                                F.length && (x = F.join(".") + x),
                                this.hostname = R.join(".");
                                break
                            }
                        }
                    }
                }
                this.hostname.length > 255 && (this.hostname = ""),
                N && (this.hostname = this.hostname.substr(1, this.hostname.length - 2))
            }
            var B = x.indexOf("#");
            -1 !== B && (this.hash = x.substr(B),
            x = x.slice(0, B));
            var q = x.indexOf("?");
            return -1 !== q && (this.search = x.substr(q),
            x = x.slice(0, q)),
            x && (this.pathname = x),
            m[k] && this.hostname && !this.pathname && (this.pathname = ""),
            this
        }
        ,
        Url.prototype.parseHost = function(e) {
            var t = s.exec(e);
            t && (":" !== (t = t[0]) && (this.port = t.substr(1)),
            e = e.substr(0, e.length - t.length)),
            e && (this.hostname = e)
        }
        ,
        e.exports = function(e, t) {
            if (e && e instanceof Url)
                return e;
            var s = new Url;
            return s.parse(e, t),
            s
        }
    },
    350: function() {},
    8014: function() {},
    8058: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            decode: function() {
                return decode
            },
            encode: function() {
                return encode
            },
            toASCII: function() {
                return toASCII
            },
            toUnicode: function() {
                return toUnicode
            },
            ucs2decode: function() {
                return ucs2decode
            },
            ucs2encode: function() {
                return ucs2encode
            }
        });
        let l = /^xn--/
          , c = /[^\0-\x7F]/
          , u = /[\x2E\u3002\uFF0E\uFF61]/g
          , d = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        }
          , h = Math.floor
          , g = String.fromCharCode;
        function error(e) {
            throw RangeError(d[e])
        }
        function mapDomain(e, t) {
            let s = e.split("@")
              , l = "";
            s.length > 1 && (l = s[0] + "@",
            e = s[1]),
            e = e.replace(u, ".");
            let c = e.split(".")
              , d = (function(e, t) {
                let s = []
                  , l = e.length;
                for (; l--; )
                    s[l] = t(e[l]);
                return s
            }
            )(c, t).join(".");
            return l + d
        }
        function ucs2decode(e) {
            let t = []
              , s = 0
              , l = e.length;
            for (; s < l; ) {
                let c = e.charCodeAt(s++);
                if (c >= 55296 && c <= 56319 && s < l) {
                    let l = e.charCodeAt(s++);
                    (64512 & l) == 56320 ? t.push(((1023 & c) << 10) + (1023 & l) + 65536) : (t.push(c),
                    s--)
                } else
                    t.push(c)
            }
            return t
        }
        let ucs2encode = e => String.fromCodePoint(...e)
          , digitToBasic = function(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
        }
          , adapt = function(e, t, s) {
            let l = 0;
            for (e = s ? h(e / 700) : e >> 1,
            e += h(e / t); e > 455; l += 36)
                e = h(e / 35);
            return h(l + 36 * e / (e + 38))
        }
          , decode = function(e) {
            let t = []
              , s = e.length
              , l = 0
              , c = 128
              , u = 72
              , d = e.lastIndexOf("-");
            d < 0 && (d = 0);
            for (let s = 0; s < d; ++s)
                e.charCodeAt(s) >= 128 && error("not-basic"),
                t.push(e.charCodeAt(s));
            for (let m = d > 0 ? d + 1 : 0; m < s; ) {
                let d = l;
                for (let t = 1, c = 36; ; c += 36) {
                    var g;
                    m >= s && error("invalid-input");
                    let d = (g = e.charCodeAt(m++)) >= 48 && g < 58 ? 26 + (g - 48) : g >= 65 && g < 91 ? g - 65 : g >= 97 && g < 123 ? g - 97 : 36;
                    d >= 36 && error("invalid-input"),
                    d > h((2147483647 - l) / t) && error("overflow"),
                    l += d * t;
                    let b = c <= u ? 1 : c >= u + 26 ? 26 : c - u;
                    if (d < b)
                        break;
                    let _ = 36 - b;
                    t > h(2147483647 / _) && error("overflow"),
                    t *= _
                }
                let b = t.length + 1;
                u = adapt(l - d, b, 0 == d),
                h(l / b) > 2147483647 - c && error("overflow"),
                c += h(l / b),
                l %= b,
                t.splice(l++, 0, c)
            }
            return String.fromCodePoint(...t)
        }
          , encode = function(e) {
            let t = [];
            e = ucs2decode(e);
            let s = e.length
              , l = 128
              , c = 0
              , u = 72;
            for (let s of e)
                s < 128 && t.push(g(s));
            let d = t.length
              , m = d;
            for (d && t.push("-"); m < s; ) {
                let s = 2147483647;
                for (let t of e)
                    t >= l && t < s && (s = t);
                let b = m + 1;
                for (let _ of (s - l > h((2147483647 - c) / b) && error("overflow"),
                c += (s - l) * b,
                l = s,
                e))
                    if (_ < l && ++c > 2147483647 && error("overflow"),
                    _ === l) {
                        let e = c;
                        for (let s = 36; ; s += 36) {
                            let l = s <= u ? 1 : s >= u + 26 ? 26 : s - u;
                            if (e < l)
                                break;
                            let c = e - l
                              , d = 36 - l;
                            t.push(g(digitToBasic(l + c % d, 0))),
                            e = h(c / d)
                        }
                        t.push(g(digitToBasic(e, 0))),
                        u = adapt(c, b, m === d),
                        c = 0,
                        ++m
                    }
                ++c,
                ++l
            }
            return t.join("")
        }
          , toUnicode = function(e) {
            return mapDomain(e, function(e) {
                return l.test(e) ? decode(e.slice(4).toLowerCase()) : e
            })
        }
          , toASCII = function(e) {
            return mapDomain(e, function(e) {
                return c.test(e) ? "xn--" + encode(e) : e
            })
        };
        t.default = {
            version: "2.3.1",
            ucs2: {
                decode: ucs2decode,
                encode: ucs2encode
            },
            decode: decode,
            encode: encode,
            toASCII: toASCII,
            toUnicode: toUnicode
        }
    },
    6889: function(e) {
        e.exports = /[\0-\x1F\x7F-\x9F]/
    },
    3811: function(e) {
        e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
    },
    7062: function(e) {
        e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
    },
    8442: function(e) {
        e.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
    },
    8579: function(e, t, s) {
        "use strict";
        t.Any = s(3530),
        t.Cc = s(6889),
        t.Cf = s(3811),
        t.P = s(7062),
        t.Z = s(8442)
    },
    3530: function(e) {
        e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
    },
    2947: function(e) {
        let Response = class Response {
            constructor(e) {
                void 0 === e.data && (e.data = {}),
                this.data = e.data,
                this.isMatchIgnored = !1
            }
            ignoreMatch() {
                this.isMatchIgnored = !0
            }
        }
        ;
        function escapeHTML(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
        }
        function inherit$1(e, ...t) {
            let s = Object.create(null);
            for (let t in e)
                s[t] = e[t];
            return t.forEach(function(e) {
                for (let t in e)
                    s[t] = e[t]
            }),
            s
        }
        let emitsWrappingTags = e => !!e.scope
          , scopeToCSSClass = (e, {prefix: t}) => {
            if (e.startsWith("language:"))
                return e.replace("language:", "language-");
            if (e.includes(".")) {
                let s = e.split(".");
                return [`${t}${s.shift()}`, ...s.map( (e, t) => `${e}${"_".repeat(t + 1)}`)].join(" ")
            }
            return `${t}${e}`
        }
        ;
        let HTMLRenderer = class HTMLRenderer {
            constructor(e, t) {
                this.buffer = "",
                this.classPrefix = t.classPrefix,
                e.walk(this)
            }
            addText(e) {
                this.buffer += escapeHTML(e)
            }
            openNode(e) {
                if (!emitsWrappingTags(e))
                    return;
                let t = scopeToCSSClass(e.scope, {
                    prefix: this.classPrefix
                });
                this.span(t)
            }
            closeNode(e) {
                emitsWrappingTags(e) && (this.buffer += "</span>")
            }
            value() {
                return this.buffer
            }
            span(e) {
                this.buffer += `<span class="${e}">`
            }
        }
        ;
        let newNode = (e={}) => {
            let t = {
                children: []
            };
            return Object.assign(t, e),
            t
        }
        ;
        let TokenTree = class TokenTree {
            constructor() {
                this.rootNode = newNode(),
                this.stack = [this.rootNode]
            }
            get top() {
                return this.stack[this.stack.length - 1]
            }
            get root() {
                return this.rootNode
            }
            add(e) {
                this.top.children.push(e)
            }
            openNode(e) {
                let t = newNode({
                    scope: e
                });
                this.add(t),
                this.stack.push(t)
            }
            closeNode() {
                if (this.stack.length > 1)
                    return this.stack.pop()
            }
            closeAllNodes() {
                for (; this.closeNode(); )
                    ;
            }
            toJSON() {
                return JSON.stringify(this.rootNode, null, 4)
            }
            walk(e) {
                return this.constructor._walk(e, this.rootNode)
            }
            static _walk(e, t) {
                return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t),
                t.children.forEach(t => this._walk(e, t)),
                e.closeNode(t)),
                e
            }
            static _collapse(e) {
                "string" != typeof e && e.children && (e.children.every(e => "string" == typeof e) ? e.children = [e.children.join("")] : e.children.forEach(e => {
                    TokenTree._collapse(e)
                }
                ))
            }
        }
        ;
        let TokenTreeEmitter = class TokenTreeEmitter extends TokenTree {
            constructor(e) {
                super(),
                this.options = e
            }
            addText(e) {
                "" !== e && this.add(e)
            }
            startScope(e) {
                this.openNode(e)
            }
            endScope() {
                this.closeNode()
            }
            __addSublanguage(e, t) {
                let s = e.root;
                t && (s.scope = `language:${t}`),
                this.add(s)
            }
            toHTML() {
                let e = new HTMLRenderer(this,this.options);
                return e.value()
            }
            finalize() {
                return this.closeAllNodes(),
                !0
            }
        }
        ;
        function source(e) {
            return e ? "string" == typeof e ? e : e.source : null
        }
        function lookahead(e) {
            return concat("(?=", e, ")")
        }
        function anyNumberOfTimes(e) {
            return concat("(?:", e, ")*")
        }
        function optional(e) {
            return concat("(?:", e, ")?")
        }
        function concat(...e) {
            let t = e.map(e => source(e)).join("");
            return t
        }
        function either(...e) {
            let t = function(e) {
                let t = e[e.length - 1];
                return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1),
                t) : {}
            }(e)
              , s = "(" + (t.capture ? "" : "?:") + e.map(e => source(e)).join("|") + ")";
            return s
        }
        function countMatchGroups(e) {
            return RegExp(e.toString() + "|").exec("").length - 1
        }
        let t = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
        function _rewriteBackreferences(e, {joinWith: s}) {
            let l = 0;
            return e.map(e => {
                l += 1;
                let s = l
                  , c = source(e)
                  , u = "";
                for (; c.length > 0; ) {
                    let e = t.exec(c);
                    if (!e) {
                        u += c;
                        break
                    }
                    u += c.substring(0, e.index),
                    c = c.substring(e.index + e[0].length),
                    "\\" === e[0][0] && e[1] ? u += "\\" + String(Number(e[1]) + s) : (u += e[0],
                    "(" === e[0] && l++)
                }
                return u
            }
            ).map(e => `(${e})`).join(s)
        }
        let s = "[a-zA-Z]\\w*"
          , l = "[a-zA-Z_]\\w*"
          , c = "\\b\\d+(\\.\\d+)?"
          , u = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"
          , d = "\\b(0b[01]+)"
          , h = {
            begin: "\\\\[\\s\\S]",
            relevance: 0
        }
          , COMMENT = function(e, t, s={}) {
            let l = inherit$1({
                scope: "comment",
                begin: e,
                end: t,
                contains: []
            }, s);
            l.contains.push({
                scope: "doctag",
                begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                excludeBegin: !0,
                relevance: 0
            });
            let c = either("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
            return l.contains.push({
                begin: concat(/[ ]+/, "(", c, /[.]?[:]?([.][ ]|[ ])/, "){3}")
            }),
            l
        }
          , g = COMMENT("//", "$")
          , m = COMMENT("/\\*", "\\*/")
          , b = COMMENT("#", "$");
        var _ = Object.freeze({
            __proto__: null,
            APOS_STRING_MODE: {
                scope: "string",
                begin: "'",
                end: "'",
                illegal: "\\n",
                contains: [h]
            },
            BACKSLASH_ESCAPE: h,
            BINARY_NUMBER_MODE: {
                scope: "number",
                begin: d,
                relevance: 0
            },
            BINARY_NUMBER_RE: d,
            COMMENT: COMMENT,
            C_BLOCK_COMMENT_MODE: m,
            C_LINE_COMMENT_MODE: g,
            C_NUMBER_MODE: {
                scope: "number",
                begin: u,
                relevance: 0
            },
            C_NUMBER_RE: u,
            END_SAME_AS_BEGIN: function(e) {
                return Object.assign(e, {
                    "on:begin": (e, t) => {
                        t.data._beginMatch = e[1]
                    }
                    ,
                    "on:end": (e, t) => {
                        t.data._beginMatch !== e[1] && t.ignoreMatch()
                    }
                })
            },
            HASH_COMMENT_MODE: b,
            IDENT_RE: s,
            MATCH_NOTHING_RE: /\b\B/,
            METHOD_GUARD: {
                begin: "\\.\\s*" + l,
                relevance: 0
            },
            NUMBER_MODE: {
                scope: "number",
                begin: c,
                relevance: 0
            },
            NUMBER_RE: c,
            PHRASAL_WORDS_MODE: {
                begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            },
            QUOTE_STRING_MODE: {
                scope: "string",
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [h]
            },
            REGEXP_MODE: {
                scope: "regexp",
                begin: /\/(?=[^/\n]*\/)/,
                end: /\/[gimuy]*/,
                contains: [h, {
                    begin: /\[/,
                    end: /\]/,
                    relevance: 0,
                    contains: [h]
                }]
            },
            RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
            SHEBANG: (e={}) => {
                let t = /^#![ ]*\//;
                return e.binary && (e.begin = concat(t, /.*\b/, e.binary, /\b.*/)),
                inherit$1({
                    scope: "meta",
                    begin: t,
                    end: /$/,
                    relevance: 0,
                    "on:begin": (e, t) => {
                        0 !== e.index && t.ignoreMatch()
                    }
                }, e)
            }
            ,
            TITLE_MODE: {
                scope: "title",
                begin: s,
                relevance: 0
            },
            UNDERSCORE_IDENT_RE: l,
            UNDERSCORE_TITLE_MODE: {
                scope: "title",
                begin: l,
                relevance: 0
            }
        });
        function skipIfHasPrecedingDot(e, t) {
            let s = e.input[e.index - 1];
            "." === s && t.ignoreMatch()
        }
        function scopeClassName(e, t) {
            void 0 !== e.className && (e.scope = e.className,
            delete e.className)
        }
        function beginKeywords(e, t) {
            t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)",
            e.__beforeBegin = skipIfHasPrecedingDot,
            e.keywords = e.keywords || e.beginKeywords,
            delete e.beginKeywords,
            void 0 === e.relevance && (e.relevance = 0))
        }
        function compileIllegal(e, t) {
            Array.isArray(e.illegal) && (e.illegal = either(...e.illegal))
        }
        function compileMatch(e, t) {
            if (e.match) {
                if (e.begin || e.end)
                    throw Error("begin & end are not supported with match");
                e.begin = e.match,
                delete e.match
            }
        }
        function compileRelevance(e, t) {
            void 0 === e.relevance && (e.relevance = 1)
        }
        let beforeMatchExt = (e, t) => {
            if (!e.beforeMatch)
                return;
            if (e.starts)
                throw Error("beforeMatch cannot be used with starts");
            let s = Object.assign({}, e);
            Object.keys(e).forEach(t => {
                delete e[t]
            }
            ),
            e.keywords = s.keywords,
            e.begin = concat(s.beforeMatch, lookahead(s.begin)),
            e.starts = {
                relevance: 0,
                contains: [Object.assign(s, {
                    endsParent: !0
                })]
            },
            e.relevance = 0,
            delete s.beforeMatch
        }
          , k = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"]
          , y = {}
          , error = e => {
            console.error(e)
        }
          , warn = (e, ...t) => {
            console.log(`WARN: ${e}`, ...t)
        }
          , deprecated = (e, t) => {
            y[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`),
            y[`${e}/${t}`] = !0)
        }
          , v = Error();
        function remapScopeNames(e, t, {key: s}) {
            let l = 0
              , c = e[s]
              , u = {}
              , d = {};
            for (let e = 1; e <= t.length; e++)
                d[e + l] = c[e],
                u[e + l] = !0,
                l += countMatchGroups(t[e - 1]);
            e[s] = d,
            e[s]._emit = u,
            e[s]._multi = !0
        }
        function MultiClass(e) {
            e.scope && "object" == typeof e.scope && null !== e.scope && (e.beginScope = e.scope,
            delete e.scope),
            "string" == typeof e.beginScope && (e.beginScope = {
                _wrap: e.beginScope
            }),
            "string" == typeof e.endScope && (e.endScope = {
                _wrap: e.endScope
            }),
            function(e) {
                if (Array.isArray(e.begin)) {
                    if (e.skip || e.excludeBegin || e.returnBegin)
                        throw error("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
                        v;
                    if ("object" != typeof e.beginScope || null === e.beginScope)
                        throw error("beginScope must be object"),
                        v;
                    remapScopeNames(e, e.begin, {
                        key: "beginScope"
                    }),
                    e.begin = _rewriteBackreferences(e.begin, {
                        joinWith: ""
                    })
                }
            }(e),
            function(e) {
                if (Array.isArray(e.end)) {
                    if (e.skip || e.excludeEnd || e.returnEnd)
                        throw error("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
                        v;
                    if ("object" != typeof e.endScope || null === e.endScope)
                        throw error("endScope must be object"),
                        v;
                    remapScopeNames(e, e.end, {
                        key: "endScope"
                    }),
                    e.end = _rewriteBackreferences(e.end, {
                        joinWith: ""
                    })
                }
            }(e)
        }
        let HTMLInjectionError = class HTMLInjectionError extends Error {
            constructor(e, t) {
                super(e),
                this.name = "HTMLInjectionError",
                this.html = t
            }
        }
        ;
        let x = Symbol("nomatch")
          , HLJS = function(e) {
            let t = Object.create(null)
              , s = Object.create(null)
              , l = []
              , c = !0
              , u = "Could not find the language '{}', did you forget to load/include a language module?"
              , d = {
                disableAutodetect: !0,
                name: "Plain text",
                contains: []
            }
              , h = {
                ignoreUnescapedHTML: !1,
                throwUnescapedHTML: !1,
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: "hljs-",
                cssSelector: "pre code",
                languages: null,
                __emitter: TokenTreeEmitter
            };
            function shouldNotHighlight(e) {
                return h.noHighlightRe.test(e)
            }
            function highlight(e, t, s) {
                let l = ""
                  , c = "";
                "object" == typeof t ? (l = e,
                s = t.ignoreIllegals,
                c = t.language) : (deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
                deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
                c = e,
                l = t),
                void 0 === s && (s = !0);
                let u = {
                    code: l,
                    language: c
                };
                fire("before:highlight", u);
                let d = u.result ? u.result : _highlight(u.language, u.code, s);
                return d.code = u.code,
                fire("after:highlight", d),
                d
            }
            function _highlight(e, s, l, d) {
                let g = Object.create(null);
                function processKeywords() {
                    if (!v.keywords) {
                        w.addText(A);
                        return
                    }
                    let e = 0;
                    v.keywordPatternRe.lastIndex = 0;
                    let t = v.keywordPatternRe.exec(A)
                      , s = "";
                    for (; t; ) {
                        s += A.substring(e, t.index);
                        let l = b.case_insensitive ? t[0].toLowerCase() : t[0]
                          , c = v.keywords[l];
                        if (c) {
                            let[e,u] = c;
                            if (w.addText(s),
                            s = "",
                            g[l] = (g[l] || 0) + 1,
                            g[l] <= 7 && (C += u),
                            e.startsWith("_"))
                                s += t[0];
                            else {
                                let s = b.classNameAliases[e] || e;
                                emitKeyword(t[0], s)
                            }
                        } else
                            s += t[0];
                        e = v.keywordPatternRe.lastIndex,
                        t = v.keywordPatternRe.exec(A)
                    }
                    s += A.substring(e),
                    w.addText(s)
                }
                function processBuffer() {
                    null != v.subLanguage ? function() {
                        if ("" === A)
                            return;
                        let e = null;
                        if ("string" == typeof v.subLanguage) {
                            if (!t[v.subLanguage]) {
                                w.addText(A);
                                return
                            }
                            e = _highlight(v.subLanguage, A, !0, E[v.subLanguage]),
                            E[v.subLanguage] = e._top
                        } else
                            e = highlightAuto(A, v.subLanguage.length ? v.subLanguage : null);
                        v.relevance > 0 && (C += e.relevance),
                        w.__addSublanguage(e._emitter, e.language)
                    }() : processKeywords(),
                    A = ""
                }
                function emitKeyword(e, t) {
                    "" !== e && (w.startScope(t),
                    w.addText(e),
                    w.endScope())
                }
                function emitMultiClass(e, t) {
                    let s = 1
                      , l = t.length - 1;
                    for (; s <= l; ) {
                        if (!e._emit[s]) {
                            s++;
                            continue
                        }
                        let l = b.classNameAliases[e[s]] || e[s]
                          , c = t[s];
                        l ? emitKeyword(c, l) : (A = c,
                        processKeywords(),
                        A = ""),
                        s++
                    }
                }
                function startNewMode(e, t) {
                    return e.scope && "string" == typeof e.scope && w.openNode(b.classNameAliases[e.scope] || e.scope),
                    e.beginScope && (e.beginScope._wrap ? (emitKeyword(A, b.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap),
                    A = "") : e.beginScope._multi && (emitMultiClass(e.beginScope, t),
                    A = "")),
                    v = Object.create(e, {
                        parent: {
                            value: v
                        }
                    })
                }
                let m = {};
                function processLexeme(t, u) {
                    let d = u && u[0];
                    if (A += t,
                    null == d)
                        return processBuffer(),
                        0;
                    if ("begin" === m.type && "end" === u.type && m.index === u.index && "" === d) {
                        if (A += s.slice(u.index, u.index + 1),
                        !c) {
                            let t = Error(`0 width match regex (${e})`);
                            throw t.languageName = e,
                            t.badRule = m.rule,
                            t
                        }
                        return 1
                    }
                    if (m = u,
                    "begin" === u.type)
                        return function(e) {
                            let t = e[0]
                              , s = e.rule
                              , l = new Response(s)
                              , c = [s.__beforeBegin, s["on:begin"]];
                            for (let s of c)
                                if (s && (s(e, l),
                                l.isMatchIgnored))
                                    return 0 === v.matcher.regexIndex ? (A += t[0],
                                    1) : (N = !0,
                                    0);
                            return s.skip ? A += t : (s.excludeBegin && (A += t),
                            processBuffer(),
                            s.returnBegin || s.excludeBegin || (A = t)),
                            startNewMode(s, e),
                            s.returnBegin ? 0 : t.length
                        }(u);
                    if ("illegal" !== u.type || l) {
                        if ("end" === u.type) {
                            let e = function(e) {
                                let t = e[0]
                                  , l = s.substring(e.index)
                                  , c = function endOfMode(e, t, s) {
                                    let l = function(e, t) {
                                        let s = e && e.exec(t);
                                        return s && 0 === s.index
                                    }(e.endRe, s);
                                    if (l) {
                                        if (e["on:end"]) {
                                            let s = new Response(e);
                                            e["on:end"](t, s),
                                            s.isMatchIgnored && (l = !1)
                                        }
                                        if (l) {
                                            for (; e.endsParent && e.parent; )
                                                e = e.parent;
                                            return e
                                        }
                                    }
                                    if (e.endsWithParent)
                                        return endOfMode(e.parent, t, s)
                                }(v, e, l);
                                if (!c)
                                    return x;
                                let u = v;
                                v.endScope && v.endScope._wrap ? (processBuffer(),
                                emitKeyword(t, v.endScope._wrap)) : v.endScope && v.endScope._multi ? (processBuffer(),
                                emitMultiClass(v.endScope, e)) : u.skip ? A += t : (u.returnEnd || u.excludeEnd || (A += t),
                                processBuffer(),
                                u.excludeEnd && (A = t));
                                do
                                    v.scope && w.closeNode(),
                                    v.skip || v.subLanguage || (C += v.relevance),
                                    v = v.parent;
                                while (v !== c.parent);
                                return c.starts && startNewMode(c.starts, e),
                                u.returnEnd ? 0 : t.length
                            }(u);
                            if (e !== x)
                                return e
                        }
                    } else {
                        let e = Error('Illegal lexeme "' + d + '" for mode "' + (v.scope || "<unnamed>") + '"');
                        throw e.mode = v,
                        e
                    }
                    if ("illegal" === u.type && "" === d)
                        return A += "\n",
                        1;
                    if (D > 1e5 && D > 3 * u.index) {
                        let e = Error("potential infinite loop, way more iterations than matches");
                        throw e
                    }
                    return A += d,
                    d.length
                }
                let b = getLanguage(e);
                if (!b)
                    throw error(u.replace("{}", e)),
                    Error('Unknown language: "' + e + '"');
                let _ = function(e) {
                    function langRe(t, s) {
                        return RegExp(source(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (s ? "g" : ""))
                    }
                    let MultiRegex = class MultiRegex {
                        constructor() {
                            this.matchIndexes = {},
                            this.regexes = [],
                            this.matchAt = 1,
                            this.position = 0
                        }
                        addRule(e, t) {
                            t.position = this.position++,
                            this.matchIndexes[this.matchAt] = t,
                            this.regexes.push([t, e]),
                            this.matchAt += countMatchGroups(e) + 1
                        }
                        compile() {
                            0 === this.regexes.length && (this.exec = () => null);
                            let e = this.regexes.map(e => e[1]);
                            this.matcherRe = langRe(_rewriteBackreferences(e, {
                                joinWith: "|"
                            }), !0),
                            this.lastIndex = 0
                        }
                        exec(e) {
                            this.matcherRe.lastIndex = this.lastIndex;
                            let t = this.matcherRe.exec(e);
                            if (!t)
                                return null;
                            let s = t.findIndex( (e, t) => t > 0 && void 0 !== e)
                              , l = this.matchIndexes[s];
                            return t.splice(0, s),
                            Object.assign(t, l)
                        }
                    }
                    ;
                    let ResumableMultiRegex = class ResumableMultiRegex {
                        constructor() {
                            this.rules = [],
                            this.multiRegexes = [],
                            this.count = 0,
                            this.lastIndex = 0,
                            this.regexIndex = 0
                        }
                        getMatcher(e) {
                            if (this.multiRegexes[e])
                                return this.multiRegexes[e];
                            let t = new MultiRegex;
                            return this.rules.slice(e).forEach( ([e,s]) => t.addRule(e, s)),
                            t.compile(),
                            this.multiRegexes[e] = t,
                            t
                        }
                        resumingScanAtSamePosition() {
                            return 0 !== this.regexIndex
                        }
                        considerAll() {
                            this.regexIndex = 0
                        }
                        addRule(e, t) {
                            this.rules.push([e, t]),
                            "begin" === t.type && this.count++
                        }
                        exec(e) {
                            let t = this.getMatcher(this.regexIndex);
                            t.lastIndex = this.lastIndex;
                            let s = t.exec(e);
                            if (this.resumingScanAtSamePosition()) {
                                if (s && s.index === this.lastIndex)
                                    ;
                                else {
                                    let t = this.getMatcher(0);
                                    t.lastIndex = this.lastIndex + 1,
                                    s = t.exec(e)
                                }
                            }
                            return s && (this.regexIndex += s.position + 1,
                            this.regexIndex === this.count && this.considerAll()),
                            s
                        }
                    }
                    ;
                    if (e.compilerExtensions || (e.compilerExtensions = []),
                    e.contains && e.contains.includes("self"))
                        throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
                    return e.classNameAliases = inherit$1(e.classNameAliases || {}),
                    function compileMode(t, s) {
                        if (t.isCompiled)
                            return t;
                        [scopeClassName, compileMatch, MultiClass, beforeMatchExt].forEach(e => e(t, s)),
                        e.compilerExtensions.forEach(e => e(t, s)),
                        t.__beforeBegin = null,
                        [beginKeywords, compileIllegal, compileRelevance].forEach(e => e(t, s)),
                        t.isCompiled = !0;
                        let l = null;
                        return "object" == typeof t.keywords && t.keywords.$pattern && (t.keywords = Object.assign({}, t.keywords),
                        l = t.keywords.$pattern,
                        delete t.keywords.$pattern),
                        l = l || /\w+/,
                        t.keywords && (t.keywords = function compileKeywords(e, t, s="keyword") {
                            let l = Object.create(null);
                            return "string" == typeof e ? compileList(s, e.split(" ")) : Array.isArray(e) ? compileList(s, e) : Object.keys(e).forEach(function(s) {
                                Object.assign(l, compileKeywords(e[s], t, s))
                            }),
                            l;
                            function compileList(e, s) {
                                t && (s = s.map(e => e.toLowerCase())),
                                s.forEach(function(t) {
                                    var s, c;
                                    let u = t.split("|");
                                    l[u[0]] = [e, (s = u[0],
                                    (c = u[1]) ? Number(c) : k.includes(s.toLowerCase()) ? 0 : 1)]
                                })
                            }
                        }(t.keywords, e.case_insensitive)),
                        t.keywordPatternRe = langRe(l, !0),
                        s && (t.begin || (t.begin = /\B|\b/),
                        t.beginRe = langRe(t.begin),
                        t.end || t.endsWithParent || (t.end = /\B|\b/),
                        t.end && (t.endRe = langRe(t.end)),
                        t.terminatorEnd = source(t.end) || "",
                        t.endsWithParent && s.terminatorEnd && (t.terminatorEnd += (t.end ? "|" : "") + s.terminatorEnd)),
                        t.illegal && (t.illegalRe = langRe(t.illegal)),
                        t.contains || (t.contains = []),
                        t.contains = [].concat(...t.contains.map(function(e) {
                            var s;
                            return ((s = "self" === e ? t : e).variants && !s.cachedVariants && (s.cachedVariants = s.variants.map(function(e) {
                                return inherit$1(s, {
                                    variants: null
                                }, e)
                            })),
                            s.cachedVariants) ? s.cachedVariants : !function dependencyOnParent(e) {
                                return !!e && (e.endsWithParent || dependencyOnParent(e.starts))
                            }(s) ? Object.isFrozen(s) ? inherit$1(s) : s : inherit$1(s, {
                                starts: s.starts ? inherit$1(s.starts) : null
                            })
                        })),
                        t.contains.forEach(function(e) {
                            compileMode(e, t)
                        }),
                        t.starts && compileMode(t.starts, s),
                        t.matcher = function(e) {
                            let t = new ResumableMultiRegex;
                            return e.contains.forEach(e => t.addRule(e.begin, {
                                rule: e,
                                type: "begin"
                            })),
                            e.terminatorEnd && t.addRule(e.terminatorEnd, {
                                type: "end"
                            }),
                            e.illegal && t.addRule(e.illegal, {
                                type: "illegal"
                            }),
                            t
                        }(t),
                        t
                    }(e)
                }(b)
                  , y = ""
                  , v = d || _
                  , E = {}
                  , w = new h.__emitter(h);
                !function() {
                    let e = [];
                    for (let t = v; t !== b; t = t.parent)
                        t.scope && e.unshift(t.scope);
                    e.forEach(e => w.openNode(e))
                }();
                let A = ""
                  , C = 0
                  , S = 0
                  , D = 0
                  , N = !1;
                try {
                    if (b.__emitTokens)
                        b.__emitTokens(s, w);
                    else {
                        for (v.matcher.considerAll(); ; ) {
                            D++,
                            N ? N = !1 : v.matcher.considerAll(),
                            v.matcher.lastIndex = S;
                            let e = v.matcher.exec(s);
                            if (!e)
                                break;
                            let t = s.substring(S, e.index)
                              , l = processLexeme(t, e);
                            S = e.index + l
                        }
                        processLexeme(s.substring(S))
                    }
                    return w.finalize(),
                    y = w.toHTML(),
                    {
                        language: e,
                        value: y,
                        relevance: C,
                        illegal: !1,
                        _emitter: w,
                        _top: v
                    }
                } catch (t) {
                    if (t.message && t.message.includes("Illegal"))
                        return {
                            language: e,
                            value: escapeHTML(s),
                            illegal: !0,
                            relevance: 0,
                            _illegalBy: {
                                message: t.message,
                                index: S,
                                context: s.slice(S - 100, S + 100),
                                mode: t.mode,
                                resultSoFar: y
                            },
                            _emitter: w
                        };
                    if (c)
                        return {
                            language: e,
                            value: escapeHTML(s),
                            illegal: !1,
                            relevance: 0,
                            errorRaised: t,
                            _emitter: w,
                            _top: v
                        };
                    throw t
                }
            }
            function highlightAuto(e, s) {
                s = s || h.languages || Object.keys(t);
                let l = function(e) {
                    let t = {
                        value: escapeHTML(e),
                        illegal: !1,
                        relevance: 0,
                        _top: d,
                        _emitter: new h.__emitter(h)
                    };
                    return t._emitter.addText(e),
                    t
                }(e)
                  , c = s.filter(getLanguage).filter(autoDetection).map(t => _highlight(t, e, !1));
                c.unshift(l);
                let u = c.sort( (e, t) => {
                    if (e.relevance !== t.relevance)
                        return t.relevance - e.relevance;
                    if (e.language && t.language) {
                        if (getLanguage(e.language).supersetOf === t.language)
                            return 1;
                        if (getLanguage(t.language).supersetOf === e.language)
                            return -1
                    }
                    return 0
                }
                )
                  , [g,m] = u;
                return g.secondBest = m,
                g
            }
            function highlightElement(e) {
                let t = null
                  , l = function(e) {
                    let t = e.className + " ";
                    t += e.parentNode ? e.parentNode.className : "";
                    let s = h.languageDetectRe.exec(t);
                    if (s) {
                        let t = getLanguage(s[1]);
                        return t || (warn(u.replace("{}", s[1])),
                        warn("Falling back to no-highlight mode for this block.", e)),
                        t ? s[1] : "no-highlight"
                    }
                    return t.split(/\s+/).find(e => shouldNotHighlight(e) || getLanguage(e))
                }(e);
                if (shouldNotHighlight(l))
                    return;
                if (fire("before:highlightElement", {
                    el: e,
                    language: l
                }),
                e.dataset.highlighted) {
                    console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", e);
                    return
                }
                if (e.children.length > 0 && (h.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
                console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
                console.warn("The element with unescaped HTML:"),
                console.warn(e)),
                h.throwUnescapedHTML)) {
                    let t = new HTMLInjectionError("One of your code blocks includes unescaped HTML.",e.innerHTML);
                    throw t
                }
                t = e;
                let c = t.textContent
                  , d = l ? highlight(c, {
                    language: l,
                    ignoreIllegals: !0
                }) : highlightAuto(c);
                e.innerHTML = d.value,
                e.dataset.highlighted = "yes",
                function(e, t, l) {
                    let c = t && s[t] || l;
                    e.classList.add("hljs"),
                    e.classList.add(`language-${c}`)
                }(e, l, d.language),
                e.result = {
                    language: d.language,
                    re: d.relevance,
                    relevance: d.relevance
                },
                d.secondBest && (e.secondBest = {
                    language: d.secondBest.language,
                    relevance: d.secondBest.relevance
                }),
                fire("after:highlightElement", {
                    el: e,
                    result: d,
                    text: c
                })
            }
            let g = !1;
            function highlightAll() {
                if ("loading" === document.readyState) {
                    g || window.addEventListener("DOMContentLoaded", function() {
                        highlightAll()
                    }, !1),
                    g = !0;
                    return
                }
                let e = document.querySelectorAll(h.cssSelector);
                e.forEach(highlightElement)
            }
            function getLanguage(e) {
                return t[e = (e || "").toLowerCase()] || t[s[e]]
            }
            function registerAliases(e, {languageName: t}) {
                "string" == typeof e && (e = [e]),
                e.forEach(e => {
                    s[e.toLowerCase()] = t
                }
                )
            }
            function autoDetection(e) {
                let t = getLanguage(e);
                return t && !t.disableAutodetect
            }
            function fire(e, t) {
                l.forEach(function(s) {
                    s[e] && s[e](t)
                })
            }
            for (let u in Object.assign(e, {
                highlight,
                highlightAuto,
                highlightAll,
                highlightElement,
                highlightBlock: function(e) {
                    return deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0"),
                    deprecated("10.7.0", "Please use highlightElement now."),
                    highlightElement(e)
                },
                configure: function(e) {
                    h = inherit$1(h, e)
                },
                initHighlighting: () => {
                    highlightAll(),
                    deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
                }
                ,
                initHighlightingOnLoad: function() {
                    highlightAll(),
                    deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
                },
                registerLanguage: function(s, l) {
                    let u = null;
                    try {
                        u = l(e)
                    } catch (e) {
                        if (error("Language definition for '{}' could not be registered.".replace("{}", s)),
                        c)
                            error(e);
                        else
                            throw e;
                        u = d
                    }
                    u.name || (u.name = s),
                    t[s] = u,
                    u.rawDefinition = l.bind(null, e),
                    u.aliases && registerAliases(u.aliases, {
                        languageName: s
                    })
                },
                unregisterLanguage: function(e) {
                    for (let l of (delete t[e],
                    Object.keys(s)))
                        s[l] === e && delete s[l]
                },
                listLanguages: function() {
                    return Object.keys(t)
                },
                getLanguage,
                registerAliases,
                autoDetection,
                inherit: inherit$1,
                addPlugin: function(e) {
                    var t;
                    (t = e)["before:highlightBlock"] && !t["before:highlightElement"] && (t["before:highlightElement"] = e => {
                        t["before:highlightBlock"](Object.assign({
                            block: e.el
                        }, e))
                    }
                    ),
                    t["after:highlightBlock"] && !t["after:highlightElement"] && (t["after:highlightElement"] = e => {
                        t["after:highlightBlock"](Object.assign({
                            block: e.el
                        }, e))
                    }
                    ),
                    l.push(e)
                },
                removePlugin: function(e) {
                    let t = l.indexOf(e);
                    -1 !== t && l.splice(t, 1)
                }
            }),
            e.debugMode = function() {
                c = !1
            }
            ,
            e.safeMode = function() {
                c = !0
            }
            ,
            e.versionString = "11.11.1",
            e.regex = {
                concat: concat,
                lookahead: lookahead,
                either: either,
                optional: optional,
                anyNumberOfTimes: anyNumberOfTimes
            },
            _)
                "object" == typeof _[u] && function deepFreeze(e) {
                    return e instanceof Map ? e.clear = e.delete = e.set = function() {
                        throw Error("map is read-only")
                    }
                    : e instanceof Set && (e.add = e.clear = e.delete = function() {
                        throw Error("set is read-only")
                    }
                    ),
                    Object.freeze(e),
                    Object.getOwnPropertyNames(e).forEach(t => {
                        let s = e[t]
                          , l = typeof s;
                        "object" !== l && "function" !== l || Object.isFrozen(s) || deepFreeze(s)
                    }
                    ),
                    e
                }(_[u]);
            return Object.assign(e, _),
            e
        }
          , E = HLJS({});
        E.newInstance = () => HLJS({}),
        e.exports = E,
        E.HighlightJS = E,
        E.default = E
    },
    6958: function(e) {
        e.exports = function(e) {
            let t = e.regex
              , s = e.COMMENT("//", "$", {
                contains: [{
                    begin: /\\\n/
                }]
            })
              , l = "decltype\\(auto\\)"
              , c = "[a-zA-Z_]\\w*::"
              , u = "(" + l + "|" + t.optional(c) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")"
              , d = {
                className: "type",
                variants: [{
                    begin: "\\b[a-z\\d_]*_t\\b"
                }, {
                    match: /\batomic_[a-z]{3,6}\b/
                }]
            }
              , h = {
                className: "string",
                variants: [{
                    begin: '(u8?|U|L)?"',
                    end: '"',
                    illegal: "\\n",
                    contains: [e.BACKSLASH_ESCAPE]
                }, {
                    begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end: "'",
                    illegal: "."
                }, e.END_SAME_AS_BEGIN({
                    begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                    end: /\)([^()\\ ]{0,16})"/
                })]
            }
              , g = {
                className: "number",
                variants: [{
                    match: /\b(0b[01']+)/
                }, {
                    match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/
                }, {
                    match: /(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/
                }, {
                    match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/
                }],
                relevance: 0
            }
              , m = {
                className: "meta",
                begin: /#\s*[a-z]+\b/,
                end: /$/,
                keywords: {
                    keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include"
                },
                contains: [{
                    begin: /\\\n/,
                    relevance: 0
                }, e.inherit(h, {
                    className: "string"
                }), {
                    className: "string",
                    begin: /<.*?>/
                }, s, e.C_BLOCK_COMMENT_MODE]
            }
              , b = {
                className: "title",
                begin: t.optional(c) + e.IDENT_RE,
                relevance: 0
            }
              , _ = t.optional(c) + e.IDENT_RE + "\\s*\\("
              , k = {
                keyword: ["asm", "auto", "break", "case", "continue", "default", "do", "else", "enum", "extern", "for", "fortran", "goto", "if", "inline", "register", "restrict", "return", "sizeof", "typeof", "typeof_unqual", "struct", "switch", "typedef", "union", "volatile", "while", "_Alignas", "_Alignof", "_Atomic", "_Generic", "_Noreturn", "_Static_assert", "_Thread_local", "alignas", "alignof", "noreturn", "static_assert", "thread_local", "_Pragma"],
                type: ["float", "double", "signed", "unsigned", "int", "short", "long", "char", "void", "_Bool", "_BitInt", "_Complex", "_Imaginary", "_Decimal32", "_Decimal64", "_Decimal96", "_Decimal128", "_Decimal64x", "_Decimal128x", "_Float16", "_Float32", "_Float64", "_Float128", "_Float32x", "_Float64x", "_Float128x", "const", "static", "constexpr", "complex", "bool", "imaginary"],
                literal: "true false NULL",
                built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
            }
              , y = [m, d, s, e.C_BLOCK_COMMENT_MODE, g, h]
              , v = {
                variants: [{
                    begin: /=/,
                    end: /;/
                }, {
                    begin: /\(/,
                    end: /\)/
                }, {
                    beginKeywords: "new throw return else",
                    end: /;/
                }],
                keywords: k,
                contains: y.concat([{
                    begin: /\(/,
                    end: /\)/,
                    keywords: k,
                    contains: y.concat(["self"]),
                    relevance: 0
                }]),
                relevance: 0
            }
              , x = {
                begin: "(" + u + "[\\*&\\s]+)+" + _,
                returnBegin: !0,
                end: /[{;=]/,
                excludeEnd: !0,
                keywords: k,
                illegal: /[^\w\s\*&:<>.]/,
                contains: [{
                    begin: l,
                    keywords: k,
                    relevance: 0
                }, {
                    begin: _,
                    returnBegin: !0,
                    contains: [e.inherit(b, {
                        className: "title.function"
                    })],
                    relevance: 0
                }, {
                    relevance: 0,
                    match: /,/
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: k,
                    relevance: 0,
                    contains: [s, e.C_BLOCK_COMMENT_MODE, h, g, d, {
                        begin: /\(/,
                        end: /\)/,
                        keywords: k,
                        relevance: 0,
                        contains: ["self", s, e.C_BLOCK_COMMENT_MODE, h, g, d]
                    }]
                }, d, s, e.C_BLOCK_COMMENT_MODE, m]
            };
            return {
                name: "C",
                aliases: ["h"],
                keywords: k,
                disableAutodetect: !0,
                illegal: "</",
                contains: [].concat(v, x, y, [m, {
                    begin: e.IDENT_RE + "::",
                    keywords: k
                }, {
                    className: "class",
                    beginKeywords: "enum class struct union",
                    end: /[{;:<>=]/,
                    contains: [{
                        beginKeywords: "final class struct"
                    }, e.TITLE_MODE]
                }]),
                exports: {
                    preprocessor: m,
                    strings: h,
                    keywords: k
                }
            }
        }
    },
    913: function(e) {
        let MODES = e => ({
            IMPORTANT: {
                scope: "meta",
                begin: "!important"
            },
            BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
            HEXCOLOR: {
                scope: "number",
                begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
            },
            FUNCTION_DISPATCH: {
                className: "built_in",
                begin: /[\w-]+(?=\()/
            },
            ATTRIBUTE_SELECTOR_MODE: {
                scope: "selector-attr",
                begin: /\[/,
                end: /\]/,
                illegal: "$",
                contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
            },
            CSS_NUMBER_MODE: {
                scope: "number",
                begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                relevance: 0
            },
            CSS_VARIABLE: {
                className: "attr",
                begin: /--[A-Za-z_][A-Za-z0-9_-]*/
            }
        })
          , t = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "optgroup", "option", "p", "picture", "q", "quote", "samp", "section", "select", "source", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video", "defs", "g", "marker", "mask", "pattern", "svg", "switch", "symbol", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feFlood", "feGaussianBlur", "feImage", "feMerge", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence", "linearGradient", "radialGradient", "stop", "circle", "ellipse", "image", "line", "path", "polygon", "polyline", "rect", "text", "use", "textPath", "tspan", "foreignObject", "clipPath"]
          , s = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"].sort().reverse()
          , l = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"].sort().reverse()
          , c = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"].sort().reverse()
          , u = ["accent-color", "align-content", "align-items", "align-self", "alignment-baseline", "all", "anchor-name", "animation", "animation-composition", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-range", "animation-range-end", "animation-range-start", "animation-timeline", "animation-timing-function", "appearance", "aspect-ratio", "backdrop-filter", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-position-x", "background-position-y", "background-repeat", "background-size", "baseline-shift", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-start-end-radius", "border-start-start-radius", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-align", "box-decoration-break", "box-direction", "box-flex", "box-flex-group", "box-lines", "box-ordinal-group", "box-orient", "box-pack", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "color-scheme", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "contain-intrinsic-block-size", "contain-intrinsic-height", "contain-intrinsic-inline-size", "contain-intrinsic-size", "contain-intrinsic-width", "container", "container-name", "container-type", "content", "content-visibility", "counter-increment", "counter-reset", "counter-set", "cue", "cue-after", "cue-before", "cursor", "cx", "cy", "direction", "display", "dominant-baseline", "empty-cells", "enable-background", "field-sizing", "fill", "fill-opacity", "fill-rule", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flood-color", "flood-opacity", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-optical-sizing", "font-palette", "font-size", "font-size-adjust", "font-smooth", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-synthesis-position", "font-synthesis-small-caps", "font-synthesis-style", "font-synthesis-weight", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-emoji", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "forced-color-adjust", "gap", "glyph-orientation-horizontal", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphenate-character", "hyphenate-limit-chars", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "initial-letter", "initial-letter-align", "inline-size", "inset", "inset-area", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "isolation", "justify-content", "justify-items", "justify-self", "kerning", "left", "letter-spacing", "lighting-color", "line-break", "line-height", "line-height-step", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "margin-trim", "marker", "marker-end", "marker-mid", "marker-start", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "masonry-auto-flow", "math-depth", "math-shift", "math-style", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-anchor", "overflow-block", "overflow-clip-margin", "overflow-inline", "overflow-wrap", "overflow-x", "overflow-y", "overlay", "overscroll-behavior", "overscroll-behavior-block", "overscroll-behavior-inline", "overscroll-behavior-x", "overscroll-behavior-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "paint-order", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "place-content", "place-items", "place-self", "pointer-events", "position", "position-anchor", "position-visibility", "print-color-adjust", "quotes", "r", "resize", "rest", "rest-after", "rest-before", "right", "rotate", "row-gap", "ruby-align", "ruby-position", "scale", "scroll-behavior", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scroll-timeline", "scroll-timeline-axis", "scroll-timeline-name", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "shape-rendering", "speak", "speak-as", "src", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-anchor", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-skip-ink", "text-decoration-style", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-size-adjust", "text-transform", "text-underline-offset", "text-underline-position", "text-wrap", "text-wrap-mode", "text-wrap-style", "timeline-scope", "top", "touch-action", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-behavior", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "translate", "unicode-bidi", "user-modify", "user-select", "vector-effect", "vertical-align", "view-timeline", "view-timeline-axis", "view-timeline-inset", "view-timeline-name", "view-transition-name", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "white-space-collapse", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "x", "y", "z-index", "zoom"].sort().reverse();
        e.exports = function(e) {
            let d = e.regex
              , h = MODES(e)
              , g = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
            return {
                name: "CSS",
                case_insensitive: !0,
                illegal: /[=|'\$]/,
                keywords: {
                    keyframePosition: "from to"
                },
                classNameAliases: {
                    keyframePosition: "selector-tag"
                },
                contains: [h.BLOCK_COMMENT, {
                    begin: /-(webkit|moz|ms|o)-(?=[a-z])/
                }, h.CSS_NUMBER_MODE, {
                    className: "selector-id",
                    begin: /#[A-Za-z0-9_-]+/,
                    relevance: 0
                }, {
                    className: "selector-class",
                    begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
                    relevance: 0
                }, h.ATTRIBUTE_SELECTOR_MODE, {
                    className: "selector-pseudo",
                    variants: [{
                        begin: ":(" + l.join("|") + ")"
                    }, {
                        begin: ":(:)?(" + c.join("|") + ")"
                    }]
                }, h.CSS_VARIABLE, {
                    className: "attribute",
                    begin: "\\b(" + u.join("|") + ")\\b"
                }, {
                    begin: /:/,
                    end: /[;}{]/,
                    contains: [h.BLOCK_COMMENT, h.HEXCOLOR, h.IMPORTANT, h.CSS_NUMBER_MODE, ...g, {
                        begin: /(url|data-uri)\(/,
                        end: /\)/,
                        relevance: 0,
                        keywords: {
                            built_in: "url data-uri"
                        },
                        contains: [...g, {
                            className: "string",
                            begin: /[^)]/,
                            endsWithParent: !0,
                            excludeEnd: !0
                        }]
                    }, h.FUNCTION_DISPATCH]
                }, {
                    begin: d.lookahead(/@/),
                    end: "[{;]",
                    relevance: 0,
                    illegal: /:/,
                    contains: [{
                        className: "keyword",
                        begin: /@-?\w[\w]*(-\w+)*/
                    }, {
                        begin: /\s/,
                        endsWithParent: !0,
                        excludeEnd: !0,
                        relevance: 0,
                        keywords: {
                            $pattern: /[a-z-]+/,
                            keyword: "and or not only",
                            attribute: s.join(" ")
                        },
                        contains: [{
                            begin: /[a-z-]+(?=:)/,
                            className: "attribute"
                        }, ...g, h.CSS_NUMBER_MODE]
                    }]
                }, {
                    className: "selector-tag",
                    begin: "\\b(" + t.join("|") + ")\\b"
                }]
            }
        }
    },
    2454: function(e) {
        e.exports = function(e) {
            let t = {
                keyword: ["break", "case", "chan", "const", "continue", "default", "defer", "else", "fallthrough", "for", "func", "go", "goto", "if", "import", "interface", "map", "package", "range", "return", "select", "struct", "switch", "type", "var"],
                type: ["bool", "byte", "complex64", "complex128", "error", "float32", "float64", "int8", "int16", "int32", "int64", "string", "uint8", "uint16", "uint32", "uint64", "int", "uint", "uintptr", "rune"],
                literal: ["true", "false", "iota", "nil"],
                built_in: ["append", "cap", "close", "complex", "copy", "imag", "len", "make", "new", "panic", "print", "println", "real", "recover", "delete"]
            };
            return {
                name: "Go",
                aliases: ["golang"],
                keywords: t,
                illegal: "</",
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                    className: "string",
                    variants: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                        begin: "`",
                        end: "`"
                    }]
                }, {
                    className: "number",
                    variants: [{
                        match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
                        relevance: 0
                    }, {
                        match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
                        relevance: 0
                    }, {
                        match: /-?\b0[oO](_?[0-7])*i?/,
                        relevance: 0
                    }, {
                        match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
                        relevance: 0
                    }, {
                        match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
                        relevance: 0
                    }]
                }, {
                    begin: /:=/
                }, {
                    className: "function",
                    beginKeywords: "func",
                    end: "\\s*(\\{|$)",
                    excludeEnd: !0,
                    contains: [e.TITLE_MODE, {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        endsParent: !0,
                        keywords: t,
                        illegal: /["']/
                    }]
                }]
            }
        }
    },
    7788: function(e) {
        var t = "[0-9](_*[0-9])*"
          , s = `\\.(${t})`
          , l = "[0-9a-fA-F](_*[0-9a-fA-F])*"
          , c = {
            className: "number",
            variants: [{
                begin: `(\\b(${t})((${s})|\\.)?|(${s}))[eE][+-]?(${t})[fFdD]?\\b`
            }, {
                begin: `\\b(${t})((${s})[fFdD]?\\b|\\.([fFdD]\\b)?)`
            }, {
                begin: `(${s})[fFdD]?\\b`
            }, {
                begin: `\\b(${t})[fFdD]\\b`
            }, {
                begin: `\\b0[xX]((${l})\\.?|(${l})?\\.(${l}))[pP][+-]?(${t})[fFdD]?\\b`
            }, {
                begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
            }, {
                begin: `\\b0[xX](${l})[lL]?\\b`
            }, {
                begin: "\\b0(_*[0-7])*[lL]?\\b"
            }, {
                begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
            }],
            relevance: 0
        };
        e.exports = function(e) {
            let t = e.regex
              , s = "[\xc0-ʸa-zA-Z_$][\xc0-ʸa-zA-Z_$0-9]*"
              , l = s + function recurRegex(e, t, s) {
                return -1 === s ? "" : e.replace(t, l => recurRegex(e, t, s - 1))
            }("(?:<" + s + "~~~(?:\\s*,\\s*" + s + "~~~)*>)?", /~~~/g, 2)
              , u = {
                keyword: ["synchronized", "abstract", "private", "var", "static", "if", "const ", "for", "while", "strictfp", "finally", "protected", "import", "native", "final", "void", "enum", "else", "break", "transient", "catch", "instanceof", "volatile", "case", "assert", "package", "default", "public", "try", "switch", "continue", "throws", "protected", "public", "private", "module", "requires", "exports", "do", "sealed", "yield", "permits", "goto", "when"],
                literal: ["false", "true", "null"],
                type: ["char", "boolean", "long", "float", "int", "byte", "short", "double"],
                built_in: ["super", "this"]
            }
              , d = {
                className: "meta",
                begin: "@" + s,
                contains: [{
                    begin: /\(/,
                    end: /\)/,
                    contains: ["self"]
                }]
            }
              , h = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: u,
                relevance: 0,
                contains: [e.C_BLOCK_COMMENT_MODE],
                endsParent: !0
            };
            return {
                name: "Java",
                aliases: ["jsp"],
                keywords: u,
                illegal: /<\/|#/,
                contains: [e.COMMENT("/\\*\\*", "\\*/", {
                    relevance: 0,
                    contains: [{
                        begin: /\w+@/,
                        relevance: 0
                    }, {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    }]
                }), {
                    begin: /import java\.[a-z]+\./,
                    keywords: "import",
                    relevance: 2
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                    begin: /"""/,
                    end: /"""/,
                    className: "string",
                    contains: [e.BACKSLASH_ESCAPE]
                }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                    match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, s],
                    className: {
                        1: "keyword",
                        3: "title.class"
                    }
                }, {
                    match: /non-sealed/,
                    scope: "keyword"
                }, {
                    begin: [t.concat(/(?!else)/, s), /\s+/, s, /\s+/, /=(?!=)/],
                    className: {
                        1: "type",
                        3: "variable",
                        5: "operator"
                    }
                }, {
                    begin: [/record/, /\s+/, s],
                    className: {
                        1: "keyword",
                        3: "title.class"
                    },
                    contains: [h, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, {
                    beginKeywords: "new throw return else",
                    relevance: 0
                }, {
                    begin: ["(?:" + l + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
                    className: {
                        2: "title.function"
                    },
                    keywords: u,
                    contains: [{
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        keywords: u,
                        relevance: 0,
                        contains: [d, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, c, e.C_BLOCK_COMMENT_MODE]
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, c, d]
            }
        }
    },
    6029: function(e) {
        let t = "[A-Za-z$_][0-9A-Za-z$_]*"
          , s = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"]
          , l = ["true", "false", "null", "undefined", "NaN", "Infinity"]
          , c = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"]
          , u = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]
          , d = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"]
          , h = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"]
          , g = [].concat(d, c, u);
        e.exports = function(e) {
            var m;
            let b = e.regex
              , hasClosingTag = (e, {after: t}) => {
                let s = "</" + e[0].slice(1)
                  , l = e.input.indexOf(s, t);
                return -1 !== l
            }
              , _ = {
                begin: "<>",
                end: "</>"
            }
              , k = {
                begin: /<[A-Za-z0-9\\._:-]+/,
                end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                isTrulyOpeningTag: (e, t) => {
                    let s;
                    let l = e[0].length + e.index
                      , c = e.input[l];
                    if ("<" === c || "," === c) {
                        t.ignoreMatch();
                        return
                    }
                    ">" !== c || hasClosingTag(e, {
                        after: l
                    }) || t.ignoreMatch();
                    let u = e.input.substring(l);
                    if ((s = u.match(/^\s*=/)) || (s = u.match(/^\s+extends\s+/)) && 0 === s.index) {
                        t.ignoreMatch();
                        return
                    }
                }
            }
              , y = {
                $pattern: t,
                keyword: s,
                literal: l,
                built_in: g,
                "variable.language": h
            }
              , v = "[0-9](_?[0-9])*"
              , x = `\\.(${v})`
              , E = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*"
              , w = {
                className: "number",
                variants: [{
                    begin: `(\\b(${E})((${x})|\\.)?|(${x}))[eE][+-]?(${v})\\b`
                }, {
                    begin: `\\b(${E})\\b((${x})\\b|\\.)?|(${x})\\b`
                }, {
                    begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                }, {
                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                }, {
                    begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                }, {
                    begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                }, {
                    begin: "\\b0[0-7]+n?\\b"
                }],
                relevance: 0
            }
              , A = {
                className: "subst",
                begin: "\\$\\{",
                end: "\\}",
                keywords: y,
                contains: []
            }
              , C = {
                begin: ".?html`",
                end: "",
                starts: {
                    end: "`",
                    returnEnd: !1,
                    contains: [e.BACKSLASH_ESCAPE, A],
                    subLanguage: "xml"
                }
            }
              , S = {
                begin: ".?css`",
                end: "",
                starts: {
                    end: "`",
                    returnEnd: !1,
                    contains: [e.BACKSLASH_ESCAPE, A],
                    subLanguage: "css"
                }
            }
              , D = {
                begin: ".?gql`",
                end: "",
                starts: {
                    end: "`",
                    returnEnd: !1,
                    contains: [e.BACKSLASH_ESCAPE, A],
                    subLanguage: "graphql"
                }
            }
              , N = {
                className: "string",
                begin: "`",
                end: "`",
                contains: [e.BACKSLASH_ESCAPE, A]
            }
              , M = e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                relevance: 0,
                contains: [{
                    begin: "(?=@[A-Za-z]+)",
                    relevance: 0,
                    contains: [{
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    }, {
                        className: "type",
                        begin: "\\{",
                        end: "\\}",
                        excludeEnd: !0,
                        excludeBegin: !0,
                        relevance: 0
                    }, {
                        className: "variable",
                        begin: t + "(?=\\s*(-)|$)",
                        endsParent: !0,
                        relevance: 0
                    }, {
                        begin: /(?=[^\n])\s/,
                        relevance: 0
                    }]
                }]
            })
              , I = {
                className: "comment",
                variants: [M, e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
            }
              , T = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, C, S, D, N, {
                match: /\$\d+/
            }, w];
            A.contains = T.concat({
                begin: /\{/,
                end: /\}/,
                keywords: y,
                contains: ["self"].concat(T)
            });
            let O = [].concat(I, A.contains)
              , L = O.concat([{
                begin: /(\s*)\(/,
                end: /\)/,
                keywords: y,
                contains: ["self"].concat(O)
            }])
              , R = {
                className: "params",
                begin: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: y,
                contains: L
            }
              , F = {
                variants: [{
                    match: [/class/, /\s+/, t, /\s+/, /extends/, /\s+/, b.concat(t, "(", b.concat(/\./, t), ")*")],
                    scope: {
                        1: "keyword",
                        3: "title.class",
                        5: "keyword",
                        7: "title.class.inherited"
                    }
                }, {
                    match: [/class/, /\s+/, t],
                    scope: {
                        1: "keyword",
                        3: "title.class"
                    }
                }]
            }
              , z = {
                relevance: 0,
                match: b.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                className: "title.class",
                keywords: {
                    _: [...c, ...u]
                }
            }
              , B = {
                match: b.concat(/\b/, (m = [...d, "super", "import"].map(e => `${e}\\s*\\(`),
                b.concat("(?!", m.join("|"), ")")), t, b.lookahead(/\s*\(/)),
                className: "title.function",
                relevance: 0
            }
              , q = {
                begin: b.concat(/\./, b.lookahead(b.concat(t, /(?![0-9A-Za-z$_(])/))),
                end: t,
                excludeBegin: !0,
                keywords: "prototype",
                className: "property",
                relevance: 0
            }
              , P = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>"
              , $ = {
                match: [/const|var|let/, /\s+/, t, /\s*/, /=\s*/, /(async\s*)?/, b.lookahead(P)],
                keywords: "async",
                className: {
                    1: "keyword",
                    3: "title.function"
                },
                contains: [R]
            };
            return {
                name: "JavaScript",
                aliases: ["js", "jsx", "mjs", "cjs"],
                keywords: y,
                exports: {
                    PARAMS_CONTAINS: L,
                    CLASS_REFERENCE: z
                },
                illegal: /#(?![$_A-z])/,
                contains: [e.SHEBANG({
                    label: "shebang",
                    binary: "node",
                    relevance: 5
                }), {
                    label: "use_strict",
                    className: "meta",
                    relevance: 10,
                    begin: /^\s*['"]use (strict|asm)['"]/
                }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, C, S, D, N, I, {
                    match: /\$\d+/
                }, w, z, {
                    scope: "attr",
                    match: t + b.lookahead(":"),
                    relevance: 0
                }, $, {
                    begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                    keywords: "return throw case",
                    relevance: 0,
                    contains: [I, e.REGEXP_MODE, {
                        className: "function",
                        begin: P,
                        returnBegin: !0,
                        end: "\\s*=>",
                        contains: [{
                            className: "params",
                            variants: [{
                                begin: e.UNDERSCORE_IDENT_RE,
                                relevance: 0
                            }, {
                                className: null,
                                begin: /\(\s*\)/,
                                skip: !0
                            }, {
                                begin: /(\s*)\(/,
                                end: /\)/,
                                excludeBegin: !0,
                                excludeEnd: !0,
                                keywords: y,
                                contains: L
                            }]
                        }]
                    }, {
                        begin: /,/,
                        relevance: 0
                    }, {
                        match: /\s+/,
                        relevance: 0
                    }, {
                        variants: [{
                            begin: _.begin,
                            end: _.end
                        }, {
                            match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                        }, {
                            begin: k.begin,
                            "on:begin": k.isTrulyOpeningTag,
                            end: k.end
                        }],
                        subLanguage: "xml",
                        contains: [{
                            begin: k.begin,
                            end: k.end,
                            skip: !0,
                            contains: ["self"]
                        }]
                    }]
                }, {
                    variants: [{
                        match: [/function/, /\s+/, t, /(?=\s*\()/]
                    }, {
                        match: [/function/, /\s*(?=\()/]
                    }],
                    className: {
                        1: "keyword",
                        3: "title.function"
                    },
                    label: "func.def",
                    contains: [R],
                    illegal: /%/
                }, {
                    beginKeywords: "while if switch catch for"
                }, {
                    begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                    returnBegin: !0,
                    label: "func.def",
                    contains: [R, e.inherit(e.TITLE_MODE, {
                        begin: t,
                        className: "title.function"
                    })]
                }, {
                    match: /\.\.\./,
                    relevance: 0
                }, q, {
                    match: "\\$" + t,
                    relevance: 0
                }, {
                    match: [/\bconstructor(?=\s*\()/],
                    className: {
                        1: "title.function"
                    },
                    contains: [R]
                }, B, {
                    relevance: 0,
                    match: /\b[A-Z][A-Z_0-9]+\b/,
                    className: "variable.constant"
                }, F, {
                    match: [/get|set/, /\s+/, t, /(?=\()/],
                    className: {
                        1: "keyword",
                        3: "title.function"
                    },
                    contains: [{
                        begin: /\(\)/
                    }, R]
                }, {
                    match: /\$[(.]/
                }]
            }
        }
    },
    4314: function(e) {
        e.exports = function(e) {
            let t = ["true", "false", "null"]
              , s = {
                scope: "literal",
                beginKeywords: t.join(" ")
            };
            return {
                name: "JSON",
                aliases: ["jsonc"],
                keywords: {
                    literal: t
                },
                contains: [{
                    className: "attr",
                    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
                    relevance: 1.01
                }, {
                    match: /[{}[\],:]/,
                    className: "punctuation",
                    relevance: 0
                }, e.QUOTE_STRING_MODE, s, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                illegal: "\\S"
            }
        }
    },
    2234: function(e) {
        var t = "[0-9](_*[0-9])*"
          , s = `\\.(${t})`
          , l = "[0-9a-fA-F](_*[0-9a-fA-F])*"
          , c = {
            className: "number",
            variants: [{
                begin: `(\\b(${t})((${s})|\\.)?|(${s}))[eE][+-]?(${t})[fFdD]?\\b`
            }, {
                begin: `\\b(${t})((${s})[fFdD]?\\b|\\.([fFdD]\\b)?)`
            }, {
                begin: `(${s})[fFdD]?\\b`
            }, {
                begin: `\\b(${t})[fFdD]\\b`
            }, {
                begin: `\\b0[xX]((${l})\\.?|(${l})?\\.(${l}))[pP][+-]?(${t})[fFdD]?\\b`
            }, {
                begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
            }, {
                begin: `\\b0[xX](${l})[lL]?\\b`
            }, {
                begin: "\\b0(_*[0-7])*[lL]?\\b"
            }, {
                begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
            }],
            relevance: 0
        };
        e.exports = function(e) {
            let t = {
                keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
                built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
                literal: "true false null"
            }
              , s = {
                className: "symbol",
                begin: e.UNDERSCORE_IDENT_RE + "@"
            }
              , l = {
                className: "subst",
                begin: /\$\{/,
                end: /\}/,
                contains: [e.C_NUMBER_MODE]
            }
              , u = {
                className: "variable",
                begin: "\\$" + e.UNDERSCORE_IDENT_RE
            }
              , d = {
                className: "string",
                variants: [{
                    begin: '"""',
                    end: '"""(?=[^"])',
                    contains: [u, l]
                }, {
                    begin: "'",
                    end: "'",
                    illegal: /\n/,
                    contains: [e.BACKSLASH_ESCAPE]
                }, {
                    begin: '"',
                    end: '"',
                    illegal: /\n/,
                    contains: [e.BACKSLASH_ESCAPE, u, l]
                }]
            };
            l.contains.push(d);
            let h = {
                className: "meta",
                begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
            }
              , g = {
                className: "meta",
                begin: "@" + e.UNDERSCORE_IDENT_RE,
                contains: [{
                    begin: /\(/,
                    end: /\)/,
                    contains: [e.inherit(d, {
                        className: "string"
                    }), "self"]
                }]
            }
              , m = e.COMMENT("/\\*", "\\*/", {
                contains: [e.C_BLOCK_COMMENT_MODE]
            })
              , b = {
                variants: [{
                    className: "type",
                    begin: e.UNDERSCORE_IDENT_RE
                }, {
                    begin: /\(/,
                    end: /\)/,
                    contains: []
                }]
            };
            return b.variants[1].contains = [b],
            b.variants[1].contains = [b],
            {
                name: "Kotlin",
                aliases: ["kt", "kts"],
                keywords: t,
                contains: [e.COMMENT("/\\*\\*", "\\*/", {
                    relevance: 0,
                    contains: [{
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    }]
                }), e.C_LINE_COMMENT_MODE, m, {
                    className: "keyword",
                    begin: /\b(break|continue|return|this)\b/,
                    starts: {
                        contains: [{
                            className: "symbol",
                            begin: /@\w+/
                        }]
                    }
                }, s, h, g, {
                    className: "function",
                    beginKeywords: "fun",
                    end: "[(]|$",
                    returnBegin: !0,
                    excludeEnd: !0,
                    keywords: t,
                    relevance: 5,
                    contains: [{
                        begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                        returnBegin: !0,
                        relevance: 0,
                        contains: [e.UNDERSCORE_TITLE_MODE]
                    }, {
                        className: "type",
                        begin: /</,
                        end: />/,
                        keywords: "reified",
                        relevance: 0
                    }, {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        endsParent: !0,
                        keywords: t,
                        relevance: 0,
                        contains: [{
                            begin: /:/,
                            end: /[=,\/]/,
                            endsWithParent: !0,
                            contains: [b, e.C_LINE_COMMENT_MODE, m],
                            relevance: 0
                        }, e.C_LINE_COMMENT_MODE, m, h, g, d, e.C_NUMBER_MODE]
                    }, m]
                }, {
                    begin: [/class|interface|trait/, /\s+/, e.UNDERSCORE_IDENT_RE],
                    beginScope: {
                        3: "title.class"
                    },
                    keywords: "class interface trait",
                    end: /[:\{(]|$/,
                    excludeEnd: !0,
                    illegal: "extends implements",
                    contains: [{
                        beginKeywords: "public protected internal private constructor"
                    }, e.UNDERSCORE_TITLE_MODE, {
                        className: "type",
                        begin: /</,
                        end: />/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        relevance: 0
                    }, {
                        className: "type",
                        begin: /[,:]\s*/,
                        end: /[<\(,){\s]|$/,
                        excludeBegin: !0,
                        returnEnd: !0
                    }, h, g]
                }, d, {
                    className: "meta",
                    begin: "^#!/usr/bin/env",
                    end: "$",
                    illegal: "\n"
                }, c]
            }
        }
    },
    246: function(e) {
        e.exports = function(e) {
            let t = e.regex
              , s = {
                begin: /<\/?[A-Za-z_]/,
                end: ">",
                subLanguage: "xml",
                relevance: 0
            }
              , l = {
                variants: [{
                    begin: /\[.+?\]\[.*?\]/,
                    relevance: 0
                }, {
                    begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                    relevance: 2
                }, {
                    begin: t.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
                    relevance: 2
                }, {
                    begin: /\[.+?\]\([./?&#].*?\)/,
                    relevance: 1
                }, {
                    begin: /\[.*?\]\(.*?\)/,
                    relevance: 0
                }],
                returnBegin: !0,
                contains: [{
                    match: /\[(?=\])/
                }, {
                    className: "string",
                    relevance: 0,
                    begin: "\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    returnEnd: !0
                }, {
                    className: "link",
                    relevance: 0,
                    begin: "\\]\\(",
                    end: "\\)",
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {
                    className: "symbol",
                    relevance: 0,
                    begin: "\\]\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    excludeEnd: !0
                }]
            }
              , c = {
                className: "strong",
                contains: [],
                variants: [{
                    begin: /_{2}(?!\s)/,
                    end: /_{2}/
                }, {
                    begin: /\*{2}(?!\s)/,
                    end: /\*{2}/
                }]
            }
              , u = {
                className: "emphasis",
                contains: [],
                variants: [{
                    begin: /\*(?![*\s])/,
                    end: /\*/
                }, {
                    begin: /_(?![_\s])/,
                    end: /_/,
                    relevance: 0
                }]
            }
              , d = e.inherit(c, {
                contains: []
            })
              , h = e.inherit(u, {
                contains: []
            });
            c.contains.push(h),
            u.contains.push(d);
            let g = [s, l];
            [c, u, d, h].forEach(e => {
                e.contains = e.contains.concat(g)
            }
            ),
            g = g.concat(c, u);
            let m = {
                className: "section",
                variants: [{
                    begin: "^#{1,6}",
                    end: "$",
                    contains: g
                }, {
                    begin: "(?=^.+?\\n[=-]{2,}$)",
                    contains: [{
                        begin: "^[=-]*$"
                    }, {
                        begin: "^",
                        end: "\\n",
                        contains: g
                    }]
                }]
            }
              , b = {
                className: "quote",
                begin: "^>\\s+",
                contains: g,
                end: "$"
            };
            return {
                name: "Markdown",
                aliases: ["md", "mkdown", "mkd"],
                contains: [m, s, {
                    className: "bullet",
                    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
                    end: "\\s+",
                    excludeEnd: !0
                }, c, u, b, {
                    className: "code",
                    variants: [{
                        begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
                    }, {
                        begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
                    }, {
                        begin: "```",
                        end: "```+[ ]*$"
                    }, {
                        begin: "~~~",
                        end: "~~~+[ ]*$"
                    }, {
                        begin: "`.+?`"
                    }, {
                        begin: "(?=^( {4}|\\t))",
                        contains: [{
                            begin: "^( {4}|\\t)",
                            end: "(\\n)$"
                        }],
                        relevance: 0
                    }]
                }, {
                    begin: "^[-\\*]{3,}",
                    end: "$"
                }, l, {
                    begin: /^\[[^\n]+\]:/,
                    returnBegin: !0,
                    contains: [{
                        className: "symbol",
                        begin: /\[/,
                        end: /\]/,
                        excludeBegin: !0,
                        excludeEnd: !0
                    }, {
                        className: "link",
                        begin: /:\s*/,
                        end: /$/,
                        excludeBegin: !0
                    }]
                }, {
                    scope: "literal",
                    match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
                }]
            }
        }
    },
    6707: function(e) {
        e.exports = function(e) {
            let t = e.regex
              , s = /(?![A-Za-z0-9])(?![$])/
              , l = t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, s)
              , c = t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, s)
              , u = t.concat(/[A-Z]+/, s)
              , d = {
                scope: "variable",
                match: "\\$+" + l
            }
              , h = {
                scope: "subst",
                variants: [{
                    begin: /\$\w+/
                }, {
                    begin: /\{\$/,
                    end: /\}/
                }]
            }
              , g = e.inherit(e.APOS_STRING_MODE, {
                illegal: null
            })
              , m = e.inherit(e.QUOTE_STRING_MODE, {
                illegal: null,
                contains: e.QUOTE_STRING_MODE.contains.concat(h)
            })
              , b = {
                begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
                end: /[ \t]*(\w+)\b/,
                contains: e.QUOTE_STRING_MODE.contains.concat(h),
                "on:begin": (e, t) => {
                    t.data._beginMatch = e[1] || e[2]
                }
                ,
                "on:end": (e, t) => {
                    t.data._beginMatch !== e[1] && t.ignoreMatch()
                }
            }
              , _ = e.END_SAME_AS_BEGIN({
                begin: /<<<[ \t]*'(\w+)'\n/,
                end: /[ \t]*(\w+)\b/
            })
              , k = "[ 	\n]"
              , y = {
                scope: "string",
                variants: [m, g, b, _]
            }
              , v = {
                scope: "number",
                variants: [{
                    begin: "\\b0[bB][01]+(?:_[01]+)*\\b"
                }, {
                    begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b"
                }, {
                    begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"
                }, {
                    begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
                }],
                relevance: 0
            }
              , x = ["false", "null", "true"]
              , E = ["__CLASS__", "__DIR__", "__FILE__", "__FUNCTION__", "__COMPILER_HALT_OFFSET__", "__LINE__", "__METHOD__", "__NAMESPACE__", "__TRAIT__", "die", "echo", "exit", "include", "include_once", "print", "require", "require_once", "array", "abstract", "and", "as", "binary", "bool", "boolean", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "do", "double", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "enum", "eval", "extends", "final", "finally", "float", "for", "foreach", "from", "global", "goto", "if", "implements", "instanceof", "insteadof", "int", "integer", "interface", "isset", "iterable", "list", "match|0", "mixed", "new", "never", "object", "or", "private", "protected", "public", "readonly", "real", "return", "string", "switch", "throw", "trait", "try", "unset", "use", "var", "void", "while", "xor", "yield"]
              , w = ["Error|0", "AppendIterator", "ArgumentCountError", "ArithmeticError", "ArrayIterator", "ArrayObject", "AssertionError", "BadFunctionCallException", "BadMethodCallException", "CachingIterator", "CallbackFilterIterator", "CompileError", "Countable", "DirectoryIterator", "DivisionByZeroError", "DomainException", "EmptyIterator", "ErrorException", "Exception", "FilesystemIterator", "FilterIterator", "GlobIterator", "InfiniteIterator", "InvalidArgumentException", "IteratorIterator", "LengthException", "LimitIterator", "LogicException", "MultipleIterator", "NoRewindIterator", "OutOfBoundsException", "OutOfRangeException", "OuterIterator", "OverflowException", "ParentIterator", "ParseError", "RangeException", "RecursiveArrayIterator", "RecursiveCachingIterator", "RecursiveCallbackFilterIterator", "RecursiveDirectoryIterator", "RecursiveFilterIterator", "RecursiveIterator", "RecursiveIteratorIterator", "RecursiveRegexIterator", "RecursiveTreeIterator", "RegexIterator", "RuntimeException", "SeekableIterator", "SplDoublyLinkedList", "SplFileInfo", "SplFileObject", "SplFixedArray", "SplHeap", "SplMaxHeap", "SplMinHeap", "SplObjectStorage", "SplObserver", "SplPriorityQueue", "SplQueue", "SplStack", "SplSubject", "SplTempFileObject", "TypeError", "UnderflowException", "UnexpectedValueException", "UnhandledMatchError", "ArrayAccess", "BackedEnum", "Closure", "Fiber", "Generator", "Iterator", "IteratorAggregate", "Serializable", "Stringable", "Throwable", "Traversable", "UnitEnum", "WeakReference", "WeakMap", "Directory", "__PHP_Incomplete_Class", "parent", "php_user_filter", "self", "static", "stdClass"]
              , A = {
                keyword: E,
                literal: (e => {
                    let t = [];
                    return e.forEach(e => {
                        t.push(e),
                        e.toLowerCase() === e ? t.push(e.toUpperCase()) : t.push(e.toLowerCase())
                    }
                    ),
                    t
                }
                )(x),
                built_in: w
            }
              , normalizeKeywords = e => e.map(e => e.replace(/\|\d+$/, ""))
              , C = {
                variants: [{
                    match: [/new/, t.concat(k, "+"), t.concat("(?!", normalizeKeywords(w).join("\\b|"), "\\b)"), c],
                    scope: {
                        1: "keyword",
                        4: "title.class"
                    }
                }]
            }
              , S = t.concat(l, "\\b(?!\\()")
              , D = {
                variants: [{
                    match: [t.concat(/::/, t.lookahead(/(?!class\b)/)), S],
                    scope: {
                        2: "variable.constant"
                    }
                }, {
                    match: [/::/, /class/],
                    scope: {
                        2: "variable.language"
                    }
                }, {
                    match: [c, t.concat(/::/, t.lookahead(/(?!class\b)/)), S],
                    scope: {
                        1: "title.class",
                        3: "variable.constant"
                    }
                }, {
                    match: [c, t.concat("::", t.lookahead(/(?!class\b)/))],
                    scope: {
                        1: "title.class"
                    }
                }, {
                    match: [c, /::/, /class/],
                    scope: {
                        1: "title.class",
                        3: "variable.language"
                    }
                }]
            }
              , N = {
                scope: "attr",
                match: t.concat(l, t.lookahead(":"), t.lookahead(/(?!::)/))
            }
              , M = {
                relevance: 0,
                begin: /\(/,
                end: /\)/,
                keywords: A,
                contains: [N, d, D, e.C_BLOCK_COMMENT_MODE, y, v, C]
            }
              , I = {
                relevance: 0,
                match: [/\b/, t.concat("(?!fn\\b|function\\b|", normalizeKeywords(E).join("\\b|"), "|", normalizeKeywords(w).join("\\b|"), "\\b)"), l, t.concat(k, "*"), t.lookahead(/(?=\()/)],
                scope: {
                    3: "title.function.invoke"
                },
                contains: [M]
            };
            M.contains.push(I);
            let T = [N, D, e.C_BLOCK_COMMENT_MODE, y, v, C]
              , O = {
                begin: t.concat(/#\[\s*\\?/, t.either(c, u)),
                beginScope: "meta",
                end: /]/,
                endScope: "meta",
                keywords: {
                    literal: x,
                    keyword: ["new", "array"]
                },
                contains: [{
                    begin: /\[/,
                    end: /]/,
                    keywords: {
                        literal: x,
                        keyword: ["new", "array"]
                    },
                    contains: ["self", ...T]
                }, ...T, {
                    scope: "meta",
                    variants: [{
                        match: c
                    }, {
                        match: u
                    }]
                }]
            };
            return {
                case_insensitive: !1,
                keywords: A,
                contains: [O, e.HASH_COMMENT_MODE, e.COMMENT("//", "$"), e.COMMENT("/\\*", "\\*/", {
                    contains: [{
                        scope: "doctag",
                        match: "@[A-Za-z]+"
                    }]
                }), {
                    match: /__halt_compiler\(\);/,
                    keywords: "__halt_compiler",
                    starts: {
                        scope: "comment",
                        end: e.MATCH_NOTHING_RE,
                        contains: [{
                            match: /\?>/,
                            scope: "meta",
                            endsParent: !0
                        }]
                    }
                }, {
                    scope: "meta",
                    variants: [{
                        begin: /<\?php/,
                        relevance: 10
                    }, {
                        begin: /<\?=/
                    }, {
                        begin: /<\?/,
                        relevance: .1
                    }, {
                        begin: /\?>/
                    }]
                }, {
                    scope: "variable.language",
                    match: /\$this\b/
                }, d, I, D, {
                    match: [/const/, /\s/, l],
                    scope: {
                        1: "keyword",
                        3: "variable.constant"
                    }
                }, C, {
                    scope: "function",
                    relevance: 0,
                    beginKeywords: "fn function",
                    end: /[;{]/,
                    excludeEnd: !0,
                    illegal: "[$%\\[]",
                    contains: [{
                        beginKeywords: "use"
                    }, e.UNDERSCORE_TITLE_MODE, {
                        begin: "=>",
                        endsParent: !0
                    }, {
                        scope: "params",
                        begin: "\\(",
                        end: "\\)",
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: A,
                        contains: ["self", O, d, D, e.C_BLOCK_COMMENT_MODE, y, v]
                    }]
                }, {
                    scope: "class",
                    variants: [{
                        beginKeywords: "enum",
                        illegal: /[($"]/
                    }, {
                        beginKeywords: "class interface trait",
                        illegal: /[:($"]/
                    }],
                    relevance: 0,
                    end: /\{/,
                    excludeEnd: !0,
                    contains: [{
                        beginKeywords: "extends implements"
                    }, e.UNDERSCORE_TITLE_MODE]
                }, {
                    beginKeywords: "namespace",
                    relevance: 0,
                    end: ";",
                    illegal: /[.']/,
                    contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {
                        scope: "title.class"
                    })]
                }, {
                    beginKeywords: "use",
                    relevance: 0,
                    end: ";",
                    contains: [{
                        match: /\b(as|const|function)\b/,
                        scope: "keyword"
                    }, e.UNDERSCORE_TITLE_MODE]
                }, y, v]
            }
        }
    },
    5869: function(e) {
        e.exports = function(e) {
            return {
                name: "Plain text",
                aliases: ["text", "txt"],
                disableAutodetect: !0
            }
        }
    },
    3542: function(e) {
        e.exports = function(e) {
            let t = e.regex
              , s = /[\p{XID_Start}_]\p{XID_Continue}*/u
              , l = ["and", "as", "assert", "async", "await", "break", "case", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "match", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"]
              , c = {
                $pattern: /[A-Za-z]\w+|__\w+__/,
                keyword: l,
                built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"],
                literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
                type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"]
            }
              , u = {
                className: "meta",
                begin: /^(>>>|\.\.\.) /
            }
              , d = {
                className: "subst",
                begin: /\{/,
                end: /\}/,
                keywords: c,
                illegal: /#/
            }
              , h = {
                begin: /\{\{/,
                relevance: 0
            }
              , g = {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE],
                variants: [{
                    begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                    end: /'''/,
                    contains: [e.BACKSLASH_ESCAPE, u],
                    relevance: 10
                }, {
                    begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                    end: /"""/,
                    contains: [e.BACKSLASH_ESCAPE, u],
                    relevance: 10
                }, {
                    begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                    end: /'''/,
                    contains: [e.BACKSLASH_ESCAPE, u, h, d]
                }, {
                    begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                    end: /"""/,
                    contains: [e.BACKSLASH_ESCAPE, u, h, d]
                }, {
                    begin: /([uU]|[rR])'/,
                    end: /'/,
                    relevance: 10
                }, {
                    begin: /([uU]|[rR])"/,
                    end: /"/,
                    relevance: 10
                }, {
                    begin: /([bB]|[bB][rR]|[rR][bB])'/,
                    end: /'/
                }, {
                    begin: /([bB]|[bB][rR]|[rR][bB])"/,
                    end: /"/
                }, {
                    begin: /([fF][rR]|[rR][fF]|[fF])'/,
                    end: /'/,
                    contains: [e.BACKSLASH_ESCAPE, h, d]
                }, {
                    begin: /([fF][rR]|[rR][fF]|[fF])"/,
                    end: /"/,
                    contains: [e.BACKSLASH_ESCAPE, h, d]
                }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
            }
              , m = "[0-9](_?[0-9])*"
              , b = `(\\b(${m}))?\\.(${m})|\\b(${m})\\.`
              , _ = `\\b|${l.join("|")}`
              , k = {
                className: "number",
                relevance: 0,
                variants: [{
                    begin: `(\\b(${m})|(${b}))[eE][+-]?(${m})[jJ]?(?=${_})`
                }, {
                    begin: `(${b})[jJ]?`
                }, {
                    begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${_})`
                }, {
                    begin: `\\b0[bB](_?[01])+[lL]?(?=${_})`
                }, {
                    begin: `\\b0[oO](_?[0-7])+[lL]?(?=${_})`
                }, {
                    begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${_})`
                }, {
                    begin: `\\b(${m})[jJ](?=${_})`
                }]
            }
              , y = {
                className: "comment",
                begin: t.lookahead(/# type:/),
                end: /$/,
                keywords: c,
                contains: [{
                    begin: /# type:/
                }, {
                    begin: /#/,
                    end: /\b\B/,
                    endsWithParent: !0
                }]
            }
              , v = {
                className: "params",
                variants: [{
                    className: "",
                    begin: /\(\s*\)/,
                    skip: !0
                }, {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: c,
                    contains: ["self", u, k, g, e.HASH_COMMENT_MODE]
                }]
            };
            return d.contains = [g, k, u],
            {
                name: "Python",
                aliases: ["py", "gyp", "ipython"],
                unicodeRegex: !0,
                keywords: c,
                illegal: /(<\/|\?)|=>/,
                contains: [u, k, {
                    scope: "variable.language",
                    match: /\bself\b/
                }, {
                    beginKeywords: "if",
                    relevance: 0
                }, {
                    match: /\bor\b/,
                    scope: "keyword"
                }, g, y, e.HASH_COMMENT_MODE, {
                    match: [/\bdef/, /\s+/, s],
                    scope: {
                        1: "keyword",
                        3: "title.function"
                    },
                    contains: [v]
                }, {
                    variants: [{
                        match: [/\bclass/, /\s+/, s, /\s*/, /\(\s*/, s, /\s*\)/]
                    }, {
                        match: [/\bclass/, /\s+/, s]
                    }],
                    scope: {
                        1: "keyword",
                        3: "title.class",
                        6: "title.class.inherited"
                    }
                }, {
                    className: "meta",
                    begin: /^[\t ]*@/,
                    end: /(?=#)|$/,
                    contains: [k, v, g]
                }]
            }
        }
    },
    3718: function(e) {
        e.exports = function(e) {
            let t = e.regex
              , s = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)"
              , l = t.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/)
              , c = t.concat(l, /(::\w+)*/)
              , u = {
                "variable.constant": ["__FILE__", "__LINE__", "__ENCODING__"],
                "variable.language": ["self", "super"],
                keyword: ["alias", "and", "begin", "BEGIN", "break", "case", "class", "defined", "do", "else", "elsif", "end", "END", "ensure", "for", "if", "in", "module", "next", "not", "or", "redo", "require", "rescue", "retry", "return", "then", "undef", "unless", "until", "when", "while", "yield", "include", "extend", "prepend", "public", "private", "protected", "raise", "throw"],
                built_in: ["proc", "lambda", "attr_accessor", "attr_reader", "attr_writer", "define_method", "private_constant", "module_function"],
                literal: ["true", "false", "nil"]
            }
              , d = {
                className: "doctag",
                begin: "@[A-Za-z]+"
            }
              , h = {
                begin: "#<",
                end: ">"
            }
              , g = [e.COMMENT("#", "$", {
                contains: [d]
            }), e.COMMENT("^=begin", "^=end", {
                contains: [d],
                relevance: 10
            }), e.COMMENT("^__END__", e.MATCH_NOTHING_RE)]
              , m = {
                className: "subst",
                begin: /#\{/,
                end: /\}/,
                keywords: u
            }
              , b = {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE, m],
                variants: [{
                    begin: /'/,
                    end: /'/
                }, {
                    begin: /"/,
                    end: /"/
                }, {
                    begin: /`/,
                    end: /`/
                }, {
                    begin: /%[qQwWx]?\(/,
                    end: /\)/
                }, {
                    begin: /%[qQwWx]?\[/,
                    end: /\]/
                }, {
                    begin: /%[qQwWx]?\{/,
                    end: /\}/
                }, {
                    begin: /%[qQwWx]?</,
                    end: />/
                }, {
                    begin: /%[qQwWx]?\//,
                    end: /\//
                }, {
                    begin: /%[qQwWx]?%/,
                    end: /%/
                }, {
                    begin: /%[qQwWx]?-/,
                    end: /-/
                }, {
                    begin: /%[qQwWx]?\|/,
                    end: /\|/
                }, {
                    begin: /\B\?(\\\d{1,3})/
                }, {
                    begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
                }, {
                    begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
                }, {
                    begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
                }, {
                    begin: /\B\?\\(c|C-)[\x20-\x7e]/
                }, {
                    begin: /\B\?\\?\S/
                }, {
                    begin: t.concat(/<<[-~]?'?/, t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                    contains: [e.END_SAME_AS_BEGIN({
                        begin: /(\w+)/,
                        end: /(\w+)/,
                        contains: [e.BACKSLASH_ESCAPE, m]
                    })]
                }]
            }
              , _ = "[0-9](_?[0-9])*"
              , k = {
                className: "number",
                relevance: 0,
                variants: [{
                    begin: `\\b([1-9](_?[0-9])*|0)(\\.(${_}))?([eE][+-]?(${_})|r)?i?\\b`
                }, {
                    begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
                }, {
                    begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
                }, {
                    begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
                }, {
                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
                }, {
                    begin: "\\b0(_?[0-7])+r?i?\\b"
                }]
            }
              , y = {
                variants: [{
                    match: /\(\)/
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /(?=\))/,
                    excludeBegin: !0,
                    endsParent: !0,
                    keywords: u
                }]
            }
              , v = [b, {
                variants: [{
                    match: [/class\s+/, c, /\s+<\s+/, c]
                }, {
                    match: [/\b(class|module)\s+/, c]
                }],
                scope: {
                    2: "title.class",
                    4: "title.class.inherited"
                },
                keywords: u
            }, {
                match: [/(include|extend)\s+/, c],
                scope: {
                    2: "title.class"
                },
                keywords: u
            }, {
                relevance: 0,
                match: [c, /\.new[. (]/],
                scope: {
                    1: "title.class"
                }
            }, {
                relevance: 0,
                match: /\b[A-Z][A-Z_0-9]+\b/,
                className: "variable.constant"
            }, {
                relevance: 0,
                match: l,
                scope: "title.class"
            }, {
                match: [/def/, /\s+/, s],
                scope: {
                    1: "keyword",
                    3: "title.function"
                },
                contains: [y]
            }, {
                begin: e.IDENT_RE + "::"
            }, {
                className: "symbol",
                begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                relevance: 0
            }, {
                className: "symbol",
                begin: ":(?!\\s)",
                contains: [b, {
                    begin: s
                }],
                relevance: 0
            }, k, {
                className: "variable",
                begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
            }, {
                className: "params",
                begin: /\|(?!=)/,
                end: /\|/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0,
                keywords: u
            }, {
                begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
                keywords: "unless",
                contains: [{
                    className: "regexp",
                    contains: [e.BACKSLASH_ESCAPE, m],
                    illegal: /\n/,
                    variants: [{
                        begin: "/",
                        end: "/[a-z]*"
                    }, {
                        begin: /%r\{/,
                        end: /\}[a-z]*/
                    }, {
                        begin: "%r\\(",
                        end: "\\)[a-z]*"
                    }, {
                        begin: "%r!",
                        end: "![a-z]*"
                    }, {
                        begin: "%r\\[",
                        end: "\\][a-z]*"
                    }]
                }].concat(h, g),
                relevance: 0
            }].concat(h, g);
            m.contains = v,
            y.contains = v;
            let x = [{
                begin: /^\s*=>/,
                starts: {
                    end: "$",
                    contains: v
                }
            }, {
                className: "meta.prompt",
                begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
                starts: {
                    end: "$",
                    keywords: u,
                    contains: v
                }
            }];
            return g.unshift(h),
            {
                name: "Ruby",
                aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
                keywords: u,
                illegal: /\/\*/,
                contains: [e.SHEBANG({
                    binary: "ruby"
                })].concat(x).concat(g).concat(v)
            }
        }
    },
    127: function(e) {
        e.exports = function(e) {
            let t = e.regex
              , s = /(r#)?/
              , l = t.concat(s, e.UNDERSCORE_IDENT_RE)
              , c = t.concat(s, e.IDENT_RE)
              , u = {
                className: "title.function.invoke",
                relevance: 0,
                begin: t.concat(/\b/, /(?!let|for|while|if|else|match\b)/, c, t.lookahead(/\s*\(/))
            }
              , d = "([ui](8|16|32|64|128|size)|f(32|64))?"
              , h = ["drop ", "Copy", "Send", "Sized", "Sync", "Drop", "Fn", "FnMut", "FnOnce", "ToOwned", "Clone", "Debug", "PartialEq", "PartialOrd", "Eq", "Ord", "AsRef", "AsMut", "Into", "From", "Default", "Iterator", "Extend", "IntoIterator", "DoubleEndedIterator", "ExactSizeIterator", "SliceConcatExt", "ToString", "assert!", "assert_eq!", "bitflags!", "bytes!", "cfg!", "col!", "concat!", "concat_idents!", "debug_assert!", "debug_assert_eq!", "env!", "eprintln!", "panic!", "file!", "format!", "format_args!", "include_bytes!", "include_str!", "line!", "local_data_key!", "module_path!", "option_env!", "print!", "println!", "select!", "stringify!", "try!", "unimplemented!", "unreachable!", "vec!", "write!", "writeln!", "macro_rules!", "assert_ne!", "debug_assert_ne!"]
              , g = ["i8", "i16", "i32", "i64", "i128", "isize", "u8", "u16", "u32", "u64", "u128", "usize", "f32", "f64", "str", "char", "bool", "Box", "Option", "Result", "String", "Vec"];
            return {
                name: "Rust",
                aliases: ["rs"],
                keywords: {
                    $pattern: e.IDENT_RE + "!?",
                    type: g,
                    keyword: ["abstract", "as", "async", "await", "become", "box", "break", "const", "continue", "crate", "do", "dyn", "else", "enum", "extern", "false", "final", "fn", "for", "if", "impl", "in", "let", "loop", "macro", "match", "mod", "move", "mut", "override", "priv", "pub", "ref", "return", "self", "Self", "static", "struct", "super", "trait", "true", "try", "type", "typeof", "union", "unsafe", "unsized", "use", "virtual", "where", "while", "yield"],
                    literal: ["true", "false", "Some", "None", "Ok", "Err"],
                    built_in: h
                },
                illegal: "</",
                contains: [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
                    contains: ["self"]
                }), e.inherit(e.QUOTE_STRING_MODE, {
                    begin: /b?"/,
                    illegal: null
                }), {
                    className: "symbol",
                    begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/
                }, {
                    scope: "string",
                    variants: [{
                        begin: /b?r(#*)"(.|\n)*?"\1(?!#)/
                    }, {
                        begin: /b?'/,
                        end: /'/,
                        contains: [{
                            scope: "char.escape",
                            match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/
                        }]
                    }]
                }, {
                    className: "number",
                    variants: [{
                        begin: "\\b0b([01_]+)" + d
                    }, {
                        begin: "\\b0o([0-7_]+)" + d
                    }, {
                        begin: "\\b0x([A-Fa-f0-9_]+)" + d
                    }, {
                        begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + d
                    }],
                    relevance: 0
                }, {
                    begin: [/fn/, /\s+/, l],
                    className: {
                        1: "keyword",
                        3: "title.function"
                    }
                }, {
                    className: "meta",
                    begin: "#!?\\[",
                    end: "\\]",
                    contains: [{
                        className: "string",
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE]
                    }]
                }, {
                    begin: [/let/, /\s+/, /(?:mut\s+)?/, l],
                    className: {
                        1: "keyword",
                        3: "keyword",
                        4: "variable"
                    }
                }, {
                    begin: [/for/, /\s+/, l, /\s+/, /in/],
                    className: {
                        1: "keyword",
                        3: "variable",
                        5: "keyword"
                    }
                }, {
                    begin: [/type/, /\s+/, l],
                    className: {
                        1: "keyword",
                        3: "title.class"
                    }
                }, {
                    begin: [/(?:trait|enum|struct|union|impl|for)/, /\s+/, l],
                    className: {
                        1: "keyword",
                        3: "title.class"
                    }
                }, {
                    begin: e.IDENT_RE + "::",
                    keywords: {
                        keyword: "Self",
                        built_in: h,
                        type: g
                    }
                }, {
                    className: "punctuation",
                    begin: "->"
                }, u]
            }
        }
    },
    2632: function(e) {
        function source(e) {
            return e ? "string" == typeof e ? e : e.source : null
        }
        function lookahead(e) {
            return concat("(?=", e, ")")
        }
        function concat(...e) {
            let t = e.map(e => source(e)).join("");
            return t
        }
        function either(...e) {
            let t = function(e) {
                let t = e[e.length - 1];
                return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1),
                t) : {}
            }(e)
              , s = "(" + (t.capture ? "" : "?:") + e.map(e => source(e)).join("|") + ")";
            return s
        }
        let keywordWrapper = e => concat(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/)
          , t = ["Protocol", "Type"].map(keywordWrapper)
          , s = ["init", "self"].map(keywordWrapper)
          , l = ["Any", "Self"]
          , c = ["actor", "any", "associatedtype", "async", "await", /as\?/, /as!/, "as", "borrowing", "break", "case", "catch", "class", "consume", "consuming", "continue", "convenience", "copy", "default", "defer", "deinit", "didSet", "distributed", "do", "dynamic", "each", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "isolated", "nonisolated", "lazy", "let", "macro", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "package", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"]
          , u = ["false", "nil", "true"]
          , d = ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"]
          , h = ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warning"]
          , g = ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"]
          , m = either(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/)
          , b = either(m, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/)
          , _ = concat(m, b, "*")
          , k = either(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/)
          , y = either(k, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/)
          , v = concat(k, y, "*")
          , x = concat(/[A-Z]/, y, "*")
          , E = ["attached", "autoclosure", concat(/convention\(/, either("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "freestanding", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", concat(/objc\(/, v, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "resultBuilder", "Sendable", "testable", "UIApplicationMain", "unchecked", "unknown", "usableFromInline", "warn_unqualified_access"]
          , w = ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"];
        e.exports = function(e) {
            let m = {
                match: /\s+/,
                relevance: 0
            }
              , k = e.COMMENT("/\\*", "\\*/", {
                contains: ["self"]
            })
              , A = [e.C_LINE_COMMENT_MODE, k]
              , C = {
                match: [/\./, either(...t, ...s)],
                className: {
                    2: "keyword"
                }
            }
              , S = {
                match: concat(/\./, either(...c)),
                relevance: 0
            }
              , D = c.filter(e => "string" == typeof e).concat(["_|0"])
              , N = c.filter(e => "string" != typeof e).concat(l).map(keywordWrapper)
              , M = {
                variants: [{
                    className: "keyword",
                    match: either(...N, ...s)
                }]
            }
              , I = {
                $pattern: either(/\b\w+/, /#\w+/),
                keyword: D.concat(h),
                literal: u
            }
              , T = [C, S, M]
              , O = {
                match: concat(/\./, either(...g)),
                relevance: 0
            }
              , L = {
                className: "built_in",
                match: concat(/\b/, either(...g), /(?=\()/)
            }
              , R = [O, L]
              , F = {
                match: /->/,
                relevance: 0
            }
              , z = {
                className: "operator",
                relevance: 0,
                variants: [{
                    match: _
                }, {
                    match: `\\.(\\.|${b})+`
                }]
            }
              , B = [F, z]
              , q = "([0-9]_*)+"
              , P = "([0-9a-fA-F]_*)+"
              , $ = {
                className: "number",
                relevance: 0,
                variants: [{
                    match: `\\b(${q})(\\.(${q}))?([eE][+-]?(${q}))?\\b`
                }, {
                    match: `\\b0x(${P})(\\.(${P}))?([pP][+-]?(${q}))?\\b`
                }, {
                    match: /\b0o([0-7]_*)+\b/
                }, {
                    match: /\b0b([01]_*)+\b/
                }]
            }
              , ESCAPED_CHARACTER = (e="") => ({
                className: "subst",
                variants: [{
                    match: concat(/\\/, e, /[0\\tnr"']/)
                }, {
                    match: concat(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/)
                }]
            })
              , ESCAPED_NEWLINE = (e="") => ({
                className: "subst",
                match: concat(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
            })
              , INTERPOLATION = (e="") => ({
                className: "subst",
                label: "interpol",
                begin: concat(/\\/, e, /\(/),
                end: /\)/
            })
              , MULTILINE_STRING = (e="") => ({
                begin: concat(e, /"""/),
                end: concat(/"""/, e),
                contains: [ESCAPED_CHARACTER(e), ESCAPED_NEWLINE(e), INTERPOLATION(e)]
            })
              , SINGLE_LINE_STRING = (e="") => ({
                begin: concat(e, /"/),
                end: concat(/"/, e),
                contains: [ESCAPED_CHARACTER(e), INTERPOLATION(e)]
            })
              , j = {
                className: "string",
                variants: [MULTILINE_STRING(), MULTILINE_STRING("#"), MULTILINE_STRING("##"), MULTILINE_STRING("###"), SINGLE_LINE_STRING(), SINGLE_LINE_STRING("#"), SINGLE_LINE_STRING("##"), SINGLE_LINE_STRING("###")]
            }
              , U = [e.BACKSLASH_ESCAPE, {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [e.BACKSLASH_ESCAPE]
            }]
              , EXTENDED_REGEXP_LITERAL = e => {
                let t = concat(e, /\//)
                  , s = concat(/\//, e);
                return {
                    begin: t,
                    end: s,
                    contains: [...U, {
                        scope: "comment",
                        begin: `#(?!.*${s})`,
                        end: /$/
                    }]
                }
            }
              , H = {
                scope: "regexp",
                variants: [EXTENDED_REGEXP_LITERAL("###"), EXTENDED_REGEXP_LITERAL("##"), EXTENDED_REGEXP_LITERAL("#"), {
                    begin: /\/[^\s](?=[^/\n]*\/)/,
                    end: /\//,
                    contains: U
                }]
            }
              , Z = {
                match: concat(/`/, v, /`/)
            }
              , G = {
                className: "variable",
                match: `\\$${y}+`
            }
              , K = [Z, {
                className: "variable",
                match: /\$\d+/
            }, G]
              , V = {
                match: /(@|#(un)?)available/,
                scope: "keyword",
                starts: {
                    contains: [{
                        begin: /\(/,
                        end: /\)/,
                        keywords: w,
                        contains: [...B, $, j]
                    }]
                }
            }
              , W = {
                scope: "keyword",
                match: concat(/@/, either(...E), lookahead(either(/\(/, /\s+/)))
            }
              , X = {
                scope: "meta",
                match: concat(/@/, v)
            }
              , J = [V, W, X]
              , Q = {
                match: lookahead(/\b[A-Z]/),
                relevance: 0,
                contains: [{
                    className: "type",
                    match: concat(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, y, "+")
                }, {
                    className: "type",
                    match: x,
                    relevance: 0
                }, {
                    match: /[?!]+/,
                    relevance: 0
                }, {
                    match: /\.\.\./,
                    relevance: 0
                }, {
                    match: concat(/\s+&\s+/, lookahead(x)),
                    relevance: 0
                }]
            }
              , Y = {
                begin: /</,
                end: />/,
                keywords: I,
                contains: [...A, ...T, ...J, F, Q]
            };
            Q.contains.push(Y);
            let ee = {
                match: concat(v, /\s*:/),
                keywords: "_|0",
                relevance: 0
            }
              , et = {
                begin: /\(/,
                end: /\)/,
                relevance: 0,
                keywords: I,
                contains: ["self", ee, ...A, H, ...T, ...R, ...B, $, j, ...K, ...J, Q]
            }
              , en = {
                begin: /</,
                end: />/,
                keywords: "repeat each",
                contains: [...A, Q]
            }
              , er = {
                begin: either(lookahead(concat(v, /\s*:/)), lookahead(concat(v, /\s+/, v, /\s*:/))),
                end: /:/,
                relevance: 0,
                contains: [{
                    className: "keyword",
                    match: /\b_\b/
                }, {
                    className: "params",
                    match: v
                }]
            }
              , ei = {
                begin: /\(/,
                end: /\)/,
                keywords: I,
                contains: [er, ...A, ...T, ...B, $, j, ...J, Q, et],
                endsParent: !0,
                illegal: /["']/
            }
              , es = {
                match: [/(func|macro)/, /\s+/, either(Z.match, v, _)],
                className: {
                    1: "keyword",
                    3: "title.function"
                },
                contains: [en, ei, m],
                illegal: [/\[/, /%/]
            }
              , ea = {
                begin: [/precedencegroup/, /\s+/, x],
                className: {
                    1: "keyword",
                    3: "title"
                },
                contains: [Q],
                keywords: [...d, ...u],
                end: /}/
            }
              , eo = {
                begin: [/(struct|protocol|class|extension|enum|actor)/, /\s+/, v, /\s*/],
                beginScope: {
                    1: "keyword",
                    3: "title.class"
                },
                keywords: I,
                contains: [en, ...T, {
                    begin: /:/,
                    end: /\{/,
                    keywords: I,
                    contains: [{
                        scope: "title.class.inherited",
                        match: x
                    }, ...T],
                    relevance: 0
                }]
            };
            for (let e of j.variants) {
                let t = e.contains.find(e => "interpol" === e.label);
                t.keywords = I;
                let s = [...T, ...R, ...B, $, j, ...K];
                t.contains = [...s, {
                    begin: /\(/,
                    end: /\)/,
                    contains: ["self", ...s]
                }]
            }
            return {
                name: "Swift",
                keywords: I,
                contains: [...A, es, {
                    match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
                    className: {
                        1: "keyword"
                    },
                    contains: [en, ei, m],
                    illegal: /\[|%/
                }, {
                    match: [/class\b/, /\s+/, /func\b/, /\s+/, /\b[A-Za-z_][A-Za-z0-9_]*\b/],
                    scope: {
                        1: "keyword",
                        3: "keyword",
                        5: "title.function"
                    }
                }, {
                    match: [/class\b/, /\s+/, /var\b/],
                    scope: {
                        1: "keyword",
                        3: "keyword"
                    }
                }, eo, {
                    match: [/operator/, /\s+/, _],
                    className: {
                        1: "keyword",
                        3: "title"
                    }
                }, ea, {
                    beginKeywords: "import",
                    end: /$/,
                    contains: [...A],
                    relevance: 0
                }, H, ...T, ...R, ...B, $, j, ...K, ...J, Q, et]
            }
        }
    },
    9530: function(e) {
        let t = "[A-Za-z$_][0-9A-Za-z$_]*"
          , s = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"]
          , l = ["true", "false", "null", "undefined", "NaN", "Infinity"]
          , c = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"]
          , u = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]
          , d = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"]
          , h = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"]
          , g = [].concat(d, c, u);
        e.exports = function(e) {
            let m = e.regex
              , b = function(e) {
                var m;
                let b = e.regex
                  , hasClosingTag = (e, {after: t}) => {
                    let s = "</" + e[0].slice(1)
                      , l = e.input.indexOf(s, t);
                    return -1 !== l
                }
                  , _ = {
                    begin: "<>",
                    end: "</>"
                }
                  , k = {
                    begin: /<[A-Za-z0-9\\._:-]+/,
                    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                    isTrulyOpeningTag: (e, t) => {
                        let s;
                        let l = e[0].length + e.index
                          , c = e.input[l];
                        if ("<" === c || "," === c) {
                            t.ignoreMatch();
                            return
                        }
                        ">" !== c || hasClosingTag(e, {
                            after: l
                        }) || t.ignoreMatch();
                        let u = e.input.substring(l);
                        if ((s = u.match(/^\s*=/)) || (s = u.match(/^\s+extends\s+/)) && 0 === s.index) {
                            t.ignoreMatch();
                            return
                        }
                    }
                }
                  , y = {
                    $pattern: t,
                    keyword: s,
                    literal: l,
                    built_in: g,
                    "variable.language": h
                }
                  , v = "[0-9](_?[0-9])*"
                  , x = `\\.(${v})`
                  , E = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*"
                  , w = {
                    className: "number",
                    variants: [{
                        begin: `(\\b(${E})((${x})|\\.)?|(${x}))[eE][+-]?(${v})\\b`
                    }, {
                        begin: `\\b(${E})\\b((${x})\\b|\\.)?|(${x})\\b`
                    }, {
                        begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                    }, {
                        begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                    }, {
                        begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                    }, {
                        begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                    }, {
                        begin: "\\b0[0-7]+n?\\b"
                    }],
                    relevance: 0
                }
                  , A = {
                    className: "subst",
                    begin: "\\$\\{",
                    end: "\\}",
                    keywords: y,
                    contains: []
                }
                  , C = {
                    begin: ".?html`",
                    end: "",
                    starts: {
                        end: "`",
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, A],
                        subLanguage: "xml"
                    }
                }
                  , S = {
                    begin: ".?css`",
                    end: "",
                    starts: {
                        end: "`",
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, A],
                        subLanguage: "css"
                    }
                }
                  , D = {
                    begin: ".?gql`",
                    end: "",
                    starts: {
                        end: "`",
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, A],
                        subLanguage: "graphql"
                    }
                }
                  , N = {
                    className: "string",
                    begin: "`",
                    end: "`",
                    contains: [e.BACKSLASH_ESCAPE, A]
                }
                  , M = e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                    relevance: 0,
                    contains: [{
                        begin: "(?=@[A-Za-z]+)",
                        relevance: 0,
                        contains: [{
                            className: "doctag",
                            begin: "@[A-Za-z]+"
                        }, {
                            className: "type",
                            begin: "\\{",
                            end: "\\}",
                            excludeEnd: !0,
                            excludeBegin: !0,
                            relevance: 0
                        }, {
                            className: "variable",
                            begin: t + "(?=\\s*(-)|$)",
                            endsParent: !0,
                            relevance: 0
                        }, {
                            begin: /(?=[^\n])\s/,
                            relevance: 0
                        }]
                    }]
                })
                  , I = {
                    className: "comment",
                    variants: [M, e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
                }
                  , T = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, C, S, D, N, {
                    match: /\$\d+/
                }, w];
                A.contains = T.concat({
                    begin: /\{/,
                    end: /\}/,
                    keywords: y,
                    contains: ["self"].concat(T)
                });
                let O = [].concat(I, A.contains)
                  , L = O.concat([{
                    begin: /(\s*)\(/,
                    end: /\)/,
                    keywords: y,
                    contains: ["self"].concat(O)
                }])
                  , R = {
                    className: "params",
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: y,
                    contains: L
                }
                  , F = {
                    variants: [{
                        match: [/class/, /\s+/, t, /\s+/, /extends/, /\s+/, b.concat(t, "(", b.concat(/\./, t), ")*")],
                        scope: {
                            1: "keyword",
                            3: "title.class",
                            5: "keyword",
                            7: "title.class.inherited"
                        }
                    }, {
                        match: [/class/, /\s+/, t],
                        scope: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }]
                }
                  , z = {
                    relevance: 0,
                    match: b.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                    className: "title.class",
                    keywords: {
                        _: [...c, ...u]
                    }
                }
                  , B = {
                    match: b.concat(/\b/, (m = [...d, "super", "import"].map(e => `${e}\\s*\\(`),
                    b.concat("(?!", m.join("|"), ")")), t, b.lookahead(/\s*\(/)),
                    className: "title.function",
                    relevance: 0
                }
                  , q = {
                    begin: b.concat(/\./, b.lookahead(b.concat(t, /(?![0-9A-Za-z$_(])/))),
                    end: t,
                    excludeBegin: !0,
                    keywords: "prototype",
                    className: "property",
                    relevance: 0
                }
                  , P = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>"
                  , $ = {
                    match: [/const|var|let/, /\s+/, t, /\s*/, /=\s*/, /(async\s*)?/, b.lookahead(P)],
                    keywords: "async",
                    className: {
                        1: "keyword",
                        3: "title.function"
                    },
                    contains: [R]
                };
                return {
                    name: "JavaScript",
                    aliases: ["js", "jsx", "mjs", "cjs"],
                    keywords: y,
                    exports: {
                        PARAMS_CONTAINS: L,
                        CLASS_REFERENCE: z
                    },
                    illegal: /#(?![$_A-z])/,
                    contains: [e.SHEBANG({
                        label: "shebang",
                        binary: "node",
                        relevance: 5
                    }), {
                        label: "use_strict",
                        className: "meta",
                        relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, C, S, D, N, I, {
                        match: /\$\d+/
                    }, w, z, {
                        scope: "attr",
                        match: t + b.lookahead(":"),
                        relevance: 0
                    }, $, {
                        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                        keywords: "return throw case",
                        relevance: 0,
                        contains: [I, e.REGEXP_MODE, {
                            className: "function",
                            begin: P,
                            returnBegin: !0,
                            end: "\\s*=>",
                            contains: [{
                                className: "params",
                                variants: [{
                                    begin: e.UNDERSCORE_IDENT_RE,
                                    relevance: 0
                                }, {
                                    className: null,
                                    begin: /\(\s*\)/,
                                    skip: !0
                                }, {
                                    begin: /(\s*)\(/,
                                    end: /\)/,
                                    excludeBegin: !0,
                                    excludeEnd: !0,
                                    keywords: y,
                                    contains: L
                                }]
                            }]
                        }, {
                            begin: /,/,
                            relevance: 0
                        }, {
                            match: /\s+/,
                            relevance: 0
                        }, {
                            variants: [{
                                begin: _.begin,
                                end: _.end
                            }, {
                                match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                            }, {
                                begin: k.begin,
                                "on:begin": k.isTrulyOpeningTag,
                                end: k.end
                            }],
                            subLanguage: "xml",
                            contains: [{
                                begin: k.begin,
                                end: k.end,
                                skip: !0,
                                contains: ["self"]
                            }]
                        }]
                    }, {
                        variants: [{
                            match: [/function/, /\s+/, t, /(?=\s*\()/]
                        }, {
                            match: [/function/, /\s*(?=\()/]
                        }],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        label: "func.def",
                        contains: [R],
                        illegal: /%/
                    }, {
                        beginKeywords: "while if switch catch for"
                    }, {
                        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                        returnBegin: !0,
                        label: "func.def",
                        contains: [R, e.inherit(e.TITLE_MODE, {
                            begin: t,
                            className: "title.function"
                        })]
                    }, {
                        match: /\.\.\./,
                        relevance: 0
                    }, q, {
                        match: "\\$" + t,
                        relevance: 0
                    }, {
                        match: [/\bconstructor(?=\s*\()/],
                        className: {
                            1: "title.function"
                        },
                        contains: [R]
                    }, B, {
                        relevance: 0,
                        match: /\b[A-Z][A-Z_0-9]+\b/,
                        className: "variable.constant"
                    }, F, {
                        match: [/get|set/, /\s+/, t, /(?=\()/],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [{
                            begin: /\(\)/
                        }, R]
                    }, {
                        match: /\$[(.]/
                    }]
                }
            }(e)
              , _ = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"]
              , k = {
                begin: [/namespace/, /\s+/, e.IDENT_RE],
                beginScope: {
                    1: "keyword",
                    3: "title.class"
                }
            }
              , y = {
                beginKeywords: "interface",
                end: /\{/,
                excludeEnd: !0,
                keywords: {
                    keyword: "interface extends",
                    built_in: _
                },
                contains: [b.exports.CLASS_REFERENCE]
            }
              , v = {
                $pattern: t,
                keyword: s.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
                literal: l,
                built_in: g.concat(_),
                "variable.language": h
            }
              , x = {
                className: "meta",
                begin: "@" + t
            }
              , swapMode = (e, t, s) => {
                let l = e.contains.findIndex(e => e.label === t);
                if (-1 === l)
                    throw Error("can not find mode to replace");
                e.contains.splice(l, 1, s)
            }
            ;
            Object.assign(b.keywords, v),
            b.exports.PARAMS_CONTAINS.push(x);
            let E = b.contains.find(e => "attr" === e.scope)
              , w = Object.assign({}, E, {
                match: m.concat(t, m.lookahead(/\s*\?:/))
            });
            b.exports.PARAMS_CONTAINS.push([b.exports.CLASS_REFERENCE, E, w]),
            b.contains = b.contains.concat([x, k, y, w]),
            swapMode(b, "shebang", e.SHEBANG()),
            swapMode(b, "use_strict", {
                className: "meta",
                relevance: 10,
                begin: /^\s*['"]use strict['"]/
            });
            let A = b.contains.find(e => "func.def" === e.label);
            return A.relevance = 0,
            Object.assign(b, {
                name: "TypeScript",
                aliases: ["ts", "tsx", "mts", "cts"]
            }),
            b
        }
    },
    4296: function(e) {
        e.exports = function(e) {
            let t = e.regex
              , s = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u)
              , l = {
                className: "symbol",
                begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
            }
              , c = {
                begin: /\s/,
                contains: [{
                    className: "keyword",
                    begin: /#?[a-z_][a-z1-9_-]+/,
                    illegal: /\n/
                }]
            }
              , u = e.inherit(c, {
                begin: /\(/,
                end: /\)/
            })
              , d = e.inherit(e.APOS_STRING_MODE, {
                className: "string"
            })
              , h = e.inherit(e.QUOTE_STRING_MODE, {
                className: "string"
            })
              , g = {
                endsWithParent: !0,
                illegal: /</,
                relevance: 0,
                contains: [{
                    className: "attr",
                    begin: /[\p{L}0-9._:-]+/u,
                    relevance: 0
                }, {
                    begin: /=\s*/,
                    relevance: 0,
                    contains: [{
                        className: "string",
                        endsParent: !0,
                        variants: [{
                            begin: /"/,
                            end: /"/,
                            contains: [l]
                        }, {
                            begin: /'/,
                            end: /'/,
                            contains: [l]
                        }, {
                            begin: /[^\s"'=<>`]+/
                        }]
                    }]
                }]
            };
            return {
                name: "HTML, XML",
                aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
                case_insensitive: !0,
                unicodeRegex: !0,
                contains: [{
                    className: "meta",
                    begin: /<![a-z]/,
                    end: />/,
                    relevance: 10,
                    contains: [c, h, d, u, {
                        begin: /\[/,
                        end: /\]/,
                        contains: [{
                            className: "meta",
                            begin: /<![a-z]/,
                            end: />/,
                            contains: [c, u, h, d]
                        }]
                    }]
                }, e.COMMENT(/<!--/, /-->/, {
                    relevance: 10
                }), {
                    begin: /<!\[CDATA\[/,
                    end: /\]\]>/,
                    relevance: 10
                }, l, {
                    className: "meta",
                    end: /\?>/,
                    variants: [{
                        begin: /<\?xml/,
                        relevance: 10,
                        contains: [h]
                    }, {
                        begin: /<\?[a-z][a-z0-9]+/
                    }]
                }, {
                    className: "tag",
                    begin: /<style(?=\s|>)/,
                    end: />/,
                    keywords: {
                        name: "style"
                    },
                    contains: [g],
                    starts: {
                        end: /<\/style>/,
                        returnEnd: !0,
                        subLanguage: ["css", "xml"]
                    }
                }, {
                    className: "tag",
                    begin: /<script(?=\s|>)/,
                    end: />/,
                    keywords: {
                        name: "script"
                    },
                    contains: [g],
                    starts: {
                        end: /<\/script>/,
                        returnEnd: !0,
                        subLanguage: ["javascript", "handlebars", "xml"]
                    }
                }, {
                    className: "tag",
                    begin: /<>|<\/>/
                }, {
                    className: "tag",
                    begin: t.concat(/</, t.lookahead(t.concat(s, t.either(/\/>/, />/, /\s/)))),
                    end: /\/?>/,
                    contains: [{
                        className: "name",
                        begin: s,
                        relevance: 0,
                        starts: g
                    }]
                }, {
                    className: "tag",
                    begin: t.concat(/<\//, t.lookahead(t.concat(s, />/))),
                    contains: [{
                        className: "name",
                        begin: s,
                        relevance: 0
                    }, {
                        begin: />/,
                        relevance: 0,
                        endsParent: !0
                    }]
                }]
            }
        }
    },
    3923: function(e, t, s) {
        "use strict";
        var l = s(2947);
        t.Z = l
    },
    2314: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return p
            }
        });
        var l = s(4406)
          , c = !1
          , u = {
            false: "push",
            true: "unshift",
            after: "push",
            before: "unshift"
        }
          , d = {
            isPermalinkSymbol: !0
        };
        function r(e, t, s, h) {
            if (!c) {
                var g, m = "Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#permalinks";
                "object" == typeof l && l && l.emitWarning ? l.emitWarning(m) : console.warn(m),
                c = !0
            }
            var b = [Object.assign(new s.Token("link_open","a",1), {
                attrs: [].concat(t.permalinkClass ? [["class", t.permalinkClass]] : [], [["href", t.permalinkHref(e, s)]], Object.entries(t.permalinkAttrs(e, s)))
            }), Object.assign(new s.Token("html_block","",0), {
                content: t.permalinkSymbol,
                meta: d
            }), new s.Token("link_close","a",-1)];
            t.permalinkSpace && s.tokens[h + 1].children[u[t.permalinkBefore]](Object.assign(new s.Token("text","",0), {
                content: " "
            })),
            (g = s.tokens[h + 1].children)[u[t.permalinkBefore]].apply(g, b)
        }
        function a(e) {
            return "#" + e
        }
        function i(e) {
            return {}
        }
        var h = {
            class: "header-anchor",
            symbol: "#",
            renderHref: a,
            renderAttrs: i
        };
        function o(e) {
            function n(t) {
                return t = Object.assign({}, n.defaults, t),
                function(s, l, c, u) {
                    return e(s, t, l, c, u)
                }
            }
            return n.defaults = Object.assign({}, h),
            n.renderPermalinkImpl = e,
            n
        }
        var g = o(function(e, t, s, l, c) {
            var h, g = [Object.assign(new l.Token("link_open","a",1), {
                attrs: [].concat(t.class ? [["class", t.class]] : [], [["href", t.renderHref(e, l)]], t.ariaHidden ? [["aria-hidden", "true"]] : [], Object.entries(t.renderAttrs(e, l)))
            }), Object.assign(new l.Token("html_inline","",0), {
                content: t.symbol,
                meta: d
            }), new l.Token("link_close","a",-1)];
            if (t.space) {
                var m = "string" == typeof t.space ? t.space : " ";
                l.tokens[c + 1].children[u[t.placement]](Object.assign(new l.Token("string" == typeof t.space ? "html_inline" : "text","",0), {
                    content: m
                }))
            }
            (h = l.tokens[c + 1].children)[u[t.placement]].apply(h, g)
        });
        Object.assign(g.defaults, {
            space: !0,
            placement: "after",
            ariaHidden: !1
        });
        var m = o(g.renderPermalinkImpl);
        m.defaults = Object.assign({}, g.defaults, {
            ariaHidden: !0
        });
        var b = o(function(e, t, s, l, c) {
            var u = [Object.assign(new l.Token("link_open","a",1), {
                attrs: [].concat(t.class ? [["class", t.class]] : [], [["href", t.renderHref(e, l)]], Object.entries(t.renderAttrs(e, l)))
            })].concat(t.safariReaderFix ? [new l.Token("span_open","span",1)] : [], l.tokens[c + 1].children, t.safariReaderFix ? [new l.Token("span_close","span",-1)] : [], [new l.Token("link_close","a",-1)]);
            l.tokens[c + 1] = Object.assign(new l.Token("inline","",0), {
                children: u
            })
        });
        Object.assign(b.defaults, {
            safariReaderFix: !1
        });
        var _ = o(function(e, t, s, l, c) {
            if (!["visually-hidden", "aria-label", "aria-describedby", "aria-labelledby"].includes(t.style))
                throw Error("`permalink.linkAfterHeader` called with unknown style option `" + t.style + "`");
            if (!["aria-describedby", "aria-labelledby"].includes(t.style) && !t.assistiveText)
                throw Error("`permalink.linkAfterHeader` called without the `assistiveText` option in `" + t.style + "` style");
            if ("visually-hidden" === t.style && !t.visuallyHiddenClass)
                throw Error("`permalink.linkAfterHeader` called without the `visuallyHiddenClass` option in `visually-hidden` style");
            var h, g = l.tokens[c + 1].children.filter(function(e) {
                return "text" === e.type || "code_inline" === e.type
            }).reduce(function(e, t) {
                return e + t.content
            }, ""), m = [], b = [];
            if (t.class && b.push(["class", t.class]),
            b.push(["href", t.renderHref(e, l)]),
            b.push.apply(b, Object.entries(t.renderAttrs(e, l))),
            "visually-hidden" === t.style) {
                if (m.push(Object.assign(new l.Token("span_open","span",1), {
                    attrs: [["class", t.visuallyHiddenClass]]
                }), Object.assign(new l.Token("text","",0), {
                    content: t.assistiveText(g)
                }), new l.Token("span_close","span",-1)),
                t.space) {
                    var _ = "string" == typeof t.space ? t.space : " ";
                    m[u[t.placement]](Object.assign(new l.Token("string" == typeof t.space ? "html_inline" : "text","",0), {
                        content: _
                    }))
                }
                m[u[t.placement]](Object.assign(new l.Token("span_open","span",1), {
                    attrs: [["aria-hidden", "true"]]
                }), Object.assign(new l.Token("html_inline","",0), {
                    content: t.symbol,
                    meta: d
                }), new l.Token("span_close","span",-1))
            } else
                m.push(Object.assign(new l.Token("html_inline","",0), {
                    content: t.symbol,
                    meta: d
                }));
            "aria-label" === t.style ? b.push(["aria-label", t.assistiveText(g)]) : ["aria-describedby", "aria-labelledby"].includes(t.style) && b.push([t.style, e]);
            var k = [Object.assign(new l.Token("link_open","a",1), {
                attrs: b
            })].concat(m, [new l.Token("link_close","a",-1)]);
            (h = l.tokens).splice.apply(h, [c + 3, 0].concat(k)),
            t.wrapper && (l.tokens.splice(c, 0, Object.assign(new l.Token("html_block","",0), {
                content: t.wrapper[0] + "\n"
            })),
            l.tokens.splice(c + 3 + k.length + 1, 0, Object.assign(new l.Token("html_block","",0), {
                content: t.wrapper[1] + "\n"
            })))
        });
        function f(e, t, s, l) {
            var c = e
              , u = l;
            if (s && Object.prototype.hasOwnProperty.call(t, c))
                throw Error("User defined `id` attribute `" + e + "` is not unique. Please fix it in your Markdown to continue.");
            for (; Object.prototype.hasOwnProperty.call(t, c); )
                c = e + "-" + u,
                u += 1;
            return t[c] = !0,
            c
        }
        function p(e, t) {
            t = Object.assign({}, p.defaults, t),
            e.core.ruler.push("anchor", function(e) {
                for (var s, l, c = {}, u = e.tokens, d = Array.isArray(t.level) ? (l = t.level,
                function(e) {
                    return l.includes(e)
                }
                ) : (s = t.level,
                function(e) {
                    return e >= s
                }
                ), h = 0; h < u.length; h++) {
                    var g = u[h];
                    if ("heading_open" === g.type && d(Number(g.tag.substr(1)))) {
                        var m = t.getTokensText(u[h + 1].children)
                          , b = g.attrGet("id");
                        b = null == b ? f(t.slugify(m), c, !1, t.uniqueSlugStartIndex) : f(b, c, !0, t.uniqueSlugStartIndex),
                        g.attrSet("id", b),
                        !1 !== t.tabIndex && g.attrSet("tabindex", "" + t.tabIndex),
                        "function" == typeof t.permalink ? t.permalink(b, t, e, h) : (t.permalink || t.renderPermalink && t.renderPermalink !== r) && t.renderPermalink(b, t, e, h),
                        h = u.indexOf(g),
                        t.callback && t.callback(g, {
                            slug: b,
                            title: m
                        })
                    }
                }
            })
        }
        Object.assign(_.defaults, {
            style: "visually-hidden",
            space: !0,
            placement: "after",
            wrapper: null
        }),
        p.permalink = {
            __proto__: null,
            legacy: r,
            renderHref: a,
            renderAttrs: i,
            makePermalink: o,
            linkInsideHeader: g,
            ariaHidden: m,
            headerLink: b,
            linkAfterHeader: _
        },
        p.defaults = {
            level: 1,
            slugify: function(e) {
                return encodeURIComponent(String(e).trim().toLowerCase().replace(/\s+/g, "-"))
            },
            uniqueSlugStartIndex: 1,
            tabIndex: "-1",
            getTokensText: function(e) {
                return e.filter(function(e) {
                    return ["text", "code_inline"].includes(e.type)
                }).map(function(e) {
                    return e.content
                }).join("")
            },
            permalink: !1,
            renderPermalink: r,
            permalinkClass: m.defaults.class,
            permalinkSpace: m.defaults.space,
            permalinkSymbol: "\xb6",
            permalinkBefore: "before" === m.defaults.placement,
            permalinkHref: m.defaults.renderHref,
            permalinkAttrs: m.defaults.renderAttrs
        },
        p.default = p
    },
    5224: function(e, t, s) {
        "use strict";
        /*!
  * PhotoSwipe Lightbox 5.4.4 - https://photoswipe.com
  * (c) 2024 Dmytro Semenov
  */
        function createElement(e, t, s) {
            let l = document.createElement(t);
            return e && (l.className = e),
            s && s.appendChild(l),
            l
        }
        function setWidthHeight(e, t, s) {
            e.style.width = "number" == typeof t ? `${t}px` : t,
            e.style.height = "number" == typeof s ? `${s}px` : s
        }
        s.d(t, {
            Z: function() {
                return PhotoSwipeLightbox
            }
        });
        let l = {
            IDLE: "idle",
            LOADING: "loading",
            LOADED: "loaded",
            ERROR: "error"
        };
        function getElementsFromOption(e, t, s=document) {
            let l = [];
            if (e instanceof Element)
                l = [e];
            else if (e instanceof NodeList || Array.isArray(e))
                l = Array.from(e);
            else {
                let c = "string" == typeof e ? e : t;
                c && (l = Array.from(s.querySelectorAll(c)))
            }
            return l
        }
        function isSafari() {
            return !!(navigator.vendor && navigator.vendor.match(/apple/i))
        }
        let PhotoSwipeEvent = class PhotoSwipeEvent {
            constructor(e, t) {
                this.type = e,
                this.defaultPrevented = !1,
                t && Object.assign(this, t)
            }
            preventDefault() {
                this.defaultPrevented = !0
            }
        }
        ;
        let Eventable = class Eventable {
            constructor() {
                this._listeners = {},
                this._filters = {},
                this.pswp = void 0,
                this.options = void 0
            }
            addFilter(e, t, s=100) {
                var l, c, u;
                this._filters[e] || (this._filters[e] = []),
                null === (l = this._filters[e]) || void 0 === l || l.push({
                    fn: t,
                    priority: s
                }),
                null === (c = this._filters[e]) || void 0 === c || c.sort( (e, t) => e.priority - t.priority),
                null === (u = this.pswp) || void 0 === u || u.addFilter(e, t, s)
            }
            removeFilter(e, t) {
                this._filters[e] && (this._filters[e] = this._filters[e].filter(e => e.fn !== t)),
                this.pswp && this.pswp.removeFilter(e, t)
            }
            applyFilters(e, ...t) {
                var s;
                return null === (s = this._filters[e]) || void 0 === s || s.forEach(e => {
                    t[0] = e.fn.apply(this, t)
                }
                ),
                t[0]
            }
            on(e, t) {
                var s, l;
                this._listeners[e] || (this._listeners[e] = []),
                null === (s = this._listeners[e]) || void 0 === s || s.push(t),
                null === (l = this.pswp) || void 0 === l || l.on(e, t)
            }
            off(e, t) {
                var s;
                this._listeners[e] && (this._listeners[e] = this._listeners[e].filter(e => t !== e)),
                null === (s = this.pswp) || void 0 === s || s.off(e, t)
            }
            dispatch(e, t) {
                var s;
                if (this.pswp)
                    return this.pswp.dispatch(e, t);
                let l = new PhotoSwipeEvent(e,t);
                return null === (s = this._listeners[e]) || void 0 === s || s.forEach(e => {
                    e.call(this, l)
                }
                ),
                l
            }
        }
        ;
        let Placeholder = class Placeholder {
            constructor(e, t) {
                if (this.element = createElement("pswp__img pswp__img--placeholder", e ? "img" : "div", t),
                e) {
                    let t = this.element;
                    t.decoding = "async",
                    t.alt = "",
                    t.src = e,
                    t.setAttribute("role", "presentation")
                }
                this.element.setAttribute("aria-hidden", "true")
            }
            setDisplayedSize(e, t) {
                if (this.element) {
                    if ("IMG" === this.element.tagName) {
                        var s;
                        let t;
                        setWidthHeight(this.element, 250, "auto"),
                        this.element.style.transformOrigin = "0 0",
                        this.element.style.transform = (t = "translate3d(0px,0px,0)",
                        s = e / 250,
                        t += ` scale3d(${s},${s},1)`)
                    } else
                        setWidthHeight(this.element, e, t)
                }
            }
            destroy() {
                var e;
                null !== (e = this.element) && void 0 !== e && e.parentNode && this.element.remove(),
                this.element = null
            }
        }
        ;
        let Content = class Content {
            constructor(e, t, s) {
                this.instance = t,
                this.data = e,
                this.index = s,
                this.element = void 0,
                this.placeholder = void 0,
                this.slide = void 0,
                this.displayedImageWidth = 0,
                this.displayedImageHeight = 0,
                this.width = Number(this.data.w) || Number(this.data.width) || 0,
                this.height = Number(this.data.h) || Number(this.data.height) || 0,
                this.isAttached = !1,
                this.hasSlide = !1,
                this.isDecoding = !1,
                this.state = l.IDLE,
                this.data.type ? this.type = this.data.type : this.data.src ? this.type = "image" : this.type = "html",
                this.instance.dispatch("contentInit", {
                    content: this
                })
            }
            removePlaceholder() {
                this.placeholder && !this.keepPlaceholder() && setTimeout( () => {
                    this.placeholder && (this.placeholder.destroy(),
                    this.placeholder = void 0)
                }
                , 1e3)
            }
            load(e, t) {
                if (this.slide && this.usePlaceholder()) {
                    if (this.placeholder) {
                        let e = this.placeholder.element;
                        e && !e.parentElement && this.slide.container.prepend(e)
                    } else {
                        let e = this.instance.applyFilters("placeholderSrc", !!this.data.msrc && !!this.slide.isFirstSlide && this.data.msrc, this);
                        this.placeholder = new Placeholder(e,this.slide.container)
                    }
                }
                (!this.element || t) && !this.instance.dispatch("contentLoad", {
                    content: this,
                    isLazy: e
                }).defaultPrevented && (this.isImageContent() ? (this.element = createElement("pswp__img", "img"),
                this.displayedImageWidth && this.loadImage(e)) : (this.element = createElement("pswp__content", "div"),
                this.element.innerHTML = this.data.html || ""),
                t && this.slide && this.slide.updateContentSize(!0))
            }
            loadImage(e) {
                var t, s;
                if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
                    content: this,
                    isLazy: e
                }).defaultPrevented)
                    return;
                let c = this.element;
                this.updateSrcsetSizes(),
                this.data.srcset && (c.srcset = this.data.srcset),
                c.src = null !== (t = this.data.src) && void 0 !== t ? t : "",
                c.alt = null !== (s = this.data.alt) && void 0 !== s ? s : "",
                this.state = l.LOADING,
                c.complete ? this.onLoaded() : (c.onload = () => {
                    this.onLoaded()
                }
                ,
                c.onerror = () => {
                    this.onError()
                }
                )
            }
            setSlide(e) {
                this.slide = e,
                this.hasSlide = !0,
                this.instance = e.pswp
            }
            onLoaded() {
                this.state = l.LOADED,
                this.slide && this.element && (this.instance.dispatch("loadComplete", {
                    slide: this.slide,
                    content: this
                }),
                this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode && (this.append(),
                this.slide.updateContentSize(!0)),
                (this.state === l.LOADED || this.state === l.ERROR) && this.removePlaceholder())
            }
            onError() {
                this.state = l.ERROR,
                this.slide && (this.displayError(),
                this.instance.dispatch("loadComplete", {
                    slide: this.slide,
                    isError: !0,
                    content: this
                }),
                this.instance.dispatch("loadError", {
                    slide: this.slide,
                    content: this
                }))
            }
            isLoading() {
                return this.instance.applyFilters("isContentLoading", this.state === l.LOADING, this)
            }
            isError() {
                return this.state === l.ERROR
            }
            isImageContent() {
                return "image" === this.type
            }
            setDisplayedSize(e, t) {
                if (this.element && (this.placeholder && this.placeholder.setDisplayedSize(e, t),
                !this.instance.dispatch("contentResize", {
                    content: this,
                    width: e,
                    height: t
                }).defaultPrevented && (setWidthHeight(this.element, e, t),
                this.isImageContent() && !this.isError()))) {
                    let s = !this.displayedImageWidth && e;
                    this.displayedImageWidth = e,
                    this.displayedImageHeight = t,
                    s ? this.loadImage(!1) : this.updateSrcsetSizes(),
                    this.slide && this.instance.dispatch("imageSizeChange", {
                        slide: this.slide,
                        width: e,
                        height: t,
                        content: this
                    })
                }
            }
            isZoomable() {
                return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== l.ERROR, this)
            }
            updateSrcsetSizes() {
                if (!this.isImageContent() || !this.element || !this.data.srcset)
                    return;
                let e = this.element
                  , t = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
                (!e.dataset.largestUsedSize || t > parseInt(e.dataset.largestUsedSize, 10)) && (e.sizes = t + "px",
                e.dataset.largestUsedSize = String(t))
            }
            usePlaceholder() {
                return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this)
            }
            lazyLoad() {
                this.instance.dispatch("contentLazyLoad", {
                    content: this
                }).defaultPrevented || this.load(!0)
            }
            keepPlaceholder() {
                return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this)
            }
            destroy() {
                this.hasSlide = !1,
                this.slide = void 0,
                !this.instance.dispatch("contentDestroy", {
                    content: this
                }).defaultPrevented && (this.remove(),
                this.placeholder && (this.placeholder.destroy(),
                this.placeholder = void 0),
                this.isImageContent() && this.element && (this.element.onload = null,
                this.element.onerror = null,
                this.element = void 0))
            }
            displayError() {
                if (this.slide) {
                    var e, t;
                    let s = createElement("pswp__error-msg", "div");
                    s.innerText = null !== (e = null === (t = this.instance.options) || void 0 === t ? void 0 : t.errorMsg) && void 0 !== e ? e : "",
                    s = this.instance.applyFilters("contentErrorElement", s, this),
                    this.element = createElement("pswp__content pswp__error-msg-container", "div"),
                    this.element.appendChild(s),
                    this.slide.container.innerText = "",
                    this.slide.container.appendChild(this.element),
                    this.slide.updateContentSize(!0),
                    this.removePlaceholder()
                }
            }
            append() {
                if (this.isAttached || !this.element)
                    return;
                if (this.isAttached = !0,
                this.state === l.ERROR) {
                    this.displayError();
                    return
                }
                if (this.instance.dispatch("contentAppend", {
                    content: this
                }).defaultPrevented)
                    return;
                let e = "decode"in this.element;
                this.isImageContent() ? e && this.slide && (!this.slide.isActive || isSafari()) ? (this.isDecoding = !0,
                this.element.decode().catch( () => {}
                ).finally( () => {
                    this.isDecoding = !1,
                    this.appendImage()
                }
                )) : this.appendImage() : this.slide && !this.element.parentNode && this.slide.container.appendChild(this.element)
            }
            activate() {
                !this.instance.dispatch("contentActivate", {
                    content: this
                }).defaultPrevented && this.slide && (this.isImageContent() && this.isDecoding && !isSafari() ? this.appendImage() : this.isError() && this.load(!1, !0),
                this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "false"))
            }
            deactivate() {
                this.instance.dispatch("contentDeactivate", {
                    content: this
                }),
                this.slide && this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "true")
            }
            remove() {
                this.isAttached = !1,
                !this.instance.dispatch("contentRemove", {
                    content: this
                }).defaultPrevented && (this.element && this.element.parentNode && this.element.remove(),
                this.placeholder && this.placeholder.element && this.placeholder.element.remove())
            }
            appendImage() {
                this.isAttached && !this.instance.dispatch("contentAppendImage", {
                    content: this
                }).defaultPrevented && (this.slide && this.element && !this.element.parentNode && this.slide.container.appendChild(this.element),
                (this.state === l.LOADED || this.state === l.ERROR) && this.removePlaceholder())
            }
        }
        ;
        function parsePaddingOption(e, t, s, l, c) {
            let u = 0;
            if (t.paddingFn)
                u = t.paddingFn(s, l, c)[e];
            else if (t.padding)
                u = t.padding[e];
            else {
                let s = "padding" + e[0].toUpperCase() + e.slice(1);
                t[s] && (u = t[s])
            }
            return Number(u) || 0
        }
        let ZoomLevel = class ZoomLevel {
            constructor(e, t, s, l) {
                this.pswp = l,
                this.options = e,
                this.itemData = t,
                this.index = s,
                this.panAreaSize = null,
                this.elementSize = null,
                this.fit = 1,
                this.fill = 1,
                this.vFill = 1,
                this.initial = 1,
                this.secondary = 1,
                this.max = 1,
                this.min = 1
            }
            update(e, t, s) {
                let l = {
                    x: e,
                    y: t
                };
                this.elementSize = l,
                this.panAreaSize = s;
                let c = s.x / l.x
                  , u = s.y / l.y;
                this.fit = Math.min(1, c < u ? c : u),
                this.fill = Math.min(1, c > u ? c : u),
                this.vFill = Math.min(1, u),
                this.initial = this._getInitial(),
                this.secondary = this._getSecondary(),
                this.max = Math.max(this.initial, this.secondary, this._getMax()),
                this.min = Math.min(this.fit, this.initial, this.secondary),
                this.pswp && this.pswp.dispatch("zoomLevelsUpdate", {
                    zoomLevels: this,
                    slideData: this.itemData
                })
            }
            _parseZoomLevelOption(e) {
                let t = this.options[e + "ZoomLevel"];
                return t ? "function" == typeof t ? t(this) : "fill" === t ? this.fill : "fit" === t ? this.fit : Number(t) : void 0
            }
            _getSecondary() {
                let e = this._parseZoomLevelOption("secondary");
                return e || (e = Math.min(1, 3 * this.fit),
                this.elementSize && e * this.elementSize.x > 4e3 && (e = 4e3 / this.elementSize.x)),
                e
            }
            _getInitial() {
                return this._parseZoomLevelOption("initial") || this.fit
            }
            _getMax() {
                return this._parseZoomLevelOption("max") || Math.max(1, 4 * this.fit)
            }
        }
        ;
        function lazyLoadData(e, t, s) {
            let l;
            let c = t.createContentFromData(e, s)
              , {options: u} = t;
            if (u) {
                let d;
                l = new ZoomLevel(u,e,-1),
                d = t.pswp ? t.pswp.viewportSize : function(e, t) {
                    if (e.getViewportSizeFn) {
                        let s = e.getViewportSizeFn(e, t);
                        if (s)
                            return s
                    }
                    return {
                        x: document.documentElement.clientWidth,
                        y: window.innerHeight
                    }
                }(u, t);
                let h = {
                    x: d.x - parsePaddingOption("left", u, d, e, s) - parsePaddingOption("right", u, d, e, s),
                    y: d.y - parsePaddingOption("top", u, d, e, s) - parsePaddingOption("bottom", u, d, e, s)
                };
                l.update(c.width, c.height, h)
            }
            return c.lazyLoad(),
            l && c.setDisplayedSize(Math.ceil(c.width * l.initial), Math.ceil(c.height * l.initial)),
            c
        }
        let PhotoSwipeBase = class PhotoSwipeBase extends Eventable {
            getNumItems() {
                var e;
                let t = 0
                  , s = null === (e = this.options) || void 0 === e ? void 0 : e.dataSource;
                s && "length"in s ? t = s.length : s && "gallery"in s && (s.items || (s.items = this._getGalleryDOMElements(s.gallery)),
                s.items && (t = s.items.length));
                let l = this.dispatch("numItems", {
                    dataSource: s,
                    numItems: t
                });
                return this.applyFilters("numItems", l.numItems, s)
            }
            createContentFromData(e, t) {
                return new Content(e,this,t)
            }
            getItemData(e) {
                var t;
                let s = null === (t = this.options) || void 0 === t ? void 0 : t.dataSource
                  , l = {};
                Array.isArray(s) ? l = s[e] : s && "gallery"in s && (s.items || (s.items = this._getGalleryDOMElements(s.gallery)),
                l = s.items[e]);
                let c = l;
                c instanceof Element && (c = this._domElementToItemData(c));
                let u = this.dispatch("itemData", {
                    itemData: c || {},
                    index: e
                });
                return this.applyFilters("itemData", u.itemData, e)
            }
            _getGalleryDOMElements(e) {
                var t, s;
                return null !== (t = this.options) && void 0 !== t && t.children || null !== (s = this.options) && void 0 !== s && s.childSelector ? getElementsFromOption(this.options.children, this.options.childSelector, e) || [] : [e]
            }
            _domElementToItemData(e) {
                let t = {
                    element: e
                }
                  , s = "A" === e.tagName ? e : e.querySelector("a");
                if (s) {
                    t.src = s.dataset.pswpSrc || s.href,
                    s.dataset.pswpSrcset && (t.srcset = s.dataset.pswpSrcset),
                    t.width = s.dataset.pswpWidth ? parseInt(s.dataset.pswpWidth, 10) : 0,
                    t.height = s.dataset.pswpHeight ? parseInt(s.dataset.pswpHeight, 10) : 0,
                    t.w = t.width,
                    t.h = t.height,
                    s.dataset.pswpType && (t.type = s.dataset.pswpType);
                    let c = e.querySelector("img");
                    if (c) {
                        var l;
                        t.msrc = c.currentSrc || c.src,
                        t.alt = null !== (l = c.getAttribute("alt")) && void 0 !== l ? l : ""
                    }
                    (s.dataset.pswpCropped || s.dataset.cropped) && (t.thumbCropped = !0)
                }
                return this.applyFilters("domItemData", t, e, s)
            }
            lazyLoadData(e, t) {
                return lazyLoadData(e, this, t)
            }
        }
        ;
        let PhotoSwipeLightbox = class PhotoSwipeLightbox extends PhotoSwipeBase {
            constructor(e) {
                super(),
                this.options = e || {},
                this._uid = 0,
                this.shouldOpen = !1,
                this._preloadedContent = void 0,
                this.onThumbnailsClick = this.onThumbnailsClick.bind(this)
            }
            init() {
                getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach(e => {
                    e.addEventListener("click", this.onThumbnailsClick, !1)
                }
                )
            }
            onThumbnailsClick(e) {
                if ("button"in e && 1 === e.button || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || window.pswp)
                    return;
                let t = {
                    x: e.clientX,
                    y: e.clientY
                };
                t.x || t.y || (t = null);
                let s = this.getClickedIndex(e);
                s = this.applyFilters("clickedIndex", s, e, this);
                let l = {
                    gallery: e.currentTarget
                };
                s >= 0 && (e.preventDefault(),
                this.loadAndOpen(s, l, t))
            }
            getClickedIndex(e) {
                if (this.options.getClickedIndexFn)
                    return this.options.getClickedIndexFn.call(this, e);
                let t = e.target
                  , s = getElementsFromOption(this.options.children, this.options.childSelector, e.currentTarget)
                  , l = s.findIndex(e => e === t || e.contains(t));
                return -1 !== l ? l : this.options.children || this.options.childSelector ? -1 : 0
            }
            loadAndOpen(e, t, s) {
                if (window.pswp || !this.options)
                    return !1;
                if (!t && this.options.gallery && this.options.children) {
                    let e = getElementsFromOption(this.options.gallery);
                    e[0] && (t = {
                        gallery: e[0]
                    })
                }
                return this.options.index = e,
                this.options.initialPointerPos = s,
                this.shouldOpen = !0,
                this.preload(e, t),
                !0
            }
            preload(e, t) {
                var s;
                let {options: l} = this;
                t && (l.dataSource = t);
                let c = []
                  , u = typeof l.pswpModule;
                if ("function" == typeof (s = l.pswpModule) && s.prototype && s.prototype.goTo)
                    c.push(Promise.resolve(l.pswpModule));
                else if ("string" === u)
                    throw Error("pswpModule as string is no longer supported");
                else if ("function" === u)
                    c.push(l.pswpModule());
                else
                    throw Error("pswpModule is not valid");
                "function" == typeof l.openPromise && c.push(l.openPromise()),
                !1 !== l.preloadFirstSlide && e >= 0 && (this._preloadedContent = function(e, t) {
                    let s = t.getItemData(e);
                    if (!t.dispatch("lazyLoadSlide", {
                        index: e,
                        itemData: s
                    }).defaultPrevented)
                        return lazyLoadData(s, t, e)
                }(e, this));
                let d = ++this._uid;
                Promise.all(c).then(e => {
                    if (this.shouldOpen) {
                        let t = e[0];
                        this._openPhotoswipe(t, d)
                    }
                }
                )
            }
            _openPhotoswipe(e, t) {
                if (t !== this._uid && this.shouldOpen || (this.shouldOpen = !1,
                window.pswp))
                    return;
                let s = "object" == typeof e ? new e.default(this.options) : new e(this.options);
                this.pswp = s,
                window.pswp = s,
                Object.keys(this._listeners).forEach(e => {
                    var t;
                    null === (t = this._listeners[e]) || void 0 === t || t.forEach(t => {
                        s.on(e, t)
                    }
                    )
                }
                ),
                Object.keys(this._filters).forEach(e => {
                    var t;
                    null === (t = this._filters[e]) || void 0 === t || t.forEach(t => {
                        s.addFilter(e, t.fn, t.priority)
                    }
                    )
                }
                ),
                this._preloadedContent && (s.contentLoader.addToCache(this._preloadedContent),
                this._preloadedContent = void 0),
                s.on("destroy", () => {
                    this.pswp = void 0,
                    delete window.pswp
                }
                ),
                s.init()
            }
            destroy() {
                var e;
                null === (e = this.pswp) || void 0 === e || e.destroy(),
                this.shouldOpen = !1,
                this._listeners = {},
                getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach(e => {
                    e.removeEventListener("click", this.onThumbnailsClick, !1)
                }
                )
            }
        }
    },
    2059: function(e) {
        "use strict";
        e.exports = JSON.parse('{"Aacute":"\xc1","aacute":"\xe1","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"\xc2","acirc":"\xe2","acute":"\xb4","Acy":"А","acy":"а","AElig":"\xc6","aelig":"\xe6","af":"⁡","Afr":"\uD835\uDD04","afr":"\uD835\uDD1E","Agrave":"\xc0","agrave":"\xe0","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"\xc5","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"\uD835\uDD38","aopf":"\uD835\uDD52","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"\xc5","aring":"\xe5","Ascr":"\uD835\uDC9C","ascr":"\uD835\uDCB6","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"\xc3","atilde":"\xe3","Auml":"\xc4","auml":"\xe4","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"\uD835\uDD05","bfr":"\uD835\uDD1F","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"\uD835\uDD39","bopf":"\uD835\uDD53","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"\xa6","bscr":"\uD835\uDCB7","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"\xc7","ccedil":"\xe7","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"\xb8","Cedilla":"\xb8","cemptyv":"⦲","cent":"\xa2","centerdot":"\xb7","CenterDot":"\xb7","cfr":"\uD835\uDD20","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"\xae","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"\uD835\uDD54","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"\xa9","COPY":"\xa9","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"\uD835\uDC9E","cscr":"\uD835\uDCB8","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"\xa4","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"\xb0","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"\uD835\uDD07","dfr":"\uD835\uDD21","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"\xb4","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"\xa8","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"\xf7","divide":"\xf7","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"\uD835\uDD3B","dopf":"\uD835\uDD55","Dot":"\xa8","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"\xa8","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"\uD835\uDC9F","dscr":"\uD835\uDCB9","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"\xc9","eacute":"\xe9","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"\xca","ecirc":"\xea","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"\uD835\uDD08","efr":"\uD835\uDD22","eg":"⪚","Egrave":"\xc8","egrave":"\xe8","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"\uD835\uDD3C","eopf":"\uD835\uDD56","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"\xd0","eth":"\xf0","Euml":"\xcb","euml":"\xeb","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"\uD835\uDD09","ffr":"\uD835\uDD23","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"\uD835\uDD3D","fopf":"\uD835\uDD57","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"\xbd","frac13":"⅓","frac14":"\xbc","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"\xbe","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"\uD835\uDCBB","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"\uD835\uDD0A","gfr":"\uD835\uDD24","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"\uD835\uDD3E","gopf":"\uD835\uDD58","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"\uD835\uDCA2","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"\xbd","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"\uD835\uDD25","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"\uD835\uDD59","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"\uD835\uDCBD","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"\xcd","iacute":"\xed","ic":"⁣","Icirc":"\xce","icirc":"\xee","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"\xa1","iff":"⇔","ifr":"\uD835\uDD26","Ifr":"ℑ","Igrave":"\xcc","igrave":"\xec","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"\uD835\uDD40","iopf":"\uD835\uDD5A","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"\xbf","iscr":"\uD835\uDCBE","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"\xcf","iuml":"\xef","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"\uD835\uDD0D","jfr":"\uD835\uDD27","jmath":"ȷ","Jopf":"\uD835\uDD41","jopf":"\uD835\uDD5B","Jscr":"\uD835\uDCA5","jscr":"\uD835\uDCBF","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"\uD835\uDD0E","kfr":"\uD835\uDD28","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"\uD835\uDD42","kopf":"\uD835\uDD5C","Kscr":"\uD835\uDCA6","kscr":"\uD835\uDCC0","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"\xab","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"\uD835\uDD0F","lfr":"\uD835\uDD29","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"\uD835\uDD43","lopf":"\uD835\uDD5D","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"\uD835\uDCC1","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"\xaf","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"\uD835\uDD10","mfr":"\uD835\uDD2A","mho":"℧","micro":"\xb5","midast":"*","midcir":"⫰","mid":"∣","middot":"\xb7","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"\uD835\uDD44","mopf":"\uD835\uDD5E","mp":"∓","mscr":"\uD835\uDCC2","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":"\xa0","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"\uD835\uDD11","nfr":"\uD835\uDD2B","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":"\xa0","nopf":"\uD835\uDD5F","Nopf":"ℕ","Not":"⫬","not":"\xac","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"\uD835\uDCA9","nscr":"\uD835\uDCC3","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"\xd1","ntilde":"\xf1","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"\xd3","oacute":"\xf3","oast":"⊛","Ocirc":"\xd4","ocirc":"\xf4","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"\uD835\uDD12","ofr":"\uD835\uDD2C","ogon":"˛","Ograve":"\xd2","ograve":"\xf2","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"\uD835\uDD46","oopf":"\uD835\uDD60","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"\xaa","ordm":"\xba","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"\uD835\uDCAA","oscr":"ℴ","Oslash":"\xd8","oslash":"\xf8","osol":"⊘","Otilde":"\xd5","otilde":"\xf5","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"\xd6","ouml":"\xf6","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"\xb6","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"\uD835\uDD13","pfr":"\uD835\uDD2D","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"\xb1","plusmn":"\xb1","plussim":"⨦","plustwo":"⨧","pm":"\xb1","Poincareplane":"ℌ","pointint":"⨕","popf":"\uD835\uDD61","Popf":"ℙ","pound":"\xa3","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"\uD835\uDCAB","pscr":"\uD835\uDCC5","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"\uD835\uDD14","qfr":"\uD835\uDD2E","qint":"⨌","qopf":"\uD835\uDD62","Qopf":"ℚ","qprime":"⁗","Qscr":"\uD835\uDCAC","qscr":"\uD835\uDCC6","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"\xbb","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"\xae","REG":"\xae","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"\uD835\uDD2F","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"\uD835\uDD63","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"\uD835\uDCC7","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"\xa7","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"\uD835\uDD16","sfr":"\uD835\uDD30","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"\xad","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"\uD835\uDD4A","sopf":"\uD835\uDD64","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"\uD835\uDCAE","sscr":"\uD835\uDCC8","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"\xaf","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"\xb9","sup2":"\xb2","sup3":"\xb3","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"\xdf","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"\uD835\uDD17","tfr":"\uD835\uDD31","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"\xde","thorn":"\xfe","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"\xd7","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"\uD835\uDD4B","topf":"\uD835\uDD65","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"\uD835\uDCAF","tscr":"\uD835\uDCC9","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"\xda","uacute":"\xfa","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"\xdb","ucirc":"\xfb","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"\uD835\uDD18","ufr":"\uD835\uDD32","Ugrave":"\xd9","ugrave":"\xf9","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"\xa8","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"\uD835\uDD4C","uopf":"\uD835\uDD66","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"\uD835\uDCB0","uscr":"\uD835\uDCCA","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"\xdc","uuml":"\xfc","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"\uD835\uDD19","vfr":"\uD835\uDD33","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"\uD835\uDD4D","vopf":"\uD835\uDD67","vprop":"∝","vrtri":"⊳","Vscr":"\uD835\uDCB1","vscr":"\uD835\uDCCB","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"\uD835\uDD1A","wfr":"\uD835\uDD34","Wopf":"\uD835\uDD4E","wopf":"\uD835\uDD68","wp":"℘","wr":"≀","wreath":"≀","Wscr":"\uD835\uDCB2","wscr":"\uD835\uDCCC","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"\uD835\uDD1B","xfr":"\uD835\uDD35","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"\uD835\uDD4F","xopf":"\uD835\uDD69","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"\uD835\uDCB3","xscr":"\uD835\uDCCD","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"\xdd","yacute":"\xfd","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"\xa5","Yfr":"\uD835\uDD1C","yfr":"\uD835\uDD36","YIcy":"Ї","yicy":"ї","Yopf":"\uD835\uDD50","yopf":"\uD835\uDD6A","Yscr":"\uD835\uDCB4","yscr":"\uD835\uDCCE","YUcy":"Ю","yucy":"ю","yuml":"\xff","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"\uD835\uDD37","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"\uD835\uDD6B","Zopf":"ℤ","Zscr":"\uD835\uDCB5","zscr":"\uD835\uDCCF","zwj":"‍","zwnj":"‌"}')
    }
}]);
