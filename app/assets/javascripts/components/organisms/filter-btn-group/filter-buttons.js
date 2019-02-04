// 'use strict';
//
// var filterButtonGroup = document.querySelector('.org-63a1bc7e-5093-4bf0-8d2e-fcf5bfe32aca');
// //
// if (filterButtonGroup) {
//     var filterButtons = filterButtonGroup.querySelectorAll('a');
//     //
//     //   if (filterButtons.length > 0) {
//     //     // const filterStuff = (filter, filterItems) => {
//     //     //   Array.prototype.slice.call(filterItems).forEach((item) => {
//     //     //     const showItem =
//     //     //       item.dataset.filter
//     //     //         .toLowerCase()
//     //     //         .indexOf(request('filter').toLowerCase()) > -1
//     //     //
//     //     //     if (showItem) {
//     //     //       item.classList.remove('hide')
//     //     //     } else {
//     //     //       item.classList.add('hide')
//     //     //     }
//     //     //   })
//     //     // }
//     //
//     //     // const filterItems = document.querySelectorAll('[data-filter]')
//     //     // let currentActiveBtn = filterButtons[0]
//     //     // if (request('filter') !== undefined) {
//     //     //   Array.prototype.slice.call(filterButtons).forEach((el) => {
//     //     //     if (el.href.indexOf(window.location.hash) > -1) {
//     //     //       currentActiveBtn = el
//     //     //     }
//     //     //   })
//     //     // } else {
//     //     //   window.location.href = filterButtons[0].href
//     //     // }
//     //
//     //     // currentActiveBtn.classList.add('active')
//     //     // filterStuff(request('filter'), filterItems)
//     //     //
//     //     // window.onhashchange = () => {
//     //     //   filterStuff(request('filter'), filterItems)
//     //     // }
//     //     // filterButtonGroup.querySelector('.show-more').onclick = (el) => {
//     //     //   filterButtonGroup.classList.toggle('show-all-filters')
//     //     // }
//     //
//     Array.prototype.slice.call(filterButtons).forEach(function (el) {
//         el.onclick = function (ev) {
//             // Array.prototype.slice.call(filterButtons).forEach((el) => {
//             //   el.classList.remove('active')
//             // })
//             ev.target.classList.toggle('active');
//             if (ev.target.classList.contains('tableOfContent')) {
//                 ev.target.classList.toggle('active');
//             }
//         };
//     });
//     //   }
// }