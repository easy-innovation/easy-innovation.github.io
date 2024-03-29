/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/tcl/tcl', ['require', 'require'], (require) => {
    var moduleExports = (() => {
        var s = Object.defineProperty;
        var r = Object.getOwnPropertyDescriptor;
        var a = Object.getOwnPropertyNames;
        var l = Object.prototype.hasOwnProperty;
        var c = (t) => s(t, '__esModule', { value: !0 });
        var p = (t, e) => {
                for (var n in e) s(t, n, { get: e[n], enumerable: !0 });
            },
            u = (t, e, n, i) => {
                if ((e && typeof e == 'object') || typeof e == 'function')
                    for (let o of a(e))
                        !l.call(t, o) &&
                            (n || o !== 'default') &&
                            s(t, o, {
                                get: () => e[o],
                                enumerable: !(i = r(e, o)) || i.enumerable,
                            });
                return t;
            };
        var k = (
            (t) => (e, n) =>
                (t && t.get(e)) || ((n = u(c({}), e, 1)), t && t.set(e, n), n)
        )(typeof WeakMap != 'undefined' ? new WeakMap() : 0);
        var b = {};
        p(b, { conf: () => d, language: () => g });
        var d = {
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
            g = {
                tokenPostfix: '.tcl',
                specialFunctions: [
                    'set',
                    'unset',
                    'rename',
                    'variable',
                    'proc',
                    'coroutine',
                    'foreach',
                    'incr',
                    'append',
                    'lappend',
                    'linsert',
                    'lreplace',
                ],
                mainFunctions: [
                    'if',
                    'then',
                    'elseif',
                    'else',
                    'case',
                    'switch',
                    'while',
                    'for',
                    'break',
                    'continue',
                    'return',
                    'package',
                    'namespace',
                    'catch',
                    'exit',
                    'eval',
                    'expr',
                    'uplevel',
                    'upvar',
                ],
                builtinFunctions: [
                    'file',
                    'info',
                    'concat',
                    'join',
                    'lindex',
                    'list',
                    'llength',
                    'lrange',
                    'lsearch',
                    'lsort',
                    'split',
                    'array',
                    'parray',
                    'binary',
                    'format',
                    'regexp',
                    'regsub',
                    'scan',
                    'string',
                    'subst',
                    'dict',
                    'cd',
                    'clock',
                    'exec',
                    'glob',
                    'pid',
                    'pwd',
                    'close',
                    'eof',
                    'fblocked',
                    'fconfigure',
                    'fcopy',
                    'fileevent',
                    'flush',
                    'gets',
                    'open',
                    'puts',
                    'read',
                    'seek',
                    'socket',
                    'tell',
                    'interp',
                    'after',
                    'auto_execok',
                    'auto_load',
                    'auto_mkindex',
                    'auto_reset',
                    'bgerror',
                    'error',
                    'global',
                    'history',
                    'load',
                    'source',
                    'time',
                    'trace',
                    'unknown',
                    'unset',
                    'update',
                    'vwait',
                    'winfo',
                    'wm',
                    'bind',
                    'event',
                    'pack',
                    'place',
                    'grid',
                    'font',
                    'bell',
                    'clipboard',
                    'destroy',
                    'focus',
                    'grab',
                    'lower',
                    'option',
                    'raise',
                    'selection',
                    'send',
                    'tk',
                    'tkwait',
                    'tk_bisque',
                    'tk_focusNext',
                    'tk_focusPrev',
                    'tk_focusFollowsMouse',
                    'tk_popup',
                    'tk_setPalette',
                ],
                symbols: /[=><!~?:&|+\-*\/\^%]+/,
                brackets: [
                    { open: '(', close: ')', token: 'delimiter.parenthesis' },
                    { open: '{', close: '}', token: 'delimiter.curly' },
                    { open: '[', close: ']', token: 'delimiter.square' },
                ],
                escapes:
                    /\\(?:[abfnrtv\\"'\[\]\{\};\$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
                variables: /(?:\$+(?:(?:\:\:?)?[a-zA-Z_]\w*)+)/,
                tokenizer: {
                    root: [
                        [
                            /[a-zA-Z_]\w*/,
                            {
                                cases: {
                                    '@specialFunctions': {
                                        token: 'keyword.flow',
                                        next: '@specialFunc',
                                    },
                                    '@mainFunctions': 'keyword',
                                    '@builtinFunctions': 'variable',
                                    '@default': 'operator.scss',
                                },
                            },
                        ],
                        [/\s+\-+(?!\d|\.)\w*|{\*}/, 'metatag'],
                        { include: '@whitespace' },
                        [/[{}()\[\]]/, '@brackets'],
                        [/@symbols/, 'operator'],
                        [
                            /\$+(?:\:\:)?\{/,
                            { token: 'identifier', next: '@nestedVariable' },
                        ],
                        [/@variables/, 'type.identifier'],
                        [/\.(?!\d|\.)[\w\-]*/, 'operator.sql'],
                        [/\d+(\.\d+)?/, 'number'],
                        [/\d+/, 'number'],
                        [/;/, 'delimiter'],
                        [
                            /"/,
                            {
                                token: 'string.quote',
                                bracket: '@open',
                                next: '@dstring',
                            },
                        ],
                        [
                            /'/,
                            {
                                token: 'string.quote',
                                bracket: '@open',
                                next: '@sstring',
                            },
                        ],
                    ],
                    dstring: [
                        [/\[/, { token: '@brackets', next: '@nestedCall' }],
                        [
                            /\$+(?:\:\:)?\{/,
                            { token: 'identifier', next: '@nestedVariable' },
                        ],
                        [/@variables/, 'type.identifier'],
                        [/[^\\$\[\]"]+/, 'string'],
                        [/@escapes/, 'string.escape'],
                        [
                            /"/,
                            {
                                token: 'string.quote',
                                bracket: '@close',
                                next: '@pop',
                            },
                        ],
                    ],
                    sstring: [
                        [/\[/, { token: '@brackets', next: '@nestedCall' }],
                        [
                            /\$+(?:\:\:)?\{/,
                            { token: 'identifier', next: '@nestedVariable' },
                        ],
                        [/@variables/, 'type.identifier'],
                        [/[^\\$\[\]']+/, 'string'],
                        [/@escapes/, 'string.escape'],
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
                        [
                            /#.*\\$/,
                            { token: 'comment', next: '@newlineComment' },
                        ],
                        [/#.*(?!\\)$/, 'comment'],
                    ],
                    newlineComment: [
                        [/.*\\$/, 'comment'],
                        [/.*(?!\\)$/, { token: 'comment', next: '@pop' }],
                    ],
                    nestedVariable: [
                        [/[^\{\}\$]+/, 'type.identifier'],
                        [/\}/, { token: 'identifier', next: '@pop' }],
                    ],
                    nestedCall: [
                        [/\[/, { token: '@brackets', next: '@nestedCall' }],
                        [/\]/, { token: '@brackets', next: '@pop' }],
                        { include: 'root' },
                    ],
                    specialFunc: [
                        [/"/, { token: 'string', next: '@dstring' }],
                        [/'/, { token: 'string', next: '@sstring' }],
                        [/\S+/, { token: 'type', next: '@pop' }],
                    ],
                },
            };
        return k(b);
    })();
    return moduleExports;
});
