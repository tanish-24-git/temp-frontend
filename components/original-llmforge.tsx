"use client"
\
================================================
FILE: README.md
================================================
# React + TypeScript + Vite

\
This template provides a minimal setup to get React working in Vite
with HMR and
some
ESLint
rules.

\
Currently, two official plugins are available:

\
- [
@vitejs
;/plugin-react](https:/ / github.com / vitejs / vite - plugin - react / blob / main / packages / plugin - react
) uses [Babel](https://babeljs.io/) for Fast Refresh
\
- [
@vitejs
;/plugin-react-swc](https:/ / github.com / vitejs / vite -
  plugin -
  react / blob / main / packages / plugin -
  react -
  swc
) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

\
If you are developing a production application, we recommend updating the configuration to enable
type - aware
lint
rules:

\`\`\`js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
\`\`\`

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

\`\`\`js
// eslint.config.js
import reactX from "eslint-plugin-react-x"
import reactDom from "eslint-plugin-react-dom"

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
\`\`\`



================================================
FILE: eslint.config.js
================================================
import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import { globalIgnores } from "eslint/config"

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])



================================================
\
FILE: index.html
================================================
\
<!doctype
html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LLMForge Dashboard</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>



================================================
\
FILE: package.json
================================================
{
  "name": "llmforge-dashboard",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "lucide-react": "^0.263.1",
    "recharts": "^2.7.2",
    "axios": "^1.4.0",
    "react-hot-toast": "^2.4.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.33.0",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^5.0.0",
    "eslint": "^9.33.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.39.1",
    "vite": "^7.1.2",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3"
  }
}



================================================
\
FILE: postcss.config.js
================================================
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}



================================================
\
FILE: style.html
================================================
\
<!DOCTYPE
html >
  <html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LLMForge UI Design System - Dark Mode</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
\
            darkMode: 'class',
            theme: {
\
                extend: {
\
                    fontFamily: {
\
                        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
                    },
                    colors: {
\
                        border: "hsl(217.2 32.6% 17.5%)",
                        input: "hsl(217.2 32.6% 17.5%)",
                        ring: "hsl(224.3 76.3% 68%)",
                        background: "hsl(222.2 84% 4.9%)",
                        foreground: "hsl(210 40% 98%)",
                        primary: {
\
                            DEFAULT: "hsl(210 40% 98%)",
                            foreground: "hsl(222.2 84% 4.9%)",
                        },
                        secondary: {
\
                            DEFAULT: "hsl(217.2 32.6% 17.5%)",
                            foreground: "hsl(210 40% 98%)",
                        },
                        destructive: {
\
                            DEFAULT: "hsl(0 62.8% 30.6%)",
                            foreground: "hsl(210 40% 98%)",
                        },
                        muted: {
\
                            DEFAULT: "hsl(217.2 32.6% 17.5%)",
                            foreground: "hsl(215 20.2% 65.1%)",
                        },
                        accent: {
\
                            DEFAULT: "hsl(217.2 32.6% 17.5%)",
                            foreground: "hsl(210 40% 98%)",
                        },
                        card: {
\
                            DEFAULT: "hsl(222.2 84% 4.9%)",
                            foreground: "hsl(210 40% 98%)",
                        },
                    },
                }
            }
        }
    </script>
    <style>
        :root {
            /* Dark Mode Color Palette */
\
            --background: 222.2 84% 4.9%;
            --foreground: 210 40% 98%;
            --card: 222.2 84% 4.9%;
            --card-foreground: 210 40% 98%;
            --popover: 222.2 84% 4.9%;
            --popover-foreground: 210 40% 98%;
            --primary: 210 40% 98%;
            --primary-foreground: 222.2 84% 4.9%;
            --secondary: 217.2 32.6% 17.5%;
            --secondary-foreground: 210 40% 98%;
            --muted: 217.2 32.6% 17.5%;
            --muted-foreground: 215 20.2% 65.1%;
            --accent: 217.2 32.6% 17.5%;
            --accent-foreground: 210 40% 98%;
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 210 40% 98%;
            --border: 217.2 32.6% 17.5%;
            --input: 217.2 32.6% 17.5%;
            --ring: 224.3 76.3% 68%;
            --radius: 0.5rem;
        }

        body {
\
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* Custom scrollbar for dark mode */
        .scrollbar-dark::-webkit-scrollbar {
\
            width: 6px;
            height: 6px;
        }

        .scrollbar-dark::-webkit-scrollbar-track {
\
            background: hsl(217.2 32.6% 17.5%);
            border-radius: 3px;
        }

        .scrollbar-dark::-webkit-scrollbar-thumb {
\
            background: hsl(215 20.2% 65.1%);
            border-radius: 3px;
        }

        .scrollbar-dark::-webkit-scrollbar-thumb:hover {
\
            background: hsl(210 40% 98%);
        }

        /* Animation classes */
        .animate-pulse-slow {
\
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-fade-in {
            animation: fadeIn 0.2s ease-in-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-4px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Syntax highlighting for terminal */
        .syntax-keyword { color: #569cd6; }
        .syntax-string { color: #ce9178; }
        .syntax-number { color: #b5cea8; }
        .syntax-comment { color: #6a9955; }
        .syntax-error { color: #f14c4c; }
        .syntax-warning { color: #ffcc02; }
        .syntax-info { color: #9cdcfe; }
    </style>
</head>
<body class="bg-slate-950 text-slate-50 min-h-screen">
    <div class="container mx-auto px-4 py-8 max-w-7xl">
        
        <!-- Header -->
        <header class="mb-12 text-center">
            <h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                LLMForge UI Design System
            </h1>
            <p class="text-slate-400 text-lg">
                Complete dark mode style guide for the fine-tuning dashboard
            </p>
        </header>

        <!-- Color Palette -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold mb-6 text-slate-200">Color Palette</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Background Colors -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Background</h3>
                    <div class="space-y-3">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 rounded bg-slate-950 border border-slate-700"></div>
                            <span class="text-sm font-mono text-slate-300">slate-950</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 rounded bg-slate-900 border border-slate-700"></div>
                            <span class="text-sm font-mono text-slate-300">slate-900</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 rounded bg-slate-800 border border-slate-700"></div>
                            <span class="text-sm font-mono text-slate-300">slate-800</span>
                        </div>
                    </div>
                </div>

                <!-- Text Colors -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Text</h3>
                    <div class="space-y-3">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 rounded bg-slate-50 border border-slate-700"></div>
                            <span class="text-sm font-mono text-slate-300">slate-50</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 rounded bg-slate-200 border border-slate-700"></div>
                            <span class="text-sm font-mono text-slate-300">slate-200</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 rounded bg-slate-400 border border-slate-700"></div>
                            <span class="text-sm font-mono text-slate-300">slate-400</span>
                        </div>
                    </div>
                </div>

                <!-- Accent Colors -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Accent</h3>
                    <div class="space-y-3">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 rounded bg-blue-600 border border-slate-700"></div>
                            <span class="text-sm font-mono text-slate-300">blue-600</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 rounded bg-green-600 border border-slate-700"></div>
                            <span class="text-sm font-mono text-slate-300">green-600</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 rounded bg-red-600 border border-slate-700"></div>
                            <span class="text-sm font-mono text-slate-300">red-600</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Typography -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold mb-6 text-slate-200">Typography</h2>
            <div class="bg-slate-900/50 p-8 rounded-lg border border-slate-800">
                <h1 class="text-4xl font-bold mb-4 text-slate-50">Heading 1 - 48px Bold</h1>
                <h2 class="text-3xl font-semibold mb-4 text-slate-100">Heading 2 - 36px Semibold</h2>
                <h3 class="text-2xl font-semibold mb-4 text-slate-200">Heading 3 - 28px Semibold</h3>
                <h4 class="text-xl font-medium mb-4 text-slate-300">Heading 4 - 20px Medium</h4>
                <p class="text-base leading-relaxed mb-4 text-slate-300">
       dtype text - 16px Regular with 1.5 line height. This is the standard body text used throughout 
                    the application for readable content.
                </p>
                <p class="text-sm text-slate-400 mb-4">
                    Small text - 14px Regular for secondary information and captions.
                </p>
                <code class="text-sm font-mono bg-slate-800 px-2 py-1 rounded text-slate-300">
                    Monospace font for code and terminal output
                </code>
            </div>
        </section>

        <!-- Buttons -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold mb-6 text-slate-200">Buttons</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Primary Buttons -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Primary</h3>
                    <div class="space-y-3">
                        <button class="px-4 py-2 bg-slate-50 text-slate-900 rounded-md font-medium hover:bg-slate-200 transition-colors duration-150">
                            Default
                        </button>
                        <button class="px-4 py-2 bg-slate-50 text-slate-900 rounded-md font-medium hover:bg-slate-200 transition-colors duration-150 opacity-50 cursor-not-allowed">
                            Disabled
                        </button>
                    </div>
                </div>

                <!-- Secondary Buttons -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Secondary</h3>
                    <div class="space-y-3">
                        <button class="px-4 py-2 bg-slate-800 text-slate-200 rounded-md font-medium hover:bg-slate-700 transition-colors duration-150 border border-slate-600">
                            Default
                        </button>
                        <button class="px-4 py-2 bg-slate-800 text-slate-200 rounded-md font-medium hover:bg-slate-700 transition-colors duration-150 border border-slate-600 opacity-50 cursor-not-allowed">
                            Disabled
                        </button>
                    </div>
                </div>

                <!-- Destructive Buttons -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Destructive</h3>
                    <div class="space-y-3">
                        <button class="px-4 py-2 bg-red-600 text-slate-50 rounded-md font-medium hover:bg-red-700 transition-colors duration-150">
                            Delete
                        </button>
                        <button class="px-4 py-2 bg-red-600 text-slate-50 rounded-md font-medium hover:bg-red-700 transition-colors duration-150 opacity-50 cursor-not-allowed">
                            Disabled
                        </button>
                    </div>
                </div>

                <!-- Ghost & Outline Buttons -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Ghost & Outline</h3>
                    <div class="space-y-3">
                        <button class="px-4 py-2 text-slate-200 rounded-md font-medium hover:bg-slate-800 transition-colors duration-150">
                            Ghost
                        </button>
                        <button class="px-4 py-2 text-slate-200 rounded-md font-medium hover:bg-slate-800 transition-colors duration-150 border border-slate-600">
                            Outline
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Form Elements -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold mb-6 text-slate-200">Form Elements</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Inputs -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Inputs</h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-slate-200 mb-2">Text Input</label>
                            <input type="text" placeholder="Enter text..." 
                                class="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-200 mb-2">Password Input</label>
                            <input type="password" placeholder="Password" 
                                class="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-200 mb-2">Disabled Input</label>
                            <input type="text" placeholder="Disabled" disabled
                                class="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-slate-500 placeholder-slate-600 cursor-not-allowed">
                        </div>
                    </div>
                </div>

                <!-- Select & Textarea -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Select & Textarea</h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-slate-200 mb-2">Select</label>
                            <select class="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>Choose option...</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-200 mb-2">Textarea</label>
                            <textarea rows="3" placeholder="Enter description..."
                                class="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"></textarea>
                        </div>
                    </div>
                </div>

                <!-- Checkboxes & Switches -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Checkboxes & Switches</h3>
                    <div class="space-y-4">
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-2">
                            <span class="text-slate-200">Checkbox option</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" checked class="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-2">
                            <span class="text-slate-200">Checked option</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input type="radio" name="radio" class="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 focus:ring-blue-500 focus:ring-2">
                            <span class="text-slate-200">Radio option 1</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input type="radio" name="radio" class="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 focus:ring-blue-500 focus:ring-2">
                            <span class="text-slate-200">Radio option 2</span>
                        </label>
                    </div>
                </div>

                <!-- File Input -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">File Input</h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-slate-200 mb-2">Upload File</label>
                            <div class="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-slate-500 transition-colors">
                                <div class="text-slate-400 mb-2">
                                    <svg class="mx-auto h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                                    </svg>
                                </div>
                                <p class="text-sm text-slate-400">
                                    <span class="font-medium text-slate-200">Click to upload</span> or drag and drop
                                </p>
                                <p class="text-xs text-slate-500">CSV, JSON up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cards & Containers -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold mb-6 text-slate-200">Cards & Containers</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Basic Card -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-2 text-slate-200">Basic Card</h3>
                    <p class="text-slate-400 text-sm mb-4">
                        This is a basic card with subtle background and border.
                    </p>
                    <button class="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                        Learn more →
                    </button>
                </div>

                <!-- Status Card -->
                <div class="bg-green-950/20 p-6 rounded-lg border border-green-800/30">
                    <div class="flex items-center space-x-3 mb-2">
                        <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                        <h3 class="text-lg font-medium text-slate-200">Training Complete</h3>
                    </div>
                    <p class="text-slate-400 text-sm mb-2">
                        Model training finished successfully
                    </p>
                    <div class="text-xs text-slate-500">
                        <div class="flex justify-between">
                            <span>Duration:</span>
                            <span class="font-mono">2h 34m</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Accuracy:</span>
                            <span class="font-mono">94.2%</span>
                        </div>
                    </div>
                </div>

                <!-- Warning Card -->
                <div class="bg-yellow-950/20 p-6 rounded-lg border border-yellow-800/30">
                    <div class="flex items-center space-x-3 mb-2">
                        <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <h3 class="text-lg font-medium text-slate-200">Training In Progress</h3>
                    </div>
                    <p class="text-slate-400 text-sm mb-2">
                        Model is currently training
                    </p>
                    <div class="text-xs text-slate-500">
                        <div class="flex justify-between">
                            <span>Progress:</span>
                            <span class="font-mono">67%</span>
                        </div>
                        <div class="flex justify-between">
                            <span>ETA:</span>
                            <span class="font-mono">45m</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Progress Bars & Status Indicators -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold mb-6 text-slate-200">Progress Bars & Status</h2>
            <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                <div class="space-y-6">
                    <!-- Progress Bars -->
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="text-sm font-medium text-slate-200">Training Progress</span>
                            <span class="text-sm text-slate-400">75%</span>
                        </div>
                        <div class="w-full bg-slate-800 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: 75%"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="text-sm font-medium text-slate-200">Validation Accuracy</span>
                            <span class="text-sm text-slate-400">92.3%</span>
                        </div>
                        <div class="w-full bg-slate-800 rounded-full h-2">
                            <div class="bg-green-600 h-2 rounded-full" style="width: 92%"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="text-sm font-medium text-slate-200">GPU Memory Usage</span>
                            <span class="text-sm text-slate-400">8.2GB / 12GB</span>
                        </div>
                        <div class="w-full bg-slate-800 rounded-full h-2">
                            <div class="bg-yellow-600 h-2 rounded-full" style="width: 68%"></div>
                        </div>
                    </div>

                    <!-- Status Indicators -->
                    <div class="pt-4 border-t border-slate-700">
                        <h4 class="text-sm font-medium text-slate-200 mb-3">Status Indicators</h4>
                        <div class="flex space-x-6">
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span class="text-sm text-slate-300">Online</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                <span class="text-sm text-slate-300">Training</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                                <span class="text-sm text-slate-300">Error</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-slate-500 rounded-full"></div>
                                <span class="text-sm text-slate-300">Offline</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Terminal/Console Styling -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold mb-6 text-slate-200">Terminal/Console</h2>
            <div class="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
                <!-- Terminal Header -->
                <div class="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-800/50">
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                        <h3 class="font-semibold text-slate-200">Training Logs</h3>
                        <span class="text-sm text-slate-400">(247 lines)</span>
                    </div>
                    <button class="flex items-center space-x-1 px-3 py-1 text-sm bg-slate-700 border border-slate-600 rounded hover:bg-slate-600 transition-colors text-slate-200">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        </svg>
                        <span>Download</span>
                    </button>
                </div>
                
                <!-- Terminal Content -->
                <div class="p-4 font-mono text-sm scrollbar-dark overflow-y-auto" style="max-height: 300px;">
                    <div class="space-y-1">
                        <div class="text-slate-400">
                            <span class="text-slate-600 mr-2">[1]</span>
                            <span class="syntax-info">INFO</span> 
                            <span class="text-slate-400">2024-08-31 14:23:15</span> 
                            Starting model training...
                        </div>
                        <div class="text-slate-400">
                            <span class="text-slate-600 mr-2">[2]</span>
                            <span class="syntax-info">INFO</span> 
                            <span class="text-slate-400">2024-08-31 14:23:16</span> 
                            Loading dataset: <span class="syntax-string">"training_data.json"</span>
                        </div>
                        <div class="text-slate-400">
                            <span class="text-slate-600 mr-2">[3]</span>
                            <span class="syntax-info">INFO</span> 
                            <span class="text-slate-400">2024-08-31 14:23:18</span> 
                            Dataset loaded: <span class="syntax-number">1,247</span> samples
                        </div>
                        <div class="text-slate-400">
                            <span class="text-slate-600 mr-2">[4]</span>
                            <span class="syntax-keyword">TRAIN</span> 
                            <span class="text-slate-400">2024-08-31 14:23:20</span> 
                            Epoch <span class="syntax-number">1/10</span> - Loss: <span class="syntax-number">2.4563</span>
                        </div>
                        <div class="text-slate-400">
                            <span class="text-slate-600 mr-2">[5]</span>
                            <span class="syntax-keyword">TRAIN</span> 
                            <span class="text-slate-400">2024-08-31 14:24:45</span> 
                            Epoch <span class="syntax-number">2/10</span> - Loss: <span class="syntax-number">1.8934</span>
                        </div>
                        <div class="text-slate-400">
                            <span class="text-slate-600 mr-2">[6]</span>
                            <span class="syntax-warning">WARN</span> 
                            <span class="text-slate-400">2024-08-31 14:25:12</span> 
                            GPU memory usage high: <span class="syntax-number">94%</span>
                        </div>
                        <div class="text-slate-400">
                            <span class="text-slate-600 mr-2">[7]</span>
                            <span class="syntax-keyword">TRAIN</span> 
                            <span class="text-slate-400">2024-08-31 14:26:18</span> 
                            Epoch <span class="syntax-number">3/10</span> - Loss: <span class="syntax-number">1.4521</span>
                        </div>
                        <div class="text-slate-400">
                            <span class="text-slate-600 mr-2">[8]</span>
                            <span class="syntax-info">INFO</span> 
                            <span class="text-slate-400">2024-08-31 14:27:30</span> 
                            Validation accuracy: <span class="syntax-number">92.3%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Navigation Elements -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold mb-6 text-slate-200">Navigation</h2>
            <div class="space-y-6">
                <!-- Tab Navigation -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Tabs</h3>
                    <div class="border-b border-slate-700">
                        <nav class="-mb-px flex space-x-8">
                            <a href="#" class="border-transparent text-slate-300 hover:text-slate-200 hover:border-slate-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                                Overview
                            </a>
                            <a href="#" class="border-blue-500 text-blue-400 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                                Training
                            </a>
                            <a href="#" class="border-transparent text-slate-300 hover:text-slate-200 hover:border-slate-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                                Metrics
                            </a>
                            <a href="#" class="border-transparent text-slate-300 hover:text-slate-200 hover:border-slate-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                                Settings
                            </a>
                        </nav>
                    </div>
                </div>

                <!-- Breadcrumb -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Breadcrumb</h3>
                    <nav class="flex" aria-label="Breadcrumb">
                        <ol class="flex items-center space-x-4">
                            <li>
                                <div>
                                    <a href="#" class="text-slate-400 hover:text-slate-200 transition-colors">Dashboard</a>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                    </svg>
                                    <a href="#" class="ml-4 text-slate-400 hover:text-slate-200 transition-colors">Models</a>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                    </svg>
                                    <span class="ml-4 text-slate-200 font-medium">Training</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>

        <!-- Icons Usage -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold mb-6 text-slate-200">Icons</h2>
            <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    <div class="flex flex-col items-center space-y-2">
                        <svg class="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        <span class="text-xs text-slate-400">Clock</span>
                    </div>
                    <div class="flex flex-col items-center space-y-2">
                        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22,4 12,14.01 9,11.01"/>
                        </svg>
                        <span class="text-xs text-slate-400">Check</span>
                    </div>
                    <div class="flex flex-col items-center space-y-2">
                        <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="15" y1="9" x2="9" y2="15"/>
                            <line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                        <span class="text-xs text-slate-400">Error</span>
                    </div>
                    <div class="flex flex-col items-center space-y-2">
                        <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        <span class="text-xs text-slate-400">Warning</span>
                    </div>
                    <div class="flex flex-col items-center space-y-2">
                        <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <polygon points="5,3 19,12 5,21"/>
                        </svg>
                        <span class="text-xs text-slate-400">Play</span>
                    </div>
                    <div class="flex flex-col items-center space-y-2">
                        <svg class="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7,10 12,15 17,10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        <span class="text-xs text-slate-400">Download</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Spacing & Layout Examples -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold mb-6 text-slate-200">Spacing & Layout</h2>
            <div class="space-y-6">
                <!-- Spacing Scale -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">Spacing Scale (4px base)</h3>
                    <div class="space-y-2">
                        <div class="flex items-center space-x-4">
                            <div class="w-1 h-4 bg-blue-500"></div>
                            <span class="text-sm font-mono text-slate-300">1 (4px)</span>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="w-2 h-4 bg-blue-500"></div>
                            <span class="text-sm font-mono text-slate-300">2 (8px)</span>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="w-3 h-4 bg-blue-500"></div>
                            <span class="text-sm font-mono text-slate-300">3 (12px)</span>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="w-4 h-4 bg-blue-500"></div>
                            <span class="text-sm font-mono text-slate-300">4 (16px)</span>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="w-6 h-4 bg-blue-500"></div>
                            <span class="text-sm font-mono text-slate-300">6 (24px)</span>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="w-8 h-4 bg-blue-500"></div>
                            <span class="text-sm font-mono text-slate-300">8 (32px)</span>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-4 bg-blue-500"></div>
                            <span class="text-sm font-mono text-slate-300">12 (48px)</span>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-4 bg-blue-500"></div>
                            <span class="text-sm font-mono text-slate-300">16 (64px)</span>
                        </div>
                    </div>
                </div>

                <!-- Grid Layout -->
                <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 class="text-lg font-medium mb-4 text-slate-200">12-Column Grid System</h3>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12 bg-slate-800 h-8 rounded flex items-center justify-center text-xs text-slate-300">12/12</div>
                        <div class="col-span-6 bg-slate-800 h-8 rounded flex items-center justify-center text-xs text-slate-300">6/12</div>
                        <div class="col-span-6 bg-slate-800 h-8 rounded flex items-center justify-center text-xs text-slate-300">6/12</div>
                        <div class="col-span-4 bg-slate-800 h-8 rounded flex items-center justify-center text-xs text-slate-300">4/12</div>
                        <div class="col-span-4 bg-slate-800 h-8 rounded flex items-center justify-center text-xs text-slate-300">4/12</div>
                        <div class="col-span-4 bg-slate-800 h-8 rounded flex items-center justify-center text-xs text-slate-300">4/12</div>
                        <div class="col-span-3 bg-slate-800 h-8 rounded flex items-center justify-center text-xs text-slate-300">3/12</div>
                        <div class="col-span-3 bg-slate-800 h-8 rounded flex items-center justify-center text-xs text-slate-300">3/12</div>
                        <div class="col-span-3 bg-slate-800 h-8 rounded flex items-center justify-center text-xs text-slate-300">3/12</div>
                        <div class="col-span-3 bg-slate-800 h-8 rounded flex items-center justify-center text-xs text-slate-300">3/12</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Animations & Transitions -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold mb-6 text-slate-200">Animations & Transitions</h2>
            <div class="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Hover Effects -->
                    <div class="space-y-4">
                        <h3 class="text-sm font-medium text-slate-200">Hover Effects</h3>
                        <button class="w-full px-4 py-2 bg-slate-800 text-slate-200 rounded-md transition-all duration-150 hover:bg-slate-700 hover:scale-[1.02] hover:shadow-lg">
                            Scale on Hover
                        </button>
                        <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-md transition-all duration-150 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25">
                            Glow on Hover
                        </button>
                    </div>

                    <!-- Loading States -->
                    <div class="space-y-4">
                        <h3 class="text-sm font-medium text-slate-200">Loading States</h3>
                        <div class="flex items-center space-x-3 p-3 bg-slate-800 rounded-md">
                            <div class="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                            <span class="text-slate-300">Loading...</span>
                        </div>
                        <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full animate-pulse-slow"></div>
                        </div>
                    </div>

                    <!-- Fade In -->
                    <div class="space-y-4">
                        <h3 class="text-sm font-medium text-slate-200">Fade In</h3>
                        <div class="p-4 bg-slate-800 rounded-md animate-fade-in">
                            <p class="text-slate-300 text-sm">This element fades in smoothly</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="text-center pt-8 border-t border-slate-800">
            <p class="text-slate-400">
                LLMForge UI Design System - Dark Mode Style Guide
            </p>
            <p class="text-sm text-slate-500 mt-2">
                Built with shadcn/ui principles for consistent, accessible interfaces
            </p>
        </footer>
    </div>

    <script>
        // Add some interactivity for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Simulate progress bar updates
            const progressBars = document.querySelectorAll('[style*="width:"]');
            progressBars.forEach(bar => {
                bar.addEventListener('click', function() {
                    const currentWidth = Number.parseInt(this.style.width);
                    const newWidth = Math.min(currentWidth + 10, 100);
                    this.style.width = newWidth + '%';
                    
                    // Update percentage text
                    const parentDiv = this.closest('div').previousElementSibling;
                    if (parentDiv) {
                        const percentSpan = parentDiv.querySelector('span:last-child');
                        if (percentSpan) {
                            percentSpan.textContent = newWidth + '%';
                        }
                    }
                });
            });

            // Add click handlers to checkboxes for demonstration
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    console.log('Checkbox changed:', this.checked);
                });
            });
        });
    </script>
</body>
</html>


================================================
FILE: tailwind.config.js
================================================
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      colors: {
        // shadcn/ui compatible color system for dark mode
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.2s ease-in-out",
        "scale-hover": "scaleHover 0.15s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleHover: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.02)" },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.25)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.25)',
        'glow-red': '0 0 20px rgba(239, 68, 68, 0.25)',
      },
      spacing: {
        '18': '4.5rem', // 72px
        '88': '22rem',   // 352px
      },
    },
  },
  plugins: [],
}




================================================
FILE: tsconfig.app.json
================================================
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}



================================================
FILE: tsconfig.json
================================================
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}



================================================
FILE: tsconfig.node.json
================================================
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}



================================================
FILE: vite.config.ts
================================================
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})



================================================
FILE: src/App.css
================================================
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}



================================================
FILE: src/App.tsx
================================================
import { useState, useEffect, useCallback, useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Brain, Activity, Zap, XCircle, MessageSquare, Settings } from 'lucide-react';

// Components
import { ModelSelector } from './components/ModelSelector';
import { DataPreparation } from './components/DataPreparation';
import { TrainingForm } from './components/TrainingForm';
import { StatusCard } from './components/StatusCard';
import { ProgressBar } from './components/ProgressBar';
import { LogViewer } from './components/LogViewer';
import { MetricsChart } from './components/MetricsChart';
import { ActiveSessionsPanel } from './components/ActiveSessionsPanel';
import { ComparisonChatInterface } from './components/ComparisonChatInterface';

// API
import { 
  healthCheck, 
  selectModel, 
  prepareData, 
  startFineTuning, 
  getTrainingStatus,
  getAvailableModels,
  streamTrainingLogs,
  getActiveTrainingSessions,
  cancelTraining
} from './services/api';
import type { LogEntry
} from './services/api';

// Types
import type { 
  SelectModelRequest, 
  PrepareDataRequest, 
  FineTuneRequest, 
  TrainingStatus,
  ModelInfo
} from './types/api';

interface MetricData {
  epoch: number;
  step: number;
  loss?: number;
  eval_loss?: number;
  learning_rate?: number;
}

function App() {
  const [activeTab, setActiveTab] = useState<'training' | 'chat'>('training');
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);
  const [trainingStatus, setTrainingStatus] = useState<TrainingStatus | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [metrics, setMetrics] = useState<MetricData[]>([]);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedModelInfo, setSelectedModelInfo] = useState<ModelInfo | null>(null);
  const [availableModels, setAvailableModels] = useState<ModelInfo[]>([]);
  const [isStreamConnected, setIsStreamConnected] = useState<boolean>(false);
  const [streamConnection, setStreamConnection] = useState<{ close: () => void } | null>(null);
  const streamConnectionRef = useRef<{ close: () => void } | null>(null);
  // Removed unused state variables
  const [activeSessionsRefresh, setActiveSessionsRefresh] = useState(0);
  const [showActiveSessions, setShowActiveSessions] = useState(true);
  const [viewingLogsTaskId, setViewingLogsTaskId] = useState<string | null>(null);
  const [loading, setLoading] = useState({
    model: false,
    data: false,
    training: false,
  });

  // Check API health on mount
  useEffect(() => {
    const checkHealth = async () => {
      try {
        await healthCheck();
        setApiStatus('online');
      } catch (error) {
        setApiStatus('offline');
      }
    };
    checkHealth();
  }, []);

  // Load available models and active sessions on mount
  useEffect(() => {
    const loadModels = async () => {
      try {
        const response = await getAvailableModels();
        if (response.status === 'success') {
          setAvailableModels(response.models);
        }
      } catch (error) {
        console.error('Failed to load available models:', error);
      }
    };
    
    const loadActiveSessions = async () => {
      try {
        const response = await getActiveTrainingSessions();
        if (response.status === 'success') {
          // Active sessions loaded - trigger UI refresh if needed
          setActiveSessionsRefresh(prev => prev + 1);
        }
      } catch (error) {
        console.error('Error loading active sessions:', error);
      }
    };
    
    if (apiStatus === 'online') {
      loadModels();
      loadActiveSessions();
    }
  }, [apiStatus, currentTaskId]);

  // Cleanup SSE connections on unmount
  useEffect(() => {
    return () => {
      if (streamConnection) {
        streamConnection.close();
      }
    };
  }, []);

  // Function to start log streaming for any task
  const startLogStreaming = useCallback((taskId: string, updateStatus: boolean = true) => {
    // Close existing connection if any
    if (streamConnectionRef.current) {
      streamConnectionRef.current.close();
    }
      
    const connection = streamTrainingLogs(
      taskId,
      // onLog
      (logEntry: LogEntry) => {
        setLogs(prev => [...prev, logEntry]);
        
        // Update metrics if log contains training data
        if (logEntry.type === 'training' && logEntry.step && logEntry.loss !== undefined) {
          const newMetric: MetricData = {
            epoch: logEntry.epoch ?? 0,
            step: logEntry.step,
            loss: logEntry.loss ?? undefined,
            eval_loss: undefined, // Will be updated by status events
            learning_rate: logEntry.learning_rate ?? undefined,
          };
          
          setMetrics(prev => {
            const exists = prev.find(m => m.step === newMetric.step);
            if (exists) return prev;
            return [...prev, newMetric];
          });
        }
      },
      // onStatus - only update status if this is the current task
      (status: TrainingStatus) => {
        if (updateStatus) {
          // Ensure status has the required fields with fallbacks
          const validatedStatus: TrainingStatus = {
            task_id: status.task_id || taskId || '',
            status: status.status || 'running',
            progress: status.progress || 'No progress information',
            current_step: status.current_step ?? undefined,
            total_steps: status.total_steps ?? undefined,
            current_epoch: status.current_epoch ?? undefined,
            total_epochs: status.total_epochs ?? undefined,
            loss: status.loss ?? undefined,
            learning_rate: status.learning_rate ?? undefined,
            message: status.message ?? undefined
          };
          setTrainingStatus(validatedStatus);
        }
      },
        // onComplete
        () => {
          console.log('Training stream completed');
          setIsStreamConnected(false);
          setCurrentTaskId(null);
          
          // Refresh active sessions to remove completed session
          setActiveSessionsRefresh(prev => prev + 1);
        },
        // onError
        (error: string) => {
          console.error('SSE Stream error:', error);
          toast.error(`Streaming error: ${error}`);
          setIsStreamConnected(false);
          // Fall back to polling on error
          fallbackToPolling(taskId);
        },
        // onConnect
        () => {
          console.log('SSE Stream connected');
          setIsStreamConnected(true);
        }
      );
      
    setStreamConnection(connection);
    streamConnectionRef.current = connection;
  }, []);

  // SSE streaming for current training task
  useEffect(() => {
    if (currentTaskId && trainingStatus?.status === 'running') {
      startLogStreaming(currentTaskId, true);
    } else {
      // Clean up connection when not training
      if (streamConnection) {
        streamConnection.close();
        setStreamConnection(null);
        setIsStreamConnected(false);
      }
    }
  }, [currentTaskId, trainingStatus?.status, startLogStreaming]);
  
  // Fallback polling function in case SSE fails
  const fallbackToPolling = (taskId: string) => {
    const pollStatus = async () => {
      try {
        const status = await getTrainingStatus(taskId);
        setTrainingStatus(status);
        
        if (status.status === 'completed' || status.status === 'error') {
          setCurrentTaskId(null);
        } else {
          // Continue polling every 5 seconds
          setTimeout(pollStatus, 5000);
        }
      } catch (error) {
        console.error('Failed to fetch training status:', error);
      }
    };
    pollStatus();
  };

  const handleSelectModel = async (request: SelectModelRequest) => {
    setLoading(prev => ({ ...prev, model: true }));
    try {
      const response = await selectModel(request);
      if (response.status === 'success') {
        setSelectedModel(request.model_id);
        toast.success('Model downloaded successfully!');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('Failed to download model');
    } finally {
      setLoading(prev => ({ ...prev, model: false }));
    }
  };

  const handleModelSelected = (modelId: string) => {
    setSelectedModel(modelId);
    // Find the model info from available models
    const modelInfo = availableModels.find(model => model.model_id === modelId);
    setSelectedModelInfo(modelInfo || null);
  };

  const handlePrepareData = async (request: PrepareDataRequest) => {
    setLoading(prev => ({ ...prev, data: true }));
    try {
      const response = await prepareData(request);
      if (response.status === 'success') {
        toast.success('Data prepared successfully!');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('Failed to prepare data');
    } finally {
      setLoading(prev => ({ ...prev, data: false }));
    }
  };

  const handleStartTraining = async (request: FineTuneRequest) => {
    setLoading(prev => ({ ...prev, training: true }));
    try {
      const response = await startFineTuning(request);
      if (response.status === 'started' && response.task_id) {
        setCurrentTaskId(response.task_id);
        setTrainingStatus({ 
          task_id: response.task_id,
          status: 'running', 
          progress: 'Starting training...',
          message: response.message 
        });
        setLogs([]);
        setMetrics([]);
        
        // Trigger refresh of active sessions
        setActiveSessionsRefresh(prev => prev + 1);
        
        toast.success('Training started!');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('Failed to start training');
    } finally {
      setLoading(prev => ({ ...prev, training: false }));
    }
  };

  const calculateProgress = (): number => {
    if (!trainingStatus) return 0;
    
    // Use the computed progress_percentage if available
    if (trainingStatus.progress_percentage !== undefined) {
      return trainingStatus.progress_percentage;
    }
    
    // Fallback to manual calculation
    if (trainingStatus.current_step && trainingStatus.total_steps) {
      return (trainingStatus.current_step / trainingStatus.total_steps) * 100;
    }
    if (trainingStatus.current_epoch && trainingStatus.total_epochs) {
      return (trainingStatus.current_epoch / trainingStatus.total_epochs) * 100;
    }
    return 0;
  };

  const connectToActiveSession = async (taskId: string) => {
    setCurrentTaskId(taskId);
    setLogs([]);
    setMetrics([]);
    
    // Load current status
    try {
      const status = await getTrainingStatus(taskId);
      setTrainingStatus(status);
    } catch (error) {
      console.error('Error loading session status:', error);
    }
    
    // Start streaming logs
    startLogStreaming(taskId);
    
    // Trigger refresh of active sessions to update UI
    setActiveSessionsRefresh(prev => prev + 1);
    
    toast.success(`Connected to training session ${taskId.slice(0, 8)}...`);
  };

  const handleViewLogs = (taskId: string) => {
    // Clear current logs and set new viewing task
    setLogs([]);
    setMetrics([]);
    setViewingLogsTaskId(taskId);
    
    // Start streaming logs for the selected task (don't update training status)
    startLogStreaming(taskId, false);
    
    toast.success(`Viewing logs for session ${taskId.slice(0, 8)}...`);
  };

  const handleCancelTraining = async (taskId: string) => {
    try {
      const response = await cancelTraining(taskId);
      if (response.status === 'cancellation_requested') {
        toast.success(`Cancellation requested for ${taskId.slice(0, 8)}...`);
        
        // Refresh active sessions to show updated status
        setActiveSessionsRefresh(prev => prev + 1);
        
        // If this is the current task, update status
        if (taskId === currentTaskId) {
          setTrainingStatus(prevStatus => prevStatus ? {
            ...prevStatus,
            status: 'cancelling',
            message: 'Cancellation requested - stopping at next safe checkpoint'
          } : null);
        }
      } else {
        toast.error(response.message || 'Failed to cancel training');
      }
    } catch (error: any) {
      console.error('Cancellation error:', error);
      toast.error(`Failed to cancel training: ${error?.response?.data?.detail || error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'hsl(var(--card))',
            color: 'hsl(var(--card-foreground))',
            border: '1px solid hsl(var(--border))',
          },
        }}
      />
      
      {/* Header - Following shadcn/ui navigation patterns */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <Brain className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold tracking-tight">LLMForge</h1>
              </div>
              
              {/* Navigation Tabs */}
              <nav className="flex items-center space-x-1">
                <button
                  onClick={() => setActiveTab('training')}
                  className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeTab === 'training'
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Fine-tuning
                </button>
                
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeTab === 'chat'
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Model Comparison
                </button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              {activeTab === 'training' && (
                <button
                  onClick={() => setShowActiveSessions(!showActiveSessions)}
                  className={`btn-outline ${showActiveSessions ? 'bg-accent' : ''}`}
                  title="Toggle Active Sessions Panel"
                >
                  <Activity className="mr-2 h-4 w-4" />
                  Active Training
                </button>
              )}
              
              <div className="flex items-center space-x-2 rounded-md border px-3 py-1.5">
                <div className={`h-2 w-2 rounded-full ${
                  apiStatus === 'online' ? 'bg-green-500' : 
                  apiStatus === 'offline' ? 'bg-red-500' : 
                  'bg-yellow-500'
                }`} />
                <span className="text-sm font-medium">
                  {apiStatus === 'checking' ? 'Checking...' : 'API ' + apiStatus}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      {activeTab === 'chat' ? (
        <ComparisonChatInterface />
      ) : (
        <main className="container mx-auto max-w-7xl p-4 md:p-6 lg:p-8 space-y-8">
        {/* Training Progress Overview */}
        {trainingStatus && (
          <div className="space-y-6">
            <div className="card">
              <div className="card-header">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-md bg-primary/10 p-2">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold tracking-tight">Training Progress</h2>
                      <p className="text-sm text-muted-foreground">
                        Monitor your model fine-tuning in real-time
                      </p>
                    </div>
                  </div>
                  
                  {/* Cancel Button for current training */}
                  {currentTaskId && (trainingStatus.status === 'running' || trainingStatus.status === 'started') && (
                    <button
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to cancel the current training session?\n\nThe training will stop at the next safe checkpoint to preserve data integrity.`)) {
                          handleCancelTraining(currentTaskId);
                        }
                      }}
                      className="btn-destructive"
                      title="Cancel current training session"
                    >
                      <XCircle className="mr-2 h-4 w-4" />
                      Cancel Training
                    </button>
                  )}
                </div>
              </div>
              
              <div className="card-content space-y-6">
                <ProgressBar 
                  progress={calculateProgress()} 
                  label="Overall Progress" 
                />
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className={`text-sm font-medium ${
                      trainingStatus.status === 'running' ? 'text-blue-400' :
                      trainingStatus.status === 'completed' ? 'text-green-400' :
                      trainingStatus.status === 'error' ? 'text-destructive' :
                      'text-foreground'
                    }`}>{trainingStatus.status}</p>
                  </div>
                  
                  {trainingStatus.current_epoch && trainingStatus.total_epochs && (
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Epoch</p>
                      <p className="text-sm font-mono font-medium">{trainingStatus.current_epoch}/{trainingStatus.total_epochs}</p>
                    </div>
                  )}
                  
                  {trainingStatus.current_step && trainingStatus.total_steps && (
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Step</p>
                      <p className="text-sm font-mono font-medium">{trainingStatus.current_step}/{trainingStatus.total_steps}</p>
                    </div>
                  )}
                  
                  {trainingStatus.loss !== undefined && trainingStatus.loss !== null && (
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Loss</p>
                      <p className="text-sm font-mono font-medium text-green-400">{trainingStatus.loss.toFixed(4)}</p>
                    </div>
                  )}
                  
                  {trainingStatus.learning_rate !== undefined && trainingStatus.learning_rate !== null && (
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Learning Rate</p>
                      <p className="text-sm font-mono font-medium text-blue-400">{trainingStatus.learning_rate.toExponential(2)}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Setup & Configuration */}
          <div className="space-y-6">
            <ModelSelector 
              onSelectModel={handleSelectModel}
              onModelSelected={handleModelSelected}
              isLoading={loading.model}
              selectedModel={selectedModel || undefined}
            />
            
            <DataPreparation 
              onPrepareData={handlePrepareData}
              isLoading={loading.data}
            />
            
            <TrainingForm 
              onStartTraining={handleStartTraining}
              isLoading={loading.training}
              selectedModel={selectedModel}
              selectedModelInfo={selectedModelInfo}
            />
          </div>

          {/* Right Column - Monitoring & Status */}
          <div className="space-y-6">
            {/* Status Overview */}
            <div className="space-y-4">
              <StatusCard 
                title="Model Status" 
                status="completed" 
                message="Ready for fine-tuning"
              />
              <StatusCard 
                title="Data Status" 
                status="completed" 
                message="Dataset prepared and ready"
              />
              {trainingStatus && (
                <StatusCard 
                  title="Training Status" 
                  status={trainingStatus.status as any}
                  message={trainingStatus.message}
                  details={{
                    task_id: currentTaskId?.substring(0, 8) + '...',
                    progress: `${calculateProgress().toFixed(1)}%`
                  }}
                />
              )}
            </div>

            {/* Active Training Sessions Panel */}
            {showActiveSessions && (
              <ActiveSessionsPanel 
                onConnectToSession={connectToActiveSession}
                onViewLogs={handleViewLogs}
                onCancelTraining={handleCancelTraining}
                currentTaskId={currentTaskId}
                refreshTrigger={activeSessionsRefresh}
              />
            )}

            {/* Metrics Chart */}
            {metrics.length > 0 && (
              <MetricsChart data={metrics} />
            )}

            {/* Enhanced Terminal Logs - Always show for all LLM operations */}
            <LogViewer 
              logs={logs.map(log => `[${log.timestamp}] ${log.type.toUpperCase()}: ${log.message}`)} 
              title={
                viewingLogsTaskId ? 
                  `Training Logs - Session ${viewingLogsTaskId.slice(0, 8)}...` : 
                  currentTaskId ? 
                    `Training Logs - Session ${currentTaskId.slice(0, 8)}...` :
                    "LLM Training Logs"
              }
              maxHeight="600px"
              isConnected={isStreamConnected}
              onReconnect={() => {
                // Try to reconnect SSE stream if we have a current task
                if (currentTaskId && trainingStatus?.status === 'running') {
                  // Close existing connection
                  if (streamConnection) {
                    streamConnection.close();
                  }
                  
                  // Trigger re-creation of SSE connection by updating state
                  setCurrentTaskId(currentTaskId);
                } else if (currentTaskId) {
                  // Fallback to polling
                  fallbackToPolling(currentTaskId);
                }
              }}
            />
          </div>
        </div>
        </main>
      )}
    </div>
  );
}

export default App



================================================
FILE: src/index.css
================================================
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Dark Mode Color Palette - shadcn/ui compatible */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 84% 4.9%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 68%;
    --radius: 0.5rem;
    
    /* Status Colors */
    --success: 142 76% 36%;
    --success-foreground: 210 40% 98%;
    --warning: 38 92% 50%;
    --warning-foreground: 222.2 84% 4.9%;
    --error: 0 72% 51%;
    --error-foreground: 210 40% 98%;
    --info: 217 91% 60%;
    --info-foreground: 210 40% 98%;
  }
  
  * {
    @apply border-border;
  }
  
  html {
    @apply bg-background text-foreground;
  }
  
  body {
    @apply bg-background text-foreground;
    margin: 0;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, monospace;
  }
}

@layer components {
  /* Custom scrollbar for dark mode */
  .scrollbar-dark {
    scrollbar-width: thin;
    scrollbar-color: hsl(215 20.2% 65.1%) hsl(217.2 32.6% 17.5%);
  }
  
  .scrollbar-dark::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  .scrollbar-dark::-webkit-scrollbar-track {
    background: hsl(217.2 32.6% 17.5%);
    border-radius: 3px;
  }
  
  .scrollbar-dark::-webkit-scrollbar-thumb {
    background: hsl(215 20.2% 65.1%);
    border-radius: 3px;
  }
  
  .scrollbar-dark::-webkit-scrollbar-thumb:hover {
    background: hsl(210 40% 98%);
  }
  
  /* Button variants following shadcn/ui patterns */
  .btn-primary {
    @apply inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50;
    @apply bg-primary text-primary-foreground hover:bg-primary/90;
    @apply px-4 py-2;
  }
  
  .btn-secondary {
    @apply inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50;
    @apply bg-secondary text-secondary-foreground hover:bg-secondary/80;
    @apply px-4 py-2;
  }
  
  .btn-destructive {
    @apply inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50;
    @apply bg-destructive text-destructive-foreground hover:bg-destructive/90;
    @apply px-4 py-2;
  }
  
  .btn-outline {
    @apply inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50;
    @apply border border-input bg-background hover:bg-accent hover:text-accent-foreground;
    @apply px-4 py-2;
  }
  
  .btn-ghost {
    @apply inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50;
    @apply hover:bg-accent hover:text-accent-foreground;
    @apply px-4 py-2;
  }
  
  /* Input variants */
  .input {
    @apply flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50;
  }
  
  /* Card variants */
  .card {
    @apply rounded-lg border bg-card text-card-foreground shadow-sm;
  }
  
  .card-header {
    @apply flex flex-col space-y-1.5 p-6;
  }
  
  .card-content {
    @apply p-6 pt-0;
  }
  
  .card-footer {
    @apply flex items-center p-6 pt-0;
  }
  
  /* Status indicators */
  .status-online {
    @apply text-green-400;
  }
  
  .status-offline {
    @apply text-slate-500;
  }
  
  .status-error {
    @apply text-red-400;
  }
  
  .status-warning {
    @apply text-yellow-400;
  }
  
  .status-info {
    @apply text-blue-400;
  }
  
  /* Syntax highlighting for terminal output */
  .syntax-keyword {
    @apply text-blue-400;
  }
  
  .syntax-string {
    @apply text-orange-300;
  }
  
  .syntax-number {
    @apply text-green-400;
  }
  
  .syntax-comment {
    @apply text-slate-500;
  }
  
  .syntax-error {
    @apply text-red-400;
  }
  
  .syntax-warning {
    @apply text-yellow-400;
  }
  
  .syntax-info {
    @apply text-blue-300;
  }
}

@layer utilities {
  /* Custom animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.2s ease-in-out;
  }
  
  .animate-scale-hover:hover {
    transform: scale(1.02);
    transition: transform 0.15s ease-in-out;
  }
  
  /* Gradient text utilities */
  .text-gradient {
    @apply bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent;
  }
  
  /* Glow effects */
  .glow-blue {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.25);
  }
  
  .glow-green {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.25);
  }
  
  .glow-red {
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.25);
  }
}



================================================
FILE: src/main.tsx
================================================
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



================================================
FILE: src/vite-env.d.ts
================================================
/// <reference types="vite/client" />



================================================
FILE: src/components/ActiveSessionsPanel.tsx
================================================
import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Clock, 
  Zap, 
  Play, 
  Pause,
  RefreshCw,
  Monitor,
  AlertCircle,
  CheckCircle,
  XCircle,
  ArrowRight,
  FileText,
  ExternalLink
} from 'lucide-react';
import { getActiveTrainingSessions } from '../services/api';
import type { ActiveSession, ActiveSessionsResponse } from '../types/api';

interface ActiveSessionsPanelProps {
  onConnectToSession: (taskId: string) => void;
  onViewLogs?: (taskId: string) => void;
  onCancelTraining?: (taskId: string) => void;
  currentTaskId?: string | null;
  refreshTrigger?: number;
}

export const ActiveSessionsPanel: React.FC<ActiveSessionsPanelProps> = ({
  onConnectToSession,
  onViewLogs,
  onCancelTraining,
  currentTaskId,
  refreshTrigger = 0
}) => {
  const [activeSessions, setActiveSessions] = useState<Record<string, ActiveSession>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const loadActiveSessions = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response: ActiveSessionsResponse = await getActiveTrainingSessions();
      if (response.status === 'success') {
        setActiveSessions(response.active_sessions);
        setLastUpdated(new Date().toLocaleTimeString());
      } else {
        setError('Failed to load active sessions');
      }
    } catch (err) {
      setError('Error connecting to server');
      console.error('Error loading active sessions:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load sessions on mount and when refresh trigger changes
  useEffect(() => {
    loadActiveSessions();
  }, [refreshTrigger]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(loadActiveSessions, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'running':
        return <Play className="w-4 h-4 text-green-400" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-blue-400" />;
      case 'failed':
      case 'error':
        return <XCircle className="w-4 h-4 text-red-400" />;
      default:
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
    }
  };

  const getProgressInfo = (session: ActiveSession) => {
    const current = session.current_status;
    if (!current) return { progress: 0, text: 'No status available' };

    if (current.progress_percentage !== undefined && current.progress_percentage !== null && typeof current.progress_percentage === 'number') {
      return {
        progress: current.progress_percentage,
        text: `${current.progress_percentage.toFixed(1)}%`
      };
    }

    if (current.current_step && current.total_steps) {
      const progress = (current.current_step / current.total_steps) * 100;
      return {
        progress,
        text: `${current.current_step}/${current.total_steps} steps`
      };
    }

    if (current.current_epoch && current.total_epochs) {
      const progress = (current.current_epoch / current.total_epochs) * 100;
      return {
        progress,
        text: `${Number(current.current_epoch).toFixed(1)}/${current.total_epochs} epochs`
      };
    }

    return { progress: 0, text: 'Starting...' };
  };

  const formatTime = (timeString: string) => {
    try {
      return new Date(timeString).toLocaleString();
    } catch {
      return timeString;
    }
  };

  const sessionCount = Object.keys(activeSessions).length;

  return (
    <div className="card">
      {/* Header */}
      <div className="card-header">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="rounded-md bg-primary/10 p-2">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">Active Training Sessions</h3>
              <p className="text-sm text-muted-foreground">
                {sessionCount} active session{sessionCount !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {lastUpdated && (
              <span className="text-xs text-muted-foreground">
                Updated: {lastUpdated}
              </span>
            )}
            
            <button
              onClick={loadActiveSessions}
              disabled={loading}
              className="btn-outline p-2"
              title="Refresh sessions"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="card-content">
        {error && (
          <div className="mb-4 flex items-center space-x-2 rounded-md border border-destructive/20 bg-destructive/10 p-3">
            <AlertCircle className="h-4 w-4 text-destructive" />
            <span className="text-sm text-destructive">{error}</span>
          </div>
        )}

        {loading && sessionCount === 0 && (
          <div className="flex items-center justify-center py-12 text-muted-foreground">
            <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
            <span>Loading active sessions...</span>
          </div>
        )}

        {!loading && sessionCount === 0 && !error && (
          <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
            <div className="rounded-full bg-muted p-3 mb-4">
              <Pause className="h-6 w-6 opacity-50" />
            </div>
            <h4 className="font-medium text-foreground mb-1">No active training sessions</h4>
            <p className="text-sm">Start a new training to see it here</p>
          </div>
        )}

        {sessionCount > 0 && (
          <div className="space-y-3">
            {Object.entries(activeSessions).map(([taskId, session]) => {
              const progressInfo = getProgressInfo(session);
              const isCurrentSession = currentTaskId === taskId;
              const isRunning = session.current_status?.status === 'running';

              return (
                <div
                  key={taskId}
                  className={`rounded-lg border p-4 transition-all ${
                    isCurrentSession 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:bg-accent/50'
                  }`}
                >
                  {/* Session Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {getStatusIcon(session.current_status?.status || session.status)}
                      </div>
                      
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">
                          Task {taskId.slice(0, 8)}...
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {session.request_data?.base_model_dir?.split('/').pop() || 'Unknown model'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {isCurrentSession && (
                        <div className="rounded-full bg-primary/10 px-3 py-1">
                          <span className="text-xs font-medium text-primary">Connected</span>
                        </div>
                      )}
                      
                      {/* View Logs Button - available for all sessions */}
                      {onViewLogs && (
                        <button
                          onClick={() => onViewLogs(taskId)}
                          className="btn-outline px-2 py-1 text-xs"
                          title="View logs for this session"
                        >
                          <FileText className="mr-1 h-3 w-3" />
                          <span>Logs</span>
                        </button>
                      )}
                      
                      {!isCurrentSession && isRunning && (
                        <button
                          onClick={() => onConnectToSession(taskId)}
                          className="btn-primary px-3 py-1 text-xs"
                        >
                          <ArrowRight className="mr-1 h-3 w-3" />
                          <span>Connect</span>
                        </button>
                      )}
                      
                      {/* Cancel Button - for running sessions only */}
                      {onCancelTraining && (session.current_status?.status === 'running' || session.status === 'running') && (
                        <button
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to cancel training session ${taskId.slice(0, 8)}...?\n\nThe training will stop at the next safe checkpoint to preserve data integrity.`)) {
                              onCancelTraining(taskId);
                            }
                          }}
                          className="btn-destructive px-3 py-1 text-xs"
                          title="Cancel this training session"
                        >
                          <XCircle className="mr-1 h-3 w-3" />
                          <span>Cancel</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {progressInfo.progress > 0 && (
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{progressInfo.text}</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full bg-primary transition-all duration-300 ease-out"
                          style={{ width: `${Math.min(progressInfo.progress, 100)}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Session Details */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Started</span>
                      </div>
                      <p className="font-medium">
                        {formatTime(session.started_at)}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Zap className="h-3 w-3" />
                        <span>Status</span>
                      </div>
                      <p className="font-medium">
                        {session.current_status?.progress || 'Running...'}
                      </p>
                    </div>

                    {session.current_status?.loss && (
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Activity className="h-3 w-3" />
                          <span>Loss</span>
                        </div>
                        <p className="font-mono font-medium text-green-600">
                          {session.current_status.loss.toFixed(4)}
                        </p>
                      </div>
                    )}

                    {session.current_status?.estimated_remaining_minutes && (
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>ETA</span>
                        </div>
                        <p className="font-medium text-blue-600">
                          ~{Math.round(session.current_status.estimated_remaining_minutes)} min
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};


================================================
FILE: src/components/ComparisonChatInterface.tsx
================================================
import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageSquare, Settings, Trash2, Download, RotateCcw } from 'lucide-react';

interface ModelPair {
  pair_id: string;
  base_model_name: string;
  adapter_name: string;
  base_model_size_mb: number;
  adapter_size_mb: number;
  estimated_memory_mb: number;
  status: string;
  load_time_ms?: number;
}

interface ChatMessage {
  role: string;
  content: string;
  timestamp: string;
  model_type?: string;
}

interface ChatSession {
  session_id: string;
  session_name: string;
  pair_id: string;
  model_info: {
    base_model: string;
    adapter_name: string;
  };
  created_at: string;
  last_activity: string;
  message_count: number;
  status: string;
}

interface ComparisonResponse {
  base_response: string;
  finetuned_response: string;
  generation_time_ms: {
    base: number;
    finetuned: number;
    total: number;
  };
  model_info: {
    base_model: string;
    adapter_name: string;
    pair_id: string;
  };
  cache_metrics: {
    cache_hits: number;
    cache_misses: number;
  };
  session_id: string;
  timestamp: string;
}

export const ComparisonChatInterface: React.FC = () => {
  const [modelPairs, setModelPairs] = useState<ModelPair[]>([]);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showNewSessionDialog, setShowNewSessionDialog] = useState(false);
  const [selectedPairId, setSelectedPairId] = useState<string>('');
  const [sessionName, setSessionName] = useState('');

  // Refs for auto-scrolling
  const baseMessagesRef = useRef<HTMLDivElement>(null);
  const finetunedMessagesRef = useRef<HTMLDivElement>(null);

  // Load model pairs and sessions on component mount
  useEffect(() => {
    loadModelPairs();
    loadSessions();
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (baseMessagesRef.current) {
      baseMessagesRef.current.scrollTop = baseMessagesRef.current.scrollHeight;
    }
    if (finetunedMessagesRef.current) {
      finetunedMessagesRef.current.scrollTop = finetunedMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const loadModelPairs = async () => {
    try {
      const response = await fetch('http://localhost:8000/chat/model-pairs');
      const data = await response.json();
      if (data.status === 'success') {
        setModelPairs(data.model_pairs);
      }
    } catch (error) {
      console.error('Failed to load model pairs:', error);
    }
  };

  const loadSessions = async () => {
    try {
      const response = await fetch('http://localhost:8000/chat/sessions');
      const data = await response.json();
      if (data.status === 'success') {
        setSessions(data.sessions);
      }
    } catch (error) {
      console.error('Failed to load sessions:', error);
    }
  };

  const createSession = async () => {
    if (!selectedPairId) return;

    try {
      const response = await fetch('http://localhost:8000/chat/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pair_id: selectedPairId,
          session_name: sessionName || undefined,
        }),
      });

      const data = await response.json();
      if (data.status === 'success') {
        const newSession = data.session;
        setSessions([...sessions, newSession]);
        setActiveSessionId(newSession.session_id);
        setMessages([]);
        setShowNewSessionDialog(false);
        setSessionName('');
        setSelectedPairId('');
      }
    } catch (error) {
      console.error('Failed to create session:', error);
    }
  };

  const loadSessionHistory = async (sessionId: string) => {
    try {
      const response = await fetch(`http://localhost:8000/chat/sessions/${sessionId}`);
      const data = await response.json();
      if (data.status === 'success') {
        setMessages(data.messages || []);
      }
    } catch (error) {
      console.error('Failed to load session history:', error);
    }
  };

  const deleteSession = async (sessionId: string) => {
    try {
      const response = await fetch(`http://localhost:8000/chat/sessions/${sessionId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSessions(sessions.filter(s => s.session_id !== sessionId));
        if (activeSessionId === sessionId) {
          setActiveSessionId(null);
          setMessages([]);
        }
      }
    } catch (error) {
      console.error('Failed to delete session:', error);
    }
  };

  const sendMessage = async () => {
    if (!currentMessage.trim() || !activeSessionId || isGenerating) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: currentMessage,
      timestamp: new Date().toISOString(),
    };

    // Add user message to display
    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsGenerating(true);

    try {
      const response = await fetch('http://localhost:8000/chat/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: activeSessionId,
          messages: [...messages, userMessage],
          generation_params: {
            max_new_tokens: 256,
            temperature: 0.7,
            do_sample: true,
            top_p: 0.9,
          },
        }),
      });

      const data = await response.json();
      if (data.status === 'success') {
        const comparisonResponse: ComparisonResponse = data.response;

        // Add both responses
        const baseResponse: ChatMessage = {
          role: 'assistant',
          content: comparisonResponse.base_response,
          timestamp: comparisonResponse.timestamp,
          model_type: 'base',
        };

        const finetunedResponse: ChatMessage = {
          role: 'assistant',
          content: comparisonResponse.finetuned_response,
          timestamp: comparisonResponse.timestamp,
          model_type: 'finetuned',
        };

        setMessages(prev => [...prev, baseResponse, finetunedResponse]);
      }
    } catch (error) {
      console.error('Failed to generate response:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const selectSession = (sessionId: string) => {
    setActiveSessionId(sessionId);
    loadSessionHistory(sessionId);
  };

  const activeSession = sessions.find(s => s.session_id === activeSessionId);
  const baseMessages = messages.filter(m => m.role === 'user' || m.model_type === 'base');
  const finetunedMessages = messages.filter(m => m.role === 'user' || m.model_type === 'finetuned');

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-80 bg-card border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-500" />
              Chat Sessions
            </h2>
            <button
              onClick={() => setShowNewSessionDialog(true)}
              className="px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm"
            >
              New Session
            </button>
          </div>
        </div>

        {/* Session List */}
        <div className="flex-1 overflow-y-auto">
          {sessions.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              <MessageSquare className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No chat sessions yet</p>
              <p className="text-sm">Create one to start comparing models</p>
            </div>
          ) : (
            <div className="p-2 space-y-2">
              {sessions.map((session) => (
                <div
                  key={session.session_id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    activeSessionId === session.session_id
                      ? 'bg-purple-500/10 border border-purple-500/20'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  onClick={() => selectSession(session.session_id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground truncate">
                        {session.session_name}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">
                        {session.model_info.base_model} + {session.model_info.adapter_name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {session.message_count} messages
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteSession(session.session_id);
                      }}
                      className="p-1 hover:bg-red-500/10 rounded"
                    >
                      <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeSession ? (
          <>
            {/* Header */}
            <div className="p-4 border-b border-border bg-card">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-semibold text-foreground">
                    {activeSession.session_name}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Comparing: {activeSession.model_info.base_model} vs {activeSession.model_info.adapter_name}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => loadSessionHistory(activeSessionId!)}
                    className="p-2 hover:bg-muted rounded-md"
                    title="Refresh"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 hover:bg-muted rounded-md"
                    title="Settings"
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Split Screen Chat */}
            <div className="flex-1 flex">
              {/* Base Model Side */}
              <div className="flex-1 flex flex-col border-r border-border">
                <div className="p-3 bg-blue-500/10 border-b border-border">
                  <h3 className="font-medium text-blue-400">
                    Base Model: {activeSession.model_info.base_model}
                  </h3>
                </div>
                <div
                  ref={baseMessagesRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4"
                >
                  {baseMessages.map((message, index) => (
                    <div
                      key={`base-${index}`}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === 'user'
                            ? 'bg-purple-600 text-white'
                            : 'bg-blue-500/10 text-foreground border border-blue-500/20'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{message.content}</div>
                        <div className="text-xs opacity-70 mt-1">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fine-tuned Model Side */}
              <div className="flex-1 flex flex-col">
                <div className="p-3 bg-green-500/10 border-b border-border">
                  <h3 className="font-medium text-green-400">
                    Fine-tuned: {activeSession.model_info.adapter_name}
                  </h3>
                </div>
                <div
                  ref={finetunedMessagesRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4"
                >
                  {finetunedMessages.map((message, index) => (
                    <div
                      key={`finetuned-${index}`}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === 'user'
                            ? 'bg-purple-600 text-white'
                            : 'bg-green-500/10 text-foreground border border-green-500/20'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{message.content}</div>
                        <div className="text-xs opacity-70 mt-1">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  className="flex-1 resize-none p-3 bg-background border border-input rounded-lg text-foreground focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={2}
                  disabled={isGenerating}
                />
                <button
                  onClick={sendMessage}
                  disabled={!currentMessage.trim() || isGenerating}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isGenerating ? 'Generating...' : 'Send'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-muted/20">
            <div className="text-center">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Select a Chat Session
              </h2>
              <p className="text-muted-foreground mb-4">
                Choose a session from the sidebar or create a new one to start comparing models
              </p>
              <button
                onClick={() => setShowNewSessionDialog(true)}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Create New Session
              </button>
            </div>
          </div>
        )}
      </div>

      {/* New Session Dialog */}
      {showNewSessionDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg p-6 w-full max-w-md border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Create New Chat Session
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Session Name (Optional)
                </label>
                <input
                  type="text"
                  value={sessionName}
                  onChange={(e) => setSessionName(e.target.value)}
                  placeholder="My Chat Session"
                  className="w-full p-2 bg-background border border-input rounded-md text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Model Pair
                </label>
                <select
                  value={selectedPairId}
                  onChange={(e) => setSelectedPairId(e.target.value)}
                  className="w-full p-2 bg-background border border-input rounded-md text-foreground"
                >
                  <option value="">Select a model pair...</option>
                  {modelPairs.map((pair) => (
                    <option key={pair.pair_id} value={pair.pair_id}>
                      {pair.base_model_name} + {pair.adapter_name} 
                      ({(pair.estimated_memory_mb / 1024).toFixed(1)}GB)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => {
                  setShowNewSessionDialog(false);
                  setSessionName('');
                  setSelectedPairId('');
                }}
                className="px-4 py-2 text-muted-foreground hover:text-foreground"
              >
                Cancel
              </button>
              <button
                onClick={createSession}
                disabled={!selectedPairId}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50"
              >
                Create Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


================================================
FILE: src/components/DataPreparation.tsx
================================================
import React, { useState } from 'react';
import { Database, Upload } from 'lucide-react';
import type { PrepareDataRequest } from '../types/api';

interface DataPreparationProps {
  onPrepareData: (request: PrepareDataRequest) => void;
  isLoading: boolean;
}

export const DataPreparation: React.FC<DataPreparationProps> = ({ onPrepareData, isLoading }) => {
  const [inputFile, setInputFile] = useState('/app/data/input/dataset.csv');
  const [task, setTask] = useState<'unsupervised' | 'supervised' | 'instruction'>('instruction');
  const [augment, setAugment] = useState(false);
  const [balance, setBalance] = useState(false);
  const [testSize, setTestSize] = useState(0.2);
  const [maxLength, setMaxLength] = useState(512);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPrepareData({
      input_file: inputFile,
      task,
      augment,
      balance,
      test_size: testSize,
      max_length: maxLength,
    });
  };

  return (
    <div className="bg-card rounded-lg shadow-sm border-border border p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Database className="w-5 h-5 text-green-500" />
        <h3 className="font-semibold text-foreground">Prepare Training Data</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Input File Path
          </label>
          <input
            type="text"
            value={inputFile}
            onChange={(e) => setInputFile(e.target.value)}
            className="w-full p-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
            placeholder="/app/data/input/dataset.csv"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Task Type
          </label>
          <div className="space-y-2">
            {(['instruction', 'supervised', 'unsupervised'] as const).map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={option}
                  checked={task === option}
                  onChange={(e) => setTask(e.target.value as typeof task)}
                  className="text-green-500 accent-green-500"
                />
                <span className="capitalize">{option} Learning</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Test Size
            </label>
            <input
              type="number"
              value={testSize}
              onChange={(e) => setTestSize(Number.parseFloat(e.target.value))}
              min="0.1"
              max="0.5"
              step="0.05"
              className="w-full p-2 bg-background border border-input rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Max Length
            </label>
            <input
              type="number"
              value={maxLength}
              onChange={(e) => setMaxLength(Number.parseInt(e.target.value))}
              min="128"
              max="4096"
              step="128"
              className="w-full p-2 bg-background border border-input rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={augment}
              onChange={(e) => setAugment(e.target.checked)}
              className="text-green-500 accent-green-500"
            />
            <span>Data Augmentation</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={balance}
              onChange={(e) => setBalance(e.target.checked)}
              className="text-green-500 accent-green-500"
            />
            <span>Balance Classes</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Upload className="w-4 h-4" />
          <span>{isLoading ? 'Preparing Data...' : 'Prepare Data'}</span>
        </button>
      </form>
    </div>
  );
};


================================================
FILE: src/components/LogViewer.tsx
================================================
import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { 
  Terminal, 
  Download, 
  Search, 
  Filter,
  Trash2,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Copy,
  Wifi,
  WifiOff,
  Circle,
  AlertTriangle,
  Info,
  Bug,
  Activity
} from 'lucide-react';

interface LogViewerProps {
  logs: string[];
  title?: string;
  maxHeight?: string;
  isConnected?: boolean;
  onReconnect?: () => void;
}

interface ParsedLog {
  id: string;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG' | 'TRAIN' | 'UNKNOWN';
  message: string;
  rawContent: string;
  lineNumber: number;
}

type LogLevel = ParsedLog['level'];

const LOG_LEVEL_CONFIG: Record<LogLevel, { 
  color: string; 
  bgColor: string; 
  icon: React.ComponentType<{ className?: string }>; 
  priority: number;
}> = {
  ERROR: { color: 'text-destructive', bgColor: 'bg-destructive/10', icon: AlertTriangle, priority: 1 },
  WARN: { color: 'text-yellow-500', bgColor: 'bg-yellow-50/10', icon: AlertTriangle, priority: 2 },
  INFO: { color: 'text-blue-500', bgColor: 'bg-blue-50/10', icon: Info, priority: 3 },
  TRAIN: { color: 'text-green-500', bgColor: 'bg-green-50/10', icon: Activity, priority: 4 },
  DEBUG: { color: 'text-purple-500', bgColor: 'bg-purple-50/10', icon: Bug, priority: 5 },
  UNKNOWN: { color: 'text-muted-foreground', bgColor: 'bg-muted/10', icon: Circle, priority: 6 }
};

export const LogViewer: React.FC<LogViewerProps> = ({ 
  logs, 
  title = "Training Logs", 
  maxHeight = "400px",
  isConnected = true,
  onReconnect
}) => {
  const logEndRef = useRef<HTMLDivElement>(null);
  const logContainerRef = useRef<HTMLDivElement>(null);
  
  // Enhanced state management
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<Set<LogLevel>>(new Set());
  const [isAutoscrollEnabled, setIsAutoscrollEnabled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
  const [newLogAnimation, setNewLogAnimation] = useState<number | null>(null);

  // Parse logs with enhanced structure
  const parsedLogs = useMemo((): ParsedLog[] => {
    return logs.map((log, index) => {
      const id = `log-${index}-${Date.now()}`;
      
      // Enhanced log parsing with multiple patterns
      const patterns = [
        /^\[?(\d{4}-\d{2}-\d{2}[\s|T]\d{2}:\d{2}:\d{2}(?:\.\d{3})?)\]?\s*\[?(INFO|WARN|ERROR|DEBUG|TRAIN)\]?\s*:?\s*(.+)$/i,
        /^(\d{2}:\d{2}:\d{2})\s*\[?(INFO|WARN|ERROR|DEBUG|TRAIN)\]?\s*:?\s*(.+)$/i,
        /^\[?(INFO|WARN|ERROR|DEBUG|TRAIN)\]?\s*:?\s*(.+)$/i
      ];
      
      for (const pattern of patterns) {
        const match = log.match(pattern);
        if (match) {
          const [, timestamp, level, message] = match;
          return {
            id,
            timestamp: timestamp || new Date().toLocaleTimeString(),
            level: (level?.toUpperCase() as LogLevel) || 'UNKNOWN',
            message: message || log,
            rawContent: log,
            lineNumber: index + 1
          };
        }
      }
      
      // Fallback parsing
      return {
        id,
        timestamp: new Date().toLocaleTimeString(),
        level: 'UNKNOWN',
        message: log,
        rawContent: log,
        lineNumber: index + 1
      };
    });
  }, [logs]);

  // Filter and search logic
  const filteredLogs = useMemo(() => {
    let filtered = parsedLogs;
    
    // Apply level filters
    if (activeFilters.size > 0) {
      filtered = filtered.filter(log => activeFilters.has(log.level));
    }
    
    // Apply search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(log => 
        log.message.toLowerCase().includes(search) ||
        log.level.toLowerCase().includes(search) ||
        log.timestamp.toLowerCase().includes(search)
      );
    }
    
    return filtered;
  }, [parsedLogs, activeFilters, searchTerm]);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoscrollEnabled && logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [filteredLogs, isAutoscrollEnabled]);

  // New log animation
  useEffect(() => {
    if (logs.length > 0) {
      const lastIndex = logs.length - 1;
      setNewLogAnimation(lastIndex);
      
      const timer = setTimeout(() => {
        setNewLogAnimation(null);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [logs.length]);

  // Enhanced download functionality
  const downloadLogs = useCallback(() => {
    const logContent = filteredLogs.map(log => 
      `[${log.timestamp}] [${log.level}] ${log.message}`
    ).join('\n');
    
    const blob = new Blob([logContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `logs-${new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [filteredLogs]);

  // Copy log line functionality
  const copyLogLine = useCallback(async (log: ParsedLog) => {
    try {
      await navigator.clipboard.writeText(`[${log.timestamp}] [${log.level}] ${log.message}`);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = `[${log.timestamp}] [${log.level}] ${log.message}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }, []);

  // Clear logs functionality
  const clearLogs = useCallback(() => {
    // This would need to be implemented in the parent component
    // For now, we'll just clear the search and filters
    setSearchTerm('');
    setActiveFilters(new Set());
  }, []);

  // Toggle filter
  const toggleFilter = useCallback((level: LogLevel) => {
    setActiveFilters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(level)) {
        newSet.delete(level);
      } else {
        newSet.add(level);
      }
      return newSet;
    });
  }, []);

  // Get log level counts
  const logCounts = useMemo(() => {
    const counts: Record<LogLevel, number> = {
      ERROR: 0, WARN: 0, INFO: 0, TRAIN: 0, DEBUG: 0, UNKNOWN: 0
    };
    parsedLogs.forEach(log => counts[log.level]++);
    return counts;
  }, [parsedLogs]);

  return (
    <div className={`rounded-lg border bg-card transition-all duration-300 ${
      isFullscreen ? 'fixed inset-4 z-50' : ''
    }`}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="rounded-md bg-primary/10 p-2">
              <Terminal className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold tracking-tight">{title}</h3>
              <p className="text-sm text-muted-foreground">Real-time training logs</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {isConnected ? (
              <div className="flex items-center space-x-2 rounded-full bg-green-50/10 px-3 py-1">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-green-500">Live</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-destructive" />
                <button 
                  onClick={onReconnect}
                  className="text-xs font-medium text-destructive hover:text-destructive/80 transition-colors"
                >
                  Reconnect
                </button>
              </div>
            )}
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Activity className="h-3 w-3" />
              <span className="text-xs font-mono">{filteredLogs.length}/{logs.length}</span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-1">
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-ghost p-2"
              title="Toggle filters"
            >
              <Filter className="h-4 w-4" />
            </button>
            
            {/* Filter Dropdown */}
            {showFilters && (
              <div className="absolute right-0 top-full mt-2 min-w-48 rounded-md border bg-popover p-2 shadow-lg z-10">
                <div className="space-y-1">
                  {Object.entries(LOG_LEVEL_CONFIG).map(([level, config]) => {
                    const Icon = config.icon;
                    const count = logCounts[level as LogLevel];
                    return (
                      <button
                        key={level}
                        onClick={() => toggleFilter(level as LogLevel)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-sm text-sm transition-colors ${
                          activeFilters.has(level as LogLevel)
                            ? 'bg-accent text-accent-foreground'
                            : 'hover:bg-accent/50'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className={`h-3 w-3 ${config.color}`} />
                          <span>{level}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={() => setIsAutoscrollEnabled(!isAutoscrollEnabled)}
            className={`btn-ghost p-2 ${
              isAutoscrollEnabled ? 'text-green-500 hover:text-green-600' : ''
            }`}
            title={isAutoscrollEnabled ? 'Disable autoscroll' : 'Enable autoscroll'}
          >
            {isAutoscrollEnabled ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          
          <button
            onClick={clearLogs}
            className="btn-ghost p-2"
            title="Clear filters"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          
          {logs.length > 0 && (
            <button
              onClick={downloadLogs}
              className="btn-ghost p-2"
              title="Download logs"
            >
              <Download className="h-4 w-4" />
            </button>
          )}
          
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="btn-ghost p-2"
            title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="border-b p-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search logs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
      </div>
      
      {/* Log Content */}
      <div 
        ref={logContainerRef}
        className="bg-background font-mono text-sm overflow-y-auto relative"
        style={{ 
          maxHeight: isFullscreen ? 'calc(100vh - 200px)' : maxHeight,
          minHeight: '200px'
        }}
      >
        {filteredLogs.length === 0 ? (
          <div className="flex h-32 items-center justify-center text-muted-foreground">
            {logs.length === 0 ? (
              <div className="text-center space-y-2">
                <Terminal className="mx-auto h-8 w-8 opacity-50" />
                <div>No logs available yet...</div>
                <div className="text-xs">Waiting for training to start</div>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <Search className="mx-auto h-8 w-8 opacity-50" />
                <div>No logs match your filters</div>
                <div className="text-xs">Try adjusting your search or filters</div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-1 p-4">
            {filteredLogs.map((log, index) => {
              const config = LOG_LEVEL_CONFIG[log.level];
              const Icon = config.icon;
              const isNewLog = newLogAnimation === log.lineNumber - 1;
              
              return (
                <div
                  key={log.id}
                  className={`group flex items-start space-x-3 rounded-sm px-2 py-1 transition-all duration-200 ${
                    isNewLog ? 'animate-pulse bg-blue-50/10' : 'hover:bg-accent/50'
                  } ${config.bgColor}`}
                  onMouseEnter={() => setHoveredLine(index)}
                  onMouseLeave={() => setHoveredLine(null)}
                >
                  {/* Line number */}
                  <div className="w-12 flex-shrink-0 text-right text-xs text-muted-foreground leading-relaxed">
                    {log.lineNumber}
                  </div>
                  
                  {/* Timestamp */}
                  <div className="flex-shrink-0 text-xs text-muted-foreground leading-relaxed">
                    {log.timestamp}
                  </div>
                  
                  {/* Level badge */}
                  <div className={`flex flex-shrink-0 items-center space-x-1 ${config.color}`}>
                    <Icon className="h-3 w-3" />
                    <span className="min-w-12 text-xs font-medium">{log.level}</span>
                  </div>
                  
                  {/* Message */}
                  <div className="flex-1 whitespace-pre-wrap break-words leading-relaxed">
                    {log.message}
                  </div>
                  
                  {/* Copy button */}
                  {hoveredLine === index && (
                    <button
                      onClick={() => copyLogLine(log)}
                      className="flex-shrink-0 p-1 opacity-0 transition-opacity group-hover:opacity-100 btn-ghost"
                      title="Copy log line"
                    >
                      <Copy className="h-3 w-3" />
                    </button>
                  )}
                </div>
              );
            })}
            <div ref={logEndRef} />
          </div>
        )}
        
        {/* Streaming indicator */}
        {isConnected && logs.length > 0 && (
          <div className="absolute bottom-2 right-2 flex items-center space-x-2 rounded-md bg-background/95 border px-3 py-1 text-xs backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
            <span className="font-medium text-green-600">Live</span>
          </div>
        )}
      </div>
    </div>
  );
};


================================================
FILE: src/components/MetricsChart.tsx
================================================
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface MetricData {
  epoch: number;
  step: number;
  loss?: number;
  eval_loss?: number;
  learning_rate?: number;
}

interface MetricsChartProps {
  data: MetricData[];
  title?: string;
}

export const MetricsChart: React.FC<MetricsChartProps> = ({ data, title = "Training Metrics" }) => {
  if (data.length === 0) {
    return (
      <div className="bg-card rounded-lg shadow-sm border border-border p-6">
        <h3 className="font-semibold text-card-foreground mb-4">{title}</h3>
        <div className="h-64 flex items-center justify-center text-muted-foreground">
          No metrics data available yet...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6">
      <h3 className="font-semibold text-card-foreground mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="step" 
              label={{ value: 'Training Steps', position: 'insideBottom', offset: -5 }}
            />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="lr" orientation="right" />
            <Tooltip 
              formatter={(value, name) => [
                typeof value === 'number' ? 
                  (name === 'Learning Rate' ? value.toExponential(2) : value.toFixed(4)) : value, 
                name
              ]}
              labelFormatter={(step) => `Step: ${step}`}
            />
            <Legend />
            {data.some(d => d.loss !== undefined) && (
              <Line 
                type="monotone" 
                dataKey="loss" 
                stroke="#ef4444" 
                strokeWidth={2}
                name="Training Loss"
                dot={false}
                yAxisId="left"
              />
            )}
            {data.some(d => d.eval_loss !== undefined) && (
              <Line 
                type="monotone" 
                dataKey="eval_loss" 
                stroke="#22c55e" 
                strokeWidth={2}
                name="Validation Loss"
                dot={false}
                yAxisId="left"
              />
            )}
            {data.some(d => d.learning_rate !== undefined) && (
              <Line 
                type="monotone" 
                dataKey="learning_rate" 
                stroke="#3b82f6" 
                strokeWidth={2}
                name="Learning Rate"
                dot={false}
                yAxisId="lr"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


================================================
FILE: src/components/ModelSelector.tsx
================================================
import React, { useState, useEffect } from 'react';
import { Download, Cpu, Check, AlertCircle, RefreshCw } from 'lucide-react';
import { getAvailableModels } from '../services/api';
import type { SelectModelRequest, ModelInfo } from '../types/api';

interface ModelSelectorProps {
  onSelectModel: (request: SelectModelRequest) => void;
  onModelSelected: (modelId: string) => void;
  isLoading: boolean;
  selectedModel?: string;
}

const POPULAR_MODELS = [
  { id: 'unsloth/llama-3.1-8b-unsloth-bnb-4bit', name: 'Llama 3.1 8B (Unsloth)', size: '8B' },
  { id: 'unsloth/llama-3.1-70b-unsloth-bnb-4bit', name: 'Llama 3.1 70B (Unsloth)', size: '70B' },
  { id: 'unsloth/mistral-7b-unsloth-bnb-4bit', name: 'Mistral 7B (Unsloth)', size: '7B' },
  { id: 'unsloth/codellama-34b-unsloth-bnb-4bit', name: 'CodeLlama 34B (Unsloth)', size: '34B' },
];

export const ModelSelector: React.FC<ModelSelectorProps> = ({ 
  onSelectModel, 
  onModelSelected, 
  isLoading, 
  selectedModel 
}) => {
  const [localSelectedModel, setLocalSelectedModel] = useState(POPULAR_MODELS[0].id);
  const [customModel, setCustomModel] = useState('');
  const [useCustom, setUseCustom] = useState(false);
  const [quantization, setQuantization] = useState<string>('4bit');
  const [availableModels, setAvailableModels] = useState<ModelInfo[]>([]);
  const [loadingModels, setLoadingModels] = useState(false);
  const [viewMode, setViewMode] = useState<'popular' | 'available'>('available');

  // Load available models on component mount
  useEffect(() => {
    loadAvailableModels();
  }, []);

  const loadAvailableModels = async () => {
    setLoadingModels(true);
    try {
      const response = await getAvailableModels();
      if (response.status === 'success') {
        setAvailableModels(response.models);
      }
    } catch (error) {
      console.error('Failed to load available models:', error);
    } finally {
      setLoadingModels(false);
    }
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    const modelId = useCustom ? customModel : localSelectedModel;
    if (!modelId.trim()) return;

    onSelectModel({
      model_id: modelId,
      output_dir: '/app/models/base',
      quantization,
    });
  };

  const handleSelectExistingModel = (modelId: string) => {
    onModelSelected(modelId);
  };

  const isModelAvailable = (modelId: string) => {
    return availableModels.some(model => model.model_id === modelId);
  };

  // const getModelInfo = (modelId: string) => {
  //   return availableModels.find(model => model.model_id === modelId);
  // };

  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="rounded-md bg-primary/10 p-2">
              <Cpu className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">Model Selection</h3>
              <p className="text-sm text-muted-foreground">
                Choose or download a base model for fine-tuning
              </p>
            </div>
          </div>
          <button
            onClick={loadAvailableModels}
            disabled={loadingModels}
            className="btn-outline"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${loadingModels ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="card-content">
        {/* Selected Model Display */}
        {selectedModel && (
          <div className="mb-6 rounded-md border border-green-200/20 bg-green-50/5 p-4">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-400">Selected Model:</span>
              <span className="text-sm font-mono text-green-300">{selectedModel}</span>
            </div>
          </div>
        )}

        {/* View Mode Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 rounded-md bg-muted p-1">
            <button
              onClick={() => setViewMode('available')}
              className={`flex-1 rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                viewMode === 'available' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Available Models ({availableModels.length})
            </button>
            <button
              onClick={() => setViewMode('popular')}
              className={`flex-1 rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                viewMode === 'popular' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Download New Model
            </button>
          </div>
        </div>

        {/* Available Models View */}
        {viewMode === 'available' && (
          <div className="space-y-4">
            {loadingModels ? (
              <div className="flex items-center justify-center py-12">
                <div className="flex items-center space-x-3">
                  <RefreshCw className="h-5 w-5 animate-spin text-primary" />
                  <span className="text-sm text-muted-foreground">Loading available models...</span>
                </div>
              </div>
            ) : availableModels.length > 0 ? (
              <div className="space-y-3">
                {availableModels.map((model) => (
                  <div
                    key={model.model_id}
                    className={`rounded-lg border p-4 transition-colors cursor-pointer ${
                      selectedModel === model.model_id
                        ? 'border-primary bg-accent'
                        : 'hover:border-accent-foreground/20 hover:bg-accent/50'
                    }`}
                    onClick={() => handleSelectExistingModel(model.model_id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium text-foreground truncate">{model.model_id}</h4>
                          <div className="flex items-center space-x-2">
                            <div className="rounded-full bg-green-500/10 px-2 py-1">
                              <span className="text-xs font-medium text-green-600">Available</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span>Size: {Math.round(model.size_mb / 1024)} GB</span>
                          {model.architecture && <span>Architecture: {model.architecture}</span>}
                          <span className={`flex items-center space-x-1 ${model.has_tokenizer ? 'text-green-400' : 'text-destructive'}`}>
                            <span>Tokenizer: {model.has_tokenizer ? 'Available' : 'Missing'}</span>
                          </span>
                        </div>
                      </div>
                      {selectedModel === model.model_id && (
                        <div className="flex-shrink-0">
                          <div className="rounded-full bg-primary p-1">
                            <Check className="h-4 w-4 text-primary-foreground" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-muted-foreground" />
                </div>
                <h4 className="text-sm font-medium text-foreground mb-1">No models available locally</h4>
                <p className="text-sm text-muted-foreground">Download a model to get started</p>
              </div>
            )}
          </div>
        )}

        {/* Download New Model View */}
        {viewMode === 'popular' && (
          <form onSubmit={handleDownload} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    checked={!useCustom}
                    onChange={() => setUseCustom(false)}
                    className="h-4 w-4 border border-primary text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  />
                  <div>
                    <span className="text-sm font-medium">Popular Models</span>
                    <p className="text-xs text-muted-foreground">Pre-configured optimized models</p>
                  </div>
                </label>
                {!useCustom && (
                  <div className="ml-7 space-y-3">
                    <select
                      value={localSelectedModel}
                      onChange={(e) => setLocalSelectedModel(e.target.value)}
                      className="input"
                    >
                      {POPULAR_MODELS.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.name} ({model.size}) 
                          {isModelAvailable(model.id) ? ' - Available' : ' - Need to download'}
                        </option>
                      ))}
                    </select>
                    {!useCustom && isModelAvailable(localSelectedModel) && (
                      <div className="rounded-md border border-yellow-200/20 bg-yellow-50/5 p-3">
                        <p className="text-sm text-yellow-400">
                          This model is already available locally. You can select it from the "Available Models" tab instead.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    checked={useCustom}
                    onChange={() => setUseCustom(true)}
                    className="h-4 w-4 border border-primary text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  />
                  <div>
                    <span className="text-sm font-medium">Custom Model ID</span>
                    <p className="text-xs text-muted-foreground">Enter any Hugging Face model ID</p>
                  </div>
                </label>
                {useCustom && (
                  <div className="ml-7 space-y-3">
                    <input
                      type="text"
                      value={customModel}
                      onChange={(e) => setCustomModel(e.target.value)}
                      placeholder="e.g., microsoft/DialoGPT-medium"
                      className="input"
                    />
                    {useCustom && isModelAvailable(customModel) && (
                      <div className="rounded-md border border-yellow-200/20 bg-yellow-50/5 p-3">
                        <p className="text-sm text-yellow-400">
                          This model is already available locally. You can select it from the "Available Models" tab instead.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium leading-none">
                Quantization
              </label>
              <div className="flex space-x-6">
                {(['none', '4bit', '8bit'] as const).map((option) => (
                  <label key={option} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      value={option}
                      checked={quantization === option}
                      onChange={(e) => setQuantization(e.target.value)}
                      className="h-4 w-4 border border-primary text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    />
                    <span className="text-sm font-medium capitalize">{option}</span>
                  </label>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Quantization reduces memory usage but may affect model quality
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading || (!localSelectedModel && !customModel.trim())}
              className="btn-primary w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              {isLoading ? 'Downloading Model...' : 'Download Model'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};


================================================
FILE: src/components/ProgressBar.tsx
================================================
import React from 'react';

interface ProgressBarProps {
  progress: number;
  label?: string;
  className?: string;
  showPercentage?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  className = '',
  showPercentage = true
}) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className={`w-full space-y-2 ${className}`}>
      {label && (
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium leading-none">{label}</span>
          {showPercentage && (
            <span className="text-sm font-medium text-muted-foreground">
              {clampedProgress.toFixed(1)}%
            </span>
          )}
        </div>
      )}
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full w-full flex-1 bg-primary transition-all duration-500 ease-out"
          style={{ 
            transform: `translateX(-${100 - clampedProgress}%)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>
    </div>
  );
};


================================================
FILE: src/components/StatusCard.tsx
================================================
import React from 'react';
import { CheckCircle, Clock, AlertCircle, Play } from 'lucide-react';

interface StatusCardProps {
  title: string;
  status: 'pending' | 'running' | 'completed' | 'error';
  message?: string;
  details?: Record<string, any>;
}

const statusConfig = {
  pending: {
    icon: Clock,
    color: 'text-muted-foreground',
    bgColor: 'bg-muted/50',
    dotColor: 'bg-muted-foreground'
  },
  running: {
    icon: Play,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50/10',
    dotColor: 'bg-blue-500'
  },
  completed: {
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-50/10',
    dotColor: 'bg-green-500'
  },
  error: {
    icon: AlertCircle,
    color: 'text-destructive',
    bgColor: 'bg-destructive/10',
    dotColor: 'bg-destructive'
  }
};

export const StatusCard: React.FC<StatusCardProps> = ({ title, status, message, details }) => {
  const config = statusConfig[status] || statusConfig.pending;
  const Icon = config?.icon || Clock;

  return (
    <div className="rounded-lg border bg-card p-4 transition-colors">
      <div className="flex items-start space-x-3">
        <div className={`rounded-md p-2 ${config.bgColor}`}>
          <Icon className={`h-4 w-4 ${config.color}`} />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center space-x-2">
            <h4 className="text-sm font-semibold">{title}</h4>
            <div className={`h-2 w-2 rounded-full ${config.dotColor}`} />
          </div>
          {message && (
            <p className="text-sm text-muted-foreground">{message}</p>
          )}
          {details && Object.keys(details).length > 0 && (
            <div className="space-y-1">
              {Object.entries(details).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground capitalize">
                    {key.replace(/_/g, ' ')}
                  </span>
                  <span className="font-mono font-medium">{String(value)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


================================================
FILE: src/components/TrainingForm.tsx
================================================
import React, { useState } from 'react';
import { Play, Settings } from 'lucide-react';
import type { FineTuneRequest, ModelInfo } from '../types/api';

interface TrainingFormProps {
  onStartTraining: (request: FineTuneRequest) => void;
  isLoading: boolean;
  selectedModel: string | null;
  selectedModelInfo?: ModelInfo | null;
}

export const TrainingForm: React.FC<TrainingFormProps> = ({ onStartTraining, isLoading, selectedModel, selectedModelInfo }) => {
  const [ftType, setFtType] = useState<string>('instruction');
  const [peftMethod, setPeftMethod] = useState<string>('qlora');
  const [alignment, setAlignment] = useState<string>('none');
  const [epochs, setEpochs] = useState(1);
  const [batchSize, setBatchSize] = useState(20);
  const [learningRate, setLearningRate] = useState(0.0001);
  const [gradientAccumulation, setGradientAccumulation] = useState(4);
  const [maxSeqLength, setMaxSeqLength] = useState(256);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedModel) {
      alert('Please select a model first!');
      return;
    }
    
    onStartTraining({
      base_model_dir: selectedModelInfo?.path || '/app/models/base',
      dataset_dir: '/app/data/prepared',
      output_dir: '/app/models/fine_tuned',
      ft_type: ftType,
      peft_method: peftMethod,
      alignment: alignment,
      epochs,
      batch_size: batchSize,
      learning_rate: learningRate,
      gradient_accumulation_steps: gradientAccumulation,
      max_seq_length: maxSeqLength,
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-center space-x-3">
          <div className="rounded-md bg-primary/10 p-2">
            <Settings className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">Fine-tuning Configuration</h3>
            <p className="text-sm text-muted-foreground">
              Configure training parameters for optimal results
            </p>
          </div>
        </div>
      </div>

      <div className="card-content">
        {selectedModel && (
          <div className="mb-6 rounded-md border border-green-200/20 bg-green-50/5 p-4">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <p className="text-sm font-medium text-green-400">
                Selected Model: {selectedModel}
              </p>
            </div>
          </div>
        )}

        {!selectedModel && (
          <div className="mb-6 rounded-md border border-yellow-200/20 bg-yellow-50/5 p-4">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <p className="text-sm font-medium text-yellow-400">
                Please select a model first before configuring fine-tuning
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Training Type
              </label>
              <div className="grid gap-3">
                {(['instruction', 'sft', 'unsupervised'] as const).map((option) => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      value={option}
                      checked={ftType === option}
                      onChange={(e) => setFtType(e.target.value)}
                      className="h-4 w-4 border border-primary text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        {option === 'sft' ? 'Supervised Fine-tuning' : `${option.charAt(0).toUpperCase() + option.slice(1)} Tuning`}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {option === 'instruction' ? 'Train on instruction-response pairs' : 
                         option === 'sft' ? 'Standard supervised fine-tuning' : 
                         'Train on unlabeled text data'}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">
                  PEFT Method
                </label>
                <select
                  value={peftMethod}
                  onChange={(e) => setPeftMethod(e.target.value)}
                  className="input"
                >
                  <option value="qlora">QLoRA - 4-bit quantized</option>
                  <option value="lora">LoRA - Standard precision</option>
                </select>
                <p className="text-xs text-muted-foreground">
                  Parameter-efficient fine-tuning method
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">
                  Alignment Method
                </label>
                <select
                  value={alignment}
                  onChange={(e) => setAlignment(e.target.value)}
                  className="input"
                >
                  <option value="none">None</option>
                  <option value="dpo">DPO - Direct Preference</option>
                  <option value="ipo">IPO - Identity Preference</option>
                  <option value="kto">KTO - Kahneman-Tversky</option>
                </select>
                <p className="text-xs text-muted-foreground">
                  Human preference alignment technique
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">
                  Epochs
                </label>
                <input
                  type="number"
                  value={epochs}
                  onChange={(e) => setEpochs(Number.parseInt(e.target.value))}
                  min="1"
                  max="20"
                  className="input"
                  placeholder="1"
                />
                <p className="text-xs text-muted-foreground">
                  Number of training passes through dataset
                </p>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">
                  Batch Size
                </label>
                <input
                  type="number"
                  value={batchSize}
                  onChange={(e) => setBatchSize(Number.parseInt(e.target.value))}
                  min="1"
                  max="32"
                  className="input"
                  placeholder="20"
                />
                <p className="text-xs text-muted-foreground">
                  Samples processed per training step
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">
                Learning Rate
              </label>
              <input
                type="number"
                value={learningRate}
                onChange={(e) => setLearningRate(Number.parseFloat(e.target.value))}
                min="0.00001"
                max="0.01"
                step="0.00001"
                className="input"
                placeholder="0.0001"
              />
              <p className="text-xs text-muted-foreground">
                Controls the step size during optimization (0.00001 - 0.01)
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">
                  Gradient Accumulation Steps
                </label>
                <input
                  type="number"
                  value={gradientAccumulation}
                  onChange={(e) => setGradientAccumulation(Number.parseInt(e.target.value))}
                  min="1"
                  max="32"
                  className="input"
                  placeholder="4"
                />
                <p className="text-xs text-muted-foreground">
                  Accumulate gradients for effective larger batch size
                </p>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">
                  Max Sequence Length
                </label>
                <input
                  type="number"
                  value={maxSeqLength}
                  onChange={(e) => setMaxSeqLength(Number.parseInt(e.target.value))}
                  min="128"
                  max="4096"
                  step="128"
                  className="input"
                  placeholder="256"
                />
                <p className="text-xs text-muted-foreground">
                  Maximum input token length (128 - 4096)
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || !selectedModel}
            className="btn-primary w-full"
          >
            <Play className="mr-2 h-4 w-4" />
            {isLoading ? 'Starting Training...' : 'Start Fine-tuning'}
          </button>
        </form>
      </div>
    </div>
  );
};


================================================
FILE: src/services/api.ts
================================================
import axios from 'axios';
import type {
  SelectModelRequest,
  PrepareDataRequest,
  FineTuneRequest,
  ApiResponse,
  TrainingStatus,
  HealthResponse,
  AvailableModelsResponse,
  ActiveSessionsResponse
} from '../types/api';

const API_BASE = 'http://localhost:80';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 300000, // 5 minutes for long operations
  headers: {
    'Content-Type': 'application/json',
  },
});

// Health check
export const healthCheck = async (): Promise<HealthResponse> => {
  const response = await api.get('/health');
  return response.data;
};

// Get available models
export const getAvailableModels = async (): Promise<AvailableModelsResponse> => {
  const response = await api.get('/models/available');
  return response.data;
};

// Model selection
export const selectModel = async (request: SelectModelRequest): Promise<ApiResponse> => {
  const response = await api.post('/select-model', request);
  return response.data;
};

// Data preparation
export const prepareData = async (request: PrepareDataRequest): Promise<ApiResponse> => {
  const response = await api.post('/prepare-data', request);
  return response.data;
};

// Fine-tuning
export const startFineTuning = async (request: FineTuneRequest): Promise<ApiResponse> => {
  const response = await api.post('/fine-tune', request);
  return response.data;
};

// Training status
export const getTrainingStatus = async (taskId: string): Promise<TrainingStatus> => {
  const response = await api.get(`/fine-tune/status/${taskId}`);
  return response.data;
};

// Cancel training
export const cancelTraining = async (taskId: string): Promise<ApiResponse> => {
  const response = await api.delete(`/fine-tune/cancel/${taskId}`);
  return response.data;
};

// SSE Log streaming types
export interface LogEntry {
  timestamp: string;
  type: 'info' | 'training' | 'success' | 'error';
  message: string;
  step?: number | null;
  epoch?: number | null;
  loss?: number | null;
  learning_rate?: number | null;
  progress_percentage?: number;
}

export interface SSEEvent {
  type: 'connected' | 'log' | 'status' | 'heartbeat' | 'complete' | 'error';
  data: any;
}

// Stream training logs using Server-Sent Events
export const streamTrainingLogs = (
  taskId: string,
  onLog: (log: LogEntry) => void,
  onStatus: (status: TrainingStatus) => void,
  onComplete: () => void,
  onError: (error: string) => void,
  onConnect: () => void
): { close: () => void } => {
  const eventSource = new EventSource(`${API_BASE}/fine-tune/logs/${taskId}`);
  
  // Handle different event types
  eventSource.addEventListener('connected', (event) => {
    console.log('SSE Connected:', event.data);
    onConnect();
  });
  
  eventSource.addEventListener('log', (event) => {
    try {
      const logEntry: LogEntry = JSON.parse(event.data);
      onLog(logEntry);
    } catch (error) {
      console.error('Error parsing log entry:', error);
    }
  });
  
  // Handle metrics events (training progress with structured data)
  eventSource.addEventListener('metrics', (event) => {
    try {
      const logEntry: LogEntry = JSON.parse(event.data);
      onLog(logEntry);
      
      // If there's status information in the metrics, update status too
      if (logEntry.step || logEntry.epoch || logEntry.loss) {
        const statusUpdate: Partial<TrainingStatus> = {
          current_step: logEntry.step ?? undefined,
          current_epoch: logEntry.epoch ?? undefined,
          loss: logEntry.loss ?? undefined,
          learning_rate: logEntry.learning_rate ?? undefined,
          progress_percentage: logEntry.progress_percentage ?? undefined
        };
        onStatus(statusUpdate as TrainingStatus);
      }
    } catch (error) {
      console.error('Error parsing metrics entry:', error);
    }
  });
  
  // Handle warning events
  eventSource.addEventListener('warning', (event) => {
    try {
      const logEntry: LogEntry = JSON.parse(event.data);
      onLog(logEntry);
    } catch (error) {
      console.error('Error parsing warning entry:', error);
    }
  });
  
  eventSource.addEventListener('status', (event) => {
    try {
      const status: TrainingStatus = JSON.parse(event.data);
      onStatus(status);
    } catch (error) {
      console.error('Error parsing status:', error);
    }
  });
  
  eventSource.addEventListener('heartbeat', () => {
    console.log('SSE Heartbeat received');
  });
  
  eventSource.addEventListener('complete', (event) => {
    console.log('Training completed:', event.data);
    onComplete();
    eventSource.close();
  });
  
  eventSource.addEventListener('error', (event) => {
    try {
      const messageEvent = event as MessageEvent;
      if (messageEvent.data) {
        const errorData = JSON.parse(messageEvent.data);
        onError(errorData.error || 'Unknown SSE error');
      } else {
        onError('SSE connection error');
      }
    } catch (error) {
      onError('SSE connection error');
    }
    eventSource.close();
  });
  
  // Handle general EventSource errors
  eventSource.onerror = (event) => {
    console.error('SSE Connection error:', event);
    if (eventSource.readyState === EventSource.CLOSED) {
      onError('Connection closed');
    } else {
      onError('Connection error');
    }
  };
  
  // Return close function for cleanup
  return {
    close: () => {
      eventSource.close();
    }
  };
};

// Get active training sessions
export const getActiveTrainingSessions = async (): Promise<ActiveSessionsResponse> => {
  const response = await api.get('/fine-tune/active');
  return response.data;
};

// API info
export const getApiInfo = async () => {
  const response = await api.get('/');
  return response.data;
};

export default api;


================================================
FILE: src/types/api.ts
================================================
export interface SelectModelRequest {
  model_id: string;
  output_dir: string;
  quantization?: string;
}

export interface PrepareDataRequest {
  input_file: string;
  output_dir?: string;
  task: 'unsupervised' | 'supervised' | 'instruction';
  augment?: boolean;
  balance?: boolean;
  test_size?: number;
  max_length?: number;
}

export interface FineTuneRequest {
  base_model_dir: string;
  dataset_dir: string;
  output_dir?: string;
  ft_type: string;
  peft_method: string;
  alignment: string;
  epochs: number;
  batch_size: number;
  learning_rate: number;
  gradient_accumulation_steps: number;
  max_seq_length: number;
  reasoning_effort?: string;
}

export interface ApiResponse {
  status: 'success' | 'error' | 'started' | 'running' | 'completed' | 'cancellation_requested';
  message: string;
  model_path?: string;
  train_path?: string;
  val_path?: string;
  task_id?: string;
  eval_results?: Record<string, any>;
  optimization_info?: Record<string, any>;
  optimization_summary?: Record<string, any>;
}

export interface TrainingStatus {
  task_id: string;
  status: 'running' | 'completed' | 'error' | 'cancelling' | 'cancelled' | 'started';
  message?: string;
  progress: string;
  current_epoch?: number;
  total_epochs?: number;
  current_step?: number;
  total_steps?: number;
  loss?: number;
  eval_loss?: number;
  learning_rate?: number;
  progress_percentage?: number;
  started_at?: string;
  updated_at?: string;
  estimated_completion?: string;
  estimated_remaining_minutes?: number;
  logs?: string[];
  model_path?: string;
  eval_results?: Record<string, any>;
}

export interface ActiveSession {
  task_id: string;
  status: string;
  started_at: string;
  request_data: any;
  last_activity: string;
  current_status?: TrainingStatus;
}

export interface ActiveSessionsResponse {
  status: string;
  active_sessions: Record<string, ActiveSession>;
  total_active: number;
}

export interface HealthResponse {
  status: string;
  service: string;
}

export interface ModelInfo {
  model_id: string;
  local_name: string;
  path: string;
  status: 'available' | 'downloading' | 'error';
  size_mb: number;
  files: string[];
  has_tokenizer: boolean;
  architecture?: string;
  model_type?: string;
}

export interface AvailableModelsResponse {
  status: 'success' | 'error';
  models: ModelInfo[];
  models_directory: string;
  total_models: number;
  message?: string;
}
