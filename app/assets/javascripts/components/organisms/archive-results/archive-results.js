const archiveResults = document.querySelector(
  '.org-e5f66ef4-e67b-4574-807a-19679f5f220e'
)

if (archiveResults) {
  if (request('filter')) {
    const results = archiveResults.querySelectorAll('[data-filter]')
    Array.prototype.slice.call(results).forEach((node) => {
      if (node.dataset.filter !== request('filter')) {
        node.classList.add('hide')
      }
    })
  }
}
