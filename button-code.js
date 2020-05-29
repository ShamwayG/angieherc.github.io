
<div id='product-component-1590673468490'></div>
<script type="text/javascript">
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'carbotec.myshopify.com',
      storefrontAccessToken: '6612e503e6a6c058a0ba6c69dd584a04',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '5245300048035',
        node: document.getElementById('product-component-1590673468490'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#d24618"
        },
        "background-color": "#e94e1b",
        ":focus": {
          "background-color": "#d24618"
        },
        "border-radius": "5px",
        "padding-left": "30px",
        "padding-right": "30px"
      },
      "price": {
        "font-family": "Arial, sans-serif",
        "color": "#000000"
      },
      "compareAt": {
        "font-family": "Arial, sans-serif",
        "color": "#000000"
      },
      "unitPrice": {
        "font-family": "Arial, sans-serif",
        "color": "#000000"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "MEHR ERFAHREN"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#d24618"
        },
        "background-color": "#e94e1b",
        ":focus": {
          "background-color": "#d24618"
        },
        "border-radius": "5px",
        "padding-left": "30px",
        "padding-right": "30px"
      }
    },
    "text": {
      "button": "IN DEN WARENKORB"
    }
  },
  "cart": {
    "styles": {
      "button": {
        ":hover": {
          "background-color": "#d24618"
        },
        "background-color": "#e94e1b",
        ":focus": {
          "background-color": "#d24618"
        },
        "border-radius": "5px"
      }
    },
    "text": {
      "title": "WARENKORB",
      "total": "ZWISCHENSUMME",
      "empty": "Ihr Einkaufswagen ist im Moment leer.",
      "notice": "",
      "button": "ZUR KASSE"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#e94e1b",
        ":hover": {
          "background-color": "#d24618"
        },
        ":focus": {
          "background-color": "#d24618"
        }
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
</script>
--------------------------------
<script type="text/javascript">
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'carbotec.myshopify.com',
      storefrontAccessToken: '6612e503e6a6c058a0ba6c69dd584a04',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '5245300048035',
        node: document.getElementById('product-component-1590672125468'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#d24618"
        },
        "background-color": "#e94e1b",
        ":focus": {
          "background-color": "#d24618"
        },
        "border-radius": "5px",
        "padding-left": "30px",
        "padding-right": "30px"
      },
      "price": {
        "font-family": "Arial, sans-serif",
        "color": "#000000"
      },
      "compareAt": {
        "font-family": "Arial, sans-serif",
        "color": "#000000"
      },
      "unitPrice": {
        "font-family": "Arial, sans-serif",
        "color": "#000000"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "MEHR ERFAHREN"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#d24618"
        },
        "background-color": "#e94e1b",
        ":focus": {
          "background-color": "#d24618"
        },
        "border-radius": "5px",
        "padding-left": "30px",
        "padding-right": "30px"
      }
    },
    "text": {
      "button": "IN DEN WARENKORB"
    }
  },
  "cart": {
    "styles": {
      "button": {
        ":hover": {
          "background-color": "#d24618"
        },
        "background-color": "#e94e1b",
        ":focus": {
          "background-color": "#d24618"
        },
        "border-radius": "5px"
      }
    },
    "text": {
      "title": "WARENKORB",
      "total": "ZWISCHENSUMME",
      "empty": "Ihr Einkaufswagen ist im Moment leer.",
      "notice": "",
      "button": "ZUR KASSE"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#e94e1b",
        ":hover": {
          "background-color": "#d24618"
        },
        ":focus": {
          "background-color": "#d24618"
        }
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
</script>



------------------------------------------------------
<script type="text/javascript">
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'carbotec.myshopify.com',
      storefrontAccessToken: '6612e503e6a6c058a0ba6c69dd584a04',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '5245273669795',
        node: document.getElementById('product-component-1590667979213'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#d24618"
        },
        "background-color": "#e94e1b",
        ":focus": {
          "background-color": "#d24618"
        },
        "border-radius": "5px",
        "padding-left": "30px",
        "padding-right": "30px"
      },
      "price": {
        "font-family": "Arial, sans-serif",
        "color": "#000000"
      },
      "compareAt": {
        "font-family": "Arial, sans-serif",
        "color": "#000000"
      },
      "unitPrice": {
        "font-family": "Arial, sans-serif",
        "color": "#000000"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "IN DEN WARENKORB"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#d24618"
        },
        "background-color": "#e94e1b",
        ":focus": {
          "background-color": "#d24618"
        },
        "border-radius": "5px",
        "padding-left": "30px",
        "padding-right": "30px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        ":hover": {
          "background-color": "#d24618"
        },
        "background-color": "#e94e1b",
        ":focus": {
          "background-color": "#d24618"
        },
        "border-radius": "5px"
      }
    },
    "text": {
      "title": "WARENKORB",
      "total": "ZWISCHENSUMME",
      "empty": "Ihr Einkaufswagen ist im Moment leer.",
      "notice": "",
      "button": "ZUR KASSE"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#e94e1b",
        ":hover": {
          "background-color": "#d24618"
        },
        ":focus": {
          "background-color": "#d24618"
        }
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
</script