'use strict';
// Preserve existing shared-groove IDs, URL mappings and browser-local project links.
// Both Pages paths have the same origin; no notebook storage is moved or cleared.
location.replace('https://nyumusedlab.github.io/groovepizza-test/' + location.search + location.hash);
