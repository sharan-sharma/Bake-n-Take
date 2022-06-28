(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "+wV7":
/*!******************************************************!*\
  !*** ./src/app/admin/editform/editform.component.ts ***!
  \******************************************************/
/*! exports provided: EditformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditformComponent", function() { return EditformComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function EditformComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Cake Details... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditformComponent_form_4_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditformComponent_form_4_div_46_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r5.cakeIngs[i_r4] = $event); })("change", function EditformComponent_form_4_div_46_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.cake.ingredients.splice(i_r4, 1, ctx_r7.cakeIngs[i_r4]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditformComponent_form_4_div_46_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.deleteIng(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", ingredient_r3 + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.cakeIngs[i_r4])("id", "ingredient" + i_r4);
} }
function EditformComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function EditformComponent_form_4_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Product Image :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditformComponent_form_4_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.imgPreview($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditformComponent_form_4_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.upload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cake Name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditformComponent_form_4_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.cake.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Price :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditformComponent_form_4_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.cake.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Weight :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditformComponent_form_4_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.cake.weight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Description :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditformComponent_form_4_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.cake.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Type :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditformComponent_form_4_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.cake.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Eggless :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditformComponent_form_4_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.cake.eggless = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Flavour :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditformComponent_form_4_Template_input_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.cake.flavour = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Ingredients :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, EditformComponent_form_4_div_46_Template, 4, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditformComponent_form_4_Template_button_click_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.addIng($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Owner Details :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Email :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditformComponent_form_4_Template_input_ngModelChange_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.cake.owner.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditformComponent_form_4_Template_input_ngModelChange_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.cake.owner.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.cake.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.cake.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.cake.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.cake.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.cake.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.cake.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.cake.eggless);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.cake.flavour);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.cake.ingredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.cake.owner.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.cake.owner.name);
} }
class EditformComponent {
    constructor(http, cs, admin, toastr, route) {
        this.http = http;
        this.cs = cs;
        this.admin = admin;
        this.toastr = toastr;
        this.route = route;
        // store the loading status of cake details
        this.loading = true;
        // store the ingredients of the cake
        this.cakeIngs = [];
        // fetch the cake id from the params
        const id = this.route.snapshot.params.cakeId;
        // hit get request to fetch the cake details
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'cake/' + id).subscribe((res) => {
            if (res.data) {
                // store the cake details
                this.cake = res.data;
                // call the method to update ingredients array
                this.updateIngs();
                this.loading = false;
                return;
            }
            this.toastr.error(res.message);
        }, (err) => {
            // display the error message
            console.log(err);
            this.toastr.error(err.message);
        });
    }
    ngOnInit() { }
    // method to upload image to the server
    upload(e) {
        // select the parent form tag
        e = e.target.parentElement.parentElement;
        // select the file input tag
        const file = e.querySelector('#image'), 
        // select the img tag to preview image
        img = document.querySelector('.preview-img img'), 
        // create formData object from FromData Class
        formData = new FormData();
        // check if user has uploaded image or not
        if (!file.files[0]) {
            this.toastr.info('Then click on upload');
            this.toastr.info('First Choose the image File!!');
            return;
        }
        // show uploading message
        this.toastr.info('Image Uploading..... ', '', {
            progressBar: true,
            timeOut: 2000,
            progressAnimation: 'increasing',
        });
        // append uploaded file to formData
        formData.append('file', file.files[0]);
        const user = JSON.parse(localStorage.loginUser);
        // generating http post request to upload image
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'upload', formData).subscribe((res) => {
            // check if image upload successful
            if (res.imageUrl) {
                this.toastr.success('Image Uploaded Successfuly');
                this.cake.image = res.imageUrl;
            }
            else {
                this.toastr.info('Please Upload a valid Image File');
                this.toastr.warning('Image Upload failed!!');
            }
        }, (err) => {
            // display the error message
            console.log(err);
            this.toastr.error('Image Upload failed!!');
        });
    }
    // method to preview image before uploading
    imgPreview(imgEl) {
        // select the input file tag
        const file = imgEl.target, 
        // select img tag to preview image
        imgOutput = document.querySelector('.preview-img img');
        // create the url to preview image
        imgOutput.src = URL.createObjectURL(file.files[0]);
    }
    // method to save edits
    saveChanges() {
        // check to validate cake details
        if (this.admin.validateCakeDetails(this.cake)) {
            // filter out the vaild ingredients fields
            this.cake.ingredients = this.cake.ingredients.filter((e) => e);
            this.updateIngs();
            console.log(this.cake);
            return;
        }
        this.toastr.info('Please fill all fields correctly.');
    }
    // method to delete ingredient
    deleteIng(i) {
        this.cake.ingredients.splice(i, 1);
        this.updateIngs();
    }
    // method to add ingredients
    addIng(e) {
        e.preventDefault();
        this.cake.ingredients.push('');
        this.updateIngs();
    }
    // method to update the ingredients array
    updateIngs() {
        this.cakeIngs = [];
        this.cakeIngs = this.cake.ingredients.map((e) => e);
    }
}
EditformComponent.ɵfac = function EditformComponent_Factory(t) { return new (t || EditformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
EditformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditformComponent, selectors: [["app-editform"]], decls: 5, vars: 2, consts: [[1, "login-section"], ["class", "cart-products-list flex", 4, "ngIf"], [3, "submit", 4, "ngIf"], [1, "cart-products-list", "flex"], ["src", "https://i.stack.imgur.com/hzk6C.gif", "alt", "", 1, "loading"], [3, "submit"], [1, "form-group"], ["for", "image"], [1, "preview-img"], ["alt", "", 3, "src"], [1, "flex"], ["type", "file", "name", "image", "id", "image", 1, "form-control", 3, "change"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["for", "name"], ["name", "name", "type", "text", "id", "name", "placeholder", "Enter your full name", "autocomplete", "disabled", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "flex", "owner-details"], ["for", "price"], ["type", "text", "name", "price", "placeholder", "Enter your cake price", "id", "price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "weight"], ["type", "text", "name", "weight", "placeholder", "Enter your cake weight", "id", "weight", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "description"], ["name", "description", "type", "text", "id", "description", "placeholder", "Enter your address", "autocomplete", "disabled", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "flex"], [1, "flex", "type"], ["for", "type"], ["name", "type", "type", "text", "id", "type", "placeholder", "Enter cake type", "autocomplete", "disabled", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "eggless"], ["type", "checkbox", "name", "eggless", "id", "eggless", 3, "ngModel", "ngModelChange"], ["for", "flavour"], ["type", "text", "name", "flavour", "placeholder", "Enter your cake flavour", "id", "flavour", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "ingredients"], [1, "flex", "ingredient"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", 3, "click"], [1, "fas", "fa-plus-square", "fa-2x"], ["for", "owner"], ["id", "owner", 1, "form-group", "flex", "owner-details"], ["for", "oemail"], ["type", "text", "name", "oemail", "placeholder", "Enter your cake flavour", "id", "oemail", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "oname"], ["type", "text", "name", "oname", "placeholder", "Enter your cake flavour", "id", "oname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "text", "placeholder", "Enter your ingredient", 1, "form-control", 3, "name", "ngModel", "id", "ngModelChange", "change"], [1, "far", "fa-trash-alt"]], template: function EditformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit Cake Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EditformComponent_ul_3_Template, 4, 0, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EditformComponent_form_4_Template, 63, 11, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.cake);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["label[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n.login-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 50px;\r\n  flex-direction: column;\r\n  background: rgba(255, 255, 255, 0.521);\r\n  padding: 50px;\r\n  border: 0.5px solid black;\r\n}\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n}\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n.login-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 50px;\r\n  flex-direction: column;\r\n  background: var(--form-bg-color);\r\n  color: var(--form-color);\r\n  border-radius: 10px;\r\n\r\n  padding: 50px;\r\n  border: 0.5px solid var(--form-color);\r\n}\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n}\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n.preview-img[_ngcontent-%COMP%] {\r\n  max-width: 20%;\r\n  max-height: 100%;\r\n  margin: 30px;\r\n  \r\n}\r\n.preview-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-height: 60%;\r\n  object-fit: cover;\r\n  min-width: 100px;\r\n}\r\n.form-group.flex[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n}\r\n.form-group.flex[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  justify-content: space-around;\r\n}\r\n.form-group.flex[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n}\r\n.flex.owner-details[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n}\r\n.flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  width: 50%;\r\n  align-items: center;\r\n}\r\n.flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n}\r\n#eggless[_ngcontent-%COMP%] {\r\n  margin: 0 30px;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\nlabel[for=\"eggless\"][_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n  font-size: 20px;\r\n}\r\n.ingredient[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  padding-left: 5%;\r\n  flex-wrap: wrap;\r\n  \r\n  justify-content: space-between;\r\n}\r\n.ingredient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.ingredient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  \r\n}\r\n.ingredient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n@media screen and (max-width: 940px) {\r\n  .owner-details[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n  }\r\n  .flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n}\r\n@media screen and (max-width: 800px) {\r\n  .login-section[_ngcontent-%COMP%] {\r\n    margin: 20px 2px;\r\n    padding: 0;\r\n  }\r\n}\r\n@media screen and (max-width: 620px) {\r\n  .form-group.flex[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n  .form-group.flex[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    justify-content: flex-start;\r\n  }\r\n  .form-group.flex[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n  .form-group.flex[_ngcontent-%COMP%]    > div.flex.type[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n  .form-group.flex[_ngcontent-%COMP%]    > div.flex.type[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRmb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0RBQWdEO0FBQ2xEO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsV0FBVztJQUNYLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6ImVkaXRmb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxufVxyXG4ubG9naW4tc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogNTBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjEpO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcclxufVxyXG4ubG9naW4tc2VjdGlvbiBmb3JtIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uIGZvcm0gaW5wdXQge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uIGZvcm0gYnV0dG9uIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmxvZ2luLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDUwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3JtLWJnLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tZm9ybS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgcGFkZGluZzogNTBweDtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWZvcm0tY29sb3IpO1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uIGZvcm0ge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuLmxvZ2luLXNlY3Rpb24gZm9ybSBpbnB1dCB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLmxvZ2luLXNlY3Rpb24gZm9ybSBidXR0b24ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4ucHJldmlldy1pbWcge1xyXG4gIG1heC13aWR0aDogMjAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXHJcbn1cclxuLnByZXZpZXctaW1nIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNjAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwLmZsZXgge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4uZm9ybS1ncm91cC5mbGV4ID4gZGl2IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5mb3JtLWdyb3VwLmZsZXggPiBkaXYgPiBpbnB1dCB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmZsZXgub3duZXItZGV0YWlscyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mbGV4Lm93bmVyLWRldGFpbHMgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mbGV4Lm93bmVyLWRldGFpbHMgPiBkaXYgPiBpbnB1dCB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuI2VnZ2xlc3Mge1xyXG4gIG1hcmdpbjogMCAzMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5sYWJlbFtmb3I9XCJlZ2dsZXNzXCJdIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmluZ3JlZGllbnQge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjtzICovXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5pbmdyZWRpZW50ID4gZGl2IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaW5ncmVkaWVudCA+IGRpdiA+IGlucHV0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIC8qIG1hcmdpbjogMDsgKi9cclxufVxyXG4uaW5ncmVkaWVudCA+IGRpdiA+IGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQwcHgpIHtcclxuICAub3duZXItZGV0YWlscyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLmZsZXgub3duZXItZGV0YWlscyA+IGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmZsZXgub3duZXItZGV0YWlscyA+IGRpdiA+IGlucHV0IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmxvZ2luLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAyMHB4IDJweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgLmZvcm0tZ3JvdXAuZmxleCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwLmZsZXggPiBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwLmZsZXggPiBkaXYgPiBpbnB1dCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICAuZm9ybS1ncm91cC5mbGV4ID4gZGl2LmZsZXgudHlwZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwLmZsZXggPiBkaXYuZmxleC50eXBlID4gaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5mbGV4Lm93bmVyLWRldGFpbHMgPiBkaXYgPiBpbnB1dCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "g/2z":
/*!****************************************************!*\
  !*** ./src/app/admin/addcake/addcake.component.ts ***!
  \****************************************************/
/*! exports provided: AddcakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcakeComponent", function() { return AddcakeComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AddcakeComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddcakeComponent_div_59_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r3.ingrediant[i_r2] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcakeComponent_div_59_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.deleteIng(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredien_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", ingredien_r1 + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.ingrediant[i_r2])("id", "ingredien" + i_r2);
} }
class AddcakeComponent {
    constructor(toastr, http, admin, router) {
        this.toastr = toastr;
        this.http = http;
        this.admin = admin;
        this.router = router;
        // store the cake details
        this.cake = { type: '' };
        // store the cake ingrediants
        this.ingrediant = {};
        this.ingredients = [];
    }
    ngOnInit() { }
    // method to add cake to the server
    addcake() {
        // check whether image is uploaded
        if (!this.cake.image) {
            this.toastr.warning('Please Upload the cake image first.');
            return;
        }
        // validate the cake input fields
        if (this.admin.validateCakeDetails(this.cake)) {
            // store the ingrediants
            this.ingredients = Object.values(this.ingrediant);
            // filter out the valid ingrediant valuess
            this.ingredients = [...this.ingredients].filter((e) => e || e.trim());
            // store the ingredients array in the cake object
            this.cake.ingredients = [...this.ingredients];
            // hit post request to get the cake details
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'addcake', this.cake).subscribe((res) => {
                // check if the cake added successful
                if (res.message === 'Success') {
                    this.toastr.success(`${this.cake.name} Added Successfully.`);
                    this.router.navigate(['/admin']);
                    return;
                }
                // display the waring message if any error comes
                this.toastr.warning(res.errorMessage.message, '', {
                    positionClass: 'toast-top-full-width',
                });
            }, (err) => {
                // display this server error
                this.toastr.error(err.message);
                console.log(err);
            });
            return;
        }
        this.toastr.info('Please fill all fields correctly.');
    }
    // image upload method
    upload(e) {
        // select the parent form tag
        e = e.target.parentElement.parentElement;
        // select the file input tag
        const file = e.querySelector('#image'), 
        // select the image tag to preview image
        img = document.querySelector('.preview-img img'), 
        // create formData object from FromData Class
        formData = new FormData();
        // check if user has uploaded image or not
        if (!file.files[0]) {
            this.toastr.info('Then click on upload');
            this.toastr.info('First Choose the image File!!');
            return;
        }
        // show uploading message
        this.toastr.info('Image Uploading..... ', '', {
            progressBar: true,
            timeOut: 2000,
            progressAnimation: 'increasing',
        });
        // append uploaded file to formData
        formData.append('file', file.files[0]);
        // hit post request to uplaod image
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'upload', formData).subscribe((res) => {
            // check if image upload is successful
            if (res.imageUrl) {
                this.toastr.success('Image Uploaded Successfuly');
                this.cake.image = res.imageUrl;
            }
            else {
                this.toastr.info('Please Upload a valid Image File');
                this.toastr.warning('Image Upload failed!!');
            }
        }, (err) => {
            // display the error message
            console.log(err);
            this.toastr.error('Image Upload failed!!');
        });
    }
    // preview the image before uploading
    imgPreview(imgEl) {
        // select the file input tag
        const file = imgEl.target, 
        // select the image tag to preview the image
        imgOutput = document.querySelector('.preview-img img');
        // create the url to preview image
        imgOutput.src = URL.createObjectURL(file.files[0]);
    }
    // method to delete ingrediant
    deleteIng(i) {
        delete this.ingrediant[i];
        this.ingredients = Object.values(this.ingrediant);
    }
    // method to add ingrediant
    addIng(e) {
        this.ingredients = Object.values(this.ingrediant);
        this.ingredients.push('');
    }
}
AddcakeComponent.ɵfac = function AddcakeComponent_Factory(t) { return new (t || AddcakeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AddcakeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddcakeComponent, selectors: [["app-addcake"]], decls: 64, vars: 9, consts: [[1, "login-section"], [3, "submit"], [1, "form-group"], ["for", "image"], [1, "preview-img"], ["alt", "", 3, "src"], [1, "flex"], ["type", "file", "name", "image", "id", "image", 1, "form-control", 3, "change"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["for", "name"], ["name", "name", "type", "text", "id", "name", "placeholder", "Enter your full name", "autocomplete", "disabled", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "flex", "owner-details"], ["for", "price"], ["type", "text", "name", "price", "placeholder", "Enter your cake price", "id", "price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "weight"], ["type", "text", "name", "weight", "placeholder", "Enter your cake weight", "id", "weight", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "description"], ["name", "description", "type", "text", "id", "description", "placeholder", "Enter your address", "autocomplete", "disabled", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "flex"], [1, "flex", "type"], ["for", "type"], ["name", "type", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "General"], ["value", "Special"], ["value", "Birthday"], ["value", "Wedding"], ["for", "eggless"], ["type", "checkbox", "name", "eggless", "id", "eggless", 3, "ngModel", "ngModelChange"], ["for", "flavour"], ["type", "text", "name", "flavour", "placeholder", "Enter your cake flavour", "id", "flavour", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "ingredients"], [1, "flex", "ingredient"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", 3, "click"], [1, "fas", "fa-plus-square", "fa-2x"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "text", "placeholder", "Enter your ingredient", 1, "form-control", 3, "name", "ngModel", "id", "ngModelChange"], [1, "far", "fa-trash-alt"]], template: function AddcakeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Cake Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddcakeComponent_Template_form_submit_3_listener() { return ctx.addcake(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Product Image :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddcakeComponent_Template_input_change_10_listener($event) { return ctx.imgPreview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcakeComponent_Template_button_click_11_listener($event) { return ctx.upload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Cake Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddcakeComponent_Template_input_ngModelChange_16_listener($event) { return ctx.cake.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Price :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " \u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddcakeComponent_Template_input_ngModelChange_22_listener($event) { return ctx.cake.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Weight:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddcakeComponent_Template_input_ngModelChange_26_listener($event) { return ctx.cake.weight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Kg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddcakeComponent_Template_input_ngModelChange_31_listener($event) { return ctx.cake.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddcakeComponent_Template_select_ngModelChange_36_listener($event) { return ctx.cake.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Select Cake type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Special");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Wedding");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Eggless :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddcakeComponent_Template_input_ngModelChange_50_listener($event) { return ctx.cake.eggless = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Flavour :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddcakeComponent_Template_input_ngModelChange_54_listener($event) { return ctx.cake.flavour = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Ingredients :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, AddcakeComponent_div_59_Template, 4, 3, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcakeComponent_Template_button_click_60_listener($event) { return ctx.addIng($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.cake.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cake.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cake.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cake.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cake.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cake.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cake.eggless);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cake.flavour);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ingredients);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["label[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\n\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n\r\n.login-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 50px auto;\r\n  flex-direction: column;\r\n  background: var(--form-bg-color);\r\n  color: var(--form-color);\r\n  padding: 25px 0px;\r\n  border: 0.5px solid black;\r\n  border-radius: 5px;\r\n  width: 70%;\r\n}\r\n\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n}\r\n\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\n\r\n.login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n\r\n.preview-img[_ngcontent-%COMP%] {\r\n  max-width: 20%;\r\n  max-height: 100%;\r\n  margin: 30px;\r\n  \r\n}\r\n\r\n.preview-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-height: 60%;\r\n  object-fit: cover;\r\n  min-width: 100px;\r\n}\r\n\r\n.form-group.flex[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n}\r\n\r\n.form-group.flex[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.form-group.flex[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .form-group.flex[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n}\r\n\r\n.flex.owner-details[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n}\r\n\r\n.flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  width: 50%;\r\n  align-items: center;\r\n}\r\n\r\n.flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n}\r\n\r\n#eggless[_ngcontent-%COMP%] {\r\n  margin: 0 30px;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\nlabel[for=\"eggless\"][_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n  font-size: 20px;\r\n}\r\n\r\n.ingredient[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  padding-left: 5%;\r\n  flex-wrap: wrap;\r\n  \r\n  justify-content: space-between;\r\n}\r\n\r\n.ingredient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.ingredient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  \r\n}\r\n\r\n.ingredient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n@media screen and (max-width: 940px) {\r\n  .owner-details[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n  }\r\n  .flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .login-section[_ngcontent-%COMP%] {\r\n    margin: 20px auto;\r\n    padding: 0;\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 620px) {\r\n  .form-group.flex[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n  .form-group.flex[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    justify-content: flex-start;\r\n  }\r\n  .form-group.flex[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%], .form-group.flex[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n  .form-group.flex[_ngcontent-%COMP%]    > div.flex.type[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n  .form-group.flex[_ngcontent-%COMP%]    > div.flex.type[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .form-group.flex[_ngcontent-%COMP%]    > div.flex.type[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%], .flex.owner-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .login-section[_ngcontent-%COMP%] {\r\n    margin: 20px auto;\r\n    padding: 0;\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGNha2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7O0VBRUUsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7O0VBRUUsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7O0FBQ0E7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFDQTs7RUFFRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFDQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBOztJQUVFLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsMkJBQTJCO0VBQzdCO0VBQ0E7O0lBRUUsVUFBVTtFQUNaO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCO0VBQ0E7O0lBRUUsV0FBVztFQUNiO0VBQ0E7O0lBRUUsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoiYWRkY2FrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sb2dpbi1zZWN0aW9uIGZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uIGZvcm0gaW5wdXQsXHJcbi5sb2dpbi1zZWN0aW9uIGZvcm0gc2VsZWN0IHtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG4ubG9naW4tc2VjdGlvbiBmb3JtIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3JtLWJnLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tZm9ybS1jb2xvcik7XHJcbiAgcGFkZGluZzogMjVweCAwcHg7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG4ubG9naW4tc2VjdGlvbiBmb3JtIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uIGZvcm0gc2VsZWN0LFxyXG4ubG9naW4tc2VjdGlvbiBmb3JtIGlucHV0IHtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG4ubG9naW4tc2VjdGlvbiBmb3JtIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5wcmV2aWV3LWltZyB7XHJcbiAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDMwcHg7XHJcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxufVxyXG4ucHJldmlldy1pbWcgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA2MCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAuZmxleCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5mb3JtLWdyb3VwLmZsZXggPiBkaXYge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmZvcm0tZ3JvdXAuZmxleCA+IGRpdiA+IGlucHV0LFxyXG4uZm9ybS1ncm91cC5mbGV4ID4gZGl2ID4gc2VsZWN0IHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uZmxleC5vd25lci1kZXRhaWxzIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZsZXgub3duZXItZGV0YWlscyA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZsZXgub3duZXItZGV0YWlscyA+IGRpdiA+IGlucHV0LFxyXG4uZmxleC5vd25lci1kZXRhaWxzID4gZGl2ID4gc2VsZWN0IHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4jZWdnbGVzcyB7XHJcbiAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbmxhYmVsW2Zvcj1cImVnZ2xlc3NcIl0ge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uaW5ncmVkaWVudCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyO3MgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmluZ3JlZGllbnQgPiBkaXYge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pbmdyZWRpZW50ID4gZGl2ID4gaW5wdXQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgLyogbWFyZ2luOiAwOyAqL1xyXG59XHJcbi5pbmdyZWRpZW50ID4gZGl2ID4gYnV0dG9uIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDBweCkge1xyXG4gIC5vd25lci1kZXRhaWxzIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuICAuZmxleC5vd25lci1kZXRhaWxzID4gZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZmxleC5vd25lci1kZXRhaWxzID4gZGl2ID4gaW5wdXQsXHJcbiAgLmZsZXgub3duZXItZGV0YWlscyA+IGRpdiA+IHNlbGVjdCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5sb2dpbi1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgLmZvcm0tZ3JvdXAuZmxleCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwLmZsZXggPiBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwLmZsZXggPiBkaXYgPiBzZWxlY3QsXHJcbiAgLmZvcm0tZ3JvdXAuZmxleCA+IGRpdiA+IGlucHV0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwLmZsZXggPiBkaXYuZmxleC50eXBlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLmZvcm0tZ3JvdXAuZmxleCA+IGRpdi5mbGV4LnR5cGUgPiBpbnB1dCxcclxuICAuZm9ybS1ncm91cC5mbGV4ID4gZGl2LmZsZXgudHlwZSA+IHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmZsZXgub3duZXItZGV0YWlscyA+IGRpdiA+IHNlbGVjdCxcclxuICAuZmxleC5vd25lci1kZXRhaWxzID4gZGl2ID4gaW5wdXQge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubG9naW4tc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "TRGY");
/* harmony import */ var _editform_editform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editform/editform.component */ "+wV7");
/* harmony import */ var _addcake_addcake_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addcake/addcake.component */ "g/2z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
    { path: 'editcake/:cakeId', component: _editform_editform_component__WEBPACK_IMPORTED_MODULE_4__["EditformComponent"] },
    { path: 'addcake', component: _addcake_addcake_component__WEBPACK_IMPORTED_MODULE_5__["AddcakeComponent"] },
];
class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_editform_editform_component__WEBPACK_IMPORTED_MODULE_4__["EditformComponent"], _addcake_addcake_component__WEBPACK_IMPORTED_MODULE_5__["AddcakeComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map