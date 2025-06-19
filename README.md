fastcart/
└── admin-app/                     # 📦 React frontend (Vite + MUI + Redux)
    ├── public/                   # Static files (favicon, icons, etc.)
    ├── src/                      # Main source code
    │   ├── app/                  # Redux store, global providers
    │   │   ├── store.ts
    │   │   └── rootReducer.ts
    │
    │   ├── components/           # Shared UI components (e.g., Button, Input)
    │   │   └── FormInput.tsx
    │
    │   ├── features/             # Redux slices & logic (auth, users, etc.)
    │   │   └── auth/
    │   │       ├── authSlice.ts
    │   │       └── authThunks.ts
    │
    │   ├── layouts/              # UI Layouts (Sidebar, Header, etc.)
    │   │   └── MainLayout.tsx
    │
    │   ├── pages/                # Page components (Login, Register, Dashboard, etc.)
    │   │   ├── Login.tsx
    │   │   ├── Register.tsx
    │   │   └── Dashboard.tsx
    │
    │   ├── routes/               # React Router v6 config
    │   │   └── index.tsx
    │
    │   ├── services/             # Axios instance and API service methods
    │   │   ├── api.ts
    │   │   └── auth.service.ts
    │
    │   ├── styles/               # Global styles (CSS/SCSS or MUI theme overrides)
    │   │   ├── index.css
    │   │   └── theme.ts
    │
    │   ├── types/                # Global TypeScript interfaces
    │   │   └── auth.ts
    │
    │   ├── utils/                # Utility functions (formatting, validators, etc.)
    │   │   └── helpers.ts
    │
    │   ├── App.tsx               # Root App component with layout and routes
    │   ├── main.tsx              # ReactDOM.render
    │   └── vite-env.d.ts
    │
    ├── .env                      # Frontend environment variables
    ├── index.html
    ├── tsconfig.json
    ├── vite.config.ts
    └── package.json
