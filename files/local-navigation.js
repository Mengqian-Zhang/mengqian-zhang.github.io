(() => {
  // Direct file previews need explicit filenames; web servers handle directory URLs.
  if (window.location.protocol !== "file:") {
    return;
  }

  document.querySelectorAll(".site-nav a[href]").forEach((link) => {
    const target = new URL(link.getAttribute("href"), window.location.href);

    if (target.protocol === "file:" && target.pathname.endsWith("/")) {
      target.pathname += "index.html";
      link.setAttribute("href", target.href);
    }
  });
})();
