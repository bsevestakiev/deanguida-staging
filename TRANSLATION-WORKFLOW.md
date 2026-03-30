# Auto-Translation Workflow

When `content/_index.md` (English) is edited and pushed, a GitHub Actions pipeline can automatically translate changed fields and update the other language files.

```mermaid
flowchart TD
    A[Developer edits\ncontent/_index.md] --> B[git push to main]
    B --> C{GitHub Actions\ntriggered}
    C --> D[Check git diff:\nDid _index.md change?]
    D -- No --> E[Skip translation step]
    D -- Yes --> F[Extract changed\nfields from diff]
    F --> G[Call Claude API\nwith changed fields\n+ translation prompt]
    G --> H{For each\ntarget language}
    H --> I[bg: Update _index.bg.md\nwith translated values]
    H --> J[ja: Update _index.ja.md\nwith translated values]
    I --> K[git commit translated files\nback to repo]
    J --> K
    K --> L[Hugo build --minify]
    E --> L
    L --> M[Deploy to S3\n+ CloudFront invalidation]
```

## Notes

- Only **changed fields** are sent to the API (via `git diff`), not the full file.
- The Claude API prompt instructs: *"Translate only the changed YAML values from English to the target language. Return valid YAML only, preserving all keys exactly."*
- `ANTHROPIC_API_KEY` is stored as a GitHub Secret.
- Auto-translation commits are tagged `chore: auto-translate` for easy identification in git history.
- `data/testimonials.yaml` would need a separate similar flow if updated.
```
