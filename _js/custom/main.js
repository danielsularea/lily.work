;(function(mainObj) {
  'use strict';

  var obj = mainObj;
  // var MaxMobileWidth;

  var Selectors = obj.settings = {
    headerScroll:             'js--headerScroll',
    // portrait:              'l--home_portrait',
    staticryptForm:           'js--staticryptForm',
    staticryptInsertHeader:   'js--staticryptInsertHeader',
    staticryptInsertArticle:  'js--staticryptInsertArticle',
    workMenu:                 'js--workMenu',
    workMenuLink:             'js--workMenuLink',
    zoomImages:               '[data-action="zoom"]',
  };

  var sessionStorageName = 'lilychen';
  var WorkMenuConfig;

  // ---------------------------------
  // HELPER FUNCTIONS
  // ---------------------------------

  // extended from https://stackoverflow.com/a/31987330
  var _scrollTo = function(to, duration) {
    var scrollEl = document.documentElement,
        maxBottom = scrollEl.offsetHeight - window.innerHeight;

    if (to >= maxBottom) {
      to = maxBottom;
    } else if (to <= 0) {
      to = 0;
    }

    var difference = to - window.scrollY,
        perTick = difference / duration * 10;

    setTimeout(function() {
      window.scrollTo(window.scrollX, window.scrollY + perTick);
      if (window.scrollY === to) return;
      _scrollTo(to, duration - 10);
    }, 10);
  };

  // get Y position of element from top of page
  var _getYPos = function(element) {
    if (!element) return;

    return element.getBoundingClientRect().top + 
           (window.pageYOffset || document.documentElement.scrollTop);
  };

  // ---------------------------------
  // INIT AND SETUP FUNCTIONS
  // ---------------------------------

  var _initBarba = function() {
    Barba.Pjax.getTransition = function() {
      return Transition;
    };

    // var Default = Barba.BaseView.extend({
    //   namespace: 'default',
    //   onEnter: function () {},
    //   onEnterCompleted: function () {
    //     var headerItems = document.getElementsByClassName('m--header_menu_anchor'),
    //         pathname = window.location.pathname.replace('index.html', ''),
    //         pathArr = pathname.split('/'),
    //         activeAttr = pathArr[1] ? pathArr[1] : 'works';

    //     for (var i = 0; i < headerItems.length; i++) {
    //       var curAttr = headerItems[i].dataset.headeritem;

    //       if (!pathArr[2] && curAttr === activeAttr) {
    //         headerItems[i].classList.add('active');
    //       } else {
    //         headerItems[i].classList.remove('active');
    //       }
    //     }
    //   },
    //   onLeave: function () {},
    //   onLeaveCompleted: function () {}
    // });

    // Default.init();

    document.addEventListener('DOMContentLoaded', function(e) {
      Barba.Pjax.start();
    });

    Barba.Dispatcher.on('transitionCompleted', function (currentStatus, oldStatus, container) {
      _checkPasswordInStorage();
      _setDimensions();
      _initMediumZoom();
      _bindEvents();
    });
  };

  var _unlockPost = function(form, unlockedContent) {
    var header = form.dataset.header,
        articleBefore = form.dataset.articleBefore,
        articleAfter = form.dataset.articleAfter;

    form.remove();

    var insertHeaderArr = document.getElementsByClassName(Selectors.staticryptInsertHeader),
        insertArticleArr = document.getElementsByClassName(Selectors.staticryptInsertArticle);

    if (insertHeaderArr[0]) {
      insertHeaderArr[0].insertAdjacentHTML('beforeend', header);
    }

    if (insertArticleArr[0]) {
      insertArticleArr[0].insertAdjacentHTML('beforeend', articleBefore + marked(unlockedContent) + articleAfter);
    }

    _setDimensions();
    _initMediumZoom();
    _bindEvents();

    return;
  };

  var _checkPasswordInStorage = function() {
    var formArr = document.getElementsByClassName(Selectors.staticryptForm);

    if (!formArr[0]) { return; }

    var password = sessionStorage.getItem(sessionStorageName);

    if (!password) { return; }

    var form = formArr[0],
        encryptedMsg = form.dataset.encrypted,
        encryptedHMAC = encryptedMsg.substring(0, 64),
        encryptedHTML = encryptedMsg.substring(64),
        decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(password).toString()).toString();

    if (decryptedHMAC !== encryptedHMAC) { return; }

    _unlockPost(form, CryptoJS.AES.decrypt(encryptedHTML, password).toString(CryptoJS.enc.Utf8));
  };

  var _initMediumZoom = function() {
    mediumZoom(document.querySelectorAll(Selectors.zoomImages));
  };

  // var _setMaxMobileWidth = function() {
  //   var b = window.getComputedStyle(
  //             document.querySelector('body'), ':before'
  //           ).getPropertyValue('content')
  //           .replace('px','')
  //           .replace('"', '');

  //   MaxMobileWidth = parseInt(b, 10);
  // };

  var _clearWorkMenu = function() {
    WorkMenuConfig = {
      exists:   false,
      element:  undefined,
      offsetY:  0,
      links:    {},
      refs:     {}
    };

    return;
  };

  var _getWorkMenuTops = function() {
    var tops = {};

    for (var refID in WorkMenuConfig.refs) {
      var top = parseInt(_getYPos(WorkMenuConfig.refs[refID]));
      tops[refID] = top - WorkMenuConfig.offsetY;
    }

    return tops;
  };

  var _initWorkMenu = function() {
    _clearWorkMenu();

    var el = document.getElementsByClassName(Selectors.workMenu);

    if (!el[0]) return;

    var workMenu = el[0],
        offsetY = (workMenu.dataset.offsety) ? (workMenu.dataset.offsety) : 0;

    WorkMenuConfig.exists = true;
    WorkMenuConfig.element = el[0];
    WorkMenuConfig.offsetY = offsetY;

    var workMenuLinks = document.querySelectorAll('.' + Selectors.workMenu + ' a');

    for (var i = 0; i < workMenuLinks.length; i++) {
      var refID = workMenuLinks[i].getAttribute('href').split('#')[1],
          refEl = document.getElementById(refID);

      WorkMenuConfig.links[refID] = workMenuLinks[i];
      WorkMenuConfig.refs[refID] = refEl;
    }
  };
  var _setDimensions = function() {
    _initWorkMenu();
  };

  // ---------------------------------
  // EVENT LISTENERS
  // ---------------------------------

  // fix header when scrolling, plus additional styles
  var _handleHeaderScroll = function() {
    var headerArr = document.getElementsByClassName(Selectors.headerScroll);

    if (!headerArr[0]) { return; }

    var header = headerArr[0],
        scrollTop = window.pageYOffset || 
                    document.documentElement.scrollTop;

    if (scrollTop > 0) {
      header.classList.add('fixed');
      return;
    }

    header.classList.remove('fixed');
  };

  // var _handlePortraitScroll = function() {
  //   var thisEl = document.getElementsByClassName(Selectors.portrait)[0],
  //       scrollTop = window.pageYOffset;

  //   scrollTop = (scrollTop <= 0) 1 : scrollTop;

  //   thisEl.style.opacity = 1 - (scrollTop / 200);
  // };

  // fix workMenu when scrolling past its parent
  var _handleWorkMenuFixed = function() {
    if (!WorkMenuConfig.exists) return;

    var workMenu = WorkMenuConfig.element,
        parent = workMenu.parentNode,
        parentTop = parent.offsetTop,
        offsetY = WorkMenuConfig.offsetY,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        triggerPoint = _getYPos(parent) - offsetY;
        // biggerThanMobile = window.innerWidth >= MaxMobileWidth;

    // if (!biggerThanMobile) return;

    // visible point, given more room for animation
    if (scrollTop >= parentTop - offsetY - 75) {
      workMenu.style.opacity = 1;
    } else {
      workMenu.style.opacity = 0;
    }

    // fixed point
    if (parentTop - scrollTop <= offsetY) {
      workMenu.style.width = parent.offsetWidth + 'px';
      workMenu.style.position = 'fixed';
      workMenu.style.top = offsetY + 'px';
    } else {
      workMenu.style.width = 'auto';
      workMenu.style.position = 'static';
    }
  };

  // smooth scroll on workMenu click
  var _handleWorkMenuClick = function(e) {
    if (!WorkMenuConfig.exists) return;

    e.preventDefault();

    var refID = e.target.getAttribute('href').split('#')[1],
        refEl = WorkMenuConfig.refs[refID],
        refTop = parseInt(_getYPos(refEl)) - WorkMenuConfig.offsetY;

    e.target.blur();
    _scrollTo(refTop, 300);
  };

  // fallback if smooth scroll fails
  // var _handleWorkMenuClick = function(e) {
  //   var offsetY = document.getElementsByClassName(Selectors.workMenu)[0].dataset.offsety,
  //       scrollEl = document.documentElement,
  //       maxBottom = scrollEl.offsetHeight - window.innerHeight;

  //   if (window.scrollY >= maxBottom) { return; };
  //   window.scroll(window.scrollX, window.scrollY - offsetY);
  // };

  var _handlePasswordSubmit = function(e) {
    e.preventDefault();

    var formArr = document.getElementsByClassName(Selectors.staticryptForm);

    if (!formArr[0]) { return; }

    var form = formArr[0],
        passwordArr = form.querySelectorAll('[type="password"]'),
        submitArr = form.querySelectorAll('[type="submit"]');

    if (!passwordArr[0] || !submitArr[0]) { return; }

    var password = passwordArr[0].value,
        encryptedMsg = form.dataset.encrypted,
        encryptedHMAC = encryptedMsg.substring(0, 64),
        encryptedHTML = encryptedMsg.substring(64),
        decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(password).toString()).toString();

    if (decryptedHMAC !== encryptedHMAC) {
      alert('Bad passphrase!');
      passwordArr[0].select();
      return;
    }

    sessionStorage.setItem(sessionStorageName, password.toString());

    _unlockPost(form, CryptoJS.AES.decrypt(encryptedHTML, password).toString(CryptoJS.enc.Utf8));
  };

  var _handleWorkMenuScrollBy = function() {
    if (!WorkMenuConfig.exists) return;

    var workMenu = WorkMenuConfig.element,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        tops = _getWorkMenuTops(),
        maxScrolled = document.documentElement.offsetHeight - window.innerHeight;

    for (var refID in WorkMenuConfig.links) {
      var menuItem = WorkMenuConfig.links[refID].parentNode,
          classes = menuItem.classList;

      if (!classes.contains(Selectors.workMenuLink)) continue;

      var refTop = tops[refID];

      classes.remove('active');

      if (scrollTop >= refTop - 1 || scrollTop >= maxScrolled) {
        for (var _refID in WorkMenuConfig.links) {
          WorkMenuConfig.links[_refID].parentNode.classList.remove('active');
        }

        classes.add('active');
      }
    }
  };

  var _handleWindowResize = function() {
    // _setMaxMobileWidth();
    _setDimensions();
    _handleWorkMenuFixed();
  };

  var _handleWindowScroll = function() {
    _handleHeaderScroll();
    _handleWorkMenuFixed();
    // _handlePortraitScroll();
    _handleWorkMenuScrollBy();
  };

  var _bindEvents = function() {
    window.addEventListener('resize', _handleWindowResize);
    document.addEventListener('scroll', _handleWindowScroll);
    document.addEventListener('submit', _handlePasswordSubmit);

    for(var i in WorkMenuConfig.links) {
      WorkMenuConfig.links[i].addEventListener('click', _handleWorkMenuClick);
    }
  };

  // ---------------------------------
  // INIT
  // ---------------------------------

  obj._init = function() {
    _initBarba();
    // _setMaxMobileWidth();
    _checkPasswordInStorage();
    _setDimensions();
    _initMediumZoom();
    _bindEvents();
  };

  obj._init();

  return obj;
}(window.Main || {}));