
function startGame() {
  alert("游戏尚未开始，预计2025年6月31日上线，敬请期待！");
}
// 🟩 控制显示的 JS 逻辑（加到 script.js 末尾）
function showSection(name) {
  document.getElementById('homeSection').style.display = name === 'home' ? 'block' : 'none';
  document.getElementById('thanksSection').style.display = name === 'thanks' ? 'block' : 'none';
  document.getElementById('charactersSection').style.display = name === 'characters' ? 'block' : 'none';
}
function showSection(name) {
  document.getElementById('homeSection').style.display = name === 'home' ? 'block' : 'none';
  document.getElementById('thanksSection').style.display = name === 'thanks' ? 'block' : 'none';
  document.getElementById('charactersSection').style.display = name === 'characters' ? 'block' : 'none';
}
document.getElementById("gameContainer").style.display = "flex";
