import axios from "axios";

export default {
    methods: {
        async $api(_method, _url, data) {
            return (
                await axios({
                    method: _method, // get, post
                    url: _url, // 127.0.0.1:3000
                    data,
                    // data: , 포스트에만 쓰임
                }).catch((e) => {
                    console.log(e);
                })
            ).data;
        },
        $base64(file) {
            return new Promise((resolve) => {
                var a = new FileReader();
                a.onload = (e) => resolve(e.target.result);
                a.readAsDataURL(file);
            });
        },
    },
};