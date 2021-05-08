import './landing-page.scss'

const headerHeight = document.querySelector('.header').offsetHeight
const pageSizeWithoutScroll = document.querySelector('.landing-page__main')
if (pageSizeWithoutScroll) {
  pageSizeWithoutScroll.style.height = window.innerHeight - headerHeight + 'px'
}

