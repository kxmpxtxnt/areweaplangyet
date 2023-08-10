import * as aplang from "areweaplangyet-wasm";

const REPO = "ichor-dev/ichor";
const START_TIME = 1673049600000.0;

function getPhrase(days) {
  if (days == 0) {
    return "Bukkit is making the world worse, but ichor is still fighting to make the world a better place";
  } else {
    return "School doesn't count as excuse (yeah maybe it does BUT WHO CARES)";
  }
}

async function renderProgress() {
  const res = await aplang.fetch_latest_commit(REPO, START_TIME);

  const commit = `https://github.com/${REPO}/commit/${res.sha}`;
  const phrase = getPhrase(res.days);

  const fmt = `${res.daysTotal} days without Ichor, ${res.days} days since the last \
    <a href="${commit}">commit</a>. ${phrase}!`;
  document.getElementById("ichor-info").innerHTML = fmt;
}

renderProgress();
