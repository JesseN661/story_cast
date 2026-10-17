
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#primary-nav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", function () {
    const isExpanded =
      toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute(
      "aria-expanded",
      String(!isExpanded)
    );

    nav.setAttribute("data-open", String(!isExpanded));
  });
})();