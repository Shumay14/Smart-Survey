<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Contact section start-->
        <div class="conact-section">
            <div class="container">

                <!-- 왼쪽 -->
                <div class="row">
                    <div class="col-lg-4 col-12">
                        <div class="contact-information">
                            <h3>사용자 정보</h3>
                            <ul>
                                <li>
                                    <span class="icon">
                                        <i :class="data.contactInfo.address.icon"></i>
                                    </span>
                                    <span class="text">
                                        <!-- <input type="text" v-model="store.metamaskAdd"> -->
                                        <button @click="test()">test</button>
                                    </span>
                                </li>
                                <li>
                                    <span class="icon">
                                        <i :class="data.contactInfo.telephone.icon"></i>
                                    </span>
                                    <span class="text">
                                        <a href="tel:123456789">{{ data.contactInfo.telephone.no_1 }}</a>
                                        <a href="tel:123456789">{{ data.contactInfo.telephone.no_1 }}</a>
                                    </span>
                                </li>
                                <li>
                                    <span class="icon"><i :class="data.contactInfo.mail.icon"></i></span>
                                    <span class="text">
                                        <a href="mailto:infor@example.com">{{ data.contactInfo.mail.email }}</a>
                                        <a href="#">{{ data.contactInfo.mail.web }}</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 오른쪽 -->
                    <div class="col-lg-8 col-12">
                        <div class="contact-form">
                            <h3>Leave Your Message</h3>
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
    import GoogleMap from '@/components/GoogleMap';
    export default {
        components: {
            GoogleMap,
        },
        data () {
            return {
                data
            }
        },
        method : {
            test() {
                console.log( store.metamaskAdd)
            }
        }
    };
</script>