# Dynamic Career Page Migration

The original CareerTemplate UI/CSS and the career information and images from the old
CareerTemplate pages were migrated into one backend data source.

Career details are fetched dynamically from:
`GET /api/careers/by-route?path=<current-path>`

The backend source of truth is:
`backend/data/career.json`

The exact old logo/banner files used by each career are copied byte-for-byte into:
`frontend/public/career-assets/`

All old individual CareerTemplate page files were removed only after their content and
image mappings were migrated.

Legacy career URLs from the old App are preserved through the dynamic catch-all route,
including mixed-case URLs and short category-page links such as `/Cardiologist`.

Run:
1. `npm install` in `frontend`
2. `npm install` in `backend`
3. Start the backend on port 5000
4. Start the frontend with Vite

The frontend supports `VITE_API_URL` if the API is hosted somewhere other than
`http://localhost:5000/api`.

Note: the uploaded OLD frontend contained an `AIInterview` import/route but no corresponding
source file anywhere in the uploaded project. That dangling reference was removed so the
merged project can build cleanly; no existing AIInterview implementation was deleted.
