/*jshint esversion:6*/
/*experimental:[asyncawait]*/
/**
 * When using async/await the function should be wrapped in a try catch clause
 * Ex
 * async someMethod(){
 *  try {
 *    let response=await fetch(*someUrl*);
 *    ...
 *  }
 *  catch(e){
 *    console.log('there was an error' + e);
 *  }
 * }
 * 
 * www.syntaxsucces.com/viewarticle/.async-await-error-handling
 */
class EasyHTTP {
  //make an http GET Request
  async get(url){
    const response=await fetch(url);
    const resData=await response.json();
    return resData;
  }
  
  //Make an fHTTP POST Request
  async post(url, data){
    const response=await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData=await response.json();
    return resData;
  }
  
  //Make an HTTP PUT Request
  async put(url, data){
    const response=await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const resData=await response.json();
    return resData;
  }
  
  //Make an HTTP DELETE Request
  async delete(url){
    const response=await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData=await 'Resource deleted';
    return resData;
  }
}