<template>
  <base-container>
    <base-header
      flex
      border
      height="inner">
      <base-breadcrumb>
        <base-breadcrumb-item
          to="/"
          icon="circle-arrow-left">
          Home
        </base-breadcrumb-item>
        <base-breadcrumb-item current>
          Eighty Shades 图标集
        </base-breadcrumb-item>
      </base-breadcrumb>
      <template v-slot:filter>
        <div class="page__filter">
          <base-input
            v-model="keyword"
            autosize
            autofocus
            clearable
            size="small"
            suffix-icon="search"
            placeholder="请输入图标名称"
            @change="onQuery" />
        </div>
      </template>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">{{ EIGHTY_SHADES.title }}</h1>
        <copyright-meta
          :designer="EIGHTY_SHADES.designer"
          :homepage="EIGHTY_SHADES.homepage"
          :license="EIGHTY_SHADES.license" />
        <h2 class="article__h2">
          {{ `${EIGHTY_SHADES.title} （${count}）` }}
        </h2>
        <base-grid
          v-if="count > 0"
          :columns="6"
          :gap="16"
          class="article__grid">
          <icon-card
            v-for="(symbol, j) in symbols"
            :key="`card-${j}`"
            :symbol="symbol" />
        </base-grid>
        <base-empty v-else />
      </article>
    </base-main>
    <base-footer
      flex
      height="inner">
      <div class="util-align-left base-footer__navigation">
        Prev Page：
        <router-link to="/broccolidry">Broccolidry 图标库</router-link>
      </div>
      <div class="util-align-center base-footer__navigation">
        <base-pagination
          :page="page"
          :page-size="size"
          :total-count="count"
          :layout="['prev', 'pager', 'next']"
          prev-text=""
          next-text=""
          @page-change="onPageChange" />
      </div>
      <div class="util-align-right base-footer__navigation">
        Next Page：
        <router-link to="/entypo-plus">Entypo+ 图标库</router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageEightyShades.vue - 列表页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.10.18
 */
// 公共组件
import BaseContainer from '@/components/BaseContainer'
import BaseHeader from '@/components/BaseHeader'
import BaseMain from '@/components/BaseMain'
import BaseBreadcrumb from '@/components/BaseBreadcrumb'
import BaseBreadcrumbItem from '@/components/BaseBreadcrumbItem'
import BaseFooter from '@/components/BaseFooter'

import BaseInput from '@/components/BaseInput'
import BaseGrid from '@/components/BaseGrid'
import BaseEmpty from '@/components/BaseEmpty'
import BasePagination from '@/components/BasePagination'

import CopyrightMeta from './components/CopyrightMeta'
import IconCard from './components/IconCard'

import PagesUtils from '@/mixins/pages-utils'
import EIGHTY_SHADES from '../../assets/eighty-shades'

export default {
  name: 'PageEightyShades',
  componentName: 'PageEightyShades',
  components: {
    BaseContainer,
    BaseHeader,
    BaseMain,
    BaseBreadcrumb,
    BaseBreadcrumbItem,
    BaseFooter,
    BaseInput,
    BaseGrid,
    BaseEmpty,
    BasePagination,
    CopyrightMeta,
    IconCard
  },
  mixins: [PagesUtils(EIGHTY_SHADES)],
  data() {
    return {
      EIGHTY_SHADES
    }
  }
}
</script>
