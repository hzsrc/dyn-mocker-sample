module.exports = {
    disabled: 0,
    status: 200,
    headers: function (query, post, header, request){
      var r = {}
      if(eval(this.checkFn)(post, header)) {
        r['set-cookie'] = 'a=b; Max-Age=30000; path=/';
      }
      else{
        r['set-cookie'] = 'a=b; Max-Age=0; path=/';
      }
      return r;
    },
    body: function (query, post, header, request){
      return  {
        status: eval(this.checkFn)(post, header) ? 0 : 1,
        data: '', 
        msg: 'Invalid account or password!'
      }
    },
    checkFn: function (post, header){
      if( post.password == '123' || post.password == '' ) return true;
    }
}
