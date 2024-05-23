function changeKb(val) {
  const size = document.getElementById("size");
  size.textContent = `(${val})KB`;
  const download = document.getElementById("download");
  download.textContent = `Download file (${val}KB)`;
}

function downloadPlainFileKb(kb) {
  let blob = new Blob([new Uint8Array(kb * 1024)], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `file ${kb} KB.txt`;
  a.click();
  URL.revokeObjectURL(a.href);
  blob = null;
}

function getSliderVal() {
  const sliderValId = document.getElementById("slider")
  return sliderValId.value;
}