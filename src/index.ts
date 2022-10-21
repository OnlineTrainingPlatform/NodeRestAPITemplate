// eslint-disable-next-line no-console
export function sum(a: number, b: number) {
  return a + b;
}

import fastify from 'fastify';
import { exerciseController } from './presentation';

const server = fastify();
server.register(exerciseController);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
