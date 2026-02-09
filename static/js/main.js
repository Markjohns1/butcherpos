// Shared helpers for forms (minimal on purpose)

function formatMoney(value) {
  const num = Number(value);
  if (Number.isNaN(num)) return "0.00";
  return num.toFixed(2);
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { "Accept": "application/json" } });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return await res.json();
}

window.__butcher = { formatMoney, fetchJson };

