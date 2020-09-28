(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addmodifyexpense/addmodifyexpense.component.html":
/*!******************************************************************!*\
  !*** ./src/app/addmodifyexpense/addmodifyexpense.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>\n    <input type=\"button\" (click)=\"navigateToExpense()\" value=\"< Show Expense\">\n  </p>\n  Expense Name :\n  <input type=\"text\" [(ngModel)]=\"addnewExpense.name\" [ngClass]=\"{'global_disable': !isEditMode}\"><br>\n  Expense Cost :\n  {{addnewExpense.tripDetails.expenseCost | number:'1.0-2' }}\n  <br>\n  PerPerson Cost :\n  {{addnewExpense.tripDetails.perPersonCost | number:'1.0-2' }}\n  <hr>\n  <div>\n    Expense By: <input type=\"button\" value=\"+\" [ngClass]=\"{'global_disable': !isEditMode}\" (click)=\"addInExpenseTray()\"\n      *ngIf=\"expenseTray?.length < tripMembers?.length\">\n    <br><br>\n    <div *ngFor=\"let tray of expenseTray;let i = index\">\n      <select name=\"members\" [(ngModel)]=\"tray.selectedmember\" (change)=\"setNewSelectedMember(tray)\"\n        [ngClass]=\"{'global_disable': !isEditMode}\">\n        <option *ngFor=\"let mem of tray.members\">{{mem.name}}</option>\n      </select>\n      Amount : <input type=\"text\" [ngClass]=\"{'global_disable': !isEditMode}\" [(ngModel)]=\"tray.amount\"\n        (keyup)=\"calculateCurrentCost()\" placeholder=\"Amount\">\n      <input [ngClass]=\"{'global_disable': !isEditMode}\" *ngIf=\"i!=0\" style=\"float: right;\" type=\"button\" value=\"-\"\n        (click)=\"removeInExpenseTray(i)\">\n      <br>\n    </div>\n\n\n  </div>\n  <br>\n  <hr>\n  <div>\n    Expense Splited between :\n    <br><br>\n    <div>\n      <input type=\"checkbox\" [ngClass]=\"{'global_disable': !isEditMode}\" [(ngModel)]=\"ischeckAll\"\n        (click)=\"checkAll($event)\"> Check All\n      <br>\n      <br>\n      <div style=\"text-align: center;\">\n        <table width=\"100%\">\n          <thead>\n            <td>Have to Pay</td>\n            <td>Name</td>\n            <td>Paid Amount</td>\n            <td>Payable Amount</td>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let members of currentMember\">\n\n              <td><input type=\"checkbox\" [ngClass]=\"{'global_disable': !isEditMode}\" [(ngModel)]=\"members.isChecked\"\n                  (click)=\"memberChecked($event,members)\"></td>\n              <td>{{members.name}}</td>\n              <td [ngClass]=\"members.paidamount > 0 ? 'green_color' : 'red_color'\">\n                {{members.paidamount | number:'1.0-2'}}\n              </td>\n              <td [ngClass]=\"members.finalAmount > 0 ? 'green_color' : 'red_color'\">\n                {{members.finalAmount | number:'1.0-2'}} </td>\n              <!-- <td><input type=\"text\" [(ngModel)]=\"members.paidamount\"> </td> -->\n            </tr>\n          </tbody>\n          <!-- <thead>\n            <th>\n              <hr>Total</th>\n            <th>\n              <hr>&nbsp;</th>\n            <th>\n              <hr>{{footerInfo?.amountpaid | number:'1.0-2' }}</th>\n            <th>\n              <hr>{{footerInfo?.amountBalance | number:'1.0-2' }}</th>\n          </thead> -->\n        </table>\n      </div>\n      <!-- <div *ngFor=\"let members of currentMember\">\n\n        <input type=\"checkbox\" [(ngModel)]=\"members.isChecked\" (click)=\"memberChecked($event,members)\">\n\n        {{members.name}}\n\n        <br>\n      </div> -->\n    </div>\n  </div>\n  <!-- <input type=\"text\" [(ngModel)]=\"addnewExpense.tripDetails.expenseCost\"> -->\n\n  <p>\n    <input type=\"button\" (click)=\"addExpense(addnewExpense)\" [ngClass]=\"{'global_disable': !isEditMode}\"\n      value=\"{{expenseId ? 'Modify Expense' :'Add Expense'}}\">\n  </p>\n\n\n</div>"

/***/ }),

/***/ "./src/app/addmodifyexpense/addmodifyexpense.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/addmodifyexpense/addmodifyexpense.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZG1vZGlmeWV4cGVuc2UvYWRkbW9kaWZ5ZXhwZW5zZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/addmodifyexpense/addmodifyexpense.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/addmodifyexpense/addmodifyexpense.component.ts ***!
  \****************************************************************/
/*! exports provided: AddmodifyexpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmodifyexpenseComponent", function() { return AddmodifyexpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tripservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tripservice.service */ "./src/app/tripservice.service.ts");
/* harmony import */ var _model_storageKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/storageKey */ "./src/app/model/storageKey.ts");







var AddmodifyexpenseComponent = /** @class */ (function () {
    function AddmodifyexpenseComponent(_common, route, router, _trip) {
        this._common = _common;
        this.route = route;
        this.router = router;
        this._trip = _trip;
        this.expenseTray = [];
        // footerInfo: any = {
        //   totalMembers: 0,
        //   perPersonCost: 0,
        //   amountSpend: 0
        // }
        this.addnewExpense = {
            expenseId: null,
            name: null,
            tripDetails: {
                expenseCost: 0,
                members: [],
                perPersonCost: null
            }
        };
    }
    AddmodifyexpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tripId = this.route.snapshot.paramMap.get('tripId');
        this.expenseId = this.route.snapshot.paramMap.get('expenseId');
        this._common.getLocalData(_model_storageKey__WEBPACK_IMPORTED_MODULE_6__["storeKey"].id).then(function (id) {
            _this.userId = id;
        });
        this.getTripInfo(this.tripId);
    };
    AddmodifyexpenseComponent.prototype.getTripInfo = function (tripId) {
        var _this = this;
        var data = { tripId: tripId };
        this._common.setLoading(true);
        this._trip.getTripInfo(data).subscribe(function (res) {
            _this._common.setLoading(false);
            console.log("getTripInfo", res);
            _this.trip = res.result;
            _this.tripMembers = _this.trip.members;
            _this.currentMember = JSON.parse(JSON.stringify(_this.tripMembers));
            _this.expenseTray = [];
            if (_this.expenseId) {
                _this.setIsReadOnlyMode();
                _this.initExpenseModify();
            }
            else {
                _this.isEditMode = true;
                _this.addInExpenseTray();
                _this.setcurrentMembersBulkCheck(true);
            }
            _this.calculateExpenseDetails();
        });
    };
    AddmodifyexpenseComponent.prototype.setIsReadOnlyMode = function () {
        var _this = this;
        var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.trip.tripExpense, function (o) { return o._id == _this.expenseId; });
        this.isEditMode = (this.trip.creatorID == this.userId || this.trip.tripExpense[index].creatorID == this.userId);
    };
    AddmodifyexpenseComponent.prototype.initExpenseModify = function () {
        var _this = this;
        console.log(this.expenseId, "initExpenseModify", this.trip);
        this.expenseData = this.trip.tripExpense.filter(function (expense) {
            if (expense._id == _this.expenseId) {
                _this.expenseData = expense;
                _this.setUpaddInExpenseTray();
            }
        });
    };
    AddmodifyexpenseComponent.prototype.addInExpenseTray = function () {
        var _this = this;
        var expenseTrayData = {
            members: [],
            selectedmember: null,
            selectedmemberData: null,
            amount: 0
        };
        expenseTrayData.members = JSON.parse(JSON.stringify(this.tripMembers));
        console.log(this.expenseTray, "this.expenseTray", expenseTrayData);
        if (this.expenseTray.length < 1) {
            expenseTrayData.selectedmember = expenseTrayData.members[this.expenseTray.length].name;
            expenseTrayData.selectedmemberData = expenseTrayData.members[this.expenseTray.length];
            this.expenseTray.push(expenseTrayData);
        }
        else {
            this.tripMembers.filter(function (members) {
                var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](_this.expenseTray, function (o) {
                    return o.selectedmember == members.name;
                });
                if (index == -1 && expenseTrayData.selectedmember == null) {
                    expenseTrayData.selectedmember = members.name;
                    expenseTrayData.selectedmemberData = members;
                }
                console.log("tray_select_new", members, index);
            });
            this.expenseTray.push(expenseTrayData);
        }
        this.expenseTray.filter(function (item) {
            _this.showMembers(item);
        });
        this.calculateCurrentCost();
    };
    AddmodifyexpenseComponent.prototype.setcurrentMembersBulkCheck = function (status) {
        this.currentMember.filter(function (item) {
            item.isChecked = status;
            item.havetopay = status;
        });
        this.ischeckAll = status;
        this.calculateExpenseTopay();
    };
    AddmodifyexpenseComponent.prototype.calculateExpenseDetails = function () {
        var totalCost = 0;
        this.trip.tripExpense.filter(function (item) {
            console.log("calculateExpenseDetails", item);
            var num = item.tripDetails.expenseCost;
            totalCost = totalCost + parseFloat(num);
        });
        this.trip.totalTripExpenseCost = totalCost;
    };
    AddmodifyexpenseComponent.prototype.setUpaddInExpenseTray = function () {
        var _this = this;
        var expenseTrayData;
        this.addnewExpense.name = this.expenseData.name;
        console.log("setUpaddInExpenseTray", this.currentMember);
        this.expenseData.tripDetails.members.filter(function (item) {
            var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](_this.currentMember, function (o) { return o._id == item._id; });
            if (index > -1) {
                _this.currentMember[index].isChecked = item.isChecked;
                _this.currentMember[index].havetopay = item.havetopay;
            }
            if (item.hasalreadypaid) {
                expenseTrayData = {
                    members: [],
                    selectedmember: null,
                    selectedmemberData: null,
                    amount: 0
                };
                expenseTrayData.members = JSON.parse(JSON.stringify(_this.tripMembers));
                console.log(_this.expenseTray, "this.expenseTray", expenseTrayData);
                expenseTrayData.selectedmember = item.name;
                expenseTrayData.selectedmemberData = item;
                expenseTrayData.amount = item.paidamount;
                _this.expenseTray.push(expenseTrayData);
            }
        });
        this.expenseTray.filter(function (item) {
            _this.showMembers(item);
        });
        this.calculateCurrentCost();
        this.checkIfAllChecked();
    };
    AddmodifyexpenseComponent.prototype.checkAll = function (event) {
        console.log("checkall", event);
        this.setcurrentMembersBulkCheck(event.target.checked);
    };
    AddmodifyexpenseComponent.prototype.memberChecked = function (event, member) {
        var _this = this;
        console.log("checkall", event, member);
        member.havetopay = event.target.checked;
        setTimeout(function () {
            _this.checkIfAllChecked();
        }, 10);
    };
    AddmodifyexpenseComponent.prototype.checkIfAllChecked = function () {
        var checkMembers = this.currentMember.filter(function (item) { return item.isChecked; });
        this.ischeckAll = (checkMembers.length == this.currentMember.length);
        this.calculateExpenseTopay();
    };
    AddmodifyexpenseComponent.prototype.showExpenseDetails = function (expense) {
        console.log("showExpenseDetails", expense);
        this._common.islastPageReports.status = false;
        this._common.islastPageReports.memberId = null;
        this.router.navigate(['calculator', this.tripId, expense.expenseId]);
    };
    AddmodifyexpenseComponent.prototype.backToTrips = function () {
        this.router.navigate(['home']);
    };
    AddmodifyexpenseComponent.prototype.reportsPage = function () {
        this.router.navigate(['report', this.tripId]);
    };
    AddmodifyexpenseComponent.prototype.setNewSelectedMember = function (tray) {
        var _this = this;
        console.log("setNewSelectedMember", tray);
        var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](tray.members, function (o) {
            return o.name == tray.selectedmember;
        });
        if (index > -1) {
            tray.selectedmemberData = tray.members[index];
        }
        this.expenseTray.filter(function (item) {
            _this.showMembers(item);
        });
        this.calculateExpenseTopay();
    };
    AddmodifyexpenseComponent.prototype.calculateCurrentCost = function () {
        var cost = 0;
        this.expenseTray.filter(function (item) {
            var num = item.amount == '' ? 0 : item.amount;
            cost = cost + parseFloat(num);
        });
        console.log("calculateCurrentCost", cost);
        this.addnewExpense.tripDetails.expenseCost = cost;
        this.calculateExpenseTopay();
    };
    AddmodifyexpenseComponent.prototype.calculateExpenseTopay = function () {
        var _this = this;
        console.log("calculateExpenseTopay", this.currentMember, this.expenseTray);
        this.currentMember.filter(function (mem) {
            mem.paidamount = 0;
            mem.finalAmount = 0;
        });
        this.expenseTray.filter(function (item) {
            var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](_this.currentMember, function (o) {
                return o._id == item.selectedmemberData._id;
            });
            if (index > -1) {
                _this.currentMember[index].paidamount = item.amount;
            }
        });
        this.calculatePayable();
    };
    AddmodifyexpenseComponent.prototype.calculatePayable = function () {
        var _this = this;
        var personHavetoPay = [];
        // let personWillGetBack : any = []
        // let perPersonCost : any = 0
        if (this.currentMember.length > 0) {
            this.currentMember.filter(function (willGet) {
                if (!willGet.havetopay) {
                    console.log("willGet", willGet);
                    willGet.finalAmount = willGet.paidamount;
                }
            });
            personHavetoPay = this.currentMember.filter(function (item) { return item.havetopay; });
            console.log("Calculate_details_Called", this.currentMember, personHavetoPay);
            var total_members = personHavetoPay.length;
            this.addnewExpense.tripDetails.perPersonCost = this.addnewExpense.tripDetails.expenseCost / total_members;
            personHavetoPay.filter(function (item) {
                console.log("personHavetoPay", item);
                item.finalAmount = item.paidamount - _this.addnewExpense.tripDetails.perPersonCost;
            });
        }
    };
    AddmodifyexpenseComponent.prototype.removeInExpenseTray = function (index) {
        var _this = this;
        this.expenseTray.splice(index, 1);
        this.expenseTray.filter(function (item) {
            _this.showMembers(item);
        });
        this.calculateCurrentCost();
    };
    AddmodifyexpenseComponent.prototype.showMembers = function (tray) {
        var _this = this;
        var newMembers = [];
        console.log("showMembers", tray.members, this.expenseTray, this.tripMembers);
        var remainingMembers = [];
        remainingMembers = this.tripMembers.filter(function (item) {
            return item._id != tray.selectedmemberData._id;
        });
        console.log("remainingMembers", remainingMembers);
        var result = remainingMembers.filter(function (item) {
            var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](_this.expenseTray, function (o) {
                return item._id == o.selectedmemberData._id;
            });
            console.log("showMembers_check", item, index);
            return (index == -1);
        });
        result = result.concat(tray.selectedmemberData);
        console.log("finalResult to show", result);
        tray.members = result;
    };
    AddmodifyexpenseComponent.prototype.navigateToExpense = function () {
        this.router.navigate(['expense', this.tripId]);
    };
    AddmodifyexpenseComponent.prototype.setPageTo = function (pageName) {
        if (pageName == 'expense') {
            this.navigateToExpense();
        }
        else if (pageName == 'addExpense') {
            this.expenseTray = [];
            this.addInExpenseTray();
        }
    };
    AddmodifyexpenseComponent.prototype.addExpense = function (addExpense) {
        console.log("Add Expense Called", addExpense);
        var expense = {
            name: addExpense.name,
            tripDetails: {
                expenseCost: addExpense.tripDetails.expenseCost,
                members: [],
                perPersonCost: addExpense.perPersonCost
            },
            creatorID: this.userId
        };
        this.AddMembersList(expense);
        console.log("addExpense_final", expense);
        this.saveExpenseTripDetails(expense);
    };
    AddmodifyexpenseComponent.prototype.saveExpenseTripDetails = function (expense) {
        var _this = this;
        console.log("saveExpenseTripDetails", expense, JSON.stringify(expense));
        var data = {
            tripId: this.tripId,
            expenseId: this.expenseId,
            expenseData: expense
        };
        this._trip.addTripExpense(data).subscribe(function (res) {
            if (res.status == 1) {
                _this.navigateToExpense();
            }
        });
    };
    AddmodifyexpenseComponent.prototype.AddMembersList = function (member) {
        var _this = this;
        console.log("Add members List called", member, this.tripMembers);
        member.tripDetails.members = JSON.parse(JSON.stringify(this.currentMember));
        member.tripDetails.members.filter(function (item) {
            console.log("AddMembersList", item, _this.expenseTray);
            var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](_this.expenseTray, function (o) {
                return o.selectedmemberData._id == item._id;
            });
            if (index > -1) {
                item.hasalreadypaid = (_this.expenseTray[index].amount > 0);
                item.paidamount = _this.expenseTray[index].amount;
            }
            else {
                item.hasalreadypaid = false;
                item.paidamount = 0;
            }
        });
        // if (member.isChecked) {
        //   this.expense.tripDetails.members.splice(index, 1)
        // } else {
        //   this.expense.tripDetails.members.push(member)
        // }
        // member.isChecked = !member.isChecked
        // let index = _.findIndex(this.expense.tripDetails.members, o => {
        //   return o._id == item._id
        // });
    };
    AddmodifyexpenseComponent.prototype.deleteExpense = function (item, index) {
        this.trip.tripExpense.splice(index, 1);
        this.calculateExpenseDetails();
    };
    AddmodifyexpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmodifyexpense',
            template: __webpack_require__(/*! ./addmodifyexpense.component.html */ "./src/app/addmodifyexpense/addmodifyexpense.component.html"),
            styles: [__webpack_require__(/*! ./addmodifyexpense.component.scss */ "./src/app/addmodifyexpense/addmodifyexpense.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _tripservice_service__WEBPACK_IMPORTED_MODULE_5__["TripserviceService"]])
    ], AddmodifyexpenseComponent);
    return AddmodifyexpenseComponent;
}());



