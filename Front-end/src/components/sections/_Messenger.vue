<template>
    <div id="container">

        <main>
            <header>
                <div>
                    <h2>1:1 문의 서비스</h2>
                    <h3>2021-11-08</h3>
                </div>
            </header>
            <ul id="chat">

                <li class="you">
                    <div class="entete">
                        <span class="status orange"></span>
                        <h2>서베이존</h2>
                        <h3>10:12AM, Today</h3>
                    </div>
                    <div class="triangle"></div>
                    <div class="message">
                        안녕하세요! 서베이존입니다. <br> 문의하실 사항을 남겨주시면 답변해드리겠습니다!
                    </div>
                </li>

                <li class="me">
                    <div class="entete">
                        <h3>10:12AM, Today</h3>
                        <!-- <h2></h2> -->
                        <span class="status blue"></span>
                    </div>
                    <div class="triangle"></div>
                    <div class="message">
                        설문조사를 완료했는데 토큰이 들어오지않았습니다.
                    </div>
                </li>

                <li class="you">
                    <div class="entete">
                        <span class="status orange"></span>
                        <h2>서베이존</h2>
                        <h3>10:12AM, Today</h3>
                    </div>
                    <div class="triangle"></div>
                    <div class="message">
                        보상수령 내역 확인 후 다시 안내해드리겠습니다. <br> 잠시 기다려주시면 감사하겠습니다.
                    </div>
                </li>

            </ul>
            <footer>
        
                <textarea placeholder="문의하실 사항을 적어주세요."></textarea>
                        <!-- <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt=""> -->
                <a href="#">보내기</a>
            </footer>
        </main>
        <aside>
            <!-- <header>
                <h2>일자별로 검색</h2>
                <input type="text" placeholder="search">

            </header> -->
            <ul >
                <li>
                    <div class="mx-3">
                        <h2>2021-11-08</h2>
                        <h3>
                            <span class="status orange"></span>
                            안녕하세요! 서베이존입니다. 문의....
                        </h3>
                    </div>
                </li>
                <li>
                    <div class="mx-3">
                        <h2>2021-11-07</h2>
                        <h3>
                            <span class="status orange"></span>
                            안녕하세요! 서베이존입니다. 문의....
                        </h3>
                    </div>
                </li>
            </ul>
        </aside>
    </div>
</template>
<script>
    export default {
        name: '',
        components: {},
        data() {
            return {
                sampleData: ''
            }
        },
        created() {},
        mounted() {},
        updated() {},
        unmounted() {},
        methods: {}
    }
</script>
<style scoped>
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #d1d1d1;
        font-family: Arial;
    }

    #container {
        width: 750px;
        height: 800px;
        background: #f7f8f9;
        margin: 0 auto;
        font-size: 0;
        border-radius: 5px;
        overflow: hidden;
    }

    aside {
        width: 260px;
        height: 800px;
        background-color: #313131;
        display: inline-block;
        font-size: 15px;
        vertical-align: top;
    }

    main {
        width: 490px;
        height: 800px;
        display: inline-block;
        font-size: 15px;
        vertical-align: top;
    }

    aside header {
        padding: 30px 20px;
    }

    aside input {
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 0 50px 0 20px;
        background-color: #313131;
        border: none;
        border-radius: 3px;
        color: #fff;
        background-repeat: no-repeat;
        background-position: 170px;
        background-size: 40px;
    }

    aside input::placeholder {
        color: #fff;
    }

    aside ul {
        padding-left: 0;
        margin: 0;
        list-style-type: none;
        /* overflow-y: scroll; */
        height: 690px;
    }

    aside li {
        padding: 10px 0;
    }

    aside li:hover {
        background-color: #555555;
    }

    h2,
    h3 {
        margin: 0;
    }

    aside li img {
        border-radius: 50%;
        margin-left: 20px;
        margin-right: 8px;
    }

    aside li div {
        display: inline-block;
        vertical-align: top;
        margin-top: 12px;
    }

    aside li h2 {
        font-size: 14px;
        color: #fff;
        font-weight: normal;
        margin-bottom: 5px;
    }

    aside li h3 {
        font-size: 12px;
        color: #7e818a;
        font-weight: normal;
    }

    .status {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 7px;
    }

    .green {
        background-color: #58b666;
    }

    .orange {
        background-color: #F0542D;
    }

    .blue {
        background-color: #313131;
        margin-right: 0;
        margin-left: 7px;
    }

    main header {
        height: 110px;
        padding: 30px 20px 30px 40px;
    }

    main header>* {
        display: inline-block;
        vertical-align: top;
    }

    main header img:first-child {
        border-radius: 50%;
    }

    main header img:last-child {
        width: 24px;
        margin-top: 8px;
    }

    main header div {
        margin-left: 10px;
        margin-right: 145px;
    }

    main header h2 {
        font-size: 16px;
        margin-bottom: 5px;
    }

    main header h3 {
        font-size: 14px;
        font-weight: normal;
        color: #7e818a;
    }

    #chat {
        padding-left: 0;
        margin: 0;
        list-style-type: none;
        /* overflow-y: scroll; */
        height: 535px;
        border-top: 2px solid #fff;
        border-bottom: 2px solid #fff;
    }

    #chat li {
        padding: 10px 30px;
    }

    #chat h2,
    #chat h3 {
        display: inline-block;
        font-size: 13px;
        font-weight: normal;
    }

    #chat h3 {
        color: #bbb;
    }

    #chat .entete {
        margin-bottom: 5px;
    }

    #chat .message {
        padding: 20px;
        color: #fff;
        line-height: 25px;
        max-width: 90%;
        display: inline-block;
        text-align: left;
        border-radius: 5px;
    }

    #chat .me {
        text-align: right;
    }

    #chat .you .message {
        background-color: #F0542D;
    }

    #chat .me .message {
        background-color: #313131;
    }

    #chat .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
    }

    #chat .you .triangle {
        border-color: transparent transparent #F0542D transparent;
        margin-left: 15px;
    }

    #chat .me .triangle {
        border-color: transparent transparent #313131 transparent;
        margin-left: 375px;
    }

    main footer {
        height: 155px;
        padding: 20px 30px 10px 20px;
    }

    main footer textarea {
        resize: none;
        border: none;
        display: block;
        width: 100%;
        height: 80px;
        border-radius: 3px;
        padding: 20px;
        font-size: 18px;
        margin-bottom: 13px;
    }

    main footer textarea::placeholder {
        color: rgb(100, 100, 100);
    }

    main footer img {
        height: 30px;
        cursor: pointer;
    }

    main footer a {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        color: #F0542D;
        vertical-align: top;
        margin-left: 333px;
        margin-top: 5px;
        display: inline-block;
    }
</style>