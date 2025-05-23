document.addEventListener('DOMContentLoaded', () => {
    const marker = document.getElementById('marker');
    const timeline = document.getElementById('timeline');
    const desc = document.getElementById('eventDesc');
    const events = Array.from(timeline.querySelectorAll('.timeline-event'));
    let dragging = false;
    const SNAP_THRESHOLD = 30;

    // hover
    events.forEach(ev => {

        // mouseover + event.target
        ev.addEventListener('mouseover', e => {
            e.target.style.transform = 'scale(1.3)';
            desc.textContent = `${e.target.dataset.year}: ${e.target.dataset.text}`;
        });

        // mouseout + event.relatedTarget
        ev.addEventListener('mouseout', e => {
            e.target.style.transform = 'scale(1)';
            desc.textContent = 'Перетягніть маркер по стрічці, щоб дізнатися подію';
        });
    });

    // mousedown
    marker.addEventListener('mousedown', e => {
        dragging = true;
        marker.style.cursor = 'grabbing';
        e.preventDefault();
    });

    // mousemove
    document.addEventListener('mousemove', e => {
        if (!dragging) return;
        const rect = timeline.getBoundingClientRect();
        let x = e.clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width));

        let closest = null;
        let minDist = Infinity;
        events.forEach(ev => {
            const evCenter = ev.offsetLeft + ev.offsetWidth / 2;
            const dist = Math.abs(evCenter - x);
            if (dist < minDist) {
                minDist = dist;
                closest = ev;
            }
        });

        let finalX = x;

        if (minDist <= SNAP_THRESHOLD) {
            finalX = closest.offsetLeft + closest.offsetWidth / 2;
            desc.textContent = `${closest.dataset.year}: ${closest.dataset.text}`;
        } else {
            desc.textContent = 'Перетягніть маркер по стрічці, щоб дізнатися подію';
        }

        const pct = (finalX / rect.width) * 100;
        marker.style.left = `${pct}%`;
    });

    // mouseup
    document.addEventListener('mouseup', () => {
        if (dragging) {
            dragging = false;
            marker.style.cursor = 'grab';
        }
    });
});