/***/ }),

/***/ "./src/app/addmodifytrip/addmodifytrip.component.html":
/*!************************************************************!*\
  !*** ./src/app/addmodifytrip/addmodifytrip.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form [formGroup]='tripDataForm'>\n    <p>Add Trip Details</p>\n\n\n\n    Trip Name :\n    <input type=\"text\" placeholder=\"Trip Name\" formControlName='tripName' />\n    <!-- <input type=\"text\" placeholder=\"Trip Name\" [(ngModel)]=\"addTrip.tripName\"> -->\n    <br>\n    <!-- expense Total Cost:\n  <input type=\"text\" placeholder=\"Expense Total Cost\" (keyup)=\"calculateDetails()\" [(ngModel)]=\"tripDetails.total_cost\"> -->\n    <br>\n    Add Members <input type=\"button\" value=\"+\">\n    <br>\n    <br>\n    Choose Trip Members:\n    <!-- <div> -->\n    <input style=\"float: right;\" [ngModelOptions]=\"{standalone: true}\" name=\"searchFriend\" type=\"text\"\n      [(ngModel)]=\"searchFriend\" placeholder=\"Search Friend\" (ngModelChange)=\"filterFriend($event)\" />\n    <!-- </div> -->\n    <hr>\n    <div formArray='memberData'>\n      <div *ngFor=\"let friend of tripMembersArray.value ;let i = index;\">\n        <div [formGroup]='tripMembersArray.controls[i]'>\n\n          {{friend.memberData.name}}\n          <span *ngIf=\"friend?.isInvolvedArray?.length > 0\" style=\"float: right;\">linked in\n            {{friend?.isInvolvedArray?.length}}\n            expense</span>\n          <input *ngIf=\"friend?.isInvolvedArray?.length < 1\" type=\"button\" style=\"float: right;\"\n            (click)=\"switchSelection(tripMembersArray.controls[i])\" [value]=\"friend.isChecked ? 'Removed': 'Add'\">\n          <br>\n          <hr>\n        </div>\n      </div>\n    </div>\n    <!-- <div *ngFor=\"let friend of friendsList ;let i = index;\">\n\n      {{friend.name}} <input type=\"button\" style=\"float: right;\" (click)=\"addSelectedMember(friend)\"\n        [value]=\"friend.isChecked ? 'Removed': 'Add'\">\n      <br>\n      <hr>\n    </div> -->\n\n\n\n\n\n\n    <p></p>\n\n    <input type=\"button\" value=\"{{ currentTripData ? 'Modify Trip' : 'Add Trip'}}\" (click)=\"saveTrip()\">\n    <input type=\"button\" value=\"cancel\" (click)=\"navigateToTrips()\">\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/addmodifytrip/addmodifytrip.component.scss":
/*!************************************************************!*\
  !*** ./src/app/addmodifytrip/addmodifytrip.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZG1vZGlmeXRyaXAvYWRkbW9kaWZ5dHJpcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/addmodifytrip/addmodifytrip.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/addmodifytrip/addmodifytrip.component.ts ***!
  \**********************************************************/
/*! exports provided: AddmodifytripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmodifytripComponent", function() { return AddmodifytripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tripservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tripservice.service */ "./src/app/tripservice.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _model_storageKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/storageKey */ "./src/app/model/storageKey.ts");








