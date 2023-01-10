const e=new Promise(((e,o)=>{setTimeout((()=>{e("Success! Value passed to resolve function")}),2e3)}));console.log("Before promise.then()"),e.then((e=>{console.log("onResolve call inside promise.then()"),console.log(e)}),(e=>{console.log("onReject call inside promise.then()"),console.log(e)})),console.log("After promise.then()");
//# sourceMappingURL=03-promises.cf155e0c.js.map
