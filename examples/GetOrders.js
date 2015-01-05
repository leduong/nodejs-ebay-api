// a basic GetOrders request to the Trading API via XML-POST
// fill in keys from your eBay API account
// see http://developer.ebay.com/devzone/xml/docs/reference/ebay/GetOrders.html

var ebay = require('../index.js');


ebay.ebayApiPostXmlRequest({
  serviceName: 'Trading',
  opType: 'GetOrders',
  devName: 'd1bd00d8-f76f-4459-9f18-23daa9695432',
  cert: '6bdef6f0-2147-48c4-aac7-030c35624980',
  appName: 'DDSoluti-9a68-4a75-8be0-d82ec7940d9f',
  sandbox: true,

  params: {
    authToken: 'AgAAAA**AQAAAA**aAAAAA**nZyoVA**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wFk4GhDZGBoQSdj6x9nY+seQ**dSsDAA**AAMAAA**3NleB0CU35QYGXbIVpMNXTmpQVU8jYsJgJiERfiVFGBlhl7z/8NJe67v3ffpY/KwEqy8M1zj9aCNef/BWpJJyfTddQiBC3ZMoguUKrb8zHnjqX2p7hwxhmB3tnLM8XC3HGJJXg0IdAR8OwzEikDWBmLY4rcdVSI4i4tenIsbttdM0eCB9YUb/ApKRyrfGxY8+xkrlJFiW4uIwnhxt0lYcgWQ/kCoFXuPcuN4sraRoedFfKUvZne9S9WbKdnnO7J5neFsUwBg7yXjdOrPmC5dN3dok/VWC0UaDGz+r7mxIHfzSZOSV6DBxtYb8ywp5omH74xmAgbMOA954M1s4xR7GfYCl1riDUgodDpbv55K6SxtFshmAAUoiXZ6aEpGC1BrlEYho0PIdoiCwDhEl0bZR2W1cmaDYrW3+aLkGRc0NXKuFxRFbTAxj+v+RmX697YXm3W0vsNkc8Tnzs1676VB1MDZSw3skM11xn5hR5QzczvlF0uSu33NvZWiGcgguuK3qQURabzakALgfhT6oxU8ueaPXEFQIW7s3juhFbfXkGqu7YPjEJvuiwBOjy5TJlDeBDHA/6OH5LPR9yiKAodBWx4onPANpW8oUzeoEKhoTTJnvmfoPiarlayCfJY+PHkR8cecBUFTl9Pzvs2NujnCeTOx2ojhJqLaOUx3OGL/KMW+j5soiaPn/zZuOsVom+vVvnlmRHCBm8xWA1GYriGHNzfycQKYAt0+KXUPMgrHwdm+19wgQk8i9ZZFIiCYcsjX',
    RuName: 'DD_Solution-DDSoluti-9a68-4-tqcsh'
  }

}, function(error, results) {
  if (error) {
    console.dir(error);
    process.exit(1);
  }
  console.dir(results);
});