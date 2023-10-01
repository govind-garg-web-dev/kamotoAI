// Load Forefront site in an iframe
var forefrontFrame = document.getElementById('forefront-frame');
var iframe = document.createElement('iframe');
iframe.src = 'https://app.kamoto.ai/p/govind-4t9mdp?tab=chat';
iframe.width = '100%';
iframe.height = '600px';
iframe.margin = '20px';
forefrontFrame.appendChild(iframe);
