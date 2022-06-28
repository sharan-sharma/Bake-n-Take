(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "1ZQY":
/*!*************************************************!*\
  !*** ./src/app/checkout/form/form.component.ts ***!
  \*************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class FormComponent {
    constructor(http, cs, toastr, router) {
        this.http = http;
        this.cs = cs;
        this.toastr = toastr;
        this.router = router;
        // store the user data
        this.user = { price: 0 };
        // store the cart items in the array
        this.cartItems = [];
        // check that order details are filled or not
        if (this.cs.order.name) {
            this.user = this.cs.order;
        }
        // check that user clicked confirm button in order summary component or not
        if (!cs.orderconfirm) {
            this.router.navigate(['/checkout']);
        }
        // loading cart items
        this.getCartItems();
    }
    ngOnInit() { }
    // method to get cart items array
    getCartItems() {
        // hit post request to get the cart items
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'cakecart', {}).subscribe((res) => {
            if (res.data) {
                // calculating the total price of the cart
                this.user.price = 0;
                this.user.price += res.data.reduce((acc, item) => item.price * item.quantity + acc, 0);
                // check  if the total price is equal to zero
                if (this.user.price <= 0) {
                    this.router.navigate(['/']);
                }
                // add delivery charges if total price is less then minimum cart value
                if (this.user.price < this.cs.mincartvalue) {
                    this.user.price += this.cs.deliveryCharge;
                }
                return (this.cartItems = res.data);
            }
            this.toastr.warning(res.message);
        }, (err) => {
            // display the error
            console.log(err);
            this.toastr.error(err.message);
        });
    }
    // method to validate form details
    placeOrder() {
        // check if any field is empty
        if (!this.user.name ||
            !this.user.name.trim() ||
            !this.user.address ||
            !this.user.address.trim() ||
            !this.user.city ||
            !this.user.city.trim() ||
            !this.user.pincode ||
            !this.user.pincode.trim() ||
            !this.user.phone ||
            !this.user.phone.trim()) {
            this.toastr.warning('Input Fields should not be empty');
            return;
        }
        // validate phone number
        if (!this.cs.validatephonenumber(this.user.phone)) {
            this.toastr.warning('Please Enter the vaild phone number');
            return;
        }
        // validate pincode
        if (!this.cs.validatepincode(this.user.pincode)) {
            this.toastr.warning('Please Enter the vaild Pincode');
            return;
        }
        // store the user details
        this.cs.order = Object.assign(Object.assign({}, this.user), { cakes: this.cartItems });
        // navigate to confirmation page
        this.router.navigate(['/checkout/confirm']);
    }
    // candeactivate confirm method
    confirm(next) {
        // check the next route is payment or not
        if (next.url === '/checkout/confirm' && !this.cs.payment) {
            // confirmation from user that he/she enter filled the fields corrctly
            if (confirm('Please check your details. If You Already checked Click Ok.')) {
                this.cs.payment = true;
                const index = this.cs.ullist.findIndex((e) => e.className.includes('active'));
                console.log(this.cs.ullist);
                this.cs.ullist[index].classList.remove('active');
                this.cs.ullist[index + 1].classList.add('active');
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 30, vars: 6, consts: [[1, "login-section"], [1, "form-group"], ["for", "name"], ["name", "name", "type", "text", "id", "name", "placeholder", "Enter your full name", "autocomplete", "disabled", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "address"], ["name", "address", "type", "text", "id", "address", "placeholder", "Enter your address", "autocomplete", "disabled", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["type", "text", "name", "phone", "placeholder", "Enter a 10-digit vaild phone number", "id", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "city"], ["type", "text", "name", "city", "placeholder", "Enter your city name", "id", "city", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "pincode"], ["type", "text", "name", "pincode", "placeholder", "Enter your area pincode", "id", "pincode", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "totalPrice"], ["type", "text", "name", "totalPrice", "id", "totalPrice", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fill Delivery Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Phone No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_19_listener($event) { return ctx.user.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_23_listener($event) { return ctx.user.pincode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_27_listener($event) { return ctx.user.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_Template_button_click_28_listener() { return ctx.placeOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " PlaceOrder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.pincode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.price);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".login-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 50px 20px;\r\n  flex-direction: column;\r\n  background: var(--form-bg-color);\r\n  color: var(--form-color);\r\n  padding: 50px 10px;\r\n  border: 0.5px solid black;\r\n}\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n}\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n@media screen and (max-width: 800px) {\r\n  .login-section[_ngcontent-%COMP%] {\r\n    margin: 20px 2px;\r\n    padding: 2vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDUwcHggMjBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWZvcm0tYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1mb3JtLWNvbG9yKTtcclxuICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcclxufVxyXG4ubG9naW4tc2VjdGlvbiBmb3JtIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uIGZvcm0gaW5wdXQge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uIGZvcm0gYnV0dG9uIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmxvZ2luLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAyMHB4IDJweDtcclxuICAgIHBhZGRpbmc6IDJ2dztcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "8y03":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.component */ "IiZn");
/* harmony import */ var _ordersummary_ordersummary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordersummary/ordersummary.component */ "VLax");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "1ZQY");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm/confirm.component */ "Zn+d");
/* harmony import */ var _form_deactivate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/deactivate.service */ "zVlM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    {
        path: '',
        children: [
            { path: '', component: _ordersummary_ordersummary_component__WEBPACK_IMPORTED_MODULE_3__["OrdersummaryComponent"] },
            {
                path: 'details',
                component: _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
                canDeactivate: [_form_deactivate_service__WEBPACK_IMPORTED_MODULE_7__["DeactivateService"]],
            },
            {
                path: 'confirm',
                component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"],
            },
        ],
        component: _checkout_component__WEBPACK_IMPORTED_MODULE_2__["CheckoutComponent"],
    },
];
class CheckoutModule {
}
CheckoutModule.ɵfac = function CheckoutModule_Factory(t) { return new (t || CheckoutModule)(); };
CheckoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CheckoutModule });
CheckoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CheckoutModule, { declarations: [_ordersummary_ordersummary_component__WEBPACK_IMPORTED_MODULE_3__["OrdersummaryComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"], _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "VLax":
/*!*****************************************************************!*\
  !*** ./src/app/checkout/ordersummary/ordersummary.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrdersummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersummaryComponent", function() { return OrdersummaryComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function OrdersummaryComponent_ul_3_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Your Order Summary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersummaryComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrdersummaryComponent_ul_3_p_1_Template, 3, 0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loading !== "upldating");
} }
function OrdersummaryComponent_ul_4_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrdersummaryComponent_ul_4_li_10_Template_input_ngModelChange_12_listener($event) { const item_r5 = ctx.$implicit; return item_r5.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/cakes/", item_r5.cakeid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/cakes/", item_r5.cakeid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Weight: ", item_r5.weight, " kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 8, item_r5.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r5.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 11, item_r5.quantity * item_r5.price, "INR"));
} }
function OrdersummaryComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 8);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OrdersummaryComponent_ul_4_li_10_Template, 16, 14, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Total :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.cartItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.deliveryCharge ? " Delivery Charge: \u20B9" + ctx_r1.deliveryCharge : "Free Delivery", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 5, ctx_r1.totalPrice, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](25, 8, ctx_r1.deliveryCharge, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.totalPrice ? ctx_r1.totalPrice + ctx_r1.deliveryCharge : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](28, 11, ctx_r1.totalPrice, "INR"), " ");
} }
function OrdersummaryComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersummaryComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class OrdersummaryComponent {
    constructor(toastr, cs, http, router) {
        this.toastr = toastr;
        this.cs = cs;
        this.http = http;
        this.router = router;
        // store the delivery charges
        this.deliveryCharge = 0;
        // store the user cart items
        this.cartItems = [];
        // store the status of the item loaded or not
        this.loading = true;
        // store the value of the cart items
        this.totalPrice = 0;
        // get the cart items
        this.getCartItems();
    }
    // method to load the cart items
    getCartItems() {
        // hit post request to fetch the cart items
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'cakecart', {}).subscribe((res) => {
            // check if the data is loaded or not
            if (res.data) {
                // change the loading states to false after data get loaded
                this.loading = false;
                return (this.cartItems = res.data);
            }
            this.toastr.warning(res.message);
        }, (err) => {
            // display error message
            console.log(err);
            this.toastr.error(err.message);
        });
    }
    ngDoCheck() {
        // calculate the totalprice of the cart items
        this.totalPrice = this.cartItems.reduce((acc, item) => item.price * item.quantity + acc, 0);
        // check to change the delivery charge
        if (this.totalPrice > this.cs.mincartvalue) {
            this.deliveryCharge = 0;
        }
        else {
            this.deliveryCharge = this.cs.deliveryCharge;
        }
        // check for empty cart
        if (!this.loading && !this.totalPrice) {
            this.toastr.info('Your Cart is empty.');
            this.router.navigate(['/']);
        }
    }
    ngOnInit() { }
    // method to redirect user to the next route
    next() {
        // enable the place order component
        this.cs.orderconfirm = true;
        // find the index of current activated li tag
        const index = this.cs.ullist.findIndex((e) => e.className.includes('active'));
        // remove the active class from the current activated li tag
        this.cs.ullist[index].classList.remove('active');
        // add active class to the next li tag
        this.cs.ullist[index + 1].classList.add('active');
        this.router.navigate(['/checkout/details']);
    }
}
OrdersummaryComponent.ɵfac = function OrdersummaryComponent_Factory(t) { return new (t || OrdersummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
OrdersummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrdersummaryComponent, selectors: [["app-ordersummary"]], decls: 6, vars: 3, consts: [[1, "cart", "flex"], [1, "cart-main", "flex"], [1, "cart-products", "flex"], ["class", "cart-products-list flex", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "cart-products-list", "flex"], [4, "ngIf"], ["src", "https://i.stack.imgur.com/hzk6C.gif", "alt", "", 1, "loading"], [1, "products-header"], ["class", "order-products", 4, "ngFor", "ngForOf"], [1, "products-header", "total"], [1, "fas", "fa-truck"], [1, "total"], [1, "delivery-charge"], [1, "total-price"], [1, "order-products"], [1, "item-title"], ["alt", "", 1, "item-img", "click-effect", 3, "src", "routerLink"], [1, "click-effect", 3, "routerLink"], [1, "small-text"], ["type", "number", "name", "quantity", "disabled", "", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]], template: function OrdersummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrdersummaryComponent_ul_3_Template, 2, 1, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OrdersummaryComponent_ul_4_Template, 29, 14, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OrdersummaryComponent_button_5_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.totalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.totalPrice);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n  font-weight: 600;\r\n}\r\n.cart[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  flex-direction: column;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  justify-content: space-between;\r\n  background: #000;\r\n  color: aliceblue;\r\n  padding: 20px;\r\n  border: 0.5px solid #000;\r\n  border-radius: 10px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-products[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: rgb(240, 248, 255);\r\n  border-radius: 10px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-main[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n}\r\n.cart[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-products-list[_ngcontent-%COMP%] {\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding-right: 25px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-products-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  max-width: 50px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-products-list[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  height: auto;\r\n  object-fit: cover;\r\n  border-radius: 10px;\r\n  box-shadow: 2px 5px 10px #000;\r\n  margin: 10px 20px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .products-header[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #000;\r\n}\r\n.cart[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  width: 100%;\r\n\r\n  grid-template-columns: 3fr repeat(3, 1fr);\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  text-align: end;\r\n  \r\n}\r\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-of-type {\r\n  border-top: 1px solid #000;\r\n}\r\n.products-header.total[_ngcontent-%COMP%] {\r\n  grid-template-columns: 2fr repeat(2, 1fr);\r\n}\r\n.cart[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 30% auto;\r\n}\r\np.small-text[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  margin: 0;\r\n}\r\n.loading[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-empty[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-empty[_ngcontent-%COMP%] {\r\n  background: #eee;\r\n  border-radius: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n  align-items: center;\r\n  height: 500px;\r\n  color: rgba(151, 148, 148, 0.801);\r\n}\r\n.cart[_ngcontent-%COMP%]   .cart-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n}\r\nimg.click-effect[_ngcontent-%COMP%]:active, p.click-effect[_ngcontent-%COMP%]:active {\r\n  transform: scale(1);\r\n  box-shadow: 5px 10px 20px #faf !important;\r\n  color: coral;\r\n}\r\n@media screen and (max-width: 840px) {\r\n  *[_ngcontent-%COMP%] {\r\n    font-size: 2vw;\r\n  }\r\n  .cart[_ngcontent-%COMP%]   .cart-products-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    text-align: center;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVzs7RUFFWCx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UseUNBQXlDO0FBQzNDO0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLFlBQVk7QUFDZDtBQUNBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJvcmRlcnN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uY2FydCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uY2FydCAuY2FydC1oZWFkZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5jYXJ0IC5jYXJ0LXByb2R1Y3RzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyNDgsIDI1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY2FydCAuY2FydC1tYWluIHtcclxuICB3aWR0aDogOTUlO1xyXG59XHJcbi5jYXJ0IG1haW4ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJ0IC5jYXJ0LXByb2R1Y3RzLWxpc3Qge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG4uY2FydCAuY2FydC1wcm9kdWN0cy1saXN0IGlucHV0IHtcclxuICBtYXgtd2lkdGg6IDUwcHg7XHJcbn1cclxuLmNhcnQgLmNhcnQtcHJvZHVjdHMtbGlzdCAuaXRlbS1pbWcge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDVweCAxMHB4ICMwMDA7XHJcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbn1cclxuLmNhcnQgLnByb2R1Y3RzLWhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuLmNhcnQgbGkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIHJlcGVhdCgzLCAxZnIpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRvdGFsIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICAvKiBtYXJnaW46IDAgNTUlIDAgMDsgKi9cclxufVxyXG4udG90YWwgc3BhbjpsYXN0LW9mLXR5cGUge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcbi5wcm9kdWN0cy1oZWFkZXIudG90YWwge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIHJlcGVhdCgyLCAxZnIpO1xyXG59XHJcblxyXG4uY2FydCAuaXRlbS10aXRsZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSBhdXRvO1xyXG59XHJcbnAuc21hbGwtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubG9hZGluZyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uY2FydCAuY2FydC1lbXB0eSAubG9hZGluZyB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uY2FydCAuY2FydC1lbXB0eSB7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDE1MSwgMTQ4LCAxNDgsIDAuODAxKTtcclxufVxyXG4uY2FydCAuY2FydC1lbXB0eSBzcGFuIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbmltZy5jbGljay1lZmZlY3Q6YWN0aXZlLFxyXG5wLmNsaWNrLWVmZmVjdDphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMjBweCAjZmFmICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGNvcmFsO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgKiB7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICB9XHJcbiAgLmNhcnQgLmNhcnQtcHJvZHVjdHMtbGlzdCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Zn+d":
/*!*******************************************************!*\
  !*** ./src/app/checkout/confirm/confirm.component.ts ***!
  \*******************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class ConfirmComponent {
    constructor(cs, http, toastr, router) {
        this.cs = cs;
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        // check if the order object exists or not
        if (!cs.order.name) {
            this.router.navigate(['/checkout']);
        }
    }
    ngOnInit() { }
    // method to place order
    payment() {
        // hit post request to place order
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'addcakeorder', this.cs.order).subscribe((res) => {
            // check if order placed successful
            if (res.messageg === 'order placed') {
                this.toastr.success('Your Order Placed!!');
                this.router.navigate(['/myorders']);
                return;
            }
            this.toastr.warning(res.messageg);
        }, (err) => {
            // display error message
            console.log(err);
            this.toastr.error(err.message);
        });
    }
}
ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) { return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmComponent, selectors: [["app-confirm"]], decls: 17, vars: 6, consts: [[1, "payment"], [1, "btn", "btn-primary", 3, "click"]], template: function ConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Confirm Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Payment Mode : Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmComponent_Template_button_click_15_listener() { return ctx.payment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Place Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Name :", ctx.cs.order.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Phone No. :", ctx.cs.order.phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" Delivery Address :", ctx.cs.order.address, ",", ctx.cs.order.city, "-", ctx.cs.order.pincode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Amount To Pay:", ctx.cs.order.price, "");
    } }, styles: [".payment[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.payment[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 100%;\r\n  min-height: 50vh;\r\n  margin: 20px 0;\r\n  background: rgb(240, 81, 81);\r\n}\r\n.payment[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  padding: 20px;\r\n  background: rgba(255, 255, 254, 0.473);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDIiwiZmlsZSI6ImNvbmZpcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucGF5bWVudCA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTB2aDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCA4MSwgODEpO1xyXG59XHJcbi5wYXltZW50ID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU0LCAwLjQ3Myk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zVlM":
/*!*****************************************************!*\
  !*** ./src/app/checkout/form/deactivate.service.ts ***!
  \*****************************************************/
/*! exports provided: DeactivateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateService", function() { return DeactivateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DeactivateService {
    constructor() { }
    canDeactivate(component, currentRoute, currentState, nextState) {
        if (nextState === null || nextState === void 0 ? void 0 : nextState.url.includes('/checkout')) {
            return component.confirm(nextState);
        }
        return true;
    }
}
DeactivateService.ɵfac = function DeactivateService_Factory(t) { return new (t || DeactivateService)(); };
DeactivateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeactivateService, factory: DeactivateService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module.js.map