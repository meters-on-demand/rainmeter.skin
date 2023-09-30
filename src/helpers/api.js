const API = import.meta.env.VITE_API;

export async function request(url, { method = "GET" } = {}) {
  const opts = {
    headers: { "Content-Type": "application/json" },
    method,
  };

  try {
    const res = await fetch(url, opts);
    const json = await res.json();
    if (json?.error) throw json?.message || `Error without message`;
    return json;
  } catch (error) {
    console.error(error);
    alert(error);
    return null;
  }
}

export default function getSkins() {
  return request(API);
}
