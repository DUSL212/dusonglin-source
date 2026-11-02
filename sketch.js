// 创意代码 日落重叠圆效果 380*570
function setup() {
  createCanvas(380, 570);
  background("#F7F3ED");
  noStroke();

  // 分层背景色带
  for(let y = 0; y < height; y += 90){
    let r = map(y,0,height,130,210);
    let g = map(y,0,height,150,90);
    let b = map(y,0,height,170,120);
    fill(r,g,b);
    rect(0, y, width, 80);
  }

  // 日落重叠圆形：y位置决定透明度，下方圆颜色更深
  for(let i = 0; i < 18; i++){
    let x = random(40, width - 40);
    let y = random(height*0.3, height*0.85);
    let size = random(40, 110);

    // 关键：y越大（越靠画面下方）alpha透明度越大，颜色越深
    let alphaVal = map(y, height*0.3, height*0.85, 40, 90);
    fill("#D83020", alphaVal);
    ellipse(x, y, size, size);
  }

}

function draw() {

}

// 按s保存png图片
function keyPressed(){
  if(key === 's'){
    save("几何构成_日落深浅变化.png");
  }
}