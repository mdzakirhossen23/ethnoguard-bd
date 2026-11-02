# EthnoGuard BD

Source-linked medicinal plant research and Bangladesh biodiversity context.

- [Live pilot](https://ethnoguard.baharsoftbd.com/)
- EthnoHack 2026, Track 3: Biodiversity & Sustainability
- Team: MD Zakir Hossain and MD Bahauddin
- Institution: Leading University, Sylhet, Bangladesh

## The problem

A plant's traditional use, a study of one commercial extract and a biodiversity
occurrence count answer different questions. Presenting them as one evidence or
conservation score can create false confidence. EthnoGuard keeps the source,
study design, outcome and limitation visible together.

## What the pilot does

The browser app searches six source-linked plant records, filters by study type
and biodiversity coverage, and opens findings beside original source links.
English and Bangla summaries cover a targeted selection of four randomized
trials, one quasi-experimental study and one Kew botanical entry. Two NIH
overviews add safety context. Six GBIF queries supply a dated Bangladesh snapshot.

Ask EthnoGuard uses Groq to explain this selected corpus. The PHP backend asks for
structured answers, checks cited source IDs against the corpus and returns known
source URLs. Marked renders Markdown and DOMPurify sanitizes the output. The
assistant does not perform a live literature search. Citation checking is not
proof that every model statement is supported.

## Dataset snapshot

Snapshot reviewed on 2 November 2026. The six queries contain 98 indexed records
in total; 66 pass the coordinate/no-geospatial-issue filters. These are records,
not distinct plants, population estimates or conservation assessments.

| Plant | GBIF Bangladesh records | Filtered georeferenced records |
| --- | ---: | ---: |
| Neem | 27 | 21 |
| Turmeric | 16 | 7 |
| Holy basil | 23 | 17 |
| Indian pennywort | 22 | 20 |
| Malabar nut | 9 | 1 |
| Ashwagandha | 1 | 0 |

Current Catalogue of Life taxon IDs are alphanumeric. The refresh script uses
GBIF's v2 species matching with an explicit checklist key and verifies exact
species matches. The portal URLs use the corresponding current identifiers.
An empty `results` array in the count API is expected because `limit=0`.

## Run locally

Requirements: PHP 8+ with cURL for the assistant; Node.js 18+ for the data scripts.
No Node packages are required for the browser app or data checks.

From the repository root:

```sh
php -S 127.0.0.1:8080 -t public
```

Open `http://127.0.0.1:8080`. Browsing the records works without a Groq key. The
assistant reports that setup is pending until the private configuration exists.

For a local AI test, create a directory outside `public`, copy
`config.example.php` there as `config.php`, and fill in your own key. Set
`ETHNOGUARD_PRIVATE_DIR` to that directory before starting PHP. Add
`http://127.0.0.1:8080` to the private `allowed_origins` configuration. You may
alternatively set `GROQ_API_KEY` in the server environment. Never commit a key.

## cPanel deployment

Upload `public/` contents into the domain document root. Place the filled private
config at `/home/baharsof/ethnoguard-private/config.php`, outside `public_html`.
Use owner-only permissions such as `0600` for that file. The application uses
`ETHNOGUARD_PRIVATE_DIR` when set, otherwise the documented cPanel layout.
The production allowed origin is `https://ethnoguard.baharsoftbd.com`.

The proxy's default global cap is 40 attempted requests per UTC day, with 12 per
client per day and 4 per minute. Failed attempts count. Quota state contains a
keyed IP hash, not question text or a raw IP address. Questions and corpus notes
are sent to Groq; Groq's terms and data handling apply separately.

## Reproduce or check the data

```sh
node scripts/check-data.cjs
node scripts/refresh-gbif.cjs
node scripts/build-research.cjs
```

The refresh command makes public GBIF API requests and updates the saved
snapshot. The build command joins that snapshot with the manually reviewed
clinical summaries. It does not search or reassess clinical literature.
Clinical findings and review dates require manual source review before changes.

## Validation and practical limits

Checks performed on the live pilot include search/empty results, study-type
filters, sorting, Bangla dialogs, linked sources, structured AI references,
Markdown rendering, and a 390-by-844 mobile viewport. Tests verified that the
Centella non-significant comparison does not establish equivalence and that a
low GBIF count does not establish endangered status. These are manual smoke
tests, not benchmark results or a full security/accessibility audit.

This targeted corpus is not a systematic review. Some summaries use abstracts;
scope is identified in each record. Independent domain review is pending. The
app is not clinically validated and gives no diagnosis, dosage or treatment
recommendations. It has no validated conservation-risk model. No community-
provided traditional knowledge, consent or benefit-sharing arrangement is claimed.

## Originality and AI disclosure

A static frontend prototype existed before the hackathon. Hosting files were
present by 29 October 2026. During 2–3 November, work added or substantially
revised the source-linked corpus, GBIF matching and reproducible queries,
server-side Groq integration, citation-ID checks, Markdown sanitization,
Bangla research views and submission documentation. The pre-existing frontend
is disclosed rather than represented as entirely new hackathon work.

Codex/ChatGPT significantly assisted code, research summarization, debugging,
documentation and presentation preparation. Groq supplies runtime model
inference using the model selected in private configuration. The team remains
responsible for checking accuracy, licensing and submission eligibility.

## Attribution and rights

Source URLs and access dates appear in `public/ai-records.json`. `docs/RESEARCH-NOTES.txt`
explains selection and reuse. Full papers and underlying occurrence records are
not redistributed. Original publishers retain their content rights and dataset
licences. GBIF.org, Kew, PubMed/NLM, NCCIH and NIH ODS are credited through links.
The bundle includes original Marked and DOMPurify licence notices.

The team has not selected an open-source licence for its own code. Public source
access is provided for hackathon review; no additional licence grant is implied.

## Structure

- `public/`: browser app, shared source corpus and PHP proxy
- `scripts/`: GBIF refresh, corpus build and data validation
- `data/`: dated query snapshot
- `docs/`: research and submission notes
- `config.example.php`: empty configuration template only

