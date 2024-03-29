/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/pascaligo/pascaligo', ['require', 'require'], (
    require
) => {
    var moduleExports = (() => {
        var s = Object.defineProperty;
        var i = Object.getOwnPropertyDescriptor;
        var a = Object.getOwnPropertyNames;
        var l = Object.prototype.hasOwnProperty;
        var c = (o) => s(o, '__esModule', { value: !0 });
        var m = (o, e) => {
                for (var n in e) s(o, n, { get: e[n], enumerable: !0 });
            },
            p = (o, e, n, r) => {
                if ((e && typeof e == 'object') || typeof e == 'function')
                    for (let t of a(e))
                        !l.call(o, t) &&
                            (n || t !== 'default') &&
                            s(o, t, {
                                get: () => e[t],
                                enumerable: !(r = i(e, t)) || r.enumerable,
                            });
                return o;
            };
        var d = (
            (o) => (e, n) =>
                (o && o.get(e)) || ((n = p(c({}), e, 1)), o && o.set(e, n), n)
        )(typeof WeakMap != 'undefined' ? new WeakMap() : 0);
        var k = {};
        m(k, { conf: () => g, language: () => u });
        var g = {
                comments: { lineComment: '//', blockComment: ['(*', '*)'] },
                brackets: [
                    ['{', '}'],
                    ['[', ']'],
                    ['(', ')'],
                    ['<', '>'],
                ],
                autoClosingPairs: [
                    { open: '{', close: '}' },
                    { open: '[', close: ']' },
                    { open: '(', close: ')' },
                    { open: '<', close: '>' },
                    { open: "'", close: "'" },
                ],
                surroundingPairs: [
                    { open: '{', close: '}' },
                    { open: '[', close: ']' },
                    { open: '(', close: ')' },
                    { open: '<', close: '>' },
                    { open: "'", close: "'" },
                ],
            },
            u = {
                defaultToken: '',
                tokenPostfix: '.pascaligo',
                ignoreCase: !0,
                brackets: [
                    { open: '{', close: '}', token: 'delimiter.curly' },
                    { open: '[', close: ']', token: 'delimiter.square' },
                    { open: '(', close: ')', token: 'delimiter.parenthesis' },
                    { open: '<', close: '>', token: 'delimiter.angle' },
                ],
                keywords: [
                    'begin',
                    'block',
                    'case',
                    'const',
                    'else',
                    'end',
                    'fail',
                    'for',
                    'from',
                    'function',
                    'if',
                    'is',
                    'nil',
                    'of',
                    'remove',
                    'return',
                    'skip',
                    'then',
                    'type',
                    'var',
                    'while',
                    'with',
                    'option',
                    'None',
                    'transaction',
                ],
                typeKeywords: [
                    'bool',
                    'int',
                    'list',
                    'map',
                    'nat',
                    'record',
                    'string',
                    'unit',
                    'address',
                    'map',
                    'mtz',
                    'xtz',
                ],
                operators: [
                    '=',
                    '>',
                    '<',
                    '<=',
                    '>=',
                    '<>',
                    ':',
                    ':=',
                    'and',
                    'mod',
                    'or',
                    '+',
                    '-',
                    '*',
                    '/',
                    '@',
                    '&',
                    '^',
                    '%',
                ],
                symbols: /[=><:@\^&|+\-*\/\^%]+/,
                tokenizer: {
                    root: [
                        [
                            /[a-zA-Z_][\w]*/,
                            {
                                cases: {
                                    '@keywords': { token: 'keyword.$0' },
                                    '@default': 'identifier',
                                },
                            },
                        ],
                        { include: '@whitespace' },
                        [/[{}()\[\]]/, '@brackets'],
                        [/[<>](?!@symbols)/, '@brackets'],
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
                        [/\$[0-9a-fA-F]{1,16}/, 'number.hex'],
                        [/\d+/, 'number'],
                        [/[;,.]/, 'delimiter'],
                        [/'([^'\\]|\\.)*$/, 'string.invalid'],
                        [/'/, 'string', '@string'],
                        [/'[^\\']'/, 'string'],
                        [/'/, 'string.invalid'],
                        [/\#\d+/, 'string'],
                    ],
                    comment: [
                        [/[^\(\*]+/, 'comment'],
                        [/\*\)/, 'comment', '@pop'],
                        [/\(\*/, 'comment'],
                    ],
                    string: [
                        [/[^\\']+/, 'string'],
                        [/\\./, 'string.escape.invalid'],
                        [
                            /'/,
                            {
                                token: 'string.quote',
                                bracket: '@close',
                                next: '@pop',
                            },
                        ],
                    ],
                    whitespace: [
                        [/[ \t\r\n]+/, 'white'],
                        [/\(\*/, 'comment', '@comment'],
                        [/\/\/.*$/, 'comment'],
                    ],
                },
            };
        return d(k);
    })();
    return moduleExports;
});
