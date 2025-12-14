async function loadJSON(path) {
  const res = await fetch(path);
  return res.json();
}

async function loadMod() {
  const campaign = await loadJSON("mods/2025-tt/campaign.json");
  const candidates = await loadJSON("mods/2025-tt/candidates.json");
  const seats = await loadJSON("mods/2025-tt/seats.json");
  const questions = await loadJSON("mods/2025-tt/questions.json");

  window.MOD = { campaign, candidates, seats, questions };
}

loadMod();
