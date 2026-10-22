<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All business facts (contact, links, STEM Camp session, programmes, key figures, legal status) live in `src/lib/site.ts`; pages read from it so the team updates one place.
- Unknown facts stay as `[bracketed]` placeholders rendered via the `Fill` component — never invent figures, dates or prices.
- Each route sets its own head via `seo()` from `src/lib/seo.ts`; old WordPress URLs are kept as 301-redirect routes.
