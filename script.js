const defaultState = {
  identity: {
    fullName: "Cristiano Ronaldo",
    jobTitle: "Forward",
    company: "Real Madrid CF",
    department: "First Team",
    email: "cristiano.ronaldo@realmadrid.example",
    phone: "+34 900 000 007",
    address: "Santiago Bernabeu Stadium, Av. de Concha Espina 1, Madrid, Spain",
    website: "https://realmadrid.example/cristiano-ronaldo",
    tagline: "Forward for Real Madrid CF.",
    ctaLabel: "",
    ctaUrl: ""
  },
  media: {
    showPhoto: true,
    photoSrc: "assets/default-avatar.svg",
    photoUrl: "",
    profileUrl: "https://realmadrid.example/players/cristiano-ronaldo",
    photoFrame: "circle",
    photoSize: 82,
    showLogo: false,
    logoSrc: "assets/company-mark.svg",
    logoUrl: "",
    logoLink: "https://signforge.example",
    logoPosition: "auto",
    logoWidth: 66
  },
  style: {
    layout: "classic-side",
    theme: "signal",
    accentColor: "#111111",
    textColor: "#111111",
    fontFamily: "'Segoe UI', Arial, sans-serif",
    contactMarkerStyle: "icons",
    iconShape: "soft",
    bgMode: "transparent",
    density: 14,
    signatureWidth: 620,
    showDivider: true
  },
  socials: [
    { key: "website", label: "Website", short: "WEB", url: "https://realmadrid.example/cristiano-ronaldo", color: "#111111", active: true },
    { key: "linkedin", label: "LinkedIn", short: "IN", url: "https://linkedin.example/cristiano-ronaldo", color: "#0a66c2", active: false },
    { key: "github", label: "GitHub", short: "GH", url: "https://github.example/cristiano-ronaldo", color: "#24292f", active: false },
    { key: "x", label: "X", short: "X", url: "https://x.example/cristiano", color: "#111111", active: true },
    { key: "instagram", label: "Instagram", short: "IG", url: "https://instagram.example/cristiano", color: "#c13584", active: true },
    { key: "facebook", label: "Facebook", short: "FB", url: "https://facebook.com", color: "#1877f2", active: false },
    { key: "youtube", label: "YouTube", short: "YT", url: "https://youtube.com", color: "#ff0000", active: false },
    { key: "whatsapp", label: "WhatsApp", short: "WA", url: "https://wa.me/34900000007", color: "#25d366", active: false },
    { key: "behance", label: "Behance", short: "BE", url: "https://behance.net", color: "#1769ff", active: false },
    { key: "dribbble", label: "Dribbble", short: "DB", url: "https://dribbble.com", color: "#ea4c89", active: false },
    { key: "calendly", label: "Calendly", short: "CAL", url: "https://calendly.example/cristiano", color: "#006bff", active: false },
    { key: "tiktok", label: "TikTok", short: "TT", url: "https://tiktok.com", color: "#111111", active: false }
  ]
};

const layouts = [
  { id: "classic-side", name: "Classic Side", detail: "Photo left", mode: "side", mini: "side", photo: "left", accent: "line", logo: "top" },
  { id: "mirror-side", name: "Mirror Side", detail: "Photo right", mode: "side", mini: "logo", photo: "right", accent: "line", logo: "top" },
  { id: "clean-stack", name: "Clean Stack", detail: "Centered stack", mode: "stack", mini: "stack", photo: "top", accent: "dot", logo: "bottom" },
  { id: "social-card", name: "Social Card", detail: "Soft panel", mode: "stack", mini: "center", photo: "top", accent: "bar", logo: "top", forceBg: "tint" },
  { id: "wide-banner", name: "Wide Banner", detail: "Header bar", mode: "banner", mini: "banner", photo: "left", accent: "bar", logo: "right" },
  { id: "accent-rail", name: "Accent Rail", detail: "Color rail", mode: "rail", mini: "rail", photo: "left", accent: "rail", logo: "bottom" },
  { id: "dark-split", name: "Dark Split", detail: "Dark panel", mode: "split", mini: "split", photo: "left", accent: "block", logo: "left", forceBg: "dark" },
  { id: "logo-first", name: "Logo First", detail: "Brand led", mode: "logo", mini: "logo", photo: "right", accent: "line", logo: "left" },
  { id: "compact-row", name: "Compact Row", detail: "Lean single row", mode: "compact", mini: "compact", photo: "left", accent: "none", logo: "right" },
  { id: "minimal-line", name: "Minimal Line", detail: "Text focused", mode: "minimal", mini: "compact", photo: "none", accent: "line", logo: "bottom" },
  { id: "editorial", name: "Editorial", detail: "Large name", mode: "editorial", mini: "side", photo: "right", accent: "line", logo: "bottom" },
  { id: "badge-left", name: "Badge Left", detail: "Framed photo", mode: "badge", mini: "rail", photo: "left", accent: "badge", logo: "top" },
  { id: "badge-right", name: "Badge Right", detail: "Right badge", mode: "badge", mini: "logo", photo: "right", accent: "badge", logo: "top" },
  { id: "center-mark", name: "Center Mark", detail: "Logo centered", mode: "center", mini: "center", photo: "top", accent: "dot", logo: "top" },
  { id: "vertical-rule", name: "Vertical Rule", detail: "Divider focus", mode: "side", mini: "rail", photo: "left", accent: "rule", logo: "bottom" },
  { id: "double-column", name: "Double Column", detail: "Info split", mode: "columns", mini: "side", photo: "left", accent: "line", logo: "top" },
  { id: "top-logo", name: "Top Logo", detail: "Logo header", mode: "banner", mini: "banner", photo: "right", accent: "line", logo: "top" },
  { id: "photo-strip", name: "Photo Strip", detail: "Image strip", mode: "strip", mini: "banner", photo: "left", accent: "block", logo: "right" },
  { id: "soft-card", name: "Soft Card", detail: "Calm tint", mode: "side", mini: "side", photo: "left", accent: "dot", logo: "right", forceBg: "tint" },
  { id: "executive", name: "Executive", detail: "Formal", mode: "logo", mini: "logo", photo: "none", accent: "rule", logo: "left" },
  { id: "creator", name: "Creator", detail: "Photo forward", mode: "editorial", mini: "center", photo: "left", accent: "bar", logo: "bottom" },
  { id: "tech-slab", name: "Tech Slab", detail: "Sharp edge", mode: "split", mini: "split", photo: "right", accent: "block", logo: "right", forceBg: "dark" },
  { id: "consultant", name: "Consultant", detail: "CTA focus", mode: "columns", mini: "side", photo: "right", accent: "badge", logo: "top" },
  { id: "micro", name: "Micro", detail: "Tiny footprint", mode: "compact", mini: "compact", photo: "none", accent: "none", logo: "left" },
  { id: "framed", name: "Framed", detail: "Full border", mode: "stack", mini: "center", photo: "top", accent: "frame", logo: "bottom", forceBg: "solid" },
  { id: "side-note", name: "Side Note", detail: "Tagline focus", mode: "rail", mini: "rail", photo: "right", accent: "rail", logo: "top" },
  { id: "agency", name: "Agency", detail: "Graphic bar", mode: "strip", mini: "banner", photo: "left", accent: "bar", logo: "top" },
  { id: "portfolio", name: "Portfolio", detail: "Links forward", mode: "center", mini: "center", photo: "top", accent: "line", logo: "bottom" }
];

