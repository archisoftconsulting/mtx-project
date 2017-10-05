(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.managetradex = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var TranslateComponent = (function () {
    function TranslateComponent() {
    }
    TranslateComponent.prototype.ngOnInit = function () {
    };
    return TranslateComponent;
}());
TranslateComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'managetradex-translate',
                templateUrl: './translate.component.html',
                styleUrls: ['./translate.component.css']
            },] },
];
/** @nocollapse */
TranslateComponent.ctorParameters = function () { return []; };

var LANG_EN_NAME = 'en';
var LANG_EN_TRANS = {
    // *** LOGIN AND DASHBOARD *** //
    'sign in': 'Sign In',
    'user id': 'User ID',
    'password': 'Password',
    'forgot password': 'Forgot Password',
    'login': 'Login',
    'userid or password is incorrect': 'User ID or password is incorrect',
    'username is required': 'User ID is required',
    'password is required': 'Password is required',
    'page not found': 'Page Not Found!',
    // *** HEADER AND DASHBOARD *** //
    'welcome back': 'Welcome back',
    'terms of use': 'Term Of Use',
    'privacy policy': 'Privacy Policy',
    'terms and conditions': 'Term & Condition',
    'all rights reserved': 'All rights reserved',
    'help and support': 'Help & Support',
    'your last login was on': 'Your last login was on Monday, 30 January 2017 at 17:15:38',
    'please enter your search': 'Please enter your search',
    'search': 'Search',
    'tickets': 'Tickets',
    'reports': 'Reports',
    'buyers profile': 'Buyer\'s Profile',
    'my account': 'My Account',
    'my activity': 'My Activity',
    'logout': 'Logout',
    'notifications': 'Notifications',
    'mark as read': 'Mark as read',
    'view all': 'View all',
    'recent transaction': 'Recent Transaction',
    'saved Drafts': 'Saved Drafts',
    // *** SAMPLE *** //
    'user name': 'User Name',
    'first name': 'First Name',
    'last name': 'Last Name',
    'no data found': 'No data found...',
    // *** MARKETING *** //
    'marketing': 'Marketing',
    'supplier': 'Supplier',
    'buyer': 'Buyer',
    'login as': 'Login as',
    // *** SUPPLIER LOGIN *** //
    'need an account': 'Need an account',
    'create account': 'Create account',
    'user id is required': 'User ID is required',
    //'password is required': 'Password is required',	
    // *** BUYER"S DASHBOARD *** //
    'saved drafts': 'Saved Drafts',
    'view all drafts': 'View All Drafts',
    'invoice received': 'Invoice Received',
    'recent transactions': 'Recent Transactions',
    'account': 'Account',
    'po no': 'PO No',
    'vendor': 'Vendor',
    'status': 'Status',
    'accepted': 'Accepted',
    'rejected': 'Rejected',
    'delivered': 'Delivered',
    'view all transactions': 'View All Transactions',
    'purchase orders overview': 'Purchase Orders Overview',
    'pending': 'Pending',
    'draft': 'Draft',
    'view all invoice': 'View All Invoice',
    'create': 'Create',
    'dashboard information and statistics': 'Dashboard Information and Statistics',
    'invoices overview': 'Invoices Overview',
    // *** SIDE MENU *** //
    'purchase order': 'Purchase Order',
    'received invoices': 'Received Invoices',
    'user management': 'User Management',
    'network': 'Network',
    'company profile': 'Company Profile',
    'ask our expert': 'Ask Our Expert',
    'dashboard': 'Dashboard',
    'business settings': 'Business Settings',
    'add user': 'Add User',
    'switch administrator': 'Switch Administrator',
    'invoices': 'Invoices',
    'create invoice': 'Create Invoice',
    'create credit note': 'Create Credit Note',
    'received purchase order': 'Received Purchase Order',
    'catalogue': 'Catalogue',
    'credit management': 'Credit Management',
    'aging summary report': 'Aging Summary Report',
    'credit usage report': 'Credit Usage Report',
    'invoice summary report': 'Invoice Summary Report',
    'purchase order summary report': 'Purchase Order Summary Report',
    'create purchase order': 'Create Purchase Order',
    'create debit note': 'Create Debit Note',
    // *** COMPANY PROFILE *** //
    'general info': 'General Info',
    'contact person': 'Contact Person',
    'documents': 'Documents',
    'client identifier': 'Client Identifier',
    'company name': 'Company Name',
    'business registration no': 'Business Registration No.',
    'business nature': 'Business Nature',
    'add business nature': 'Add Business Nature',
    'tax reg no': 'Tax Reg. No.',
    'business address': 'Business Address',
    'country': 'Country',
    'address line 1': 'Address Line 1',
    'address line 2': 'Address Line 2',
    'city/town': 'City/Town',
    'state': 'State',
    'poscode': 'Poscode',
    'tel no': 'Tel. No.',
    'fax no': 'Fax No.',
    'company email': 'Company Email',
    'website': 'Website',
    'billing address': 'Billing Address',
    'different from business address': 'Different from Business Address',
    'edit': 'Edit',
    'save': 'Save',
};