var AddmodifytripComponent = /** @class */ (function () {
    function AddmodifytripComponent(_common, router, fb, route, _trip) {
        this._common = _common;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this._trip = _trip;
        this.addTripMode = false;
        this.showCalculator = false;
        // currentPage
        // tripDetailsObj: TripMemberModel
        // friendsList: FriendsModel[]
        this.friendsList = [];
        this.tripDataForm = this.fb.group({
            tripId: [null],
            tripName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            tripMembers: this.fb.array([])
        });
        this.clearFormArray = function (formArray) {
            while (formArray.length !== 0) {
                formArray.removeAt(0);
            }
        };
    }
    AddmodifytripComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tripId = this.route.snapshot.paramMap.get('tripId');
        this._common.getLocalData(_model_storageKey__WEBPACK_IMPORTED_MODULE_7__["storeKey"].id).then(function (id) {
            _this.userId = id;
        });
        this.tripDataForm.get('tripId').setValue(tripId ? tripId : null);
        this.tripDataForm.get('tripId').updateValueAndValidity();
        if (this.tripDataForm.value.tripId)
            this.getTripDetails();
        else
            this.getFriendsList(1);
    };
    AddmodifytripComponent.prototype.getFriendsList = function (type) {
        var _this = this;
        var data = { type: type };
        this.friendsList = [];
        this.friendsListFilter = [];
        this.clearFormArray(this.tripMembersArray);
        this._trip.getFriendsList(data).subscribe(function (res) {
            _this.friendsList = res.friendsList.friendsDataInfo;
            _this.friendsListFilter = JSON.parse(JSON.stringify(_this.friendsList));
            if (_this.currentTripData) {
                _this.setupTripModifyInfo();
            }
            else {
                _this.friendsList.filter(function (item) {
                    _this.createMemberControl(false, item, []);
                });
            }
            console.log("getFriendsList", res, _this.tripMembersArray);
        });
    };
    AddmodifytripComponent.prototype.getTripDetails = function () {
        var _this = this;
        this.trips = [];
        var tripId = this.tripDataForm.value.tripId;
        this._trip.getTripDetails().subscribe(function (res) {
            console.log("getTripDetails_API", res, _this.tripDataForm);
            _this.trips = res.result;
            var index = lodash__WEBPACK_IMPORTED_MODULE_6__["findIndex"](_this.trips, function (o) {
                return o._id == tripId;
            });
            _this.currentTripData = index > -1 ? _this.trips[index] : null;
            _this.getFriendsList(1);
        });
    };
    Object.defineProperty(AddmodifytripComponent.prototype, "tripMembersArray", {
        get: function () {
            return this.tripDataForm.get('tripMembers');
        },
        enumerable: true,
        configurable: true
    });
    AddmodifytripComponent.prototype.setupTripModifyInfo = function () {
        var _this = this;
        console.log("setupTripModifyInfo", this.currentTripData);
        var data = { tripId: this.currentTripData._id };
        this.tripDataForm.get('tripName').setValue(this.currentTripData.tripName);
        this._trip.getTripMembersList(data).subscribe(function (res) {
            console.log("getTripMembersList", res);
            // this.friendsList.filter(item => {
            //   this.createMemberControl(false, item)
            // })
            var filterData = res.result.members.filter(function (item) { return item._id != _this.userId; });
            _this.friendsList = _this.friendsList.concat(filterData);
            console.log("this.friendsList", _this.friendsList);
            _this.friendsList = _this._common.removeDuplicate(_this.friendsList, '_id');
            _this.friendsList.filter(function (item) {
                var index = lodash__WEBPACK_IMPORTED_MODULE_6__["findIndex"](res.result.members, function (o) {
                    return o._id == item._id;
                });
                _this.createMemberControl((index > -1), item, _this.checkIfInvolved(item._id));
                // if (index > -1) {
                //   // this.friendsList.push(item)
                //   this.createMemberControl(false, item)
                // }
                // else {
                //   this.createMemberControl(true, item)
                // }
            });
            // this.friendsList = this.friendsList.concat(tempArray)
            _this.friendsListFilter = JSON.parse(JSON.stringify(_this.friendsList));
            // res.result.members.filter(added => {
            //   // this.addSelectedMember(added)
            // })
        });
    };
    AddmodifytripComponent.prototype.checkIfInvolved = function (memberId) {
        console.log("checkIfInvolved", memberId, this.currentTripData);
        var involvedTrips = [];
        this.currentTripData.tripExpense.filter(function (expense) {
            // expense.tripDetails.members.filter(member => {
            // })
            var index = lodash__WEBPACK_IMPORTED_MODULE_6__["findIndex"](expense.tripDetails.members, function (o) {
                return o._id == memberId && (o.havetopay && o.finalAmount.toString() != '0');
            });
            if (index > -1)
                involvedTrips.push(expense);
        });
        return involvedTrips;
    };
    AddmodifytripComponent.prototype.switchSelection = function (control) {
        console.log("switchSelection", this.tripMembersArray);
        control.get('isChecked').setValue(!control.value.isChecked);
    };
    AddmodifytripComponent.prototype.createMemberControl = function (isChecked, item, isInvolvedArray) {
        var control = this.fb.group({
            isChecked: [isChecked, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            memberData: [item, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            isInvolvedArray: [isInvolvedArray, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.tripMembersArray.push(control);
    };
    AddmodifytripComponent.prototype.navigateToTrips = function () {
        this.router.navigate(['home']);
    };
    AddmodifytripComponent.prototype.saveTrip = function () {
        var _this = this;
        var data = {
            tripId: this.tripDataForm.value.tripId,
            tripName: this.tripDataForm.value.tripName,
            totalTripExpenseCost: null,
            members: []
        };
        this.tripDataForm.value.tripMembers.filter(function (item) {
            if (item.isChecked)
                data.members.push(item.memberData._id);
        });
        console.log("this.tripDataForm", this.tripDataForm, data);
        this._trip.AddTrip(data).subscribe(function (res) {
            console.log("AddTrip", res);
            _this.navigateToTrips();
        });
    };
    AddmodifytripComponent.prototype.filterFriend = function (event) {
        console.log("filterFriend", event);
        this.friendsList = this.friendsListFilter.filter(function (item) { return (item.name).toLowerCase().includes(event.toLowerCase()); });
    };
    AddmodifytripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmodifytrip',
            template: __webpack_require__(/*! ./addmodifytrip.component.html */ "./src/app/addmodifytrip/addmodifytrip.component.html"),
            styles: [__webpack_require__(/*! ./addmodifytrip.component.scss */ "./src/app/addmodifytrip/addmodifytrip.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _tripservice_service__WEBPACK_IMPORTED_MODULE_5__["TripserviceService"]])
    ], AddmodifytripComponent);
    return AddmodifytripComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _trip_trip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip/trip.component */ "./src/app/trip/trip.component.ts");
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expenses/expenses.component */ "./src/app/expenses/expenses.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _userwisereport_userwisereport_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userwisereport/userwisereport.component */ "./src/app/userwisereport/userwisereport.component.ts");
/* harmony import */ var _friend_friend_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./friend/friend.component */ "./src/app/friend/friend.component.ts");
/* harmony import */ var _auth_loginmodule_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/loginmodule/login.component */ "./src/app/auth/loginmodule/login.component.ts");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _addmodifyexpense_addmodifyexpense_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addmodifyexpense/addmodifyexpense.component */ "./src/app/addmodifyexpense/addmodifyexpense.component.ts");
/* harmony import */ var _addmodifytrip_addmodifytrip_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addmodifytrip/addmodifytrip.component */ "./src/app/addmodifytrip/addmodifytrip.component.ts");













var routes = [
    {
        path: '',
        component: _theme_theme_component__WEBPACK_IMPORTED_MODULE_10__["ThemeComponent"],
        children: [
            {
                path: 'home',
                component: _trip_trip_component__WEBPACK_IMPORTED_MODULE_4__["TripComponent"]
            },
            {
                path: 'expense/:tripId',
                component: _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_5__["ExpensesComponent"]
            },
            {
                path: 'report/:tripId',
                component: _report_report_component__WEBPACK_IMPORTED_MODULE_6__["ReportComponent"]
            },
            {
                path: 'calculator/:tripId/:expenseId',
                component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponent"]
            },
            {
                path: 'addmodifyexpense/:tripId',
                component: _addmodifyexpense_addmodifyexpense_component__WEBPACK_IMPORTED_MODULE_11__["AddmodifyexpenseComponent"]
            },
            {
                path: 'addmodifytrip',
                component: _addmodifytrip_addmodifytrip_component__WEBPACK_IMPORTED_MODULE_12__["AddmodifytripComponent"]
            },
            {
                path: 'addmodifytrip/:tripId',
                component: _addmodifytrip_addmodifytrip_component__WEBPACK_IMPORTED_MODULE_12__["AddmodifytripComponent"]
            },
            {
                path: 'addmodifyexpense/:tripId/:expenseId',
                component: _addmodifyexpense_addmodifyexpense_component__WEBPACK_IMPORTED_MODULE_11__["AddmodifyexpenseComponent"]
            },
            {
                path: 'userwise/:tripId/:memberId',
                component: _userwisereport_userwisereport_component__WEBPACK_IMPORTED_MODULE_7__["UserwisereportComponent"]
            },
            {
                path: 'friends',
                component: _friend_friend_component__WEBPACK_IMPORTED_MODULE_8__["FriendComponent"]
            },
        ]
    },
    {
        path: 'login',
        component: _auth_loginmodule_login_component__WEBPACK_IMPORTED_MODULE_9__["loginComponent"],
    },
    {
        path: "",
        redirectTo: 'login',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n\n<!-- <app-theme></app-theme> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(
    // private _common: CommonService,
    authService) {
        this.authService = authService;
        this.title = 'tripExpense';
        this.authService.checkAuthorization();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var _trip_trip_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trip/trip.component */ "./src/app/trip/trip.component.ts");
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./expenses/expenses.component */ "./src/app/expenses/expenses.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _userwisereport_userwisereport_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userwisereport/userwisereport.component */ "./src/app/userwisereport/userwisereport.component.ts");
/* harmony import */ var _friend_friend_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./friend/friend.component */ "./src/app/friend/friend.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _addmodifyexpense_addmodifyexpense_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./addmodifyexpense/addmodifyexpense.component */ "./src/app/addmodifyexpense/addmodifyexpense.component.ts");
/* harmony import */ var _addmodifytrip_addmodifytrip_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./addmodifytrip/addmodifytrip.component */ "./src/app/addmodifytrip/addmodifytrip.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");






// import { ToastrModule } from 'ngx-toastr';

















// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__["CalculatorComponent"],
                _trip_trip_component__WEBPACK_IMPORTED_MODULE_10__["TripComponent"],
                _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_11__["ExpensesComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_12__["ReportComponent"],
                _userwisereport_userwisereport_component__WEBPACK_IMPORTED_MODULE_13__["UserwisereportComponent"],
                _friend_friend_component__WEBPACK_IMPORTED_MODULE_14__["FriendComponent"],
                _theme_theme_component__WEBPACK_IMPORTED_MODULE_17__["ThemeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                _addmodifyexpense_addmodifyexpense_component__WEBPACK_IMPORTED_MODULE_19__["AddmodifyexpenseComponent"],
                _addmodifytrip_addmodifytrip_component__WEBPACK_IMPORTED_MODULE_20__["AddmodifytripComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot({
                    // positionClass : 'top-full-width'
                    positionClass: 'toast-bottom-right',
                }) // ToastrModule added
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"], multi: true },
                _common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: './' }
                // { provide: LocationStrategy, useClass: HashLocationStrategy }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService, _common) {
        this.authService = authService;
        this._common = _common;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        console.log("Token Return", this._common.getToken());
        if (req.url.indexOf("/api/userDetails/") == -1) {
            var authToken = this._common.getToken();
            var authRequest = req.clone({
                headers: req.headers.set("token", authToken)
            });
            return next.handle(authRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (evt) {
                if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    if (evt.body && evt.body.status == 1)
                        console.log("Success_MSG_HTTP");
                    // this.toasterService.success(evt.body.success.message, evt.body.success.title, { positionClass: 'toast-bottom-center' });
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                    try {
                        console.log("Failed_MSG_HTTP", err);
                        if (err.status == 401 || err.status == 0) {
                            _this._common.setLoading(false);
                            _this.authService.logout();
                        }
                        // this.toasterService.error(err.error.message, err.error.title, { positionClass: 'toast-bottom-center' });
                    }
                    catch (e) {
                        console.log("Failed_MSG_HTTP_catch", e);
                        // this.toasterService.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
                    }
                    //log error 
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
            }));
        }
        else {
            var authRequest = req.clone();
            return next.handle(authRequest);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _loginmodule_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginmodule/login.component */ "./src/app/auth/loginmodule/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth/auth.guard.ts");






// import { SignupComponent } from "./signup/signup.component";
// import { AngularMaterialModule } from "../angular-material.module";
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _loginmodule_login_component__WEBPACK_IMPORTED_MODULE_4__["loginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // AngularMaterialModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_apiLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/apiLinks */ "./src/app/model/apiLinks.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _model_storageKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/storageKey */ "./src/app/model/storageKey.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




// import { ToastrService } from 'ngx-toastr';




var AuthService = /** @class */ (function () {
    function AuthService(http, router, _common) {
        this.http = http;
        this.router = router;
        this._common = _common;
        this.isAuthenticated = false;
        // private authStatusListener = new Subject<boolean>();
        // private domainHost: string = "http://localhost:3000"
        this.domainHost = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiBaseUrl;
        this.ApiConstants = _model_apiLinks__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"];
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.getUserType = function () {
        return this.UserType;
    };
    // getAuthStatusListener() {
    //   // return this.authStatusListener.asObservable();
    //   return null
    // }
    // createUser(email: string, password: string) {
    //   const authData: AuthData = { email: email, password: password };
    //   this.http
    //     .post("http://localhost:3000/api/user/signup", authData)
    //     .subscribe(() => {
    //       this.router.navigate(["/"]);
    //     }, error => {
    //       this.authStatusListener.next(false);
    //     });
    // }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        console.log("login");
        var authData = { email: email, password: password };
        this.http.post("http://localhost:3000/api/user/login", authData)
            .subscribe(function (response) {
            console.log("response of login", response);
            var token = response.token;
            _this.UserType = response.userType;
            _this.token = token;
            if (token) {
                var expiresInDuration = response.expiresIn;
                _this.setAuthTimer(expiresInDuration);
                _this.isAuthenticated = true;
                _this.userId = response.userId;
                // this.authStatusListener.next(true);
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                _this.saveAuthData(token, expirationDate, _this.userId);
                // this.toastr.success("Login Successfully");
                setTimeout(function () {
                    if (_this.UserType == "admin")
                        _this.router.navigate(["/admin"]);
                    else if (_this.UserType == "user" || _this.UserType == undefined)
                        _this.router.navigate(["/home"]);
                }, 3000);
            }
        }, function (error) {
            // this.authStatusListener.next(false);
            // this.toastr.error("Something went wrong please contact Admin!");
        });
    };
    AuthService.prototype.checkAuthorization = function () {
        var _this = this;
        this._common.getLocalData(_model_storageKey__WEBPACK_IMPORTED_MODULE_6__["storeKey"].token).then(function (token) {
            if (!token) {
                // this.router.navigate(["/login"]);
                _this.logout();
            }
            else {
                _this.router.navigate(["/home"]);
            }
        });
    };
    AuthService.prototype.autoAuthUser = function () {
        debugger;
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            // this.UserType = authInformation.UserType
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            // this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        // this.authStatusListener.next(false);
        this.userId = null;
        clearTimeout(this.tokenTimer);
        // this.clearAuthData();
        localStorage.clear();
        this.router.navigate(["/login"]);
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log("Setting timer: " + duration);
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthService.prototype.saveAuthData = function (token, expirationDate, userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem("userId", userId);
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("userId");
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var expirationDate = localStorage.getItem("expiration");
        var userId = localStorage.getItem("userId");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
        };
    };
    // ------------------------------------------------------------------
    AuthService.prototype.registerUser = function (registerData) {
        return this.http.post(this.domainHost + this.ApiConstants.user.signup, registerData);
    };
    AuthService.prototype.loginUser = function (loginData) {
        return this.http.post(this.domainHost + this.ApiConstants.user.login, loginData);
    };
    AuthService.prototype.validateUserName = function (data) {
        return this.http.post(this.domainHost + this.ApiConstants.user.checkUserName, data);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/loginmodule/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/loginmodule/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>hello you are in login module</h1> -->\r\n<div>\r\n    <h1>Trip Expense Manager</h1>\r\n\r\n    <div class=\"Login\" *ngIf=\"signInMode =='login'\">\r\n        <div class=\"loading\" *ngIf=\"setLoading\"></div>\r\n        <p class=\"login-box-msg\" *ngIf=\"userLoginType =='EXIST'\">Please Sign in to start your session</p>\r\n        <p class=\"login-box-msg\" *ngIf=\"userLoginType =='NEWACC'\">Congratulations!! Account Successfully\r\n            Created<br>Please\r\n            Sign in to start your session</p>\r\n        <form autocomplete=\"off\" [formGroup]=\"loginForm\">\r\n            <div class=\"row\">\r\n                <input type=\"text\" placeholder=\"Username\" name=\"userName\" formControlName=\"userName\">\r\n            </div>\r\n            <div class=\"row\">\r\n                <input type=\"password\" placeholder=\"Password\" name=\"password\" formControlName=\"password\">\r\n            </div>\r\n            <div class=\"row\">\r\n                <button [disabled]=\"loginForm.invalid\" type=\"submit\" class=\"btn btn-primary btn-block btn-flat\"\r\n                    (click)=\"loginBtn()\">Sign In</button>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"userLoginType !='NEWACC'\">\r\n                <br>\r\n                <a (click)=\"signInMode ='register'\">New User? Create your Account Here</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"Register\" *ngIf=\"signInMode =='register'\">\r\n        <div class=\"loading\" *ngIf=\"setLoading\"></div>\r\n        <p class=\"login-box-msg\">Create New Account</p>\r\n        <form autocomplete=\"off\" [formGroup]=\"registrationForm\">\r\n            <div class=\"row\">\r\n                <!-- <fa-icon [icon]=\"'faCoffee'\"></fa-icon> -->\r\n                <!-- <span class=\"icon-class\">\r\n                <i class=\"fab fa-adn\"></i>\r\n            </span>\r\n            <span>\r\n            </span> -->\r\n                <input type=\"text\"\r\n                    [ngClass]=\"{ 'error_field' : registrationForm?.controls?.name?.touched && registrationForm?.controls?.name?.invalid}\"\r\n                    formControlName=\"name\" placeholder=\"Name\">\r\n                <span\r\n                    *ngIf=\"registrationForm?.controls?.name?.touched && registrationForm?.controls?.name?.hasError('required')\"\r\n                    class=\"red_color\">field is\r\n                    Required</span>\r\n            </div>\r\n            <div class=\"row\">\r\n                <input type=\"text\"\r\n                    [ngClass]=\"{ 'error_field' : registrationForm?.controls?.userName?.touched && registrationForm?.controls?.userName?.invalid}\"\r\n                    formControlName=\"userName\" placeholder=\"Username\" (keyup)=\"validateUserName()\">\r\n                <span\r\n                    *ngIf=\"registrationForm?.controls?.userName?.touched && registrationForm?.controls?.userName?.hasError('required') && registrationForm?.controls?.userName?.hasError('hasWhiteSpace')\"\r\n                    class=\"red_color\">field is\r\n                    Required</span>\r\n                <span\r\n                    *ngIf=\"!registrationForm?.controls?.userName?.hasError('required') && !registrationForm?.controls?.userName?.hasError('hasWhiteSpace')\">\r\n                    <span *ngIf=\"isUsername.checking\">Checking...</span>\r\n                    <span *ngIf=\"!registrationForm?.controls?.userName?.hasError('inValidUser') && !isUsername.checking\"\r\n                        class=\"green_color\">UserName\r\n                        {{registrationForm.value.userName}} is Valid</span>\r\n                    <span *ngIf=\"registrationForm?.controls?.userName?.hasError('inValidUser') && !isUsername.checking\"\r\n                        class=\"red_color\">UserName\r\n                        {{registrationForm.value.userName}} Already\r\n                        Taken</span>\r\n                </span>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <input type=\"password\"\r\n                    [ngClass]=\"{ 'error_field' : registrationForm?.controls?.password?.touched && registrationForm?.controls?.password?.invalid}\"\r\n                    formControlName=\"password\" placeholder=\"Password\">\r\n                <span\r\n                    *ngIf=\"registrationForm?.controls?.password?.touched && registrationForm?.controls?.password?.hasError('required')\"\r\n                    class=\"red_color\">field is\r\n                    Required</span>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <input type=\"password\"\r\n                    [ngClass]=\"{ 'error_field' : registrationForm?.controls?.repassword?.touched && registrationForm?.controls?.repassword?.invalid}\"\r\n                    formControlName=\"repassword\" placeholder=\"Re-Enter Password\">\r\n                <span\r\n                    *ngIf=\"registrationForm?.controls?.repassword?.touched && registrationForm?.controls?.repassword?.hasError('required')\"\r\n                    class=\"red_color\">field is\r\n                    Required</span>\r\n                <span\r\n                    *ngIf=\"(registrationForm?.controls?.repassword?.touched || registrationForm?.controls?.password?.touched) && registrationForm?.controls?.repassword?.hasError('matchError')\"\r\n                    class=\"red_color\"> Password do\r\n                    not Match</span>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <input type=\"tel\"\r\n                    [ngClass]=\"{ 'error_field' : registrationForm?.controls?.mobile?.touched && registrationForm?.controls?.mobile?.invalid}\"\r\n                    formControlName=\"mobile\" placeholder=\"Mobile Number\">\r\n                <span\r\n                    *ngIf=\"registrationForm?.controls?.mobile?.touched && registrationForm?.controls?.mobile?.hasError('required')\"\r\n                    class=\"red_color\">field is\r\n                    Required</span>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\"\r\n                    (click)=\"registerBtn()\">Register</button>\r\n            </div>\r\n            <div class=\"row\">\r\n                <br>\r\n                <a (click)=\"signInMode ='login'\">Already Have An Account? Login Here!</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n\r\n</div>\r\n<div class=\"hold-transition login-page\" *ngIf=\"false\">\r\n\r\n    <div class=\"login-box\">\r\n        <div class=\"login-logo\">\r\n            <a href=\"../../index2.html\"><b>Admin</b>LTE</a>\r\n        </div>\r\n        <!-- /.login-logo -->\r\n        <div class=\"card\">\r\n            <div class=\"card-body login-card-body\">\r\n                <p class=\"login-box-msg\">Sign in to start your session</p>\r\n\r\n                <form action=\"../../index3.html\" method=\"post\">\r\n                    <div class=\"input-group mb-3\">\r\n                        <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n                        <div class=\"input-group-append\">\r\n                            <div class=\"input-group-text\">\r\n                                <span class=\"fas fa-envelope\"></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"input-group mb-3\">\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                        <div class=\"input-group-append\">\r\n                            <div class=\"input-group-text\">\r\n                                <span class=\"fas fa-lock\"></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-8\">\r\n                            <div class=\"icheck-primary\">\r\n                                <input type=\"checkbox\" id=\"remember\">\r\n                                <label for=\"remember\">\r\n                                    Remember Me\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.col -->\r\n                        <div class=\"col-4\">\r\n                            <button type=\"submit\" class=\"btn btn-primary btn-block\">Sign In</button>\r\n                        </div>\r\n                        <!-- /.col -->\r\n                    </div>\r\n                </form>\r\n\r\n                <div class=\"social-auth-links text-center mb-3\">\r\n                    <p>- OR -</p>\r\n                    <a href=\"#\" class=\"btn btn-block btn-primary\">\r\n                        <i class=\"fab fa-facebook mr-2\"></i> Sign in using Facebook\r\n                    </a>\r\n                    <a href=\"#\" class=\"btn btn-block btn-danger\">\r\n                        <i class=\"fab fa-google-plus mr-2\"></i> Sign in using Google+\r\n                    </a>\r\n                </div>\r\n                <!-- /.social-auth-links -->\r\n\r\n                <p class=\"mb-1\">\r\n                    <a href=\"forgot-password.html\">I forgot my password</a>\r\n                </p>\r\n                <p class=\"mb-0\">\r\n                    <a href=\"register.html\" class=\"text-center\">Register a new membership</a>\r\n                </p>\r\n            </div>\r\n            <!-- /.login-card-body -->\r\n        </div>\r\n    </div>\r\n    <!-- /.login-box -->\r\n</div>"

/***/ }),

/***/ "./src/app/auth/loginmodule/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/loginmodule/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n/* position */\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%; }\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%; }\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n.toast-top-left {\n  top: 12px;\n  left: 12px; }\n.toast-top-right {\n  top: 12px;\n  right: 12px; }\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px; }\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px; }\n/* toast styles */\n.toast-title {\n  font-weight: bold; }\n.toast-message {\n  word-wrap: break-word; }\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF; }\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none; }\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */ }\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4; }\n/*Additional properties for button version\r\n   iOS requires the button element instead of an anchor tag.\r\n   If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0; }\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999; }\n.toast-container * {\n  box-sizing: border-box; }\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF; }\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer; }\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\"); }\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\"); }\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\"); }\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\"); }\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto; }\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto; }\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto; }\n.toast-success {\n  background-color: #51A351; }\n.toast-error {\n  background-color: #BD362F; }\n.toast-info {\n  background-color: #2F96B4; }\n.toast-warning {\n  background-color: #F89406; }\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4; }\n/* Responsive Design */\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em; }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em; } }\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em; }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em; } }\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em; } }\n.Login input, .Register input {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: center;\n  border: gray 1px solid; }\n.icon-class {\n  padding: 10px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbm1vZHVsZS9FOlxcUHJvamVjdCBmaWxlc1xcdHJpcEV4cGVuc2Uvc3JjXFxhcHBcXGF1dGhcXGxvZ2lubW9kdWxlXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbm1vZHVsZS9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrSkFBQTtBQUVBLGFBQUE7QUFDQTtFQUNJLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQyxFQUFBO0FBRWxDO0VBQ0UsTUFBTTtFQUNOLFFBQVE7RUFDUixXQUFXLEVBQUE7QUFFYjtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVyxFQUFBO0FBRWI7RUFDRSxNQUFNO0VBQ04sUUFBUTtFQUNSLFdBQVcsRUFBQTtBQUViO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXLEVBQUE7QUFFYjtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7QUFFWjtFQUNFLFNBQVM7RUFDVCxXQUFXLEVBQUE7QUFFYjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFFZDtFQUNFLFlBQVk7RUFDWixVQUFVLEVBQUE7QUFHWixpQkFBQTtBQUNBO0VBQ0UsaUJBQWlCLEVBQUE7QUFFbkI7RUFDRSxxQkFBcUIsRUFBQTtBQUV2Qjs7RUFFRSxjQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7QUFFdkI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGtCQUFBLEVBQW1CO0FBRXJCOztFQUVFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVksRUFBQTtBQUVkOzsyRENBeUQ7QURHekQ7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixTQUFTLEVBQUE7QUFFWDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZUFBZSxFQUFBO0FBRWpCO0VBQ0Usc0JBQXNCLEVBQUE7QUFFeEI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixlQUFlLEVBQUE7QUFFakIsaUhBQUE7QUFDQTtFQUNFLHFsQkFBcWxCLEVBQUE7QUFFdmxCLGtIQUFBO0FBQ0E7RUFDRSw2akJBQTZqQixFQUFBO0FBRS9qQiwyR0FBQTtBQUNBO0VBQ0Usd2RBQXdkLEVBQUE7QUFFMWQsMEhBQUE7QUFDQTtFQUNFLHNvQkFBc29CLEVBQUE7QUFFeG9COztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7QUFFcEI7O0VBRUUsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQUVwQjtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0IsRUFBQTtBQUV0QjtFQUNFLHlCQUF5QixFQUFBO0FBRTNCO0VBQ0UseUJBQXlCLEVBQUE7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTtBQUUzQjtFQUNFLHlCQUF5QixFQUFBO0FBRTNCO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7QUFFZCxzQkFBQTtBQUNBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsV0FBVyxFQUFBO0VBRWI7SUFDRSxhQUFhO0lBQ2IsV0FBVyxFQUFBLEVBQ1o7QUFFSDtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVcsRUFBQTtFQUViO0lBQ0UsYUFBYTtJQUNiLFdBQVcsRUFBQSxFQUNaO0FBRUg7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixXQUFXLEVBQUEsRUFDWjtBQUdIO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2lubW9kdWxlL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYmFzZWQgb24gYW5ndWxhci10b2FzdHIgY3NzIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3hhbmR4c3MvYW5ndWxhci10b2FzdHIvYmxvYi9jYjUwOGZlNjgwMWQ2YjI4OGQzYWZjNTI1YmI0MGZlZTFiMTAxNjUwL2Rpc3QvYW5ndWxhci10b2FzdHIuY3NzICovXHJcblxyXG4vKiBwb3NpdGlvbiAqL1xyXG4udG9hc3QtY2VudGVyLWNlbnRlciB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICAudG9hc3QtdG9wLWNlbnRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudG9hc3QtYm90dG9tLWNlbnRlciB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudG9hc3QtdG9wLWZ1bGwtd2lkdGgge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50b2FzdC10b3AtbGVmdCB7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gIH1cclxuICAudG9hc3QtdG9wLXJpZ2h0IHtcclxuICAgIHRvcDogMTJweDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gIH1cclxuICAudG9hc3QtYm90dG9tLXJpZ2h0IHtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG4gIH1cclxuICAudG9hc3QtYm90dG9tLWxlZnQge1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLyogdG9hc3Qgc3R5bGVzICovXHJcbiAgLnRvYXN0LXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAudG9hc3QtbWVzc2FnZSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIC50b2FzdC1tZXNzYWdlIGEsXHJcbiAgLnRvYXN0LW1lc3NhZ2UgbGFiZWwge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC50b2FzdC1tZXNzYWdlIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNDQ0NDQ0M7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC50b2FzdC1jbG9zZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IC0wLjNlbTtcclxuICAgIHRvcDogLTAuM2VtO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmZmZmY7XHJcbiAgICAvKiBvcGFjaXR5OiAwLjg7ICovXHJcbiAgfVxyXG4gIC50b2FzdC1jbG9zZS1idXR0b246aG92ZXIsXHJcbiAgLnRvYXN0LWNsb3NlLWJ1dHRvbjpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcbiAgLypBZGRpdGlvbmFsIHByb3BlcnRpZXMgZm9yIGJ1dHRvbiB2ZXJzaW9uXHJcbiAgIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxyXG4gICBJZiB5b3Ugd2FudCB0aGUgYW5jaG9yIHZlcnNpb24sIGl0IHJlcXVpcmVzIGBocmVmPVwiI1wiYC4qL1xyXG4gIGJ1dHRvbi50b2FzdC1jbG9zZS1idXR0b24ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICAudG9hc3QtY29udGFpbmVyIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gIH1cclxuICAudG9hc3QtY29udGFpbmVyICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAwIDAgNnB4O1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1cHggY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMnB4ICM5OTk5OTk7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0cjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTJweCAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvaW5mby1jaXJjbGUuc3ZnICovXHJcbiAgLnRvYXN0LWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgfVxyXG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL3RpbWVzLWNpcmNsZS5zdmcgKi9cclxuICAudG9hc3QtZXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMTIxLjYgMzEzLjFjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMzOCAzNzcuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDI1NiAzMTJsLTY1LjEgNjUuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDEzNC40IDMzOGMtNC43LTQuNy00LjctMTIuMyAwLTE3bDY1LjYtNjUtNjUuNi02NS4xYy00LjctNC43LTQuNy0xMi4zIDAtMTdsMzkuNi0zOS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGw2NSA2NS43IDY1LjEtNjUuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsMzkuNiAzOS42YzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMTIgMjU2bDY1LjYgNjUuMXonLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgfVxyXG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2NoZWNrLnN2ZyAqL1xyXG4gIC50b2FzdC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICB9XHJcbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvZXhjbGFtYXRpb24tdHJpYW5nbGUuc3ZnICovXHJcbiAgLnRvYXN0LXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMicgd2lkdGg9JzU3NicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIH1cclxuICAudG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1jZW50ZXIgLm5neC10b2FzdHIsXHJcbiAgLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tY2VudGVyIC5uZ3gtdG9hc3RyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAudG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyLFxyXG4gIC50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGggLm5neC10b2FzdHIge1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAubmd4LXRvYXN0ciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzAzO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgfVxyXG4gIC50b2FzdC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MUEzNTE7XHJcbiAgfVxyXG4gIC50b2FzdC1lcnJvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQzNjJGO1xyXG4gIH1cclxuICAudG9hc3QtaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY5NkI0O1xyXG4gIH1cclxuICAudG9hc3Qtd2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5NDA2O1xyXG4gIH1cclxuICAudG9hc3QtcHJvZ3Jlc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcbiAgLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAyNDBweCkge1xyXG4gICAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xyXG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xyXG4gICAgICB3aWR0aDogMTFlbTtcclxuICAgIH1cclxuICAgIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgIHJpZ2h0OiAtMC4yZW07XHJcbiAgICAgIHRvcDogLTAuMmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAyNDFweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XHJcbiAgICAgIHdpZHRoOiAxOGVtO1xyXG4gICAgfVxyXG4gICAgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY2xvc2UtYnV0dG9uIHtcclxuICAgICAgcmlnaHQ6IC0wLjJlbTtcclxuICAgICAgdG9wOiAtMC4yZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcclxuICAgICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcclxuICAgICAgd2lkdGg6IDI1ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuTG9naW4gaW5wdXQsIC5SZWdpc3RlciBpbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBncmF5IDFweCBzb2xpZDtcclxuICB9XHJcblxyXG4gIC5pY29uLWNsYXNze1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9IiwiLyogYmFzZWQgb24gYW5ndWxhci10b2FzdHIgY3NzIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3hhbmR4c3MvYW5ndWxhci10b2FzdHIvYmxvYi9jYjUwOGZlNjgwMWQ2YjI4OGQzYWZjNTI1YmI0MGZlZTFiMTAxNjUwL2Rpc3QvYW5ndWxhci10b2FzdHIuY3NzICovXG4vKiBwb3NpdGlvbiAqL1xuLnRvYXN0LWNlbnRlci1jZW50ZXIge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxuXG4udG9hc3QtdG9wLWNlbnRlciB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi50b2FzdC1ib3R0b20tY2VudGVyIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnRvYXN0LXRvcC1mdWxsLXdpZHRoIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnRvYXN0LXRvcC1sZWZ0IHtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAxMnB4OyB9XG5cbi50b2FzdC10b3AtcmlnaHQge1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4OyB9XG5cbi50b2FzdC1ib3R0b20tcmlnaHQge1xuICByaWdodDogMTJweDtcbiAgYm90dG9tOiAxMnB4OyB9XG5cbi50b2FzdC1ib3R0b20tbGVmdCB7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogMTJweDsgfVxuXG4vKiB0b2FzdCBzdHlsZXMgKi9cbi50b2FzdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi50b2FzdC1tZXNzYWdlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XG5cbi50b2FzdC1tZXNzYWdlIGEsXG4udG9hc3QtbWVzc2FnZSBsYWJlbCB7XG4gIGNvbG9yOiAjRkZGRkZGOyB9XG5cbi50b2FzdC1tZXNzYWdlIGE6aG92ZXIge1xuICBjb2xvcjogI0NDQ0NDQztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAtMC4zZW07XG4gIHRvcDogLTAuM2VtO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xuICAvKiBvcGFjaXR5OiAwLjg7ICovIH1cblxuLnRvYXN0LWNsb3NlLWJ1dHRvbjpob3Zlcixcbi50b2FzdC1jbG9zZS1idXR0b246Zm9jdXMge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNDsgfVxuXG4vKkFkZGl0aW9uYWwgcHJvcGVydGllcyBmb3IgYnV0dG9uIHZlcnNpb25cclxuICAgaU9TIHJlcXVpcmVzIHRoZSBidXR0b24gZWxlbWVudCBpbnN0ZWFkIG9mIGFuIGFuY2hvciB0YWcuXHJcbiAgIElmIHlvdSB3YW50IHRoZSBhbmNob3IgdmVyc2lvbiwgaXQgcmVxdWlyZXMgYGhyZWY9XCIjXCJgLiovXG5idXR0b24udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwOyB9XG5cbi50b2FzdC1jb250YWluZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5OTk7IH1cblxuLnRvYXN0LWNvbnRhaW5lciAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4udG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgMCA2cHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNXB4IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTJweCAjOTk5OTk5O1xuICBjb2xvcjogI0ZGRkZGRjsgfVxuXG4udG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDEycHggIzAwMDAwMDtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2luZm8tY2lyY2xlLnN2ZyAqL1xuLnRvYXN0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00yNTYgOEMxMTkuMDQzIDggOCAxMTkuMDgzIDggMjU2YzAgMTM2Ljk5NyAxMTEuMDQzIDI0OCAyNDggMjQ4czI0OC0xMTEuMDAzIDI0OC0yNDhDNTA0IDExOS4wODMgMzkyLjk1NyA4IDI1NiA4em0wIDExMGMyMy4xOTYgMCA0MiAxOC44MDQgNDIgNDJzLTE4LjgwNCA0Mi00MiA0Mi00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyem01NiAyNTRjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtODhjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoMTJ2LTY0aC0xMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg2NGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjEwMGgxMmM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjI0eicvJTNFJTNDL3N2ZyUzRVwiKTsgfVxuXG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci90aW1lcy1jaXJjbGUuc3ZnICovXG4udG9hc3QtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4em0xMjEuNiAzMTMuMWM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzM4IDM3Ny42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMjU2IDMxMmwtNjUuMSA2NS42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMTM0LjQgMzM4Yy00LjctNC43LTQuNy0xMi4zIDAtMTdsNjUuNi02NS02NS42LTY1LjFjLTQuNy00LjctNC43LTEyLjMgMC0xN2wzOS42LTM5LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDY1IDY1LjcgNjUuMS02NS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGwzOS42IDM5LjZjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMxMiAyNTZsNjUuNiA2NS4xeicvJTNFJTNDL3N2ZyUzRVwiKTsgfVxuXG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9jaGVjay5zdmcgKi9cbi50b2FzdC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Jy8lM0UlM0Mvc3ZnJTNFXCIpOyB9XG5cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2V4Y2xhbWF0aW9uLXRyaWFuZ2xlLnN2ZyAqL1xuLnRvYXN0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHonLyUzRSUzQy9zdmclM0VcIik7IH1cblxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC10b3AtY2VudGVyIC5uZ3gtdG9hc3RyLFxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tY2VudGVyIC5uZ3gtdG9hc3RyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG5cbi50b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWZ1bGwtd2lkdGggLm5neC10b2FzdHIsXG4udG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyIHtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bzsgfVxuXG4ubmd4LXRvYXN0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzAzMDM7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvOyB9XG5cbi50b2FzdC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxQTM1MTsgfVxuXG4udG9hc3QtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQzNjJGOyB9XG5cbi50b2FzdC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGOTZCNDsgfVxuXG4udG9hc3Qtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGODk0MDY7IH1cblxuLnRvYXN0LXByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjQ7IH1cblxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgIHdpZHRoOiAxMWVtOyB9XG4gIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcmlnaHQ6IC0wLjJlbTtcbiAgICB0b3A6IC0wLjJlbTsgfSB9XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDI0MXB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XG4gICAgd2lkdGg6IDE4ZW07IH1cbiAgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICByaWdodDogLTAuMmVtO1xuICAgIHRvcDogLTAuMmVtOyB9IH1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgICB3aWR0aDogMjVlbTsgfSB9XG5cbi5Mb2dpbiBpbnB1dCwgLlJlZ2lzdGVyIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IGdyYXkgMXB4IHNvbGlkOyB9XG5cbi5pY29uLWNsYXNzIHtcbiAgcGFkZGluZzogMTBweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/loginmodule/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/loginmodule/login.component.ts ***!
  \*****************************************************/
/*! exports provided: loginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginComponent", function() { return loginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common.service */ "./src/app/common.service.ts");
/* harmony import */ var src_app_model_storageKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/storageKey */ "./src/app/model/storageKey.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



// import { Subscription } from "rxjs";





var loginComponent = /** @class */ (function () {
    function loginComponent(authService, fb, _common, router, toastr) {
        this.authService = authService;
        this.fb = fb;
        this._common = _common;
        this.router = router;
        this.toastr = toastr;
        this.submited = false;
        this.setLoading = false;
        this.signInMode = "login";
        this.userLoginType = "EXIST";
        this.isUsername = {
            checking: false,
            timer: null
        };
        // private authStatusSub: Subscription;
        this.loginForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]]
        });
        // loginForm = this.fb.group({
        //   userName: ['abc@gmail.com', [Validators.required]],
        //   password: ['123', [Validators.required, Validators.minLength(3)]]
        // })
        this.registrationForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            repassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.matchPassword()]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]]
        });
    }
    loginComponent.prototype.ngOnInit = function () {
        document.body.classList.add("login-page", "hold-transition");
        // this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
        //   authStatus => {
        //     this.isLoading = false;
        //   }
        // );
    };
    loginComponent.prototype.loginBtn = function () {
        var _this = this;
        console.log("loginBtn", this.loginForm);
        if (this.loginForm.valid) {
            this.setLoading = true;
            var loginData = {
                userName: this.loginForm.value.userName,
                password: this.loginForm.value.password
            };
            this.authService.loginUser(loginData).subscribe(function (res) {
                _this.setLoading = false;
                console.log("loginBtn_API", res);
                if (res.status == 1) {
                    _this.storeSessionData(res);
                }
                _this.toastr[res.status == 1 ? 'success' : 'error'](res.message);
            });
        }
    };
    loginComponent.prototype.storeSessionData = function (res) {
        console.log("storeSessionData", res);
        this._common.setLocalData(src_app_model_storageKey__WEBPACK_IMPORTED_MODULE_5__["storeKey"].id, res.data._id);
        this._common.setLocalData(src_app_model_storageKey__WEBPACK_IMPORTED_MODULE_5__["storeKey"].userName, res.data.userName);
        this._common.setLocalData(src_app_model_storageKey__WEBPACK_IMPORTED_MODULE_5__["storeKey"].name, res.data.name);
        this._common.setLocalData(src_app_model_storageKey__WEBPACK_IMPORTED_MODULE_5__["storeKey"].mobileNumber, res.data.mobile);
        this._common.setLocalData(src_app_model_storageKey__WEBPACK_IMPORTED_MODULE_5__["storeKey"].token, res.token);
        this.navigateToHome();
    };
    loginComponent.prototype.navigateToHome = function () {
        this.router.navigate(['home']);
    };
    loginComponent.prototype.registerBtn = function () {
        var _this = this;
        console.log("registerBtn", this.registrationForm);
        if (this.registrationForm.valid) {
            this.setLoading = true;
            var registerData = {
                name: this.registrationForm.value.name,
                userName: this.registrationForm.value.userName,
                password: this.registrationForm.value.password,
                mobile: this.registrationForm.value.mobile
            };
            this.authService.registerUser(registerData).subscribe(function (res) {
                console.log("registerBtn_API", res);
                _this.setLoading = false;
                if (res.status == 1) {
                    _this.userLoginType = 'NEWACC';
                    _this.signInMode = 'login';
                }
            });
        }
    };
    loginComponent.prototype.matchPassword = function () {
        return function (control) {
            console.log("matchPassword", control);
            if (control.parent) {
                var password = control.parent.controls['password'];
                return (control.value == password.value) ? null : { 'matchError': true };
            }
            else {
                return null;
            }
        };
    };
    // function emailDomain(domainName: string) {
    //   return (control: AbstractControl): { [key: string]: any } | null => {
    //     const email: string = control.value;
    //     const domain = email.substring(email.lastIndexOf('@') + 1);
    //     if (email === '' || domain.toLowerCase() === domainName.toLowerCase()) {
    //       return null;
    //     } else {
    //       return { 'emailDomain': true };
    //     }
    //   };
    // }
    loginComponent.prototype.validateUserName = function () {
        var _this = this;
        this.isUsername.checking = true;
        if (this.isUsername.timer) {
            clearTimeout(this.isUsername.timer);
        }
        this.isUsername.timer = setTimeout(function () {
            var data = { userName: _this.registrationForm.value.userName };
            if (data.userName.trim().length != 0) {
                _this.registrationForm.controls.userName.setErrors({ 'hasWhiteSpace': false });
                _this.authService.validateUserName(data).subscribe(function (res) {
                    _this.setLoading = false;
                    _this.isUsername.checking = false;
                    if (res.status == 1)
                        // this.isUsername.isValid = !res.isExist
                        _this.registrationForm.controls.userName.setErrors(res.isExist ? { 'inValidUser': true } : null);
                    console.log("loginBtn_API", res, _this.registrationForm);
                    // this.openToast()
                    // this.storeSessionData(res)
                });
            }
            else {
                _this.registrationForm.controls.userName.setErrors({ 'hasWhiteSpace': true });
            }
        }, 1000);
    };
    /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
    loginComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    // login(form: NgForm) {
    //   this.submited = true
    //   if (form.valid) {
    //     console.log(form.value, "submited")
    //     // this.isLoading = true;
    //     this.authService.login(form.value.email, form.value.password);
    //   }
    // }
    // ngOnDestroy() {
    //   // this.renderer.removeClass(document.body, 'hold-transition');
    //   document.body.classList.remove("login-page", "hold-transition")
    //   // this.authStatusSub.unsubscribe();
    // }
    loginComponent.prototype.openToast = function () {
        console.log("Open Toast Called");
        // this.toastr.error('Hello world!');
        // this.toastr.info('Hello world!');
        // this.toastr.show('Hello world!');
        // this.toastr.warning('Hello world!');
    };
    loginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/loginmodule/login.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/loginmodule/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], loginComponent);
    return loginComponent;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.component.html":
