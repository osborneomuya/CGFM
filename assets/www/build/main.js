webpackJsonp([5],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_media__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerServiceProvider = (function () {
    function PlayerServiceProvider(media, loadingCtrl) {
        this.media = media;
        this.loadingCtrl = loadingCtrl;
        // This controls the alternating play and pause images and function
        this.play = true;
    }
    // Function to play the audio stream
    PlayerServiceProvider.prototype.playAudio = function () {
        //Loading Spinner Configuration
        var loading = this.loadingCtrl.create({
            content: 'Loading stream...',
            spinner: 'crescent',
            showBackdrop: false,
            cssClass: 'spin' // This class is defined in the app.scss file
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 4000);
        //End of Loading Spinner Configuration
        this.radio = this.media.create('http://ca10.rcast.net:8034/;stream.mp3'); // Insert your own stream URL here.
        this.radio.play();
        // This controls the alternating play and pause images and function
        this.play = false;
    };
    // Function to stop the audio stream
    PlayerServiceProvider.prototype.stopAudio = function () {
        this.radio.stop();
        // This controls the alternating play and pause images and function
        this.play = true;
    };
    return PlayerServiceProvider;
}());
PlayerServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
], PlayerServiceProvider);

//# sourceMappingURL=player-service.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Property used for Firebase database link
        this.info = [];
        this.homePage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('about').on('value', function (snapshot) {
            _this.info = snapshot.val();
        });
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/appimobile/Documents/Apps/radioDemo/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title class="title-text">About Us</ion-title>\n\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle color="myWhite">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only color="myWhite" [navPush]="homePage">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n\n  <div *ngFor="let item of info">\n\n    <!-- Your video link goes here. To put in the actual link go to the about.ts file -->\n    <iframe width="100%" height="40%" [src]="item.video | videos" frameborder="0" allowfullscreen></iframe>\n  \n    <h3 class="title">{{item.title}}</h3>\n  \n    <p class="text" [innerHTML]="item.text"></p>\n\n</div>\n    \n  \n</ion-content>\n'/*ion-inline-end:"/Users/appimobile/Documents/Apps/radioDemo/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocialPage = (function () {
    function SocialPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Property used for Firebase database link
        this.social = [];
        //homePage import for navigation back to the homepage
        this.homePage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('social').on('value', function (snapshot) {
            _this.social = snapshot.val();
        });
    }
    return SocialPage;
}());
SocialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-social',template:/*ion-inline-start:"/Users/appimobile/Documents/Apps/radioDemo/src/pages/social/social.html"*/'<ion-header transparent>\n  \n</ion-header>\n\n\n<ion-content class="bg-image no-scroll" padding>\n\n    <!-- Background video used as background. Uncomment to use the video as a background, then comment out the \'bg-image\' class in social.scss -->\n    <!-- <video autoplay loop playsinline src="assets/video/socialMedia.mp4"></video> -->\n\n    <div class="menu">\n      <ion-icon name="menu" menuToggle></ion-icon>\n    </div>\n\n\n    <ion-fab center middle *ngFor="let item of social">\n\n      <button ion-fab class="animated zoomInUp" color="myYellow"><ion-icon name="md-share"></ion-icon></button>\n        \n      <ion-fab-list side="top">\n        <a href="{{item.facebook}}" onclick="window.open(this.href,\'_system\');return false;">\n          <button ion-fab color="primary"><ion-icon name="logo-facebook"></ion-icon></button>\n        </a>\n      </ion-fab-list>\n        \n      <ion-fab-list side="bottom">\n        <a href="{{item.googleplus}}" onclick="window.open(this.href,\'_system\');return false;">\n          <button ion-fab style="color:#dd4b39"><ion-icon name="logo-googleplus"></ion-icon></button>\n        </a>\n      </ion-fab-list>\n        \n      <ion-fab-list side="left">\n        <a href="{{item.instagram}}" onclick="window.open(this.href,\'_system\');return false;">\n          <button ion-fab style="color:#8a3ab9"><ion-icon name="logo-instagram"></ion-icon></button>\n        </a>\n      </ion-fab-list>\n        \n      <ion-fab-list side="right">\n        <a href="{{item.twitter}}" onclick="window.open(this.href,\'_system\');return false;">\n          <button ion-fab style="color:#4099FF"><ion-icon name="logo-twitter"></ion-icon></button>\n        </a>\n      </ion-fab-list>\n      \n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/appimobile/Documents/Apps/radioDemo/src/pages/social/social.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SocialPage);

