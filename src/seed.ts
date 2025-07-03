import { getPayload } from 'payload';
import config from './payload.config';

const run = async () => {
  const payload = await getPayload({ config });

  await payload.create({
    collection: 'users',
    data: {
      email: 'test@gmail.com',
      password: 'password123',
      role: 'admin',
    },
  });

  console.log('Seed data created successfully!');
  process.exit();
};

run();