var LANG_MS_NAME = 'ms';
var LANG_MS_TRANS = {
    // *** LOGIN AND DASHBOARD *** //
    'sign in': 'Log Masuk',
    'user id': 'ID Pengguna',
    'password': 'Kata Laluan',
    'forgot password': 'Lupa Kata Laluan',
    'login': 'Log Masuk',
    'userid or password is incorrect': 'ID Pengguna atau Kata Laluan tidak sah',
    'username is required': 'ID Pengguna diperlukan',
    'password is required': 'Kata Laluan diperlukan',
    'page not found': 'Halaman Tidak Dijumpai!',
    // *** HEADER AND DASHBOARD *** //
    'welcome back': 'Selamat kembali',
    'terms of use': 'Terma Pengguna',
    'privacy policy': 'Dasar Privasi',
    'terms and conditions': 'Terma & Syarat',
    'all rights reserved': 'Hakcipta terpelihara',
    'help and support': 'Bantuan & Sokongan',
    'your last login was on': 'Log masuk terakhir anda adalah pada Isnin, 30 Januari 2017 pukul 17:15:38',
    'please enter your search': 'Sila masukkan carian anda',
    'search': 'Cari',
    'tickets': 'Tiket',
    'reports': 'Laporan',
    'buyers profile': 'Profil Pembeli',
    'my account': 'Akaun Saya',
    'my activity': 'Aktiviti Saya',
    'logout': 'Log Keluar',
    'notifications': 'Notifikasi',
    'mark as read': 'Tanda sebagai telah dibaca',
    'view all': 'Lihat semua',
    'recent transaction': 'Transaksi Terkini',
    'saved Drafts': 'Draf Yang Disimpan',
    // *** SAMPLE *** //
    'user name': 'Nama Pengguna',
    'first name': 'Nama Pertama',
    'last name': 'Nama Terakhir',
    'no data found': 'Tiada data yang dijumpai...',
    // *** MARKETING *** //
    'marketing': 'Pemasaran',
    'supplier': 'Pembekal',
    'buyer': 'Pembeli',
    'login as': 'Log masuk sebagai',
    // *** SUPPLIER LOGIN *** //
    'need an account': 'Perlukan akaun',
    'create account': 'Cipta akaun',
    'user id is required': 'ID Pengguna diperlukan',
    //'password is required': 'Kata Laluan diperlukan',
    // *** BUYER"S DASHBOARD *** //
    'saved drafts': 'Draf Yang Disimpan',
    'view all drafts': 'Lihat Semua Draf',
    'invoice received': 'Invois Yang Diterima',
    'recent transactions': 'Transaksi Terkini',
    'account': 'Akaun',
    'po no': 'No Pesanan Pembelian',
    'vendor': 'Vendor',
    'status': 'Status',
    'accepted': 'Diterima',
    'rejected': 'Ditolak',
    'delivered': 'Dihantar',
    'view all transactions': 'Lihat Semua Transaksi',
    'purchase orders overview': 'Gambaran Keseluruhan Pesanan Pembelian',
    'pending': 'Belum Selesai',
    'draft': 'Draf',
    'view all invoice': 'Lihat Semua Invois',
    'create': 'Wujudkan',
    'dashboard information and statistics': 'Maklumat dan Statistik Papan Pemuka',
    'invoices overview': 'Gambaran Keseluruhan Invois',
    // *** SIDE MENU *** //
    'purchase order': 'Pesanan Pembelian',
    'received invoices': 'Invois Diterima',
    'user management': 'Pengurusan Pengguna',
    'network': 'Rangkaian',
    'company profile': 'Profil Syarikat',
    'ask our expert': 'Tanya Pakar Kami',
    'dashboard': 'Papan Pemuka',
    'business settings': 'Tetapan Perniagaan',
    'add user': 'Tambah Pengguna',
    'switch administrator': 'Tukar Pentadbir',
    'invoices': 'Invois',
    'create invoice': 'Cipta Invois',
    'create credit note': 'Cipta Nota Kredit',
    'received purchase order': 'Pesanan Pembelian Diterima',
    'catalogue': 'Katalog',
    'credit management': 'Pengurusan Kredit',
    'aging summary report': 'Laporan Ringkasan Penuaan',
    'credit usage report': 'Laporan Penggunaan Kredit',
    'invoice summary report': 'Laporan Ringkasan Invois',
    'purchase order summary report': 'Laporan Ringkasan Pesanan Pembelian',
    'create purchase order': 'Cipta Pesanan Pembelian',
    'create debit note': 'Cipta Nota Debit',
    // *** COMPANY PROFILE *** //
    'general info': 'Maklumat Am',
    'contact person': 'Orang Perhubungan',
    'documents': 'Dokumen',
    'client identifier': 'Pengenalpastian Pelanggan',
    'company name': 'Nama Syarikat',
    'business registration no': 'No. Pendaftaran Syarikat',
    'business nature': 'Jenis Perniagaan',
    'add business nature': 'Tambah Jenis Perniagaan',
    'tax reg no': 'No. Pendaftaran Cukai',
    'business address': 'Alamat Perniagaan',
    'country': 'Negara',
    'address line 1': 'Alamat Baris 1',
    'address line 2': 'Alamat Baris 2',
    'city/town': 'Bandar/Daerah',
    'state': 'Negeri',
    'poscode': 'Poskod',
    'tel no': 'No. Tel.',
    'fax no': 'No. Faks',
    'company email': 'Emel Syarikat',
    'website': 'Laman Web',
    'billing address': 'Alamat Bil',
    'different from business address': 'Lain daripada Alamat Perniagaan',
    'edit': 'Sunting',
    'save': 'Simpan',
};