//# sourceMappingURL=social.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowPage = (function () {
    function ShowPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.item = navParams.get('item');
    }
    ShowPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    return ShowPage;
}());
ShowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-show',template:/*ion-inline-start:"/Users/appimobile/Documents/Apps/radioDemo/src/pages/show/show.html"*/'<ion-header>\n\n    <ion-navbar color="myRed">\n        <ion-title>Show Info</ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only color="myWhite" (tap)="closeModal()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>\n        \n      </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <h3 class="show">{{item.show}}</h3>\n    <h5 class="host">{{item.hosts}}</h5>\n\n    <img class="picture" [src]="item.photo" />\n\n    <p class="time">On Air From: {{item.time}}</p>\n\n    <p class="text" [innerHTML]="item.details"></p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/appimobile/Documents/Apps/radioDemo/src/pages/show/show.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], ShowPage);

//# sourceMappingURL=show.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_show__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LineUpPage = (function () {
    function LineUpPage(navCtrl, navParams, modalCtrl) {
        // Weekly show Firebase data feed configuration. //
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        // Properties used for Firebase database links
        this.mon = [];
        this.tue = [];
        this.wed = [];
        this.thu = [];
        this.fri = [];
        this.sat = [];
        this.sun = [];
        //homePage import for navigation back to the homepage
        this.homePage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        // Monday line-up
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('shows/mon').on('value', function (snapshot) {
            _this.mon = snapshot.val();
        });
        // Tuesday line-up
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('shows/tue').on('value', function (snapshot) {
            _this.tue = snapshot.val();
        });
        // Wednesday line-up
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('shows/wed').on('value', function (snapshot) {
            _this.wed = snapshot.val();
        });
        // Thursday line-up
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('shows/thu').on('value', function (snapshot) {
            _this.thu = snapshot.val();
        });
        // Friday line-up
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('shows/fri').on('value', function (snapshot) {
            _this.fri = snapshot.val();
        });
        // Saturday line-up
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('shows/sat').on('value', function (snapshot) {
            _this.sat = snapshot.val();
        });
        // Sunday line-up
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('shows/sun').on('value', function (snapshot) {
            _this.sun = snapshot.val();
        });
        // getDay Method
        var currentDate = new Date();
        var weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        this.days = weekdays[currentDate.getDay()];
    }
    // modal controller configuration for show details
    LineUpPage.prototype.showInfo = function (event, item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__show_show__["a" /* ShowPage */], { item: item });
        modal.present();
    };
    return LineUpPage;
}());
LineUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-line-up',template:/*ion-inline-start:"/Users/appimobile/Documents/Apps/radioDemo/src/pages/line-up/line-up.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>Line Up</ion-title>\n\n    <!-- Menu-toggle functionality -->\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle color="myWhite">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <!-- Close button functionality -->\n    <ion-buttons end>\n      <button ion-button icon-only color="myWhite" [navPush]="homePage">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <!-- ion-segment functionality -->\n    <ion-segment class="segment" color="myYellow" [(ngModel)]="days">\n        <ion-segment-button value="monday">\n          Mon\n        </ion-segment-button>\n        <ion-segment-button value="tuesday">\n          Tue\n        </ion-segment-button>\n        <ion-segment-button value="wednesday">\n          Wed\n        </ion-segment-button>\n        <ion-segment-button value="thursday">\n          Thu\n        </ion-segment-button>\n        <ion-segment-button value="friday">\n          Fri\n        </ion-segment-button>\n        <ion-segment-button value="saturday">\n          Sat\n        </ion-segment-button>\n        <ion-segment-button value="sunday">\n          Sun\n        </ion-segment-button>\n      </ion-segment>\n\n      <!-- Show line-up functionality -->\n      <div [ngSwitch]="days">\n          <ion-list no-lines *ngSwitchCase="\'monday\'">\n              <ion-item *ngFor="let item of mon; index as i; odd as isOdd; even as isEven" \n                    [class.odd]="isOdd" [class.even]="isEven">\n                  <ion-thumbnail item-start>\n                    <img [src]="item.picture.medium">\n                  </ion-thumbnail>\n                  <h4 class="title">{{item.show}}</h4>\n                  <h6 class="host">{{item.hosts}}</h6>\n                  <p class="time">{{item.time}}</p>\n                  <ion-icon color="myYellow" item-end name="more" (click)="showInfo($event, item)"></ion-icon>\n                </ion-item>\n          </ion-list>\n\n          <ion-list no-lines *ngSwitchCase="\'tuesday\'">\n              <ion-item *ngFor="let item of tue; index as i; odd as isOdd; even as isEven" \n                    [class.odd]="isOdd" [class.even]="isEven">\n                  <ion-thumbnail item-start>\n                    <img [src]="item.picture.medium">\n                  </ion-thumbnail>\n                  <h4 class="title">{{item.show}}</h4>\n                  <h6 class="host">{{item.hosts}}</h6>\n                  <p class="time">{{item.time}}</p>\n                  <ion-icon color="myYellow" item-end name="more" (click)="showInfo($event, item)"></ion-icon>\n                </ion-item>\n          </ion-list>\n\n          <ion-list no-lines *ngSwitchCase="\'wednesday\'">\n            <ion-item *ngFor="let item of wed; index as i; odd as isOdd; even as isEven" \n                  [class.odd]="isOdd" [class.even]="isEven">\n                <ion-thumbnail item-start>\n                  <img [src]="item.picture.medium">\n                </ion-thumbnail>\n                <h4 class="title">{{item.show}}</h4>\n                <h6 class="host">{{item.hosts}}</h6>\n                <p class="time">{{item.time}}</p>\n                <ion-icon color="myYellow" item-end name="more" (click)="showInfo($event, item)"></ion-icon>\n              </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'thursday\'">\n          <ion-item *ngFor="let item of thu; index as i; odd as isOdd; even as isEven" \n                [class.odd]="isOdd" [class.even]="isEven">\n              <ion-thumbnail item-start>\n                <img [src]="item.picture.medium">\n              </ion-thumbnail>\n              <h4 class="title">{{item.show}}</h4>\n              <h6 class="host">{{item.hosts}}</h6>\n              <p class="time">{{item.time}}</p>\n              <ion-icon color="myYellow" item-end name="more" (click)="showInfo($event, item)"></ion-icon>\n            </ion-item>\n      </ion-list>\n\n      <ion-list no-lines *ngSwitchCase="\'friday\'">\n        <ion-item *ngFor="let item of fri; index as i; odd as isOdd; even as isEven" \n              [class.odd]="isOdd" [class.even]="isEven">\n            <ion-thumbnail item-start>\n              <img [src]="item.picture.medium">\n            </ion-thumbnail>\n            <h4 class="title">{{item.show}}</h4>\n            <h6 class="host">{{item.hosts}}</h6>\n            <p class="time">{{item.time}}</p>\n            <ion-icon color="myYellow" item-end name="more" (click)="showInfo($event, item)"></ion-icon>\n          </ion-item>\n      </ion-list>\n\n      <ion-list no-lines *ngSwitchCase="\'saturday\'">\n        <ion-item *ngFor="let item of sat; index as i; odd as isOdd; even as isEven" \n              [class.odd]="isOdd" [class.even]="isEven">\n            <ion-thumbnail item-start>\n              <img [src]="item.picture.medium">\n            </ion-thumbnail>\n            <h4 class="title">{{item.show}}</h4>\n            <h6 class="host">{{item.hosts}}</h6>\n            <p class="time">{{item.time}}</p>\n            <ion-icon color="myYellow" item-end name="more" (click)="showInfo($event, item)"></ion-icon>\n          </ion-item>\n      </ion-list>\n\n      <ion-list no-lines *ngSwitchCase="\'sunday\'">\n        <ion-item *ngFor="let item of sun; index as i; odd as isOdd; even as isEven" \n              [class.odd]="isOdd" [class.even]="isEven">\n            <ion-thumbnail item-start>\n              <img [src]="item.picture.medium">\n            </ion-thumbnail>\n            <h4 class="title">{{item.show}}</h4>\n            <h6 class="host">{{item.hosts}}</h6>\n            <p class="time">{{item.time}}</p>\n            <ion-icon color="myYellow" item-end name="more" (click)="showInfo($event, item)"></ion-icon>\n          </ion-item>\n      </ion-list>\n      \n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/appimobile/Documents/Apps/radioDemo/src/pages/line-up/line-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], LineUpPage);

