export function animation() {

  setTimeout(function() {
    let items = document.querySelectorAll('.todo');
    items.forEach((item, index) => {
        setTimeout(() => {
          if (item.className === 'todo') {
            item.className = 'todo is-showing'
          }
        }, 150 * (index));
      }
    )
  })
}
