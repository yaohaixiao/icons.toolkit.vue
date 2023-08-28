const fs = require('fs')
const path = require('path')

const FOLDERS = [
  'brankic',
  'broccolidry',
  'eighty-shades',
  'entypo',
  'ever-icons',
  'feather',
  'font-awesome',
  'hawcons',
  'iconic',
  'icons',
  'linecons',
  'material',
  'meteocons',
  'steadysets',
  'typicons',
  'vicons',
  'wpzoom',
  'zondicons'
]

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

const buildSvg = (folder) => {
  const icons = require(`../assets/${folder}/icons.umd`)
  const svg = [
    '<svg aria-hidden="true" id="ijs-icons" style="position:absolute;display:none;width:0;height:0;overflow:hidden">'
  ]

  icons.forEach((symbol) => {
    const patternName = /id="(.*?)"/
    const patternContent = /<symbol(([\s\S])*?)>(.*?)<\/symbol>/
    const patternSize = /viewBox="0 0 (.*?)"/
    const paths = patternContent.exec(symbol)[3]
    const name = patternName.exec(symbol)[1].replace('icon-', '')
    const sizes = patternSize.exec(symbol)[1].split(' ')
    const originWidth = parseInt(sizes[0], 10)
    const originHeight = parseInt(sizes[1], 10)
    const width = 200
    const height = 200
    const fileName = `${name}.svg`
    const dir = resolve(`../assets/${folder}/svg`)
    const icon =
      '<svg xmlns="http://www.w3.org/2000/svg" class="ijs-icon__svg" width="' +
      width +
      '" height="' +
      height +
      '" viewBox="0 0 ' +
      originWidth +
      ' ' +
      originHeight +
      '">' +
      paths +
      '</svg>'
    const buildSingle = () => {
      fs.writeFile(
        resolve(`../assets/${folder}/svg/${fileName}`),
        icon,
        (err) => {
          if (err) {
            console.error(err)
          }

          // file written successfully
          console.log(`${fileName} written successfully`)
        }
      )
    }

    if (fs.existsSync(dir)) {
      buildSingle()
    } else {
      fs.mkdirSync(dir)
      buildSingle()
    }

    svg.push(symbol)
  })

  svg.push('</svg>')
  fs.writeFile(
    resolve(`../assets/${folder}/icons.svg`),
    svg.join(''),
    (err) => {
      if (err) {
        console.error(err)
      }

      // file written successfully
      console.log(`${folder}/icons.svg written successfully`)
    }
  )
}

FOLDERS.forEach((folder) => {
  buildSvg(folder)
})