//# sourceMappingURL=line-up.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AngularFireDatabase } from 'angularfire2/database';

var DjPage = (function () {
    function DjPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Property used for Firebase database link
        this.dj = [];
        //homePage import for navigation back to the homepage
        this.homePage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('djs').on('value', function (snapshot) {
            _this.dj = snapshot.val();
        });
    }
    return DjPage;
}());
DjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dj',template:/*ion-inline-start:"/Users/appimobile/Documents/Apps/radioDemo/src/pages/dj/dj.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title class="title-text">DJ Profiles</ion-title>\n\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle color="myWhite">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only color="myWhite" [navPush]="homePage">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let item of dj; index as i; odd as isOdd; even as isEven" \n  [class.odd]="isOdd" [class.even]="isEven">\n    \n    <img class="djPic" [src]="item.photo" />\n    \n    <ion-card-content>\n      <ion-card-title class="dj">{{item.hosts}}</ion-card-title>\n        <p class="profile" [innerHTML]="item.profile"></p>\n    </ion-card-content>\n        \n      <ion-row no-padding>\n        <ion-col>\n            <a href="{{item.social.facebook}}" onclick="window.open(this.href,\'_system\');return false;">\n                <img class="icons" src="assets/img/social-fb.png" />\n            </a>\n        </ion-col>\n        \n        <ion-col class="col" text-center>\n            <a href="{{item.social.twitter}}" onclick="window.open(this.href,\'_system\');return false;">\n              <img class="icons" src="assets/img/social-twitter.png" />\n            </a>\n        </ion-col>\n              \n        <ion-col text-right>\n            <a href="{{item.social.instagram}}" onclick="window.open(this.href,\'_system\');return false;">\n              <img class="icons" src="assets/img/social-insta.png" />\n            </a>\n        </ion-col>\n      </ion-row>\n        \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/appimobile/Documents/Apps/radioDemo/src/pages/dj/dj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], DjPage);

