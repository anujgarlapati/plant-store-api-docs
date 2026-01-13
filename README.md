# 🌿 Plant Store API Documentation

Modern, interactive API documentation for the Plant Store platform, powered by [Fern](https://buildwithfern.com).

![Plant Store](https://img.shields.io/badge/Plant%20Store-API%20Docs-166534?style=for-the-badge)
![Fern](https://img.shields.io/badge/Built%20with-Fern-4ade80?style=for-the-badge)
![OpenAPI](https://img.shields.io/badge/OpenAPI-3.1-6BA539?style=for-the-badge)

## 🔗 Live Documentation

**Production Site:** [anuj-garlapati-demo.docs.buildwithfern.com](https://anuj-garlapati-demo.docs.buildwithfern.com)

---

## ✨ Features

- **Interactive API Reference** - Full OpenAPI 3.1 specification with try-it-out functionality
- **Modern Landing Page** - Beautiful home page with key features, quick start guides, and code examples
- **Dark/Light Mode** - Automatic theme switching based on user preference
- **Custom Floating Action Button** - Quick access to Fern resources
- **Support Bar** - Help resources accessible from every page
- **Webhook Documentation** - Real-time event notification guides
- **Responsive Design** - Works on desktop, tablet, and mobile

---

## 📁 Project Structure

```
fern/
├── assets/
│   ├── logo.svg              # Light mode logo
│   ├── logo-dark.svg         # Dark mode logo  
│   ├── favicon.svg           # Browser favicon
│   ├── custom.css            # Custom styles (hover effects, support bar, etc.)
│   └── custom.js             # Custom JavaScript (FAB, scroll behaviors)
├── openapi/
│   └── api.yml               # OpenAPI 3.1 specification
├── pages/
│   └── index.mdx             # Landing page content
├── docs.yml                  # Site configuration (colors, navigation, branding)
└── fern.config.json          # Fern project settings
```

---

## 🚀 Getting Started

### Prerequisites

1. **Node.js** (v16 or higher)
2. **Fern CLI** - Install globally:

```bash
npm install -g fern-api
```

3. **Fern Account** - Login to publish:

```bash
fern login
```

### Local Development

Start the local development server:

```bash
cd fern
fern docs dev
```

This launches a preview at `http://localhost:3000` with hot reload.

### Publishing Changes

Deploy updates to the live site:

```bash
fern generate --docs
```

> ⚠️ This publishes to production. Use `--preview` flag for staging.

---

## 🎨 Customization Guide

### Changing Colors & Branding

Edit `fern/docs.yml`:

```yaml
colors:
  accentPrimary:
    light: '#166534'    # Green for light mode
    dark: '#4ade80'     # Lighter green for dark mode
  background:
    light: '#ffffff'
    dark: '#0a0a0a'
```

### Updating the Logo

Replace these files in `fern/assets/`:
- `logo.svg` - Light mode logo
- `logo-dark.svg` - Dark mode logo
- `favicon.svg` - Browser tab icon

### Modifying Custom Styles

Edit `fern/assets/custom.css` for:
- Support bar styling
- Card hover effects
- Navigation appearance
- Typography adjustments

### Adding Custom JavaScript

Edit `fern/assets/custom.js` for:
- Floating action button behavior
- Scroll-triggered animations
- Dynamic content modifications

### Updating API Endpoints

Edit `fern/openapi/api.yml` to:
- Add new endpoints
- Modify request/response schemas
- Update webhook definitions

---

## 📝 Content Updates

### Editing the Landing Page

Modify `fern/pages/index.mdx` using [MDX](https://mdxjs.com/) syntax with [Fern components](https://buildwithfern.com/learn/docs/content/components/overview):

- `<CardGroup>` - Feature cards
- `<Callout>` - Tips and warnings
- `<Tabs>` - Tabbed content
- `<Accordion>` - Collapsible sections

### Adding New Pages

1. Create a new `.mdx` file in `fern/pages/`
2. Add it to the navigation in `fern/docs.yml`:

```yaml
navigation:
  - page: Home
    path: ./pages/index.mdx
  - page: New Page
    path: ./pages/new-page.mdx
  - api: API Reference
```

---

## 🔄 Deployment Workflow

1. **Make changes** locally
2. **Preview** with `fern docs dev`
3. **Test** thoroughly
4. **Commit** to Git
5. **Publish** with `fern generate --docs`

---

## 📚 Resources

- [Fern Documentation](https://buildwithfern.com/learn)
- [Fern Components Reference](https://buildwithfern.com/learn/docs/content/components/overview)
- [OpenAPI 3.1 Specification](https://swagger.io/specification/)
- [MDX Documentation](https://mdxjs.com/)

---

## 🆘 Support

- **Email:** support@plantstore.com
- **Documentation Issues:** Open a GitHub issue
- **Fern Support:** [buildwithfern.com](https://buildwithfern.com)

---

<p align="center">
  <strong>Built with 🌿 by Plant Store</strong><br>
  Powered by <a href="https://buildwithfern.com">Fern</a>
</p>