const themes = [
  { id: "signal", name: "Monochrome", note: "Black, white, clean", accent: "#111111", text: "#111111", muted: "#63666d", bg: "#ffffff", tint: "#f4f4f5", dark: "#111111" },
  { id: "verdant", name: "Verdant", note: "Green, black, mist", accent: "#0f8a5f", text: "#13231d", muted: "#5e746b", bg: "#ffffff", tint: "#edf8f2", dark: "#102019" },
  { id: "coral", name: "Coral", note: "Coral, navy, blush", accent: "#e4583e", text: "#172033", muted: "#6e7180", bg: "#ffffff", tint: "#fff0ed", dark: "#1b2432" },
  { id: "gold", name: "Gold", note: "Gold, charcoal", accent: "#b7791f", text: "#1f2937", muted: "#6f6657", bg: "#ffffff", tint: "#fff7e8", dark: "#171717" },
  { id: "plum", name: "Plum", note: "Plum, rose, slate", accent: "#8d3f73", text: "#1f2330", muted: "#6b6574", bg: "#ffffff", tint: "#fff0f7", dark: "#1d1724" },
  { id: "mono", name: "Mono", note: "Black, gray, red", accent: "#d43d2f", text: "#111827", muted: "#667085", bg: "#ffffff", tint: "#f4f4f5", dark: "#111111" },
  { id: "ocean", name: "Ocean", note: "Cyan, navy, white", accent: "#0086a8", text: "#123046", muted: "#5f7482", bg: "#ffffff", tint: "#eaf9fd", dark: "#0f2430" },
  { id: "citrus", name: "Citrus", note: "Lime, ink, white", accent: "#6f9f1b", text: "#1d2a23", muted: "#637067", bg: "#ffffff", tint: "#f4fadf", dark: "#172019" }
];

let state = clone(defaultState);

const dom = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  buildLayoutGrid();
  buildThemeGrid();
  buildSocialRows();
  bindEvents();
  populateControls();
  render();
});

function cacheDom() {
  [
    "fullName", "jobTitle", "company", "department", "email", "phone", "address", "website",
    "tagline", "ctaLabel", "ctaUrl", "showPhoto", "photoUpload", "photoUrl", "profileUrl",
    "photoFrame", "photoSize", "photoSizeValue", "showLogo", "logoUpload", "logoUrl",
    "logoLink", "logoPosition", "logoWidth", "logoWidthValue", "socialRows", "customLabel", "customUrl",
    "addCustomLink", "layoutGrid", "themeGrid", "accentColor", "textColor", "fontFamily",
    "contactMarkerStyle", "iconShape", "bgMode", "density", "densityValue", "signatureWidth", "signatureWidthValue",
    "showDivider", "signaturePreview", "htmlOutput", "copySignature", "copyHtml",
    "downloadHtml", "resetDemo", "toast"
  ].forEach((id) => {
    dom[id] = document.getElementById(id);
  });
}

function bindEvents() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => setActiveTab(button.dataset.tab));
  });

  const liveInputs = [
    "fullName", "jobTitle", "company", "department", "email", "phone", "address", "website",
    "tagline", "ctaLabel", "ctaUrl", "showPhoto", "photoUrl", "profileUrl", "photoFrame",
    "photoSize", "showLogo", "logoUrl", "logoLink", "logoPosition", "logoWidth", "accentColor", "textColor",
    "fontFamily", "contactMarkerStyle", "iconShape", "bgMode", "density", "signatureWidth", "showDivider"
  ];

  liveInputs.forEach((id) => {
    const eventName = dom[id].type === "checkbox" || dom[id].tagName === "SELECT" ? "change" : "input";
    dom[id].addEventListener(eventName, () => {
      readControls();
      render();
    });
  });

  dom.photoUpload.addEventListener("change", () => readFile(dom.photoUpload, (src) => {
    state.media.photoSrc = src;
    state.media.photoUrl = "";
    dom.photoUrl.value = "";
    render();
  }));

  dom.logoUpload.addEventListener("change", () => readFile(dom.logoUpload, (src) => {
    state.media.logoSrc = src;
    state.media.logoUrl = "";
    dom.logoUrl.value = "";
    render();
  }));

  dom.layoutGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-layout]");
    if (!button) return;
    state.style.layout = button.dataset.layout;
    setActiveButtons(dom.layoutGrid, state.style.layout, "layout");
    render();
  });

  dom.themeGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme]");
    if (!button) return;
    const theme = themes.find((item) => item.id === button.dataset.theme);
    state.style.theme = theme.id;
    state.style.accentColor = theme.accent;
    state.style.textColor = theme.text;
    dom.accentColor.value = theme.accent;
    dom.textColor.value = theme.text;
    setActiveButtons(dom.themeGrid, state.style.theme, "theme");
    render();
  });

  dom.socialRows.addEventListener("input", handleSocialInput);
  dom.socialRows.addEventListener("change", handleSocialInput);

  dom.addCustomLink.addEventListener("click", () => {
    const label = dom.customLabel.value.trim();
    const url = dom.customUrl.value.trim();
    if (!label || !url) {
      showToast("Add a name and URL for the custom logo link.");
      return;
    }
    const key = `custom-${Date.now()}`;
    state.socials.push({
      key,
      label,
      short: label.slice(0, 2).toUpperCase(),
      url,
      color: state.style.accentColor,
      active: true,
      custom: true
    });
    dom.customLabel.value = "";
    dom.customUrl.value = "";
    buildSocialRows();
    render();
  });

  dom.copySignature.addEventListener("click", copyRichSignature);
  dom.copyHtml.addEventListener("click", copyHtml);
  dom.downloadHtml.addEventListener("click", downloadHtml);
  dom.resetDemo.addEventListener("click", resetDemo);
}

