---
sidebar_position: 5
---

# How to integrate KICS

We scan **infrastructure-as-code** with KICS.

If your repo does not yet include `kics.yml` or this GitHub action, add this action to your repository workflows.

KICS is used as the successor to Checkov.

:::info

Findings with severity `Error` are high findings and must be fixed.

:::

```yaml
name: "KICS"

on:
  push:
    branches: [main, master]
  # pull_request:
  # The branches below must be a subset of the branches above
  # branches: [main, master]
  # paths-ignore:
  #   - "**/*.md"
  #   - "**/*.txt"
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    steps:
      - uses: actions/checkout@v2

      - name: KICS scan
        uses: checkmarx/kics-github-action@master
        with:
          # Scanning directory .
          path: "."
          # Exclude paths from scan by providing the paths as comma separated list
          # exclude_paths: "postgres-init.yaml,templates/sharedidp.yaml"
          # Exclude queries by providing the query / rule ID as comma separated list
          # exclude_queries: "b9c83569-459b-4110-8f79-6305aa33cb37"
          # Fail on HIGH severity results
          fail_on: high
          # Disable secrets detection - we use GitGuardian
          disable_secrets: true
          # When provided with a directory on output_path
          # it will generate the specified reports file named 'results.{extension}'
          # in this example it will generate:
          # - results-dir/results.json and results-dir/results.sarif
          output_path: kicsResults/
          output_formats: "json,sarif"

      # Upload findings to GitHub Advanced Security Dashboard
      - name: Upload SARIF file for GitHub Advanced Security Dashboard
        if: always()
        uses: github/codeql-action/upload-sarif@v1
        with:
          sarif_file: kicsResults/results.sarif
```
