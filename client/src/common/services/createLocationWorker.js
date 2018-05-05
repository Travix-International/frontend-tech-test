import { matchPath } from 'react-router'

export function createLocationWorker(handlers) {
  return function worker(action) {
    const { pathname } = action.payload
    const handler = handlers[pathname]

    if (handler) {
      return handler(action)
    }

    const urlsWithHandler = Object.keys(handlers)

    const partialHandledUrls = urlsWithHandler.find(url => {
      const match = matchPath(pathname, { path: url })
      return !!match && match.isExact
    })

    if (partialHandledUrls) {
      return handlers[partialHandledUrls](action)
    }
  }
}
