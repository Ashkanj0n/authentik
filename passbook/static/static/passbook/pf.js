// Button Dropdowns
document.querySelectorAll("button.pf-c-dropdown__toggle").forEach((b) => {
    b.addEventListener('click', (e) => {
        const parent = e.target.closest('.pf-c-dropdown');
        const menu = parent.querySelector('.pf-c-dropdown__menu');
        menu.hidden = !menu.hidden;
    });
});

// Modal
document.querySelectorAll("[data-target='modal']").forEach((m) => {
    m.addEventListener("click", (e) => {
        const parentContainer = e.target.closest('[data-target="modal"]');
        const modalId = parentContainer.attributes['data-modal'].value;
        document.querySelector(`#${modalId}`).removeAttribute("hidden");
    });
});
document.querySelectorAll(".pf-c-modal-box [data-modal-close]").forEach((b) => {
    b.addEventListener("click", (e) => {
        const parentContainer = e.target.closest('.pf-c-backdrop');
        parentContainer.setAttribute("hidden", true);
    });
});

// CodeMirror
document.querySelectorAll(".codemirror").forEach((cm) => {
    let cmMode = 'xml';
    if ('data-cm-mode' in cm.attributes) {
        cmMode = cm.attributes['data-cm-mode'].value;
    }
    CodeMirror.fromTextArea(cm, {
        mode: cmMode,
        theme: 'monokai',
        lineNumbers: false,
        readOnly: cm.readOnly,
        autoRefresh: true,
    });
});

// Automatic slug fields
const convertToSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
};

document.querySelectorAll("input[name=name]").forEach((input) => {
    input.addEventListener("input", (e) => {
        const form = e.target.closest("form");
        const slugField = form.querySelector("input[name=slug]");
        slugField.value = convertToSlug(e.target.value);
    });
});

// Hamburger Menu
document.querySelector(".pf-c-page__header-brand-toggle>button").addEventListener("click", (e) => {
    const sidebar = document.querySelector(".pf-c-page__sidebar");
    if (sidebar.classList.contains("pf-m-expanded")) {
        // Sidebar already expanded
        sidebar.classList.remove("pf-m-expanded");
        sidebar.style.zIndex = 0;
    } else {
        // Sidebar not expanded yet
        sidebar.classList.add("pf-m-expanded");
        sidebar.style.zIndex = 200;
    }
});

// Collapsable Menus in Sidebar
document.querySelectorAll(".pf-m-expandable").forEach((menu) => {
    menu.addEventListener("click", (e) => {
        menu.classList.toggle("pf-m-expanded");
    });
});