function setActiveTab(tab) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tab-${tab}`);
  });
}

function populateControls() {
  Object.keys(state.identity).forEach((key) => {
    if (dom[key]) dom[key].value = state.identity[key];
  });

  Object.keys(state.media).forEach((key) => {
    if (!dom[key]) return;
    if (dom[key].type === "checkbox") dom[key].checked = state.media[key];
    else dom[key].value = state.media[key];
  });

  Object.keys(state.style).forEach((key) => {
    if (!dom[key]) return;
    if (dom[key].type === "checkbox") dom[key].checked = state.style[key];
    else dom[key].value = state.style[key];
  });

  dom.photoUpload.value = "";
  dom.logoUpload.value = "";
  setActiveButtons(dom.layoutGrid, state.style.layout, "layout");
  setActiveButtons(dom.themeGrid, state.style.theme, "theme");
  syncOutputs();
}

function readControls() {
  state.identity = {
    fullName: dom.fullName.value,
    jobTitle: dom.jobTitle.value,
    company: dom.company.value,
    department: dom.department.value,
    email: dom.email.value,
    phone: dom.phone.value,
    address: dom.address.value,
    website: dom.website.value,
    tagline: dom.tagline.value,
    ctaLabel: dom.ctaLabel.value,
    ctaUrl: dom.ctaUrl.value
  };

  state.media = {
    ...state.media,
    showPhoto: dom.showPhoto.checked,
    photoUrl: dom.photoUrl.value,
    profileUrl: dom.profileUrl.value,
    photoFrame: dom.photoFrame.value,
    photoSize: Number(dom.photoSize.value),
    showLogo: dom.showLogo.checked,
    logoUrl: dom.logoUrl.value,
    logoLink: dom.logoLink.value,
    logoPosition: dom.logoPosition.value,
    logoWidth: Number(dom.logoWidth.value)
  };

  if (state.media.photoUrl.trim()) state.media.photoSrc = state.media.photoUrl.trim();
  if (state.media.logoUrl.trim()) state.media.logoSrc = state.media.logoUrl.trim();

  state.style = {
    ...state.style,
    accentColor: dom.accentColor.value,
    textColor: dom.textColor.value,
    fontFamily: dom.fontFamily.value,
    contactMarkerStyle: dom.contactMarkerStyle.value,
    iconShape: dom.iconShape.value,
    bgMode: dom.bgMode.value,
    density: Number(dom.density.value),
    signatureWidth: Number(dom.signatureWidth.value),
    showDivider: dom.showDivider.checked
  };

  syncOutputs();
}

function syncOutputs() {
  dom.photoSizeValue.textContent = `${state.media.photoSize}px`;
  dom.logoWidthValue.textContent = `${state.media.logoWidth}px`;
  dom.densityValue.textContent = `${state.style.density}px`;
  dom.signatureWidthValue.textContent = `${state.style.signatureWidth}px`;
}

function buildLayoutGrid() {
  dom.layoutGrid.innerHTML = layouts.map((layout) => `
    <button class="layout-card" type="button" data-layout="${layout.id}">
      <span class="layout-mini ${layout.mini}" aria-hidden="true"><i></i><b></b><em></em><u></u></span>
      <strong>${escapeHtml(layout.name)}</strong>
      <small>${escapeHtml(layout.detail)}</small>
    </button>
  `).join("");
}

function buildThemeGrid() {
  dom.themeGrid.innerHTML = themes.map((theme) => `
    <button class="theme-card" type="button" data-theme="${theme.id}">
      <span class="swatch-row" aria-hidden="true">
        <i class="swatch" style="background:${theme.accent}"></i>
        <i class="swatch" style="background:${theme.text}"></i>
        <i class="swatch" style="background:${theme.tint}"></i>
      </span>
      <strong>${escapeHtml(theme.name)}</strong>
      <span>${escapeHtml(theme.note)}</span>
    </button>
  `).join("");
}

function buildSocialRows() {
  dom.socialRows.innerHTML = state.socials.map((social) => `
    <div class="social-row" data-key="${social.key}">
      <input type="checkbox" ${social.active ? "checked" : ""} aria-label="Show ${escapeAttr(social.label)}">
      <span class="social-badge" style="color:${social.color}">${socialIconMarkup(social.key, 18)}</span>
      <span class="social-name">${escapeHtml(social.label)}</span>
      <input type="url" value="${escapeAttr(social.url)}" aria-label="${escapeAttr(social.label)} URL">
      <input type="color" value="${social.color}" aria-label="${escapeAttr(social.label)} color">
    </div>
  `).join("");
}

function handleSocialInput(event) {
  const row = event.target.closest(".social-row");
  if (!row) return;
  const social = state.socials.find((item) => item.key === row.dataset.key);
  if (!social) return;
  const inputs = row.querySelectorAll("input");
  social.active = inputs[0].checked;
  social.url = inputs[1].value;
  social.color = inputs[2].value;
  row.querySelector(".social-badge").style.color = social.color;
  render();
}

function setActiveButtons(container, activeId, key) {
  container.querySelectorAll(`[data-${key}]`).forEach((button) => {
    button.classList.toggle("active", button.dataset[key] === activeId);
  });
}

function render() {
  const signatureHtml = renderSignature();
  dom.signaturePreview.innerHTML = signatureHtml;
  dom.htmlOutput.value = signatureHtml;
}

function renderSignature() {
  const layout = layouts.find((item) => item.id === state.style.layout) || layouts[0];
  const theme = themes.find((item) => item.id === state.style.theme) || themes[0];
  const visual = getVisual(theme, layout);
  const selectedLogo = renderLogo(layout);
  const logoPlacement = state.media.logoPosition || "auto";
  const ctx = {
    layout,
    theme,
    visual,
    gap: state.style.density,
    width: state.style.signatureWidth,
    photo: renderPhoto(layout),
    logo: logoPlacement === "auto" ? selectedLogo : "",
    nameBlock: renderNameBlock(visual, layout),
    details: renderDetails(visual, layout),
    socials: renderSocials(visual),
    cta: renderCta(visual)
  };

  let signatureHtml = "";
  switch (layout.mode) {
    case "stack":
      signatureHtml = renderStack(ctx);
      break;
    case "banner":
      signatureHtml = renderBanner(ctx);
      break;
    case "rail":
      signatureHtml = renderRail(ctx);
      break;
    case "split":
      signatureHtml = renderSplit(ctx);
      break;
    case "logo":
      signatureHtml = renderLogoFirst(ctx);
      break;
    case "compact":
      signatureHtml = renderCompact(ctx);
      break;
    case "minimal":
      signatureHtml = renderMinimal(ctx);
      break;
    case "editorial":
      signatureHtml = renderEditorial(ctx);
      break;
    case "badge":
      signatureHtml = renderBadge(ctx);
      break;
    case "center":
      signatureHtml = renderCenter(ctx);
      break;
    case "columns":
      signatureHtml = renderColumns(ctx);
      break;
    case "strip":
      signatureHtml = renderStrip(ctx);
      break;
    case "side":
    default:
      signatureHtml = renderSide(ctx);
      break;
  }
  return applyLogoPlacement(signatureHtml, selectedLogo);
}

function renderSide(ctx) {
  const photoFirst = ctx.layout.photo !== "right";
  const photoCell = ctx.photo ? cell(ctx.photo, `width:${state.media.photoSize + 18}px;vertical-align:middle;padding-right:${photoFirst ? ctx.gap : 0}px;padding-left:${photoFirst ? 0 : ctx.gap}px;`) : "";
  const infoCell = cell(`
    ${ctx.layout.logo === "top" ? block(ctx.logo, "margin-bottom:8px;") : ""}
    ${ctx.nameBlock}
    ${divider(ctx.visual, ctx.layout)}
    ${ctx.details}
    ${ctx.socials}
    ${ctx.cta}
    ${ctx.layout.logo !== "top" ? block(ctx.logo, "margin-top:8px;") : ""}
  `, "vertical-align:middle;");
  return tableWrap(ctx, row(photoFirst ? photoCell + infoCell : infoCell + photoCell));
}

function renderStack(ctx) {
  return tableWrap(ctx, `
    <tr><td style="${baseCell()}text-align:center;">
      ${ctx.layout.logo === "top" ? block(ctx.logo, "margin-bottom:10px;") : ""}
      ${ctx.photo ? block(ctx.photo, "margin-bottom:10px;") : ""}
      ${ctx.nameBlock}
      ${divider(ctx.visual, ctx.layout, true)}
      ${ctx.details}
      ${ctx.socials}
      ${ctx.cta}
      ${ctx.layout.logo !== "top" ? block(ctx.logo, "margin-top:10px;") : ""}
    </td></tr>
  `);
}

function renderBanner(ctx) {
  const logoTop = ctx.logo && ctx.layout.logo === "top" ? `<tr><td colspan="2" style="${baseCell()}padding-bottom:10px;">${ctx.logo}</td></tr>` : "";
  const bar = ctx.layout.accent === "bar" ? `<tr><td colspan="2" style="height:8px;background:${ctx.visual.accent};font-size:0;line-height:0;"></td></tr>` : "";
  const photoCell = ctx.photo ? cell(ctx.photo, `width:${state.media.photoSize + 18}px;vertical-align:middle;padding-right:${ctx.gap}px;`) : "";
  const logoCell = ctx.logo && ctx.layout.logo === "right" ? cell(ctx.logo, "width:96px;text-align:right;vertical-align:middle;") : "";
  const infoCell = cell(`${ctx.nameBlock}${divider(ctx.visual, ctx.layout)}${ctx.details}${ctx.socials}${ctx.cta}`, "vertical-align:middle;");
  return tableWrap(ctx, `${bar}${logoTop}${row(photoCell + infoCell + logoCell)}`);
}

function renderRail(ctx) {
  const photoFirst = ctx.layout.photo !== "right";
  const rail = cell("", `width:8px;background:${ctx.visual.accent};font-size:0;line-height:0;`);
  const photoCell = ctx.photo ? cell(ctx.photo, `width:${state.media.photoSize + 18}px;vertical-align:middle;padding:${ctx.gap}px;`) : "";
  const infoCell = cell(`
    ${ctx.layout.logo === "top" ? block(ctx.logo, "margin-bottom:8px;") : ""}
    ${ctx.nameBlock}
    ${ctx.details}
    ${ctx.socials}
    ${ctx.cta}
    ${ctx.layout.logo !== "top" ? block(ctx.logo, "margin-top:8px;") : ""}
  `, `vertical-align:middle;padding-left:${ctx.gap}px;`);
  const body = photoFirst ? photoCell + infoCell : infoCell + photoCell;
  return tableWrap(ctx, row(rail + body));
}

function renderSplit(ctx) {
  const left = cell(`
    ${ctx.layout.logo === "left" ? block(ctx.logo, "margin-bottom:12px;") : ""}
    ${ctx.photo ? block(ctx.photo, "margin-bottom:10px;") : ""}
    ${ctx.socials}
  `, `width:${Math.max(150, state.media.photoSize + 64)}px;text-align:center;vertical-align:middle;background:${ctx.visual.dark};padding:${ctx.gap + 4}px;`);
  const right = cell(`
    ${ctx.layout.logo === "right" ? block(ctx.logo, "margin-bottom:10px;") : ""}
    ${ctx.nameBlock}
    ${divider(ctx.visual, ctx.layout)}
    ${ctx.details}
    ${ctx.cta}
  `, `vertical-align:middle;padding:${ctx.gap + 4}px;`);
  return tableWrap(ctx, row(ctx.layout.photo === "right" ? right + left : left + right));
}

function renderLogoFirst(ctx) {
  const photoCell = ctx.photo ? cell(ctx.photo, `width:${state.media.photoSize + 16}px;text-align:right;vertical-align:middle;padding-left:${ctx.gap}px;`) : "";
  return tableWrap(ctx, row(
    cell(`${ctx.logo}${divider(ctx.visual, ctx.layout)}${ctx.nameBlock}`, "width:190px;vertical-align:middle;padding-right:14px;") +
    cell(`${ctx.details}${ctx.socials}${ctx.cta}`, "vertical-align:middle;") +
    photoCell
  ));
}

function renderCompact(ctx) {
  const compactPhoto = ctx.photo ? cell(ctx.photo, `width:${state.media.photoSize + 10}px;vertical-align:middle;padding-right:10px;`) : "";
  const nameLine = `<span style="font-size:16px;font-weight:800;color:${ctx.visual.text};">${escapeHtml(state.identity.fullName)}</span>`;
  const roleLine = [state.identity.jobTitle, state.identity.company].filter(Boolean).map(escapeHtml).join(" at ");
  const logo = ctx.logo && ctx.layout.logo === "left" ? cell(ctx.logo, "width:78px;vertical-align:middle;padding-right:10px;") : "";
  const trailingLogo = ctx.logo && ctx.layout.logo === "right" ? cell(ctx.logo, "width:78px;text-align:right;vertical-align:middle;padding-left:10px;") : "";
  return tableWrap(ctx, row(
    logo + compactPhoto + cell(`${nameLine}<br><span style="font-size:12px;color:${ctx.visual.muted};">${roleLine}</span>${ctx.socials}`, "vertical-align:middle;") + trailingLogo
  ));
}

function renderMinimal(ctx) {
  const name = `<span style="font-size:18px;font-weight:800;color:${ctx.visual.text};">${escapeHtml(state.identity.fullName)}</span>`;
  const meta = [state.identity.jobTitle, state.identity.company, state.identity.email, state.identity.phone].filter(Boolean).map(escapeHtml).join(" | ");
  return tableWrap(ctx, row(cell(`
    ${name}
    ${divider(ctx.visual, ctx.layout)}
    <div style="font-size:12px;line-height:1.65;color:${ctx.visual.muted};">${meta}</div>
    ${ctx.socials}
  `)));
}

function renderEditorial(ctx) {
  const photoFirst = ctx.layout.photo === "left";
  const photoCell = ctx.photo ? cell(ctx.photo, `width:${state.media.photoSize + 20}px;vertical-align:top;padding-${photoFirst ? "right" : "left"}:${ctx.gap + 4}px;`) : "";
  const info = cell(`
    ${ctx.logo}
    <div style="height:8px;"></div>
    ${renderNameBlock(ctx.visual, ctx.layout, 25)}
    ${ctx.details}
    ${ctx.socials}
    ${ctx.cta}
  `, "vertical-align:top;");
  return tableWrap(ctx, row(photoFirst ? photoCell + info : info + photoCell));
}

function renderBadge(ctx) {
  const photoFirst = ctx.layout.photo !== "right";
  const badge = ctx.photo ? cell(`<div style="padding:6px;border:2px solid ${ctx.visual.accent};display:inline-block;">${ctx.photo}</div>`, `width:${state.media.photoSize + 28}px;vertical-align:middle;padding-${photoFirst ? "right" : "left"}:${ctx.gap}px;`) : "";
  const info = cell(`${ctx.logo}${ctx.nameBlock}${ctx.details}${ctx.socials}${ctx.cta}`, "vertical-align:middle;");
  return tableWrap(ctx, row(photoFirst ? badge + info : info + badge));
}

function renderCenter(ctx) {
  return tableWrap(ctx, `
    <tr><td style="${baseCell()}text-align:center;">
      ${ctx.logo}
      ${ctx.photo ? block(ctx.photo, "margin:10px 0;") : ""}
      ${ctx.nameBlock}
      ${divider(ctx.visual, ctx.layout, true)}
      ${ctx.details}
      ${ctx.socials}
      ${ctx.cta}
    </td></tr>
  `);
}

function renderColumns(ctx) {
  const photoCell = ctx.photo ? cell(ctx.photo, `width:${state.media.photoSize + 16}px;vertical-align:top;padding-right:${ctx.gap}px;`) : "";
  const left = cell(`${ctx.nameBlock}${ctx.logo}`, "vertical-align:top;padding-right:16px;");
  const right = cell(`${ctx.details}${ctx.socials}${ctx.cta}`, `vertical-align:top;border-left:${state.style.showDivider ? `2px solid ${ctx.visual.accent}` : "0"};padding-left:${state.style.showDivider ? "16px" : "0"};`);
  return tableWrap(ctx, row(photoCell + left + right));
}

function renderStrip(ctx) {
  const photoCell = ctx.photo ? cell(ctx.photo, `width:${state.media.photoSize + 20}px;background:${ctx.visual.accent};vertical-align:middle;text-align:center;padding:${ctx.gap}px;`) : "";
  const logoCell = ctx.logo && ctx.layout.logo === "right" ? cell(ctx.logo, "width:92px;text-align:right;vertical-align:middle;") : "";
  const topLogo = ctx.logo && ctx.layout.logo === "top" ? `<tr><td colspan="3" style="${baseCell()}padding-bottom:10px;">${ctx.logo}</td></tr>` : "";
  return tableWrap(ctx, `${topLogo}${row(photoCell + cell(`${ctx.nameBlock}${ctx.details}${ctx.socials}${ctx.cta}`, `vertical-align:middle;padding-left:${ctx.gap}px;`) + logoCell)}`);
}

function applyLogoPlacement(signatureHtml, logoHtml) {
  const position = state.media.logoPosition || "auto";
  if (position === "auto" || !logoHtml) return signatureHtml;

  const parts = position.split("-");
  const zone = parts[0];
  const align = parts[1] || "left";
  const textAlign = align === "center" ? "center" : align;
  const width = Number(state.style.signatureWidth) || 620;
  const logoCellStyle = `${baseCell()}text-align:${textAlign};vertical-align:middle;`;

  if (zone === "top") {
    return `<table role="presentation" cellpadding="0" cellspacing="0" style="width:${width}px;max-width:100%;border-collapse:collapse;"><tbody>
      <tr><td style="${logoCellStyle}padding-bottom:9px;">${logoHtml}</td></tr>
      <tr><td style="${baseCell()}">${signatureHtml}</td></tr>
    </tbody></table>`;
  }

  if (zone === "bottom") {
    return `<table role="presentation" cellpadding="0" cellspacing="0" style="width:${width}px;max-width:100%;border-collapse:collapse;"><tbody>
      <tr><td style="${baseCell()}">${signatureHtml}</td></tr>
      <tr><td style="${logoCellStyle}padding-top:9px;">${logoHtml}</td></tr>
    </tbody></table>`;
  }

  if (position === "middle-left") {
    return `<table role="presentation" cellpadding="0" cellspacing="0" style="max-width:100%;border-collapse:collapse;"><tbody><tr>
      <td style="${baseCell()}width:86px;vertical-align:middle;padding-right:12px;">${logoHtml}</td>
      <td style="${baseCell()}vertical-align:middle;">${signatureHtml}</td>
    </tr></tbody></table>`;
  }

  if (position === "middle-right") {
    return `<table role="presentation" cellpadding="0" cellspacing="0" style="max-width:100%;border-collapse:collapse;"><tbody><tr>
      <td style="${baseCell()}vertical-align:middle;">${signatureHtml}</td>
      <td style="${baseCell()}width:86px;text-align:right;vertical-align:middle;padding-left:12px;">${logoHtml}</td>
    </tr></tbody></table>`;
  }

  return signatureHtml;
}

function tableWrap(ctx, rows) {
  const visual = ctx.visual;
  const outerStyle = [
    `width:${ctx.width}px`,
    "max-width:100%",
    "border-collapse:separate",
    "border-spacing:0",
    `font-family:${state.style.fontFamily}`,
    `color:${visual.text}`,
    `background:${visual.background}`,
    visual.padding ? `padding:${visual.padding}px` : "",
    visual.border ? `border:${visual.border}` : "",
    visual.radius ? `border-radius:${visual.radius}px` : "",
    visual.shadow ? "box-shadow:0 8px 20px rgba(23,32,51,0.12)" : ""
  ].filter(Boolean).join(";");

  return `<table role="presentation" cellpadding="0" cellspacing="0" style="${outerStyle};"><tbody>${rows}</tbody></table>`;
}

function renderNameBlock(visual, layout, size = 21) {
  const fullName = escapeHtml(state.identity.fullName);
  const title = [state.identity.jobTitle, state.identity.department].filter(Boolean).map(escapeHtml).join(" | ");
  const company = escapeHtml(state.identity.company);
  const tagline = escapeHtml(state.identity.tagline);
  const align = ["stack", "center"].includes(layout.mode) ? "center" : "left";
  return `
    <div style="text-align:${align};">
      ${fullName ? `<div style="font-size:${size}px;line-height:1.15;font-weight:850;color:${visual.text};">${fullName}</div>` : ""}
      ${title ? `<div style="font-size:13px;line-height:1.45;color:${visual.accent};font-weight:750;">${title}</div>` : ""}
      ${company ? `<div style="font-size:13px;line-height:1.45;color:${visual.muted};font-weight:700;">${company}</div>` : ""}
      ${tagline ? `<div style="font-size:12px;line-height:1.5;color:${visual.muted};margin-top:4px;">${tagline}</div>` : ""}
    </div>
  `;
}

function renderDetails(visual, layout) {
  const rows = [];
  if (state.identity.email) rows.push(linkLine("email", "E", state.identity.email, `mailto:${state.identity.email}`, visual));
  if (state.identity.phone) rows.push(linkLine("phone", "P", state.identity.phone, `tel:${state.identity.phone.replace(/[^\d+]/g, "")}`, visual));
  if (state.identity.website) rows.push(linkLine("website", "W", stripProtocol(state.identity.website), state.identity.website, visual));
  if (state.identity.address) rows.push(textLine("address", "A", state.identity.address, visual));
  if (!rows.length) return "";
  const align = ["stack", "center"].includes(layout.mode) ? "center" : "left";
  return `<div style="margin-top:8px;text-align:${align};">${rows.join("")}</div>`;
}

function linkLine(kind, label, text, href, visual) {
  return `<div style="font-size:12px;line-height:1.65;color:${visual.muted};">
    ${contactMarker(kind, label, visual)}
    <a href="${escapeAttr(normalizeUrl(href))}" style="color:${visual.muted};text-decoration:none;">${escapeHtml(text)}</a>
  </div>`;
}

function textLine(kind, label, text, visual) {
  return `<div style="font-size:12px;line-height:1.65;color:${visual.muted};">
    ${contactMarker(kind, label, visual)}
    ${escapeHtml(text)}
  </div>`;
}

function contactMarker(kind, label, visual) {
  if (state.style.contactMarkerStyle === "letters") {
    return `<span style="display:inline-block;min-width:16px;color:${visual.accent};font-weight:800;">${label}</span>`;
  }
  return `<span style="display:inline-block;width:18px;height:18px;margin-right:4px;color:${visual.accent};vertical-align:-4px;">${contactIconMarkup(kind, 15)}</span>`;
}

function renderPhoto(layout) {
  if (!state.media.showPhoto || layout.photo === "none" || !state.media.photoSrc) return "";
  const size = state.media.photoSize;
  const frame = frameStyle(state.media.photoFrame, state.style.accentColor);
  const img = `<span style="display:inline-block;width:${size}px;height:${size}px;overflow:hidden;vertical-align:middle;background:#eef2f7;${frame.outer}">
    <img src="${escapeAttr(state.media.photoSrc)}" alt="${escapeAttr(state.identity.fullName)}" width="${size}" height="${size}" style="display:block;width:100%;height:100%;object-fit:cover;border:0;${frame.img}">
  </span>`;
  const href = normalizeUrl(state.media.profileUrl);
  return href ? `<a href="${escapeAttr(href)}" style="display:inline-block;text-decoration:none;">${img}</a>` : img;
}

function renderLogo(layout) {
  if (!state.media.showLogo || !state.media.logoSrc) return "";
  const width = logoWidthForLayout(layout);
  const logo = `<img src="${escapeAttr(state.media.logoSrc)}" alt="${escapeAttr(state.identity.company)}" width="${width}" style="display:inline-block;width:${width}px;max-width:${width}px;max-height:42px;height:auto;border:0;vertical-align:middle;">`;
  const href = normalizeUrl(state.media.logoLink);
  return href ? `<a href="${escapeAttr(href)}" style="display:inline-block;text-decoration:none;">${logo}</a>` : logo;
}

function logoWidthForLayout(layout) {
  const caps = {
    compact: 64,
    minimal: 58,
    split: 72,
    banner: 86,
    strip: 82,
    logo: 84,
    center: 78,
    stack: 78
  };
  const cap = caps[layout.mode] || 84;
  return Math.max(40, Math.min(Number(state.media.logoWidth) || 66, cap));
}

function contactIconMarkup(kind, size = 15) {
  const base = `xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" style="display:inline-block;vertical-align:-2px;"`;
  const stroke = `fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
  const icons = {
    email: `<svg ${base} ${stroke}><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>`,
    phone: `<svg ${base} ${stroke}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1z"></path></svg>`,
    website: globeIconMarkup(size),
    address: `<svg ${base} ${stroke}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
  };
  return icons[kind] || globeIconMarkup(size);
}

function socialIconMarkup(key, size = 18) {
  const base = `xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" style="display:inline-block;vertical-align:middle;"`;
  const stroke = `fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
  const icons = {
    website: globeIconMarkup(size),
    linkedin: `<svg ${base} fill="currentColor"><path d="M5.1 8.6H1.9V22h3.2V8.6zM3.5 2A1.9 1.9 0 1 0 3.5 5.8 1.9 1.9 0 0 0 3.5 2zM22 14.5c0-3.9-2.1-6.2-5.3-6.2-2 0-3.2 1.1-3.7 2V8.6H9.8V22H13v-7.2c0-1.9 1-3.3 2.8-3.3 1.7 0 2.9 1.2 2.9 3.4V22H22v-7.5z"></path></svg>`,
    github: `<svg ${base} fill="currentColor"><path d="M12 .8A11.2 11.2 0 0 0 8.5 22c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.6 1.9 3.3 1.4.1-.8.4-1.4.7-1.7-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C16.1 2.8 17 3.1 17 3.1c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.8c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8z"></path></svg>`,
    x: `<svg ${base} fill="currentColor"><path d="M18.2 2h3.1l-6.8 7.8L22.5 22h-6.3l-4.9-6.4L5.7 22H2.6l7.3-8.4L2.2 2h6.5l4.4 5.8L18.2 2zm-1.1 17.8h1.7L7.8 4.1H6L17.1 19.8z"></path></svg>`,
    instagram: `<svg ${base} ${stroke}><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"></circle></svg>`,
    facebook: `<svg ${base} fill="currentColor"><path d="M14.1 8.2h3V4h-3.5C9.8 4 8 6.3 8 9.5V12H5v4h3v6h4.3v-6h3.2l.7-4h-3.9V9.9c0-1.1.4-1.7 1.8-1.7z"></path></svg>`,
    youtube: `<svg ${base} fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.5 12c0 1.3.2 2.6.5 3.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.2.5-2.5.5-3.8s-.2-2.6-.5-3.8zM10 15.3V8.7l5.8 3.3L10 15.3z"></path></svg>`,
    whatsapp: `<svg ${base}><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2.3 22l5-1.3A10 10 0 1 0 12 2z"></path><path fill="#ffffff" d="M8.7 7.2c.3-.7.5-.7.9-.7h.6c.2 0 .5.1.7.5l.8 1.9c.1.3.1.5-.1.8l-.5.7c-.1.2-.2.4 0 .6.5.9 1.3 1.7 2.3 2.3.3.2.5.2.7 0l.8-.8c.2-.2.5-.3.8-.1l1.8.8c.4.2.5.4.5.7-.1.8-.7 1.8-1.6 2.2-.9.4-2.2.2-3.8-.6-2.6-1.4-4.4-3.6-4.9-5.1-.4-1.4.4-2.6 1-3.2z"></path></svg>`,
    behance: `<svg ${base} fill="currentColor"><text x="1.5" y="16.8" font-family="Arial, Helvetica, sans-serif" font-size="10" font-weight="800">Be</text><path d="M15 6h6v1.8h-6z"></path><path d="M15.1 13.3h5.5c-.1-1.6-1-2.6-2.6-2.6-1.5 0-2.5 1-2.9 2.6zm5.6 2.8 2 .6c-.7 1.9-2.3 3-4.6 3-3.2 0-5.2-2.2-5.2-5.5 0-3.2 2.1-5.5 5.1-5.5 3.3 0 5.1 2.5 4.9 6.1h-7.8c.1 1.7 1.2 2.8 2.9 2.8 1.2 0 2.1-.5 2.7-1.5z"></path></svg>`,
    dribbble: `<svg ${base} ${stroke}><circle cx="12" cy="12" r="9"></circle><path d="M4.6 7.1c2.8 2.1 5.1 5 6.8 14"></path><path d="M5.2 17.2c4-3.1 9.2-4.2 15.3-3.4"></path><path d="M14.4 3.5c-1.6 3.8-4.8 6.3-9.6 7.4"></path></svg>`,
    calendly: `<svg ${base} ${stroke}><circle cx="12" cy="12" r="9"></circle><path d="M15.8 8.7a5 5 0 1 0 0 6.6"></path></svg>`,
    tiktok: `<svg ${base} fill="currentColor"><path d="M15.2 2c.4 3 2 4.8 4.8 5v3.3c-1.7 0-3.2-.5-4.6-1.4v6.5c0 4.1-2.6 6.6-6.3 6.6A6.1 6.1 0 0 1 3 15.9c0-3.8 3-6.5 7.2-6.1v3.5c-2-.3-3.6.7-3.6 2.6 0 1.5 1.1 2.6 2.6 2.6 1.6 0 2.7-1.1 2.7-3.1V2h3.3z"></path></svg>`
  };
  return icons[key] || linkIconMarkup(size);
}

