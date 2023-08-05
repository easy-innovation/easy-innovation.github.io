/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/language/typescript/tsMode', ['require', 'require'], (require) => {
    var moduleExports = (() => {
        var Z = Object.create;
        var C = Object.defineProperty;
        var ee = Object.getOwnPropertyDescriptor;
        var te = Object.getOwnPropertyNames;
        var ie = Object.getPrototypeOf,
            re = Object.prototype.hasOwnProperty;
        var se = (s, e, t) =>
            e in s
                ? C(s, e, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: t,
                  })
                : (s[e] = t);
        var $ = (s) => C(s, '__esModule', { value: !0 });
        var z = ((s) =>
            typeof require != 'undefined'
                ? require
                : typeof Proxy != 'undefined'
                ? new Proxy(s, {
                      get: (e, t) =>
                          (typeof require != 'undefined' ? require : e)[t],
                  })
                : s)(function (s) {
            if (typeof require != 'undefined')
                return require.apply(this, arguments);
            throw new Error('Dynamic require of "' + s + '" is not supported');
        });
        var ne = (s, e) => () => (
                e || s((e = { exports: {} }).exports, e), e.exports
            ),
            oe = (s, e) => {
                for (var t in e) C(s, t, { get: e[t], enumerable: !0 });
            },
            D = (s, e, t, r) => {
                if ((e && typeof e == 'object') || typeof e == 'function')
                    for (let o of te(e))
                        !re.call(s, o) &&
                            (t || o !== 'default') &&
                            C(s, o, {
                                get: () => e[o],
                                enumerable: !(r = ee(e, o)) || r.enumerable,
                            });
                return s;
            },
            J = (s, e) =>
                D(
                    $(
                        C(
                            s != null ? Z(ie(s)) : {},
                            'default',
                            !e && s && s.__esModule
                                ? { get: () => s.default, enumerable: !0 }
                                : { value: s, enumerable: !0 }
                        )
                    ),
                    s
                ),
            ae = (
                (s) => (e, t) =>
                    (s && s.get(e)) ||
                    ((t = D($({}), e, 1)), s && s.set(e, t), t)
            )(typeof WeakMap != 'undefined' ? new WeakMap() : 0);
        var f = (s, e, t) => (se(s, typeof e != 'symbol' ? e + '' : e, t), t);
        var Q = ne((be, G) => {
            var le = J(z('vs/editor/editor.api'));
            G.exports = le;
        });
        var me = {};
        oe(me, {
            Adapter: () => y,
            CodeActionAdaptor: () => U,
            DefinitionAdapter: () => R,
            DiagnosticsAdapter: () => A,
            FormatAdapter: () => W,
            FormatHelper: () => v,
            FormatOnTypeAdapter: () => H,
            InlayHintsAdapter: () => K,
            Kind: () => l,
            LibFiles: () => L,
            OccurrencesAdapter: () => O,
            OutlineAdapter: () => N,
            QuickInfoAdapter: () => M,
            ReferenceAdapter: () => E,
            RenameAdapter: () => V,
            SignatureHelpAdapter: () => w,
            SuggestAdapter: () => x,
            WorkerManager: () => I,
            flattenDiagnosticMessageText: () => F,
            getJavaScriptWorker: () => pe,
            getTypeScriptWorker: () => de,
            setupJavaScript: () => ge,
            setupTypeScript: () => ue,
        });
        var i = {};
        D(i, J(Q()));
        var I = class {
            _modeId;
            _defaults;
            _configChangeListener;
            _updateExtraLibsToken;
            _extraLibsChangeListener;
            _worker;
            _client;
            constructor(e, t) {
                (this._modeId = e),
                    (this._defaults = t),
                    (this._worker = null),
                    (this._client = null),
                    (this._configChangeListener = this._defaults.onDidChange(
                        () => this._stopWorker()
                    )),
                    (this._updateExtraLibsToken = 0),
                    (this._extraLibsChangeListener =
                        this._defaults.onDidExtraLibsChange(() =>
                            this._updateExtraLibs()
                        ));
            }
            _stopWorker() {
                this._worker && (this._worker.dispose(), (this._worker = null)),
                    (this._client = null);
            }
            dispose() {
                this._configChangeListener.dispose(),
                    this._extraLibsChangeListener.dispose(),
                    this._stopWorker();
            }
            async _updateExtraLibs() {
                if (!this._worker) return;
                let e = ++this._updateExtraLibsToken,
                    t = await this._worker.getProxy();
                this._updateExtraLibsToken === e &&
                    t.updateExtraLibs(this._defaults.getExtraLibs());
            }
            _getClient() {
                if (!this._client) {
                    this._worker = i.editor.createWebWorker({
                        moduleId: 'vs/language/typescript/tsWorker',
                        label: this._modeId,
                        keepIdleModels: !0,
                        createData: {
                            compilerOptions:
                                this._defaults.getCompilerOptions(),
                            extraLibs: this._defaults.getExtraLibs(),
                            customWorkerPath:
                                this._defaults.workerOptions.customWorkerPath,
                            inlayHintsOptions: this._defaults.inlayHintsOptions,
                        },
                    });
                    let e = this._worker.getProxy();
                    this._defaults.getEagerModelSync() &&
                        (e = e.then((t) =>
                            this._worker
                                ? this._worker.withSyncedResources(
                                      i.editor
                                          .getModels()
                                          .filter(
                                              (r) =>
                                                  r.getLanguageId() ===
                                                  this._modeId
                                          )
                                          .map((r) => r.uri)
                                  )
                                : t
                        )),
                        (this._client = e);
                }
                return this._client;
            }
            getLanguageServiceWorker(...e) {
                let t;
                return this._getClient()
                    .then((r) => {
                        t = r;
                    })
                    .then((r) => {
                        if (this._worker)
                            return this._worker.withSyncedResources(e);
                    })
                    .then((r) => t);
            }
        };
        var q = z('./monaco.contribution');
        var a = {};
        a['lib.d.ts'] = !0;
        a['lib.dom.d.ts'] = !0;
        a['lib.dom.iterable.d.ts'] = !0;
        a['lib.es2015.collection.d.ts'] = !0;
        a['lib.es2015.core.d.ts'] = !0;
        a['lib.es2015.d.ts'] = !0;
        a['lib.es2015.generator.d.ts'] = !0;
        a['lib.es2015.iterable.d.ts'] = !0;
        a['lib.es2015.promise.d.ts'] = !0;
        a['lib.es2015.proxy.d.ts'] = !0;
        a['lib.es2015.reflect.d.ts'] = !0;
        a['lib.es2015.symbol.d.ts'] = !0;
        a['lib.es2015.symbol.wellknown.d.ts'] = !0;
        a['lib.es2016.array.include.d.ts'] = !0;
        a['lib.es2016.d.ts'] = !0;
        a['lib.es2016.full.d.ts'] = !0;
        a['lib.es2017.d.ts'] = !0;
        a['lib.es2017.full.d.ts'] = !0;
        a['lib.es2017.intl.d.ts'] = !0;
        a['lib.es2017.object.d.ts'] = !0;
        a['lib.es2017.sharedmemory.d.ts'] = !0;
        a['lib.es2017.string.d.ts'] = !0;
        a['lib.es2017.typedarrays.d.ts'] = !0;
        a['lib.es2018.asyncgenerator.d.ts'] = !0;
        a['lib.es2018.asynciterable.d.ts'] = !0;
        a['lib.es2018.d.ts'] = !0;
        a['lib.es2018.full.d.ts'] = !0;
        a['lib.es2018.intl.d.ts'] = !0;
        a['lib.es2018.promise.d.ts'] = !0;
        a['lib.es2018.regexp.d.ts'] = !0;
        a['lib.es2019.array.d.ts'] = !0;
        a['lib.es2019.d.ts'] = !0;
        a['lib.es2019.full.d.ts'] = !0;
        a['lib.es2019.object.d.ts'] = !0;
        a['lib.es2019.string.d.ts'] = !0;
        a['lib.es2019.symbol.d.ts'] = !0;
        a['lib.es2020.bigint.d.ts'] = !0;
        a['lib.es2020.d.ts'] = !0;
        a['lib.es2020.full.d.ts'] = !0;
        a['lib.es2020.intl.d.ts'] = !0;
        a['lib.es2020.promise.d.ts'] = !0;
        a['lib.es2020.sharedmemory.d.ts'] = !0;
        a['lib.es2020.string.d.ts'] = !0;
        a['lib.es2020.symbol.wellknown.d.ts'] = !0;
        a['lib.es2021.d.ts'] = !0;
        a['lib.es2021.full.d.ts'] = !0;
        a['lib.es2021.intl.d.ts'] = !0;
        a['lib.es2021.promise.d.ts'] = !0;
        a['lib.es2021.string.d.ts'] = !0;
        a['lib.es2021.weakref.d.ts'] = !0;
        a['lib.es5.d.ts'] = !0;
        a['lib.es6.d.ts'] = !0;
        a['lib.esnext.d.ts'] = !0;
        a['lib.esnext.full.d.ts'] = !0;
        a['lib.esnext.intl.d.ts'] = !0;
        a['lib.esnext.promise.d.ts'] = !0;
        a['lib.esnext.string.d.ts'] = !0;
        a['lib.esnext.weakref.d.ts'] = !0;
        a['lib.scripthost.d.ts'] = !0;
        a['lib.webworker.d.ts'] = !0;
        a['lib.webworker.importscripts.d.ts'] = !0;
        a['lib.webworker.iterable.d.ts'] = !0;
        function F(s, e, t = 0) {
            if (typeof s == 'string') return s;
            if (s === void 0) return '';
            let r = '';
            if (t) {
                r += e;
                for (let o = 0; o < t; o++) r += '  ';
            }
            if (((r += s.messageText), t++, s.next))
                for (let o of s.next) r += F(o, e, t);
            return r;
        }
        function S(s) {
            return s ? s.map((e) => e.text).join('') : '';
        }
        var y = class {
                constructor(e) {
                    this._worker = e;
                }
                _textSpanToRange(e, t) {
                    let r = e.getPositionAt(t.start),
                        o = e.getPositionAt(t.start + t.length),
                        { lineNumber: u, column: d } = r,
                        { lineNumber: g, column: n } = o;
                    return {
                        startLineNumber: u,
                        startColumn: d,
                        endLineNumber: g,
                        endColumn: n,
                    };
                }
            },
            L = class {
                constructor(e) {
                    this._worker = e;
                    (this._libFiles = {}),
                        (this._hasFetchedLibFiles = !1),
                        (this._fetchLibFilesPromise = null);
                }
                _libFiles;
                _hasFetchedLibFiles;
                _fetchLibFilesPromise;
                isLibFile(e) {
                    return e && e.path.indexOf('/lib.') === 0
                        ? !!a[e.path.slice(1)]
                        : !1;
                }
                getOrCreateModel(e) {
                    let t = i.Uri.parse(e),
                        r = i.editor.getModel(t);
                    if (r) return r;
                    if (this.isLibFile(t) && this._hasFetchedLibFiles)
                        return i.editor.createModel(
                            this._libFiles[t.path.slice(1)],
                            'typescript',
                            t
                        );
                    let o = q.typescriptDefaults.getExtraLibs()[e];
                    return o
                        ? i.editor.createModel(o.content, 'typescript', t)
                        : null;
                }
                _containsLibFile(e) {
                    for (let t of e) if (this.isLibFile(t)) return !0;
                    return !1;
                }
                async fetchLibFilesIfNecessary(e) {
                    !this._containsLibFile(e) || (await this._fetchLibFiles());
                }
                _fetchLibFiles() {
                    return (
                        this._fetchLibFilesPromise ||
                            (this._fetchLibFilesPromise = this._worker()
                                .then((e) => e.getLibFiles())
                                .then((e) => {
                                    (this._hasFetchedLibFiles = !0),
                                        (this._libFiles = e);
                                })),
                        this._fetchLibFilesPromise
                    );
                }
            };
        var A = class extends y {
                constructor(e, t, r, o) {
                    super(o);
                    this._libFiles = e;
                    this._defaults = t;
                    this._selector = r;
                    let u = (n) => {
                            if (n.getLanguageId() !== r) return;
                            let c = () => {
                                    let { onlyVisible: h } =
                                        this._defaults.getDiagnosticsOptions();
                                    h
                                        ? n.isAttachedToEditor() &&
                                          this._doValidate(n)
                                        : this._doValidate(n);
                                },
                                p,
                                m = n.onDidChangeContent(() => {
                                    clearTimeout(p),
                                        (p = window.setTimeout(c, 500));
                                }),
                                b = n.onDidChangeAttached(() => {
                                    let { onlyVisible: h } =
                                        this._defaults.getDiagnosticsOptions();
                                    h &&
                                        (n.isAttachedToEditor()
                                            ? c()
                                            : i.editor.setModelMarkers(
                                                  n,
                                                  this._selector,
                                                  []
                                              ));
                                });
                            (this._listener[n.uri.toString()] = {
                                dispose() {
                                    m.dispose(), b.dispose(), clearTimeout(p);
                                },
                            }),
                                c();
                        },
                        d = (n) => {
                            i.editor.setModelMarkers(n, this._selector, []);
                            let c = n.uri.toString();
                            this._listener[c] &&
                                (this._listener[c].dispose(),
                                delete this._listener[c]);
                        };
                    this._disposables.push(
                        i.editor.onDidCreateModel((n) => u(n))
                    ),
                        this._disposables.push(i.editor.onWillDisposeModel(d)),
                        this._disposables.push(
                            i.editor.onDidChangeModelLanguage((n) => {
                                d(n.model), u(n.model);
                            })
                        ),
                        this._disposables.push({
                            dispose() {
                                for (let n of i.editor.getModels()) d(n);
                            },
                        });
                    let g = () => {
                        for (let n of i.editor.getModels()) d(n), u(n);
                    };
                    this._disposables.push(this._defaults.onDidChange(g)),
                        this._disposables.push(
                            this._defaults.onDidExtraLibsChange(g)
                        ),
                        i.editor.getModels().forEach((n) => u(n));
                }
                _disposables = [];
                _listener = Object.create(null);
                dispose() {
                    this._disposables.forEach((e) => e && e.dispose()),
                        (this._disposables = []);
                }
                async _doValidate(e) {
                    let t = await this._worker(e.uri);
                    if (e.isDisposed()) return;
                    let r = [],
                        {
                            noSyntaxValidation: o,
                            noSemanticValidation: u,
                            noSuggestionDiagnostics: d,
                        } = this._defaults.getDiagnosticsOptions();
                    o || r.push(t.getSyntacticDiagnostics(e.uri.toString())),
                        u || r.push(t.getSemanticDiagnostics(e.uri.toString())),
                        d ||
                            r.push(
                                t.getSuggestionDiagnostics(e.uri.toString())
                            );
                    let g = await Promise.all(r);
                    if (!g || e.isDisposed()) return;
                    let n = g
                            .reduce((p, m) => m.concat(p), [])
                            .filter(
                                (p) =>
                                    (
                                        this._defaults.getDiagnosticsOptions()
                                            .diagnosticCodesToIgnore || []
                                    ).indexOf(p.code) === -1
                            ),
                        c = n
                            .map((p) => p.relatedInformation || [])
                            .reduce((p, m) => m.concat(p), [])
                            .map((p) =>
                                p.file ? i.Uri.parse(p.file.fileName) : null
                            );
                    await this._libFiles.fetchLibFilesIfNecessary(c),
                        !e.isDisposed() &&
                            i.editor.setModelMarkers(
                                e,
                                this._selector,
                                n.map((p) => this._convertDiagnostics(e, p))
                            );
                }
                _convertDiagnostics(e, t) {
                    let r = t.start || 0,
                        o = t.length || 1,
                        { lineNumber: u, column: d } = e.getPositionAt(r),
                        { lineNumber: g, column: n } = e.getPositionAt(r + o),
                        c = [];
                    return (
                        t.reportsUnnecessary && c.push(i.MarkerTag.Unnecessary),
                        t.reportsDeprecated && c.push(i.MarkerTag.Deprecated),
                        {
                            severity:
                                this._tsDiagnosticCategoryToMarkerSeverity(
                                    t.category
                                ),
                            startLineNumber: u,
                            startColumn: d,
                            endLineNumber: g,
                            endColumn: n,
                            message: F(
                                t.messageText,
                                `
`
                            ),
                            code: t.code.toString(),
                            tags: c,
                            relatedInformation: this._convertRelatedInformation(
                                e,
                                t.relatedInformation
                            ),
                        }
                    );
                }
                _convertRelatedInformation(e, t) {
                    if (!t) return [];
                    let r = [];
                    return (
                        t.forEach((o) => {
                            let u = e;
                            if (
                                (o.file &&
                                    (u = this._libFiles.getOrCreateModel(
                                        o.file.fileName
                                    )),
                                !u)
                            )
                                return;
                            let d = o.start || 0,
                                g = o.length || 1,
                                { lineNumber: n, column: c } =
                                    u.getPositionAt(d),
                                { lineNumber: p, column: m } = u.getPositionAt(
                                    d + g
                                );
                            r.push({
                                resource: u.uri,
                                startLineNumber: n,
                                startColumn: c,
                                endLineNumber: p,
                                endColumn: m,
                                message: F(
                                    o.messageText,
                                    `
`
                                ),
                            });
                        }),
                        r
                    );
                }
                _tsDiagnosticCategoryToMarkerSeverity(e) {
                    switch (e) {
                        case 1:
                            return i.MarkerSeverity.Error;
                        case 3:
                            return i.MarkerSeverity.Info;
                        case 0:
                            return i.MarkerSeverity.Warning;
                        case 2:
                            return i.MarkerSeverity.Hint;
                    }
                    return i.MarkerSeverity.Info;
                }
            },
            x = class extends y {
                get triggerCharacters() {
                    return ['.'];
                }
                async provideCompletionItems(e, t, r, o) {
                    let u = e.getWordUntilPosition(t),
                        d = new i.Range(
                            t.lineNumber,
                            u.startColumn,
                            t.lineNumber,
                            u.endColumn
                        ),
                        g = e.uri,
                        n = e.getOffsetAt(t),
                        c = await this._worker(g);
                    if (e.isDisposed()) return;
                    let p = await c.getCompletionsAtPosition(g.toString(), n);
                    return !p || e.isDisposed()
                        ? void 0
                        : {
                              suggestions: p.entries.map((b) => {
                                  let h = d;
                                  if (b.replacementSpan) {
                                      let T = e.getPositionAt(
                                              b.replacementSpan.start
                                          ),
                                          P = e.getPositionAt(
                                              b.replacementSpan.start +
                                                  b.replacementSpan.length
                                          );
                                      h = new i.Range(
                                          T.lineNumber,
                                          T.column,
                                          P.lineNumber,
                                          P.column
                                      );
                                  }
                                  let _ = [];
                                  return (
                                      b.kindModifiers?.indexOf('deprecated') !==
                                          -1 &&
                                          _.push(
                                              i.languages.CompletionItemTag
                                                  .Deprecated
                                          ),
                                      {
                                          uri: g,
                                          position: t,
                                          offset: n,
                                          range: h,
                                          label: b.name,
                                          insertText: b.name,
                                          sortText: b.sortText,
                                          kind: x.convertKind(b.kind),
                                          tags: _,
                                      }
                                  );
                              }),
                          };
                }
                async resolveCompletionItem(e, t) {
                    let r = e,
                        o = r.uri,
                        u = r.position,
                        d = r.offset,
                        n = await (
                            await this._worker(o)
                        ).getCompletionEntryDetails(o.toString(), d, r.label);
                    return n
                        ? {
                              uri: o,
                              position: u,
                              label: n.name,
                              kind: x.convertKind(n.kind),
                              detail: S(n.displayParts),
                              documentation: {
                                  value: x.createDocumentationString(n),
                              },
                          }
                        : r;
                }
                static convertKind(e) {
                    switch (e) {
                        case l.primitiveType:
                        case l.keyword:
                            return i.languages.CompletionItemKind.Keyword;
                        case l.variable:
                        case l.localVariable:
                            return i.languages.CompletionItemKind.Variable;
                        case l.memberVariable:
                        case l.memberGetAccessor:
                        case l.memberSetAccessor:
                            return i.languages.CompletionItemKind.Field;
                        case l.function:
                        case l.memberFunction:
                        case l.constructSignature:
                        case l.callSignature:
                        case l.indexSignature:
                            return i.languages.CompletionItemKind.Function;
                        case l.enum:
                            return i.languages.CompletionItemKind.Enum;
                        case l.module:
                            return i.languages.CompletionItemKind.Module;
                        case l.class:
                            return i.languages.CompletionItemKind.Class;
                        case l.interface:
                            return i.languages.CompletionItemKind.Interface;
                        case l.warning:
                            return i.languages.CompletionItemKind.File;
                    }
                    return i.languages.CompletionItemKind.Property;
                }
                static createDocumentationString(e) {
                    let t = S(e.documentation);
                    if (e.tags)
                        for (let r of e.tags)
                            t += `

${X(r)}`;
                    return t;
                }
            };
        function X(s) {
            let e = `*@${s.name}*`;
            if (s.name === 'param' && s.text) {
                let [t, ...r] = s.text;
                (e += `\`${t.text}\``),
                    r.length > 0 &&
                        (e += ` \u2014 ${r.map((o) => o.text).join(' ')}`);
            } else
                Array.isArray(s.text)
                    ? (e += ` \u2014 ${s.text.map((t) => t.text).join(' ')}`)
                    : s.text && (e += ` \u2014 ${s.text}`);
            return e;
        }
        var w = class extends y {
                signatureHelpTriggerCharacters = ['(', ','];
                static _toSignatureHelpTriggerReason(e) {
                    switch (e.triggerKind) {
                        case i.languages.SignatureHelpTriggerKind
                            .TriggerCharacter:
                            return e.triggerCharacter
                                ? e.isRetrigger
                                    ? {
                                          kind: 'retrigger',
                                          triggerCharacter: e.triggerCharacter,
                                      }
                                    : {
                                          kind: 'characterTyped',
                                          triggerCharacter: e.triggerCharacter,
                                      }
                                : { kind: 'invoked' };
                        case i.languages.SignatureHelpTriggerKind.ContentChange:
                            return e.isRetrigger
                                ? { kind: 'retrigger' }
                                : { kind: 'invoked' };
                        case i.languages.SignatureHelpTriggerKind.Invoke:
                        default:
                            return { kind: 'invoked' };
                    }
                }
                async provideSignatureHelp(e, t, r, o) {
                    let u = e.uri,
                        d = e.getOffsetAt(t),
                        g = await this._worker(u);
                    if (e.isDisposed()) return;
                    let n = await g.getSignatureHelpItems(u.toString(), d, {
                        triggerReason: w._toSignatureHelpTriggerReason(o),
                    });
                    if (!n || e.isDisposed()) return;
                    let c = {
                        activeSignature: n.selectedItemIndex,
                        activeParameter: n.argumentIndex,
                        signatures: [],
                    };
                    return (
                        n.items.forEach((p) => {
                            let m = { label: '', parameters: [] };
                            (m.documentation = { value: S(p.documentation) }),
                                (m.label += S(p.prefixDisplayParts)),
                                p.parameters.forEach((b, h, _) => {
                                    let T = S(b.displayParts),
                                        P = {
                                            label: T,
                                            documentation: {
                                                value: S(b.documentation),
                                            },
                                        };
                                    (m.label += T),
                                        m.parameters.push(P),
                                        h < _.length - 1 &&
                                            (m.label += S(
                                                p.separatorDisplayParts
                                            ));
                                }),
                                (m.label += S(p.suffixDisplayParts)),
                                c.signatures.push(m);
                        }),
                        { value: c, dispose() {} }
                    );
                }
            },
            M = class extends y {
                async provideHover(e, t, r) {
                    let o = e.uri,
                        u = e.getOffsetAt(t),
                        d = await this._worker(o);
                    if (e.isDisposed()) return;
                    let g = await d.getQuickInfoAtPosition(o.toString(), u);
                    if (!g || e.isDisposed()) return;
                    let n = S(g.documentation),
                        c = g.tags
                            ? g.tags.map((m) => X(m)).join(`  

`)
                            : '',
                        p = S(g.displayParts);
                    return {
                        range: this._textSpanToRange(e, g.textSpan),
                        contents: [
                            { value: '```typescript\n' + p + '\n```\n' },
                            {
                                value:
                                    n +
                                    (c
                                        ? `

` + c
                                        : ''),
                            },
                        ],
                    };
                }
            },
            O = class extends y {
                async provideDocumentHighlights(e, t, r) {
                    let o = e.uri,
                        u = e.getOffsetAt(t),
                        d = await this._worker(o);
                    if (e.isDisposed()) return;
                    let g = await d.getOccurrencesAtPosition(o.toString(), u);
                    if (!(!g || e.isDisposed()))
                        return g.map((n) => ({
                            range: this._textSpanToRange(e, n.textSpan),
                            kind: n.isWriteAccess
                                ? i.languages.DocumentHighlightKind.Write
                                : i.languages.DocumentHighlightKind.Text,
                        }));
                }
            },
            R = class extends y {
                constructor(e, t) {
                    super(t);
                    this._libFiles = e;
                }
                async provideDefinition(e, t, r) {
                    let o = e.uri,
                        u = e.getOffsetAt(t),
                        d = await this._worker(o);
                    if (e.isDisposed()) return;
                    let g = await d.getDefinitionAtPosition(o.toString(), u);
                    if (
                        !g ||
                        e.isDisposed() ||
                        (await this._libFiles.fetchLibFilesIfNecessary(
                            g.map((c) => i.Uri.parse(c.fileName))
                        ),
                        e.isDisposed())
                    )
                        return;
                    let n = [];
                    for (let c of g) {
                        let p = this._libFiles.getOrCreateModel(c.fileName);
                        p &&
                            n.push({
                                uri: p.uri,
                                range: this._textSpanToRange(p, c.textSpan),
                            });
                    }
                    return n;
                }
            },
            E = class extends y {
                constructor(e, t) {
                    super(t);
                    this._libFiles = e;
                }
                async provideReferences(e, t, r, o) {
                    let u = e.uri,
                        d = e.getOffsetAt(t),
                        g = await this._worker(u);
                    if (e.isDisposed()) return;
                    let n = await g.getReferencesAtPosition(u.toString(), d);
                    if (
                        !n ||
                        e.isDisposed() ||
                        (await this._libFiles.fetchLibFilesIfNecessary(
                            n.map((p) => i.Uri.parse(p.fileName))
                        ),
                        e.isDisposed())
                    )
                        return;
                    let c = [];
                    for (let p of n) {
                        let m = this._libFiles.getOrCreateModel(p.fileName);
                        m &&
                            c.push({
                                uri: m.uri,
                                range: this._textSpanToRange(m, p.textSpan),
                            });
                    }
                    return c;
                }
            },
            N = class extends y {
                async provideDocumentSymbols(e, t) {
                    let r = e.uri,
                        o = await this._worker(r);
                    if (e.isDisposed()) return;
                    let u = await o.getNavigationBarItems(r.toString());
                    if (!u || e.isDisposed()) return;
                    let d = (n, c, p) => {
                            let m = {
                                name: c.text,
                                detail: '',
                                kind:
                                    k[c.kind] ||
                                    i.languages.SymbolKind.Variable,
                                range: this._textSpanToRange(e, c.spans[0]),
                                selectionRange: this._textSpanToRange(
                                    e,
                                    c.spans[0]
                                ),
                                tags: [],
                            };
                            if (
                                (p && (m.containerName = p),
                                c.childItems && c.childItems.length > 0)
                            )
                                for (let b of c.childItems) d(n, b, m.name);
                            n.push(m);
                        },
                        g = [];
                    return u.forEach((n) => d(g, n)), g;
                }
            },
            l = class {};
        f(l, 'unknown', ''),
            f(l, 'keyword', 'keyword'),
            f(l, 'script', 'script'),
            f(l, 'module', 'module'),
            f(l, 'class', 'class'),
            f(l, 'interface', 'interface'),
            f(l, 'type', 'type'),
            f(l, 'enum', 'enum'),
            f(l, 'variable', 'var'),
            f(l, 'localVariable', 'local var'),
            f(l, 'function', 'function'),
            f(l, 'localFunction', 'local function'),
            f(l, 'memberFunction', 'method'),
            f(l, 'memberGetAccessor', 'getter'),
            f(l, 'memberSetAccessor', 'setter'),
            f(l, 'memberVariable', 'property'),
            f(l, 'constructorImplementation', 'constructor'),
            f(l, 'callSignature', 'call'),
            f(l, 'indexSignature', 'index'),
            f(l, 'constructSignature', 'construct'),
            f(l, 'parameter', 'parameter'),
            f(l, 'typeParameter', 'type parameter'),
            f(l, 'primitiveType', 'primitive type'),
            f(l, 'label', 'label'),
            f(l, 'alias', 'alias'),
            f(l, 'const', 'const'),
            f(l, 'let', 'let'),
            f(l, 'warning', 'warning');
        var k = Object.create(null);
        k[l.module] = i.languages.SymbolKind.Module;
        k[l.class] = i.languages.SymbolKind.Class;
        k[l.enum] = i.languages.SymbolKind.Enum;
        k[l.interface] = i.languages.SymbolKind.Interface;
        k[l.memberFunction] = i.languages.SymbolKind.Method;
        k[l.memberVariable] = i.languages.SymbolKind.Property;
        k[l.memberGetAccessor] = i.languages.SymbolKind.Property;
        k[l.memberSetAccessor] = i.languages.SymbolKind.Property;
        k[l.variable] = i.languages.SymbolKind.Variable;
        k[l.const] = i.languages.SymbolKind.Variable;
        k[l.localVariable] = i.languages.SymbolKind.Variable;
        k[l.variable] = i.languages.SymbolKind.Variable;
        k[l.function] = i.languages.SymbolKind.Function;
        k[l.localFunction] = i.languages.SymbolKind.Function;
        var v = class extends y {
                static _convertOptions(e) {
                    return {
                        ConvertTabsToSpaces: e.insertSpaces,
                        TabSize: e.tabSize,
                        IndentSize: e.tabSize,
                        IndentStyle: 2,
                        NewLineCharacter: `
`,
                        InsertSpaceAfterCommaDelimiter: !0,
                        InsertSpaceAfterSemicolonInForStatements: !0,
                        InsertSpaceBeforeAndAfterBinaryOperators: !0,
                        InsertSpaceAfterKeywordsInControlFlowStatements: !0,
                        InsertSpaceAfterFunctionKeywordForAnonymousFunctions:
                            !0,
                        InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:
                            !1,
                        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:
                            !1,
                        InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:
                            !1,
                        PlaceOpenBraceOnNewLineForControlBlocks: !1,
                        PlaceOpenBraceOnNewLineForFunctions: !1,
                    };
                }
                _convertTextChanges(e, t) {
                    return {
                        text: t.newText,
                        range: this._textSpanToRange(e, t.span),
                    };
                }
            },
            W = class extends v {
                async provideDocumentRangeFormattingEdits(e, t, r, o) {
                    let u = e.uri,
                        d = e.getOffsetAt({
                            lineNumber: t.startLineNumber,
                            column: t.startColumn,
                        }),
                        g = e.getOffsetAt({
                            lineNumber: t.endLineNumber,
                            column: t.endColumn,
                        }),
                        n = await this._worker(u);
                    if (e.isDisposed()) return;
                    let c = await n.getFormattingEditsForRange(
                        u.toString(),
                        d,
                        g,
                        v._convertOptions(r)
                    );
                    if (!(!c || e.isDisposed()))
                        return c.map((p) => this._convertTextChanges(e, p));
                }
            },
            H = class extends v {
                get autoFormatTriggerCharacters() {
                    return [
                        ';',
                        '}',
                        `
`,
                    ];
                }
                async provideOnTypeFormattingEdits(e, t, r, o, u) {
                    let d = e.uri,
                        g = e.getOffsetAt(t),
                        n = await this._worker(d);
                    if (e.isDisposed()) return;
                    let c = await n.getFormattingEditsAfterKeystroke(
                        d.toString(),
                        g,
                        r,
                        v._convertOptions(o)
                    );
                    if (!(!c || e.isDisposed()))
                        return c.map((p) => this._convertTextChanges(e, p));
                }
            },
            U = class extends v {
                async provideCodeActions(e, t, r, o) {
                    let u = e.uri,
                        d = e.getOffsetAt({
                            lineNumber: t.startLineNumber,
                            column: t.startColumn,
                        }),
                        g = e.getOffsetAt({
                            lineNumber: t.endLineNumber,
                            column: t.endColumn,
                        }),
                        n = v._convertOptions(e.getOptions()),
                        c = r.markers
                            .filter((h) => h.code)
                            .map((h) => h.code)
                            .map(Number),
                        p = await this._worker(u);
                    if (e.isDisposed()) return;
                    let m = await p.getCodeFixesAtPosition(
                        u.toString(),
                        d,
                        g,
                        c,
                        n
                    );
                    return !m || e.isDisposed()
                        ? { actions: [], dispose: () => {} }
                        : {
                              actions: m
                                  .filter(
                                      (h) =>
                                          h.changes.filter((_) => _.isNewFile)
                                              .length === 0
                                  )
                                  .map((h) =>
                                      this._tsCodeFixActionToMonacoCodeAction(
                                          e,
                                          r,
                                          h
                                      )
                                  ),
                              dispose: () => {},
                          };
                }
                _tsCodeFixActionToMonacoCodeAction(e, t, r) {
                    let o = [];
                    for (let d of r.changes)
                        for (let g of d.textChanges)
                            o.push({
                                resource: e.uri,
                                edit: {
                                    range: this._textSpanToRange(e, g.span),
                                    text: g.newText,
                                },
                            });
                    return {
                        title: r.description,
                        edit: { edits: o },
                        diagnostics: t.markers,
                        kind: 'quickfix',
                    };
                }
            },
            V = class extends y {
                constructor(e, t) {
                    super(t);
                    this._libFiles = e;
                }
                async provideRenameEdits(e, t, r, o) {
                    let u = e.uri,
                        d = u.toString(),
                        g = e.getOffsetAt(t),
                        n = await this._worker(u);
                    if (e.isDisposed()) return;
                    let c = await n.getRenameInfo(d, g, {
                        allowRenameOfImportPath: !1,
                    });
                    if (c.canRename === !1)
                        return {
                            edits: [],
                            rejectReason: c.localizedErrorMessage,
                        };
                    if (c.fileToRename !== void 0)
                        throw new Error('Renaming files is not supported.');
                    let p = await n.findRenameLocations(d, g, !1, !1, !1);
                    if (!p || e.isDisposed()) return;
                    let m = [];
                    for (let b of p) {
                        let h = this._libFiles.getOrCreateModel(b.fileName);
                        if (h)
                            m.push({
                                resource: h.uri,
                                edit: {
                                    range: this._textSpanToRange(h, b.textSpan),
                                    text: r,
                                },
                            });
                        else throw new Error(`Unknown file ${b.fileName}.`);
                    }
                    return { edits: m };
                }
            },
            K = class extends y {
                async provideInlayHints(e, t, r) {
                    let o = e.uri,
                        u = o.toString(),
                        d = e.getOffsetAt({
                            lineNumber: t.startLineNumber,
                            column: t.startColumn,
                        }),
                        g = e.getOffsetAt({
                            lineNumber: t.endLineNumber,
                            column: t.endColumn,
                        }),
                        n = await this._worker(o);
                    return e.isDisposed()
                        ? null
                        : {
                              hints: (await n.provideInlayHints(u, d, g)).map(
                                  (m) => ({
                                      ...m,
                                      label: m.text,
                                      position: e.getPositionAt(m.position),
                                      kind: this._convertHintKind(m.kind),
                                  })
                              ),
                              dispose: () => {},
                          };
                }
                _convertHintKind(e) {
                    switch (e) {
                        case 'Parameter':
                            return i.languages.InlayHintKind.Parameter;
                        case 'Type':
                            return i.languages.InlayHintKind.Type;
                        default:
                            return i.languages.InlayHintKind.Type;
                    }
                }
            };
        var B, j;
        function ue(s) {
            j = Y(s, 'typescript');
        }
        function ge(s) {
            B = Y(s, 'javascript');
        }
        function pe() {
            return new Promise((s, e) => {
                if (!B) return e('JavaScript not registered!');
                s(B);
            });
        }
        function de() {
            return new Promise((s, e) => {
                if (!j) return e('TypeScript not registered!');
                s(j);
            });
        }
        function Y(s, e) {
            let t = new I(e, s),
                r = (...u) => t.getLanguageServiceWorker(...u),
                o = new L(r);
            return (
                i.languages.registerCompletionItemProvider(e, new x(r)),
                i.languages.registerSignatureHelpProvider(e, new w(r)),
                i.languages.registerHoverProvider(e, new M(r)),
                i.languages.registerDocumentHighlightProvider(e, new O(r)),
                i.languages.registerDefinitionProvider(e, new R(o, r)),
                i.languages.registerReferenceProvider(e, new E(o, r)),
                i.languages.registerDocumentSymbolProvider(e, new N(r)),
                i.languages.registerDocumentRangeFormattingEditProvider(
                    e,
                    new W(r)
                ),
                i.languages.registerOnTypeFormattingEditProvider(e, new H(r)),
                i.languages.registerCodeActionProvider(e, new U(r)),
                i.languages.registerRenameProvider(e, new V(o, r)),
                i.languages.registerInlayHintsProvider(e, new K(r)),
                new A(o, s, e, r),
                r
            );
        }
        return ae(me);
    })();
    return moduleExports;
});
