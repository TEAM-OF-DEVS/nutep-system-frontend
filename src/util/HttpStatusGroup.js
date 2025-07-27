export default class HttpStatusGroup {
    static SUCCESS = ["200", "201", "204"];
    static REDIRECTION = ["301", "302", "304"];
    static BAD_REQUEST = ["400"];
    static UNAUTHORIZED = ["401"];
    static FORBIDDEN = ["403"];
    static NOT_FOUND = ["404"];
    static CONFLICT = ["409"];
    static SERVER_ERROR = ["500", "502", "503", "504"];
  
    static isSuccess(status) {
      return this.SUCCESS.includes(String(status));
    }
  
    static isClientError(status) {
      return this.BAD_REQUEST.concat(this.UNAUTHORIZED, this.FORBIDDEN, this.NOT_FOUND, this.CONFLICT)
        .includes(String(status));
    }
  
    static isServerError(status) {
      return this.SERVER_ERROR.includes(String(status));
    }
  
    static getGroup(status) {
      const code = String(status);
      if (this.isSuccess(code)) return "success";
      if (this.BAD_REQUEST.includes(code)) return "bad_request";
      if (this.UNAUTHORIZED.includes(code)) return "unauthorized";
      if (this.FORBIDDEN.includes(code)) return "forbidden";
      if (this.NOT_FOUND.includes(code)) return "not_found";
      if (this.CONFLICT.includes(code)) return "conflict";
      if (this.isServerError(code)) return "server_error";
      if (this.REDIRECTION.includes(code)) return "redirect";
      return "unknown";
    }
  }
  