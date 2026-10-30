// KEIR @ CIKM 2026 - Call for Papers timeline progress
// (template by Mehdi Azabou, adapted with permission)
document.addEventListener('DOMContentLoaded', function () {
    function updateTimelineProgress() {
        const timelineProgress = document.getElementById('timeline-progress');
        if (!timelineProgress) return;

        // KEIR @ CIKM 2026 milestone dates (same order as in call-for-papers.html)
        const milestones = [
            new Date('2026-07-15'), // Submissions Open
            new Date('2026-09-16'), // Submission Deadline (AoE)
            new Date('2026-09-23'), // Accept/Reject Notification
            new Date('2026-11-08'), // Workshop
            new Date('2026-12-15')  // LNCS Revised Papers Due (AoE)
        ];

        // Each milestone sits at the centre of an equal-width column,
        // so milestone i is at (i + 0.5) / n of the track width.
        const n = milestones.length;
        const centre = (i) => ((i + 0.5) / n) * 100;

        const now = new Date();
        let progress;

        if (now < milestones[0]) {
            progress = 0;
        } else if (now >= milestones[n - 1]) {
            progress = 100;
        } else {
            let i = 0;
            while (now >= milestones[i + 1]) i++;
            const phase = (now - milestones[i]) / (milestones[i + 1] - milestones[i]);
            progress = centre(i) + phase * (centre(i + 1) - centre(i));
        }

        timelineProgress.style.width = progress + '%';
    }

    updateTimelineProgress();
});
