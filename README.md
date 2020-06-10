# Regex Trie on Web

[![GitHub Action Status](https://github.com/danpintara/regex-trie-web/workflows/publish/badge.svg)](https://github.com/danpintara/regex-trie-web/actions?query=workflow%3Apublish)

Generate a regular expression which matches all of the specified lines, powered by Trie algorithm. Sample input:

```
abcd
abde
```

Generated regular expression which matches all of the specified lines would be:

```
ab(?:cd|de)
```

This tool is intended to generate regular expression from a list of [Prometheus](https://prometheus.io) label values, so [AlertManager](https://prometheus.io/docs/alerting/alertmanager) silencing rule can be easily made using it. See the [about page](https://danpintara.github.io/regex-trie-web/about).

Feel free to use this tool for other reasons, including escaping single line regular expression. :stuck_out_tongue_closed_eyes:

## Usage

This project is available on [this page](https://danpintara.github.io/regex-trie-web). The output will be generated while input is being typed in.

## Hacking

This project is built mostly on these technologies:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org)

Make sure [pnpm](https://pnpm.js.org) is installed on your system for managing dependencies of this project.

### Preparation

Fetch dependencies of this project after `git clone`:

```
pnpm i --shamefully-hoist
```

**Note:** `--shamefully-hoist` is not recommended but is currently required for `.mdx`-backed pages to be compiled successfully.

### Tests

To run the whole tests:

```
pnpm run test
```

It is more convenient to run the tests every time a file is modified. To watch and run the tests:

```
pnpm run test:watch
```

### Local Development Server

To run the local development server:

```
pnpm run dev
```

Local development site will be served on `localhost:3000`.

### Publish

[GitHub Workflow](.github/workflows/publish.yml) has been configured to build and publish this project as GitHub Pages.

To do a manual build:

```
pnpm run build
```

## Contributing

Contributions are welcomed and can be done by forking and creating [pull requests](https://github.com/danpintara/regex-trie-web/compare). Take a look at [good first issues](https://github.com/danpintara/regex-trie-web/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) here.

## License

[MIT](LICENSE).
