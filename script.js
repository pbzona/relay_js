const LD_CLIENT_ID = '61afd65ea6bea90dc73e953a';

const lduser = {"key": "user123"};

const options = {
  baseUrl: 'http://127.0.0.1:5000', // Use your Relay Proxy url for all of these values
  streamUrl: 'http://127.0.0.1:5000',
  eventsUrl: 'http://127.0.0.1:5000'
}

const ldclient = LDClient.initialize(LD_CLIENT_ID, lduser, options); // the optional `options` argument is where we connect to Relay Proxy

ldclient.on('initialized', function () {
  console.log('ld client initialized');

  document.getElementById('flag-a').innerText = ldclient.variation('flag-a', "DEFAULT_VALUE");
  document.getElementById('flag-b').innerText = ldclient.variation('flag-b', "DEFAULT_VALUE");
  document.getElementById('flag-c').innerText = ldclient.variation('flag-c', "DEFAULT_VALUE");

  ldclient.on('change:flag-a', function (currentValue, previousValue) {
    document.getElementById('flag-a').innerText = currentValue;
    console.log(currentValue)
  });
  
  ldclient.on('change:flag-b', function (currentValue, previousValue) {
    document.getElementById('flag-b').innerText = currentValue;
  });
  
  ldclient.on('change:flag-c', function (currentValue, previousValue) {
    document.getElementById('flag-c').innerText = currentValue;
    console.log(currentValue)
  });
});



