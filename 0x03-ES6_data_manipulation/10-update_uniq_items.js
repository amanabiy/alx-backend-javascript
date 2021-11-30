export default function updateUniqueItems(map) {
  if (map.constructor.name !== 'Map') {
    throw new Error('Cannot process');
  }
  for (const i of map) {
    try {
      if (i[1] === 1) map.set(i[0], 100);
    } catch (err) {
      throw new Error('Cannot process');
    }
  }
  return map;
}
