

window.onload = function(){
	//console.log(chrome.extension);
	
};
chrome.tabs.onActivated.addListener(function(info) {
        //window.bg.onActivated(info);
		//console.log('chrome.tabs.onActivated');
    });
chrome.extension.onConnect.addListener(function(port){        
		//port.onMessage.addListener(factory);
		//console.log('chrome.extension.onConnect');
    });
	var k = 0;
chrome.tabs.onUpdated.addListener(function(id, info, tab) {
		
		if (info && info.status && (info.status.toLowerCase() === 'complete')){
        // console.log('chrome.tabs.onUpdated');
		// console.log('id - ' +id);
		// console.log('info - ');
		
		// console.log(info);
		// console.log('tab - ');
		// console.log(tab);
		//console.log(window.document);
			
			//var port = chrome.tabs.connect(id);
            
			//chrome.tabs.executeScript(id, {code:"initialization()"});
		
			//port.postMessage({method:'setTabId', data:id});
            //port.postMessage({method:'setHosts', data:window.bg.grabber_hosts});
            //port.postMessage({method:'run'});
			//chrome.browserAction.set = (k++);
			k++;
			chrome.browserAction.setBadgeText({text:k.toString()});
		}
        
    });
chrome.browserAction.onClicked.addListener(function(tab) {
		console.log(tab);	
        //window.onClicked(tab);
    });
	
function MyCallBack(data)
{
	console.log('MyCallBack');
	console.log(data);
}
function factory(obj){
    if(obj && obj.method){
        if(obj.data)
            window[obj.method](obj.data);
        else
            window[obj.method]();
    }
}

