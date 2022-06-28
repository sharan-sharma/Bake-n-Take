(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+7EV":
/*!********************************************************!*\
  !*** ./src/app/cake-details/cake-details.component.ts ***!
  \********************************************************/
/*! exports provided: CakeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeDetailsComponent", function() { return CakeDetailsComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CakeDetailsComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Cake Details... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CakeDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.cake.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-star ", ctx_r1.cake.ratings >= 1 ? "checked" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-star ", ctx_r1.cake.ratings >= 2 ? "checked" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-star ", ctx_r1.cake.ratings >= 3 ? "checked" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-star ", ctx_r1.cake.ratings >= 4 ? "checked" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-star ", ctx_r1.cake.ratings >= 5 ? "checked" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.cake.ratings);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.cake.reviews, " Reviews");
} }
function CakeDetailsComponent_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CakeDetailsComponent_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CakeDetailsComponent_div_3_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ing_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ing_r6);
} }
function CakeDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CakeDetailsComponent_div_3_span_3_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CakeDetailsComponent_div_3_span_4_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Ingredients:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CakeDetailsComponent_div_3_li_10_Template, 4, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Current Price :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Weight :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Flavour :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Occasion :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CakeDetailsComponent_div_3_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Add To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.cake.eggless);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.cake.eggless);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.cake.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.cake.ingredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.cake.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-star ", ctx_r2.cake.ratings >= 1 ? "checked" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-star ", ctx_r2.cake.ratings >= 2 ? "checked" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-star ", ctx_r2.cake.ratings >= 3 ? "checked" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-star ", ctx_r2.cake.ratings >= 4 ? "checked" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-star ", ctx_r2.cake.ratings >= 5 ? "checked" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.cake.ratings);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.cake.reviews, " Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.cake.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9 ", ctx_r2.cake.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.cake.buyerAvgReview);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.cake.weight, " Kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.cake.flavour, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.cake.type, "");
} }
class CakeDetailsComponent {
    constructor(route, cs, http, toastr, router) {
        this.route = route;
        this.cs = cs;
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        // object to store the details of the cake
        this.cake = {};
        // to store the status of whether the cake details loaded or not
        this.dataloaded = false;
        // fetch the cakeid from the url using ActivatedRoute class
        const id = +this.route.snapshot.params.id;
        // hit api to get the cake details
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'cake/' + id).subscribe((res) => {
            // store the cake details object to the cake property
            this.cake = res.data;
            //  set data loading to true
            this.dataloaded = true;
        }, (err) => {
            // display the error message
            console.log(err);
            this.toastr.error(err.message);
        });
    }
    // method the add cake to cart
    addToCart() {
        // check whether the user is loging or not
        if (!localStorage.loginUser) {
            this.toastr.warning('Login To use Add To Cart');
            // redirecting user to login page
            setTimeout(() => {
                this.router.navigate(['/login']);
            }, 2000);
        }
        if (localStorage.loginUser) {
            // creating cake object to send in post request
            const cakeObj = {
                cakeid: this.cake.cakeid,
                name: this.cake.name,
                image: this.cake.image,
                weight: this.cake.weight,
                price: this.cake.price,
            };
            // hit post request to add cake to cart
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'addcaketocart', cakeObj).subscribe((res) => {
                // check whether the cake addded to cart or not
                if (res.data) {
                    this.toastr.success(res.message);
                }
                else {
                    this.toastr.warning(res.message);
                }
            }, (err) => {
                // display the error message
                console.log(err);
                this.toastr.error(err.message);
            });
        }
    }
}
CakeDetailsComponent.ɵfac = function CakeDetailsComponent_Factory(t) { return new (t || CakeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CakeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CakeDetailsComponent, selectors: [["app-cake-details"]], decls: 4, vars: 3, consts: [[1, "cake-details-Container"], ["class", "cart-products-list flex", 4, "ngIf"], ["class", "cake-data small-screen", 4, "ngIf"], [4, "ngIf"], [1, "cart-products-list", "flex"], ["src", "https://i.stack.imgur.com/hzk6C.gif", "alt", "", 1, "loading"], [1, "cake-data", "small-screen"], [1, "cake-description"], [1, "userReview"], [1, "rate"], [1, "noOfReviews"], [1, "cake-img-ingredient"], [1, "cake-img"], ["alt", "", 3, "src"], [1, "ingredients"], [1, "heading"], [1, "infredient-list"], [4, "ngFor", "ngForOf"], [1, "cake-data"], [1, "screen-hide"], [1, "userReview", "screen-hide"], [1, "cake-description-text"], [1, "price", "highlight"], [1, "weight"], [1, "flavour", "highlight"], [1, "type"], [1, "cake-buttons"], [1, "btn", "btn-custom", "cart", 3, "click"], ["src", "assets/nonVeg.png", "alt", ""], ["src", "assets/veg.png", "alt", ""]], template: function CakeDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CakeDetailsComponent_ul_1_Template, 4, 0, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CakeDetailsComponent_div_2_Template, 16, 18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CakeDetailsComponent_div_3_Template, 51, 28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.dataloaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataloaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataloaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: Arial;\r\n  margin: 0 auto; \r\n  max-width: 800px; \r\n  padding: 20px;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  margin-right: 25px;\r\n}\r\n\r\n.fa[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n}\r\n\r\n.checked[_ngcontent-%COMP%] {\r\n  color: orange;\r\n}\r\n\r\n\r\n\r\n.side[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 15%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.middle[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 70%;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n\r\n\r\n.row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n\r\n\r\n.bar-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #f1f1f1;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.bar-5[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  height: 18px;\r\n  background-color: #4caf50;\r\n}\r\n\r\n.bar-4[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  height: 18px;\r\n  background-color: #2196f3;\r\n}\r\n\r\n.bar-3[_ngcontent-%COMP%] {\r\n  width: 10%;\r\n  height: 18px;\r\n  background-color: #00bcd4;\r\n}\r\n\r\n.bar-2[_ngcontent-%COMP%] {\r\n  width: 4%;\r\n  height: 18px;\r\n  background-color: #ff9800;\r\n}\r\n\r\n.bar-1[_ngcontent-%COMP%] {\r\n  width: 15%;\r\n  height: 18px;\r\n  background-color: #f44336;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 400px) {\r\n  .side[_ngcontent-%COMP%], .middle[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  .right[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n  font-size: 30px;\r\n  font-weight: 500;\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.cake-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 15px;\r\n  line-height: 1.5;\r\n  color: #666;\r\n}\r\n\r\n.cake-description[_ngcontent-%COMP%]   p.highlight[_ngcontent-%COMP%] {\r\n  color: rgb(150, 57, 85);\r\n  \r\n  font-size: 30px;\r\n\r\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: bolder;\r\n  font-size: 25px;\r\n  color: #444;\r\n  margin: 0;\r\n  \r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%] {\r\n  margin: 50px 50px 0;\r\n  padding: 25px;\r\n  background: rgba(255, 255, 255, 0.37);\r\n  \r\n  border-radius: 5px;\r\n  \r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 20px;\r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%]   .cake-img-ingredient[_ngcontent-%COMP%] {\r\n  max-width: 500px;\r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%]   .cake-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%]   .cake-img[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  position: absolute;\r\n  left: 90%;\r\n  top: 5%;\r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%]   .cake-img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  max-height: 80%;\r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%]   .ingredients[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%]   .ingredients[_ngcontent-%COMP%]   .infredient-list[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  \r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  \r\n  margin: 0;\r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%]   .ingredients[_ngcontent-%COMP%]   .infredient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  padding: 15px 5px;\r\n  \r\n  text-align: center;\r\n  min-width: 160px;\r\n\r\n  height: 100px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%]   .ingredients[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 10px 15px;\r\n  justify-content: flex-start;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  margin: 30px 0;\r\n  border-radius: 5px;\r\n  background: #eee;\r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%]   .cake-description[_ngcontent-%COMP%]   .userReview[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%]   .cake-description[_ngcontent-%COMP%]   .userReview[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 10px 20px;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n}\r\n\r\n.cake-details-Container[_ngcontent-%COMP%]   .cake-description[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  font-family: \"Original Surfer\", cursive;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: 80%;\r\n}\r\n\r\n.weight[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n.type[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  flex-direction: column;\r\n  font-size: 35px;\r\n  font-weight: 500;\r\n  align-items: center;\r\n  color: #444;\r\n}\r\n\r\n.type[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  margin: 15px;\r\n  font-weight: bolder;\r\n  color: #610163;\r\n}\r\n\r\n.cake-buttons[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 20%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.cake-buttons[_ngcontent-%COMP%]   .btn.wishlist[_ngcontent-%COMP%] {\r\n  padding: 10px 15px;\r\n}\r\n\r\n.cake-buttons[_ngcontent-%COMP%]   .btn.cart[_ngcontent-%COMP%] {\r\n  padding: 10px 25px;\r\n}\r\n\r\n.cart-products-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\n.cart-products-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-weight: 800;\r\n}\r\n\r\n.cake-data.small-screen[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  position: fixed;\r\n}\r\n\r\n@media screen and (max-width: 840px) {\r\n  .cake-details-Container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    \r\n  }\r\n  .cake-data.small-screen[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    position: static;\r\n  }\r\n  .screen-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .cake-details-Container[_ngcontent-%COMP%] {\r\n    margin: 20px 20px 0;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .cake-details-Container[_ngcontent-%COMP%] {\r\n    margin: 20px 2px 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNha2UtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWMsRUFBRSxtQkFBbUI7RUFDbkMsZ0JBQWdCLEVBQUUsY0FBYztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSx3QkFBd0I7O0FBQ3hCO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQSw0QkFBNEI7O0FBQzVCO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBLGtHQUFrRzs7QUFDbEc7RUFDRTs7SUFFRSxXQUFXO0VBQ2I7RUFDQSwyQ0FBMkM7RUFDM0M7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixlQUFlOztFQUVmLHNFQUFzRTtBQUN4RTs7QUFDQTtFQUNFLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsU0FBUztBQUNYOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7RUFFckI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6ImNha2UtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50ZXIgd2Vic2l0ZSAqL1xyXG4gIG1heC13aWR0aDogODAwcHg7IC8qIE1heCB3aWR0aCAqL1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uZmEge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmNoZWNrZWQge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi8qIFRocmVlIGNvbHVtbiBsYXlvdXQgKi9cclxuLnNpZGUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vKiBQbGFjZSB0ZXh0IHRvIHRoZSByaWdodCAqL1xyXG4ucmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLyogVGhlIGJhciBjb250YWluZXIgKi9cclxuLmJhci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogSW5kaXZpZHVhbCBiYXJzICovXHJcbi5iYXItNSB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxufVxyXG4uYmFyLTQge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcbn1cclxuLmJhci0zIHtcclxuICB3aWR0aDogMTAlO1xyXG4gIGhlaWdodDogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0O1xyXG59XHJcbi5iYXItMiB7XHJcbiAgd2lkdGg6IDQlO1xyXG4gIGhlaWdodDogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xyXG59XHJcbi5iYXItMSB7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlIHRoZSBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5zaWRlLFxyXG4gIC5taWRkbGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC8qIEhpZGUgdGhlIHJpZ2h0IGNvbHVtbiBvbiBzbWFsbCBzY3JlZW5zICovXHJcbiAgLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbmgxIHtcclxuICBtYXJnaW46IDVweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG5wIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYWtlLWRlc2NyaXB0aW9uIHAge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcbi5jYWtlLWRlc2NyaXB0aW9uIHAuaGlnaGxpZ2h0IHtcclxuICBjb2xvcjogcmdiKDE1MCwgNTcsIDg1KTtcclxuICAvKiBmb250LXdlaWdodDogYm9sZGVyOyAqL1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuXHJcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgXCJBcmlhbCBOYXJyb3cgQm9sZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5oZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzQ0NDtcclxuICBtYXJnaW46IDA7XHJcbiAgLyogYm94LXNoYWRvdzogMnB4IDJweCA1cHggIzAwMDsgKi9cclxufVxyXG5cclxuLmNha2UtZGV0YWlscy1Db250YWluZXIge1xyXG4gIG1hcmdpbjogNTBweCA1MHB4IDA7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzcpO1xyXG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyAqL1xyXG59XHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5jYWtlLWRldGFpbHMtQ29udGFpbmVyID4gZGl2IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcbi5jYWtlLWRldGFpbHMtQ29udGFpbmVyIC5jYWtlLWltZy1pbmdyZWRpZW50IHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcbi5jYWtlLWRldGFpbHMtQ29udGFpbmVyIC5jYWtlLWltZyBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uY2FrZS1kZXRhaWxzLUNvbnRhaW5lciAuY2FrZS1pbWcgc3BhbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA5MCU7XHJcbiAgdG9wOiA1JTtcclxufVxyXG5cclxuLmNha2UtZGV0YWlscy1Db250YWluZXIgLmNha2UtaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogODAlO1xyXG59XHJcbi5jYWtlLWRldGFpbHMtQ29udGFpbmVyIC5pbmdyZWRpZW50cyBwIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5jYWtlLWRldGFpbHMtQ29udGFpbmVyIC5pbmdyZWRpZW50cyAuaW5mcmVkaWVudC1saXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmxpIHtcclxuICAvKiBsaXN0LXN0eWxlOiBub25lOyAqL1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY2FrZS1kZXRhaWxzLUNvbnRhaW5lciAuaW5ncmVkaWVudHMgLmluZnJlZGllbnQtbGlzdCA+IGxpIHtcclxuICBwYWRkaW5nOiAxNXB4IDVweDtcclxuICAvKiBtYXJnaW46IDAgNXB4IDAgMDsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuXHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY2FrZS1kZXRhaWxzLUNvbnRhaW5lciAuaW5ncmVkaWVudHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG59XHJcbi5jYWtlLWRldGFpbHMtQ29udGFpbmVyIC5jYWtlLWRlc2NyaXB0aW9uIC51c2VyUmV2aWV3IC5yYXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jYWtlLWRldGFpbHMtQ29udGFpbmVyIC5jYWtlLWRlc2NyaXB0aW9uIC51c2VyUmV2aWV3IC5yYXRlIHAge1xyXG4gIG1hcmdpbjogMTBweCAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5jYWtlLWRldGFpbHMtQ29udGFpbmVyIC5jYWtlLWRlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9yaWdpbmFsIFN1cmZlclwiLCBjdXJzaXZlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDgwJTtcclxufVxyXG4ud2VpZ2h0IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnR5cGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcbi50eXBlIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogIzYxMDE2MztcclxufVxyXG4uY2FrZS1idXR0b25zIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jYWtlLWJ1dHRvbnMgLmJ0bi53aXNobGlzdCB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG59XHJcbi5jYWtlLWJ1dHRvbnMgLmJ0bi5jYXJ0IHtcclxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbn1cclxuLmNhcnQtcHJvZHVjdHMtbGlzdCBpbWcge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4uY2FydC1wcm9kdWN0cy1saXN0IHAge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbi5jYWtlLWRhdGEuc21hbGwtc2NyZWVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xyXG4gIC5jYWtlLWRldGFpbHMtQ29udGFpbmVyID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICAuY2FrZS1kYXRhLnNtYWxsLXNjcmVlbiB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICB9XHJcbiAgLnNjcmVlbi1oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5jYWtlLWRldGFpbHMtQ29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4IDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmNha2UtZGV0YWlscy1Db250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyMHB4IDJweCAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Walkingtree\Desktop\cakeHOuse\src\main.ts */"zUnb");


