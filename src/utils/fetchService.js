import {
  API_VERSION,
  AUTHORIZATION,
  HOST,
} from '../constants/config';
import { consoleCustom } from './consoleCustom';

class FetchService {
  get _host() {
    return HOST;
  }

  get _namespace() {
    return '';
  }

  get _method() {
    return 'get';
  }

  get _headers() {
    return {
      Accept: API_VERSION,
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: AUTHORIZATION,
    };
  }

  /**
   * Опции для fetch запроса
   * @type {{method: string, headers: {Accept: string, Content-Type: string}}}
   */
  get _options() {
    return {
      method: this._method,
      headers: this._headers,
    };
  }

  /**
   * Get запрос на сервер
   * @param url
   * @param params
   * @param options
   * @returns {Promise}
   */
  get(url, params, options = {}) {
    return this.request(url, options, params);
  }

  /**
   * Post запрос на сервер
   * @param url
   * @param data
   * @param options
   * @returns {Promise}
   */
  post(url, data, options = {}) {
    let opt = {
      ...options,
      body: data,
      method: 'post',
    };
    return this.request(url, opt);
  }

  /**
   * Put запрос на сервер
   * @param url
   * @param data
   * @param options
   * @returns {Promise}
   */
  put(url, data, options = {}) {
    let opt = {
      ...options,
      body: data,
      method: 'put',
    };
    return this.request(url, opt);
  }

  /**
   * Delete запрос на сервер
   * @param url
   * @param options
   * @returns {Promise}
   */
  ['delete'](url, options = {}) {
    let opt = {
      ...options,
      method: 'delete',
    };
    return this.request(url, opt);
  }

  request(url, options, params = {}) {
    const baseUrl = this._getBaseUrl(url);
    const q = this.objectToQuery(params);
    const query = (q === '') ? '' : `?${q}`;
    const requestUrl = `${baseUrl}${query}`;
    const opt = {
      ...this._options,
      ...options,
    };
    return this._fetch(requestUrl, opt);
  }

  /**
   * Построение базового url
   * Если url начинается в ./<url> или без слеша <url>, то это относительный путь и итоговый url
   * будет `this._host/this._namespace/<url>`
   * Если url начинается в /<url>, то это абсолютный путь и итоговый url будет
   * `this._host/<url>`
   * Если url начинается в http://<url>, то это абсолютный путь и итоговый url не изменится
   * http://<url>
   * @param url
   * @returns {*}
   */
  _getBaseUrl(url) {
    if (url) {
      if (/^\/\//.test(url) || /http(s)?:\/\//.test(url)) {
        return url;
      } else if (url.charAt(0) === '/') {
        return `${this._host}${url}`;
      } else if (url.charAt(0) === '.' && url.charAt(1) === '/') {
        return `${this._host}${this._namespace}${url.slice(1)}`;
      } else if (url.charAt(0) !== '.' && url.charAt(0) !== '/') {
        return `${this._host}${this._namespace}/${url}`;
      } else {
        return url;
      }
    }
  }

  /**
   * Преобразование объекта в параметры url.
   * @example
   * Например
   * let params = {
   *    limit: '50',
   *    page: '0',
   * };
   * objectToQuery(options); // Output: "limit=50&page=0"
   * @param {object} params - объект, который нужно преобразовать в параметры url
   * @returns {string|*} - Строка с url параметрами (Например: "limit=50&page=0")
   */

  objectToQuery(params, encode = false) {
    var prefix, s, add, name, r20, output;
    s = [];
    r20 = /%20/g;
    add = function (key, value) {
      // If value is a function, invoke it and return its value
      value = (typeof value == 'function') ? value() : (value == null ? '' : value);
      s[s.length] = encode
        ? encodeURIComponent(key) + '=' + encodeURIComponent(value)
        : `${key}=${value}`;
    };

    if (params instanceof Array) {
      for (name in params) {
        add(name, params[name]);
      }
    } else {
      for (prefix in params) {
        this._buildParams(prefix, params[prefix], add);
      }
    }

    output = s.join('&').replace(r20, '+');
    return output;
  }

  _buildParams(prefix, obj, add) {
    var name, i, l, rbracket;
    rbracket = /\[\]$/;
    if (obj instanceof Array) {
      for (i = 0, l = obj.length; i < l; i++) {
        if (rbracket.test(prefix)) {
          add(prefix, obj[i]);
        } else {
          this._buildParams(prefix + '[' + (typeof obj[i] === 'object' ? i : '') + ']', obj[i], add);
        }
      }
    } else if (typeof obj == 'object') {
      // Serialize object item.
      for (name in obj) {
        this._buildParams(prefix + '[' + name + ']', obj[name], add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  }

  _fetch(url, options = {}) {
    if (url === undefined) {
      throw new Error('The "url" can not be a "undefined"');
    }

    try {
      if (options.body) {
        if (typeof options.body !== 'string') {
          options.body = JSON.stringify(options.body);
        }
      }
    }

    catch (e) {
      consoleCustom.error(e);
    }

    return fetch(url, options)
      .then(
        (response) => {
          if (response.status >= 200 && response.status < 300) {
            if (response.status === 204) {
              //No content
              return response.text();
            } else {
              let contentType = response.headers.get('Content-Type');
              if (contentType !== null
                && contentType.indexOf('json') >= 0) {
                return response.json();
              } else {
                return response.text();
              }
            }
          } else {
            return response.json().then(result => Promise.reject(result));
          }
        },
      )
      .then(json => Promise.resolve(json))
      .catch((error) => {
        let err = '';
        if (error.hasOwnProperty('message')) {
          err = error.message;
        } else if (error.hasOwnProperty('error')) {
          err = error.error;
        }

        return Promise.reject(err);
      });
  }
}

const fetchService = new FetchService();
export default fetchService;
