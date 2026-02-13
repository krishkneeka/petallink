const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";

export function generateSlug(length = 8) {
  let slug = "";
  const array = new Uint8Array(length);
  // Use crypto if available (server-side or modern browsers), else Math.random
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
      slug += CHARS[array[i] % CHARS.length];
    }
  } else {
    for (let i = 0; i < length; i++) {
      slug += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
  }
  return slug;
}
