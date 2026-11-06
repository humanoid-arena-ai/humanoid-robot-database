# Contributing

Thanks for helping keep humanoid robot data accurate.

## Rules

1. **Every value needs a source.** Add or reuse an entry in the file's `sources` list (title, publisher, URL) and point to it with `sourceId` / `source_ids`. Official spec pages, press releases, filings and reputable reporting are best. Forum posts and videos are fine for demos, not for specs.
2. **Keep the original wording.** Specs carry the value as published (`original` / `original_value`) and a normalized metric value.
3. **Claims stay claims.** If only the company says it, describe it as a company claim. Note teleoperation and staged demos in caveats.
4. **One robot per pull request**, so reviews stay quick.
5. Do not edit `data/`; it is generated.

## Fix a value

Open the robot's file (`robots/<id>.json` or `evidence/robots/<id>.json`), press the pencil icon on GitHub, change the value, add the source, and submit. GitHub forks the repo for you.

## Add a robot

Copy an existing file in `robots/`, rename it to `<company>-<model>.json`, fill in what the sources support and leave the rest `null`. Or [open an issue](../../issues/new?template=new-robot.yml) with links and we will add it.

## Review

A check validates JSON on every pull request. Maintainers verify the sources, then merge. Merged changes reach [the site](https://humanoidarena.ai) within a few hours.