/*!******************************************************!*\
  !*** ./src/app/calculator/calculator.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"setPage == 'calculator'\">\n  <p>\n    <!-- calculator works! -->\n    <input type=\"button\" value=\"< Back\" (click)=\"backToExpense()\">\n\n  </p>\n  <p>\n    expense Name :\n    <span *ngIf=\"!edit.expenseName\">{{expense.name}}</span>\n    <input *ngIf=\"edit.expenseName\" type=\"text\" placeholder=\"Expense Name\" [(ngModel)]=\"expense.name\">\n    <input style=\"margin-left: 10px;\" type=\"button\" value=\"{{edit.expenseName ? 'Save' : 'Edit'}} \"\n      (click)=\"edit.expenseName =!edit.expenseName\">\n  </p>\n  <p>\n    expense Total Cost:\n    <span *ngIf=\"!edit.editCost\">{{expense.tripDetails.expenseCost}}</span>\n    <input *ngIf=\"edit.editCost\" type=\"text\" placeholder=\"Expense Total Cost\" (keyup)=\"calculateDetails(expense)\"\n      [(ngModel)]=\"expense.tripDetails.expenseCost\">\n    <input style=\"margin-left: 10px;\" type=\"button\" value=\"{{edit.editCost ? 'Save' : 'Edit'}} \"\n      (click)=\"edit.editCost =!edit.editCost\">\n\n  </p>\n  <!-- <input type=\"text\" placeholder=\"Expense Total Cost\" (keyup)=\"calculateDetails(expense)\" [(ngModel)]=\"expense.tripDetails.expenseCost\"> -->\n  Choose Members <input type=\"button\" value=\"+\" (click)=\"setPageTo('addMembers')\">\n  <br>\n  expense Members:\n  <hr>\n  <div *ngFor=\"let trip of expense?.tripDetails?.members\">\n    <span>{{trip.memberName}}</span><br>\n    <!-- <span><input type=\"text\" placeholder=\"Member Name\" [(ngModel)]=\"trip.memberName\"></span><br> -->\n    <span>Have to pay <input type=\"checkbox\" [(ngModel)]=\"trip.havetopay\"></span><br>\n    <span *ngIf=\"trip.havetopay\">Have already Paid <input type=\"checkbox\" [(ngModel)]=\"trip.hasalreadypaid\"\n        (click)=\"hasalreadypaidChange($event,trip)\"></span><br>\n    <span *ngIf=\"!trip.hasalreadypaid\">\n      Paid Amount : {{trip.paidamount}}\n    </span><br>\n    <span *ngIf=\"trip.hasalreadypaid\">\n      Paid Amount : <input type=\"text\" [(ngModel)]=\"trip.paidamount\" (keyup)=\"calculateDetails(expense)\">\n    </span><br>\n    <span>\n      total Payable : <span [ngClass]=\"trip.finalAmount > 0 ? 'green_color' : 'red_color'\">{{trip.finalAmount}}</span>\n    </span><br>\n    <hr>\n  </div>\n  <div *ngIf=\"expense?.tripDetails?.members?.length == 0\">\n    <p>No Members Added Yet!</p>\n    <hr>\n  </div>\n  <!-- <div>\n  <p>Franis</p>\n</div> -->\n\n  Total Members involved in {{expense.tripDetails.name}} are = {{expense.tripDetails.members.length}}\n  <br>\n  Per Person Cost = {{expense.tripDetails.perPersonCost}}\n\n  <br>\n  <input type=\"button\" (click)=\"calculateDetails(expense)\" value=\"Calculate\">\n</div>\n<div *ngIf=\"setPage == 'addMembers'\">\n  <p>\n    <input type=\"button\" (click)=\"setPageTo('calculator')\" value=\"< Show Calculator\">\n  </p>\n  <hr>\n  <p>\n    Members list :\n  </p>\n  <p *ngFor=\"let member of tripMembersList;let i = index\">\n    <!-- <input type=\"checkbox\" [(ngModel)]=\"member.isChecked\">  -->\n    {{i+1}} : {{member.memberName}} <input style=\"float: right;\" type=\"button\"\n      value=\"{{member.isChecked ? 'Remove' : 'Add'}}\" (click)=\"AddMembersList(member)\">\n  </p>\n  <p *ngIf=\"tripMembersList.length == 0\">No members to Show</p>\n\n\n</div>"

/***/ }),