function globeIconMarkup(size = 18) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" style="display:inline-block;vertical-align:middle;" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3a14 14 0 0 1 0 18"></path><path d="M12 3a14 14 0 0 0 0 18"></path></svg>`;
}

function linkIconMarkup(size = 18) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" style="display:inline-block;vertical-align:middle;" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.1 0l2.1-2.1a5 5 0 0 0-7.1-7.1L11 4.9"></path><path d="M14 11a5 5 0 0 0-7.1 0l-2.1 2.1a5 5 0 0 0 7.1 7.1L13 19.1"></path></svg>`;
}

function renderSocials(visual) {
  const active = state.socials.filter((item) => item.active && item.url.trim());
  if (!active.length) return "";
  const shape = iconShapeStyle(state.style.iconShape);
  const cells = active.map((item) => {
    const href = normalizeUrl(item.url);
    const color = item.color || visual.accent;
    const icon = socialIconMarkup(item.key, 15);
    const boxStyle = state.style.iconShape === "plain"
      ? `display:inline-block;width:22px;height:22px;color:${color};text-decoration:none;line-height:22px;text-align:center;`
      : `display:inline-block;width:30px;height:30px;line-height:30px;text-align:center;background:${soften(color, 0.9)};color:${color};border:1px solid ${soften(color, 0.58)};border-radius:${shape};text-decoration:none;`;
    return `<td style="padding-right:7px;padding-top:8px;"><a href="${escapeAttr(href)}" title="${escapeAttr(item.label)}" style="${boxStyle}">${icon}</a></td>`;
  }).join("");
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:2px;"><tbody><tr>${cells}</tr></tbody></table>`;
}

