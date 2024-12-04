import { rest } from 'msw';

const baseURL = 'https://chronicle-api-8dba6c70f37d.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: 'nader',
        email: '',
        first_name: '',
        last_name: '',
        profile_id: 2,
        profile_image:
          'https://res.cloudinary.com/ds8x1i3zm/image/upload/v1/media/../default_profile_mcrw02',
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${baseURL}notifications/`, (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          { id: 1, is_read: false, message: 'New notification' },
          { id: 2, is_read: true, message: 'Old notification' },
        ],
      })
    );
  }),
];
