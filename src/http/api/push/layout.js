import axios from '../../axios';

export default function (data) {
    return axios({
        url: '/users/login',
        method: 'post',
        headers: {
            'Content-Type': 'application/json' //设置请求头请求格式为json
        },
        data,
    })
}

