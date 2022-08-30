const body = document.querySelector('body'),
      dropdownToggles = document.querySelectorAll('.dropdown-toggle');
      sidebarOverlay = document.querySelector('.sidebar-overlay');
      toggleSidebarButton = document.querySelector('.btn-toggle-sidebar'),
      submenuCollapseLinks = document.querySelectorAll('.sidebar-nav-item.has-submenu > .sidebar-nav-link'),
      tabLinks = document.querySelectorAll('.tabs .tab-link'),
      tabPans = document.querySelectorAll('.tabs .tab-pane');

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

// Sidebar submenus
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
});

// Toggle between tabs
tabLinks.forEach((button) => {
    button.addEventListener('click', () => {
        const tab = document.getElementById(button.getAttribute('data-tab-id'));

        tabLinks.forEach((link) => {
            if (link !== button && link.classList.contains('active')) {
                link.classList.remove('active')
            }
        });

        tabPans.forEach((pane) => {
            if (pane !== tab && pane.classList.contains('show')) {
                pane.classList.remove('show');
            }
        });

        button.classList.add('active');
        tab.classList.add('show');
    });
});