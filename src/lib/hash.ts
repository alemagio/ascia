import { ObjectId } from 'bson';
import { default as objectHash } from 'object-hash';

export function hash(query: any) {
  return objectHash(query, {
    algorithm: 'sha1',
    replacer: (value: any) => {
      // object-hash doesn't support ObjectId types out of the box
      if (value instanceof ObjectId) {
        return value.toString();
      }
      return value;
    },
  });
}
