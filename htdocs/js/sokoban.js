window.addEventListener('load', () => {
  console.log("Sokoban.js loaded");

  let gameTitle = document.createElement('span');
  gameTitle.textContent = 'Soboban';

  let gameHeader = document.createElement('header');
  gameHeader.className = 'card_header';

  gameHeader.appendChild(gameTitle);

  let sokobanCanvas = document.createElement('canvas');

  let sokobanBoard = document.createElement('div');
  sokobanBoard.style.gridArea = '1 / 2 / 4 / 5';

  sokobanBoard.appendChild(sokobanCanvas);

  let gameBoard = document.createElement('article');
  gameBoard.className = 'card_content';

  gameBoard.appendChild(sokobanBoard);

  let gameDesktop = document.createElement('section');
  gameDesktop.className = 'card';

  gameDesktop.appendChild(gameHeader);
  gameDesktop.appendChild(gameBoard);

  let desktop = document.querySelector('.site_body')
  desktop.appendChild(gameDesktop);

  /**
   * 滑鼠游標移動追踪
   *
   * @callback
   * @param 'mousemove' : DOM 事件名
   * @param e : DOM event 物件
   * @returns {undefined}
   */
  desktop.addEventListener('mousemove', (e) => {
    document.getElementById('cursor_x').textContent = e.clientX;
    document.getElementById('cursor_y').textContent = e.clientY;
  });
});
