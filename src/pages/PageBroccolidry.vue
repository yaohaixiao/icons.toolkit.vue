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
        <base-breadcrumb-item current>Broccolidry 图标集</base-breadcrumb-item>
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
        <h1 class="article__h1">{{ BroccolidrySet.title }}</h1>
        <copyright-meta
          :designer="BroccolidrySet.designer"
          :homepage="BroccolidrySet.homepage"
          :license="BroccolidrySet.license" />
        <h2 class="article__h2">
          {{ `${BroccolidrySet.title} （${count}）` }}
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
        <router-link to="/brankic">Brankic 1979 图标库</router-link>
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
        <router-link to="/eighty-shades">Eighty Shades 图标库</router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageBroccolidry.vue - 列表页面
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
import BroccolidrySet from '../../assets/broccolidry'

export default {
  name: 'PageBroccolidry',
  componentName: 'PageBroccolidry',
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
  mixins: [PagesUtils(BroccolidrySet)],
  data() {
    return {
      BroccolidrySet
    }
  }
}
</script>
