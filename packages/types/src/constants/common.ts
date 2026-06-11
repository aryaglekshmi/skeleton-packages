export const DEBOUNCE_DELAY = 300;
export const DEFAULT_TIMEOUT = 300;

export const REGEX = {
    SPACES: /\s+/,
    HTML_TAGS: /<[^>]*>/g,
    NON_WORD_CHARS: /[^\w\s-]/g,
    MULTI_SPACE_OR_DASH: /[\s_-]+/g,
    NUMBER: /^-?\d+(\.\d+)?$/,
    POSITIVE_NUMBER: /^\d+(\.\d+)?$/,
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^[+\d]?(?:[\d\s\-().]{7,})$/,
    URL: /^(https?:\/\/|www\.)[^\s/$.?#].[^\s]*$/i,
    ALPHA: /^[A-Za-z]+$/,
    ALPHANUM: /^[A-Za-z0-9]+$/,
    UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    DATE_ISO: /^\d{4}-\d{2}-\d{2}$/,
    TIME: /^\d{2}:\d{2}(:\d{2})?$/,
    HEX_COLOR: /^#(?:[0-9a-fA-F]{3}){1,2}$/,
    PASSWORD_BASIC: /^[A-Za-z0-9]{8,}$/,
    PASSWORD_STRONG: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
    REQUIRED: /.+/,
};
