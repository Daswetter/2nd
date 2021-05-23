const header = document.querySelector('.header')
if (header){
  const headerHeight = header.offsetHeight
  const pageSizeWithoutScroll = document.querySelector('.landing-page__main')
  if (pageSizeWithoutScroll) {
    pageSizeWithoutScroll.style.height = window.innerHeight - headerHeight + 'px'
  }
}


