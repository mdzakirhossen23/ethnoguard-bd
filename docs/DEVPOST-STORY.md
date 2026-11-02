# Inspiration

Medicinal plant information often mixes traditional-use reports, studies of one
extract and biodiversity observations. We wanted a small research tool where a
reader can open the actual source and see what the evidence does and does not
support. Bangladesh provides a useful setting for connecting plant research with
the limitations of available biodiversity data.

# What it does

EthnoGuard BD brings six source-linked plant records into one browser interface.
Users can search by English, Bangla or scientific name and filter by study type
or available georeferenced Bangladesh records. Each record shows selected
findings, study design, sample size where relevant, limitations and source links.

A Bangladesh view presents dated GBIF occurrence counts without converting them
into population estimates or threatened-species scores. Ask EthnoGuard uses
Groq to explain the selected corpus with source citations. It does not conduct a
live literature search or provide diagnosis, dosage or treatment recommendations.

# How we built it

The app uses HTML, CSS and JavaScript with a PHP/cURL server proxy for Groq. A
shared JSON corpus keeps the browser records and AI context aligned. Node.js
scripts resolve exact species names against GBIF's Catalogue of Life checklist,
request country-filtered occurrence counts and save reproducible query metadata.
Marked and DOMPurify provide sanitized Markdown output. The key stays outside
the public web directory. Request limits help bound inference use.

# Data and method

The pilot includes four randomized trials, one quasi-experimental study and one
Kew botanical reference, with two NIH evidence/safety overviews. Six GBIF queries
complete 14 linked source entries. The 2 November snapshot totals 98 indexed
Bangladesh occurrence records, including 66 passing coordinate/geospatial-issue
filters. Counts can contain duplicate observations or cultivated plants and have
uneven sampling. A low count cannot establish endangered status.

This is a targeted selection, not a systematic review. The app identifies
abstract-based summaries and separates reported findings from editorial
limitations. No numerical evidence-strength or conservation-risk scores are used.

# Challenges we ran into

Early illustrative scores looked more authoritative than the data justified, so
we removed them. GBIF's current website uses alphanumeric taxonomy IDs; older
numeric IDs produced misleading empty results in portal links. We changed both
the matching pipeline and links to the current checklist. AI testing also showed
that a missing detail in a short summary could become a false claim about what a
study did not measure. We expanded the notes and tightened source instructions.

# Accomplishments

The working pilot connects source-linked studies, Bangladesh occurrence queries
and a cited AI explanation in English and Bangla. Checks cover source-ID
resolution, study-type filters, data totals, current GBIF links and a mobile
viewport. The tool keeps its limitations visible rather than presenting a
research prototype as a validated clinical or conservation product.

# What we learned

A citation is useful only when the reader can inspect the source and understand
its scope. Non-significance does not prove equal effectiveness, a trial of one
preparation does not validate all preparations, and occurrence coverage is not a
population assessment. Automated citation-ID validation supports review but
does not establish the truth of every generated sentence.

# What's next

Independent botanical and clinical review, a documented evidence-selection
protocol, broader accessibility/security testing, and appropriate collaboration
with local knowledge holders are the next steps. Community contributions would
require consent, attribution and access controls. The pilot claims no existing
community partnership, consent arrangement or field validation.

# Originality and AI disclosure

A static frontend existed before the hackathon, with hosting files present by
29 October. Work during 2–3 November substantially developed the sourced corpus,
GBIF pipeline, server-side Groq assistant, citation checks, Markdown sanitization,
Bangla research views and documentation. We disclose that starting point rather
than claiming that all frontend work began during the event.

Codex/ChatGPT significantly assisted code, research summarization, debugging,
documentation and pitch materials. Groq performs runtime inference. Generated
summaries were checked against linked source content; independent expert review
remains pending. Narration in the prepared walkthrough uses a synthetic voice.

# Team

MD Zakir Hossain and MD Bahauddin, Leading University, Sylhet, Bangladesh.
Individual contributions and Devpost team membership require the members'
confirmation before final submission.

