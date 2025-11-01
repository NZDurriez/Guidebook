// script.js
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.dropbtn');
    btn.addEventListener('click', function(event) {
      // Toggle the display of the dropdown content
      const content = dropdown.querySelector('.dropdown-content');
      const isVisible = content.style.display === 'block';
      // Hide any open dropdowns
      document.querySelectorAll('.dropdown-content').forEach(dc => dc.style.display = 'none');
      
      // Toggle current dropdown
      content.style.display = isVisible ? 'none' : 'block';
      
      // Prevent click propagation to avoid unwanted closing
      event.stopPropagation();
    });
  });

  // Hide dropdowns when clicking outside
  document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-content').forEach(dc => dc.style.display = 'none');
  });
});
