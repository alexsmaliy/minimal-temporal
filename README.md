What
====

This is a minimal Temporal setup running on localhost. It consists of a
worker definition, a dummy workflow, and several dummy steps.

How to Use
==========

The Temporal server must be installed separately: `brew install temporal`.

Launch the server: `temporal server start-dev --db-filename something.db --ui-port 4321`.

In another tab, start one or more workers: `npm run worker`.

A client application stub triggers the dummy workflow: `npm run client`.
The dummy workflow has a delay and consists of several fallible "activity" steps.

Launch a workflow and view the UI in a web browser.
