let grid = document.getElementById('grid-3d')

for(var i=1;i<25;i++){
    let ele = document.createElement('img')
    ele.setAttribute('src', './3D renders/'+i+'.webp')
    grid.appendChild(ele)
}