const ICONS = [
  '<symbol id="icon-info" viewBox="0 0 1024 1024"><path d="M512 384.295982a95.994 95.994 0 0 1 95.994 95.994V928.006a95.994 95.994 0 0 1-191.988 0V480.289982a95.994 95.994 0 0 1 95.994-95.994z m0-128.375977A127.992 127.992 0 1 1 512 0.063996a127.992 127.992 0 0 1 0 255.984001z"></path></symbol>',
  '<symbol id="icon-warning" viewBox="0 0 1024 1024"><path d="M512 639.704018a95.994 95.994 0 0 1-95.994-95.994V95.994a95.994 95.994 0 0 1 191.988 0v447.716018a95.994 95.994 0 0 1-95.994 95.994z m0 128.375977A127.992 127.992 0 1 1 512 1023.936004a127.992 127.992 0 0 1 0-255.984001z"></path></symbol>',
  '<symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M512.64 376.96L263.744 128 128 263.744l248.96 248.96L128 761.472l135.744 135.808 248.96-248.96 248.832 248.96 135.808-135.808-248.96-248.896 248.96-248.896L761.536 128 512.64 376.96z"></path></symbol>',
  '<symbol id="icon-success" viewBox="0 0 1024 1024"><path d="M426.368 580.864l-226.56-226.56L64 489.984l362.048 362.112 0.32-0.32 0.32 0.32 588.288-588.352L879.36 128 426.304 580.864z"></path></symbol>',
  '<symbol id="icon-state-high" viewBox="0 0 1024 1024"><path d="M502.491429 0a502.491429 502.491429 0 1 0 0 1004.982857A502.491429 502.491429 0 0 0 502.491429 0zM585.142857 438.857143v365.714286H438.857143V438.857143H292.571429l219.428571-292.571429 219.428571 292.571429H585.142857z"></path></symbol>',
  '<symbol id="icon-state-low" viewBox="0 0 1024 1024"><path d="M502.491429 1004.982857A502.491429 502.491429 0 1 1 502.491429 0a502.491429 502.491429 0 0 1 0 1004.982857zM585.142857 585.142857V219.428571H438.857143v365.714286H292.571429l219.428571 292.571429 219.428571-292.571429H585.142857z"></path></symbol>',
  '<symbol id="icon-state-urgent" viewBox="0 0 1024 1024"><path d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m73.142857 658.285714H438.857143v146.285715h146.285714V658.285714z m0-438.857143H438.857143v365.714286h146.285714V219.428571z"></path></symbol>',
  '<symbol id="icon-state-commonly" viewBox="0 0 1024 1024"><path d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m292.571429 438.857143H219.428571v146.285714h585.142858V438.857143z"></path></symbol>',
  '<symbol id="icon-circle-info" viewBox="0 0 1024 1024"><path d="M512 810.666667s-42.666667 4.266667-42.666667-42.666667v-341.333333c0-46.933333 42.666667-42.666667 42.666667-42.666667s42.666667-4.266667 42.666667 42.666667v341.333333c0 46.933333-42.666667 42.666667-42.666667 42.666667z m0 213.333333C228.949333 1024 0 795.050667 0 512S228.949333 0 512 0s512 228.949333 512 512-229.674667 512-512 512z m0-938.666667C276.608 85.333333 85.333333 276.608 85.333333 512s191.274667 426.666667 426.666667 426.666667 426.666667-191.274667 426.666667-426.666667S747.392 85.333333 512 85.333333z m0 213.333334c-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666667 42.666667 19.2 42.666667 42.666667-19.2 42.666667-42.666667 42.666667z"></path></symbol>',
  '<symbol id="icon-circle-warning" viewBox="0 0 1024 1024"><path d="M512 213.333333s-42.666667-4.266667-42.666667 42.666667v341.333333c0 46.933333 42.666667 42.666667 42.666667 42.666667s42.666667 4.266667 42.666667-42.666667V256c0-46.933333-42.666667-42.666667-42.666667-42.666667z m0-213.333333C228.949333 0 0 228.949333 0 512s228.949333 512 512 512 512-228.949333 512-512S794.325333 0 512 0z m0 938.666667C276.608 938.666667 85.333333 747.392 85.333333 512S276.608 85.333333 512 85.333333s426.666667 191.274667 426.666667 426.666667-191.274667 426.666667-426.666667 426.666667z m0-213.333334c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666667 42.666667-19.2 42.666667-42.666667-19.2-42.666667-42.666667-42.666667z"></path></symbol>',
  '<symbol id="icon-circle-error" viewBox="0 0 1024 1024"><path d="M512 0a512 512 0 1 0 512 512 512 512 0 0 0-512-512z m0 955.776A443.84 443.84 0 0 1 512 68.224a443.904 443.904 0 0 1 0 887.552z"></path><path d="M641.664 326.144a32 32 0 0 1 50.304 39.168l-3.52 4.48-306.112 328.064a32 32 0 0 1-50.304-39.168l3.52-4.48 306.112-328.064z"></path><path d="M324.608 337.088a32 32 0 0 1 40.704-5.12l4.48 3.584 328.064 306.112a32 32 0 0 1-39.168 50.304l-4.48-3.52-328.064-306.112a32 32 0 0 1-1.536-45.248z"></path></symbol>',
  '<symbol id="icon-circle-success" viewBox="0 0 1024 1024"><path d="M512 0C228.949333 0 0 228.949333 0 512s228.949333 512 512 512 512-228.949333 512-512S794.325333 0 512 0z m0 950.869333C269.909333 950.869333 73.130667 754.090667 73.130667 512 73.130667 269.909333 269.909333 73.130667 512 73.130667c242.090667 0 438.869333 196.778667 438.869333 438.869333 0 242.090667-196.778667 438.869333-438.869333 438.869333z"></path><path d="M737.834667 353.834667a42.666667 42.666667 0 0 1 63.872 56.32l-3.541334 4.010666L486.997333 725.333333a85.333333 85.333333 0 0 1-115.242666 4.992L366.336 725.333333l-140.501333-140.501333a42.666667 42.666667 0 0 1 56.32-63.872l4.010666 3.541333L426.666667 665.002667l311.168-311.168z"></path></symbol>',
  '<symbol id="icon-dot-info" viewBox="0 0 1024 1024"><path d="M512.324587 0.010234A493.422109 493.422109 0 0 1 711.301622 40.507397c61.988437 27.046842 116.00902 63.523528 162.06175 109.503158 45.979631 46.05273 82.529417 100.219513 109.503159 162.646547 26.973742 62.353935 40.497163 128.874545 40.497163 199.561831 0 70.760385-13.523421 137.134797-40.497163 199.123234a520.61515 520.61515 0 0 1-109.503159 162.06175 520.176553 520.176553 0 0 1-162.06175 109.430059A492.398715 492.398715 0 0 1 512.324587 1023.404238a496.419192 496.419192 0 0 1-199.70803-40.570262 518.349063 518.349063 0 0 1-162.573447-109.430059A520.030353 520.030353 0 0 1 40.539951 711.269067 492.691114 492.691114 0 0 1 0.042789 512.292033C0.042789 441.531647 13.566209 375.011037 40.539951 312.657102a517.544968 517.544968 0 0 1 109.503159-162.646547A519.591756 519.591756 0 0 1 312.616557 40.507397 497.442586 497.442586 0 0 1 512.324587 0.010234m61.622939 441.521413c0-18.274893-5.921065-33.625803-17.690096-46.198929a57.894861 57.894861 0 0 0-43.932843-18.85969 59.72235 59.72235 0 0 0-44.590738 18.85969 63.815926 63.815926 0 0 0-18.201794 46.12583v382.31076c0 18.201793 6.140364 32.894807 18.274893 43.859743 12.134529 11.038035 27.046842 16.520503 44.517639 16.520503 17.543897 0 32.310011-5.628667 44.51764-17.0322a58.260359 58.260359 0 0 0 18.201793-44.590739L573.947526 441.531647z m-61.622939-141.520771c22.076071 0 40.862661-7.748555 56.505969-23.391863 15.497109-15.570209 23.391863-34.356799 23.391863-56.432869 0-22.076071-7.894754-40.93576-23.391863-56.432869a76.900749 76.900749 0 0 0-56.505969-23.391863c-22.076071 0-41.081959 7.748555-57.017666 23.391863a76.023555 76.023555 0 0 0-23.976659 56.432869c0 22.076071 7.967853 40.862661 23.90356 56.505969 16.008806 15.570209 35.087794 23.391863 57.017666 23.391863"></path></symbol>',
  '<symbol id="icon-dot-warning" viewBox="0 0 1024 1024"><path d="M518.33363 25.296593c-274.697481 0-493.037037 218.339556-493.037037 493.037037s218.339556 493.037037 493.037037 493.037037 493.037037-218.339556 493.037037-493.037037-218.339556-493.037037-493.037037-493.037037zM461.937778 243.636148c0-35.233185 21.124741-56.357926 56.357926-56.357926 35.195259 0 56.32 21.124741 56.32 56.357926v324.001185c0 35.195259-21.124741 56.32-56.32 56.32-35.233185 0-56.357926-21.124741-56.357926-56.32V243.636148z m-28.178963 535.286519c0-49.303704 42.249481-84.498963 84.536889-84.498963 42.249481 0 84.498963 42.249481 84.498963 84.498963s-35.195259 84.536889-84.498963 84.536889c-49.303704 0-84.536889-35.233185-84.536889-84.536889z"></path></symbol>',
  '<symbol id="icon-dot-error" viewBox="0 0 1054 1024"><path d="M461.040941 512l-127.759059 127.789176a45.176471 45.176471 0 1 0 63.87953 63.87953l127.789176-127.789177 127.759059 127.789177a45.176471 45.176471 0 1 0 63.909647-63.87953L588.8 512l127.789176-127.789176a45.176471 45.176471 0 1 0-63.909647-63.87953l-127.759058 127.789177-127.789177-127.789177a45.176471 45.176471 0 1 0-63.879529 63.87953L461.040941 512z m63.909647 512c-282.804706 0-512-229.225412-512-512s229.195294-512 512-512c282.774588 0 512 229.225412 512 512s-229.225412 512-512 512z"></path></symbol>',
  '<symbol id="icon-dot-success" viewBox="0 0 1054 1024"><path d="M439.747765 608.978824l-118.272-118.272a45.176471 45.176471 0 0 0-63.87953 63.879529l149.082353 149.082353c9.095529 9.125647 21.142588 13.522824 33.069177 13.221647 11.956706 0.301176 23.973647-4.096 33.099294-13.221647l319.457882-319.457882a45.176471 45.176471 0 1 0-63.909647-63.87953l-288.647529 288.64753zM524.950588 1024c-282.804706 0-512-229.225412-512-512s229.195294-512 512-512c282.774588 0 512 229.225412 512 512s-229.225412 512-512 512z"></path></symbol>'
]

export default ICONS
