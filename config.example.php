<?php
// PRIVATE: keep at /home/baharsof/ethnoguard-private/config.php, outside public_html.
// Paste your Groq API key between the empty quotes below. Never put it in ai.js.
return [
    'api_key' => '',
    'model' => 'llama-3.3-70b-versatile',
    'daily_limit' => 40, // Global daily request cap (UTC); failed requests count too.
    'allowed_origins' => ['https://ethnoguard.baharsoftbd.com'],
];

