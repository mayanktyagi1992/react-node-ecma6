/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import User from '../api/user/user.model';

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Mayank Tyagi',
      email: 'mayank@tyagi.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@tyagi.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });


