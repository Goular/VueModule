# 2017-12-26 17:18
# 用于jenkin项目中，构建配置时"构建"环节的Execute shell,添加下面内容，$WORKSPACE为jenkins自带的环境变量


cd $WORKSPACE'/02项目实战/02-ele外卖实战'
docker run -v $PWD:/app drnmp_node npm install
docker run -v $PWD:/app drnmp_node npm run build
tar -zcvf eleme.tar.gz ./dist/
