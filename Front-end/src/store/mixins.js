import axios from "axios";

export default {
  methods: {
    async $api(_method, _url, _data) {
      return (
        await axios({
          method: _method, // get, post
          url: _url, // 127.0.0.1:3000
          data: _data,
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
