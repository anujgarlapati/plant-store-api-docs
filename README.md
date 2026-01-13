# Plant Store API Documentation

Welcome to the Plant Store API documentation site. This repository contains the source files for generating our API documentation using [Fern](https://buildwithfern.com).

## 🌿 Live Documentation

Visit the live documentation at: **[anuj-garlapati-demo.docs.buildwithfern.com](https://anuj-garlapati-demo.docs.buildwithfern.com)**

## 📁 Project Structure

```
fern/
├── assets/
│   ├── logo.svg          # Light mode logo
│   ├── logo-dark.svg     # Dark mode logo
│   ├── favicon.svg       # Site favicon
│   ├── custom.css        # Custom styling
│   └── custom.js         # Custom JavaScript (FAB, support bar)
├── openapi/
│   └── api.yml           # OpenAPI specification
├── pages/
│   └── index.mdx         # Landing page
├── docs.yml              # Documentation configuration
└── fern.config.json      # Fern project configuration
```

## 🚀 Getting Started

### Prerequisites

Install the Fern CLI:

```bash
npm install -g fern-api
```

### Local Development

Preview the documentation locally:

```bash
fern docs dev
```

This starts a local server at `http://localhost:3000`.

### Publishing

To publish updates to the live site:

```bash
fern generate --docs
```

## 🎨 Customization

- **Styling**: Edit `fern/assets/custom.css` for custom styles
- **JavaScript**: Edit `fern/assets/custom.js` for custom functionality
- **Colors & Branding**: Edit `fern/docs.yml` under the `colors` section
- **API Spec**: Edit `fern/openapi/api.yml` to update API endpoints

## 📖 Documentation

- [Fern Documentation](https://buildwithfern.com/learn)
- [OpenAPI Specification](https://swagger.io/specification/)

## 📧 Support

For questions or support, contact us at support@plantstore.com
