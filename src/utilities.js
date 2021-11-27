function getNewExpirationTime() {
    return Date.now() + 15 * 1000;
  }
  
let nextId = 0;
function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
}

export { generateId, getNewExpirationTime };