/***/ "./src/app/calculator/calculator.component.scss":
/*!******************************************************!*\
  !*** ./src/app/calculator/calculator.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent(_common, route, router) {
        this._common = _common;
        this.route = route;
        this.router = router;
        this.tripMembersList = [];
        this.setPage = 'calculator';
        this.edit = {
            expenseName: false,
            editCost: false
        };
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        console.log("_common service", this._common.value);
        // this.setPageTo("calculator")
        this.tripId = this.route.snapshot.paramMap.get('tripId');
        this.expenseId = this.route.snapshot.paramMap.get('expenseId');
        console.log("_common service", this._common.value, this.tripId);
        this.expense = this._common.getCalculations(this.tripId, this.expenseId);
        console.log("expenseFound", this._common.getCalculations(this.tripId, this.expenseId));
        this.tripMembers = this._common.getTripMembers(this.tripId);
        console.log("tripMembers", this.tripMembers);
        // this.trip = this._common.getExpense(this.tripId)
        // console.log("this.trip",this.trip)
        this.calculateDetails(this.expense);
    };
    // tripDetails: TripDetailsModel = {
    //   // name: "ABC",
    //   expenseCost: null,
    //   members: [],
    //   perPersonCost: 0
    // }
    CalculatorComponent.prototype.calculateDetails = function (expense) {
        // let personHavetoPay: any = []
        // if (expense.tripDetails.members.length > 0) {
        //   personHavetoPay = expense.tripDetails.members.filter(item => item.havetopay)
        //   console.log("Calculate_details_Called", expense.tripDetails, personHavetoPay)
        //   let total_members = personHavetoPay.length
        //   expense.tripDetails.perPersonCost = expense.tripDetails.expenseCost / total_members
        //   personHavetoPay.filter(item => {
        //     console.log("personHavetoPay", item)
        //     item.finalAmount = item.paidamount - expense.tripDetails.perPersonCost
        //   })
        // }
        this._common.calculateDetails(expense);
    };
    CalculatorComponent.prototype.addMembers = function (tripData) {
        console.log("addMembers", tripData);
        var members = {
            memberId: null,
            memberName: null,
            havetopay: true,
            hasalreadypaid: false,
            paidamount: 0,
            finalAmount: null,
            isChecked: null
        };
        tripData.members.push(members);
        this.calculateDetails(this.expense);
    };
    CalculatorComponent.prototype.backToExpense = function () {
        console.log("backToExpense", this._common.islastPageReports);
        if (this._common.islastPageReports.status) {
            this.router.navigate(['userwise', this.tripId, this._common.islastPageReports.memberId]);
        }
        else {
            this.router.navigate(['expense', this.tripId]);
        }
    };
    CalculatorComponent.prototype.checkMembersStatus = function () {
        var _this = this;
        this.tripMembersList = this.tripMembers.slice();
        this.tripMembersList.filter(function (item) {
            var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](_this.expense.tripDetails.members, function (o) {
                return o.memberId == item.memberId;
            });
            console.log("checkMembersStatus", item, index);
            item.isChecked = (index > -1);
            // this.tripMembersList.push()
            // this.expense.tripDetails.members.push(item)
        });
    };
    CalculatorComponent.prototype.setPageTo = function (pageName) {
        this.setPage = pageName;
        if (pageName == 'calculator') {
            console.log("Page set to ", pageName);
            this.calculateDetails(this.expense);
        }
        else if (pageName == 'addMembers') {
            console.log("Page set to ", pageName, this.expense);
            this.checkMembersStatus();
        }
    };
    CalculatorComponent.prototype.AddMembersList = function (member) {
        console.log("Add members List called", member, this.tripMembersList, this.expense.tripDetails.members);
        if (member.isChecked) {
            var indexfound = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.expense.tripDetails.members, function (o) {
                return o.memberId == member.memberId;
            });
            this.expense.tripDetails.members.splice(indexfound, 1);
        }
        else {
            this.expense.tripDetails.members.push(member);
        }
        member.isChecked = !member.isChecked;
        // let index = _.findIndex(this.expense.tripDetails.members, o => {
        //   return o.memberId == item.memberId
        // });
    };
    CalculatorComponent.prototype.hasalreadypaidChange = function (event, trip) {
        console.log("hasalreadypaidChange", trip);
        if (!event.target.checked) {
            trip.paidamount = 0;
            this.calculateDetails(this.expense);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalculatorComponent.prototype, "tripData", void 0);
    CalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.scss */ "./src/app/calculator/calculator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_storageKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/storageKey */ "./src/app/model/storageKey.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var CommonService = /** @class */ (function () {
    function CommonService() {
        this.value = "calculator";
        this.currentId = 0;
        this.islastPageReports = {
            status: false,
            memberId: null
        };
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.showLoading = false;
        this.tripsDummy = [
            {
                tripId: this.getNewId(),
                tripName: "Kala Ghoda",
                totalTripExpenseCost: null,
                members: [
                    {
                        memberId: this.getNewId(),
                        memberName: "Amey",
                        havetopay: true,
                        hasalreadypaid: false,
                        paidamount: 0,
                        finalAmount: null,
                        isChecked: null
                    },
                    {
                        memberId: this.getNewId(),
                        memberName: "Urmi",
                        havetopay: true,
                        hasalreadypaid: false,
                        paidamount: 0,
                        finalAmount: null,
                        isChecked: null
                    },
                    {
                        memberId: this.getNewId(),
                        memberName: "Pallavi",
                        havetopay: true,
                        hasalreadypaid: false,
                        paidamount: 0,
                        finalAmount: null,
                        isChecked: null
                    },
                    {
                        memberId: this.getNewId(),
                        memberName: "Nityanand",
                        havetopay: true,
                        hasalreadypaid: false,
                        paidamount: 0,
                        finalAmount: null,
                        isChecked: null
                    },
                    {
                        memberId: this.getNewId(),
                        memberName: "Shweta",
                        havetopay: true,
                        hasalreadypaid: false,
                        paidamount: 0,
                        finalAmount: null,
                        isChecked: null
                    },
                    {
                        memberId: this.getNewId(),
                        memberName: "Bipin",
                        havetopay: true,
                        hasalreadypaid: false,
                        paidamount: 0,
                        finalAmount: null,
                        isChecked: null
                    },
                    {
                        memberId: this.getNewId(),
                        memberName: "Irfan",
                        havetopay: true,
                        hasalreadypaid: false,
                        paidamount: 0,
                        finalAmount: null,
                        isChecked: null
                    },
                    {
                        memberId: this.getNewId(),
                        memberName: "Manali",
                        havetopay: true,
                        hasalreadypaid: false,
                        paidamount: 0,
                        finalAmount: null,
                        isChecked: null
                    },
                    {
                        memberId: this.getNewId(),
                        memberName: "Kaushal",
                        havetopay: true,
                        hasalreadypaid: false,
                        paidamount: 0,
                        finalAmount: null,
                        isChecked: null
                    }
                ],
                tripExpense: [],
                creatorID: null
            },
            {
                tripId: this.getNewId(),
                tripName: "Test",
                totalTripExpenseCost: null,
                members: [
                    {
                        memberId: this.getNewId(),
                        memberName: "Amey",
                        havetopay: true,
                        hasalreadypaid: false,
                        paidamount: 0,
                        finalAmount: null,
                        isChecked: null
                    },
                    {
                        memberId: this.getNewId(),
                        memberName: "Urmi",
                        havetopay: true,
                        hasalreadypaid: false,
                        paidamount: 0,
                        finalAmount: null,
                        isChecked: null
                    },
                    {
                        memberId: this.getNewId(),
                        memberName: "Pallavi",
                        havetopay: true,
                        hasalreadypaid: false,
                        paidamount: 0,
                        finalAmount: null,
                        isChecked: null
                    }
                ],
                tripExpense: [],
                creatorID: null
            }
        ];
        this.friendsList = [
            {
                name: "amey",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "jitesh",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "pallavi",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "sangeeta",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "shweta",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "urmi",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "irfan",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "manali",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "nitya",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "pragnesh",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "ronak",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "bhavika",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "shruti",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "akanksha",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "archana",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "francis",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "harshali",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "prashant",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "selvi",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "soniya",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "umang",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "vaibhav",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "kaushal",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "sibaram",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
            {
                name: "vipul",
                emailId: "",
                id: this.getNewId(),
                isLocalAccount: true,
                mobileNo: null,
                isChecked: false
            },
        ];
        // this.getSaveData()
    }
    CommonService.prototype.setLoading = function (showLoading) {
        this.showLoading = showLoading;
        this.loadingSubject.next({ showLoading: this.showLoading });
    };
    CommonService.prototype.getShowloading = function () {
        return this.showLoading;
    };
    CommonService.prototype.subscribeLoading = function () {
        return this.loadingSubject.asObservable();
    };
    // getSaveData() {
    //   let data = localStorage.getItem("tripData")
    //   let currentId = localStorage.getItem("currentId")
    //   this.trips = data ? JSON.parse(data) : this.tripsDummy
    //   this.currentId = currentId ? JSON.parse(currentId) : this.currentId
    //   console.log("getSaveData", data, currentId)
    // }
    // saveData() {
    //   let data = JSON.stringify(this.trips)
    //   let currentId = JSON.stringify(this.currentId)
    //   localStorage.setItem("tripData", data)
    //   localStorage.setItem("currentId", currentId)
    // }
    CommonService.prototype.getTripData = function (tripId) {
        if (tripId) {
            var result = [];
            result = this.trips.filter(function (item) {
                console.log("trippp", item);
                return item.tripId == tripId;
            });
            return result;
        }
        else
            return this.trips;
    };
    CommonService.prototype.getNewId = function () {
        this.currentId++;
        return this.currentId;
    };
    CommonService.prototype.getExpense = function (tripId) {
        console.log("getExpense", tripId);
        var index = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.trips, function (o) {
            return o.tripId == tripId;
        });
        return this.trips[index];
        // let filterExpense: any = this.trips.filter(item => item.tripId = tripId)
        // return filterExpense.tripExpense
    };
    CommonService.prototype.getCalculations = function (tripId, expenseId) {
        var trip = this.getExpense(tripId);
        // console.log("getCalculations",trip)
        var index = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](trip.tripExpense, function (o) {
            return o.expenseId == expenseId;
        });
        return trip.tripExpense[index];
    };
    CommonService.prototype.getTripMembers = function (tripId) {
        var membersList = this.trips.filter(function (item) { return item.tripId == tripId; });
        return membersList[0].members;
    };
    CommonService.prototype.calculateDetails = function (expense) {
        var personHavetoPay = [];
        if (expense.tripDetails.members.length > 0) {
            expense.tripDetails.members.filter(function (willGet) {
                if (!willGet.havetopay) {
                    console.log("willGet", willGet);
                    willGet.finalAmount = willGet.paidamount;
                }
            });
            personHavetoPay = expense.tripDetails.members.filter(function (item) { return item.havetopay; });
            console.log("Calculate_details_Called", expense.tripDetails, personHavetoPay);
            var total_members = personHavetoPay.length;
            expense.tripDetails.perPersonCost = expense.tripDetails.expenseCost / total_members;
            personHavetoPay.filter(function (item) {
                console.log("personHavetoPay", item);
                item.finalAmount = item.paidamount - expense.tripDetails.perPersonCost;
            });
        }
    };
    CommonService.prototype.getFriendsList = function () {
        return this.friendsList;
    };
    CommonService.prototype.removeFriend = function (index) {
        this.friendsList.splice(index, 1);
    };
    CommonService.prototype.addTrip = function (trip) {
        this.trips.push(trip);
    };
    CommonService.prototype.setLocalData = function (key, value) {
        localStorage.setItem(key, value);
    };
    CommonService.prototype.getLocalData = function (key) {
        return new Promise(function (resolve, reject) {
            var data = localStorage.getItem(key);
            resolve(data);
        });
    };
    CommonService.prototype.getTokenPromise = function () {
        var TokenData;
        this.getLocalData(_model_storageKey__WEBPACK_IMPORTED_MODULE_3__["storeKey"].token).then(function (token) {
            TokenData = token;
        });
        return TokenData;
    };
    CommonService.prototype.getToken = function () {
        return localStorage.getItem((_model_storageKey__WEBPACK_IMPORTED_MODULE_3__["storeKey"].token).toString());
    };
    CommonService.prototype.removeDuplicate = function (arrayData, filterByKey) {
        var result = [];
        arrayData.filter(function (item) {
            var index = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](result, function (o) { return o[filterByKey] == item[filterByKey]; });
            if (index < 0)
                result.push(item);
        });
        return result;
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/expenses/expenses.component.html":
/*!**************************************************!*\
  !*** ./src/app/expenses/expenses.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"setPage == 'expense'\">\n  <input type=\"button\" value=\"< Back\" (click)=\"backToTrips()\">\n  <input type=\"button\" value=\"Add Expense\" (click)=\"navigateToAddModifyExpense()\">\n  <input type=\"button\" value=\"View Reports\" (click)=\"reportsPage()\">\n  <br>\n  <br>\n\n  Trip Name : {{trip?.tripName}}\n  <br>\n  Total Cost : {{trip?.totalTripExpenseCost}}\n\n  <hr>\n\n  <p *ngIf=\"trip?.tripExpense?.length == 0\">No Expense Added Yet</p>\n  <div *ngFor=\"let expense of trip?.tripExpense;let i=index\">\n    <p (click)=\"showExpenseDetails(expense)\">{{expense.name}}\n    </p>\n    <input style=\"float: right;\" type=\"button\" *ngIf=\"expense.creatorID == userId || trip.creatorID == userId\"\n      value=\"delete\" (click)=\"deleteExpense(expense,i)\">\n    <p>Total Members : {{expense.tripDetails.members.length}}</p>\n    <p>Per PersonCost : {{expense.tripDetails.perPersonCost}}</p>\n    <p>ExpenseCost : {{expense.tripDetails.expenseCost}}</p>\n    <hr>\n  </div>\n</div>\n<div *ngIf=\"setPage == 'addExpense'\">\n  <p>\n    <input type=\"button\" (click)=\"setPageTo('expense')\" value=\"< Show Expense\">\n  </p>\n  Expense Name :\n  <input type=\"text\" [(ngModel)]=\"addnewExpense.name\"><br>\n  Expense Cost :\n  {{addnewExpense.tripDetails.expenseCost | number:'1.0-2' }}\n  <br>\n  PerPerson Cost :\n  {{addnewExpense.tripDetails.perPersonCost | number:'1.0-2' }}\n  <hr>\n  <div>\n    Expense By: <input type=\"button\" value=\"+\" (click)=\"addInExpenseTray()\"\n      *ngIf=\"expenseTray.length < tripMembers.length\">\n    <br><br>\n    <div *ngFor=\"let tray of expenseTray;let i = index\">\n      <select name=\"members\" [(ngModel)]=\"tray.selectedmember\" (change)=\"setNewSelectedMember(tray)\">\n        <option *ngFor=\"let mem of tray.members\">{{mem.name}}</option>\n      </select>\n      Amount : <input type=\"text\" [(ngModel)]=\"tray.amount\" (keyup)=\"calculateCurrentCost()\" placeholder=\"Amount\">\n      <input *ngIf=\"i!=0\" style=\"float: right;\" type=\"button\" value=\"-\" (click)=\"removeInExpenseTray(i)\">\n      <br>\n    </div>\n\n\n  </div>\n  <br>\n  <hr>\n  <div>\n    Expense Splited between :\n    <br><br>\n    <div>\n      <input type=\"checkbox\" [(ngModel)]=\"ischeckAll\" (click)=\"checkAll($event)\"> Check All\n      <br>\n      <br>\n      <div style=\"text-align: center;\">\n        <table width=\"100%\">\n          <thead>\n            <td>Have to Pay</td>\n            <td>Name</td>\n            <td>Paid Amount</td>\n            <td>Payable Amount</td>\n          </thead>\n          <tbody *ngFor=\"let members of currentMember\">\n            <td><input type=\"checkbox\" [(ngModel)]=\"members.isChecked\" (click)=\"memberChecked($event,members)\"></td>\n            <td>{{members.name}}</td>\n            <td [ngClass]=\"members.paidamount > 0 ? 'green_color' : 'red_color'\">{{members.paidamount | number:'1.0-2'}}\n            </td>\n            <td [ngClass]=\"members.finalAmount > 0 ? 'green_color' : 'red_color'\">\n              {{members.finalAmount | number:'1.0-2'}} </td>\n          </tbody>\n          <thead>\n            <th>\n              <hr>Total</th>\n            <th>\n              <hr>&nbsp;</th>\n            <th>\n              <hr>{{footerInfo.amountpaid | number:'1.0-2' }}</th>\n            <th>\n              <hr>{{footerInfo.amountBalance | number:'1.0-2' }}</th>\n          </thead>\n        </table>\n      </div>\n     \n    </div>\n  </div>\n\n  <p>\n    <input type=\"button\" (click)=\"addExpense(addnewExpense)\" value=\"Add Expense\">\n  </p>\n\n\n</div>"

/***/ }),