function renderCta(visual) {
  if (!state.identity.ctaLabel || !state.identity.ctaUrl) return "";
  return `<div style="margin-top:10px;">
    <a href="${escapeAttr(normalizeUrl(state.identity.ctaUrl))}" style="display:inline-block;background:${visual.accent};color:#ffffff;text-decoration:none;font-size:12px;font-weight:800;padding:8px 11px;border-radius:6px;">${escapeHtml(state.identity.ctaLabel)}</a>
  </div>`;
}

function divider(visual, layout, center = false) {
  if (!state.style.showDivider || layout.accent === "none") return "";
  if (layout.accent === "dot") {
    return `<div style="margin:9px ${center ? "auto" : "0"};width:30px;height:5px;background:${visual.accent};border-radius:999px;"></div>`;
  }
  if (layout.accent === "frame") return "";
  const width = layout.accent === "rule" ? "100%" : "54px";
  return `<div style="margin:9px ${center ? "auto" : "0"};width:${width};height:2px;background:${visual.accent};font-size:0;line-height:0;"></div>`;
}

function getVisual(theme, layout) {
  const bgMode = layout.forceBg || state.style.bgMode;
  const isDark = bgMode === "dark";
  const accent = state.style.accentColor || theme.accent;
  const text = isDark ? "#ffffff" : state.style.textColor || theme.text;
  const muted = isDark ? "#d7dee8" : theme.muted;
  let background = "transparent";
  let border = "";
  let radius = 0;
  let padding = 0;
  let shadow = false;

  if (bgMode === "tint") {
    background = theme.tint;
    border = `1px solid ${soften(accent, 0.72)}`;
    radius = 8;
    padding = 14;
  }

  if (bgMode === "solid") {
    background = theme.bg;
    border = `1px solid ${soften(accent, 0.68)}`;
    radius = 8;
    padding = 14;
    shadow = true;
  }

  if (isDark) {
    background = theme.dark;
    border = `1px solid ${soften(accent, 0.36)}`;
    radius = 8;
    padding = 14;
  }

  if (layout.accent === "frame") {
    border = `2px solid ${accent}`;
    radius = 8;
    padding = Math.max(padding, 16);
  }

  return { accent, text, muted, background, border, radius, padding, shadow, dark: theme.dark };
}

