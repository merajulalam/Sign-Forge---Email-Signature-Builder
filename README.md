# Sign Forge

Sign Forge is a modern static web app for building email signatures with live preview, layout presets, profile media, company logos, social links, and Gmail-friendly copy/export options.

## Features

- Large layout library for different signature structures
- Live email signature preview
- Profile photo or GIF support
- Multiple photo frame styles
- Company logo upload or URL support
- Company logo position controls
- Social and website links with recognizable icons
- Color controls for accent, text, and link logos
- Modern range sliders and toggle controls
- Gmail-safe copy mode that converts inline SVG icons into PNG images before copying
- Downloadable HTML signature export

## Project Structure

```text
.
|-- index.html
|-- styles.css
|-- script.js
`-- assets/
    |-- company-mark.svg
    `-- default-avatar.svg
```

## How To Run Locally

This project is a static website. No build step is required.

Open `index.html` directly in your browser, or use a local server from VS Code with the Live Server extension.

## Gmail Notes

Use the `Copy for Gmail` button before pasting into Gmail settings.

Gmail can remove or break inline SVGs, local images, and some data URLs. Sign Forge converts icons into PNG images during copy to make the pasted signature more reliable. For animated GIFs, the most reliable option is a public HTTPS GIF URL or uploading the GIF directly through Gmail's image tool.


## Tech Used

- HTML
- CSS
- JavaScript

## License

You can add a license file if you want to share or open-source the project.
