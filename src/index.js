/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  count = 0;
  for (var j =0; j < preferences.length; j++) {
  if (j + 1 === preferences[preferences[preferences[j] - 1] - 1] && j + 1 !== preferences[j]) {
  count++;
          }
      }
  return count/3;
  };
  