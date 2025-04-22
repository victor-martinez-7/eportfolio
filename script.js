document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.toggle-sidebar-btn');

  // Toggle the sidebar on mobile devices
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
  }
});
