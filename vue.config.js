const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/account',
  devServer: {
    proxy: {
      '/api/user/profile': {
        target: 'http://arch.homework',
        changeOrigin: true,
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJiSjNtRUJ3QUVzdVlHVm5jRjhoanREOERkMVUwaTlXWXotUmN0d3hzTjFVIn0.eyJleHAiOjE2Nzg2NDkyNDAsImlhdCI6MTY3ODY0ODk0MCwiYXV0aF90aW1lIjoxNjc4NjQ3MjU0LCJqdGkiOiIxMTI3MDBlOC0wMWVmLTRkNmUtYTYxZS0zZDQxZjE0MzUzZTAiLCJpc3MiOiJodHRwOi8va2V5Y2xvYWsuYXJjaC5ob21ld29yay9yZWFsbXMvb3R1cyIsImF1ZCI6Im90dXMtc2VydmljZS11c2VyIiwic3ViIjoiNTMxODVlNTQtMjg3Ny00MmE1LTgzYjMtNTE5NTMxOWZlNzliIiwidHlwIjoiSUQiLCJhenAiOiJvdHVzLXNlcnZpY2UtdXNlciIsIm5vbmNlIjoibDdKOGNUQUFYbjg5eTN1LVdnUl9hYUQ5MUNRQlQyT0xqWEphYkNsa3BobyIsInNlc3Npb25fc3RhdGUiOiIxMjExMDU5OS04NWNjLTRjMDgtYWUwZi00Y2M3YWI2Njc0MWMiLCJhdF9oYXNoIjoiZ2NsVXZQNkZNRDUxZGJNaUdDRERUUSIsImFjciI6IjAiLCJzaWQiOiIxMjExMDU5OS04NWNjLTRjMDgtYWUwZi00Y2M3YWI2Njc0MWMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IkVkZGllIFN0YXJsaW5nIiwiZ3JvdXBzIjpbXSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZWRkaWUiLCJnaXZlbl9uYW1lIjoiRWRkaWUiLCJmYW1pbHlfbmFtZSI6IlN0YXJsaW5nIiwiZW1haWwiOiJlZGRpZUB5YS5ydSJ9.PwJsVKToHrZVGNH6a2cwG_v_MdYM3RFUnIM2vMs2qKdzKFQRC3konQI5F0ycg9DVnGLHnOGm2O37TRwAiRSyePOIt_h-Hr7DMjNaJonG3mmFaSDaDg7DShxRo3HEUby-PQAroqHrKkkStlw3DNMn9m1Fm2GVRsnGS7tsp44jFnjL5XUwlMPXO5nl40pR3pV0QxyG7Vo-52kz0M55RRPv0S0SmgT0auIhWlE9d4p2RQGQ7P_RnBZzdaoSyT1ALhdJVGyQDrczKdm4h9Vvl6YJ9gZJCuUORCoo1RZPvFxitL6MNo9mCYwFybY4f93o4ByRz1aqg9ERv00hjiLZNacIsQ',
        }
      },
    },
  },
})
