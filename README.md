# skeleton-packages

A monorepo of shared npm packages for the Skeleton Svelte project.

## Packages

| Package | Description |
|---|---|
| [`@aryagg/types`](packages/types) | Shared TypeScript types and interfaces |
| [`@aryagg/utils`](packages/utils) | Shared utility functions |

## Structure

```
skeleton-packages/
├── packages/
│   ├── types/     # @aryagg/types
│   └── utils/     # @aryagg/utils
└── package.json   # workspace root
```

## Getting Started

```bash
npm install
npm run build
```

## Publishing

Each package is versioned and published independently under the `@aryagg` scope.