/***/ }),

/***/ "5lyI":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function OrdersComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " My Order is Empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " to Order Cakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrdersComponent_ul_7_div_10_li_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cake_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/cakes/", cake_r5.cakeid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", cake_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/cakes/", cake_r5.cakeid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cake_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Weight: ", cake_r5.weight, "kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 8, cake_r5.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cake_r5.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 11, cake_r5.price * cake_r5.quantity, "INR"));
} }
function OrdersComponent_ul_7_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_ul_7_div_10_Template_li_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.showOrderDetails(item_r3.orderid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Order Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, OrdersComponent_ul_7_div_10_li_34_Template, 15, 14, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Total :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#m", item_r3.orderid, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", item_r3.orderdate, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Phone No. : ", item_r3.phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Mail Id : ", item_r3.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Address: ", item_r3.address + "," + item_r3.city + "-" + item_r3.pincode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.orderid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 15, item_r3.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "m", item_r3.orderid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.cakes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !item_r3.freeDelivery ? " Delivery Charge: \u20B9" + ctx_r2.cs.deliveryCharge : "Free Delivery", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](46, 18, item_r3.subtotal, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", !item_r3.freeDelivery ? ctx_r2.cs.deliveryCharge : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](49, 21, 0, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 24, item_r3.price, "INR"), " ");
} }
function OrdersComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Order Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrdersComponent_ul_7_div_10_Template, 53, 27, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cartItems);
} }
class OrdersComponent {
    constructor(toastr, cs, http, router) {
        this.toastr = toastr;
        this.cs = cs;
        this.http = http;
        this.router = router;
        // store cart item of the order
        this.cartItems = [];
        // fetch the orders data from the route
        router.data.subscribe((res) => {
            this.cartItems = res[0].cakeorders;
            this.getOrders();
        });
    }
    // methods to show and hide order details
    showOrderDetails(ordid) {
        const el = document.getElementById(ordid);
        el === null || el === void 0 ? void 0 : el.classList.toggle('hidden');
    }
    getOrders() {
        this.cartItems.forEach((e) => {
            const orddate = new Date(e.orderdate);
            e.orderdate = `${orddate.getDate().toString(10).padStart(2, '0')}/${(orddate.getMonth() + 1)
                .toString(10)
                .padStart(2, '0')}/${orddate.getFullYear()}`;
            e.timeS = orddate.getTime();
            let totalPrice = 0;
            e.cakes.forEach((e) => {
                totalPrice += e.price * e.quantity;
            });
            if (totalPrice >= 500) {
                e.freeDelivery = true;
                e.subtotal = e.price;
            }
            else {
                e.freeDelivery = false;
                e.subtotal = e.price - this.cs.deliveryCharge;
            }
        });
        this.cartItems.sort((a, b) => b.timeS - a.timeS);
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], decls: 8, vars: 2, consts: [[1, "cart", "flex"], [1, "cart-header", "flex"], [1, "cart-main", "flex"], [1, "cart-products", "flex"], ["class", "cart-products-list flex", 4, "ngIf"], [1, "cart-products-list", "flex"], [1, "cart-empty"], ["src", "https://www.pngfind.com/pngs/b/272-2727925_cart-png.png", "alt", "", 1, "loading"], ["routerLink", "/"], [1, "products-header"], [1, "center"], ["class", "order-details", 4, "ngFor", "ngForOf"], [1, "order-details"], [1, "products"], ["data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 3, "href"], [1, "products", 3, "click"], [1, "item-title"], [1, "small-text"], [1, "collapse", 3, "id"], [1, "details"], ["class", "products", 4, "ngFor", "ngForOf"], [1, "products-header", "total"], [1, "fas", "fa-truck"], [1, "total"], [1, "delivery-charge"], [1, "total-price"], [1, "cakename"], ["alt", "", 1, "click-effect", 3, "src", "routerLink"], [1, "click-effect", 3, "routerLink"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrdersComponent_ul_6_Template, 8, 0, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrdersComponent_ul_7_Template, 12, 1, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItems.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n  font-weight: 600;\r\n}\r\n.cart[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  flex-direction: column;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  justify-content: space-between;\r\n  background: rgb(12, 1, 1);\r\n  color: aliceblue;\r\n  padding: 20px;\r\n\r\n  border-radius: 10px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-products[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: rgba(255, 255, 255, 0.541);\r\n  border-radius: 10px;\r\n  border: 2px solid #000;\r\n}\r\n.cart-products-list[_ngcontent-%COMP%]    > .products-header[_ngcontent-%COMP%] {\r\n  background: rgb(94, 90, 90);\r\n  color: #fff;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  border-radius: 5px;\r\n}\r\n.order-details[_ngcontent-%COMP%]    > .products[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background: #ecdede;\r\n  padding: 0 20px;\r\n  margin: 5px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n.products[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n.order-details[_ngcontent-%COMP%]:nth-child(odd)    > .products[_ngcontent-%COMP%] {\r\n  background: #deeaec;\r\n}\r\n.order-details[_ngcontent-%COMP%]    > .products[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 2%;\r\n  right: 1%;\r\n  padding: 0 5px;\r\n  font-size: 20px;\r\n  font-weight: 800;\r\n}\r\n.order-details[_ngcontent-%COMP%]    > .products[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 5px 5px 10px #000;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-main[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n}\r\n.cart[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-products-list[_ngcontent-%COMP%] {\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding-right: 25px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .products-header[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #000;\r\n}\r\n.cart[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  width: 100%;\r\n\r\n  grid-template-columns: 2fr repeat(3, 1fr);\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.order-products[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 30% auto;\r\n}\r\n.order-products[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  width: 100%;\r\n\r\n  grid-template-columns: 2fr repeat(3, 1fr);\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.order-products[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .order-details[_ngcontent-%COMP%] {\r\n  width: 100% !important;\r\n}\r\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  text-align: end;\r\n  \r\n}\r\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-of-type {\r\n  border-top: 1px solid #000;\r\n}\r\n.products-header.total[_ngcontent-%COMP%] {\r\n  grid-template-columns: 2fr repeat(3, 1fr);\r\n}\r\np.small-text[_ngcontent-%COMP%], span.small-text[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  margin: 0;\r\n}\r\n.loading[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\np.item-title[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\np.item-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\r\n  font-size: 30px;\r\n}\r\np.item-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-empty[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-empty[_ngcontent-%COMP%] {\r\n  background: #eee;\r\n  border-radius: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n  align-items: center;\r\n  height: 500px;\r\n  color: rgba(151, 148, 148, 0.801);\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n}\r\nimg.click-effect[_ngcontent-%COMP%]:active, p.click-effect[_ngcontent-%COMP%]:active {\r\n  transform: scale(1);\r\n  box-shadow: 5px 10px 20px #faf !important;\r\n  color: coral;\r\n}\r\np.center[_ngcontent-%COMP%] {\r\n  justify-self: center;\r\n}\r\n.details[_ngcontent-%COMP%] {\r\n  border: 2px solid #000;\r\n  background: #eaddc0;\r\n  padding: 10px;\r\n  transition: all 0.5s ease-in;\r\n  transform: scaleY(1);\r\n  border-radius: 5px;\r\n}\r\n.details[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   p.cakename[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  justify-self: center;\r\n}\r\n.details[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   p.cakename[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 20% auto;\r\n  gap: 20px;\r\n  margin: 20px 0;\r\n}\r\n.details.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n  height: 0;\r\n}\r\n@media screen and (max-width: 840px) {\r\n  *[_ngcontent-%COMP%] {\r\n    font-size: 2vw;\r\n  }\r\n  .cart[_ngcontent-%COMP%]   .cart-products-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    text-align: center;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhOztFQUViLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7O0VBRVgseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXOztFQUVYLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UseUNBQXlDO0FBQzNDO0FBRUE7O0VBRUUsZUFBZTtFQUNmLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7RUFDWDtBQUNGIiwiZmlsZSI6Im9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbmgxIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5jYXJ0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5jYXJ0IC5jYXJ0LWhlYWRlciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZDogcmdiKDEyLCAxLCAxKTtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNhcnQgLmNhcnQtcHJvZHVjdHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxufVxyXG4uY2FydC1wcm9kdWN0cy1saXN0ID4gLnByb2R1Y3RzLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDk0LCA5MCwgOTApO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5vcmRlci1kZXRhaWxzID4gLnByb2R1Y3RzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2VjZGVkZTtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvZHVjdHMgPiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLm9yZGVyLWRldGFpbHM6bnRoLWNoaWxkKG9kZCkgPiAucHJvZHVjdHMge1xyXG4gIGJhY2tncm91bmQ6ICNkZWVhZWM7XHJcbn1cclxuLm9yZGVyLWRldGFpbHMgPiAucHJvZHVjdHMgLnN0YXR1cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMiU7XHJcbiAgcmlnaHQ6IDElO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbi5vcmRlci1kZXRhaWxzID4gLnByb2R1Y3RzOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggIzAwMDtcclxufVxyXG4uY2FydCAuY2FydC1tYWluIHtcclxuICB3aWR0aDogOTUlO1xyXG59XHJcbi5jYXJ0IG1haW4ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJ0IC5jYXJ0LXByb2R1Y3RzLWxpc3Qge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLmNhcnQgLnByb2R1Y3RzLWhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuLmNhcnQgbGkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIHJlcGVhdCgzLCAxZnIpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm9yZGVyLXByb2R1Y3RzIC5jYXJ0IC5pdGVtLXRpdGxlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIGF1dG87XHJcbn1cclxuLm9yZGVyLXByb2R1Y3RzIC5jYXJ0IGxpIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciByZXBlYXQoMywgMWZyKTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5vcmRlci1wcm9kdWN0cyAuY2FydCBsaSBpbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG4uY2FydCAub3JkZXItZGV0YWlscyB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4udG90YWwgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIC8qIG1hcmdpbjogMCA1NSUgMCAwOyAqL1xyXG59XHJcbi50b3RhbCBzcGFuOmxhc3Qtb2YtdHlwZSB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuLnByb2R1Y3RzLWhlYWRlci50b3RhbCB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgcmVwZWF0KDMsIDFmcik7XHJcbn1cclxuXHJcbnAuc21hbGwtdGV4dCxcclxuc3Bhbi5zbWFsbC10ZXh0IHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5sb2FkaW5nIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxucC5pdGVtLXRpdGxlIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5wLml0ZW0tdGl0bGUgcDpmaXJzdC1jaGlsZCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbnAuaXRlbS10aXRsZSBwIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJ0IC5jYXJ0LWVtcHR5IC5sb2FkaW5nIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcbi5jYXJ0IC5jYXJ0LWVtcHR5IHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgY29sb3I6IHJnYmEoMTUxLCAxNDgsIDE0OCwgMC44MDEpO1xyXG59XHJcbi5jYXJ0IC5jYXJ0LWVtcHR5IHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuaW1nLmNsaWNrLWVmZmVjdDphY3RpdmUsXHJcbnAuY2xpY2stZWZmZWN0OmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBib3gtc2hhZG93OiA1cHggMTBweCAyMHB4ICNmYWYgIWltcG9ydGFudDtcclxuICBjb2xvcjogY29yYWw7XHJcbn1cclxucC5jZW50ZXIge1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNlYWRkYzA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmRldGFpbHMgLnByb2R1Y3RzIHAuY2FrZW5hbWUgaW1nIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxzIC5wcm9kdWN0cyBwLmNha2VuYW1lIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIGF1dG87XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uZGV0YWlscy5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xyXG4gICoge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG4gIC5jYXJ0IC5jYXJ0LXByb2R1Y3RzLWxpc3QgaW5wdXQge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "63NV":
/*!*********************************************!*\
  !*** ./src/app/resolvers/orders.service.ts ***!
  \*********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class OrdersService {
    constructor(http) {
        this.http = http;
    }
    resolve() {
        // get user orders details
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'cakeorders', {});
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.component */ "EfPX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cakecard_cakecard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cakecard/cakecard.component */ "w3UV");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pagination/pagination.component */ "hQTH");







function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sort ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_3_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.filter("lth"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Low to High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_3_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.filter("htl"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "High to Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_3_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.filter("res"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_app_cakecard_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cakecard", 15);
} if (rf & 2) {
    const cake_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cake", cake_r10);
} }
function HomeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " No Cake found.(404)!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_app_pagination_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pagination", 18);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cakesArr", ctx_r3.cs.cakeList);
} }
function HomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Welcome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " To Bake n\u2019 Take ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Please wait loading cakes..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.name ? ctx_r4.name : "");
} }
class HomeComponent {
    constructor(cs, http) {
        this.cs = cs;
        this.http = http;
        this.loading = true;
        // Storing the login user name
        this.name = localStorage.loginUser
            ? JSON.parse(localStorage.loginUser)
                .name.replace(JSON.parse(localStorage.loginUser).name[0], JSON.parse(localStorage.loginUser).name[0].toUpperCase())
                .split(' ')[0]
            : '';
        this.cs.getCakeList();
    }
    filter(q) {
        if (q === 'htl') {
            this.cs.cakeSearch = this.cs.cakeList.sort((cake1, cake2) => cake2.price - cake1.price);
        }
        if (q === 'lth') {
            this.cs.cakeSearch = this.cs.cakeList.sort((cake1, cake2) => cake1.price - cake2.price);
        }
        // this.cs.getcakes();
        if (q === 'res') {
            this.cs.reset();
        }
        this.cs.currentp = 1;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 5, consts: [[1, "cake-list"], ["class", "price-filter", 4, "ngFor", "ngForOf"], [3, "cake", 4, "ngFor", "ngForOf"], ["class", "no-query", 4, "ngIf"], ["class", "w-100 m-2x", 3, "cakesArr", 4, "ngIf"], ["class", "model", 4, "ngIf"], [1, "price-filter"], [1, "dropdown"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "fas", "fa-funnel-dollar"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-sort-amount-down-alt"], [1, "fas", "fa-sort-amount-up-alt"], [1, "fas", "fa-undo"], [3, "cake"], [1, "no-query"], ["src", "assets/404.png", "alt", "no-found"], [1, "w-100", "m-2x", 3, "cakesArr"], [1, "model"], [1, "lds-ellipsis"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 18, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_app_cakecard_4_Template, 1, 1, "app-cakecard", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_app_pagination_6_Template, 1, 1, "app-pagination", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 13, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cs.cakeSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cs.cakeSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cs.cakeSearch == null ? null : ctx.cs.cakeSearch.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cs.cakeList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cs.loading);
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _cakecard_cakecard_component__WEBPACK_IMPORTED_MODULE_5__["CakecardComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"]], styles: [".cake-list[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  \r\n  border-radius: 10px;\r\n  padding: 3%;\r\n  \r\n  margin: 40px 1%;\r\n}\r\n.price-filter[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: -1%;\r\n  right: 5%;\r\n  z-index: 2;\r\n}\r\n.price-filter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.price-filter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  box-shadow: 2px 5px 5px #000;\r\n  list-style: none;\r\n  border-radius: 5px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.price-filter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  border-bottom: 0.5px solid black;\r\n  margin: 0;\r\n  padding: 10px 25px;\r\n}\r\n.price-filter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  background: rgb(158, 152, 152);\r\n  color: antiquewhite;\r\n}\r\n.btn-secondary[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none;\r\n  color: #000;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n}\r\n.btn-secondary[_ngcontent-%COMP%]   .fa-funnel-dollar[_ngcontent-%COMP%] {\r\n  color: blueviolet;\r\n  font-size: 20px;\r\n  \r\n  margin-right: 5px;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.no-query[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.61);\r\n  padding: 10%;\r\n  width: 100%;\r\n}\r\n.no-query[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n  color: rgb(152 133 77);\r\n}\r\n.no-query[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n.m-2x[_ngcontent-%COMP%] {\r\n  margin: 30px 0;\r\n  padding: 5%;\r\n}\r\n\r\n.model[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background: rgba(0, 0, 0, 0.925);\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 3000000;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  flex-direction: column;\r\n}\r\n.model[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: yellow;\r\n}\r\n.lds-ellipsis[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 33px;\r\n  width: 13px;\r\n  height: 13px;\r\n  border-radius: 50%;\r\n  background: #fff;\r\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n}\r\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n  left: 8px;\r\n  animation: lds-ellipsis1 0.6s infinite;\r\n}\r\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n  left: 8px;\r\n  animation: lds-ellipsis2 0.6s infinite;\r\n}\r\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n  left: 32px;\r\n  animation: lds-ellipsis2 0.6s infinite;\r\n}\r\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\r\n  left: 56px;\r\n  animation: lds-ellipsis3 0.6s infinite;\r\n}\r\n@keyframes lds-ellipsis1 {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n@keyframes lds-ellipsis3 {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    transform: scale(0);\r\n  }\r\n}\r\n@keyframes lds-ellipsis2 {\r\n  0% {\r\n    transform: translate(0, 0);\r\n  }\r\n  100% {\r\n    transform: translate(24px, 0);\r\n  }\r\n}\r\n@media screen and (max-width: 495px) {\r\n  .cake-list[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    justify-content: center;\r\n    justify-items: center;\r\n  }\r\n  app-pagination[_ngcontent-%COMP%], .no-query[_ngcontent-%COMP%] {\r\n    grid-column: 1/3;\r\n  }\r\n}\r\n@media screen and (max-width: 458px) {\r\n  .cake-list[_ngcontent-%COMP%] {\r\n    grid-template-columns: 100%;\r\n    margin: 20px;\r\n  }\r\n  app-pagination[_ngcontent-%COMP%], .no-query[_ngcontent-%COMP%] {\r\n    grid-column: 1/2;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsU0FBUztFQUNULGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLE1BQU07RUFDTixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbURBQW1EO0FBQ3JEO0FBQ0E7RUFDRSxTQUFTO0VBQ1Qsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxTQUFTO0VBQ1Qsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2QjtFQUNBOztJQUVFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQixZQUFZO0VBQ2Q7RUFDQTs7SUFFRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FrZS1saXN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgLyogYmFja2dyb3VuZDogcmdiYSgxODAsIDE3MywgNzgsIDAuMzg0KTsgKi9cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDMlO1xyXG4gIC8qIG1hcmdpbjogMSU7ICovXHJcbiAgbWFyZ2luOiA0MHB4IDElO1xyXG59XHJcbi5wcmljZS1maWx0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xJTtcclxuICByaWdodDogNSU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4ucHJpY2UtZmlsdGVyID4gZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByaWNlLWZpbHRlciA+IGRpdiA+IC5saXN0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDJweCA1cHggNXB4ICMwMDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLnByaWNlLWZpbHRlciA+IGRpdiA+IC5saXN0ID4gbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbn1cclxuLnByaWNlLWZpbHRlciA+IGRpdiA+IC5saXN0ID4gbGk6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTU4LCAxNTIsIDE1Mik7XHJcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcclxufVxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5idG4tc2Vjb25kYXJ5IC5mYS1mdW5uZWwtZG9sbGFyIHtcclxuICBjb2xvcjogYmx1ZXZpb2xldDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgLyogZm9udC13ZWlnaHQ6IDMwMDsgKi9cclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uZHJvcGRvd24tbWVudSBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uby1xdWVyeSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxKTtcclxuICBwYWRkaW5nOiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5vLXF1ZXJ5IHAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDE1MiAxMzMgNzcpO1xyXG59XHJcbi5uby1xdWVyeSBpbWcge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5tLTJ4IHtcclxuICBtYXJnaW46IDMwcHggMDtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLyogTG9hZGVyIGNzcyAqL1xyXG4ubW9kZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkyNSk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAzMDAwMDAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ubW9kZWwgaDEgc3BhbiB7XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG4ubGRzLWVsbGlwc2lzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG4ubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzNweDtcclxuICB3aWR0aDogMTNweDtcclxuICBoZWlnaHQ6IDEzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG59XHJcbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgbGVmdDogOHB4O1xyXG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xyXG59XHJcbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgbGVmdDogOHB4O1xyXG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG59XHJcbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgbGVmdDogMzJweDtcclxuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxufVxyXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gIGxlZnQ6IDU2cHg7XHJcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk1cHgpIHtcclxuICAuY2FrZS1saXN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgYXBwLXBhZ2luYXRpb24sXHJcbiAgLm5vLXF1ZXJ5IHtcclxuICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1OHB4KSB7XHJcbiAgLmNha2UtbGlzdCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIGFwcC1wYWdpbmF0aW9uLFxyXG4gIC5uby1xdWVyeSB7XHJcbiAgICBncmlkLWNvbHVtbjogMS8yO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AJ6+":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AdminService {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        // store the cake list search results
        this.cakeSearch = [];
        // store the cake list array
        this.cakeList = [];
        this.cakes = [];
        // store the current page
        this.currentp = 1;
        // loading data status
        this.loading = true;
    }
    // method to get cake details
    getCakeList() {
        this.loading = true;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'allcakes').subscribe((res) => {
            this.loading = false;
            if (res.data) {
                this.cakeList = res.data;
                this.cakeSearch = [...this.cakeList];
                this.cakes = [...this.cakeList];
                return;
            }
            this.toastr.warning(res.message);
        }, (err) => {
            console.log(err);
            this.toastr.error(err.message, 'Error in loading Cakes', {
                positionClass: 'toast-top-full-width',
                timeOut: 10000,
            });
        });
    }
    // method to vaildate cake details
    validateCakeDetails(cake) {
        if (!cake.name || !cake.name.trim()) {
            this.toastr.warning('Cake name should not be empty');
            return false;
        }
        if (!+cake.price || cake.price < 1) {
            this.toastr.warning('Price should be in rupees & greater than ₹1');
            return false;
        }
        if (!+cake.weight) {
            this.toastr.warning('Weight should be in Kg & greater than or equal to 1');
            return false;
        }
        if (!cake.type || !cake.type.trim()) {
            this.toastr.warning('Type field should not be empty');
            return false;
        }
        if (!cake.flavour || !cake.flavour.trim()) {
            this.toastr.warning('Flavour field should not be empty');
            return false;
        }
        return true;
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://apifromashu.herokuapp.com/api/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BC4N":
/*!***********************************************!*\
  !*** ./src/app/guards/canactivate.service.ts ***!
  \***********************************************/
/*! exports provided: CanactivateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanactivateService", function() { return CanactivateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");



class CanactivateService {
    constructor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    canActivate(route, state) {
        // check for the current url is for login, signup or forgetpassword or not
        if (state.url === '/login' ||
            state.url === '/signup' ||
            state.url === '/forgetPassword') {
            // check if user is login
            if (localStorage.loginUser) {
                this.toastr.info('You Are already loged in.');
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }
        // check if user is not login
        if (!localStorage.loginUser) {
            this.toastr.info('You need to Login First.');
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
CanactivateService.ɵfac = function CanactivateService_Factory(t) { return new (t || CanactivateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
CanactivateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanactivateService, factory: CanactivateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EM2z":
/*!***********************************!*\
  !*** ./src/app/test.directive.ts ***!
  \***********************************/
/*! exports provided: TestDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDirective", function() { return TestDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TestDirective {
    constructor() {
    }
}
TestDirective.ɵfac = function TestDirective_Factory(t) { return new (t || TestDirective)(); };
TestDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TestDirective, selectors: [["", "appTest", ""]] });


/***/ }),

/***/ "EfPX":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CarouselComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "cake/", img_r1.cakeid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CarouselComponent {
    constructor(cs) {
        this.cs = cs;
        // carousel image array
        this.carouselImgs = this.cs.carouselImgs;
    }
    ngOnInit() { }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 13, vars: 2, consts: [["id", "carouselExampleControls", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["routerLink", "/shopNow", "alt", "...", 1, "d-block", "w-100", 3, "src"], ["class", "carousel-item", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-item"], ["alt", "...", 1, "d-block", "w-100", 3, "src", "routerLink"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_div_4_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.carouselImgs[0].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carouselImgs.slice(1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 30vw;\r\n  min-height: 300px;\r\n  cursor: pointer;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7QUFDekIiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZSBpbWcge1xyXG4gIGhlaWdodDogMzB2dztcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogb2JqZWN0LWZpdDogY292ZXI7ICovXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CheckoutComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_a_7_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.activate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Place Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Place Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_a_10_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.activate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CheckoutComponent {
    constructor(cs) {
        this.cs = cs;
    }
    ngDoCheck() {
        // check if the user entered name input field or not
        if (!this.cs.order.name) {
            // disable this payment option
            this.cs.payment = false;
        }
    }
    activate(e) {
        // check if payment option is disable
        if (!this.cs.payment) {
            // select the closest a tag to the target
            const el = e.target.closest('a');
            // check if the a tag is disable
            if (el.className.includes('a-disabled')) {
                return el.parentElement.classList.remove('active');
            }
        }
        // check if order form is enable
        if (this.cs.orderconfirm) {
            // select the all li tag inside the navigation menu
            const allli = e.target.closest('ul').querySelectorAll('li');
            // remove the active class from all the li tags
            allli.forEach((e) => {
                e.classList.remove('active');
            });
            //  add the active class the clicked li tag
            e.target.closest('li').classList.add('active');
        }
    }
    ngOnInit() {
        // select the all li tags and store it as a array
        this.cs.ullist = Array.from(document.querySelectorAll('li'));
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 14, vars: 4, consts: [[1, "checkout"], [1, "sidebar"], [1, "active"], ["routerLink", "/checkout", 3, "click"], ["routerLink", "/checkout/details", 3, "click", 4, "ngIf"], ["class", "a-disabled", 4, "ngIf"], ["routerLink", "/checkout/confirm", 3, "click", 4, "ngIf"], [1, "mainb"], ["routerLink", "/checkout/details", 3, "click"], [1, "a-disabled"], ["routerLink", "/checkout/confirm", 3, "click"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_Template_a_click_4_listener($event) { return ctx.activate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Order Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CheckoutComponent_a_7_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CheckoutComponent_a_8_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CheckoutComponent_a_10_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CheckoutComponent_a_11_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cs.orderconfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cs.orderconfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cs.payment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cs.payment);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".checkout[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 20% auto;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 30vh;\r\n  left: 0;\r\n  \r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  width: 20vw;\r\n\r\n  background: #eee;\r\n  position: fixed;\r\n  top: 30vh;\r\n  left: 1vw;\r\n\r\n  \r\n  padding: 20px;\r\n  margin: 0;\r\n  border-radius: 20px;\r\n  border: 0.5px solid #333;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n  margin: 20px 0;\r\n  background: rgb(212 196 250);\r\n  transition: all 0.5s ease;\r\n  border-bottom: 1px solid #000;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 25px 10px;\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active {\r\n  background: rgba(0, 0, 0, 0.466) !important;\r\n  color: #fff;\r\n}\r\n\r\n.a-disabled[_ngcontent-%COMP%] {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  background-color: #666 !important;\r\n  box-shadow: 2px 5px 10px #000;\r\n  transform: scale(1.03);\r\n}\r\n\r\n.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: #fff !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxXQUFXOztFQUVYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsU0FBUztFQUNULFNBQVM7O0VBRVQsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUNBO0VBQ0UsMkNBQTJDO0VBQzNDLFdBQVc7QUFDYjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgYXV0bztcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAzMHZoO1xyXG4gIGxlZnQ6IDA7XHJcbiAgLyogYmFja2dyb3VuZDogI2VlZTsgKi9cclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uc2lkZWJhciB1bCB7XHJcbiAgd2lkdGg6IDIwdnc7XHJcblxyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzB2aDtcclxuICBsZWZ0OiAxdnc7XHJcblxyXG4gIC8qIGJhY2tncm91bmQ6ICNlZWU7ICovXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICMzMzM7XHJcbn1cclxuLnNpZGViYXIgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIxMiAxOTYgMjUwKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcbi5zaWRlYmFyIGxpIGEge1xyXG4gIHBhZGRpbmc6IDI1cHggMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLnNpZGViYXIgbGk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDY2KSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5hLWRpc2FibGVkIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjYgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAycHggNXB4IDEwcHggIzAwMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG59XHJcbi5hY3RpdmUgPiBhIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "KShT":
/*!****************************************************!*\
  !*** ./src/app/shop-cakes/shop-cakes.component.ts ***!
  \****************************************************/
/*! exports provided: ShopCakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCakesComponent", function() { return ShopCakesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cakecard_cakecard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cakecard/cakecard.component */ "w3UV");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pagination/pagination.component */ "hQTH");






function ShopCakesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sort ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopCakesComponent_div_1_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.filter("lth"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Low to High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopCakesComponent_div_1_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.filter("htl"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "High to Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopCakesComponent_div_1_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.filter("res"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShopCakesComponent_app_cakecard_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cakecard", 15);
} if (rf & 2) {
    const cake_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cake", cake_r10);
} }
function ShopCakesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " No Cake found.(404)!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShopCakesComponent_app_pagination_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pagination", 18);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cakesArr", ctx_r3.cs.cakeList);
} }
function ShopCakesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please wait loading cakes..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ShopCakesComponent {
    constructor(cs, http) {
        this.cs = cs;
        this.http = http;
        this.loading = true;
        this.cs.getCakeList();
    }
    filter(q) {
        if (q === 'htl') {
            this.cs.cakeSearch = this.cs.cakeList.sort((cake1, cake2) => cake2.price - cake1.price);
        }
        if (q === 'lth') {
            this.cs.cakeSearch = this.cs.cakeList.sort((cake1, cake2) => cake1.price - cake2.price);
        }
        // this.cs.getcakes();
        if (q === 'res') {
            this.cs.reset();
        }
        this.cs.currentp = 1;
    }
}
ShopCakesComponent.ɵfac = function ShopCakesComponent_Factory(t) { return new (t || ShopCakesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ShopCakesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopCakesComponent, selectors: [["app-shop-cakes"]], decls: 6, vars: 5, consts: [[1, "cake-list"], ["class", "price-filter", 4, "ngFor", "ngForOf"], [3, "cake", 4, "ngFor", "ngForOf"], ["class", "no-query", 4, "ngIf"], ["class", "w-100 m-2x", 3, "cakesArr", 4, "ngIf"], ["class", "model", 4, "ngIf"], [1, "price-filter"], [1, "dropdown"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "fas", "fa-funnel-dollar"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-sort-amount-down-alt"], [1, "fas", "fa-sort-amount-up-alt"], [1, "fas", "fa-undo"], [3, "cake"], [1, "no-query"], ["src", "assets/404.png", "alt", "no-found"], [1, "w-100", "m-2x", 3, "cakesArr"], [1, "model"], [1, "lds-ellipsis"]], template: function ShopCakesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShopCakesComponent_div_1_Template, 18, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopCakesComponent_app_cakecard_2_Template, 1, 1, "app-cakecard", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShopCakesComponent_div_3_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShopCakesComponent_app_pagination_4_Template, 1, 1, "app-pagination", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShopCakesComponent_div_5_Template, 8, 0, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cs.cakeSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cs.cakeSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cs.cakeSearch == null ? null : ctx.cs.cakeSearch.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cs.cakeList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cs.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _cakecard_cakecard_component__WEBPACK_IMPORTED_MODULE_4__["CakecardComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"]], styles: [".cake-list[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  \r\n  border-radius: 10px;\r\n  padding: 3%;\r\n  \r\n  margin: 40px 1%;\r\n}\r\n.price-filter[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: -1%;\r\n  right: 5%;\r\n  z-index: 2;\r\n}\r\n.price-filter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.price-filter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  box-shadow: 2px 5px 5px #000;\r\n  list-style: none;\r\n  border-radius: 5px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.price-filter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  border-bottom: 0.5px solid black;\r\n  margin: 0;\r\n  padding: 10px 25px;\r\n}\r\n.price-filter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  background: rgb(158, 152, 152);\r\n  color: antiquewhite;\r\n}\r\n.btn-secondary[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none;\r\n  color: #000;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n}\r\n.btn-secondary[_ngcontent-%COMP%]   .fa-funnel-dollar[_ngcontent-%COMP%] {\r\n  color: blueviolet;\r\n  font-size: 20px;\r\n  \r\n  margin-right: 5px;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.no-query[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.61);\r\n  padding: 10%;\r\n  width: 100%;\r\n}\r\n.no-query[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n  color: rgb(152 133 77);\r\n}\r\n.no-query[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n.m-2x[_ngcontent-%COMP%] {\r\n  margin: 30px 0;\r\n  padding: 5%;\r\n}\r\n\r\n.model[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background: rgba(0, 0, 0, 0.925);\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 3000000;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  flex-direction: column;\r\n}\r\n.model[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: yellow;\r\n}\r\n.lds-ellipsis[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 33px;\r\n  width: 13px;\r\n  height: 13px;\r\n  border-radius: 50%;\r\n  background: #fff;\r\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n}\r\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n  left: 8px;\r\n  animation: lds-ellipsis1 0.6s infinite;\r\n}\r\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n  left: 8px;\r\n  animation: lds-ellipsis2 0.6s infinite;\r\n}\r\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n  left: 32px;\r\n  animation: lds-ellipsis2 0.6s infinite;\r\n}\r\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\r\n  left: 56px;\r\n  animation: lds-ellipsis3 0.6s infinite;\r\n}\r\n@keyframes lds-ellipsis1 {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n@keyframes lds-ellipsis3 {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    transform: scale(0);\r\n  }\r\n}\r\n@keyframes lds-ellipsis2 {\r\n  0% {\r\n    transform: translate(0, 0);\r\n  }\r\n  100% {\r\n    transform: translate(24px, 0);\r\n  }\r\n}\r\n@media screen and (max-width: 495px) {\r\n  .cake-list[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    justify-content: center;\r\n    justify-items: center;\r\n  }\r\n  app-pagination[_ngcontent-%COMP%], .no-query[_ngcontent-%COMP%] {\r\n    grid-column: 1/3;\r\n  }\r\n}\r\n@media screen and (max-width: 458px) {\r\n  .cake-list[_ngcontent-%COMP%] {\r\n    grid-template-columns: 100%;\r\n    margin: 20px;\r\n  }\r\n  app-pagination[_ngcontent-%COMP%], .no-query[_ngcontent-%COMP%] {\r\n    grid-column: 1/2;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AtY2FrZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsU0FBUztFQUNULGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLE1BQU07RUFDTixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbURBQW1EO0FBQ3JEO0FBQ0E7RUFDRSxTQUFTO0VBQ1Qsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxTQUFTO0VBQ1Qsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2QjtFQUNBOztJQUVFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQixZQUFZO0VBQ2Q7RUFDQTs7SUFFRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzaG9wLWNha2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FrZS1saXN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgLyogYmFja2dyb3VuZDogcmdiYSgxODAsIDE3MywgNzgsIDAuMzg0KTsgKi9cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDMlO1xyXG4gIC8qIG1hcmdpbjogMSU7ICovXHJcbiAgbWFyZ2luOiA0MHB4IDElO1xyXG59XHJcbi5wcmljZS1maWx0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xJTtcclxuICByaWdodDogNSU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4ucHJpY2UtZmlsdGVyID4gZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByaWNlLWZpbHRlciA+IGRpdiA+IC5saXN0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDJweCA1cHggNXB4ICMwMDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLnByaWNlLWZpbHRlciA+IGRpdiA+IC5saXN0ID4gbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbn1cclxuLnByaWNlLWZpbHRlciA+IGRpdiA+IC5saXN0ID4gbGk6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTU4LCAxNTIsIDE1Mik7XHJcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcclxufVxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5idG4tc2Vjb25kYXJ5IC5mYS1mdW5uZWwtZG9sbGFyIHtcclxuICBjb2xvcjogYmx1ZXZpb2xldDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgLyogZm9udC13ZWlnaHQ6IDMwMDsgKi9cclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uZHJvcGRvd24tbWVudSBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uby1xdWVyeSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxKTtcclxuICBwYWRkaW5nOiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5vLXF1ZXJ5IHAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDE1MiAxMzMgNzcpO1xyXG59XHJcbi5uby1xdWVyeSBpbWcge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5tLTJ4IHtcclxuICBtYXJnaW46IDMwcHggMDtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLyogTG9hZGVyIGNzcyAqL1xyXG4ubW9kZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkyNSk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAzMDAwMDAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ubW9kZWwgaDEgc3BhbiB7XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG4ubGRzLWVsbGlwc2lzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG4ubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzNweDtcclxuICB3aWR0aDogMTNweDtcclxuICBoZWlnaHQ6IDEzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG59XHJcbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgbGVmdDogOHB4O1xyXG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xyXG59XHJcbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgbGVmdDogOHB4O1xyXG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG59XHJcbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgbGVmdDogMzJweDtcclxuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxufVxyXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gIGxlZnQ6IDU2cHg7XHJcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk1cHgpIHtcclxuICAuY2FrZS1saXN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgYXBwLXBhZ2luYXRpb24sXHJcbiAgLm5vLXF1ZXJ5IHtcclxuICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1OHB4KSB7XHJcbiAgLmNha2UtbGlzdCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIGFwcC1wYWdpbmF0aW9uLFxyXG4gIC5uby1xdWVyeSB7XHJcbiAgICBncmlkLWNvbHVtbjogMS8yO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "OlR4":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");




class CommonService {
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        // carousel Image array
        this.carouselImgs = [
            {
                img: './assets/Cake-HD.jpg',
                cakeid: '',
            },
            {
                img: 'https://i1.wp.com/www.frugalfeeds.com.au/wp-content/uploads/2016/06/Lindt-Lava-Cake.png',
                cakeid: 1621337480751,
            },
            {
                img: 'https://www.frugalfeeds.nz/wp-content/uploads/2018/09/Burger-King-Molten-Lava-Cake.png',
                cakeid: 1621761236684,
            },
        ];
        // store Data loading status
        this.loading = true;
        // To store the array of cakes
        this.cakeList = [];
        // to store the array of the search result
        this.cakeSearch = [];
        // to store the cake data.
        this.cakes = [];
        // to store the current page number
        this.currentp = 1;
        // set default deliveryCharge
        this.deliveryCharge = 45;
        // minmum cart value for free delivery
        this.mincartvalue = 500;
        // to store the user details for place order
        this.order = {};
        // store the status of the payment window is open or not
        this.payment = false;
        // store the status of the order form
        this.orderconfirm = false;
        // store the navigation side bar menu
        this.ullist = [];
    }
    // method to get the cake data
    getCakeList() {
        // api hit the get cakes data
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'allcakes').subscribe(
        // handle response
        (res) => {
            // to hide welcome loader
            this.loading = false;
            // check if data res data is there or not
            if (res.data) {
                // storing res data to the variable
                this.cakeList = res.data;
                this.cakeSearch = [...this.cakeList];
                this.cakes = [...this.cakeList];
            }
        }, 
        // handle error
        (err) => {
            // show error message
            console.log(err);
            this.toastr.error(err.message, 'Error in loading Cakes', {
                positionClass: 'toast-top-full-width',
                timeOut: 10000,
            });
        });
    }
    // method to clear the sorting
    reset() {
        this.cakeList = [...this.cakes];
    }
    // method to validate email id
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    // method to validate login session
    validatelogin() {
        // hit get request to validate login token
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'getuserdetails').subscribe((res) => {
            if (res.ok === false) {
                localStorage.removeItem('loginUser');
            }
        }, (err) => {
            if (err.ok === false) {
                localStorage.removeItem('loginUser');
            }
        });
    }
    // validate 10 digit phone number
    validatephonenumber(number) {
        const phoneno = /^\d{10}$/;
        if (number.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
    }
    // validate pincode
    validatepincode(code) {
        return /^(\d{4}|\d{6})$/.test(code);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/common.service */ "OlR4");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(cs) {
        this.cs = cs;
        this.title = "Bake n’ Take";
        // call To validate login token
        cs.validatelogin();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-ui-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["ɵb"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pagination_admin_pagination_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pagination-admin/pagination-admin.component */ "Ub+H");







function AdminComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AdminComponent_form_9_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_form_9_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.searchquery = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchquery);
} }
function AdminComponent_ul_12_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cakes... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_ul_12_p_1_Template, 3, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.admin.loading !== "upldating");
} }
function AdminComponent_ul_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Cake found !!! For your Search Query. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminComponent_ul_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_ul_13_p_1_Template, 3, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.admin.loading !== "upldating");
} }
function AdminComponent_ul_14_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, item_r11.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/admin/editcake/", item_r11.cakeid, "");
} }
function AdminComponent_ul_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_ul_14_Template_p_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.sortcake(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminComponent_ul_14_li_9_Template, 12, 7, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.admin.cakeSearch);
} }
function AdminComponent_app_pagination_admin_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pagination-admin", 29);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cakesArr", ctx_r4.admin.cakeList);
} }
class AdminComponent {
    constructor(toastr, admin, router) {
        this.toastr = toastr;
        this.admin = admin;
        this.router = router;
        // store the default sort status
        this.sort = 'lth';
        // check whether the user is admin or not
        if (!(JSON.parse(localStorage.loginUser).email === 'shantanu.sharma@walkingtree.tech')) {
            toastr.info('Only Admin User Can Access Admin Panel');
            router.navigate(['/']);
        }
        // method call to get cake lists
        this.admin.getCakeList();
    }
    ngOnInit() { }
    ngDoCheck() { }
    // method to perform search
    search() {
        // filter the cake list according the search query
        if (this.searchquery) {
            this.admin.cakeList = [...this.admin.cakes].filter((cake) => cake.name.toLowerCase().includes(this.searchquery.toLowerCase()));
        }
        else {
            this.admin.cakeList = [...this.admin.cakes];
        }
        // Set current page to one
        this.admin.currentp = 1;
    }
    // method to sort cake list according to price
    sortcake() {
        // sort cake array from high to low price
        if (this.sort === 'htl') {
            this.admin.cakeSearch = this.admin.cakeList.sort((cake1, cake2) => cake2.price - cake1.price);
            this.sort = 'lth';
            return;
        }
        // sort cake array from low to high  price
        if (this.sort === 'lth') {
            this.admin.cakeSearch = this.admin.cakeList.sort((cake1, cake2) => cake1.price - cake2.price);
            this.sort = 'htl';
            return;
        }
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 16, vars: 5, consts: [[1, "admin", "flex"], [1, "admin-header", "flex"], [1, "cart-right"], ["routerLink", "/admin/addcake", 1, "btn", "btn-primary", "click-effect"], [1, "far", "fa-plus-square", "fs-2x"], ["action", "#", "class", "form-group flex admin-search", 3, "submit", 4, "ngIf"], [1, "admin-main", "flex"], [1, "admin-products", "flex"], ["class", "admin-products-list flex", 4, "ngIf"], [3, "cakesArr", 4, "ngIf"], ["action", "#", 1, "form-group", "flex", "admin-search", 3, "submit"], ["type", "search", "name", "search", "placeholder", "search..", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn"], [1, "fas", "fa-search"], [1, "admin-products-list", "flex"], [4, "ngIf"], ["src", "https://i.stack.imgur.com/hzk6C.gif", "alt", "", 1, "loading"], ["class", "notfound", 4, "ngIf"], [1, "notfound"], ["src", "assets/notFound.png", "alt", "", 1, "loading"], [1, "products-header"], [1, "price-filter", 3, "click"], [1, "fas", "fa-sort"], ["class", "products", 4, "ngFor", "ngForOf"], [1, "products"], [1, "item-title"], ["alt", "", 1, "item-img", 3, "src"], [1, "btn", 3, "routerLink"], [1, "fas", "fa-edit"], [3, "cakesArr"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cakes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Add Cake ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminComponent_form_9_Template, 4, 1, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "main", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminComponent_ul_12_Template, 2, 1, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminComponent_ul_13_Template, 2, 1, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminComponent_ul_14_Template, 11, 1, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminComponent_app_pagination_admin_15_Template, 1, 1, "app-pagination-admin", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.admin.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.admin.loading && ctx.admin.cakeSearch.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.admin.loading && ctx.admin.cakeSearch.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.admin.loading && ctx.admin.cakeSearch.length > 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _pagination_admin_pagination_admin_component__WEBPACK_IMPORTED_MODULE_6__["PaginationAdminComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n  font-weight: 600;\r\n}\r\n.admin[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  flex-direction: column;\r\n}\r\n.admin[_ngcontent-%COMP%]   .admin-header[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  justify-content: space-between;\r\n  background: #000;\r\n  color: aliceblue;\r\n  padding: 20px;\r\n  border: 0.5px solid #000;\r\n  border-radius: 10px;\r\n}\r\n.admin[_ngcontent-%COMP%]   .admin-products[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: rgba(240, 248, 255, 0.568);\r\n  border-radius: 10px;\r\n}\r\n.price-filter[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.admin[_ngcontent-%COMP%]   .admin-main[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n}\r\n.admin[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\n.admin[_ngcontent-%COMP%]   .admin-products-list[_ngcontent-%COMP%] {\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding-right: 25px;\r\n}\r\n.admin[_ngcontent-%COMP%]   .admin-products-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  max-width: 50px;\r\n}\r\n.admin[_ngcontent-%COMP%]   .admin-products-list[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  height: auto;\r\n  object-fit: cover;\r\n  border-radius: 10px;\r\n  box-shadow: 2px 5px 10px #000;\r\n  margin: 10px 20px;\r\n}\r\n.admin[_ngcontent-%COMP%]   .products-header[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #000;\r\n}\r\n.admin[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  width: 100%;\r\n\r\n  grid-template-columns: 3fr repeat(2, 1fr);\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  text-align: end;\r\n  \r\n}\r\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-of-type {\r\n  border-top: 1px solid #000;\r\n}\r\n.products-header.total[_ngcontent-%COMP%] {\r\n  grid-template-columns: 2fr repeat(2, 1fr);\r\n}\r\n.admin[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 30% auto;\r\n  align-items: center;\r\n}\r\np.small-text[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  margin: 0;\r\n}\r\n.loading[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n.admin[_ngcontent-%COMP%]   .admin-empty[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n.admin[_ngcontent-%COMP%]   .admin-empty[_ngcontent-%COMP%] {\r\n  background: #eee;\r\n  border-radius: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n  align-items: center;\r\n  height: 500px;\r\n  color: rgba(151, 148, 148, 0.801);\r\n}\r\n.admin[_ngcontent-%COMP%]   .admin-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n}\r\napp-search[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n}\r\n.admin-products-list[_ngcontent-%COMP%]   p.notfound[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  color: #6f4e37;\r\n  font-weight: 600;\r\n  font-size: 15px;\r\n  justify-content: space-between;\r\n}\r\n.admin-products-list[_ngcontent-%COMP%]   p.notfound[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin-bottom: 20px;\r\n}\r\n.cart-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .cart-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n}\r\n.admin-search[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border-radius: 15px;\r\n}\r\n.admin-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 0 5px;\r\n  border-radius: 0 15px 15px 0;\r\n}\r\n.admin-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 15px 0 0 15px;\r\n}\r\n@media screen and (max-width: 840px) {\r\n  *[_ngcontent-%COMP%] {\r\n    font-size: 2vw;\r\n  }\r\n  .cart[_ngcontent-%COMP%]   .cart-products-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    text-align: center;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXOztFQUVYLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYWRtaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmFkbWluIC5hZG1pbi1oZWFkZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5hZG1pbiAuYWRtaW4tcHJvZHVjdHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC41NjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnByaWNlLWZpbHRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZG1pbiAuYWRtaW4tbWFpbiB7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG4uYWRtaW4gbWFpbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFkbWluIC5hZG1pbi1wcm9kdWN0cy1saXN0IHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuLmFkbWluIC5hZG1pbi1wcm9kdWN0cy1saXN0IGlucHV0IHtcclxuICBtYXgtd2lkdGg6IDUwcHg7XHJcbn1cclxuLmFkbWluIC5hZG1pbi1wcm9kdWN0cy1saXN0IC5pdGVtLWltZyB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAycHggNXB4IDEwcHggIzAwMDtcclxuICBtYXJnaW46IDEwcHggMjBweDtcclxufVxyXG4uYWRtaW4gLnByb2R1Y3RzLWhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuLmFkbWluIGxpIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciByZXBlYXQoMiwgMWZyKTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50b3RhbCBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgLyogbWFyZ2luOiAwIDU1JSAwIDA7ICovXHJcbn1cclxuLnRvdGFsIHNwYW46bGFzdC1vZi10eXBlIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcclxufVxyXG4ucHJvZHVjdHMtaGVhZGVyLnRvdGFsIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciByZXBlYXQoMiwgMWZyKTtcclxufVxyXG5cclxuLmFkbWluIC5pdGVtLXRpdGxlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIGF1dG87XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5wLnNtYWxsLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmxvYWRpbmcge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmFkbWluIC5hZG1pbi1lbXB0eSAubG9hZGluZyB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uYWRtaW4gLmFkbWluLWVtcHR5IHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgY29sb3I6IHJnYmEoMTUxLCAxNDgsIDE0OCwgMC44MDEpO1xyXG59XHJcbi5hZG1pbiAuYWRtaW4tZW1wdHkgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbmFwcC1zZWFyY2gge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLmFkbWluLXByb2R1Y3RzLWxpc3QgcC5ub3Rmb3VuZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICM2ZjRlMzc7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5hZG1pbi1wcm9kdWN0cy1saXN0IHAubm90Zm91bmQgaW1nIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmNhcnQtcmlnaHQgYnV0dG9uLFxyXG4uY2FydC1yaWdodCBpIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmFkbWluLXNlYXJjaCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5hZG1pbi1zZWFyY2ggYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAwO1xyXG59XHJcbi5hZG1pbi1zZWFyY2ggaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAxNXB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgKiB7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICB9XHJcbiAgLmNhcnQgLmNhcnQtcHJvZHVjdHMtbGlzdCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Ub+H":
/*!****************************************************************!*\
  !*** ./src/app/pagination-admin/pagination-admin.component.ts ***!
  \****************************************************************/
/*! exports provided: PaginationAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationAdminComponent", function() { return PaginationAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PaginationAdminComponent_nav_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginationAdminComponent_nav_0_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationAdminComponent_nav_0_li_11_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.openPage(ctx_r7.admin.currentp - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.admin.currentp - 1);
} }
function PaginationAdminComponent_nav_0_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationAdminComponent_nav_0_li_12_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.openPage(ctx_r9.admin.currentp); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.admin.currentp);
} }
function PaginationAdminComponent_nav_0_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationAdminComponent_nav_0_li_13_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.openPage(ctx_r11.admin.currentp + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.admin.currentp + 1);
} }
function PaginationAdminComponent_nav_0_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginationAdminComponent_nav_0_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationAdminComponent_nav_0_li_15_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.openPage(ctx_r13.noOfpages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r6.admin.currentp === ctx_r6.noOfpages ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.noOfpages);
} }
function PaginationAdminComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationAdminComponent_nav_0_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.openPage(ctx_r15.admin.currentp - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationAdminComponent_nav_0_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.openPage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaginationAdminComponent_nav_0_span_10_Template, 3, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PaginationAdminComponent_nav_0_li_11_Template, 4, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PaginationAdminComponent_nav_0_li_12_Template, 4, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PaginationAdminComponent_nav_0_li_13_Template, 4, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PaginationAdminComponent_nav_0_li_14_Template, 4, 0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PaginationAdminComponent_nav_0_li_15_Template, 4, 4, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationAdminComponent_nav_0_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.openPage(+ctx_r18.admin.currentp + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r0.admin.currentp === 1 ? "disabled" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item  ", ctx_r0.admin.currentp === 1 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.admin.currentp >= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.admin.currentp - 1 > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.admin.currentp > 1 && ctx_r0.admin.currentp !== ctx_r0.noOfpages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.admin.currentp + 1 < ctx_r0.noOfpages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.admin.currentp < ctx_r0.noOfpages - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.noOfpages > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r0.admin.currentp === ctx_r0.noOfpages ? "disabled" : "", "");
} }
class PaginationAdminComponent {
    constructor(admin, router) {
        this.admin = admin;
        this.router = router;
        this.resultPerPage = 12;
        // To take the array of cakes
        this.cakesArr = [];
    }
    // method to change current page value
    openPage(page) {
        this.admin.currentp = page;
    }
    // funtion the genrate data for each page
    pagination() {
        // find total number of pages
        this.noOfpages = Math.ceil(this.cakesArr.length / this.resultPerPage);
        // starting index of the cake array
        this.start = (this.admin.currentp - 1) * this.resultPerPage;
        // ending index of the cake array
        this.end = this.admin.currentp * this.resultPerPage;
        // display array
        this.admin.cakeSearch = [...this.cakesArr].slice(this.start, this.end);
        return;
    }
    ngDoCheck() {
        // pagination method call whenever any changes happens
        setTimeout(() => {
            this.pagination();
        }, 10);
    }
}
PaginationAdminComponent.ɵfac = function PaginationAdminComponent_Factory(t) { return new (t || PaginationAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PaginationAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationAdminComponent, selectors: [["app-pagination-admin"]], inputs: { cakesArr: "cakesArr" }, decls: 1, vars: 1, consts: [["aria-label", "Page navigation example", 4, "ngIf"], ["aria-label", "Page navigation example"], [1, "pagination", "justify-content-center"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link", "click-effect", 3, "click"], [1, "click-effect", 3, "click"], [1, "page-link"], [1, "page-item", "disabled"], [4, "ngIf"], ["class", "page-item", 4, "ngIf"], ["class", "page-item active", 4, "ngIf"], ["class", "page-item disabled", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "page-link", "click-effect", 3, "click"], [1, "page-item"], [1, "page-item", "active"]], template: function PaginationAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaginationAdminComponent_nav_0_Template, 19, 15, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noOfpages > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".page-link[_ngcontent-%COMP%] {\r\n  color: #000;\r\n}\r\n.page-link[_ngcontent-%COMP%]:hover {\r\n  background: #aaa;\r\n  color: aliceblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24tYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJwYWdpbmF0aW9uLWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1saW5rIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4ucGFnZS1saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYWFhO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carousel/carousel.component */ "EfPX");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _cakecard_cakecard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cakecard/cakecard.component */ "w3UV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pagination/pagination.component */ "hQTH");
/* harmony import */ var _cake_details_cake_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cake-details/cake-details.component */ "+7EV");
/* harmony import */ var _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./searchresults/searchresults.component */ "kj23");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forgetpass/forgetpass.component */ "w7pD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/interceptor.service */ "fzYH");
/* harmony import */ var _guards_canactivate_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/canactivate.service */ "BC4N");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./orders/orders.component */ "5lyI");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _shop_cakes_shop_cakes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shop-cakes/shop-cakes.component */ "KShT");
/* harmony import */ var _pagination_admin_pagination_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pagination-admin/pagination-admin.component */ "Ub+H");
/* harmony import */ var _test_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./test.directive */ "EM2z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");































