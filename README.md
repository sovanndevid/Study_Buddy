# Study Buddy

**Collaborative student productivity website · HTML, CSS and JavaScript**

Study Buddy is a team-built student productivity website designed to make study planning and focused work easier. The final Sprint 6 version contains a to-do list, weekly timetable, Pomodoro focus timer, motivational quotes and countdown tools.

## Verified team contributions

According to the Sprint 6 team report in `sprint6/read.me`:

| Team member | Documented contribution |
| --- | --- |
| **Sovanndevid Nong** | Pomodoro Timer; shared header and footer improvements |
| Suraiya Supti | Homepage and to-do list |
| Manjil Bolakhe | Weekly timetable |
| Shovana Srestha | Motivational quotes and countdown timer |

Attribution is based on the project report and should be preserved when sharing the work publicly.

## Features and implementation

- Pomodoro Timer: session/break countdown, pause, reset, transitions and visual progress ring
- To-do list: task management interface
- Weekly timetable: editable study schedule
- Countdown and quotes: additional study support pages
- Shared header/footer and modular CSS/JavaScript components

## Run locally

The final iteration lives under `sprint6/`. Because shared fragments are loaded with JavaScript, serve the folder over HTTP rather than opening individual HTML files directly from the filesystem.

```bash
cd sprint6
python -m http.server 8000
```

Then open `http://localhost:8000/` in a browser. This is a suggested static-server workflow, not a validated production deployment.

## Code map

| File | Purpose |
| --- | --- |
| `sprint6/index.html` | Homepage and navigation into study tools |
| `sprint6/js/pomodoro.js` | Focus / break timer state and SVG ring updates |
| `sprint6/js/include.js` | Shared component loading |
| `sprint6/html/` | Individual feature pages |
| `sprint6/css/` | Styles for the site and components |
| `sprint6/read.me` | Sprint 6 report and full team credits |

## Testing and quality

The Sprint 6 report describes peer testing, Lighthouse assessments and responsive checks conducted by the original team. No new scores are claimed here, as those historical report artifacts are not independently reproduced in this README.

## Portfolio

[Read the project case study](https://sovanndevid.xyz/projects/study-buddy.html)

## Authors

Team 18 — Suraiya Supti, Sovanndevid Nong, Shovana Srestha and Manjil Bolakhe. This README is intended as a clear public introduction while preserving group credit.