/***/ "./src/app/expenses/expenses.component.scss":
/*!**************************************************!*\
  !*** ./src/app/expenses/expenses.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2VzL2V4cGVuc2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/expenses/expenses.component.ts":
/*!************************************************!*\
  !*** ./src/app/expenses/expenses.component.ts ***!
  \************************************************/
/*! exports provided: ExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesComponent", function() { return ExpensesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tripservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tripservice.service */ "./src/app/tripservice.service.ts");
/* harmony import */ var _model_storageKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/storageKey */ "./src/app/model/storageKey.ts");







var ExpensesComponent = /** @class */ (function () {
    function ExpensesComponent(_common, route, router, _trip) {
        this._common = _common;
        this.route = route;
        this.router = router;
        this._trip = _trip;
        this.setPage = "expense";
        this.expenseTray = [];
        this.footerInfo = {
            totalMembers: 0,
            perPersonCost: 0,
            amountSpend: 0
        };
        this.addnewExpense = {
            expenseId: null,
            name: null,
            tripDetails: {
                expenseCost: 0,
                members: [],
                perPersonCost: null
            }
        };
    }
    ExpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tripId = this.route.snapshot.paramMap.get('tripId');
        console.log("_common service", this._common.value, this.tripId);
        this._common.getLocalData(_model_storageKey__WEBPACK_IMPORTED_MODULE_6__["storeKey"].id).then(function (id) {
            _this.userId = id;
        });
        this.getTripInfo(this.tripId);
        // this.trip = this._common.getExpense(this.tripId)
        // this.tripMembers = this._common.getTripMembers(this.tripId)
        // this.currentMember = JSON.parse(JSON.stringify(this.tripMembers))
        // console.log("this.trip", this.trip)
        // console.log("this.tripMembers", this.tripMembers)
    };
    ExpensesComponent.prototype.checkAll = function (event) {
        console.log("checkall", event);
        this.setcurrentMembersBulkCheck(event.target.checked);
    };
    ExpensesComponent.prototype.memberChecked = function (event, member) {
        var _this = this;
        console.log("checkall", event, member);
        member.havetopay = event.target.checked;
        // this.setcurrentMembersBulkCheck(event.target.checked)
        setTimeout(function () {
            _this.checkIfAllChecked();
        }, 10);
    };
    ExpensesComponent.prototype.setcurrentMembersBulkCheck = function (status) {
        // this
        this.currentMember.filter(function (item) {
            item.isChecked = status;
            item.havetopay = status;
        });
        this.ischeckAll = status;
        this.calculateExpenseTopay();
    };
    ExpensesComponent.prototype.checkIfAllChecked = function () {
        var checkMembers = this.currentMember.filter(function (item) { return item.isChecked; });
        this.ischeckAll = (checkMembers.length == this.currentMember.length);
        this.calculateExpenseTopay();
    };
    ExpensesComponent.prototype.showExpenseDetails = function (expense) {
        console.log("showExpenseDetails", expense);
        this._common.islastPageReports.status = false;
        this._common.islastPageReports.memberId = null;
        // this.router.navigate(['calculator', this.tripId, expense.expenseId])
        this.router.navigate(['addmodifyexpense', this.tripId, expense._id]);
    };
    ExpensesComponent.prototype.backToTrips = function () {
        this.router.navigate(['home']);
    };
    ExpensesComponent.prototype.reportsPage = function () {
        this.router.navigate(['report', this.tripId]);
    };
    ExpensesComponent.prototype.addInExpenseTray = function () {
        // console.log("addInExpenseTray", this.expenseTray)
        var _this = this;
        var expenseTrayData = {
            members: [],
            selectedmember: null,
            selectedmemberData: null,
            amount: 0
        };
        // if (this.expenseTray.length > 0) {
        //   this.tripMembers.filter(item => {
        //     let index = _.findIndex(this.expenseTray, o => {
        //       return o.memberId == item.memberId
        //     });
        //     console.log("addInExpenseTray_index", item, index)
        //   })
        // } else {
        expenseTrayData.members = JSON.parse(JSON.stringify(this.tripMembers));
        console.log(this.expenseTray, "this.expenseTray", expenseTrayData);
        if (this.expenseTray.length < 1) {
            expenseTrayData.selectedmember = expenseTrayData.members[this.expenseTray.length].name;
            expenseTrayData.selectedmemberData = expenseTrayData.members[this.expenseTray.length];
            this.expenseTray.push(expenseTrayData);
        }
        else {
            this.tripMembers.filter(function (members) {
                var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](_this.expenseTray, function (o) {
                    return o.selectedmember == members.name;
                });
                if (index == -1 && expenseTrayData.selectedmember == null) {
                    expenseTrayData.selectedmember = members.name;
                    expenseTrayData.selectedmemberData = members;
                }
                console.log("tray_select_new", members, index);
            });
            this.expenseTray.push(expenseTrayData);
        }
        this.expenseTray.filter(function (item) {
            _this.showMembers(item);
        });
        // } 
        // else {
        // let remainingMembers = this.tripMembers.filter(item => {
        //   return item.memberId != tray.selectedmemberData.memberId
        // })
        // console.log("remainingMembers", remainingMembers)
        // this.expenseTray.filter(item => {
        //   let index = _.findIndex(expenseTrayData.members, o => {
        //     return o.memberId == item.selectedmemberData.memberId
        //   });
        //   console.log("this.expenseTray_filter", item, index)
        // })
        // }
        // if (this.expenseTray.length < 1)
        this.calculateCurrentCost();
        // }
    };
    ExpensesComponent.prototype.setNewSelectedMember = function (tray) {
        var _this = this;
        console.log("setNewSelectedMember", tray);
        var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](tray.members, function (o) {
            return o.name == tray.selectedmember;
        });
        if (index > -1) {
            tray.selectedmemberData = tray.members[index];
        }
        this.expenseTray.filter(function (item) {
            _this.showMembers(item);
        });
        this.calculateExpenseTopay();
    };
    ExpensesComponent.prototype.calculateCurrentCost = function () {
        var cost = 0;
        this.expenseTray.filter(function (item) {
            var num = item.amount == '' ? 0 : item.amount;
            cost = cost + parseFloat(num);
        });
        console.log("calculateCurrentCost", cost);
        this.addnewExpense.tripDetails.expenseCost = cost;
        this.calculateExpenseTopay();
    };
    ExpensesComponent.prototype.calculateExpenseTopay = function () {
        var _this = this;
        console.log("calculateExpenseTopay", this.currentMember, this.expenseTray);
        // let amountToCollect
        this.currentMember.filter(function (mem) {
            mem.paidamount = 0;
            mem.finalAmount = 0;
        });
        this.expenseTray.filter(function (item) {
            var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](_this.currentMember, function (o) {
                return o.memberId == item.selectedmemberData.memberId;
            });
            if (index > -1) {
                _this.currentMember[index].paidamount = item.amount;
            }
        });
        // this.currentMember.filter(curmem =>{
        // })
        this.calculatePayable();
    };
    ExpensesComponent.prototype.calculatePayable = function () {
        var _this = this;
        var personHavetoPay = [];
        // let personWillGetBack : any = []
        // let perPersonCost : any = 0
        if (this.currentMember.length > 0) {
            this.currentMember.filter(function (willGet) {
                if (!willGet.havetopay) {
                    console.log("willGet", willGet);
                    willGet.finalAmount = willGet.paidamount;
                }
            });
            personHavetoPay = this.currentMember.filter(function (item) { return item.havetopay; });
            console.log("Calculate_details_Called", this.currentMember, personHavetoPay);
            var total_members = personHavetoPay.length;
            this.addnewExpense.tripDetails.perPersonCost = this.addnewExpense.tripDetails.expenseCost / total_members;
            personHavetoPay.filter(function (item) {
                console.log("personHavetoPay", item);
                item.finalAmount = item.paidamount - _this.addnewExpense.tripDetails.perPersonCost;
            });
        }
    };
    ExpensesComponent.prototype.removeInExpenseTray = function (index) {
        var _this = this;
        this.expenseTray.splice(index, 1);
        this.expenseTray.filter(function (item) {
            _this.showMembers(item);
        });
        this.calculateCurrentCost();
    };
    ExpensesComponent.prototype.showMembers = function (tray) {
        var _this = this;
        var newMembers = [];
        console.log("showMembers", tray.members, this.expenseTray, this.tripMembers);
        var remainingMembers = [];
        remainingMembers = this.tripMembers.filter(function (item) {
            return item.memberId != tray.selectedmemberData.memberId;
        });
        console.log("remainingMembers", remainingMembers);
        // let result = this.tripMembers.filter(item => {
        //   // let index = _.findIndex(this.expenseTray, o => {
        //   //   return o.selectedmemberData.memberId == item.selectedmemberData.memberId
        //   // });
        //   console.log("addInExpenseTray_index", item)
        //   // return item.
        // })
        // console.log("addInExpenseTray_index", item, index)
        var result = remainingMembers.filter(function (item) {
            // this.tripMembers.filter(innerItem => {
            var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](_this.expenseTray, function (o) {
                return item.memberId == o.selectedmemberData.memberId;
            });
            console.log("showMembers_check", item, index);
            return (index == -1);
            // })
        });
        // newMembers = result.concat(tray.selectedmemberData)
        // newMembers = newMembers.concat(result)
        // tray.members = newMembers;
        result = result.concat(tray.selectedmemberData);
        console.log("finalResult to show", result);
        tray.members = result;
    };
    ExpensesComponent.prototype.navigateToAddModifyExpense = function () {
        this.router.navigate(['addmodifyexpense', this.tripId]);
    };
    ExpensesComponent.prototype.setPageTo = function (pageName) {
        if (pageName == 'expense') {
            this.setPage = pageName;
            console.log("Page set to ", pageName);
            // this.calculateDetails()
        }
        else if (pageName == 'addExpense') {
            // console.log("Page set to ", pageName)
            this.navigateToAddModifyExpense();
            // this.checkMembersStatus();
            // this.expenseTray = []
            // this.addInExpenseTray()
        }
    };
    // addExpense(addExpense) {
    //   console.log("Add Expense Called", addExpense)
    //   let expense: TripExpenseModel = {
    //     expenseId: this._common.getNewId(),
    //     name: addExpense.name,
    //     tripDetails: {
    //       expenseCost: addExpense.tripDetails.expenseCost,
    //       members: [],
    //       perPersonCost: null
    //     }
    //   }
    //   this.AddMembersList(expense)
    //   this.trip.tripExpense.push(expense)
    //   // this.calculateDetails()
    //   // this.calculateExpenseDetails()
    //   this.setPageTo('expense')
    // }
    // calculateDetails() {
    //   this.trip.tripExpense.filter(item => {
    //     // this._common.calculateDetails(item)
    //   })
    // }
    ExpensesComponent.prototype.calculateExpenseDetails = function () {
        var totalCost = 0;
        this.trip.tripExpense.filter(function (item) {
            console.log("calculateExpenseDetails", item);
            var num = item.tripDetails.expenseCost;
            totalCost = totalCost + parseFloat(num);
        });
        this.trip.totalTripExpenseCost = totalCost;
    };
    ExpensesComponent.prototype.AddMembersList = function (member) {
        var _this = this;
        console.log("Add members List called", member, this.tripMembers);
        member.tripDetails.members = JSON.parse(JSON.stringify(this.currentMember));
        member.tripDetails.members.filter(function (item) {
            console.log("AddMembersList", item, _this.expenseTray);
            var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](_this.expenseTray, function (o) {
                return o.selectedmemberData.memberId == item.memberId;
            });
            if (index > -1) {
                item.hasalreadypaid = (_this.expenseTray[index].amount > 0);
                item.paidamount = _this.expenseTray[index].amount;
            }
        });
        // if (member.isChecked) {
        //   this.expense.tripDetails.members.splice(index, 1)
        // } else {
        //   this.expense.tripDetails.members.push(member)
        // }
        // member.isChecked = !member.isChecked
        // let index = _.findIndex(this.expense.tripDetails.members, o => {
        //   return o.memberId == item.memberId
        // });
    };
    ExpensesComponent.prototype.deleteExpense = function (item, index) {
        var _this = this;
        // this.trip.tripExpense.splice(index, 1);
        // this.calculateExpenseDetails();
        console.log("deleteExpense", item, index);
        var data = {
            tripId: this.tripId,
            expenseId: item._id
        };
        this._trip.deleteExpense(data).subscribe(function (res) {
            console.log("deleteExpense_api", res);
            if (res.status == 1)
                _this.trip.tripExpense.splice(index, 1);
        });
    };
    ExpensesComponent.prototype.getTripInfo = function (tripId) {
        var _this = this;
        var data = { tripId: tripId };
        this._common.setLoading(true);
        this._trip.getTripInfo(data).subscribe(function (res) {
            _this._common.setLoading(false);
            console.log("getTripInfo", res);
            _this.trip = res.result;
            _this.tripMembers = _this.trip.members;
            _this.currentMember = JSON.parse(JSON.stringify(_this.tripMembers));
            // this.calculateDetails()
            _this.calculateExpenseDetails();
            _this.setcurrentMembersBulkCheck(true);
            // this.friendsList = res.friendsList
            // this.friendsListFilter = JSON.parse(JSON.stringify(this.friendsList))
        });
    };
    ExpensesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expenses',
            template: __webpack_require__(/*! ./expenses.component.html */ "./src/app/expenses/expenses.component.html"),
            styles: [__webpack_require__(/*! ./expenses.component.scss */ "./src/app/expenses/expenses.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _tripservice_service__WEBPACK_IMPORTED_MODULE_5__["TripserviceService"]])
    ], ExpensesComponent);
    return ExpensesComponent;
}());