var LANG_ZH_NAME = 'zh';
var LANG_ZH_TRANS = {
    // *** LOGIN AND DASHBOARD *** //
    'sign in': '签到',
    'user id': '用户名',
    'password': '密码',
    'forgot password': '忘记密码',
    'login': '登录',
    'userid or password is incorrect': '用户名或密码不正确',
    'username is required': '用户ID是必需的',
    'password is required': '密码是必需的',
    'page not found': '找不到网页!',
    // *** HEADER AND DASHBOARD *** //
    'welcome back': '欢迎回来',
    'terms of use': '使用期限',
    'privacy policy': '隐私政策',
    'terms and conditions': '条件和条件',
    'all rights reserved': '版权所有',
    'help and support': '帮助和支持',
    'your last login was on': '您最后一次登录是在2017年1月30日星期一17:15:38',
    'please enter your search': '请输入您的搜索',
    'search': '搜索',
    'tickets': '门票',
    'reports': '报告',
    'buyers profile': '买家资料',
    'my account': '我的帐户',
    'my activity': '我的活动',
    'logout': '登出',
    'notifications': '通知',
    'mark as read': '标记为已读',
    'view all': '查看全部',
    'recent transaction': '最近交易',
    'saved Drafts': '保存的草稿',
    // *** SAMPLE *** //
    'user name': '用户名',
    'first name': '名字',
    'last name': '姓',
    'no data found': '没有找到数据',
    // *** MARKETING *** //
    'marketing': '营销',
    'supplier': '供应商',
    'buyer': '买方',
    'login as': '登录为',
    // *** SUPPLIER LOGIN *** //
    'need an account': '需要一个帐户',
    'create account': '创建帐号',
    'user id is required': '需要用户ID',
    //'password is required': '密码是必需的',
    // *** BUYER"S DASHBOARD *** //
    'saved drafts': '保存草稿',
    'view all drafts': '查看所有草稿',
    'invoice received': '发票收据',
    'recent transactions': '最近交易',
    'account': '帐户',
    'po no': '采购订单号',
    'vendor': '供应商',
    'status': '状态',
    'accepted': '公认',
    'rejected': '拒绝',
    'delivered': '交付',
    'view all transactions': '查看所有交易',
    'purchase orders overview': '采购订单概述',
    'pending': '有待',
    'draft': '草案',
    'view all invoice': '查看所有发票',
    'create': '创建',
    'dashboard information and statistics': '仪表板信息和统计',
    'invoices overview': '发票概述',
    // *** SIDE MENU *** //
    'purchase order': '采购订单',
    'received invoices': '收到发票',
    'user management': '用户管理',
    'network': '网络',
    'company profile': '公司简介',
    'ask our expert': '问我们的专家',
    'dashboard': '仪表板',
    'business settings': '业务设置',
    'add user': '添加用户',
    'switch administrator': '切换管理员',
    'invoices': '发票',
    'create invoice': '创建发票',
    'create credit note': '创建信用记录',
    'received purchase order': '收到采购订单',
    'catalogue': '目录',
    'credit management': '信用管理',
    'aging summary report': '老化总结报告',
    'credit usage report': '信用使用报告',
    'invoice summary report': '发票汇总报表',
    'purchase order summary report': '采购订单摘要报告',
    'create purchase order': '创建采购订单',
    'create debit note': '创建借记单',
    // *** COMPANY PROFILE *** //
    'general info': '基本信息',
    'contact person': '联系人',
    'documents': '文件',
    'client identifier': '客户端标识符',
    'company name': '公司名',
    'business registration no': '商业登记号码',
    'business nature': '业务性质',
    'add business nature': '添加业务性质',
    'tag reg no': '税务登记号码',
    'business address': '业务地址',
    'country': 'Country',
    'address line 1': '地址栏1',
    'address line 2': '地址栏2',
    'city/town': '市/县',
    'state': '州',
    'poscode': '邮政编码',
    'tel no': '电话号码',
    'fax no': '传真号',
    'company email': '公司电子邮件',
    'website': '网站',
    'billing address': '帐单地址',
    'different from business address': '与商务地址不同',
    'edit': '编辑',
    'save': '保存',
};

