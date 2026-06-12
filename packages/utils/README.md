# @aryagg/utils

Shared utility functions for aryagg packages. Covers async helpers, API requests, browser utilities, data manipulation, formatting, storage, and validation.

[![npm](https://img.shields.io/npm/v/@aryagg/utils)](https://www.npmjs.com/package/@aryagg/utils)
[![GitHub](https://img.shields.io/badge/source-GitHub-181717)](https://github.com/iron-throne/skeleton-packages/tree/main/packages/utils)

---

## Installation

```bash
npm install @aryagg/utils
```

---

## Async

```ts
import { debounce } from '@aryagg/utils';

const search = debounce((query: string) => {
  fetchResults(query);
}, 300);

input.addEventListener('input', (e) => search(e.target.value));
```

---

## API

```ts
import { apiGet, apiPost } from '@aryagg/utils';

const users = await apiGet<User[]>('/api/users');
const created = await apiPost<User>('/api/users', { name: 'Alice' });
```

---

## Format

```ts
import { formatDate, formatNumber, formatFileSize, formatString, formatUrl } from '@aryagg/utils';

formatDate(new Date());             // "12/06/2026"
formatNumber(1234567.89);           // "1,234,567.89"
formatFileSize(2048);               // "2 KB"
formatString('hello world');        // "Hello World"
formatUrl('example.com/path');      // "https://example.com/path"
```

---

## Data

```ts
import { groupBy, uniqueBy, deepClone, omit, pick } from '@aryagg/utils';

groupBy([{ type: 'a' }, { type: 'b' }, { type: 'a' }], 'type');
// { a: [...], b: [...] }

uniqueBy([{ id: 1 }, { id: 1 }, { id: 2 }], 'id');
// [{ id: 1 }, { id: 2 }]

const clone = deepClone({ nested: { value: 42 } });

omit({ a: 1, b: 2, c: 3 }, ['b']);  // { a: 1, c: 3 }
pick({ a: 1, b: 2, c: 3 }, ['a']);  // { a: 1 }
```

---

## Browser

```ts
import { copyToClipboard, getTheme, setTheme } from '@aryagg/utils';

await copyToClipboard('Hello!');

getTheme();          // "light" | "dark"
setTheme('dark');
```

---

## Storage

```ts
import { setItem, getItem, removeItem } from '@aryagg/utils';

setItem('token', 'abc123');
getItem<string>('token');   // "abc123"
removeItem('token');
```

---

## Validation

```ts
import { isEmail, isUrl, isRequired } from '@aryagg/utils';

isEmail('user@example.com');   // true
isUrl('https://example.com');  // true
isRequired('');                // false
```

---

## Vue Composables

```ts
import { useClickOutside, useAutoFocus } from '@aryagg/utils';

// Calls handler when a click occurs outside the referenced element
const { ref } = useClickOutside(() => closeDropdown());

// Automatically focuses an input on mount
const inputRef = useAutoFocus();
```

---

## Source

[github.com/iron-throne/skeleton-packages/tree/main/packages/utils](https://github.com/iron-throne/skeleton-packages/tree/main/packages/utils)