const ngxUiLoaderConfig = {
    bgsColor: '#fff',
    bgsPosition: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["POSITION"].bottomCenter,
    bgsSize: 4,
    fgsColor: '#f4ac32',
    pbColor: '#f4ac32',
    bgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["SPINNER"].ballSpinClockwise,
    fgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["SPINNER"].ballSpin,
    pbDirection: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["PB_DIRECTION"].leftToRight,
    pbThickness: 4,
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
            useClass: _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["InterceptorService"],
            multi: true,
        },
        _guards_canactivate_service__WEBPACK_IMPORTED_MODULE_20__["CanactivateService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                timeOut: 3000,
                positionClass: 'toast-top-left',
                preventDuplicates: true,
                enableHtml: true,
            }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            // Import NgxUiLoaderModule
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _cakecard_cakecard_component__WEBPACK_IMPORTED_MODULE_11__["CakecardComponent"],
        _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__["PaginationComponent"],
        _cake_details_cake_details_component__WEBPACK_IMPORTED_MODULE_14__["CakeDetailsComponent"],
        _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_15__["SearchresultsComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_17__["ForgetpassComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_21__["CartComponent"],
        _orders_orders_component__WEBPACK_IMPORTED_MODULE_22__["OrdersComponent"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_23__["CheckoutComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"],
        _shop_cakes_shop_cakes_component__WEBPACK_IMPORTED_MODULE_25__["ShopCakesComponent"],
        _pagination_admin_pagination_admin_component__WEBPACK_IMPORTED_MODULE_26__["PaginationAdminComponent"],
        _test_directive__WEBPACK_IMPORTED_MODULE_27__["TestDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderModule"]] }); })();


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function CartComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CartComponent_ul_8_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Your Cart Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CartComponent_ul_8_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Your Cart Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CartComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_ul_8_p_1_Template, 3, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CartComponent_ul_8_p_2_Template, 3, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.loading !== "upldating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.loading === "upldating");
} }
function CartComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Your Cart is Empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " to see Cakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CartComponent_ul_10_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartComponent_ul_10_li_10_Template_input_ngModelChange_12_listener($event) { const item_r7 = ctx.$implicit; return item_r7.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_ul_10_li_10_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.remove(item_r7.cakeid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/cakes/", item_r7.cakeid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/cakes/", item_r7.cakeid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Weight: ", item_r7.weight, " kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 8, item_r7.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r7.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 11, item_r7.quantity * item_r7.price, "INR"));
} }
function CartComponent_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CartComponent_ul_10_li_10_Template, 17, 14, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Total :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.cartItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.deliveryCharge ? " Delivery Charge: \u20B9" + ctx_r3.deliveryCharge : "Free Delivery", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 5, ctx_r3.totalPrice, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](25, 8, ctx_r3.deliveryCharge, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.totalPrice ? ctx_r3.totalPrice + ctx_r3.deliveryCharge : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](28, 11, ctx_r3.totalPrice, "INR"), " ");
} }
class CartComponent {
    constructor(toastr, cs, http, routes) {
        this.toastr = toastr;
        this.cs = cs;
        this.http = http;
        this.routes = routes;
        this.qty = 1;
        this.deliveryCharge = 0;
        this.cartItems = [];
        this.loading = true;
        this.totalPrice = 0;
        // fetch data from the route
        this.routes.data.subscribe((data) => {
            this.cartItems = data[0].data;
            this.loading = false;
        });
    }
    ngDoCheck() {
        // set the total price
        this.totalPrice = this.cartItems.reduce((acc, item) => item.price * item.quantity + acc, 0);
        // check is total price is greater then minimum cart total price or not
        if (this.totalPrice > this.cs.mincartvalue) {
            this.deliveryCharge = 0;
        }
        else {
            this.deliveryCharge = this.cs.deliveryCharge;
        }
    }
    ngOnInit() { }
    // method to remove item from cart
    remove(id) {
        // updating the cart items
        this.loading = 'upldating';
        // hit post request to remove item from cart
        this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'removecakefromcart', { cakeid: id })
            .subscribe((res) => {
            // check whether the item removed successful or not
            if (res.message === 'Removed  item from cart') {
                // find the index of the removed cake item
                const index = this.cartItems.findIndex((cake) => cake.cakeid === id);
                // show success message
                this.toastr.success(`Removed ${this.cartItems[index].name} from cart.`);
                // removing cart item for cart items array
                this.cartItems.splice(index, 1);
                // data is loading
                this.loading = false;
                return;
            }
            this.toastr.warning(res.message);
        }, (err) => {
            // display the error message
            console.log(err);
            this.toastr.error(err.message);
        });
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 26, vars: 4, consts: [[1, "cart", "flex"], [1, "cart-header", "flex"], [1, "cart-right"], ["class", "btn btn-primary click-effect", "routerLink", "/checkout", 4, "ngIf"], [1, "cart-main", "flex"], [1, "cart-products", "flex"], ["class", "cart-products-list flex", 4, "ngIf"], ["tabindex", "-1", 1, "modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "next", 1, "btn", "btn-primary"], ["routerLink", "/checkout", 1, "btn", "btn-primary", "click-effect"], [1, "cart-products-list", "flex"], [4, "ngIf"], ["src", "https://i.stack.imgur.com/hzk6C.gif", "alt", "", 1, "loading"], ["src", "https://xtremexmartialarts.com/wp-content/uploads/2020/07/anim-circ-preloader.gif", "alt", "", 1, "loading"], [1, "cart-empty"], ["src", "https://www.pngfind.com/pngs/b/272-2727925_cart-png.png", "alt", "", 1, "loading"], ["routerLink", "/"], [1, "products-header"], ["class", "order-products", 4, "ngFor", "ngForOf"], [1, "products-header", "total"], [1, "fas", "fa-truck"], [1, "total"], [1, "delivery-charge"], [1, "total-price"], [1, "order-products"], [1, "item-title"], ["alt", "", 1, "item-img", "click-effect", 3, "src", "routerLink"], [1, "click-effect", 3, "routerLink"], [1, "small-text"], ["type", "number", "disabled", "", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-trash", "click-effect", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Your Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CartComponent_button_5_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CartComponent_ul_8_Template, 3, 2, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CartComponent_ul_9_Template, 8, 0, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CartComponent_ul_10_Template, 29, 14, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Modal title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Modal body text goes here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Save changes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.totalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.totalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.totalPrice);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n  font-weight: 600;\r\n}\r\n.cart[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  flex-direction: column;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  justify-content: space-between;\r\n  background: #000;\r\n  color: aliceblue;\r\n  padding: 20px;\r\n  border: 0.5px solid #000;\r\n  border-radius: 10px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-products[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: #f0f8ff;\r\n  box-shadow: 1px 2px 10px #aaa;\r\n  border-radius: 10px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-main[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n}\r\n.cart[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-products-list[_ngcontent-%COMP%] {\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding-right: 25px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-products-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  max-width: 50px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-products-list[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  height: auto;\r\n  object-fit: cover;\r\n  border-radius: 10px;\r\n  box-shadow: 2px 5px 10px #000;\r\n  margin: 10px 20px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .products-header[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #000;\r\n}\r\n.cart[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  width: 100%;\r\n\r\n  grid-template-columns: 3fr repeat(3, 1fr);\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  text-align: end;\r\n  \r\n}\r\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-of-type {\r\n  border-top: 1px solid #000;\r\n}\r\n.products-header.total[_ngcontent-%COMP%] {\r\n  grid-template-columns: 2fr repeat(2, 1fr);\r\n}\r\n.cart[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 30% auto;\r\n}\r\np.small-text[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  margin: 0;\r\n}\r\n.loading[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-empty[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-empty[_ngcontent-%COMP%] {\r\n  background: #eee;\r\n  border-radius: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n  align-items: center;\r\n  height: 500px;\r\n  color: rgba(151, 148, 148, 0.801);\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n}\r\nimg.click-effect[_ngcontent-%COMP%]:active, p.click-effect[_ngcontent-%COMP%]:active {\r\n  transform: scale(1);\r\n  box-shadow: 5px 10px 20px #faf !important;\r\n  color: coral;\r\n}\r\n@media screen and (max-width: 840px) {\r\n  *[_ngcontent-%COMP%] {\r\n    font-size: 2vw;\r\n  }\r\n  .cart[_ngcontent-%COMP%]   .cart-products-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    text-align: center;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXOztFQUVYLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBOztFQUVFLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsWUFBWTtBQUNkO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7RUFDWDtBQUNGIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uY2FydCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uY2FydCAuY2FydC1oZWFkZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5jYXJ0IC5jYXJ0LXByb2R1Y3RzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZjBmOGZmO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAjYWFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNhcnQgLmNhcnQtbWFpbiB7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG4uY2FydCBtYWluIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FydCAuY2FydC1wcm9kdWN0cy1saXN0IHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuLmNhcnQgLmNhcnQtcHJvZHVjdHMtbGlzdCBpbnB1dCB7XHJcbiAgbWF4LXdpZHRoOiA1MHB4O1xyXG59XHJcbi5jYXJ0IC5jYXJ0LXByb2R1Y3RzLWxpc3QgLml0ZW0taW1nIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCA1cHggMTBweCAjMDAwO1xyXG4gIG1hcmdpbjogMTBweCAyMHB4O1xyXG59XHJcbi5jYXJ0IC5wcm9kdWN0cy1oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcbi5jYXJ0IGxpIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciByZXBlYXQoMywgMWZyKTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50b3RhbCBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgLyogbWFyZ2luOiAwIDU1JSAwIDA7ICovXHJcbn1cclxuLnRvdGFsIHNwYW46bGFzdC1vZi10eXBlIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcclxufVxyXG4ucHJvZHVjdHMtaGVhZGVyLnRvdGFsIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciByZXBlYXQoMiwgMWZyKTtcclxufVxyXG5cclxuLmNhcnQgLml0ZW0tdGl0bGUge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgYXV0bztcclxufVxyXG5wLnNtYWxsLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmxvYWRpbmcge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmNhcnQgLmNhcnQtZW1wdHkgLmxvYWRpbmcge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuLmNhcnQgLmNhcnQtZW1wdHkge1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBjb2xvcjogcmdiYSgxNTEsIDE0OCwgMTQ4LCAwLjgwMSk7XHJcbn1cclxuLmNhcnQgLmNhcnQtZW1wdHkgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5pbWcuY2xpY2stZWZmZWN0OmFjdGl2ZSxcclxucC5jbGljay1lZmZlY3Q6YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDIwcHggI2ZhZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBjb3JhbDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xyXG4gICoge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG4gIC5jYXJ0IC5jYXJ0LXByb2R1Y3RzLWxpc3QgaW5wdXQge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "fzYH":
/*!*********************************************!*\
  !*** ./src/app/auth/interceptor.service.ts ***!
  \*********************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InterceptorService {
    constructor() { }
    intercept(req, next) {
        // check whether the user is login or not
        if (localStorage.loginUser) {
            // add the authtoken property in the response header
            req = req.clone({
                setHeaders: {
                    authtoken: JSON.parse(localStorage.loginUser).token,
                },
            });
        }
        return next.handle(req);
    }
}
InterceptorService.ɵfac = function InterceptorService_Factory(t) { return new (t || InterceptorService)(); };
InterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InterceptorService, factory: InterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hQTH":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PaginationComponent_nav_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginationComponent_nav_0_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_nav_0_li_11_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.openPage(ctx_r7.cs.currentp - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.cs.currentp - 1);
} }
function PaginationComponent_nav_0_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_nav_0_li_12_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.openPage(ctx_r9.cs.currentp); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.cs.currentp);
} }
function PaginationComponent_nav_0_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_nav_0_li_13_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.openPage(ctx_r11.cs.currentp + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.cs.currentp + 1);
} }
function PaginationComponent_nav_0_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginationComponent_nav_0_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_nav_0_li_15_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.openPage(ctx_r13.noOfpages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r6.cs.currentp === ctx_r6.noOfpages ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.noOfpages);
} }
function PaginationComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_nav_0_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.openPage(ctx_r15.cs.currentp - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_nav_0_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.openPage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaginationComponent_nav_0_span_10_Template, 3, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PaginationComponent_nav_0_li_11_Template, 4, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PaginationComponent_nav_0_li_12_Template, 4, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PaginationComponent_nav_0_li_13_Template, 4, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PaginationComponent_nav_0_li_14_Template, 4, 0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PaginationComponent_nav_0_li_15_Template, 4, 4, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_nav_0_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.openPage(+ctx_r18.cs.currentp + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r0.cs.currentp === 1 ? "disabled" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item  ", ctx_r0.cs.currentp === 1 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cs.currentp >= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cs.currentp - 1 > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cs.currentp > 1 && ctx_r0.cs.currentp !== ctx_r0.noOfpages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cs.currentp + 1 < ctx_r0.noOfpages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cs.currentp < ctx_r0.noOfpages - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.noOfpages > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r0.cs.currentp === ctx_r0.noOfpages ? "disabled" : "", "");
} }
class PaginationComponent {
    constructor(cs, admin, router) {
        this.cs = cs;
        this.admin = admin;
        this.router = router;
        this.resultPerPage = 12;
        // To take the array of cakes
        this.cakesArr = [];
    }
    // method to change current page value
    openPage(page) {
        this.cs.currentp = page;
    }
    // funtion the genrate data for each page
    pagination() {
        // find total number of pages
        this.noOfpages = Math.ceil(this.cakesArr.length / this.resultPerPage);
        // starting index of the cake array
        this.start = (this.cs.currentp - 1) * this.resultPerPage;
        // ending index of the cake array
        this.end = this.cs.currentp * this.resultPerPage;
        // display array
        this.cs.cakeSearch = [...this.cakesArr].slice(this.start, this.end);
        return;
    }
    ngDoCheck() {
        // pagination method call whenever any changes happens
        setTimeout(() => {
            this.pagination();
        }, 10);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { cakesArr: "cakesArr" }, decls: 1, vars: 1, consts: [["aria-label", "Page navigation example", 4, "ngIf"], ["aria-label", "Page navigation example"], [1, "pagination", "justify-content-center"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link", "click-effect", 3, "click"], [1, "click-effect", 3, "click"], [1, "page-link"], [1, "page-item", "disabled"], [4, "ngIf"], ["class", "page-item", 4, "ngIf"], ["class", "page-item active", 4, "ngIf"], ["class", "page-item disabled", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "page-link", "click-effect", 3, "click"], [1, "page-item"], [1, "page-item", "active"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaginationComponent_nav_0_Template, 19, 15, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noOfpages > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".page-link[_ngcontent-%COMP%] {\r\n  color: #000;\r\n}\r\n.page-link[_ngcontent-%COMP%]:hover {\r\n  background: #aaa;\r\n  color: aliceblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1saW5rIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4ucGFnZS1saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYWFhO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function NavbarComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_form_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NavbarComponent_form_10_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.searchQ = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_form_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchQ);
} }
function NavbarComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(router, toastr, ngxloader) {
        this.router = router;
        this.toastr = toastr;
        this.ngxloader = ngxloader;
        // property to store the status of user login
        this.userLogin = false;
        // property to store the status of data loaded or not
        this.loading = false;
        // admin search status
        this.searchAdmin = true;
        // subscribing to router events and reading events by importing Event class
        this.router.events.subscribe((event) => {
            // destructuring event object
            const e = Object.assign({}, event);
            // condition to check router URL
            if (e.url === '/cart' || e.url === '/myorders') {
                // applying switch case for handling the navigation events.
                switch (true) {
                    // Handle NavigationStart event
                    case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]: {
                        // Show loader
                        this.ngxloader.start();
                        break;
                    }
                    case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]:
                    case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationCancel"]:
                    case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationError"]: {
                        // hide loader
                        this.ngxloader.stop();
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        });
    }
    // function to handle search
    search() {
        // check if searchQ is empty or not.
        if (this.searchQ) {
            const search = this.searchQ;
            // redirecting to search result display page
            this.router.navigate(['/search'], {
                // adding search query as the queryparams q
                queryParams: { q: search },
            });
        }
        // set seatch field empty after search
        this.searchQ = '';
    }
    // whenever any changes happens
    ngDoCheck() {
        // setting user email when ever any changes happens
        this.useremail = localStorage.loginUser
            ? JSON.parse(localStorage.loginUser).email
            : null;
        // checking for the loging status
        if (localStorage.loginUser) {
            this.userLogin = true;
        }
        if (!localStorage.loginUser) {
            this.userLogin = false;
        }
        if (this.router.url === '/admin') {
            this.searchAdmin = false;
        }
        else {
            this.searchAdmin = true;
        }
    }
    // function to logout user
    logout() {
        localStorage.removeItem('loginUser');
        this.toastr.success('Logout Successfully!!');
        this.router.navigate(['/login']);
    }
    ngOnInit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 16, vars: 6, consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-light"], [1, "container-fluid"], [1, "navbar-brand"], ["src", "assets/logo.png", "alt", "cake-house", 1, "logo"], ["routerLink", "/", 1, "highlight", 2, "cursor", "pointer"], ["class", "btn btn-dark btn-border-primary btn-admin", "type", "button", "routerLink", "/admin", 4, "ngIf"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], ["class", "d-flex form-search", 4, "ngIf"], [1, "flex", "nav-btn"], ["class", "btn btn-warning btn-border-warning", "type", "button", "routerLink", "/login", 4, "ngIf"], ["class", "btn btn-dark btn-border-primary", "type", "button", "routerLink", "/cart", 4, "ngIf"], ["class", "btn btn-dark btn-border-primary", "type", "button", "routerLink", "/myorders", 4, "ngIf"], ["class", "btn btn-primary btn-border-warning", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "routerLink", "/admin", 1, "btn", "btn-dark", "btn-border-primary", "btn-admin"], [1, "fas", "fa-user-shield"], [1, "d-flex", "form-search"], ["name", "search", "type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-secondary", "btn-search", 3, "click"], [1, "fas", "fa-search"], ["type", "button", "routerLink", "/login", 1, "btn", "btn-warning", "btn-border-warning"], [1, "fas", "fa-user"], ["type", "button", "routerLink", "/cart", 1, "btn", "btn-dark", "btn-border-primary"], [1, "fas", "fa-shopping-cart"], ["type", "button", "routerLink", "/myorders", 1, "btn", "btn-dark", "btn-border-primary"], [1, "fas", "fa-shopping-bag"], ["type", "button", 1, "btn", "btn-primary", "btn-border-warning", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Bake n\u2019 Take");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NavbarComponent_button_6_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavbarComponent_form_10_Template, 4, 1, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NavbarComponent_button_12_Template, 3, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NavbarComponent_button_13_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NavbarComponent_button_14_Template, 3, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NavbarComponent_button_15_Template, 3, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userLogin && ctx.useremail === "shantanu.sharma@walkingtree.tech");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userLogin);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["a.navbar-brand[_ngcontent-%COMP%] {\r\n    font-size: 2vw;\r\n    color: wheat;\r\n    font-weight: 700;\r\n    width: 50%;\r\n  }\r\n  .navbar-brand[_ngcontent-%COMP%]:hover {\r\n    color: rgb(173, 168, 158);\r\n  }\r\n  .navbar[_ngcontent-%COMP%] {\r\n    background: #2b2a2a;\r\n  }\r\n  .highlight[_ngcontent-%COMP%] {\r\n    color: #f4ac32;\r\n  }\r\n  .btn-border-primary[_ngcontent-%COMP%] {\r\n    border: 2px solid #555;\r\n    margin: 0 10px;\r\n  }\r\n  .logo[_ngcontent-%COMP%] {\r\n    width: 7%;\r\n    height: 50%;\r\n    object-fit: cover;\r\n  }\r\n  form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .btn[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    padding: 3px 6px;\r\n  }\r\n  .nav-btn[_ngcontent-%COMP%] {\r\n    justify-content: flex-end;\r\n  }\r\n  .form-search[_ngcontent-%COMP%] {\r\n    justify-content: flex-end;\r\n  }\r\n  .form-search[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    border-radius: 0.25rem 0 0 0.25rem;\r\n  }\r\n  .form-search[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%] {\r\n    border-radius: 0 0.25rem 0.25rem 0;\r\n  }\r\n  .form-search[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none;\r\n    border: 2px solid rgba(255, 81, 81, 0.664);\r\n  }\r\n  .navbar-collapse[_ngcontent-%COMP%] {\r\n    flex-basis: none !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7RUFFQTtJQUNFLFNBQVM7SUFDVCxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICBjb2xvcjogd2hlYXQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLm5hdmJhci1icmFuZDpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDE3MywgMTY4LCAxNTgpO1xyXG4gIH1cclxuICAubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyYjJhMmE7XHJcbiAgfVxyXG4gIC5oaWdobGlnaHQge1xyXG4gICAgY29sb3I6ICNmNGFjMzI7XHJcbiAgfVxyXG4gIC5idG4tYm9yZGVyLXByaW1hcnkge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubG9nbyB7XHJcbiAgICB3aWR0aDogNyU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgfVxyXG4gIC5uYXYtYnRuIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIC5mb3JtLXNlYXJjaCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICAuZm9ybS1zZWFyY2ggPiBpbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtO1xyXG4gIH1cclxuICAuZm9ybS1zZWFyY2ggLmJ0bi1zZWFyY2gge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcclxuICB9XHJcbiAgLmZvcm0tc2VhcmNoID4gaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCA4MSwgODEsIDAuNjY0KTtcclxuICB9XHJcbiAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBmbGV4LWJhc2lzOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "kj23":
/*!**********************************************************!*\
  !*** ./src/app/searchresults/searchresults.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchresultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchresultsComponent", function() { return SearchresultsComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cakecard_cakecard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cakecard/cakecard.component */ "w3UV");









function SearchresultsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "min-Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchresultsComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.minPrice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Max-price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchresultsComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.maxPrice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchresultsComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.filterByPrice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.minPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.maxPrice);
} }
function SearchresultsComponent_app_cakecard_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-cakecard", 13);
} if (rf & 2) {
    const cake_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cake", cake_r8);
} }
function SearchresultsComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No Cake found!. For your Search Query! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchresultsComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Search Results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SearchresultsComponent {
    constructor(cs, route, http, toastr) {
        this.cs = cs;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.loading = true;
        this.cakesList = [];
        this.cakefilter = [];
        // fetch query string from the route
        this.route.queryParams.subscribe((query) => {
            this.loading = true;
            // hit get request to fetch search results
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'searchcakes?q=' + query.q).subscribe((res) => {
                this.cakefilter = res.data;
                // for sortByPrice method
                this.cakesList = [...this.cakefilter];
                this.loading = false;
            }, (err) => {
                console.log(err);
            });
        });
    }
    ngOnInit() { }
    filterByPrice() {
        //  validate maxprice and minprice
        if (this.maxPrice <= this.minPrice) {
            this.toastr.info('Min-Price Should be smaller then Max-Price');
            return;
        }
        if (this.minPrice || this.maxPrice) {
            // filter cake list
            this.cakesList = this.cakefilter.filter((e) => (this.minPrice ? e.price >= this.minPrice : true) &&
                (this.maxPrice ? e.price <= this.maxPrice : true));
            if (this.cakesList.length > 0) {
                return;
            }
            else {
                this.toastr.info(`No Cake found of price  ${this.minPrice && this.maxPrice
                    ? `between ₹${this.minPrice}-₹${this.maxPrice}`
                    : `₹${this.minPrice ? this.minPrice : this.maxPrice}`}`);
            }
        }
        this.cakesList = [...this.cakefilter];
    }
}
SearchresultsComponent.ɵfac = function SearchresultsComponent_Factory(t) { return new (t || SearchresultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
SearchresultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchresultsComponent, selectors: [["app-searchresults"]], decls: 6, vars: 4, consts: [["class", "sort-by-price", 4, "ngIf"], [1, "cake-list"], [3, "cake", 4, "ngFor", "ngForOf"], [1, "no-query"], [4, "ngIf"], ["class", "flex", 4, "ngIf"], [1, "sort-by-price"], [1, "row", "g-3"], [1, "col-auto"], ["for", "inputPassword2", 1, "visually-hidden"], ["type", "number", "id", "minPrice", "name", "minPrice", "placeholder", "Min-Price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "maxPrice", "name", "maxPrice", "placeholder", "Max-price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "mb-3", 3, "click"], [3, "cake"], ["src", "assets/404.png", "alt", "no-found"], [1, "flex"], ["src", "https://i.stack.imgur.com/hzk6C.gif", "alt", "", 1, "loading"]], template: function SearchresultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SearchresultsComponent_div_0_Template, 13, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchresultsComponent_app_cakecard_2_Template, 1, 1, "app-cakecard", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SearchresultsComponent_p_4_Template, 4, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SearchresultsComponent_p_5_Template, 3, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cakesList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cakesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.cakesList.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _cakecard_cakecard_component__WEBPACK_IMPORTED_MODULE_8__["CakecardComponent"]], styles: [".cake-list[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  \r\n  \r\n  border-radius: 10px;\r\n  padding: 25px;\r\n  margin: 25px;\r\n  margin-bottom: 0;\r\n}\r\n.no-query[_ngcontent-%COMP%] {\r\n  \r\n\r\n  width: 100%;\r\n}\r\n.no-query[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  padding: 10%;\r\n  text-align: center;\r\n\r\n  color: #666;\r\n}\r\n.no-query[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n  object-fit: cover;\r\n}\r\n.cart-products-list[_ngcontent-%COMP%] {\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding-right: 25px;\r\n}\r\nimg.loading[_ngcontent-%COMP%] {\r\n  width: 200px !important;\r\n}\r\n.sort-by-price[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  margin: 50px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.sort-by-price[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  background: rgba(238, 238, 238, 0.432);\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n  border: 0.5px solid #000;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaHJlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLDJDQUEyQztFQUMzQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjs7RUFFdEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCOztFQUVsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixrQ0FBa0M7QUFDcEMiLCJmaWxlIjoic2VhcmNocmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNha2UtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xyXG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxNzMsIDc4LCAwLjM4NCk7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIG1hcmdpbjogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5uby1xdWVyeSB7XHJcbiAgLyogYmFja2dyb3VuZDogI2ZmZjsgKi9cclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5vLXF1ZXJ5IHAge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcbi5uby1xdWVyeSBpbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5jYXJ0LXByb2R1Y3RzLWxpc3Qge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5pbWcubG9hZGluZyB7XHJcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNvcnQtYnktcHJpY2Uge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtYXJnaW46IDUwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zb3J0LWJ5LXByaWNlIGZvcm0ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC40MzIpO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcclxuICAvKiBib3gtc2hhZG93OiA1cHggMnB4IDVweCAjMDAwOyAqL1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "q1C2":
/*!*******************************************!*\
  !*** ./src/app/resolvers/cart.service.ts ***!
  \*******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CartService {
    constructor(http) {
        this.http = http;
    }
    resolve(route, state) {
        // get user cart details
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'cakecart', {}).pipe();
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class SignupComponent {
    constructor(ls, http, route, toastr) {
        this.ls = ls;
        this.http = http;
        this.route = route;
        this.toastr = toastr;
        // object to store the user data using ngModel
        this.user = {};
    }
    ngOnInit() { }
    signUp() {
        // validate email id
        if (!this.ls.validateEmail(this.user.email)) {
            this.toastr.warning('PLease Enter the Correct Email Id.');
            return;
        }
        // validate all input fileds
        if (!this.user.name ||
            !this.user.name.trim() ||
            !this.user.password ||
            !this.user.password.trim()) {
            this.toastr.warning('Please Fill the all input Fields.');
            return;
        }
        // validate name & password input field
        if (this.user.name.startsWith(' ') || this.user.password.startsWith(' ')) {
            this.toastr.warning('User name/password should not start with space.');
            return;
        }
        // hit post request to signup user
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'register', this.user).subscribe((res) => {
            // check whether user already exists or not
            if (res.message === 'User Already Exists') {
                this.toastr.info(`${res.message}. Redirecting to Login Page.`);
            }
            else {
                this.toastr.success(res.message);
            }
            setTimeout(() => {
                this.toastr.info('Verification mail is sended to you mail ID.');
                this.toastr.info('Please verify your email Id to login.');
                // redirecting user to the login page
                this.route.navigate(['/login'], {
                    queryParams: { q: this.user.email },
                });
            }, 2000);
        }, (err) => {
            // display error message
            console.log(err);
            this.toastr.error(err.message);
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 17, vars: 3, consts: [[1, "signup-section"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "id", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SignUp To Bake n\u2019 Take");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_10_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_14_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_15_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " SignUp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".signup-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 50px;\r\n  flex-direction: column;\r\n  background: var(--form-bg-color);\r\n  color: var(--form-color);\r\n  padding: 50px;\r\n  border: 0.5px solid black;\r\n}\r\n.signup-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n}\r\n.signup-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\n@media screen and (max-width: 800px) {\r\n  .signup-section[_ngcontent-%COMP%] {\r\n    margin: 20px 2px;\r\n    padding: 2vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDUwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3JtLWJnLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tZm9ybS1jb2xvcik7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5zaWdudXAtc2VjdGlvbiBmb3JtIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbi5zaWdudXAtc2VjdGlvbiBmb3JtIGlucHV0IHtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuc2lnbnVwLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAyMHB4IDJweDtcclxuICAgIHBhZGRpbmc6IDJ2dztcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cake_details_cake_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cake-details/cake-details.component */ "+7EV");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgetpass/forgetpass.component */ "w7pD");
/* harmony import */ var _guards_canactivate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/canactivate.service */ "BC4N");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders/orders.component */ "5lyI");
/* harmony import */ var _resolvers_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/cart.service */ "q1C2");
/* harmony import */ var _resolvers_orders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/orders.service */ "63NV");
/* harmony import */ var _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./searchresults/searchresults.component */ "kj23");
/* harmony import */ var _shop_cakes_shop_cakes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shop-cakes/shop-cakes.component */ "KShT");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















