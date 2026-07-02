# Watch the Dot — Help Centre

This folder is the source for the public **Watch the Dot help centre**: a
knowledge base for everyone who uses the platform — **athletes**, **spectators**,
and **event organisers**.

It is written as plain Markdown with YAML front matter, organised into category
folders, and is ready to publish with [Jekyll](https://jekyllrb.com/) using the
[Just the Docs](https://just-the-docs.com) theme (or any Jekyll theme — the
content is theme-agnostic).

## Structure

```
knowledge-base/
├── _config.yml              # Jekyll site config
├── STYLE-GUIDE.md           # How to write + format articles (read before editing)
├── index.md                 # Help-centre home page
├── getting-started/         # 1. New to Watch the Dot
├── for-athletes/            # 2. Riding & being tracked
├── for-spectators/          # 3. Watching events & riders live
├── for-organisers/          # 4. Creating & running events
├── teams-and-clubs/         # 5. Teams / clubs
├── social-and-following/    # 6. Posts, stories, following, the feed
├── safety-and-offline/      # 7. SOS, crash detection, offline behaviour, data accuracy
├── notifications/           # 8. Notification types & preferences
├── account-and-privacy/     # 9. Account, profile, privacy & your data
└── reference/               # 10. Glossary, FAQ, troubleshooting
```

Each category folder has an `index.md` (the category landing page) and one
Markdown file per article.

## Running it locally

```bash
cd knowledge-base
gem install bundler jekyll
echo "gem 'just-the-docs'" > Gemfile && echo "gem 'jekyll'" >> Gemfile
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

(Or point any static-site/Jekyll host at this folder.)

## Editing

Read **STYLE-GUIDE.md** first. In short: write for the reader (not the engineer),
one feature per article, clear headings, step-by-step instructions, and only
document what the product actually does today.
