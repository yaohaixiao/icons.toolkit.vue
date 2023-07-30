/**
 * pages-utils.js - 公共方法 mixins
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.8
 */
import { cloneDeep, debounce } from '@/utils/utils'
import { isUndefined, isArray } from '@/utils/typeof'
import paint from '@yaohaixiao/icons.js/paint'

export default function (iconSet = []) {
  const defaultSet = cloneDeep(iconSet)

  return {
    data() {
      return {
        iconSet: null,
        querySymbols: null,
        keyword: '',
        symbols: [],
        count: 0,
        page: 1,
        size: 60
      }
    },
    created() {
      this.initialize()
    },
    mounted() {
      paint(this.iconSet.symbols)
    },
    methods: {
      initialize() {
        const symbols = cloneDeep(defaultSet.symbols)

        this.iconSet = defaultSet
        this.querySymbols = symbols || []
        this.count = symbols.length
        this.symbols = symbols.splice(0, this.size)
      },
      getSymbolName(symbol) {
        const matches = symbol.match(/icon-(\w+(-\w+)*)+/)
        return matches[1] || ''
      },
      getSymbols(keyword) {
        const size = this.size || 60
        const symbols = this.iconSet.symbols.filter((symbol) => {
          const name = this.getSymbolName(symbol).toLowerCase()

          return name.indexOf(keyword.toLowerCase()) > -1
        })
        const length = symbols.length

        this.count = length
        this.querySymbols = cloneDeep(symbols)

        if (length > size && !isUndefined(this.page)) {
          this.symbols = symbols.splice(0, size)
        } else {
          this.symbols = symbols
        }
      },
      query(keyword) {
        this.getSymbols(keyword)
      },
      onQuery: debounce(function () {
        this.query(this.keyword)
      }, 300),
      onPageChange(page) {
        const size = this.size
        const icons = cloneDeep(this.querySymbols)

        this.page = page
        this.symbols = icons.splice((page - 1) * size, size)
      }
    }
  }
}
