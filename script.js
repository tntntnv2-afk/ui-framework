body{
  background:#0b0b0b;
  font-family:Arial;
  overflow:hidden;
}

#menu{
  position:absolute;
  top:120px;
  left:120px;
  width:420px;
  height:280px;
  background:#121212;
  border:1px solid #2c2c2c;
  border-radius:8px;
  color:white;
  transition:width .15s,height .15s;
}

#header{
  padding:10px;
  background:#1a1a1a;
  cursor:move;
  font-weight:bold;
}

#container{
  display:flex;
  height:calc(100% - 40px);
}

#tabs{
  width:120px;
  border-right:1px solid #2c2c2c;
}

.tab{
  width:100%;
  padding:10px;
  border:none;
  background:none;
  color:white;
  cursor:pointer;
}

.tab.active{
  background:#262626;
}

#content{
  flex:1;
  padding:12px;
  overflow:auto;
}

.toggle{
  display:flex;
  justify-content:space-between;
  margin-bottom:14px;
}

.sliderBox{
  margin-top:10px;
}

/* glowing resize corner */
.resize-handle{
  position:absolute;
  bottom:0;
  right:0;
  width:18px;
  height:18px;
  cursor:nwse-resize;
}

.resize-handle::after{
  content:"";
  position:absolute;
  bottom:3px;
  right:3px;
  width:10px;
  height:10px;
  border-right:2px solid #00e5ff;
  border-bottom:2px solid #00e5ff;
  filter:drop-shadow(0 0 4px #00e5ff);
}
