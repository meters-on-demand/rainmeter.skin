import ky from "ky";

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

const api = ky.create({ prefixUrl: API });

export default function getSkins() {
  return api
    .post(`skins`, {
      json: { query: { previewImage: { $exists: true } } },
    })
    .json()
    .then((res) => {
      if (res.error) {
        console.warn(res.message);
        return [];
      }
      return res;
    });
}
