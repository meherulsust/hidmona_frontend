const express = require('express');
const router = express.Router();

const delay = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

router.post('/api/v1/token', async (req, res) => {
  await delay(1);

  return res.json({
    success: true,
    code: 200,
    data: {
      token: 'xxx.yyy.zzz',
      refresh_token: 'aaa.bbb.ccc',
      token_type: 'Bearer',
      email: 'shahan.saroar@vivasoftltd.com',
      permissions: [
        {
          id: 1,
          user_group_id: '1',
          route: 'None',
          is_permission: true,
        },
        {
          id: 2,
          user_group_id: '1',
          route: 'safwan/add',
          is_permission: false,
        },
        {
          id: 3,
          user_group_id: '1',
          route: 'users',
          is_permission: true,
        },
        {
          id: 52,
          user_group_id: '1',
          route: 'sms/edit',
          is_permission: false,
        },
        {
          id: 51,
          user_group_id: '1',
          route: 'sms/add',
          is_permission: false,
        },
        {
          id: 50,
          user_group_id: '1',
          route: 'sms/list',
          is_permission: false,
        },
        {
          id: 49,
          user_group_id: '1',
          route: 'priorities/edit',
          is_permission: true,
        },
        {
          id: 47,
          user_group_id: '1',
          route: 'priorities/list',
          is_permission: true,
        },
        {
          id: 48,
          user_group_id: '1',
          route: 'priorities/add',
          is_permission: true,
        },
        {
          id: 44,
          user_group_id: '1',
          route: 'services/list',
          is_permission: true,
        },
        {
          id: 45,
          user_group_id: '1',
          route: 'services/add',
          is_permission: true,
        },
        {
          id: 46,
          user_group_id: '1',
          route: 'services/edit',
          is_permission: true,
        },
        {
          id: 41,
          user_group_id: '1',
          route: 'tasks/add',
          is_permission: true,
        },
        {
          id: 42,
          user_group_id: '1',
          route: 'tasks/edit',
          is_permission: true,
        },
        {
          id: 43,
          user_group_id: '1',
          route: 'tasks/view',
          is_permission: true,
        },
        {
          id: 38,
          user_group_id: '1',
          route: 'areas/edit',
          is_permission: false,
        },
        {
          id: 39,
          user_group_id: '1',
          route: 'tasks',
          is_permission: true,
        },
        {
          id: 40,
          user_group_id: '1',
          route: 'tasks/list',
          is_permission: true,
        },
        {
          id: 35,
          user_group_id: '1',
          route: 'cities/edit',
          is_permission: false,
        },
        {
          id: 36,
          user_group_id: '1',
          route: 'areas/list',
          is_permission: false,
        },
        {
          id: 37,
          user_group_id: '1',
          route: 'areas/add',
          is_permission: false,
        },
        {
          id: 31,
          user_group_id: '1',
          route: 'states/add',
          is_permission: false,
        },
        {
          id: 32,
          user_group_id: '1',
          route: 'states/edit',
          is_permission: false,
        },
        {
          id: 33,
          user_group_id: '1',
          route: 'cities/list',
          is_permission: false,
        },
        {
          id: 34,
          user_group_id: '1',
          route: 'cities/add',
          is_permission: false,
        },
        {
          id: 22,
          user_group_id: '1',
          route: 'offices/add',
          is_permission: false,
        },
        {
          id: 23,
          user_group_id: '1',
          route: 'offices/edit',
          is_permission: false,
        },
        {
          id: 24,
          user_group_id: '1',
          route: 'offices/view',
          is_permission: false,
        },
        {
          id: 25,
          user_group_id: '1',
          route: 'contact_persons/list',
          is_permission: true,
        },
        {
          id: 26,
          user_group_id: '1',
          route: 'contact_persons/add',
          is_permission: true,
        },
        {
          id: 27,
          user_group_id: '1',
          route: 'contact_persons/edit',
          is_permission: true,
        },
        {
          id: 28,
          user_group_id: '1',
          route: 'contact_persons/view',
          is_permission: true,
        },
        {
          id: 29,
          user_group_id: '1',
          route: 'locations',
          is_permission: false,
        },
        {
          id: 30,
          user_group_id: '1',
          route: 'states/list',
          is_permission: false,
        },
        {
          id: 20,
          user_group_id: '1',
          route: 'companies/view',
          is_permission: false,
        },
        {
          id: 21,
          user_group_id: '1',
          route: 'offices/list',
          is_permission: false,
        },
        {
          id: 19,
          user_group_id: '1',
          route: 'companies/edit',
          is_permission: false,
        },
        // {
        //   id: 16,
        //   user_group_id: '1',
        //   route: 'resources/view',
        //   is_permission: true,
        // },

        // {
        //   id: 17,
        //   user_group_id: '1',
        //   route: 'companies/list',
        //   is_permission: false,
        // },

        // {
        //   id: 18,
        //   user_group_id: '1',
        //   route: 'companies/add',
        //   is_permission: false,
        // },
        // {
        //   id: 4,
        //   user_group_id: '1',
        //   route: 'users/list',
        //   is_permission: true,
        // },
        // {
        //   id: 5,
        //   user_group_id: '1',
        //   route: 'users/add',
        //   is_permission: true,
        // },
        // {
        //   id: 6,
        //   user_group_id: '1',
        //   route: 'users/edit',
        //   is_permission: true,
        // },
        // {
        //   id: 7,
        //   user_group_id: '1',
        //   route: 'users/view',
        //   is_permission: true,
        // },
        // {
        //   id: 8,
        //   user_group_id: '1',
        //   route: 'user_groups/list',
        //   is_permission: true,
        // },
        // {
        //   id: 9,
        //   user_group_id: '1',
        //   route: 'user_groups/add',
        //   is_permission: true,
        // },
        // {
        //   id: 10,
        //   user_group_id: '1',
        //   route: 'user_groups/edit',
        //   is_permission: true,
        // },
        // {
        //   id: 11,
        //   user_group_id: '1',
        //   route: 'user_groups/view',
        //   is_permission: true,
        // },
        // {
        //   id: 12,
        //   user_group_id: '1',
        //   route: 'user_groups/delete',
        //   is_permission: false,
        // },
        // {
        //   id: 13,
        //   user_group_id: '1',
        //   route: 'resources/list',
        //   is_permission: true,
        // },
        // {
        //   id: 14,
        //   user_group_id: '1',
        //   route: 'resources/add',
        //   is_permission: true,
        // },
        // {
        //   id: 15,
        //   user_group_id: '1',
        //   route: 'resources/edit',
        //   is_permission: true,
        // },
      ],
    },
  });
});

module.exports = router;