/***/ }),

/***/ "./src/app/friend/friend.component.html":
/*!**********************************************!*\
  !*** ./src/app/friend/friend.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <input type=\"button\" value=\"< Back\" (click)=\"backToTrips()\">\n</p>\n\n<div class=\"btn-group\">\n  <button (click)=\"setPageTo('myfriends')\">My Friends</button>\n  <button (click)=\"setPageTo('request')\">Manage Request</button>\n  <button (click)=\"setPageTo('addfriend')\">Add Friend</button>\n</div>\n\n<div *ngIf=\"setPage == 'myfriends'\">\n  <p>My friends</p>\n\n  <div *ngFor=\"let friend of friendsList;let i = index\">\n    {{friend.name}}\n    <input type=\"button\" *ngIf=\"!friend.resMsg\" style=\"float: right;\" value=\"Unfriend\"\n      (click)=\"manageFriend(friend,true)\">\n    <span style=\"float: right;\" *ngIf=\"friend.resMsg\">{{friend.resMsg}}</span>\n    <br>\n    <hr>\n  </div>\n</div>\n\n\n<div *ngIf=\"setPage == 'request'\">\n  <p>My request</p>\n  <!-- <hr> -->\n\n  <div *ngIf=\"friendsListRequestGroup[3].length > 0\">\n    <p class=\"title-heading\">Pending Requests</p>\n\n    <div *ngFor=\"let friend of friendsListRequestGroup[3];let i = index\">\n      {{friend.name}} ({{friend.userName}})\n      <input type=\"button\" *ngIf=\"!friend.resMsg\" style=\"float: right;\" value=\"Cancel\"\n        (click)=\"manageFriend(friend,false)\">\n      <input type=\"button\" *ngIf=\"!friend.resMsg\" style=\"float: right;\" value=\"Accept\"\n        (click)=\"manageFriend(friend,true)\">\n      <span style=\"float: right;\" *ngIf=\"friend.resMsg\">{{friend.resMsg}}</span>\n      <br>\n      <hr>\n    </div>\n  </div>\n\n\n  <!-- ------------------------------------------------------------------------------- -->\n\n  <div *ngIf=\"friendsListRequestGroup[2].length > 0\">\n    <p class=\"title-heading\">Awaiting Friend Response</p>\n\n\n    <div *ngFor=\"let friend of friendsListRequestGroup[2];let i = index\">\n      {{friend.name}} ({{friend.userName}})\n      <input type=\"button\" *ngIf=\"!friend.resMsg\" style=\"float: right;\" value=\"Cancel Sent Request\"\n        (click)=\"manageFriend(friend,false)\">\n      <span style=\"float: right;\" *ngIf=\"friend.resMsg\">{{friend.resMsg}}</span>\n\n      <br>\n      <hr>\n    </div>\n  </div>\n\n</div>\n\n\n<div *ngIf=\"setPage == 'addfriend'\">\n\n  <p>\n    <input style=\"width: 100%;\" type=\"text\" [(ngModel)]=\"searchFriend\" placeholder=\"Search Friend\"\n      (ngModelChange)=\"getFriendSearchResult($event)\">\n  </p>\n  <div *ngIf=\"searchFriend?.length > 0\">\n\n    <div *ngFor=\"let friend of friendsListFilter ;let i = index;\">\n\n      {{friend.name}} ({{friend.userName}})\n      <input *ngIf=\"!friend.resMsg && friend.friendStatus == null\" type=\"button\" style=\"float: right;\"\n        (click)=\"manageFriend(friend,true)\" value=\"Add Friend\">\n      <span style=\"float: right;\" *ngIf=\"friend.resMsg\">{{friend.resMsg}}</span>\n      <br>\n      <hr>\n    </div>\n  </div>\n\n  <div *ngIf=\"false\">\n\n    <p>Add Friends Locally</p>\n\n    <input type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"addFriendData.name\"><br>\n    <!-- <input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"addFriendData.name.last\"><br> -->\n    <input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"addFriendData.emailId\"><br>\n    <input type=\"tel\" placeholder=\"Mobile Number\" [(ngModel)]=\"addFriendData.mobileNo\"><br>\n\n    <input type=\"button\" value=\"Add Friend\" (click)=\"AddFriendFn(addFriendData)\">\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/friend/friend.component.scss":
/*!**********************************************!*\
  !*** ./src/app/friend/friend.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-heading {\n  background: grey;\n  color: white;\n  padding: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kL0U6XFxQcm9qZWN0IGZpbGVzXFx0cmlwRXhwZW5zZS9zcmNcXGFwcFxcZnJpZW5kXFxmcmllbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZC9mcmllbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtaGVhZGluZ3tcclxuICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/friend/friend.component.ts":
/*!********************************************!*\
  !*** ./src/app/friend/friend.component.ts ***!
  \********************************************/
/*! exports provided: FriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendComponent", function() { return FriendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tripservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tripservice.service */ "./src/app/tripservice.service.ts");





var FriendComponent = /** @class */ (function () {
    function FriendComponent(_common, route, router, _trip) {
        this._common = _common;
        this.route = route;
        this.router = router;
        this._trip = _trip;
        this.friendsList = [];
        this.friendsListRequestGroup = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
        this.addFriendData = {
            name: "",
            emailId: "",
            id: this._common.getNewId(),
            isLocalAccount: true,
            mobileNo: null,
            isChecked: false
        };
        this.friendsButtonValue = {
            1: "unfriend",
            2: "cancel Friend",
            3: "Accept",
            4: "",
            5: ""
        };
    }
    FriendComponent.prototype.ngOnInit = function () {
        this.setPageTo('myfriends');
    };
    FriendComponent.prototype.backToTrips = function () {
        this.router.navigate(['home']);
    };
    // getFriendsList() {
    //   this.friendsList = this._common.getFriendsList();
    //   console.log("this.friendsList", this.friendsList)
    // }
    FriendComponent.prototype.getFriendsList = function (type) {
        var _this = this;
        var data = { type: type };
        this._trip.getFriendsList(data).subscribe(function (res) {
            console.log("getFriendsList", res);
            if (res.friendsList) {
                _this.friendsList = res.friendsList.friendsDataInfo;
                _this.friendsList.filter(function (item) {
                    item.resMsg = null;
                });
                _this.createFriendsGroup();
            }
        });
    };
    FriendComponent.prototype.createFriendsGroup = function () {
        var _this = this;
        this.friendsListRequestGroup = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
        this.friendsList.filter(function (friendsItem) {
            console.log("friendsListFilter", friendsItem);
            _this.friendsListRequestGroup[friendsItem.statusType].push(friendsItem);
        });
        console.log("friendsListRequestGroup", this.friendsListRequestGroup);
    };
    FriendComponent.prototype.AddFriendFn = function (addFriendData) {
        console.log("AddFriendFn", addFriendData);
        this._common.friendsList.push(addFriendData);
        // this.setPage = 'myfriends'
        this.setPageTo('myfriends');
    };
    FriendComponent.prototype.setPageTo = function (page) {
        if (page == 'myfriends') {
            this.getFriendsList(1);
        }
        else if (page == 'request') {
            this.getFriendsList(0);
        }
        else if (page == 'addfriend') {
            this.searchFriend = null;
        }
        this.setPage = page;
    };
    FriendComponent.prototype.removeFriend = function (index) {
        this._common.removeFriend(index);
    };
    FriendComponent.prototype.filterFriend = function (event) {
        console.log("filterFriend", event);
        this.friendsListFilter = this.friendsListFilterSource.filter(function (item) { return (item.name).toLowerCase().includes(event.toLowerCase()); });
    };
    FriendComponent.prototype.getFriendSearchResult = function (event) {
        var _this = this;
        console.log("getFriendSearchResult", event);
        var data = {
            "value": event
        };
        if (this.searchTimer) {
            console.log("search--", this.searchTimer);
            clearTimeout(this.searchTimer);
        }
        this.searchTimer = setTimeout(function () {
            if (event.length > 0) {
                _this._trip.findFriends(data).subscribe(function (res) {
                    _this.friendsListFilter = res.result;
                });
            }
            else {
                _this.friendsListFilter = [];
            }
        }, 1000);
    };
    // localhost:3000/api/friendDetails/manageFriends
    // getNextAction(type) {
    //   let returnValue
    //   switch (type) {
    //     case null:
    //       returnValue = 2
    //       break;
    //     case 2:
    //       returnValue = 2
    //       break;
    //   }
    // }
    FriendComponent.prototype.manageFriend = function (friendObj, isAccept) {
        // if (friendObj.statusType == null)
        //   friendObj.statusType = 2 
        var nextReqId = friendObj.statusType ? this.getNextId(isAccept, friendObj.statusType) : 2;
        console.log("manageFriend", friendObj, isAccept, this.getNextId(isAccept, friendObj.statusType));
        var data = { friendId: friendObj._id, reqType: nextReqId };
        // data.reqType = getNextAction(type)
        this._trip.manageFriends(data).subscribe(function (res) {
            console.log("manageFriend", res);
            if (res.status == 1) {
                friendObj.friendStatus = nextReqId;
            }
            friendObj.resMsg = res.message;
        });
    };
    FriendComponent.prototype.getNextId = function (isAccept, type) {
        var result;
        console.log("getNextId", isAccept, type);
        if (type == 1)
            result = isAccept ? 6 : 6;
        else if (type == 2)
            result = isAccept ? 1 : 4;
        else if (type == 3)
            result = isAccept ? 1 : 5;
        else if (type == 4)
            result = isAccept ? null : null;
        else if (type == 5)
            result = isAccept ? null : null;
        else if (type == 6)
            result = isAccept ? null : null;
        return result;
    };
    FriendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friend',
            template: __webpack_require__(/*! ./friend.component.html */ "./src/app/friend/friend.component.html"),
            styles: [__webpack_require__(/*! ./friend.component.scss */ "./src/app/friend/friend.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _tripservice_service__WEBPACK_IMPORTED_MODULE_4__["TripserviceService"]])
    ], FriendComponent);
    return FriendComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Trip Expense Manager</h1>\n<p>{{loggedInUser}}</p>\n\n<!-- <input type=\"button\" style=\"float: right;\" value=\"Save\" (click)=\"saveData()\"> -->\n<input type=\"button\" style=\"float: right;\" value=\"logout\" (click)=\"logout()\">"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _model_storageKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/storageKey */ "./src/app/model/storageKey.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_common, authService) {
        this._common = _common;
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._common.getLocalData(_model_storageKey__WEBPACK_IMPORTED_MODULE_4__["storeKey"].name).then(function (name) {
            _this._common.getLocalData(_model_storageKey__WEBPACK_IMPORTED_MODULE_4__["storeKey"].userName).then(function (userName) {
                _this.loggedInUser = "Welcome " + name + " (" + userName + ")";
            });
        });
    };
    HeaderComponent.prototype.saveData = function () {
        console.log("Data Saved");
        // this._common.saveData();
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/model/apiLinks.ts":
/*!***********************************!*\
  !*** ./src/app/model/apiLinks.ts ***!
  \***********************************/
/*! exports provided: ApiConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiConstants", function() { return ApiConstants; });
var ApiConstants = {
    user: {
        login: "/api/userDetails/login",
        signup: "/api/userDetails/signup",
        checkUserName: "/api/userDetails/checkUserName"
    },
    trip: {
        getTripDetails: "/api/tripDetails/getTripDetails",
        AddTrip: "/api/tripDetails/AddTrip",
        deleteTrip: "/api/tripDetails/deleteTrip",
        getTripMembersDetails: "/api/tripDetails/getTripMembersDetails"
    },
    expense: {
        getTripInfo: "/api/expenseDetails/getTripInfo",
        addTripExpense: "/api/expenseDetails/addTripExpense",
        deleteExpense: "/api/expenseDetails/deleteExpense"
    },
    friends: {
        getFriendsList: "/api/friendDetails/getFriendsList",
        findFriends: "/api/friendDetails/findFriends",
        manageFriends: "/api/friendDetails/manageFriends"
    }
};


/***/ }),

/***/ "./src/app/model/storageKey.ts":
/*!*************************************!*\
  !*** ./src/app/model/storageKey.ts ***!
  \*************************************/
/*! exports provided: storeKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKey", function() { return storeKey; });
var storeKey;
(function (storeKey) {
    storeKey[storeKey["name"] = 0] = "name";
    storeKey[storeKey["id"] = 1] = "id";
    storeKey[storeKey["userName"] = 2] = "userName";
    storeKey[storeKey["mobileNumber"] = 3] = "mobileNumber";
    storeKey[storeKey["token"] = 4] = "token";
})(storeKey || (storeKey = {}));


/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"button\" value=\"< Back\" (click)=\"backToExpense()\">\n\n<p>{{trip?.tripName}} Expense Report</p>\n<hr>\n\n<div style=\"text-align: center;\">\n  <!-- <p *ngFor=\"let member of membersReports\">\n    name : {{member.name}}\n  </p> -->\n  <table width=\"100%\">\n    <thead>\n      <th>Name</th>\n      <th>Total Spend</th>\n      <th>Paid</th>\n      <th>Pending</th>\n    </thead>\n    <tbody *ngFor=\"let member of membersReports\">\n      <td><a routerLink=\"/userwise/{{tripId}}/{{member._id}}\">{{member.name}}</a></td>\n      <td>{{member.totalSpend | number:'1.0-2'}}</td>\n      <td>{{member.amountPaid | number:'1.0-2'}}</td>\n      <td [ngClass]=\"member.amountBalance > 0 ? 'green_color' : 'red_color'\">{{member.amountBalance | number:'1.0-2'}}\n      </td>\n    </tbody>\n\n    <thead>\n      <th>\n        <hr>Total</th>\n      <th>\n        <hr>{{footerInfo.amountSpend | number:'1.0-2' }}</th>\n      <th>\n        <hr>{{footerInfo.amountpaid | number:'1.0-2' }}</th>\n      <th>\n        <hr>{{footerInfo.amountBalance | number:'1.0-2' }}</th>\n    </thead>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/report/report.component.scss":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tripservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tripservice.service */ "./src/app/tripservice.service.ts");






