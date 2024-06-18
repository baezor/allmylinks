# All My Links

> A Linktree-like template made with Astro

[![Astro](https://img.shields.io/badge/astro-4.7.1-blue.svg)](https://astro.build)
[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/baezor/allmylinks)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Description

Create a simple and elegant page to display all your links in one place.
This template is a clone of the popular [Linktree](https://linktr.ee/) service, but built with Astro.

## Installation

1. Clone this repository. `git clone git@github.com:baezor/allmylinks.git allmylinks`.
2. Navigate to the project directory using `cd allmylinks`.
3. Install dependencies and start the server `npm i && npm run start`.

## Usage

- **Development**: Run `npm run dev` or `npm start` to start the development server.
- **Build**: Use `npm run build` to generate a production build.
- **Preview**: Run `npm run preview` to preview the production build.
- **Astro CLI**: Explore additional Astro CLI commands using `npm run astro`.

## Updating your links

To customize the links displayed in your application, follow these steps:

1. Open the `src/data/index.ts` file in your project.
2. You'll see an array of objects with the information of the links. Add, remove, or update the links as needed.

```javascript
const links = [
  {
    label: "Add me to your network on LinkedIn",
    url: "https://www.linkedin.com/in/baezor/",
  },
  {
    label: "Check out my GitHub",
    url: "https://github.com/baezor/",
  },
];
```

5. Once you have updated the information of the links in the `src/data/index.ts` file, the changes will be automatically reflected in your application when you rebuild or run it.
