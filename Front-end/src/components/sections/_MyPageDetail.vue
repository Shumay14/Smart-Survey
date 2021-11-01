<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Contact section start-->
        <div class="conact-section">
            <div class="container">

                <!-- 왼쪽 -->
                <div class="row">
                    <div class="col-lg-5 col-12">
                        <div class="contact-information">
                            <h3>사용자 정보</h3>
                            <ul>
                                <li>
                                    <span class="icon">
                                        <i :class="data.contactInfo.address.icon"></i>
                                    </span>
                                    <span class="text">
                                        <h5>메타마스크 주소</h5>
                                        {{this.$store.state.metamaskAdd}}
                                        <label v-show="!this.$store.state.metamaskAdd">메타마스크 로그인을 해주세요.</label>
                                    </span>
                                </li>
                                <li v-show="this.$store.state.metamaskAdd">
                                    <span class="icon">
                                        <i :class="data.contactInfo.telephone.icon"></i>
                                    </span>
                                    <span class="text">
                                        <h5>카카오톡 본인 인증</h5>
                                        <KakaoLogin/>
                                    </span>
                                </li>
                                <!-- <li>
                                    <span class="icon"><i :class="data.contactInfo.mail.icon"></i></span>
                                    <span class="text">
                                        <a href="mailto:infor@example.com">{{ data.contactInfo.mail.email }}</a>
                                        <a href="#">{{ data.contactInfo.mail.web }}</a>
                                    </span>
                                </li> -->
                            </ul>
                        </div>
                    </div>

                    <!-- 오른쪽 -->
                    <div class="col-lg-7 col-12">
                        <div class="contact-form">
                            <h3>발급받은 VC 목록</h3>
                            <form id="contact-form">
                                <div class="row row-10">
                                    <div class="col-md-6 col-12 section-space--bottom--20">
                                        <input name="con_name" type="text" placeholder="Your Name">
                                    </div>
                                    <div class="col-md-6 col-12 section-space--bottom--20">
                                        <input name="con_email" type="email" placeholder="Your Email">
                                    </div>
                                    <div class="col-12">
                                        <textarea name="con_message" placeholder="Your Message"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button>Send Message</button>
                                    </div>
                                </div>
                            </form>
                            <p class="form-message"></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!--Contact section end-->
    </div>
</template>

<script>
    import data from '../../data/contact.json'
    import KakaoLogin from '@/components/_KakaoLogin';

    export default {
        components: {
            KakaoLogin
        },
        data () {
            return {
                data
            }
        },
        methods : {
            test() {
                console.log(this.$store.state.metamaskAdd);
            }
        }
    };
</script>