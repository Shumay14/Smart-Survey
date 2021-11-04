<template>
  <!--====================  footer area ====================-->
  <div class="footer-area dark-bg">
    <div class="footer-copyright-wrapper">
      <div class="footer-copyright text-center">
        <p>
          &copy; 2021 <b class="text-white">2Team : </b
          ><b>정완규, 도경구, 서장연, 김의천</b>
        </p>
      </div>
    </div>
  </div>
  <!--====================  End of footer area  ====================-->
</template>

<script>
import FooterAbout from "@/components/FooterAbout.vue";
import FooterLink from "@/components/FooterLink.vue";
import ContactWidget from "@/components/ContactWidget.vue";

import data from "../data/footer.json";
export default {
  components: {
    FooterAbout,
    FooterLink,
    ContactWidget,
  },
  data() {
    return {
      data,
    };
  },
};
</script>

<style lang="scss"></style>
