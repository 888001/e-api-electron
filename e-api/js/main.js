window.onload = function(){
    let apiWeb = document.getElementById('e-api-web')
    let apiChrome = document.getElementById('e-api-chrome')
    apiWeb.onclick = function(){
        window.open('http://nodebook-web.gitee.io/e-api')
    }
    apiChrome.onclick = function(){
        window.open(chrome.runtime.getURL('e-api/index.html'))
    }
}