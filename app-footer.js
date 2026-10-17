(function () {
  var footer = document.createElement('footer');
  footer.className = 'project-footer text-ink dark:text-night-text';
  footer.innerHTML =
    '<div class="project-footer-inner">' +
      '<div class="project-footer-grid">' +
        '<section><h2 class="project-footer-title">CEIT Connect</h2><p class="project-footer-detail mt-1">Centralised Task-Delegation and<br>Deadline-Management System</p><p class="project-footer-detail font-semibold mt-2">eduCache.on</p></section>' +
        '<section><h3 class="text-xs font-bold">Group Members:</h3><div class="project-footer-member-grid">' +
          '<div><p class="project-footer-detail font-semibold">Bajita, Prince Wacky</p><p class="project-footer-detail">Project Manager</p></div>' +
          '<div><p class="project-footer-detail font-semibold">Sison, John Benedict</p><p class="project-footer-detail">System Analyst</p></div>' +
          '<div><p class="project-footer-detail font-semibold">Lopez, John Claude</p><p class="project-footer-detail">Lead Developer<br>System Tester</p></div>' +
        '</div></section>' +
      '</div>' +
      '<div class="project-footer-credit"><span>© ' + new Date().getFullYear() + ' eduCache.on</span><span>ALL RIGHTS RESERVED</span></div>' +
    '</div>';
  document.body.appendChild(footer);
})();