```
project-root/
├── src/
│   ├── api/
│   │   ├── google.ts
│   │   ├── types.ts
│   │   ├── utils.ts
│   │   └── index.ts
│   │
│   ├── client/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Map.tsx
│   │   │   │   └── MultiSelect.tsx
│   │   │   └── layout/
│   │   │       └── Navbar.tsx
│   │   └── pages/
│   │       ├── Home/
│   │       │   ├── components/
│   │       │   │   ├── Hero.tsx
│   │       │   │   └── Features.tsx
│   │       │   └── index.tsx
│   │       ├── Builder/
│   │       │   ├── components/
│   │       │   │   ├── BuilderPreview.tsx
│   │       │   │   ├── PriceSummary.tsx
│   │       │   │   └── Steps/
│   │       │   │       ├── ShapeSelector.tsx
│   │       │   │       ├── SizeSelector.tsx
│   │       │   │       ├── StoneSelector.tsx
│   │       │   │       └── LightingSelector.tsx
│   │       │   └── index.tsx
│   │       ├── Gallery/
│   │       │   ├── components/
│   │       │   │   ├── GalleryFilter.tsx
│   │       │   │   └── GalleryGrid.tsx
│   │       │   └── index.tsx
│   │       ├── Materials/
│   │       │   ├── components/
│   │       │   │   ├── MaterialsFilter.tsx
│   │       │   │   └── MaterialsGrid.tsx
│   │       │   └── index.tsx
│   │       ├── Contact/
│   │       │   ├── components/
│   │       │   │   └── Map.tsx
│   │       │   └── index.tsx
│   │       └── Reviews/
│   │           ├── components/
│   │           │   ├── ReviewCard.tsx
│   │           │   ├── ReviewsGrid.tsx
│   │           │   └── LoadingState.tsx
│   │           └── index.tsx
│   │
│   ├── data/
│   │   ├── config/
│   │   │   └── constants.ts
│   │   ├── fallbacks/
│   │   │   ├── builder.ts
│   │   │   ├── business.ts
│   │   │   └── reviews.ts
│   │   └── index.ts
│   │
│   ├── lib/
│   │   ├── builder/
│   │   │   ├── configurationValidator.ts
│   │   │   ├── priceCalculator.ts
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   ├── content/
│   │   │   └── home.ts
│   │   ├── formatters/
│   │   │   └── index.ts
│   │   ├── gallery/
│   │   │   ├── data.ts
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   ├── google/
│   │   │   ├── maps.ts
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   ├── materials/
│   │   │   ├── data.ts
│   │   │   ├── types.ts
│   │   │   ├── utils.ts
│   │   │   └── index.ts
│   │   ├── shared/
│   │   │   ├── formatters.ts
│   │   │   └── validators.ts
│   │   └── validators/
│   │       └── index.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── public/
│   └── _redirects
│
└── index.html
```

Key Directory Purposes:

- `api/`: API integration and networking logic
  - Handles all external API calls
  - Contains API-specific types and utilities
  - Manages API response handling

- `client/`: Frontend React components and pages
  - Components: Reusable UI components
  - Pages: Route-specific page components
  - Layout: Site-wide layout components

- `data/`: Static data and configurations
  - Config: Environment and app configuration
  - Fallbacks: Fallback data for offline/error states
  - Constants: Application-wide constants

- `lib/`: Shared business logic and utilities
  - Builder: Table builder logic and validation
  - Content: Static content and text
  - Formatters: Data formatting utilities
  - Gallery: Gallery-related logic and types
  - Google: Google API integration logic
  - Materials: Materials management logic
  - Shared: Common utilities
  - Validators: Form and data validation

File Naming Conventions:
- React Components: PascalCase (*.tsx)
- Utilities/Logic: camelCase (*.ts)
- Type Definitions: camelCase (*.ts)
- Index Files: index.ts(x)

Best Practices:
- Keep components small and focused
- Separate business logic from UI components
- Use TypeScript for type safety
- Maintain consistent file organization
- Group related functionality together