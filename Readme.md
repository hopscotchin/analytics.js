# Analytics.js

Analytics.js makes it easy to collect customer data and send it to many different tools using a single, unified API.

Analytics.js is open source and is one of the libraries that powers [Segment], the managed, hassle-free way to collect customer data in the browser and beyond.

For our mobile and server-side data collection libraries, check out our [libraries] page.

## Documentation

First, read the [Analytics.js QuickStart], which contains installation instructions and a brief overview of what Analytics.js does and how it works.

For more detail on the Analytics.js API, check out the [Analytics.js Library Reference].


This repository houses a pre-built, open-source version of analytics.js. If you'd like to use Analytics.js outside of Segment but don't need to customize your build, pre-built [unminified][] or [minified][] versions of analytics.js found in the root of this repository. Once you've done that, you'll want to mimic the Segment snippet on your website by stubbing out its methods on the `window` and downloading your built version of the script asynchronously. For an example of doing that and initializing your integrations with options, [see here](https://gist.github.com/cyberwombat/11008970).

If you're looking to produce a custom build of Analytics.js with just the plugins you need, see [the wiki page for building a custom distribution][].

## Contributing to Analytics.js and its Ecosystem of Integration Plugins

The core logic of analytics.js is broken out into individual repositories:

- To report an issue with analytics.js itself, head over to [analytics.js-core][], where the core analytics.js logic is maintained.
- To report an issue with an integration plugin. head over to the [analytics.js-integrations][] organization, where we keep each integration plugin in its own repository.
- **To build a custom integration plugin for analytics.js, check out the [wiki][]. To distribute your plugin as a component of an integration in our [catalog][], check out our [partner docs].**

If you're not sure where to open an issue, feel free to open an issue against this repository or [contact us](https://segment.com/contact) and we'll help point you in the right direction.

[analytics.js]: https://github.com/segmentio/analytics.js
[unminified]: https://github.com/segmentio/analytics.js/blob/master/analytics.js
[minified]: https://github.com/segmentio/analytics.js/blob/master/analytics.min.js
[analytics.js quickstart]: https://segment.com/docs/sources/website/analytics.js/quickstart/

## License

Released under the [MIT license].


-------

[Segment]: https://segment.com
[MIT license]: License.md
[Analytics.js Library Reference]: https://segment.com/docs/libraries/analytics.js
[Analytics.js Quickstart]: https://segment.com/docs/tutorials/quickstart-analytics.js
[analytics.js-core]: https://github.com/segmentio/analytics.js-core
[analytics.js-integrations]: https://github.com/segment-integrations?q=analytics.js-integration
[ci-badge]: https://travis-ci.org/segmentio/analytics.js.png?branch=master
[ci-link]: https://travis-ci.org/segmentio/analytics.js
[integrations]: https://segment.com/integrations
[libraries]: https://segment.com/libraries
[nodejs.org]: https://nodejs.org/
[spec]: https://segment.com/docs/spec/
[catalog]: https://segment.com/catalog
[partner docs]: https://segment.com/docs/partners
[wiki]: https://github.com/segmentio/analytics.js/wiki/Writing-Integrations
[the wiki page for building a custom distribution]: https://github.com/segmentio/analytics.js/wiki/Building-A-Custom-Distribution
