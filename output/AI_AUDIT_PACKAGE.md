# AI AUDIT PACKAGE

# PROJECT

/home/prince-mittal/eduing-landing

---

Framework

Next.js

Language

TypeScript

Files

79

Folders

32



---

# HIGH PRIORITY SOURCE CODE



==================================================

FILE

package.json

IMPORTANCE

100

```
{
  "name": "eduing-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^11.18.2",
    "next": "14.2.35",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.35",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```



==================================================

FILE

README.md

IMPORTANCE

99

```
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```



==================================================

FILE

app/layout.tsx

IMPORTANCE

98

```
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EDUING.in — Unified University Admissions Platform",
  description: "Discover, apply, and get admitted to universities across India with one profile. Zero repeated forms. 500+ universities, 50K+ students.",
  openGraph: {
    title: "EDUING.in — Unified University Admissions Platform",
    description: "One profile. Hundreds of universities. Zero repeated forms. EDUING.in connects students with the right programs across India.",
    type: "website",
    url: "https://eduing.in",
    siteName: "EDUING.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDUING.in — Unified University Admissions Platform",
    description: "One profile. Hundreds of universities. Zero repeated forms.",
  },
  icons: {
    icon: '/bandwlogo.PNG',
    apple: '/bandwlogo.PNG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, background: '#06060A' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

```



==================================================

FILE

next.config.mjs

IMPORTANCE

95

```
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```



==================================================

FILE

tailwind.config.ts

IMPORTANCE

95

```
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#08080A",
        surface: "#111114",
        "surface-2": "#18181C",
        "surface-alt": "#0C0C10",
        "surface-feature": "#13131A",
        border: "rgba(255,255,255,0.08)",
        "border-hover": "rgba(255,255,255,0.15)",
        "border-subtle": "rgba(255,255,255,0.06)",
        "text-primary": "#FAFAFA",
        "text-secondary": "rgba(255,255,255,0.5)",
        "text-muted": "rgba(255,255,255,0.25)",
        "text-body": "rgba(255,255,255,0.55)",
        accent: "#4F46E5",
        "accent-light": "#6366F1",
        "accent-lighter": "#818CF8",
        "accent-glow": "rgba(79,70,229,0.15)",
        gold: "#F59E0B",
        success: "#22C55E",
      },
      borderRadius: {
        card: "16px",
        btn: "8px",
        tag: "6px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(48px, 7vw, 80px)",
          { lineHeight: "1.0", fontWeight: "800", letterSpacing: "-0.04em" },
        ],
        "section-title": [
          "48px",
          { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.03em" },
        ],
        "sub-heading": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        body: [
          "16px",
          { lineHeight: "1.7", fontWeight: "400" },
        ],
        "label": [
          "13px",
          { fontWeight: "500", letterSpacing: "0.05em" },
        ],
      },
      maxWidth: {
        container: "1100px",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

```



==================================================

FILE

package-lock.json

IMPORTANCE

94

```
{
  "name": "eduing-landing",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "eduing-landing",
      "version": "0.1.0",
      "dependencies": {
        "framer-motion": "^11.18.2",
        "next": "14.2.35",
        "react": "^18",
        "react-dom": "^18"
      },
      "devDependencies": {
        "@types/node": "^20",
        "@types/react": "^18",
        "@types/react-dom": "^18",
        "eslint": "^8",
        "eslint-config-next": "14.2.35",
        "postcss": "^8",
        "tailwindcss": "^3.4.1",
        "typescript": "^5"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.10.0.tgz",
      "integrity": "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.1",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.10.0.tgz",
      "integrity": "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.1.tgz",
      "integrity": "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
      "integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.6.0",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.57.1.tgz",
      "integrity": "sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.13.0.tgz",
      "integrity": "sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==",
      "deprecated": "Use @eslint/config-array instead",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanwhocodes/object-schema": "^2.0.3",
        "debug": "^4.3.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
      "integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
      "deprecated": "Use @eslint/object-schema instead",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/strip-ansi": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.2.0.tgz",
      "integrity": "sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.2.2"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "0.2.12",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-0.2.12.tgz",
      "integrity": "sha512-ZVWUcfwY4E/yPitQJl481FjFo3K22D6qF0DuFH6Y/nbnE11GY5uguDxZMGXPQ8WQ0128MXQD7TnfHyK4oWoIJQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.4.3",
        "@emnapi/runtime": "^1.4.3",
        "@tybys/wasm-util": "^0.10.0"
      }
    },
    "node_modules/@next/env": {
      "version": "14.2.35",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-14.2.35.tgz",
      "integrity": "sha512-DuhvCtj4t9Gwrx80dmz2F4t/zKQ4ktN8WrMwOuVzkJfBilwAwGr6v16M5eI8yCuZ63H9TTuEU09Iu2HqkzFPVQ==",
      "license": "MIT"
    },
    "node_modules/@next/eslint-plugin-next": {
      "version": "14.2.35",
      "resolved": "https://registry.npmjs.org/@next/eslint-plugin-next/-/eslint-plugin-next-14.2.35.tgz",
      "integrity": "sha512-Jw9A3ICz2183qSsqwi7fgq4SBPiNfmOLmTPXKvlnzstUwyvBrtySiY+8RXJweNAs9KThb1+bYhZh9XWcNOr2zQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "glob": "10.3.10"
      }
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-14.2.33.tgz",
      "integrity": "sha512-HqYnb6pxlsshoSTubdXKu15g3iivcbsMXg4bYpjL2iS/V6aQot+iyF4BUc2qA/J/n55YtvE4PHMKWBKGCF/+wA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-14.2.33.tgz",
      "integrity": "sha512-8HGBeAE5rX3jzKvF593XTTFg3gxeU4f+UWnswa6JPhzaR6+zblO5+fjltJWIZc4aUalqTclvN2QtTC37LxvZAA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-14.2.33.tgz",
      "integrity": "sha512-JXMBka6lNNmqbkvcTtaX8Gu5by9547bukHQvPoLe9VRBx1gHwzf5tdt4AaezW85HAB3pikcvyqBToRTDA4DeLw==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-14.2.33.tgz",
      "integrity": "sha512-Bm+QulsAItD/x6Ih8wGIMfRJy4G73tu1HJsrccPW6AfqdZd0Sfm5Imhgkgq2+kly065rYMnCOxTBvmvFY1BKfg==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-14.2.33.tgz",
      "integrity": "sha512-FnFn+ZBgsVMbGDsTqo8zsnRzydvsGV8vfiWwUo1LD8FTmPTdV+otGSWKc4LJec0oSexFnCYVO4hX8P8qQKaSlg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-14.2.33.tgz",
      "integrity": "sha512-345tsIWMzoXaQndUTDv1qypDRiebFxGYx9pYkhwY4hBRaOLt8UGfiWKr9FSSHs25dFIf8ZqIFaPdy5MljdoawA==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-14.2.33.tgz",
      "integrity": "sha512-nscpt0G6UCTkrT2ppnJnFsYbPDQwmum4GNXYTeoTIdsmMydSKFz9Iny2jpaRupTb+Wl298+Rh82WKzt9LCcqSQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-ia32-msvc": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-ia32-msvc/-/swc-win32-ia32-msvc-14.2.33.tgz",
      "integrity": "sha512-pc9LpGNKhJ0dXQhZ5QMmYxtARwwmWLpeocFmVG5Z0DzWq5Uf0izcI8tLc+qOpqxO1PWqZ5A7J1blrUIKrIFc7Q==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-14.2.33.tgz",
      "integrity": "sha512-nOjfZMy8B94MdisuzZo9/57xuFVLHJaDj5e/xrduJp9CV2/HrfxTRH2fbyLe+K9QT41WBLUd4iXX3R7jBp0EUg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nolyfill/is-core-module": {
      "version": "1.0.39",
      "resolved": "https://registry.npmjs.org/@nolyfill/is-core-module/-/is-core-module-1.0.39.tgz",
      "integrity": "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.4.0"
      }
    },
    "node_modules/@pkgjs/parseargs": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@rtsao/scc": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
      "integrity": "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rushstack/eslint-patch": {
      "version": "1.16.1",
      "resolved": "https://registry.npmjs.org/@rushstack/eslint-patch/-/eslint-patch-1.16.1.tgz",
      "integrity": "sha512-TvZbIpeKqGQQ7X0zSCvPH9riMSFQFSggnfBjFZ1mEoILW+UuXCKwOoPcgjMwiUtRqFZ8jWhPJc4um14vC6I4ag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@swc/counter": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@swc/counter/-/counter-0.1.3.tgz",
      "integrity": "sha512-e2BR4lsJkkRlKZ/qCHPw9ZaSxc0MVUd7gtbtaB7aMvHeJVYe8sOB8DBZkP2DtISHGSku9sCK6T6cnY0CtXrOCQ==",
      "license": "Apache-2.0"
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.5.tgz",
      "integrity": "sha512-KGYxvIOXcceOAbEk4bi/dVLEK9z8sZ0uBB3Il5b1rhfClSpcX0yfRO0KmTkqR2cnQDymwLB+25ZyMzICg/cm/A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/counter": "^0.1.3",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.1",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.1.tgz",
      "integrity": "sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "20.19.39",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.39.tgz",
      "integrity": "sha512-orrrD74MBUyK8jOAD/r0+lfa1I2MO6I+vAkmAWzMYbCcgrN4lCrmK52gRFQq/JRxfYPfonkr4b0jcY7Olqdqbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/prop-types": {
      "version": "15.7.15",
      "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.15.tgz",
      "integrity": "sha512-F6bEyamV9jKGAFBEmlQnesRPGOQqS2+Uwi0Em15xenOxHaf2hv6L8YCVn3rPdPJOiJfPiCnLIRyvwVaqMY3MIw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "18.3.28",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-18.3.28.tgz",
      "integrity": "sha512-z9VXpC7MWrhfWipitjNdgCauoMLRdIILQsAEV+ZesIzBq/oUlxk0m3ApZuMFCXdnS4U7KrI+l3WRUEGQ8K1QKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/prop-types": "*",
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "18.3.7",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.3.7.tgz",
      "integrity": "sha512-MEe3UeoENYVFXzoXEWsvcpg6ZvlrFNlOQ7EOsvhI3CfAXwzPfO8Qwuxd40nepsYKqyyVQnTdEfv68q91yLcKrQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^18.0.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.59.0.tgz",
      "integrity": "sha512-HyAZtpdkgZwpq8Sz3FSUvCR4c+ScbuWa9AksK2Jweub7w4M3yTz4O11AqVJzLYjy/B9ZWPyc81I+mOdJU/bDQw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.12.2",
        "@typescript-eslint/scope-manager": "8.59.0",
        "@typescript-eslint/type-utils": "8.59.0",
        "@typescript-eslint/utils": "8.59.0",
        "@typescript-eslint/visitor-keys": "8.59.0",
        "ignore": "^7.0.5",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.59.0",
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.5.tgz",
      "integrity": "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.59.0.tgz",
      "integrity": "sha512-TI1XGwKbDpo9tRW8UDIXCOeLk55qe9ZFGs8MTKU6/M08HWTw52DD/IYhfQtOEhEdPhLMT26Ka/x7p70nd3dzDg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.59.0",
        "@typescript-eslint/types": "8.59.0",
        "@typescript-eslint/typescript-estree": "8.59.0",
        "@typescript-eslint/visitor-keys": "8.59.0",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.59.0.tgz",
      "integrity": "sha512-Lw5ITrR5s5TbC19YSvlr63ZfLaJoU6vtKTHyB0GQOpX0W7d5/Ir6vUahWi/8Sps/nOukZQ0IB3SmlxZnjaKVnw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.59.0",
        "@typescript-eslint/types": "^8.59.0",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.59.0.tgz",
      "integrity": "sha512-UzR16Ut8IpA3Mc4DbgAShlPPkVm8xXMWafXxB0BocaVRHs8ZGakAxGRskF7FId3sdk9lgGD73GSFaWmWFDE4dg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.59.0",
        "@typescript-eslint/visitor-keys": "8.59.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.59.0.tgz",
      "integrity": "sha512-91Sbl3s4Kb3SybliIY6muFBmHVv+pYXfybC4Oolp3dvk8BvIE3wOPc+403CWIT7mJNkfQRGtdqghzs2+Z91Tqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.59.0.tgz",
      "integrity": "sha512-3TRiZaQSltGqGeNrJzzr1+8YcEobKH9rHnqIp/1psfKFmhRQDNMGP5hBufanYTGznwShzVLs3Mz+gDN7HkWfXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.59.0",
        "@typescript-eslint/typescript-estree": "8.59.0",
        "@typescript-eslint/utils": "8.59.0",
        "debug": "^4.4.3",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.59.0.tgz",
      "integrity": "sha512-nLzdsT1gdOgFxxxwrlNVUBzSNBEEHJ86bblmk4QAS6stfig7rcJzWKqCyxFy3YRRHXDWEkb2NralA1nOYkkm/A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.59.0.tgz",
      "integrity": "sha512-O9Re9P1BmBLFJyikRbQpLku/QA3/AueZNO9WePLBwQrvkixTmDe8u76B6CYUAITRl/rHawggEqUGn5QIkVRLMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.59.0",
        "@typescript-eslint/tsconfig-utils": "8.59.0",
        "@typescript-eslint/types": "8.59.0",
        "@typescript-eslint/visitor-keys": "8.59.0",
        "debug": "^4.4.3",
        "minimatch": "^10.2.2",
        "semver": "^7.7.3",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.5.tgz",
      "integrity": "sha512-VZznLgtwhn+Mact9tfiwx64fA9erHH/MCXEUfB/0bX/6Fz6ny5EGTXYltMocqg4xFAQZtnO3DHWWXi8RiuN7cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.59.0.tgz",
      "integrity": "sha512-I1R/K7V07XsMJ12Oaxg/O9GfrysGTmCRhvZJBv0RE0NcULMzjqVpR5kRRQjHsz3J/bElU7HwCO7zkqL+MSUz+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.9.1",
        "@typescript-eslint/scope-manager": "8.59.0",
        "@typescript-eslint/types": "8.59.0",
        "@typescript-eslint/typescript-estree": "8.59.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.59.0.tgz",
      "integrity": "sha512-/uejZt4dSere1bx12WLlPfv8GktzcaDtuJ7s42/HEZ5zGj9oxRaD4bj7qwSunXkf+pbAhFt2zjpHYUiT5lHf0Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.59.0",
        "eslint-visitor-keys": "^5.0.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-5.0.1.tgz",
      "integrity": "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz",
      "integrity": "sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/@unrs/resolver-binding-android-arm-eabi": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm-eabi/-/resolver-binding-android-arm-eabi-1.11.1.tgz",
      "integrity": "sha512-ppLRUgHVaGRWUx0R0Ut06Mjo9gBaBkg3v/8AxusGLhsIotbBLuRk51rAzqLC8gq6NyyAojEXglNjzf6R948DNw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-android-arm64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm64/-/resolver-binding-android-arm64-1.11.1.tgz",
      "integrity": "sha512-lCxkVtb4wp1v+EoN+HjIG9cIIzPkX5OtM03pQYkG+U5O/wL53LC4QbIeazgiKqluGeVEeBlZahHalCaBvU1a2g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-arm64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-arm64/-/resolver-binding-darwin-arm64-1.11.1.tgz",
      "integrity": "sha512-gPVA1UjRu1Y/IsB/dQEsp2V1pm44Of6+LWvbLc9SDk1c2KhhDRDBUkQCYVWe6f26uJb3fOK8saWMgtX8IrMk3g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-x64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-x64/-/resolver-binding-darwin-x64-1.11.1.tgz",
      "integrity": "sha512-cFzP7rWKd3lZaCsDze07QX1SC24lO8mPty9vdP+YVa3MGdVgPmFc59317b2ioXtgCMKGiCLxJ4HQs62oz6GfRQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-freebsd-x64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-freebsd-x64/-/resolver-binding-freebsd-x64-1.11.1.tgz",
      "integrity": "sha512-fqtGgak3zX4DCB6PFpsH5+Kmt/8CIi4Bry4rb1ho6Av2QHTREM+47y282Uqiu3ZRF5IQioJQ5qWRV6jduA+iGw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-gnueabihf": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-gnueabihf/-/resolver-binding-linux-arm-gnueabihf-1.11.1.tgz",
      "integrity": "sha512-u92mvlcYtp9MRKmP+ZvMmtPN34+/3lMHlyMj7wXJDeXxuM0Vgzz0+PPJNsro1m3IZPYChIkn944wW8TYgGKFHw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-musleabihf": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-musleabihf/-/resolver-binding-linux-arm-musleabihf-1.11.1.tgz",
      "integrity": "sha512-cINaoY2z7LVCrfHkIcmvj7osTOtm6VVT16b5oQdS4beibX2SYBwgYLmqhBjA1t51CarSaBuX5YNsWLjsqfW5Cw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-gnu/-/resolver-binding-linux-arm64-gnu-1.11.1.tgz",
      "integrity": "sha512-34gw7PjDGB9JgePJEmhEqBhWvCiiWCuXsL9hYphDF7crW7UgI05gyBAi6MF58uGcMOiOqSJ2ybEeCvHcq0BCmQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-musl/-/resolver-binding-linux-arm64-musl-1.11.1.tgz",
      "integrity": "sha512-RyMIx6Uf53hhOtJDIamSbTskA99sPHS96wxVE/bJtePJJtpdKGXO1wY90oRdXuYOGOTuqjT8ACccMc4K6QmT3w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-ppc64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-ppc64-gnu/-/resolver-binding-linux-ppc64-gnu-1.11.1.tgz",
      "integrity": "sha512-D8Vae74A4/a+mZH0FbOkFJL9DSK2R6TFPC9M+jCWYia/q2einCubX10pecpDiTmkJVUH+y8K3BZClycD8nCShA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-gnu/-/resolver-binding-linux-riscv64-gnu-1.11.1.tgz",
      "integrity": "sha512-frxL4OrzOWVVsOc96+V3aqTIQl1O2TjgExV4EKgRY09AJ9leZpEg8Ak9phadbuX0BA4k8U5qtvMSQQGGmaJqcQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-musl/-/resolver-binding-linux-riscv64-musl-1.11.1.tgz",
      "integrity": "sha512-mJ5vuDaIZ+l/acv01sHoXfpnyrNKOk/3aDoEdLO/Xtn9HuZlDD6jKxHlkN8ZhWyLJsRBxfv9GYM2utQ1SChKew==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-s390x-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-s390x-gnu/-/resolver-binding-linux-s390x-gnu-1.11.1.tgz",
      "integrity": "sha512-kELo8ebBVtb9sA7rMe1Cph4QHreByhaZ2QEADd9NzIQsYNQpt9UkM9iqr2lhGr5afh885d/cB5QeTXSbZHTYPg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-gnu/-/resolver-binding-linux-x64-gnu-1.11.1.tgz",
      "integrity": "sha512-C3ZAHugKgovV5YvAMsxhq0gtXuwESUKc5MhEtjBpLoHPLYM+iuwSj3lflFwK3DPm68660rZ7G8BMcwSro7hD5w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-musl/-/resolver-binding-linux-x64-musl-1.11.1.tgz",
      "integrity": "sha512-rV0YSoyhK2nZ4vEswT/QwqzqQXw5I6CjoaYMOX0TqBlWhojUf8P94mvI7nuJTeaCkkds3QE4+zS8Ko+GdXuZtA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-wasm32-wasi/-/resolver-binding-wasm32-wasi-1.11.1.tgz",
      "integrity": "sha512-5u4RkfxJm+Ng7IWgkzi3qrFOvLvQYnPBmjmZQ8+szTK/b31fQCnleNl1GgEt7nIsZRIf5PLhPwT0WM+q45x/UQ==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@napi-rs/wasm-runtime": "^0.2.11"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@unrs/resolver-binding-win32-arm64-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-arm64-msvc/-/resolver-binding-win32-arm64-msvc-1.11.1.tgz",
      "integrity": "sha512-nRcz5Il4ln0kMhfL8S3hLkxI85BXs3o8EYoattsJNdsX4YUU89iOkVn7g0VHSRxFuVMdM4Q1jEpIId1Ihim/Uw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-ia32-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-ia32-msvc/-/resolver-binding-win32-ia32-msvc-1.11.1.tgz",
      "integrity": "sha512-DCEI6t5i1NmAZp6pFonpD5m7i6aFrpofcp4LA2i8IIq60Jyo28hamKBxNrZcyOwVOZkgsRp9O2sXWBWP8MnvIQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-x64-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-x64-msvc/-/resolver-binding-win32-x64-msvc-1.11.1.tgz",
      "integrity": "sha512-lrW200hZdbfRtztbygyaq/6jP6AKE8qQN2KvPcJ+x7wiD038YtnYtZ82IMNJ69GJibV7bwL3y9FgK+5w/pYt6g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/acorn": {
      "version": "8.16.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.16.0.tgz",
      "integrity": "sha512-UVJyE9MttOsBQIDKw1skb9nAwQuR5wuGD3+82K6JgJlm/Y+KI92oNsMNGZCYdDsVtRHSak0pcV5Dno5+4jh9sw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.15.0.tgz",
      "integrity": "sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.2.tgz",
      "integrity": "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-includes": {
      "version": "3.1.9",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.9.tgz",
      "integrity": "sha512-FmeCCAenzH0KH381SPT5FZmiA/TmpndpcaShhfgEN9eCVjnFBqq3l1xrI42y8+PPLI6hypzou4GXw00WHmPBLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.0",
        "es-object-atoms": "^1.1.1",
        "get-intrinsic": "^1.3.0",
        "is-string": "^1.1.1",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
      "integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlastindex": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/array.prototype.findlastindex/-/array.prototype.findlastindex-1.2.6.tgz",
      "integrity": "sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-shim-unscopables": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.3.3.tgz",
      "integrity": "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.3.3.tgz",
      "integrity": "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
      "integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.4.tgz",
      "integrity": "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ast-types-flow": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.8.tgz",
      "integrity": "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-function/-/async-function-1.0.0.tgz",
      "integrity": "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axe-core": {
      "version": "4.11.3",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.11.3.tgz",
      "integrity": "sha512-zBQouZixDTbo3jMGqHKyePxYxr1e5W8UdTmBQ7sNtaA9M2bE32daxxPLS/jojhKOHxQ7LWwPjfiwf/fhaJWzlg==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.14",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.14.tgz",
      "integrity": "sha512-MWPGfDxnyzKU7rNOW9SP/c50vi3xrmrua/+6hfPbCS2ABNWfx24vPidzvC7krjU/RTo235sV776ymlsMtGKj8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/busboy": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz",
      "integrity": "sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==",
      "dependencies": {
        "streamsearch": "^1.1.0"
      },
      "engines": {
        "node": ">=10.16.0"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.9.tgz",
      "integrity": "sha512-a/hy+pNsFUTR+Iz8TCJvXudKVLAnz/DyeSUo10I5yvFDQJBFU2s9uqQpoSrJlroHUKoKqzg+epxyP9lqFdzfBQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "get-intrinsic": "^1.3.0",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001790",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001790.tgz",
      "integrity": "sha512-bOoxfJPyYo+ds6W0YfptaCWbFnJYjh2Y1Eow5lRv+vI2u8ganPZqNm1JwNh0t2ELQCqIWg4B3dWEusgAmsoyOw==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/damerau-levenshtein": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
      "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-buffer/-/data-view-buffer-1.0.2.tgz",
      "integrity": "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-byte-length/-/data-view-byte-length-1.0.2.tgz",
      "integrity": "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/data-view-byte-offset/-/data-view-byte-offset-1.0.1.tgz",
      "integrity": "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/es-abstract": {
      "version": "1.24.2",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.24.2.tgz",
      "integrity": "sha512-2FpH9Q5i2RRwyEP1AylXe6nYLR5OhaJTZwmlcP0dL/+JCbgg7yyEo/sEK6HeGZRf3dFpWwThaRHVApXSkW3xeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.3.2.tgz",
      "integrity": "sha512-HVLACW1TppGYjJ8H6/jqH/pqOtKRw6wMlrB23xfExmFWxFquAIWCmwoLsOyN96K4a5KbmOf5At9ZUO3GZbetAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.1.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "iterator.prototype": "^1.1.5",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/es-shim-unscopables/-/es-shim-unscopables-1.1.0.tgz",
      "integrity": "sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.3.0.tgz",
      "integrity": "sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7",
        "is-date-object": "^1.0.5",
        "is-symbol": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.57.1.tgz",
      "integrity": "sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==",
      "deprecated": "This version is no longer supported. Please see https://eslint.org/version-support for other options.",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.6.1",
        "@eslint/eslintrc": "^2.1.4",
        "@eslint/js": "8.57.1",
        "@humanwhocodes/config-array": "^0.13.0",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "@ungap/structured-clone": "^1.2.0",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-config-next": {
      "version": "14.2.35",
      "resolved": "https://registry.npmjs.org/eslint-config-next/-/eslint-config-next-14.2.35.tgz",
      "integrity": "sha512-BpLsv01UisH193WyT/1lpHqq5iJ/Orfz9h/NOOlAmTUq4GY349PextQ62K4XpnaM9supeiEn3TaOTeQO07gURg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@next/eslint-plugin-next": "14.2.35",
        "@rushstack/eslint-patch": "^1.3.3",
        "@typescript-eslint/eslint-plugin": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "@typescript-eslint/parser": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-import-resolver-typescript": "^3.5.2",
        "eslint-plugin-import": "^2.28.1",
        "eslint-plugin-jsx-a11y": "^6.7.1",
        "eslint-plugin-react": "^7.33.2",
        "eslint-plugin-react-hooks": "^4.5.0 || 5.0.0-canary-7118f5dd7-20230705"
      },
      "peerDependencies": {
        "eslint": "^7.23.0 || ^8.0.0",
        "typescript": ">=3.3.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.10",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.10.tgz",
      "integrity": "sha512-tRrKqFyCaKict5hOd244sL6EQFNycnMQnBe+j8uqGNXYzsImGbGUU4ibtoaBmv5FLwJwcFJNeg1GeVjQfbMrDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7",
        "is-core-module": "^2.16.1",
        "resolve": "^2.0.0-next.6"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-import-resolver-typescript": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-typescript/-/eslint-import-resolver-typescript-3.10.1.tgz",
      "integrity": "sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@nolyfill/is-core-module": "1.0.39",
        "debug": "^4.4.0",
        "get-tsconfig": "^4.10.0",
        "is-bun-module": "^2.0.0",
        "stable-hash": "^0.0.5",
        "tinyglobby": "^0.2.13",
        "unrs-resolver": "^1.6.2"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-import-resolver-typescript"
      },
      "peerDependencies": {
        "eslint": "*",
        "eslint-plugin-import": "*",
        "eslint-plugin-import-x": "*"
      },
      "peerDependenciesMeta": {
        "eslint-plugin-import": {
          "optional": true
        },
        "eslint-plugin-import-x": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils": {
      "version": "2.12.1",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.12.1.tgz",
      "integrity": "sha512-L8jSWTze7K2mTg0vos/RuLRS5soomksDPoJLXIslC7c8Wmut3bx7CPpJijDcBZtxQ5lrbUdM+s0OlNbz0DCDNw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.32.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.32.0.tgz",
      "integrity": "sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rtsao/scc": "^1.1.0",
        "array-includes": "^3.1.9",
        "array.prototype.findlastindex": "^1.2.6",
        "array.prototype.flat": "^1.3.3",
        "array.prototype.flatmap": "^1.3.3",
        "debug": "^3.2.7",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.9",
        "eslint-module-utils": "^2.12.1",
        "hasown": "^2.0.2",
        "is-core-module": "^2.16.1",
        "is-glob": "^4.0.3",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "object.groupby": "^1.0.3",
        "object.values": "^1.2.1",
        "semver": "^6.3.1",
        "string.prototype.trimend": "^1.0.9",
        "tsconfig-paths": "^3.15.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y": {
      "version": "6.10.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.2.tgz",
      "integrity": "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "aria-query": "^5.3.2",
        "array-includes": "^3.1.8",
        "array.prototype.flatmap": "^1.3.2",
        "ast-types-flow": "^0.0.8",
        "axe-core": "^4.10.0",
        "axobject-query": "^4.1.0",
        "damerau-levenshtein": "^1.0.8",
        "emoji-regex": "^9.2.2",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^3.3.5",
        "language-tags": "^1.0.9",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "safe-regex-test": "^1.0.3",
        "string.prototype.includes": "^2.0.1"
      },
      "engines": {
        "node": ">=4.0"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-react": {
      "version": "7.37.5",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.37.5.tgz",
      "integrity": "sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.3",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.2.1",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.9",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.1",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.12",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "5.0.0-canary-7118f5dd7-20230705",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-5.0.0-canary-7118f5dd7-20230705.tgz",
      "integrity": "sha512-AZYbMo/NW9chdL7vk6HQzQhT+PvTAEVqWk9ziruUoW2kAOcN5qNyelv70e0F1VNQAbvutOC9oc+xfWycI9FxDw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/eslint-scope": {
      "version": "7.2.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz",
      "integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "9.6.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",
      "integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.9.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
      "integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
      "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.3",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.4.2.tgz",
      "integrity": "sha512-PjDse7RzhcPkIJwy5t7KPWQSZ9cAbzQXcafsetQoD7sOJRQlGikNbx7yZp2OotDnJyrDcbyRq3Ttb18iYOqkxA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.5.tgz",
      "integrity": "sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz",
      "integrity": "sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.6",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/framer-motion": {
      "version": "11.18.2",
      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-11.18.2.tgz",
      "integrity": "sha512-5F5Och7wrvtLVElIpclDT0CBzMVg3dL22B64aZwHtsIY8RB4mXICLrkajK4G9R+ieSAGcgrLeae2SeUTg2pr6w==",
      "license": "MIT",
      "dependencies": {
        "motion-dom": "^11.18.1",
        "motion-utils": "^11.18.1",
        "tslib": "^2.4.0"
      },
      "peerDependencies": {
        "@emotion/is-prop-valid": "*",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/is-prop-valid": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.8.tgz",
      "integrity": "sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "functions-have-names": "^1.2.3",
        "hasown": "^2.0.2",
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/generator-function/-/generator-function-2.0.1.tgz",
      "integrity": "sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.1.0.tgz",
      "integrity": "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.14.0",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.14.0.tgz",
      "integrity": "sha512-yTb+8DXzDREzgvYmh6s9vHsSVCHeC0G3PI5bEXNBHtmshPnO+S5O7qgLEOn0I5QvMy6kpZN8K1NKGyilLb93wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/glob": {
      "version": "10.3.10",
      "resolved": "https://registry.npmjs.org/glob/-/glob-10.3.10.tgz",
      "integrity": "sha512-fa46+tv1Ak0UPK1TOy/pZrIybNNt4HCv7SDzwyfiOZkvZLEbjsZkJBPtDHVshZjbecAoAGSC20MjLDG/qr679g==",
      "deprecated": "Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^2.3.5",
        "minimatch": "^9.0.1",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0",
        "path-scurry": "^1.10.1"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/glob/node_modules/brace-expansion": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.1.0.tgz",
      "integrity": "sha512-TN1kCZAgdgweJhWWpgKYrQaMNHcDULHkWwQIspdtjV4Y5aurRdZpjAqn6yX3FPqTA9ngHCc4hJxMAMgGfve85w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/glob/node_modules/minimatch": {
      "version": "9.0.9",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.9.tgz",
      "integrity": "sha512-OBwBN9AL4dqmETlpS2zasx+vTeWclWzkblfZk7KTA5j3jeOONz/tRCnZomUyvNg83wL5Zv9Ss6HMJXAgL8R2Yg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.2"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/globals": {
      "version": "13.24.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
      "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.4.tgz",
      "integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "license": "ISC"
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.1.0.tgz",
      "integrity": "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.2.0.tgz",
      "integrity": "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.3.tgz",
      "integrity": "sha512-ej4AhfhfL2Q2zpMmLo7U1Uv9+PyhIZpgQLGT1F9miIGmiCJIoCgSmczFdrc97mWT4kVY72KA+WnnhJ5pghSvSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
      "integrity": "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
      "integrity": "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.1.1.tgz",
      "integrity": "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.1.0.tgz",
      "integrity": "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.2.2.tgz",
      "integrity": "sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bun-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-bun-module/-/is-bun-module-2.0.0.tgz",
      "integrity": "sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.7.1"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-data-view/-/is-data-view-1.0.2.tgz",
      "integrity": "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.1.0.tgz",
      "integrity": "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-finalizationregistry/-/is-finalizationregistry-1.1.1.tgz",
      "integrity": "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.1.2.tgz",
      "integrity": "sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
      "integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.3.tgz",
      "integrity": "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.1.1.tgz",
      "integrity": "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
      "integrity": "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-set/-/is-set-2.0.3.tgz",
      "integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.4.tgz",
      "integrity": "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.1.1.tgz",
      "integrity": "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.1.1.tgz",
      "integrity": "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.15.tgz",
      "integrity": "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
      "integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.1.1.tgz",
      "integrity": "sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-weakset/-/is-weakset-2.0.4.tgz",
      "integrity": "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/iterator.prototype/-/iterator.prototype-1.1.5.tgz",
      "integrity": "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "get-proto": "^1.0.0",
        "has-symbols": "^1.1.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/jackspeak": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-2.3.6.tgz",
      "integrity": "sha512-N3yCS/NegsOBokc8GAdM8UcmfsKiSS8cipheD/nivzr700H+nsMOxJjQnvwOcRYVuFkdH0wGUvW2WbXGmrZGbQ==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "@pkgjs/parseargs": "^0.11.0"
      }
    },
    "node_modules/jiti": {
      "version": "1.21.7",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.7.tgz",
      "integrity": "sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.2.tgz",
      "integrity": "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
      "integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/language-subtag-registry": {
      "version": "0.3.23",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.23.tgz",
      "integrity": "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/language-tags": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.9.tgz",
      "integrity": "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "language-subtag-registry": "^0.3.20"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lilconfig": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
      "integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antonk52"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.5.tgz",
      "integrity": "sha512-VgjWUsnnT6n+NUk6eZq77zeFdpW2LWDzP6zFGrCbHXiYNul5Dzqk2HHQ5uFH2DNW5Xbp8+jVzaeNt94ssEEl4w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.3",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.3.tgz",
      "integrity": "sha512-tEBHqDnIoM/1rXME1zgka9g6Q2lcoCkxHLuc7ODJ5BxbP5d4c2Z5cGgtXAku59200Cx7diuHTOYfSBD8n6mm8A==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/motion-dom": {
      "version": "11.18.1",
      "resolved": "https://registry.npmjs.org/motion-dom/-/motion-dom-11.18.1.tgz",
      "integrity": "sha512-g76KvA001z+atjfxczdRtw/RXOM3OMSdd1f4DL77qCTF/+avrRJiawSG4yDibEQ215sr9kpinSlX2pCTJ9zbhw==",
      "license": "MIT",
      "dependencies": {
        "motion-utils": "^11.18.1"
      }
    },
    "node_modules/motion-utils": {
      "version": "11.18.1",
      "resolved": "https://registry.npmjs.org/motion-utils/-/motion-utils-11.18.1.tgz",
      "integrity": "sha512-49Kt+HKjtbJKLtgO/LKj9Ld+6vw9BjH5d9sc40R/kVyH8GLAXgT42M2NnuPcJNuA3s9ZfZBUcwIgpmZWGEE+hA==",
      "license": "MIT"
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-postinstall": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/napi-postinstall/-/napi-postinstall-0.3.4.tgz",
      "integrity": "sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "napi-postinstall": "lib/cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/napi-postinstall"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/next": {
      "version": "14.2.35",
      "resolved": "https://registry.npmjs.org/next/-/next-14.2.35.tgz",
      "integrity": "sha512-KhYd2Hjt/O1/1aZVX3dCwGXM1QmOV4eNM2UTacK5gipDdPN/oHHK/4oVGy7X8GMfPMsUTUEmGlsy0EY1YGAkig==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "14.2.35",
        "@swc/helpers": "0.5.5",
        "busboy": "1.6.0",
        "caniuse-lite": "^1.0.30001579",
        "graceful-fs": "^4.2.11",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.1"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=18.17.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "14.2.33",
        "@next/swc-darwin-x64": "14.2.33",
        "@next/swc-linux-arm64-gnu": "14.2.33",
        "@next/swc-linux-arm64-musl": "14.2.33",
        "@next/swc-linux-x64-gnu": "14.2.33",
        "@next/swc-linux-x64-musl": "14.2.33",
        "@next/swc-win32-arm64-msvc": "14.2.33",
        "@next/swc-win32-ia32-msvc": "14.2.33",
        "@next/swc-win32-x64-msvc": "14.2.33"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.41.2",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/node-exports-info": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/node-exports-info/-/node-exports-info-1.6.0.tgz",
      "integrity": "sha512-pyFS63ptit/P5WqUkt+UUfe+4oevH+bFeIiPPdfb0pFeYEu/1ELnJu5l+5EcTKYL5M7zaAa7S8ddywgXypqKCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array.prototype.flatmap": "^1.3.3",
        "es-errors": "^1.3.0",
        "object.entries": "^1.1.9",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/node-exports-info/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.7.tgz",
      "integrity": "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.9.tgz",
      "integrity": "sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.8.tgz",
      "integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.groupby": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/object.groupby/-/object.groupby-1.0.3.tgz",
      "integrity": "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.2.1.tgz",
      "integrity": "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/own-keys/-/own-keys-1.0.1.tgz",
      "integrity": "sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-intrinsic": "^1.2.6",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^10.2.0",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
      },
      "engines": {
        "node": ">=16 || 14 >=14.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz",
      "integrity": "sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/possible-typed-array-names/-/possible-typed-array-names-1.1.0.tgz",
      "integrity": "sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.10",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.10.tgz",
      "integrity": "sha512-pMMHxBOZKFU6HgAZ4eyGnwXF/EvPGGqUr0MnZ5+99485wwW41kW91A4LOGxSHhgugZmSChL5AlElNdwlNgcnLQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-import": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.0"
      }
    },
    "node_modules/postcss-import/node_modules/resolve": {
      "version": "1.22.12",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.12.tgz",
      "integrity": "sha512-TyeJ1zif53BPfHootBGwPRYT1RUt6oGWsaQr8UyZW/eAm9bKoijtvruSDEmZHm92CwS9nj7/fWttqPCgzep8CA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.16.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/postcss-js": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.1.0.tgz",
      "integrity": "sha512-oIAOTqgIo7q2EOwbhb8UalYePMvYoIeRY2YKntdpFQXNosSu3vLrniGgmH9OKs/qAkfoj5oB3le/7mINW1LCfw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "camelcase-css": "^2.0.1"
      },
      "engines": {
        "node": "^12 || ^14 || >= 16"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/postcss-load-config": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-6.0.1.tgz",
      "integrity": "sha512-oPtTM4oerL+UXmx+93ytZVN82RrlY/wPUV8IeDxFrzIjXOLF1pN+EmKPLbubvKHT2HC20xXsCAH2Z+CKV6Oz/g==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "lilconfig": "^3.1.1"
      },
      "engines": {
        "node": ">= 18"
      },
      "peerDependencies": {
        "jiti": ">=1.21.0",
        "postcss": ">=8.0.9",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        },
        "postcss": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/postcss-nested": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "postcss-selector-parser": "^6.1.1"
      },
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.2.14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
      "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
      "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.23.2"
      },
      "peerDependencies": {
        "react": "^18.3.1"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/read-cache": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pify": "^2.3.0"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
      "integrity": "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.4.tgz",
      "integrity": "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve": {
      "version": "2.0.0-next.6",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.6.tgz",
      "integrity": "sha512-3JmVl5hMGtJ3kMmB3zi3DL25KfkCEyy3Tw7Gmw7z5w8M9WlwoPFnIvwChzu1+cF3iaK3sp18hhPz8ANeimdJfA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.16.1",
        "node-exports-info": "^1.6.0",
        "object-keys": "^1.1.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rimraf/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/safe-array-concat/-/safe-array-concat-1.1.4.tgz",
      "integrity": "sha512-wtZlHyOje6OZTGqAoaDKxFkgRtkF9CnHAVnCHKfuj200wAgL+bSJhdsCD2l0Qx/2ekEXjPWcyKkfGb5CPboslg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
      "integrity": "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.1.0.tgz",
      "integrity": "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.23.2",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
      "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      }
    },
    "node_modules/semver": {
      "version": "7.7.4",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.4.tgz",
      "integrity": "sha512-vFKC2IEtQnVhpT78h1Yp8wzwrf8CM+MzKMHGJZfBtzhZNycRFnXsHk6E5TxIkkMsgNS7mdX3AGB7x2QM2di4lA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/set-function-name/-/set-function-name-2.0.2.tgz",
      "integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/set-proto/-/set-proto-1.0.0.tgz",
      "integrity": "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stable-hash": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.5.tgz",
      "integrity": "sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/stop-iteration-iterator/-/stop-iteration-iterator-1.1.0.tgz",
      "integrity": "sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/streamsearch": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz",
      "integrity": "sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/string-width/node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/string-width/node_modules/strip-ansi": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.2.0.tgz",
      "integrity": "sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.2.2"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/string.prototype.includes": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
      "integrity": "sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.0.12",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.12.tgz",
      "integrity": "sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.3",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
      "integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.10.tgz",
      "integrity": "sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-object-atoms": "^1.0.0",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.9.tgz",
      "integrity": "sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
      "integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.1.tgz",
      "integrity": "sha512-pW7uC1l4mBZ8ugbiZrcIsiIvVx1UmTfw7UkC3Um2tmfUq9Bhk8IiyEIPl6F8agHgjzku6j0xQEZbfA5uSgSaCw==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/sucrase": {
      "version": "3.35.1",
      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.1.tgz",
      "integrity": "sha512-DhuTmvZWux4H1UOnWMB3sk0sbaCVOoQZjv8u1rDoTV0HTdGem9hkAZtl4JZy8P2z4Bg0nT+YMeOFyVr4zcG5Tw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.2",
        "commander": "^4.0.0",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "tinyglobby": "^0.2.11",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwindcss": {
      "version": "3.4.19",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.19.tgz",
      "integrity": "sha512-3ofp+LL8E+pK/JuPLPggVAIaEuhvIz4qNcf3nA1Xn2o/7fb7s/TYpHhwGDv1ZU3PkBluUVaF8PyCHcm48cKLWQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "arg": "^5.0.2",
        "chokidar": "^3.6.0",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.3.2",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "jiti": "^1.21.7",
        "lilconfig": "^3.1.3",
        "micromatch": "^4.0.8",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.1.1",
        "postcss": "^8.4.47",
        "postcss-import": "^15.1.0",
        "postcss-js": "^4.0.1",
        "postcss-load-config": "^4.0.2 || ^5.0 || ^6.0",
        "postcss-nested": "^6.2.0",
        "postcss-selector-parser": "^6.1.2",
        "resolve": "^1.22.8",
        "sucrase": "^3.35.0"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tailwindcss/node_modules/resolve": {
      "version": "1.22.12",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.12.tgz",
      "integrity": "sha512-TyeJ1zif53BPfHootBGwPRYT1RUt6oGWsaQr8UyZW/eAm9bKoijtvruSDEmZHm92CwS9nj7/fWttqPCgzep8CA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.16.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.16",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.16.tgz",
      "integrity": "sha512-pn99VhoACYR8nFHhxqix+uvsbXineAasWm5ojXoN8xEwK5Kd3/TrhNn1wByuD52UxWRLy8pu+kRMniEi6Eq9Zg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyglobby/node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/tinyglobby/node_modules/picomatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.4.tgz",
      "integrity": "sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.5.0.tgz",
      "integrity": "sha512-OJ/ibxhPlqrMM0UiNHJ/0CKQkoKF243/AEmplt3qpRgkW8VG7IfOS41h7V8TjITqdByHzrjcS/2si+y4lIh8NA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/tsconfig-paths": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.15.0.tgz",
      "integrity": "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
      "integrity": "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-byte-length/-/typed-array-byte-length-1.0.3.tgz",
      "integrity": "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/typed-array-byte-offset/-/typed-array-byte-offset-1.0.4.tgz",
      "integrity": "sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.9"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.7.tgz",
      "integrity": "sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "is-typed-array": "^1.1.13",
        "possible-typed-array-names": "^1.0.0",
        "reflect.getprototypeof": "^1.0.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.1.0.tgz",
      "integrity": "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unrs-resolver": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.11.1.tgz",
      "integrity": "sha512-bSjt9pjaEBnNiGgc9rUiHGKv5l4/TGzDmYw3RhnkJGtLhbnnA/5qJj7x3dNDCRx/PJxu774LlH8lCOlB4hEfKg==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "napi-postinstall": "^0.3.0"
      },
      "funding": {
        "url": "https://opencollective.com/unrs-resolver"
      },
      "optionalDependencies": {
        "@unrs/resolver-binding-android-arm-eabi": "1.11.1",
        "@unrs/resolver-binding-android-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-x64": "1.11.1",
        "@unrs/resolver-binding-freebsd-x64": "1.11.1",
        "@unrs/resolver-binding-linux-arm-gnueabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm-musleabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-ppc64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-s390x-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-musl": "1.11.1",
        "@unrs/resolver-binding-wasm32-wasi": "1.11.1",
        "@unrs/resolver-binding-win32-arm64-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-ia32-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-x64-msvc": "1.11.1"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.1.1.tgz",
      "integrity": "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/which-builtin-type/-/which-builtin-type-1.2.1.tgz",
      "integrity": "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-collection/-/which-collection-1.0.2.tgz",
      "integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.20",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.20.tgz",
      "integrity": "sha512-LYfpUkmqwl0h9A2HL09Mms427Q1RZWuOHsukfVcKRq9q95iQxdw0ix1JQrqbcDR9PH1QDwf5Qo8OZb5lksZ8Xg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "6.2.3",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz",
      "integrity": "sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.2.0.tgz",
      "integrity": "sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.2.2"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}

```



==================================================

FILE

tsconfig.json

IMPORTANCE

94

```
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```



==================================================

FILE

app/(public)/page.tsx

IMPORTANCE

90

```
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import StatsBar from '@/components/sections/StatsBar';
import UniversitySection from '@/components/sections/UniversitySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import ProblemSection from '@/components/sections/ProblemSection';
import DownloadSection from '@/components/sections/DownloadSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <UniversitySection />
      <Features />
      <HowItWorks />
      <ProblemSection />
      <TestimonialsSection />
      <FAQSection />
      <DownloadSection />
      <CTASection />
    </main>
  );
}

```



==================================================

FILE

app/about/page.tsx

IMPORTANCE

90

```
import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'About — EDUING.in',
  description: 'Learn about EDUING.in, our mission to simplify university admissions across India, and meet our founder Aaryan Sharma.',
  openGraph: {
    title: 'About — EDUING.in',
    description: 'Learn about EDUING.in, our mission to simplify university admissions across India.',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="about-hero">
        <div className="mx-auto text-center" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label">OUR MISSION</span>
            <h1 className="section-title mb-6">
              About <span style={{ color: '#6366F1' }}>EDUING.in</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
              We&apos;re building India&apos;s most student-friendly university admissions platform —
              one that removes the chaos of applying to multiple colleges and replaces it with
              a seamless, unified experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding" style={{ background: '#0C0C10' }} id="about-problem">
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label">THE PROBLEM</span>
            <h2 className="section-title mb-8" style={{ fontSize: '36px' }}>Why We Built This</h2>
            <div className="mob-card">
              <p className="text-[16px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Every year, millions of students across India go through the painful process of
                applying to universities. They fill the same forms repeatedly, navigate confusing
                eligibility criteria, miss deadlines because there&apos;s no central tracking, and
                struggle to compare institutions objectively.
              </p>
              <p className="text-[16px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                The system is fragmented — each university has its own portal, its own format,
                its own timeline. Students waste weeks on administrative work that should take hours.
              </p>
              <p className="text-[16px] leading-relaxed font-medium text-white">
                We knew there had to be a better way. That&apos;s why we built EDUING.in.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Solution */}
      <section className="section-padding" style={{ background: '#08080A' }} id="about-solution">
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label">WHAT WE DO</span>
            <h2 className="section-title mb-8" style={{ fontSize: '36px' }}>Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mob-card">
                <span className="block mb-3" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                  FOR STUDENTS
                </span>
                <h3 className="text-[20px] font-bold text-white mb-3">For Students</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Create one comprehensive profile. Discover universities across India.
                  Apply with a single click. Track every application in real-time.
                  No repeated forms, no missed deadlines.
                </p>
              </div>
              <div className="mob-card">
                <span className="block mb-3" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                  FOR UNIVERSITIES
                </span>
                <h3 className="text-[20px] font-bold text-white mb-3">For Universities</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Receive structured, verified applications. Access a wider pool of qualified
                  applicants. Use analytics to make data-driven admission decisions.
                  Reduce administrative overhead significantly.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding" style={{ background: '#0C0C10' }} id="about-founder">
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label text-center block">FOUNDERS</span>
            <h2 className="section-title mb-8 text-center" style={{ fontSize: '36px' }}>Meet the Founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mob-card text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-[32px] mx-auto mb-4"
                style={{ background: 'rgba(79,70,229,0.15)' }}
              >
                👨‍💻
              </div>
              <h3 className="text-[22px] font-bold text-white mb-1">Aaryan Sharma</h3>
              <p className="text-[15px] font-medium mb-1" style={{ color: '#6366F1' }}>
                Founder & CEO
              </p>
              <p className="text-[14px] mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
                B.Tech CSE, Dayananda Sagar University
              </p>
              <blockquote
                className="text-[16px] leading-relaxed italic text-left pl-5"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  borderLeft: '3px solid #4F46E5',
                }}
              >
                &ldquo;I experienced the frustration of college admissions firsthand —
                filling the same details on dozens of portals, missing deadlines, and
                not knowing where I stood. EDUING.in is the solution I wish I had.
                We&apos;re building it so that no student has to go through that chaos again.&rdquo;
              </blockquote>
            </div>

            <div className="mob-card text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-[32px] mx-auto mb-4"
                style={{ background: 'rgba(79,70,229,0.15)' }}
              >
                👨‍💻
              </div>
              <h3 className="text-[22px] font-bold text-white mb-1">Lakshya Pandey</h3>
              <p className="text-[15px] font-medium mb-1" style={{ color: '#6366F1' }}>
                Founder & CEO
              </p>
              <p className="text-[14px] mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
                B.Tech CSE - AI ML, Dayananda Sagar University
              </p>
              <blockquote
                className="text-[16px] leading-relaxed italic text-left pl-5"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  borderLeft: '3px solid #4F46E5',
                }}
              >
                &ldquo;As someone passionate about building technology that solves real problems, I wanted to create a platform that simplifies one of the most important journeys in a student's life. EDUING.in is our commitment to making higher education more accessible through innovation.&rdquo;
              </blockquote>
            </div>

          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding" style={{ background: '#08080A' }} id="about-vision">
        <div className="mx-auto text-center" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label">VISION</span>
            <h2 className="section-title mb-6" style={{ fontSize: '36px' }}>Our Vision</h2>
            <p className="mb-10" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
              To become India&apos;s default university admissions infrastructure — where every
              student applies through one platform, and every university receives structured,
              verified applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { value: '2026', label: 'Launch Year' },
                { value: '500+', label: 'Target Universities' },
                { value: '20+', label: 'States Covered' },
              ].map((stat) => (
                <div key={stat.label} className="mob-card px-8 py-5 text-center">
                  <p className="text-[28px] font-bold" style={{ color: '#6366F1' }}>{stat.value}</p>
                  <p className="text-[13px] mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding" style={{ background: '#0C0C10' }} id="about-cta">
        <div className="mx-auto text-center" style={{ maxWidth: '700px' }}>
          <AnimatedSection>
            <div
              className="mx-auto"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '64px 48px',
                background: '#111114',
              }}
            >
              <h2 className="text-[36px] font-bold text-white mb-4">Want to Know More?</h2>
              <p className="mb-8" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '17px' }}>
                We&apos;d love to hear from you. Reach out for partnerships, press, or just to say hello.
              </p>
              <a href="/contact" className="btn-primary">
                Contact Us →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

```



==================================================

FILE

app/contact/page.tsx

IMPORTANCE

90

```
'use client';

import { useState, FormEvent } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (typeof window !== 'undefined') {
      try {
        const existing = JSON.parse(window.localStorage.getItem('eduing_contacts') || '[]');
        existing.push({
          ...formData,
          timestamp: new Date().toISOString(),
        });
        window.localStorage.setItem('eduing_contacts', JSON.stringify(existing));
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputStyle = {
    background: '#18181C',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#FAFAFA',
    borderRadius: '8px',
  };

  const inputFocusClass = 'w-full px-4 py-3 text-[15px] focus:outline-none focus:border-accent transition-colors';

  return (
    <>
      <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="contact">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-label">CONTACT</span>
              <h1 className="section-title mb-4">Get in touch</h1>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '17px' }}>
                Have a question or want to partner? We&apos;d love to hear from you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left — Contact Info */}
            <AnimatedSection delay={0.1}>
              <div className="mob-card h-full">
                <h2 className="text-[22px] font-bold text-white mb-8">Contact Information</h2>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-[18px] flex-shrink-0"
                      style={{ background: 'rgba(79,70,229,0.15)' }}
                    >
                      📧
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-white mb-1">Email</p>
                      <a
                        href="mailto:eduing.in2026@gmail.com"
                        className="text-[14px] hover:text-white transition-colors"
                        style={{ color: '#818CF8' }}
                      >
                        eduing.in2026@gmail.com
                      </a>
                    </div>
                  </div>

                  

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-[18px] flex-shrink-0"
                      style={{ background: 'rgba(245,158,11,0.15)' }}
                    >
                      📍
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-white mb-1">Location</p>
                      <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Bengaluru, Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-10 pt-8"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <h3 className="text-[16px] font-bold text-white mb-2">For University Partnerships</h3>
                  <p className="text-[14px] mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Interested in bringing EDUING.in to your institution?
                  </p>
                  <a
                    href="mailto:eduing.in2026@gmail.com"
                    className="text-[14px] font-medium hover:text-white transition-colors"
                    style={{ color: '#818CF8' }}
                  >
                    eduing.in2026@gmail.com →
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="mob-card h-full">
                <h2 className="text-[22px] font-bold text-white mb-8">Send a Message</h2>

                {submitted && (
                  <div
                    className="mb-6 p-4 rounded-lg"
                    style={{
                      background: 'rgba(34,197,94,0.1)',
                      border: '1px solid rgba(34,197,94,0.25)',
                    }}
                  >
                    <p className="text-[14px] font-medium" style={{ color: '#22C55E' }}>
                      ✅ Message sent successfully! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="contact-form">
                  <div>
                    <label htmlFor="name" className="block text-[14px] font-medium text-white mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputFocusClass}
                      style={inputStyle}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[14px] font-medium text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputFocusClass}
                      style={inputStyle}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[14px] font-medium text-white mb-2">Subject</label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={inputFocusClass}
                      style={inputStyle}
                    >
                      <option>General Inquiry</option>
                      <option>University Partnership</option>
                      <option>Student Support</option>
                      <option>Technical Issue</option>
                      <option>Press & Media</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[14px] font-medium text-white mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputFocusClass} resize-none`}
                      style={inputStyle}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center" id="contact-submit">
                    Send Message →
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

```



==================================================

FILE

app/error.tsx

IMPORTANCE

90

```
'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Application Error:', error);
  }, [error]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#06060A',
      color: 'white',
      padding: '24px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '32px', marginBottom: '16px' }}>
        Something went wrong!
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px', fontFamily: 'DM Sans, sans-serif' }}>
        {error.message || 'An unexpected error occurred while rendering this page.'}
      </p>
      <button
        onClick={() => reset()}
        style={{
          background: 'white',
          color: '#06060A',
          padding: '12px 24px',
          borderRadius: '100px',
          fontWeight: '600',
          cursor: 'pointer',
          border: 'none',
          fontFamily: 'DM Sans, sans-serif'
        }}
      >
        Try again
      </button>
    </div>
  );
}

```



==================================================

FILE

app/favicon.ico

IMPORTANCE

90

```
         (  F          (  n  00     (-  �         �  �F  (                                                           $   ]   �   �   ]   $                                       �   �   �   �   �   �   �   �                           8   �   �   �   �   �   �   �   �   �   �   8                  �   �   �   �   �   �   �   �   �   �   �   �              �   �   �   �   �   �   �   �   �   �   �   �   �   �       #   �   �   �OOO�������������������������ggg�   �   �   �   #   Y   �   �   ��������������������������555�   �   �   �   Y   �   �   �   �   �kkk���������������������   �   �   �   �   �   �   �   �   �   �			������������������   �   �   �   �   �   Y   �   �   �   �   �JJJ���������kkk�   �   �   �   �   �   Y   #   �   �   �   �   ����������			�   �   �   �   �   �   #       �   �   �   �   �   �111�DDD�   �   �   �   �   �   �              �   �   �   �   �   �   �   �   �   �   �   �                  8   �   �   �   �   �   �   �   �   �   �   8                           �   �   �   �   �   �   �   �                                       $   ]   �   �   ]   $                                                                                                                                                                                                                                                                                    (       @                                                                               ,   U   �   �   �   �   U   ,                                                                                      *   �   �   �   �   �   �   �   �   �   �   �   �   *                                                                      �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                          Q   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   Q                                               r   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   r                                       r   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   r                               O   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   O                          �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                      �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �               (   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   '           �   �   �   �   �   �   �888���������������������������������������������������������___�   �   �   �   �   �   �   �          �   �   �   �   �   �   ����������������������������������������������������������SSS�   �   �   �   �   �   �   �      +   �   �   �   �   �   �   �   �hhh�����������������������������������������������������   �   �   �   �   �   �   �   �   +   T   �   �   �   �   �   �   �   ��������������������������������������������������,,,�   �   �   �   �   �   �   �   �   T   �   �   �   �   �   �   �   �   �   �GGG���������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �+++���������������������������������jjj�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ����������������������������������   �   �   �   �   �   �   �   �   �   �   �   T   �   �   �   �   �   �   �   �   �   �   ��������������������������III�   �   �   �   �   �   �   �   �   �   �   �   T   +   �   �   �   �   �   �   �   �   �   �   �   �hhh����������������������   �   �   �   �   �   �   �   �   �   �   �   +      �   �   �   �   �   �   �   �   �   �   �   ������������������,,,�   �   �   �   �   �   �   �   �   �   �   �   �          �   �   �   �   �   �   �   �   �   �   �   �   �GGG�������������   �   �   �   �   �   �   �   �   �   �   �   �   �           '   �   �   �   �   �   �   �   �   �   �   �   �   ����������   �   �   �   �   �   �   �   �   �   �   �   �   (               �   �   �   �   �   �   �   �   �   �   �   �   �333�___�   �   �   �   �   �   �   �   �   �   �   �   �   �                      �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                          O   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   O                               r   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   r                                       r   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   r                                               Q   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   Q                                                          �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                                      *   �   �   �   �   �   �   �   �   �   �   �   �   *                                                                                      ,   U   �   �   �   �   U   ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               (   0   `           -                                                                                             	   (   L   j   �   �   �   �   j   K   (   	                                                                                                                                          V   �   �   �   �   �   �   �   �   �   �   �   �   �   �   U                                                                                                                      %   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   &                                                                                                      �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                                                          Q   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   R                                                                              �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                                     �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                             �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                     �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                              �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                       P   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   O                                  �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                              �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                       #   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   #                   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                  �   �   �   �   �   �   �   �   �   �$$$�hhh�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�PPP��   �   �   �   �   �   �   �   �   �              U   �   �   �   �   �   �   �   �   �   ������������������������������������������������������������������������������������������sss�   �   �   �   �   �   �   �   �   �   �   U           �   �   �   �   �   �   �   �   �   �   �   �eee��������������������������������������������������������������������������������������   �   �   �   �   �   �   �   �   �   �   �       	   �   �   �   �   �   �   �   �   �   �   �   ����������������������������������������������������������������������������������HHH�   �   �   �   �   �   �   �   �   �   �   �   �   	   (   �   �   �   �   �   �   �   �   �   �   �   �   �EEE�����������������������������������������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   (   K   �   �   �   �   �   �   �   �   �   �   �   �   �   �������������������������������������������������������������������������,,,�   �   �   �   �   �   �   �   �   �   �   �   �   �   L   j   �   �   �   �   �   �   �   �   �   �   �   �   �   �)))���������������������������������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   j   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ������������������������������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ����������������������������������������������������������iii�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �eee������������������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ��������������������������������������������������HHH�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   j   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �EEE���������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   j   L   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �����������������������������������������,,,�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   K   (   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �)))�������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   (   	   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ����������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   	       �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ��������������������������iii�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �           U   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �eee����������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   U              �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ������������������HHH�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                  �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �EEE�������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                   #   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ���������,,,�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   #                       �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �222�}}}�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                              �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                  O   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   P                                       �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                              �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                     �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                             �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                                     �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                                              R   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   Q                                                                                          �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                                                                      &   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   %                                                                                                                      U   �   �   �   �   �   �   �   �   �   �   �   �   �   �   V                                                                                                                                          	   (   K   j   �   �   �   �   j   L   (   	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        �PNG

   IHDR         \r�f   sRGB ���   8eXIfMM *    �i            �       �           D"8s  IDATx�]	�ՙn�]<QVA���h$	�N��13*�q��d�č�I���D�L2��(�(Ԙ2�ę�G	��q_@屈���xț�Џ��{o�������U�{}�O��;������9�d���(Dg��8	��N �]��@�hx�?v �N�3�=`;�6�.�&��u��  ��6�P��н��@�àR� P�iZq�^DN���wp����X�hИHg@��
:��|�5` p"@�'�ɲ�s{�p�*�2����� d ү���|(0�
0 ��>K�
�xX�6 IJ� �C|?$KEN�}ϓ|������h $	2 ��|/� . Nz �#���W�e�
�5������ܶ���;�y �� �g�s�h^  I�� DL(�;�8��Hjg�cH|x�1��R"�a���Ӂ� G��@��9`/`%0�H�@j�~,���K
�,t).��I���D�T�O�)~��V�u$b 誛�U%�7������ _�$b 8A������J�3` 510wQ�?��vr���:�2�K�@ ��v*{%#��A�Z�咁^(��=�g \��W�����!:��,`�6��643�:@�c.Fٟ����u?�<��'������_܏vp: �8Q��
I�Ł�p{3���kHȢ�G�����c�Ѽ<�62&�
��2uC�����敭��T�3�
�����;���d�/~m��.��X�@{�w.��d]G�� {lK��Eb���(P�RuM�T�C�����d��])��_Lm�=��=@b���K��GUk�^�U�������)1����g�T���m`9�\����Q��@����Ⱆ6�:ڞ�^�w�����E�D�� �	�5����F�,��
�X"�d�m�<�nB~��@����t�t�x���;�f�>����I8����8��C1۪$B���e���+��jl��EZ��& ��S:�:�6�m����\G1��`���!�nl�l�Ɗ�^�Q`��@Oc�S��@e�ͷ���qb�p���S��@up���F�D@�Г������2@#����L3 �A��$H2� _h��FH#rq(��O�D�򤬈���runGOWa�b� &�SgD�3�ED�to�*Ǥ����9k��~)���,$� x�R�1�v�K ��9�D䍁U(�w�&LE��ꩻ�S)��3�Y8x8 $.i�(��K�ŀY����a�]����4��ǀ	c����@3�f����4� Ƣ���/*b��� ���$!I�~��7�B*-1`	o � �	�$��ǡD�����L������ �J"���OQ��)��2@#�x4�"$e ���I�8��Oi��8�"� �G��8[x�t<�.��7&�m&؎R�^��tq� ؕ�.���Y�-2� �d� ��*_��&d|j\�W�b ��G����*g�� ��釁�F4�"I�؃�/ b1q�N����Y�D��p���9���p�}w\� �Ԥ���1 j`��O���xK=��H�� �A��1�#�
D:U8j���t���$b b�A||�U�Q��26%��)1 ��_�ꢳ!~D��� ��+b >A��:]�E$��50��GDhR�t����ݻwR�)��P� ��n$� 3���@bS�Nu�,Y�j�ʲ��:����;�����@�`�|�-[)�'OV��Ն�sFxڮ��ۥ�n}͛7�����~��ƺ�:���Q��J_��UKj8�q0x���;v4 ̞=[�hW=�	��	�&�!e5�8hѢE��w�]�����6���_�iW}�SZ�?	�/`�;vl�}��2 <�h�" ����A�܁�X,�m۶�+V�(��<�w���#F�^���;���aH�c ���)S�*�{a���p��c89(�^����4�&E��oÆ��W�/��u�=�^���*?{k^�_E�����z���g�� UI-���{WU*
�:p�9.tڷo(/ݺus>��3�'�^�Rg���ڞG��I_D�������~~� ��{���?N0�7�S��.ƍ׸�~?}/y]nA;�أ���2 ]�FOB2C?�_I����[�:�:�=#�OzK�-� ��ϣ�%����?j��I���P�ۯ��{N�-hU��t�:������� ,���G�K�-hU���c�hP7 ����@�n?�\�-�k�.���2�:�� �`��F��=�-�V�_�G��܂V� ��}�0 WI����F��ʭ���sM�rZ�8pJ�Q�*@OK8���
rZ��ݖa, ��w� �S�W^y����.��5�at7��ݏ���Tv#�~7n��A"�����+��W��pM��/�hK8����g��F/^������M{e ��R�|�)q��7�t��?8'���K��P~���瞰�\��r��>�ǷUk �eP��|�^x����
�/V/��v���������*�p�v�� ����ʟ]J��}��k8(������ĉ�ѣGǗ�O�mڴq,X�o���e.�^ �Qx���p�t����4^_�N�{�����y�2 �s����� �-عsg�s���i�v��Z8
!~PJ?�c�������|�] �ܽ{��z�긓R��1pn���z�����tlp�9�f�r�v�jT殿�z�4*O�L�~����ԕ3��4�~~�r�;�m�xY�+���������3 r�;�m�x�4���:7]ՁqL�4)U��!r�1��u�6���$��7����8�w��̙3Ǹ|5�>?�\z��O���͆� ��,�E����3�����2���[����2Wu:E�����^p.H1cJ�t�]}��B�u��SOu�����Ic�O�����%�  �AZ������k����D?�5 �@Q�����3�w�+��"��T��S��Uޥ�13��?��5 M'݋��>p��Z�j�~fj�׈�סԐ�n�����>� ��i5D�[bf ��~a�'�`Xc��� -�1�k����āI�������k��Q�ů|�k�M��(92�@�t�����݂X-�Lדa��N4��qܞ'$f0@�@V�nA�ܘY�L9:�|/^s� ��	��)0`�j��T\w�uZ-����¨\�	@�:��c�t���{�-��Rb��1%� �I,Y%T���~��r�1����C��,�$��*ˀ���f<��0z����h�F���� ����|���8Z-�CR����Tg� �HRf��glY����s��-��p��'+����m�_ؒg������C�{ �	����Ȫ�ϏΙ3g�-�GR|׹7`G��񥡘�0�U��_ٵZЏ�د�D�)���\>����ʗ������z N���@��~~��-��P��{rs���@�<����|.]�Ը|��m|g����_��y�W�KD1�b�M���%�s\����r�1��n�\�ƒ�"-� �`.4��~%3��I}[0A��$��= -�>BH"G�ۏ�^r��<�EBG�i �%���9�@^�~~@�����1����@� t�-[����{%@C�$�mAg���Κ5kʆх����/双O��l��ӿ��B�@.X���u�p�O��6��x�9MPn�`߷o_���^n�`t�
��(�����\r��s�A�y���ۂ�T��@h
�E0l�0��;�tڵӘkƸN����Y�jU��
S#�|^㽺- |��p�N�.���ޥ`�^{�zL�6��4 �ě�b��e�]&"�d�sΜ9Uޥ�U0�!��*nP�*`���o֨v����i8G�����hh��m������ɓ�s�=�{J�U0�Ղ���wZ������������8bEz���,Y�D��![C�>}��7:k׮�no��f� >jvR?#b��X�(��F�AT�F��i��[�{��zv��>��C���a+�[0B2�D��=��G~�(
�ĺ������LO�\s�܂>"8|�`[)
&Lp8�'��������4 oGe�#�ۏ�lْ_\�D̀܂�2Z�l��i�9��t�ȑ9f ޢ�-����=���Y�y��n?uQ�}Xͬ�sA�i >=��1�=R��+� +�܂��.2 ��K������CƢۃ20h� �˫%53�5@�MA�%���̣������j[��9�;�� _(�����0��~r���\�{�m�P����x#TT9��n?����N#��ץ&�}� ��)
�T�VL�!���j���`�p �8@Rr�UAV�A����=��-����pLH�`@n�*Ȋ1�܂U���?}w ]�H2@�ߴi��V���[�˯%�������5 �8�)Э
T`��|rZbZ-�.�!da+@� ���ߞ�Z�gf�[0p���� �� I��gr�$��o%P�_rCy�V�|߽����"m�Y���-�[ l��k xA� ��ۯ9]�[pҤI�Ȩ�pP���k ��Feِ���gHE�d�nAm"Z�$��5}���z�8����2r�X�|� ��Sܻw��r�J�s�J�~�T�f�z{ �ͫ ��x�j?j��Q�E�n� �js���|G�xз�<dXt(��Q�E�.�p�47 ��)���;��ys�_�V�D���-XTi����?� �~�薜����� �`Q�=V�?���^�
������.]�|X�
�m�B~��?���J� �D�������~�h r�����ER���A݀�B���~w�q�Ӿ}���<�ŕ[й5�d��-�`�5 ?�Kq�~l4��0@��)����/I��(����؋���n��9���Y�4�!�Cو2ח*w9���GKݐ�s�&�r�e��s��?�6�8J� |(�uwO䴁d�&K)�nA��?R���n@7,��8�=���r�e����n�M�69k��M7�����J��R�]�e�n��9���Z���� /?នo>��󕾤�rzr�� ��`���V{���u��4448�V��ra��p� ��QRZ�<{�dK.F9��#~T���s.����N%*� ���Ýu�8G&����/W:*x%�{�}@� ��l���Nc#�AI�������i����*?�د�0}�g���C"Āpۯ������4薒ҏ(b�8�_Q�Y� ���r7'���`��� �j �6�� *��3�W�g��"��l��1�:�Sg}%� �	��P?����1`�����Y� ��"��D�0b@�� �����9������[t��F1���p`k�\U�`��R��A#W81 e`)R�ZM��� ��[u��F0�	rq.����� #^�=C"Ā9P'�R~f�� �
pn�zdC"�e���?�\K����@&$b }jz�3۵� x/{��1 Ra�#�|��ƟUK�= &�^��TM�n�2�9�5)?s���{O'�D��D���o [kM�oK0�x�� �Td�_@]b r� �G�����; ����D��D���1�gaR�`��'`0�  �>\��/���f��������ŀ����!fn�Z�|b����U�.t���ट���r�9�+��������	�b rnE�Dk�= ��8�����!b R�Cl�P�E�`�܌�K�'~�@���}*�!`�@��6 L��;��	$b@D��?#��g�F�
��V��1�v��;�Es��Q����=ɮ�4���b@T��n��!��3q�0^�V�� c ��1�ܶ��[����M�=8I����1@�څ@Cu��`N�o�� WJĀ� W����e��I�� n��N�mீ��ܴ�_d��(�4`E܅I� ���"̵�1 *3�+\�E� �\M���)g	r���
���8�>��p�?vI� �0�ǀ~�!b������$'�%"I����R��i�1 �0��? S~&�� �r�����{ n�_�����L�?��T�e��Ǝ�7�C"r��OQ~"qI� ��O 8�?$b �܋r�#@�_�v�J̙��/��3�'d�/����W[����o'N��l��-2� ���@j�O~��0���2` H�@�؄��+����pOB� �uO��(l�S�ԕ���9����~�c�:x/�Xd�.���Ɣ�d ��V�y@F $H2� ����+M*�i��l8O@F $H2� ���2�4& r�PO��֢����7N�YS ����Y�1`��;�JS3n� g[�'��@W@"la`32�n?'�HB2p
�hām�mu �����j@F@��V����Z!��xI���H�y�ѱ)��>��Z!6 ���a�`�����dDV$9f���	pM�6�I�!LG:\LdrwPy�~�P�%��L3��7�TK��Am�mo|�6��	3��-�h J3��?�67 �yr���"����g��4. $�1���_�[*��&���S/�dq�������C��h �3��>�6Ŷ%������\�#�RZq��=lK|ŔX��X�WS�e j5 /����$���:��v@������8���d��1(�z2~F�)���3��͋���l��C�������#����=�.\Lt? %� N$9b�%�:���2��u	 �1|-�	ld�����t $b��@?���@� �F�c��ρ^�D�d�[9�ࠐz�����:
H�@ ��P2v )~���@����z5��|����R�ֵ���|`#�W39؂��<�"-�0��\<�d��u�oGLz 1��Gp����e�倯d� .�jH�@j�F�3��@ c{s<��J&	�@�����b���w��  �� ��n���v��< �����,M;��*p>p!0hH��{=�����x�]I�� DLh����<'��h8�@V �#��J���f� I�� �Hn����W�}�N�t[u�$�������� �@� 2 	�]&)�� #�3���,	=%�T���k�&�  I�����I��ӳ� �[8	�	�L�]�]t�T�g���6�-@b2 U�OV��: A?��} .i�|	�xC���rv�w; ��#�>�i 8_b82 �WP����� �� {'n���8�z;�Ƥy��s� ��@���P��o|�S�ih $3��@߹j��    IEND�B`�
```



==================================================

FILE

app/features/page.tsx

IMPORTANCE

90

```
import Features from '@/components/landing/Features';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Features | EDUING.in',
  description: 'Discover the features of EDUING.in - the ultimate platform for university admissions.',
};

export default function FeaturesPage() {
  return (
    <main className="pt-14 bg-[#06060A] min-h-screen">
      <div style={{ padding: '80px 24px 40px', textAlign: 'center', background: 'radial-gradient(ellipse at top, rgba(91,95,239,0.15) 0%, transparent 60%)' }}>
        <h1 style={{
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(40px, 5vw, 64px)',
          fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.03em', margin: '0 0 20px',
        }}>
          Powerful features for a<br/>
          <span style={{ color: '#818CF8' }}>seamless admission journey</span>
        </h1>
        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: 'rgba(255,255,255,0.6)',
          maxWidth: '600px', margin: '0 auto',
        }}>
          Everything you need to discover, apply, and get admitted to top universities across India without the usual stress.
        </p>
      </div>
      <Features />
      <CTASection />
    </main>
  );
}

```



==================================================

FILE

app/fonts/GeistMonoVF.woff

IMPORTANCE

90

```
wOFF    	    �$                        GDEF  ��  �  ����$GPOS  ��  �  �2p�@GSUB �  �  �Ր#cOS/2  c<   R   `�?STAT t   q   �����avar �   .   .@@cmap  c�  �  ::�fvar  w�   \   ~�w�glyf  �  W�  ����"\gvar  x  y�  �:�-Fhead  _�   5   6.���hhea  c       $Chmtx  _�  E  �V��Uloca  Yx  !  t@�maxp  YX        b �name  i|    ��T�post  k�    �����x�|`G���"�-˒ I�X@HBHPA �P_!	!�&�Ǳ���ĉ��ڗ�8��˵T;�/�u�g�r)�Kz�h�;�-6rr�%���f�{��7���¤3���Е
=�`T�BFǔ0�LS���.�	�E�é✎r�:r9'��\���W�$���(ܩ?�Nt��+T�ʖ,i5�-)��l�M7��K�K���7����S{�M��_W<<�k��h��μ����;��%Me\Y{��ӯ�v�g�7�.�.��2�g�1J�3��r
�5���85���ס�R�a�ؔ��5u5�d���=�Ҍp?è9L%� �S��a(.o�O���:�f�=W�AG;}J�o�x���6��p��������aھp�E"�����-�� ~���CjN��9z����}s�r�nf�������R4"���8а�l��1������(��_9��r6X8����n�%�Ѻ��[^EU==�C��P�Ν��	[ȪL�&��ܞ�7P���n~�ac�~��[db����N:�����ܜ�<�������|�/�K��{���Ɩ��+Wf��ڶ����M����������м��`��0}��,i�m̃)�|��p�(���
� �s���1HFg�5"ΰXv�_:�%���zS;�G�tw_�8�2�m���a��ϖ-�^wŕ��^���1��HxN ��	�������	^��m
��Ux�sآ�#��d��¼5@s!� ��@��
���B{l�σ�����~
$={��R���F���:F-��R\�S�ڞҗ|��2|ŋgڃ�5���}�����|a�a|��I�`���lSU�g�����P�:N��=;�>�����9]���
��G�·�m����mk�m�}���˝��ٰ��r޽>]�&z_	r��3����r�έD�
�l6�W���W
��m�m3>T	2�.�C.7�i5W.���;�[.\r0?����{+*�뺫أ����/�����mG�{�*�ğ\K��oI��P�ue&qS�_����On��$�R�[�YE�4#�������"����"c�x���X.���$��J�����?���`��<R]=����>Jo�5�����ˏ�^stť+�m�����uL��U_�WD�y��c,x7�J�U�ġ��0�b1*�n��MyЄ� ��0i�ײ�p/���B܋���Bw�b�X6:(�b�S���/�U�y��uZ=;�\���'~{1P��rj����݇��>�k�5N���E��W��H����)���0ϥ�5��)}:�Q|#ŋgڃoV��0N|�.&��d�C�u�-$�9
{��&�'=,��D�#�/l��m�����`�y5��e�1�&��?�P������uD�0�ȁ�P�9o��	� ��Zű>�<�Ia%Z�!�ˎ��|��O����=	�+�������+cU�z1�N-�ı���4[����c�ҽ�*��x���\F�N��*�B�0��i	�B�`^XC���_�~�B�=S���rZ|Up�Ώ<h=x06o��9u-H�(�5�ϧq�BҜ� gn��(�\h����;,?��w@f��1(���p�����@[¡��~>�#A�u����v�t��FA%C�֔�G�k��KJV,o�U$d���p\��'A'e4���g�,���终���j�q����];/����w�����ā ���v�\�{V?�q�߃q�)�O��s�߈q꫌��Y�'F0��/�stvP�������T�*H!G����c�1��k߅��(�C+˄����O��&���>���kl��D��;������P��޾��8���}�����*{'�Rng�stnRn���ݝ�l�z7EƐa``h�.��cY ��!���hk� ic$Z.��Z�턀�J֨�������+.>^���#���o]�f[?��c�|,V�Oְ����.}a�����wׅ���>�2�2�����</O��ʁ�\�S[Vw���(5#�y����F����Ƕ���Qd�y;^x�^-���|�A���<<ޣ��3���ߡ�2I8���6�����R��yVG:���a��JY��]R�U���� ���U4����Ϗ+��k�{K:C��j����}���Έ���h�������ó�]i�[�J}NA��=R���F뎄ԯ
��<��N6Z�$H=�&#�sX�iNxeR�R���_Z`�3�rrU��uJ
Q��nQ	�M�;۷;����J{�|El�K���cllK�)T��׶��7x��a������	�4O� &��C�w������xe�ڀ�+��B��(: <)�[A�=Ձ�W�q�W/���9�d���������b��d߰��##�u�@�܋eX;g)~��P%��I�����i{J���8���H�bJ�F죄�
�.��ô}aJ�4�������ha�O<��L������7Ly��5Kj'�U��oL��Oo�w�G�}؎��_�I�n���Y�R�0Ʃ�(���T�t��@>;�)?�)d�KC<��+_Y��3+���hZ&��ʄ��'���i�c>�+��=��曗�&����	�*$���7n�y���S���{(�����!Nǈ�m�� N� I��C贰}UȈ�����������~��I8�/����A��(����H�!f4��������yeY.\R�be��:�RZS��
�ɘ4et�����߳�6�r�x�w�~<F�h�ߢR�5����L������Jꯞy0�?��q�yL�!n��:ҍ���SE^����zy	l/�I��uR�:x'x�(����.���^#���F�'���`�kX��5,��F�D.�k"\Қ�n�����13������~��K(n�稸}7mOc��R����8�'��8�w�w?�K����$��幦��+e8�v�2�n�V�ʱ���#W�-��n9U�d�������Z2Ʋ��.]��6f;Pv���/l��Y��0�W�jS PW��߾�&3�6x:"���}��h� cNd92ތm!�P���x�[�������M9~���9�h���Q��ҩa��R��Z����
��/��~��3i�"����\��i�L��$m:nvuؔbP`T.��H��7t�,
�q��RbH�v��z�ۆ�8}���Eݭ�n�����R_��L�U�?����p�Ec����:�h�z����`�x~��C��PW�0kA}���E�`��Ľ~ܷc�%zQ�r��$s^�B��N�sc�5n����'�^2��uu�~Xc0�;.��K;�׍'&k�|ޱ:�����tU,�_R �TYoo�z7��ޅ�����P��U_2�ѱohh_G�`���3�HL�=ʱI<>�6�{�ݹ��x���$�Bq����g(�ː��)�� ��>_ҝ<*��LZ�H��VXC,��*t1�3h6��ۣ=��1�I�������Ƽ������:��y\������!�x�x����sԎ�gH����v�%����w攄ػxֲ�����~�e�H�[�^�����'~�tYΞou�]�?���~��p��+20a{7�n�����E{�_>_��G_����%-��'z���	��vɖtLirU�k��:v)�?657o�
�o�����x�ŃWD}��tdU6նo����T�����h�.�8z�9u�
�W���Q\7O�?Kq�25������e9�ŋi�������t�$�^��}�;�j��53�O���#W��T���5�����m�)����X�S/������-eʘꤕN'�1� s`L�&\�ߞ�/]�oGs��͞5�c����:,��	��u�f	�(�V�'Vio������/h&&QfU���_�dpp	�ȁ}�I2�p��i�����nJ�+�Q�d���q�k���c/qF��[
�8��4��G�A�Lx��9t�Z"����Y��1+���b��PW��>=3��O��ƶ(�%��eӸp/�E����g`�$
&_��˹SQ*��db_��;�营k��K5�r���a��Ht^BtKp٣ ;�Ұ^���E��tQ{�f�H�Ո�J靦�r�����D>)��KS� WJ����c/�iy� �c:$9���W$��g%���D�/%�Hp���e�w��Ez>��L:*��2��	�G"�&�^����(�Ϟ��tKg�`+e{P*��r�8��-�<��{kE۩E%�
?�hӵ���Ǵ�9-�<c$��5�iRC, �!���R+^z$&��#m�_z �M��5E��S'�FA��ü~�TgJ4%�S��XT��t�F����:9��֩4�H��ke��� �kk�U&�|�����:���qɎ�L�d�Q�/�V�4(��Եz�R}�^×�wV��mv���⫅�l.�؄�!�Ë?`�0\l�̡<��t)pȜh��-=@��-c��vG����A7���׉���%���p�%�x�2u�"��
�׉�a����w����������E���V,o�a����C�]J���_x%���^�J���+<0_R�&��b�vbb-�����7��JF����nZ����aR�ўJ��Z��c/�&��ހ�-SF�>��-���y"E��ҩ�)��Z�"�������^�\5��2�C�T��/���n������a��,f�͌:*8�Uy^D�'������z�
�R|��`Y9�2���d��LI�O/����GW������2xT����0���f���ֽ/��]�0d
��U=��:Z=���?����0���͟�_P��d�I�
fm�;5�3�wVv�	m��À��Q�_G�3�b­ͧ�55z�p"F!��*f58R�F��?d�V÷?���Oooڸ��U�_��v?
�֕l�-Z�� 3���C��o�%�_.�x�OC��WI܅��&�P��f!j��,ܻ�<i����ּ��船v��e�9tA���S�v�M;����q�%��*!T�+�{ꔶ���L�`���&8 �a�̟������ggp�(3��o�۟�����I�KY��(|�C�V�=57Uy)���"���ďt�����K�Ca�4�n�hm�E�k{��鼆��ܣf=+�]i����%^�_�Ta� 4�P��X�ӷT��R/��f2�/�v?D�@�|^��7���BeW�͘z��Iɛb�^:�y�PhG?��S���}9%���(N3"�뢼�1�.��}������W&�v)��~}��s�>�ܣ�yw����_���X�O��:�w��Tm�@[�c���&8�P��>N��>���)�����k��5���(^L�װ����8C��l{K�����c�3|1�� ���+��o'���B����&G̷�MiC�)\N"�G���B�IhB[�/�ǧ�@�a����<5��0��P\7-Ǐc���)�hO%�N�ptn�BLx��[~��+}r�W��e#���O�wN�$��x�a�I6�vsdGt�k}EE�%�&�������`T�������*+�ߏe�'}�fd���X9~��j����Lj�HA�:_��&yOg���ۄ�Q!ʣ^8Dj��)%rV���?Nq�=���gG/O���1���2)���8SH�ځ�-�eW�����1X�?�8j�6�����.�Q�$Z���G�Ϊc[5,~���jU��֍��VW���0VMx�_�O��8Q��L������u�?Nqu
:t\)�ŋ)�1��8���f�+Xھ0}jd�!�-�|�/���_����"o������h�'�������ʚ~w��5޸=�oބ�]Gt*�
��P��=�'��<U{ݻr�8��s�Ѿ ��x1�S��`�Μ<:�^����s�/\V릘�W4���r���O>�lc�SO�K#챈��Eͩ�\�I��8�)����>�R{n��,Ž��_�?+�r�_��{%'�^	��|�Y��nZ���)_��\�:��7)�z�H�IBG���`�E�����J�nO�d(n���е����_"�-��C'h=�M��B�������kh{�1�OpV3��1ӄd>�ۛi{jg�#�������y�|6w�]��X��[[VZlPv.7�t�/Ԥ�p�`����:����ֆJ�==��
���{��ve�{Y��hk�����r4�\"Ǘ@�c�s�Y"�t�L^	�yx8�ł�UU喪*ں��g���ŭ����n��gP�����bl�x7��U����̥�P���p�b���8{�煿�qPa}]�@<G��I��Z��C<����P���u�߱o�$���l1nW,���3���ń�1	Ų7y m�hK�hq[-���n �E�xt�f��t@�̙3{n-.��`�� �PeT���P�hL�C�^S=O�ͷ�S7���_�;[*$��<���߂���x���R?ZQ> ;K��6Q�3�����9�ߛ�{�X,
��&�g��n�g��U�I�b�`�ɞd촖;���$?�rK���:c�VD`s��<ѷTZ�6ߐ*���wljᇐ7f^ҝ�{��v��Z�+Ah�wUYu��RY�k��]>K��5��-u1�^�Vp8���G®��K<�;s���(C[��5GVHDǓ�~UxҪ8�*ͣ���Y�f�^ol��E�N�k�3§�\�ٌ|[���ڿUxq�jE��X���v�\�S󠔋s�\�$���x
K5hC�Y�����/7�@r�`�г���v��H�$��j�]:�߻e�#g�D6�
�b�+1,�6�oj�Lg�ұa:Y�g���W`��\�<�ޗS�*0>��o/~-�S��9A���УSד�܏m~�M6�����3�x=�ҝX��ɞ���/.�c+W�����_�ž$���Db��U�kO��Kp_쒎�j��Ң^*%> �XM�{��h���X=��撪pe�d�w��-�ʷ�4ٟZǆ��q�1
w�K�����e��	�X��Gan���׿����|n��p�s"$�a�I����w!/�Y�"���"@�d�Aw>�$�"������=�$��A:��y��	��^�L�P,�
�L��"1�)�9��t����N)�	�+�b��:�Z��$� }���y�;�:��?PW������X�j���Sآx"�R���gУ��Y�w���f3�8g�C�~nƿԿ!.�'��R���X����ib�x�����w8��V���#���m�8N�F���L������C�˥�pzeĲc�����yN�@|KKoI�Hs����xZ���sKG�H�g�hH�g��s��������h�U��H{�<����[�9�V>{\{��ߑNz��#�y����W�.^��j�()z����q���˴�ٳ�9'y̻鄿e_�x�O �"�э�l�:����~މ<w��5��qm\'�\E�Jp3k}�X�]�̚�Z1r�����v4.�	:����������q<���w�]��#�耺����$�VML��#���xunn��\��Smξ�ɧ���'�cO� _Ͽ�t���K=M�&'������Z:�	�&g� ���סV�g���_��m�=�>�־����<ߋfVi�D���6���vI?�@���'�<P�:OI�hu`�7t`$����<GQ��:�<�PW�_R�� ?�<�h�n�^�?�2��c��e�,đ�`�Z���Ӻa4�L4�Ğ&�\�f21���ݯ-\]�f,���gV�@|���!��.��#}A��#dX)��~���+<#{�&f�F��v���n�˝�T)-�^<���\���-�e���&S~VQFN��u��)YT�q����i�
��X��7�R(���
���.�Xh*��;zF|fcB��2ǟ��E�YU�i�d߱��f6��S��
���y��+(E6�>�y��c���58�Kz�c�/�_�E�JjӘ:��"�Oh�28�7����4���%r,��v�F�ӟ�]��.4tV�H~T����ٍ�V�[�H�>�;s}5:"�����M�o�L:��{�d��~Go�b�N�C�}�xV�#I4Rf>�o���z��K����)��B[XXs|"U�������G#�]FK�~ތh�3�މN�����y�9͙�iNZ��k/� ��d��*a?�٩�OD&7(t��duP#��P	~:`�o�-s��mqXX���Uݶ�Ӳ1h�[U�N+��)�l���*ɯ�D���<γ�~C�֮�6���^�����{m�a�#�g�	����5�!~6��/�3�v�cdml����\��~�լ�?��ux��
�b�������뢯�#�g O�m��YM�(���m�:�7��b#^%�� i:�ͱ����D��B,SAx���>���.��@�#{U�7�y|���_Y9I�n0�5��̤�C���*v�jy�͚z���H�������]��^�D^�kf��?�|ݔ�,��g�yb�����Ϫ׏,�i�0��E��K�'�->O���x�{�
�T�SL��J�u�l�T����/JU���CmP�ո��Oڸj�XnA���Vf�"i���ʎP?BF��X2�5���/��k���b��dfv��*����W�!7�/���
;A'�-^'���+#�P�4ŵ�#9�8���T��ѭH�K �E};�o�Q��L�܋i�I�KD]��N���.�/(I��������o��N<��	�g�辙�W�5����M���K�� �0���F���f����� O��}{C��P����VGP����Nlk�9�VC�w�?���?�w���xmu���%��뽘F ?��Iz>��)��O��s���8�>�IcQ�9{a�Ǻ�V��������3�B�}���@lժ��U����M����䝏��1�Ŏ}z�M�A�?(� ����MRG3�{j�Vg]���L�����������zQ�#A�.�CksGRm��Oy!����Kv�1mD�a�j|�9��r���XUS�RM���"<?<�32����.��|��;�8�;���H�L�VJN1"�Ŋ������R�X���^�<����g �
���[5��s'��Ж]�����]]]����G�G�kjjk��8�_�D��0���D*������"�O"��c�'Q���>dJ�8w
��o�)v�`��\4Z�k��S�:o���y1䢅|���ţ�?^__�Ԕf䯳U�7F������f9($�O�ZQJ��ÀI8��b&]����1yz.|��?a|�-�/E��C+�r����{s�Yݮ0�ͮHV<gO�7��N�M&}�1#�k|�[����"�>��A��+o�{�r�P��{�a�1����X3��}��I�y"��|Y����qY�$�^@�ȟ�����x�������'��kk������6�.�Ͼ�ft��mt{��ֽcc{[�;[
CQ�u���kV/Y�Z����h'��E�T���X|�e��_��.Y~�ԥ�--�o�:z���x�ų���TUՈ6Z��f����y�3�:�<=�)F�%|F��op�����Y�)��m� �'ʳ��6&�|�;��3��jy~�UX#�>֕r���S�?�`����C�Q�<��Dl8�����N�E<3�~��u�NR'�du����:�g��7��)o�Z�_Vx��l�o�Э����/����bSS�Z,���W���{�[x=w��id��!͑���q�jd�N���\s��isuq[��^�WeU���\����|[^�M)l���]��Ӧ!T>T�Y�h!B��a��9Nq"�,���$9��$6�oܚ�7�ҍ��׭��m�=���,��a!�>O=�	��K�2F^A��J���G���������,�M���8�i?��,�Ao ���4'�
{D��8� g���%1Ew�o�1�/������ϊcN�+p�e.N�ٻ�&���a��f��פz��4B���NA�J:o�2A�?��/��#���`r"�:/�{�4�=�b2��D4g~���Ō���dr�on�_�..�,���D�Ji�4|����9H�ی���_e�+({��`�X'���*���_)Q�U�=y9�������ˇ�/�}�l�T9O�Q�}��7�&�L$�tm��|����}���z�w����d�ԁKa7��\a�.�iu�AC��즬��,(*lil	�I[P��7?0��Y�'%E_Xh���B�k��J#ÆX��sO��q|C/u�A_&�x~=��YOP\�2Z"�!�D�CZۨ���[���s�;�ܒ������rȋ�';���+�mm\e����TTF��8W��l�R�c��P�5���k]�As]a�����>����
?���;��L�7����U#���a�Ϸ5���m�wY,������e_�/��?{��m�r�#۶�=��������4�Mþ%�g�n���J��ǗZjsC�W�(���:�gpPڳò�5�d�5/�-�T�uO:�������x�5ۺ&ݦ���j����64W՛;z��u�&|�k�d%� �[r�M,�uC�SR�C��)]�+µ���h��=����^ձ�=40��}G${c\�on	��JyW����^9��v��>��Y��7����d��f���F�@�w�X"����^��`����$�����ϊ�c�B~B��k}��ޖ�`�*�NԢ��o��y����M�M�l{�Y��E�G*��0/|�m�k����gX���J�l�T;)y~�r��U�y�E����V��Nz�[���@]�V�˾�{�e�o~umકiM=�z���xox��_��Ԇ���x�R��rO]�K؇^�j���(x-��m�$�9~��)�9u?z�!E���>�qk[��m�r���W��Z��x�֮��`o��H�9���ttx����59�V���1�n�S�hVGK��@[k8��@�F���h�@��d������i`��Y5��!��9n�3*V#�5�����x�_�ϝ�N��u�O����h_0G����F��^��5���mL�_���A'o���9�̟�}A�������[?�o��a�Ϸ���ׇ��p=yώ߽�ۭw�y�F#�v�@���A�n�ޏ�]B�B��g�p�if��|��Ԋ-�
�u,��_MT�y۠P�0(&>/�^�{+��B{��Hg�/3������^WS\ʡ�
ݸ"������f�O�&�s5�<h�)<-�\�D�S�mb�VS%�%u���&�U�4�ʕ&jI���(i��qt@�ck��*�ESA���)õ!���1�����e�n�U�-E%�M���@�V���J�zMzw;DD��n��II޾����5>ۇ�g�adΑ�\�B��1D̼${�0�L�lO͜
n2K9U�,�菎9l6ߦrG�H9����_F?��	|Ԙ�Iʧe.>�ϫ�rL��R�"�����zIG�L}*[ "�?�s.��D�Z�U�VT����e'��(K����|V�_I��W�k8c�:����Y�}kGM�Q�rѱ+�9�ʹ�d�!@2�%ρ�ϩd�[M�%���PI�����lF���+4
ŗ��$�[]���kI��_[b��j4�Z�L%z�U_b���PWR�+ԣq�9��a���Ӆ��?���s���H�Q$}W㾟��}�������G>�?}N]�|��Q�>&�I���[\����?��Y��(������G"M�����o��ї�p�#��w���!t9`�~��[;��ii�[�l�Cˡ����|o.��Nh� ��<�~B��a�t�=��������2��齷@��p���`c��`������g�ҷ�n�-���[�M�nB��D�)��E�����bW���k��{C�糾���${�;3�7�%��� s��sΜ93s��9�9p)x�af����-Н:��޼y--��i8���[��~��-]_)��IR[������i���z�f�=�y�!}�t@�4�-�|���mO�2c	[fj�}܋�s����A_�P� ��+D؅2���c���V�BM�z��b}���A$���U��\-���Cy�ӞAݴYF>��i5�x��̆Ҽ��J�Ŕ�mT%�ҭYs��l�Ŝ��	�Ҿ��5u%.��h�Z�&[mn�܊"��Uhw��M� ��_�T��V��pu�����g�u?�j��z~�v���~\�gyy�r�&8�rƧ��	9��
�qyً��L\5f{�+;�
,E>&��
���em�CE6G�/G[A�r�r�3�r.쓥�앻`�$I|������`g+�<��
�e����\IR��1L"��h+���c�2 mMԾo�����0��D���qy8��1�Q�Z��15��5C��U!(��8����x�(/P�"��	xbD|�ᘜ��x�;�~�n��ClW�Z����>l��(�j!�#>1s�-�=!�C>�1śƇm��z���ݛ�_���j�Z�<F���X�xR�P|�d�@,T�F�_���$�&jl�'�3��/(p�LI��ކ��}�!1ɔ`�s����`�b�J6�x;F��&�)�B}F�2x�x�HةBl��m�����+��X#��͔=��&��)���>������k�n�����uӼ��t����n4q� �l�q�l���i�4$q���N],�¨�F��՘r�%�D�[��%��������	O��	xٝH��p�k�Jq"7�|�/ٷ��B�(�Qe�����C�6�Z⻗0�J�r�T�y~
X��|)������P��s�{�	Hv����K�P<,
^��'�;Ш��w?S�p����qO�$����x�t��t p)���Jl��ץLR����%��&���2Y֫�D=�w0[�<��.�f�q(Z����Z��mW���@�ܶ�4��ɇ=�Ԝ�B �� M��H���h!��EO����l�����p�8�)]]�խ���@�ѝ11q'�SqZ�w�O+���Yb �%�\�9�sO��L�Kb��3ci���x%��x_�_˽��/�H=��(��e�0*���5��Q���W�����qǻ������a����杛������;���g�Hx��"�Y�h?�pz,9'^g��U���eU�~�(����/meg8�{ϱ��f8~p	��9~=�?LFS����֌.@T$�Eb}�f+[���{�3(	�l�l���O�q�`�ht4���Ɏk�l�5�k�n�/���������d�3���ٮY�ͽ�2��̜��rh.�xܪx,���!.�/Pf#*&E��/G�R�����p�{���/���?R�?���{.l���S4�>z4���3ѕ,�֩��qӦFwC��iӦ&wc��ԺS�##V�3<Lew-����V���1�-��Z4To=z��fVצ״;NR�#:���U���U>�w-���"�5Ӗ����vx��ry&��A��s)4�ʕ���XF�X�+�
��a��k�f%-������
gbm
��&�2�P���+����.�|�y�eMU^�
blK��?{I���y�ũr��i�G�Y/�fe��U�u+4jOJ�u�_O@>����Y��H���B��
]u��x�@����ӪR�햞$%J��lSF�����*q����23�9*� ��ˣ�x1N���0/֪X.�f�2aB� ���eP � Rh�m ��N��J���:��!@���吨��ʷ��>�4���u�r���5�7�n�i}r:ýE�x7�G�&�/k�&s�.ß��X\�Zc՛����t��Wo��`�KH����Ƙ�D�����xo�DB{Yh��I2���[�6̝����P��<�E��������x��5%��v+b����v����~i�Z��3�jN��lpn���ZU�j��Ly3��4��/ŞL�dO���d�<ϢPOf�;�p9c|���<F���#�C]�C��٘`�����m�(�a/�H��"����<y�4-~>f���Ƨ����Q����g��ER����+��+ì-�z�Y��oƐ�$� @�-�+�'z�^m����￿���K.��3������jC��~
t&�� ��?x qv��I0퇤ݻk�їd������g�}e�9�nH�?�i�B��=���U��xaV�{��y�_
Y[�#x%�	`=Y�m���Gk_�W�0�f+)ٵ��#!"5
�H��T�u�� �!�ws���7�*�M��*$��w�>�����ެ8,g<Z���A�[8܀/[�D�9ow7>�(�}�����#�4�'���J�p��ǖ�i��_����D�_���N����J�l2��V�����,�ѻw߹��Cr�.}t��e��H��	Z��M�޺z�.�1�Qy�1��k����A�GCy�>�����[��N�x���$���ȣ�!�-���㨯V#h/����N%!��n�;u�K�C��u�g݅4�u=����4l��Yf2`S���=�/�hu��������7G�9p?�V9=h�f�n۳gc0�"�o�B:È��o�p�_*���[����\�¹��o��g �܅�s指|b�dVhO���C�g�a�F����ڴ,�$��qxޔ�	~%�ّ��ll��H�q�+]Ȟy(x#)����ves[d�O������;E��ҽ?�,�7?�yE'�Z��`��W'�_8�7���X��Sv���T����#Նt��W�Rϐ��C!�8X�T#vOj�y�Yg'� Dmf�ͪa�n5�KB㮅�u�;�;/x���"A���4��C�CcM� hl����x�
���{oy���-��Һ��t�W��7.�x0�݅ ��@�?�$���0����ϱ�[��╪x8�q>N�l���<>�<��6�LO����#|��������Xe>D�F̆|8��ar��V�s13����0q�h����h�НHE=}v&e�}:�wPN�)���Z�hS�o��^fB����uy{<���Ï��
�����aJ|�a�0K{��]����z?)s�N �!�Ӂc'�mʊ3�ԡ��3}��L�%����|�/Ù6o55_�S���]�����6)k�DL�	T�w�{�'T�GmP��l���t����1��~�������c���T�ZG�V�CY�����[�� �}׌}H�T8d�#;�x��cx:u��$fyb-E�SH�'�?��8i2O��\��8��^�}J�P��~���C���y?*IOI�����������!WMR���˒����@E��coH\�<�?��:o�8?�D
��)B/�?K��	UhBA��i�=IS�f�'�$)��&o���z>c��C$�L�B4�r�g�yd�$UӴ9�Y�����?DbׇOL�r�%�tʹy
���?5^�����K�|�P�y��+t�U�/b|��< Ca������|�~>��I[�wð�zN$��y۱�I��Thx/��=��iĔ�z�	F�QTZ(Qf{��%�����	��ݭ�Z�i	&�8�ۉG�*��)�q�U��r g���_�\�+�\�;�������oD�y��Q��r��B�}�E[LF�p��/�E���^��b^�'"��QEU��Ud}k����L��)u�؃4L�.�q�,Πk���:��.�t9��~D~5��k\�NU�C�@�#�<�$���	U&ˏ��6��� .�7��B���&���c��|�q�맷��T��׺0Ζ�w���q�����qE�L�(}��F�H�*��|SY��g>f� uv�[�����)|�d��I��Iؽ����|\91�9�WQ\��xCb��/��4���h҅/�$��-��P��)�jS�Y�o��5Xe���u}r�U���۴A�/Ŧp�����d�L��I�1�&�],�T����BW�{��|C\2���]����3���&�Q9L�X���>1������U1PR����7!Q����j�**1)%��ˊ�a\n�9�N��r:�岕ɉ� �q�P~z��po�feaoZf�d�w���>9ΐ�S�"�D�x�>'
Ԭ��S��x��F�;s��/(#+�hZJRb�	����&3��I�+�|_H��й���X�\x�3xY�%�����pYH�t��Ӹ�6_�\)%�h��-rExijo�5�����P)��%y�?�+��*��J�Na����j%�*Q��Q�h����y�v"?�0F�zT�E�Y w�����:GJv�ؖ��IH�P�j*q��a��ν�T�ꕧGŗ����Ŝ�W�Ѧ�ͅZM�9Ƴ��z�'�`��b`ѢK�<K�N9E�����u�g\�-��Y�%�$�tK{z��zi��a�VF�l7a�Or;�V)��1;��M�D����(�[��p7�{�z�F�K9v|,�*�Պ�Mt� �,ML��L�f��"�^���M����+��|�����'Z�t'(�DcANimZ�9u���u#_<��5-Y�c��^5��քkZ�!��>��?�e�E���)��j�`;vҺ���I�:�DVKVO#+�z��'�jE�?�9Ъ�Ϭ�gΑ��TΨ��g�̊�����Kغ�F:��gVGᥛ�a$I�ĝZ��b�[lQX�X����yx�7�/�8����
�K����n@�XM�)6�L#��w��ɷZ��q"��KqI��2�-9[�ll�ժ�u��:��D;+��YZck)I��`��=I����?�L:�S���7�w���Sҳ�̩���kF�پ��5�[[��Eޅ����������K��j_{���ZG�̓Ye��Vw��~A��B�P9�����C���y��i��/�<M�O��i&���Ԇڬ�
�9���U27+!����xq�-c��v��Q�pG�?��TS�m��@rjL�P]ica���K-�rTj�PI�ܬg��
�*��W��3$���̺���[l����S*�P����
=��k�����[�ZGK'���x��8l�� JCg���D�[�
�9r7T�
ߴC�ΪPl������N�U/�J�����gQqa�oq�kq��?��o.I7z˺d���+�z����O/���W�X�I����z��c/iu��uk\eIYzCzr������K4��5X�6ے��4[��g*̳�����%�}'A�xAg����;;w�7�./_��Ϝl_V��q���5%v�UG��9zQM̒[FFnY¯��.\���}�����oYݴ����R��͝3��P�6@�n	�O�gq�U쳿�[>��ʚ�0����MM����3��[��S�����/۞��V\�z�Y�M?k¿泚*<=�A��70mr���/5�u윓���~,�������7�l�ٜ���:s���B"�&��p��N�[��+��0�	5k�Fj65��++{���@e巕h�,���k�XZ^�wK�k�Z\ �>~FS���Z�j��m��a�L�+������vWV���7�J�L��v�g���|�ɿ�o���Q'�u7�@�b�qMq�H8�E��	�5 �C/�w�_B-�?�~�2t���3��>
�c�n5�t5�+og�I�u�1����1P�WQhh���N��T�wH�7���Y�K�Qp���z�9}gl�3�y�ŗ��Z�U���ץ��0	�_�_�1�tI��vKyy��?�SP���xx?$;�@P{��mD+e��.X��r���u�V�L�b�-'�������f�]w�KO<��y�]�e����%�ד�����!�Τe��Y"�-Z0đ��!�F�Z?�}T^�q9�q3}y_|�/X�R����w�2�'$�!J����)�.ܶ-�#�����X���o�oOT���/���D�NԉHB��`�UWI��P#��(��?�r�D�G}�|�, 5U�[�7[��bR�`E>�����ܘ��Š��RUA�W_����M�G���n��#I[�Bp��k�#G����� �r@7���ʎy�er�h#�hs{�2=���-�li9[~����%%�������\:9��H���>�ٝ���f:旜(��_�H�L��������z�J�D݈�L��W��^���o�m6��ZI��p������ޱý�o`����q������k�ʡ�P��)ݼ���l��6UH"N�B����H=�E3�-�,-i�e��3�[1�ֺ��n�ERFk˂U�5g������umOGvJ��^R`2��z*��Om�4:jˬyY��ʞ*�@1�{O���8Zsp�9�Lgɳ��g�W������6UWo�[�˸(���\�ɑ�k��/�_�������̍7mY����~r���:��A#�	0�T���|R�e!��>V������q4�v%/�oZZѹ�zVti���g��8I��0)�)�7�_�о�����[<��ѕ�E%CU	ָ�����cGGraV^�릾-�7��u�JJ
?��211����~��W���Cd��* ��'��5[�H	�Ly�����
mn2�������m���UU�9Pt��=������\��}U�
��!I�v��rjd}L��7�Oq�=&b_��閁y���h��oI�y���9��	<ӌZf^�<W�[�0�^�t0�
�V!ߞl�w���i2�E	#s_�����y�&fv�)����Q+b�]�M5�{�U�*�F9���5Mttt���O���:�yE�}vr\ZqG�`��OD�)j���^�8��H����'y9�)�ǥ7&׫I*Ɍh�Y�z^��$S��A�t�@&I��۱�N�ظm��G4�j79�������wՇ���~=�ْ�qÍ�H�=��b�dN	������)g�\I���Q6(�k,�~-�λ�'Q$7܆[AC��k�QPH�L�J��in<$�x�Phެ]�8W&�)\��s8e壍O���̧sY(gh�DY�e���a�A�.���]ûVK�pB��� J��+�@���c�ͻW���툓~��5�w�(���3%8KzV�=dc�K��?��<�o�̅��1��7���	�&Ҍ�iRk�������sSt�zv����K
���,sZ���kEFڬd��XZ�5+��-�Vu�)��bi%�I�y��ꠞ�?lRC;��a����^��ҩe�C���b\
o�f�C+�~/��̒���m���n謅���o�w��Č�C{wC��|����nc�~"F�ȉ>��Nٙ�G�8*��kp8r�zRRz
r���������<s�NWg6gg����H7���y����y>W�'��y��<s\6�\6^p@���&�u���rD�Q�4��Y�����-��i�Ѻ�>���P[�wxwi's�kl`����V`�G0?�jڛۄ�t�%��������;Hk`����fq'�Ik��c���z�=M��Dp�}�s1n����V��E�DQ�K�}�aI�}�p�l�x�GoT�ɟQ�ڌ~[��@�>�����}μ��B����~ONu�rn�v��|&�hlv�d&&6��DgL�����(6��x4�����8r�y��׹z�=��]�*M^����%�3�]���-�å1�(���c����}�Y���%5��Y���V\:�P�mR��Gv�B�����P�p^_�O�ue�c��Cs���гz���5�X�7t��*g�9 6�o�޳cg�/.�k�¥NgyFF�Ӕ�fJNII����Srjj�)5-��WWI��rI%%]�9e���%EE�`�/��9��E��� h���|�s|���
�!�g�cj��0�{ض@޽ 2���"��(-9gfM��nwQ	��OI1񟼪������C ,=��MC�����]yy���<<���}�PS�`sa.m�MM��M����\��GB�$�){�< �C*_���^�1I"s�χ!N�lZ�¶3Yx��!���+�w���GJ^2/r/k��WV��%��/�7�1�5��ʄ1J��?������x�L�X1I%�Y	H`�wÌ�|zū�K�q�SpH��ց`���v��>�+���e��E�[Ob3;�"#|��˱eR�tM4;y�d��������S�Y�������X���[����X��F�[�J7�����[䧶����l��m�8���7����x�<h����2�g����;n۵��χ��o�mx���5|Ɣ$\M�9��f�U��t:�9a������coP����bS<q�ѭ����j1V�\�Ҕ�����̘�x�s�#�-���l�cv�� ��c޻�#�Yvn"MH�ӞOG����� �$Iw�Y���?`�����t�zᡚaY�v���R�8^��Z+=c�I�e�l̳+���(�sl'��uRS�&p:��z��*8�WVV�����o���%[��^m�ʗ���|;o��F��F[i-1ʨ
o},��f� I�(�ݧ7��x���>J�\�U��U6)�ƛn洓�Xe	k�X���e��|:�%�� .��t�;ʇ���Ң�o�ݣD0i��"�8�H�0Yr��X�v¢/|�	���q��#��9�Z�-]�@��d�8w`��a�(�H���#~9;�8���t	.\���1<A��H;l~�m/bn��	D�~� w���WG~%��I�T��77n��0yD>���A�vZy����2�XH�'�}�|��H��k�=*I�Ձ�[���.f1��U�i�� �����M̨.9pP>����HIq}$�)�G)�h:������Zh�,%a��;pY���2�p��N�*L�A��w���p;������V��)�de��
��r��͊�)Ǵ���!8��*��IJ�� ��{0��%���H>C�Ǥ��Q<p��ݼ�Z���W�c���2ԋ��k�W@�����-B��ٙ��vv���E�]]�;��w������ъ<��e��|w8!��w�߿��]��jۮ����^�\���v�En*����苙�S�`�6�&��l�W�p�#	}؇^�z5�֩r�託]����8G�_m��^�î��x�����
��-IHɕ�I���k⼳�n�ҍ���5�`�mː�=���ï�ge��y�)G[�֪7�����
�,�<a����P����oΌ6g�ώ+���4�����g��)��ܤ��S�ƴ$��o������ܢ*�VB}�Ao���b�%�q^��1O��\덎/�K��N1�vR���唘�[j�*ֻ"ɚ�j\_�d��c,�t�+���=*�o�����u`Ϟh���?�_�FEQ}�mAL�@>���;YK��=&4���"�nQ>F~+Q�t�I�S�9�.�u�8�-�b�/ż��H ��&��_�6��q❚b�(�7�@��Ȑ��}���`<h#y`t6"��Bt����� ۍ���4�|%d0�2�S��Q#G�D�H
 Ɨ|�Fhgt��d\:5wA�8=��[�����/q��W�6'4�}o;;��~N�~����	�!~��O����z��7L��N��B>��@_�DL��*��*&����L`q	�~9��2�$������d��cl-�__��B�����F�!���$�0.��4.}��^�U��$NR���|N�!��_>6��'�dq�� ����_����G�c���v�G/YL��\y��(�f�g8~yv�������E��?������x�NI��I4�������@��a��!�ɓ3!�)V�ߚ����n��m�c�N/�Ew>Y�0���:!!vv�����#`ٯ̇�1�d��M��Q���d)z��̓5�7hKӬ����+�:Կ����X6��V$h�+�Y4�Ma��l�D�h�wg�&e�)Y�|k�7Օ�z�=۔�V��(���4'5/��{!X���!��ׇt4��b�!�ٖ���S��\�#�$5g�+��Ֆ�(�~_BC�ӆ�'�,����TE�)�w��r�O��u��~Ma9�mfG�*�0!Y�&2Hi"��3��9�>+e�u'<�#�=!z��:h�ϼ��s�p�:��C|NeϬ,1�4���|N��J��s{frgϖ��F�yೝ=��Z�G��xdzr�n��f�_��]ߔ�_�t��r�~����t%�n%�nٰ�!~����+_b���n����eee��#hv�]�p����چ��?�QA�   9 d  x            x��0  �4��ζm۶�f۶m��m۶m� b� c��l ��!p���� ~P9��
���u���Z�(x���0,k�����Ip� _�iÜaѰbX7lvW���'��P\�eEQYT5Em�(4-B;�t=B��/�pj\��1�	�ã�|��_$�$&�IsҎ� '�+��֧1ډ���z�>�����e5YSֆ�`��"��ma�v�=a�.xr^�W��y�w�����o��9~�@(�PdyEI�A�#�qH���3�I�dB�V�EeEYW��d9BN���F�PDE*�ʬ�Ҫ�j�v�w:�ά��Һ�n�'�9���o*�����`��f�Y`֘Mf��eSڬ��-kkڦ���d��?N��.�+�*��.�:�~n��喹}�>�?^��>�/��n~�?�o�'���匚Fm�ѐhB4'Z�#���  �vϹ?x��Am۶m۶m۶m����t���M�1���Q2D��2���7�&��h5�����0.���x(����x+>����)�H� �M���%I���d-�I����%�J��d�P�֥-iW:���3�R���'�U��!f0`�YqV��f�Yg֟�f��f��=f��o��#np�yq^���yw>����r����DEQS�]�h�X��]�RAJ}��2_٫�T�+��2�DRJG�,-�ˑr��.�˟��V��c���{M�<��6^��-�Vk��tz~��>S�nd6�}���Q���La�6��%͊f]s���\i~�<+�Uܪmu�Z+���A�څ��vu��=Оoﶯ����O'����NM��3�Y�u>�)\p+�=ݍ�}��Ǽ�^E����k�-�N��2�Z�vƮ����/�7�����e�����8A�h�3X�IX>l��?��Q�hdt=z��~B"H���BY�	M�#�0�Z�	G�b���o �� ��j۶1F�k���m۶m۶m۶m�ޫT�Җ��+ש��J�*-�<#:��;�3��LMf%�%�ʤ@6!{�+�gTr��:Pè3t���U�݉Go�/ѿ�i�`�0��u�.��M��f˲�Ǯb����G�;����ș\?n7�[��������|Q����������/!��S(.�,�	��KbF��H�~���.�q��J�&���@rPp@q�@�t }��
���#)���i��M:"]�>H�2�k�#�m����[��z�0e�rIy��W�j?u�zM����\��6Jۦ=���@o�O�?���s�u'�� �x���Jj�z��K���9�$"-"}"�"7"/�٣\�NtHt_�N,g�Al]�M�ŧ�i���n�F-c�1��a�1���&a�1��[�V~K��Ym�a�"뉝�nd_�_�?��NIGwj8]�	�瘛���2nw�����s�_���Ž:^+��7�[���.yϒR&qI`2��!�.�;�p\��3�|���(;*�*"�LTuCs�1t�C��7\�1p/<��,���.|��-���D�D��h��Dw   xc`d```46��9�o󕁙�<R��Њ�O���b��30�DBS�   x���$y��۶*kL�����k���l38۶m��ٶ�sp6�=�%y�Kuz��'�W��.�9[Ƕv���r��"���� ���Į�rh�&hU�0���]E��B�y�<� �̈0�)����5��9�q]�y���1B������c�ٯc��
�E6��(O>�)�+�C���-��g�֭]1;FH�0�X�@�Z9��%+\chk,����� ;b�j[A���ϳ�DĽL"4�k�����v͇��h@%B�}�'Ii��M��#T>#҆a�1�3?�n�3�a��.��Y�k�j�%��Q��t��t�������Ș�FldT ���*ià�$B��cҢ�)BLH�@����C:���+���I�!Va���"�����Q�j7�lX����׬csP�)ҨXg{���Z97�͸��ƜSx�sdI�sJَN���Ύ��̒R��ȯ�{����ffO�x�|s#�}��e�ﲌ�|c�O�x\�1�+Q�n���_��ov�b܂K���m8w�f<��p;������0��\�+�Vo�<��p������\����q��	��\�p��zT1[��>���}�xt�-���_}�?33����L~2�<�o�_É8
'���1󮖢ݘ� ��#u���k���|)���F!JG0��r�Շ!4�?i9Z1��X������`Ԡ����P�.�jmHuB��CǢ�R'��j�1�Ϝ�$P�	��W+1,�_��E�3�\c���'�8�s-����b��k��q6n�w�x��J��^׺����92��:G����L��|�|�z�S�h�o   xc`d``��_�!�{��S�x���"(�Y ��ixc`a��8�������)����B3�11r2 ��L�����Â�}0(���<�
C
�F&�� 9&!�c@J�� �T7  xl��1�d�mO���^��նm۶m۶m�v���m�;͙�(N�!�$��x�7N���!l/*v��C�P�{�\8�⢸<����ix&��_IAR��@: ��KĞ8O�'�I4YD6�C�88C � DB4��P
�A+�}`̃E�
v�>8��<�'�
>���<F^*��ȿ�7�2U����HZ����� :�n���nz�av̏)�k��%l#����g�")����*��K)�4W��Bu�tWUgU��W_s�%�̽y0����#��̯�#aa~a��&��4M�P�
��h+��yq.�K���z���T�O�8+�'�����4\!T�(���4������\X+a+셃	��/ὐ��p!qX�,��^ԟS� A$H����I�
�Z��.$6��l{�"�F��N� �$$���U-Eb'��������+$�ü�ĤD	�e�ldJ*-��E�Q�4�N�O���Z�f�fB"�*���x:��3�2�����ר���tb�R(��i�fb�6�7��8K����bq�ؘ�ѓ2��*���b�f;�����h?a�o�l�hJ��85�Bq�3v��l��_PJa{�,_����r�B[��>3ٶm۶m۶��g۶m׳�m�vo_�⁠����h�v� [c�l��dG�4�g�^�wx/�弚��^Y����n�=��������~�/�e�ק_�����&�C�O�� @ ���n]�+>��y���|�>�;��㤟���=~�! ������f;n�������v[F+i,�e������-���Eh"�$$%i�JrS���"��B�ӄ�t�+��c�,�U�?��'f��RV�������0�8�.q�{�籤@
�p��(�el�U��-�e����6�.[fs=��SYka�|Om��Wo<��9���X8������,Ap��'$�M4b���%�BQJS�������-iJsZНJ�Lfs��l沈��bk�����_X��q�+���㦂+��*��rW�	�L0�`�"�b"���,$ˈ�rⰁX�#.��j���Dl#�H�NR��T�#�����d�G�s�\%���I�r����g)�y
s�b\�,7(�u*p��<�:���Cj�:<�6Ϩ�S) �4��Nah��4S�*4��6
E'E���ѓ��Mť�����`��NN�P�4V@O��=���D���z*O��=�G��ãz8��<�GQ�TUVwuSO�RouQW�Q}�T�WUT%USu�Rm�Q]�S+�V[�Q;�WguRG�P_��M�L-�2��r��*��Z��f��NM�d��Xm�Fm�Vm�zm�v��-�j�n�C{�O�տ�OU4NU5^��~�G?��Q��O��~�@��A�U�����ӟ��4BH�n�(�ΊH<6�K1識�̚[#kbM��-���V�=�3;o'�����v�.�);c����_�g[gkl�������v@�F��qY�j���հ�V��[5�nu��5��P��o��'xL�%T%P������ww�$a}-���y�hC2�hO�@�q�k��i߱}�:���1d�l��%;ک�=��x�dD�Q��`�K9Ș�ô�C9�d����o>)s�j�W6�?�Rd�Y�H�Pg�d/!;$�(����]���59H��!��&`��E��%�<r���d�&9A�떓Dܜ�z���iRnI�z�o��Oޓs��/�>�T�#˝�����<��^��g��c!d��J�9��e�>�+3s�Ò�ɍ{�~�"���L��dt�T	����"Y���E�j��O�h���O-��=S�pԝn~�s�g�L5t�5��N�V���(�}�6L�H�-
7jɝ8/3�A�9r��̇;u_-�UY����.��|��-�!�u��,޲����R�d��~��5uh�]-�
�[
���c�n�G�:l������%�K��C��	�¡��������8�D��o�D��0[����ߙ���`,U��WL��d����\�;�<���䛯EK�W���U���3�H�<ന�1;b%�	�*�   xl�Â  gv�m��m�X��}B���{��s�9��{3C ���$	�g��C�0�+4p�q���#�~��&'8�P'9������rݩ�p�ӝ�Lೳ���:��D���Dq�[��+w\�b��R��rW�JW��g���D��$p�{���C9�E.��G�H6�p#H1�|3�hcH5�8�M ��&�6�d�)��F:��a�Yd��{��l��d��+�-��"�-��2˭��*����:�]�z7��Mnv�[��v�hw�;餋w���9K1%�z��^JmP�QF��0h�6�b�m�S�����.����^���	C�0j?�8��;�(5���Z�{��<��zy�#�y���AAQ  �݊ �> ����8A`&F�
U�[��q&ΓI�v쒲Ǖ�}D��:rL���N�9w�,9W�ݸ%O��;.�=P�ȟ x��    �s�d۶m�ھ��5�נQ�f-Z�iסS�n=z��7`Аa#F�7aҔi3f͙�`ђe+V�Y�aӖm;v��A�}9v�ԙs.]�v�֝{=y��՛w>}	}����KHJI����+(*)������� x@�  6��X��m�6�ţ��^��(S�B�*�jԪS�A�&�Z�JJI����+(*iӮC�.�z���o��!�F�3n¤)�f̚3o��%�V�Z�næ-�v�ڳ���#�N�:s�¥+���&���td"��G!�Qr�ν��<{�ꇟ~�폿�y��ç����  @ᳳ욑�#�G����k۶mg۶������/�s=_��7���nq����w����q����z����2�C3�Fe�1�g�	&�d�)��f�f�e63��l�P��X@!C�3��1�%�g�Zd�%�2�F�Xn���JV����[a�UV[c�u��`�M6��0#4�B+mTPI/}�e���f�v�e�=��g�:�#�z�����=�Y�y�^�����U�y�������]�y�>���}�S���,d"�E�/�&�W�f/b�7������G?��z������ �T���3�8�3��I��5��D��I&���/&0�o����'.� �  ~=�����~���	N�wE,Y�b՚u6mٶcמ}9v�ԙs.]Eϵ���{��ɳ�޼���˷	I)iY9yE%eU5���8�щY��7F1�AcsM-�d�Gw�0��oM\���<#������zS��K�=Jگ_3��DNL/b�ymQ[�8̞b�"�,���bi͞�G�5��(�����n��'�o��:J���0��+�Q�O�8j^�-��p*��w�|Am�{���~Y�\�5��*�ź��������-�P�9�6p���Z�y|�?����}Tm�����D�Y*��Q�9�ȺҬ�A��^�l������@d�uF���/�����j_U�3gLkMx�z�\kiC�bfp���yct�Q��к�nb?����;jxW6�~��e,?�;//�~(���&fo���x4^6���]v��Ng���:\�&I�o�3�Lo��zT`?��}��vh��Pi��@Nu��f���긽0b�-n����Z��~Xq��֍�ޙ�Y�Ѭ���A�$rK��-��F�[��&%!(��'U�4\҅&���{������79���|����c�W}��wI�z#�rHP���D�7��p
t(�5ԡ����@$RP��P� !F�/PN�ic���S�9dcft�Ժ��1C3���j�Z��J0�k0��0N��`��¸P0.*0E~K�-F�؜u\�t�I����R"E���B+����*�G�a� L�郰� ��i�0}���A�6� ��l:+��P�Q�I ��-a"���閦��:���Y�T��U��mD�;U鲑�P>��C�p޼��`�w�QzǓ�%>i���K�<�����x�������{a�{���c�-:��`5��1h�M��`�&͠;��pKgТC/͢F̘�`�f�;6i*6���t�t�4N�g����	�l��&lr9�\.�Zt�e�j������	3�2N�у�8p��-�A����1cU�M��d��0b�a�	3�2,�2:�<v�=FY3v�<n�-z����rV�<V܇����n�ҷz��Κ�d��ɜf,X�aǁדa5�Zt�1`ĄY>�a^˭�0�~6=q��~�Q/����xTxl͑%J�O�+�W:r�'� (��z�ɋ�U��Q�k��T��f�lϛ�x��>���y-D	C����ڠ���` �D�֯����;�z� �g�`��ߊrM�+�M��&q��tl��!Uď�]��']�|�����0f:��iN�L%���uK��^ȼ����V����q�7��*��	#��n��^�M^��G"�r��.O�7.���)�w��u�)�}��#sݗ��Oi%�?����X���MV�x�L`r��lð�����p�EG�Z��7�BE��&g�:��sV="s&릳^�Cz_{�R�{�sN�l#�n�&�9� g`�8t�/�t�si��I,{���E)��֝��˃�:닻�c����wˍ	L��V�{�GM�\#r���x���H���O��W��&�h6�>�����Y�	\��:�}��U���{F�稛G]��n7��,(x5�>��y�TLQ���ˡ��@oz������)�.��U�p���@���Щ%�v�I�7a)�����Ķ�#��x��?{]zG�B���|�tW�T��������iUfPqұl�1W�-�@�8_".�fy/+e�.��8�)Z��C��!��z����C�T�j���(��������9P<R��ٞ`���^��g!8#Fh�6�\���y�R4���0�9^�~���(_Wos��@����>�K��:fӤaTQ�|�]{R��M[8��F�Y	��}p�I4� �M�{~����w�>�� �O��KZ풓�
E=���wq�@��9聳��Y�C4�ayW`w��Q�힣B�4A�txЯC��J��9��yR�駹�{6�ƿ��>�� �Ы   x%̱Aa �/?  �@z��@0�ރ2I�cE�ut���Ɇܩ� ~]IORO�,IS��5�"/�N��"��(�πڂ3��3� UP�x$��0 @�פ�m۶��ٶm۶m۶m���  F ��8'����@NPT5A3�	����aQX	ւ�`g8 ��{��Y�CyQT5E]� 4��WƵq����l���#9HQR�4%�H?2�L'K���<$�(�	hZ�����icڞ����Ez���b�Yw6�Mds�J���x��v�B�
Oƛ�.| ˿!O��E1Q�KĆ?^O�k�C
U&��d.Y\���9U.���.yS~TXYG�P�UqUEUS�U/5L�U��5�X�ׅty]]7�t_=LO֋�F�O��M�H��_2��l��af��i��f��oN�K�Z�E�'�>��O���GmR��v���d�Ȯ���i{˾�/]��u�\��mu�,A�`F�4��nO��!
E5L�s�uÖ�o���n   `m'{�*��Q۶m�6j۶m۶m[{�����q��[�s�3��7���:~����!��=� 0���p%�r���wB!��0\/���i��"u����O0	� ,k�����1p\7���� ���(Pn�u@}�4�A[�t]fo�g�.�k�f��x&^����$�D�Hv���"�H#ҎL&��.yI��䔧
�hnZ�V�hsڎv��:�Α�Iy���i��\�+}�>ȉ䌲-O�7�/�DJz%[�	;*���U壚F��Rj_u��"�3Е���"�Vpv�FH	��	k��.���m��H��%#�"�#����u����������؟Zj��FiK�5�f��v[O���Bl������N����0�ZFGc�q��`�3'��-�5����Y�l��o?s�;��� g���y����vu�ݗ���������?���'আ �f۶]g�:k���˶m۶m۶m�\ˮ�jxj,�qHC|���_�H�Zꆚ������V������������1ư�ҟ���*��6�Ι��ۚG��XXuMKG��:�kZki+g�%�2C��r���0���Såa�µ��p'����TU�����lE� W��hf� ZM���wX,7V��!��-�v���x/|>_���O��GD*"#Q��/�M�~�Q�Tb���F"�)�|��t��ɓ�
���X�)ՑN��.�yh�nB��Ч��Ĵg�0+�۶6�6Ƕ�vߞݎ�{7�J�cG���ɱ�	�r�n��k{�{Zy�{���G����?(P&0!���m��v{��þ
f6
��	^��qչ6�h�"o�g�/C�C�B���}���;��##U"�H�H�������(�����"���a��Tq]|���	-��da�p^x%�Q���L<*>��K@�$�R/�����re���r]��<^^!���O�2'�Oz�5H�����8�:����`�v�3๒E�*5�i�e�rB9�Ț�������C�3է��{WXK�`U'�Z��J���d8�w<��arڜs�}���F������/�����I���1`Y!�$Z����S؃%�w��7��Nu�S'���f)$� �(�F�2h�_��l��&e:�V��_��>P7�!E���+2���(;,���,���,��Y�)��4����^z�ۥ��b*�f����H<i�(�7{�������"��cU�޵ܵj/~Z���g��T�C��͛i����_�V���Ynٟ�@��L-?����.�P�	�j�\VO�ټ�i+�LNNz��2垚�r���9%.0�UH)���[eJ����*���I&��F��v�>����Ç��`PMd1,�0<�Z-��k55�;�T*5=�g����E�����0��
�0��F�Bq�j���?}�t�NyF�uJ�e0�3�aYK߭[��Tژ���-W�D�a?u�����:�+�`J+K��� �M3�ɮ�X�A�Ed�}G����gô�N�#�1��9GZ���L8�>V{�(�P�
�R6R)���~��|�đG8��� lk~^�n ��e���`<e�f�9*�Op0<=�F�2����סeAdI�87������[|>�&�E��&�x3��ѣ4
��h�+��Қ́0Tı�"�Ֆ�%�2���n�K�e��ӭu�֭)-��5��f�z�Z��Z:o�tl=�]�=��}ۥ�]I�������@��	���k�n���h{�.:V�Z*�t�����ң��Uq`Vt��zX$��������=����L������n~M�6��`�9+������d ��AY�^/�[ZZJ��i��Aպ�OE��}3:5�:���"$
�V]^�6�E���xQ6�}&j��ݸ�5�5hY\4QOO&�Ykw?��G�b(��(Ɔ�����Y0�@,&[�ša�&b��P]�K��`�TN�؄1��e*6H���&喼�6�(�8P�x@��\X�uAP�F����	���݄�6��1d�-�R�(S��ʛ���U6to�I�.5�y�
���-a�3"h��K�t4d�+鍍�t�漑M��hZUi�]��l�x�6q/�n��w[t(��W�5�&�+ÄB��@g������~����.��Y�Fh�B�L��+���#����[E�0(�A�i�l֐i���>��~��"䔒Il�b�<�LJ�L��,��B,&$���ћ�WW%iu�����,4;$ɡ����b��%N�xђ4T�ʸ��d�>�=�,��t��)�������,�z�@؇3h�!bw5!"h��"Z�F]����0��x�C��u�0�!��h^VW���0L���<E�@9��]l¥k%탙0}��� @�r���q`�^��ԛ\�#3��c�|M'�[BCE���Ҋv�h��mUde6����7��R�
PTFE�[h���	VҢ_p��E5���˚r��>|��7NA��xz�m���i�,i���߀�n^��v����l|�e�訡��?W�Z���1��ַ̾>�<`���:"��� �H?Sŏ�e�
��7��K>��(�gP��m�|E�������O�g�3��������|!�p���'Mq�����@ªI䔳M9�	��`t�B��;ۻ�Tڢ9�z��S>� �I��իWUUE�WVƃu���w�4�Z�ϵ��-���_Y/�v�E������a�E,)T�H�"�؀"R�@�o�s�����u�2�s~���!bi�MKS��k�@��D��*�n5�\��_F]0�\��вszЎ�6��<C�A0��_z��҂k_Qv���X �i{��ޅ�X�1��_s��W����z#�%�qiwm������_���Z���0�����ډi~�E����yB�^Y�8�[Q�"��wP?,�m��C%���6a�i���R ��Bamm� B4cP�)���V�a�F�t��(d4d�l�_		SS�ey���d&&��o<��$j:t�&���s%Cӌ��dd�s��A9r����/K!0�"
�zp�Y�)qK9{��^]]�y�qB%��:�0T�#|J���P��fOO�b��{sst������	|�z���J�>~��J6+�g����7�u�H�I+�$X�]���d��wO#���^4��S� �>&\��b����ɓ���А$������An}�[+/�,�u8��� Hd~Wa:���"/BqX�:��K�W�2������499�F�Z�T��&3�t2��y�o������:�7�U��HK�Bw�e��"4Ͱ����j�`���+!���䱮����xL�3���k���/�e�G�J�l����iW �w�<�t��y��$�"U��Nr%]7�E��߼9(T3��߿����L�K[D����o޼9�d�6�d
���3?�(����S�F\2�Z��%¡f06��벱�����:r��Nr���嘵��l�_.�Ѩ׿x�-@)ա�=����߮�����������L�O��M�;� W2%{0ԓ"��QX8���G�p���3+ y��X,������(����ttP��F�I�b'u�TY�L�(u�G+�P����)�^�N$��.&�e<$�7��./��ڲ����2�
j�˘�Il�d���f�:��Gu���=(ղ��s����q^�����W�����Y�����׍�K���P�oh�Ê���?�hw(���)����k�f��٬�'�����a��>	��IR|�x6��Aer�oTx�BFI�T�]���_'~sB� �Ex���͘�X��%���m%3���ǥs:� ,��ϡ/��#���m�G���?I:�
�Ȯ6<��|�7���|��!Lt.+��y��?�> �N������O��T�.s!��&����.�C����].ϩ��d�,�Q�{�v��P
y)�0���A���67��� |��8�Y���d�'
����G@P��)���g9��^�k�
;�����׮a�U;+��U�ކ"�N*���t*�+����^�yK���W�S�;F��u�N�.��Nt�LD�L����m�f��0�i�t�%��ѣs�^QR'�R�G�%��5Zj�v�U��V�b�A��C:�������h�+�2Es$�@G����⒕o���BM�j�����=�hT?{#��l��� u�M:�Y���w�r8ٶ�U��}L%���LQ:�YY96�W��V�$U>Jd\N���p1/F^���lQ(��wj6muݺ�t]^�MD�Z�Xf\����O_�x��.�j�u���}��������d5� ﰒ���੏ib�Pf�^)�x���c��F��x�����̳e���GGV'�BX�����S��P�g+�p�ud�ź�z��`k�U:.V��l��i3�	7Г34�����(�V>.��K�aa��Jǩ=Ƣ�0��a�D9�}�ñVk6Uč|\�H���ϖ(ѹ��zx�"�f�l�>�|]����1S.�Gj�I��{�g�q_���Ҏ�kh+8��1��[�h�����˥"ؔ�R���VJCKZ�ı��S�9g_8B>�̀�ԍ�%�f��G�a�ی���_���y�gxx��.B���X-Nb�q,�e��Ė�쬲.�Y�����B}������B67u�<Y����l�
��p������"�?�����+峐,U��H'��J����ˀ�	a��O�Ȧ�w`�"�����$c���0�� ���)�é�v�_>���t:lV�@+���B>B6���ŋ<��(xﾂgb�}aCE�  ����Yd+�aT�{۫�뒴�bu{��Z__O��?�0�o��8-
(!8�A[%��Ă3���ؽ!����T���kmE�߲ࡅ�?^(a�łK٣���pxk{�(˝���ZB�����M��o�� ��Bh�#��`����!�v��YSWs�\�f:�4]�)HNAd���P��D�(��cZt����\�1�tlyq���z�w*����-���cJ���'?�ɋ�kzz�UT���P�^]A����d��h�<+�Ɯ�����g/5��Uz�x��a��5A��<�a��5��V/�\'�o!�/V��W��S����x�hy�/�J]gA�Mx���gv�꞉kKʬh��2M?��`�d��" R�����Xi��Tܦ����i}C#���:izsT�=��޳__��_i�Q�NB�A꿯O !w�3���Q�Ϲ��
��E���I���F�U�w(3A��8��#�k:}��N�|8���6O���B�t:]���p��K�2$� ��R4ed�ˁo�QT��e���Gn�Ś����#�Z���o����E(;�{9��������E
֒��O�k�-�^��l��7pn0_���F��8EA������k�@�[$�tԹ��� )�p��=�~�3��#�Ӛ�~M���B��g�-tz|򪯶� ���F╩��K?��J��Ń���ߵk�$Cq�j�z\�������ȔH�">~�hnE��wO��S��NH*����p d	.�UЫ��G���2�	���W�(n� w�hI򶉂�?��r�G}��׮�D"�����5��G1
�P�8�e��z�����<\��O D�(F�(�[��ރ�t �詌&_�=�{RgYM"au�W��8O;�!p�m��^?��Q9�s�9A�l���ٛ�]泜[oFj�m1�w�ǻ�`�

M�)�:הI���d�� R�g�=]�Sx�����8ݒI�n{U�6���gpw�NqU����Td�XFy�T4�!�<��h4����CT�B�{��R/i)]�8�0T�qo�va	���^)��$I�8v���ӧ	��~:�=�!�������B�N�8�"S��m+�w�agI���3� �<�!��ۃ����o}��� ����$�D�{�����_ñ/�����]�Z�O�$9.�X\���i}?B���������ݣ\.{��4(�uWlb����mw���v)Ng��sql2�E�{X*�9�K���Y��{���P�t�xR�=p����BCCCY�%+�"�9~���"�A��o�ַ���l$����z�4�m�����x��R��s�$睟I���+Ѡ���c����r�$�	2� ���Q�مCN�/���ٴ�9w��*���Nx��I�js���h��:�`h��F����rZ}>��w�����B=�H��,�U�$��\�	s�<X����g[� �+{��(��.�������t�
����m�s�6d��-��v�-������%�~���#��E�/�So��?���ȩ�)�m�s���߄��6B��n��42�jeu%M{�o4��a��k��-8έ�	��CN�0���_Luv�[��x+Q({�Q	��=H@�,������)����v(�P�xj�b8D�1e00ˌ������d5$ط�=�!����k��4�=���.�މ	���<��߻VV��R��}�~�ԓ�5"L&Ԋ�d�%�����8c�Q��}7?�:�k�M(�ۅ��i�7��:H�18<v�����F��r^�Ӹ���@�/�FC�h�
���U���Xi�����_����]�����X�+z���������qM��ÁD�����2�,���n��L��xK�ڹ� n_�ꈼ"��������"q���<�<�h�e�I���Y�*�Jo�`E� Ed0g�ጉU���W؛>��������z6����6��lVj��bH�q�QX�e���������JÔ$��%M\M�%r���{��F�l+��*�K�-����g n�X��4�C��QI� s��YS���A����%P}7�QV������xl<O�=�`��*�ͳ��q�X�$& ���kd �+j�Ԕ��H��
�3���m���#9? {E����zC7&�z�F,�S�w���l"���3:�B�6Yhv�'5:HY����b����#L��
��fa�'0a_+��l�8<>>Ϋ8000�U��@������.�T.��u�E��|{Y>4=������z�AO__�>�#`p�4�Cl�${c�f���֖�W������.�պnƉ��q���ϟ�44��s���SO����� M�:%Kh�jRf�מ�S����˗�P�G�*M�z�w5�ӓoP�x�e���&&h�Mb��\L�g�HM���h�[�z�m��u=�E�s\��DFY���x�HN2��>��_�L�lǺ�\nh 4�)s�v�S�>1!���Al�R��e��ŗ{�k��T�{/,5�L�L:G-��Sp������.p�#���"�׻�Kw^���\dEv�1EF�>粣hU�T�]�'�W^J��3��oh1�o���S�I��D��-B9J
�O�?�C����$�ZI�n���C��pjko�)���au&l;��r_�S��B$�G �e4�	��~.6oڥ���=��*gnJ�
�'c��̵~���ff�\����u�NBV��� �A��y��.��w���.����\�;��|e��>�D3O��o9�<�䆰1�q|�2}��TMu�ߺ�$r�� >����چGz(�A�iA&�9+Ii05Џ'��&i�3��{h� ��CN��"-�s�C���I޻�Yx��]�W�3�b��̤�O��*H�fZ����s�x�h=O�Y����*d��8wX,��:�)W�w������.c�mÚ����p�W=9�-��Q �"�w�G�\9=�r%�t0Z���)����`rYX�ح߃C�l�:{.���]��H��L�����ӧ6ۓ'k;ŗϞ={Yd�o߾�'i���,4�~*n�����1�\��w�fHBv�ḿ:���dZ�_�������w������e���TL�B9�-KŢz�pMf֞����i�B	K�7g�	�̌NLB+؛o�/ܞg�X�8�P��\���Us��_U�
Gb,��Z��?�y�lww�J��r�B�
G�,�}Mmqd܅K* �-��5#R!��c�.'@u��]�o�.���"�Ŏ�����K��V�j� S��|�uX�%Z��P�F$����7��7�y(g�J�lZ�~�����O� �C&��^-�Բ�{(�c��6m^��iZ6���e7˙�M�Z�Ы�b�l�u�,�B�7��r��k�P�#N���at��겇�)�vA!�:���b�W7�n��|� �7����	F���-�t�a�8�MC���L7D;�fnmM���b�]��Y�N�T%_����_G!���t����6�N<~c����~vVw�Į�W�x��I��5�#1����4��G���{� j��I���fYXZB��}�U��9襵7n��M�����X�dq/��n��pa��e0��N�����s��A/!�ӳgnx�9�%ώax�	��o��Uס\����]����t��!��H˘�;���Lz�ˇ��x������d���1�=]R�Wu{J�SS	njiijzj�����Y�����D��?�{!d��O�۷�)C?���y��ލ�.\4�v��G��ս���V߿}��!z\+�Y��!�o��ъ8 ����Άp�f�!�����|�5�0I����������f2�e���t�h��	��4h�6|�1j��Pa.֭��?^���/_L����YQ�6���j���((rD�����+^K=>'�R�d�m���4�^�YG[X�����������DA@A��3�D�1+������$��j�Z̒���A'��$;;3����q�R�3������������q3[�����W;�d��*)���.�W����W�Z��E���H7u�I9�ߢV%z�+�%%��*�ӈX�
���T05}�i��Y�ʓz�1e��A����z3�b1���J���������ɍ�������s=M�>�\v����_���jnv~���9Q���I�?x�x���ke��r��߰Wc)P�����SB��	��=��կi���S�7N��������J�V��Caz��Π�WR=�S�q4����Vke�1�^�*����X2���3f<�=�nli�9�0�'�"L{�o<���k�
�?HT3D^�(g�b�:cܾm��jB����V�lx��<g�R�������Ɵ;���r9KZ�%��ס*���*ξ�H~X�zC�*�DXN<@}1��)���t+���P˄�.o&�j��c�#\5˓S�b�m������õ��w��[���JnD�����MŏVWȹ��#G{Nk�N�E��A�
����s�j������p���>B�E�<�#���ӧ��*���U�^3Cu�����D�!~t�#�@3�f{����c{�ݞ�Ѥ�K��G�큡u��m�t��N�>�.X֘��gMp�=���5�;9yd����޲��f��-�=f~���4`bӗ�_�����~���-�!�����vQ���ƍ7��	����B�ɿ�w���@O���
��0�G�¹so~�J�p�G�l���׾v��c+]f|<s�O%UU%�'�NU�0v֪���ul,f�ټ��f�|pq�؞<Ζ�Ɣ�6Ɯ���q��ƴ�rm��:U�Q띢Ь�6Rߍ&�����wd�H���SCI�C�d��������Zkʇ�Xkz�ƠWn�F�d��8�7�v��P�'��0
"����/�ElU���Rߴ�r�N��+r�����9
u�(NN�f�Ws(@�`�z��7,~4�n[wa��dc�d�O��L� P�@j-�Ee:��]�N�c����T~������%P�KA�~�c%E�n�M<��\�e!_�#.0a�XR`(e�
ʲ�(�F��fqZ��x
�9l!٧�����
����Rʱ��_η����n�c�ţh([�T�|�}d��>7S�׎�����(�Da�Mn��E!#�^�\��>}�B�����2�r��R��re��0Cr�T�d�;,�Oc�z�-as{E3aE���q��B�
���WF!=(�����|a7[�p����<F�,<~�����{�� !#Ep��\�fr�!��;QaM7(�6��o�������+
�D�
Q�ݬun���2�v6�2�Qs9a�bK�?`�E��B�G�Kw�.ɗ�]�<��MzcO�?��&I�M��H#�Z��a���H��vt` y�PXĪ`��lc��+Ef���n;u�� OR-g������^zi X�@���lN�;�TJ�y>��C$d���Τ#����k�tw��Ī���ƍ��?������9�R������~{���<�9�A�,	\f�>�,��߿��c
w��&��aZ�W�����p�Ą86f�9pd\�88+-�k[*i�UןK�:�D��; dA�vle�/l/��l����s�TI��+Y��	�"6E�w�+�9c{���9�b���ȝ۫�.\$ԩQ�(^$wk�������W%]�tM:���?�ݛ���0wK�����7o�>n�?@("!/$�-`*�LUT��D��`7����?�x�?;�����X_�O�z��`O�� B�|�U�����q�]]��M�&K[�:tv�c>�Գ�w�=�����_W��tjc}uu�ݟ)��e:���;q�����Z-6��$�����+��������Kn��Ռ),6� ���__�F��G�-n�i��u�J_�����X.7Vz��=��y�$��)����l���3�5�o���w��x
��^����g��1�[��_�ņ.���W�a5���ݝ�����O����vro�-����:�.��Ձ��?�+�C�;Ha�{�,�{�ޛBj,%�Y�G��&�痗��.�)���@f�eYp8���������;��vٌu��Y�nm��>���-�o�҄��ǎw�/0*��煉с������[�N_h�W{.�J������j,�a��agm����v���f^���v�溭}��PDB���L�w��䳬�/nm]��!oRՕ���5@9�����4���
`Qf�������7׶?��`�ɖ.puЎ'x&@a'=���e�K[���I���6�<����ǏV�� �a���,���1�B%�]�F�(�����m��·/�8M��8�*_ڂ��f�n���̠�ܯ�|6�&�� ��
;[���n�G���!��Ga�~Pl�G2�W[��Ex*r��}+p��I ��	�F��ӻ���$3��j:��z�DbH�/��P ������;��x��W��p��~�մfi��M6��q|-�8�����E7�E�Rn����1H�����a� R6/�����޼�<Wڑ'w����ER�Y�<��'��&KE�� ��?�
L��������J�yi����v =��4`.����ң�G�f6��q�X��xl�s��4�,/�����5���>x�95�w��W/U�>_��(��$�W�U�4}���{�z�ҥ0�R��Yh��ư��R)��n
l5�������U�~2��g�;}};w��ݵ���4*�a�"�OL3Qd��W�O2k[_��~�jb��"��s#���ׯ6� ;���{�HA*�a�����D<V�z�O�Fy#��~�Tywwd�)�!1?LS�>�E���^�Y$'�7>��ɫC�f��},�P�\��mv�XgĴ����Z$^� ����<>�1�{uu���0��?��o�g{W6��ؾg9(�����O֜�ڱ�n/����ç�������?܁L�����U�gu�����V�;�ץ���t�./�ؙ��D"�*I-aɾ�OOW�7�tgwgg�n_\t��$�M�f�,.�R[Rl�nV����R�̙���.i~I#*L�ؼ��WݰX>��cg�LO�� =L��|g��m��m�����>� ��C�J�cf�|�>��rG.��N{�m����x3YlKK̈́"v~t�wz�iT�`���o�o}���Z�k୐[y�ȃp��E����'i��^ϱc�'�zX��O�X(�dB��,#�	,
n(��V¬�2��h9�NOώ֣����Y��.VK�>�uLo]t�y$�e�|�)5]jaI���~V`D�l�]�$XN�o�S�8:��
���� ��V��r����b(������Tv '׳#qm8��n%L"�Y 2��vC�����%31_"3�~�_z��y������8ޜ;NN����n�fH8���z�O�� u��
�tX	�������b�}���o��D/�g���6�L�Շ+�:bߎ�`xM����H7�(vJ�V�`�1&&�"�� �y�Y��i���SA�lp"�(�<uʩ��A)"��\�U� �\�x,I��8T�u���o1�����|�ƞ���^�=�˛���ӥ�U��y��������ӛ�3�9�|#b�У08߅�̣��L{��<�x���μ@�_�ڤ�:f��ƴu�(fe����~R�t��(LIF/V�^6`7ӫ�f��W�g$Il�-��OMM2:ה�.B���ߗ����e߻���q��쭶�yI���\�������xh��pob�P#��Ѹ����f"%�M("��V�+��u��	��A�Z{�Q�]:B;�{��jp[�Nq�;��ʂ����GvV��43�Y����2�T��,ck+33�N��-��`˶���nv�6�tU��$��ļN$+�x�.[� ��1�mA'����Ԓa�.���D�f�g$�,8]��pHP�xY��
Shf�
�/CgB-�������$��I"�]OW���@���%'EϬE/l�1/ ����j25=��p萺OM��UJM��4Q���:�b�n���EfnG�5a�̇y��@�t;6n��V�T��h*WnD|�rSPC�>���W�:r�������������j�� �L�j�s�1~	p�7��8�ve9j
�<��s��dN�单�Ƌ�엽��$Ŭ1������w�Y�	�� �>�Җ��5������"�L[�7LR�p�@����OM�l��x��s��ʗ����L�ɰ�?~�[��h2���~H>vӄ6Uz�e �����pO�1E� �yt!��$5�4���m���A
�����+_��+�� ���i�+_��uoy�	����1&�e����1+x��_޸�ڽ���B3D�Bu�� l���6-1)��E�� %��9��� �ӏ� ~}f�\B�����ۢ33���UM�Z�rx1b��+e�d
��o�����glvO"�+��S#�fV�C,}��}��ę3��Y��	�d&"����I`回�y�;������Q�n*�Wd��8__f�-=�n=j��i�A5)�!$v�������\����"��ܵ��+	�� V��,J6��R��6G*�V�x�����~��x"���u��0 �~��9�=a�p�Z��殧3O��h(����/|��}�)�����S�g^�v���b��ʓ��]��L��b��w�����A�0���A/l>���m���O2�(J��>����oy�Aʐ��{О�=l6?������G�ٞ,/�l��D��o%&����;�4�){wGk�Ծ�������������n����\�׼޵Ǯr7���	K#p̣4�?'W�kq��:�aR,}���E����,������L$ LhJb�w5��7o><C���l��	M�a�^�:���P�v�ݜ��$l7/_��l2��@<~�T��� �>4u�*�`���w�Z�Z�Yx呦�*�©��^����籗��������յ�-��!&uJ�G����Z��z��lfs�# �9b�N�r��ti����l���k�pg@�$��Z������J��ޔ���k����i���<��(ufOk�`�X�
�����J&��HPk��$R��=�|j^����J�y��e����/�6WBR�0�ս�Mqc1�lf�XS���7n�s3F>"���|�ƍ���¾Nܧ�{?�&�����������!���W*܅$�~�8�^�v�OQ���3S���<p~�̹�i�/�Zj[̳N��;��v������XBS��#A3q��J,N�\dc6��m�t���!|Xh�!��`��`/���������@K/,N���%ۃ#۰��U�W��D �tX/�?�&L���#?PC��N,�f����Z�+%��Y��B��˥1��N��23�h���L�x�w�ҩ��� �y�wc�C�;�������0��}E��]���/�}\ؐ���i��K|�,��U�}�L�`!��E��S��h�?�T 
J�DQ�!+Tp'S��eʬq�T*Inv	�J� 	�T�v*�&�T*�j�aD������[�8���б(%��?�����׀���5|E�Dۖt�2�`�60�6
d<�di��jD��La羵Z$jS詒��[K>�mӍ|�
c	���3C�mee2�r!��`�_����젙�y�y�����mbBRDA�^�i�*��#�\Qc0%�V4�duko�����s?0VԎ}��O"!f�X�z��q4���(gA{�;х��e�Ȟ����[�|�]��=�͹�+�>2(��W��{�b"[����w��_x���[��U!����W�@�#�7p��3�<��2����=�6-��F>o��#���ݍ@��D١�ܤ�~�N&T-��`���d��C��Ô��9�r�I6Ψ�9n~�(g.���&TdJ���۷���t2U2$;0w �e��V	I�^?�������k�p��Вftm��#\�ﳫ��'���'�g�~s���$�^�C��B��f� �P��u|� 2���j�����+���_z���>�x�p�\cf�U24GC/涛^8ݘ��GX�reg%j �in�*8�bz��e@L��o8��zN�s��ŭrH��zQ������\����I�Y�%���=�HȔ˃`*E�6�>R��/�<%�,cr����Y-��AZnT���M����ȴvUFa��[�7V�aL_� ��"��ѐ��O��eO���sٝndh�	��I]#�o�!iI5I7\�4�%�	"�F�<G=�q�]hX��8�@Ag��xC��d�L/�I�.�&͛�[M����Ɨ��@}����"��K���C4H������9I�霉�>r���ܬ��"RY��ZD�%I2I\��־� ީ���n���M�o!��v)G��z�� r�M�,�1o$�e�K�h�$q�����@�Q� ���n�9����ZO������`��@=��3tlq�,>�F�7��ۧ���Zj"B@O�8���@C�?�cb��0u�m�u���
$���)��xx�@��H-��~���u�2d4�#�H?�Y�jo�t���5f�_��9�Va����U�Hj���T;dS���?ą�咡cH��Z�gc.���u����M��@�{X��c��7�EM�����B!\%��g��$����J��J&c�\�bIio�$d!`��Ӑ��ᓷZEm�
b,�d.-i��E�!�N��P�d���oƪ����I*aF0!rTh���h�2�77�Z��F؝�� ]��c�0�P'�<f�р���Q��:����}�a�k<�|���vLN� ��%�>S�o)�+X�����`�P�B�R�H��P~����P�יw�NMI�V$/1��In]R-v !���:a�H��
�#���i؍V o�]|����������:��s�t�^�`��Dv���Q ���	�(��}�.re�b+�K���!�&���(}�F���Қ��J^d��rR&S�����>
r��8snw.<��V�_,�;|�S�<�c���Yh��[p��0/����l��ɶ}���kt*C��l���\���Y�lڊ`Amv���B
(������WzP�M�@B�``�9(�:�ZA�t���X�F��U�>T�|���iY�-����˪9v��Ue�|%v(�a���j����a�c���s�a�ؘjO���6c�1*G��B�����f�@Z� �<���q�UE���H�"�
o �Wl ͔N�T��#rӪǟ ��1B�ҩ�F1��H��p�b9���,H�Y64�m$ˮ?^'�#uJ�,FQ��6P���LM��G�e���t�CF�ky4�j�9p�[%+.��
���׉���"�Z"�ZSVmf��fu���}���^�hv8�n��&&�����P��>�f>����)��V/n��y�s>�_���Y�Ԗ	~R�|�����?�\�^��vJ��[U��,;<�$���ۂ�Oj�Oem���%?�-{�[�������V�<D�xtvȐ�3��s[��'���R�,��j��~r��|�`�Y0}z��|b��`d@�7��۰�MV��V~~3�|R3������.�ەL�Î�H�ƌ�T�.�0S"+ڟ�o�	�-T���Q�5��K<m�̨Z�+��l��j���R%CX��V.���q���SmV+��hjn��j���P]������a�yAq���֛�s��O��$eV;�f��x�a+Gxd��l0�����I� ��!��{�vr���Y�(+�`!��m�`Ȁ׏P���~�	1���PcTs���L��a���#8"�~���]������]��9Rt�/�\�ɶ�[.y�\";��İ��X�Q�O!���A<g?=�Q���!T�"6c2=>�艭��"d`+%V�E`Nf
s�[g���*�,��3�ߨ#7u�H̸�������"LB*WT_OO��(��5)d�*sW�ס�6��J�]�R�7��UL�
�EP����{p�i����3�9�R�x��?�pGү!�����)���(�v������>���?�����?��0A덭�*g�K��lMaT��i��*�4S2A�����c0	!�4"�mN��7;���	Z�>�B�1���ӭ����be�93(rHN��Ë+�#4��5YE�!��3�PDB�����p���9��eQ;��Y���48���G�0)�E���}"�,���J��^�L[[G4����ܼI���@�w4S ��� z����J�Mb�͙Z/�$4��"�ys��z�����ӌ�3j�~����9���׮��f?J�SS;��9r����w�z{V���;��.�+�H4F�%+�J����@�&�۟P�S�d�w�/C�"d��ʗ�r��k��ZW����ÇdE����[׍�k��ɲu�*�|�2�X�J%ҹ�aeZ��aqٔF��8܏�|��T&�E0�L�:
�;A1�./���٠��|6�8���zˉb��˗@�j5�І�ò^;���u@Q*�advV [���]�� ��)^u ؠR��ؕ�ӱ�Xra�i���L�^�Z�i�vA�x��=8�'<Q��FU�#�a>��޽o�jf!E�C4Ů2�`"�E�Ȳ�}���8��H��;e��[�Dm-g�"�۷o��a��@@��/^���f��=W$���@��n�M�a5֨�7�ac���ù�����̓��<��.9����ɤ�ܱ��
���W�Cɽ�����r4�����ޟ_�Tb}p��3���Vl���[j�6=�c�z��-�K�9�[���I���꿦�������G���W�ÿ��R1<������Haj�;>�mc\��i����s�����鳧_��^e��G����3���Hx����Ϻ^�>w��˅m��b�řs܄��v�J9J&%�k��j�f^�K�ݼ{��O�;�S�_���?}��O�ϙTjF�ЅaN"�|wf}�[H�^�����*���}�݂m�i��p1Z�8��aDu�����1��D�N��M��
�x��1�z�5+Q�W��Iu�+q��3B�}�ƒ!f~ӉT���E��F�ώ�&�'�O���d��+a��x\wka��Mg7`��hh'Ohj9gZ�N�U����3}�^�m�	�N��r~P	P��X"��(|Zۏ���n����d*���&$@���i� ��N��̒�BaO��J�J�Z.P�9er��!�<a�NМ�ʾ@�i#�����{�l��N�֥���m�S�r��>+{��`<<R�}b]OC�tx���,�U��B��E ����x'����(�	��6�*��������]���xFW��8�`o�^�����^�E"90q�q�������h]�>Gdm�tpc����,51l��33nr;.sO��as�!������`+]��B-�ÈO�%��R�^ �t4,D�fRМ�7�3����\��m8N;4g1Y�'��3�x�e�ax8+��T�b�d��+魴F���|s�q6-]�!��HO�Ҳ�g�������$������9�&<����`�Rmg��Vÿ�5ܻҙ�<�|�62w$�l�h�V���$��l���ko|G���s�Ft0�����l�%0դ��=+n=~��Is]_ *,{�9�f�����1�j'�՛Nw���^lRr���܉U�hl�h���VE��ך?��D��8}+�v~N8H�wa!�OD�$ʉ�n%��݁����g.��`�7��%�ʺ�ѱ�h�N�[3��u;���O3�� E�z=�zz�� ��)�AO�)��SS�1����ѓf��Y�9qiOߏ;�}}oI(řm�V�$���c����B�*�o���Xe<�&�������J�Ъ�f7z�3�{�ލ3D!��e�j�z�n79n�SkO�ކ��^��ϞK��5Qu0ty�����,���X�(u�>�������*�V�5d�k�ym&�g'ghdS�Ĭ��S�<�N�Z��'>�[�L�l�\�o]��M~m�f�j��O$���,9�41;�\DBzy�M5�J>�t8H����!��t�De�7 $>HR/�r�����B�,=��.p�f��o{�(�&������SE�KZ�a<g�6Q�@#z�n>���N	s�w��ޱ^�V4�rj�H��tP=x��\Qh��-V"�c�������S;�;)m��q�TX��Z8���I��� !ֹή���ig\���Ennn �����M�98bp&�?Գ�e+��Ο��-�*�Kp����c��}��|��[cW��߉ >��OL���<�[��6[�`��9��a�0U�eJ�`���Ċ�]V��"��|=��70`�i�L�X�g�U�nh*�`!�q�L)̑9��'�cW�����gVV�H���`�	����s�VE���!)���]�`���R��߿};�,�<�>h�l��KM�=�v�{�{����cg�f��3�9�/��<�w>�?\v/ә��.�X0j�7���{ҽ�}�t��Q�ш�OÖ����`��&Μ��,�X��͏���_(6��~=��(��<KϿ��}`f��F�Q2��r��VY[as���yS�����/��j��|`�ÛwN^�Lg��0��[�ir>_0�\JA���;w􆃽�;\�|�5~e�3��QN&K�Ţj�ג��yl�fDm��sf'7��Q��e��rY�9���:�O�<A7��E61W�L�����;��;2G�b#�d�;7o>��e��h��w��^��� u�=h��N��Q�E^;yw�C-?����5�O�?yN���]<<\��?�`�s����������۷�C����9�n+G"M0�L�}��)�}���·@��O���肻��<|�H5÷�4��V�����ի��&�0Q!����ަtG�z�PS��sp�����Ha"�w��x��L�_������Ez"A�ۛ�[1ΞH�5��8'˓jD���Mx�M���d*C�թ��C��DU�f���K��وt��������.޸����+��)٠ �C�׸`��9����� io���eJ �7�K�c��>�kk�8�+M�B���p�S)�l�����5\�e�,�R$�$�����H� s�����.@(>�Ǭ6� ���I����nw�}����mz�e�8ۦǹ�;� �t�ރLX�EèT�v������!9��<�7{����
B�R���Մ۽Q��!8���p�+{aci�q�Ι��/^U$��J���n�6�A��e+�2[Y�:�k���$��;1�m�	h��n���H&��do2ѣIwz��C��v_���\կ��k���Gdt�'fWф4%�컩�_P��#D y�!<~l��趻�H�FF�tdd���1$,�G�;�m��
!�A)�j�����CZ��3��֯�5a������ׯ����57K������b�Ѩ��Gi�������'_4���u��_jJ��<��r����D��V#����E<�����O��d}a��O���j�B��+"#��G������?��G�V���Ɵ0����o@W���N�.��*V�c��nr�L���:�"(3����ۚ�#-�Z�ɳ��Ȭēw�}�+S�����b�-��k�^��7Ѧ�qR�vn��V��*�𭟯d�\�td�ψl�����^�B}tqqT�3�7���������Ӯ�,�QaJ)�sj�Q�-/�0g��Y�{�4�sbhľ�?���x�۱�v��ο�m��l��y;C�P�՜ΓC��c����~���ɢ�8���8Q�d�����1�H�1�[��������ن���������^#�B���Z�Y���|RKtvl�����0LY|�_}��m���z�Ɵ2~��-4��=�
Lv�N���_�,~�'�����/��A��楄�5�(���b(iݣB��;�f��QQl�
� �W_{����Q�?����x[��z�Fer��-��_}uQ[m�:�S
Hi���FW+큭���l�v��6=9f[��ꗾ"�E�Գ�J�LY������;�ğ>_�v���N��jG���a��J9�	;{r��`O�����5;+�qϑ�.��5�9_�$�I�/y��&KUO(��>ǭ�|y����:Z��f�ks6⮝]M^#�q�j<�ᇉć~��$i��(�(�z��R���؟}��v��O4���0��QJ�{�q�L�+���>�NWZ���DǏqg����?�n��^�I���QI���JeeE�WV6�4��`a�:�E������Ub�{�g��FL]������H��{5�r�7U�\(޸�=�u�H^�Hh����0]]�����C�:3�\�5��6��,�XF�n?��.���22��b['�ni�:Դ�N�X�F����m=��EQ;���M;>�i���_�[+�N��x���%p?KB�h��N��8��Ċ�m������F�����,j�Vk�rE�3K��m����K��I�;�J��y��%��� ��Ӻ�n�R����0K���y�'��7�|c��Q���a��尠(֙�R���r���O�|��r�N������o����f?�ӭ�No��?殿��kd��G���[�9o[3����q�����[�D��D4w��O���Sb�S��ɯ�ua�Ƚ����H����7�D:�ǘ�6�!��W�gNO'cwo�ݿy���N4�+fW/�������\�e�����w��������7����j���b�L�מIA��H_C�� ���\��9�������^>]~��g�&���������f��H0��Q�D�/�����=pd:8<2qg�k�R֊S0,Y)���Ѧ���vʹ�ղ��>S���d�׫�^ډ�;r�;�"r���LJ_�Nd�����l��*��,��t�ZH��.��x�p��^2j�l*WUl#fA/d�Ў5��S�{k�O�k)��^[Y������k�.�p�u��|͠\s���Ѕ�#�Lw<�V���Ӿ�)�����.\[[���?�� ��/MV�U���V*�+�t�"G����|zggbxt���������^23K�4�¹��1�̮�d��~�7�����7 5�5����������)\��=���!���/0/�p:��|a�p�v�e|)��K�.n��D��G8�SN������w�r���^��M�ˆ szb?���bw٤2ܟS�3>��&K���v�$Zʌ$rD����^8�݊�k�Qͥ7p��A��M�o+wh�� �(��������#GC_<��������Ӱ������=v��^~�/_��t�������� N*��.��a��U��J�c&���^  ,��Qqx}ޖ�?�7
3��S�.Μ?w��/ \�ҕ�c�56Y����I6KB��9�v��z4��ٳך=#�Η�T���]WrI@0S�ówl/��-��ͻp9U�
������;�C�5�^(���gQ�xT57��R�!�'PVo��Vex�<�����Q��p�e=_n(V�C��[>�n:�s@a� ��d���í�b��~��f�e/1�n7�a��Ί�P�6��H<�3J�_�H� ���ܽSg�a��������݀h���>Xb�<f,g��[(��	��z�Jd�����,�J1W2���3g�mxc�ڴٖ_�MnG|yxK��(LY��m��';܎�#� ��Rx�Y"�E8b�I��[����_�8���\V�db4!^��,�6w����Ejb@a�ZoR�P��)P��7��x,���Kh�4W٪��)@��P�!�8d�H�9�|�lE��ˣ�V���,)X�3[���h�G�ɜ��-�c��`���ã^���7�� �c�� F�᤼lu�`�q���3����9��ϸ���tt��v]�`}���I&��G�)�����7��w̿9�b�!�+�����j��J]���u-861qf�?��?��g�np�)Cx��&Uҽ��ҕ�m���S��z0�M��7v�����z�NM��lf�#�;�s�A�����ka�����ew�X \�k�Ѣ�2����;���8p���ܛoCup?PT��ʊ�&�Q��(�R��0�~�����������^-�v���i�y]����h��[�@��!\O5U�5�w�m�fl.��С�&��J����pw�kg�02ɬ�8�P]Ɨ�l�L�Ѭd�D�;����U2���L�jq��"
F��0Mfҩ���r>��l��W��)6(�����6#*��#�P��<�d�7G�\>�~](��6��==>�sZE�U��ǧJ��2���^�tFF7�l���8��P�l2����vo�ޕU,Ξ��>�ITT�T���ɳ�l�,8,0m���g��Cf�9�\��8�_���;�E����{����Wd+�{;;�{�`1��*��z��U���n��d��B.?�fnW�{�;�6VpP��S�+ݺ������{o/�{��k),0�\�6��f{���O���4zi�����=�y��>oUy���e�Z��I(�;�c0x�3���l_%���?�?ꢪ�I��=À���X�e����˅� � nٍ�ױ��0�k�DD��r���Pj��Dx��.G��Ɠ��p�=Um��#��;Ƒ�n�$�ǫ�@�g�U�U�#��pf���jI�,,����P��|^'���<��k�����ه���kJ��a���*��`�`p��f��ք�S�&�&Ef�Po�.?B�[˛jM�\�A�;�P���l
 z0v��@��bi$c[O֒����;���3{�NS�,�]13f"S){P�Fz��'	 u��F�dH�Kr����+��3�B������/�ɖ�4h���B�_~����C/�p�t����^ΦaӔJ��1�F���+0<�p���FC����n��;oU�Ϝ�o�`����P���E��Z,�zP�镊^�W�ٟ��a�l�z�4S�.�[���Ҍ�p������#�kKd�������}������&���Y�,LM����4��i��R���_ft�.�q�xQ�+��Npf�
@X;�~�e�p�z��bNɗ>Z��R�h�}�x��� ��f� nW��jԉ��u�.�H�V%����6�<R��V��&m:!<�Jf`RL��ցvM��9�I�V9肓�G���w�bC���nD%4>199�oQ00{��4�Q䝤"sf�Եk^/�Sׯ_?��j`(J�
V�j����r����߈�t^�y�&��e����^祖��H����?�n��J(�Cl�	*rS�bd@6���u�h$6�j�1�<X����A&�9:n����ӽ2�C(bH"���O�A��a�7m$��01�_�בR�]c�92��v�������ٕ�l�����][�f�5��O2G�(i=�f/T�	�H�e;�x0�{�"IU��_�_;�0�d���2[�m�<.����~���u��V��Hb���>��E,¡0k1���0$O�G*'�Z&l2H�d(�?VO�����wB�y�I�n�n�h�#fŮG)T"5M�y�zB��t���'w�4-�[^y�zO���z���e�
�X�;@C����kf�b��y�J�w
�=.� ��IK���5�]ΎnDB������K�L�&V*bii��*\Z��Rߤ����!G>Z�H��X�T*-�"�x��o�?CHǏ��`�a}��kv��7�+n�%�U����v�W�K�_p�N��8,*�t���67K��?�����~�f����4���f��"h��]=n�� �dέ͟���� K1�,���%��,���&�\�r|���h�!��f��r�V?�:���AƖ��!,O�ŵ�ɵ��a����a��ji����dx�[�����&f���<O0	/��-�If�#i���W���_0^>��(E���E���7�FK��=p���=]�wO;e��]M6  �,�Vɠ�@Ԩ�!�(�XR5-L~D#3L���=��N�j]�y�^�v\����wYʛ�Ngɽp�c�ȕY�A*�S|ڧ�ڬ�IK(���5i�A3)¤0K�hG[\�F,�,��jX�Y�S�5yA X���n?:�:1���)T�3�C��>���r������+�$��T�_}�.˘~�T;�� l�����is��l���,H���΄����j�J*UKq<�D��Y�JٚS>!��7����ӧ��®RRv��f�{����R�����ü�W0yi�T0<x�;[wJ�ZVn��kh����!m��-��q�䮁��3��tf���D�fcֺ�x�;�.n;S}�D�s��7iy��
�F&Ӈe&&��L��'$���Ĕ��JvE�^��Y![�V?|"�rG�Y㘫�7)���gyE)�#��q�5�G�!��"<؟��s*�~*G��xr|�N3�N�چF���	�Dt=�Ye��;�}h��A�b
i��*�V��V�����n���;G�7�{;�H:+2�<����#/��a��G�NF�g>jTR��. �W{�v�=m��ȸ��0���r��j�k=fO�.���Ό�68@�vhn���c��0P�գ�p�:��i1�FFB&v����@��j��3W�Jx���i��o&��K�T*����En}��V�N�UƳz%{8<9��Q�8�7v�ypi�\M��r�\ȭ���d�w�>��e�"�Z;1v>\��+$��$@��K5E�erz���aS��|�����sjDNR���s�.~�Oh��^f�Ȫ-t
M~��e&���d�҈x�j�[F�����{�U�?�����u�l��f�UǆA��NO����۩r�ɩl��iV6_X$�##�E�!�G�M�2��J���X(5�
���x�k�;�'��\n�.$��YV�bT	th����O��Z�̋�@��5n~����h��NE=�p���+b�y�\y�� ـ�b�;�0nz�M'b�Ɯm?%Z}���)FLD1��}��\0=N�zz��-����}����{�}�$^0�S9̀�#H�.�y8JcV�S�.^6W����%�5������	٫ c�-]'��k�O����M����B�G2F1�#y�n+���'��Ik�I�y�D-�d��G�����p)~t���d�u��c�����\Nx�jX1��ͣ�?f{�)�6l6mz	�0���:(���'�����n4q�'�0PbY/� �-��|~h��`,�+�~��h�:��O69���r�jmFM� f�J�O�>�d�:l�2a���嚐�#��S�:�p�:�FF2CSzk4�O	;�)-��L�C�����ˀ.4�#B�4�֪�y�7$v�g�6K�7�l6M��A�����v
���N��#�@gR�3�r-�D�UU=��7)UU�~�B$I��!K-�P��ۄ�_W�����~�A���ή�33��]�G Cf����RO6˼)tj��řW.������f鷒Z9����P��Q������p���(U�Δ��� 	�I�|���/�����~�h'��5M�>��%��9-�dQ#��Z²��z�<Fӳ<��y���ӽ��@�����`���%O�B���Rr����aG�ZC�o}��m;������Ր�^������}Z�=c_A����aY�{�,���}�=���Ύ-�9xj@p���?������+',��˾H��=-��ސ�gT��l2�:{��6PƱn`���&�,��3�Q��#�9�^YY�V5�H�,�W�uA��:fo�<�L��a|�t�T),��̂7����6���aff��Ԍ�+s�o�C���J�N�ܻ7�������e�v�%����q���3D41X��b}��p��C{����w��߃���&�� ��'`&̦��9�G�ĩ�Maw�'�.��i��kw��#��qC"{�`�&Q���^+�=ºLf�P���������R��Z" 9$I�|t��JkY�����OvɁu�ֳ����b9��b�A�7��l�YC�r|�'a\�Z�� ���$i�GDB�n)er�:�A�����mIra-����My�<9�]�)%z{��>��ɠ**6��ZP��;���n�pg�51�ar������c�������M�H��޼��כ��\;Z�oa���U��A3;�01�@�+D� �	�x��$��y�lE���RH�#���Y]ְ�A��I�9{�~��/�;�!��7��h|���hvy*����a�cU�N��vGs�Z`^���_���e�8�!�CV�__[�期��]c���p�Sm��f#�?���f�~������� �B�����ڜ��Z�7@�&� "���ZHW.g�	��͛6�	\�R���1���� ��ܽs�4��c�?�S9�n	s���Gd�>"��=�y���Es���x����0Bd��>3,q�a�qۤ?������;���r�{�b�h�%r+�c��BݸSղ�d�./[-�E�&[�U���)�I��øu�F��?���0��`����.]9�W�����|啙�Z�y��p�ʶh4�\c����w3gI�����lf}�/\ĊX�^x���k�{�(�Vo����T$����VY�}��zY�L������6����������D�V�`�˓6=�t��������u�V�3�����f'�N;k�u����f�0�������!��d!�T�Ǐ�*������x�c����p�����V�#���A:�����̏��C��d�
��J5����r(g�eԴ\�̿�X(�ص������?��o�]�/�',-�⧕e��_�v~4�0y~`����}-42:���H(���_�ʗ%�"H� A� 	"�lb���Xә��A3R��9��rD�Y����t���v��Dg�"�dj���� ��$�ж���h�]�-�����]X\�Hq��?�3?������[J�
����Z���TȨ&���&V�Z����;����r��t?�A��8�r|�w���ӽ���z=LTa�`���=A��{��jj0�����f�W�1�.�9���1u�G`�ho4�I/CQ��f�J:���#�6�A |�M�U�1O�����6o�Z�i�Ј�2b��֤��֍�V�ަ�Kfع�+6�����Y�&3\��7O�鐴6G��];�+/��ʋu���=�v����'�[�s��uy��N3��L�]hOOX!�XNS�&��d�s�a�D�@Қ�1r���w�g���m��ZX?\pH{)͔)���M��;���:{.���N�E����yԞ�!�j���\�(�Z��m�ó��3�+����8�UҚ)��CO#uf�#a��0�>>��b9���?�������יs���={xx�}� ����H����]�{A�[
K�B� I{{�t"5��@`y�2�ǩf��?�}T{�����rX��D�	)t��fC�����~\0
��W'0���j12-d&zf&���L{�j�z����:}z||��y�cWKu�d�x�Tr�L<�^�kvZ�Aj�m`�ADE	[9����+W�R�p�B*�z���>��L��(/��^�r���K}S�g�;�J������܌�oj�2���,O�%��Kp�a��W�Zh�V�nu������^�<��e�[��6��osҽ½5~^
՚o�Ή�/���@�H�o1��
Z�:����ʲ��M��"�A��; g_�pya�0�+|V/U�N�u��^ �pA9Pg�N�sl�"!�l�y).�K�G�E/��a�,9hf�rDN垑89���76=�m�=M�gBvv����S3��7�H��n�ULZ�Y�D�Ҹ�,\��(䥗4~�"B/��>~��!m�-�)'Kd\,�=�>y_��nw>�6[�0>�1�Z�� Ks�����|�6�/���=?���oG�Q2N�D���K�%q/D�G���]]3pGa���+��>���u��\ aL����m�s􃵡�5P���t�:��w�\���Z4e��,���	���f�?���Xl�L�m��q��b����P�&��0���<�"/j��^hs]�͈4R����5i�?�c%�n7��Sդ��M�wk�$�M!3b�:�ܜ.�����Y��6p㥗ȗ�t2_�c��+�����8�I��k�UuΊ�/'�^si'�VW��@J%~�TEդڕ+׮�".�on��'�0-���f)rW��JZ����}�+���k�m�v���S&�g�t�ĭ�b+�D08�ͤB�-��;A��%�Ǩq��@ӻ<gz�d`�<0�䉡)L=��{���F��h��5��w_�d>'�	-�#筫���j=7b�/�LP��-X������ºu�����CƻH|�D�ȣ�l�f�V��`�
���\,�z9o0�m�X��H=[��
�V�6N�Uy�E�t�
m�bQ,�|�\V�FN�m�RN�m|=;wM��e	��6���r6����-�bQW,ł������P�J>˛X!�l��9	ɘ
�A�*�
fE-��<(������VD+(V��4M�	��Eb�VU��/K�kf�
�+2�X�� P��B��Ku^�W+�(W��%��WK��b%��5B�J�ɒk�5I�"��ϛhjp��"Elv�zլR���"Ż��"��U����'K�\5�=E�P���ʖ�X-Utp�۲�����tm�����;+��D�Gg�!ᾏ�W-�-����<��N��Ɏϓ�S�>�п���_���x�D�z���F����~�_�?�<��n��A�z����O�'�]�SG�'�i��hO'zp"v$?K�)D�'�����0E~r�ԥ�$_j�A�ZP5
q�I�x���o������=�q���|#y�l�a2��F��O�y�S6[2��:5s��,�n�.�e<SGi�nȳ��;wNʸFW�p|�1��<o��\���~�KdK�a\i�|�Q�'+�xKh4 A�
آK:���-���p�ㄥ���u��U"��Xi�jWx^�@I�y�n�,@WXT��y�M�������X/�Th�ub�Ee�
;����h�_�@��t[�To4ꥢ�JhS;�~�Z�%��ܴޑej�s��SeT^�ծ�gQ����9������$����i(��@�|ފ�A�^D��r  #j`�/�	'�Q�A��rCԪ����%��pR�:2�{���}7�~��NX�[��%O��׻�]��U>?p��H}¡&--��x�߸�9��S�5@�9Fs9�UϤؾ����V�Hf�FCGYlF����jB=�'�aG?��J�d�|;%^��g�';�B��'ЕU�����CV�ߺ�H©E*�ρ�p��%�}�
1)�b
?�V�`^����ގ��z!}bL�j^�������ZT��H7Uhm��l�bOX�S��Q�*i΢�#;����ل�1�JR�S���yL�Fi�j�0'<�9�wL�����n�?�}`��ͻ}���k�Ac�-[l��h!h/k�NM�����Fތh����+�a�G����0H]�İa-d��_�St �>����h�F   x�C`P���q�m��ڼԶm۶m�6n�c'�8�mO����D �� �PB_WIeP�6B�̏h��F�1�fg`�]��v=v�]�g��}�w�
�/�emyV�UY�6�P;�#�h��8�N�;�s�|.���n�v����>�Gy��){��%^��y���}����>�o�ƾ�'��_l#l4�m"�lsd���!�T�VmT{�����vQ�M�m/5H�<�P;\��H���� �J݄t[�}y�Ǡ���Wz�ރ���6R�6JQ��Q�MR��P����LG{Am�����>Bpt_8�g63���êzj��R�/� ���(U��NK���
�T^ɮK�2z�g��&���W�8��-�T��|Z'���G-*�����͈2
D/vu��t���[o�ݓ?�Y�2��1ftz&z q��;:
!�O7��zĭ�L�+�G��}6���HU��R�ibw*ml�#z��&�� �F��?�>h~��|�J�6��T|G�Ԋ{�~%�g[�7�^g���s�'��u*�(�����٢U�8A�r�-�!�|�{ϣ��g���I����̏����7Q�)A�8J�P��W�z�Ü�^7�I2�㊞�X����������NR�R��G�)�:A��	�Dz/l��ٿ�_�~u���:�.�e��;�
�9��ބ����G�xL�p\G����'=�v�O+�Q\>3����N"333333sb:f��13�fZ��T�t���jz����� ׾��N��)k]7���/[����u^/l���^/Z0��e�z��uE���{]]D�#Jmyݫm��ڱ��6��趎6FZ��B&%d����QFL9�:3j�TgFfn����~M�vl��5^�� ^�M�q��81F���H���x泜Y�d;����l�C����|�w�2�f���|�_J|O���7}O?��۟En�;N��	�]�vO�j��{Z7���K�ٽ御;ܷ�w������^w���D����j40��>�}�Q�(c�1�e�2F��Q�(c�1�Q`D�FQ`D�FQ`D�F� Q�J���J�d$��������(��9��]
n��C�p��Z��u������\ͭ��<o�����u~��)!�o��Ԣ�Z�-��+�X R�K��߹=~�"�4zkF�ؖ�8�i$���������'�y-�)	9����]@�j��z,K��+<�3��GS���n���e꒬������_,Rn�A.�����N���9�^Gjr{zb�U5C�_i��4^4f��X���N%��s=�U˵J��Fk�^�Q[�U۴]��[G�M����:Cg�,��st�.�e�\W�J]��u�n�M�U��vݡ�t����z@�!=�����ѳzK��=������������k���Ak�xP���$�Gy�lPy.�~��&�b������"ܺ�����R�րFj��-m
��թS��{�G��ܝz�$ؽr{r�-�U��v3 ���!�WPu���d���,R�^�-���,d��2�/�<w��g`�΍���>�iVtu�͊]�r{��۷!��Y���s�A�ƣ-bV��u9<݆��]M���ݞ�?ad/5�!�p��iρ淸=�[��}�b�R���0��r��Z`�����e#�c�J(V���s�c-gI���)�j��t�n�L7�Kr�V��!��o[��iI釕���yťd��G���P.!��n�|�&D^˻��v�Z�ԽǶ�~O����C8�L-,����G���W�h4K<M:�,p��opDQ!���&�O&�7���,�������4�3�f�3��,g"���|�s<�8�S���\@�'�/p;/���i�F?�T��JT�?U���O�D��"���z����8����f��ն�fP��6�2(�2���m۶m���vrL�I>��z�nxj���$��e���@��7���2�����*���d� �D����:�u� �E#���,�H�;���I��)_�\���t#UM7�:�t�q�v�W<5@��������*h��q���yjHש%�]4��S4uE�S�h� P`�H�Έ�e�JQ�(T�NԂ�4�_�'s(z���N��H�(�R�nݗƁ�W�u���!@ၞ�gD����6�}Iu?�Z�c������q����}����s�N���.�L�~�?Y���l��g�b	�*�u,��D~���`�
����B��7�m�z˿x��������`�d2�LS�;p7ӄ��`ZI������M�]v���t&�f��Ҩ-�9����a�Ov��1/�׉T�"d8��I��4;�K�9��W�c��<��@��i��O�7�8<#y]�s�9�x�<3�|��;��V�Q���\��ܽ����ǿ6�ޑe��_��$�E�Ξ�[��m۶m{�m�׶���m۶�k��*�Z����v'�qw�����[��1�O���8�ߝӅ����>>Sx����2HI�l��Ky`�e�[�2O��E��;�A*w��*]��7�u�
��-�Kn@K�W�G%���D�y�b����qk�1j#w��7��Lr&��r�6�������XmQ���
������������1.�ڎ�V%#��E����2��&&i!��N�V�}"y�sc���W/�PP^�d����!��n�������BR�oZE�i`u��O�ZJ/�뚭���so�.��[%kܢY�%+��zU��;�����{��p�N\{�Z�>v��P�e�7���s�W�u_�����ne���`Cխ,�Z��y�z��-x$�&�E�5�I�V�2l�U�$�^U��Կ �ϩ~��7K��k9��U�2��^�׸��叐�!�<\�}L��nǌ�:��τ���n�ʺ}�ݳ|����q;!S	���f�9]w�W�������1�!��~_�f��=�=�Og�1�2��y_M���֛<F!�꭮��eR����q�J�h����d�p���$9ۀ��Fr� ��t�Ö�1�L4�C�ie����"�~��'{�1�l��7.ݓY�ަL��`I�ܼg��q�rg�\�{�6u�W;T�?F���L�^�ۭWa�	����8Y�,�`�-9Y�p�H�Hm;�i@'i��o���
חn�󑼮Z^w`w��#�)^ճj��lq�� |Ow�������z`�νm��|����\8埀���叜�٣������WH|�m�z>�]��j��f���~���0�9LX$ �`��YM߷q��I���1��:�}�-��f0��+�(w+f�ќ%jC��������j����?p�ڹ��k��H~���,Б�I�����,���������J`�gh���D��wc���WC����;�H����]�Hޅ]�C=ְ���֎��;*���։p��؟;x�Q���bZ�~̷c�V3�g�iưÌ7��c&�)���7�~>)e&S��`�R��I|NI�f֔�a�P	�EI�GI;��͑�}}NG��;|l�����	g����O|䇱�=�Ȳ��+>�2�X�[{�xɺ���� �����U�D���H<�����<����i�d7�' �������ܕ˹�ʹ�!箎���z�B�q����14b�Z�w���Em�C���j��U$������c���d^�_ ~y? �J������`���o-���W���k������\NC������)30a��<0�#�ֿ������Yo*�/��̲!���t�Q-������P3�E�����+�&p � ���)п�Z��d�b�[���0y�X�{�X�l6Y/e�Y����1�0N�G"� F"ͅ� Mb|��|f�F�-C-ٛ�m����2�~=����-����Z
�������|�hc~  x��l	���>�橶m�m�.�Uz�m۶m۶m�=����e6Y<� B�����Z�����#- Ҿzw��X1{�������������P12ԕƼ���4��ؾb�Zqb0�'?��h ��A"���"�H@"�����Y� ��y�/��</4��</$���A����R&'g7�Q��s�8a���i�6���8gvaz��g��Cop{����<��t����Ȧ����)����xO��j��2T�c�Z��7�|jS�m���,@�J�!���@�[ǭǭW5�"�=�çFjƹ+J+�]�Z	��JtW�V��ⴒ�����T(:R@
��C����<��*��zm��Û���� pA��c��B<!%!=����в�8�\K�Ӹ�1<���^�[x�|�h�1�w0��Ld*�gsX�V��la�8�U�6��,��w�n܋�� �cxO�<��2^�x��v�#|�����7�?����i�ji�cEVfUVgM�f]�gC6f+ڪ���k3���ڢmf[�v���f{�q�"��a���'��0�õ�#�Hi��e9J���do�G&e9Z��c�89Ǚ�2sX��B�c���*8,`5�`,d�Z�Z��uj	��R6�l��.f�V��JO�_�Q���L�h�J�L� �AzeP�dXFdT����b�-�=[�bqj�ūa���[�aIj�%�Q��F[*h]�-=�+}�/2(C�|!_�W�|#��w�� :��%+H�T�����x,�呍�!(D%�P��a#X�au��u�>f�%�Ǯ8'�D���q
N�i8g�L���p5���?����ƶ;���}�m۶��FX۶m�6bl����u����?���k&7���=3�_PA%UTSC#-��_V����و�V�UZ�U[��Z��[�5j��j��k�j�k��U�Zթ^jT��Ւ��zfC�1�X��=��PH_�w���7Izb�Os�!���~�ڄ.�Q�g|P���8�c��\G!���,���%\j�l�w�h��1Z�ֶm��Ø���_���%��*���>b6�w.m��j�{F'��3��h&�_dZ���;�Z�H���0
�a�hKWY�,�P�ܻm��&ͯ��ݓ�n4���:D��t/Y����F�UXc�b-��z',�2Z4sZ��Yk��8Fڂaڲ�R_ѕ�,g#Gs&��4��o��mݩ��鯱d��4.�L��"�	�
;�j��˜&"-Ҥ�E��ENSpM)�4��p��];5i{�b͌(��~ #��L�TC)D]E#�Xt�X�497�{4ҧ���v�v�k^p*���42��tz`Q� ��3����#G��g<�#���]{v������Ky���:+b�1�N�2��Le�.J���yixn�e�e�9wq���{,du�C9��9��빝�c����u>�+]C-Ж��)���D�N7S����'�(��se���r]G7��ܔ��%�|k`�n�j���2�����������Z�Qn����3&}a0#�T=�|��������@�<X���H�]c_.�"��J��3fY�L>��o�V;�3q��ǡ����WP������9��隫��k���>,�$��T��Vt�<����[��۸�;�����{l������V�[k�l�m����6��j�l�Vk��j��k�6j�6g����̸p�J�mb\������\��i�;7�/N���b�U`t��!5'y�/J�r�X�W�Y���u�����Q�=x/-�&��xM��A D���n9^�@�f���\DD���d�#D�5�q��	X�eJx�i�b��>���7[�.�0��vq_X7����r��Iڒ�i��r ���          	� � �U�U��    ����&f&f3333@ @   
```



==================================================

FILE

app/fonts/GeistVF.woff

IMPORTANCE

90

```
wOFF    �    �                        GDEF  �  �  �k@��GPOS  ��  �  >���GSUB  ��  �  �$2|OS/2  Y   R   `=�_�STAT 8   q   �����avar �   .   .@@cmap  Yl  �  T.��fvar  lD   \   ~�w�glyf  �  L�  �hN��Ygvar  l�  sp  ��=��head  T0   5   6,c�hhea  X�       $�	�hmtx  Th  �  :�áDloca  N`  �   Qcu&maxp  N@        1 �name  _4    �Ć�3post  a@    Zv�Q8x��\[G�gWX�S-p�,LGѫD<�6���\cǎ�K�]�K���iWIq�/N ל�)��4���\����������R�D�ٙ�����}@ ���[5�@:X�fH�(�* �1Ԩ�[�:��b&?-z��D~��ҧ��$��ߛ83JZ��W�Ŋn��R'�5tw�݆{������`(�����|�[Vv����i���ڰ��r���ڰa{��;�`2��L�֯*�M����fH1�`��;�8�H�ԂLf�΄4�ߎ��R|���r�.<����oQ4�����i���  >�Ø
����g�*���+��'�^U�)xD�G8��I|>?��e�����?����	��Q�ga�Iq�|��)�I��z����+ԤA���gP�x5�����u��/��a��B�,>
�� ��DW\1 M���2��df?M��lkV���B��Kǹ��&�d���;�P_}}��x���p�}x��'�¬][�v�P��S�1*η���Em!Ș?��߄( {|�5+;�X���Ǜb�Z���Kf�-�G����{F��y샹�������e?�.���-���ۮ��8nlm�����ő�g�,�Zc*|~)�X��5��ZU�4<�г���(����=$���#h2ɑ�t���/~��{�u߾��ފǏ=�س�m��~��=`�X{fO/�w�d��I�`XN����|��Md�ÿ`-mGoZ`��D�/�����k	����@/�?@��Y̓���9@|�J�cS�
��T�4ܢ��q>	w���𞪞)���o�|n�8�c<N�<�����������&�~��f�1�|ԙ�0��4����-(�fA��2������+��	����o8�Y�]�Dt.�i���wf嶲*�Y����捏v	9�.�p�⾂�=P��-��>M4�#II���$	|��\rc���oތcU�<m�m&�1�d��&��U{���Q}[P�g�֌���N�=��DX�.;������������^��Μ�������$����*N^7��1>O��ixN�)�o�k�9���{��i��3���H����1��!��EQ�!��`��������df����� ���6$�O��z�gO�����&�����|!y�;��N�c5B�Y:��@�B-���H6\�d�b�Ǔ,�'����A��<�C7%?X�����~L4�����És��%�����c���'����}G@q���#,�)r\��1�/�%�M���xh3y-�?��`���֌<�����ty�Zh��E�C|z����� ��'���x; �J�OC2�A�'����1� �R��s�f<v>������y�����Ռr����X��I��q��zH�ؐ[ɀ��` �U�ګ=�GH�*mcK��3ݻJ�^־���'�w�|��b����%Y2itzkT<"�A�C�u�q��/nB�}�̎Ԏ�+����0��%��9�p�瘞���9F�`O+ɐ�$\���,Q�����5� x@��9�u�Ƙ�[X�kq���%��(+N��C���p@�S��Py�����	�1iH��z��]��m�ͽ�A����S��_w�v�i;D'"�v�nϷ�Gh�x3i����7*��X!�O*�����$�)�ז ��Q.?OI{��0����Wz��f��¶Ў�;�x����� q�l&nz���EE��)�y=z��G�`��b��f)�%z���Po���������i}d�֣mmG�n}�U����z�C*h���K���T�4���{8����S�U�1�G�G8���$~�_"}�@8���<�{����6}�%��ozW|i��܏Y8���?V��{�UY����v&�ħQ��
j[v�j�YC55�YYCNyGȳv���ۚ'�nt7�X[{c��F�\���U`���BM��=���RP���Q�ohp?�(��+���?A����2�וC�4�k�%SR`��t��;&�;o�e��U�i^*l�؎3�y,��1�p0�x�b��.�d���-�����l�z2.5��-������+#�����#�r.���|]���{�=�8��d(����AK�#�ɕ��2�vYs�_N�Iju�W?�
��)Mu��Ņ�z=%Q|m-+,*�>�{X���k��T�|���/�ӵ�l=�'�TK�&Uy�h��M��b_�"u�X.�"�1W��]�mӥ7��4�ji��r7T�����i��Yeu�ں��Ԓ-U!����Vg|^�)s�^�Y���a��/�&��[bV�#
ꭅ��G��S��S�30*�X���9�G *��pH�O��R����x����l�Q�Ȗ-�/M:�#:�5.�ƀ��;�I�4j�-΢��[o�t&�z��.pƖ����gS�ikKK{scABI5Bk&W��K���J'��<4Ѣ��ą��x�VA���>�2��^V\:�9�[��>���B)a�,O��9���̇Z�^<�l�Y������ROw���SzmCH�.7zC��tuy�OZ<P�L�eH^���
��S�����|Q���_���5�|�е���r_W��6B��������P��+rArK���0%D�YM����*a	Ȏ
	ח,J����"��'p���~���
G9��5 v�q;�}����]�K���) @���V� �Ej�>t������7�}������ެ!vY;��m�1>��|�H�*?���� �]�K5̫p���?�L�����?ߋzQYҢ���� �{�/��H-�y�����{P:"�!��!��ڦ���y���1>7)��'�U�)8�ࣜ��&�7�T��DF2y�XW��ă�O���Vqy^!�x?�����d?_�1>�
��������v�\�D�2�)�ei!.���W��k[�z�ﱃ����Sl[$�s�}�-�Տu?�HKv�ڦ�:�ko�������TZD6%�'�>�.�����8��$�̩�������R�촄J+�Eo�ػ�w�.�h�N�'P�L��[�y���i0*��'���O�>U=S���#��A���S�<.sr�B���(���@��0�3�7:���ڷ-o[���.W'�6����'w��A֗�^y���{
�������a��Sp>�9��P�'�?R�^��?CK`L���2���|7��)����'N������3�e��� /0�tYO��Y�2W۟?��.^Fa�k�e�U1���d�c��wb�Z�S�kq������]?���p7�ϷO�e�	���ր��s8G��V�|6[V<��ci����E�#�ÃU��Ҳ�����������-}#K��ڐ [j@�F{�+ቬ���@��^b*/KO�նo�7,؉PV�8�����'��%�ܔ}y���˵3�
���.P�3��|z��Op>9�.?�Eɏq>���8Gs?/�6��%��¨���zfij��$�+ J���_*<l���a�:�B�n�S�c�F�d���m��h��9����!;�o���kϵU$�JL�ʷ!צ���U��|�z��
KyP�~g��5�E�(nI�#�ZdXUj��ֹ:�n|:�<U�+�c#�b�LM�}�д�^���*�9m�����qU�)7��C��+�YG�n�a�VӊW�'R���,�@N΀����,�".Α�����bl&1&쵻��;��ZZ���!�④&��/��}gSA��jr��eq�����|��k���H7���Yy���������ty�4,'�ɹ(��J�r�dK}���P��V�	��4L�����Σ8ÓM�,��y�~ן��o�n�\����Ⲙ�Ҵ����@)b�	�7ϝ��No),lM�h��~��/3۟�E�'�v��Co�_���z�~�����ėz�� ��&6�B$Jwo�)To�教#�>�2��'�T�wݲ=?�7�a���VQ�H���X�lhp⺍%o;��߹t�����t�����E�۳��-vwuֵv�Y����Or)�qW�ao��	T�r܉�wH�O�u��y�\KrJP���J�瓛ո�攪���J�g8��<H����h`iӈd���W�hC����Ҧ𐐥A��/�X�%Q�O1�+:�"cCBBt��%����m���e��������tl P/�%���ޢ�O�:R��\Q!�B2����W:�﫸,�	r^t�E$Ha�0˷�V�#*'�2���|n|�Y��eiQ~�kYSV�P~�@YNk����${<"������P|E�6!!/ϳ:�tGM͎ҬdA�BAI��lwRwcc7��]Gސ��� j|�G�O�+�&B��_x^!?��i8��Ǹ��!��g���E&Ȑ������AM��o"����Fa@�&��X/��0�t�ٲA������2�S�唹����K�7����BW��J|U������\D�Ŧ��@m�r���:��f���j���H��Z� �/���,�����a�3,Ⲁü3l�����wy�3� >�~E����1�:��)GԶB�ԟ%=�c��s�I��0���0=_��m��H����>)۞F�6�X.}g�����i�?�|Jc�`|��#��d�|ec2-J
[$UY\KV�q���<�Dr��9���+���y��A�<����:=�;�t���A�'i(�?��6�)隦mؘNI����ؘ��S�.�����|L�I6��[���ɬ�s����a�=����c�t"��0&qT��eN�m8 لs�c|._Z������)-Y����3�g@������NH�j�p4$ИDJ�#�I�g�V����V�8�,�Ѽ$$P(ϩOrlq�h!+7.'���~I%��פ���)R^UkOO���XG�x���hi�F���ZM@Pgis���_\K�޶�^���N�W}�xB��4G��ڍ�]Wr�V�/~�&�?�*�Oq�Y���f>.�5�C�L��1
j�2	�����3Їf��=���2b#��=_QI�m���nh���\��e�PG��m������ҕu-�N�|���͠*?�T��
~��ύH�H �Yl	��ٙzo�?�Ŵ�?��G{�T���)nv���h��p��cl&~����D�P��BM��1�:�Y�"�1��ʌŁJs������4�U�WT����Ws��$^:E}Ki))iI��亟�9̙�W�D6�V�ef�U縯� ��U��X�ʑ��/�$;�7Om<�rڳ��l,�����'G(9)7i���Y�y��8�2Q�RQgx �{�<6֞� ���2Z��L�i�z[NIݡ�{q=�`A�޷V8���r�,	֕teД������yWOs-��o9�lW��ͧP;����C�>��j^�)�k�K6�S-�}6�{iN�>7��%n��c�ҖťY����3Z�v��4X���������������:��YI�F��97����%ۧ�.���S*�����!���_hU��O��Һ��/��L�F�]���L;�|�EhEFЯ|-w�z
�Z�j��aul���$פ�է'''�-�<���z�R�˻�B�2<��T�չ��Q5 d�5%�*N{��Ƭ��ڛ�|�������o�!�%����?�U`���('s����{W�T_F\��F�V�@���J5���\Mb���O�x(����eNb�+������^��|����Y���Į�~�%�r���Ґ6{��.�F|����xgnҕVݲ:�z9^�+9��ׁ*��U�	�'��姶�q�&߮�Ǹ��Sq��Q�B��g᠂��zfR�"�?p��1Et��G��a�����2�������n_۾�G���f��W����;��#�&k��d�b�* T�4����O�iU�)������a�&$ۺ͢�E�i�X�]��>s����^��믋���|S�/Y_5�M@3=�L�,:�
W���z���w�\`u�B�3�?���I	��=��,��1N�`(����*?է�8�-��)�||��>��E����A��Y��v� ��dzdy�?E��
'�Z�R~�˟��%?���p˗ձ_^���$����a%����?�T\Y�yŕ�K�X�Ә�e���s�qL�*�M5�G�K��%���s%��T��[�OJ>��d���T���|���S���9�Ǳ
�K�����3[�;�h��$#������u�
���/0���(��*ͪ��u:����IItzgv䖺m�V�ڼ�i+�Ѵ��r\��I\�@������A%��|r����.%?�������8Z�4��
�K����*�)�g��� �\񷪂��[U"��9�3`&�ɼ	�S.���d���s2wV�g"��l�3`8�Qxo�{6A@�����y*�F.+b����{���e�;��#�������ϋ��ʿ!��* �g��w�E���\q?q�5�Ry~�y��*�y�G�wH��Q+���^�>�t�U�<�o����P�[.Ç���e�z��I�c��y�Y=o/�yH�na��I�N"#�Y���G�U�ő,��D��%H�eY\VX�eY`� ���r�������s����������$��=͹+�W]#솁�_���������\~���/����T����h>�@�H1�N'��GA�������W��͠ǣ���5ώ�+=K�E5M-�-�3e��.������S�Sȸ=���$%��4�����/�2�X�*
l&ゥFS2�!�0�?�y[�^>0�e��f���ld|��mx��}��u:�>�ç��~�k�="��$�'}F5�Ǣ��D���
0��D�,�$�֤7��d�E����G����m�~4lY��� r,��Yi?�@/�~)��VE�?Psgț��[��$������oER!�����n3�؂z��5c�f�=ik�#��b=�:A6߃�	*��k��--l�xEg�-wa)��O�zC�M��E�I�&@ޚ:z�{�;ǯ�s+Sfx�D�ӣsb�N�ܔ�Z9� �`���D��� �
��~����=�{�ر���^�[zu�d�CV�!뤟b� ��~��r�|��¡ŀ:�OTJK�W	�>��,�/��UF�����_�jc�1���D-�&�ba��$W�<�Wg��+�ZIH!�ނ�� ��^XB=~�h\��rU�zP@��57f$ dF`��K'�d�R��V1�Vr}��O�l�e����Vk/]�*�
��|C��RINHTdfddV4�ߩ�9�-�7��5{H�i�(�����&�M��z�D��Td�9���"M��(NV��|�*���#Jo����4ќL>hNH��6��`D
h}���"|V���ܪ��:C�݀f�t��c� Y��HG��aC:�Q8K�2m��!Q~|O�9=v�ʇ�~��Wˋ�� ?���9uD��=��A��qkd�8�s������#.���>�m�鑑������gC���<J��׬9�,���pee�.�f������K��\x�#.����'Kxr)����w6�7V1~��,;a�w�,�_����m���2�0_�n�w��a�]��lS��LĩO�����3g`%��J�����1i�u.��u�����ҧd��8�Iz{I���C� ԉ6�Q�tc�NΣ�2l�%����izN��L)��i/�i
*�nQ��˸�*��`ߍڢZ�f��^���}�&��N�G��Q��6���#��hz�9���Jv�.E�jQ��g��A���'n�h˷[���y�Y�)գ�9D���[H.F��mu���:%3�F�����|;��4F����L�f�hxo��!N�C��i-Q�:��a��X�k�,����Sv���=�Rӎ����Y>ʮ���G 	��P`�g��I3���D�*k'����s�7u:��@*�[z"���zF�� �cD�����]�B~2�[p7�N��lI��E{E��Z�����h�^�uX&�$�T��� �X���$I�6���?�-�=g����0�%40GY_�*n~�������)0��G�t�ܙ@<��*~u�hʹ
V3v��z����1�9�j��O��Q��-@������uQ�B>�7�F��vz��¥�?�MT`[e�����l�f3��M6a[���iws�S�5
3U}\��@H_�I�����k�Fz���ş�`��j%��I��N�0�Z�p��64X%��E���j���h���Y�"ndt�Lo�����{��SS���tJ/}�����	���.�m�!6<�m
�������_����a���e2sf��T���RW���Ҟj(vXj{�m+3�i�N#����t�A̦��!1#!N0�$��{���⹣z7+0���K���F[a��m�#�ϊF�[:u����ܪ���x��0�;���cm|�|��p��?�G}���ݿ"�E���(i��	�cViDg��@'.2]��ya0:aWŲ�-���3�U3�U��&rJ�;����h�^�-W��x��@���� �>;??��r��%�ýYߓ᭢��b��`�;���끿Dr%��݃:vVͅ�g+>�O�p�d��s�F��[���1ͯ�g������m��k�8*���Wp�0�k�=*N&,	�©).n�? ����c`�_�m��Y�~�MtV֗��Ƥ����m�A{(/����VH�B�$[n��t�@����|REW���|a�Ҏ['�;۝����6�����j1oB�m��vw��6,uy���n��l�����|%W_��������&\���<�ʳf��?��̜�w��(whg��d�tg�M�L)����ߵ�=�vv�C�:-�������E(H>��r*��bv��7�VI��*�.�3D�W��W�w�֑ђ��[l�7�duV�����/ii,����z���4T�$��N�Q�l���C��#0p<�H4���$��.��j�����m	LBo���ź�����,}�����|}�❯�6��2NI3���W����8��O~Cx�W�r�<���PC��XV�XAX���U\n��N�kHc���qbȐ]\h+p�IH^f�-s��Pg��zq|\���*2�&���]����ZG_�C��|��5iR��7Qn�ϚO�W�_�*2l�Mz1��ǉ�bH�IǤ��61lR4��iF`�9��t�(���ґ�ҐK���Y֖WQ��L��?
jw��yӬ��������r_�H����~4>�{�|e>@;)%�Jg��z�h]�9+EY�D퟼ϛ�������s���6�u`m����]���4��ȷ }��<��8[5����?���S�)By���#�&�Ɩ`��������]�w��a�سaCO^OOz�MMT˿������8��
q,��,�M��ٷ��n{c6�d5ۘ�n=z4�ek(>��~�S3���lWT�}�s*�㔎LN¢�ȣ(\��_�o��x�7�g#��ҩ/sO1�(�PH]a����,�1��#��D���h�&'C/�4�؇��BY0��l�Ï)�f̭��?����#.�֌����������/|��677>̛����m)..)��"�#�q�q�~�8M
�E�PO�5zr,�C���ɞ�B���y�� CV�$����G]Ca�2�&nyD���?�1zn�=z�"������E�=_�J�1*fF�"��fwޛNl�0 �'�N�,��7�ٖA_�Uz6�
ͦ/��0��Q2����L�(��Ǵ7ވ�4��l���3R�Ƶ��Y|@!E�_��EaMy��F������Xa�R�Z�L\k�ǂ��g��wģO�%(��Q�}�)X�xf5&1�e
f��z�n���k.��g�������WQSS�n���{ꭧ�z���₂b�I�i��p�90Щ�B�a�d�K�Z3F}e���<��D�sI/HCH'���|��������,)hra�U=�d��T�s�d�}�fU(m--�Ç�3,|d�ʠ�3��v8=��S���͛"��I9�M��c�r�
:�q��:�)[�q�hגUi��V.���Q|z�S��~X�yNN�37��L�7=�"�H={�,ɒ��0�i\.�{X�Z3� �4��,ZQ���\����,g�����,O+L1|[G&H��/�K5I6w�NX���Ԕ�)])�05nޤ���2�L�Rg�$|}+�����!�M���a���ҵ�:���R��wz��\ǿ3�^�Ǜ�Y�߁��Q.�FMs�d:����x#�-��6�%���)���qG�5�H;�������Bo�亩�Jإ���G���"�E�i���i����ZcSY�m��
h!�OJߏ@�'�0C<��˛�w<+�JD;@��Yn��[F[��vfx#{&!�Ϳ�K�o���>qx���(�B�w����i�4��.�w{���w^��w��`�������㲩��\q�f��s�Q�G.r����x�"ו�����V{Fe�����n�gs0��c�vH�t[Վ����wTm��r��w_}��޶�-T=A�n�r��`rf�ܘ�hN�n���Q���dэ�i��%y�\��&[3��*o�3�2�R����C��R�R�����ދ�_&5����h��B�,�WK����AB[�"ef��{R�x�Ӝ}&�4U7���]���u�/�ͧ��k�d�]n�e�+*���gA����VW�Փs,���ruy��<�ē�ٗ�d�-#�������j�;��X��������%�B���ꑯ��Ģ"�������*)|r|�� ���S����C~�����~N��"p�V@A�´��������O%���H��J��1F���h1�&K����~�w��` Է$�Չ�-ެ�֡�p�!ŷ_�ݷ����kh�l��t���֐�ؒO��h�Q�R3;v+�q���cz�ZG��J}>Gsc�96�x����C��/jK������W���roY�#f�ئ���DӒM��Q�r���8�`k,n"%8f0�c��d�`_�(M����(���ž	���vm��h�"��]�0+Z�z۝��rTz(#)u��qGe��jEuOKko����gIE���vV�c�T�h����T��,�����ޞ����	&��` ��}�oo-�	ړ��`���w,,*���em`��&�h�=�o��i�,3�&/C��K����bi#��˗����F�$�����[�x��ǹI��KC�XJS��W.����e�6�5���aXծ�t�����'�1�o�hJ6v�����~_m�1ٴ��?�����`m}=*��VT���#�r�&q�Zk���L��'&��jK��d�M���5�M��vMK~N�ao��%�@�-�[?1����A8ݻ��=O���NG[aA���U�+�pn��۹秇9^��"�3�3�;���uʝ���:�.��#:��_t鸹7t�{�|H���}�[���K�~�,:	X�\�;H�N��	s���w:z�&��o��&��o�������K�ߚ������9l:�c�ͭ��u��#?�; �[3�X�tr@:�K��S�y�e�X�����{> t$��I�����������O���f��>���L���#�=����������$��e�>��^t�Ͼ��0�̷ _8��c*� 8A�[X�_�}�3�����{,��wμ�#7r��^ ް=�p��;e�4p
}Nn?>�>��T��c�����>�<��]��J�����䕈����#3��S�K�G�?��5���ς�����ؿ[��译ߞ��^�L�h�]2@�i`�I2�t�z�\	e(�O���zN��}��c�K++�z�ضTm��*�UP憲���
r�<Pv����4q�+��ն	���^t�2,cK���}@G��Y��S%!Ի(��jA���@����+v\/�\*�������������.�����s�W�{wά��-^c�}?hg˼�����)o޼�A�I�I'�U���{Ըu!-���M��$,�<��d6Kg�T�7�B����1av��T>�
�>�?d�ff?:Ht�j�u��kג�2e3����L<S��A+p�oy+�#�vcԴ��XE�"�Cݠ��~���_Ù>M�S[dr8�hK}��h)�x�b�>M�~)ɫ��q�>SJ��w�Tn������b�M_lG�9��l���wֻ�3�,l��i0�T�
uV]~Z	_Sn���Y����04�"t���p�h�Sp��Pyy�
��T��N�;�a(��P�q����}%c�/망i�%��k�Zsj-O�>;ǪqV[�^���zs����)�Gl$g�����w0�i�#}$�������$S�C�]Xk�4U�6g�e�tz�6-�g�W[;�v��f� ���Wέ�_����c��:G}ICW��r��;]>R.�������'���Ca]k\uSG�<q{?-�<����, [v���tK^��O��N��-�m2:�ݵ��2����Ql�K�Wլ,�)PW0y�r������d�z�&�C��`��-�Rfƣx3��R~A|d����z�Y��s�&"��:����.�ZlXn�Y�Wk����f��z��p�%�����)�aGW���u��uW�<c�xdD���b�+]��S8�#��=6x���~�?Ū��7�E�Aa*��M�⥱2��4�q�sa�0cK5�1�G�P���*��� N疅�j*ǆ���Gz���n�O��aI_$=�x�s}� T��J�1	���u�uu���qx�쫣�M� ��O���T�U��7��Aax����Mᶁ12��x��NK�"��.Q�/M�;��o���=�3�?*�v+���!��OC����zrf����>Nֵ7�T8��4?3�;Ϧwz-\s|��ieuxq��.d.�r�R�T(���Z��SY|���ij"��S��I�+��-�U�&��|���b��I��P��e�r=Cq`��� ;,��6%���I����H������p���-��&س�a�}��t%:,�C+�=�F$�&�����k��:t��'�'�ϓ��"�� ��ַ���6ܟ%�ݍ�T��d�F�O�l����FN�s��_�чx2�0���k�Jo?��zv ����3�������� �6[��jի�EEV���J�&�}��eM eS`|�<U6��'�<�ɈT69	�F�̨/�M>@ʦ ��Ѵq���h�3U8qծU�����βi��W��(t���ka���Y�Eٿ�YJi�j�
.��	5;���4�M���Dc�^���]o��,w�c�z�D8�g�L�L�ʑ�j%�y�f���ZR�Wֶ��)��9��b9�!��T�5$�0@��;jb}k�"OSe=���\EY�����ij"ۯRe��8��Z1 q�!�H�M"�2�+q�9�]��cC���;~7J�W8n3�{^,�{l	���k�R��3#:,v �]��M�����b����w���Pp���2�My�e-���}�3и
ӝ�˫��R���\>�
�Kⓓ����bRLJ<0L�Y�φ��j����p;�����$�y��0.j;G(pxy�":~�J#5��,��5(J��fs�؟��-��9�ߌmlz��v�{���l)7�ܟ	�-�RD�d����pZ��ф��M�#�I�cH47��DX��f��1]L��y�+e�S�O�u�2���qz��	�ك?��ɚN��唙��&��aس����/���'��r�Y���!�c�{{����O,��� k�����&x�Q����V�<�*W����zv�"��2^z�[��q�?�<�±iy��lT���A���F���o�������
�=K�PI|�N�ʔ�gy�=)'2���Ks�aF�!|�yX�lR�׶<\���ԁ����w#��D����p�<�:�o�>��E���ߘ|��.b��pQ���K�y\�g�o��=b�wu�L��8��<��˦����2eɺsy��0c|��UW]�������^b��PiK�S�3�2ǳK�j�**w/�=,�9B�{#�^܏@�����M�E&����L��̳�3&m����3�?Bq�~)�0{1N��C�=��=��������t»�*n+��;�м��Jj�=!�1y�	�۷��WZI�����`< xV��l�p��ݏ����$P�t�^J�
Z)[tx�},�H_��f�)8��u�hk������a�����������%�3['["E":�oT�<�I�`����x�A���̈�T�����jn�c2������6�7�&�E��M�[��ִycb�sbw��w�S@��s6|��D�����Flн�n_1�����<CV�Wս��>�3������8M�x9@h�L����!�A<�xi*_A� Lᩎ|7���x�~?F��B �W�;�
5� ~,��2I�0I���h/���4�RT6|���7�r�^�F;���xX�1��ꪤ°C�};��%T*��[���o�k��Z�ڇ��!ar<�O&�a<��d��L����P���UW�8�o��-�÷�,�7܁�{.�{0.,ŠFc��$��� sF&ƴѶ\^79T�����ŵ�֬��ɚ�Q�8���床����q�+��1�A�sԍ�q^�_̌M2����\,[��pA)ŝ��?qWʟ	��ˈM�5�d�]���oA,xrR��QS;�i
�J^�>�Q�����gٵ���\_E-�S����������̙�9�Ho�,�-]�@�����v7Z��޲F;I\�颧7-�i�­|؟᫯HV6�k�g���_�3{4��Ǘ�5ֿ���r(�U檶��|U�S�*�|\	��;(G�j]�ө�6t��+T�k��&���=ḧ�g�s.8���+f�Z���[۴�B��[�����,�
��;�Z�}�'+Wd�6:W�L�n]���a8
��;ݥnK��I���� ��-v���瞻�xk*�-^�n2J��*I�;�K���D��Ӽy�W"�O��{"�~+_����O_��#����c��_��EW�[��3ڢ�Q�L,t�����!��ia�_[Ӵ��VUT{�o^F^I�]ڨ)��6WIWX��[5Ƣ��ڀ���֕��Pﶕ�x��r5]��9[���w͇�._��^�S|r]�vM���px �LT1/V�Y����*!=�fQ�v��5��YZ���zf���AG����)Mt�J�O�y����I�k���Ĭ�w��ڿ)k��7��lnm%!��M�F��Z��-�P�e2**^m���rF��ni���9n���������_k
{f:�L����!����E#�?�3��[&����J֌(����)[�l��@��ֺ�:��c��P,�	���b1t@|�	��PU�'h�	.�~t7�w���k[KJZ�^Z|>�t�����V>��	�3Ob�`�D��C���vt9���ϔ�'���8	t��9�"NMc5B����xmj���
"�/���q�V��H��%p
;k�͘Z:��?���y��ĆYO���W�Ԟ].LG)-����h,/'�jj���D�:��ns8l��
�UZ��qB)�>��� ��2���L*B[�,FO�Ccs:X�t>v��|������X����Ϳ-_���&�O�gjoP�R����qN��X?��?I����>��ث�N>��Õ�M��/��1ON̓��7��K�JL$���q�#G�>�f��SP!�ŷR����wa����wy��x}\����іɊ��݉Kv�A&���D�~�����]�y�څ6u�h ������cG���Y�Y�q��'�_,�(@��c��_�Yܮ]�YaX�+|�Y�]i�n@]��!D����o�ǝ?p(�u�g��Ò5��+��u}ﾸX�����s���q]_����@���fQ�@�E#ⅰ:�<?�/��e��9�j��M�v���֜������hN[O��oj�	�:�Z��C�����U�Y����Dѐ���3g'�?��.ۃ�āwK9��p���!x2�Rh�k�f,\�ɱ�t�*U�::�Ŷ��*�ѻ�Ï�zj�(��>�.k~��������ҁ:�o�FꤔԪW:�.&���D��ӁG�9Ng{�Gh��.>��'?�(�k�-/����i������[H�@����Kk�M���@��?m�[ŏo�����6��c�ym&�M>�ڃ���k�*�m�2R���*:O��Nv�>]GJ��I��Ĕ+��E���tUK�-˪2F�[�mQ�*=C}�DzQ�7�9;��2��m�/���K*lQ�,Wa��#��M3�] �Wk"�L.}7�re�Z�/q�t\�Z����*�G�A5�D�im� �WE'҈N�Tpe�0����AH���p/|�6��__�3�}�Ԗ�Y���[U�U*����|5��-J�a�pHV������kQܟ�]�1Y�B����	)
Q�l�+� Ph��uM�.�n h���_#�u�4..]����mpP��vg֝�}���_��8�&� �����G�K��� 2Q�B�(q /*��g����7z^�p
N/���K��\����z�g�KNͯS�_Y2�¬���AA�+�'�P������;�A� m��9��R0��[R�O��*���K�7�m1�_��7i��D{�į�3��ֲ��3��9��f�N����EE��0��ݪ#ڂ�YE:>(�������ҧs�`��_���b��jZ���Ƣ��*Գ�f1�3}oMpĘtb��u��J<������Y�M0j��{Bj�/GG�]Y]I4!���Y�����=�׬��CŨ��q�F�w�l��["H��X�k�]~���`���ǍƎ2/�{��H�]�i2u�z**z��:��u����pEEb%%1��x� �`0R��a'�oo�Ӧ�ij�����X�֘���W�V�	��~G`6����_�����K��x+��e���5��@st�ד�Ѭ�^��I��@�Ijϡ�6�	2�*��#�mD��Z�}��:�)���$��2�IŕŁ�{�q�;D�\ȁl�����\ن��(��P]��1��{$� ��w��-�)�R;Kl�"�FG}8��:�3#����#5K��[���5��5�J�:6�Y��v���^_�'Y�OT�����>6���S��<;>Z�b��{2�4�[��s�ƴ9�u�*+��l���������ˏ�|��ҹ�쀹o.�7̙�]�pŲ�%��LΖ��.�G�Ì��BOS{8���s�ߵf���84h��&�G�Y\.�t@�i�&ͰӟT$��DE �s�>��sb}@#��#)�a��i2�, ��L\Z߾d_�����]��v7y)���?*�0��Pf���Z>�t�8؍�6���cW-/�I&т)3�3&�{���Z�!����x�:�Β�2������y�lȗ�C�i�8�B_=��ø����h7��F�J�4	�	ͱur-���4S�i����qp��³����E���Q>�zm\�ªiI�M�g%)�;���s�ll:�	���½ �m��lT���e�?iz��ɚm�U*�Sg�P
:>�Ni��$��%_th�f�l��b���Ny�-��62�j�R�;�n�ȏ��=<��!����r�3���E�lvAQH�R2�^�	X23M����ea�X[v�\�����6�|��D7������A�UH|qF�����1A�.πe�0"�|W8�Q���*�%�54?��Ma�p)b'&�p���i���X��C���=w,J�;T{��a�x��F��W�Ԏ�b#�w�tÚ�n�Rp�8���jI4����M7�p3�L�=՚��#/|)m��v<E�&M���>�i�7�~�KD�G��Y��7�xӉon��W#�VrvV��b�")j��*)ß�|N�ߜGvfש��F(����ע��	���"~�r��_؟���	�_ez�t5��ᠰ�&�6a��~��)�<	<<Z'f�u����bq~5�'�j���iFE�y6W^ȣ���v<%�i+�?��s\�Y�����7���a�Gz��?����Ğ��$|���3'���<��I]����`Ӵ��Q�<ʒ���Vװ�D�:GQ�LKw�����	hܖ�ǲ���^4��C��d
��x �������7��[��}�#���%����	�mI
�����NR�1E	��K<�E�^���oV_�����N�?��#0��~�*�?�}�>d�`3z��%�=��M����v�6�=54�6<|���$��y���not��C�x?t?{%�y�tw_2��'m��7�����¼��<��4�M���cbL	`8&�42mL��,b�fD��I��҈��Z2_�S��X�eQ>	i�8�X5���Uٵ����`����j�ʋ1ac�,�`��.��*����i�JoC�B��k�BEٵ�x�</|�֦�iX�m�`��-��eGV��xOaL7�i��m6�x͆��bN�[{��dЕ]��<S��N�r^J��n�+m�)[�㬚��f8j�5�yMyY5�9E�n�^oO�-�ِ�r�m32�/4�Y��3rk�9�΀w�yL��1����_�[p�-�e��}�	�����}���?�0&��v�����ꊏ�vtH����C�5����mW�+�S�����+2n����%~��$U@*�?��Kdi��ae(l��ʣ|�D����C�i��`m�-�=�O�N��|^��S����t̤ �p�r��o�E��0���?"x�8tP�]h��s`���.D�-[&��0��@H���>�9�M����hz��16ؗ�K�$��wS�S�%8!x�����8=��Zt�S��|h���4-��ӌ��1��GF�����-@�`zed�����O���~Xw��}�_��Jd������n_�#���#��(_:P��G%y�&��(z�ѓ���u'x�Ҟ_P0�@a�j�ڬ�B6̆�в��ܙ&{U-ރ/�䪮'4� ��?�W�?G��O��Y-��Cj���Fy��m��>bc�cn<�6�q�v�+�#��M}���]�x\^>O�$9��r���J}j��&34ìכ��Fw����>�j��P[�)���5~T�-�h���aZ�����r/�%�B���a��m�rgq����+1f�ț
s&���-��LX*;Rem"x�I 	�Fb�L��C��|�����E��o��lƪr��tZ�Q�3Z�[��x�Ҧ���9y��i��*�=������?�vOփ+�UzO�!����Ӳ��?�����O�=}W��KzO��R����T��������r*G;��I
�l�n$߯��i�fĀ�S�YJsQ�ڎ�|��Gַ�x0�����     `  _            x���<  �Z�ֶ\[g۶m۶m۶m��6϶}�m�'���s���V�pV�A�G�/�B�1��Q\(�w�Gŋ�/�k1D�(j��3�F��`1Xv�� B**U��J-���@i�tR�O
� ����ʰ>l���p<\w���/x��0EVdG.-7��ˣ���by�|U�*�)�B�@)��W�+����s%M���V������c���� 9�%ꍆ��h>Z�΢�?�>z�BP���Z[��6V[�m�jg���Z���!�pn\�ǭqw<O���j|��o��8
�D<���&�IcҞ,%�^r�\%���9�LbHŔт�,�I�Ҏ�/I�҅t-}H��0��C��s����z}����f�4���FK�����l�6�����m7'�����v3�L�+�5�kʹ�Z���I+���vk��=ԞhϵW�[��Y�'�?����Nr�c9%��NC��3���vv:��$����-��t��ݽ�I����{�����:z������G/�K�k����~�?����g0�+����7�&��l5�����'v�����s�ʼ3��G��|1_Ϗ���7~�?�oyXP<��ZY���8  ��l#�S7I�g۶m۶m۶m۶m�ޫ�v�&�y��^�o0.L		t`&���5`�����n��x>�P,�DQ�r�b���Z�nh�f�;8.N���|���;�xށ���)F�Qd�B.�[�y%ŒJ)% e�
I��A�2��Br�\M"o����J�4Q�(=��啚^-�vR7h�5K�����i˴C�=��t]��,z��>@?��1RĈ1J݌~�(c�q�Ƣ�N9-E��.t]C��c��F_�����Zf/s�y�|dŵ��U�eM�Y_�?vb;���
v{�}�I�4q8�+�77���2n7��;̝��qϹ��w�����y'�_~j��?ȟ�_	�<��	NW������R3�y,+�ʰ�	����l
[�ְg<.O��r�)x&���x%ހw����o�����ER�^���DQLT�D1C�wBf	��K�]Q�(��kD]�	ќhM�#:]��0t�P @�ٶmV��m�흍p6�ٶm�^8۶m��|$Y�$�ISғL%+�qr�<%�i:����ui_�����M��~e)X��l<;�.���;���
�嚷�]�P>�o��y���E&�G�E[�[L�q+�U����P�]��j�t*9�ltӹ����E�������^Ko�w�{�g�?տ�S���ǐ��Îa�pd�=<>�F�RQ5��F����Xǝ����x{|6�#!Se6YA�dc�SN�k�a�Y�P�j�����z���:����ꖺ�����z�>������"����P ʁ �����lX��0������4&��`��lf��f�9hN���K A���[bG�}q(�ũ8��Z܊{q?�ū��F��?��   xc`d```46�Ri\�o󕁙�<R��ЊB���W�Tb^�30�D<c    x���lI��Oϳmk�]L��6g�m۶m�ֶm۶�{�kdrr���S�/w5NWwU����?E�CR�|�Ϣgd@��Sr/c��J���>���.��hf�O��H�Q���p���/���T��E�SZ&� ����0)�'����C�J���Hts'�'���a�HÔ��X)q7H��� ��\�YR
��e,��ə[y�OAu���������y,������8?gM�)�_$!E"����}�%� ����g=�����$���X�̅�|{�Z�� ?KH8L?�7oS�F��o�o�����&��>]ҿ1�Jg���$^|+5��)�$�Q���'OL-���.4	
2�
s��R7#ASI�7ť��y.A{�/�����c╻p��%�����E�!:�y|�����ޝwl�����=ic���7��[҇��#F��.��;�+���f�eyr:{��2i�+K�p�Է���}(�-��?��ֳ��C������,� ݖ�L�� Q��.xï�A�7����,���־�}�0��ڪsI	m��Iil����σR�~�e��$����e/�$ʷ�������k���� �>�\'	�5#�K= -�=4�D���8�E[$�"���P�����2��7+	C�h����H�
;i�\h��9�훓��0�a�>���H�C�0���e�=.�M�Y���r6q��m�Z�K���#�}>L�=�a �u3�]N�wo��PCCH�84�z�J�v]_���P�@k=�,1�F�R��U���^j��p�����yΓ?Er�&ٲK����D�����9�4����1�%n�*�3���_��U�H-y�~k��m�[�k��YW�V�&�[E�	��N�C)5�=F��3L�lpyjcF;�%����b%fP]=#�߉=�=�� ��ޅ��l�$��}$��Ƽ	%n+WIC݊~?���y���?�s��F��H��t�.j���@�ԋ��(<'W��)Y�;�>5��RP�:�u�hu�V�6OҷO`�n��	ֳ�� �d�ғX�F�i�X�k��5.���,���>�Hao��=�=�Bw��Mʴ���4c_�:���@P
H-�+�B��p�L���|Y��@o�j)L�̄���AK�#��<�w�Dosq"�� ̞�   xc`d``��_�!�3���ʜJ@�� ���xc`a
a���������������9��B���O��aA�>~31����|��M��a:H�I���R`` ��5  xd��1���m�l��ڶm۶m۶m�ָ�m�>#X�~Dd�/�Oj�̈����4��� �J�imIDF�W�De1DL3���Jc��[��C�9뎄�)����+�2�\(�˃��"5�9��Q %�-��1s�+�{q�p7�/�.~Q[٣�%�a�����rj�Y���qN.������7�.�χU�BiU[5Q��b�AmW���L[:�N�����u9�L����u�9/׳ӳ�s�s�s�s�[�7$�̖([�li�N����\����QZF[Dr�E��EQ-PY<�R���X�%��2v��NO��4p������Z�z`�`V`��@��:�9�=�Ì������I8%�e������^<,�>���T�4�_�����q�>Q8}+���4�������\0���>F3[R��h��^�(��,z\m�ۋjP�������^uO���79@�Eat���Im۶m�6ƶm۶m�V���W1��c�컎�t�UM�P��rՏr܏r�r*�JŮʦ�J�h��- �L�ն��Y~���;,sôpw�n����m��a� �OwApcpEpN�)���B��)-�+�����iߟ�����@�Y1�0*��ڭ��N׃zY��k%�@�c���}�/��������Q.�U.���M�?���K�ڿ������OO��}^�E�E^�U���WI���%��/�ɞ��o�~��� �	:^3t����:A+�J�t��h�Fk��j���ݺW�t�6uhD3:҉^��_�X&1��,f)�X�F�q$Gq<'p��j���Q-W%�,��
o�1��߳�t��g%&��h������Z;�l]��V�R������V��:ݦ�t��u�m��zD�{�.҃��ҳ:GS<F�l��Q�T[M&'�$bI��iCsZҊ��g i�t�2��,d��d��9�Ybux��x��y��x�y�7y�wH&�T^��
J)3(�]T[sklM��u5����Q<LOR��i�K4�e���y�&�F[ާ5�Ҏh�[t�s:�)���n|A��7�2��!d(����H�C&��f��'���1��L���0�b�S�<*Yd�r�a�ű�bYm	��Z��$�X"[���>��GX��`M8�Zs���0k�1ց��'s���L��ևh�'_Ӆ�M�6[����I.U�{�G�Z��P��O�J�^���q@ @���T��j+YŶm�\Ǚ8���^�w䟏>��F�B%J��W��)����+����g_|��w��dH�)K�\9�U�4lČy�,Z�bݚ��sd��-���lشoִ9���q�֩:g��ΐz�\ht�ɕf�Z�hu�͝:���n�C4�C�g��!���8�B�hH��ApL`    �_ �r  @�	��l� z��������������������������������������������������������Z���r
 xL�%TDa�;�?]�����p-h&o&mO$
.���@C#�~�Tt�"� �
�|B ��!D�#O[�zl�c�vP�.�������a��1��Ŀ��wy"rM<y�y�M�/��vy�m��L;�j/�"������ҵ��B�P�*���t=���%CV��82zK'Ю�t}�S�N#eRt��旅�G�l͓t��e:_�&]@�l�Ed�6]�y߅��A ���L1�7���qq��8��u=����o�HGϹ�=91-w��]n�<�������D����ӭ(���;f�S�A?�:��Ew���,�w��R���vM�f�׉����ϑ�f.S����oM�'ƶȄ���J��mZ�����s�ث��F��{���Y����?���vW��,ZO����c�g|������rW�0�Gr3����H5�c�Q�B\�ש��Fs���L��Ǥ|uG԰��ə��J,�(;w�BVr,��Q�E1k�Cy@���3�h}*���
�dx;z���R� �k�~;��xl�5B$  Ē]�wg�]��?z���w����s���$x��E��`�9�92`�ٱ�f��e�Q����-���v>g�9�����	����>�p�!R;B�QN9��\8�d�t���ΐs�9�yC�����j�"�\�ƍ1�l��>%�S�b¤)��y�3f�Q3o��%��Z�u^Y�jͺ��â  @�{?+�y����v~/����}H��u�sX�z7��Ml`#������Mn�����.��ˮ0hȰ�ƌ�0iʴ��t����^������=�Q�y��#g���-Z�L��̳�_�b�
�V�O,Q�F��uj6lڲ�2+��cמ}	8rL��4i�qB˩3Oz���=�Y�<W]���󢗼L�+��1`H߫^�#���IR^��7I{�����wX%�]�y�d��)3&�	��( `?�,�6S۶m۶V�S�T�JUQ%�ըU�Q��cX��(���hզ]�N]���է߀AC��5f܄IS�͘5gނEK��X�f݆M[��صg߁CG���dL9�$Rg�]�t�ڍ[w�=x��ًWo�}��%#+'��ۏ_�	���  `�Զm۶������&�P�P*T�R�F�:�4jҬE�6�:t�ҭG�>�2lĨ1�&L�2mƬ9�,Z�lŪ5�6lڲmǮ=�:r�ĩ3�.\�r�ƭ;�<z��ū7�>|���ǯ�������������!]  ���n��ZG�G�m?۶��xF�*�w�IOQ�iְ�u�g��f���3�����E/y�+^��׽�Moy�;����}�C��'>���M1�4��f�f�m���o��Yl���Yn��VYm���Yo��6�l�����lc;�̥�ݴ0M&�lg>��o��v�m����� +	䐃,a)G8�>8���1j̸	��8���!J7=�1�<���N8���8��E����<R}�+���|����4FY�{?��O~&�
����I!��A9e���q�8H	u~��jک�O\D @\���Ї|Ї�������5��B�MZ�D�$�d����ХG�CF��0eƜKV�y�=���|�����˟�c{�[���w��}��G>��O}�s=(ѝ�+P�X�BE�T���o|�����Q	�W�两\���D	g��7��]l�(i���y�^}�̌F#E�?��R�j��rÌ�p�fU���ܩ��8˫����q��&�2�k�<K�Q{Teڈ��$9�G	�$��Ko&Q���qC3�7���rrs�³����~��6��/�s~�|g��JK^I,��X�i7ŰC�2��;��$>�r�{i�6J�G�������j;�Lv��7�n�V��H�f�!/.>��O�+>%��ӓ���΂��g����\��P|N��ϵ?�v?�����*߭��i�%/��q��\U��k��J����S|M&.f�oh���z~t�s�.ʬx?|��vz->��kÞ�1`L���BB,;8��!ֹZk"�Ų�����P�R�4������(:���􆎔�W7���������W��E8,Ͽ��X�"�݉�F�c�R_��?�����K]~���F��[�\��;}=O�OƳ�������g�c �a�HF).g���Gvl+n�0Q��0_i]c�/�	Ě�����aM֧]��Sw^l��������g��;ʱ`��ӕ�E����<�#.��Wo���iy��P�H,vl����K��#���K����a�D�Ϻ~��/��4��a����G���b�-�GK������=����?�<��Ӱ����i���?����Z��3�)%���T����T��Eڗ��]Q��	�[&1I�}c¡O�\�"��a!��"��a!rX�<"�HQt��|�0>tTk���.�zCc��2;i&Jw��ִֵ�yV�7���!9��!1�_��g��|��^��I������&�M��xw]���������4@���4�� {�:�3�>�z�`��:{=p��h���M�m�=�}0��>F`_g ���u��.�>��K�������?pA�C	"_d�tA����QO"�^#�e�&(A�送	B[6� � �<.�> nB����9���m�&(�����]�����1�}��k�יC���`�/��~��Y �	<���'2A�@�ǈ���{����UJ�
Q�4�h/D�sA�� ���9�p�$d�h��@t@�@������Y�S4����a��SgͦR�ݕmE���_珝�V�j�T��4]�.�|�ڠ3���ͬˍq=��b<��4���%h�6�.�>0=~F���AtA�A��o��l��G�J�����/����S~�,ð�oT��+���deQ�hxQ�m~��(�7���T=fE��7�W�"�Ӫ��1�׽:���u���R�.�b��^�h��s0#�٠{.`wA~����*T]���p�80������?ݧ�-]+�ۼPwi�:���6MOl�]��]�lX��a1ъ��E�V%	#��90Ð(W��UU>�o8y�MHW�;�����[��e_s��l6c$\��sfb�3���	Z�}��S��ZU�i+�M��.�7C�$.�{:}��}|ؗ6υ��a/�M�T�/D��](�x�t��t��e���o�n�8�ߜP�7���i�C��������q�N#��)3�N�6	Ơ�c��̶�&fH�����Q���P!�^�����}7�t�`����m�f�c:��o��Ӧ*_���˜ x%̱Aa �/?  �@z��@0�ރ2I�cE�ut���Ɇܩ� ~]IORO�,IS��5�"/�N��"��(�πڂ3��3� UP�x� �@ @/��Zk߶m۶m۶m۶m۶�� �o 1#G�?Ĭ�?H
2���<�Z��`8�
���%���ˌff2˙��a��U�l%�!ہ�ώc�k���I���+����p���5�	��/�w�'�����^�4��D��i��BK��0SX.l�
����w1��b7q�8I<.YR<)��K*!U��H�}r��<Z~��W�*����a�rOy��R5���Q���Ug�+�[���&i��@K����j����y�3����
l��Qp\����.|"%@�Pk�GS�z��F7�s�����q{���3�r�����!�$�B
���>iKz�dY�S=��Q/�����m�>�(}���(l�5.���&kf\����<k���XC�i�rk�uҺe��ڝ���u;���N���ֹKMZ�֠�i:�N�K�z�^���G�sM7�[ĭ�vu��-�!��{σ^co���������_�o����c�9�j���;#�#+"��$A�PP!�������h��������0^�6��k�-���pj�$���ǘ���K<@�  �m��Iۻٶ��ٶm۶m۶m{����F�Y`%���G�#L
3��P���p?<��7�7J��"	uEC�d�mD�yt�A�qz�+8¥pc���c�\��Ƨ�M�� iHn"���$5Hsҁ�'��\���ƕ�rc��*nw�{��e>�K���������!�a��B�#����"[�]�U�	�V�����DV�@,_���o�J��VN���j�r���k����)��C��z;��>L��?�?I�v�N����af7k�M��@s���r�"V%����Zj���[��v���v)����^k?q�;�����,s���ݶnO��������1o������g�/h������	{�C�I���Q�1J5�VE�beccb�c_�u����J�|� i@K�j�	mC{�t]B7���M_�o,%��3e#����`W����g (� ��m۶���w?��ζm۶m۶m��{�AR��%Au �	��` 恵`8������2��LLN� S�iǌdN�EY��>�sm���	�	���Ǘ����n�B���G()T�0B�#�n�Ŵb>��Ȉ��=R^��TS
JDj%��vK�� ϐ�����S�L	��RP�l���p9<�w(ʌ
�J�CQ�	�D�AtSɦ�R�*�=�Ӏ88���Z�����#Z�A�KdDdQ4I�B�~�_�D�TlZ않����x�x��������}-�VQ3���m�vY{�������k�lt5��+�WS3[)��S닝��bW�5��=�>`�w�9�����\q>�̸ f����x=އ��gnb7�[��n3��;�`Ҟ�&��d2�l#g����2y���4���כ�������:��������9hZ�֡
5h=ښv���x:�.���~z����=���چ�kZ2鍄��Xh**��
��.�ź�ns�-O�2�x��������m{���㢢"
RRI 	�^�k8H�d�.���Ӯs���d�����ۆ�Owç�G �����A@A5 ��?�"����^���j�o��|K�o���� ���Y������"�A�X'ǂ�}��"&�M����b��4��b���S�-�-�V�/Ų�uX+��u ����_������C��Ç�߃�"����rpP�jjƻ{�ס� �zQ�7���7�?�[�y�7d�=�g}��'z��O�����z��`3�w>y�d|���8���Y�l6��CC�~ȋ`T�+sT>�+�J���+tYY���T����蘚rlvZ7�߿���䩓�{���{�������CP�۫�-bEY��lf)K��#��l 8rĒ��|�������(���p
��g�L�M��̽�����t0m6ON���D�<PC*���ٳg�"�n߾�����T4�1��={��z^k�v�ډu��Ov�nR�M�c�y��������G}4������]5ղ��9c��~q�m��YNXN��	3I1�D�E��fCfCfb�A����LMM��G�6?8f���A�ɩ�ؾ}{�����~�Q����
��Q�8̞GqkG�#�����	�q��
����ߛ����[
y<���nڴ�]�{w	�f����G)*:�pA��C�������xgg�dx>�(�(�A.���������c:欃����9k�qe��r},
p
}�G��Z���֬Ӡ�ذ��u: A5�tJ�j�iJ�f�ii�ګD��DT<Zn�d~��	�'�nN,��j�֠�-��W4J3��0??N���[>��AP�Re��^/�pU蔬C��P�uǭ��Q���ql6$���G���ע+�iS�cǎ�����ݿ�K�|�^���*�Œ��|�Ʋv6�����؝;�V���V�Y-���x�'�UEg�P�������,.�՟N�"��<46NL� R8�`�r{�^
�<�*���.T��
(��������0�>��ee7�+q+��B#�-Fc.���9��Կ%G����;:o݋��8�Ò��N�٩��M&5mB����2^�}�L�Qs4%gg�	����?-�m���JXJ���bJ�TR�',(��)�<��ȶ��(�|<�|b����G(�G�� �'&&�����X�Q��8(x{9��*P�mV��GqN�DqƳy�
��y�(,��_��`��vVi�!3�:Z�Z�E�{��`��P��<�u�C�ލ�n�uo�Vk4��"Ӏך��
o ;4�k4cc�?".�	A`�`�s0J�M�op��nw�qK������I�h�&:9]��(�qH�]eh��Z���ey�rW����
~���`G�*����dgA�T�
d
d+�lX��{�.|���0|$�m���|�a�-A{)�l����I1��E)F��ba�4R,OX�K�/�-ȶ!3�V�3����ggg�BQp}|&C�<���T:�o��.�3����D��V�U�)�ֆFq�lV�Z������nT�O�%�
Y2v�qzĹ%��O	���TS�_�����%O�8���"@\��w���R?�O�0a<�o�@��U������`?�-�l6'��TO���p�5�+mg��c�-ez��r��*������C+�|�z�x���դ3j�C��ի���T
L�<���^�`u����h��ly��ʧ"���v�~��Wk����b�Ib�������/S�?��4cM� �b�o4NN����`57p�_�l�я�����j�����0�%��aPK�O�&�������X`-�v!+g?Wp9��Jsd5�������z~ppp:00�_�Q����;v|�X�u�/�رcG�n��`��YP���%�O&��(x �c�����~��Ԕ�N�-�:v?@���>�m����Q�mA-�E�Ƿo;�U�{�RY�v�
�Ug�Ob�&��WQ=��j�fT���]���Jz�Y`�k��_σe���>�U�vlVK؈S�K1a��I۸{i-�i,�zˢ�l6�DWz����K�y���ǃ�w��꫻�A��ן/�Fپyylaa!&7V��ݻ��ژO��|��7On7�V��O'An��v�gM��W�\EҒ���d�.7��'O�m2�S�'����c8�c�0Dp�R)���ԣ�+�TssV�;�؊c�Cy�h���?�ciyj��P0��}�*����w
�|��3�(�4[�m�FSU�E�L��zzt����<;��@�-������Do����������rJ�4Tb<#�޴R*�^G��TӶo߾�QE�^����ea3>�����s��[rs����ر(h�����L}}}ƟN�=~?�i�8�uW@��D(�&��[ZP�z(M3U�_V�l��6go�����G�,N�7=���ӹ�L�5=3i��M�I�xZ��ڴp2Ēi��ݞt��9#�7[t�$x�m�/��}�&�k�y����T�0�j��jQcpd��_�R+5G���D����9�ߺ��9��d1CPTY��լghȷ��*������JT`S
�"�+����\�z��:t���G�~��Ȩw��w�޽ �S;�P0�啕��N=�68�=��q�ļ����BS�n�","�R���@��k%��n~v{n!��UE����f2镀���Z�W՝�Q�σ��B_���)t;��V�^��){Y&ǫL����K���b,�N�.�J$z������ؘ��2�p8m���t���ܲ�v���_?��r��Çwn��nl��T���A5�q����g�Ki{Y:��<��}l!%3m��WY�l�����[B�FI1��
)�ߠN�0S��B�*�F6F�7<#^s���5�����֚��!\Q,<��ηTF��#��]�ff4���VTzjq)�o���:u����cP{�����{��3z{l����4���ݿ����t�Yv���(� �Qzt��W+��"��>���YY*����h�X&��X���cW���.��R�hw�륒h$� ��k�b�m.�m�Z����,ˢ�f�k��/���R���=_�������qy�U��7o�Ԛ�*�
hq�ZA�ݎBخh��}������NXV�Y6(WO��RL�A�V��K�$a����d-RRr�/�wvֵ����L���ݥ�,�Lr	5�_���V�^z�o��"%�-�w�n߱�����¨R��J-�m��4
�ш�Ò�$�� ����\�gĐ�ɥFNF���܌�8oW��[��7;������!�}�i�B�mf �z�P9yO��4�����ޯ����-�4��T��+Z��b�,��e�S�T(��⨚�����mHk	����н���(^S��h^xٙ``Y Z@�9��Y=��,G���w��R�S�'(+����\��ٿ=Y @�`�X��?x��	|`��ʼ�w�%>��_�ï
����/��	��U��`VC؊��]��k+02���TX�Ș�L��@���C�X~��u�*��|�#����X�V�*a?	3I1a\�IO@NQ�q;�Zf29��(zib�	K��A�O�(7��:�u �d�tG����=����C��0J�J/0����R�4mE�ĕc29@�0��en�I܍���������n&nG��{5/e�*	[�bj�x�$3�N����F�uv�f�=ў�=уl����3�H�`i[��aRl��%)6C�N�f�bf�bc������ifqn��Ŕ!����72�0Y�*�V���b��g�Å|b��g��Dh.��b���Klɺ\��D���s#�2��RLI�F���X�0%a�g�*��C���`#L��aL✁_��o�3p�F���m����2h��$cw74?�Ox���	c�NHhUќ�:��>w����c���eR�KsqF��������=���r�*w#��W�?��#�@�;�Qf-����-��-g�
ļ^�RBYV��TR��c�[�nM/�����-��,���L���d�tbT^��*��d Zk-c��Ǯn�,��1��sW�Q�v�^W^��=���E��+��5���:/�.zy'�,��1�L�T�11�Oĕ��߾s�NȥR)�BJP��aS��hkv�,�qJ"�����b�!T'M�	���iÚ7:!M�ۍjX��~+��H��Ɣ�h�B��<�e�ҿ�� 튦q�T��,�<�u��hdar2�ME#Y��GB�Q�xWD��E�S(4|>����)���f�2���F�ң�@�&[.�F\�L��2Ё�pӘ'	uV3���F�@&�TʮN�y�9��k9�d�a¥+#�}��Sn���~�r4�4�t�R�ZF��S�������2�E0y�-[_����v�=~�YatS���f��x�L2�,�i1�T��&�\:���'���pd1ə��8��N�B!#&<�ZZ�-��^P����a�� ؞�w��I�G�\�~�{Ƒ�{C0�1���A�t9 ]3�3��^	˓CCۅ+W��|�.]�p�ܫ�O�~���&n2��c�7�5[�+��
�{�sG���\���Z$syDG�6�¹L��g�5etd'n6�T��ܾ�̣5��D���\U��1�<��KfoԚE��77�9��;�e}Cʸ������5�9���f��r��'�X0��<x�����U��<���I��
B��t�BZ���^��*M>K_^��>�F��B���l���0L	%�R��PTS�✑$������	���e��Ve�-��0�l�k�y<���>��c��C����ySP'S��2���m7p���y����z��9Q�-M�ߧ��A�pON��'�}VP�'��q����^���1�$h)*��f瀂����,��e�Xp�;3c����xd�#�e��j�>]�������iE]D�H|�Q�!oW��ta:�u[�Y�Q��㕋�*Q1�U�;/^�x����l���0��p����1���0`��9 ����T ��r�j��=������z�l�>G! ��Y�k&K���[7]1���,Ś����[[a���Z��lu�X6�=y�w��ެ[^�xaݒns��w�����X�?����f��?g���,�艊�'��y���[b�9O(֟H>�	����<�X��O�>� ��f`Kkk�v�/G�#���:�6W?^������x�>�����0:~�Jc4::~�lU�</cN��;w��t�+GO�۲�V���r�JA�5�2+^�e��g�Z�F�7�!�'x ����1��Y#2lmyb"��j9���)4v�����B �@��9Q��w�}��Ѩ��5\�kg?�쳯����?�ǵz�a��������Y����x<'n�tZ�5E�p9��X��̒K��Kb��D3t.�"��o5�AV:4m��#eR	�[�aP�p,���c�"_~�j�6�8>_`� �\p�|�/_>��<����G��G�C��W�O�hsSSS]�|4�N�2#G�k�"V�ͦc�$+����o_ݒ�P�45�JS�Іbʓ�"R�t�)��Y�KHY��.������J�g���'ϟ?�3��A�^&���瘑&�� ,�.=�3��`�w�lQ�#bb_��!;�����EO�[|�u9�ʉ'&''��Vt�ĸO�g�y��	��G�|���?�~����iN92�xx&0��L����(�I�*i�҇�X��wzO�:u�ʺ�wމ����T�E����h/�Xh!ٛC�9W U��.$��[-fk.��R(Y�#�nR��j7��>���=+P�P�4�jz��HU"Z@|��Yi$�zQ�)m)�[�JG��"�A7��by��yS�P��M��0��T8��|���*��!c7�luuuG�o���_?�b����C]G��#�7�ZR����Z*�ե�������-q~�� w�
�fc���^Kn��ۂ���Ri(�E"�$Y��%r��Y	{�}FM��ă�GE�("X�J�_��|^�������8������}e �#+�Di�.��Ie8X�̅r��mFf�V\Q�d2��.��Yp	�輩

=4�z�����F�=z��ѣF�/�t�d�{zk� M����Ș+031:1��&�2�Lve����t2���,J��$�ob*`��xZ"�+QTB���C5���s
�AϱÝ/��|�c�x�,(��6��
���~lU%m�J��R�C� �x�PMȧ���[����O���w��Vu�ȃ��O<�5]-��ҷX=�Dw���9�}���#D&uMkz]r�TӡJ���-ܝ(�'r���U&�z��S2�BuR��)����k�٨���Q-d�獑G}<�����gGkS�f1�c�ߤ|��y�s6״�����B{�RG��u��R�2��^��hsLcc�D�Y4��~~(`�`c~LFJ|�<H>Q�1�Nb��4�1�����@^�i8X��8��P��H�z\ҷؐ�:+M����i9�~i� ��@��<"Һ{�`%�&(��MOO�À���ӌ�0���j( ��ଞ�t��4i���E�R;�	崖:@�����P\���Z�b5qP�?���r�%ogiE�/d�N";U��ݿ�*��<��ܢ���΋�1�Jh���a���O�Y9	T �݇bt<�nn� ��1Y�)�hr3��V���_�r��S'O�>q��勗|����KǛ�ʕ*%�D�:���sp�.pw�� �㱧�"�C.����嚞v�=��~_!�
��H��#���qr��Tu�������f�����M���ۚ�tvv�i�v���24���i2@��Z��q����8ͩz����px�3w�:�(��٬7�2+���)������2O���g>YMf1�6�qVx������fșn��� �c� �-�U��ՖW���{�^+�'ʮ]��U��Y
29�s(I8h���[��m�n<��h�;::53��D�lθ��&�7)y���q��շ._�z�⪪8!h�J�;�����OoM�J�GkvJr/Z[L�l�������iI�~5��Ƴ�*�r0���NgU5�"��4<��7M�@@�3�S��94��hFi�ZMj��n�5�J�k�,��C��x�.��y��A"��K��Ӵ���/���]'q˽v���iL+�l��B�Vq喉MA%��h�Ca0��<&E3����2-�_r� ���^a)f l�+ߠ�2�l�������HȋYއw�N����Jjў���ǘR4-�����s�*����9H��Z���nA�N.,'�|�?_��l���������+�.}�����_;�Ww�����3g�w����������%P�Q�:������dzq�^~�ԩ�}f�P^n�����������>�G��"�d
s�(~�gx8��)�O
��z?������b����������{>�$��&��h7z?�TbWx㷭�,�%Q�l5:�f�Z��J��k>n��޳���g���a[��ř���c��xC��8{(�g3Ⓓ6�X`��="�po{�<�E�oS����AH�.���a��֬�x����8X�b@|�L�M���!&Q2�]'O�l�S*zk��d�k��\:����P�4ݴa��NHSӆ5�꒦��bJ$ZAhҒѪ��.YF�&��|�xz����B�� ���rH������R��J%�Uk�YK,*�|���T�������毵�������< ��G)�����
�7�KN�F��wK�B�!�$t\��������I��ԣ�;pG������ #@C�&s���~�7/|��_�P���	@��ְ�cdr>	�b�5<�q��}7��@�PL�Q���ܢ���oZ���[g�j����쬮�rq��F��'oǜ��UR�~i�&�F�2��
T�!���܌,��m�1,0�3���]�������]��,���i��	�S�����X�wD�����?9�(ι��ȶI��z���D�]z"2;SYi��o�J�C"����o�cZ�(q .0�F�.:���uN�}���d	5KS+�riZ�a͵��JSņ��	-_�Ş��HKtEX�3%��U>ˎ#;��A&^���'jSY��\F-.���9r�J�\n�ft����<�� F�%���h(X=Ks�K���%<L[R�'s�@P��q*�jQ4ML6�gi[4\օ&/�U�FC̑��KJ^9Bˤi�2ijް�:Bg��r�v�Z�h�_@���9R�6I�KZQ�~��g�֢KdL�~��1E�,����hT��Df~����?�r�=낗F�I��o~���`ɹ��pn-}�}���������V(�>�Ȓ|�b�L�ҍ�Jd��k�`EI&X�6_ai�%�Hx0$�z�`�lH�o�s�o��7���X���l����4]m��"�%����@��U�F��O�^@��K�>�U����ކ)��E:�����m�m�/�l�-)�̒�^O0Sዦ�_g��V���s��dI�eK�-n�Մ�	, ��]�R����z�R���{o���.?���^�����N��mٖ,��V/��Hr7ye�+]�ܩwʙs>�Z-qIB-qx���`F���Hh1l�����e`��1���2a%Q�v������kDQT�8Ng��%���n[]MM���h4�Z#���mثV8�^YV1,�SipH6K�,�-yp$�J��dM���$����l���2B
�XP|O���q�B��*ͦҌ�e� ���fH�,ioO�[���
A`P|�ES� V��Y��EŊ�FI���Q|
J=��F�0��?��)��e�P�*x�"v�s�xڥ�8����p����0mY*�
fcS@�NQ�t�D���<����<� ��v�{c���ՠDk�F��5��m|���k>=vs�M6����������@\DD�P'����L�O����6BI���	�k��)>p!��M:C(��r��9o��4��A��+,�������瓷1jy��:-3P�/Bo��Ew�W\y_��x~�����K/}�%�e���^�
4�S0�q�䩍��m�R����,m�"���[�oq�w��l%�Z8���w����`���v���c�Oɟ2�/#���̡C�`�nZx����m�?��jUO�y��'�WǕ��!U��}�"8�=����_5�i�Ѱ�����zG�=ޒ"���ӱ8�N~ݟd�J��fg���l�T���*.��D.M�/�11����)�� �H��B�jF~�;�}`fvQ�l8�������p��F*G}=5Js�ީY���� .^��}�3Q��^P�#��e�J��M��V_��8:JG!��M.����æiH��w� ���i7t�_&+\�}�Y�3��'���QN��[\Iǥ7��y�b�o*��]��n|~��8O�Eµ���5�����^�7����|�є�+��M��9JU���܆Y��3����%0��=M���q��t͠��mCL��X:/}��ϓ�L�����I�弱�	�5�t��N��ƈ#ӯ�8��Νk(|y�x��=��|vK�f�a�_��t��:?�<4�'e��6���i����1��_��[��i�����-�W�4����8/��cwۥ���Z�!Cn���Y�ذ�ps+�t��8q�? ��^�J#��wd����Go�z.�y�q�_ް±H,�����8V����[	ð+�,���:a�ȼ��}Q������.��9Y��$���۟�wU�"]؂�}�<�. Ct1��lFS}{��ɓSh�>�$�B�$��6�Ah#_�@� ���S�^Ym)1�RKh����+s���c��,��b������'1rAf�鴛�J����6�/������sKQ��?�d�'�[:I��iF�ń�di�n��C�����e�XksN�V0ʿ��@>"]�E�	�����=�Pu�S.�9%�[���,n����A^�c�I�P�/�����e{�S����X�Ų��B�1���K.�E��	�6,'���[Ȟ�:K�'4-�j~��kzZ�I�O.�%����v��Gޤ�ֶ�����]����HX����Xڭ�
�]��X�������U'Ux�z��|�[5���ɮh#�En�ʩc�{���_��n�#�;=����}Aο�x_����B��G��R|��}JH��5T��!*�`��*s�X4:v�k5���VMo�w�� E���;G��{�����/�ƛ	���R:��MM���
L=;�@�?��W�P�n%
�,])���^}�h��(g}d�Tor���^{��D޻wv�e�0�Y��N!�9����a{A�?�1f1�O��C����>"#��Q�
n3 %�*C�����\T���w�6����C��/������������T�J:����Y���Q��F��I�sҽ�tq��pq4�Ѓ��'��]`�X`���8$C%%,-�9:77����V#J,��e,@p(J'.*�>���� ����O<�ł�)��]۶�"H��g~�h�����r:(J�n�f>�.��~�\�V���Q�N���{��Ŷ�������.�� ���b��y�`7��Ȓ��/�-�+N��Q��ͷ�rS�N�(`�o0�wS�u�T˲p���d �b4��t��w�9���
��c^y���3�ZFr��� �>v��_�>����s���g}�]�ޏ����_~��L�]�m`�t���F:HQ!�Z���p�?v�e55��<��/>{��=�Tj�S��_��`�|B��&�G5��V�:@�Ν���"�3�~�ݘqr������믿~a���sa�Q$�&�ZùU�PY,Q�������}����$	]X�;���׿~��#Ϊ+�`�u���ڻf����9�tE�]���?��'{o����^LqW>�������'�xGg�T4��q�R�u�Mw?Sg��߷o�U]UY��G}426�F�$��-M.�]</�<+�
F�k��r�{u/tpeΣs�ֳ투�Z�`�3�v�Pz�v�	��w�������>'�̨ծ-'�L���pT���+W�t�ũ�\oק�A�ݭ�>��+(��~����Ҳ$�W��K2��FR����rז�O'n�/���J�]��u�pS����k�o}K'>�����Y ��/�X����%Yz��spo�)��b1j���^tۘ-�K(��B��3�=Ch�����	o\#*��������5�m�Y������-��B��������n�Ϭ�lw9*Fˆ|S�т�X��z���o6�m����,�քk��Y���Ե�������Q��P7A�}G��}��4��C��/w��m5�?8%4=���|��_A�>�����x����5��HM����v�����G�v�t�.�k��=!�۶�Mn���>\��?��nG��m�ٶqg&��D*�����|Z�M�>�[�Z��<�D`���c45�ZCu��~:wky�.�qF*��ǮՁ�}����g��Wu�_D���:�꾩��]���4���*���1�yM8���?�e?�F;On�pv���v|����{"��}�Q�ڇiF[�+�~\��@��e�A�������7���,�QO򰞒�l�,��)�1[�^6�c>4��NǺ#��᭗.�y�`�*�y^d��a�nz�)[�P5p�ku���՚��ߊ_sr������{���	�E�Q\/^���ݏ�_m�2��882�k������W���
PUn�!�,���y�/������ϯ�)�h!��֏٫dg5f�~t�h|�yLSKK���ij�)k�?t�������L��v��}�mN]D�~O��]Jn�DW�0����<�!��g�DIR��T<��ƛ-|h ��F|���%�C�Z�,��Fg���"���@{�҅WڕqHv4i�N��/�)ll��H�Ǵ�ĉ?����ړ�Q0T�Ga¸	kyD��)�$4IZ��M0\w��P�!��c�S��kx!�2BTr�!g��ƒV�������
|�j�tW$�Y��u������i<e�-Xڙ�D8�{�aX��p�a<ԭ���Hc�,n���0��yZ�l�C�s8k�`*%�z{�Ǝ�/}�O���
-d��5�>��XWΪI<�~�wwӫ�8��kv�������N�C�xk������ �S}���;�R���9B��3����;6p[�C�"��eD�&9�u���(��Tu�?eǾ���W���������-���t���1���w�j��	��w �d�y�8����_�kU���|�,�r�Z{���m.�y�t�녛Ío����3?zF�.|��g��?���g�8�鄾����qU$�y�Kc:�^i�%��Q��Wg������w��ƾ�P�r����`��-5���m�+��x"�7U"��7��T�*q� �ǮZi�H-@D������pe�s$Ϸj��Qw#�l��X$iM�u�]����f[�0q5,/�F�;��S�p���?���X���+=�y|��=�{���J�s��7ʅ�GS�stܬ����#��T�[o��W��z�^�8�����yt���WT��G��v�Vx�F��v� ����9�e��N��@#m���ttӆ:�&O���V�瞢���rR�>��9�i������+�Bʁ�Y��v�P�3�fgmk�2yn��9Z+jQɪ)�q�_'$Ӛet�Y�J
C��qsĲ�3�y��6�3Aӹe��9G���������l#2����ib?�lN�:M��浗��K��i��#+WT�QY��!��X:U,R�y��M�t2I���G��^�&��>��ŋ��*,?L��n#gɟe�Κ�:~��M��	�;o��v��V��&}��d��(��v
����w�L2�iw�Nk��r����X�Y%D���,oh�ϙ��S3��C�� �_ �1b�K��|�w|_�
����GȽ��TfQe��5������iw�F�F~nY�s��F�8*����v� �<��I&���H�I�	⢷a����9
�C���u���uM��C���e��/��s��@�
CbU�r/�%���Q����t��g1�j�����+׸���{�&�ڛ�����If3���"3�u<JZ�q6D�����y&�J��՘���LCY'�(�h��Lq��Dҥ�K�+** ����؋uio��l�_��C�s�Y�-�r�vڹyl�Z��De+�`�l�d�[�D9�M�:�n�a�Nm_�/Z<+�1��Yڒ��	���%i�����C#	��{��ӼI�'��L>�@�.��w�NzAEy�<�I��hحr]7bɬ��_�Iby�*ˮ��<�rʔ'�w�C>8��Z��dc�b}���	���Κ����ڛo�ym�ȑEb��Vւ�تx��,�w-���eY����W	x��������T�%��ڇg��c�I�SU�$_�L�����;31��iehg&Μ> �Ca!E�ؗ4���ĊI�j�U%s�ݮ��y�Jy�JI2��'�]l0L��E.2�Zt��1�7���Z cHy���+%�!U6�ie�P��pz��U�TYٔ)��j�F�/�O,.���Q6�v�i�ݼy��gQ)#l����[�7/�GQ�3e��t�[�Idڿ����֏���z{���z��Y��"��۬U�z��|�`C���܊<��𕣥�G�V���5�b����FY}Z�k/!�Z�e6�2x��s��O?Xk��8��
����nb�C�ĸ�̙��]�{Ƨ���x�gNlöUL'c��҂��:VY�'�/+s���}ȫ[���/�S��:����~���j�/e��̺H�%�C����g��Ldɕ5�_K�mOAe%�n+��!0��~��!������d{��'��Y��ʰ�>z���������8�>�pgi��C���Ŷ�!]�llF\|~cO�E������զn���U:Z=55�XIO��c\:�Tҝ;u@��Wm��O�|�8�?61�_Th%�!��fc�+W��G�G�G,��O�c�~�?��pZ�aml�8z�Lc��o��������TӞ}�k��kJw����T��є�����L�$΅���(�W���y��emW���4���\Y�^��0�ɧW��C�t'�D���+�|�9���ny

�`�M�2:�U��)���W���ܰ����i/��˫:���zE����Y�h�hٰg���J�5��z���|C��;���QV�m�7�����bb��zG���Hml��WA��¤VZ����s��c�r���N��o��n5��q3��=k�O=�@��]������w���Q\��?��On����[��,���_�n��Bl�-��΅�`y��>���I|N_�1���h㎂y���XI{u_Ah�E�Yj	��_���gi��b.^'��o<K�R1�u�zA�
��6��)����|�f��ZuhZ�o��(��/�Y݀��<غ�������)d���dL�Z����ttt5�U�`=m��7ޘ[��?'�����q�޺�OIm-�
�_�	6S�����7�Et��{Bة��_�|1���0��[�!wߘ'xc� ��<���A3uD���䙘�+Y�ql�V��ex�1kU�ʱ֭W����+{'Z���f�n�r�D7�Ъ�~��}A$/�n0�[��<gvכ�ĉ���0P��������#Ԇ>��OuS)���<�)A�x��v�F��(���.wOG�!#�0��t��ֺ���E�@�;����⦛T�� ΁�m��'�x��=��$�S'�w4�,�]�P��iG�S�����62�)=�k�ؚ�^F?ܔ�?Y���a�W[���H8���\��\F����+Q��˅f���,VZz�vOcuym��{v��u��Y�{�Oȟ�~��~�7~�{_�Q�7�/���nY���ڄ��@���A���ۏ�f'�	�u���R֬q7�����NI���h�����ޫX�e|A�Ve(6�	��������js�H���"��5CC�������y����v�̅��"|����(K�A���;�ђ�Q܎��3ֻ1�Ӝ�%#Bkq\�J�sg��0�y����i�}؁����I���S�ߐ5Jj{p���-ِ�M$��;p��P���fm�h�2��Z"ѨO�Ү����h[��D��SS5v�+؆�n����]�;���}K��T�nv!��J[����)jkߍ'��9�A_�~V�ϝ{��RI��V�\�]�`�#
��eM���l����Ӎ��Z��st�ϽĲw�+;ap��&(E��tO���55!��+:1�HIV��Ϊߒ��G�$&�9�ĭ�v�5FuLS�gN��;T)�j�����'��Ӣg���d���P���&�f9©�)�4˓i�@_^�����"�����o>���o9�$�dcAS��afJt�AӥI��:�$�}�Nm8i�ɠ�tt�9��%�D ��@�ĦƇlEyl��ɡ!��'9��m�xxqh?#X�(r��;P�rk�ƥ��b�g�ka�֦<
�<^������,�2�	����/���%Ͱ�����?�'ԑ�H:���&*�'1͠��G�I}����.M|1����E�V��ʬ�LV�rh�'�'���Q2�O�&*o��G����]��m�~���z��!j5ݳI�7���+*�����>9�09N�r�1
����G��M&YX��T
.�ƬTŢ_{�h��.�f�釔����y����;��x��;�W�����_���3��{''eݹsf�DG��x��ں��~�le������YZ
�PZ���y�� �}r$DA8�H�̜�����W����)�����Rfp�*��� =D��u:��maA,¹�g��r��ml�Q��m�
�N>��c_�YLnFҺ|��e��A�}�j��N����#6��elj�qo8]������щ�"�9Á��ev�q	�]�I4�p�D%�V��_>wNf�_� Cǅ�_D3��ʬ��ө$E	z'�J�������Ip�����|��X-�o"0�%/ޥ�Հ�K�@@���<15���]:�+F���~��@1�Ƒ,Z�u��o��O��ϼ��K�ݽ�.߃/����}NL����~����G��S�$��T�!<�Ҳ<ab�4�$a���� 1�q��;��`ctL&
r-�U��¸4;�Sq���PY���(�b���)�R"�C�מ���
�S���TY���4<P�.Vc1��k���*{`����k�&��~��c��g:GPӔ�pԫw6Z�x�Ɗ}����j�mH\]S��B��偖=��đxl|J6�1����]�Oh�v�r���K$jL�0g��Ǜy��
j#�U��l�gæ�
�e��
�gæ�
�n��*�� ��7M)�$��Üٰ��0a5M׍C6ɰ�����6I�8�/h�Va܆��(��r��j]_������/X�C�����bsr�e?˙*���5�|���극Ьwn���{�EB�����3�p{E�3��/- Z���+�C'�<�Y6oU��_��[�k�o��_�����n�O�����߰���ʩ�x�thy6r	������
7��9�H��c��� w%�̧;)�_�b��B�)����3ďP�Q!�Mq}��$W��J_�N��4)d�q����U���M�A��\E�Gi'��Bf��!TP��pS�PC��N*D�)�D�P_��^e�>B��S�����+�7H'�/���k�8c_��)����
�Kٹe>�s�;�L���d"�v=OH`Щ���D f�l$B��2I�%i7ƱE�hP��`�BK&��݌Np
:�� V��4)�8C>��v �=�E����z�6h�%b��k��2B\�R$��- �WH�ľ"
$c�HI�Q���k#{��5�qF�
y$46��@V�L*�\���6���c����I0�u�w��E�t�+��8JF-Q�(v����"?������tj��J"�p���d���6[v~o'@���� 1�L�A ��ha�$�b#ᘋaX�
��(�mTo0�4f�K�*�	(���mE+���m�Y�Q�F-Ij�dU���T�UQN��~�t�o)bxQ��M��oT@*��B/ ��R1$0�A��(svvqdv���_e	�E9�HT��}�@t0=�
�}����ʎ)k�)ɐ���(=(.�02�L�B#ׯ���6H��@��A�Q�%b@и90��\<��B�J.u؍j�[Nm�+H��R{��n5[���jR ���$#*g�ԚM<.kgg�:�:Q�!��q�Ap�UtI���|c!�k]z���;�C`� .a�؄ui�5�#^�J������KKB��nF-��%��\h	���%�F�5s���h��EC�s�/�K�EA�ؐ؊q��i�R��c�t�b�	!���F�B!�6���,-����f��f%��,
��ʬ7�Z����C�Ri�.�v��P�eg2]0|,�J��@z���,)JФ$1I�j[ � �R���%"�Ps�D���Dr��N���V�����2XQ�|�
��!�V�*jG��9�u�X�y�R�6�AĀ9��CS��H:�j��t���c�)�\�(� �?walZ�:R���"j��ѩ�R��I�0��jG	}N�ym>ɕ:,zvQYL��*�z3Z�@G��JK�?j4r1��X+��G�,����V^��,�<�*��Rնm�cI�<�V�����-�YF������؋�p�i<U61�n2Qhd�CD�>'<"�=O���VW�,b�2�A:d��r Z��pK�@�Q�蘐������Xi�[�(ʉ�dr ^���'�Ztn��0����:Z��^6'1�u�����5k��n��r�Q��-T�����2c�Me�=!|3�^s|j�+sީ/3�y�Y��a��.��
J˕W;��(�(��������{:ۑ&E~�B����p	��\k!� $o�ټ[OލD�����d���ij�r�����n�.w���J6�}�(�����1�ىѫ��ut\l�t�eq��@?��<[%��.�������b�9�@%孕Є<b>�'�����G ����`x�{�-^����7V�1�$I3�[�L�B1F�;kkQ����v
zawo�I����U�+&}9��Y��"*��* ��R����]��=���ᇽEE�ڵCXZ�:�ப;�ˁ���> ��qQi�����s7�s"�yХ5��&��O��Mn�d��tO�"Ú�D�H31Ap��f�����<˵����Q�:�k�N���]��׆��˿�^�3*�#7��~���s%9ْ�3	���k��Yw�n���������1��g�WK�����ڔ'`���C����2'�%�a���7�{�Ȉ{�4��-_��5Q���p�b#c��y���rx>ں�X�-*p�P�`75p9 �%�RAl����&Le; ?�^f�P�4��3#р�xu�Hd��M&�D1@��	�e�%�� ���p\�p�dCP������Z�8nqf���1�h�̼wj뾉���*0Ea��S�VG4����|��}ש�3��Г��g�k��"�lv�Y��fs��˲����\dr��z�:0��$lh�}���cʝ�b+cu�[�S��D���>d�B(�h,�u�(�ЗN��'伉���P�0҅�9�����2a�#�}���$�<��r�s�n�w���BW���6���t���t���1N�i�T�M��
+�Zcq��h����i���z�'�8���J0�/�v ������߈���Q�zzȺq���
+B!'�&[*�UFs���[}�+3 I��� 6��e�0һ&�jy����Aa%%��<1�'�����?����<�¼IV{�ጶBG['�]ó��;�.�u��gm~�@��L��Ł�+�O}�N��4F�CYb5�r��p�®!V�h��z���XQiUUUYaY%�JK����kq����'�?�``T���{��w{�c��w�e5��y��|��N:c0�Y�g���W���n&&�Z���ZcUp"F0'�;6�~}�:������vD&��Y��V��x�(ձfw6�d]2�0���Ų�Z�wnz��iz�U9n��UQ��~p8�H�\���H.��9�� X3����|�B8cc�(����p\ח�\.�Vd~���^����w��������Z��{�e�����v��X�D��OG�ͤfӄ��e���y�q/��ٔ��(��������nW>�)�#��D��/���[(�ie@�t��.�.|��
�ʿ����-�vLUcw��{[��O�먙�'��s�3]ہMe_d�eN��"kS$G��7�+)��|�AX��g�C�g�g�yf�MY��N�,75��<��t	����'<����+�M�p�vg3�by���Ko�Ȍ~/�.�����L���J��(W�8N>!}�
�����M�X.��B~E�!YZÖ�#����u�}��*Q�/�N$�j�d��$*$"����]�e��B_ko�@,n`�Z.3Q�����g_!�k�v���E0�5�S�b��F7`D"�g)x+`��mB_:��<@TH�iBD�(�4�F�HJ Յ(XcsL�eS�"���Di��.��LL0:B:�\O��(5�O�u��Vx�L
݀Ӷ��ɚsS���Վ�f���l�ʉ�T~�^�m�����#hW6�e������μ�>���<:ħ�\bG�o�O�]���}�I`gq�2�>z+��t��գ��#/��H���G<���Z7̠6��a*@"-�m��|�[�"����ʆ��gي���o}�aO�h��%^Z���R>��?���ȟ�D+3��j@	j��"h�����e��c+:�&��'+���vA[�B$�<H��b�G�(�Ba~I �"6�r&�N�Ȃ �bj}ٌ_~l�҄��(�p˸p�.���wvNNo� %7�y�ݶ�]�ZEP�ޣ\"t��C��E��{�2W
!�x�B'FG�(<et�� �40 ���:"C:,������3�/R;�/�UCA���pۘ�ڕ}  ���{�vL���%�3���[��]����� ������`�D]��6����*[r�*���%[nO+q�{����U��l�ff薖P�����嶴��X+�u��uY��t�i�l\��@��D��~���z���Hމ�)&u<��z��U��-5IV�� �qL��Q�ͼ}��d��Q��CA����я~�����]�iMk��pYǗň���`��\g8]��������I���Ĳx:�J����i��5��nS, ы�֠0�\x�ic�{mV,/|�c�3O,U�6%jvV:� ��Z�LZ��bO�Ҍ���K$�Ɣϗ2��n��{b2�R��.$�(.|���Wꚭ.�u]9������ܺ���'K��Kro޺��U�T�մJ�Q��DL}�z!��lI�Q-�����o*)��S��4�6ZkE]CM]E��U�y�mNS\Y� o�/��v��]���^�0��&�X@~��$:*j!Mt�^uu�6�*��0��kvِ a�Tn���U�������Q+p�%E�vl�t��7�6Sjb���-M���Ś���w?���]�N{ٞ];��5���To�j���y��mN��e;���cg�<�t���^��5�{���ǎ� ��o��܅��X`cVo͓��[�E�LE$���d�v�R���v�����m�`�bodw)��� ΌD%��dg�_$9K9H!��BZ/45pP���)Fs�J�@�1��D~yt�v,�C�aOvm�����	�b
lZ���T�����;��VP�l�՗�S@�$�_Ri3���:#�(7��:��� �ӿ?%�ih���~�1���Y���zwa`������~����W�Gx�q�oAˀI%271���-M�����$�!�g<���̭��&Œ�g���cW)h�B߬P�^�pPJ�Uhm}����:�	�8{��ߓ����|�b���,�.�9���ܲ�~x���|�����O����v|��S�}m8���>���<�D��w~ЍO`^@�|U� ��T��rY�xC�є�3��I"��1�(1��D�pV�n�-jf�%8=�Nř�Z�L\����:2?6�������Tc9�������>�_m��zx>`j��Ï<v�H]�� �<��G�>Q/�gU5{����đ��i^�2S�s'/@T)�e��?�zG0���y�X4�A` 6����emi�ǖo>*�f���b�z��;�i�ɪ���X�^N�P������$��pM���dU5�p�a[
/����I�%����^w��'�Kɕ,+� ��̄�F�yձ
ܠ�R"�DD	�?�0�0Φ&'�����PxI�h)g��یL*� �$Ȥ���=��b���/�μ_�Zr)+e�r�y���	�]�g/E��s?��x������{xq�+�0+Oғ��huXňOf�����NCS��#N�`��&�5�hEYv�A��PDd"�`k	�׿�"Z�tX�1_��ô�6�b����J����T�f�Z�ݨ��Q�?��_/�	k��#�5u(����R|�j�ñ���1(��7�6��<�z�ͻh�`
�KKf�~ӋD�? �{�~�~t4��_
�/����b��j���=B���v�e��X�k�l�q������C׮]0�u�I�y��^^W紛��@ص�3�8V������T�:�"Cd���GF��V�Ey���'1u��?��M=�9��7��-�==<�ֈϜ#��W6�kix��k�3��~o�e>� ^?4�ρ"&|���1����lА_�uF�ĳ2º��݇��4����	Y����9�	58��6{���[��� ~� �z�/�K-`S�����~�7���w&!.��&�Q郬����1���ގwCy0��5�����P3���w��' �+ܳ��b͒��{��#l�ťe%�,���V�`���2SR"kk�J������ƽ���E՞�?�P�~��C8$��@n'��b���A�7M$m0�ӆ(1���B2�/��b���z&�����@o?� ����-/7(�����_���ᇋ����S�$�I"w���B;>�m0\��(}d����Z�������,�º_��/\���
J���Y|" �q����T)������gop�seE}}�z�����L22g�ʧʨu�<:,�\����c� �� ;��X93�T�c<3���x�}����k�v�i�c��0�2.�w�Ғ��Q~�t��8�������IE�p2L/z�/Y��<�_�/]��1"�WZLg��Xx>gsu�.E�̅/�\ �îey�����XQ�S��F�.w_�L���Sm+K"KA�l�%�缚�����Jk�*NU:���C�x�u����".�����Ū5�W�%�y�o�㎑�EC�M�>�����ꚏ;v��F9$Vf�K�k�`�]]=��`�e��㩾O�ӟ^������r�����;�u����+�j�L(81�����N��)���cfSL
�`%��i2ͦe��}��z�Q ���U�w>��Y%���;g10�J�(�D�j������֡�.`�w��eI�#(�bY
��e������D`���Z=I�ONL��47�"�v��� ~�}aKm���be�OO����"c»Ti^���/�2�����pd�Q]K0��=�����DPko��ᥨ��x|�3������쳊r��=���w�*U��s�^'&9=o~�7��J,�*�f�q�YZ"����V�Nì�M��l3��[$�q�Ν)#נUym`�w� ���!mY%(�Ĉ��"L'�j:�)��I;�fs���:A�:�,Wt�1;�#Gb���]�nRd�-5q	�xS+2Y\�T���l�}rf��]�t�N���y�E��h1�{�KT��%�"$���2��X^�QQ���Uj/�F��16V��V�ܭ���-��؉c�XE{�bof��|���$��{h�`k��bն/�sR��XH0�{қ)n�38���/s���L�Z���l�,A��vx��t
����o#��c����~~�2�RXR&�G���bQQQÔ;(�C#M�c����2=752�0#���k�L���3J����I��>�P��� 9��o.?�~�|�\v7*��(
>�"G���_�jo�>�#O<�Ls�����KT��1��0��ra�H)H�\�r��}&�J,Lh�k���7ir���VC���9�֪X�v���5�e�>u��^�浾%�b`��k��-�1�V(�"/ǉ|()�V�(���.o%��sl�@X<����?A2y��-#v���d����-�̲��z���	_<�!�}�<�f_i�X������5+
Ĝ ̹���	s�ĒJ�8u���n>}����fC�r8?d������>�z��rqK��xl\�QvKCC���Om�OW&�	�9!m�>	�����˜9\��@8�p�!Yc����j���2�&��W�nj�t֏��d}L`���h�$d�zt��g�hLDc1s���9�tb�?��kh���K���p��*�
��ơ��gt�|V�\Ѻ)��l��<f�J�5U#�F��&�������}P�|�Y'9u��:���v�8��+��D��T���s�|*'U���"�P*�,���W�9)
=��Y߂?$���N�I,�/�x1��+a��|c���L�p
�N^�qU�8�|�ȧ<�U��\�g@�*��	�-,(J��^���Y�/C���|�(����jP"�����0T���͍��M�)Nԛ�Pz�bM1��"�K�Y���K	�?h�(����e�n4P斫7:26�_S�"Gqq��˳�DPޅy����8,�:�s��B.-.���H��gG��̡(��\%�u�P�;)��v�d��e�Y0�+�2\�w~�Ytv�
�=H�U�451LI�BJ�N�A������c��q����3Y©�5�jn+�,�lnnv2q��|�!��N}�]�h1�W�Id�d��ooj�O��>>����Y
l����w�۬vN��Y���8v7(ۻ���FU�x�P�_'5��%��?gPGy�Dt���	����uX�!ƺ�m `j���ukN�k � ��@ު''ooo_�05I�]�1s��Sy2�J�ͷ��M&Ir?���p���c��ߔ[�{���{��1���u:}�6����E�� ��������ֈK�͍h��|,��6���^�毵:�q�B���$��	�a�~�9J��C�?y�L���{��>Gdv��PC�j~z��e���}������ v11���_JS���a;;Y�nR�.�#�=��叅{��>��UL��`�Fw�~�u���[R�^�:p2�Ʀ:��S��2�7m��h��._�r9�6C9n�@��ㆺ�$M��]=��m��X�#��3u��L�Wq�=2Q�m���}y�����s�]O>���;
�O`΂jϹJ8M^|��G����8rd�!�r��Ϻ扩���{���f�(bq/�/b}#T����B7�G��i\L^Uk����{��Cy�Y0p��x���;$�X!f�W��:�bEyپ���w���P�g����w<����m`b����0����������U�j��ՅUۏ�<�(���0��*w8Hh���CP$v�O�d����	j�8�U��oh�(mF�TXdM�I��Әl���LO܏����/��q�2�3��K/<�UO��s����s/�V�[ �;�0.��d2�"sq <�$M�3���Z�I��RD
ٶ~�.�5� ��������_��:Y��~��������_n�m�64�ix�Ͽ��ڿ��_��?��"Nu����n<yM��~�Q�ƫ-�-����h��	4��7�%�p_�͓��_��������Mj�Ф��˿�˿};�.���owF��_zMc��7ڽ`m�k&Eu�X�X���?�S0��ss�D%KYt���*
LfI�Җm�Np�+��}��f+�a.�և2�����h����P��eݬam���2I�B�H�L����(�YQ �Z�BRy%nV>.�j��*3��%5�I��n-�TUUڏ(��'FN
\��ԝ����-���~ N�  ʢ��R����U&�����M�y���ì��#wu;���fg�O�`"��ٞ�>}�r[����U;n�T����q��:���ה�[�hAd�,�BVˤ�dm^e
��Nq�S��ݤɔ.�齨�u�A�^���O�._R����k݌:6p���K�==ss]��-�l�w�Қ���ښ��:����p�W�D�'Ѡֹ�aa��F*��D8Ή�R0���x6�-�\�F��/_��st�\XX�,��w�o�3�9����F�׉v����Gx�̹��ϑ^�e�������*���R��T���))�L$lcdC5�F��~�a**h,Ұ#�l,u�E�ŉE��S�#�Mc���\��X��F��0�|�pS>���<?�'�e�T0
=?2�8#p��^�S�k��ϧ��%%TW[2E'��N%	ϓ�<	��<͗�ŏa{��2n�_����I�n� ��L�4O�<b��r�
tkԵ�AU�e�3�CF�l��$ESS�,�+8}\p�����C?���qk>۳'�t#��n]]̮v7YO�0����˚q��� �}�孷*+ߏ�O���=���o�Q��l뵾L�B���)��g� Uׄ)&�z�Y�O�����D�._f�ݻ��Ϯ/��XP���e�D+Dj���b{�|�Y��
��ֈ��]������x��B̫CC������&����Ds�,vi4�0��f���Ǳ �	���{��>M-y���_�d�tI����Ӿ׽�B3pn�㏗ț2_Kj+*Ze߯�o|C�y�����w�i�0~�7I�U̜U[κ��Yw��Ы4��ƭ̅Z��2��CQhYZ��^24t�ߧ��7��"߄�s�mg�ja��̥��qR�Syѫ�n��x�~2y�h����O� f����`���T�J���f���W�痢{_}���e%�%b�__@^2�/�N�Y=��<i�d������X�^?#��:���������� [�pԺ����;��?*X�ܶ�m�{�.����A���ݏ6 ���T\���0�dF��W4J��1�t�r���/]�-�uݶm��Ts��0<e������K��۶O�H�6��g͹��m����W�c�V2���4n�{z�D3a�������č�A�^Ǎ�?%�ʘ&���.�`v�5�4�����I� q���k�\�ofF<�t��tx�tv�H�,�iԤ�ׅE�-�(r	�kI �"~Yرc;Qk],�}��mt8\���΅�u����Q����(�3��a,������čOJ�g��ۧ(�J?~-�3?��Ia��&�?N#�R���"y2�g��X���bqx����i��e!K�|���d�P\�̬�0���e���'w3�;V\l��E���w��`����2���@�#�J� ����w�B���#x�eF�ɛ�yIf�<��yN�?�_��xч�׈(�؎';��l��#<Ot�}��w�ןN1 ��W�����Yp͎��3�>�N�7��?�M��aߒ�-��lڧ�x�M6=���	���f���z��7��k4��+܉��?�pAc��ܣ�c�s�q����?C�_�<�¨��r	ǝ�u#c���)'+n�^��o�R_��-?5ux�S²� ��nm!w�[�#�9��@�-3T�F}��mmf0�y���H_/�F+�tf�N��-s�jT�0A��&^��X�}#���bh�d�F�]�.G٣�4V2I#�7�v�O�����`��'�g�����Ӏo�C�1����x2�*%��PY�O+�������8X�M\pj*ș\$L�t�,')��O�:^�/�R�`[>�!��~%\���pBlaa�;���;�Q^w��j��!�f�fO"!�!�Vw!�.��+���`�7J,���*m��p��x������W���
�]ZXpo�7~���05
Sp}�*+r�;;9��io��D�������Jqc*@?���>�B"�,97
8;�An�����#���{���\����;��e3�grf>�ڢB"�}}0���w�L|jq�r��#��X\L�dr���F��ƌhC>s1u&����Y<��4x~����d��]�)�"����X{��Zc�׺���V� `%�T���+���a�����4��:�~�=����Yjs[c��Y�5Z��p�E����	_��̴qM/3ѽ�VI�)��IvC��q�l�x�9�/č_������Z%�� �q~�8='�رÑ�z7����2g��da�cժ�f���u��Q�����S������Z������)R�f�+�߼�_�������}Կ��n�/����:T�������:��tkv�!�f���J�l�)G:�)'N\���g�K=Y���됴b�n-l"&nL�3o�淈�!�l"F��L6Hx�� ��s�{o���6�l�c�mcȶmۘs�!��8����v%+���$��V��TaY�T���!V=��v�]�h�T���8W�p���	�T蔮�_�}|�'��$�̖�rQ,�rX�U���cC����H���8��q�'�4��9����x��F��-��;p���!�#>��|��,��E��x�w���C?�~���?�~�g��t��/%�����QE��)6�fl�D�������4����U��~Sl�m���~<��X��Z\���k�SBVH*L�����RdF�R
9
�$�����J-��)�d�e�d��������;{��X������<V�븻4R�z�s��$}�&�wHn%�U�5�v+Oyn��KF��(���L��&�
�����OcA
�6EU@,��+�p��j�p=y��|��(�cO�k��-�F U�V\R�+bB��]g��E���r���+5\�����Q��cA
]��xC������Pd��5F��W����MԤ�8.S.3�n%�L����\��M塝b^����b*I�M }%�D��^.u�?)iK�:�gMR�����ʠ��F��p����z��so�"~������g��h���[�R��p>��'/�}_c����V��t�+�FP�Bt��Ĺ�73�ɠו����z+���������-�f���5`�$s��?�p�������!���v���|�~菔l��C��{Z��j�߁�1v���I�߰�PW�*��e�U�M��]�e�z�ė�p�����&��	�
�����yy����i�ޮF���>.A�IƗ$����SLx�iԇ��Hn�{�+�P4�ї���A�긤<�u�*�ǇOZ�.�R�Н�}s���sOg�<�{f�9����t��y�~�a��z����� x��l6Y@�}����v��Q;Mm�m��m�v�8��q6\��gog��wr�33� z����stw�p/Ǔ�"|�2�\��sV��fn� W����.*�S,�tQ�<Ѱ?��`q�Z{9�G�4v���z���G� Gc��.�����(�9��8��Ptgl$vG�'	&�8ap�Ҷww���s��,��҈���HN����7���BԇI%�R�'� ޒy������/ ���C�iܪ�.�g�����w{�Q����^չ�zcQ����t��~��y��=�|�ß����Iˬ�ɂ,���k�1�u�=s8ڻ��%��:*_]�c])G�p'b9�S�(�h�Թ���K��f�q���<�8<�XS,O*�ˋ�#mҦ�^�����"�\*��/��p�J�+�����nm�O�S?(��<#Ϩ����c2�#2���)�L�4ֿsؿsH�e���,�"ֿ�+˲�1ǘc�&���2SF�Ԙ��`n��Q3������wD��7���T �M�U7��0��i��n�=7�a�Ч<T������{�q:gp&gq6�p.�q>Q�PA3-��F;�������yY^�W��Aɣ� �����ٺ��5�Q��h�w!��/�m{����>�y�k��4���|�4}��J?E!n�~��T�F��fv�H}��s�sy~�E��1���^�Q�q����9�Y�q�\����U�q���6w��=��<�	Oy�s^�Yn
&����b5kX�F6��-le���Nv��}�� �8�͍��W#R�7o�:������z����]����}~��?�G���n�r���$�8��r��\�"����r�������]�q�<�����?��ɿ�7����Nx�3���rS0�����X,�D��e,g��JV��5��5�Qa1]��x=o����7����x����O0���x?��|��>�6�O���V����d�٫�>�~p���	s~F�g�pĕ~ЫX�+�����7�4�w��8'8�)Ns����<��%.s��\�:7��m�p�{��y�����%��L,f+Y�jְ��lb3[��6�����b7����q>�M1�}�^�Q�q����9�Y�q�\����U�q���6w��=��<�	Oy�s^�Yn
&����b5kX�{��"R�x���V����d���~p��������j �%��u��<۶m۶m۶u��8k�<�y�yS�c��ߝ���/�ikA����:��9���K�V�<��?��A�uܓ�@����$���G8~DO���E��
��v�������7��~���ޏ��}�m��2!�&<F����|�u\�gy^oI�J��O㧩>���5��S�D �h"�,��7y�z	Vz�ĭ>n�yND$?(	��9C|r=�V��&C��9�c�E7J���o9P��%NI���ve�'AK~�5|��F�(��G�70����q.��}�a�3�p�Q�:C�	���#N3a?���*��aJ���SM�Yf%�
Q���s1��`2���M��<:�mt̅̷}��i�D@|\��/)^����(.��1��g�3���K&~�p�?ܥ�����;J�#�1g�Q������/Ǐy�ƅ�M�����,rfWg��)%�g*���B\��\� ��q�"�V�N��dȢ(\G��;2�؏��o�XW�"�'��v*�?�3� �y�1�=P�B�F��o�y�~҆����j�>�!��Yg
������o-�0���$���Q�|��B�%�C�A���Ŗ���Y�[���f��Q.�a]S�����=��H?�]{��ܤ�=�s��Ǳ6Z�v��;�x>+�Q���lO�oԸ���Qqq��=�
q�ݹF���X�m��pu^�76c�1V���K<�;��:w�Ssu�����̽�ݑ�;V�9��P�(e��N��{��/�ތ��V�2eЕ4X����闤;/y��,۶�_�c۶m۶m۶m�h+wyjpO� �f&S^��$�|�	�e�'�C;GtE�����a �a%b�c*.�:v�&�q�9|����|���Y�U�sVc=i�v�;(eٙ}��?��G*9Zi�q��Ɯ��lΥ��ܮ��nя:��zv�׸�7�ż�;\�'��Ձ+�:��+�fN3�v:8��`u�Zg�3��
������
m�q�T<�����xxN���xo!���,���u��t�/�+|�B�~��7�<�Uq�7%bێ��(�[x<[x2Qu��zhM� M�Jwk�C6:(��Q���"��tۂ[%\[��1
��]��X%�0>&(���K�4,@�	�T�X���w(�؉H� #�#8��qI�^�U���#����oo�!�xD	�Q{�A��V����O�?�����|���t�η���w��q~�_"�_Qo7���ӷ�������3���aa�EXDMQUS���K�W+ɒ��K�/��ȥ>��J��
� ��X]��dm���:l%#�>�l�j�	���yl�f���9"��9��e�[÷%�c[�E�vl�Rӈ�3;���.j��;���=�{����죧��_� �=��@�`��yʡ�9���Ȇn��=���C[�<N�Dm��$b2b�©Hpg"�Y��{�!��9_�.BJ^�Y��Wp���\�8Wq��5\�$�i!�z�W���ύ܂�)9ܫ~��>��� "�C<��0�?�#j���y��՟�	�<�SjN�4��f��ϩ9��H�/ ΋����x		Y���*�"��ғ�;�!e�-��-�~�y��GN�y�2���l[`�=4����!�5�5�w�<ͼ���<4玜�[%�wJ�i�ݜ��͹k�Cs��4s�n�=s�2����j�v޸�v�vh�]��m�l��m�T����1U�p�`�b�lf;�l�}N�y%a�fۗ�[�2վT���v`�}������5�1��4�1����Β�w��=	������&<4�	�3����l���~�lG�v`�3�v��Y�z��*BN[���<4�)s�#��4b#����<4�.�Ixh�]�f��pׄ��^�Cvc78�NS-ɮI�-�i晶��q�=�̳k�=y�f8��5՞�Nq�T���5Ϯy����*Ͼy�s�<�X�R.ŏ�L�}���*ݫ�90�Q�3ρyN��F�r�T��&�>wp��ɝ��vq|s�sߜ'�yh�}�Q�&<i���jNIx�O���0���vR��o������\8;x��Ln�Zx��+O�m�.�v޶�z��ޠf�1�AOiPV51�A���.�}}�яя!�
Ԣ_�_CJ�э���	E�D��q#�nDߍ��MB-���A��G�p�s\���\�׹�.���>x�#��<�97��/�����7|Ϗ�����~�w��O�����KLs�c��?��?�̰�</��?0�o�b`��l�3��|˿�d�w�2��I�H��Q� n#��蹭��2���e��n��eff333:��̸af��efff松�:ZG����t���4�3�i{1L�Z.A(m�5�����A�<l���f�k��f��寓��5�:��Ƕ��#��Z`/O���HșR9wT���e͈={In��� cL���'8nhYNu�H�F>�ך���$�`9h�sm���\V3�7W�@9��i@׾��R��qk�?긍���U��)"Ն�ӮX�,3�q�W�x�z��O��Đ2c�#�َ�^@~u�K?����0�w��p��y��v�A:J'��'ݥ���>�_������p�,Se�̲wf�/d�,��BV������Q6�V�&�e�씽r��S�Y{w���eyE^���My�����T>�Ϲ��,�T�*�)Is鮪V�y�u�
�ӽ?�K��dXE{G;z���V�� 夊\%��\Wo��V���6��ﲍL�2Ȏg�M� )�7*����z����)�P= Y�A��~yF��cͷ���@���+�n2@�r�)J��z��9iٴյ��;��4��:9g�:��6�)7t<F���������Q��ⳀY�ʣ�������m#��2u��̆�r�K��B������R. ��k��@��F>�ocb�c��2�i�� ��+Yװ��%�2�"u�}BN�wN-Wi���H�v��Mkq������%�>�͵���eL�P��R�,*pgQ�/�_n��pW�;��Wp'M�Bu�ы��am�J����Lvp���I��;$(9|!yr?�9RABRI
$K.��RƼaސ��漺PR��
�ͤ`�`E�%�[�B_�K�D����+X=�U�|�Z�c����o
�Ӭ���V��wW�0x8�BhB���
-�����7�_
~�E���|�H�ʅ�
]�Aw����SǼ	y�J��]��'�y�cF�G���S�3�>M�ó�K�?�9W�T��ڹs��?6n����=\R��
����eR���w)E_�D�?"���������g�)R��t�������"����7E:F
#"��EVW�~*v�̠���^�<y.�E�4�͋�2�켧�^����5�m%VM��	�5��.;_;7o������=QRE�D۫zF��Ӣ���ڱ�ȝ�N<g^)=O�<7����^��! 7�_�m�s;$y��l��P^���ʝ��*ǲ;�QS�9�:��{4�-�S�� ����M8W��>ا|9���d��<�N7���݀"m����k�r�hN}�������c��-�*��2�p��f�:)���FگF�S�����m�~�A��C��ԯV�K��H��HsJ���>?d��G�]kչ�M>���Z�׺c1:Q��.�7E���z���4�itTG��k�Qm�Ju4rNguNRG#�<�����F�y"1>u4r���&�|_~�'��y&��l�cG�]�>�E~�&y\V�q9OG0W��E�m����E��g��M�z�"ٮ�-M8���k�g-��D3�3�:��8_К[uL�m���`/�'@�.r��@�]���\����{E{�r:6:���&�*5�'H̭�{[Z����L�+���������9��Ns� �%Fj��g#uZ/i�a`����oh���'4�G�E�?z���;�Qj�r�c�`����f<S��ɣ�~3G�LͷYO'�m9��H�f�_�?J�-`�{��=e#�S{uNWg����:�ԙe#缩N����W��̎6r�o������ʞ��V>[�K�w�πp���'�8���:�*�����>ԝ׈�!��m���S�ʮ\fK�r��.�m�Z���פ.^�`U�z�(^(x*q�-�^1��������*���o5��!�w�I3>���Yp9et�,�0�su��B��H��/ѝ��X�
.���+���V^����<ח��vZ�� �_�P�������@2�Q������P*�X��2��x�����7c�E�d(�eQ��V6f,3��2��ڃkSk?G����5zn7:^kY:��r ��}�|��S���x�ϰY�
4� �Ĳq���V�ok��Z��%.k�f}��S�w������/C�W�^/��4��F�"���N��jnK��ϥ�O-���jLy{���-������!�_*?���b�Ų���;������*�C�|d>����������#�_��	zg�	� f +���1���/�/ ��tO�����A*`��3D&�U���]�^�q��{*?丗�ǽ��;�q_�]��)�v�O�I����8���qa1H1�r�����N����)�p]�=��E#�ʾ/D��S�j�w�8��G���s~H�}��Ѷ}��y]W���[����9��?[)�!ĩ� ���R7yu=�WW~!�OjQ����ﳁ��)��5��b��N�l��gc��6��Z6#�HWۖK���g��Y��}��f]���=����"MS��,wN���{�er~_���S�~��}S!��~�"�Imb~����)ē:�o�m�+��6���u�����|C6�>Yi���݅��wm�x��pe����/��d�q�xw<Ӷm����|۶m۶m�H2�`�_��}~�S��������ȴ�����eUd�nϝ�J����D�(16"�^���
)��J�M�2��i�g��vFEU�3L[�≅��h]��,����Lii��)Q5�*�;�*��E�s��yNH��U���D���7�a>�����7�a>�������nݎ{r[}�N�r��kÎ�m�#�w_W�Sn������k�U�Iӏ�~���;�ݮ;�-{l��z:��c�0��pe��P��H�\G���h�t�ɮc5�u�*�ثn��c�]�Pݞ~7m�C���4444���&�+z�����*.T\�(�BPqpE����A����z�B"hF�l�21Z=+�@��hK�O���������%~R��Ē���މ��%^K�,N~�l����ߵ�$��c�h�S(�����|��6�����隭�Z�
+U��k��^�kg�������t���q:M��"]��t���CzB����w�>�W�N?�E�E-iY�k�Vj�l����`n�m�M��Vf5����ζ��g��qv��e��Ev�]e��Mv��e��C��=e��K���e��G��}e��O�b��[�"�Hf$;�)��"5"�v�q�u�sNuNsNw��8��g9�8�:�a��'p!�D�$�d�g�s�s�s�s�s�s�s�S�l�\�\�\�\�\�\�\ID��)�Fi��hMs��c5�Ϗ�L-�4^�\'h��D�q�����5i�S�T8��
�کqj���k�|g�S�i�"-rF8��N���pV:����g-Qߵ���6r���\�!b[�p�󺵍�|��m�x`����@��"��l�{lc���g�H?:?9?;MN�����:mN;�E�bg�S�T8�N�S��8/8/:/9/;�8�:�9�;o8o:mN�ӌ"I'�F�||��9[�[ӟe8#�(F3���c<3�G�Y�rV���l�N��~����\õ\���������­��}<���[���|�'|�7|�w|�4�J����m���?�'��&5�E��Umj�=ȵ<˷+�"+�+��6զ�t�a3m�Ͷ9v��c��}v�=`�C��=b���d�I��,�G���w�����wu����_�}k?�B.�db䆴�N���V�oPw*N�U���3��RǶ�V>r�_S��9�8��5\#�;�=��D�{����ID�����y'���F̨�_)�x���#��,a=���"�>l�@�C��������j�mj�mj"j��8ٖ�Jn���,�o��c];ߢV�V�I�ߜ\p%��0�	g���L�i+��Q;��6!f����`�zY)��IaH?���@��^a�
chpWw9��.-�7��l�p*��t��uϩ��-ջ~���SN��Rj�Z�W�D"�N��
�d�� $�؟H�v%�ìy�9�x�J��=� }�'c�k��־:����	�e�L��dp�r\�'r���c�0�q(-�K�S9��9�39+�9}�?� Cv�=B���ٜù���\��\��\¥\��\��Z�%*W�*U�jըVK�L˵B+�J��Fkm�-�%VnViUVm5�f�d�����c�0��Ļ��N���Y�of�ϣ0��W����s��dB�a�ŧi��t&�y83>�I�*j�z9a�2���5���xM��A D���n9^�@�f���\DD���d�#D�5�q��	X�eJx�i�b��>���7[�.�0��vq_X7����r��Iڒ�i��r ���          	� � �U�U��    ����&f&f3333@ @   
```



==================================================

FILE

app/global-error.tsx

IMPORTANCE

90

```
'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#06060A',
          color: 'white',
          padding: '24px',
          textAlign: 'center'
        }}>
          <h2>Critical Error Occurred</h2>
          <p style={{ display: 'none' }}>{error.message}</p>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
}

```



==================================================

FILE

app/globals.css

IMPORTANCE

90

```
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #06060A;
  --bg-2: #0D0D14;
  --bg-card: rgba(255,255,255,0.04);
  --bg-card-hover: rgba(255,255,255,0.07);
  --border: rgba(255,255,255,0.07);
  --border-hover: rgba(99,102,241,0.5);
  --text-1: #FFFFFF;
  --text-2: rgba(255,255,255,0.55);
  --text-3: rgba(255,255,255,0.25);
  --indigo: #5B5FEF;
  --indigo-glow: rgba(91,95,239,0.2);
  --gold: #F59E0B;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  outline: none !important;
  background: #06060A;
  overflow-x: hidden;
  width: 100%;
}

#__next {
  margin: 0;
  padding: 0;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    background: #06060A;
    color: #FFFFFF;
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Syne', sans-serif;
  }

  ::selection {
    background: rgba(91,95,239,0.35);
    color: white;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(91,95,239,0.3);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(91,95,239,0.5);
  }
}

@layer components {
  .container-main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .section-padding {
    padding: 120px 24px;
  }

  .section-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: #818CF8;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: inline-block;
    padding: 4px 12px;
    background: rgba(91,95,239,0.1);
    border-radius: 4px;
    border: 1px solid rgba(91,95,239,0.2);
  }

  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(36px, 5vw, 64px);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.05;
    color: white;
  }

  .mob-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 32px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    backdrop-filter: blur(12px);
  }
  .mob-card:hover {
    border-color: var(--border-hover);
    background: var(--bg-card-hover);
    transform: translateY(-4px);
  }

  .btn-primary {
    background: linear-gradient(135deg, #5B5FEF, #7C3AED);
    color: white;
    padding: 14px 28px;
    border-radius: 100px;
    font-weight: 600;
    font-size: 15px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    box-shadow: 0 8px 25px rgba(91,95,239,0.3);
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(91,95,239,0.4);
    opacity: 0.95;
  }

  .marquee-track {
    display: flex;
    gap: 16px;
    animation: marquee 50s linear infinite;
    width: max-content;
  }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes shimmer {
  0% { left: -100% }
  100% { left: 100% }
}

```



==================================================

FILE

app/loading.tsx

IMPORTANCE

90

```
export default function Loading() {
  return null;
}

```



==================================================

FILE

app/not-found.tsx

IMPORTANCE

90

```
import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | EDUING.in',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#06060A] px-6 text-center" style={{
      background: 'radial-gradient(circle at center, rgba(91,95,239,0.1) 0%, #06060A 100%)',
    }}>
      <h1 style={{
        fontFamily: 'Syne, sans-serif', fontSize: 'clamp(80px, 12vw, 120px)',
        fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.05em', margin: '0',
        lineHeight: '1',
      }}>404</h1>
      <h2 style={{
        fontFamily: 'Syne, sans-serif', fontSize: 'clamp(24px, 4vw, 32px)',
        fontWeight: '700', color: '#FFFFFF', margin: '24px 0 16px',
      }}>Page not found</h2>
      <p style={{
        fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.6)',
        maxWidth: '400px', margin: '0 auto 40px', lineHeight: '1.6',
      }}>
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
      </p>
      <Link href="/">
        <button
          className="hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
          style={{
            padding: '16px 36px', fontSize: '16px', fontWeight: '600',
            fontFamily: 'DM Sans, sans-serif', cursor: 'pointer',
            transition: 'all 0.2s ease', borderRadius: '100px',
            background: '#FFFFFF', color: '#08080A', border: 'none',
          }}
        >
          Return Home
        </button>
      </Link>
    </main>
  );
}

```



==================================================

FILE

app/privacy/page.tsx

IMPORTANCE

90

```
import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Privacy Policy — EDUING.in',
  description: 'Read the EDUING.in Privacy Policy. Learn how we collect, use, and protect your personal data.',
  openGraph: {
    title: 'Privacy Policy — EDUING.in',
    description: 'Learn how EDUING.in collects, uses, and protects your personal data.',
  },
};

const sections = [
  {
    title: '1. Introduction',
    content: 'EDUING.in (\u201Cwe,\u201D \u201Cour,\u201D or \u201Cus\u201D) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at eduing.in and our mobile applications.',
  },
  {
    title: '2. Information We Collect',
    content: 'We collect the following types of information:',
    list: [
      'Personal Information: Name, email address, phone number, date of birth',
      'Academic Information: 10th & 12th marks, entrance exam scores, preferred programs',
      'Documents: Marksheets, ID proofs, photographs, entrance exam scorecards',
      'Usage Data: Pages visited, features used, application activity',
      'Device Information: Browser type, IP address, operating system',
    ],
  },
  {
    title: '3. How We Use Your Information',
    list: [
      'To facilitate the university admissions process',
      'To create and manage your student profile',
      'To share your application with universities you apply to',
      'To provide real-time application tracking and notifications',
      'To improve our platform and user experience',
      'To communicate important updates about your applications',
      'To generate aggregate analytics (non-personal) for platform improvement',
    ],
  },
  {
    title: '4. Third-Party Services',
    content: 'We use Google Firebase for authentication, database (Firestore), and file storage. Google\u2019s privacy practices are governed by Google\u2019s Privacy Policy. We do not sell your personal data to any third party. Your documents and academic information are only shared with universities you explicitly apply to.',
  },
  {
    title: '5. Data Retention',
    content: 'We retain your personal data for as long as your account is active or as needed to provide our services. You may request deletion of your account and all associated data at any time. Upon account deletion, we will remove your data within 30 days, except where retention is required by law.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to:',
    list: [
      'Access your personal data stored on our platform',
      'Update or correct inaccurate information',
      'Delete your account and all associated data',
      'Withdraw consent for data processing at any time',
      'Export your data in a portable format',
    ],
  },
  {
    title: '7. Data Security',
    content: 'We implement industry-standard security measures through Firebase\u2019s enterprise-grade infrastructure. All data is encrypted at rest and in transit using AES-256 and TLS 1.2+ encryption. Access to user data is restricted and monitored.',
  },
  {
    title: '8. Cookies',
    content: 'We use essential cookies to maintain your session and preferences. We do not use third-party advertising cookies. Analytics cookies are used in aggregate form only.',
  },
  {
    title: '9. Changes to This Policy',
    content: 'We may update this Privacy Policy periodically. We will notify you of any material changes via email or a prominent notice on our platform. Your continued use of EDUING.in after changes constitutes acceptance of the updated policy.',
  },
  {
    title: '10. Governing Law',
    content: 'This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.',
  },
];

export default function PrivacyPage() {
  return (
    <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="privacy">
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        <AnimatedSection>
          <span className="section-label">LEGAL</span>
          <h1 className="section-title mb-2" style={{ fontSize: '40px' }}>Privacy Policy</h1>
          <p className="text-[15px] mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Effective Date: April 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mob-card">
            <div className="flex flex-col gap-10">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-[20px] font-bold text-white mb-3">{section.title}</h2>
                  {section.content && (
                    <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.content}
                    </p>
                  )}
                  {section.list && (
                    <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2 mt-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <h2 className="text-[20px] font-bold text-white mb-3">Contact Us</h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  If you have questions about this Privacy Policy, contact us at:<br />
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:eduing.in2026@gmail.com" className="hover:text-white transition-colors" style={{ color: '#818CF8' }}>
                    eduing.in2026@gmail.com
                  </a><br />
                  <strong className="text-white">Location:</strong> Bengaluru, Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

```



==================================================

FILE

app/robots.ts

IMPORTANCE

90

```
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://eduing.in/sitemap.xml',
  };
}

```



==================================================

FILE

app/sitemap.ts

IMPORTANCE

90

```
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eduing.in';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/trademark`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}

```



==================================================

FILE

app/terms/page.tsx

IMPORTANCE

90

```
import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Terms & Conditions — EDUING.in',
  description: 'Read the Terms and Conditions for using EDUING.in, the unified university admissions platform.',
  openGraph: {
    title: 'Terms & Conditions — EDUING.in',
    description: 'Terms and Conditions for using EDUING.in platform.',
  },
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using EDUING.in (\u201Cthe Platform\u201D), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Platform. These terms apply to all users, including students, universities, and visitors.',
  },
  {
    title: '2. Eligibility',
    content: 'You must be at least 16 years of age to create an account on EDUING.in. Users under 18 must have consent from a parent or legal guardian. By creating an account, you represent that you meet these eligibility requirements. University accounts must be created by authorized institutional representatives.',
  },
  {
    title: '3. Student Responsibilities',
    list: [
      'Provide accurate and truthful personal and academic information',
      'Upload genuine, unaltered documents and certificates',
      'Keep your account credentials secure and confidential',
      'Respond to communications from universities in a timely manner',
      'Not misuse the Platform for any purpose other than its intended use',
      'Maintain updated contact information on your profile',
    ],
  },
  {
    title: '4. University Partner Responsibilities',
    list: [
      'Provide accurate institutional and program information',
      'Process applications in a fair and timely manner',
      'Update application statuses promptly on the Platform',
      'Comply with all applicable education regulations',
      'Maintain confidentiality of student application data',
      'Not discriminate against applicants on prohibited grounds',
    ],
  },
  {
    title: '5. Prohibited Activities',
    content: 'The following activities are strictly prohibited:',
    list: [
      'Uploading fake, forged, or tampered documents',
      'Providing false academic credentials or personal information',
      'Creating multiple accounts for the same individual',
      'Spamming universities with irrelevant applications',
      'Attempting to hack, disrupt, or manipulate the Platform',
      'Scraping or harvesting data from the Platform',
      'Impersonating another user or institution',
    ],
  },
  {
    title: '6. Intellectual Property',
    content: 'EDUING.in owns all intellectual property rights in and to the Platform, including but not limited to the website design, logos, trademarks, software, and content. Users retain ownership of their uploaded documents and personal data but grant EDUING.in a license to use this content solely for the purpose of facilitating the admissions process.',
  },
  {
    title: '7. Limitation of Liability',
    content: 'EDUING.in acts as a facilitator between students and universities. We do not guarantee admission to any institution. We are not liable for admission decisions made by universities, delays in application processing, or any loss arising from use of the Platform. The Platform is provided \u201Cas is\u201D without warranties of any kind.',
  },
  {
    title: '8. Account Termination',
    content: 'We reserve the right to suspend or terminate accounts that violate these Terms, engage in prohibited activities, or are inactive for an extended period. Users may delete their accounts at any time through their profile settings.',
  },
  {
    title: '9. Governing Law & Dispute Resolution',
    content: 'These Terms are governed by the laws of India, specifically the State of Karnataka. Any disputes arising from these Terms or use of the Platform shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India. Parties agree to attempt mediation before pursuing litigation.',
  },
  {
    title: '10. Changes to Terms',
    content: 'EDUING.in reserves the right to modify these Terms at any time. Material changes will be communicated via email and/or a prominent notice on the Platform. Continued use of the Platform after changes constitutes acceptance of the revised Terms.',
  },
];

export default function TermsPage() {
  return (
    <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="terms">
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        <AnimatedSection>
          <span className="section-label">LEGAL</span>
          <h1 className="section-title mb-2" style={{ fontSize: '40px' }}>Terms & Conditions</h1>
          <p className="text-[15px] mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Last Updated: April 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mob-card">
            <div className="flex flex-col gap-10">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-[20px] font-bold text-white mb-3">{section.title}</h2>
                  {section.content && (
                    <p className="text-[15px] leading-relaxed mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.content}
                    </p>
                  )}
                  {section.list && (
                    <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <h2 className="text-[20px] font-bold text-white mb-3">Contact</h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  For questions about these Terms, contact us at:<br />
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:eduing.in2026@gmail.com" className="hover:text-white transition-colors" style={{ color: '#818CF8' }}>
                    eduing.in2026@gmail.com
                  </a><br />
                  <strong className="text-white">Location:</strong> Bengaluru, Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

```



==================================================

FILE

app/trademark/page.tsx

IMPORTANCE

90

```
import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Trademark — EDUING.in',
  description: 'Trademark notice and brand guidelines for EDUING.in.',
  openGraph: {
    title: 'Trademark — EDUING.in',
    description: 'Trademark and brand usage guidelines for EDUING.in.',
  },
};

export default function TrademarkPage() {
  return (
    <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="trademark">
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        <AnimatedSection>
          <span className="section-label">LEGAL</span>
          <h1 className="section-title mb-2" style={{ fontSize: '40px' }}>Trademark Notice</h1>
          <p className="text-[15px] mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Effective: April 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mob-card">
            <div className="flex flex-col gap-10">
              {/* Trademarks */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-3">Trademarks</h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <strong className="text-white">EDUING</strong> and <strong className="text-white">EDUING.in</strong> are
                  trademarks of EDUING.in. The EDUING logo, brand name, and associated visual identity
                  are proprietary and protected under applicable trademark and intellectual property laws
                  of India.
                </p>
              </div>

              {/* Logo & Visual Identity */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-4">Logo & Visual Identity</h2>
                <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  The EDUING.in logo consists of:
                </p>
                <div
                  className="flex items-center justify-center py-10 mb-6 rounded-xl"
                  style={{ background: '#18181C', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-baseline gap-0 select-none">
                    <span className="text-4xl font-extrabold text-white tracking-tight">EDU</span>
                    <span className="text-4xl font-extrabold tracking-tight" style={{ color: '#4F46E5' }}>ING</span>
                    <span className="text-2xl font-bold ml-[1px]" style={{ color: '#F59E0B' }}>.in</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <li><strong className="text-white">&ldquo;EDU&rdquo;</strong> — displayed in white (#FAFAFA), representing education</li>
                  <li><strong className="text-white">&ldquo;ING&rdquo;</strong> — displayed in Indigo (#4F46E5), our primary brand color</li>
                  <li><strong className="text-white">&ldquo;.in&rdquo;</strong> — displayed in Gold (#F59E0B), representing India</li>
                </ul>
              </div>

              {/* Brand Colors */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-4">Brand Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {[
                    { name: 'Primary Indigo', hex: '#4F46E5', color: '#4F46E5' },
                    { name: 'Secondary Gold', hex: '#F59E0B', color: '#F59E0B' },
                    { name: 'Primary Text', hex: '#FAFAFA', color: '#FAFAFA' },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex-shrink-0"
                        style={{ background: c.color, border: c.name === 'Primary Text' ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
                      />
                      <div>
                        <p className="text-[14px] font-medium text-white">{c.name}</p>
                        <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Permitted Use */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-3">Permitted Use</h2>
                <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <li>Press mentions and editorial references with proper credit</li>
                  <li>Educational or academic references to the platform</li>
                  <li>Linking to EDUING.in from partner university websites</li>
                  <li>Social media mentions with appropriate attribution</li>
                </ul>
              </div>

              {/* Not Permitted */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-3">Not Permitted</h2>
                <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <li>Commercial use of the EDUING brand without written license</li>
                  <li>Modifying, distorting, or altering the logo in any way</li>
                  <li>Using the EDUING name to imply endorsement or partnership without agreement</li>
                  <li>Creating derivative works based on our brand identity</li>
                  <li>Using our trademarks in domain names, social media handles, or app names</li>
                </ul>
              </div>

              {/* Licensing */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <h2 className="text-[20px] font-bold text-white mb-3">Licensing & Permissions</h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  For trademark licensing requests, press kit access, or brand usage permissions,
                  please contact us at:<br />
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:eduing.in2026@gmail.com" className="hover:text-white transition-colors" style={{ color: '#818CF8' }}>
                    eduing.in2026@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

```



==================================================

FILE

components/Footer.tsx

IMPORTANCE

85

```
import Link from 'next/link';

const footerColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Universities', href: '/#universities' },
      { label: 'Programs', href: '#' },
      { label: 'Mobile App', href: '#' },
    ],
  },
  {
    title: 'Students',
    links: [
      { label: 'Register Free', href: '#' },
      { label: 'Dashboard', href: '#' },
      { label: 'Documents', href: '#' },
      { label: 'Track Applications', href: '#' },
    ],
  },
  {
    title: 'Universities',
    links: [
      { label: 'Register Institution', href: '#' },
      { label: 'Admin Portal', href: '#' },
      { label: 'Analytics', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#08080A',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
      id="footer"
    >
      <div className="container-main px-6 md:px-10 pt-16 pb-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Logo + Tagline */}
          <div className="lg:max-w-[280px]">
            <Link href="/" className="flex items-baseline gap-0 mb-3 select-none">
              <span className="text-xl font-extrabold text-white tracking-tight">EDU</span>
              <span className="text-xl font-extrabold text-accent tracking-tight">ING</span>
              <span className="text-[0.75em] font-bold text-gold ml-[1px]">.in</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', lineHeight: 1.6 }}>
              Simplifying university admissions across India.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4
                  className="mb-4"
                  style={{
                    color: 'rgba(255,255,255,0.2)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] transition-colors duration-150 hover:text-white"
                        style={{ color: 'rgba(255,255,255,0.45)' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>
            © 2026 EDUING.in
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[13px] transition-colors duration-150 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[13px] transition-colors duration-150 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Terms
            </Link>
            <Link
              href="/trademark"
              className="text-[13px] transition-colors duration-150 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Trademark
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

```



---

# SYSTEM PROMPT

You are an elite software engineering audit team.

You are acting as:

- Staff Software Engineer
- Senior Software Architect
- Staff UI/UX Designer
- Security Engineer
- Performance Engineer
- DevOps Engineer
- QA Engineer
- CTO

Your objective is to audit this project completely.

Review:

- Architecture
- Folder structure
- Code quality
- UI/UX
- Performance
- Security
- Accessibility
- Maintainability
- Scalability
- Best practices
- Missing features
- Bugs
- Edge cases
- Technical debt

For every issue provide:

1. Severity
2. Reason
3. Recommendation
4. Implementation approach

Return the audit in professional markdown.

Do not praise the project.

Focus on improvements.

Assume this project is intended for production.
