console.log('Hide my ELO is running');

function hideElements() {
    document.querySelectorAll(
        '.user-tagline-rating, .daily-seek-info-item, .game-over-message-component, .game-start-message-component, .rating-score-rating, .rating-score-change, .game-overview-row, .cc-user-rating-white, .battle-sidebar-start-number, .user-rating-rating, .cc-user-rating-default, .stats-rating-wrap, .sidebar-nav-item-value, .stat-section-stats-section').forEach(el => el.style.display = 'none');
}

hideElements();

const observer = new MutationObserver(hideElements);
observer.observe(document.body, { childList: true, subtree: true });
