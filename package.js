Package.describe({
  summary: "Login service for Mailchimp Accounts",
  version: "0.0.14",
  git: "https://github.com/tsega/meteor-accounts-mailchimp"
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.use(
    [
    'accounts-base@1.1.4-winr.3',
    'accounts-oauth@1.1.4-winr.2',
    'tsega:mailchimp@0.0.2'
    ], ['client', 'server']);

  api.addFiles(
    [
      'mailchimp.js',
      'mailchimp_login_button.css'
    ],
    'client');

  api.addFiles(
    [
      'mailchimp.js'
    ],
    'server');
});
