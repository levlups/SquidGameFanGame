var c=null
console.log('were musicians!!')
global.sounds={}
global.realSounds={}
export function initSound(noa){
	BABYLON.Engine.audioEngine.setGlobalVolume(0.1);
	//sounds['blop']=
	var scene=noa.rendering.getScene()
	sounds['blop']=new BABYLON.Sound("blop", "./texPack/"+funpack+"/audio/blop.wav", scene,null)
	sounds['swim1']=new BABYLON.Sound("swim",  "./texPack/"+funpack+"/audio/water.ogg",scene, null, { loop: true, autoplay: false ,volume:0.1 })//new BABYLON.Sound("splash", "./texPack/audio/splash.ogg", scene)

	sounds['splash']=new BABYLON.Sound("ambientWind",  "./texPack/"+funpack+"/audio/splash.ogg",scene, null, { loop: false, autoplay: false,volume:0.05 })//new BABYLON.Sound("splash", "./texPack/audio/splash.ogg", scene)

	//sounds['splash1']=new BABYLON.Sound("splash1", "./texPack/audio/splash1.ogg", scene)
	//sounds['splash2']=new BABYLON.Sound("splash2", "./texPack/audio/splash2.ogg", scene)

	

	
}
export function playsound(sound, volume) {

	sounds[sound].volume=0.5
c=sounds[sound]
c.play()
console.log('played sound:'+sound)

}