function frameStyle(type, accent) {
  const base = `border:3px solid ${soften(accent, 0.66)};`;
  const styles = {
    circle: { outer: `${base}border-radius:999px;`, img: "" },
    rounded: { outer: `${base}border-radius:18px;`, img: "" },
    soft: { outer: `${base}border-radius:32px 14px 32px 14px;`, img: "" },
    arch: { outer: `${base}border-radius:999px 999px 18px 18px;`, img: "" },
    diamond: { outer: `${base}border-radius:12px;transform:rotate(45deg);`, img: "transform:rotate(-45deg) scale(1.42);" },
    hex: { outer: `${base}clip-path:polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);`, img: "" },
    ticket: { outer: `${base}border-radius:24px 4px 24px 4px;`, img: "" },
    stripe: { outer: `border-left:6px solid ${accent};border-radius:18px;`, img: "" }
  };
  return styles[type] || styles.circle;
}

function iconShapeStyle(type) {
  if (type === "square") return "4px";
  if (type === "soft") return "10px";
  if (type === "plain") return "0";
  return "999px";
}

function baseCell() {
  return "font-family:inherit;color:inherit;";
}

function cell(content, style = "") {
  return `<td style="${baseCell()}${style}">${content}</td>`;
}

function row(content) {
  return `<tr>${content}</tr>`;
}