// Import translations
// Translation token
var TRANSLATIONS = new core.OpaqueToken('translations');
// All translations
var dictionary = (_a = {},
    _a[LANG_EN_NAME] = LANG_EN_TRANS,
    _a[LANG_MS_NAME] = LANG_MS_TRANS,
    _a[LANG_ZH_NAME] = LANG_ZH_TRANS,
    _a);
// Providers
var TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
var _a;

var TranslateService = (function () {
    // Inject our translations
    function TranslateService(_translations) {
        this._translations = _translations;
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            return this._currentLang;
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.use = function (lang) {
        // Set current language
        this._currentLang = lang;
    };
    TranslateService.prototype.translate = function (key) {
        // Private perform translation
        var translation = key;
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        return translation;
    };
    TranslateService.prototype.instant = function (key) {
        // Call translation
        return this.translate(key);
    };
    return TranslateService;
}());
TranslateService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
TranslateService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [TRANSLATIONS,] },] },
]; };

var TranslatePipe = (function () {
    function TranslatePipe(_translate) {
        this._translate = _translate;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (!value)
            return;
        return this._translate.instant(value);
    };
    return TranslatePipe;
}());
TranslatePipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'translate',
                pure: false
            },] },
];
/** @nocollapse */
TranslatePipe.ctorParameters = function () { return [
    { type: TranslateService, },
]; };

var ManagetradexModule = (function () {
    function ManagetradexModule() {
    }
    ManagetradexModule.forRoot = function () {
        return {
            ngModule: ManagetradexModule,
            providers: [
                TranslateService
            ]
        };
    };
    return ManagetradexModule;
}());
ManagetradexModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    TranslateComponent,
                    TranslatePipe
                ],
                exports: [
                    TranslateComponent,
                    TranslatePipe
                ],
                providers: [
                    TranslateService,
                    TRANSLATION_PROVIDERS
                ]
            },] },
];
/** @nocollapse */
ManagetradexModule.ctorParameters = function () { return []; };

exports.ManagetradexModule = ManagetradexModule;
exports.TranslateService = TranslateService;
exports.TranslatePipe = TranslatePipe;
exports.TRANSLATION_PROVIDERS = TRANSLATION_PROVIDERS;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=managetradex.umd.js.map
