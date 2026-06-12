# @aryagg/theme

Shared CSS theme for aryagg packages. Provides global styles, design tokens, and a Tailwind v4 configuration built on top of Fira Mono.

[![npm](https://img.shields.io/npm/v/@aryagg/theme)](https://www.npmjs.com/package/@aryagg/theme)
[![GitHub](https://img.shields.io/badge/source-GitHub-181717)](https://github.com/iron-throne/skeleton-packages/tree/main/packages/theme)

---

## Installation

```bash
npm install @aryagg/theme
```

Peer dependency:

```bash
npm install tailwindcss@^4
```

---

## Usage

### Import global styles

```css
/* In your main CSS file */
@import "@aryagg/theme";
```

### Import Tailwind config

```js
// tailwind.config.js
import themeConfig from '@aryagg/theme/tailwind.config.js';

export default {
  presets: [themeConfig],
};
```

### TypeScript

The package ships type definitions for the CSS exports:

```ts
import '@aryagg/theme';
```

---

## What's Included

| File | Purpose |
|---|---|
| `index.css` | Entry point — imports global and component styles |
| `src/global.css` | Base resets, typography, CSS variables |
| `src/components.css` | Reusable component-level styles |
| `src/tailwind.config.js` | Shared Tailwind v4 preset |

---

## Source

[github.com/iron-throne/skeleton-packages/tree/main/packages/theme](https://github.com/iron-throne/skeleton-packages/tree/main/packages/theme)
