// KEIR @ CIKM 2026 - Call for Papers timeline progress
// (template by Mehdi Azabou, adapted with permission)
document.addEventListener('DOMContentLoaded', function () {
    function updateTimelineProgress() {
        const timelineProgress = document.getElementById('timeline-progress');
        if (!timelineProgress) return;

        // KEIR @ CIKM 2026 milestone dates
        const milestones = [
            new Date('2026-07-10'), // Submissions Open
            new Date('2026-08-24'), // Submission Deadline (AoE)
            new Date('2026-09-23'), // Accept/Reject Notification
            new Date('2026-11-08')  // Workshop
        ];

        const now = new Date();
        let progress = 0;

        if (now < milestones[0]) {
            progress = 0;
        } else if (now < milestones[1]) {
            const phase = (now - milestones[0]) / (milestones[1] - milestones[0]);
            progress = Math.min(phase, 1) * 33.33;
        } else if (now < milestones[2]) {
            const phase = (now - milestones[1]) / (milestones[2] - milestones[1]);
            progress = 33.33 + Math.min(phase, 1) * 33.33;
        } else if (now < milestones[3]) {
            const phase = (now - milestones[2]) / (milestones[3] - milestones[2]);
            progress = 66.66 + Math.min(phase, 1) * 33.34;
        } else {
            progress = 100;
        }

        timelineProgress.style.width = progress + '%';
    }

    updateTimelineProgress();
});
