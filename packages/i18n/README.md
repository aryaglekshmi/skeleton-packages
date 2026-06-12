# @aryagg/i18n

Lightweight internationalization (i18n) utility for aryagg packages. Supports translation lookup, nested keys, variable interpolation, plural forms, and lazy-loaded messages.

[![npm](https://img.shields.io/npm/v/@aryagg/i18n)](https://www.npmjs.com/package/@aryagg/i18n)
[![GitHub](https://img.shields.io/badge/source-GitHub-181717)](https://github.com/iron-throne/skeleton-packages/tree/main/packages/i18n)

---

## Installation

```bash
npm install @aryagg/i18n
```

---

## Quick Start

```ts
import { createI18n } from '@aryagg/i18n';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      greeting: 'Hello, {name}!',
      nav: {
        home: 'Home',
        about: 'About',
      },
    },
    ar: {
      greeting: 'مرحبا، {name}!',
      nav: {
        home: 'الرئيسية',
      },
    },
  },
});

i18n.t('greeting', { name: 'Alice' }); // "Hello, Alice!"
i18n.t('nav.home');                    // "Home"
```

---

## Core API

### `createI18n(options)`

Creates and returns an `I18n` instance.

```ts
const i18n = createI18n({
  locale: 'en',               // active language
  fallbackLocale: 'en',       // used when a key is missing in the active locale
  messages: { ... },          // translation dictionary
  missing: (key, locale) => { // optional: called when a key is not found
    console.warn(`[i18n] missing "${key}" in "${locale}"`);
  },
});
```

---

### `i18n.t(key, params?)`

Looks up a translation key. Supports dot notation for nested keys and `{placeholder}` interpolation.

```ts
i18n.t('nav.home');                        // "Home"
i18n.t('greeting', { name: 'Alice' });     // "Hello, Alice!"
i18n.t('missing.key');                     // returns "missing.key" (key as fallback)
```

---

### `i18n.setLocale(locale)` / `i18n.getLocale()`

Switch the active language at runtime.

```ts
i18n.setLocale('ar');
i18n.t('greeting', { name: 'Alice' }); // "مرحبا، Alice!"
i18n.getLocale();                       // "ar"
```

---

### `i18n.addMessages(locale, map)`

Merge additional messages into a locale — useful for lazy loading translation files.

```ts
i18n.addMessages('fr', {
  greeting: 'Bonjour, {name}!',
});

i18n.setLocale('fr');
i18n.t('greeting', { name: 'Alice' }); // "Bonjour, Alice!"
```

---

### `i18n.getLocales()`

Returns all loaded locale codes.

```ts
i18n.getLocales(); // ["en", "ar", "fr"]
```

---

### `interpolate(template, params)`

Standalone function — replaces `{key}` placeholders in any string.

```ts
import { interpolate } from '@aryagg/i18n';

interpolate('Hello, {name}! You have {count} messages.', { name: 'Alice', count: 3 });
// "Hello, Alice! You have 3 messages."

interpolate('Hi {name}', {});
// "Hi {name}"  ← unknown placeholders are left unchanged
```

---

### `plural(count, forms, params?)`

Picks the correct word form based on count.

```ts
import { plural } from '@aryagg/i18n';

plural(0, { zero: 'No items',  one: '1 item', other: '{n} items' }, { n: 0 }); // "No items"
plural(1, {                    one: '1 item', other: '{n} items' }, { n: 1 }); // "1 item"
plural(5, {                    one: '1 item', other: '{n} items' }, { n: 5 }); // "5 items"
```

`PluralForms` shape:

```ts
interface PluralForms {
  one: string;
  other: string;
  zero?: string; // optional — falls back to "other" if not provided
}
```

---

## TypeScript Types

```ts
import type {
  Locale,            // string — e.g. "en", "ar"
  TranslationMap,    // { [key: string]: string | TranslationMap }
  TranslationMessages, // Record<Locale, TranslationMap>
  I18nOptions,       // options for createI18n()
  PluralForms,       // { one, other, zero? }
} from '@aryagg/i18n';
```

---

## Source

[github.com/iron-throne/skeleton-packages/tree/main/packages/i18n](https://github.com/iron-throne/skeleton-packages/tree/main/packages/i18n)
