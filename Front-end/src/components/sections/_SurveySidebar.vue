<template>
  <div>
    <div class="sidebar-widget">
      <h3 class="sidebar-title">{{ blogSidebar.searchTitle }}</h3>
      <div class="sidebar-search">
        <form action="#">
          <input type="text" placeholder="Search" />
          <button><i class="ion-ios-search"></i></button>
        </form>
      </div>
    </div>

    <div class="sidebar-widget">
      <h3 class="sidebar-title">{{ blogSidebar.CategoriesTitle }}</h3>
      <ul class="sidebar-list">
        <li v-for="(category, num) in catedata" :key="num">
          <a>{{ num }}</a>
        </li>
      </ul>
    </div>

    <div class="sidebar-widget">
      <h3 class="sidebar-title">{{ blogSidebar.popularPostTitle }}</h3>
      <div
        class="sidebar-blog"
        v-for="popularPost in blogSidebar.popularPost"
        :key="popularPost.id"
      >
        <router-link to="/blog-details" class="image">
          <img :src="popularPost.image" alt="image" />
        </router-link>
        <div class="content">
          <h5>
            <router-link to="/blog-details">{{
              popularPost.title
            }}</router-link>
          </h5>
          <span>{{ popularPost.date }}</span>
        </div>
      </div>
    </div>

    <div class="sidebar-widget">
      <h3 class="sidebar-title">{{ blogSidebar.tagTitle }}</h3>
      <ul class="sidebar-tag">
        <li v-for="tag in blogSidebar.tags" :key="tag.id">
          <!-- <router-link :to="tag.link">{{ tag.name }}</router-link> -->
          <button
            class="tagbtn"
            v-bind:id="tag.name"
            @click="tagselectbtn(tag.name, $event)"
            v-bind:style="{ 'background-color': selectboxcolor }"
          >
            {{ tag.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blogSidebar", "catedata"],
  name: "",
  components: {},
  data() {
    return {
      tagselect: [],
      selectboxcolor: "",
      selectonoff: false,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    tagselectbtn(tagName, event) {
      if (this.doublecheck(this.tagselect, tagName)) {
        this.tagselect.push(tagName);
        event.currentTarget.style.background = "#ff7f00";
        event.currentTarget.style.color = "white";
      } else {
        this.deduplication(this.tagselect, tagName);
        event.currentTarget.style.background = "";
        event.currentTarget.style.color = "black";
      }
      console.log(this.tagselect);
    },
    doublecheck(arr, tagName) {
      var flag = true;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == tagName) flag = false;
      }
      return flag;
    },
    deduplication(arr, tagName) {
      arr.splice(arr.indexOf(tagName), 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.tagbtn {
  display: inline-block;
  padding: 1em 2em;
  border-radius: 0;
  color: black;
  font-weight: bold;
  font-size: 0.678rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  background: linear-gradient(
    to right,
    rgba(#ff7f00, 0) 25%,
    rgba(#ff7f00, 0.8) 75%
  );
  background-position: 1% 50%;
  background-size: 400% 300%;
  border: 1px solid black;
  transition: all 0.3s;

  &:hover {
    color: white;
    color: #fff;
    background-position: 99% 50%;
  }
}
</style>
