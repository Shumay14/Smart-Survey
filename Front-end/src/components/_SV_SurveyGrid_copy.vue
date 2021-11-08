<template>
  <!-- <div class="service-grid-item service-grid-item--style2 custom">
        <div class="service-grid-item__image">
            <div class="service-grid-item__image-wrapper">
                <router-link to="/project-details">
                    <img :src="project.image" class="img-fluid" alt="thumbnail">
                </router-link>
            </div>
        </div>
        <div class="service-grid-item__content">
            <h3 class="title">
                <router-link to="/project-details">
                    {{ project.title }}
                </router-link>
            </h3>
            <p class="subtitle">{{ project.desc }}</p>
            <router-link to="/project-details" class="see-more-link">VIEW MORE</router-link>
        </div>
        <div class="locked" v-if="project.title =='Work Manage Construction'"></div>
        VC GRade가 일치하지 않을 떄
    </div> -->
  <div class="strip_list wow fadeIn" data-wow-delay="0.1s">
    <div class="ribbon_1">Popular</div>
    <div class="row">
      <div class="col-md-9">
        <div class="desc">
          <div class="thumb_strip">
            <a href="detail_page.html"
              ><img src="img/thumb_restaurant.jpg" alt=""
            /></a>
          </div>
          <!-- <div class="rating">
            <i class="icon_star voted"></i><i class="icon_star voted"></i
            ><i class="icon_star voted"></i><i class="icon_star voted"></i
            ><i class="icon_star"></i> (<small
              ><a href="#0">98 reviews</a></small
            >)
          </div> -->
          <h3>Taco Mexican</h3>
          <div class="type">Mexican / American</div>
          <div class="location">
            135 Newtownards Road, Belfast, BT4.
            <span class="opening">Opens at 17:00.</span> Minimum order: $15
          </div>
          <ul>
            <li>Take away<i class="icon_check_alt2 ok"></i></li>
            <li>Delivery<i class="icon_check_alt2 no"></i></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3">
        <div class="go_to">
          <div>
            <a href="detail_page.html" class="btn_1">View Menu</a>
          </div>
        </div>
      </div>
    </div>
    <!-- End row-->
    <div class="row">
      <div class="col-md-9">
        <!-- <div class="desc"> -->
        <!-- <div class="thumb_strip">
            <a href="detail_page.html"
              ><img src="img/thumb_restaurant.jpg" alt=""
            /></a>
          </div> -->
        <!--  <div class="rating">
            <i class="icon_star voted"></i><i class="icon_star voted"></i
            ><i class="icon_star voted"></i><i class="icon_star voted"></i
            ><i class="icon_star"></i> (<small
              ><a href="#0">98 reviews</a></small
            >)
          </div> -->
        <h3>Taco Mexican</h3>
        <!-- <div class="type">Mexican / American</div>
          <div class="location">
            135 Newtownards Road, Belfast, BT4.
            <span class="opening">Opens at 17:00.</span> Minimum order: $15
          </div>
          <ul>
            <li>Take away<i class="icon_check_alt2 ok"></i></li>
            <li>Delivery<i class="icon_check_alt2 no"></i></li>
          </ul> -->
        <!-- </div> -->
      </div>
      <div class="col-md-3">
        <!-- <div class="go_to">
          <div>
            <a href="detail_page.html" class="btn_1">View Menu</a>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style lang="scss" scoped>
.custom {
  position: relative;
}
.locked {
  position: absolute;

  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;

  // box-sizing: border-box;
  // -moz-box-sizing: border-box; /* 파이어폭스(Firefox)*/
  // -webkit-box-sizing: border-box;
  background-color: RGBA(0, 0, 0, 0.5);

  box-sizing: content-box;
  -moz-box-sizing: content-box; /* 파이어폭스(Firefox)*/
  -webkit-box-sizing: content-box;
}
</style>
