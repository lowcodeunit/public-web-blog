module.exports = function (context, options) {
  const {siteConfig} = context;
  const {themeConfig} = siteConfig;
  const {oribi} = themeConfig || {};

  if (!oribi) {
    throw new Error(
      `You need to specify 'oribi' object in 'themeConfig' with 'trackingID' field in it to use docusaurus-plugin-oribi`,
    );
  }

  const {trackingID, anonymizeIP} = oribi;

  if (!trackingID) {
    throw new Error(
      'You specified the `oribi` object in `themeConfig` but the `trackingID` field was missing. ' +
        'Please ensure this is not a mistake.',
    );
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-oribi',
    injectHtmlTags() {
      if (!isProd) {
        return {};
      }

      if (window.LCU && window.LCU.User && window.LCU.User.Email) {
        ORIBI.api("setUserEmail", window.LCU.User.Email);
      }

      return {
        headTags: [
          {
            tagName: 'script',
            async: true,
            innerHTML: `(function (b, o, n, g, s, r, c) {
              if (b[s]) return;
              b[s] = {};
              b[s].scriptToken = "${trackingID}";
              b[s].callsQueue = [];
              b[s].api = function () {
                b[s].callsQueue.push(arguments);
              };
              r = o.createElement(n);
              c = o.getElementsByTagName(n)[0];
              r.async = 1;
              r.src = g;
              r.id = s + n;
              c.parentNode.insertBefore(r, c);
            })(
              window,
              document,
              "script",
              "https://cdn.oribi.io/${trackingID}/oribi.js",
              "ORIBI"
            );`,
          },
        ],
      };
    },
  };
};
