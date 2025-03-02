document.addEventListener("DOMContentLoaded", () => {
    const tocLinks = document.querySelectorAll("ul[slot='toc'] a");
    const headings = document.querySelectorAll("h2, h3");
    tocLinks.forEach(link => {
        const targetId = link.getAttribute("href").substring(1);
        const targetElem = document.getElementById(targetId);

        if (targetElem) {
            const depth = targetElem.tagName === "H2" ? 1 : 2; // H2 = 1, H3 = 2
            link.setAttribute("data-depth", depth);
        }
    }); 
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const activeId = visibleEntry.target.id;
          tocLinks.forEach((link) => {
            link.style.fontWeight = link.getAttribute("href") === `#${activeId}` ? "bold" : "normal";
            link.style.textDecoration = link.getAttribute("href") === `#${activeId}` ? "underline" : "none";
          });
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
    );
  
    headings.forEach((heading) => observer.observe(heading));
  });
  