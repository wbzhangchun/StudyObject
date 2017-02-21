;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M173.0138 159.1531c57.5463-65.4416 141.5648-106.8386 228.5544-112.2539 81.4181-6.0939 164.835 18.8452 229.213 69.1301 78.1382 59.1929 128.0364 154.2514 131.3953 252.3189 4.656 84.9654-25.4258 170.7682-80.7975 235.1805 86.2121 86.2655 172.5211 172.4761 258.7132 258.7626-18.767 18.7093-37.4571 37.4956-56.2252 56.1839-87.0865-87.043-174.0941-174.1439-261.2206-261.1479-71.9662 52.6933-165.6295 74.3896-253.5105 59.1529-86.9496-13.9146-167.1265-64.2384-218.229-135.8719-32.2944-44.6377-53.334-97.406-60.3985-152.0589C77 332.4446 107.7624 231.0593 173.0138 159.1531zM392.387 87.4427c-13.8392 2.0766-27.7933 3.6875-41.2237 7.7038-85.8433 21.1157-160.159 83.5114-196.6847 163.9169-20.8447 44.7926-29.9279 94.9416-26.5311 144.2192 5.2007 95.2124 60.4575 185.6911 142.1664 234.5969 84.3103 52.6163 195.7723 57.8748 284.7596 13.7217 85.5715-40.5015 148.7652-124.5765 163.8077-218.0622 7.2774-42.737 5.2407-87.1599-6.4259-128.9456-24.0657-90.4197-93.9352-166.9448-181.6033-199.4907C486.8479 88.1802 439.0064 82.669 392.387 87.4427z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-baidu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M217.789972 535.109324c97.688812-20.98801 84.354586-137.849578 81.489211-163.391301-4.809736-39.387056-51.106005-108.163465-113.93958-102.668311-79.094577 7.040347-90.637944 121.292484-90.637944 121.292484C83.987204 443.236893 120.264895 556.148499 217.789972 535.109324z"  ></path>' +
    '' +
    '<path d="M631.683122 348.34571c72.156276 9.445116 118.421845-67.548442 127.683146-125.897362 9.455737-58.267055-37.188471-126.040624-88.170651-137.675616-51.219597-11.768021-115.148155 70.209038-120.908581 123.68702C543.276077 273.879718 559.588246 339.095022 631.683122 348.34571z"  ></path>' +
    '' +
    '<path d="M399.188661 339.197352c53.930446 0 97.514843-62.135152 97.514843-138.89335 0-76.768431-43.584397-138.811486-97.514843-138.811486-53.950913 0-97.647878 62.043055-97.647878 138.811486C301.540783 277.0622 345.237748 339.197352 399.188661 339.197352z"  ></path>' +
    '' +
    '<path d="M917.534954 446.357977c0-27.90556-23.096967-112.02133-109.150311-112.02133-86.206846 0-97.627411 79.388095-97.627411 135.475508 0 53.53938 4.482265 128.189567 111.515269 125.876895C929.25229 593.31498 917.534954 474.457965 917.534954 446.357977z"  ></path>' +
    '' +
    '<path d="M808.384643 691.327248c0 0-111.575646-86.295412-176.701521-179.63117-88.407045-137.614218-213.900226-81.557504-255.857499-11.686157-41.824238 70.055542-106.827311 114.292046-116.129545 126.040624-9.394336 11.501962-134.774948 79.255065-106.960346 202.931852 27.876003 123.605156 125.656917 121.283274 125.656917 121.283274s72.053942 7.018857 155.62055-11.645225c83.740577-18.634406 155.804752 4.583388 155.804752 4.583388s195.346924 65.513086 248.734996-60.527538C892.012652 756.747213 808.384643 691.327248 808.384643 691.327248zM514.930357 878.882901 387.958438 878.882901c-54.874997-10.956539-76.734736-48.399313-79.468099-54.825676-2.708802-6.436596-18.254484-36.594453-9.995041-87.748507 23.670042-76.646658 91.29698-82.260515 91.29698-82.260515l67.665825 0 0-83.036181 57.472254 0.898463L514.930357 878.882901zM751.539701 878.021278 605.428102 878.021278c-56.721117-14.635325-59.368518-54.886051-59.368518-54.886051L546.059584 661.495826l59.368518-0.946558 0 145.242965c3.606279 15.484669 22.84727 18.266016 22.84727 18.266016l60.20357 0L688.478943 661.495826l63.060758 0L751.539701 878.021278z"  ></path>' +
    '' +
    '<path d="M362.466837 738.203882c-2.818301 8.248871-9.256184 29.232788-3.6554 47.427172 10.845443 41.012066 46.480472 42.883693 46.480472 42.883693l51.144893 0L456.436802 703.481056l-54.752195 0C377.0168 710.829418 365.052837 729.933521 362.466837 738.203882z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M984.615385 472.615385 551.384615 472.615385 551.384615 39.384615c0-21.740308-17.644308-39.384615-39.384615-39.384615s-39.384615 17.644308-39.384615 39.384615l0 433.230769L39.384615 472.615385c-21.740308 0-39.384615 17.644308-39.384615 39.384615s17.644308 39.384615 39.384615 39.384615l433.230769 0 0 433.230769c0 21.740308 17.644308 39.384615 39.384615 39.384615s39.384615-17.644308 39.384615-39.384615L551.384615 551.384615l433.230769 0c21.740308 0 39.384615-17.644308 39.384615-39.384615S1006.355692 472.615385 984.615385 472.615385z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M952.424947 1024l-0.255968-6.3992c-8.062992-207.910011-201.382827-370.769654-440.136983-370.769654-238.690164 0-431.946007 162.859643-440.072991 370.769654l-0.255968 6.3992L0.031996 1024l0.255968-6.847144c1.535808-45.178353 10.87864-89.524809 27.772528-132.015498 17.981752-45.178353 44.218473-87.477065 77.942257-125.616298 33.403825-37.819273 73.398825-70.583177 118.705162-97.331834 46.138233-27.260592 96.627922-47.610049 150.125234-60.536433l27.132608-6.655168L376.624922 582.903137C325.879265 558.650169 282.87664 520.446944 252.224472 472.388951 220.740407 422.987127 204.102487 365.458318 204.102487 306.137733c0-81.589801 30.844144-158.380202 86.837145-216.036995 55.993001-57.720785 130.543682-89.524809 209.765779-89.524809s153.708786 31.804024 209.701787 89.524809c55.993001 57.720785 86.837145 134.447194 86.837145 216.036995 0 58.040745-15.998 114.417698-46.330209 162.987627-29.308336 47.162105-70.775153 85.301337-119.92101 110.32221l-25.212848 12.7984 27.51656 5.823272c109.810274 23.229096 209.189851 78.646169 279.83702 156.012498 35.195601 38.587177 62.648169 81.525809 81.461817 127.728034 17.661792 43.450569 27.51656 88.948881 29.11636 135.27909l0.255968 6.847144L952.424947 1023.936008 952.424947 1024zM500.705412 50.745657c-136.55893 0-247.649044 114.609674-247.649044 255.392076 0 140.846394 111.090114 255.392076 247.649044 255.392076s247.585052-114.609674 247.585052-255.392076C748.290464 165.291339 637.264342 50.745657 500.705412 50.745657L500.705412 50.745657zM500.705412 50.745657"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)