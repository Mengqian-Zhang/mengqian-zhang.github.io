(() => {
  const list = document.getElementById("news-list");
  const toggle = document.querySelector(".news-toggle");

  if (!list || !toggle) {
    return;
  }

  const olderItems = Array.from(list.children).slice(11);
  if (olderItems.length === 0) {
    return;
  }

  let expanded = false;
  const update = () => {
    olderItems.forEach((item) => {
      item.hidden = !expanded;
    });
    toggle.setAttribute("aria-expanded", String(expanded));
    toggle.textContent = expanded ? "Show less" : "Show all news";
  };

  update();
  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    expanded = !expanded;
    update();
  });
})();
