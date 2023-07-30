/**
 * pages-utils.js - 公共方法 mixins
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.8
 */
import { cloneDeep, debounce } from '@/utils/utils'
import { isUndefined, isArray } from '@/utils/typeof/index'
import paint from '@yaohaixiao/icons.js/paint'

export default function (iconSet = []) {
  const defaultSet = cloneDeep(iconSet)

  return {
    data() {
      return {
        iconSet: null,
        iconSets: null,
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
      paint(this.iconSets.symbols)
    },
    methods: {
      initialize() {
        let symbols

        if (isArray(defaultSet)) {
          this.iconSets = defaultSet
        } else {
          symbols = cloneDeep(defaultSet.symbols)

          this.iconSet = defaultSet
          this.querySymbols = symbols || []
          this.count = symbols.length
          this.symbols = symbols.splice(0, this.size)
        }

        console.log(this.symbols)
      },
      getSymbolName(symbol) {
        const matches = symbol.match(/icon-(\w+(-\w+)*)+/)
        return matches[1] || ''
      },
      getSymbolsInIconSet(keyword) {
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
      getSymbolsInIconSets(keyword) {
        const querySets = cloneDeep(this.iconSets)

        querySets.forEach((iconSet) => {
          iconSet.symbols = iconSet.symbols.filter((symbol) => {
            const name = this.getSymbolName(symbol).toLowerCase()

            return name.indexOf(keyword.toLowerCase()) > -1
          })
        })

        this.iconSets = keyword ? querySets : defaultSet
      },
      query(keyword) {
        if (isArray(this.iconSets)) {
          this.getSymbolsInIconSets(keyword)
        } else {
          this.getSymbolsInIconSet(keyword)
        }
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
