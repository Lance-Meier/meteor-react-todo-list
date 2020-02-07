import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';
import '../imports/api/tasks.js';

Meteor.startup(() => {
  // code to run on server at startup
  ServiceConfiguration.configurations.remove({
    service: 'facebook'
  });

  ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '615262815701721',
    secret: '3c306f7111ce887e2f22b72a2c53e71b'
  });
});
