console.log("哔哩哔哩多倍速播放插件\n作者：Boy-yehuahua")
let ul = null;
let timer = setInterval(() => {
  if (ul) {
    clearInterval(timer)
    for (let i = 2.25; i <= 4; i += 0.25) {
      const li = document.createElement("li")
      li.className = "bpx-player-ctrl-playbackrate-menu-item"
      li.innerHTML = (i.toString().length == 1 ? i.toFixed(1) : i) + "x";
      li.setAttribute("data-value", i + "")
      ul.prepend(li)
    }
    return
  }
  ul = document.querySelector(".bpx-player-ctrl-playbackrate-menu");
}, 16);