//# sourceMappingURL=dj.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		427,
		4
	],
	"../pages/dj/dj.module": [
		431,
		3
	],
	"../pages/line-up/line-up.module": [
		430,
		2
	],
	"../pages/show/show.module": [
		429,
		1
	],
	"../pages/social/social.module": [
		428,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 200;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_videos_videos__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_three_dee_touch__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_line_up_line_up__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dj_dj__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_social_social__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_show_show__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_player_service_player_service__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_line_up_line_up__["a" /* LineUpPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_dj_dj__["a" /* DjPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_social_social__["a" /* SocialPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_8__pipes_videos_videos__["a" /* VideosPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/social/social.module#SocialPageModule', name: 'SocialPage', segment: 'social', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/show/show.module#ShowPageModule', name: 'ShowPage', segment: 'show', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/line-up/line-up.module#LineUpPageModule', name: 'LineUpPage', segment: 'line-up', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dj/dj.module#DjPageModule', name: 'DjPage', segment: 'dj', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_line_up_line_up__["a" /* LineUpPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_dj_dj__["a" /* DjPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_social_social__["a" /* SocialPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_show_show__["a" /* ShowPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_three_dee_touch__["a" /* ThreeDeeTouch */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_player_service_player_service__["a" /* PlayerServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VideosPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var VideosPipe = (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function VideosPipe(dom) {
        this.dom = dom;
    }
    VideosPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    return VideosPipe;
}());
VideosPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Pipe */])({
        name: 'videos',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]])
], VideosPipe);

