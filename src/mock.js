export const buildStr = (strs, exprs) => strs.reduce((r, s, i) => r + s + (exprs[i] || ''), '');

export function t(strings, ...exprs) {
    if (strings && strings.reduce) {
        return buildStr(strings, exprs);
    }
    return strings;
}

export function nt() {
    return (strings, ...exprs) => {
        if (strings && strings.reduce) {
            return buildStr(strings, exprs);
        }
        return strings;
    };
}

export function msgid(strings, ...exprs) {
    if (strings && strings.reduce) {
        return buildStr(strings, exprs);
    }
    return strings;
}

export function gettext(text) {
    return text;
}

export function ngettext(str) {
    return str;
}

export function useLocale() {}

export function regLocale() {}