function block(content, style = "") {
  return content ? `<div style="${style}">${content}</div>` : "";
}

function normalizeUrl(url) {
  const value = String(url || "").trim();
  if (!value) return "";
  if (/^(https?:|mailto:|tel:|sms:)/i.test(value)) return value;
  if (/^[\w.-]+\.[a-z]{2,}/i.test(value)) return `https://${value}`;
  return value;
}

function stripProtocol(url) {
  return String(url || "").replace(/^https?:\/\//i, "").replace(/\/$/, "");
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function soften(hex, amount) {
  const clean = hex.replace("#", "");
  const number = parseInt(clean.length === 3 ? clean.split("").map((x) => x + x).join("") : clean, 16);
  const r = number >> 16;
  const g = (number >> 8) & 255;
  const b = number & 255;
  const mix = (channel) => Math.round(channel + (255 - channel) * amount);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

function readFile(input, callback) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => callback(reader.result);
  reader.readAsDataURL(file);
}

async function buildGmailSafeHtml() {
  const holder = document.createElement("div");
  holder.style.position = "fixed";
  holder.style.left = "-10000px";
  holder.style.top = "0";
  holder.style.width = "900px";
  holder.style.background = "#ffffff";
  holder.innerHTML = dom.htmlOutput.value;
  document.body.appendChild(holder);

  try {
    await replaceInlineSvgsWithPng(holder);
    await replaceLocalImagesWithPng(holder);
    return holder.innerHTML;
  } finally {
    holder.remove();
  }
}

async function replaceInlineSvgsWithPng(root) {
  const svgs = Array.from(root.querySelectorAll("svg"));
  for (const svg of svgs) {
    try {
      const png = await svgToPngDataUrl(svg);
      const width = Math.max(1, Math.round(svg.getBoundingClientRect().width || Number(svg.getAttribute("width")) || 18));
      const height = Math.max(1, Math.round(svg.getBoundingClientRect().height || Number(svg.getAttribute("height")) || 18));
      const img = document.createElement("img");
      img.src = png;
      img.width = width;
      img.height = height;
      img.alt = "";
      img.style.display = "inline-block";
      img.style.width = `${width}px`;
      img.style.height = `${height}px`;
      img.style.border = "0";
      img.style.verticalAlign = "middle";
      svg.replaceWith(img);
    } catch (error) {
      svg.remove();
    }
  }
}

async function replaceLocalImagesWithPng(root) {
  const images = Array.from(root.querySelectorAll("img"));
  for (const image of images) {
    const src = image.getAttribute("src") || "";
    if (/^https?:\/\//i.test(src) && !/\.svg($|\?)/i.test(src)) continue;
    if (/^data:image\/gif/i.test(src)) continue;
    try {
      image.src = await imageToPngDataUrl(image);
    } catch (error) {
      if (/^assets\//i.test(src) || /\.svg($|\?)/i.test(src)) {
        image.remove();
      }
    }
  }
}

function svgToPngDataUrl(svg) {
  const clone = svg.cloneNode(true);
  const computed = window.getComputedStyle(svg);
  const width = Math.max(1, Math.round(svg.getBoundingClientRect().width || Number(svg.getAttribute("width")) || 18));
  const height = Math.max(1, Math.round(svg.getBoundingClientRect().height || Number(svg.getAttribute("height")) || 18));
  clone.setAttribute("width", String(width));
  clone.setAttribute("height", String(height));
  clone.setAttribute("color", computed.color || "currentColor");
  clone.style.color = computed.color || "currentColor";
  const xml = new XMLSerializer().serializeToString(clone);
  const svgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(xml)}`;
  return imageUrlToPngDataUrl(svgUrl, width, height);
}

function imageToPngDataUrl(image) {
  const width = Math.max(1, Math.round(Number(image.getAttribute("width")) || image.getBoundingClientRect().width || image.naturalWidth || 80));
  const height = Math.max(1, Math.round(Number(image.getAttribute("height")) || image.getBoundingClientRect().height || image.naturalHeight || width));
  return imageUrlToPngDataUrl(image.currentSrc || image.src, width, height);
}

function imageUrlToPngDataUrl(src, width, height) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/png"));
      } catch (error) {
        reject(error);
      }
    };
    image.onerror = reject;
    image.src = src;
  });
}

async function copyRichSignature() {
  const html = await buildGmailSafeHtml();
  const plain = dom.signaturePreview.innerText;
  try {
    if (navigator.clipboard && window.ClipboardItem) {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([plain], { type: "text/plain" })
        })
      ]);
      showToast("Gmail-safe signature copied.");
      return;
    }
  } catch (error) {
    if (copyRenderedSelection(html)) {
      showToast("Gmail-safe signature copied.");
      return;
    }
  }
  await copyText(html, "Gmail-safe HTML copied.");
}

function copyRenderedSelection(html) {
  const holder = document.createElement("div");
  try {
    holder.style.position = "fixed";
    holder.style.left = "-10000px";
    holder.style.top = "0";
    holder.innerHTML = html || dom.signaturePreview.innerHTML;
    document.body.appendChild(holder);
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(holder);
    selection.removeAllRanges();
    selection.addRange(range);
    const copied = document.execCommand("copy");
    selection.removeAllRanges();
    holder.remove();
    return copied;
  } catch (error) {
    holder.remove();
    return false;
  }
}

async function copyHtml() {
  const html = await buildGmailSafeHtml();
  await copyText(html, "Gmail-safe HTML copied.");
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch (error) {
    dom.htmlOutput.focus();
    dom.htmlOutput.select();
    document.execCommand("copy");
    showToast(message);
  }
}

async function downloadHtml() {
  const name = slugify(state.identity.fullName || "email-signature");
  const html = await buildGmailSafeHtml();
  const doc = `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(state.identity.fullName)} Signature</title></head><body>${html}</body></html>`;
  const blob = new Blob([doc], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${name}-email-signature.html`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Gmail-safe HTML file downloaded.");
}

function resetDemo() {
  state = clone(defaultState);
  buildSocialRows();
  populateControls();
  render();
  showToast("Demo signature restored.");
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => dom.toast.classList.remove("show"), 2400);
}

function slugify(value) {
  return String(value).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "email-signature";
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}
