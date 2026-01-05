document.addEventListener("DOMContentLoaded", function () {

  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const toggleBtn = document.getElementById("sidebarToggleBtn");

  // Safety check
  if (!sidebar || !mainContent || !toggleBtn) {
    console.error("Sidebar elements not found");
    return;
  }

  let isOpen = true;

  function openSidebar() {
    sidebar.classList.add("show");
    mainContent.classList.add("shift");
    isOpen = true;
  }

  function closeSidebar() {
    sidebar.classList.remove("show");
    mainContent.classList.remove("shift");
    isOpen = false;
  }

  // ===== INITIAL STATE =====
  if (window.innerWidth < 992) {
    closeSidebar();   // mobile default closed
  } else {
    openSidebar();    // desktop default open
  }

  // ===== TOGGLE BUTTON =====
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  // ===== CLICK OUTSIDE (MOBILE ONLY) =====
  document.addEventListener("click", function (e) {
    if (
      window.innerWidth < 992 &&
      isOpen &&
      !sidebar.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      closeSidebar();
    }
  });



});
