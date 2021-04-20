const axios = requiere('axios');
axios({
    url:'http://localhost:5000/',
    method: 'get',
    data: {
        foo: 'test',
    }
})