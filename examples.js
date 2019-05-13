let promise = null;
let st = null;
function onInput(){

    if(promise){
        promise.cancel();
        promise = null;
    }

    if(st){
        clearTimeout(st);
        st = null;
    }
    
    st = setTimeout(funciton(){
        const words = this.value;
        promise = fetchResults(words);
    }, 400)
}