var ReportComponent = /** @class */ (function () {
    function ReportComponent(_common, route, router, _trip) {
        this._common = _common;
        this.route = route;
        this.router = router;
        this._trip = _trip;
        this.membersReports = [];
        this.footerInfo = {
            amountpaid: 0,
            amountBalance: 0,
            amountSpend: 0
        };
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.tripId = this.route.snapshot.paramMap.get('tripId');
        console.log("_common service", this._common.value, this.tripId);
        this.getTripInfo(this.tripId);
        // this.trip = this._common.getExpense(this.tripId)
        // console.log("this.trip", this.trip)
        // this.calculateReport()
    };
    ReportComponent.prototype.backToExpense = function () {
        this.router.navigate(['expense', this.tripId]);
    };
    ReportComponent.prototype.calculateReport = function () {
        var _this = this;
        // console.log()
        this.trip.members.filter(function (item) {
            var members = {
                _id: item._id,
                name: item.name,
                amountPaid: null,
                amountBalance: null,
                totalSpend: null
            };
            _this.membersReports.push(members);
        });
        this.membersReports.filter(function (item) {
            var amountDetails = _this.calculateAmountPaid(item._id);
            item.amountPaid = amountDetails.amountpaid;
            item.amountBalance = amountDetails.amountBalance;
            item.totalSpend = amountDetails.amountSpend;
            _this.footerInfo.amountBalance = _this.footerInfo.amountBalance + item.amountBalance;
            _this.footerInfo.amountpaid = _this.footerInfo.amountpaid + item.amountPaid;
            _this.footerInfo.amountSpend = _this.footerInfo.amountSpend + item.totalSpend;
        });
        console.log("this.membersReports", this.membersReports, "this.footerInfo", this.footerInfo);
        // this.trip.tripExpense
    };
    ReportComponent.prototype.calculateAmountPaid = function (_id) {
        var result = {
            amountpaid: 0,
            amountBalance: 0,
            amountSpend: 0
        };
        this.trip.tripExpense.filter(function (item) {
            var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](item.tripDetails.members, function (o) {
                return o._id == _id;
            });
            if (index > -1) {
                var paidamount = item.tripDetails.members[index].paidamount;
                var amountBalance = item.tripDetails.members[index].finalAmount;
                console.log("calculateAmountPaid", _id, item, index, (index > -1), amountBalance);
                result.amountpaid = result.amountpaid + parseFloat(paidamount);
                result.amountBalance = result.amountBalance + parseFloat(amountBalance);
                result.amountSpend = -(result.amountBalance) + result.amountpaid;
            }
        });
        return result;
    };
    ReportComponent.prototype.getTripInfo = function (tripId) {
        var _this = this;
        var data = { tripId: tripId };
        this._common.setLoading(true);
        this._trip.getTripInfo(data).subscribe(function (res) {
            _this._common.setLoading(false);
            console.log("getTripInfo", res);
            _this.trip = res.result;
            _this.calculateReport();
            // this.tripMembers = this.trip.members
            // this.currentMember = JSON.parse(JSON.stringify(this.tripMembers))
            // this.calculateDetails()
            // this.calculateExpenseDetails()
            // this.setcurrentMembersBulkCheck(true)
            // this.friendsList = res.friendsList
            // this.friendsListFilter = JSON.parse(JSON.stringify(this.friendsList))
        });
    };
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/report/report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _tripservice_service__WEBPACK_IMPORTED_MODULE_5__["TripserviceService"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme.component.html":
/*!********************************************!*\
  !*** ./src/app/theme/theme.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"loading\" *ngIf=\"setLoading\"></div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/theme/theme.component.scss":
/*!********************************************!*\
  !*** ./src/app/theme/theme.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RoZW1lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/theme.component.ts":
/*!******************************************!*\
  !*** ./src/app/theme/theme.component.ts ***!
  \******************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");



var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(_common) {
        this._common = _common;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setLoading = this._common.getShowloading();
        this.subscription = this._common.subscribeLoading().subscribe(function (setLoading) {
            console.log("setLoading", setLoading);
            _this.setLoading = setLoading.showLoading;
        });
    };
    ThemeComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    ThemeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme',
            template: __webpack_require__(/*! ./theme.component.html */ "./src/app/theme/theme.component.html"),
            styles: [__webpack_require__(/*! ./theme.component.scss */ "./src/app/theme/theme.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/app/trip/trip.component.html":
/*!******************************************!*\
  !*** ./src/app/trip/trip.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <p>Add Trips\n    <input type=\"button\" value=\"+\" (click)=\"editTrip();\">\n    <input type=\"button\" value=\"Manage Friends\" (click)=\"friendsPage()\">\n  </p>\n  <hr>\n\n  <p *ngIf=\"trips.length == 0\">No Trip Added Yet</p>\n\n  <div style=\"text-align: center;\" *ngIf=\"trips.length != 0\">\n    \n    <table width=\"100%\">\n      <thead>\n        <th>Name</th>\n        <th>Expense</th>\n        <th>Members</th>\n        <th>Cost</th>\n        <th>Action</th>\n      </thead>\n\n      <tbody *ngFor=\"let tripItem of trips\">\n        <td><a (click)=\"showTripDetails(tripItem)\">{{tripItem.tripName}}</a></td>\n        <td>{{tripItem?.tripExpense.length}}</td>\n        <td>{{tripItem?.members.length}}</td>\n        <td>{{tripItem?.totalTripExpenseCost}}</td>\n        <td>\n          <input *ngIf=\"userId == tripItem.creatorID\" type=\"button\" value=\"Edit Trip\" (click)=\"editTrip(tripItem)\">\n          <input *ngIf=\"userId == tripItem.creatorID\" type=\"button\" value=\"Delete Trip\" (click)=\"deleteTrip(tripItem)\">\n        </td>\n      </tbody>\n      \n    </table>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/trip/trip.component.scss":
/*!******************************************!*\
  !*** ./src/app/trip/trip.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyaXAvdHJpcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/trip/trip.component.ts":
/*!****************************************!*\
  !*** ./src/app/trip/trip.component.ts ***!
  \****************************************/
/*! exports provided: TripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripComponent", function() { return TripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tripservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tripservice.service */ "./src/app/tripservice.service.ts");
/* harmony import */ var _model_storageKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/storageKey */ "./src/app/model/storageKey.ts");






var TripComponent = /** @class */ (function () {
    function TripComponent(_common, router, _trip) {
        this._common = _common;
        this.router = router;
        this._trip = _trip;
    }
    TripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTripDetails();
        this._common.getLocalData(_model_storageKey__WEBPACK_IMPORTED_MODULE_5__["storeKey"].id).then(function (id) {
            _this.userId = id;
        });
    };
    //To Navigate to Add/Edit Trips Page.
    TripComponent.prototype.editTrip = function (tripItem) {
        this.router.navigate(tripItem ? ['addmodifytrip', tripItem.tripId] : ['addmodifytrip']);
    };
    //Navigate to Expense Page Where all expense of trips will be listed.
    TripComponent.prototype.showTripDetails = function (trip) {
        this.router.navigate(['expense', trip.tripId]);
    };
    //Navigate to Friends Page Where you can manage friends.
    TripComponent.prototype.friendsPage = function () {
        console.log("Navigate to friends page");
        this.router.navigate(['friends']);
    };
    TripComponent.prototype.deleteTrip = function (tripItem) {
        var _this = this;
        console.log("deleteTrip", tripItem);
        var tripData = {
            tripId: tripItem.tripId
        };
        this._trip.deleteTrip(tripData).subscribe(function (res) {
            console.log("deleteTrip_Api", res);
            _this.getTripDetails();
        });
    };
    // ----------------------------------------------------------------------------------------------------
    TripComponent.prototype.getTripDetails = function () {
        var _this = this;
        this._common.setLoading(true);
        var addTrip;
        this.trips = [];
        this._trip.getTripDetails().subscribe(function (res) {
            console.log("getTripDetails_API", res);
            res.result.filter(function (item) {
                addTrip = {
                    tripId: item._id,
                    tripName: item.tripName,
                    members: item.members,
                    totalTripExpenseCost: _this.calculateExpenseDetails(item),
                    tripExpense: item.tripExpense,
                    creatorID: item.creatorID
                };
                _this.trips.push(addTrip);
            });
            _this._common.setLoading(false);
        });
    };
    TripComponent.prototype.calculateExpenseDetails = function (tripItem) {
        var totalCost = 0;
        tripItem.tripExpense.filter(function (item) {
            console.log("calculateExpenseDetails", item);
            var num = item.tripDetails.expenseCost;
            totalCost = totalCost + parseFloat(num);
        });
        return totalCost;
    };
    TripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip',
            template: __webpack_require__(/*! ./trip.component.html */ "./src/app/trip/trip.component.html"),
            styles: [__webpack_require__(/*! ./trip.component.scss */ "./src/app/trip/trip.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _tripservice_service__WEBPACK_IMPORTED_MODULE_4__["TripserviceService"]])
    ], TripComponent);
    return TripComponent;
}());



/***/ }),

/***/ "./src/app/tripservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/tripservice.service.ts ***!
  \****************************************/
/*! exports provided: TripserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripserviceService", function() { return TripserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_apiLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/apiLinks */ "./src/app/model/apiLinks.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var TripserviceService = /** @class */ (function () {
    function TripserviceService(http) {
        this.http = http;
        // private domainHost: string = "http://localhost:3000"
        this.domainHost = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
        this.ApiConstantsData = _model_apiLinks__WEBPACK_IMPORTED_MODULE_2__["ApiConstants"];
        console.log("this.ApiConstantsData", this.ApiConstantsData);
    }
    //
    TripserviceService.prototype.getTripDetails = function () {
        return this.http.get(this.domainHost + this.ApiConstantsData.trip.getTripDetails);
    };
    //Friends List
    TripserviceService.prototype.getFriendsList = function (data) {
        return this.http.post(this.domainHost + this.ApiConstantsData.friends.getFriendsList, data);
    };
    TripserviceService.prototype.getTripMembersList = function (data) {
        return this.http.post(this.domainHost + this.ApiConstantsData.trip.getTripMembersDetails, data);
    };
    // Add New Trips
    TripserviceService.prototype.AddTrip = function (data) {
        return this.http.post(this.domainHost + this.ApiConstantsData.trip.AddTrip, data);
    };
    // Add New Trips
    TripserviceService.prototype.deleteTrip = function (data) {
        return this.http.post(this.domainHost + this.ApiConstantsData.trip.deleteTrip, data);
    };
    //getTripInfo
    TripserviceService.prototype.getTripInfo = function (data) {
        return this.http.post(this.domainHost + this.ApiConstantsData.expense.getTripInfo, data);
    };
    //addTripExpense
    TripserviceService.prototype.addTripExpense = function (data) {
        return this.http.post(this.domainHost + this.ApiConstantsData.expense.addTripExpense, data);
    };
    //deleteExpense
    TripserviceService.prototype.deleteExpense = function (data) {
        return this.http.post(this.domainHost + this.ApiConstantsData.expense.deleteExpense, data);
    };
    //Find Friends
    TripserviceService.prototype.findFriends = function (data) {
        return this.http.post(this.domainHost + this.ApiConstantsData.friends.findFriends, data);
    };
    //addTripExpense
    TripserviceService.prototype.manageFriends = function (data) {
        return this.http.post(this.domainHost + this.ApiConstantsData.friends.manageFriends, data);
    };
    TripserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TripserviceService);
    return TripserviceService;
}());



/***/ }),

/***/ "./src/app/userwisereport/userwisereport.component.html":
/*!**************************************************************!*\
  !*** ./src/app/userwisereport/userwisereport.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"button\" value=\"< Back\" (click)=\"backToReports()\">\n\n<p>{{trip?.tripName}} Expense UserWise Report of {{memberDetails?.name}}</p>\n<hr>\n\n\n<div style=\"text-align: center;\">\n  <!-- <p *ngFor=\"let member of membersReports\">\n    name : {{member.name}}\n  </p> -->\n  <table width=\"100%\">\n    <thead>\n      <th>Expense Name</th>\n      <th>Paid</th>\n      <th>Expense Cost</th>\n      <th>Pending</th>\n    </thead>\n    <tbody *ngFor=\"let user of userWise\">\n      <!-- <td><a routerLink=\"/userwise/{{tripId}}/{{member.memberId}}\">{{member.name}}</a></td> -->\n      <td><a (click)=\"navigateToExpense(user.expenseId)\">{{user?.expenseName}}</a></td>\n      <td>{{user?.paidAmount | number:'1.0-2'}}</td>\n      <td>{{user?.costOfExpense | number:'1.0-2'}}</td>\n      <td [ngClass]=\"user?.pendingAmount > 0 ? 'green_color' : 'red_color'\">{{user?.pendingAmount | number:'1.0-2'}}\n      </td>\n    </tbody>\n    <thead>\n      <th><hr>Total</th>\n      <th><hr>{{footerInfo?.amountpaid | number:'1.0-2' }}</th>\n      <th><hr>{{footerInfo?.amountSpend | number:'1.0-2' }}</th>\n      <th [ngClass]=\"footerInfo.amountBalance > 0 ? 'green_color' : 'red_color'\"><hr>{{footerInfo?.amountBalance | number:'1.0-2' }}</th>\n    </thead>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/userwisereport/userwisereport.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/userwisereport/userwisereport.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJ3aXNlcmVwb3J0L3VzZXJ3aXNlcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/userwisereport/userwisereport.component.ts":
/*!************************************************************!*\
  !*** ./src/app/userwisereport/userwisereport.component.ts ***!
  \************************************************************/
/*! exports provided: UserwisereportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserwisereportComponent", function() { return UserwisereportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tripservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tripservice.service */ "./src/app/tripservice.service.ts");






var UserwisereportComponent = /** @class */ (function () {
    function UserwisereportComponent(_common, route, router, _trip) {
        this._common = _common;
        this.route = route;
        this.router = router;
        this._trip = _trip;
        // trip: TripModel
        this.userWise = [];
        this.footerInfo = {
            amountpaid: 0,
            amountSpend: 0,
            amountBalance: 0
        };
    }
    UserwisereportComponent.prototype.ngOnInit = function () {
        this.tripId = this.route.snapshot.paramMap.get('tripId');
        this.memberId = this.route.snapshot.paramMap.get('memberId');
        console.log("_common service", this._common.value, this.tripId);
        this.getTripInfo(this.tripId);
        // this.trip = this._common.getExpense(this.tripId)
        // console.log("this.trip", this.trip)
        // this.memberDetails = this.getMemberInfo()
        // this.calculateUserWise()
    };
    UserwisereportComponent.prototype.calculateUserWise = function () {
        var _this = this;
        this.trip.tripExpense.filter(function (item) {
            // console.log("calculateUserWise",item)
            var index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](item.tripDetails.members, function (o) {
                return o._id == _this.memberId;
            });
            console.log("calculateUserWise", _this.memberId, item, index, (index > -1));
            if (index > -1) {
                var userWiseData = {
                    expenseId: item._id,
                    expenseName: item.name,
                    paidAmount: item.tripDetails.members[index].paidamount,
                    pendingAmount: item.tripDetails.members[index].finalAmount,
                    costOfExpense: item.tripDetails.expenseCost
                };
                var pendingAmount = userWiseData.pendingAmount;
                var paidAmount = userWiseData.paidAmount;
                var costOfExpense = userWiseData.costOfExpense;
                _this.footerInfo.amountBalance = _this.footerInfo.amountBalance + parseFloat(pendingAmount);
                _this.footerInfo.amountpaid = _this.footerInfo.amountpaid + parseFloat(paidAmount);
                _this.footerInfo.amountSpend = _this.footerInfo.amountSpend + parseFloat(costOfExpense);
                _this.userWise.push(userWiseData);
            }
        });
    };
    UserwisereportComponent.prototype.backToReports = function () {
        this.router.navigate(['report', this.tripId]);
    };
    UserwisereportComponent.prototype.navigateToExpense = function (expenseId) {
        this._common.islastPageReports.status = true;
        this._common.islastPageReports.memberId = this.memberId;
        this.router.navigate(['addmodifyexpense', this.tripId, expenseId]);
    };
    UserwisereportComponent.prototype.getMemberInfo = function () {
        var _this = this;
        var memberData = this.trip.members.filter(function (item) { return item._id == _this.memberId; });
        console.log("getMemberInfo", memberData);
        return memberData[0];
    };
    UserwisereportComponent.prototype.getTripInfo = function (tripId) {
        var _this = this;
        var data = { tripId: tripId };
        this._common.setLoading(true);
        this._trip.getTripInfo(data).subscribe(function (res) {
            _this._common.setLoading(false);
            console.log("getTripInfo", res);
            _this.trip = res.result;
            _this.memberDetails = _this.getMemberInfo();
            _this.calculateUserWise();
            // this.calculateReport()
        });
    };
    UserwisereportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userwisereport',
            template: __webpack_require__(/*! ./userwisereport.component.html */ "./src/app/userwisereport/userwisereport.component.html"),
            styles: [__webpack_require__(/*! ./userwisereport.component.scss */ "./src/app/userwisereport/userwisereport.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _tripservice_service__WEBPACK_IMPORTED_MODULE_5__["TripserviceService"]])
    ], UserwisereportComponent);
    return UserwisereportComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    // apiBaseUrl : 'https://trip-expense-manager-api.herokuapp.com',
    apiBaseUrl: "http://localhost:3000",
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Project files\tripExpense\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map