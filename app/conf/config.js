var config = module.exports = {};

config.init = function(path)
{ 
	var date = new Date();
	var root = path;
	var app  = root+'/app';
	var conf = {	
	debug:true,
	port :3000,
	email :'ckken@qq.com',
	site_name :'NodeJs开发社区',
	site_desc :'研究nodejs方向',
	session_secret :'KenzRSecret',
    secret:'KensSecret',
	
	Mongodb :'mongodb://ken:666666@127.0.0.1:27017/sns',
	staticUrl :'s0.node.cc',
	surl :'',//css images js url
	//purl :'http://'+staticUrl,//data images url
	purl :'',//data images url
    maxAge: 259200000,
	version:'version beta 0.5.82.2013.6.6',
	
	//path
	root : root,
	app  : app,
	static:root+'/static', 
	common:app+'/common',
	view:app+'/view/default',
	model:app+'/model',
	action:app+'/action',
	site:app+'/site',
	//global function
	time:function(){return Math.round(date.getTime()/1000)},
	now: Math.round(date.getTime()/1000)
	
	}
	
	return conf;
} 