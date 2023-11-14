import { match } from '../../../utils/match'
import {DocActionTypes} from "./docs.model";

/*
* @param {object} state          the reducer state
* @param {string[]} paths           the rest resource(s) of the reducer.
* @param {object} action         the redux action
* @param {string| boolean} payloadName    the object identifier to read from the response
* @returns {*}
*/
export default function docs(state, paths, action, payloadName = false) {
  if (!matchPaths(paths, action)) return state

  const { path } = action

  if (action.type.indexOf('_REQUEST') > 0)
    return { ...state, loading: true }
  if (action.type.indexOf('_FAILURE') > 0) return { ...state, loading: false }

  switch (action.type) {
    case DocActionTypes.DOCS_FETCH_SUCCESS:
    case DocActionTypes.DOCS_CREATE_SUCCESS:
    case DocActionTypes.DOCS_UPDATE_SUCCESS: {
      let payload = payloadName ? action.payload[payloadName] || action.payload : action.payload

      // la donnée n'est pas retourné par l'appel, on ne fait rien
      if (payload === null) return state

      if (payload instanceof Array) {
        return {
          type: action.type,
          path,
          loading: false,
          items: payload,
        }
      }

      if (state.items instanceof Array) {
        // Pas d'uuid permettant d'identifier l'objet, on ne fait rien
        if (payload.uuid === undefined) return state

        let found = false
        const res = state.items.map(doc => {
          if (payload.uuid && doc.uuid && doc.uuid === payload.uuid) {
            found = true
            return payload
          }
          return doc
        })
        if (found) {
          return {
            type: action.type,
            path,
            loading: false,
            items: res,
          }
        }
        return {
          type: action.type,
          path,
          loading: false,
          items: [...state.items, payload],
        }
      }
      return {
        type: action.type,
        loading: false,
        path,
        items: payload,
      }
    }

    case DocActionTypes.DOCS_DELETE_SUCCESS: {
      if (state.items instanceof Array) {
        const payload = payloadName ? action.payload[payloadName] : action.payload
        const res = state.items.filter(doc => doc.uuid !== payload.uuid)
        return {
          type: action.type,
          loading: action.loading,
          path,
          items: res,
        }
      }
      return {
        type: action.type,
        loading: action.loading,
        path,
        item: {},
      }
    }

    default:
      return state
  }
}

/**
 * Check if the path match with the action path
 *
 * @param {string[]} pathToMatch  the rest resource of the reducer
 * @param {string} path           the action path
 * @param {string} type           the action type
 * @returns {boolean}
 */
function matchPaths(pathToMatch, { path, type }) {
  for (let i = 0; i < pathToMatch.length; i++) if (matchElem(pathToMatch[i], { path, type })) return true
  return false
}

function matchElem(pathToMatch, { path = '', type = '' }) {
  return match(pathToMatch, path) && type.length > 0
}
