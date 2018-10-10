/*
 * @Dsc:上传打包后静态文件到七牛
 * @Author: 张为杰
 * @Date: 2018-09-25 00:46:16
*/
const qn = require('qn');
var path = require('path');

const fs = require('fs');
//const config_qn = require('../config/config').qiniu;
const config_qn= {
    accessKey:'PotqawwtSNX5bhiL7q-PsF8dIwy8Ya2k2MtdsC3j',
    secretKey:'W02kurzlYUOY8S4r2MEr54qnR2kEgKTE2Nl9TvjJ',
    bucket: 'blog-zwj',
    origin: 'x',
}

cdnurl='./dist/static'

const uploadArr = [];


let client = qn.create(config_qn);
function explorer(path) {
    console.log(path);
    return new Promise((res, rej) => {
        fs.readdir(path, function(err, files){
            //err错误 , files 文件名列表包含文件夹与文件
            if(err){
                console.log('error:\n' + err);
                rej(-1)
                return;
            }
    
            files.forEach(function(file){
    
                fs.stat(path + '/' + file, function(err, stat){
                    if(err){console.log(err); return;}
                    if(stat.isDirectory()){			
                        // 如果是文件夹遍历
                        explorer(path + '/' + file);
                    }else{
                        // 读出所有的文件
                        // 此处需要和html-webpack-plugin插件填充的打包目录配合
                        //let filename = path.split('\\').pop() + '/' + file;
                        let filename = path.split('\\').pop().slice(7)+ '/' + file;  
                        let filepath = path + '/' + file;
                        uploadArr.push(uploadFile(filename, filepath));
                        res(0);
                    }				
                });
                
            });
    
        });
    })
}

explorer(cdnurl).then(data => {
    if(data == 0 ){
        Promise.all(uploadArr).then(result => {
            console.log(`cdn_sync_done!!!${root}`);
        })
    }
})


function uploadFile(filename, filepath){
    return new Promise((res, rej) => {
        client.uploadFile(filepath, {key: filename}, function (err, result) {
            if(err){
                console.log('cdnsync_fail==>',err);
                rej(err);
            }
            console.log(`cdn_sync_succ ==>${result.url}`)
            res(result)
        })
    })
}



