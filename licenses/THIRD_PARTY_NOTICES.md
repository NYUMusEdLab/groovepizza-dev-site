# GroovePizza: third-party notices and integration record

The root NYU notice does not apply to third-party rights in the components
below. Existing source headers remain intact. This record supplements those
headers; it is not a replacement license or certification of a complete
dependency distribution. Before distributing a build, carry the matching
component license texts, copyright notices and any required source or change
notices for the versions actually shipped.

## Vendored and mixed-source material

| Path | Component | Retained attribution / evidence | Applicable handling | Reference |
|---|---|---|---|---|
| `app/js/vendor/aws-sdk.min.js` | AWS SDK for JavaScript 2.2.8 bundle | Amazon.com, Inc. or its affiliates and bundled component authors | Header points to the AWS bundle license. Preserve component-specific conditions, including the SDK Apache-2.0 grant; obtain the license bundle matching 2.2.8 before a fresh distribution. A current online bundle is not proof of every historical component. | [Source / terms](https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt) |
| `app/js/vendor/jquery-2.1.3.min.js` | jQuery 2.1.3 | jQuery Foundation, Inc.; 2005–2014 | Retain header and matching MIT notice. | [Source / terms](https://jquery.org/license/) |
| `app/js/vendor/js.cookie-2.1.0.min.js` | js-cookie 2.1.0 | Upstream js-cookie contributors | MIT in the retained header; match the full copyright notice to this release. | [Source / terms](https://github.com/js-cookie/js-cookie) |
| `app/js/vendor/download.js` | download.js 4.2, locally adapted wrapper | dandavis; 2008–2016 | The copied header says [CCBY2]. Preserve that credit and historical grant; resolve the exact historical terms before asserting an MIT-only or replacement grant. Current upstream MIT licensing does not by itself resolve this copy’s history. | [Source / terms](https://github.com/rndme/download) |
| `app/js/vendor/xml2json.min.js` | X2JS, internal version 1.2.0 | Original X2JS authors; exact matching notice still to be recovered | This copy has no complete license header. Treat it separately from the npm x2js 3.4.0 package; excluded from NYU reservation. | [Source / terms](https://github.com/abdmob/x2js) |
| `app/css/vendor/fancySelect.css` | FancySelect CSS adaptation | Upstream authors and credited Stack Overflow contributor(s) | No full local grant; preserve the existing source link and verify the matching upstream/snippet terms. Excluded from NYU reservation. | [Source / terms](https://github.com/octopuscreative/fancyselect) |

## Declared dependencies

Versions below come from the reviewed package manifest and lockfile; a row
does not declare a license for that package. The root lockfile does not
contain complete component license texts. Preserve each installed package's
applicable terms and transitive-component notices. A new dependency version
or distribution requires checking its own files and terms.

| Package | Requested | Locked version / revision | Use |
|---|---|---|---|
| audiobuffer-to-wav | ^1.0.0 | 1.0.0 | runtime |
| data | ^0.6.1 | 0.6.1 | runtime |
| jquery | ^3.5.1 | 3.5.1 | runtime |
| js-cookie | ^2.2.1 | 2.2.1 | runtime |
| js-cookies | ^1.0.4 | 1.0.4 | runtime |
| midi-writer-js | ^1.7.4 | 1.7.4 | runtime |
| mused-app-core | git+ssh://git@github.com/NYUMusEdLab/mused-app-core.git#0.8.0 | git+ssh://git@github.com/NYUMusEdLab/mused-app-core.git#5d52b2f6d736db06be9738810b2ccfe4a3791f4e | runtime |
| tone | ^14.7.61 | 14.7.61 | runtime |
| x2js | ^3.4.0 | 3.4.0 | runtime |
| @babel/core | ^7.11.6 | 7.11.6 | build |
| @babel/preset-env | ^7.11.5 | 7.11.5 | build |
| parcel-bundler | ^1.12.4 | 1.12.4 | build |

The locally vendored X2JS 1.2.0 and js-cookie 2.1.0 are distinct from the
versions in npm's lockfile. The copied download.js carries historical CC
wording and local adaptations; do not silently replace that notice with
today's upstream MIT label. NYU's original integration code does not confer
rights in Noteflight, Soundtrap, social-platform APIs, partner branding or
content returned by those services. Existing integration agreements govern.

## Guidance

- [MIT license text](https://opensource.org/license/mit): retain its required copyright and permission notices.
- [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0): preserve applicable license, attribution and modification notices.
- [Stack Overflow content licensing](https://stackoverflow.com/help/licensing): use the terms appropriate to the copied contribution's date.

Any unresolved provenance above remains excluded from the NYU reservation.
This update grants no substitute rights in it.
