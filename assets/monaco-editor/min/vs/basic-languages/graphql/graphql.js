/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/graphql/graphql', ['require', 'require'], (
    require
) => {
    var moduleExports = (() => {
        var s = Object.defineProperty;
        var a = Object.getOwnPropertyDescriptor;
        var i = Object.getOwnPropertyNames;
        var l = Object.prototype.hasOwnProperty;
        var c = (n) => s(n, '__esModule', { value: !0 });
        var d = (n, e) => {
                for (var o in e) s(n, o, { get: e[o], enumerable: !0 });
            },
            p = (n, e, o, r) => {
                if ((e && typeof e == 'object') || typeof e == 'function')
                    for (let t of i(e))
                        !l.call(n, t) &&
                            (o || t !== 'default') &&
                            s(n, t, {
                                get: () => e[t],
                                enumerable: !(r = a(e, t)) || r.enumerable,
                            });
                return n;
            };
        var g = (
            (n) => (e, o) =>
                (n && n.get(e)) || ((o = p(c({}), e, 1)), n && n.set(e, o), o)
        )(typeof WeakMap != 'undefined' ? new WeakMap() : 0);
        var m = {};
        d(m, { conf: () => I, language: () => u });
        var I = {
                comments: { lineComment: '#' },
                brackets: [
                    ['{', '}'],
                    ['[', ']'],
                    ['(', ')'],
                ],
                autoClosingPairs: [
                    { open: '{', close: '}' },
                    { open: '[', close: ']' },
                    { open: '(', close: ')' },
                    { open: '"""', close: '"""', notIn: ['string', 'comment'] },
                    { open: '"', close: '"', notIn: ['string', 'comment'] },
                ],
                surroundingPairs: [
                    { open: '{', close: '}' },
                    { open: '[', close: ']' },
                    { open: '(', close: ')' },
                    { open: '"""', close: '"""' },
                    { open: '"', close: '"' },
                ],
                folding: { offSide: !0 },
            },
            u = {
                defaultToken: 'invalid',
                tokenPostfix: '.gql',
                keywords: [
                    'null',
                    'true',
                    'false',
                    'query',
                    'mutation',
                    'subscription',
                    'extend',
                    'schema',
                    'directive',
                    'scalar',
                    'type',
                    'interface',
                    'union',
                    'enum',
                    'input',
                    'implements',
                    'fragment',
                    'on',
                ],
                typeKeywords: ['Int', 'Float', 'String', 'Boolean', 'ID'],
                directiveLocations: [
                    'SCHEMA',
                    'SCALAR',
                    'OBJECT',
                    'FIELD_DEFINITION',
                    'ARGUMENT_DEFINITION',
                    'INTERFACE',
                    'UNION',
                    'ENUM',
                    'ENUM_VALUE',
                    'INPUT_OBJECT',
                    'INPUT_FIELD_DEFINITION',
                    'QUERY',
                    'MUTATION',
                    'SUBSCRIPTION',
                    'FIELD',
                    'FRAGMENT_DEFINITION',
                    'FRAGMENT_SPREAD',
                    'INLINE_FRAGMENT',
                    'VARIABLE_DEFINITION',
                ],
                operators: ['=', '!', '?', ':', '&', '|'],
                symbols: /[=!?:&|]+/,
                escapes: /\\(?:["\\\/bfnrt]|u[0-9A-Fa-f]{4})/,
                tokenizer: {
                    root: [
                        [
                            /[a-z_][\w$]*/,
                            {
                                cases: {
                                    '@keywords': 'keyword',
                                    '@default': 'key.identifier',
                                },
                            },
                        ],
                        [
                            /[$][\w$]*/,
                            {
                                cases: {
                                    '@keywords': 'keyword',
                                    '@default': 'argument.identifier',
                                },
                            },
                        ],
                        [
                            /[A-Z][\w\$]*/,
                            {
                                cases: {
                                    '@typeKeywords': 'keyword',
                                    '@default': 'type.identifier',
                                },
                            },
                        ],
                        { include: '@whitespace' },
                        [/[{}()\[\]]/, '@brackets'],
                        [
                            /@symbols/,
                            {
                                cases: {
                                    '@operators': 'operator',
                                    '@default': '',
                                },
                            },
                        ],
                        [
                            /@\s*[a-zA-Z_\$][\w\$]*/,
                            {
                                token: 'annotation',
                                log: 'annotation token: $0',
                            },
                        ],
                        [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                        [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                        [/\d+/, 'number'],
                        [/[;,.]/, 'delimiter'],
                        [
                            /"""/,
                            {
                                token: 'string',
                                next: '@mlstring',
                                nextEmbedded: 'markdown',
                            },
                        ],
                        [/"([^"\\]|\\.)*$/, 'string.invalid'],
                        [
                            /"/,
                            {
                                token: 'string.quote',
                                bracket: '@open',
                                next: '@string',
                            },
                        ],
                    ],
                    mlstring: [
                        [/[^"]+/, 'string'],
                        [
                            '"""',
                            {
                                token: 'string',
                                next: '@pop',
                                nextEmbedded: '@pop',
                            },
                        ],
                    ],
                    string: [
                        [/[^\\"]+/, 'string'],
                        [/@escapes/, 'string.escape'],
                        [/\\./, 'string.escape.invalid'],
                        [
                            /"/,
                            {
                                token: 'string.quote',
                                bracket: '@close',
                                next: '@pop',
                            },
                        ],
                    ],
                    whitespace: [
                        [/[ \t\r\n]+/, ''],
                        [/#.*$/, 'comment'],
                    ],
                },
            };
        return g(m);
    })();
    return moduleExports;
});
