document.addEventListener('DOMContentLoaded', () => {
    const heatmapContainer = document.getElementById('heatmap');
    
    // Generate 364 days (52 weeks * 7 days)
    const totalDays = 52 * 7;
    
    for (let i = 0; i < totalDays; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        
        // Randomize activity level to simulate a real contribution graph
        // Biased towards 0 (l1) to make it look realistic
        const rand = Math.random();
        
        if (rand > 0.95) {
            day.classList.add('l4'); // Very high activity
            day.setAttribute('title', 'High Activity (5+ Commits/Reports)');
        } else if (rand > 0.85) {
            day.classList.add('l3'); // High activity
            day.setAttribute('title', 'Medium Activity (3-4 Commits/Reports)');
        } else if (rand > 0.70) {
            day.classList.add('l2'); // Low activity
            day.setAttribute('title', 'Low Activity (1-2 Commits/Reports)');
        } else {
            day.classList.add('l1'); // No activity
            day.setAttribute('title', 'No Activity');
        }
        
        heatmapContainer.appendChild(day);
    }

    // Add subtle hover effects to project cards based on mouse position
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Set css variables for a dynamic gradient hover effect
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
