## Template: blomkvartalet 1

Or blomkvartalet 1

This repository is also upstream for https://github.com/marketertechnologies/template_blomkvartalet_1

## Development

- Clone repository
- Install dependencies using `npm install`
- Run `npm run dev` for live preview/reloading

If changes you're going to make are also applicable to `template_blomkvartalet_1`
- make the changes
- `git push` it
- go back to the `template_blomkvartalet_1`
- and follow readme instructions

## Translations

How to add new locale:
- `npx ttag init uk_UA src/locales/uk_UA.po`
- Update `availableLocales` in ./src/locale.js

How to update existing locale:
- `npx ttag update src/locales/nb_NO.po src`

How to port existing locale to json:
- `npx ttag po2json src/locales/nb_NO.po > src/locales/nb_NO.po.json`

Remember that update-and-port should be done for ALL locales in src/locales.

## Building and publishing

- navigate to M2 app folder and issue following commands:

```
RELEASE_STAGE=staging rails "landing_page:import[/path/to/this/template_blomkvartalet_1/build, blomkvartalet-1]"

RELEASE_STAGE=production rails "landing_page:import[/path/to/this/template_blomkvartalet_1/build, blomkvartalet-1]"
```
