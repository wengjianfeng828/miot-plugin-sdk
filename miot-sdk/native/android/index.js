import{NativeModules}from"react-native";const LocalCache={currentDevice:{},bluetoothDevices:new Map,clear:e=>{LocalCache.currentDevice={},LocalCache.bluetoothDevices=new Map}},{MIOTPackage:MIOTPackage,MIOTDevice:MIOTDevice,MIOTService:MIOTService,MIOTHost:MIOTHost,MHMapSearch:MHMapSearch,MIOTFile:MIOTFile,MIOTBluetooth:MIOTBluetooth,MIOTAudio:MIOTAudio,MIOTXimalaya:MIOTXimalaya,MIOTSpec:MIOTSpec,HmPaceScalesModule:HmPaceScalesModule,TJInfra:TJInfra,MHRoom:MHRoom,ClassicBluetooth:ClassicBluetooth,KooKong:KooKong}=NativeModules,nativeCall=(e,a,o)=>{MIOTService.callSmartHomeAPI(e,"string"==typeof a?a:JSON.stringify(a),(e,a,M)=>{if(e)try{a=JSON.parse(a),o(e,a)}catch(a){o(e,{})}else o(e,{code:a,msg:M,message:M})})},LanguageNameMap={zh:["zh","zh_CN"],zh_tw:"zh_TW",zh_hk:"zh_HK",zh_bo:/bo($|_)/,en:/^en($|_)/,es:/^es($|_)/,ko:/^ko($|_)/,ru:/^ru($|_)/,it:/^it($|_)/,fr:/^fr($|_)/,de:/^de($|_)/,id:/(^|_)id($|_)/,pl:/^pl($|_)/,vi:/^vi($|_)/,ja:/^ja($|_)/,th:/^th($|_)/,pt:/^pt($|_)/,nl:/^nl($|_)/,ar:/^ar($|_)/,tr:/^tr($|_)/};export default{MIOTPackage:MIOTPackage,MIOTDevice:MIOTDevice,MIOTService:MIOTService,MIOTRPC:{nativeCall:nativeCall},MIOTHost:MIOTHost,MHMapSearch:MHMapSearch,MIOTFile:MIOTFile,MIOTBluetooth:MIOTBluetooth,MIOTXimalaya:MIOTXimalaya,MIOTAudio:MIOTAudio,LocalCache:LocalCache,LanguageNameMap:LanguageNameMap,MIOTSpec:MIOTSpec,TJInfra:TJInfra,HmPaceScalesModule:HmPaceScalesModule,MHRoom:MHRoom,ClassicBluetooth:ClassicBluetooth,KooKong:KooKong};