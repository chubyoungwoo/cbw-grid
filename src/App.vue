<template>
  <div class="container" id="main">
    <div class="row-fluid" style="margin-bottom: 10px">
      <p class="span12">
        <a href="#menu" class="side-menu-link btn btn-mini" title="Click for sub-menu">
          <i class="icon-th"></i>
        </a>
      </p>
    </div>
    <div style="display: flex; width: 100%">
      <!--Sidebar content-->
      <aside class="well menu" id="side-menu" role="navigation">
        <h2>Grid</h2>
        <br />
        <ul class="nav nav-list">
          <li class="nav-header">
            <router-link to="/index">전체기능</router-link>
          </li>

          <li class="nav-header">
            <router-link to="/basic">표준</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/zebra-stripe">줄무늬</router-link>
          </li>

          <li class="nav-header">
            <router-link to="/border">보드</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/custom-style">사용자정의</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/highLight">선택강조</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/selection">선택</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/sort">정렬</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/resizable">열크기조정</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/span-column">행열병합</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/summary">합계</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/group-header">헤더그룹</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/loading">로딩중</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/exportcsv">파일생성</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/expand">펼침</router-link>
          </li>
          <li>고정</li>
          <li class="nav-header">
            <router-link to="/fixedHeader">헤드고정</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/fixedHeaderL">좌고정</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/fixedHeaderR">우고정</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/fixedHeaderLR">좌우고정</router-link>
          </li>

          <li>필터</li>
          <li class="nav-header">
            <router-link to="/filter">기본필터</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/custom-filter-show">필터숨기기</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/custom-filter-hidesome">사용자정의필터숨기기</router-link>
          </li>

          <li class="nav-header">
            <router-link to="/custom-filter">사용자정의초기필터값정의</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/custom-filter-ui">사용자정의UI</router-link>
          </li>

          <li>사용자정의</li>
          <li class="nav-header">
            <router-link to="/custom-header">사용자정의--헤더</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/custom-header-render">사용자정의--render</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/custom-column">사용자정의--컬럼</router-link>
          </li>
          <li class="nav-header">
            <router-link to="/custom-column-render">사용자정의 컬럼--render</router-link>
          </li>
        </ul>
      </aside>

      <!--Body content-->
      <section class="well content">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
import iButton from './components/button/button.vue';

import Locale from './mixins/locale';

export default {
    name: 'App',
    data: function() {
        return {
            loading: false
        };
    },
    mixins: [Locale],
    components: { iButton },
    props: {
        cancelText: {
            type: String
        }
    },
    computed: {
        localeCancelText() {
            if (this.cancelText === undefined) {
                return this.t('i.modal.cancelText');
            } else {
                return this.cancelText;
            }
        }
    },
    methods: {
        cancel(e) {
            console.log('취소', e);
        }
    }
};
</script>


<style lang="css">
@import "./routers/tomorrow-night.css";
</style>

<style lang="less">
@import "./styles/index.less";
</style>
<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
  height: 100vh;
  background-color: white;
  .menu {
    width: 200px;
    margin-top: 50px;
    margin-left: 50px;
  }
  .content {
    width: ~"calc(100% - 200px)";
  }
}

.wrap {
  position: relative;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.wrap.active {
  left: 14em;
}

.nav {
  margin-left: 0;
  margin-bottom: 20px;
  list-style: none;
}

.nav-list > li > a,
.nav-list .nav-header {
  margin-right: -15px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
.nav-header {
  display: block;
  padding: 3px 15px;
  font-size: 11px;
  font-weight: bold;
  line-height: 20px;
  color: #999999;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
</style>