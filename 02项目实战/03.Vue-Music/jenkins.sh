# 2017-12-26 17:18
# 用于jenkin项目中，构建配置时"构建"环节的Execute shell,添加下面内容，$WORKSPACE为jenkins自带的环境变量
# cp /drnmp/www 需要chmod -R 777 www

cd $WORKSPACE'/02项目实战/03.Vue-Music'
docker run -v $PWD:/app drnmp_node npm install
docker run -v $PWD:/app drnmp_node npm run build
tar -zcvf music.tar.gz ./dist/
chmod +777 music.tar.gz
cp music.tar.gz /drnmp/www/
cd /drnmp/www
rm -rf music
tar -zxvf music.tar.gz
mv dist/ music
rm -f music.tar.gz
