const body = document.querySelector('body'),
      dropdownToggles = document.querySelectorAll('.dropdown-toggle');
      sidebarOverlay = document.querySelector('.sidebar-overlay');
      toggleSidebarButton = document.querySelector('.btn-toggle-sidebar'),
      submenuCollapseLinks = document.querySelectorAll('.sidebar-nav-item.has-submenu > .sidebar-nav-link');

// Toggle Sidebar
toggleSidebarButton.addEventListener('click', () => {
    body.classList.toggle('sidebar-active');
    toggleSidebarButton.classList.toggle('open');
});

sidebarOverlay.addEventListener('click', () => {
    body.classList.toggle('sidebar-active');
    toggleSidebarButton.classList.toggle('open');
});

// Dropdown menu
dropdownToggles.forEach(btn => {
    let dropdownMenu = btn.nextElementSibling;
    btn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show')
    });
});

// sidebar submenus
submenuCollapseLinks.forEach(link => {
    link.addEventListener('click', function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = `${content.scrollHeight}px`;
        }
    });
})