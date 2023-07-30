const ICONS = [
  // 排序
  '<symbol id="icon-order-asc" viewBox="0 0 1024 1024"><path d="M576 512V192H448v320H320l192 320 192-320H576z"></path></symbol>',
  '<symbol id="icon-order-desc" viewBox="0 0 1024 1024"><path d="M576 512v320H448V512H320l192-320 192 320H576z"></path></symbol>',
  // 上下移动
  '<symbol id="icon-move-up" viewBox="0 0 1024 1024"><path d="M532.736 89.856a54.613333 54.613333 0 0 0-62.293333 13.482667l-283.306667 305.749333A63.146667 63.146667 0 0 0 170.666667 452.010667c0 15.701333 5.632 31.488 16.981333 43.349333a54.613333 54.613333 0 0 0 80.896-0.512L449.706667 306.005333v571.648c0 33.706667 32 61.013333 63.573333 61.013334s63.488-27.306667 63.488-61.013334V309.248l178.944 183.552a54.613333 54.613333 0 0 0 80.810667-0.085333 64 64 0 0 0-0.085334-86.357334L551.68 103.253333l-0.170667-0.170666-0.085333-0.170667a56.832 56.832 0 0 0-17.92-12.544c-0.341333-0.085333-0.512-0.426667-0.853333-0.512z"></path></symbol>',
  '<symbol id="icon-move-down" viewBox="0 0 1024 1024"><path d="M532.736 934.144a54.613333 54.613333 0 0 1-62.293333-13.482667l-283.306667-305.749333A63.146667 63.146667 0 0 1 170.666667 571.989333c0-15.701333 5.632-31.488 16.981333-43.349333a54.613333 54.613333 0 0 1 80.896 0.512L449.706667 717.994667V146.346667c0-33.706667 32-61.013333 63.573333-61.013334s63.488 27.306667 63.488 61.013334v568.405333l178.944-183.552a54.613333 54.613333 0 0 1 80.810667 0.085333 64 64 0 0 1-0.085334 86.357334L551.68 920.746667l-0.170667 0.170666-0.085333 0.170667a56.832 56.832 0 0 1-17.92 12.544c-0.341333 0.085333-0.512 0.426667-0.853333 0.512z"></path></symbol>',
  // 箭头图标
  '<symbol id="icon-square-move-up" viewBox="0 0 1024 1024"><path d="M540.8 272c-6.4-6.4-19.2-9.6-28.8-9.6-9.6-3.2-19.2 0-28.8 9.6L300.8 454.4c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l131.2-131.2V704c0 19.2 12.8 32 32 32s32-12.8 32-32V364.8l131.2 131.2c12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-32 0-44.8l-176-179.2zM896 0H128C57.6 0 0 57.6 0 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128V128c0-70.4-57.6-128-128-128z m64 896c0 35.2-28.8 64-64 64H128c-35.2 0-64-28.8-64-64V128c0-35.2 28.8-64 64-64h768c35.2 0 64 28.8 64 64v768z"></path></symbol>',
  '<symbol id="icon-square-move-down" viewBox="0 0 1024 1024"><path d="M540.8 752c-6.4 6.4-19.2 9.6-28.8 9.6-9.6 3.2-19.2 0-28.8-9.6L300.8 569.6c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l131.2 131.2V320c0-19.2 12.8-32 32-32s32 12.8 32 32v339.2l131.2-131.2c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8l-176 179.2zM896 1024H128c-70.4 0-128-57.6-128-128V128C0 57.6 57.6 0 128 0h768c70.4 0 128 57.6 128 128v768c0 70.4-57.6 128-128 128z m64-896c0-35.2-28.8-64-64-64H128c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h768c35.2 0 64-28.8 64-64V128z"></path></symbol>',
  '<symbol id="icon-square-arrow-up" viewBox="0 0 1024 1024"><path d="M896 1024H128c-70.4 0-128-57.6-128-128V128C0 57.6 57.6 0 128 0h768c70.4 0 128 57.6 128 128v768c0 70.4-57.6 128-128 128z m0-960H128c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h768c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z"></path><path d="M524.032 419.84c-0.576-0.32-1.088-0.832-1.664-1.024a28.096 28.096 0 0 0-32.256 5.44L295.68 625.792a27.008 27.008 0 0 0 1.088 38.72 28.352 28.352 0 0 0 39.488-1.088L510.72 482.624l177.152 180.096c10.688 10.88 28.352 11.2 39.488 0.704a26.88 26.88 0 0 0 0.704-38.656L531.84 425.088c-0.384-0.32-0.96-0.448-1.28-0.896l-0.832-0.896c-1.664-1.664-3.712-2.432-5.632-3.52z"></path></symbol>',
  '<symbol id="icon-square-arrow-down" viewBox="0 0 1024 1024"><path d="M896 1024H128c-70.4 0-128-57.6-128-128V128C0 57.6 57.6 0 128 0h768c70.4 0 128 57.6 128 128v768c0 70.4-57.6 128-128 128z m0-960H128c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h768c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z"></path><path d="M499.968 668.16c0.576 0.32 1.088 0.832 1.664 1.024 10.624 4.992 23.68 3.392 32.256-5.44l194.432-201.536a27.008 27.008 0 0 0-1.088-38.72 28.352 28.352 0 0 0-39.488 1.088L513.28 605.376 336 425.28a28.352 28.352 0 0 0-39.488-0.704 26.88 26.88 0 0 0-0.704 38.656l196.352 199.68c0.384 0.32 0.96 0.448 1.28 0.896l0.832 0.896c1.664 1.664 3.712 2.432 5.632 3.52z"></path></symbol>',
  '<symbol id="icon-circle-arrow-up" viewBox="0 0 1024 1024"><path d="M512 483.84L388.8 607.04a32 32 0 0 1-45.248-45.248l144.832-144.832A31.936 31.936 0 0 1 512 407.68a31.936 31.936 0 0 1 23.616 9.344l144.832 144.832a32 32 0 1 1-45.248 45.248L512 483.84zM960 512a448 448 0 0 1-448 448 448 448 0 0 1-448-448 448 448 0 1 1 896 0zM512 128a384 384 0 0 0-384 384 384 384 0 0 0 384 384 384 384 0 0 0 384-384 384 384 0 0 0-384-384z"></path></symbol>',
  '<symbol id="icon-circle-arrow-down" viewBox="0 0 1024 1024"><path d="M512 540.16l123.2-123.2a32 32 0 0 1 45.248 45.248L535.616 607.04A31.936 31.936 0 0 1 512 616.32a31.936 31.936 0 0 1-23.616-9.344L343.552 462.208a32 32 0 1 1 45.248-45.248L512 540.16zM64 512a448 448 0 0 1 448-448 448 448 0 0 1 448 448A448 448 0 1 1 64 512z m448 384a384 384 0 0 0 384-384 384 384 0 0 0-384-384 384 384 0 0 0-384 384 384 384 0 0 0 384 384z"></path></symbol>',
  '<symbol id="icon-circle-arrow-left" viewBox="0 0 1024 1024"><path d="M439.68 512l199.04 199.04a25.6 25.6 0 0 1-36.224 36.224L386.368 531.2a25.984 25.984 0 0 1-8.576-18.112 25.6 25.6 0 0 1 8.576-20.288l216.128-216.064a25.6 25.6 0 0 1 36.224 36.224L439.68 512zM512 0a512 512 0 0 1 512 512 512 512 0 0 1-512 512A512 512 0 0 1 512 0zM51.2 512A460.8 460.8 0 0 0 512 972.8 460.8 460.8 0 0 0 972.8 512 460.8 460.8 0 0 0 512 51.2 460.8 460.8 0 0 0 51.2 512z"></path></symbol>',
  '<symbol id="icon-circle-arrow-right" viewBox="0 0 1024 1024"><path d="M584.32 512L385.28 312.96a25.6 25.6 0 0 1 36.224-36.224L637.632 492.8a25.984 25.984 0 0 1 8.576 18.112 25.6 25.6 0 0 1-8.576 20.288l-216.128 216.064a25.6 25.6 0 0 1-36.224-36.224L584.32 512zM512 1024a512 512 0 0 1-512-512 512 512 0 0 1 512-512 512 512 0 0 1 0 1024z m460.8-512A460.8 460.8 0 0 0 512 51.2 460.8 460.8 0 0 0 51.2 512 460.8 460.8 0 0 0 512 972.8 460.8 460.8 0 0 0 972.8 512z"></path></symbol>',
  '<symbol id="icon-arrow-up" viewBox="0 0 1024 1024"><path d="M494.784 261.696c0.832-0.448 1.536-1.216 2.368-1.536a38.72 38.72 0 0 1 46.08 8.256l277.824 302.272a41.92 41.92 0 0 1-1.536 58.048 39.104 39.104 0 0 1-56.448-1.6L513.728 355.904 260.736 626.048a39.104 39.104 0 0 1-56.448 1.088 41.6 41.6 0 0 1-1.088-57.984L483.84 269.696c0.512-0.512 1.344-0.768 1.92-1.408l1.088-1.344c2.368-2.496 5.312-3.648 8-5.248z"></path></symbol>',
  '<symbol id="icon-arrow-down" viewBox="0 0 1024 1024"><path d="M494.784 762.304c0.832 0.448 1.536 1.216 2.368 1.536 15.232 7.488 33.92 4.992 46.08-8.256l277.824-302.272a41.92 41.92 0 0 0-1.536-58.048 39.104 39.104 0 0 0-56.448 1.6l-249.344 271.232-252.992-270.144a39.104 39.104 0 0 0-56.448-1.088 41.6 41.6 0 0 0-1.088 57.984l280.576 299.456c0.512 0.512 1.344 0.768 1.92 1.408l1.088 1.344c2.368 2.496 5.312 3.648 8 5.248z"></path></symbol>',
  '<symbol id="icon-arrow-left" viewBox="0 0 1024 1024"><path d="M261.248 566.272c-9.408-22.784-6.336-50.752 10.368-69.12l377.792-416.768c20.544-22.72 53.056-21.632 72.576 2.304 19.456 24.064 18.56 61.952-2.048 84.672L380.992 541.44l337.6 379.52c20.416 23.04 21.056 60.864 1.344 84.736a47.808 47.808 0 0 1-36.928 18.304 47.616 47.616 0 0 1-35.648-16.768l-374.4-420.864c-0.64-0.832-0.96-1.984-1.664-2.88-0.576-0.64-1.152-1.024-1.664-1.664-2.944-3.584-4.48-7.936-6.4-11.968-0.64-1.28-1.472-2.304-1.92-3.584z"></path></symbol>',
  '<symbol id="icon-arrow-right" viewBox="0 0 1024 1024"><path d="M730.752 566.272c9.408-22.784 6.336-50.752-10.368-69.12L342.592 80.384C322.048 57.6 289.536 58.752 270.08 82.688a67.2 67.2 0 0 0 2.048 84.672L611.008 541.44l-337.6 379.52a67.2 67.2 0 0 0-1.344 84.736c10.048 12.16 23.488 18.304 36.928 18.304 12.8 0 25.664-5.568 35.648-16.768l374.4-420.864c0.64-0.832 0.96-1.984 1.664-2.88 0.576-0.64 1.152-1.024 1.664-1.664 2.944-3.584 4.48-7.936 6.4-11.968 0.64-1.28 1.472-2.304 1.92-3.584z"></path></symbol>',
  '<symbol id="icon-aside-collapse" viewBox="0 0 1024 1024"><path d="M895.808 525.568a28.672 28.672 0 0 1-8.192 23.424l-365.76 365.76a28.736 28.736 0 1 1-40.64-40.64l348.544-348.544-348.544-348.544a28.736 28.736 0 0 1 40.64-40.64l365.76 365.76c6.4 6.4 9.152 15.104 8.192 23.424z m-344.768 0a28.672 28.672 0 0 1-8.32 23.424l-365.696 365.76a28.736 28.736 0 1 1-40.64-40.64l348.544-348.544-348.544-348.544a28.736 28.736 0 0 1 40.64-40.64l365.76 365.76c6.4 6.4 9.152 15.104 8.256 23.424z"></path></symbol>'
]

export default ICONS
