# @aryagg/ui-kit

Svelte 5 component library for aryagg projects. Built with Tailwind v4 and `@aryagg/theme`.

[![npm](https://img.shields.io/npm/v/@aryagg/ui-kit)](https://www.npmjs.com/package/@aryagg/ui-kit)
[![GitHub](https://img.shields.io/badge/source-GitHub-181717)](https://github.com/iron-throne/skeleton-packages/tree/main/packages/ui-kit)

---

## Installation

```bash
npm install @aryagg/ui-kit
```

Peer dependency:

```bash
npm install svelte@^5
```

---

## Usage

Import components directly from the package:

```svelte
<script>
  import { Button, Input, Modal, Table } from '@aryagg/ui-kit';
</script>

<Button variant="primary" onclick={() => console.log('clicked')}>
  Save
</Button>

<Input label="Email" type="email" bind:value={email} />
```

---

## Components

### Button

```svelte
<Button variant="primary">Submit</Button>
<Button variant="danger" disabled>Delete</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

---

### Input

```svelte
<Input
  label="Full Name"
  placeholder="Enter your name"
  bind:value={name}
  error="Name is required"
/>
```

---

### Modal

```svelte
<script>
  let open = $state(false);
</script>

<Button onclick={() => open = true}>Open</Button>

<Modal bind:open title="Confirm Action">
  <p>Are you sure?</p>
  <Button onclick={() => open = false}>Close</Button>
</Modal>
```

---

### Table

```svelte
<script>
  import type { TableColumn } from '@aryagg/types';

  const columns: TableColumn[] = [
    { key: 'name',  label: 'Name',   sortable: true },
    { key: 'email', label: 'Email' },
  ];

  const rows = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob',   email: 'bob@example.com' },
  ];
</script>

<Table {columns} {rows} />
```

---

### Toast / Snackbar

```svelte
<script>
  import { showToast } from '@aryagg/ui-kit';
  import { ESnackType } from '@aryagg/types';
</script>

<Button onclick={() => showToast({ message: 'Saved!', type: ESnackType.SUCCESS })}>
  Save
</Button>
```

---

## Styling

The ui-kit relies on `@aryagg/theme`. Import it once in your app's entry CSS:

```css
@import "@aryagg/theme";
```

---

## Developing

```sh
npm run dev
```

Everything inside `src/lib` is part of the library. `src/routes` is the showcase/preview app.

## Building

```sh
npm run build
```

---

## Source

[github.com/iron-throne/skeleton-packages/tree/main/packages/ui-kit](https://github.com/iron-throne/skeleton-packages/tree/main/packages/ui-kit)
