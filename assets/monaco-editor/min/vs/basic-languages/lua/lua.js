/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/lua/lua', ['require', 'require'], (require) => {
    var moduleExports = (() => {
        var s = Object.defineProperty;
        var a = Object.getOwnPropertyDescriptor;
        var i = Object.getOwnPropertyNames;
        var l = Object.prototype.hasOwnProperty;
        var c = (o) => s(o, '__esModule', { value: !0 });
        var m = (o, e) => {
                for (var n in e) s(o, n, { get: e[n], enumerable: !0 });
            },
            p = (o, e, n, r) => {
                if ((e && typeof e == 'object') || typeof e == 'function')
                    for (let t of i(e))
                        !l.call(o, t) &&
                            (n || t !== 'default') &&
                            s(o, t, {
                                get: () => e[t],
                                enumerable: !(r = a(e, t)) || r.enumerable,
                            });
                return o;
            };
        var d = (
            (o) => (e, n) =>
                (o && o.get(e)) || ((n = p(c({}), e, 1)), o && o.set(e, n), n)
        )(typeof WeakMap != 'undefined' ? new WeakMap() : 0);
        var f = {};
        m(f, { conf: () => g, language: () => u });
        var g = {
                comments: { lineComment: '--', blockComment: ['--[[', ']]'] },
                brackets: [
                    ['{', '}'],
                    ['[', ']'],
                    ['(', ')'],
                ],
                autoClosingPairs: [
                    { open: '{', close: '}' },
                    { open: '[', close: ']' },
                    { open: '(', close: ')' },
                    { open: '"', close: '"' },
                    { open: "'", close: "'" },
                ],
                surroundingPairs: [
                    { open: '{', close: '}' },
                    { open: '[', close: ']' },
                    { open: '(', close: ')' },
                    { open: '"', close: '"' },
                    { open: "'", close: "'" },
                ],
            },
            u = {
                defaultToken: '',
                tokenPostfix: '.lua',
                keywords: [
                    'and',
                    'break',
                    'do',
                    'else',
                    'elseif',
                    'end',
                    'false',
                    'for',
                    'function',
                    'goto',
                    'if',
                    'in',
                    'local',
                    'nil',
                    'not',
                    'or',
                    'repeat',
                    'return',
                    'then',
                    'true',
                    'until',
                    'while',
                ],
                brackets: [
                    { token: 'delimiter.bracket', open: '{', close: '}' },
                    { token: 'delimiter.array', open: '[', close: ']' },
                    { token: 'delimiter.parenthesis', open: '(', close: ')' },
                ],
                operators: [
                    '+',
                    '-',
                    '*',
                    '/',
                    '%',
                    '^',
                    '#',
                    '==',
                    '~=',
                    '<=',
                    '>=',
                    '<',
                    '>',
                    '=',
                    ';',
                    ':',
                    ',',
                    '.',
                    '..',
                    '...',
                ],
                symbols: /[=><!~?:&|+\-*\/\^%]+/,
                escapes:
                    /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
                tokenizer: {
                    root: [
                        [
                            /[a-zA-Z_]\w*/,
                            {
                                cases: {
                                    '@keywords': { token: 'keyword.$0' },
                                    '@default': 'identifier',
                                },
                            },
                        ],
                        { include: '@whitespace' },
                        [
                            /(,)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/,
                            ['delimiter', '', 'key', '', 'delimiter'],
                        ],
                        [
                            /({)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/,
                            ['@brackets', '', 'key', '', 'delimiter'],
                        ],
                        [/[{}()\[\]]/, '@brackets'],
                        [
                            /@symbols/,
                            {
                                cases: {
                                    '@operators': 'delimiter',
                                    '@default': '',
                                },
                            },
                        ],
                        [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                        [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
                        [/\d+?/, 'number'],
                        [/[;,.]/, 'delimiter'],
                        [/"([^"\\]|\\.)*$/, 'string.invalid'],
                        [/'([^'\\]|\\.)*$/, 'string.invalid'],
                        [/"/, 'string', '@string."'],
                        [/'/, 'string', "@string.'"],
                    ],
                    whitespace: [
                        [/[ \t\r\n]+/, ''],
                        [/--\[([=]*)\[/, 'comment', '@comment.$1'],
                        [/--.*$/, 'comment'],
                    ],
                    comment: [
                        [/[^\]]+/, 'comment'],
                        [
                            /\]([=]*)\]/,
                            {
                                cases: {
                                    '$1==$S2': {
                                        token: 'comment',
                                        next: '@pop',
                                    },
                                    '@default': 'comment',
                                },
                            },
                        ],
                        [/./, 'comment'],
                    ],
                    string: [
                        [/[^\\"']+/, 'string'],
                        [/@escapes/, 'string.escape'],
                        [/\\./, 'string.escape.invalid'],
                        [
                            /["']/,
                            {
                                cases: {
                                    '$#==$S2': {
                                        token: 'string',
                                        next: '@pop',
                                    },
                                    '@default': 'string',
                                },
                            },
                        ],
                    ],
                },
            };
        return d(f);
    })();
    return moduleExports;
});
