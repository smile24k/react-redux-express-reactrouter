var express = require('express');
var router = express.Router();
var path = require("path");
var request = require('request');
router.get('/get/moive/list', (req,res,next) => {
	request("http://api.douban.com/v2/movie/top250",(error,response,body) => {
		if(error){
			res.json({result:error});
		}else{
			res.json({result:JSON.parse(body),status:200,success:true});
		}
	})
})
module.exports = router;