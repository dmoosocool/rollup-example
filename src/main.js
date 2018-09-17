class h5camera {
  // 初始化生成页面dom.
  constructor(){
    this.pravateKey = "h5camera-" + (+new Date),
    this.dom = `<div id="${this.pravateKey}"></div>`;
  }
};

let camera = new h5camera();