import superAgent from 'superagent'
import Promise from 'bluebird'
import _ from 'lodash'
import config from './../config'
import { camelizeKeys } from 'humps'

export const CALL_API = Symbol('CALL_API')
export const CHAIN_API = Symbol('CHAIN_API')

export default ({ dispatch, getState }) => next => action => {
  if (action[CALL_API]) {
    return dispatch({
      [CHAIN_API]: [
        ()=> action
      ]
    })
  }

  let deferred = Promise.defer()

  if (! action[CHAIN_API]) {
    return next(action)
  }

  let promiseCreators = action[CHAIN_API].map((apiActionCreator)=> {
    return createRequestPromise(apiActionCreator, next, getState, dispatch)
  })

  let overall = promiseCreators.reduce((promise, creator)=> {
    return promise.then((body)=> {
      return creator(body)
    })
  }, Promise.resolve())

  overall.finally(()=> {
    deferred.resolve()
  }).catch(()=> {})

  return deferred.promise
}

function actionWith (action, toMerge) {
  let ret = Object.assign({}, action, toMerge)
  delete ret[CALL_API]
  return ret
}

function createRequestPromise (apiActionCreator, next, getState, dispatch) {
  return (prevBody)=> {
    let apiAction = apiActionCreator(prevBody)
    let deferred = Promise.defer()
    let params = extractParams(apiAction[CALL_API])
    let header = params.header || { "api-key-oi" : "user-unlogged" }

    superAgent[params.method](params.url)
      .send(params.body)
      .query(params.query)
      .set(header)
      .end((err, res)=> {
        if (err) {
          if ( params.errorType ) {
            dispatch(actionWith(apiAction, {
              type: params.errorType,
              message: res.body.error,
              status: res.body.status,
              statusCode: res.statusCode,
              statusText: res.statusText
            }))
          }

          if (_.isFunction(params.afterError)) {
            params.afterError({ getState })
          }
          deferred.reject()
        } else {
          let resBody = camelizeKeys(res.body)
          dispatch(actionWith(apiAction, {
            type: params.successType,
            response: resBody,
            status: resBody.status
          }))

          if (_.isFunction(params.afterSuccess)) {
            params.afterSuccess({ getState })
          }
          deferred.resolve(resBody)
        }
      })

    return deferred.promise
  }
}

function extractParams (callApi) {
  let {
    method,
    attach,
    type,
    path,
    query,
    body,
    header,
    successType,
    errorType,
    afterSuccess,
    afterError
  } = callApi
  let url = ''
  
  if ( type === 'internal' ){
    url = `${config.API_BASE_URL_INTERNAL}${path}`
  }else{
    url = `${config.API_BASE_URL_EXTERNAL}${path}`
  } 

  return {
    method,
    attach,
    url,
    query,
    body,
    header,
    successType,
    errorType,
    afterSuccess,
    afterError
  }
}