//# sourceMappingURL=videos.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_three_dee_touch__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_player_service_player_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_social_social__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_line_up_line_up__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dj_dj__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, threeDeeTouch, playerService) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.threeDeeTouch = threeDeeTouch;
        this.playerService = playerService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        // Insert the pages you want to navigate to on the side-menu here, dont forget to also import!
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */];
        this.djPage = __WEBPACK_IMPORTED_MODULE_11__pages_dj_dj__["a" /* DjPage */];
        this.homePage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        this.lineUpPage = __WEBPACK_IMPORTED_MODULE_10__pages_line_up_line_up__["a" /* LineUpPage */];
        this.socialPage = __WEBPACK_IMPORTED_MODULE_9__pages_social_social__["a" /* SocialPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //Firebase configuration - replace the below with your own details from Firebase.
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.initializeApp({
                apiKey: "AIzaSyBGWimmLhiUoyIh9O4Fnvpx-qRBm1y1fuU",
                    authDomain: "cgfm-88895.firebaseapp.com",
                    databaseURL: "https://cgfm-88895.firebaseio.com",
                    projectId: "cgfm-88895",
                    storageBucket: "cgfm-88895.appspot.com",
                    messagingSenderId: "535017758345",
                    appId: "1:535017758345:web:00ba184ad6371070f6f058",
                    measurementId: "G-2XSGY6J1BR"
            });
            // OneSignal Push Notification Service Configuration
            var notificationOpenedCallback = function (jsonData) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            };
            window["plugins"].OneSignal
                .startInit("44887900-9cf2-4860-8835-8b67b818f539", "YOUR_GOOGLE_PROJECT_NUMBER_IF_ANDROID")
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
            //ThreeD Touch Functionality
            _this.threeDeeTouch.isAvailable().then(function (isAvailable) { return console.log('3D Touch available? ' + isAvailable); });
            _this.threeDeeTouch.watchForceTouches()
                .subscribe(function (data) {
                console.log('Force touch %'     + data.force);
                console.log('Force touch timestamp: ' + data.timestamp);
                console.log('Force touch x: ' + data.x);
                console.log('Force touch y: ' + data.y);
            });
            var actions = [
                {
                    type: 'socialMedia',
                    title: 'Social Media',
                    subtitle: 'Connect With Us!',
                    iconType: 'Message'
                },
                {
                    type: 'dj',
                    title: '.radio DJs',
                    subtitle: 'View Bios',
                    iconType: 'Contact'
                },
                {
                    type: 'lineUp',
                    title: 'Show Line Up',
                    subtitle: 'View Schedule',
                    iconType: 'Compose'
                },
                {
                    type: 'home',
                    title: 'Listen Live',
                    subtitle: '.radio stream',
                    iconType: 'Play'
                }
            ];
            _this.threeDeeTouch.configureQuickActions(actions);
            _this.threeDeeTouch.onHomeIconPressed().subscribe(function (payload) {
                // returns an object that is the button you presed
                if (payload.type == 'socialMedia') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_social_social__["a" /* SocialPage */]);
                }
                else if (payload.type == 'dj') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_dj_dj__["a" /* DjPage */]);
                }
                else if (payload.type == 'lineUp') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_line_up_line_up__["a" /* LineUpPage */]);
                }
                else if (payload.type == 'home') {
                    _this.playerService.playAudio();
                }
                ;
                console.log('Pressed the ${payload.title} button');
                console.log(payload.type);
            });
        });
    }
    // Navigation functions for the side-menu pages
    MyApp.prototype.about = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.lineUp = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_line_up_line_up__["a" /* LineUpPage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.dj = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_dj_dj__["a" /* DjPage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.social = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_social_social__["a" /* SocialPage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.home = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
        this.menuCtrl.close();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/appimobile/Documents/Apps/radioDemo/src/app/app.html"*/'<ion-menu [content]="content">\n\n    <ion-content padding>\n        \n        <!-- Logo on top of the side-menu page - classes are defined in the app.scss file -->\n        <img src="assets/img/menu-logo.png" class="menu-logo" />\n\n        <!-- ion-list setup. Navigation functions defined in app.component.ts -->\n        <ion-list style="margin-top:5vh" no-lines>\n          \n          <!-- Right arrow (detail-push) color defined in variable.scss file, under App iOS Variables  -->\n          <ion-item class="menu-text" (tap)="about()" detail-push>\n            about .radio\n            <ion-icon class="icon-color" name="copy" item-start></ion-icon>\n          </ion-item>\n\n          <ion-item class="menu-text" (tap)="lineUp()" detail-push>\n            show line up\n            <ion-icon class="icon-color" name="list" item-start></ion-icon>\n          </ion-item>\n\n          <ion-item class="menu-text" (tap)="dj()" detail-push>\n            your dj\'s\n            <ion-icon class="icon-color" name="people" item-start></ion-icon>\n          </ion-item>\n\n          <!-- This icon uses Font-Awesome. So feel free to use font-awesome icons too. -->\n          <ion-item class="menu-text" (tap)="social()" detail-push>\n            social media\n            <i class="fa fa-hashtag fa-class" aria-hidden="true" item-start></i>\n          </ion-item>\n\n          <!-- Button at the bottom of the side menu page that closes to the home page -->\n          <div style="text-align: center">\n            <ion-icon class="close animated tada" name="close" (tap)="home()"></ion-icon>\n          </div>\n\n      </ion-list>\n      \n    </ion-content>\n\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/appimobile/Documents/Apps/radioDemo/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_three_dee_touch__["a" /* ThreeDeeTouch */], __WEBPACK_IMPORTED_MODULE_5__providers_player_service_player_service__["a" /* PlayerServiceProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_player_service_player_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, admobFree, platform, loadingCtrl, socialSharing, playerService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.admobFree = admobFree;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.playerService = playerService;
        {
            // Player service property from the player-service.ts provider - controls play and pause in home.html functions
            this.playerService.play;
            platform.ready().then(function () {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                // Admob Settings
                var bannerConfig = {

                    autoShow: true,
                    id: 'YOUR APP ID'
                };
                _this.admobFree.banner.config(bannerConfig);
                _this.admobFree.banner.prepare().then(function () {
                    // success
                }).catch(function (e) { return console.log(e); });
                // End of Admob Settings
                // Remote control Plugin settings
                var artist = "CGFM RADIO";
                var title = "The point of no return";
                var album = "Live Stream";
                var image = "https://i2.wp.com/blog.cgfmradio.com/wp-content/uploads/2017/08/cgfm-logo.png?fit=291%2C224";
                var duration = 0; //use value "1" when playing audio files, leave at "0" for streams.
                var elapsedTime = 1;
                var params = [artist, title, album, image, duration, elapsedTime];
                window['remoteControls'].updateMetas(function (success) {
                }, function (fail) {
                }, params);
            });
        }
        // Play and pause functionality in Notification Center 
        document.addEventListener("remote-event", function (event) {
            //do something
            switch (event.remoteEvent.subtype) {
                case "play":
                    console.log("PLAY");
                    _this.playerService.playAudio();
                    break;
                case "pause":
                    console.log("PAUSE");
                    _this.playerService.stopAudio();
                    break;
            }
        });
    }
    // Social Media Sharing Configurartion
    HomePage.prototype.shareFB = function () {
        this.socialSharing.shareViaFacebook("Message via Facebook", "www/assets/img/socialSharingLogo.png", null /* url */)
            .then(function () {
            console.log('Shared!');
        }).catch(function (err) {
            console.log('Oops, something went wrong:', err);
        });
    };
    HomePage.prototype.shareInsta = function () {
        this.socialSharing.shareViaInstagram("Message via Instagram", "www/assets/img/socialSharingLogo.png")
            .then(function () {
            console.log('Shared!');
        }).catch(function (err) {
            console.log('Oops, something went wrong:', err);
        });
    };
    HomePage.prototype.shareTwitter = function () {
        this.socialSharing.shareViaTwitter("Message via Twitter", null /*Image*/, "http://google.com")
            .then(function () {
            console.log('Shared!');
        }).catch(function (err) {
            console.log('Oops, something went wrong:', err);
        });
    };
    HomePage.prototype.shareWhatsapp = function () {
        this.socialSharing.shareViaWhatsApp("Listening to .radio app", null /*Image*/, "http://google.com")
            .then(function () {
            console.log('Shared!');
        }).catch(function (err) {
            console.log('Oops, something went wrong:', err);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/appimobile/Documents/Apps/radioDemo/src/pages/home/home.html"*/'<ion-header transparent>\n  \n</ion-header>\n\n<!-- Uncomment the .no-scroll .scroll-content css class to disable page scrolling -->\n<ion-content class="no-scroll">\n\n  <!-- Div that contains the banner image and menu icon -->\n  <div class="header">\n    \n    <!-- banner image goes here -->\n    <img src="assets/img/home-image.jpg" />\n    \n    <!-- menu icon is setup inside this div -->\n    <div class="menu">\n    <ion-icon name="menu" menuToggle></ion-icon>\n  </div>\n\n  </div>\n  <!-- End of Div -->\n  \n  <!-- logo goes here -->\n  <img src="assets/img/logo.png" class="logo" />  \n  \n  <!-- play and pause images go here as well as their functions (defined in the player-service.ts provider)-->\n  <div *ngIf="playerService.play">\n  <img src="assets/img/play.png" class="play" (tap)="this.playerService.playAudio()" />\n  </div>\n  <div *ngIf="!playerService.play">\n  <img src="assets/img/pause.png" class="play animated flip" (tap)="this.playerService.stopAudio()" />\n  </div>\n  <!-- Configure the notification center remote control settings in home.ts file  -->\n\n  <!-- social media icons and functions. configure the sharing settings in the home.ts file -->\n  <div class="social">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src="assets/img/social-fb.png" (tap)="shareFB()" />\n        </ion-col>\n        <ion-col>\n          <img src="assets/img/social-insta.png" (tap)="shareInsta()" />\n        </ion-col>\n        <ion-col>\n          <img src="assets/img/social-twitter.png" (tap)="shareTwitter()" />\n        </ion-col>\n        <ion-col>\n          <img src="assets/img/social-whatsapp.png" (tap)="shareWhatsapp()" />\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/appimobile/Documents/Apps/radioDemo/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_0__providers_player_service_player_service__["a" /* PlayerServiceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.js.map