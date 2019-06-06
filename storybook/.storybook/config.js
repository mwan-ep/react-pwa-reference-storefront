import { configure } from '@storybook/react';
const ep = require('@elasticpath/store-components');
// import { themes } from '@storybook/theming';

// addParameters({
// 	options: {
// 		// theme: themes.dark
// 	}
// });

const config = {
  "cortexApi": {
    "path": "http://reference.epdemos.com/cortex",
    "scope": "vestri",
    "pathForProxy": "http://reference.epdemos.com"
  },
  "supportedLocales": [
    {
      "value": "en-CA",
      "name": "English"
    },
    {
      "value": "fr-FR",
      "name": "French"
    }
  ],
  "defaultLocaleValue": "en-CA",
  "supportedCurrencies": [
    {
      "value": "CAD",
      "name": "Canadian Dollar"
    },
    {
      "value": "EUR",
      "name": "Euro"
    }
  ],
  "defaultCurrencyValue": "CAD",
  "skuImagesUrl": "https://s3-us-west-2.amazonaws.com/ep-demo-images/VESTRI_VIRTUAL/%sku%.png",
  "siteImagesUrl": "https://s3-us-west-2.amazonaws.com/ep-demo-images/VESTRI_VIRTUAL/%fileName%",
  "enableOfflineMode": false,
  "b2b": {
    "enable": false,
    "authServiceAPI": {
      "path": "/admin",
      "pathForProxy": ""
    },
    "keycloak": {
      "callbackUrl": "",
      "loginRedirectUrl": "",
      "logoutRedirectUrl": "",
      "client_id": "reference-storefront"
    }
  },
  "gaTrackingId": "",
  "arKit": {
    "enable": true,
    "skuArImagesUrl": "https://s3.amazonaws.com/referenceexp/ar/%sku%.usdz"
  },
  "indi": {
    "enable": false,
    "carousel": {
      "apikey": "",
      "id": "",
      "size": "large",
      "theme": "large",
      "round_corners": false,
      "show_title": false,
      "show_views": false,
      "show_likes": false,
      "show_buzz": false,
      "animate": true
    },
    "productReview": {
      "submit_button_url": "",
      "thumbnail_url": ""
    },
    "brandAmbassador": {
      "submit_button_url": "",
      "thumbnail_url": ""
    }
  },
  "facebook": {
    "enable": false,
    "pageId": "<PAGE_ID>",
    "applicationId": "<APP_ID>"
  },
  "GDPR": {
    "enable": false
  },
  "PowerReviews": {
    "enable": false,
    "api_key": "",
    "merchant_group_id": "",
    "merchant_id": ""
  },
  "formatQueryParameter": {
    "standardlinks": false,
    "noself": false,
    "nodatalinks": true
  }
};

const comps = require.context('@elasticpath/store-components/src', true, /.stories.(j|t)sx$/);
ep.init({
  config,
  intl: { get: src => src }
}).then(() => {
  configure(() => {
    comps.keys().forEach(filename => comps(filename));
  }, module);
});