// Set Routes here
const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'cake/:id', component: _cake_details_cake_details_component__WEBPACK_IMPORTED_MODULE_1__["CakeDetailsComponent"] },
    { path: 'search', component: _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_10__["SearchresultsComponent"] },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        canActivate: [_guards_canactivate_service__WEBPACK_IMPORTED_MODULE_4__["CanactivateService"]],
    },
    {
        path: 'forgetPassword',
        component: _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_3__["ForgetpassComponent"],
        canActivate: [_guards_canactivate_service__WEBPACK_IMPORTED_MODULE_4__["CanactivateService"]],
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
        canActivate: [_guards_canactivate_service__WEBPACK_IMPORTED_MODULE_4__["CanactivateService"]],
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"],
        canActivate: [_guards_canactivate_service__WEBPACK_IMPORTED_MODULE_4__["CanactivateService"]],
        resolve: [_resolvers_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]],
    },
    {
        path: 'myorders',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"],
        canActivate: [_guards_canactivate_service__WEBPACK_IMPORTED_MODULE_4__["CanactivateService"]],
        resolve: [_resolvers_orders_service__WEBPACK_IMPORTED_MODULE_9__["OrdersService"]],
    },
    {
        path: 'checkout',
        loadChildren: () => __webpack_require__.e(/*! import() | checkout-checkout-module */ "checkout-checkout-module").then(__webpack_require__.bind(null, /*! ./checkout/checkout.module */ "8y03")).then((m) => m.CheckoutModule),
        canActivate: [_guards_canactivate_service__WEBPACK_IMPORTED_MODULE_4__["CanactivateService"]],
    },
    {
        path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then((m) => m.AdminModule),
        canActivate: [_guards_canactivate_service__WEBPACK_IMPORTED_MODULE_4__["CanactivateService"]],
    },
    { path: 'shopNow', component: _shop_cakes_shop_cakes_component__WEBPACK_IMPORTED_MODULE_11__["ShopCakesComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class LoginComponent {
    constructor(ls, router, route, http, toastr) {
        this.ls = ls;
        this.router = router;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.user = {};
        // check for query params
        if (this.route.snapshot.queryParams.q) {
            this.user.email = this.route.snapshot.queryParams.q;
        }
    }
    ngOnInit() { }
    login() {
        // check for empty email field
        if (!this.user.email || !this.user.email.trim()) {
            this.toastr.error('Email field should not be empty ', 'Error', {
                timeOut: 1000,
            });
            return;
        }
        // check for empty password field
        if (!this.user.password || !this.user.password.trim()) {
            this.toastr.error('Password field should not be empty ', 'Error', {
                timeOut: 1000,
            });
            return;
        }
        // validate Email field if not empty
        if (this.ls.validateEmail(this.user.email)) {
            // hit post request to login user
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'login', this.user).subscribe((res) => {
                // check if login is successful or not
                if (res.token) {
                    // storing login user data to localstorage
                    localStorage.setItem('loginUser', JSON.stringify(res));
                    this.toastr.success('Login Successfully!!');
                    // navigate user to home page
                    this.router.navigate(['/']);
                }
                else {
                    localStorage.removeItem('loginUser');
                    this.toastr.warning(res.message);
                }
            }, (err) => {
                // display the error message
                this.toastr.error(err.message);
            });
        }
        else {
            this.toastr.error('Invalid Email Id');
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 2, consts: [[1, "login-section"], [1, "form-group"], ["for", "email"], ["name", "email", "type", "email", "id", "email", "aria-describedby", "emailHelp", "autocomplete", "disabled", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "id", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "passwordHelpBlock", 1, "form-text"], ["routerLink", "/forgetPassword"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["routerLink", "/signup"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login To Bake n\u2019 Take");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " forget Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " New user? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".login-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 50px;\r\n    flex-direction: column;\r\n    background: var(--form-bg-color);\r\n    color: var(--form-color);\r\n    padding: 50px;\r\n    border: 0.5px solid black;\r\n  }\r\n  .login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n  .login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n  }\r\n  .login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n  }\r\n  @media screen and (max-width: 800px) {\r\n    .login-section[_ngcontent-%COMP%] {\r\n      margin: 20px 2px;\r\n      padding: 2vw;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7SUFDZDtFQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcm0tYmctY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLWZvcm0tY29sb3IpO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG4gIC5sb2dpbi1zZWN0aW9uIGZvcm0ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbiAgLmxvZ2luLXNlY3Rpb24gZm9ybSBpbnB1dCB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcbiAgLmxvZ2luLXNlY3Rpb24gZm9ybSBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmxvZ2luLXNlY3Rpb24ge1xyXG4gICAgICBtYXJnaW46IDIwcHggMnB4O1xyXG4gICAgICBwYWRkaW5nOiAydnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "w3UV":
/*!************************************************!*\
  !*** ./src/app/cakecard/cakecard.component.ts ***!
  \************************************************/
/*! exports provided: CakecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakecardComponent", function() { return CakecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CakecardComponent_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CakecardComponent_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CakecardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CakecardComponent_div_1_span_1_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CakecardComponent_div_1_span_2_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.cake.eggless);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cake.eggless);
} }
function CakecardComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.cake.weight, " Kg");
} }
class CakecardComponent {
    constructor() { }
    ngOnInit() { }
}
CakecardComponent.ɵfac = function CakecardComponent_Factory(t) { return new (t || CakecardComponent)(); };
CakecardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CakecardComponent, selectors: [["app-cakecard"]], inputs: { cake: "cake" }, decls: 10, vars: 9, consts: [["appCakeHighlight", "", 1, "card", 3, "routerLink"], [4, "ngIf"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["class", "card-text", 4, "ngIf"], ["src", "assets/nonVeg.png", "alt", ""], ["src", "assets/veg.png", "alt", ""]], template: function CakecardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CakecardComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CakecardComponent_p_9_Template, 2, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/cake/", ctx.cake.cakeid, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cake.eggless !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.cake.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cake.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, ctx.cake.price, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cake.weight);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 60%;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 10px;\r\n  transition: all 0.5s ease;\r\n  background: #eee;\r\n  border: 0.1px solid #6f4e37;\r\n  height: 25vw;\r\n  width: 20vw;\r\n  min-width: 200px;\r\n  min-height: 250px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.1);\r\n  box-shadow: 2px 2px 5px #6f4e37;\r\n  cursor: pointer;\r\n}\r\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  position: absolute;\r\n  left: 90%;\r\n}\r\nh5[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNha2VjYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJjYWtlY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQgaW1nIHtcclxuICBoZWlnaHQ6IDYwJTtcclxufVxyXG4uY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIGJvcmRlcjogMC4xcHggc29saWQgIzZmNGUzNztcclxuICBoZWlnaHQ6IDI1dnc7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxufVxyXG4uY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICM2ZjRlMzc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJkIHNwYW4ge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogOTAlO1xyXG59XHJcbmg1IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "w7pD":
/*!****************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.component.ts ***!
  \****************************************************/
/*! exports provided: ForgetpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpassComponent", function() { return ForgetpassComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class ForgetpassComponent {
    constructor(ls, router, route, http, toastr) {
        this.ls = ls;
        this.router = router;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        // object to store the user email id
        this.user = {};
        // check for the query params
        if (this.route.snapshot.queryParams.q) {
            this.user.email = this.route.snapshot.queryParams.q;
        }
    }
    ngOnInit() { }
    // method to send password to the user
    getPass() {
        // check for empty email/password field
        if (!this.user.email || this.user.email === ' ') {
            this.toastr.warning('Email field should not be empty!!');
            return;
        }
        // validate Email/password field if not empty
        if (this.ls.validateEmail(this.user.email)) {
            // hit post request to send the user password to the user email id
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'recoverpassword', this.user).subscribe((res) => {
                // check whether the password send successful or not
                if (res.message === 'Password Sent to your email') {
                    this.toastr.success(res.message, '');
                    // redirecting user back to the login page
                    setTimeout(() => {
                        this.toastr.info('Redirecting to login page..', '', {
                            progressBar: true,
                        });
                        setTimeout(() => {
                            this.router.navigate(['/login']);
                        }, 2000);
                    }, 1000);
                    return;
                }
                else {
                    this.toastr.warning(res.message);
                } // this.ls.loginUser = res.token ? res : null;
            }, (err) => {
                // display the error message
                console.log(err);
                this.toastr.error(err.message);
            });
        }
        else {
            this.toastr.error('Invalid Email Id/Password');
        }
    }
}
ForgetpassComponent.ɵfac = function ForgetpassComponent_Factory(t) { return new (t || ForgetpassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
ForgetpassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgetpassComponent, selectors: [["app-forgetpass"]], decls: 10, vars: 1, consts: [[1, "login-section"], [1, "form-group"], ["for", "email"], ["name", "email", "type", "email", "id", "email", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function ForgetpassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ForgetpassComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgetpassComponent_Template_button_click_8_listener() { return ctx.getPass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Get Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.email);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".login-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 50px;\r\n  flex-direction: column;\r\n  background: var(--form-bg-color);\r\n  color: var(--form-color);\r\n  padding: 50px;\r\n  border: 0.5px solid black;\r\n}\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n}\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\n@media screen and (max-width: 800px) {\r\n  .login-section[_ngcontent-%COMP%] {\r\n    margin: 20px 2px;\r\n    padding: 2vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldHBhc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6ImZvcmdldHBhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1MHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9ybS1iZy1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLWZvcm0tY29sb3IpO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcclxufVxyXG4ubG9naW4tc2VjdGlvbiBmb3JtIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uIGZvcm0gaW5wdXQge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmxvZ2luLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAyMHB4IDJweDtcclxuICAgIHBhZGRpbmc6IDJ2dztcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map