console.log("哔哩哔哩多倍速播放插件\n作者：Boy-yehuahua")
let ul = null;
let timer = setInterval(() => {
  if (ul) {
    clearInterval(timer)
    for (let i = 2.25; i <= 4; i += 0.25) {
      const li = document.createElement("li")
      if (/bangumi/.test(location.href)) {
        li.className = "squirtle-select-item"
      } else {
        li.className = "bpx-player-ctrl-playbackrate-menu-item"
      }
      li.innerHTML = (i.toString().length == 1 ? i.toFixed(1) : i) + "x";
      li.setAttribute("data-value", (i.toString().length == 1 ? i.toFixed(1) : i))
      li.addEventListener("click", function () {
        document.querySelectorAll("video")[0] && (document.querySelectorAll("video")[0].playbackRate = this.dataset.value)
        document.querySelectorAll("video")[1] && (document.querySelectorAll("video")[1].playbackRate = this.dataset.value)
      })
      ul.prepend(li)
    }
    return
  }
  ul = document.querySelector(".bpx-player-ctrl-playbackrate-menu") || document.querySelector(".squirtle-select-list.squirtle-speed-select-list.squirtle-dialog");
}, 16);