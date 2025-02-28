document.addEventListener("DOMContentLoaded", () => {
    const tocLinks = document.querySelectorAll("ul[slot='toc'] a");
    const headings = document.querySelectorAll("h2, h3");
  
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
  